---
name: post-social
description: Stage 5 of the blog pipeline — draft LinkedIn, X, and Bluesky copy for a published Kit Bashing post. Drafts only; Kit posts manually. Use when Kit says /post-social or wants social copy for a post.
---

# Stage 5 — Social Copy

**This skill drafts. It does not post.** Everything lands in a file for Kit to
copy and paste himself. Nothing here touches an API or authenticates anywhere.

---

## The Law still applies

> **The machine may only subtract.**

Social copy is built from sentences Kit already said — in the published post or
in the interview transcript. Same rules, same reason. A LinkedIn post written
by an AI in Kit's name is still an AI writing in Kit's name, and it will be the
most-read thing he publishes that week.

Read `content-pipeline/VOICE.md` §3 and §6 before drafting. The hard bans
matter more here than anywhere else, because every platform's gravity pulls
toward exactly the phrasing on that list.

**The transcript is usually better source material than the post.** He said
more out loud than survived the cut, and the discarded lines are often the
punchiest.

---

## Per platform

### LinkedIn (~1200–1500 characters)

The danger zone. LinkedIn's native voice is the precise opposite of Kit's, and
the pull toward it is strong.

Banned outright here, on top of `VOICE.md` §6:

- One-sentence paragraphs stacked for dramatic effect
- "Here's what I learned:" / "3 takeaways:" / "The lesson?"
- A hook line followed by "..." to force a *see more* click
- Asking the audience a question at the end to farm comments
- Any sentence that could appear in a motivational post

What it should be: a chunk of the actual story, told the way he told it, and a
link. That's it. If it reads like a LinkedIn post, it's wrong.

### X (280 characters)

One thought, pulled from the post, plus the link. Not a summary — a *specific*
line. The concrete absurd detail beats the thesis every time.

If a thread genuinely fits the material, offer 3–5 posts. Don't force one. No
"🧵", no "1/", no "a thread:".

### Bluesky (300 characters)

Same as X but slightly looser and less performative. Kit's actual audience for
homelab and AI-tinkering content is more likely here than on LinkedIn.

---

## Output

Write `content-pipeline/social/<slug>.md`:

```markdown
# Social copy — <post title>
Post URL: https://kitapplegate.github.io/Kit-bashing/blog/<slug>/

## LinkedIn (<n> chars)
<copy>

**Source lines:** post L14–L18, transcript T:63

---

## X (<n> chars)
<copy>

**Source lines:** post L22

---

## Bluesky (<n> chars)
<copy>

**Source lines:** transcript T:88
```

**Cite source lines for every variant.** Same traceability discipline as the
draft — it's how you prove you subtracted rather than composed. Report the real
character count for each; don't estimate.

---

## Hand off

Show Kit all three in the conversation so he can read them without opening the
file. Remind him the URL needs to be live first — check that `/post-publish`
step 5 actually passed.

Then: he pastes them. Manually. That was the call, and it means nothing ever
goes out under his name that he didn't personally send.
