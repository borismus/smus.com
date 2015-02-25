Web Sensor API: Raw and Uncut
=============================
posted: 2014-11-13

Sensors found in smartphones define the mobile experience. GPS and the
magnetometer enable the fluid experience of maps; motion sensing enables
activity recognition and games, and of course the camera and microphone
allow whole categories of rich media applications. Beyond these now
obvious examples, sensors can also enable clever inventions, such as
[Cycloramic][cyc], which used the vibrator motor in iPhones (4 and 5) to
rotate the phone and take a panorama, [pushup counters][pushup] which
use the proximity sensor to count repetitions, and [Send Me To
Heaven][smth], which uses the accelerometer to determine flight time of
a phone thrown vertically as high as possible. I've had some experience
using and abusing sensors too, most recently for the [Cardboard magnet
button][cardboard-magnet].

<video src="web_sensor_api.webm" autoplay muted loop controls style="height: auto; width: 100%;"></video>


However, over the last couple of years, I've had to step away from the
web as a development platform, in part because of the poor state of
sensor APIs.  In this post, I will describe some of the problems, take a
look at sensor APIs on iOS and Android, and suggest a solution in the
spirit of the [extensible web manifesto][ewm].

[cyc]: http://www.cycloramic.com/
[pushup]: https://play.google.com/store/apps/details?id=com.runtastic.android.pushup.pro
[cardboard-magnet]: http://smus.com/talk/2014/io14/
[smth]: https://play.google.com/store/apps/details?id=com.carrotpop.www.smth
[ewm]: https://extensiblewebmanifesto.org/

<!--more-->

## Existing sensor APIs are underspecified

One of the most popular sensor APIs on the web is the [DeviceMotion event
API][dme], which is basically always just an opaque abstraction around the
accelerometer. The web, as always, tries to solve the problem in the
most general way possible:

> This specification provides several new DOM events for obtaining
> information about the physical orientation and movement of the hosting
> device. The information provided by the events is not raw sensor data,
> but rather high-level data which is agnostic to the underlying source
> of information. Common sources of information include gyroscopes,
> compasses and accelerometers.

This could be fine in theory, except the specs end up being so vague in
their attempt to please everybody, that they under-specify the behavior
of events such as `DeviceOrientation`. Throw in some rogue implementers,
and you end up with huge discrepancies in browsers, as [Pete found back
in 2011][pete]:

> For most browsers, alpha returns the compass heading, so when the
> device is pointed north, alpha is zero. With Mobile Safari, alpha is
> based on the direction the device was pointing when device orientation
> was first requested. The compass heading is available in the
> webkitCompassHeading parameter.

A useful sensor abstraction would be to build a compass on top of the
magnetometer (and maybe gyro) sensors, and then expose that as a high
level Compass API. Unfortunately many web sensor APIs give us a
mid-level of abstraction. They don't map reliably to particular hardware
sensors, nor do they provide much use. Sensors allow many applications
that were not originally envisioned by the spec writers. By choosing
poorly specified ivory-tower abstractions, the web limits what can be
done on the platform.

[dme]: http://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion
[pete]: http://www.html5rocks.com/en/tutorials/device/orientation/

## Low level sensor APIs don't exist

While you can work around the insanity of `Device*` style events on the
web with platform-specific shims, you cannot work around missing sensor
APIs. Magnetometers, pressure sensors, proximity, light, temperature,
battery, etc. These are mostly missing, and the ones that are specified
are specified in a very narrow way that does not generalize across to
other types of sensors (eg. [DeviceLightEvent][dle]).

Unfortunately it seems that previous attempts to push for a general low
level sensor API [haven't really gotten much traction][telefonica]. In
fact, it's a bit unclear whether or not the [Device API working
group][dap], is even the right place for sensor APIs, since their
mandate is supposedly more about services than sensors:

> [To] enable the development of Web Applications and Web Widgets that
> interact with devices services such as Calendar, Contacts, Camera,
> etc.

