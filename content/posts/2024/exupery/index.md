Project Exupery
===
posted: Jan 16, 2024

Exupery was a voice-powered sketching robot. I named it after Antoine de Saint-Exupéry because of the conversation in his most famous book where the Little Prince asks the pilot to draw him a picture of a sheep. You, too, can now ask Exupery to sketch pictures of things, and it will try to oblige. It replicates sketches drawn by real people playing the game [Quick, Draw!](https://quickdraw.withgoogle.com/data/), and adding a bit of flourish. Try the [online demo][demo], and read on to find out more.

<!--more-->

The hardware version of Exupery was built as a showpiece for the [AIY Projects Voice Kit](https://aiyprojects.withgoogle.com/voice/) and presented at Maker Faire back in 2017 (see [photos](https://photos.google.com/share/AF1QipMUYERaAJ6SFUsLDrN1mRSIQ21Ci0AyblkR779ggGk2Z-7-3PM6VmuLeiljQWyXXw/photo/AF1QipOMRFAQyY0T5pmExxFRY_Sm7RxLLI_PyMBKALeG?key=dnIwaWpOSkswMEFJdEdJLVZxSEZQNkNGelhRUmd3)). To show it off at Maker Faire, we used an [AxiDraw V3](https://shop.evilmadscientist.com/productsmenu/846), a maker-friendly and surprisingly precise pen plotter. Here's an example of a sketch being produced using the hardware. Be sure to unmute this video to hear the linear actuator servomotor's song!

<video src="exupery-bot.mp4" controls loop></video>

Today, given the slim chance that you have such a device, Exupery can also just [run on the web][demo], with a virtual pen drawing on a virtual canvas. To get Exupery sketching, say something like "draw me a sheep". If you aren't satisfied with your sheep, try "do it again". Once you're ready to move on, ask it to "draw something else" for a random sketch.

Exupery has a few fun features going above and beyond the call of duty. Great artists sign their work, so Exupery labels the thing it sketches after drawing it. Implementing this was a fun excuse to dig into [vector fonts](https://en.wikipedia.org/wiki/Hershey_fonts). If you don't keep it occupied with a query quickly enough, Exupery gets bored and starts drawing little doodles all over the canvas. The entire user interface for Exupery is sketched using icons from *Quick, Draw!*. This includes the virtual pencil it uses to draw, as well as the microphone indicating that it's time to speak.

Exupery was a fun project hearkening back to a simpler time. Today I'm pleased to revive it and release it into the world. So try it out [live][demo], grab the code on github and as always, I'd love to hear your thoughts. À bientôt!

[demo]: https://borismus.github.io/exupery