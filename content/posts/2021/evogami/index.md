Evogami: evolution meets origami
===
posted: April 5, 2021

In my latest side project, I borrow a couple of ideas from evolution and apply
them to origami. Starting from a blank square apply a random crease, then again,
and again, and again. The result is completely new, never before seen origami
model! To make the process less random, pick your favorite next step from a set
of possibilities. [Try it out][evolver] and see what you can come up with.

<style>
.center-video {
  display: flex;
  justify-content: center;
}
video {
  width: 50%;
}
</style>

<a class="center-video" href="https://borismus.github.io/evogami/evolve/">
  <video src="evolve.mp4" muted autoplay loop></video>
</a>

Here are a couple of resulting folds, presented in the viewer. [See it live][viewer].

<a class="center-video" href="https://borismus.github.io/evogami/view/?key=-MUk_i19pvn6aPBP1M-Y">
  <video src="view.mp4" muted autoplay loop></video>
</a>

I'm looking forward to folding some of the best Evogamis out of real paper! 

<!--more-->


# Constraints breed creativity

Modern origami practitioners discourage the use of cuts, glue, or markings on
the paper. This leads to the abstract aesthetic of simple origami models.

Evogami is even more constrained than normal origami. We only allow one type of
fold, the humble valley fold. No pleats, rabbit ears, reverse folds, crimps,
squashes, sinks, or petal folds. Furthermore, this fold is done across a line,
which means that multiple disjoint segments of the current shape will be folded.
Constraints breed creativity!

# Evogami evolution details

The [evolver][evolver] starts with a blank sheet of paper. Next, we
alternate a sequence of **mutation** and **selection** steps. Mutation is done
randomly by the computer, and selection is done by a human, based on their
taste. It goes something like this:

0. Begin with a blank sheet of paper.
1. **Mutate**: make 12 random creases.
2. **Select**: the person picks an interesting direction of those presented.
3. **Mutate**: the computer makes 11 new random creases on top of the selected
   direction.
4. **Select**: the person selects the next step, or they can decide that they are
   satisfied and save this design.


# Unexpected power use in the browser

The evolver is minimal but powerful, especially in conjunction with a few
built-in browser primitives. Some judo moves:

- Tap again: unsatisfied with your set of next evogami choices? Just tap the
  same design again to re-generate the grid.
- Back button: return to the previous step in your design. Easily undo this by
  tapping the browser's forward button.
- Reload button: the page regenerates a set of 12 new random evogami with the
  same number of folds as the current generation.

# Inspiration and thanks

I recently read [Why Greatness Cannot Be Planned][kos], which uses
[Picbreeder][picbreeder] to make many of its profound arguments. Picbreeder is
an evolution-inspired image generator that uses a complex gene-like encoding
called [NEAT][neat]. I wanted to play around with open-endedness too, but found
the mapping from the NEAT DNA to images to be unintuitive. In a sense, Evogami
is a simpler version of Picbreeder, with the great advantage that the resulting
output can be folded using real paper. 

This project would have taken far longer without the impressive [Rabbit
Ear][rabbit-ear], a powerful JavaScript library for doing origami design on the
web. Big thanks to [Robby, the maintainer][robby-kraft]!

I'm fascinated by the interplay between ancient art and modern technology. Go
players have had their minds blown by unexpected and insightful moves produced
by AlphaGo. Computational approaches applied to origami created new art
pioneered by folks like [Robert J. Lang][lang]. 

Can this approach yield original origami models that inspire the paper folding
world? 🗅

[picbreeder]: http://picbreeder.org
[kos]: /books/why-greatness-cannot-be-planned
[evolver]: https://borismus.github.io/evogami/evolve/
[viewer]: https://borismus.github.io/evogami/view/?key=-MUk_i19pvn6aPBP1M-Y
[lang]: https://langorigami.com/
[neat]: http://www.cs.ucf.edu/~kstanley/neat.html
[rabbit-ear]: https://rabbitear.org/
[robby-kraft]: https://robbykraft.com/
