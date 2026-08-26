# Fact ledger — dumpster-fire-all-stars

| fact / claim | transcript source |
|---|---|
| Kit has always wanted to run a keeper league | Q1 |
| Started thinking AI gave him "superpowers," decided to build and host his own platform instead of just doing analytics for the existing draft | Q1 |
| "It'll be super easy. Barely an inconvenience." (his phrase, garbled Win+H capture of "super easy, barely an inconvenience") | Q1 |
| It has turned out to be neither easy nor low-inconvenience | Q1 ("Well it's turned out to be not super easy and a lot of inconvenience") |
| Doing the build solo — "just me and Claude," "the blind leading the blind" | Q1 |
| Quality-of-life gaps are glaring right when needed | Q1 |
| Interview took place ~3 days before the real draft date | Q1 |
| Invite codes weren't tracked per-recipient; Kit can no longer tell which code went to which person | Q6, Q9 |
| "I was dumb. I should have done it better. But I didn't." | Q9 (verbatim) |
| Kit is a player/owner of one of the league's teams | Q7 |
| Built a separate AI commissioner so the commissioner role wouldn't also be a player with skin in the game; calls it "more of an experiment"; can override it anytime because he gave himself all permissions | Q7 |
| Kill-switch/crash-recovery drill was "completely Claude" — Kit was "completely hands off" | Q8 |
| "Most of my coding... I'm not actually coding, it's Claude" | Q1, Q8 |
| League name "Dumpster Fire All-Stars" was Claude's suggestion after Kit asked for something funny | Q1, Q10 |
| Kit laughed immediately on seeing the name and said (paraphrased close to verbatim) it fit because the project is a dumpster fire right now | Q10 |
| League is 10 teams total | Q5 |
| A couple of nephews and some friends of a friend are in the league | Q5 |
| Friends said "yeah, send me the link, I'm definitely in" when pitched, then didn't sign up | Q5 |
| A full mock draft was scheduled the night before this interview and didn't happen because nobody had signed up for it | Q12 |
| If seats are still empty on draft day, the platform autopicks — a bot drafts for the empty seat, and a person who logs in later doesn't get the team they wanted, they get what the bot already took | Q13 |
| Tonight's plan: another email, texts to whoever he has numbers for, maybe a call to his nephew, "a lot of praying" | Q17 |
| Claude got UX details wrong — buttons overlapping, things not completable from a phone — and Kit had to correct them | Q18 |
| Kit doesn't have the money to pay for NFL player/draft data, so keeping the platform free was the goal, and he believes he's solved it | Q15, Q19 |
| Normal build setup: home desk, curved monitor, chair, a dog bed next to him where his dogs keep him company | Q14 |
| Currently away from home, working from a laptop in a side room at his dad's | Q14 |
| Not doing this for recognition; will be proud of it either way; "I can only get better from here" | Q12, Q20 (verbatim close) |
| As of Q21 (2026-08-26), exactly 1 of 10 seats is claimed — Kit's own, "just me, all by myself" | Q21 (verbatim) |
| Kit called off the scheduled mock draft before launching it, because nobody had signed up for it; his own assessment: "kind of boring" | Q21 (verbatim) |
| Kill -9 test: ran while draft was pending/no picks on board; process (PID 318641) killed instantly with no warning; systemd relaunched a new copy (PID 318659) in ~5 seconds, came up healthy; a separate "mid-live" test (crash during active picking) is still outstanding, planned for the mock/rehearsal | Q21 — see drafter's note below on register |
| A `systemctl restart` (graceful) test also ran and came back healthy, prior to the kill -9 test | Q21 |
| Player data source is nflverse, a free/open-source project that republishes the NFL's own data | Q21 |

## Written prose

- Opening two sentences — my framing, combining two established facts (AI commissioner exists; invite-code tracking is broken) into a cold open.
- "somewhere in the last month... superpowers" paragraph — paraphrase of Q1, compressed.
- "It has turned out to be neither of those things." — one-line written transition.
- Invite-code paragraph — restructured into a short scene; his own sentences ("I was dumb...") kept verbatim inside it.
- AI-commissioner paragraph — restructured/compressed from Q7.
- "Ask me what I actually do here..." paragraph — the heaviest rewrite in the draft. Combines Q10's "the whole thing was for me not to do anything" with Q8's kill-switch admission into one written argument. Flagging for extra reviewer attention.
- League-name paragraph — light compression of Q1/Q10, his reaction line kept close to verbatim.
- "The draft is Saturday..." paragraph — combines facts from Q5, Q12, and Q13 into one written scene; the individual facts are sourced but the paragraph itself is composed.
- Data-pride paragraph — combines Q15, Q19, and the nflverse fact from Q21 (renders the fact in his register; Q21's own phrasing for this was reference-documentation style, not dictated — see note below).
- Closing paragraph — synthesizes Q12 and Q20's sentiment; final line ("I can only get better from here") is his, verbatim.
- Kill -9 outcome sentences appended to the "ask me what I actually do" paragraph — renders Q21's PID/timing facts in plain register rather than quoting Q21's own structured writeup, per that answer's drafter's note (it reads as pasted technical documentation, not spoken material).
- "The draft is Saturday..." paragraph — headcount ("one of ten seats," "just me, all by myself") and the mock-draft-called-off sentences are Q21, lightly compressed; "kind of boring, honestly" carries his own assessment forward almost verbatim.

## Real people named

None by name. "Friend," "nephew," "dad" stay generic per Kit's Q16 ruling — no names, no identifying detail beyond what he volunteered (mentioning nephews exist, considering a phone call to one). Claude is credited as the platform's builder, the league's namer, and the drill's operator — standard tool disclosure, not a G2 real-person issue.

## Open questions for Kit

**Resolved as of Q21 (round 3 prep):** real headcount (1 of 10), the
mock-draft cancellation, the kill -9 outcome, and the data source (nflverse)
are all now sourced and in the draft. The AI-commissioner-name question
(round 1) remains cut rather than restored — no new answer on that one.

- Anything you want added about the actual moment you discovered the
  invite-code mixup — where you were, what you said out loud? Still not
  given, so the draft still doesn't invent one. Optional.
- Want the AI commissioner's name in after all? Still cut as of this round;
  say so if you want it restored with your confirmation on record.
