"use client";

import { useState } from "react";

type ShareActionsProps = {
  title: string;
  text: string;
  url: string;
};

function openShareWindow(shareUrl: string) {
  if (typeof window === "undefined") return;
  window.open(shareUrl, "_blank", "noopener,noreferrer,width=720,height=640");
}

const PLATFORMS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    bg: "#25d366",
    border: "#1db854",
    color: "#fff",
    getUrl: (e: { text: string; url: string }) =>
      `https://wa.me/?text=${e.text}%20${e.url}`
  },
  {
    id: "x",
    label: "X",
    bg: "#000",
    border: "#222",
    color: "#fff",
    getUrl: (e: { text: string; url: string }) =>
      `https://twitter.com/intent/tweet?text=${e.text}&url=${e.url}`
  },
  {
    id: "facebook",
    label: "Facebook",
    bg: "#1877f2",
    border: "#1464cc",
    color: "#fff",
    getUrl: (e: { url: string }) =>
      `https://www.facebook.com/sharer/sharer.php?u=${e.url}`
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    bg: "#0a66c2",
    border: "#0854a0",
    color: "#fff",
    getUrl: (e: { url: string }) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${e.url}`
  }
] as const;

export function ShareActions({ title, text, url }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  const encoded = {
    title: encodeURIComponent(title),
    text: encodeURIComponent(text),
    url: encodeURIComponent(url)
  };

  async function handleNativeShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* fall through to X share */
      }
    }
    openShareWindow(`https://twitter.com/intent/tweet?text=${encoded.text}&url=${encoded.url}`);
  }

  async function handleCopy() {
    if (typeof navigator === "undefined") return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2.5">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => openShareWindow(p.getUrl(encoded))}
            className="rounded-full px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] active:translate-y-0"
            style={{ background: p.bg, border: `1.5px solid ${p.border}`, color: p.color }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={handleNativeShare}
          className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_4px_12px_rgba(0,0,0,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
        >
          Share
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
