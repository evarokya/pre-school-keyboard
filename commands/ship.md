# Ship Command

Prepare this branch for merge.

Run each step in order. Stop and report the failure clearly if any step fails.

```bash
pnpm lint        # fix all lint errors before continuing
pnpm typecheck   # fix all type errors before continuing
pnpm test        # all tests must pass
pnpm build       # build must succeed
```

Then verify manually:

- No `.env` files or secrets staged (`git diff --staged` - scan visually)
- New env vars documented in `.env.example`
- No backend, analytics, or third-party tracking introduced
- Key mappings cover letters, numbers, punctuation, and special keys such as Space, Enter, Backspace, Shift, and Escape
- Speech and Fullscreen behavior fail gracefully when the browser does not support them
- `universal/` remains unchanged

Finally:

- Summarize what this PR changes in 2-3 sentences (what changed and why)
- Flag any known limitations or follow-up items
