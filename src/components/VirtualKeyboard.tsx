import type { Palette } from "@/lib/constants";
import { filterLanguageRows, type LanguageKey, type LanguagePack } from "@/lib/language-packs";

type VirtualKeyboardProps = {
  languagePack: LanguagePack;
  onKeyPress: (languageKey: LanguageKey) => void;
  palette: Palette;
  visibleKeyIds?: ReadonlySet<string>;
};

function getKeyButtonClasses(languageKey: LanguageKey): string {
  const baseClasses =
    "min-h-12 rounded-[1.1rem] border px-3 py-2 text-center font-display shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition duration-200 hover:-translate-y-0.5";

  if (languageKey.size === "full") {
    return `${baseClasses} w-full text-sm`;
  }

  if (languageKey.size === "wide") {
    return `${baseClasses} min-w-[7rem] flex-1 text-sm`;
  }

  const labelLength = (languageKey.label ?? languageKey.displayText ?? languageKey.value).length;

  return `${baseClasses} min-w-[2.7rem] flex-1 ${labelLength > 2 ? "text-sm" : "text-2xl"}`;
}

export function VirtualKeyboard({
  languagePack,
  onKeyPress,
  palette,
  visibleKeyIds
}: VirtualKeyboardProps) {
  const visibleRows = filterLanguageRows(languagePack, visibleKeyIds);

  return (
    <section
      className="rounded-[2rem] border p-4 shadow-[0_22px_60px_rgba(255,255,255,0.18)] backdrop-blur-xl"
      style={{
        background: palette.shell,
        borderColor: palette.shellBorder
      }}
    >
      <div className="mb-4">
        <p
          className="font-display text-2xl tracking-[-0.04em]"
          style={{ color: palette.keyText }}
        >
          Virtual keyboard
        </p>
        <p className="mt-1 text-sm font-bold leading-6" style={{ color: palette.detailText }}>
          Click with a mouse or tap on a screen when a physical keyboard is not enough.
        </p>
      </div>

      <div className="space-y-2" dir={languagePack.direction}>
        {visibleRows.map((row, rowIndex) => (
          <div key={`${languagePack.id}-${rowIndex}`} className="flex flex-wrap gap-2">
            {row.map((languageKey, keyIndex) => (
              <button
                key={`${languagePack.id}-${rowIndex}-${keyIndex}`}
                type="button"
                onClick={() => onKeyPress(languageKey)}
                className={getKeyButtonClasses(languageKey)}
                style={{
                  background: palette.historySurface,
                  borderColor: palette.buttonBorder,
                  color: palette.historyText
                }}
              >
                {languageKey.label ?? languageKey.displayText ?? languageKey.value}
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
