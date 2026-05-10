import type { VoiceConfig } from "@/lib/language-packs";

type SpeakRequest = {
  text: string;
  assetKey: string;
  voice: VoiceConfig;
  speechLang: string;
};

let activeAudio: HTMLAudioElement | null = null;

export function canUseSpeechSynthesis(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function canUseHtmlAudio(): boolean {
  return typeof Audio !== "undefined";
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
): Promise<void> {
  if (!canUseHtmlAudio()) {
    throw new Error("HTML audio is not available in this browser.");
  }

  const fileExtension = voice.extension ?? "mp3";
  const audio = new Audio(`${voice.basePath}/${assetKey}.${fileExtension}`);

  activeAudio = audio;
  await audio.play();
}

export async function speakWithVoice(request: SpeakRequest): Promise<void> {
  stopVoicePlayback();

  if (request.voice.type === "speech-synthesis") {
    speakWithSpeechSynthesis(request.text, request.speechLang, request.voice);
    return;
  }

  try {
    await speakWithAudioFiles(request.assetKey, request.voice);
  } catch (error) {
    if (request.voice.fallback) {
      speakWithSpeechSynthesis(request.text, request.speechLang, request.voice.fallback);
      return;
    }

    throw error;
  }
}
