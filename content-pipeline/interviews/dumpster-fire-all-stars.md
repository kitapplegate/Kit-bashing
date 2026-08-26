---
slug: dumpster-fire-all-stars
date: 2026-08-26
status: interviewed
---

# Working title: The Dumpster Fire All-Stars

## Q1 (Zach Galifianakis): You built a database-backed, crash-recoverable, WebSocket-driven draft platform with a disaster-recovery drill for a fantasy football league with ten of your buddies in it. Is that not the most unhinged thing you've built all year?

## Q2 (Joe Rogan): Walk me through the moment this stopped being "let's build a little draft tool" and became this. Was there a specific point where you looked at it and went "oh, this got real"?

## Q3 (NetworkChuck): What's the dumbest bug you hit building this? The kind where you found it and just had to laugh?

## Q4 (Jimmy Fallon): Tell me about naming it the Dumpster Fire All-Stars. Whose idea, and what was the reaction when it landed?

### Kit's answer (one continuous dictation covering Q1–Q4, verbatim):

I don't know if it's the most unhinged thing but I definitely think that I might have bitten bitten off more than I can chew Um absolutely I've always wanted to do a keeper league and umm I was just thinking maybe you know with this AI stuff that I've been doing and getting into and having it build and thinking that I have super powers now because I'm using AI umm I decided that maybe I should build my own platform and host it myself and build a way I can make it exactly how I want this um it started out as a something for analytics for the upcoming draft that we normally have with my friends but it kind of turned into hey I can just go ahead and build this and I can use AI to do it and it'll be super easy barely and inconvenience Well it's turned out to be not super easy and a lot of inconvenience so umm it's not really a bug that I've hit Chuck it's mostly just like finding all the things because I'm doing this by myself it's not a team it's just me and Claude and we're kind of the blind leading the blind I mean Claude's got a pretty good beat on things when it comes to it but a lot of the quality of life stuff is just kind of glaring when right when you need it And I'm like three days from my draft date and I'm still trying to figure this stuff out and yeah so this is just like I said a little bit more than I can chew so the idea was actually Claude's which I liked I said I wanted a funny name it came up with a funny name for it Umm the I'm doing this whole thing by myself like there's no one else doing this i'm not bouncing any of this stuff off of anybody else and I'm a little over my head on it but I think it's going to work out in the end and I going probably really be proud of what I did But umm no one's really giving me a reaction no one's actually signed up for the league of all the people that I've talked to and said they wanted to do it and I've sent out the emails but it uh yeah it's just kind of looming right now

---

## Q5 (Joe Rogan): Say more about "no one's actually signed up." Who are these friends — how many, how do you know them, and what did they actually say when you pitched them on it? Did anyone say yes and just not clicked the link, or is it dead silence?

## Q6 (NetworkChuck): Give me one specific "quality of life thing" that was glaring right when you needed it. Not the category — the actual moment. What were you trying to do, what happened instead, and what time of night was it?

## Q7 (Zach Galifianakis): You built an AI commissioner for this league. It has a name. It's named Duke. Explain to me, a person who has never met you, why a fantasy football league run entirely by one guy needs its own fictional rules-enforcing AI character.

## Q8 (Jimmy Fallon): Tell me about the kill-9 drill. Did you actually sit there and kill your own server on purpose? What went through your head right before you hit enter?

### Kit's answer (one continuous dictation covering Q5–Q8, verbatim):

Well I got a few friends i've got my nephew I've got umm my other nephew Some friends of a friend are in it umm and the league is 10 and umm when I pitched it to him they're like yeah send me the link I'm definitely in And so I sent them leak and they're just not signing up on it yet and I've got to really hound them here probably tonight and tomorrow Well one of the quality of life things that was really glaring was the fact that I sent out all these invites but it didn't keep track of who got what code And so now I'm looking at a ton of codes and I can't remember who it was that I sent that to O i'm hoping they Kee they still have the email the original email I sent which was from a gmail account that I created but then I later created a web server on my cluster and have the capability of emailing from a dedicated league email and so you know these are just that was probably the biggest quality of life thing that's gotten for me  Well I'm a player and so I mean I'm an owner of one of the teams I wanted to keep the commissioner outside of one of the players so it could be completely autonomous and be able to control the league I just didn't I just thought that 'd be a cool thing to umm to do um and it was kind of more of an experiment but I can take over anytime because I have all the permissions  So the Kill Nine drill was completely clawed I was completely hands off like most of my coding I'm not actually coding it's Claude

---

## Q9 (NetworkChuck): Walk me through actually finding the invite-code mixup. Were you looking at a spreadsheet, a database table, what? What did you say out loud when you realized you couldn't tell who was who?

## Q10 (Zach Galifianakis): So — Claude wrote the platform. Claude named the league. Claude ran your kill-switch drill. You built an AI commissioner to run the league on top of that. What, precisely, do you do?

