import { describe, expect, it } from "vitest";

import { getSpeechText } from "../getSpeechText";

describe("getSpeechText", () => {
  it("speaks letters as uppercase letter names", () => {
    expect(getSpeechText("a")).toBe("A");
    expect(getSpeechText("D")).toBe("D");
  });

  it("converts numbers to spoken words", () => {
    expect(getSpeechText("1")).toBe("one");
    expect(getSpeechText("0")).toBe("zero");
  });

  it("converts punctuation to friendly spoken text", () => {
    expect(getSpeechText(".")).toBe("dot");
    expect(getSpeechText(",")).toBe("comma");
    expect(getSpeechText(";")).toBe("semicolon");
    expect(getSpeechText("/")).toBe("slash");
  });

  it("maps special keys to friendly speech labels", () => {
    expect(getSpeechText(" ")).toBe("space");
    expect(getSpeechText("Enter")).toBe("enter");
    expect(getSpeechText("Backspace")).toBe("backspace");
    expect(getSpeechText("Escape")).toBe("escape");
  });
});
