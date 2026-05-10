# Project Context - Nuha Keyboard

This is the project-specific layer that sits on top of the universal boilerplate conventions.

---

## Product

**Working product name:**
Nuha Keyboard

**Public-facing name candidate:**
Nuha Learn & Play

**What it is:**
A browser-only early learning playground for one child. It now covers alphabet learning, computer keyboard familiarity, number practice, and color learning in one playful experience. Parent-friendly controls shape the experience without requiring accounts or any backend.

**Who it's for:**
Families, especially parents helping young children learn letters, colors, numbers, and basic keyboard familiarity at home on a laptop, tablet, or shared computer.

**Core problem it solves:**
Give children a warmer, more visual, more forgiving way to explore foundational symbols and colors than a traditional school or worksheet-first approach.

**Current product shape:**
- `Letters` mode: alphabet-focused learning
- `Computer` mode: keyboard familiarity and simple typing play
- `Colors` mode: larger color palette with lightweight animated scenes
- `Numbers` pack inside letter flow: parent-selectable range and order
- First-visit child setup: age range and play-style preference
- Family voice path: browser speech plus local child audio assets
- Public contribute page and share-ready metadata

---

## Domain terminology

| Term | Meaning |
|---|---|
| Learning focus | The top-level practice mode: `Letters`, `Computer`, or `Colors`. |
| Language pack | Data describing one language's labels, prompts, voice strategy, and keyboard rows. |
| Number board | The dedicated numbers-only board with parent-selected range and order. |
| Child setup | The first-visit profile stored only in the browser, including age band and play style. |
| Parent settings | The caregiver control sheet for learning mode, language selection, visibility toggles, number range, and child setup edits. |
| Voice layer | Playback abstraction that can use browser speech, shipped audio assets, or family recordings. |
| Family voice folder | `public/audio/letters-by-nuha/`, where direct letter recordings like `a.mp4` are picked up automatically. |
| Color scene | The lightweight animated illustration shown in color mode using the selected color and child profile. |

---

## Key runtime models

| Model | Purpose |
|---|---|
| `gameState` | Stores the current stage content, palette, active item id, message, and preview color. |
| `kidProfile` | Child age band and play style, stored locally in the browser through a small external-store pattern. |
| `parentSettingsState` | Saved caregiver settings such as language, learning mode, number range, keyboard visibility, and controls visibility. |
| `selectedLanguagePack` | The active language pack used for prompts, direction, keyboard rows, and voice behavior. |
| `voiceState` | Whether voice is muted and whether the current playback strategy is available. |
| `numberBoardState` | Parent-selected number range and order, persisted in local storage. |

---

## External integrations

| Service | What it's used for | Auth method |
|---|---|---|
| Browser SpeechSynthesis API | Speak labels and fall back when audio files are missing. | None |
| HTML Audio | Play bundled child voice assets and direct family recordings. | None |
| Browser Fullscreen API | Offer a more immersive play mode. | None |
| Browser LocalStorage | Persist child setup and parent settings only on the current device/browser. | None |
| Web Share API | Native share fallback for the contribute page when supported. | None |
| Social share URLs | Facebook, LinkedIn, and X sharing from the contribute page. | None |

---

## Business rules

- Child setup and parent settings must stay local-only in the browser. No server-side storage.
- The UI should explain this in natural language because not all caregivers are technical.
- `Letters` mode for English should stay alphabet-only.
- `Computer` mode can include broader keyboard keys and floating key feedback.
- `Numbers` should remain numbers-only and support parent-selected range and order.
- `Colors` should feel visual, not abstract: the selected color should tint the stage and drive a simple scene.
- Real family recordings in `public/audio/letters-by-nuha/` should be tried first for English letters if a matching file exists.
- The voice layer must fall back gracefully through available sources and then speech synthesis.
- Parent controls should remain understandable and scroll-safe on mobile.
- Contribute and public-sharing surfaces should look like real project pages, not placeholders.

---

## Scope boundaries

### Do build in the current phase

- Child-first learning modes and parent controls
- Local-only personalization
- Family voice recordings and future community voice packs
- Public contribution surface and social metadata

### Do not build yet

- User accounts, cloud sync, analytics, or admin dashboards
- Payments, subscriptions, donations backend, or ads
- Server APIs, databases, or auth flows
- Complex level systems, AI tutoring, or multiplayer
- Public CMS/blog system

### Do not touch

- `universal/` - shared boilerplate guidance that should stay identical across projects
- `kids_typing_game_development_plan.pdf` - original source brief

---

## Current architecture direction

1. Keep learning content data-driven in `src/lib/`.
2. Keep family/browser persistence in local external-store helpers, not ad hoc component logic.
3. Keep stage rendering lightweight and animation restrained so mobile performance stays stable.
4. Keep every new learning pack compatible with the same display, voice, and parent-control patterns.
5. Keep public-facing pieces such as metadata, nav, footer, and contribution page aligned with the actual product state.
