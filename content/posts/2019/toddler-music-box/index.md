Toddler’s First Music Box
===
posted: 2019-09-25

Toddler toys are stacked with blinking lights, loud attention seeking noises, and earworm songs. They are often made of plastic and sadly, feel cheap. My daughter deserves better! 

So I set out to design her a perfect music box: an old concept infused with modern technology, without subjecting her to the hazards of screens. I wanted the box to play her favorite songs, be durable and portable, have long battery life, all while being a beautiful object. This is the result:

![My daughter’s music box][image-1]

<!--more-->

# Building a portable music player

My first instinct was to try to build this using a Raspberry Pi,  but turns out running Linux has a few major downsides:

1. Eeking out reasonable battery life is really difficult.
2. Boot times are very slow, in the 10s of seconds.

An alternative to running embedded Linux is programming a prototyping board directly. So I dusted off an old Arduino Uno and discovered the [Adafruit Wave Shield][1], which does exactly what I needed. It reads audio from an SD card, and plays it back through a speaker. When the Wave Shield kit arrived, I was somewhat shocked to see a bare PCB and all of the components in a little baggie. 

Luckily, there’s an incredible Makerspace at work, so I dropped by after my actual work was done, picked up a soldering iron, and got to work. I’ve soldered before, but not much since my favorite class of all time: Making Things Interact at CMU, taught by Mark Gross. Initially daunting, I knocked it out in no time thanks to some really detailed instructions. The results were amazing. Fuse a bunch of metal and silicon together, attach a battery and 1.5 seconds later (that’s the boot time), a song is playing through the speaker! Any sufficiently advanced technology is indistinguishable from magic.

![Soldering the Adafruit Wave Hat][image-2]

# Randomly playing songs

The [sample software][2] for the Wave Shield plays all of the .wav files on the SD card in lexical order. I wanted something a bit more delightful than playing the same playlist in the same order. So I wrote a program that plays a random song instead. Easy peasy, here we go.
  
I enumerated all of the wavs on the card and stored all of their filenames in a `char**` dynamically allocated on the heap. Oops! There’s barely enough space there to allocate a dozen file names, and I’d selected 60 songs. It appears that years of front-end UI engineering have dulled my low level embedded software development instincts. After fighting the C++ compiler about static 2D array allocation, I took a simpler and more memory efficient approach, first counting all of the songs, then picking a random song number to play. 

Even generating random numbers is non-trivial, since there’s no reliable absolute clock to use as a seed - the device cold-starts every time. Instead, I’m using a technique which reads in analog inputs for a pseudo random input. This may or may not be a good idea, but seems to provide some variation. Anyway, the [Arduino sketch][3] is in the GitHub repo.

# Prototyping in plastic

One of the great perks of my work’s Makerspace is access to all sorts of awesome prototype manufacturing equipment, including a [Carvey][4]. So I went to Rockler and bought a 5”x5” maple block, thinking I’d hollow it out into a box with the CNC machine. Not so fast! It’d take a mere 15 hours of drilling. 

Rather than wait, I opted for a faster route: prototyping with 3D printing. So I began designing music boxes on paper, then in OnShape, then printing them using the [Prusa][5] printers. Seeing a design evolve from figment of imagination to tangible physical object is incredibly satisfying. However, once that satisfaction wore off, I can honestly say that the results were functional, but not at all aesthetically pleasing:

![Early 3D printed plastic box][image-3]

# That old time wooden aesthetic

So I went for a different strategy: buy a nice off-the-shelf box to house everything and just design its insides. This way, the 3D print is mostly hidden, and can be capped off with a laser cut or CNC milled wooden lid. I can learn about CNC joinery later.

I found a [nice hexagonal box][6] on Amazon and bought two, discarding both lids. The bottom half of the clam would house the Arduino, Shield and battery, while the top would house the speaker. They’d be connected with a speaker wire and joined by wood hinges.

Designing the innards was a delight. [OnShape’s][7] UI is excellent and responsive. The constraint system makes a lot of sense, sketching on arbitrary surfaces and then extruding them is amazingly powerful. The Assembly View and Edit-in-Context feature made aligning elements between upper and lower clamshells a cinch. This included the speaker wire port and holes for the microswitch. I experimented with a variety of designs for fastening lid to container. Initially, I opted for ambitious [embedded nut][8] designs, but ultimately went with a self-tapping (into plastic) approach using [flat head screws][9]. For fastening electronics to the plastic, I printed offsets and used nuts.

After a few iterations of fastener tweaking, design adjustments, and measurement corrections, I had a top insert for housing the speaker, and a speaker grille to protect the speaker’s membrane, a bottom insert for housing the electronic core, and a cover to hide them. The [STL files][10] are all in the GitHub repo. Here’s the result:

![Finished wooden musical box][image-4]

If you’re curious, the [OnShape project is public][11], you just need to make an OnShape account.

# Toddler user testing

Once everything was in place, it was time for toddler testing! Luckily I have a very cute and curious user on retainer for the next 18 years. I asked her to open the box, and when she did, she began wiggling along to Cat Stevens’ “la-la-la”s. I’ve since corrected the poor initial music choice – the music box now plays a healthy milieu of classics from Soviet cartoons.

A few other things became immediately clear as a result of user testing:

1. My daughter was completely fascinated by the small speaker wire running between the top and bottom lid. She kept pulling at it, and eventually the wire came out enough to prevent the lid from closing fully.
2. Predictably, she loves abusing the box in creative ways. At one point she was dancing on top of the box. Then she used it as a step stool to climb onto the couch. Later, she smashed the box so hard the microswitch toggled and restarted the music.

In the current version, I’ve concealed the speaker wire in nylon casing and affixed it on both ends using zipties. This solves the first issue where the wire would prevent the box from closing. I’ve also padded the battery pack so that the contents of the box rattles less, hopefully making it less satisfying to shake and smash.

I’m not sure how much battery life I’ll get from this construction, but it’s been running off the same triple AAA pack for about a week of sporadic play with maybe a couple of hours of being actually on. The fact that the device is fully off when the lid is closed (and not secretly draining batteries) makes me happy.

Finally, massive thanks to Matthew Wilson and Jon Ward for their sage advice and friendly encouragement with this project. How might we imbue other beautiful everyday objects with magical abilities?

Until next time.

[1]:	https://www.adafruit.com/product/94
[2]:	https://learn.adafruit.com/adafruit-wave-shield-audio-shield-for-arduino/play6-hc
[3]:	https://github.com/borismus/toddler-music-box
[4]:	https://www.inventables.com/technologies/carvey
[5]:	https://www.prusa3d.com/
[6]:	https://www.amazon.com/gp/product/B071WFSRBD/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&psc=1
[7]:	https://www.onshape.com
[8]:	https://markforged.com/blog/embedding-nuts-3d-printing/
[9]:	https://www.homedepot.com/b/Hardware-Fasteners-Screws/Internal-Hex/Flat/N-5yc1vZc2b0Z1z0sfp4Z1z0sgtn
[10]:	https://github.com/borismus/toddler-music-box
[11]:	https://cad.onshape.com/documents/786c5f0b153cdd48f9b0f2f8/w/b4275650dc7aac134e30275f/e/4a850077e5ce208659a14aab

[image-1]:	final-box.jpg
[image-2]:	solder.jpg
[image-3]:	plastic-box.jpg
[image-4]:	final-design.jpg