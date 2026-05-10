"use client";

import { useMemo } from "react";

type ShareActionsProps = {
  title: string;
  text: string;
  url: string;
};

function openShareWindow(url: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer,width=720,height=640");
}

export function ShareActions({ title, text, url }: ShareActionsProps) {
  const encoded = useMemo(
    () => ({
      title: encodeURIComponent(title),
      text: encodeURIComponent(text),
      url: encodeURIComponent(url)
    }),
    [text, title, url]
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={async () => {
          if (typeof navigator !== "undefined" && "share" in navigator) {
            await navigator.share({ title, text, url });
            return;
          }

          openShareWindow(`https://twitter.com/intent/tweet?text=${encoded.text}&url=${encoded.url}`);
        }}
        className="rounded-full border border-slate-900 bg-slate-900 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
      >
        Share
      </button>
      <button
        type="button"
        onClick={() => openShareWindow(`https://twitter.com/intent/tweet?text=${encoded.text}&url=${encoded.url}`)}
        className="rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800 transition hover:-translate-y-0.5"
      >
        X
      </button>
      <button
        type="button"
        onClick={() =>
          openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`)
        }
        className="rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800 transition hover:-translate-y-0.5"
      >
        Facebook
      </button>
      <button
        type="button"
        onClick={() =>
          openShareWindow(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`
          )
        }
        className="rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800 transition hover:-translate-y-0.5"
      >
        LinkedIn
      </button>
    </div>
  );
}
