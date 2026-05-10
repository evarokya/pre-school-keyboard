import { BUILDER_NAME, EARLY_VOICE_HELP_NAME } from "@/lib/site";

type SiteFooterProps = {
  overlay?: boolean;
};

export function SiteFooter({ overlay = false }: SiteFooterProps) {
  return (
    <footer className={overlay ? "fixed bottom-4 left-4 z-20 hidden sm:block" : ""}>
      <div
        className={
          overlay
            ? "rounded-[1.5rem] border border-white/75 bg-white/72 px-4 py-3 shadow-[0_18px_55px_rgba(255,255,255,0.2)] backdrop-blur-xl"
            : "rounded-[2rem] border border-white/80 bg-white/72 p-5 backdrop-blur-xl"
        }
      >
        <p className="font-display text-2xl tracking-[-0.04em] text-slate-900">Built with family</p>
        <p className="mt-1 text-sm font-bold leading-6 text-slate-700">
          Built by {BUILDER_NAME}. Early English voice help came from {EARLY_VOICE_HELP_NAME}.
        </p>
      </div>
    </footer>
  );
}
