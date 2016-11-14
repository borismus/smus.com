VR View 2.0: JavaScript API
===========================
posted: 2016-11-14

[VR View][vrview] was just updated to version 2! This release includes some nice
new features, the main one of which is a JavaScript API. This allows VR Views to
be much more interactive. You can now load new content dynamically, play and
pause videos, and add hotspots that link from one piece of 360 imagery to
another. Here's a simple auto-advancing 360 slideshow showing some of my recent
escapes around Seattle...

[vrview]: https://github.com/googlevr/vrview

<!--more-->

<div id="vrview"></div>
<script src="//storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script>
<script src="index.js"></script>

The [official samples][samples] show more complex and interesting examples.
The [docs][docs] are also updated to reflect VR View's new capabilities.

[samples]: https://storage.googleapis.com/vrview/2.0/examples/index.html
[docs]: https://developers.google.com/vr/concepts/vrview-web

# Other new things

Also added some other features:

- WebVR 1.1 support for compatibility with [Chrome WebVR][webvr] builds.
- Programmatic playback controls and volume setting.
- Support for handling clicks, taps, VR button presses.
- Automatic panning mode for desktop.


[webvr]: https://webvr.info/

# Cardboard camera compatibility

I captured the photos with the very handy [Cardboard Camera][ccapp]. But before
I could embed them into the VR View above, I had to do a conversion step.

VR View expects stereo images to be in ODS format, which is a square JPEG with
the left eye sphere stacked on top of the right eye sphere. Both spheres are
projected onto 2:1 rectangles using equirectangular projection.

The native Cardboard Camera format is different. Cardboard Camera produces an
image of the left eye only. The right JPEG is base64 encoded and embedded in an
XMP header, alongside other [Photo Sphere XMP metadata][xmp]. The images don't
need to be full photospheres, and may be cropped. Stopping a pano capture
mid-way, for example, will create a half-sphere. Also, the north and south poles
of the sphere are never captured, since the sweep is horizontal.

Now that you know more than you wanted about photosphere file formats, you can
forget it all. I've streamlined the conversion process through a web-based
[Cardboard Camera to ODS convertor][ccc].

[ccapp]: https://itunes.apple.com/us/app/cardboard-camera/id1095487294?mt=8
[ccc]: https://storage.googleapis.com/cardboard-camera-converter/index.html
[ods]: https://developers.google.com/vr/jump/rendering-ods-content.pdf
[xmp]: https://developers.google.com/streetview/spherical-metadata

# Future work

I was initially overjoyed by Safari 10's support for inline video texture
playback, which lets us finally play spherical video without [gross
hacks][gross]. Unfortunately, their current video texture rendering performance
is pretty abysmal. I'm getting about 10 FPS on a 2K (2048 x 2048) spherical
video in Cardboard mode, while Chrome, even on older Android hardware performs
substantially better.

[gross]: http://stackoverflow.com/questions/29621199/three-js-video-textures-in-ios-play-back-in-a-separately-launched-player-ideas