## Q11 (Jimmy Fallon): When Claude said "Dumpster Fire All-Stars," what was your actual face? Did you laugh right away or did it take a second?

## Q12 (Joe Rogan): You said "I think it's going to work out and I'll probably be really proud of what I did." Say that again — do you actually believe that right now, three days out, with basically nobody signed up yet? Or is that the answer you're supposed to give?

### Kit's answer (one continuous dictation covering Q9–Q12, verbatim):

So there's a commissioner page and it has an invite Commissioner section has an invite page and on it has a bunch of codes and you can copy those codes and send them out and then when the person logs in and puts the code in it will fill in the slot right And so I didn't keep track I was dumb I should have done it better but I didn't I didn't And it went you know went through the thing and you know I just don't remember what it is so I'm hoping I'm that they still have their emails  Well the whole thing was uh Zach was for me not to do anything That's that's what it is I didn't want I wanted I don't know how to build a league so I wanted a league that I can customize and basically tell someone to build it for me and that's that's what AI has been able to accomplish for me is do things that I can't normally do Yeah when I saw a dumpster fire All Stars I laughed and I said yes that's what it is because this is a dumpster fire right now I pretty much laughed immediately as soon as I saw it  No I think even if no one signs up and nothing other comes of it I think I'm still going to be proud of it I built you know me and Claude built something and not something that II could have done on my own and so yeah I think I can be proud of it and say what I did I think it's going to work out I think most people are procrastinators and they wait till the last 2nd So I'm gonna send out another couple emails tonight and hopefully be able to get get them signed up so that we can have a draft II need people in the league and I need a draft so that I can see how everything else works We were supposed to have a mock draft last night but you know no one signed up so we couldn't do it

---

## Q13 (NetworkChuck): If nobody shows up Saturday, what actually happens? I know your system autopicks for empty seats — walk me through what that looks like. Does a bot really just draft players for your nephew if he never claims his spot?

## Q14 (Jimmy Fallon): Where are you right now, physically, doing all this? What's the room, what's the setup, what time is it usually when you're deep in this?

## Q15 (Zach Galifianakis): Is there one thing in this whole platform you're actually proud of — something that worked exactly right, that you'd show someone before you showed them the chaos?

## Q16 (Joe Rogan — housekeeping): Your nephews and the friends-of-friends in the league — fine to mention that a couple of nephews are in it, or keep it generic to "friends"? And is "Dumpster Fire All-Stars" itself fine to use as the actual title, or is that too on the nose?

### Kit's answer (one continuous dictation covering Q13–Q16, verbatim):

So if no one signs up by Saturday umm you know the draft is actually started by me like I'm the one who actually goes draft is started So I'll try to get with them again try to get some people there but yeah if we get say six people to sign up and we still have 4 more slots The bot will actually just draft the players and then they can come in later and they would just not be able to have the team that they wanted so right now physically I am visiting family and so I'm on my laptop doing all this I started doing this at home at my desk I have my curve monitor my keyboard I have my chair I've got a little dog bed that sits next to me that my dogs can lay on and keep me company and that's where I do my work usually But right now I'm visiting my dad and I'm in a side room on a laptop   Yes I would show them actually I would show them the whole thing I would show them show them the chaos and I would show them what I've done uh what Claude has done and what I've orchestrated 'cause really what it is claude's doing the work but I'm orchestrating it And yeah the whole thing really and the fact that we've gotten to where we are that we have a database I found places where we can get the data That was my biggest concern and I think we've got it solved Umm without having to pay for the data So yeah it's fine to say family and friends are in there now use the dumpster to hire All Stars That's what the name of it is and you know so what's what it is

---

## Q17 (Joe Rogan): Tonight and tomorrow, hounding people to sign up — what does that actually look like? Texting, calling? What's the first message you're sending?

## Q18 (NetworkChuck): "Blind leading the blind" — give me one specific spot where Claude got something wrong and you had to catch it or correct it yourself.

## Q19 (Zach Galifianakis): You said finding player data without having to pay was your biggest concern and you think it's solved. What was the alternative if you couldn't find free data — were you actually about to pay for this?

## Q20 (Jimmy Fallon): Picture Saturday going well — draft happens, most seats filled, it mostly works. What does that feel like, and what do you want people to say about it?

### Kit's answer (one continuous dictation covering Q17–Q20, verbatim):

