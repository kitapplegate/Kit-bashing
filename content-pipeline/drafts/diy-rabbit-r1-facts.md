# Fact ledger — "Faux Bunny R1" (post-round-4, Kit final-word correction)

## Kit's final correction (2026-08-07, after reading the round-4 draft)

Kit's own words: *"the only thing i dont like it that i knew what luna
was and has selected it because it was cheap. 80% off right now. i knew
hermes wasnt hallucinating. but its in there and i want it changed."*

This retracts the "sounded made up... like Claude had just hallucinated a
model name" framing in the Luna/latency paragraph — that detail was drawn
from the written brief's phrase "'gpt-5.6-luna' looked like a
hallucination," but Kit never experienced it that way himself and rejects
it now that he's read it. Fixed: he picked Luna deliberately, knowing what
it was, because it was 80% off. This is a direct Kit correction under G6
(he's the last gate and can override anything, including facts pulled
from the written brief) — not run back through the panel, per his explicit
"just make it happen."

## Round 3 changes (fixing round-2 truth FAIL + voice/narrative/slop/reader/substance notes)

**Truth fixes:**
- Cut "in two seconds" from the closing paragraph — same failure class as
  round 1's "missing comma": it only ever appeared in the interviewer's
  own question (Q14), never in Kit's actual answer. Missed once already
  in a different location; caught and fixed this round.
- Added a real, verified link for Hermes → Nous Research
  (`github.com/NousResearch/hermes-agent`, confirmed via web search as the
  actual official repo, not guessed) — resolves the "named but not
  linked" attribution gap.

**Voice fixes:**
- Rewrote the closing paragraph to remove a rhetorical-question opener
  ("Does it bother me...? No.") — this is an explicit VOICE.md §6 hard
  ban ("rhetorical questions used as section transitions"). Now a plain
  declarative sentence.
