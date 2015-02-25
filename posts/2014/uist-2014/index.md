UIST 2014 Highlights
====================
posted: 2014-10-14

This year's [UIST][uist] was held in Waikiki, Honolulu, the undisputed
tourist capital of Hawaii. I've stuck to my now three year old habit of
taking notes and [posting my favorite work][2013]. Since last year,
the conference has grown an extra track. The split was generally OK for
me, with my track mostly dedicated to user interface innovation
(sensors, etc) and another more concerned with crowdsourcing,
visualization, and more traditional UIs.

My overall feeling was that the research was mostly interesting from a
tech perspective, but focused on solving the wrong problem. For example,
at least 5 papers/posters/demos were focused on typing on smartwatches.
The keynotes were very thought provoking, especially when juxtaposed
with one another.

[2013]: http://smus.com/uist-2013

<!--more-->


## Focused Ultrasonic Arrays

I got to play with a holographic display with touch-feedback. Sounds
crazy, and it is. HaptoMime uses an array of ultrasonic transducers to
beam-form focused ultrasound to a specific target. The touch feedback
feels like a little electric shock, but it's incredible that it works.
The field of view of the holographic screen is a bit limited:

<iframe width="600" height="339" src="//www.youtube.com/embed/uARGRlpCWg8" frameborder="0" allowfullscreen></iframe>

As a kid, I loved drawing patterns on my grandma's rug with my finger.
This research team was clearly inspired by the same activity, and they
created several ways of automating the process: using a roller device, a
pen, and an focused ultrasonic array:

<iframe width="600" height="339" src="//www.youtube.com/embed/L0hrETGddLQ" frameborder="0" allowfullscreen></iframe>


## Multi-device interactions

GaussStones built on a bunch of other "Gauss"-prefixed previous work
from the same lab, showing an array of hall sensors used to sense a
variety of shielded magnetic tokens, which can encode an ID using field
strength. You could play physical chess, or even combine magnetic tokens
to create more complex interactions, like a slider or button unit:

<iframe width="600" height="339" src="//www.youtube.com/embed/qlr-15Oto6s" frameborder="0" allowfullscreen></iframe>

Another nice example of multi-device interaction came from MIT, where
a group used this extremely clever way of tracking the phone's position
relative to a laptop, using a 2D gradient, where the color of each pixel
maps to a position in space:

<iframe width="600" height="339" src="//www.youtube.com/embed/hFH6hJLDoLE" frameborder="0" allowfullscreen></iframe>

The awkwardly named Vibkinesis shows a smartphone case which is
equipped with two vibrator motors which give a phone the ability to
translate and rotate on a flat surface. In one example,
notifications caused the phone to rotate by 90 degrees, which had the added benefit of
notifying the user of a notification even if the battery runs out of
juice. This is apparently funny from a Japanese culture perspective,
where characters often die under strange circumstances, leaving no clue
but a "dying message" on or around their person. Another example
involved a fish-eye lens on the front-facing camera to detect the
position of the user's hand (based on skin color), and then physically
nudging the user to get their attention:

<iframe width="600" height="339" src="//www.youtube.com/embed/UlFwVUHotrU" frameborder="0" allowfullscreen></iframe>


## Awesome fabrication techniques

I'm a huge fan of subtractive techniques (eg. laser cutting) rather than
additive ones (eg. 3D printing). FlatFitFab is a CAD tool for easily
creating balsa dinosaur-style models, and evaluating their stability and
feasibility. Super cool work:

<iframe width="600" height="339" src="//www.youtube.com/embed/HeFQw0chSJY" frameborder="0" allowfullscreen></iframe>

Rather than creating PCBs in something like Eagle, why not just sketch
them with a conductive pen instead? ShrinkyCircuits does just this,
following the principles of Shrinky Dinks, which shrinks when heated.
Because the whole board shrinks, it improves conductivity of the
conductive ink, and the contact points with electronics components.

<iframe width="600" height="339" src="//www.youtube.com/embed/4p-l374rb8M" frameborder="0" allowfullscreen></iframe>

## Spatial AR

Research from Microsoft showed rooms instrumented with multiple
Projector+Depth Camera rigs, which allowed for some interesting
multi-user interactions:

