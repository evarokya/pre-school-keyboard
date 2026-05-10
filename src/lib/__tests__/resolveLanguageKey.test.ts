import { describe, expect, it } from "vitest";

import {
  ENGLISH_COMPUTER_PRACTICE_PACK,
  getLanguagePackById,
  LANGUAGE_PACKS
} from "../language-packs";
import { resolveLanguageInput, resolveVirtualLanguageKey } from "../resolveLanguageKey";

describe("language packs", () => {
  it("ships with the starter open-source language packs", () => {
    expect(LANGUAGE_PACKS.map((pack) => pack.id)).toEqual([
      "english",
      "numbers",
      "arabic",
      "bengali"
    ]);
  });

  it("resolves english physical keyboard letters", () => {
    const resolvedKey = resolveLanguageInput(getLanguagePackById("english"), "a");

    expect(resolvedKey).toMatchObject({
      displayText: "A",
      speechText: "A",
      speechLang: "en-US",
      textDirection: "ltr"
    });
  });

  it("keeps english letter mode focused on letters only", () => {
    expect(resolveLanguageInput(getLanguagePackById("english"), ".")).toBeNull();
    expect(resolveLanguageInput(getLanguagePackById("english"), "1")).toBeNull();
  });

  it("keeps numbers mode focused on digits only", () => {
    expect(resolveLanguageInput(getLanguagePackById("numbers"), ".")).toBeNull();
  });

  it("uses native overrides for pack-specific keys like arabic space", () => {
    const resolvedKey = resolveLanguageInput(getLanguagePackById("arabic"), " ");

    expect(resolvedKey).toMatchObject({
      displayText: "مسافة",
      speechText: "مسافة",
      speechLang: "ar",
      textDirection: "rtl"
    });
  });

  it("resolves virtual bengali keys through the shared pack definition", () => {
    const bengaliPack = getLanguagePackById("bengali");
    const firstKey = bengaliPack.rows[0][0];
    const resolvedKey = resolveVirtualLanguageKey(bengaliPack, firstKey);

    expect(resolvedKey).toMatchObject({
      displayText: "অ",
      speechText: "অ",
      speechLang: "bn-BD",
      textDirection: "ltr"
    });
  });

  it("lets computer practice mode resolve full keyboard input", () => {
    expect(resolveLanguageInput(ENGLISH_COMPUTER_PRACTICE_PACK, ".")).toMatchObject({
      displayText: ".",
      speechText: "dot"
    });
    expect(resolveLanguageInput(ENGLISH_COMPUTER_PRACTICE_PACK, "Enter")).toMatchObject({
      displayText: "Enter",
      speechText: "enter"
    });
  });
});
