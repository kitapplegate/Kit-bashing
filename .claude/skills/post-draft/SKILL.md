---
name: post-draft
description: Stage 2 of the blog pipeline — write a Kit Bashing draft from the interview transcript. Editorial license, locked facts. Use when Kit says /post-draft or wants a draft built from a finished interview.
---

# Stage 2 — Drafting

**Read `content-pipeline/VOICE.md` §1 before you touch anything.** Also
read `content-pipeline/EDITORIAL-MEMORY.md` and any feedback record in
`content-pipeline/feedback/` relevant to this post or a pattern it names —
standing decisions there override provisional guesses.

> **Facts are locked. Prose is free. Don't sand the lurch.**

You are editing, not transcribing. Write connective tissue. Rewrite what doesn't
land. Restructure for narrative. That is the job Kit is asking for.

*This skill previously enforced a subtract-only rule — no sentence Kit hadn't
said. Kit retired it on 2026-08-03 after it produced a draft the Reader seat
scored 3/10 and couldn't parse. Don't reintroduce it.*

---

## The six guardrails

Full text in `VOICE.md` §1. Short form:

1. **G1 — Facts from the transcript, always.** Numbers, names, dates, events,
   quotes, claims about the world. Write the sentence; don't invent what it
   asserts. Missing fact → question for Kit. **Absolute.**
2. **G2 — Never put words in a real person's mouth.** If an AI persona appears,
   the post says it's a persona.
3. **G3 — Your prose must pass §3.** The seven tells apply harder to you than to
   him. His tells are his; yours are slop.
4. **G4 — Keep what works.** License is for the parts that don't land.
5. **G5 — Don't sand the lurch.** Match his uneven rhythm; don't correct it.
6. **G6 — Kit approves.**

## Don't waste rounds on

Which synonym voice-to-text produced. Whether two sentences became one.
Provenance of ordinary connective prose. Where paragraph breaks fall. Kit called
this out directly and he was right.

---

## Process

**1. Read the whole transcript** before cutting anything.

**2. Find the spine.** One moment, one turn, one thing that changed. **Before
writing a word of prose, state the frame back to Kit in one sentence** — "this
post is about ___" — and get a yes/no. `robot-overlords` burned three full
review rounds because the spine was picked on "best scene in the transcript"
(a basketball fight) instead of what Kit actually wanted the post to be about
(his AI use), and no seat was scoped to catch a wrong frame — only whether the
wrong frame was well executed. One sentence up front is cheaper than a rescope.

**2b. If Kit gives you a new answer in chat mid-draft**, append it to
`content-pipeline/interviews/<slug>.md` verbatim, in this same turn, before
using it for anything else. Do not relay it to `editor-barry` or write it into
the fact ledger from memory — an answer that only exists in chat does not
exist for the truth seat.

**2c. Closed questions.** When Kit answers a question, including "I don't
remember," add a one-line entry to a `## Closed questions` section at the
bottom of the transcript: the topic, his answer in a few words, and the
transcript line. A closed question is never asked again at any stage. Kit's
ruling, 2026-09-16, after `people-mad-at-ai` asked him a third time what the
talk builder did when it broke: *"this is like the third thing I've asked
about this build like come on ... we're burning tokens because of this."*

**2d. Outside sources back Kit's claim; they never replace it.** If you find
a source for something Kit said, link it to his claim as he said it. If the
source only supports a narrower or different version, **cut the claim** or ask
Kit whether the narrower version is what he meant. Never rewrite his claim to
fit the source and then present it in his voice. Same post: "AI companies ...
eminent domain" got reworded to "power companies took land for power lines"
to match a PBS article, and Truth vetoed it. It was right to.

**3. Build the narrative.** Scene first, usually. You may reorder freely for
chronology and sense — the Narrative seat will tell you if the middle runs
backwards, and now you can actually fix it.

**4. Write the connective tissue.** Where two good things of his don't meet,
write the bridge. Keep it short, keep it in his register, and read §3 again
before you do — your bridges are the highest slop risk in the draft.

**5. Preserve his best lines exactly.** When something of his lands, it stays
untouched. Flag the ones you consider load-bearing so reviewers know they were
deliberate.

**6. Length.** 700–1000 words per `VOICE.md` §5. This is a convention; say so if
the material genuinely needs more.

**7. Frontmatter.** `title`, `description`, `pubDate` per §5. Title should come
from his words where possible. The `description` is exempt from G1 but needs his
explicit approval of the exact string.

**8. Line-wrap the source at ~72–75 characters.**

---

## Output

**`content-pipeline/drafts/<slug>.md`** — the draft.

**`content-pipeline/drafts/<slug>-facts.md`** — a **fact ledger**, replacing the
old sentence-by-sentence traceability table. That table was wrong in all three
rounds of `sounds-like-me` and generated more review noise than signal.

List only:

```markdown
| fact / claim | transcript source |
|---|---|
| book was about chess pieces, not players | Q12 |
| ~5 pages of lined notebook paper | Q12 |
| he was about 10 | Q12 |
| The Marzipan Incident, on Blogspot | Q5 |

## Written prose
Where you wrote connective tissue rather than using his words — by paragraph,
one line each. Not sentence-level. Enough that a reviewer can find it.

## Real people named
Who, what the post says about them, and where that came from. G2 check.

## Open questions for Kit
Facts you wanted and didn't have. Never fill these yourself. Never list
anything already under `## Closed questions` in the transcript.
```

Verify this ledger against the transcript before shipping it. Reviewers are
instructed to treat it as adversarial input, because it has been wrong before.

---

## Self-check — run it for real before handing off

This is the pre-panel gate, not a formality. Every problem you catch here
saves a six-seat round (~270k tokens). Kit, 2026-09-16: *"you should be
getting on the 1st one now."* Go through the draft paragraph by paragraph:

- [ ] Every fact traces to the transcript. Grep each ledger citation; it
      must resolve to a line with Kit's words on it.
- [ ] No claim of Kit's was reworded to fit a source I found (2d)
- [ ] No real person is described as saying or doing anything they didn't
- [ ] **Tell count on my own sentences**: punchline tax, dismiss-then-concede,
      tidy simile, negate-then-correct, self-annotation, em dashes, even
      rhythm. List each hit with its line, and fix it, before handing off.
      Pay closest attention to bridges and to any sentence that sums up the
      paragraph before it.
- [ ] No hedge or contradiction of his got tidied into a clean position
      (e.g. "not necessarily X ... both" becoming "not X, but Y")
- [ ] His good lines are untouched
- [ ] My sentences aren't noticeably smoother than his, and no list of mine
      comes out as an even three-part summary
- [ ] Every paragraph's point matches what its story actually shows. A
      scene that proves something else needs Kit's words for the bridge,
      not mine.
- [ ] A cold reader meets who Kit is (role, background) before a claim that
      depends on it
- [ ] Some paragraphs are flat and land nothing — good
- [ ] Nothing in "Open questions" is already closed

Report to Kit: word count, what you rewrote and why, what you wrote from
scratch, and any fact you wanted and didn't have.

Next: `/post-review`.
