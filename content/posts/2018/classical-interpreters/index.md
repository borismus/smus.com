Comparing classical music interpretations
===
posted: September 20, 2018

I built an audio player to easily compare multiple interpretations of the same
piece. Here's an interactive [demo][], and a video to give you a sense of how it
works:

<video src="two-goulds.mp4" style="display: block; margin: 0 auto;" controls />

<!--more-->

## What does it mean to interpret classical music?

At first glance, sheet music is prescriptive: the composer has provided all of
the notes, the dynamics (forte, piano), tempo (lento, presto) and changes in
tempo (de/accelerando).

In practice, however, the interpreter has a lot of leeway. In some extreme
cases, such as the [Cadenza][] in solo concertos, the performer gets to
improvize a melody based on a chord progression. Some pieces include
ornamentation (eg. trills, etc) which are largely left up to the performer to
interpret.

That said, cadenzas and ornaments are somewhat rare. In general, every piece is
under-specified by the composer. This gives the performer a lot of leeway to
express themselves through the performance, selecting tempo, phrasing,
articulation and tone.

## Example: Bach's Goldberg Variations

The Goldberg Variations were composed by Johann Sebastian Bach in 1741, and then
popularized by Glenn Gould in his debut album in 1955, transforming a work once
considered esoteric into one of the most iconic piano recordings.

In 1981, a year before his death, Gould recorded the pieces again. After a long
period of reclusion, he was able to revisit the variations and produce a
completely different take. In an interview, he said:

> ...since I stopped playing concerts, about 20 years, having not played it in
all that time, maybe I wasn't savaged by any over-exposure to it...

## Compare Gould's 1955 and 1981 recordings

Both the [1955][] and [1981][] recordings are available on YouTube, of course.
I found that listening to two distinct performances is not the same as having one
integrated player. So I built one: a player specifically for comparing multiple
interpretations of the same piece.

Here is a demo that lets you compare the first variation from the Goldberg
Variations. [Try it out here][demo]. You can use your keyboard to skip between
interpretations (↑, ↓) just as easily as you can seek within a track (←, →).
The mouse works as well. Note that I haven't tested at all on mobile. Sorry,
it's just a prototype and I'm on paternity leave 😇


## I also tried it on Mozart's Requiem

I am a huge fan of Mozart's Requiem, and once came across an [online thread
debating][requiem-reddit] which conductor's performance was the best. I soon
found myself listening to a dozen or so different versions of the same piece.
When I was a younger music appreciator, I would often wonder what the point of
a conductor *really* was. I no longer have this question.

Just to give you a taste for how different the interpretations are, here's an
example of three conductors performing the Introitus, the first movement in the
Requiem. [Check it out here][demo-requiem], but be patient as it may take a
minute to load and decode the audio. Böhm's brooding tempo and lumbering chorus
(ugh) contrasts especially well with Levin's crisp and minimalist take.

<video src="three-requiems.mp4" style="display: block; margin: 0 auto;" controls />

## Technical details

For this prototype, I focused on creating a reasonable UI to play back and
interact with multiple time-aligned performances of the same piece. An [index
file][index-file] specifies metadata for each track, most importantly the URL to
the label file and the URL to the audio file. Each [label file][label-file] is a
text file with lines in the format `START_TIME  END_TIME BAR_NUMBER`. 

To create the label files, I manually annotated the waveform. Even with
Audacity's extremely useful [label track][audacity-label] feature, it was a lot
of manual work to go through the score bar by bar, and find each bar's time
range in each performance's waveform. This gives start and end times for each
bar, but does not specify timing within the bar. For times that don't fall
exactly on bar lines, I linearly interpolate between the bar boundaries, which
works reasonably well, but is sometimes a bit off. More granular timing
references would address this better, but that currently means doing more manual
labor. No thanks!


### Science, help automate this

An obvious question is how to automate the labor of synchronizing a recording to
a score. In general, I think this is an unsolved problem, especially for complex
tracks containing hundreds of instruments and varying levels of background
noise.

An promising approach that could work for solo piano music might be to use
something like [Onsets and Frames][onsets-frames] to extract piano rolls and
then apply something like a Dynamic Time Warp (DTW) in piano roll space.  A more
general approach might be to synthesize each bar as a waveform (from MIDI), and
then align the bars using something like DTW based on a Constant-Q transform
(CQT).

My brief and ill-guided attempts to [do something like this][mir] on real-world
examples didn't yield good enough results. Any ML/DSP experts want to take this
on?

[audacity-label]: https://manual.audacityteam.org/man/label_tracks.html
[demo]: https://borismus.github.io/classical-interpreter/
[1955]: https://youtu.be/Cwas_7H5KUs?t=1m55s
[1981]: https://www.youtube.com/watch?v=zpsfhTxo5yw&t=173s
[Cadenza]: https://en.wikipedia.org/wiki/Cadenza
[demo-requiem]: https://borismus.github.io/classical-interpreter/?json=https://splendid-society.surge.sh/index.json
[requiem-reddit]: https://www.reddit.com/r/classicalmusic/comments/1xpqyh/what_is_the_best_recorded_performance_of_mozarts/
[mir]: https://musicinformationretrieval.com/dtw_example.html
[onsets-frames]: https://magenta.tensorflow.org/onsets-frames
[index-file]: https://borismus.github.io/classical-interpreter/goldberg/index.json
[label-file]: https://borismus.github.io/classical-interpreter/goldberg/gould-1955.txt
