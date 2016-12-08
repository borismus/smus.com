Building 3D augmented reality markers
=====================================
posted: 2016-05-15

# Outline 

- Motivating the problem: Daqri Elements 4D

Augmented reality (AR) markers are typically ugly black and white 2D printouts
that serve as placeholders for 3D objects when viewed through an AR display.
Immediately, we see a mismatch: a 2D marker represents what is actually supposed
to be a 3D object. Suppose you want to move an virtual horse that is projected
onto such a marker. Reaching for it, your hand would move through thin air.
There is no 3D object to interact with. Instead, you have to find the 2D paper
and move it.

Real world objects have incredible tactile richness. As you pick it up, you
immediately feel its weight, texture, rigidity, temperature, etc. Depending on
the object, you can also manipulate it in interesting ways too. Even a simple 3D
object like a die can be rolled or placed on any side. There are some examples
of 3D AR markers. Daqri Elements 4D is a nice one. In their application, each
side of a cubic marker represents an element. Looking at the marker in AR, you
can see the element rendered inside the marker. Bringing two cubes together
causes the elements to react, and the resulting compound is rendered inside each
marker. 

This tactile learning is really powerful. You manipulate the cubes: deciding
which elements should react by picking the faces and bringing the cubes
together. That's it! No on-screen manipulation at all. It's a very satisfying
experience even without access to AR glasses.


- Problems with their cross approach
  - Problem: cutting is annoying
  - Problem: gluing is annoying

As far as I can tell, Elements 4D started as a kickstarter, where they were
selling wooden cubes as a kit. At this point, I don't think these are available
anymore, and they have a new approach. You print, cut and glue their AR
markers together.

TODO: Why is this annoying?

- Approach 1: single folding
  - Problem: can't print full bleed
  - Problem: the actual fold is challenging


- Approach 2: legos
- Approach 3: magnetic sheets
