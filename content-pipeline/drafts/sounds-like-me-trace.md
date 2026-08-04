# Traceability — sounds-like-me — ROUND 3

Source: `content-pipeline/interviews/sounds-like-me.md` (Q1–Q32, rounds 1–6)

> **This table has been wrong in both previous rounds** — 4 defects in round 1,
> 7 in round 2, including a false summary header and an assertion that a
> restoration had happened when it had not. Verify every row against the
> transcript. Do not trust the summary counts; they are the part that has failed
> most often.

**Verified counts, recomputed rather than carried forward:**
- Body blocks (including the blockquote as its own block): **27**
- Em dashes: **0**
- Word count: **1165** — over the 700–1000 band in `VOICE.md` §5, see FLAG 6

---

## FLAGS — read before scoring

**FLAG 1 — the panel paragraph is the highest arrangement risk in the draft.**
"All right, Joe Rogan asks. Network choke Chuck. Sorry, network Chuck. And then
Zach, Zach said, you had a machine write your memoir…" is assembled from three
separate interjections in three separate answers: Q1 (T:20), Q3 (T:38-39), Q4
(T:51-52). Every word is Kit's, spoken while answering. **But he never said them
together, and putting them in one paragraph creates a comic effect he did not
create.** This is exactly the §1a failure the Slop seat has flagged twice. It is
here because the Substance seat identified this material as the most concrete
fact about the setup and called its absence blocking. Two seats will likely
disagree about it. That is the panel's call, not the drafter's — it is flagged,
not hidden.

Sub-risk: the Zach line is Kit **restating a question Claude asked him**. He
spoke the words; he did not originate them.

