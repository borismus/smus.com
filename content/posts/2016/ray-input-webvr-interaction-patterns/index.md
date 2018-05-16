Ray Input: WebVR interaction patterns
=====================================
posted: 2016-10-11

What would the web look like if there were no scrollbars, no mouse cursors, and
no clickable links? That's what VR is like today. On one hand, this is great!
Developers are completely free to build however they want, leading to a lot of
interesting experiments. On the other hand, it takes a lot of engineering effort
to just get basic interactions up and running. Furthermore, it lacks
consistency. The alluring promise of being able to navigate from world to world
may be diluted by the frustration of having to rediscover new interaction
paradigms every time.

While sane interaction defaults are badly needed, baking them into the platform
violates principles of the [Extensible Web][eweb]. With that in mind, I
implemented a basic Ray-based interaction library called [RayInput][gh], which
provides reasonable defaults for interacting with 3D objects in and outside of
VR. Here's what the interaction looks like on various platforms:

<iframe width="600" height="340" src="https://www.youtube.com/embed/gjj2XQYC998" frameborder="0" allowfullscreen></iframe>

[eweb]: https://github.com/extensibleweb/manifesto

<!--more-->

## What does Ray Input actually do?

Ray Input aims to provide reasonable interaction defaults, relying on the
hardware available for each platform:

- On desktop, look around by dragging, interact by clicking.
- On mobile, look around via magic window or touch pan, interact by tapping.
- In VR, interaction depends on a reticle or on a ray.
    - If there is no controller (eg. Cardboard), use a gaze based reticle to
      interact with objects.
    - If there is a 3DOF controller (eg. Daydream), apply an arm model and
      interact with objects using a ray emanating from the controller.
    - If there is a 6DOF controller, interact with objects using the ray.

Of course, you may want to customize your interactions on a per-platform basis.
For example, if you are developing an application primarily for the Vive, you
may want to take advantage of the specific richness that a Vive controller
provides. Ray Input is not meant to be prescriptive, merely to provide
reasonable defaults.

## API

The library's API is documented on the [github page][gh], and I also provide a
[simple example that uses Ray Input][example] to pick items from a 2D menu.

[gh]: https://github.com/borismus/ray-input
[example]: https://borismus.github.io/ray-input


## Arm models for orientation-only controllers

If a VR controller is present, Ray Input defaults to using a ray-based input
method, which behaves much like a laser pointer.

The Daydream View controller is not position tracked. The only pose information
it provides is the orientation, which is in the same coordinate system as the
head. Where should we position such orientation-only (3DOF) controllers? In
particular, where should the ray come from? Having it emanate from the stomach
or head, like the arm of an exotic god, would be very unnatural. So we need to
be slightly more clever.

Enter the arm model, which, given a controller orientation, spits out a
plausible controller position. Obviously the position it provides is only a
reasonable guess, and may not correspond to the controller's actual position.
But it sure is a lot better than nothing. This sort of problem is common in
graphics and robotics, and can be solved with inverse kinematics.

In this case, we follow a simpler approach. Most of the [code to do
this][arm-code] is lifted from a native implementation of Daydream arm model.
To debug it, I built a very rough simulator, which lets you specify the
orientation of a virtual head and hand, run it through the model, and visualize
the resulting pose of the controller:

[![Daydream arm model simulator][sim-image]][sim-link]

As always, very open to feedback, bug reports, and pull requests via
[github][gh].

[sim-image]: arm-model.png
[sim-link]: https://borismus.github.io/ray-input/daydream-simulator.html
[arm-code]: https://github.com/borismus/ray-input/blob/master/src/orientation-arm-model.js
