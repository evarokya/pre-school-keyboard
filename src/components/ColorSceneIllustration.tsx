import type { ColorOptionId } from "@/lib/learning-content";
import type { KidProfile } from "@/lib/kid-profile";

type ColorSceneIllustrationProps = {
  colorId: ColorOptionId;
  swatch: string;
  profile: KidProfile | null;
};

function KidAvatar({ swatch, profile }: { swatch: string; profile: KidProfile | null }) {
  const isStorybook = profile?.playStyle === "storybook";

  return (
    <div className="absolute bottom-2 left-1/2 z-10 w-20 -translate-x-1/2">
      <div className="relative mx-auto h-12 w-12 rounded-full border border-white/85 bg-[#ffd7b0] shadow-[0_10px_18px_rgba(0,0,0,0.12)]">
        <div className="absolute inset-x-1.5 top-0 h-5 rounded-b-[1.1rem] rounded-t-full bg-[#563423]" />
        {isStorybook ? (
          <>
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-[0.7rem] rounded-full bg-white/95" />
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 translate-x-[0.1rem] rounded-full bg-white/95" />
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#ffe269]" />
          </>
        ) : (
          <div className="absolute -top-1 left-1/2 h-4 w-8 -translate-x-1/2 rounded-full bg-[#2e5e88]" />
        )}
      </div>

      <div
        className="relative -mt-1 h-12 rounded-[1.4rem_1.4rem_0.9rem_0.9rem] border border-white/80 shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
        style={{ background: swatch }}
      >
        <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-white/25 blur-sm" />
      </div>
    </div>
  );
}

function SceneDecorations({ colorId }: { colorId: ColorOptionId }) {
  switch (colorId) {
    case "blue":
      return (
        <>
          <div className="scene-drift absolute left-4 top-4 h-6 w-14 rounded-full bg-white/88" />
          <div className="scene-drift scene-drift--delay absolute right-8 top-8 h-5 w-12 rounded-full bg-white/80" />
          <div className="absolute inset-x-0 bottom-0 h-9 bg-[#95d4ff]" />
        </>
      );
    case "green":
      return (
        <>
          <div className="absolute inset-x-0 bottom-0 h-10 rounded-t-[40%] bg-[#7bd08e]" />
          <div className="absolute left-5 bottom-6 h-10 w-10 rounded-full bg-[#8de29c]" />
          <div className="absolute right-6 bottom-7 h-8 w-12 rounded-full bg-[#a5e9b5]" />
        </>
      );
    case "yellow":
      return (
        <>
          <div className="scene-pulse absolute right-5 top-4 h-10 w-10 rounded-full bg-[#ffe971]" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#cfe7ff]" />
        </>
      );
    case "red":
      return (
        <>
          <div className="scene-bob absolute left-7 top-4 h-9 w-9 rotate-12 rounded-[0.3rem] bg-[#ef6f76]" />
          <div className="absolute left-[2.4rem] top-12 h-10 w-0.5 bg-white/80" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#cfe7ff]" />
        </>
      );
    case "orange":
      return (
        <>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#f3d9a0]" />
          <div className="scene-bob absolute right-7 top-6 h-7 w-7 rounded-full bg-white/70" />
          <div className="absolute right-11 top-7 h-5 w-5 rounded-full bg-[#ffba73]" />
        </>
      );
    case "purple":
      return (
        <>
          <div className="absolute left-7 bottom-0 h-11 w-2 rounded-full bg-[#4fa460]" />
          <div className="scene-sway absolute left-3 bottom-7 h-10 w-10 rounded-full bg-[#be9aff]" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#e5f4dd]" />
        </>
      );
    case "pink":
      return (
        <>
          <div className="scene-bob absolute left-6 top-4 h-8 w-8 rounded-full bg-[#ffb8d0]" />
          <div className="scene-bob scene-bob--delay absolute right-8 top-7 h-6 w-6 rounded-full bg-[#ffc8db]" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#d5edff]" />
        </>
      );
    case "brown":
      return (
        <>
          <div className="absolute inset-x-0 bottom-0 h-9 bg-[#d8c0a7]" />
          <div className="absolute left-7 bottom-7 h-10 w-3 rounded-full bg-[#9f6d47]" />
          <div className="absolute left-2 bottom-12 h-12 w-14 rounded-full bg-[#88c276]" />
        </>
      );
    case "white":
      return (
        <>
          <div className="scene-drift absolute left-5 top-5 h-8 w-16 rounded-full border border-white/80 bg-white/96" />
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#c8e2ff]" />
        </>
      );
    case "gray":
      return (
        <>
          <div className="absolute inset-x-0 bottom-0 h-8 bg-[#e2ebf5]" />
          <div className="absolute left-5 top-5 h-8 w-16 rounded-full bg-[#c2cad7]" />
          <div className="scene-rain absolute left-8 top-12 h-9 w-0.5 bg-white/75" />
          <div className="scene-rain scene-rain--delay absolute left-12 top-12 h-10 w-0.5 bg-white/75" />
          <div className="scene-rain scene-rain--late absolute left-16 top-12 h-8 w-0.5 bg-white/75" />
        </>
      );
    default:
      return null;
  }
}

export function ColorSceneIllustration({
  colorId,
  swatch,
  profile
}: ColorSceneIllustrationProps) {
  return (
    <div
      className="relative mx-auto mb-4 h-32 w-full max-w-[18rem] overflow-hidden rounded-[2rem] border border-white/85 shadow-[0_18px_35px_rgba(0,0,0,0.1)]"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.28)), ${swatch}`
      }}
    >
      <SceneDecorations colorId={colorId} />
      <KidAvatar swatch={swatch} profile={profile} />
    </div>
  );
}
