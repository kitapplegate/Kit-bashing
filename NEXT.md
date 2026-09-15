# Next

**Action:** The next time `/post-interview`, `/post-draft`, or `/post-review` runs, confirm the editorial-memory wiring (`65fed5a`) fires on its own: the session reads `content-pipeline/EDITORIAL-MEMORY.md` before working, and writes a `content-pipeline/feedback/<slug>.md` entry when Kit reacts.
**Why now:** Still never exercised by a cold session; the 2026-09-15 LinkedIn work didn't run any `/post-*` stage.
**Start here:** `CLAUDE.md` "Blog editorial memory" section, and the read/write steps in `.claude/skills/post-*/SKILL.md`.
**Verify with:** the session's own tool calls show a Read of `EDITORIAL-MEMORY.md` and a created/updated `feedback/` file. Don't accept a "yes I checked" without the read.
**Watch out for:** LinkedIn-only material goes in `.gitignore` one slug per line before any commit; this repo is public.
