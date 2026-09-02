# Verification

First version of this file — scenarios below are backfilled from `.claude/session-log.md`
history where a real check happened, otherwise marked not yet verified. Update a scenario
only when it's completed or failed in a session; leave the rest alone.

## Post 6 — "More than just a super google" — live

**Verified in the real environment**, 2026-08-20. Pushed as `52d0737` via a scoped
`publish/super-google` branch (deploy run `32419689602`, 37s). Checked directly:
HTTP 200 on the published URL, opener/spec-line/closer all present in served HTML,
dated Aug 20 2026, listed on the blog index, present in `rss.xml`, all three outbound
links returning 200.
URL: https://kitapplegate.github.io/Kit-bashing/blog/more-than-a-super-google/

## Six-seat editor panel gate (`/post-review`)

**Not yet verified this session.** Historically exercised on the `robot-overlords` draft
(3 rounds, scores 33 → 35 → 44) before Kit rejected the draft's premise at the publish
gate 2026-08-20 and the post was rebuilt from a different spine. That rebuild shipped
under a reduced three-seat review Kit chose over the full panel — the full six-seat gate
has not actually passed a draft end-to-end yet as of this file's creation.

## `main` push to `origin`

**Not yet verified / currently blocked.** Local `main` has been diverged from
`origin/main` since 2026-08-20 (5 unpushed commits, 2 duplicating `52d0737`'s content
under different hashes), pending Kit's decision on how `.claude/session-log.md`
(never pushed, contains sensitive material) is handled. See `NEXT.md`.

## `/post-social`

**Not yet verified.** Has never been run for any shipped post (3, 5, or 6) as of
2026-08-20.
