# sounds-like-me — round 2

**GATE: FAIL** — improved on two seats, still short on all three conditions.

| seat | r1 | r2 | Δ |
|---|---|---|---|
| Narrative (Butcher) | 5 | 7 | +2 |
| Voice (Marzipan) | 8 | 8 | 0 |
| Slop (Barry) | 7 | 7 | 0 |
| Substance (Evans) | 6 | 6 | 0 |
| Reader (Redmon) | 4 | 6 | +2 |
| Truth | FAIL | FAIL | — |

- 5 of 6 ≥9? **No** — zero seats at 9
- No seat below 7? **No** — Substance 6, Reader 6
- Truth PASS? **No** — single blocking item: How I AI unlinked

**Loop guard:** round 2 of 3 used. Total improved (+4), so the no-improvement
brake did not trip. **Round 3 is the last permitted round.**

---

## Truth's single blocking item — RESOLVED after the seat ran

`VOICE.md` §4 requires outside ideas named **and** linked. Marzipan was linked;
How I AI was not. Kit supplied the URL after the review completed and it was
verified by fetch:

> *"How the founder of Morning Brew built a Claude content machine that never
> runs out of ideas and never sounds like slop | Alex Lieberman"* — How I AI,
> hosted by Claire Vo, guest Alex Lieberman, released 2026-07-20.
> https://podcasts.apple.com/us/podcast/how-the-founder-of-morning-brew-built-a/id1809663079?i=1000777544732

### Attribution escalation — bigger than the post

Lieberman's "Content Machine" as described in that episode has an Oracle, an
**Interview Panel**, **voice files**, and an **Editorial Council**. That is this
pipeline's architecture. Kit's opening request ("interview panel interviews me →
writes blog → editors panels review it → most pass 9 or more out of ten") traces
to this episode.

Kit disclosed the source; the pipeline under-weighted it and credited only the
host, unlinked, in a trailing sentence. Same shape as the Austin Marchese
correction, at project scale rather than post scale.

Also: Kit's word **"slop"** appears in the episode title. Borrowed term, not a
coinage, and the post uses it as load-bearing.

Pending Kit's decision on naming Lieberman in the post and crediting the episode
in `README.md`.

---

## The convergent finding — the drafter is the bottleneck

Slop, round 2, verbatim:

> *The machine has stopped writing Kit's words and started writing his paragraph
> breaks.*

§1a stopped the in-paragraph beat manufacturing. The same instinct relocated to
the joins. Documented instances this round:

- **¶4** — opens "I told myself that I was a bad writer," closes "No one's ever
  told me I'm a bad writer." Same construction inverted, bookending a paragraph,
  built from two different rounds. Round 1 merged these *because* isolating one
  was flagged; merging created a frame instead.
- **¶6→¶7→¶14** — "I hated typing" / "I hate typing" / "Because I hate typing"
  arranged into a refrain across paragraph boundaries from three separate
  answers in three separate rounds. Reader began skimming by the fourth
  instance.
- **¶9** — Q23 (round 5) spliced to Q1 (round 1) so the second lands on the
  first. Also shifts the referent of "From the very first one."
- **¶10 / ¶11** — consecutive paragraphs closing on the same negation shape
  ("it's not my voice at all" / "it still wasn't me").
- **¶10** — Kit's groping ("Too perfect? It was too synchronous like.
  Symmetrical like.") collapsed into one clean declarative. Voice: *"The
  sentence complaining about symmetry has been made symmetrical."*
- **¶16, ¶19, ¶3** — fragments re-punctuated, stutters trimmed. Voice: *"three
  separate repetition-trims across the draft is a habit, not three isolated
  calls."*

## Trace-table defects — round 2

Second consecutive round with an unreliable audit trail. Truth found:

1. Header claims 21 paragraphs. There are **20**.
2. Header claims 1 one-sentence paragraph. There are **0**; ¶7 has two.
3. Paragraph map off by one from ¶13 onward (stale round-1 numbering).
4. **Asserted a restoration that did not happen** — claimed the break in "I
   finished writing. Difficult probably." was restored. It was not.
5. "about 5 pages" — "about" inserted, logged as "filler deleted."
6. "One was almost kind of a technical class" — Kit said "they were." Inserted
   word repairing grammar, logged as verbatim.
7. "bandwidth" for spoken "width" — word substitution, unlogged.

**Standing conclusion:** the trace table must be treated as adversarial input
every round. `RUBRIC.md` §0's verify-don't-trust rule is the only reason these
were caught, twice.

---

## Material gaps that drafting cannot close

Both require Kit. Neither is fixable by rearranging what exists.

1. **The spine sentence.** Narrative: ¶7 states the intent; nothing anywhere
   states the intent was mis-sized. "You outsourced the writing when you only
   needed to outsource the keyboard" is **Claude's sentence, not Kit's** — he
   has never said it. It cannot enter the post until he does.
2. **An exhibit.** Substance: ¶10 is six unsupported adjectives. The post argues
   the AI posts didn't sound like him and contains no line from them. Q6 and Q21
   both asked; he answered at the level of "pretty much none of it is mine."

## Available without new dictation — for round 3

- Link How I AI (URL now in hand); name Lieberman pending Kit's call
- **Put the interview panel in.** Kit named Rogan, NetworkChuck, Zach and Jimmy
  out loud four times (Q1, Q3, Q4, Q14). All legal, all traceable, all absent.
  Substance calls this the most concrete fact about the setup. Fixes Reader's
  "is the interviewer a person or a machine," Substance's abstraction complaint,
  and Voice's "the post claims he jokes and contains no joke."
- Link the two AI posts so "what you see" has a referent for a cold reader
- Restore: ¶10 groping, ¶19 stutters, ¶3 break, ¶16 "I can't. Type as fast as
  I think. And."
- Un-frame ¶4; break the ¶6/¶7/¶14 refrain; unsplice ¶9
- Restore the chess-book self-correction inside one paragraph (not staged across
  two, which was the round-1 violation)
- Revert "about", "One was", and decide "bandwidth"/"width" with Kit
- ¶18 is a cut candidate (Narrative and Substance both) — drains the ¶17 landing
  before ¶20 picks it up
- Fix the "I wanted it" orphan and the dangling "Was like."

## Protect in round 3

Named by multiple seats as working:

- ¶1 landfill run, ¶3 *difficult*, ¶8 "Kind of. Slop.", ¶17 kid at 10 / kid at
  49, ¶20 close
- ¶18's unresolved "we'll find out when I look at the product that is produced"
  — Substance: *"Do not let a later round tidy this into confidence."* If ¶18 is
  cut for pacing, this sentence needs somewhere else to live.
- ¶4's unreconciled contradiction (told myself / nobody told me) — keep both
  halves, just stop framing them
- Zero em dashes, zero explained jokes, zero similes, sentence spread 1–39 words
