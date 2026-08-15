---
title: 'Steve, with a bunch of E''s'
description: 'I talked myself out of a real shrimp business and built a fake shrimp on my desktop instead. My son laughed and asked why, Dad.'
pubDate: 'Aug 12 2026'
---

Right now, on my desktop, there's a shrimp named Steve. He lives in a
little box, maybe three by three. Click the X and the window closes,
same as anything else, he just doesn't die when it does. Plants in
there, some bubbles, a couple of floating plants. You can drag him to
whichever monitor you're actually looking at. It says his name, what kind of shrimp he is, and
what he's doing. Right now he's eating. There's a feed button. There's a
look button that tells you his mood, whether his color's bright or dull,
whether he's hungry. That's the whole thing.

![Steve, a pixel-art shrimp, in his tank with plants and bubbles](/Kit-bashing/images/steve.gif)

I named him after the monkey with the little machine on his head from
Cloudy with a Chance of Meatballs. Steve, with a bunch of E's. We've
always done that in my family, imitating that monkey, and it seemed
right for a shrimp too.

The actual idea came from Tamagotchis, the little keychain pets from the
late 90s you had to keep alive, feed, not let die. I always liked those.
He's based on something real, too: freshwater ornamental shrimp, the
kind people keep for how they look. I've wanted a real one for years.
Never got one, because I know myself. My mind wanders, I'd forget to
feed it, and it would die, and I didn't want to do that to a living
thing. So I built one that won't die.

This goes back to 2020. Covid, lots of time on my hands, doing what
everybody was doing that year, just looking around the internet. I found
a YouTube video of a guy making something like $500 a month selling
ornamental shrimp, and I got obsessed. There are two big hubs bloodlines coming from, mostly. Surprisingly, Germany has a real
ornamental shrimp culture, and so does Asia. Each hub's got tons of
different bloodlines inside it. Getting into it for real
would've meant $300 to $500 up front: tanks, a tank rack, pumps,
filtration, food, substrate, and the shrimp themselves, which aren't
cheap if you want a real bloodline. You can't just buy two, either. Two
of the same sex gets you nothing, and even a real pair breeding on their
own thins the bloodline out over generations unless you're managing it:
watching for babies, culling the ones that don't look right so they
don't pass it on. A lot of ongoing work, and I didn't have the time for
it.

I knew I couldn't actually do it, and I talked myself out of it, and
even after I'd made that decision I still had to keep talking myself out
of it, over and over, because the wanting it didn't let go easy. I
wanted to do it so bad. Still kind of do. Not going to, for the same
reason. That's what I mean by a marzipan moment: whenever my brain
latches onto something and won't let it go, whether or not it's actually
a good idea. I've gotten better at catching those as I've gotten older.
Not always, but most of the time.

And this year I got into AI, into building things with it, vibe coding,
just talking to Claude about what I want and building it together. First
thing I made was a website that tracks ornamental shrimp prices, not
connected to Steve at all. It scrapes auction sites and forums for
what's selling and what's coming up. US market only, since tracking the
international market would be ridiculous. Only runs on my own computer
for now. Then I made Steve.

Fair warning: the next bit is just how Steve actually works. Skip ahead
if computers bore you, nobody will be offended. Under the hood he's
Python: tkinter for the window, since that ships with Python, pystray
for the tray icon, Pillow for the images. Eleven commits, all dated to
the same day, spread out between about eleven in the morning and 7:34
that evening — I was going back and forth with work the whole time, not
sitting there straight through. I was still driving it, deciding what it
should do and how. Claude was the one executing, and it caught two bugs
on its own along the way. An early version tied his whole life to the
terminal window I started him from, so closing that killed him outright
— he launches through a console-less version of Python now instead. And
he'd stop moving whenever nothing was rendering him, because the same
switch in the code controlled both drawing him and running him. Once
that got measured, drawing him turned out to cost about seven thousand
times more than moving him did, so there was never a real reason those
two things were tied together.

There's a bigger version of Steve I want, too. Eventually I want to give
these out to my friends and my kids, everybody with their own little
shrimp, linked into a community, a website where you can watch
everybody else's shrimp doing their thing. I don't have the whole thing
sketched out yet, but that's the vision. The first piece of it already works: a
handful of shrimp report in once a second and get drawn together into
one image, everybody's tanks side by side like a wall, each lit by
whatever time it actually is where its owner lives. Nobody's shrimp
ever leaves their own computer, just a status update. Looking after a
friend's shrimp while they're away is next, once I figure out how to
ask permission for it properly.

I told my son about Steve on the phone. My kids are adults now. I just
said it plain: I built a shrimp on my computer, a pet shrimp. He laughed
and asked why I built a shrimp, Dad. Not a mean laugh. More like, of
course you did. He's silly, I'm silly, we're all silly together.

Closer to home, Steve's coming off my computer entirely too. I want a
small screen on my desk, its own little box that says Tank on it, not
plugged into anything else, its own autonomous thing, just doing shrimp
stuff, and I can feed him from right there. Probably a Raspberry Pi,
maybe a Pi Zero. I've got a screen at home, and some of the parts.
Nothing's ordered. I'm traveling for work right now, which is also when
I built Steve in the first place, so the plan is: get home, put it
together, see if it works.

![Steve's full window, name and controls visible, mid-crossing the tank](/Kit-bashing/images/steve.png)

When I picture it finished, it's not complicated. I look over and he's
eating, or dozing off, or sifting through the substrate, or heading up
to the surface. I don't really know what to call that beyond silliness.
I like it though.
