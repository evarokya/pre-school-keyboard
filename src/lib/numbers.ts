export const NUMBER_RANGE_OPTIONS = [10, 20, 50, 100] as const;

export type NumberRangeMax = (typeof NUMBER_RANGE_OPTIONS)[number];
export type NumberBoardOrder = "ascending" | "descending" | "random";

const DIRECT_NUMBER_WORDS: Record<number, string> = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

const TENS_WORDS: Record<number, string> = {
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

const NUMBER_AUDIO_ASSET_KEYS: Partial<Record<number, string>> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten"
};

export function getNumberSpeechText(value: number): string {
  if (!Number.isInteger(value) || value < 0 || value > 100) {
    throw new Error(`Unsupported number value: ${value}`);
  }

  if (value in DIRECT_NUMBER_WORDS) {
    return DIRECT_NUMBER_WORDS[value];
  }

  if (value === 100) {
    return "one hundred";
  }

  const tens = Math.floor(value / 10) * 10;
  const remainder = value % 10;
  const tensWord = TENS_WORDS[tens];

  if (!tensWord) {
    throw new Error(`Unsupported number value: ${value}`);
  }

  return remainder === 0 ? tensWord : `${tensWord} ${DIRECT_NUMBER_WORDS[remainder]}`;
}

export function getNumberAssetKey(value: number): string {
  return NUMBER_AUDIO_ASSET_KEYS[value] ?? `number-${value}`;
}

function mulberry32(seed: number) {
  let currentSeed = seed;

  return () => {
    currentSeed |= 0;
    currentSeed = (currentSeed + 0x6d2b79f5) | 0;
    let t = Math.imul(currentSeed ^ (currentSeed >>> 15), 1 | currentSeed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function getNumberBoardValues(
  maxNumber: NumberRangeMax,
  order: NumberBoardOrder,
  randomSeed = 1
): number[] {
  const values = Array.from({ length: maxNumber }, (_, index) => index + 1);

  if (order === "ascending") {
    return values;
  }

  if (order === "descending") {
    return values.reverse();
  }

  const random = mulberry32(randomSeed);

  for (let index = values.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const currentValue = values[index];

    values[index] = values[swapIndex];
    values[swapIndex] = currentValue;
  }

  return values;
}
