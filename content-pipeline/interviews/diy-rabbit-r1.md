---
slug: diy-rabbit-r1
date: 2026-08-07
status: interviewed
---

# Building a Rabbit R1 out of a Walmart phone

## Reference: Kit's written project brief (facts only — not a voice source)

This section is Kit's own typed notes, given before the first interview
attempt (now redone from scratch below, including the origin story, which
the first attempt got wrong — see the Q&A). It locks in technical facts the
transcript doesn't repeat verbatim. Do not draw prose from this section —
draw facts from it. Voice comes only from the Q&A below.

> Rabbit R1 Companion — turning a Moto G Play (a cheap Android phone) into a
> standalone AI hardware gadget in the spirit of the Rabbit R1, without buying
> one. Physical volume-down button as push-to-talk, spoken replies, camera
> vision, a swipeable "cards" home screen (Chat/Weather/Timers/Notes/Status)
> instead of a normal app grid — the goal is that it feels like a dedicated
> device, not a phone running an app.
>
> Architecture:
> - Termux (Linux userland on Android, no root) runs a small Node.js backend
>   (server-v2.js) on 127.0.0.1:4317.
> - Inside Termux's Debian proot lives Hermes Agent (Nous Research's
>   open-source agent framework) for the "brain" — memory, tools,
>   multi-provider model routing.
> - A thin native Android shell (Java, WebView-based) is the actual launcher
>   app — it wraps the local web UI but adds what a WebView can't do alone:
>   native SpeechRecognizer on the hardware volume button, native
>   TextToSpeech for replies, real camera capture, geolocation.
> - Claude (Anthropic API) handles vision/photos directly; Hermes handles
>   everything else.
>
> Story beats: the $0-hardware premise (later corrected — see Q&A); WebView
> isn't Chrome (on-screen mic button and browser TTS silently don't work in a
> WebView, had to bridge native Android APIs into the page via
> @JavascriptInterface); the camera rabbit hole (onShowFileChooser not
> implemented, a MediaStore capture bug producing solid-black photos, missing
> <queries> manifest entries for package visibility); today's "failed to
> fetch" field-test failure and the debugging arc that followed — backend
> dying while backgrounded (root cause: Termux's notification channel was
> muted, weakening its foreground-service protection), fixed with a
> self-healing restart loop, corrected battery/notification settings, and a
> watchdog that detects a dead backend and relaunches Termux via Android's
> RUN_COMMAND intent (which required chasing a signing-key mismatch between
> GitHub and F-Droid builds of Termux:API first); Hermes replies flatly slow
> (~20s) regardless of model or config, turned out to be oneshot CLI mode
> paying a full cold-start on every message — switched to Hermes's ACP
> protocol (JSON-RPC over stdio, same protocol editors like Zed use) for a
> persistent session, cutting latency to ~1s warm; "gpt-5.6-luna" looked like
> a hallucination but was a real model Kit had picked during setup. Plus the
> workflow itself — most debugging happened phone-in-hand on a tiny keyboard.

---

## Q: Walk me through the real start, no cleanup this time: you're talking yourself out of a $200 impulse buy, and you end up in a Walmart forty minutes later buying a different phone. What actually happened in between? (Rogan)

So I have to tell a story Joe before I can move into answering your questions 25 years ago I was at a Christmas dinner with my family it wasn't it was like I think it was Christmas Eve My fiance was there it was the first time that she had met the whole family and we were playing a game or playing dominoes and I don't remember to this day how it happened but I got fixated on marzipan and I just got so obsessed with it that I stopped playing dominoes right in the middle with the family everybody looking at me and I started looking up recipes you know out of this is this was early 2000s so you know we don't really have a computer there at the house yet umm and you know obviously we don't have smartphones and so I'm looking through my moms cookbooks and things like that looking for 'cause I was gonna start making marzipan anyway my brother in law who's hilarious coin the phrase it was one of my marzipan moments And now every time I get one of these little kicks where I'm got something in my head that I can't get out of I call it my marzipan moment and I was having a marzipan moment I needed to buy this rabbit R one and I was talking myself out of it And so I decided that I was just gonna build one save some money and I'm traveling for work not at home I don't have a drawer full of old phones I thought about waiting till I got home but I you know the itch was there I was I was on Amazon ready to buy that thing a couple of different times and talk myself out of it and so I'm like no I'll just buy a cheap phone from Walmart one of those prepaid phones and I'll just build it on there and so I went to work and I was going back to the hotel and I swam by Walmart and I picked up a 40 dollar Motorola and that's that's where That's where it happened that's why That's why I did it

## Q: If you had to describe what you were actually trying to build — not a spec sheet, just in your own words — what were you going for? (NetworkChuck)

I wanted a personal assistant I wanted something in my pocket that wasn't my phone that I could just talk to I was gonna tell my day I wanted to get to know me I wanted to get all my patterns I want it to to keep track of up appointments and different things like that I mean eventually I wanted to tie it into certain things like maybe my email and different things like that these are all still still things that I'm trying to figure out with this I just but yeah that's what I that's what I wanted I liked the idea of a device a stand alone its own device that I can turn into a personal assistant one that I don't have to type 'cause we all know I hate typing I just wanted to talk to it

## Q: The camera. Walk me through it step by step: first time you tried to take a picture, what did you actually see happen? (NetworkChuck)

so once we got it through we got umm when we got the interface working Umm I try to take a picture of just an object on my desk and it just was a black square and they it just you know just didn't work and it took us forever to figure out how we could get it to talk to or how we can get it to take a picture I was doing everything else there was the delay but I was you know I could work on that later

## Q: Tonight's fix — you get home, plug in, open Claude. Walk me through those two hours for real. What'd you check first? What looked promising and turned out to be nothing? (Rogan)