- Broke up the tricolon in the opening ("No computer... no smartphones,
  just cookbooks...") into two flatter sentences — flagged as
  too-symmetrical, workshopped rhythm.
- Replaced "Here's the mechanism, best I understand it:" with "I guess,
  best I understand it," — closer to Kit's actual hedge language in the
  transcript ("so I guess what I understand..."), addressing the note
  that hedges had been stripped out everywhere.

**Slop fix:**
- Cut "It hadn't." (negate-then-correct) from the Luna paragraph, folding
  the correction into the setup sentence instead.

**Narrative fix:**
- Reordered the closing three paragraphs so the piece ends on the
  itch/marzipan callback ("the itch is scratched...") instead of the AI
  reflection — narrative flagged competing endings pulling away from the
  piece's own frame.

**Reader fixes:**
- Added a one-sentence description of what the finished device actually
  does (push a button, it talks back, cards instead of app icons) —
  sourced from the written brief's physical-feature list, phrased
  casually rather than as a spec list. Also addresses substance's ask for
  what the gadget experience is like, not just the debugging.
- Added light clarifying framing to the Termux/Termux:API mention ("Termux,
  basically a Linux terminal for the phone") since naming both apps by
  name (added last round for substance) had created a dense unglossed
  cluster.
- Added "than Python was" after "R's a lot more forgiving" to remove a
  brief ambiguity with "Rabbit R1" from earlier in the piece.

## Round 2 changes (fixing round-1 truth FAIL + substance/reader/voice/slop notes)

**Truth fixes (real errors, not false positives):**
- Cut "found it in about five minutes" — invented, no basis anywhere in
  the transcript.
- Cut "one missing comma" — only ever appeared in this session's own
  interview *questions*, never confirmed in Kit's actual answer to Q11.
  Carried over by mistake from memory of the deleted first-attempt
  transcript, where he did say it explicitly — but that transcript no
  longer exists and this one doesn't have it. Open question below if Kit
  wants to reconfirm it in his own words.
- Fixed a day-conflation: "walked the factory floor" (from Q9, the
  field-test day) had been spliced onto the Walmart-purchase paragraph
  (Q1, a different day). Removed from the Walmart paragraph.

**Substance fixes (sourced material that existed but wasn't used):**
- Restored the "Luna sounded like a hallucination" beat — in the written
  brief ("'gpt-5.6-luna' looked like a hallucination but was a real model
  Kit had picked during setup"), not used in round 1.
- Restored more of the actual latency-fix mechanism ("paying the full
  startup cost every time I said anything" instead of just "fixed that")
  — paraphrased from the written brief's cold-start/persistent-session
  explanation, kept non-jargony per reader seat's earlier note about
  technical term clusters.
- Named the two apps in the signing-key mismatch (Termux, Termux:API) —
  from the written brief, not stated by name in this round's Q&A.

**Narrative fix:**
- Added an explicit time marker ("Earlier in the build, before any of
  tonight") to the watchdog paragraph — narrative flagged that it read as
  part of tonight's session when it wasn't.

**Reader fixes:**
- Added a short clarifying appositive at first mention of Rabbit R1 ("the
  AI gadget everybody's been talking about") — sourced from the written
  brief's own description ("standalone AI hardware gadget").
- Cut "and Codex" from the closing paragraph — reader and substance both
  flagged it appearing with zero context in the post's last lines. Open
  question below if Kit wants it back with more explanation of what Codex
  actually did.

**Voice/Slop fixes (both seats flagged the same two spots):**
- Cut "the same Claude helping me build the thing, just doing different
  work now" (camera paragraph) — self-annotation / explained-the-joke tell.
- Cut "Two people who'd already had whole careers, both starting
  completely over." (hairdresser paragraph) — a tidied summarizing
  sentence with no equivalent in Kit's looser transcript language; ends
  the paragraph on his own words instead.
- Softened "Claude's idea, not mine" to "was Claude's idea" (watchdog
  paragraph) — removed the negate-then-correct construction while keeping
  the fact.

| fact / claim | transcript source |
|---|---|
| Marzipan moment origin story: Christmas Eve, ~25 years ago, fiancée's first family meeting, dominoes, dug through mom's cookbooks, brother-in-law later coined "marzipan moment" | Q1, Q5 |
| Having a marzipan moment over the Rabbit R1 — kept pulling it up on Amazon, talking himself out of it | Q1 |
| Decided to build his own to save money | Q1 |
| Traveling for work, not at home, no old phones on hand; considered waiting until home, didn't | Q1 |
| Drove to Walmart on the way back to the hotel from work (day unspecified beyond "traveling for work" — NOT stated to be the field-test day), bought a $40 Motorola prepaid phone | Q1 |
| Wanted: a personal assistant, standalone device (not his phone), talk instead of type (hates typing), learn his patterns, track appointments, maybe eventually email integration | Q2 |
| Runs on Hermes, an open-source agent framework from Nous Research | written brief |
| Rabbit R1 is a standalone AI hardware gadget | written brief |
| Camera: black square on first attempt, took a long time to get it talking to the camera at all; Hermes has no image recognition built in, handed to Claude instead | Q3 + written brief |
| Tonight was a field test; had the device in the car all day between work meetings, walking the factory floor; came back to the car, got "failed to fetch"; "I was like, well, crud" | Q9 |
| Didn't try to fix it on the spot — went and got a haircut instead | Q9 |
| Hairdresser: asked about weekend plans, both working the weekend; she's 45, back in school for cybersecurity, wants to do penetration testing; Kit is 49, was Coast Guard then insurance, now going into network engineering | Q10 |
| Debugging process: went through settings one at a time; battery checked first (already unrestricted), also checked for anything causing deep sleep — both ruled out; notifications were the last thing checked, and that was it | Q7 |
| Notification-channel mechanism, in Kit's own words: phone optimizes itself by shutting down apps unused for a while to save battery; an app receiving notifications is kept open instead; turning notifications on fixes it | Q8 |
| Latency: replies taking about 20 seconds regardless of model (written brief: "~20s"); model was "Luna," sounded like a hallucinated name but was real, picked by Kit himself in setup (written brief); thought it was model size, swapped Luna → Haiku, same latency; real cause was a new session opening from scratch every message, paying full startup cost each time, instead of staying persistent; fixed, replies dropped to under a second (written brief: "~1s warm"); "hindsight's 2020," could've stayed on Luna | Q4/Q1 + written brief |
| Backend was unstable earlier in the build — would close if Kit stepped away (e.g. to the bathroom); watchdog to detect and restart it was Claude's idea | Q13 |
| Watchdog required two apps — Termux and Termux:API — signed with the same key; fix was sideloading the mismatched one fresh from F-Droid; quick once identified | Q6 + written brief (app names) |
| Six years ago: Python class, assignment on lists, stuck on a bug, called a friend who found it; "about ready to pull out hair I don't have"; dropped the class partly because of this; prefers R, more forgiving | Q11 |
| Feels good having it done; built with Claude (Codex also mentioned by Kit in Q12, transcribed as "Kodak's," but cut from the draft this round for lacking context — see open question); "a little bit of a high"; itch is scratched; has the device now, wants to use it and keep upgrading it; plans to use it a week and reassess, "probably longer than a week knowing me" | Q12 |
| Closing reflection on AI catching bugs instantly vs. his six-years-ago struggle: doesn't bother him, "I'm an idiot and AI is so much smarter than me... does not make me mad at all" | Q14 |

## Written prose

- Para 1-2: sequencing/connective language is mine; facts trace to Q1.
  Para 2 now also carries a clarifying appositive on what a Rabbit R1 is,
  sourced from the written brief.
- Para 3: "Underneath it runs on Hermes..." sentence is drawn from the
  written brief, not spoken material — same known tension as round 1,
  kept minimal (one plain sentence).
- Para 6 (debugging): sequencing is close paraphrase of Q7's own order.
- Para 6 (mechanism): kept as Kit's own hedge ("best I understand it").
- Para 7 (latency): the hallucination beat and the "paying the full
  startup cost" phrase are both drawn from the written brief, worked into
  connective prose around Kit's own red-herring narration.
- Para 8 (watchdog): app names drawn from written brief; time marker is
  mine, added for chronology per narrative's note.
- Para 9 (comma story): ends flat on "found it," no invented specifics.
- Closing: "and Codex" removed; rest is close paraphrase of Q12/Q14.

## Real people named

- Unchanged: no real person named. No AI persona in the draft body.

## Open questions for Kit

- What was the actual bug in the Python class — was it really a missing
  comma, like the interviewer assumed? Only your own words count as a
  source here, so if you want that detail back in, say it plainly and
  I'll add it.
- Was the Walmart purchase on the same day as tonight's field test, or a
  different day? The draft no longer specifies — worth confirming in case
  it matters for the timeline.
- Codex was cut from the closing line for lacking context. Want it back
  in, with a line on what it actually did on this build?
- Confirm the description string and the title (still "Faux Bunny R1,"
  your own earlier edit — open to changing now that the piece leads with
  marzipan).
- Whether you want Hermes/Nous Research linked before publish.
