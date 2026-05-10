# Project Context - Nuha Keyboard

This is the project-specific layer that sits on top of the universal boilerplate conventions.

---

## Product

**What it is:**
A browser-only typing game for a young child. Every key press should show the real key in large text, speak it aloud, and trigger a playful visual reaction with bright colors, emojis, and encouraging messages. The app now also supports language switching and a clickable virtual keyboard so community contributors can expand it over time.

**Who it's for:**
One child in a private family setting, primarily on a laptop or tablet with a physical keyboard.

**Core problem it solves:**
Turn raw keyboard input into immediate, fun feedback so keyboard exploration feels like entertainment instead of study.

**MVP definition of done:**
The app opens to a single screen, reacts to any key press, speaks the pressed key with friendly wording, updates the colors and reaction UI, keeps the last 10 keys visible, lets the user switch between starter language packs, and offers a clickable virtual keyboard.

A user can: open the app, press any keyboard key, see the key clearly, hear it spoken aloud, and continue pressing keys with updated reactions and recent history.

---

## Domain terminology

Define terms specific to this product so agents use consistent language:

| Term | Meaning |
|---|---|
| Display text | The exact text shown on screen for the pressed key, such as `A`, `1`, `Space`, or `Esc`. |
| Speech text | The child-friendly spoken form of the pressed key, such as `A`, `one`, `dot`, or `space`. |
| Reaction | The combined visual response for a key press: background color, key color, emoji, and encouragement message. |
| Recent keys | The rolling history of the last 10 key presses shown in the UI. |
| Language pack | The data definition for one language's dropdown label, voice config, prompts, and virtual keyboard rows. |
| Voice layer | The playback abstraction that currently uses speech synthesis and can later switch to audio files per language. |

---

## Key runtime models

List the main client-side state models and their purpose:

| Model | Purpose |
|---|---|
| `currentKey` | Stores the latest pressed key shown in the large central display. |
| `recentKeys` | Stores the last 10 display values for the history list. |
| `reactionState` | Stores the current background color, text color, emoji, and encouragement message. |
| `audioState` | Stores whether speech is muted and whether the active voice strategy is available. |
| `selectedLanguagePack` | Stores the current dropdown selection and its virtual keyboard layout. |

---

## External integrations

| Service | What it's used for | Auth method |
|---|---|---|
| Browser SpeechSynthesis API | Speak the friendly key name aloud after each key press until real audio packs are added. | None |
| Browser Fullscreen API | Let the child enter a more immersive full-screen mode. | None |
| HTML Audio | Future open-source child voice playback from local assets or hosted files. | None |

---

## Business rules

Constraints that are not obvious from the code:

- Spoken text must match the actual key pressed. Examples: `1 -> one`, `0 -> zero`, `.` -> `dot`, `/ -> slash`.
- Letters should display in uppercase and speak as their uppercase letter names.
- Special keys use friendly display and spoken names such as `Space`, `Enter`, `Backspace`, `Shift`, and `Escape`.
- Each key press should update the display, speech, reaction, and recent history as one coherent interaction.
- Recent history keeps at most 10 keys.
- Clear resets the current key, reaction text, and recent history.
- The app must stay client-side only in version 1.
- Language packs should be data-driven so contributors can add new scripts without rewriting the game loop.
- Voice playback should be abstracted so English can later switch to real kid voice files first, then other languages can follow the same pattern.
- Future parent controls should be able to show all keys or only a selected subset of weak letters from the same language pack.

---

## Scope boundaries

### Do not build in version 1

- Login, user accounts, parent dashboards, or settings panels
- Database, cloud sync, analytics, or backend APIs
- Payments, subscriptions, ads, or public marketing pages
- AI features, leaderboards, multiplayer, or complex level systems
- PWA install flow until the core experience is stable

### Do not touch

- `universal/` - shared boilerplate guidance that should stay identical across projects
- `kids_typing_game_development_plan.pdf` - source project brief from the user

---

## Build order

1. Create the Next.js app shell and the single main screen with a "Press any key!" prompt.
2. Implement keydown handling plus `getDisplayText` and `getSpeechText`.
3. Add speech playback, random colors, emoji reactions, and encouragement messages.
4. Add Mute/Unmute, Clear, and Fullscreen controls.
5. Add language packs, dropdown switching, and the virtual keyboard.
6. Keep the voice layer ready for future real audio assets and expand tests for language-pack behavior.
