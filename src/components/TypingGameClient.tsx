"use client";

import dynamic from "next/dynamic";

export const TypingGameClient = dynamic(
  () => import("@/components/TypingGame").then((m) => ({ default: m.TypingGame })),
  { ssr: false }
);
