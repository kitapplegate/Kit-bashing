---
title: 'Jev wasn''t even used'
description: 'I built Break Room to learn Jev, then discovered during the interview that Jev was not connected.'
pubDate: 'Sep 23 2026'
---

I was in the middle of doing the interview for this post, talking about
how I used Jev in an app I had just built, when the code got checked.
Jev wasn't in it.

I was a little irritated with my Grok Bot AI agent. It embarrassed me too.
I'm sitting there doing an interview about how I used Jev for this thing
and Jev wasn't even used. The app worked and I liked it, but the whole
point of building it that morning was to learn how to use Jev. I wanted
something for my portfolio that used a model that had just come out.

The night before, I wanted to build something fun. The Grok Bot AI agent
and I came up with a couple of ideas and made some prototypes, but I just
wasn't feeling any of them. I woke up around 5:30 the next morning still
feeling that itch to build something.

Normally when I take a break from schoolwork I watch YouTube, or I look at
X or LinkedIn and end up scrolling. I'm doing network engineering school
right now. I like the material, but remembering all the terms and commands
is hard for me, and it is very structured learning. I wanted fun learning.
I guess I wanted more school, but recess at school.

I love learning new things and going deep into whatever I am interested in
at that moment. I am also trying to become more active on X, LinkedIn and
Bluesky instead of being a lurker. Right now I am like the person at a
party who stands in the corner watching everybody and never interacts with
anything.

I had recently seen somebody post about Jev and thought it was another new
large language model, the kind that gives you words back. Then I watched
[Greg Isenberg and Ryan Vogel explain
it](https://www.youtube.com/watch?v=4mTLpuQpB80), read through TypeSafe's
site, and realized it was something different. The way I explained it was
that another AI does the words and Jev does the math. You give Jev
information and choices you have already defined. It returns a decision,
probabilities and a confidence score instead of a paragraph. [TypeSafe
describes Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
as built for fast decisions inside software.

My idea was a wall that would pull interesting things from YouTube,
Bluesky, X, GitHub, Substack, LinkedIn, Hacker News, Reddit, Indie Hackers
and Product Hunt. At first I told the Grok Bot AI agent to alert me when
something was trending. Then I changed my mind. No alerts. I would open it
when I took a break, pick something worth my time and go back to work.

The AI agent originally suggested six platforms. I told it I wanted ten.
I gave it some information about my interests so it could look for things
I might care about. I didn't want another email digest waiting for me.
The wall could sit there quietly until I decided it was break time.

The first usable wall took about 15 minutes. It looked finished enough.
It pulled in cards, scored them, and put them in order. I had been using it
and liking it. That is the wall I was talking about when the code got
checked during this interview.

The Grok Bot AI agent had made its own scoring system. I thought I had
implied that Jev was supposed to be part of the project. Obviously it
disagreed with me. It made some decisions I didn't want, which is part of
working with AI, but I also didn't check. Nothing looked broken. The thing
worked. It just missed the reason I made it.

So I started changing the app while I was still answering questions for
this post. At one point I talked for a while before realizing Windows
voice typing had turned itself off. Then I went back to answering the
interview and building at the same time. By the time I was done, the code
had changed and Jev was actually giving the scores.

Now another AI collects a pool of possible cards from those ten places,
using the interests I gave it, and Jev scores the cards when I open the
wall. Higher scores go first. I am still at the very beginning of knowing
what I can do with that.

I called the app Break Room. Every hour it gathers another pool of things
I might care about, and the wall shows 15 cards. It has an old-computer
look with pixel art and Oklahoma State orange, because orange is my
favorite color and I really like Oklahoma State's orange. Each card has a
picture, a short description and a link. I can open it or hit MEH.

![Break Room's orange-and-black CRT wall showing Jev-ranked cards from
Substack, Hacker News and GitHub](/Kit-bashing/images/break-room-wall.png)

Clicking a title means I was interested enough to open it. MEH means it
got that one wrong. Doing nothing means nothing. It doesn't feed anything
back. My choices feed back into what it thinks I like, and then it goes
out again the next hour.

A YouTube video about how to use Claude was farther down the wall. I
already know how to use Claude, so I hit MEH. The exact value Jev adds after
another AI has already filtered the giant pile is something I'm still
figuring out. I could have built a similar wall without Jev. I wanted to
learn Jev, so I wanted Jev actually in it.

The calls are cheap and fast. TypeSafe lists the price at $0.042 per
million input tokens, or $42 per billion, with output tokens free. Each
call for this will be less than a cent. The scoring is done in what feels
like a blink of an eye.

Tomorrow I want to open Break Room, find one thing worth reading or
watching, spend 15 minutes on it and get back to network engineering. Some
people will call having AI find it for me lazy. I am trying to keep a
break within 15 minutes, keep from getting trapped in YouTube and use the
time I have. I don't think that is lazy.
