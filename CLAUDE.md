# Nuha Keyboard

Playful browser typing game for one child that displays and speaks the actual pressed key.

Repo:    TBD
Domain:  local-only / private family app
License: MIT

## Stack

- Language:        TypeScript 5, strict mode
- Package manager: pnpm
- Framework:       Next.js 16 App Router
- Frontend:        React + Tailwind CSS
- Browser APIs:    SpeechSynthesis API, HTML Audio, Fullscreen API
- Backend:         None in version 1
- Testing:         Vitest + React Testing Library
- Node:            >=20

## Commands

```bash
pnpm install               # install dependencies after the app is scaffolded
pnpm dev                   # start local development server
pnpm build                 # production build
pnpm lint                  # lint project files
pnpm typecheck             # run TypeScript checks
pnpm test                  # run unit tests
```

## Architecture

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    TypingGame.tsx
    BigKeyDisplay.tsx
    RecentKeys.tsx
    ControlButtons.tsx
    LanguageSelector.tsx
    VirtualKeyboard.tsx
  lib/
    getSpeechText.ts
    getDisplayText.ts
    random.ts
    constants.ts
    language-packs.ts
    resolveLanguageKey.ts
    voice.ts
```

Dependency flow:

```text
app/page.tsx
  -> components/TypingGame.tsx
TypingGame.tsx
  -> components/BigKeyDisplay.tsx
  -> components/RecentKeys.tsx
  -> components/ControlButtons.tsx
  -> components/LanguageSelector.tsx
  -> components/VirtualKeyboard.tsx
  -> lib/getSpeechText.ts
  -> lib/getDisplayText.ts
  -> lib/random.ts
  -> lib/constants.ts
  -> lib/language-packs.ts
  -> lib/resolveLanguageKey.ts
  -> lib/voice.ts
```

## Brand rules

| What | Correct | Never use |
|---|---|---|
| Product name | Nuha Keyboard | pre-school-keyboard, Pre School Keyboard, generic SaaS boilerplate |
| Domain | local-only / private app | public marketing domain placeholders |
| Package scope | `nuha-keyboard` | template scope names |

No fake social proof: no customer logos, no testimonials, no GitHub star counts, no compliance badges, no user or revenue metrics.

## Do not build in version 1

- Login, user accounts, or parent dashboards
- Database, cloud storage, or analytics
- Payments, subscriptions, or ads
- AI features, leaderboards, or multiplayer
- Complex levels, reward systems, or admin panels
- PWA/offline mode until the base experience is stable

## Build order

1. Scaffold the Next.js app shell and main full-screen typing screen.
2. Implement key capture, display text mapping, speech text mapping, and speech playback.
3. Add random colors, emoji reactions, encouragement messages, and key-press animation.
4. Add Mute/Unmute, Clear, and Fullscreen controls.
5. Add recent key history, special key polish, and tests for mapping helpers.
6. Keep the language-pack model open so contributors can add more scripts and future audio assets.

## Rules

- No `any` without an explanatory comment
- Keep keyboard mapping logic in `src/lib/` and UI state in `src/components/`
- No backend, database, login, analytics, or network calls in version 1
- Spoken text must match the actual key pressed, including friendly names for numbers, punctuation, and special keys
- Recent key history is capped at 10 items
- Gracefully handle browsers that do not support speech or fullscreen APIs
- Language switching and virtual-keyboard behavior should be driven by `src/lib/language-packs.ts`
- Voice playback should go through `src/lib/voice.ts` so packs can later move to real audio assets
- Future parent controls should be able to filter keyboard rows down to selected weak letters without redefining a language pack
- Stage files by name - never `git add .` or `git add -A`
- Commit messages: imperative mood, no AI co-author lines, no file lists

## Do not touch

- `universal/` - shared boilerplate conventions stay unchanged
- `kids_typing_game_development_plan.pdf` - source brief from the user
