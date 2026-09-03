# Kit Bashing — Content Pipeline

**Interview → Barry → panel → must pass → Kit's approval → publish.**

*Canonical order, set by Kit 2026-08-03 after the first Barry pass: "that was
100% better."* The drafting step feeds Barry; Barry is the writer of record. The
panel gate is not advisory — a draft must pass it before it reaches Kit, and
Kit's approval is a separate gate after that.

---

## The one idea

**Facts are locked. Prose is free. Don't sand the lurch.**

Kit talks. The pipeline edits — it can write, rewrite, and restructure — but
every *fact* comes from the transcript, nothing it writes may contain the seven
slop tells, and his good lines stay untouched. Six guardrails, in `VOICE.md` §1.

This exists because the first two posts on this blog were AI-written from Kit's
dictated notes, and they read like it — the facts were his, the sentences
weren't. `VOICE.md` §3 documents the exact fingerprints, taken from those two
posts.

You cannot train an AI to write in someone's voice from eleven blog posts. You
*can* build one that reliably detects when writing stops sounding like them.
That's what this is.

> **History.** The original rule was strict subtract-only: no sentence Kit hadn't
> said out loud. Kit retired it on 2026-08-03, after three review rounds of
> `sounds-like-me` produced a draft the Reader seat scored 3/10 and couldn't
> parse, while review rounds were spent arguing over single words. His ruling:
> *"With guardrails they can write stuff, rewrite things, make things sound
> better together. I just don't want slop. You can find my voice in my
> ramblings."* The three review archives in `reviews/` are the evidence trail.

---

## Running it

| Stage | Command | Output |
|---|---|---|
| 1 | `/post-interview` | `interviews/<slug>.md` — verbatim, uncleaned |
| 2 | `/post-draft` | `drafts/<slug>.md` + `<slug>-facts.md` |
| 2.5 | `editor-barry` agent | a revised draft, in place |
| 3 | `/post-review` | `reviews/<slug>-round-N.md` |
| 4 | `/post-publish` | `src/content/blog/<slug>.md`, live and verified |
| 5 | `/post-social` | `social/<slug>.md` — drafts, posted by hand |

Stage 3 loops back to **2.5** on a failed gate, max 3 rounds.

### The learning loop

Kit's reactions are part of the pipeline, not disposable chat history. During
every stage, preserve his exact approvals, rejections, and overrides in
`feedback/<slug>.md`. Distill only proven standing preferences into
`EDITORIAL-MEMORY.md`; keep one-off edits as provisional examples until Kit
makes them general or the same pattern appears in a second post.

Before beginning a new post, read `VOICE.md`, `RUBRIC.md`,
`EDITORIAL-MEMORY.md`, the three most recent approved posts, and any relevant
feedback records. This lets the process improve without turning every edit into
another permanent instruction.

### Stage 2.5 — why an editing seat exists

`editor-barry` is the **only agent permitted to change the text.** The six
review seats score and hand back notes; they cannot edit.

It was added on 2026-08-03 after four review rounds of `sounds-like-me`, where
the same failure regenerated every round at a new level — words, then beats,
then paragraph breaks, then the audit trail describing the edit. Six reviewers
caught it each time and it came back each time, because the same writer with
the same instincts kept doing the fixing. Barry is a different pair of hands,
and that is the entire point of the seat.

He is bound by the same six guardrails as the drafter, and the Slop and Truth
seats are told to hunt his sentences specifically.

---

## The gate

