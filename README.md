# Nuha Keyboard

A playful browser learning game for one child. Each tap or key press should feel immediate and fun: show the active item in large text, speak it aloud, change the colors, and show a friendly emoji reaction.

## Status

This repository has been prepared from the `pre-school-keyboard` template for the new project context in [kids_typing_game_development_plan.pdf](kids_typing_game_development_plan.pdf). The current build includes a playable browser app, parent settings, learning-mode switching, starter language packs, and a voice layer that can later move from browser synthesis to real open-source child voice files.

## Version 1 scope

- One main screen with a clear child-friendly prompt
- Parent settings with learning focus, language selection, and display controls
- Display the active letter, number, or color in very large text
- Speak the active item aloud with child-friendly wording
- Rotate soft palettes, emojis, and encouragement messages
- English letters mode focused on alphabet keys only
- Computer mode for full keyboard practice with floating key feedback
- Numbers mode with a dedicated counting board from `1-10`, `1-20`, `1-50`, or `1-100`
- Numbers mode supports straight, reverse, or random number order
- Colors mode with a tap-ready color bar and a softly tinted stage
- No backend, database, auth, analytics, payments, or complex game modes

## Planned app structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    BigKeyDisplay.tsx
    NumberBoard.tsx
    ControlButtons.tsx
    LanguageSelector.tsx
    RecentKeys.tsx
    TypingGame.tsx
    VirtualKeyboard.tsx
  lib/
    constants.ts
    getDisplayText.ts
    getSpeechText.ts
    language-packs.ts
    numbers.ts
    random.ts
    resolveLanguageKey.ts
    voice.ts
```

## Project docs

- `CLAUDE.md` is the project-specific instruction layer for coding agents.
- `project-template/project-context.md` captures the product rules and scope.
- `universal/` stays unchanged across projects and provides shared engineering conventions.
- `CONTRIBUTING.md` explains how to add new community language packs.

## Open-source direction

- `LICENSE` uses MIT so contributors can extend the project.
- New languages should be added as language packs in `src/lib/language-packs.ts`.
- English and Numbers now support an optional community voice-pack path in `public/audio/english-community-v1/`, with browser speech as fallback.
- Numbers already include a first real child-voice subset in `public/audio/numbers-child-v1/` for `1` to `9`, with `0` still falling back to browser speech.
- English computer mode now reuses those same child number clips for digit keys while letter clips are still added separately.
- Future real child voice assets should start with English, then expand to other packs through the shared voice abstraction in `src/lib/voice.ts`.
- The learning modes are already split so future parent controls can show only selected weak letters or custom keyboard subsets.

## Local testing

1. Install dependencies:

```bash
pnpm install
```

2. Start the local dev server:

```bash
pnpm dev
```

3. Open `http://localhost:3000`.

4. Manual checks for the current build:

- Open the parent settings button in the top-right corner
- Switch learning focus between `Letters`, `Computer`, and `Colors`
- In `Letters`, switch between English, Numbers, Arabic, and Bengali
- In English letters mode, confirm only alphabet keys are shown
- Press `A` and confirm it displays `A`, speaks `A`, and shows capital/small variants
- In `Computer`, press `.` or `Enter` and confirm full keyboard practice works with floating feedback
- In `Numbers`, change the range and order in parent settings and confirm the board updates
- In `Numbers`, confirm `1` to `10` can use the shipped child voice clips and higher numbers fall back cleanly
- In `Colors`, tap a color and confirm the main stage softly tints toward that color
- Confirm `Mute voice`, `Clear screen`, and `Go fullscreen` still work

5. Automated checks:

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

## Notes

- Version 1 is browser-only and local/private by design.
- No environment variables are required for version 1.
