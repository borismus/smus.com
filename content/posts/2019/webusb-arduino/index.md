WebUSB, Arduino, and Nunchucks!
===
posted: 2019-11-25

WebUSB bridges two amazing universes: the open web and the maker movement. Web pages can now talk directly to external hardware over USB, and it works on both mobile and desktop (at least in Chrome). There are a [few basic samples][1] out there, but for my own edification, I wanted to get my hands dirty. I hooked up a Wii Nunchuck to an Arduino, and built a webpage to plot sensor readings in real-time. Here’s the resulting [video][2] and [code][3].

<!--more-->

I used this handy [breakout board][4] to hook up the Nunchuck to an Arduino Leonardo without having to cut cables and solder. The Arduino runs a sketch which reads sensor values over I2C and sends them to the host webpage over WebUSB. In this case, the host plots the sensor data as it streams in.

# The UX is a mixed bag

Conveniently, any WebUSB device can be configured to broadcast a specific URL. As soon as you plug it in, Chrome displays a notification telling you that a new device was detected. Clicking the notification will take you directly to the advertised URL. Great!

![Notification to go to a URL][5]

To actually connect to the device, you need a user gesture (button press) to open up a native “Connect to USB device” dialog. You then pick the device from a list, and press the Connect button. Far from frictionless, but it makes sense given the web’s security model.

![Webpage wants to connect to device][6]

Despite the inconvenience, this is still super interesting, especially for doing one-time setup for a new hardware device. Certainly preferable to requiring the user to install a junky app on their phone!

# Some minor caveats

WebUSB won’t work with all Arduinos, only those that support a low level USB profile (eg. Emulating a mouse or keyboard). Specifically, the Leonardo is supported, but the Uno is not.

Arduino setup requires installing the [WebUSB library][7] manually, and even changing some Arduino header files. This could definitely be streamlined. Also, beware the large number of Wii Nunchuck-related Arduino libraries, all of which seem subtly broken.

Looking forward to using WebUSB in upcoming hardware projects! Stay tuned, and hopefully I’ll have something to share soon.

[1]:	https://github.com/webusb/arduino
[2]:	https://www.youtube.com/watch?v=mqmtltjk66w
[3]:	# "https://github.com/borismus/sensor-streamer"
[4]:	https://www.adafruit.com/product/345
[5]:	notification.png
[6]:	dialog.png
[7]:	https://github.com/webusb/arduino