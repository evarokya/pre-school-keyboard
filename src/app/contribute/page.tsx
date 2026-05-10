import type { Metadata } from "next";
import Link from "next/link";

import { ShareActions } from "@/components/ShareActions";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import {
  BUILDER_NAME,
  CONTRIBUTING_URL,
  EARLY_VOICE_HELP_NAME,
  ISSUES_URL,
  REPO_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Contribute | ${SITE_NAME}`,
  description: "Support Nuha Keyboard through code, testing, sharing, and child-friendly voice contributions.",
  openGraph: {
    title: `Contribute | ${SITE_NAME}`,
    description: "Help Nuha Keyboard grow through open-source code, family feedback, and shareable support.",
    url: `${SITE_URL}/contribute`
  },
  twitter: {
    title: `Contribute | ${SITE_NAME}`,
    description: "Help Nuha Keyboard grow through open-source code, family feedback, and shareable support."
  }
};

const SHARE_TEXT =
  "Nuha Keyboard is a playful early-learning app for letters, numbers, colors, and gentle keyboard practice.";

export default function ContributePage() {
  return (
    <main className="min-h-[100svh] bg-[linear-gradient(155deg,#fff7ef_0%,#ffe8d0_30%,#d6f1ff_72%,#f2ffe7_100%)] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-6xl space-y-5">
        <SiteNav currentPath="/contribute" />

        <header className="overflow-hidden rounded-[2.8rem] border border-white/80 bg-white/72 p-6 shadow-[0_26px_90px_rgba(255,255,255,0.22)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-4xl">
              <p className="font-display text-lg uppercase tracking-[0.28em] text-slate-700">Contribute</p>
              <h1 className="mt-4 font-display text-[clamp(3rem,8vw,5.8rem)] leading-[0.9] tracking-[-0.08em] text-slate-900">
                Build a softer learning tool for families who want more than drills.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-slate-700 sm:text-lg">
                {SITE_NAME} is growing from a family project into an open learning playground with letters, colors,
                numbers, parent controls, and real child voice support.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/80 bg-white/74 p-4 shadow-[0_16px_40px_rgba(255,255,255,0.2)]">
              <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Project snapshot</p>
              <p className="mt-2 max-w-xs text-sm font-bold leading-6 text-slate-700">{SITE_TAGLINE}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-900 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
                  Open source
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800">
                  Browser-only
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800">
                  Family-first
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 transition hover:-translate-y-0.5"
            >
              Back to play
            </Link>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
            >
              Open GitHub repo
            </a>
            <a
              href={CONTRIBUTING_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-900 transition hover:-translate-y-0.5"
            >
              Read contribution guide
            </a>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <section className="rounded-[2.2rem] border border-white/80 bg-white/72 p-6 backdrop-blur-xl sm:p-8">
              <p className="font-display text-4xl tracking-[-0.05em] text-slate-900">How people can help right now</p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <article className="rounded-[1.6rem] bg-white/74 p-5">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Code and testing</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                    Improve language packs, polish the parent flow, tune UI responsiveness, or tighten accessibility.
                  </p>
                </article>
                <article className="rounded-[1.6rem] bg-white/74 p-5">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Family feedback</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                    Tell us which modes kids actually enjoy, where they get stuck, and which settings parents need most.
                  </p>
                </article>
                <article className="rounded-[1.6rem] bg-white/74 p-5">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Share it forward</p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">
                    Send it to parents, teachers, speech helpers, homeschool groups, and anyone who wants a gentler tool.
                  </p>
                </article>
              </div>
            </section>

            <section className="rounded-[2.2rem] border border-white/80 bg-white/72 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-display text-4xl tracking-[-0.05em] text-slate-900">Share the project</p>
                  <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-slate-700">
                    Sharing matters as much as code here. The fastest way to help is to put the app in front of real
                    families and real classrooms.
                  </p>
                </div>
                <ShareActions
                  title={SITE_NAME}
                  text={SHARE_TEXT}
                  url={SITE_URL}
                />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.6rem] bg-white/74 p-5">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Where to share</p>
                  <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-slate-700">
                    <li>Parent groups and family WhatsApp communities</li>
                    <li>Homeschool circles and classroom helpers</li>
                    <li>Facebook, LinkedIn, and X posts about gentle learning tools</li>
                  </ul>
                </div>
                <div className="rounded-[1.6rem] bg-white/74 p-5">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">What to mention</p>
                  <ul className="mt-3 space-y-2 text-sm font-bold leading-6 text-slate-700">
                    <li>Browser-only and easy to try</li>
                    <li>Letters, numbers, colors, and keyboard play in one place</li>
                    <li>Parent settings stay only in the browser on that device</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <section className="rounded-[2.2rem] border border-white/80 bg-white/72 p-6 backdrop-blur-xl">
              <p className="font-display text-3xl tracking-[-0.05em] text-slate-900">Real project links</p>
              <div className="mt-4 grid gap-3">
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.4rem] border border-white/90 bg-white/75 px-4 py-4 transition hover:-translate-y-0.5"
                >
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Repository</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">{REPO_URL}</p>
                </a>
                <a
                  href={CONTRIBUTING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.4rem] border border-white/90 bg-white/75 px-4 py-4 transition hover:-translate-y-0.5"
                >
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Contribution guide</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                    Setup steps, voice-pack notes, and code contribution rules.
                  </p>
                </a>
                <a
                  href={ISSUES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.4rem] border border-white/90 bg-white/75 px-4 py-4 transition hover:-translate-y-0.5"
                >
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Issues and next work</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                    Track bugs, share ideas, and pick concrete tasks.
                  </p>
                </a>
              </div>
            </section>

            <section className="rounded-[2.2rem] border border-white/80 bg-white/72 p-6 backdrop-blur-xl">
              <p className="font-display text-3xl tracking-[-0.05em] text-slate-900">People behind it</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[1.5rem] bg-white/74 p-4">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">{BUILDER_NAME}</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                    Builder and maintainer of the product direction, UI, and open-source setup.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-white/74 p-4">
                  <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">{EARLY_VOICE_HELP_NAME}</p>
                  <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
                    First family voice helper for the early English recording work that gives the project its warmth.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-[2.2rem] border border-white/80 bg-white/72 p-6 backdrop-blur-xl">
              <p className="font-display text-3xl tracking-[-0.05em] text-slate-900">What comes next</p>
              <ul className="mt-4 space-y-3 text-sm font-bold leading-6 text-slate-700">
                <li>Finish the English child voice set and organize the audio source chain cleanly.</li>
                <li>Polish parent customization so weak letters or chosen keys can be shown alone.</li>
                <li>Improve sharing, metadata, and public presentation so the project can travel farther.</li>
              </ul>
            </section>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
