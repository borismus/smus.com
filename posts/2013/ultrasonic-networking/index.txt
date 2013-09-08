Ultrasonic Networking on the Web
================================
posted: 2013-08-08

The phone in your pocket is an amazing, fluid, multi-functional tool.
When it comes to talking to other devices, such as your TV or laptop,
the user experience drops off sharply. Bill Buxton [speaks
eloquently][buxton] on the subject, describing three stages of
high tech evolution:

1. Device works: feature completeness and stability
2. Device flows: good user experience
3. Many devices work together

But connecting devices is a pain and we have been squarely at stage 2
since the release of the iPhone. There are many competing approaches to
do this: Bluetooth, Bluetooth LE, WiFi direct, discovery over the same
local WiFi network, and many many others. This post is dedicated to
attacking this problem from an unexpected angle: using ultrasound to
broadcast and receive data between nearby devices. Best of all, the
approach uses the Web Audio API, making it viable for pure web
applications:

<iframe width="640" height="360" src="//www.youtube.com/embed/w6lRq5spQmc" frameborder="0" allowfullscreen="true"></iframe>

[buxton]: http://www.youtube.com/watch?v=ZQJIwjlaPCQ&feature=youtu.be&t=21m00

<!--more-->

## A device tower of babel

[Airplay][] and [Chromecast][] are great approaches to a subset of the
problem for devices within the same ecosystem (eg. Apple, or Google),
but the general problem remains hard to solve.

Because there are so many possible technical approaches, chances are
that the pair of devices that you happen to be using don't have a common
language to speak. Even if both devices have Bluetooth, one of them may
require a profile the other doesn't support, or support a different
version of the standard. This is especially common with Bluetooth today,
where many devices have the hardware to support Bluetooth 4.0 (aka
BTLE), but many devices don't currently support the new protocol for
various reasons.

On the web, the problem is even worse, since low level device connection
APIs aren't exposed for [security sandbox reasons][sandbox]. Because of
how slowly the web evolves, it's hard to imagine this changing any time
soon.

[Airplay]: http://www.apple.com/airplay/
[Chromecast]: http://www.google.com/chromecast
[sandbox]: http://smus.com/installable-webapps/

## Transmitting data in interesting ways

[Blinkup from Electric Imp][blinkup] is an interesting approach to
cross-device communication. It uses a series of blinks to transfer
configuration data between a smart phone and an Imp, a small SD-card
shaped device with a light sensor.

Dial-up modems did a similar thing. They encoded and decoded digital
data onto an analog phone line. Remember those annoying connection
noises? Dial-up modems would turn on their speaker to give the user an
idea of how the handshake is progressing. If you don't remember, here's
a [refresher][dialup]. Even today on analog phones, the sounds you hear
when pressing numbers on a dialer correspond to the frequencies the
phone system uses for analog-to-digital conversion. The conversion
happens using [Dual-tone multi-frequency signaling (DTMF)][dtmf].

Your phone and a lot of other devices around you has a speaker and a
microphone. These two pieces of hardware can be used for sending and
receiving data using sounds, similar to how modems did it over phone
lines. Better yet, if the OS supports high enough frequency sending and
receiving, we can create an inaudible data channel.

[blinkup]: http://www.youtube.com/watch?v=sVWlQNzU4Ak
[dialup]: http://www.windytan.com/2012/11/the-sound-of-dialup-pictured.html
[dtmf]: http://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling

## Transmitting data using sound

I should note that encoding data in sound is not new. The idea of [audio
watermarking][watermark] is to encode a signature into music that is not
discernable by the listener (due to the way humans hear), but can be
picked up by a machine. This is used as a clever piracy detection
scheme. 

Most commodity speakers are capable of producing sound with a 44.1KHz
sample rate (resulting in a maximum frequency of about 22KHz by the
[Nyquist-Shannon sampling theorem][nyquist]). This lets us encode data
not just as sound, but as sound that adults can't hear. Children and
non-human animals are still susceptible, though :)

One technical caveat is that microphones are sometimes not as capable as
speakers, especially in phones, since they are often optimized for human
speech, which sounds fine with a lower sample rate. In other cases,
even though the hardware is capable, the firmware runs at a lower sample
rate for energy efficiency. If this is the case, one of the devices will
not be able to receive the wave and the sound-based connection will be
one-way only.

