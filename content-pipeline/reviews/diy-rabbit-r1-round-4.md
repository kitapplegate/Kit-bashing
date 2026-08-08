# diy-rabbit-r1 — round 4 (extra round, Kit-authorized past the 3-round cap)

GATE: FAIL — voice, substance, reader all below 7; truth FAIL

| seat | score |
|---|---|
| narrative | 8 |
| voice | 6 |
| slop | 9 |
| substance | 5 |
| reader | 6 |
| truth | FAIL |

## What the restructure fixed

- Narrative jumped 6 → 8 — moving the camera/watchdog backstory before
  "tonight" and giving it varied pacing resolved the "deflating coda"
  problem and the four-competing-disasters flatness.
- Slop held at 9 — genuinely clean, one minor em-dash note.
- Truth's one remaining issue was small and fixed immediately: "instantly"
  in the closing line had the identical untraced-from-interviewer's-
  question problem as "in two seconds," missed in the same sentence when
  that was cut last round. Now cut.

## The real tension surfacing this round

**Substance (5) and reader/voice (6, 6) are pulling in opposite
directions, and it isn't a bug — it's a genuine editorial choice this
draft hasn't made yet.**

- Substance wants the technical material the written brief actually has:
  three distinct named camera bugs, the WebView/mic-button story, the
  actual mechanism behind the latency fix (Hermes's ACP protocol vs.
  oneshot cold-starts), real commands or output.
- Every time material like that has gone in (this round's Termux/
  Termux:API naming, earlier rounds' protocol language), reader has
  flagged it as an unexplained jargon cluster and voice has flagged it as
  reading like spec-sheet copy pulled from the brief rather than
  something Kit said.
- Voice separately flagged something different this round: real
  smoothing losses, not jargon — "The itch didn't care" (not sourced,
  reads as a writer's line), and Kit's actual fourfold "I wanted... I
  wanted... I wanted..." repetition in the transcript collapsed into one
  tidy sentence, which VOICE.md §1a explicitly says should be a deliberate
  choice, not default smoothing.

These can't both be maximized by editing alone. More brief-derived
technical density helps substance and hurts voice/reader. Less hurts
substance and helps the others. That's a judgment call about what kind of
post this is — technical build log vs. personal narrative with technical
texture — not something the review loop can resolve by itself.

## Blocking notes, consolidated

**Voice (6):**
- "The itch didn't care" (L22) — unsourced, too-tidy personification.
- Kit's real "I wanted... I wanted... I wanted..." repetition (transcript
  Q2) smoothed into one parallel-structure sentence — worth asking him
  directly whether he wants that texture back.
- Luna/hallucination line over-explains its own joke.
- General: no shipped rough edges anywhere — every sentence reads
  polished, unlike the Marzipan reference corpus.

**Substance (5):** wants the three named camera bugs, the WebView/mic
story, and more mechanism on the latency fix — all sitting in the written
brief, unused. Also wants literal commands/output, which don't exist
anywhere in the transcript or brief to pull from.

**Reader (6):** Termux/Termux:API "two apps" detail still lands as
confusing even after the reword; wants Claude explicitly tagged as AI on
first mention rather than left inferable.

**Truth:** FAIL on "instantly" (fixed immediately, see above), otherwise
clean — the round's actual structural changes (reordering, not new facts)
verified accurate.

## Recommendation

This is the fourth round on this redo cycle (past the normal 3-round cap,
run at Kit's explicit request). Given the substance/voice-reader tension
is a real editorial fork rather than a fixable error, further automated
rounds are unlikely to converge without Kit choosing a direction. Handing
this back rather than running a round 5.
