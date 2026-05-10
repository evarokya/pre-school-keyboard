import type { LanguagePackId, TextDirection } from "./language-packs";

export type LearningMode = "letters" | "computer" | "colors";

export type ColorOptionId =
  | "red"
  | "blue"
  | "yellow"
  | "green"
  | "orange"
  | "purple"
  | "pink"
  | "brown"
  | "teal"
  | "mint"
  | "white"
  | "gray"
  | "peach";

type LearningCopyLanguage = "english" | "arabic" | "bengali";

type LearningModeOption = {
  id: LearningMode;
  label: string;
  description: string;
};

type LearningCopy = {
  modeLabels: Record<LearningMode, string>;
  colorPrompt: string;
  colorHint: string;
};

type LocalizedColorCopy = {
  label: string;
  speechText: string;
  textDirection: TextDirection;
};

type ColorDefinition = {
  id: ColorOptionId;
  swatch: string;
  ring: string;
  labelTextColor: string;
  copy: Record<LearningCopyLanguage, LocalizedColorCopy>;
};

export type ResolvedColorOption = {
  id: ColorOptionId;
  swatch: string;
  ring: string;
  labelTextColor: string;
  assetKey: string;
  label: string;
  speechText: string;
  textDirection: TextDirection;
};

export const LEARNING_MODE_OPTIONS: readonly LearningModeOption[] = [
  {
    id: "letters",
    label: "Letters",
    description: "Stay focused on alphabet letters and their sounds."
  },
  {
    id: "computer",
    label: "Computer",
    description: "Practice a real keyboard with fun floating key feedback."
  },
  {
    id: "colors",
    label: "Colors",
    description: "Tap a color strip and hear the color name."
  }
] as const;

const LEARNING_COPY: Record<LearningCopyLanguage, LearningCopy> = {
  english: {
    modeLabels: {
      letters: "Letters",
      computer: "Computer",
      colors: "Colors"
    },
    colorPrompt: "Tap a color to hear its name.",
    colorHint: "Pick a color button below and the app will say the color out loud."
  },
  arabic: {
    modeLabels: {
      letters: "حروف",
      computer: "كمبيوتر",
      colors: "ألوان"
    },
    colorPrompt: "اضغط على لون لسماع اسمه.",
    colorHint: "اختر لونًا من الشريط في الأسفل وسيقول التطبيق اسم اللون بصوت واضح."
  },
  bengali: {
    modeLabels: {
      letters: "অক্ষর",
      computer: "কম্পিউটার",
      colors: "রং"
    },
    colorPrompt: "একটি রঙে ট্যাপ করো, নামটি শোনো।",
    colorHint: "নিচের রঙের বাটনে ট্যাপ করলে অ্যাপটি রঙের নাম বলে দেবে।"
  }
};

