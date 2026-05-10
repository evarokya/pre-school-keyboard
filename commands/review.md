# Review Command

Review staged changes: `git diff --staged`

Check each category. Reference exact file paths and line numbers.

**1. Correctness**
- Pressed key is the same key displayed and spoken
- Friendly mappings are correct for letters, numbers, punctuation, and special keys
- Recent history is capped at 10 and updates in the intended order
- Clear, Mute/Unmute, and Fullscreen behave correctly
- Event listeners are attached once and cleaned up on unmount

**2. Browser API safety**
- `SpeechSynthesis` is used only on the client and guarded for unsupported browsers
- `Fullscreen` calls handle missing API support and rejected requests
- No speech queue buildup or duplicate listener registration

**3. Accessibility and kid UX**
- Main text is readable at a distance
- Color changes preserve usable contrast for text and controls
- Controls remain usable with keyboard-only navigation

**4. Types**
- No `any` without explanatory comment
- No unsafe `as Foo` assertions that hide runtime errors
- Shared types stay consistent between display and speech helpers

**5. Scope**
- No backend, database, auth, analytics, or tracking added in version 1
- No premature game modes, rewards, or parent dashboards
- No half-finished code

**6. Tests**
- New business logic in `src/lib/` has matching Vitest tests
- Tests assert behavior, not implementation
- Special-key and punctuation mappings have explicit coverage

**7. Git hygiene**
- No secrets staged
- No unrelated boilerplate files modified
- `universal/` remains untouched unless explicitly requested

Output format - one line per finding:

```text
[BLOCKING]  path/to/file.ts:42  - problem. required action.
[WARNING]   path/to/file.ts:88  - problem. should fix before merge.
[NITPICK]   path/to/file.ts:101 - optional improvement.
```
