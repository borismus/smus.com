Copresence in WebVR
===================
posted: 2016-08-08

The web platform is uniquely great for networked copresence. To demonstrate, I
built a multi-user chat prototype that uses peer-to-peer audio and data
connections to establish a virtual audio experience.  Voices are spatialized
based on the position and orientation of each participant (using Web Audio).
Also, you can shrink and grow, which, in addition to changing your avatar's
size, pitch shifts your voice. Large avatars have deep, god-like voices, while
smaller ones start to sound very mousey!

<iframe width="560" height="395" src="//www.youtube.com/embed/FPJDNQJt2DQ" frameborder="0" allowfullscreen></iframe>

Check out the [demo for yourself][demo]. It works on desktop (mouse look and
spacebar triggers movement), on mobile (magic window) and in VR (through the
[WebVR API][webvr], via [the polyfill][polyfill]).


[demo]: https://borismus.github.io/copresence-vr/

<!--more-->

# Better together: copresence is compelling

The best things in life are enjoyed in good company. Virtual experiences are no
exception. My fondest gaming memories were from two decades ago with close
friends huddled around a CRT, whether it was Morris the Moose and Blombo the
Elephant [racing around][ww] the track, or co-strategizing in [Civ][civ]. It
wasn't so much about the games, more about the people, and the experience of
being there together.

Putting a computer on your face greatly increases your odds of having an
isolating experience.  One of the biggest downsides of VR is that social
experiences are much harder to produce. While physically copresent VR is
possible, it presents logistical challenges. And since you are fully immersed in
a virtual world, the physical presence of your friends is nearly irrelevant.
Given the constraints, perhaps the best remedy to loneliness is to provide
networked friends. This can be fun too! [Orcs and Humans][war1] over PBX, anyone?

[ww]: https://3drealms.com/catalog/wacky-wheels_16/
[civ]: https://www.youtube.com/watch?v=hBrYtNTOTyE
[war1]: https://en.wikipedia.org/wiki/Warcraft:_Orcs_%26_Humans

# WebAudio + WebRTC + WebVR = ❤

The web is the ideal platform for building copresent VR experiences. VR
copresence requires low latency connections between peers. It also requires a
real time audio channel, with a much smaller emphasis on remote video, since the
user is wearing a headset and their face is obscured. The powerful Web Audio
API has long been available on all modern browsers, and is well equipped for
processing audio of all sorts: spatialization, effects. WebRTC is widely
available too, with [one unfortunate exception][safari]. And with the exception
of Service Workers and company, if you're on the web, you have connectivity. 

Thanks to some [excellent bug squashing][crbug], it's now possible to pipe
remote WebRTC streams into a Web Audio context. This enables devs to spatialize
and otherwise manipulate the remote stream to their heart's content.
Specifically, the prototype I'm launching today has a few fun audio features:

- Each remote stream is spatialized based on the pose of the peer using the
  `PannerNode` (see [my previous post][spatial] about this for more details).

- Remote streams are analyse for voice activity, using an `AnalyserNode` to
  inspect the frequency content between 300 Hz and 3400 Hz (the typical human
  vocal range), and doing a simple thresholding. This is then used to animate
  the Southpark-style avatar's mouth.

- Changing the size of your avatar also changes how you hear your peer's voice.
  I'm using the [soundbank-pitch-shift][] library to achieve this, courtesy of
  [Chris Wilson][cw] and [Matt McKegg][mm].

[crbug]: http://crbug.com/121673
[spatial]: /spatial-audio-web-vr/
[soundbank-pitch-shift]: https://github.com/mmckegg/soundbank-pitch-shift
[cw]: https://twitter.com/cwilso
[mm]: http://twitter.com/MattMcKegg
[safari]: http://www.apple.com/safari/
[webvr]: https://webvr.info/
[polyfill]: https://github.com/borismus/webvr-polyfill/

# Technical details: in the weeds with WebRTC

Hoping to avoid learning the intricacies of WebRTC, which is a fairly low level
and intimidating API, I started exploring higher level abstractions around it.
The most popular wrapper I found was [peer.js][peer], but unfortunately the
project doesn't seem to be actively maintained, and relies on a special Node.js
WebSocket server which, in my experience, often drops clients.

So I moved to Firebase which, in my implementation, performs the duty of
signaling server, and also maintains a roster of all connected users and their
current state. For each connected user, we store their display name (which
clients can set), and the room ID (if the user is currently in a room).

    {
      username: 'Your Name',
      roomId: 'A Random Room Identifier'
    }

[peer]: http://peerjs.com/

## Bird's eye view of WebRTC

Having moved away from peer.js, I could no longer afford to let the intricacies
of WebRTC be handled by some third party, and had to get into the weeds. It was
especially important to understand how to handle multiple `RTCPeerConnections`
necessary for the case with more than peer-to-peer. Although I found the docs to
be quite obtuse, the core of the WebRTC API is fairly straight forward:

1. The caller (A) gets its local stream and uses the signal server to send an
   "offer" message to the callee (B), which includes information about A's local
   stream.

2. The callee (B) gets A's "offer" and registers A's local stream as its remote
   stream. It then gets its own local stream, and responds A's offer via the
   signal server, sending an "answer" message to the caller (A), which contains
   its own local information.

3. The caller (A) gets B's "answer" and registers B's local stream as its remote
   stream. At this point, both A and B have basic information about one
   another's local and remote streams.

4. At this point, A and B exchange ICE (Interactive Connectivity Establishment)
   Candidates to work out the details of how to establish a peer-to-peer stream.
   Eventually, when both sides are satisfied, we have contact.

Hopefully the above serves as a useful summary. It certainly will be for me, as
I found the existing WebRTC documentation confusing. Many of the samples connect
to themselves, which does not give a great sense of what the protocol between
clients should actually be.

At the ICE stage, invoke more acronyms! STUN and TURN come into play in trickier
network topologies (ie. those involving NAT servers).  Google already provides a
STUN server by default, and I ended up using a [free service][xir] for TURN
server support. Each `RTCPeerConnection` is initialized with the specific STUN
and TURN servers that we use.

[xir]: http://xirsys.com/

# Copresence is essential for VR

Given the inherent isolation of virtual reality, copresence becomes an even more
compelling ingredient than ever before. Copresence is essential for VR, and the
web is a great place to make it happen. [Try it out][demo] with a friend, or
using two of your own devices. Oh, and if you find bugs, please let me know via
[github][gh].

[gh]: https://github.com/borismus/copresence-vr