<iframe width="600" height="339" src="//www.youtube.com/embed/ILb5ExBzHqw" frameborder="0" allowfullscreen></iframe>

Of course, the setup above doesn't allow perspective-corrected scenes.
To remedy this, they had a companion project which split the room in
two, creating head-tracked scenes for two participants. Pretty cool,
though it does not generalize to more than two people, nor does it
support stereo:

<iframe width="600" height="339" src="//www.youtube.com/embed/Df7fZAYVAIE" frameborder="0" allowfullscreen></iframe>

Still, entering either of these VR rooms feels a lot less dorky than
having to don a VR headset.

## Keynotes

UIST was punctuated by three keynotes, from Ken Perlin, Mark
Bolas and Bret Victor, all of which were thought provoking and sometimes
frightening, but unfortunately not recorded. When I used to be in
Developer Relations, we would be hardpressed to show up at a conference
if the talk was not recorded because so much of the engagement happened
after the fact online. **Academia needs the same culture**.

Ken Perlin kicked off the co-located conference, SUI (Symposium for Spatial
Interaction), off with a nice talk about making computer use more like
performing a music, and less like writing a musical composition. As he
gave the talk, he very effectively used a tool he created called Chalk
Talk, which lets you sketch objects with behaviors in short hand - very
meta. Unfortunately I've been unable to find anything published about
the tool, as it would be interesting to play with. Ken envisioned a
world where you could do something conceptually similar to Chalk Talk
without a computer in the way. If this "virtual chalk" capability was
available to all humans, it would transform the way we communicate. I
wasn't completely convinced. When I'm discussing something with
colleagues, we only use a whiteboard for only very specialized things
like drawing a diagram of multiple objects. So there are two things that
need to happen:

1. This virtual chalk needs to be **easier to access** than a whiteboard
   while in a meeting room.
2. **Expand the set of concepts** that can be expressed with virtual chalk.
   Text and speech is [pretty powerful][text].

Mark Bolas started UIST with a pretty terrifying keynote on virtual
reality. His premise was that "we are headed into a virtual future,
whether we want it or not". Terrifyingly, Mark seemed to be okay with
this inevitability, even going as far as discounting augmented reality,
since by the time we've built VR, we'll just want to stay in our
helmets. The real world isn't that great anyway. One thing I liked was
his call for creating more **surreal experiences** in VR rather than
trying to emulate the real world. These types of simulations are
conspicuously missing from [existing VR demos][demos].

Bret Victor ended the conference with a much needed humanist
counterpoint to Mark' vision. I cannot do the talk justice, and eagerly
await a recording of it to try to understand all of the nuances. The big
idea of the talk was that "knowledge work" which started with the
printing press is tyrannical, reducing all of our senses and abilities
to manipulating symbols on a sheet of paper. So many other things that
evolution has designed for us, like hearing, smell, sense of space,
touch, etc, are all thrown out of the window. This problem only gets
compounded as we move to virtualize everything with touch screens. Bret
thinks we're poised to design the next great "dynamic" medium after the
printing press, something that is always interactive and multimodal, and
takes advantage of a wide array of human capabilities.

According to Mark Bolas, the real world is flawed, and we should build a
better virtual one. Bret Victor's vision is that humans are perfect,
having evolved over thousands of years. Rather than changing what it
means to be human, we should build a new medium that adapts to our
inherent strengths and weaknesses. Ken Perlin's "virtual chalk" is a
great example application for this dynamic medium.

[text]: http://graydon.livejournal.com/196162.html
[uist]: http://www.acm.org/uist/uist2014/
[demos]: https://share.oculusvr.com/category/all


## Tracks I missed

Because UIST has become a multi-track conference, I inevitably missed
interesting parts. In particular, the collaboration track had some
[awesome][c1] [work][c2], and there was one [music-related paper][music]
paper. It was great to have had a good excuse to go this year, showing
Cardboard to the academic community. Looking forward to next year,
although it is to be held in a somewhat [less glamorous location][2015].

![Hawaii sunset.](sunset.jpg)

[2015]: http://uist.acm.org/about
[c1]: https://www.youtube.com/watch?v=QtyO-oFlzGg
[c2]: https://www.youtube.com/watch?v=jMH_qQF0vKg
[music]: https://www.youtube.com/watch?v=YMfzAstvij0
