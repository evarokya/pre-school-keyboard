const SPECIAL_KEY_SPEECH_MAP: Record<string, string> = {
  " ": "space",
  Enter: "enter",
  Backspace: "backspace",
  Escape: "escape",
  Shift: "shift",
  Tab: "tab",
  Control: "control",
  Alt: "alt",
  Meta: "command",
  ArrowUp: "up arrow",
  ArrowDown: "down arrow",
  ArrowLeft: "left arrow",
  ArrowRight: "right arrow",
  CapsLock: "caps lock",
  Delete: "delete"
};

const NUMBER_SPEECH_MAP: Record<string, string> = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine"
};

const SYMBOL_SPEECH_MAP: Record<string, string> = {
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
  "[": "left bracket",
  "]": "right bracket",
  "{": "left brace",
  "}": "right brace",
  "!": "exclamation mark",
  "?": "question mark"
};

export function getSpeechText(key: string): string {
  if (key in SPECIAL_KEY_SPEECH_MAP) {
    return SPECIAL_KEY_SPEECH_MAP[key];
  }

  if (key in NUMBER_SPEECH_MAP) {
    return NUMBER_SPEECH_MAP[key];
  }

  if (key in SYMBOL_SPEECH_MAP) {
    return SYMBOL_SPEECH_MAP[key];
  }

  if (key.length === 1 && /[a-z]/i.test(key)) {
    return key.toUpperCase();
  }

  if (key.length === 1) {
    return key;
  }

  return key.toLowerCase();
}
