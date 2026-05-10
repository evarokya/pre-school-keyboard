import { describe, expect, it } from "vitest";

import {
  getNumberAssetKey,
  getNumberBoardValues,
  getNumberSpeechText
} from "../numbers";

describe("numbers helper", () => {
  it("returns spoken english text for values up to one hundred", () => {
    expect(getNumberSpeechText(7)).toBe("seven");
    expect(getNumberSpeechText(20)).toBe("twenty");
    expect(getNumberSpeechText(42)).toBe("forty two");
    expect(getNumberSpeechText(100)).toBe("one hundred");
  });

  it("keeps real child audio asset keys for one through ten", () => {
    expect(getNumberAssetKey(1)).toBe("one");
    expect(getNumberAssetKey(10)).toBe("ten");
    expect(getNumberAssetKey(42)).toBe("number-42");
  });

  it("builds straight, reverse, and stable random board orders", () => {
    expect(getNumberBoardValues(10, "ascending", 5).slice(0, 4)).toEqual([1, 2, 3, 4]);
    expect(getNumberBoardValues(10, "descending", 5).slice(0, 4)).toEqual([10, 9, 8, 7]);
    expect(getNumberBoardValues(10, "random", 7)).toEqual(getNumberBoardValues(10, "random", 7));
  });
});
