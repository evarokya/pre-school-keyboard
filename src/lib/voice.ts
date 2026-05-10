import type {
  AudioFileExtension,
  VoiceConfig
} from "@/lib/language-packs";

type SpeakRequest = {
  text: string;
  assetKey: string;
  voice: VoiceConfig;
  speechLang: string;
};

let activeAudio: HTMLAudioElement | null = null;
const audioManifestCache = new Map<string, Promise<Set<string>>>();

type AudioSource = {
  basePath: string;
  extension?: AudioFileExtension;
  manifestPath?: string;
};

export function canUseSpeechSynthesis(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function canUseHtmlAudio(): boolean {
  return typeof Audio !== "undefined";
}

async function loadAudioManifest(
  source: AudioSource
): Promise<Set<string>> {
  if (!source.manifestPath || typeof fetch === "undefined") {
    return new Set();
  }

  const cachedManifest = audioManifestCache.get(source.manifestPath);

  if (cachedManifest) {
    return cachedManifest;
  }

  const manifestPromise = fetch(source.manifestPath, { cache: "no-store" })
    .then(async (response) => {
      if (!response.ok) {
        return new Set<string>();
      }

      const manifest = (await response.json()) as { assetKeys?: unknown };

      if (!Array.isArray(manifest.assetKeys)) {
        return new Set<string>();
      }

      return new Set(
        manifest.assetKeys.filter((assetKey): assetKey is string => typeof assetKey === "string")
      );
    })
    .catch(() => new Set<string>());

  audioManifestCache.set(source.manifestPath, manifestPromise);

  return manifestPromise;
}

function getAudioUrl(source: AudioSource, assetKey: string): string {
  const fileExtension = source.extension ?? "mp3";

  return `${source.basePath}/${assetKey}.${fileExtension}`;
}

function getAudioSources(
  voice: Extract<VoiceConfig, { type: "audio-files" }>
): AudioSource[] {
  return [
    {
      basePath: voice.basePath,
      extension: voice.extension,
      manifestPath: voice.manifestPath
    },
    ...(voice.additionalSources ?? [])
  ];
}

export function isVoicePlaybackAvailable(voice: VoiceConfig): boolean {
  if (voice.type === "speech-synthesis") {
    return canUseSpeechSynthesis();
  }

  return canUseHtmlAudio() || Boolean(voice.fallback && canUseSpeechSynthesis());
}

export function stopVoicePlayback(): void {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }

  if (canUseSpeechSynthesis()) {
    window.speechSynthesis.cancel();
  }
}

function speakWithSpeechSynthesis(
  text: string,
  lang: string,
  voice: Extract<VoiceConfig, { type: "speech-synthesis" }>
): void {
  if (!canUseSpeechSynthesis()) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = voice.rate ?? 1;
  utterance.pitch = voice.pitch ?? 1;
  utterance.volume = voice.volume ?? 1;

  window.speechSynthesis.speak(utterance);
}

async function speakWithAudioFiles(
  assetKey: string,
  voice: Extract<VoiceConfig, { type: "audio-files" }>
): Promise<boolean> {
  if (!canUseHtmlAudio()) {
    throw new Error("HTML audio is not available in this browser.");
  }

  for (const source of getAudioSources(voice)) {
    const availableAssetKeys = await loadAudioManifest(source);

    if (source.manifestPath && !availableAssetKeys.has(assetKey)) {
      continue;
    }

    const audioUrl = getAudioUrl(source, assetKey);

    const audio = new Audio(audioUrl);

    activeAudio = audio;

    try {
      await audio.play();
      return true;
    } catch {
      activeAudio = null;
    }
  }

  return false;
}

export async function speakWithVoice(request: SpeakRequest): Promise<void> {
  stopVoicePlayback();

  if (request.voice.type === "speech-synthesis") {
    speakWithSpeechSynthesis(request.text, request.speechLang, request.voice);
    return;
  }

  try {
    const didPlayAudio = await speakWithAudioFiles(request.assetKey, request.voice);

    if (!didPlayAudio && request.voice.fallback) {
      speakWithSpeechSynthesis(request.text, request.speechLang, request.voice.fallback);
    }
  } catch (error) {
    if (request.voice.fallback) {
      speakWithSpeechSynthesis(request.text, request.speechLang, request.voice.fallback);
      return;
    }

    throw error;
  }
}
