# steve-the-shrimp — round 2

GATE: FAIL — editor-truth returned FAIL (veto, two new issues); slop still
capped at 4 (hard-ban hit); narrative unchanged at 5; substance and reader
both dropped from round 1.

| seat | round 1 | round 2 |
|---|---|---|
| narrative | 5 | 5 |
| voice | 7 | 7 |
| slop | 4 | 4 |
| substance | 7 | 6 |
| reader | 9 | 7 |
| truth | FAIL | FAIL |

**Numeric total (5 scored seats, truth excluded): round 1 = 32, round 2 =
29. Round 2 did not improve on round 1.**

## STOP — no-improvement guard triggered

Per `RUBRIC.md` loop guard 2: "If a round's total score doesn't beat the
previous round, stop immediately. The panel is oscillating, not
converging." Round 2 scored lower than round 1 on two seats (substance,
reader) and unchanged on two others (narrative, slop), for a lower total.
**Stopping here rather than attempting round 3.** This is not a "try
again" situation per the pipeline's own rules — it needs Kit's direct
hand, or a clear decision on the open questions below before another
round is worth running.

## What actually happened this round

Round 2 added real, sourced, valuable new material (Kit's own dictation
on the business obsession and the friends/community vision, plus a
factual Reference section from directly inspecting the `shrimp-desk`
repo and its git history, at Kit's own request). That material is good.
The regression is on execution, not material:

1. **A fabricated detail (truth veto, new this round).** L48-50: "Nobody
   caught it until a friend's shrimp sat frozen in the same spot too
   long on a shared screen." This does not appear anywhere in the
   transcript or the Reference section — the Reference section
   describes the bug's mechanism and fix, never how it was discovered.
   The drafter invented a plausible-sounding discovery story. This is
   exactly the fabrication failure mode the pipeline's guardrails exist
   to catch, and it got through the fact ledger the drafter wrote (the
   ledger's own citation for this line doesn't hold up under the truth
   seat's check). **Must cut or get the real story from Kit.**

2. **A dropped attribution (truth veto, missed both rounds).** Kit's
   very first answer in the entire interview says Steve was directly
   modeled on Tamagotchi ("I kind of aspired by that made the pet
   shrimp"). Neither round 1 nor round 2 named it — the draft tells the
   "build one that won't die" origin as pure personal psychology, with
   the actual stated inspiration silently dropped. Same failure
   category as the Austin Marchese incident referenced in `VOICE.md`,
   smaller in scale. **Needs Tamagotchi named in the post.**

3. **Reader-seat regression (9 → 7).** The new bug-fix paragraph implies
   a friend was already running their own Steve; the community-vision
   paragraph three paragraphs later frames giving shrimp to friends as
   still aspirational ("eventually," "I don't have the whole thing
   sketched out"). The two don't line up. Root cause is the same
   fabricated detail from #1 — fixing that should also fix this.

4. **Substance-seat regression (7 → 6).** Real, already-cleared numbers
   from the Reference section got softened into vague prose instead of
   used: "It came together in one sitting" instead of the actual
   11:12am–7:34pm / 11-commit window; "cost way more" instead of the
   actual ~7,000x ratio; the tech stack (Python, tkinter, pystray,
   Pillow) Kit explicitly asked to have summarized never made it into
   the draft at all; the terminal-kill history behind `pythonw.exe` (a
   real "what broke first" beat) is sitting in the Reference section
   unused.

5. **Slop unchanged (4, hard-ban hit both rounds).** The closing
   paragraph — Kit's own real, unedited answer — still reads as a
   post-explaining-its-own-meaning closer per the `VOICE.md` §6 hard
   ban, regardless of the fact that every word in it traces to Kit.
   Narrative (both rounds) called this paragraph the piece's strongest
   structural choice and wants it kept, not cut — the fix is reordering
   (put the "picture it finished" paragraph last instead), not deleting
   real material.

6. **Voice unchanged (7).** The "silliness" line at the end of the
   phone-call paragraph is still flagged as over-smoothed (a garbled
   if/then turned into a tidy aphorism) rather than left rough. The two
   Reference-sourced paragraphs (bug fix, community hub) also read
   noticeably more uniform in rhythm than the surrounding dictated
   material — a structural tension between "real, cleared facts" and
   "Kit's actual cadence" that doesn't fully resolve just by trimming.

## Consolidated open questions for Kit

1. Do you want Tamagotchi named as Steve's direct inspiration? Your own
   first answer says it was — the draft has been dropping it.
2. What's the real story of how the render/movement bug was actually
   caught? The draft invented a "friend's frozen shrimp" moment that
   isn't in anything you said or in the repo. Needs your real version,
   or it comes out.
3. Confirm "Tom, Dick, and Harry's" is the idiom (everyone), not real
   people — Win+H appears to have redacted "Dick" as flagged language.
4. Are you fine with the Reference-section technical facts (build
   window, tech stack, the 7,000x number, the terminal-kill history)
   appearing in first-person narration, the way the Hermes/Nous
   Research line did in the Rabbit R1 post? If yes, there's real
   material substance flagged as unused that would strengthen the
   piece.
5. In 2020, "started thinking seriously about setting up tanks" — did
   that get as far as pricing equipment or anything concrete, or is
   "thought about it seriously" as far as it went? (Narrative's ask;
   answer only if there's actually more there — "that's as far as it
   went" is a fine answer.)
6. Confirm the description string.

## Recommendation

This is fixable without another full interview — mostly cuts, one
reorder, and restoring numbers that are already cleared for use. But per
the guard, it needs your call before another round: either you answer
#1–#3 above (quick) and the drafter applies the mechanical fixes (cut
the fabricated line, name Tamagotchi, reorder the closer, restore the
sourced numbers) for a round 3, or you take the round 2 draft by hand
from here.
