---
name: post-review
description: Stage 3 of the blog pipeline — run the six-seat editor panel against a draft, apply the pass gate, and manage the rewrite loop. Use when Kit says /post-review, "score the draft", or wants a post reviewed before publishing.
---

# Stage 3 — The Editor Panel

Read `content-pipeline/RUBRIC.md` before starting. It is the authority on
scoring, the gate, and the loop guards.

---

## Step 0 — Traceability gate (runs first, mechanical)

Open `content-pipeline/drafts/<slug>-facts.md` (the fact ledger produced by
`/post-draft`).

**Any fact with no transcript source means the draft does not get scored.**
Stop, report the unsourced facts to Kit, and either cut them or get his words
to replace them. Do not convene the panel on a contaminated draft — you'd be
scoring prose nobody wrote.

If there is no fact ledger at all, the draft didn't come from `/post-draft`.
Tell Kit and stop.

---

## Step 1 — Convene the panel

Launch all six seats **in parallel, in a single message**, each with the draft
path and the transcript path:

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

1. **Round 3 already done?** Stop. Hand Kit the blocking notes and let him
   take it by hand. Do not start round 4.
2. **Did total score fail to improve over last round?** Stop immediately. The
   panel is oscillating, not converging. Say so plainly.

If both guards clear, the rewrite is **still subtract-only** — reread
`content-pipeline/drafts/` skill rules. You may cut and reorder in response to
notes. You may not write.

Most blocking notes will resolve one of three ways:

- **Cut it** — the note says a paragraph does no work. Delete it.
- **Reorder** — the note says the structure is wrong. Move things.
- **Ask Kit** — the note needs material that isn't in the transcript. Collect
  these into a short list and have him dictate more (Win+H). Append his new
  answers to the transcript, then draft again.

**Never resolve a note by writing a sentence.** A seat asking for "a more
concrete detail here" is asking Kit a question, not asking you to supply one.
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
