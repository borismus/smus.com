UbiComp and ISWC 2015
=====================
posted: 2015-09-16

I recently returned from ISWC 2015, where I presented the [Cardboard
Magnet](/magnetic-input-mobile-vr/) paper. In addition to seeing old friends,
meeting new ones, and being inspired by some interesting research, it was an
excellent excuse to visit Osaka, Japan! This year, ISWC was co-located with
UbiComp, and the combined conference had four tracks. This post is by no means
exhaustive, just some of the more interesting work I got a chance to see.

<!--more-->

**Opening keynote: Visualizing and Manipulating Brain Dynamics**. [Mitsuo
Kawato](http://www.cns.atr.jp/~kawato/) showed some impressive [self-balancing
robots](https://ieeetv.ieee.org/conference-highlights/cb-exploring-neuroscience-withhumanoid-research-platform?).
It seems that we've [come a long
way](http://tumblr.forgifs.com/post/111425301004/robot-soccer-kick-fail). Most
of what he showed was around deep brain stimulation, artificial cochleas and
retinas, old work but mostly new to me. This is a recent, very impressive and
somewhat terrifying paper on reconstructing low-resolution grayscale [imagery
from
dreams](http://neurosurgery.washington.edu/Lectures/science.1234330.full.pdf).


## Novel input technology

**SoQr: Sonically Quantifying the Content Level inside Containers** is a
convoluted way of determining if you're out of milk. Inspired by acoustically
checking ripeness of watermellons, the idea is to use [contact speaker and mic
pair](https://goo.gl/photos/BVhjSZXyn7MJV2sv7) to determine how full a container
is. The method's efficacy depends a lot on the placement of the sensor,
properties of the container, and other environmental factors, like whether or
not any other items are touching the container. Seems overly complex to me, you
could use another approach to reach higher fidelity (eg. a scale). That said,
maybe this can be done very inexpensively?


**MagnifiSense: Inferring Device Interaction Using Wrist-Worn Passive
Magneto-Inductive Sensors** is about determining which electronic device is
being used. The idea is to use an inductor coil to detect nearby electromagnetic
radiation. They built their own hardware for the purpose which samples at a very
high frequency (44.1 KHz). They detect [unique EM radiation
patterns](https://goo.gl/photos/RQXQ8fBJpJU4f8wn6) for each type of device.
Supposedly they can do the same using a regular smartphone magnetometer, but I'm
very skeptical. They also claim to be able to determine who is using the device,
but that part wasn't very clear from the talk.


**DoppleSleep: A Contactless Unobtrusive Sleep Sensing System Using Short-Range
Doppler Radar** uses a 24 GHz doppler radar typically mounted near the bedside
to detect sleep patterns. The benefits are huge: you don't have to wear anything
or instrument the bed. [Medical sleep
trackers](https://en.wikipedia.org/wiki/Polysomnography) require
7 electrodes, and [consumer ones](https://en.wikipedia.org/wiki/Actigraphy)
don't work well.  They also had a demo where you just sit at your desk and the
doppler tracks your heart rate, breathing rate, as well as more macro
movements. It didn't work as well as I had hoped, but being a research demo, I
remain hopeful!



**Activity tracking and indoor positioning with a wearable magnet** was a poster
showing a very cheap way of tracking just by placing magnetometers in strategic
locations and giving the user a magnet. More details [on the
poster](https://goo.gl/photos/2un4nc5nrE7evC4D8).


**IDyLL: Indoor Localization using Inertial and Light Sensors on Smartphones**
attempts to solve indoor localization using the light sensor, and lamps as
features for tracking. They extract features from the lights using peak finding,
not absolute intensity. Then they wrote a kalman filter to fuse the IMU and
light-derived features. There's a lot of problems, like needing to have
structured light (eg. in a hallway with a low ceiling), and identify ambiguity
(ie. you're under a light, but which one?).

**Monitoring Building Door Events using Barometer Sensor in Smartphones** used
the ubiquitous smartphone barometer, which is currently used to get faster GPS
lock and assist in weather forecasting, to determine if a door opens in a
building. This only works in buildings with HVAC systems, but it was pretty
clever, and they found that it can work reliably, even for multiple doors. Basic
idea [described in this slide](https://goo.gl/photos/yKPbBYPv2RayMrcf6).


**ProximityHat - A Head-Worn System for Subtle Sensory Augmentation with Tactile
Stimulation** reminded me of various [vibro-tactile belt
projects](http://www.cc.gatech.edu/~acosgun3/papers/cosgun2014guidance.pdf), and
served a similar purpose: to exploit the sense of touch to give the wearer
another sense. This has many benefits like not blocking other senses. Anyway,
they built a hat and gave it ultrasonic sensors all around and inward-facing
linear actuators, not vibrator motors.  They studied sensitivity around the head
and found high variation around users, and that the forehead was generally less
sensitive. Main application appears to be navigation, and they did some blind
user studies.


**Controlling Stiffness with Jamming for Wearable Haptics** makes it easier and
harder to move sliders with the help of a pneumatic bladder, and layered
material. As the bladder inflates, the additional force on the layered material
causes increased friction. Previous layer jamming had low fidelity (binary), so
this is a big improvement. They are currently using sandpaper, so it's unclear
how robust the effect would be over time.


**PneuHaptic: Delivering Haptic Cues with a Pneumatic Armband** used a wearable
[pneumatic band with 2 pumps and 3
valves](https://goo.gl/photos/XkFSKrbRmpiZgzCu9) to give haptic feedback. This
is a nice alternative to vibrating motors and linear actuators, but not sure how
miniaturizable in practice.

**Fast Blur Removal for Wearable QR Code Scanners** is an image processing paper
for improving QR code detection on wearable devices. The proposed method uses
un-blurring techniques which involve predicting the blur direction and applying
de-convolutions. They also use an IMU to better guess the direction of movement.
However [QR codes are dead to
me](http://picturesofpeoplescanningqrcodes.tumblr.com/).


## Gadgets and fads

**Why we use and abandon smart devices** tried to answer the question of why
people abandon their various health and tracking devices so quickly. Basically,
people are motivated by curiosity and novelty, and these health trackers are too
gimmicky. Studies of Fitbit trackers saw majority of them abandoned (65%
abandoned in 2 weeks). Design implications are that encouraging routines
(changing behavior) and minimizing maintenance (charging) are the critical
things.This study had participants come up with a goal, and $1K to buy devices,
so quite contrived given that people didn't even choose to use the devices on
their own, but motivated by a study.

In a less contrived study about the same thing, **No Longer Wearing:
Investigating the Abandonment of Personal Health-Tracking Technologies on
Craigslist** scraped Craigslist for this data. They found that only 25% of
people sell their devices just for abandonment reasons. In many other cases,
they upgrade to something else, or reach their goals. That said, it's very
biased sample, since these people are selling (many just abandon, and don't sell
on CL).


## Machine learning

**DeepEar: Robust Smartphone Audio Sensing in Unconstrained Acoustic
Environments Using Deep Learning** used RNNs to learn whatever sound the user is
interested in. They did an interesting comparison to similar specialized systems
(eg. those that do speaker identification, stress detection, emotion, etc) and
claim to do better. Also, their RNN runs in hardware on a chip, which I thought
was super impressive.

In **Sensor-based Stroke Detection and Stroke Type Classification in Table
Tennis**, the authors instrumented paddles with IMUs and got people to perform
various strokes (in a somewhat controlled environment). They performed stroke
detection through peak recognition and thresholding, and then had a classifier
for stroke type determination. 97% detection and classification rates!
Impressive, but contrived. Wondering how it would do for a full game?

**Recognizing New Activities with Limited Training Data** was an interesting
paper about recognizing new activities based on small amounts of labeled data.
Their idea was to leverage "semantic attributes" from core activities to learn
a new activity.  Example: biking is like sitting (body is not changing angle),
running (legs move up and down) and driving (hands are steering). They proposed
an [Activity-Attribute matrix](https://goo.gl/photos/Rn2BbvQjhU3Lhv1K7), and a
cascaded classifier. Problem is that multiple activities can share the same
attributes. So they combine this with a traditional approach.

**When Attention is not Scarce - Detecting Boredom from Mobile Phone Usage**
predicted boredom with higher accuracy than I predicted. They collected a ground truth
of boredom data by polling users multiple times a day, asking if they were
bored, and collected activity traces (semantic location, demographics, network
usage, recent number of notifications, sensor data). They managed to detect
boredom with 73% accuracy. They then built an app which sent buzzfeed articles
when bored and compared engagement and click ratio to the random condition.
CTR was 8% for random, 20% when bored, and people were much more engaged.


## Virtual and augmented reality

**Wearing Another Personality: A Human-Surrogate System with a Telepresence
Face** was probably the most bizarre paper at the conference. This work
basically proposes to use a human surrogate instead of a telepresence robot. The
surrogate wears an HMD with pass-through camera feed and a tablet on their face.
The tablet shows the face of the director. The director gets audio and video
feed from the surrogate, and the surrogate gets audio instructions from the
director. They did creepy user studies like going to a city office to get a
public document (friend as surrogate), or meeting your grandmother (mother as
surrogate). Surprisingly, many participants liked being surrogates. The big
technical problem is camera pass through latency. If you go through the whole
Java stack it's something crazy like 300ms. Here's a [video from the
conference](https://goo.gl/photos/tZPoR4wvQiDekzg86) to give you a better sense.


**Comparing Order Picking Assisted by Head-Up Display versus Pick-by-Light with
Explicit Pick Confirmation** compared two order picking methods in warehouses.
The current method is via digital labels on each tray that count how many items
you're supposed to take from that tray. The new method is to show [which trays
to pick from using augmented
reality](https://www.youtube.com/watch?v=yUZFaCP6rP4). The benefit is that you
don't need an instrumented warehouse, so it's much cheaper. This was interesting
because it was a specific, potentially useful application for a Google
Glass-type device. At the same time, it may be an obsolete problem since aren't
robots supposed to automate that sort of thing pretty soon?

**ConductAR: An AR based tool for iterative design of conductive ink circuits**
is a project that validates hand drawn circuits using augmented reality. You
sketch your circuit with a conductive pen, and then the tool takes a picture and
gives you the right voltage drops etc. The presenter showed resistance
calculation (the thicker the line, the more resistive), using [a FEM
method](https://goo.gl/photos/wLaMQZqoqf66ap477). But I wasn't convinced that
this is worthwhile. Sketching circuits should be exploratory and does not need
to be precise, that's sort of the point.

**An Approach to User Identification for Head-Mounted Displays** uses blink and
head movements to identify users. They play a particular video and track your
patterns using Google Glass. They extract blinks using IR peaks, and head track
using the IMU. It takes about 30s to verify uniqueness, but not sure how large
their user base is. Results are good: 94% balanced accuracy, and blink features
are most important.

**Glass-Physics: Using Google Glass for Physics Experiments** compared using
Google Glass to just a tablet for assisting students doing physics experiments.
The idea is to remove drudgery from data collection. The experiment was to
determine [effect of fill level in a water glass on frequency of
sound](https://goo.gl/photos/kcxvxouYtDs6CfQv7) when the vessel was hit with a
fork. A Google Glass app did automatic collection of frequency and of water
level. People liked the wearable version more, but the tablet app involved
manual input. My theory is that a tablet app with AR features to auto-measure
fill level would do as well as an HMD.

**WISEglass: Multi-purpose Context-aware Smart Eyeglasses** was like Google
Glass, except without the display. The main contribution was a light sensor on
the bridge of the nose, which could reliably determine when you are at the
computer (from the screen update frequency). Other than that, seems pretty much
the same as wearing an IMU anywhere else (eg. smartwatch).


## E-textiles are impressive

I saw some nice demos of [stretch-sensitive fabric
(video)](https://goo.gl/photos/cui8ucmGYjdXq2tj9), and [pressure/capacitative
fabric (video)](https://goo.gl/photos/HbXp9xK2GtBgcoEo8). The real question is
where to embed the controller, and what to do about battery life (their stats
were pretty bad). E-textiles are interesting because everybody wears clothing,
which is not true for glasses or watches.

**Closing keynote: Behind the scenes** delivered by [Daito
Manabe](http://www.daito.ws/en/) was sequentially translated, which was
initially jarring, but the talk was so visually stimulating, it didn't really
matter. Daito walked through a lot of his data arts work, mind-blowingly
impressive art pieces involving drones, 3D graphics, depth cameras, etc. A nice,
if somewhat non-sequitur ending to the conference.

Signing off. Arigatou gozaimasu!