Except [here's a sensor API][dap-sensor] from the same group, which
seems to be abandoned... I don't even

There are more recent voices (circa 2014) that seem to be pushing in a
generic sensor API direction, from folks like [Rick Waldron][rwaldron]
and [Tim Volodine][tim]. Many of these ideas are still working within
the confines of a sensor API for each type of sensor. This does not
scale well for the web, which tends to take a long time for any new web
standard, but this renewed interest is very exciting and promising!


[telefonica]: http://lists.w3.org/Archives/Public/public-geolocation/2011Oct/0000.html
[tim]: http://lists.w3.org/Archives/Public/public-device-apis/2014Sep/0024.html
[rwaldron]: https://github.com/rwaldron/sensors
[dap]: http://www.w3.org/2009/dap/
[dap-sensor]: https://dvcs.w3.org/hg/dap/raw-file/default/sensor-api/Overview.html
[dle]: http://www.w3.org/TR/2013/CR-ambient-light-20131001/

## Sensors on other platforms

The web is woefully behind native platforms in almost every regard (with
possibly the exception of audio). Sensors on iOS and Android have a rich
history, and ended up in a pretty similar place as the two platforms
have scrambled to converge. Let's take a look.

iOS started off with a [UIAccelerometer API][uiaccelerometer], which was
replaced by [CoreMotion][coremotion] in iOS 5. Rather than providing a
series of specific APIs for each type of sensor API as it had before,
CoreMotion provides a unified framework for sensor events. Each data
type inherits from a common base class `CMLogItem`, and most of the API is
encapsulated in `CMMotionManager`, which explicitly lists accelerometer,
gyroscope and magnetometer-related APIs. iOS went from specific to
generic, which makes it super easy to add new types of sensor data. That
said, the API is generic only for motion sensors, which excludes a bunch
of sensors not directly related to motion like temperature, humidity,
etc.

Android started off right, and hasn't had to change much, providing a
[generic API for sensors][sensorevent] since API level 3. Android's API
is accessed through a SensorManager, which provides a somewhat overly
abstract API, because of its support for multiple sensors of one type
(eg. two accelerometers) in the same device. Still, the idea is good,
and all of the low level sensor data are well specified (per sensor
type)so the hardware/firmware vendor knows what data format their sensor
should stream. Of course there are still rogue implementations that
don't follow the spec, but that is a perennial problem for any open-ish
ecosystem.

Android also has a [distinction][hwsw] between software-based sensors and
hardware-based ones. The idea is that the same framework can provide
both the low level data coming directly from the hardware, as well as
useful higher level data obtained through [sensor fusion][fusion]. As of
API level 19, Android also provides [batch mode][batch] for sensor data, which
is very useful for conserving battery and CPU for applications where
some delay is acceptable.

One nice advantage of an iOS style API is that each sensor type has its
own structure (rather than just an amorphous array of floats, as in
Android), which is quite a bit easier to parse. The downside is that
adding new sensor types introduces more overhead, since each one
requires a new structure to be defined and agreed upon. Since we are
talking about web standards, which evolve at a glacial pace, we should
err on a simple API that works well without spec modifications.


[fusion]: http://en.wikipedia.org/wiki/Sensor_fusion
[uiaccelerometer]: https://developer.apple.com/LIBRARY/ios/documentation/UIKit/Reference/UIAccelerometer_Class/index.html
[coremotion]: https://developer.apple.com/LIBRARY/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/index.html
[sensorevent]: http://developer.android.com/reference/android/hardware/SensorEvent.html
[hwsw]: http://developer.android.com/guide/topics/sensors/sensors_overview.html
[batch]: http://developer.android.com/reference/android/hardware/SensorManager.html#flush(android.hardware.SensorEventListener)

## Great artists steal

There is no need for the web to reinvent the wheel. The wheel has
already been invented by iOS and Android. All we need to do is take the
good parts from these successful sensor platforms, and integrate them
into the web in a way that makes sense. The web is not the place for
innovation, but for standardization.

Conceptually, a sensor provides a stream of data. The developer should
be able to configure the rate at which new data comes in, as well as
batching the data in windows of sensor data (as is customarily done with
audio data, for example). In Android, because of a plurality of devices,
it's important to be able to check if a particular sensor is available.
The same concept maps well to the web.


## Toward A Web Sensor API

In general, here are the requirements for a Web Sensor API that works:

- A specification defining the format of the data, similar to
  [Android][sensorevent].
- A way to feature detect for the existence of a particular sensor.
- A way to request (and revoke) a stream of sensor data.
- A way to specify how often to poll the sensor.
- Bonus: A way to request sensor data in batch form.

While bringing an API like this to the web is a huge undertaking, there
is a silver lining. The sensors we're talking about are all considered
(at least for now) low-security, in the sense that on native platforms,
there is no extra permission required to access them. This makes it
possible to simply propose an API, convince everybody of it's worth, and
then have it implemented across the web!

I don't have a strong opinion about how the API itself looks like as
long as it fulfils the above requirements. Here's a simple strawman
which should satisfy them:

    // Check for magnetometer support.
    if (sensors.Magnetometer !== undefined) {
      console.error('No magnetometer found');
    }

    // Start listening for changes to the sensor.
    var magnetometer = sensors.Magnetometer;
    magnetometer.addEventListener('changed', onMagnetometer, {
      sample_rate: sensors.POLL_FAST, // In hertz, eg. POLL_FAST == 100
      batch: 1 // Number of data points to provide in a single poll.
    });

    // Handle sensor events.
    function onMagnetometer(event) {
      var data = event.data[0];
      // Get the timestamp (in millis).
      var t = data.timestamp;
      // Get the data (in this case µT, as per spec).
      var x = data.values[0];
      var y = data.values[1];
      var z = data.values[2];
      // Process the data.
      superAdvancedSensorFusionThing.addData(t, x, y, z);
    }

    // Stop listening.
    magnetometer.removeEventListener('changed', onMagnetometer);

## Conclusion

If you aren't yet convinced that we need access to low level sensors on
the web, recall web developers scoffing at device pixel ratio (DPR),
really questioning the need for to ever go above 2x. Now that [some
screens][cardboard] are ending up 5cm from your face, the current
generation of 4x displays isn't enough. The same exact thing applies to
sensors. The need is there, but it is not seen as enough of a priority
by the web community.

By enabling low level sensor access, we can allow new experiences never
before possible on the web. [Pushup rep counters][pushup], the [magnet
button][cardboard-magnet] in Cardboard, and myriads more applications
yet to be concieved could all be built on the web platform, eliminating
a big reason why the web is increasingly losing its relevance on mobile
devices. Providing low level sensor access is critical and aligns
perfectly with the [extensible web vision][ewm].

*Update (Nov 14, 2014): There was a [W3C call][w3-call] about this very
topic yesterday! Kicking off efforts in [this github repo][w3-sensors].
Join us!*

[cardboard]: https://developers.google.com/cardboard/
[w3-call]: http://lists.w3.org/Archives/Public/public-device-apis/2014Nov/0018.html
[w3-sensors]: https://github.com/w3c/sensors
