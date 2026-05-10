import { describe, expect, it } from "vitest";

import { getDisplayText } from "../getDisplayText";

describe("getDisplayText", () => {
  it("uppercases letters for the main display", () => {
    expect(getDisplayText("a")).toBe("A");
    expect(getDisplayText("D")).toBe("D");
  });

  it("keeps visible symbols unchanged", () => {
    expect(getDisplayText("1")).toBe("1");
    expect(getDisplayText(".")).toBe(".");
    expect(getDisplayText("/")).toBe("/");
  });

  it("maps special keys to kid-friendly labels", () => {
    expect(getDisplayText(" ")).toBe("Space");
    expect(getDisplayText("Enter")).toBe("Enter");
    expect(getDisplayText("Backspace")).toBe("Backspace");
    expect(getDisplayText("Escape")).toBe("Esc");
  });
});
