Interactive Touch Laptop Experiments
====================================
posted: 2013-02-21


Largely because of the plummeting price and thickness of touch screens,
these devices are increasingly ubiquitous. One of the latest trends is
touch screen laptops, spearheaded by [Surface][surface] devices and the
recently announced [Chromebook Pixel][pixel]. In this post I'll dive into
some experiements around this new form factor. The main goal is to try
to convince myself that this form factor makes sense for reasons other
than economic ones.

In exploring the interaction design angle of these new devices, I came
across a couple of what I think are a couple of interesting ideas that
I'd like to share with you: **responsive input** and **simultaneous
interactions** using both mouse/trackpad and touchscreen. I wrote some
demos that illustrate these ideas. *A touchscreen laptop is required for
these demos to work properly*.

- [Auto scaling in response to input type][responsive].
- [Mouse-to-map and touch-to-mark][map].
- [Multimodal transform demo][transform].

[surface]: http://www.microsoft.com/Surface/en-US
[pixel]: http://chrome.blogspot.com/2013/02/the-chromebook-pixel-for-whats-next.html

<!--more-->

Because you probably don't have a touch screen laptop, I recorded a
rough video showing some of these interactions:

<iframe width="640" height="360" src="http://www.youtube.com/embed/rcE2z9tudGw" frameborder="0" allowfullscreen></iframe>

Hopefully this gives you a better sense of what I mean by responsive
input and simultaneous touch and mouse interactions.

## Responsive input

The touch laptop class of device has a two main interaction modes:

1. As a regular laptop with trackpad (or external mouse) and keyboard.
2. As a touch tablet with a keyboard.

These two interaction modes differ fundamentally in many ways. The
following are some examples of these differences:

- Touch has no hover state.
- Touch is less precise than mouse and requires bigger targets.
- Touch requires that you are closer to the screen.

![Chrome Pixel](touch-laptop.png)

Ideally, you want to provide optimal experiences for both cases. For the
mouse case, this means taking advantage of hover states and a finer
pointer. For the touch case, this means ensuring that touch targets are
big enough to be tapped, not relying on hover at all.

So I explored a user interface concept that adapts touch laptop
interfaces to the user's current input mode. The tricky bit is detecting
the user's current input mode. Several adaptation options are possible:

1. Immediately transform to the mouse-style UI as soon as the input mode
   changes (simplest, but can cause transitions to fire too rapidly
   between the two modes, which may be jarring).
2. Transform only after some period of not using the other input mode
   (eg. go to touch mode only if the user is actively using touch, and
   not touching the mouse at all).
3. Transform based on some external criteria, like whether or not the
   screen is docked to a mouse, or based on input from sensors other
   than mouse/touchscreen.

The first approach is problematic in that your first touch transforms
the page. If this transformation causes your target to move away from
it's initial position, you will miss it entirely. This can be mitigated
by having intelligent resizing which does not affect anything directly
under the touch point, but may result in a lopsidedly zoomed interface.

The second approach is problematic since the mode switching will happen
automatically after some period of inactivity, which may be jarring. The
last approach is either obvious (eg. mouse removed), or an area of
research (eg. predicting when the user will touch based on camera).

I wrote a [demo of auto scaling in response to input type][responsive].
If you use the mouse, click targets will decrease in size. If you use
your finger, touch targets increase in size. (Of course, this will only
work on a touchscreen laptop).

[responsive]: http://borismus.github.com/touch-laptop-experiments/responsive

## Simultaneous touchscreen + mouse/trackpad interactions

In the above section, I described an automatic way to switch between
touch and mouse mode However, there is a middle ground between the two:
multimodal interactions that involve both touchscreen and
mouse/trackpad. Simultaneous bimodal interaction is already common. For
example, using mouse and keyboard simultaneously makes a very efficient
interface for FPS games, with the movement via the WASD keys, and
mouse-look.

One experiment involves using the mouse or trackpad as a navigation
device and using the touch screen as a way to input positional data.
This is illustrated through Google maps. You pan and zoom the map using
mouse events, and place markers on the map using the touch screen. Try
out this demonstration of [mouse-to-map and touch-to-mark][map] (again,
this requires a touchscreen laptop).

Another experiment involves manipulating geometric objects on the
screen. The idea here was to use the touch screen to select objects, and
use the trackpad/mouse as way of manipulating the selected object. In
this demo, you can manipulate the object in a number of ways:

1. Move it by simply dragging it around on the screen with touch.
2. Rotate by selecting the object on the touchscreen, and then
   performing a mousemove (either by moving a mouse or dragging one
   finger on a trackpad). The rotation happens around the point where
   you touched the object, which acts as a fulcrum. 
3. Scale it in the same fashion as rotation (selecting object and
   transformation origin with the touchscreen), except with a two-finger
   drag on the trackpad, or using the mousewheel if a mouse is attached.

With no selection, the canvas itself can be zoomed and panned with the
mouse/trackpad directly. Try out this [multimodal transform
demo][transform] (requires touchscreen laptop).

[map]: http://borismus.github.com/touch-laptop-experiments/map
[transform]: http://borismus.github.com/touch-laptop-experiments/transform

## Missing pieces

Like any brave new world, the one of multimodal input has its own set of
challenges.

It's currently impossible to distinguish a touch laptop from any other
touch screen. Notably, this means that you should never assume that
touch support implies no mouse support. In practice, make sure that you
always bind to mouse events. If you also have touch event handlers, just
use `event.preventDefault()` there to ensure that you aren't handling
one event in multiple handlers. If you're interested in this, follow the
discussion at <http://crbug.com/174553>.

As a generalization of the above, there is currently no way to determine
which kinds of input are available in the browser. A fully fledged Input
Availability API might seem like overkill, but there are already some
cases beyond touch laptops that are relevant. For example, detecting the
presence of a physical keyboard would be very useful. Further, detecting
hardware features like an attached camera and microphone could fall into
the same bucket rather than relying on exception handling from APIs like
`getUserMedia`. Lastly, having such an API would allow websites to react
dynamically to changes in input (eg. a tablet gets docked to a physical
keyboard, or a mouse is attached).

The final missing piece is that dealing with two different event models
(mouse and touch) is definitely clunky. I have already [written
extensively about pointer events][pointer-post] and a [pointer event
polyfill][pointer.js]. In this particular case, pointer events would be
great, because although they provide a consolidated model for input,
it's very easy and natural to distinguish between the two modalities.

These experiments are all available [on github][gh]. 

## Your turn!

Do you have thoughts or demos around new types of interactions using
touch laptops? Please share them below.

[pointer-post]: http://smus.com/mouse-touch-pointer/
[pointer.js]: https://github.com/borismus/pointer.js
[gh]: https://github.com/borismus/touch-laptop-experiments
