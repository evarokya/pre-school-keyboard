import { describe, expect, it } from "vitest";

import {
  getColorLearningContent,
  getColorOptionById,
  getResolvedColorOptions,
  getLearningModeLabel
} from "../learning-content";

describe("learning content", () => {
  it("uses english color copy for the numbers pack", () => {
    const blue = getColorOptionById("blue", "numbers");

    expect(blue).toMatchObject({
      label: "Blue",
      speechText: "blue",
      textDirection: "ltr",
      assetKey: "color-blue"
    });
  });

  it("returns localized color mode labels and prompts", () => {
    expect(getLearningModeLabel("colors", "arabic")).toBe("ألوان");
    expect(getLearningModeLabel("computer", "bengali")).toBe("কম্পিউটার");
    expect(getColorLearningContent("arabic")).toMatchObject({
      direction: "rtl",
      prompt: "اضغط على لون لسماع اسمه."
    });
  });

  it("ships an expanded color learning palette", () => {
    expect(getResolvedColorOptions("english")).toHaveLength(13);
    expect(getColorOptionById("white", "bengali")).toMatchObject({
      label: "সাদা",
      speechText: "সাদা"
    });
  });
});