- 5 of 6 seats score ≥ 9
- No seat below 7
- `editor-truth` returns PASS (veto — factual problems aren't tradeable)

**Loop guards:** max 3 rounds; stop immediately if a round doesn't improve on
the last; seats always score blind.

---

## The interview panel

Four seats, modeled on real people Kit picked. They run inside
`/post-interview` rather than as subagents, because the interview is live and
subagents can't talk to him.

| Seat | Modeled on | Job |
|---|---|---|
| The digger | **Joe Rogan** | Asks the same thing three ways. The third answer is the true one |
| The technician | **NetworkChuck** | Numbers, commands, what broke first |
| The warmth | **Jimmy Fallon** | Gets him loose. Unguarded speech is the usable kind |
| The disruptor | **Zach Galifianakis** | The deadpan uncomfortable question nobody else will ask |

## The six editor seats

| Seat | Modeled on | Question |
|---|---|---|
| `editor-narrative` | **Jim Butcher** | Is there a scene here — goal, conflict, disaster? |
| `editor-voice` | *nobody — anchored to Marzipan* | Does this sound like Kit? |
| `editor-slop` | **Dave Barry** | Any AI fingerprints? (forensic tell-count + restraint lens) |
| `editor-substance` | *nobody yet* | Is there anything actually in here? |
| `editor-reader` | **Hilary Redmon** | Would a stranger under no obligation keep reading? |
| `editor-truth` | *nobody — forensic* | Is it true, and is everyone credited? **(veto)** |

Every persona is a **method, not an impersonation.** No seat may invent quotes
from the person it's modeled on, sign notes in their name, or let a post imply
they were involved.

### Which seats may have a persona

The rule that decided the table above:

- **Positive-match seats cannot have personas.** `editor-voice` scores
  *similarity to a standard*. Seat a distinctive stylist there and it starts
  scoring "does this sound like them" while reporting that it's protecting
  Kit's voice. Its standard stays Marzipan, permanently.
- **Negative-detection seats safely can.** A seat that only *removes* things is
  structurally incapable of pulling Kit's voice anywhere. That's why Dave Barry
  is safe on `editor-slop` even though he's about as distinctive as writers get.

Seats may suggest concrete fixes, including phrasing — except `editor-voice`,
whose subject *is* Kit's voice and which would become its own reference standard
if it started demonstrating. **No seat may ever supply facts.** A gap in the
material is always a question for Kit.

## Credit

The architecture here — interview panel, voice file, editorial council — comes
from Alex Lieberman's "Content Machine," described on *How I AI* with Claire Vo:
[the episode Kit heard](https://podcasts.apple.com/us/podcast/how-the-founder-of-morning-brew-built-a/id1809663079?i=1000777544732).
Kit brought that shape to the first session; it wasn't invented here.

---

## Dictation

**Win+H** — Windows voice typing. Ramble, don't self-edit, don't clean it up.
The messy transcript is the asset; polish is what we're trying to avoid.

(`C:\AI\speech-text` is Kit's own faster-whisper tool. Currently broken, and
he's fixing it himself — Win+H is the working path until then.)

---

## Files

```
content-pipeline/
├── VOICE.md      standing authority — real-Kit markers, AI tells,
│                 disclosure boundaries, mechanical conventions
├── RUBRIC.md     standing authority — six seats, scales, gate, loop guards
├── EDITORIAL-MEMORY.md  distilled lessons from Kit's decisions
├── interviews/   verbatim transcripts (typos intact — do not clean)
├── drafts/       drafts + traceability tables
├── reviews/      every scoring round, archived
├── feedback/     exact rejected/approved text and Kit's reasons
└── social/       platform copy, drafted not posted
```

`VOICE.md` and `RUBRIC.md` are standing authorities in the same sense as the
`CONSTITUTION.md` files elsewhere in `C:\AI` — amend them deliberately, don't
override them because one draft felt awkward.

---

## Known corpora

- **Real Kit:** [The Marzipan Incident](https://themarzipanincident.blogspot.com/),
  2008–2011, 11 posts, byline "3rdshoe". No AI involvement. The reference standard.
- **Fake Kit:** `why-the-jump.md`, `board-of-directors.md`. Claude-written from
  Kit's dictation. Kept as the negative reference for `editor-slop` — and
  scheduled to be redone through this pipeline in Kit's actual voice.