const COLOR_OPTIONS: readonly ColorDefinition[] = [
  {
    id: "red",
    swatch: "#f26c7c",
    ring: "#dc4f66",
    labelTextColor: "#7f2233",
    copy: {
      english: { label: "Red", speechText: "red", textDirection: "ltr" },
      arabic: { label: "أحمر", speechText: "أحمر", textDirection: "rtl" },
      bengali: { label: "লাল", speechText: "লাল", textDirection: "ltr" }
    }
  },
  {
    id: "blue",
    swatch: "#6fb8ff",
    ring: "#4a8fda",
    labelTextColor: "#18456f",
    copy: {
      english: { label: "Blue", speechText: "blue", textDirection: "ltr" },
      arabic: { label: "أزرق", speechText: "أزرق", textDirection: "rtl" },
      bengali: { label: "নীল", speechText: "নীল", textDirection: "ltr" }
    }
  },
  {
    id: "yellow",
    swatch: "#ffe26c",
    ring: "#e0bb3c",
    labelTextColor: "#735c09",
    copy: {
      english: { label: "Yellow", speechText: "yellow", textDirection: "ltr" },
      arabic: { label: "أصفر", speechText: "أصفر", textDirection: "rtl" },
      bengali: { label: "হলুদ", speechText: "হলুদ", textDirection: "ltr" }
    }
  },
  {
    id: "green",
    swatch: "#7fd78e",
    ring: "#56b369",
    labelTextColor: "#245231",
    copy: {
      english: { label: "Green", speechText: "green", textDirection: "ltr" },
      arabic: { label: "أخضر", speechText: "أخضر", textDirection: "rtl" },
      bengali: { label: "সবুজ", speechText: "সবুজ", textDirection: "ltr" }
    }
  },
  {
    id: "orange",
    swatch: "#ffb36a",
    ring: "#e38c39",
    labelTextColor: "#7a4212",
    copy: {
      english: { label: "Orange", speechText: "orange", textDirection: "ltr" },
      arabic: { label: "برتقالي", speechText: "برتقالي", textDirection: "rtl" },
      bengali: { label: "কমলা", speechText: "কমলা", textDirection: "ltr" }
    }
  },
  {
    id: "purple",
    swatch: "#b691ff",
    ring: "#8f68d6",
    labelTextColor: "#4b2c84",
    copy: {
      english: { label: "Purple", speechText: "purple", textDirection: "ltr" },
      arabic: { label: "بنفسجي", speechText: "بنفسجي", textDirection: "rtl" },
      bengali: { label: "বেগুনি", speechText: "বেগুনি", textDirection: "ltr" }
    }
  },
  {
    id: "pink",
    swatch: "#ff9dc0",
    ring: "#df7399",
    labelTextColor: "#7f2a4b",
    copy: {
      english: { label: "Pink", speechText: "pink", textDirection: "ltr" },
      arabic: { label: "وردي", speechText: "وردي", textDirection: "rtl" },
      bengali: { label: "গোলাপি", speechText: "গোলাপি", textDirection: "ltr" }
    }
  },
  {
    id: "brown",
    swatch: "#b9835a",
    ring: "#986542",
    labelTextColor: "#5f3419",
    copy: {
      english: { label: "Brown", speechText: "brown", textDirection: "ltr" },
      arabic: { label: "بني", speechText: "بني", textDirection: "rtl" },
      bengali: { label: "বাদামী", speechText: "বাদামী", textDirection: "ltr" }
    }
  },
  {
    id: "teal",
    swatch: "#6fcfd1",
    ring: "#43a7aa",
    labelTextColor: "#175f61",
    copy: {
      english: { label: "Teal", speechText: "teal", textDirection: "ltr" },
      arabic: { label: "تركوازي", speechText: "تركوازي", textDirection: "rtl" },
      bengali: { label: "টিল", speechText: "টিল", textDirection: "ltr" }
    }
  },
  {
    id: "mint",
    swatch: "#b8f1d1",
    ring: "#7cc79f",
    labelTextColor: "#206647",
    copy: {
      english: { label: "Mint", speechText: "mint", textDirection: "ltr" },
      arabic: { label: "نعناعي", speechText: "نعناعي", textDirection: "rtl" },
      bengali: { label: "মিন্ট", speechText: "মিন্ট", textDirection: "ltr" }
    }
  },
  {
    id: "white",
    swatch: "#fffef9",
    ring: "#d8d4c9",
    labelTextColor: "#6d6a60",
    copy: {
      english: { label: "White", speechText: "white", textDirection: "ltr" },
      arabic: { label: "أبيض", speechText: "أبيض", textDirection: "rtl" },
      bengali: { label: "সাদা", speechText: "সাদা", textDirection: "ltr" }
    }
  },
  {
    id: "gray",
    swatch: "#cdd5df",
    ring: "#9aa6b6",
    labelTextColor: "#465160",
    copy: {
      english: { label: "Gray", speechText: "gray", textDirection: "ltr" },
      arabic: { label: "رمادي", speechText: "رمادي", textDirection: "rtl" },
      bengali: { label: "ধূসর", speechText: "ধূসর", textDirection: "ltr" }
    }
  },
  {
    id: "peach",
    swatch: "#ffc9ad",
    ring: "#e4a485",
    labelTextColor: "#7f4d34",
    copy: {
      english: { label: "Peach", speechText: "peach", textDirection: "ltr" },
      arabic: { label: "خوخي", speechText: "خوخي", textDirection: "rtl" },
      bengali: { label: "পিচ", speechText: "পিচ", textDirection: "ltr" }
    }
  }
] as const;

function getLearningCopyLanguage(languagePackId: LanguagePackId): LearningCopyLanguage {
  if (languagePackId === "arabic") {
    return "arabic";
  }

  if (languagePackId === "bengali") {
    return "bengali";
  }

  return "english";
}

export function getLearningModeLabel(
  learningMode: LearningMode,
  languagePackId: LanguagePackId
): string {
  return LEARNING_COPY[getLearningCopyLanguage(languagePackId)].modeLabels[learningMode];
}

export function getColorLearningContent(languagePackId: LanguagePackId): {
  prompt: string;
  hint: string;
  direction: TextDirection;
} {
  const language = getLearningCopyLanguage(languagePackId);
  const copy = LEARNING_COPY[language];

  return {
    prompt: copy.colorPrompt,
    hint: copy.colorHint,
    direction: language === "arabic" ? "rtl" : "ltr"
  };
}

export function getColorOptionById(
  colorId: ColorOptionId,
  languagePackId: LanguagePackId
): ResolvedColorOption {
  const color = COLOR_OPTIONS.find((option) => option.id === colorId);

  if (!color) {
    throw new Error(`Unknown color option: ${colorId}`);
  }

  const localizedColor = color.copy[getLearningCopyLanguage(languagePackId)];

  return {
    id: color.id,
    swatch: color.swatch,
    ring: color.ring,
    labelTextColor: color.labelTextColor,
    assetKey: `color-${color.id}`,
    label: localizedColor.label,
    speechText: localizedColor.speechText,
    textDirection: localizedColor.textDirection
  };
}

export function getResolvedColorOptions(languagePackId: LanguagePackId): readonly ResolvedColorOption[] {
  return COLOR_OPTIONS.map((color) => getColorOptionById(color.id, languagePackId));
}
