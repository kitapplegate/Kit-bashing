---
name: post-review
description: Stage 3 of the blog pipeline — run the six-seat editor panel against a draft, apply the pass gate, and manage the rewrite loop. Use when Kit says /post-review, "score the draft", or wants a post reviewed before publishing.
---

# Stage 3 — The Editor Panel

Read `content-pipeline/RUBRIC.md` before starting. It is the authority on
scoring, the gate, and the loop guards. Also read
`content-pipeline/EDITORIAL-MEMORY.md` and any feedback record in
`content-pipeline/feedback/` relevant to this post — a pattern already
settled there shouldn't cost another round to rediscover.

Whenever Kit reacts to a review decision, a score, or a piece of wording
during this stage — approves, rejects, overrides a gate, or explains a
judgment call — record it in `content-pipeline/feedback/<slug>.md` before
moving on, per the template in `content-pipeline/feedback/README.md`. This
is the write side of the pipeline's memory; skipping it is how the same
notes end up getting rediscovered post after post.

---

## Step 0 — Traceability gate (runs first, mechanical)

**Before opening anything else: grep `content-pipeline/interviews/<slug>.md`
for every Q-number the fact ledger cites.** Any citation that doesn't resolve
to an actual line in the transcript file means a chat answer got relayed
without being appended. Stop and append it now, verbatim, before doing
anything else — including replying to Kit. This has caused a false truth veto
on two separate posts (`robot-overlords` rounds 2 and 3-prep) *after* the rule
against it was already written down once. Writing the rule down didn't fix it;
checking the file mechanically, every time, before scoring, does.

Open `content-pipeline/drafts/<slug>-facts.md` (the fact ledger produced by
`/post-draft`).

**Any fact with no transcript source means the draft does not get scored.**
Stop, report the unsourced facts to Kit, and either cut them or get his words
to replace them. Do not convene the panel on a contaminated draft — you'd be
scoring prose nobody wrote.

If there is no fact ledger at all, the draft didn't come from `/post-draft`.
Tell Kit and stop.

---

## Step 0b — Append Kit's new answers to the transcript FIRST

**This has caused a truth veto on two separate posts.** Any answer Kit gives in
chat — a ruling, a correction, a new fact, a consent decision — must be appended
to `content-pipeline/interviews/<slug>.md` **before** the panel convenes, and the
fact ledger must cite it there.

Relaying a chat answer straight to the drafter and citing it to an existing Q
number is how `robot-overlords` round 2 fed the panel three fabricated citations.
The truth seat then vetoed three genuine Kit statements as invented — and it was
right to, because the record didn't hold them.

If Kit said it and it isn't in the transcript file, it does not exist.

### Only ask Kit what only Kit can know

Kit's ruling, 2026-08-20, after a question batch he called "getting a little
ridiculous": three of four questions were pipeline work pushed at him — choosing a
source to link, interpreting what a discount meant, and a structural option written
in pipeline jargon he couldn't parse.

Ask him: what happened, what someone said, what he thinks, what he consents to.
**Don't** ask him: which source to link, how to resolve a seat disagreement, or
anything phrased in the pipeline's own vocabulary. Make those calls, tell him what
you decided, and let him overrule at the publish gate under G6.

### Closed questions stay closed

The transcript's `## Closed questions` section (see `/post-draft` step 2c)
lists everything Kit has already answered, including "I don't remember."
**Drop any seat note or question that re-asks one. Don't relay it, don't
reword it, and don't count it as blocking.** When Kit answers a new question
in this stage, add it to that section in the same turn you append his answer.
Kit, 2026-09-16, the third time a panel asked what the talk builder did when
it broke: *"we're burning tokens because of this ... you should be getting on
the 1st one now figure it out."*

## Step 1 — Convene the panel

Launch all six seats **in parallel, in a single message**, each with the draft
path and the transcript path. Tell each seat: *"Don't raise anything listed
under `## Closed questions` at the bottom of the transcript. Kit has already
answered it."* That is not round information, so it doesn't break blind
scoring.

