# RUBRIC.md — The Editor Panel

**Status:** Standing authority for how drafts are scored. Amend deliberately.

Every seat scores the draft **1–10** and writes notes. Seats never see each
other's scores, and never see scores from previous rounds — anchoring inflates
everything and the loop stops meaning anything.

---

## The gate

*Amended 2026-08-07 by Kit: passing band lowered from 9-10 to 8-10 — "any
below 7 is a fail" was his framing. A lone score of exactly 7 is a judgment
call, not an auto-pass or auto-fail — see below.*

A draft passes when **both** are true:

- **5 of 6 seats score 8–10**
- **No seat scores below 7**

A seat scoring exactly **7** doesn't auto-fail the draft, but it also doesn't
count toward the "5 of 6" majority. If the majority condition is only missed
because of one or more 7s (not because of an actual sub-7 score), weigh it
against the total picture — how many 7s, how close the notes are to
resolved, whether the seats at 7 are basically "fix this one thing" notes —
and use judgment on whether it's close enough to ship or needs another round.
Don't use this as a loophole to wave through a draft with three 7s; it exists
for the case of one seat sitting right at the line while everything else
cleared 8+.

Plus one override:

- **Truth & Attribution has a veto.** Any unsupported claim, missing credit, or
  crossed disclosure boundary fails the draft outright, regardless of every
  other score — including a numeric score of 10. Factual problems are not
  tradeable against good prose.

> *Note:* Kit's original rule was "4 of 5 seats ≥9, none below 7." The Slop
> Detector was added as a sixth seat after the AI-voice problem was diagnosed,
> so the majority threshold scaled with it. Same spirit, one more seat.

---

## Loop guards

The rewrite loop is the most dangerous part of this pipeline. It has three
brakes:

1. **Max 3 rounds.** After the third failed round, stop and hand Kit the
   blocking notes. Do not keep grinding.
2. **No-improvement detector.** If a round's total score doesn't beat the
   previous round, stop immediately. The panel is oscillating, not converging.
3. **Blind scoring.** Seats get the draft and the transcript. Never prior
   scores, never prior notes, never "this is round 3."

**Why these exist:** the loop's real failure mode is not bad prose, it's
*fabrication*. An editor asks for a specific detail, the writer invents one,
and the draft scores *higher* because invented details read well. The traceability
check in §7 is the primary defense; these guards are the backstop.

---

## The six seats

### 1. Narrative

*Does this hold together as a story?*

Is there a real scene with a real moment in it? Does the opening earn the
second paragraph? Is there something at stake? Does the ending land somewhere
the beginning pointed at, or does it just stop?

- **10** — one clear moment, everything else serves it, the close is earned
- **7** — readable and ordered, but it's a report rather than a story
- **4** — a pile of true things in roughly chronological order
- **1** — no discernible shape

### 2. Voice

*Does this sound like Kit?*

Scored against `VOICE.md` §2. Looking for: uneven sentence lengths, concrete
absurd specifics, jokes left unexplained, first-thought phrasing left alone.

- **10** — indistinguishable from a Marzipan post with better subject matter
- **7** — recognizably him, but sanded down in places
- **4** — generic competent blogger
- **1** — could have been written about anyone by anyone

### 3. Slop Detector

*Are there AI fingerprints in here?*

Scored against `VOICE.md` §3. **Count the tells and cite line numbers.** This
seat does not do vibes — it does forensics.

- **10** — zero tells
- **9** — one isolated tell
- **7** — two or three tells, or one tell used as a repeated rhythm
- **4** — the punchline tax is running (most paragraphs land something)
- **1** — reads like the current two posts

Any occurrence of a §6 hard ban caps this seat at **4**.

### 4. Substance

*Is there anything actually in here?*

Real specifics: numbers, commands, error messages, what broke, what it cost,
what he actually did. A post about doing a thing must contain the thing.

- **10** — a reader could follow the same path, or at least see it clearly
- **7** — concrete but thin; more "what happened" than "what happened exactly"
- **4** — mostly reflection about a thing rather than the thing
- **1** — could have been written without doing anything

### 5. Reader

*Can someone who doesn't know Kit follow this?*

No unexplained jargon. Context supplied before it's needed. The reader is
smart but has not read the other posts and does not know what a mind-dump
vault is.

- **10** — a stranger reads it start to finish without stalling
- **7** — one or two spots need a re-read
- **4** — assumes context the reader doesn't have
- **1** — inside baseball

### 6. Truth & Attribution — *has veto*

*Is all of this true, and is everyone credited?*

Checklist, all four required:

- [ ] Every factual claim traces to a specific line in the transcript
- [ ] Every idea, tool, or person that came from outside is named and linked
- [ ] No disclosure boundary from `VOICE.md` §4 is crossed
- [ ] No invented numbers, commands, dates, or quotes

- **10** — all four clean
- **7** — all four clean but attribution is buried where a reader would miss it
- **Fail** — any box unchecked, regardless of everything else

---

## 7. The traceability check

*Amended 2026-08-12: the sentence-by-sentence trace table below is retired
— it was wrong in all three rounds of `sounds-like-me` and generated more
review noise than signal. Replaced by the fact ledger produced in
`/post-draft`.*

Runs before the panel, not as part of it. Mechanical, not a judgment call.

Open `content-pipeline/drafts/<slug>-facts.md`. For each fact or claim listed,
confirm it cites a transcript source. Any fact with no source is either
**cut** or **converted into a question for Kit** — never kept and never
rewritten into something defensible. This is not a sentence-level check —
ordinary connective prose doesn't need its own citation, per `VOICE.md` §1.

A draft with no fact ledger, or with an unsourced fact still in it, doesn't
get scored at all. Fix it first.

---

## 8. What gets archived

Every round writes `content-pipeline/reviews/<slug>-round-N.md`:

- All six scores and full notes
- The traceability table
- Which gate condition failed
- What changed going into the next round

This is how the rubric sharpens. If a seat is always giving 9s, its bar is too
low and it needs rewriting. If a seat never clears 7, either the bar is wrong
or the pipeline has a real weakness.