I'm probably gonna send them another email I'm gonna text the ones I have numbers for I maybe even call my nephew but yeah but you know that's what it looks like And then a lot of praying that they'll sign up So well Claude's gotten quite a few things wrong you know and I had to clarify what what exactly it was especially a lot with the UX Umm you know buttons like sitting on top of each other and not being able to be get done from the phone and you know just different things like that You know mostly most of the stuff that I've had it correct has been on the UX site Well if I actually had to pay for it I wouldn't have done it I want I don't have the money to pay for NFL data I don't have that kind of money so I wanted to keep this thing as free 99 as possible  I think that if the draft happens on Saturday we get some people in the in the draft The draft works I think I feel pretty good about it and you know it D be nice to say hey this has been pretty cool what you've been doing and everything so umm but it's not why I'm doing it I don't need the recognition if if it happens I think it's going to be pretty awesome and I like what I like where it's going you know I can only get better from here

---

## Binding rulings from Q16

- **Nephews: generic reference only.** Kit confirmed "family and friends" is fine to
  say; he did not separately confirm naming or specifically identifying his nephews
  beyond that general framing. Use "a couple of nephews," "family and friends" — no
  names, no identifying detail beyond what he volunteered himself in Q13/Q17 (calling
  one on the phone).
- **Title confirmed: "Dumpster Fire All-Stars"** — Kit's explicit answer, no softening
  needed.

## Notes for the drafter

- **The league-name attribution is real and load-bearing.** Kit asked Claude for a
  funny name and Claude gave him "Dumpster Fire All-Stars" (Q1, Q10). This must be
  disclosed as Claude's suggestion, not Kit's own coinage — same G2/attribution
  principle as every other post, just about a tool credit rather than a person.
- **"Kill Nine" is his dictation of `kill -9`.** Keep the concept; render the command
  correctly in prose (`kill -9`) since it's a real technical term, not a quote.
- **Financial disclosure check:** Q19's "I don't have the money to pay for NFL data...
  I don't have that kind of money" is a general statement, not a specific dollar
  figure or a claim about his broader finances (mortgage, income, etc.) — VOICE.md §4
  bars specific financial figures, not a general "I couldn't afford this" admission.
  Should be fine as written; flag to Truth & Attribution to confirm.
---

## Q21 (round-2 review follow-up, 2026-08-26): The mock draft that didn't happen — what did that night actually look like? What's the real headcount as of right now? What happened when the kill -9 test ran? What data source did you land on?

### Kit's answer (verbatim, as given in chat):

No I called it before it came to that point I didn't actually launch the
draft Umm so yeah kind of boring umm but yeah that's what I did you know I
just saw that no one was signing up for it Umm you know just called it
right now there are one seat taken That's it Just me all by myself.

The test: On 2026-08-24, while the draft was in "pending" status (not live
yet, no picks happening), you ran two crash tests:

1. The polite crash — systemctl restart, which is like telling the program
"please shut down and come back." It came back cleanly and reported itself
healthy.
2. The rude crash — kill -9. This is the digital equivalent of yanking the
power cord instead of asking it nicely to shut down. kill -9 gives a
process zero chance to clean up or save anything — it's just gone,
instantly, no warning. It's the harshest way to kill a running program.

The result: The service was running as process ID 318641. The instant
kill -9 executed it, systemd (the OS's process babysitter) noticed within
about 5 seconds and launched a brand new copy of the program, this time as
PID 318659. The new process came up healthy and active.

Why this matters for the blog: This proves the safety net actually works —
if the draft server crashes or gets killed unexpectedly during your real
live draft, it won't just stay dead. It resurrects itself in under 5
seconds without a human needing to SSH in and restart it by hand. The
caveat worth mentioning: This test was run while the draft was
empty/pending — no picks on the board yet. So it proves the process comes
back, but not yet that the draft data survives a crash while people are
actively picking. That's a separate, still-open check ("mid-live" drill)
planned for during the actual mock/draft rehearsal, since that's the
scenario that actually matters — you want to know the draft board doesn't
lose picks or get corrupted if the server dies mid-pick, not just that the
program restarts.

nflverse — a free, open-source project that republishes the NFL's own data
(rosters, schedules, depth charts, player IDs) — supplies the player
universe.

### Drafter's note on Q21

The first paragraph (mock draft, headcount) is Kit's own dictated voice —
usable the same as any other transcript answer. The rest — the kill -9
writeup and the nflverse line — reads as pasted-in technical documentation,
not spoken material: structured headers, defined terms, an explicit "why
this matters for the blog" framing. Treat it as a **source of facts only**
(PID 318641 → 318659, ~5 second respawn, systemd, the earlier `systemctl
restart` test, the pending/no-picks caveat, "nflverse" as the data source
name) — do not quote its sentences as if Kit said them aloud. Render the
facts in the post the same way any other paraphrased material gets
rendered: in his register, not this one.

---

- **Open/unresolved, and it should stay that way:** as of this interview (2026-08-26),
  only a fraction of the league had signed up, the mock draft scheduled for the night
  before didn't happen because nobody signed up for it, and the real draft is
  2026-08-29 — three days out. Do not resolve this with an invented outcome. The post
  ends mid-uncertainty, which is the honest ending Kit gave it in Q12/Q20.