Seat models are set in each agent's frontmatter. Voice, Slop and Reader run
on Sonnet, because their work is mostly comparing the draft against a
checklist. Narrative, Substance and Truth stay on the default model. Kit
approved this 2026-09-16 to cut token spend. Don't override it per run.

- `editor-narrative`
- `editor-voice`
- `editor-slop`
- `editor-substance`
- `editor-reader`
- `editor-truth`

**Blind scoring is mandatory.** Do not tell any seat:

- what round this is
- what any other seat said
- what the previous round scored
- that a previous round happened at all

Anchoring inflates scores and turns the loop into theater.

---

## Step 2 — Apply the gate

Apply the current gate exactly as written in `RUBRIC.md` §"The gate" — do not
hardcode the numbers here, they've drifted out of sync with `RUBRIC.md` before.
As of the last amendment there: 5 of 6 seats in the 8–10 band, no seat below 7
(a lone 7 is a judgment call, not an auto-fail — see `RUBRIC.md` for how to
weigh it), and `editor-truth` must return PASS (veto, overrides every other
score).

Present the result as a table:

```
seat          score
narrative       9
voice           8   ← blocking
slop           10
substance       9
reader          9
truth        PASS

GATE: FAIL — voice below 9, 4 of 6 at 9+
```

---

## Step 3 — On pass

Show Kit the scores and the full notes. Then stop and wait. **The panel does
not publish.** Human approval is a separate stage and it is not optional —
`/post-publish` handles it.

---

## Step 4 — On fail — the rewrite loop

Check the loop guards **before** starting another round:

1. **Round 2 already done?** No round 3 panel. Apply the round 2 notes
   directly, re-run the `/post-draft` self-check and the Step 0 traceability
   grep by hand, archive what changed, and hand the draft to Kit for
   `/post-publish` under G6. *(Cap lowered from 3 to 2 by Kit, 2026-09-16,
   after `people-mad-at-ai` spent two ~270k-token rounds and he called the
   loop ridiculous.)*
2. **Did total score fail to improve over last round?** Stop immediately. The
   panel is oscillating, not converging. Say so plainly, then take the same
   hand-finish path as guard 1.

If both guards clear, rewrite under the amended Law in `VOICE.md` §1: prose is
free, facts are locked. `editor-barry` or the drafter may write, cut and
reorder in response to notes. *(An older version of this step said the rewrite
was subtract-only. That rule was retired 2026-08-03 and this line had drifted.)*

Most blocking notes will resolve one of four ways:

- **Cut it** — the note says a paragraph does no work. Delete it.
- **Reorder** — the note says the structure is wrong. Move things.
- **Rewrite it** — the note is about wording, rhythm or clarity, and the fix
  uses facts already in the transcript.
- **Ask Kit** — the note needs material that isn't in the transcript *and*
  isn't closed. Ask each open item once, in a short list with at most three
  questions. Append his answers to the transcript and add them to `## Closed
  questions`, then draft again. If he says he doesn't remember, the draft
  lives without it.

**Never resolve a note by inventing a fact.** A seat asking for "a more
concrete detail here" is asking Kit a question, not asking you to supply one.
The same goes for sources: never reword Kit's claim to match a source you
found (`/post-draft` step 2d).
Fabrication is the failure mode this whole pipeline exists to prevent, and it
enters right here, because invented details score *well*.

---

## Step 5 — Archive every round

Write `content-pipeline/reviews/<slug>-round-N.md`:

```markdown
# <slug> — round N

GATE: PASS | FAIL — <which condition>

| seat | score |
|---|---|
| narrative | 9 |
...

## Blocking notes
<consolidated, by seat>

## Questions for Kit
<consolidated across all seats — dedupe>

## Changes going into round N+1
<what was cut, moved, or asked>
```

This archive is how the rubric sharpens. A seat that always returns 9 has a bar
set too low and needs rewriting; note that when you see it.
