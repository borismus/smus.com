Platform fertility: open for innovation?
========================================
posted: 2012-06-06

Although I love Apple's design aesthetic and ability to consistently
churn out amazing hardware, I'm never quite comfortable fully embracing
it. The reasons have to do with platform fertility, or how well suited a
platform is to incremental platform innovations and new platform
creation. Onward!

<!--more-->

## Personal computing

The evolution of personal computing is generally accepted to look something
like the following:

    Mainframe -> Minicomputer -> Personal computer

The above relationship can be interpreted in at least two ways:

1. The former was disrupted by the latter.
2. The former was used to design the latter.

Taking the first interpretation, we are in the middle (closer to the end, I
reckon) of another disruptive innovation:

    Personal computer -> Tablet

Indeed, compared to laptops, tablets seem to be a better way for the
general public to use computers. The touch interface is more intuitive,
and the physical form factor is better suited to casual use. For the
purposes of this post, let's assume for argument's sake that tablets
overtake personal computing in the future. The interesting thing is what
happens next:

    Tablet -> (next disruptive innovation)

Let's go back to the second interpretation: `b was designed using a`
(or, in some biblical sense, b begat a). In other words, designers and
engineers used a mainframe to invent minicomputers, a minicomputer to
invent PCs, and a PC to build tablets. We can call this "platform
fertility" just for fun. Up to now, said professionals could use
the latest general purpose computers to do their job, but this may be
changing.

The tablet disruption was enabled by its predecessor, the PC, being
flexible and extensible enough, and thus well suited as a prototyping
platform. Linux, OS X and even Windows are all very flexible platforms,
intended to work with a variety of software toolkits and external
devices. These desktop platforms never imposed restrictions like
software signing, and even if they did, you the power user could always
override.

## Peril of a closed platform

I don't want to argue about the semantics of the word "open", but
regardless of your religious dispositions, we can all agree that Apple
is not, nor has any pretenses to be associated with, that word. I'm not
making judgements here, it's just how they roll. The API surface is
carefully designed to give developers the right amount of flexibility,
but not more. AppStore is explicitly a sandbox, and if you don't play by
the rules, you lose your playground privileges.

So imagine for a minute that iPad swept the tablet market (shouldn't be
hard given the [current market distribution][ipad]). From a pragmatic
user's perspective, this is fine, even good! iOS is a very
well-integrated platform, working across all shiny Apple products, and
users are generally pretty happy with the interface and overall
experience. From a curious developer's perspective, however, things
are a bit different.

As an iOS developer that wants to improve the platform experience,
however, you are pretty much stuck with how things are. You can't
replace the lock screen, can't write long-running applications that read
in accelerometer data in the background, can't customize your home
screen launcher, etc.

The problem is exacerbated when you set out to try to invent the next
thing. How do you interface with your new stereo camera rig? How many
hurdles do you have to overcome to make it possible to interface with
your new smart watch? How about a pair of smart contact lenses? How do
you get raw USB access? Bluetooth? Ad-hoc wireless? Granted, the further
you venture away from the platform core, the less help you would expect
from it. This is generally where you climb down a layer of abstraction -
for example, to [NDK in Android][ndk]. Without such an option, you're
left dead in the water.

[ipad]: http://www.appleinsider.com/articles/12/05/04/ipad_tablet_market_share_will_dip_to_50_by_2017_study_says.html
[ndk]: http://developer.android.com/sdk/ndk/index.html

## A Litmus test

Unless iPads become more hackable or other, more developer-friendly
tablets emerge as serious competitors, laptop computers will become
specialized tools for software professionals while tablets supplant
laptops for the rest of the public.

Platforms inherently restrict the developer in some sense, placing them
in a box delineated by the APIs that the platform provides. An
interesting way to examine this box is with this notion of "platform
fertility", centering around the question:

**Can this platform beget future platforms?**

Whether your idea of the next platform is incremental (for example, a
better lock screen) or a fundamental disruptive innovation (for example,
smart glasses), the answer to the above question for the current state
of iOS is a resounding no. Sorry bro!
