Telejam: Interplanetary Musical Ensembles
===
posted: Feb 8, 2024

Telejam is a web application for musicians to collaborate online in almost real time. Existing solutions like Sonulus, JamKazam and others attempt to provide live, in-sync musical collaboration over the internet. This sometimes works, especially if specialized network hardware is involved and if your collaborators are nearby. The just noticeable delay for music performance is about 30 milliseconds, and players positioned at opposite ends of the Earth will experience at least a 70-millisecond delay.

<!--more-->

![Illustration of collaborative music across the universe.](telejam-illustration.jpg)

This theoretical bound is dictated by a fundamental speed limit of the universe: the speed of light. Jamming with a moon dweller would bring that theoretical minimum latency up to 1.3 seconds and you can forget about jamming with your Martian friends, where the delay is hundreds of seconds depending on orbital alignments. And remember that are just idealized thresholds; additional delays from network protocols are inevitable.

Rather than trying to beat the speed of light, we embrace the space-time continuum and other fundamental laws of the universe. Telejam lets musicians layer recordings into an instantly produced final mix regardless of the physical distance (and therefore time) between musicians. Musicians are arranged in a sequential chain where each participant contributes their "track" to the final mix:

![Telejam Daisy Chain](telejam-daisy-chain.svg)

The leader is the participant who determines the order of players, balances their respective gain, starts and stops the recording, switches between sequential and synchronized modes.

The great thing about Telejam is that musicians experience ZERO latency. Because of the unidirectional chain, however, they only hear musicians to their left in the chain. They do not hear music from musicians chained on their right. It's lonely being first in the chain, and it's helpful to have a backing track or a drummer in the first slot. Conversely, the last musician hears all the others. The final mix is available on demand as soon as the performance ends, and is a good opportunity for those early in the chain to hear the whole ensemble. At this point, the leader can reorder the chain to give others a turn on the coveted last position.

Telejam is not going to replace in-person jam sessions, but it's the closest we're going to get to jamming with a man on the moon.

My contribution to this prototype was most of the implementation including the WebRTC + Web Audio + Firebase implementation of the daisy chain as well as the rudimentary UI. It's been a pleasure to see Mark use Telejam in practice with his many musical collaborators. To hear some of those recordings and for more information about the project, check out <https://telejam.net>.