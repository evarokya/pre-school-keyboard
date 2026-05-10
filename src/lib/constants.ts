export type Palette = {
  id: string;
  background: string;
  orbOne: string;
  orbTwo: string;
  orbThree: string;
  shell: string;
  shellBorder: string;
  badgeSurface: string;
  badgeText: string;
  buttonSurface: string;
  buttonText: string;
  buttonBorder: string;
  historySurface: string;
  historyText: string;
  keyText: string;
  keyShadow: string;
  messageText: string;
  detailText: string;
};

export const PALETTES: readonly Palette[] = [
  {
    id: "apricot-sky",
    background: "linear-gradient(135deg, #fff1df 0%, #ffd1a8 38%, #bde9ff 100%)",
    orbOne: "#ffb36b",
    orbTwo: "#8dd8ff",
    orbThree: "#ff83a7",
    shell: "rgba(255, 249, 241, 0.72)",
    shellBorder: "rgba(255, 255, 255, 0.78)",
    badgeSurface: "rgba(255, 255, 255, 0.72)",
    badgeText: "#21405e",
    buttonSurface: "rgba(255, 255, 255, 0.78)",
    buttonText: "#17324d",
    buttonBorder: "rgba(255, 255, 255, 0.88)",
    historySurface: "rgba(23, 50, 77, 0.08)",
    historyText: "#17324d",
    keyText: "#17324d",
    keyShadow: "rgba(23, 50, 77, 0.22)",
    messageText: "#17324d",
    detailText: "#355070"
  },
  {
    id: "mint-sorbet",
    background: "linear-gradient(135deg, #ecfff7 0%, #b5f5d2 44%, #fff4a8 100%)",
    orbOne: "#8de7c4",
    orbTwo: "#ffe27a",
    orbThree: "#ff9b73",
    shell: "rgba(247, 255, 251, 0.7)",
    shellBorder: "rgba(255, 255, 255, 0.82)",
    badgeSurface: "rgba(255, 255, 255, 0.74)",
    badgeText: "#134b42",
    buttonSurface: "rgba(255, 255, 255, 0.8)",
    buttonText: "#134b42",
    buttonBorder: "rgba(255, 255, 255, 0.88)",
    historySurface: "rgba(19, 75, 66, 0.08)",
    historyText: "#134b42",
    keyText: "#0f4c5c",
    keyShadow: "rgba(15, 76, 92, 0.18)",
    messageText: "#0f4c5c",
    detailText: "#276b63"
  },
  {
    id: "sunset-candy",
    background: "linear-gradient(135deg, #fff4ef 0%, #ffb6b9 42%, #ffd86a 100%)",
    orbOne: "#ff8fab",
    orbTwo: "#ffd166",
    orbThree: "#7dd3fc",
    shell: "rgba(255, 248, 244, 0.7)",
    shellBorder: "rgba(255, 255, 255, 0.82)",
    badgeSurface: "rgba(255, 255, 255, 0.74)",
    badgeText: "#6b2d5c",
    buttonSurface: "rgba(255, 255, 255, 0.8)",
    buttonText: "#6b2d5c",
    buttonBorder: "rgba(255, 255, 255, 0.88)",
    historySurface: "rgba(107, 45, 92, 0.08)",
    historyText: "#6b2d5c",
    keyText: "#7f2f59",
    keyShadow: "rgba(127, 47, 89, 0.18)",
    messageText: "#6b2d5c",
    detailText: "#8c3f67"
  },
  {
    id: "lagoon-peach",
    background: "linear-gradient(135deg, #eefcff 0%, #9be7ff 36%, #ffd0b0 100%)",
    orbOne: "#73d2de",
    orbTwo: "#ffd39a",
    orbThree: "#ff93c1",
    shell: "rgba(243, 253, 255, 0.72)",
    shellBorder: "rgba(255, 255, 255, 0.8)",
    badgeSurface: "rgba(255, 255, 255, 0.72)",
    badgeText: "#0c4a6e",
    buttonSurface: "rgba(255, 255, 255, 0.8)",
    buttonText: "#0c4a6e",
    buttonBorder: "rgba(255, 255, 255, 0.88)",
    historySurface: "rgba(12, 74, 110, 0.08)",
    historyText: "#0c4a6e",
    keyText: "#0f3559",
    keyShadow: "rgba(15, 53, 89, 0.2)",
    messageText: "#0f3559",
    detailText: "#325d78"
  },
  {
    id: "strawberry-cream",
    background: "linear-gradient(135deg, #fff7fa 0%, #ffc4d6 40%, #ffe8a3 100%)",
    orbOne: "#ff8ab3",
    orbTwo: "#ffe68c",
    orbThree: "#9ad8ff",
    shell: "rgba(255, 248, 251, 0.74)",
    shellBorder: "rgba(255, 255, 255, 0.84)",
    badgeSurface: "rgba(255, 255, 255, 0.76)",
    badgeText: "#7a284f",
    buttonSurface: "rgba(255, 255, 255, 0.82)",
    buttonText: "#7a284f",
    buttonBorder: "rgba(255, 255, 255, 0.9)",
    historySurface: "rgba(122, 40, 79, 0.08)",
    historyText: "#7a284f",
    keyText: "#7a284f",
    keyShadow: "rgba(122, 40, 79, 0.18)",
    messageText: "#7a284f",
    detailText: "#944363"
  },
  {
    id: "lime-bubble",
    background: "linear-gradient(135deg, #f7ffe9 0%, #c9f27b 34%, #9fe7ff 100%)",
    orbOne: "#c0ee63",
    orbTwo: "#8fe0ff",
    orbThree: "#ffb36b",
    shell: "rgba(252, 255, 244, 0.72)",
    shellBorder: "rgba(255, 255, 255, 0.82)",
    badgeSurface: "rgba(255, 255, 255, 0.76)",
    badgeText: "#335c2b",
    buttonSurface: "rgba(255, 255, 255, 0.82)",
    buttonText: "#335c2b",
    buttonBorder: "rgba(255, 255, 255, 0.9)",
    historySurface: "rgba(51, 92, 43, 0.08)",
    historyText: "#335c2b",
    keyText: "#2f5233",
    keyShadow: "rgba(47, 82, 51, 0.18)",
    messageText: "#2f5233",
    detailText: "#487147"
  }
] as const;

export const EMOJIS = ["🌟", "🎈", "🦄", "🚀", "🎉", "🌈", "🐣", "🍭", "✨", "🫧"] as const;

export const MESSAGES = [
  "Great job!",
  "Nice key!",
  "Super press!",
  "You found it!",
  "Keep going!",
  "That was quick!",
  "Amazing!",
  "Wow!",
  "Pop pop pop!",
  "You are flying!"
] as const;

export const IDLE_EMOJI = "✨";
export const IDLE_MESSAGE = "Press any key to make the screen dance.";
export const IDLE_HINT = "Letters, numbers, Space, Enter, and punctuation all work.";
