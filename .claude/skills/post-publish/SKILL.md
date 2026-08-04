---
name: post-publish
description: Stage 4 of the blog pipeline — Kit's approval gate, then move the draft into the Astro content collection, push, and verify the post is actually live. Use when Kit says /post-publish or a draft has passed the editor panel and he wants it shipped.
---

# Stage 4 — Approval and Publish

---

## Step 1 — The human gate (not optional)

**Nothing publishes without Kit reading it in full and saying yes.**

Show him the final draft in the conversation. Not a summary — the whole thing.
Then ask plainly whether it ships.

Six AI seats scoring 9s is not approval. It's his name, his family, and his
history. The panel checks quality; Kit checks whether he wants it to exist.

If he wants changes, they are **his words**, dictated. Not yours. Take them
and go back to `/post-draft` rules.

---

## Step 2 — Move into the content collection

Copy the approved draft to `src/content/blog/<slug>.md`.

Verify against `src/content.config.ts` — the schema requires:

- `title` (string)
- `description` (string)
- `pubDate` (coercible date, format `'Mon DD YYYY'`)
- `updatedDate` (optional)
- `heroImage` (optional, must resolve to a real file in `src/assets/`)

A bad `heroImage` path fails the build. If there's no image, omit the key
entirely — don't leave it commented in with a fake path.

---

## Step 3 — Build before pushing

```
npm run build
```

If it fails, fix it before going near git. A broken build means the deploy
workflow fails and the post silently doesn't appear — which has already
happened on this blog once.

---

## Step 4 — Ship

Branch, commit, merge to `main`, push. `main` is what
`.github/workflows/deploy.yml` deploys from — nothing else triggers it.

Commit message: plain description of the post. Follow repo convention.

**Do not schedule the publish for later via a cloud routine.** That was tried
on 2026-07-24, the routine never fired, and Kit found out because the post
wasn't there on Friday. If he wants a future publish date, either publish now
with a future `pubDate`, or put it on his calendar and run this skill that day.

---

## Step 5 — Verify it is actually live

This step is why this skill exists. **Do not report success after pushing.**

1. Watch the Actions run to completion:
   ```
   gh run watch
   ```
   or `gh run list --limit 3` until the deploy job succeeds.

2. Then **fetch the real URL** and confirm the post's text is on the page:
   `https://kitapplegate.github.io/Kit-bashing/blog/<slug>/`

   Note the `/Kit-bashing/` base path — this is a project repo, not a user
   site. A post that 404s here usually means a base-path problem, not a
   content problem.

3. Confirm it appears in the blog index and in `rss.xml`.

Only after the fetch returns the actual post text do you tell Kit it's live.
"Pushed successfully" is not "published."

---

## Step 6 — Hand off to social

Ask whether he wants LinkedIn / X / Bluesky copy. If yes: `/post-social`.

Then update `.claude/session-log.md` if the session is wrapping.
