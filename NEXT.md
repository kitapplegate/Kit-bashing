# Next

**Action:** The first time `/post-interview`, `/post-draft`, or `/post-review` runs in a
future session, confirm the editorial-memory wiring fixed today (`65fed5a`) actually
fires on its own — that the session reads `EDITORIAL-MEMORY.md`/`content-pipeline/feedback/`
without being told to, and that `/post-review` actually writes a new
`content-pipeline/feedback/<slug>.md` entry the first time Kit reacts to something,
rather than that only happening because a human pointed it out mid-session (as happened
today).
**Why now:** The fix has never been exercised by a session that starts cold and picks it
up unprompted — today's fix was applied only after Kit asked why the pipeline wasn't
learning, mid-session, after the mechanism had already silently gone unused for a week.
**Start here:** `CLAUDE.md`'s "Blog editorial memory" section, or any of the three
`.claude/skills/post-*/SKILL.md` files' new read/write-EDITORIAL-MEMORY steps.
**Verify with:** Watch the session's own tool calls (or ask it directly) — did it Read
`EDITORIAL-MEMORY.md` before drafting/reviewing, and did a `content-pipeline/feedback/`
file actually get created or updated when Kit gave a reaction?
**Watch out for:** Don't just ask the session "did you check editorial memory" and take
a yes at face value — confirm it actually opened the file (or ask it to show the read),
the same overclaiming trap this file's own verification ladder exists to catch.

**Deferred, not blocking:** Whether to delete the two untracked
`content-pipeline/drafts/more-than-a-super-google*.md` leftovers is still Kit's open
call from a prior session — untouched again this session, still sitting there.
`/post-social` has never been run for any shipped post, including today's; offered and
not yet answered.
