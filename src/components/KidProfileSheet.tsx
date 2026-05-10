import { useState } from "react";

import type { Palette } from "@/lib/constants";
import {
  DEFAULT_KID_PROFILE,
  KID_AGE_OPTIONS,
  KID_PLAY_STYLE_OPTIONS,
  type KidAgeGroup,
  type KidPlayStyle,
  type KidProfile
} from "@/lib/kid-profile";

type KidProfileSheetProps = {
  isOpen: boolean;
  initialProfile: KidProfile | null;
  palette: Palette;
  canClose: boolean;
  onSave: (profile: KidProfile) => void;
  onClose: () => void;
};

export function KidProfileSheet({
  isOpen,
  initialProfile,
  palette,
  canClose,
  onSave,
  onClose
}: KidProfileSheetProps) {
  const [ageGroup, setAgeGroup] = useState<KidAgeGroup>(initialProfile?.ageGroup ?? DEFAULT_KID_PROFILE.ageGroup);
  const [playStyle, setPlayStyle] = useState<KidPlayStyle>(
    initialProfile?.playStyle ?? DEFAULT_KID_PROFILE.playStyle
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/28 backdrop-blur-[3px]">
      <div className="absolute inset-x-3 bottom-3 top-8 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:top-6 sm:w-[min(94vw,32rem)]">
        <section
          className="flex h-full flex-col overflow-hidden rounded-[2.2rem] border shadow-[0_30px_90px_rgba(15,35,57,0.26)] backdrop-blur-xl"
          style={{
            background: palette.shell,
            borderColor: palette.shellBorder
          }}
        >
          <div
            className="shrink-0 border-b px-5 pb-4 pt-3 sm:px-6 sm:pb-5 sm:pt-5"
            style={{ borderColor: palette.shellBorder }}
          >
            <div
              className="mx-auto mb-3 h-1.5 w-16 rounded-full sm:hidden"
              style={{ background: palette.buttonBorder }}
              aria-hidden="true"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-[clamp(2rem,6vw,2.7rem)] tracking-[-0.05em]" style={{ color: palette.keyText }}>
                  Tell us about your little learner
                </p>
                <p className="mt-2 max-w-xl text-sm font-bold leading-6" style={{ color: palette.detailText }}>
                  We can start with calmer defaults for younger kids and a more playful style the child will enjoy.
                </p>
              </div>
              {canClose ? (
                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border text-xl font-bold transition hover:-translate-y-0.5"
                  style={{
                    background: palette.buttonSurface,
                    borderColor: palette.buttonBorder,
                    color: palette.buttonText
                  }}
                  aria-label="Close child profile"
                >
                  ×
                </button>
              ) : null}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-5 pt-4 sm:px-6">
            <div className="space-y-5">
              <section
                className="rounded-[1.6rem] border p-4"
                style={{
                  background: palette.buttonSurface,
                  borderColor: palette.buttonBorder
                }}
              >
                <p className="font-display text-2xl tracking-[-0.04em]" style={{ color: palette.keyText }}>
                  How old is your child?
                </p>
                <p className="mt-1 text-sm font-bold leading-6" style={{ color: palette.detailText }}>
                  This helps us start with a comfortable number range and friendlier hints.
                </p>

                <div className="mt-4 grid gap-2">
                  {KID_AGE_OPTIONS.map((option) => {
                    const isActive = option.id === ageGroup;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setAgeGroup(option.id)}
                        className={`rounded-[1.3rem] border px-4 py-3 text-left transition ${
                          isActive ? "scale-[1.01]" : "hover:-translate-y-0.5"
                        }`}
                        style={{
                          background: isActive ? palette.activeKeySurface : palette.shell,
                          borderColor: isActive ? palette.activeKeyBorder : palette.buttonBorder,
                          color: isActive ? palette.activeKeyText : palette.buttonText,
                          boxShadow: isActive ? `0 14px 26px ${palette.activeKeyGlow}` : undefined
                        }}
                        aria-pressed={isActive}
                      >
                        <p className="font-display text-2xl tracking-[-0.04em]">{option.label}</p>
                        <p className="mt-1 text-xs font-bold leading-5 opacity-85">{option.description}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section
                className="rounded-[1.6rem] border p-4"
                style={{
                  background: palette.buttonSurface,
                  borderColor: palette.buttonBorder
                }}
              >
                <p className="font-display text-2xl tracking-[-0.04em]" style={{ color: palette.keyText }}>
                  What kind of play style feels right?
                </p>
                <p className="mt-1 text-sm font-bold leading-6" style={{ color: palette.detailText }}>
                  Choose the mood your child enjoys more. You can change it later anytime.
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {KID_PLAY_STYLE_OPTIONS.map((option) => {
                    const isActive = option.id === playStyle;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setPlayStyle(option.id)}
                        className={`rounded-[1.3rem] border px-4 py-4 text-left transition ${
                          isActive ? "scale-[1.01]" : "hover:-translate-y-0.5"
                        }`}
                        style={{
                          background: isActive ? palette.activeKeySurface : palette.shell,
                          borderColor: isActive ? palette.activeKeyBorder : palette.buttonBorder,
                          color: isActive ? palette.activeKeyText : palette.buttonText,
                          boxShadow: isActive ? `0 14px 26px ${palette.activeKeyGlow}` : undefined
                        }}
                        aria-pressed={isActive}
                      >
                        <p className="font-display text-2xl tracking-[-0.04em]">{option.label}</p>
                        <p className="mt-1 text-xs font-bold leading-5 opacity-85">{option.description}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section
                className="rounded-[1.6rem] border p-4"
                style={{
                  background: palette.historySurface,
                  borderColor: palette.buttonBorder
                }}
              >
                <p className="font-display text-2xl tracking-[-0.04em]" style={{ color: palette.keyText }}>
                  Privacy note
                </p>
                <p className="mt-2 text-sm font-bold leading-6" style={{ color: palette.detailText }}>
                  We only remember this on this device so the app can open the same way next time. Nothing is sent,
                  shared, or stored online.
                </p>
              </section>
            </div>
          </div>

          <div
            className="shrink-0 border-t px-5 pb-5 pt-4 sm:px-6"
            style={{ borderColor: palette.shellBorder }}
          >
            <button
              type="button"
              onClick={() => onSave({ ageGroup, playStyle })}
              className="w-full rounded-full border px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] transition hover:-translate-y-0.5"
              style={{
                background: palette.activeKeySurface,
                borderColor: palette.activeKeyBorder,
                color: palette.activeKeyText,
                boxShadow: `0 14px 26px ${palette.activeKeyGlow}`
              }}
            >
              {canClose ? "Save child setup" : "Start playing"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
