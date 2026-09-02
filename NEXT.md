# Next

**Action:** Ask Kit whether `content-pipeline/drafts/more-than-a-super-google.md` and
`more-than-a-super-google-facts.md` should be deleted now that post 6 is published and
verified live, or kept intentionally — same cleanup call just made for the abandoned
`robot-overlords` interview/reviews.
**Why now:** They're untracked leftovers from a post that already shipped
(`52d0737`, verified live 2026-08-20); nothing currently reads them, and today's session
already removed the sibling `robot-overlords` files for the same reason ("ditched that
idea a while ago").
**Start here:** `git status --porcelain` in `C:\AI\blog` — the two files are the only
remaining untracked content-pipeline output.
**Verify with:** `git status --porcelain` shows them either gone or explicitly kept with
a documented reason.
**Watch out for:** `content-pipeline/` is deliberately untracked as a whole (public repo,
sensitive transcript content) — don't `git add` these even if Kit says keep them; the
question is disk cleanup, not tracking status. Also still open and unrelated to this:
local `main` is diverged from `origin/main` by 5 commits (two duplicate `52d0737`'s
content under different hashes) and `.claude/session-log.md` has never been pushed —
both block any future push of `main` and need Kit's decision, not a default resolution.
