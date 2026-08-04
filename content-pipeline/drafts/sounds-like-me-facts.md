# Fact ledger — sounds-like-me — round 4

*Replaces the sentence-level trace table, which was wrong in all three prior
rounds. Per `VOICE.md` §1 as amended, prose is free and facts are locked, so this
tracks claims rather than sentences. Treat it as adversarial input and verify.*

## Facts

| claim | source |
|---|---|
| book was about chess pieces, not players | Q12 |
| ~5 pages of a lined notebook, then stopped | Q12 |
| he was about 10 | Q12 |
| gone, "in the landfill somewhere, probably" | Q13 |
| no computer in the house, so paper | Q8 |
| brain outruns fingers; stuck spelling *difficult*; two paragraphs ahead | Q9 |
| he told himself he was a bad writer; nobody else did | Q8, Q5 |
| grammar horrible, can't spell | Q8 |
| two college English classes, the only formal training | Q5 |
| doesn't know "how you're supposed to write" | Q5 |
| loves reading | Q5 |
| The Marzipan Incident, on Blogspot | Q5, Q26 (URL confirmed) |
| **dates 2008–2011** | **NOT from Kit.** Verified 2026-08-03 by fetching the blog archive. Flagging because it is the one fact in the post he did not supply. |
| people liked it, thought it was funny (his hedge: "I guess") | Q5 |
| ADHD; no bandwidth to sit and type; typing was the deterrent | Q5 |
| plan was to hand over the writing and just talk | Q16 |
| **to him, writing *is* typing — paper then keyboard, same job** | Q28 |
| talked into voice to text; AI wrote the blog; result was "slop" | Q17 |
| two posts went up | Q23 |
| knew from the very first one; "this is good enough" | Q1 |
| at this computer, in the evening | Q1 |
| too perfect / too symmetrical / "mine was flawed and deadpan" | Q2, Q6 |
| the shirt line is least like him | Q29 |
| the CEO/janitor line sounds like him, is funny, **and is still not his** | Q29 + Q33 correction |
| gave the AI the website; it read the posts and described his style back | Q22 |
| stopped; couldn't do a third | Q23 |
| How I AI, hosted by Claire Vo, episode with Alex Lieberman | Q18, Q30; episode verified by fetch |
| Lieberman's method: gets interviewed rather than writing into a blank page | episode summary, verified by fetch |
| four AI interviewer personas: Rogan, NetworkChuck, Fallon, Galifianakis | Q1, Q3, Q4, Q14 + pipeline config |
| "too lazy to type"; "picking the easier path" | Q24 |
| would tell his kids and grandkids a computer wrote it | Q19 |
| not cheating; "not here to take over me, it's here to make me better" | Q11 |
| can't type as fast as he thinks | Q11 |
| the kid at 10 / the kid that is 49 | Q14 |
| "scattered and shattered"; not linear; too slow, too fast | Q15; print approved Q25 |
| hasn't finished many things; ADHD brain takes over | Q20 |
| "I guess I'm not a bad writer. I don't know." | Q31 |

**Blockquotes** — both are exhibits, quoted from Kit's own published posts, and
both are character-checked against source:
- shirt line → `src/content/blog/why-the-jump.md:15-16`
- CEO/janitor line → `src/content/blog/board-of-directors.md:81-82`

## Written prose (mine, not his)

By paragraph. This is where the seven tells apply hardest.

- **¶4** — "That was at 10, with a pencil. It kept happening with a keyboard."
  Bridge across the forty-year gap the Narrative seat flagged twice.
- **¶5** — "Somewhere in there I decided I was a bad writer." Framing sentence;
  the claim is Q8's.
- **¶8** — "So when I started this blog the plan seemed obvious."
- **¶9** — *the largest piece of written prose in the draft, and the spine.*
  "Here's what I didn't think about… The getting-it-down. I've never had a
  separate word for the other part, the one that happens before your hand moves.
  So when I said hand over the writing, I handed over all of it." Every idea in
  it is Q28; the sentences are mine. **This is the paragraph to scrutinise
  first** — it is doing the argumentative work and Kit never said it this way.
- **¶12** — "reading a post with my name on it," assembling Q1's chair, evening,
  and reaction into one scene.
- **¶14, ¶16** — exhibit framing ("Here's a line from the first post" / "Here's
  the one that actually bothers me, from the second").
- **¶15** — "I don't talk like that. Nobody does."
- **¶17** — "That one's funny. That sounds like me. I would say that. And it
  still isn't mine. I didn't write it." Built from Q29 as corrected by Q33.
- **¶19** — "Then I stopped."
- **¶20** — "What changed was a podcast" and "He doesn't write into a blank
  page. He gets interviewed."
- **¶21** — the four persona descriptions. Their *behaviour* is drawn from how
  the seats are actually configured in `.claude/skills/post-interview/SKILL.md`,
  not invented.
- **¶22** — "They aren't people. They're a set of questions with names on them."
- **¶23** — "I'm not going to pretend there's something noble in this."
- **¶28** — "But I think this is the thing that lets me finish it."

## Real people named — G2 check

- **Claire Vo, Alex Lieberman** — named, credited as the source of the method,
  episode linked. Nothing is attributed to either beyond what the episode
  actually contains.
- **Joe Rogan, NetworkChuck, Jimmy Fallon, Zach Galifianakis** — named as **AI
  personas, explicitly disclosed as not real people** in ¶21 and ¶22. No line,
  question, or action is attributed to the actual people. This is the direct fix
  for the round-3 Truth veto, where the draft had them interviewing Kit and
  credited Galifianakis with a line Claude wrote. That line is gone.

## Open questions for Kit

1. **The description string is still unapproved.** `I told myself I was a bad
   writer. It turns out I just hate typing.` §5 requires his explicit yes on the
   exact wording, and it is two sentences where §5 says one. Asked twice; not
   yet answered.
2. Should `board-of-directors` be linked as well as quoted? Currently quoted
   only; `why-the-jump` is neither linked nor quoted by name this round.
3. "Slop" is borrowed from the Lieberman episode title. Post uses it plainly.
   Worth noting in the post or not?
