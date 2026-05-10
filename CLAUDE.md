# Nuha Keyboard

Browser-only early learning project for one child with local-only parent settings, family voice recordings, and playful practice across letters, colors, numbers, and simple keyboard skills.

Repo:    https://github.com/raj-khan/pre-school-keyboard
Domain:  browser-first / family project / no backend
License: MIT

## Product shape

- `Letters` mode: alphabet-focused learning
- `Computer` mode: broader keyboard familiarity
- `Colors` mode: larger color palette with lightweight animated scenes
- `Numbers` pack: numbers-only board with parent-selected range and order
- `Child setup`: first-visit age band and play-style preferences stored only in local storage
- `Voice`: browser speech, shipped number clips, and direct family recordings from `public/audio/letters-by-nuha/`
- `Public pages`: contribute/share page plus share metadata and social preview image routes

## Stack

- TypeScript 5, strict mode
- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- pnpm
- Vitest
- Browser APIs: SpeechSynthesis, HTML Audio, Fullscreen, LocalStorage, Web Share

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
pnpm test
```

## Architecture

```text
src/
  app/
    layout.tsx
    page.tsx
    contribute/page.tsx
    opengraph-image.tsx
    twitter-image.tsx
    globals.css
  components/
    TypingGame.tsx
    BigKeyDisplay.tsx
    ColorPaletteBar.tsx
    ColorSceneIllustration.tsx
    ControlButtons.tsx
    KidProfileSheet.tsx
    NumberBoard.tsx
    ParentSettings.tsx
    SiteNav.tsx
    SiteFooter.tsx
    ShareActions.tsx
    VirtualKeyboard.tsx
  lib/
    constants.ts
    kid-profile.ts
    language-packs.ts
    learning-content.ts
    numbers.ts
    parent-settings-state.ts
    resolveLanguageKey.ts
    site.ts
    voice.ts
```

## Rules

- Keep the app client-side only.
- Store child setup and parent settings in local storage only.
- Explain local-only storage in natural language in the UI.
- Keep English `Letters` alphabet-only.
- Keep `Computer` separate from `Letters` and `Numbers`.
- Keep `Numbers` numbers-only.
- Keep color mode visual and scene-driven, not just text-on-color.
- Route all voice behavior through `src/lib/voice.ts`.
- Try direct family recordings in `public/audio/letters-by-nuha/` before community packs and speech fallback.
- Keep parent controls responsive and scroll-safe on mobile.
- Use restrained animation that still feels playful on desktop and mobile.
- Stage files by name, never `git add .` or `git add -A`.

## Do not build yet

- Accounts, login, cloud sync, or analytics
- Payments, subscriptions, or ads
- Backend APIs or database work
- AI tutoring, multiplayer, or heavy gamification
- Complex admin panels or dashboards

## Do not touch

- `universal/`
- `kids_typing_game_development_plan.pdf`
