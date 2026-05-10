# Contributing

Nuha Keyboard is intentionally small and open so contributors can add more child-friendly language packs over time.

## Local setup

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Before you open a PR

Run the full checks:

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm build
```

## Adding a new language pack

The keyboard layouts live in `src/lib/language-packs.ts`.

Each language pack defines:

- `id`: stable machine-readable id
- `label`: English-facing name in the dropdown
- `nativeLabel`: native-script label shown in the UI
- `description`: short contributor-facing explanation
- `direction`: `ltr` or `rtl`
- `prompt`: idle headline for the main display
- `hint`: idle helper text
- `voice`: current playback strategy
- `rows`: the clickable virtual keyboard layout

Each key can define:

- `value`: the underlying key value
- `label`: the small button label
- `displayText`: override for the large center display
- `speechText`: override for spoken text
- `speechLang`: override for speech language
- `assetKey`: future audio asset id
- `size`: `regular`, `wide`, or `full`

## Voice architecture

Today, all packs use browser speech synthesis through `src/lib/voice.ts`.

The voice layer already supports a future `audio-files` mode, so a pack can later switch to real open-source child voice assets without changing the game loop. The intended path is:

1. Start with English voice assets.
2. Store them under a predictable public path.
3. Point the English pack's `voice` config at those files.
4. Add matching `assetKey` values for every spoken key.
5. Expand the same pattern to Arabic, Bengali, numbers, and future community packs.

## Pull request scope

Keep PRs focused:

- One language pack, one UI improvement, or one bug fix at a time
- Do not mix template boilerplate edits with gameplay changes
- Do not edit `universal/` unless the change is genuinely template-wide

## Testing new language packs

For every new pack:

1. Confirm the dropdown switches to the pack.
2. Confirm the virtual keyboard renders correctly.
3. Click several keys and verify the large display, speech, and recent history.
4. Add or extend unit tests in `src/lib/__tests__/`.
