Ray Input: default WebVR interaction
====================================
posted: 2016-10-10

What would the web look like if there were no scrollbars, no mouse cursors, and no
clickable links? That's what VR is like today. On one hand, developers are
completely free to experiment however they want. This is great, and leads to a
lot of crazy interesting experiments. On the other hand, there is no consistency
between VR experiences, and it takes a lot of developer effort to just get a
basic interaction framework up and running. On the other hand... nevermind, I'm
out of hands!

Ray Input provides reasonable defaults for interacting with 3D scenes in and
outside of VR:

<iframe width="600" height="340" src="https://www.youtube.com/embed/gjj2XQYC998" frameborder="0" allowfullscreen></iframe>

<!--more-->

## What does Ray Input actually do?

Ray Input aims to provide reasonable interaction defaults, relying on the modality
that is most natural for each set of inputs.

- On desktop, look around by dragging, interact by clicking.
- On mobile, look around via magic window or touch pan, interact by tapping.
- In VR, the interaction depends on your setup:
    - If there is no controller (eg. Cardboard), use a gaze based reticle to
      interact with objects.
    - If there is a 3DOF controller (eg. Daydream), apply an arm model and
      interact with objects using a ray emanating from the controller.
    - If there is a 6DOF controller, interact with objects using the ray.


## API

The API is documented on the [github page][gh], and I also provide a [simple
example that uses Ray Input][example] to pick items from a 2D menu.

[gh]: https://github.com/borismus/ray-input
[example]: https://borismus.github.io/ray-input


## Arm models for orientation-only controllers

The Daydream View controller is not position tracked. The only pose information
it provides is the orientation, which is in the same coordinate system as the
head. The question, is where to position such controllers. Having it
emanate from the stomach or head, like the arm of an exotic god, would be very
unnatural. So we need to be slightly more clever. Enter the arm model, which,
given a controller orientation, spits out a plausible controller position.
Obviously the position it provides is only a reasonable guess, and may not
correspond to the controller's actual position. But it sure is a lot better
than nothing.

Most of this code is lifted from a native implementation of Daydream arm model.
To debug it, I built a very rough "simulator", which lets you tweak the
orientation of a virtual head and hand, spit it into the model, and visualize
the result:

[![Daydream arm model simulator][sim-image]][sim-link]

As always, very open to feedback, bug reports, and pull requests via
[github][gh].

[sim-image]: arm-model.png
[sim-link]: https://borismus.github.io/ray-input/daydream-simulator.html
