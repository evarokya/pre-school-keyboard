import type { ReactNode } from "react";

import type { Palette } from "@/lib/constants";

type PlayActionDockProps = {
  children: ReactNode;
  palette: Palette;
};

export function PlayActionDock({ children, palette }: PlayActionDockProps) {
  return (
    <aside
      className="hidden w-44 shrink-0 flex-col gap-3 rounded-[1.7rem] border p-3 shadow-[0_22px_60px_rgba(255,255,255,0.18)] backdrop-blur-xl lg:flex"
      style={{
        background: palette.shell,
        borderColor: palette.shellBorder
      }}
      aria-label="Play actions"
    >
      <p
        className="px-1 text-xs font-extrabold uppercase tracking-[0.2em]"
        style={{ color: palette.detailText }}
      >
        Play tools
      </p>
      {children}
    </aside>
  );
}