[nyquist]: http://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem
[watermark]: http://en.wikipedia.org/wiki/Audio_watermark


## Sonicnet.js, a web audio implementation

To illustrate these concepts, I built a [JavaScript library][sonicnet]
that can send and receive data as sounds. My approach is and not nearly
as sophisticated as the audio watermarking technique, and even simpler
than the DTMF approach. Basically, you can specify a range of
frequencies to use, and an alphabet of characters that can be
transmitted. The frequency spectrum is split into ranges corresponding
to the specified alphabet and start/end codes, with each character/code
corresponding to a part of the full frequency range.

The sending side converts each character of the word to be sent into the
center of the corresponding frequency range, and transmits that
frequency for a certain duration. The receiving side does a continuous
fourier transform of the signal and looks for peaks in the specified
frequency range. Upon finding a peak for a significant duration, it does
the conversion back from frequency to character. This is essentially
a [single-tone multi-frequency signaling (STMF)][stmf] scheme.

There is a timing issue: on the sending side, how long should each
character be transmitted for, and on the receiving side, how long should
the listened for? An easy workaround for this is to disallow adjacently
repeated characters.

I built a socket-like API for sonic networking. Client code
looks like this:

    ssocket = new SonicSocket({alphabet: '0123456789'});
    function onButton() {
      ssocket.send('31415');
    }

And the server can look like this:

    sserver = new SonicServer({alphabet: '0123456789'});
    sserver.on('message', function(message) {
      // Expect message to be '31415'.
      console.log(message);
    });
    sserver.start();

The library is available for use on [github][lib].

Of course, using it requires a Web Audio implementation (mostly
`OscillatorNode` on the sending side, and `AnalyserNode` on the
receiving side) and good enough hardware. I have experimented with
Chrome-to-Chrome transmission on Mac Books, as well as between Chrome
for Android (beta) and Chrome for Mac.

I wrote a couple of demos to illustrate the idea. These appear in the
[video I embedded at the top of the post][video]. The first demo lets
you [send emoticons][emoticons] from one device to the other. It uses a
small alphabet of just 6 characters - one for each emoticon. You pick
one of 6 emoticons, and the corresponding character is sent over the
sonic network, received and shown prominently on the other end.

A more realistic use for sonicnet.js is this [chat
application][chat-pair], which generates a non-repeating 5-digit token
and uses it to create connections between two devices. This is done with
the help of a pairing server, which helps establish a proxied connection
between the two devices, over a websocket. Once the connection is
established, the chats themselves are sent through the websocket. The
[server code][server] is hosted on [nodejitsu][].

[stmf]: http://en.wikipedia.org/wiki/Selective_calling#Tone_burst_or_single_tone
[lib]: https://github.com/borismus/sonicnet.js/tree/master/lib
[emoticons]: http://borismus.github.io/sonicnet.js/emoticons
[chat-pair]: http://borismus.github.io/sonicnet.js/chat-pair
[sonicnet]: https://github.com/borismus/sonicnet.js
[video]: http://www.youtube.com/watch?v=w6lRq5spQmc
[server]: https://github.com/borismus/sonicnet.js/tree/master/server
[nodejitsu]: https://www.nodejitsu.com/

## Conclusions and a request

It's great to see that the Web Audio API has come far enough that
applications like these are possible. I'm fascinated by the implications
of sonicnet.js for the Web of Things. It is a pure web technology that
can be used to pair devices together. Because of the ubiquity of web
browsers and audio hardware, the combination can be a huge win, even
among commodity hardware, without having to wait for Bluetooth and other
close-range connectivity technology to become available to the web
platform.

If this post has piqued your interest and you are interested in helping,
try writing an app using sonicnet.js. As I mentioned earlier, receiving
high frequency sounds does not work on all devices because of
firmware/hardware limitations so I'd love to know which devices it does
and does not work on. My expectation is that most phones should be able
to send only, and that most laptops should be able to both send and
receive. Please fill out [this form][form] once you try the [emoticons
demo][emoticons] on your own hardware. At the time of writing, [live
input is not supported][live] in Chrome for Android Beta, so sending
data from mobile device to laptop is the only possible configuration.

[form]: https://docs.google.com/forms/d/1dAgNdVdhss-QR-Owm556RZch-MV_ntnAMP8_ZJi5XLA/viewform
[live]: http://crbug.com/242894
