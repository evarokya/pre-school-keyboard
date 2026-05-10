import { getDisplayText } from "./getDisplayText";
import { getSpeechText } from "./getSpeechText";
import {
  findLanguageKeyByValue,
  type LanguageKey,
  type LanguagePack,
  type TextDirection
} from "./language-packs";

export type ResolvedLanguageKey = {
  value: string;
  label: string;
  displayText: string;
  speechText: string;
  speechLang: string;
  textDirection: TextDirection;
  assetKey: string;
};

const COMMON_SPECIAL_KEYS = new Set([
  " ",
  "Enter",
  "Backspace",
  "Escape",
  "Shift",
  "Tab",
  "Control",
  "Alt",
  "Meta",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "CapsLock",
  "Delete"
]);

const ASSET_KEY_OVERRIDES: Record<string, string> = {
  " ": "space",
  Enter: "enter",
  Backspace: "backspace",
  Escape: "escape",
  Shift: "shift",
  Tab: "tab",
  Control: "control",
  Alt: "alt",
  Meta: "command",
  ArrowUp: "up-arrow",
  ArrowDown: "down-arrow",
  ArrowLeft: "left-arrow",
  ArrowRight: "right-arrow",
  CapsLock: "caps-lock",
  Delete: "delete",
  ".": "dot",
  ",": "comma",
  ";": "semicolon",
  ":": "colon",
  "/": "slash",
  "\\": "backslash",
  "-": "dash",
  "_": "underscore",
  "=": "equals",
  "+": "plus",
  "'": "apostrophe",
  "\"": "quote",
  "[": "left-bracket",
  "]": "right-bracket",
  "{": "left-brace",
  "}": "right-brace",
  "!": "exclamation-mark",
  "?": "question-mark"
};

function hasArabicScript(value: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(value);
}

function hasBengaliScript(value: string): boolean {
  return /[\u0980-\u09FF]/.test(value);
}

function detectSpeechLang(value: string, fallbackLang: string): string {
  if (hasArabicScript(value)) {
    return "ar";
  }

  if (hasBengaliScript(value)) {
    return "bn-BD";
  }

  return fallbackLang;
}

function detectDirection(value: string, fallbackDirection: TextDirection): TextDirection {
  if (hasArabicScript(value)) {
    return "rtl";
  }

  if (hasBengaliScript(value)) {
    return "ltr";
  }

  return fallbackDirection;
}

function toAssetKey(value: string): string {
  if (value in ASSET_KEY_OVERRIDES) {
    return ASSET_KEY_OVERRIDES[value];
  }

  if (/^[a-z0-9]$/i.test(value)) {
    return value.toLowerCase();
  }

  return Array.from(value)
    .map((character) => character.codePointAt(0)?.toString(16) ?? "key")
    .join("-");
}

function isSupportedGenericKey(value: string): boolean {
  return value.length === 1 || COMMON_SPECIAL_KEYS.has(value);
}

function getDefaultLang(languagePack: LanguagePack): string {
  return languagePack.voice.type === "speech-synthesis"
    ? languagePack.voice.lang
    : languagePack.voice.fallback?.lang ?? "en-US";
}

function resolveFromDefinition(
  languagePack: LanguagePack,
  languageKey: LanguageKey
): ResolvedLanguageKey {
  return {
    value: languageKey.value,
    label: languageKey.label ?? languageKey.displayText ?? getDisplayText(languageKey.value),
    displayText: languageKey.displayText ?? languageKey.label ?? getDisplayText(languageKey.value),
    speechText: languageKey.speechText ?? getSpeechText(languageKey.value),
    speechLang: languageKey.speechLang ?? getDefaultLang(languagePack),
    textDirection: languageKey.textDirection ?? languagePack.direction,
    assetKey: languageKey.assetKey ?? toAssetKey(languageKey.value)
  };
}

export function resolveVirtualLanguageKey(
  languagePack: LanguagePack,
  languageKey: LanguageKey
): ResolvedLanguageKey {
  return resolveFromDefinition(languagePack, languageKey);
}

export function resolveLanguageInput(
  languagePack: LanguagePack,
  value: string
): ResolvedLanguageKey | null {
  const packSpecificKey = findLanguageKeyByValue(languagePack, value);

  if (packSpecificKey) {
    return resolveFromDefinition(languagePack, packSpecificKey);
  }

  if (!languagePack.allowGenericInput) {
    return null;
  }

  if (!isSupportedGenericKey(value)) {
    return null;
  }

  return {
    value,
    label: getDisplayText(value),
    displayText: getDisplayText(value),
    speechText: getSpeechText(value),
    speechLang: detectSpeechLang(value, "en-US"),
    textDirection: detectDirection(value, languagePack.direction),
    assetKey: toAssetKey(value)
  };
}
