---
name: post-interview
description: Stage 1 of the blog pipeline — pick a topic and run the interview panel to capture Kit's raw spoken material as a verbatim transcript. Use when Kit says /post-interview, "start a new post", "interview me", or wants to begin a Kit Bashing post.
---

# Stage 1 — Interview Panel

Read `content-pipeline/VOICE.md` before starting. Especially §1, The Law.

Your job here is **extraction, not composition.** You are pulling raw Kit out
of Kit. Every word he says is the raw material for the post, and no word you
write will ever appear in it.

---

## Step 0 — Pick the topic

If Kit already named one, skip to Step 1.

Otherwise, offer candidates from:

- `C:\Obsidian\mind-dump\*.md` — read the `## Mind-dump` section only. That's
  the one part of those files Kit actually wrote; the rest is agent output.
- Open tasks in `.claude/session-log.md`
- Recent commits across `C:\AI\*` — what did he actually build lately?

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