**FLAG 2 — the blockquote is not from the transcript.** The shirt line is quoted
from `src/content/blog/why-the-jump.md:15-16`, Kit's own published post. It is
an exhibit, not narration. Kit selected it at Q29 ("I think the shirt example is
least me"). Verify the quote is character-accurate against that file.

**FLAG 3 — "bandwidth" is Claude's choice, not Kit's.** Q31: *"Honestly, I don't
remember if I said width or bandwidth."* He declined to decide. Q5 (T:76) says
"width"; Q7 (T:99) says "bandwidth" clearly. Claude selected "bandwidth" on that
basis. **This is a word substitution the author did not authorize.** Flagging
rather than burying it, per the round-2 finding where the same substitution went
unlogged.

**FLAG 4 — the description is NOT confirmed.** Q32 was asked and Kit answered
"I don't know that question. Sorry, I don't know that." `VOICE.md` §5 exempts
the description from the Law **but requires his explicit approval of the exact
string.** That approval does not exist. Current string carried forward
unchanged. Must be resolved at the publish gate.

**FLAG 5 — a Claude frame was removed this round.** Rounds 1–5 were built on
"Kit outsourced the writing when he only needed to outsource the keyboard."
Q28 retracts it: writing *is* typing, and always was. That sentence never
appeared in a draft, but it shaped three rounds of structure. ¶9 now carries
Kit's actual position.

**FLAG 6 — word count is 1165 against a 700–1000 band.** Further cuts would
have hit material the round-2 panel explicitly protected (¶2 landfill, ¶4
*difficult*, ¶13 groping, the "product that is produced" line, the ¶14
self-contradiction, the restored repetitions). The drafter declined to
unilaterally cut protected content to hit a convention. Panel and Kit to rule.

---

## Round-2 violations and disposition

| violation (seat) | disposition |
|---|---|
| ¶4 opened and closed on the same inverted construction — a frame built across rounds (Voice, Slop) | **Fixed.** Split into two paragraphs. "No one's ever told me I'm a bad writer" now sits where Kit put it — at the end of the Q5 block, immediately before Marzipan. His sequence, not an arrangement. |
| "I hated typing" / "I hate typing" / "Because I hate typing" arranged into a refrain (Slop, Reader) | **Fixed.** "I hated typing" cut from ¶7's end; "Because I hate typing. I hate it." cut from ¶19. Two instances remain, non-adjacent. |
| ¶9 spliced Q23 to Q1 (Slop, Voice, Narrative) | **Fixed.** Separated. Q1's block (¶12) now runs in Kit's own order and restores the chair and the evening that Narrative and Substance both asked for. Q23 stands alone at ¶17. |
| ¶10 groping collapsed to "It was too symmetrical" (Voice — "the sentence complaining about symmetry has been made symmetrical") | **Restored.** "Too perfect? It was too synchronous like. Symmetrical like. Well, mine was flawed and. Deadpan." |
| ¶19 de-stuttered (Voice) | **Restored.** "that I that I really don't really don't have to worry about judging. Judging how my mind. Is." |
| ¶3 break after "I finished writing" not actually restored, though the table claimed it was (Truth N2) | **Actually restored this time.** "I finished writing. Difficult probably. Misspelled and then." Also restored "faster than my. Than what my fingers can do." |
| ¶16 "I can't. Type as fast as I think. And." re-punctuated (Slop) | **Restored** with both fragments. |
| chess-book self-correction deleted (Substance, §1a) | **Restored inside one paragraph** — not staged across two, which was the round-1 violation. |
| "about 5 pages" — inserted word (Truth N1) | **Reverted** to "I kind of just got just like 5 pages." |
| "One was almost kind of a technical class" — inserted word (Truth N3) | **Cut entirely** along with the essay-course clause, for length. |
| How I AI unlinked — Truth's sole veto item | **Linked.** URL supplied by Kit and verified by fetch 2026-08-03. |
| Lieberman uncredited | **Added** at ¶18 per Q30, using his words: "he's the one that I got the thing from." |
| interview panel absent (Substance — blocking) | **Added** at ¶19. See FLAG 1. |
| "what you see" has no referent for a cold reader (Reader — blocking) | **Partially fixed.** ¶15 links "AI posts" to `why-the-jump`. Only one of the two is linked. |
| "The them is my grandkids" — interview artifact (Reader, Narrative, Voice) | **Fixed** by reorder: "I would tell my grandkids and also my children that I had a computer write it for me." Kit's words, his order inverted only. |
| ¶10 is six unsupported adjectives (Substance — blocking) | **Fixed.** ¶14 blockquote is the exhibit. See FLAG 2. |
| stale ¶ numbering, wrong header counts (Truth N6) | **Recomputed** from the file, not carried forward. |

---

## Paragraph map

| ¶ | source | notes |
|---|---|---|
| 1 chess book | Q8 (T:115-117) + Q12 (T:155-159) | self-correction restored inside one block |
| 2 landfill | Q13 (T:163-164) | protected — untouched |
| 3 paper, never pursued | Q8 (T:116-119) | |
| 4 *difficult* | Q9 (T:123-129) | protected; **source breaks restored** |
| 5 told myself | Q8 (T:112-115) | |
| 6 no confidence, classes, no one's ever told me | Q5 (T:66-73) | **Kit's own sequence, unrearranged** |
| 7 Marzipan | Q5 (T:74-78) | "I hated typing" cut to break the refrain; link per Q26 |
| 8 the handover | Q16 (T:189-190) | complete verbatim answer |
| 9 writing *is* typing | Q28 (T:~250) | leading "I hate typing." cut (third instance) |
| 10 voice to text, Slop | Q17 (T:194-195) | Win+H mid-phrase periods joined |
| 11 *(merged — no ¶11 in current numbering)* | | |
| 12 first one, good enough, the chair | Q1 (T:22-27) | Kit's order; chair + evening restored |
| 13 too perfect, groping | Q2 (T:31-33) + Q6 (T:88-90) | **groping restored** |
| 14 blockquote | `why-the-jump.md:15-16` | see FLAG 2 |
| 15 shirt is least me, AI posts | Q29 (T:~256) + Q21 (T:217-219) | |
| 16 fed it the website | Q22 (T:223-226) | |
| 17 two posts | Q23 (T:230-231) | |
| 18 How I AI, Claire Vo, Lieberman | Q18 (T:199-201) + Q7 aside (T:104) + Q30 | Lieberman sentence joined from Q30 fragments |
| 19 the setup | Q10 (T:133-138) | repetitions intact |
| 20 the panel | Q1, Q3, Q4 | **see FLAG 1** |
| 21 thoughts on paper | Q7 (T:96-100) | self-contradiction intact |
| 22 the joke | Q24 (T:235-237) | only joke in the post |
| 23 grandkids, not cheating | Q19 (T:205-206) + Q11 (T:142-146) | fragments restored |
| 24 kid at 10 / kid at 49 | Q14 (T:168-170) | protected |
| 25 product that is produced | Q15 (T:175-176) | protected per Substance |
| 26 scattered and shattered | Q15 (T:177-180) | stutters restored; print approved Q25 |
| 27 not a bad writer | Q31 unprompted | new this round |
| 28 finish it | Q20 (T:210-213) | |

*(Numbering above is by content block; the file has 27 blocks because ¶11 was
merged away. Verify against the file rather than this column.)*
