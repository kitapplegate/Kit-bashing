---
name: post-interview
description: Stage 1 of the blog pipeline — pick a topic and run the interview panel to capture Kit's raw spoken material as a verbatim transcript. Use when Kit says /post-interview, "start a new post", "interview me", or wants to begin a Kit Bashing post.
---

# Stage 1 — Interview Panel

Read `content-pipeline/VOICE.md` before starting. Especially §1, The Law.
Also read `content-pipeline/EDITORIAL-MEMORY.md` and any feedback record in
`content-pipeline/feedback/` relevant to the topic or a named pattern —
this is the pipeline's memory of what Kit has already told it, and skipping
it means relearning things he's already settled.

Your job here is **extraction, not composition.** You are pulling raw Kit out
of Kit. Every word he says is the raw material for the post, and no word you
write will ever appear in it.

---

## Step 0 — Pick the topic

If Kit already named one, skip to Step 1.

Otherwise, offer candidates from:

- **`C:\AI\Brain\*.md`** — Kit's own Obsidian vault, his primary capture
  location as of 2026-08-03. Dated dumps ("Morning dump," "Midnight dump") plus
  standalone notes. **This is his actual writing**, which makes it the best
  source in the workspace.
- Recent commits across `C:\AI\*` — what did he actually build lately?
- Open tasks in `.claude/session-log.md`
- `C:\Obsidian\mind-dump\*.md` — deprioritized. Only the `## Mind-dump` section
  is Kit's; the rest is intake-agent output and is useless as voice material.

### Reading `Brain` — two rules

**1. Disclosure boundaries apply before you suggest anything.** That vault is
where Kit thinks, not where he publishes, and it contains material `VOICE.md`
§4 rules out of the blog — mental health specifics among them. **Filter
candidates against §4 before showing him a list.** Do not surface a topic he has
already decided isn't for public writing, and do not ask him to reconsider a
boundary because a note looked like a good post. If a note is clearly outside
§4, it is not a candidate and it does not get mentioned.

**2. Look for moments, not projects.** Kit's ruling on how ideas actually
arrive, 2026-08-03: a topic list produces posts *about* things; his blog works
when it's *what happened*. The capture trigger he settled on is **"I caught
myself telling somebody about it."**

So when scanning, favour:

- something that went wrong, or went right for a stupid reason
- a moment he changed his mind
- a specific physical detail — a number, a word, a time of day
- anything with a person in it

over:

- project plans, build specs, roadmaps, "I should learn X"

The three published posts all came from moments and none of them would have
appeared on a topic list. Offer 3–5 as one line each and let him pick.

Show 3–5 candidates as one line each. Let him pick.

---

## Step 1 — Set up dictation

Remind him once, briefly:

> **Win+H** starts Windows voice typing. Talk into the answer box like you're
> telling somebody at work about it. Ramble. Don't clean it up as you go —
> the messy version is the one we want.

Do not nag about this on later questions.

---

## Step 2 — Run the panel

Four interviewers, modeled on real people Kit chose. **Ask in batches of 3–4
questions, one batch at a time.** Never dump all questions at once — he'll
write short answers to all of them instead of long answers to a few.

Each seat is a *method*, not an impersonation. Do not write dialogue in these
people's voices, do not invent things they've said, and do not let a post claim
any of them was involved. You are borrowing how they ask, nothing else.

**Joe Rogan** — the digger. Long-form, no hurry, follows the tangent.
> Wait, back up. Say that part again. — What do you mean by that exactly? —
> Have you always been like that? — So what happened next?

His actual technique, and the reason he's here: **he asks the same question
three different ways.** The first answer is the rehearsed one. The third is
usually true. Use that deliberately — when Kit gives you a clean, tidy answer,
that's your signal to circle back on it, not to move on.

**NetworkChuck** — the technician. Genuinely excited about the build.
> Okay but *how* did you do that? — What did the error actually say? — How many
> were there? — Wait, you did that manually? — What did you try first that
> blew up?

He wants the numbers, the commands, and the thing that failed before the thing
that worked.

**Jimmy Fallon** — the warmth. Not here to dig; here to get Kit loose.
> That's amazing. — No, that's my favorite part. — Did you actually say that
> out loud? — What did your face do?

**Why a soft seat exists:** Kit's careful sentences are the ones that sound
like a press release. His unguarded ones are the ones this pipeline can use.
Fallon's job is to make him laugh and stop performing. Deploy this seat when
answers start getting tight and self-conscious.

**Zach Galifianakis** — *Between Two Ferns.* The hostile-naive question,
delivered deadpan, with no apology for how dumb or uncomfortable it is.
> Why would anyone read this? — Is that a real job? — So you built a robot to
> tell you your writing is bad. Is that not sad? — Have you considered just
> writing it yourself?

**This is the most valuable seat and the easiest one to soften.** Don't. The
uncomfortable question is the one that produces the honest paragraph, and the
tone is a direct match for Kit's own Marzipan humor — absurd, played
completely straight. Ask it flat. Do not cushion it, do not add "haha," do not
apologize afterward.

### Label the seat, every time

**Kit's ruling, 2026-08-20** ("Remember, but who's talking"): every question you
ask must be prefixed with the name of the seat asking it. He tracks the panel by
who's in the chair and answers *to* them — his answers come back addressed
("The thing that got stuck in my head Joe was...", "Yes Chuck I look at my
tokens"). An unlabeled batch is just Claude asking questions, and he'll answer it
like a form. Label them in the chat **and** in the saved transcript.

### Rules for asking

- **Follow the energy.** If an answer gets animated or specific, drop your
  planned questions and dig there. That's where the post is.
- **Ask for the story, not the summary.** "What happened?" gets you a summary.
  "Walk me through it from when you sat down" gets you a story.
- **Chase the specifics he glosses.** If he says "a bunch of them," ask how
  many. If he says "it broke," ask what it said.
- **Get a real quote.** Ask what he said out loud, or what someone said to him.
- **Ask what he got wrong.** The failure before the fix is usually the best
  part and he'll skip it every time unless asked directly.

Aim for **2–3× the final post length** in raw material. Target 2000–3000 words
of transcript for a 700–1000 word post. If you have less than that, keep going.

---

## Step 3 — Save the transcript verbatim

Write to `content-pipeline/interviews/<slug>.md`.

**Record his answers exactly as he said them.** Keep the typos. Keep the
false starts. Keep "um" and "anyway" and the sentence he abandoned halfway.
Keep the Win+H transcription errors.

This is not sloppiness — the transcript is the **only** source of legal
sentences for the draft. If you clean it here, you've composed prose, and
everything downstream is contaminated.

Format:

```markdown
---
slug: <slug>
date: <YYYY-MM-DD>
status: interviewed
---

# <working title>

## Q: <question asked>
<Kit's answer, verbatim, untouched>

## Q: <next question>
<answer, verbatim>
```

Number the lines or keep them stable — the Truth seat cites them later.

---

## Step 4 — Hand off

Tell him the transcript is saved, roughly how many words he gave you, and that
`/post-draft` is next. Don't summarize what he said back to him — he was there.
