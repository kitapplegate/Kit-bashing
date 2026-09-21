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

## Post 7 — "Trying to be more productive while not being productive at all" — live

**Verified in the real environment**, 2026-09-09. Pushed as `f8b6b82` (merged into `main`
as `eb3607b`), deploy run `34408264499` succeeded (`gh run watch`). Checked directly via
`WebFetch`: the actual post text (opening disclaimer, closing line) is present on the
served page, the post is listed on the blog index with the right title/date, and it
appears as the newest item in `rss.xml` with the approved description.
URL: https://kitapplegate.github.io/Kit-bashing/blog/adhd-productivity/

## Post 8 — "I can see why people are mad at AI" — live

**Verified in the real environment**, 2026-09-16. `npm run build` passed (13 pages), pushed
`4826590` to `main`, deploy run `35168643725` succeeded (`gh run watch --exit-status`).
Checked with `curl`: HTTP 200 on the post URL, served HTML contains "Mobile Bay" and
"lurk in the shadows like a creeper," title on the blog index, slug in `rss.xml`.
URL: https://kitapplegate.github.io/Kit-bashing/blog/people-mad-at-ai/

## Six-seat editor panel gate (`/post-review`)

**Verified in the real environment**, 2026-09-09, on the `adhd-productivity` draft —
first time the full panel has actually run end-to-end for real, blind, multiple rounds.
Ran four rounds (round 4 at Kit's explicit request past the normal 3-round cap): scores
5/7/7/7/6/PASS → 6/7/10/7/6/PASS → 7/8/9/8/7/PASS → 6/7/10/9/9/PASS. The formal gate
(5 of 6 seats at 8-10) never actually passed — Narrative stayed capped at 6-7 across all
four rounds because the panel kept asking for a "shown" disaster beat that genuinely
doesn't exist in the source transcript, and inventing one would violate G1. Kit exercised
G6 to approve publish despite the unmet gate, explicitly accepting a sub-8 Narrative
score as legitimate when the true story is genuinely disjointed. All four rounds archived
in `content-pipeline/reviews/adhd-productivity-round-{1,2,3,4... }.md` (note: round 4's
scores were captured in the session log/conversation, not a separate archived round-4.md
file — see Next).
Also new this run: `/post-draft` was done by shelling out to the Codex CLI (`codex exec`,
sandboxed to this repo) instead of Claude authoring the prose directly, at Kit's request.
Confirmed working end-to-end (Codex produced both the draft and its fact ledger, in the
correct pipeline format) — first time this repo's pipeline has used an external CLI
agent for the drafting stage.

**2026-09-16, `people-mad-at-ai`:** two blind rounds, both FAIL. Round 1:
6/8/8/6/6/FAIL (34). Round 2: 7/7/8/7/8/FAIL (37). Both Truth vetoes were real: outside
claims with no links, then Kit's claim reworded to fit a found source. No round 3; the
drafter hand-applied the notes and Kit approved under G6.

## Pipeline rule changes of 2026-09-16 (`a4276c7`)

**Not yet verified.** These rules are implemented only and haven't run in any session:
`## Closed questions` in transcripts, the post-draft 2d source rule, the pre-panel
self-check, the 2-round cap, and `model: sonnet` on editor-voice/slop/reader.

## `main` push to `origin`

**Verified in the real environment**, 2026-09-09. The divergence described above is
resolved — pushed two commits (`65fed5a` editorial-memory wiring, `f8b6b82` publish),
merged a remote README commit (`c1aa9e9`) that landed mid-session with no conflicts,
merge commit `eb3607b`, confirmed `git push origin main` succeeded.

## `/post-social`

**Not yet verified.** Offered for `adhd-productivity` at the end of the session; Kit
went straight to `/run-exit` without answering. Still has never been run for any shipped
post as of 2026-09-09.

2026-09-21: LinkedIn-only copy `social/jev-citation-check.md` drafted by hand (the
skill wasn't invoked), hook + closing question per `282a86b`. Kit approved it and is posting it
himself. **Not observed live.** The skill itself is still unexercised.

## Editorial memory feedback loop (`EDITORIAL-MEMORY.md` / `content-pipeline/feedback/`)

**Verified in actual use**, 2026-09-16. A cold `/post-interview` → `/post-draft` →
`/post-review` → `/post-publish` run read `EDITORIAL-MEMORY.md` and `feedback/` at the
start of each stage because the skill steps say to. It wrote
`content-pipeline/feedback/people-mad-at-ai.md` as Kit reacted and added three standing
decisions to `EDITORIAL-MEMORY.md`.

*Earlier status, kept for history:* **Not yet verified in actual use.** Built 2026-09-02 (`00589a3`) but the read/write
protocol lived only in `AGENTS.md`, which nothing was actually reading — confirmed today
that no session (including today's, until midway through) had ever consulted it or
written to it. Fixed 2026-09-09 (`65fed5a`): `CLAUDE.md` now points to the protocol, and
`post-interview`/`post-draft`/`post-review` each have an explicit read step, with
`post-review` also getting an explicit write-feedback step. Wrote a real feedback record
this session (`content-pipeline/feedback/adhd-productivity.md`) and promoted two
provisional patterns into `EDITORIAL-MEMORY.md`'s table — but that was done manually,
not because a skill's new instruction triggered it (the instruction didn't exist yet when
this session's earlier stages ran). The fix itself has not yet been exercised by a
session that starts cold and picks it up on its own.
