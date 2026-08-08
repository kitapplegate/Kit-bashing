---
title: 'Faux Bunny R1'
description: 'I call it a marzipan moment when my brain won''t let something go. This one ended with a $40 phone from Walmart and a homemade AI gadget.'
pubDate: 'Aug 7 2026'
---

Twenty-five years ago I was at a Christmas Eve dinner, my fiancée meeting
the whole family for the first time, and we were playing dominoes when
something about marzipan got stuck in my head. I don't remember how it
started. I just stopped playing mid-game, everybody staring, and went
digging through my mom's cookbooks looking for a recipe. No computer in
the house yet, no smartphones. Just cookbooks, and a table full of people
waiting on me to take my turn. My brother-in-law, who's hilarious, named
it later: a marzipan moment. Anytime something gets lodged in my head like
that and won't let go, that's what I call it now.

I was having one over a Rabbit R1 — the AI gadget everybody's been talking
about. Kept pulling it up on Amazon, kept talking myself out of buying it.
So I decided to build my own instead and save the money. Only problem is
I'm traveling for work right now, not at home, and I don't have a drawer
full of old phones lying around. I thought about waiting until I got back.
The itch didn't care. On the way back to the hotel from work one day, I
swung by Walmart and picked up a forty-dollar Motorola.

What I actually wanted was a personal assistant — something in my pocket
that wasn't my phone, that I could just talk to instead of type into,
because I hate typing. Something that would get to know my patterns, keep
track of my appointments, maybe eventually hook into my email. Still
figuring most of that part out. You push a button on the side to talk to
it, it talks back, and the screen swipes between cards instead of open
apps. Underneath it runs on
[Hermes](https://github.com/NousResearch/hermes-agent), an open-source
agent framework from a group called Nous Research.

Getting there wasn't smooth. The camera was the first fight — I tried to
photograph something on my desk and got back a black square. Took forever
just to get it talking to the camera at all. Turned out Hermes doesn't do
image recognition on its own, so Claude, who'd been helping me build the
thing, took over that job instead.

The backend was worse. It would crash if I so much as went to the
bathroom. Claude's idea was a watchdog, something that notices when the
backend dies and restarts it on its own. That took some doing too. Two
apps needed to be signed with the same key and weren't, so I just
sideloaded the mismatched one fresh from F-Droid. Quick fix, once we knew
what it was.

Tonight was the field test. I'd had it with me in the car all day between
meetings — set it on the seat, went in, walked the floor, came back out to
tell it something before I forgot it. It said failed to fetch. I was like,
well, crud.

I didn't try to fix it right there. I just went and got a haircut. The
hairdresser asked if I had plans for the weekend. Just work, I said, I'm
traveling, so I've got Saturday and Sunday too. Same, she said, plus a lot
of schoolwork — she's going back to school. Turns out she's 45, getting a
degree in cybersecurity, wants to end up doing penetration testing. I told
her I knew exactly what she was going through. I'm 49. Coast Guard, then
insurance, and now I'm starting over into network engineering.

Back at the hotel, we went through the settings one at a time. Battery was
already unrestricted — checked that first, made sure nothing was putting
it into a deep sleep either. Nothing there. It wasn't until the very last
thing we checked, notifications, that we found it. I guess, best I
understand it, the phone is always looking to optimize itself — it
watches for apps that haven't been used in a while and shuts them down to
save battery. But if an app is set to receive notifications, the phone
knows to keep it open for that. Turn notifications on, and it stops
killing it.

The other thing bugging me: every reply was taking about twenty seconds no
matter what. I figured it had to be the model — I was running something
called Luna, which I'd picked myself during setup because it was 80% off
right now, dirt cheap. I thought it might just be too big, so I swapped to
Haiku for something faster. Same twenty seconds. Model was fine the whole
time. The real problem was that it was starting a brand new session from
scratch on every single message instead of keeping one open, paying the
full startup cost every time I said anything. Once that got fixed, replies
dropped to under a second. Hindsight's 2020. I probably could've just
stayed on Luna.

This isn't the first time something like that's bitten me. Six years ago,
Python class, an assignment on lists, I got stuck on a bug I could not
find. Called a friend who actually knew Python. He looked at my code and
found it. I was about ready to pull out hair I don't have. That class is
basically the reason I dropped it. R, the language I mostly use now, is a
lot more forgiving than Python was.

AI catching something like that doesn't bother me at all. I'm an idiot,
and I'm glad there are things smarter than me. Doesn't make me mad at
all.

It feels good having it done. Something me and Claude built together, and
there's a real high in that. The itch is scratched. I've got the device
now, I can just play with it, keep upgrading pieces of it as I go. Figure
I'll use it for a week and see. Knowing me, it'll be longer than a week.
