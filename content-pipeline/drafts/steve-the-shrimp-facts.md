# Fact ledger — "Steve, with a bunch of E's" (post-round-4)

The automatic panel loop capped at round 3 per `RUBRIC.md`'s loop guard.
Kit then gave direct new material addressing round 3's open items
(narrative's ask for scene-level material, voice's question about the
technical paragraph's tone) plus fixed the sourced-timestamp error.

**Correction, post-round-4:** round 4's panel was run before the two new
answers below were appended to `content-pipeline/interviews/
steve-the-shrimp.md`, so several seats correctly flagged them as
unsourced against the transcript as it then stood. Both answers are now
appended to the transcript as a "[Round 4 follow-up]" block. The
citations below are accurate as of this version. Kit has opted to read
the current draft directly rather than run a round 5.

## Changes this pass

1. **2020 business decision, now concrete** (narrative's ask). Added the
   real cost/feasibility breakdown: $300–500 up front for tanks, rack,
   pumps, filtration, food, substrate, and shrimp; can't just buy two
   (same-sex pairs produce nothing, even a real pair dilutes/concentrates
   the bloodline without active management); ongoing work watching for
   and culling babies. Source: Kit's dictation this round, verbatim
   content lightly restructured into sentences — see Written prose.
2. **Decision paragraph now has an emotional coda**: "I wanted to do it
   so bad. Still kind of do. Not going to, for the same reason." — Kit's
   own words this round, kept close to verbatim.
3. **Removed the now-redundant "Still think about them, though..."
   repetition paragraph** — the new decision-coda covers the same
   emotional beat more concretely; keeping both read as repetitive. Per
   `VOICE.md` §1a: "Repetition is often insistence, not stutter... Cut
   it if the paragraph is better for it." Judgment call, flagged here
   rather than made silently.
4. **Bug-fix paragraph reframed around Kit's actual, honest answer**
   (narrative's ask for a scene). Kit's real account: he didn't debug
   anything himself — Claude found and fixed both bugs while Kit just
   said "yeah, fix it." This replaces any implication of Kit doing
   hands-on debugging. Source: Kit's dictation this round, verbatim:
   "Claude was doing it all he was moving the scrolling up the screen It
   probably said hey there's this thing I just said yeah fix it Didn't
   even think about it."
5. **"Fair warning" caveat added before the technical paragraph**
   (voice's question, answered directly by Kit: "It's fine for the
   technical stuff to read like straight explanation... put a caveat in
   front of it... make a joke about it"). The caveat itself is drafter
   prose per Kit's explicit request/direction — same status as the
   Reference-section paragraphs, not a voice source.
6. **Timestamp fixed**: "quarter to eight" → "7:34 that evening," to
   match the Reference section's actual sourced git-log time (round 3's
   truth-veto item).
7. **Price-tracker and community-vision paragraphs trimmed** for length
   (draft was running long) — cuts only, no new claims.

| new fact / claim | source |
|---|---|
| $300–500 startup cost: tanks, tank rack, pumps, filtration, food, substrate, shrimp | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020..." |
| Can't just buy two shrimp — same-sex pair produces nothing; even a real pair dilutes/concentrates the bloodline without management | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020..." |
| Managing a bloodline means watching for babies and culling ones that don't look right | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020..." |
| "A lot of ongoing work," didn't have the time | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020..." |
| "I wanted to do it so bad. Still kind of do. Not going to, for the same reason." | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020...", near-verbatim |
| Claude found and fixed both bugs; Kit's role was "yeah, fix it," not hands-on debugging | Transcript, Q: "[Round 4 follow-up] What's the real story on the bug — and what actually happened in 2020...", verbatim: "Claude was doing it all... I just said yeah fix it. Didn't even think about it." |
| Kit is fine with technical material reading as straight explanation, wants a joking caveat in front of it | Kit, this round, verbatim: "It's fine for the technical stuff to read like straight explanation that's fine you can put a caveat in front of it... Make a joke about it" |

## Written prose

- Cost/breeding paragraph: mine for sentence structure and connective
  wording; every specific (the dollar range, the item list, the
  same-sex/dilution mechanic, the culling process) traces directly to
  Kit's dictation above, lightly organized from his run-on into
  sentences.
- "I wanted to do it so bad. Still kind of do. Not going to, for the
  same reason." — kept essentially verbatim, minimal punctuation only.
- Bug paragraph: restructured around Kit's actual account. "It'd be
  driving, scrolling up the screen, and it would just say, hey, there's
  a bug here. I'd say yeah, fix it, and not think about it again." is a
  close paraphrase of his dictation, tightened into complete sentences
  per the Law (fragments joined, nothing invented).
- "Fair warning: the next bit is just how Steve actually works. Skip
  ahead if computers bore you, nobody will be offended." — mine,
  written at Kit's explicit request for a joking caveat. Flagging
  clearly since it's authorial content by direct instruction, similar
  status to the Reference-section paragraphs.
- Cut: "Still think about them, though. Still think shrimp are cute.
  Still an interesting thing to me." — judgment call per §1a, see above.

## Real people named

- Unchanged. No real person named. "Tom, Dick, and Harry" confirmed
  idiom.

## Kit's direct corrections (post-round-4 read-through)

Kit read the draft and caught three real errors, none requiring new
material — all fixed by correcting or reordering what was already
there:

1. **The X does close the window.** Draft had it backwards ("doesn't
   close when you click the X, it just goes back to the tray"). Actual
   behavior, confirmed in code (`shrimpdesk/frontends/desktop.py`,
   `hide()` calls `self.root.withdraw()`): clicking the X does close
   the window — Steve just doesn't die when it happens; the process
   keeps running via the tray. Fixed to: "Click the X and the window
   closes, same as anything else, he just doesn't die when it does."
2. **Germany and Asia are hubs, not bloodlines.** Draft had called them
   "two different bloodline traditions." Kit's correction: they're two
   sourcing hubs people buy from, each containing many distinct
   bloodlines. Fixed to: "two big hubs people actually buy from, not
   bloodlines... Each hub's got tons of different bloodlines inside it."
3. **The price-tracker website predates Steve.** Draft had it placed
   after Steve and the build-bug paragraph. Kit's correction: it was
   built first, within the same 2026 AI/vibe-coding period, before
   Steve. Moved into the "this year I got into AI" paragraph, ahead of
   "So I made Steve," and the old standalone paragraph after the bugs
   was removed.

## Open questions for Kit

1. Confirm the description string and title (unchanged from before).
2. Word count is now ~1,220 — well over the 700–1000 convention. The
   added material is real and mostly came from you directly; flagging
   rather than cutting further real content to force it under. Say if
   you want it trimmed regardless.
3. Steve's actual pixel-art gif (`shrimp-desk/docs/shrimp.gif`) is now
   embedded in the post body, copied to `public/images/steve.gif`.
