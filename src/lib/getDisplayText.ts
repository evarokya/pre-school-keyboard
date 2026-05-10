const DISPLAY_KEY_MAP: Record<string, string> = {
  " ": "Space",
  Enter: "Enter",
  Backspace: "Backspace",
  Escape: "Esc",
  Shift: "Shift",
  Tab: "Tab",
  Control: "Ctrl",
  Alt: "Alt",
  Meta: "Cmd",
  ArrowUp: "Up",
  ArrowDown: "Down",
  ArrowLeft: "Left",
  ArrowRight: "Right",
  CapsLock: "Caps",
  Delete: "Delete"
};

export function getDisplayText(key: string): string {
  if (key in DISPLAY_KEY_MAP) {
    return DISPLAY_KEY_MAP[key];
  }

  if (key.length === 1 && /[a-z]/i.test(key)) {
    return key.toUpperCase();
  }

  if (key.length === 1) {
    return key;
  }

  return key;
}