I mean when I got home today and I plugged it in I just said I'm getting this fetch air and we walk through the whole the whole process we umm it took a while to figure it out what it was We thought it might have been the model that was too big of a model and that I was taking it so we we switched to Haiku so that there was a faster model but that ended up not being an issue Umm and there was a lot of back and forth a lot of Claude looking through the phone and then having me do things in the command line And I was his hands on the command line some of the stuff it could do on its own but a lot of the time I had to do something on my end on the phone pick it up type it out on the on the keyboard the phone's keyboard I really thought I was the model I thought I was going out there it was searching whatever and I was kicking it back and that was what's taking it but that's not really what the what the problem was turned out the bottles just fine I probably could have stayed with Luna instead of moving to Haiku but you know hindsight's 2020

## Q: Your fiancée's meeting the whole family for the first time, and you just stop mid-dominoes to dig through your mom's cookbooks. What did everybody do? What did your brother-in-law actually say when he coined "marzipan moment"? (Fallon)

For the marzipan moment coinage didn't come until a little bit later But umm you know they're like hey we're playing a game here and come on back to the table and I came back to the table and but II couldn't get on my head and couldn't stop talking about it

## Q: Back to tonight — before you landed on the muted notification channel being the real cause, what else did you check? Was the battery setting genuinely the only dead end, or were there others? (Rogan)

We checked a bunch of different things within the the settings we checked it wasn't until the last part that we checked the notifications Umm I checked the battery and made sure the battery was unrestricted made sure that there wasn't anything to 'cause it sleep umm you know like a deep sleep type thing or whatever And it just ended up being It ended up being it'll be in the notifications yeah

## Q: Once you actually found the signing-key mismatch between the two Termux apps, how'd you fix it — rebuild one from scratch, re-sign it, reinstall? (NetworkChuck)

Oh Chuck no we umm what I did is I just side loaded from F Droid with the with that's that's all I did It wasn't it wasn't really one once it was pretty quick once it was identified it was just a download and install thing

## Q: In your own words — why does muting a notification actually cause the phone to kill the app in the background? What's the connection there? (NetworkChuck)

so so I guess what I understand the muting of the notifications So if something is a doesn't get used the phone automatically is always looking to optimize itself and so it looks for apps that haven't been used for a while and it kind of shuts them down so the conserves the battery and all that and processing power and speed and but if something is receiving notifications then it knows oh I need to keep this open so they can receive notifications And so that's what that's what did it he turned on notifications with it and you know it knows to keep it open

## Q: Walk me through "failed to fetch" itself — where were you, what were you doing right before, what'd you actually do the second it happened? (Rogan)

So I had been at work I'm traveling for work and so I was at work I had been using it in the car I set it on the seat in the car and I went in to work you know went to some meetings walk the factory floor did the things I need to do then I came back out to the car and I was going to use the device and tell it something I don't remember what it was now that's the reason why I need something like this to say right when I say it And and that's when I got the failed to fetch and I was like well CRUD and umm I went and got my haircut and that's that's what happened after that

## Q: Then the haircut — what was going through your head sitting in that chair, and what happened with the hairdresser? (Rogan)

so who was talking with the hairdresser and she was asking me if I had any plans for the weekend and I remember you know as I said no I've just got work 'cause I'm traveling and so I work Saturday and Sunday also She's like yeah me too but I've got a lot of schoolwork And I was like oh you're going back to school And she said yeah I'm 45 years old and I'm going back to school for cyber security And you know she kind of played it off as like this like well that's just what we're gonna be doing And I was like I know exactly what you're going through i'm 49 years old i'm going into network engineering and you know we kind of had a moment there where you're both kind of later in our lives she had a career already as umm as a hairdresser and she's pivoting into IT to be she wanna be a pen tester Umm and so you know that's quite a bit different than cutting hair and you know I was in the insurance business and the Coast Guard before that and I'm going into something completely different too so you know we actually two people from two different parts of the world you know kind of going through the same thing

## Q: The car-wash class script with the missing comma — what was that assignment, and how long were you stuck before your friend found it? (NetworkChuck)

Check the it was Python class The assignment was as we were learning if I believe it was lists and I had to build this thing so that it could grab stuff off of a list and I mean this is probably 6 years ago so I remember all the details I just remember I couldn't figure it out and that the I had to call a friend and the is new Python and he looked through my code and he was the one that found it you know I was like about to pull my nonexistent hair out and the Yeah I was just madding It was actually one of the III ended up dropping the class just 'cause I just that was almost like the catalyst for it and I was just like 'cause R is a lot more forgiving

## Q: Wrapping this up tonight — how's it feel, actually done, knowing you built this instead of buying it? (Fallon)

feels Jimmy it feels really good to have it done something that with me between me and Claude and Kodak's we built something and there's a little bit of a high associated with it and I feel really good the itch has been scratched I don't have the but I have to buy it now I've got the device and I can play with it Umm well I've still got some things I want to do with it and upgrade it and some aspects and stuff but you know I have a device that I can use I want to use it for a week and figure it out from there Yes all that work for a week It'll probably be longer than a week knowing me

## Q: The watchdog that restarts the backend on its own — whose idea was that, and what was your actual role in getting it built? (NetworkChuck)

Chuck that was definitely Claude's idea because I was it was very unstable you know anything could make that close out and it would it would do that a lot actually when we were doing the testing phase of it that's very beginning it was just closing out just because I took you know went to the bathroom and so you know he claude Figure that out

## Q: You dropped a whole Python class partly because of a bug like the comma one — years before AI could just spot it instantly. Does it bother you at all that a machine can do in two seconds what cost you a class? (Zach)

Zach no because I'm an idiot and AI is so much smarter than me and I'm glad that there are things that are smarter than me Does not make me mad at all
