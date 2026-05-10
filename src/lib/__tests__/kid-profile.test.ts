import { describe, expect, it } from "vitest";

import {
  getProfileAwareHint,
  getRecommendedNumberRange,
  sanitizeKidProfile
} from "../kid-profile";

describe("kid profile helpers", () => {
  it("validates a stored kid profile shape", () => {
    expect(sanitizeKidProfile({ ageGroup: "5-7", playStyle: "storybook" })).toEqual({
      ageGroup: "5-7",
      playStyle: "storybook"
    });
    expect(sanitizeKidProfile({ ageGroup: "11", playStyle: "storybook" })).toBeNull();
  });

  it("returns age-aware number defaults and hints", () => {
    expect(getRecommendedNumberRange("2-4")).toBe(10);
    expect(getRecommendedNumberRange("8+")).toBe(50);
    expect(
      getProfileAwareHint("colors", "base", { ageGroup: "2-4", playStyle: "adventure" }, false)
    ).toContain("Tap one big color button");
  });
});
