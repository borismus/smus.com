Nike+ hacking with python
=========================
categories: [physical]
posted: 2010-05-18
snip: A deep dive into the Nike+ shoe sensor and USB dongle system, and how to get
  data from it using Python.



[Nike+][] is a clever little system designed by Apple and Nike to infer
the runner's speed and augment the running experience. The runner places
a small chip in his shoe which transmits data to the iPod using a
proprietary RF-based protocol. The chip contains a piezoelectric cell
which measures how long the foot exerted pressure on the ground.
According to [Apple's FAQ][], this contact time is directly related to
your pace. In this post I provide a snippet of python code for
collecting data through Sparkfun's adapter. 

Sparkfun [dissected][] the transmitter and receiver and currently sell a
[Nike+ Serial to USB adapter][]. There's been a number of [notable][]
[projects][] since, and quite a lot of interest in the system for
general hackery.

I wanted to
use Nike+ for my own project (a running bib that would automatically
display the runner's speed on the back). Unfortunately, the only
available implementations were in [Visual Basic][] and [perl][], neither
of which work on Mac. Here's a small script for Python on Mac OS X to
collect Nike+ data using SparkFun's adapter. 

    #!/usr/bin/env python
    import serial
    from hexbyte import *
     
    def readbytes(number):
        buf = ''
        for i in range(number):
            byte = ser.read()
            buf += byte
     
        return buf
     
    # open the appropriate serial port
    ser = serial.Serial('/dev/tty.usbserial-A6007uDh', 57600, bytesize=serial.EIGHTBITS)
     
    # send the following init string to the Nike+ device:
    init1 = 'FF 55 04 09 07 00 25 C7'
    ser.write(HexToByte(init1))
     
    # listen for the response string: FF 55 04 09 00 00 07 EC
    response1 = ByteToHex(readbytes(8))
    assert response1 == 'FF 55 04 09 00 00 07 EC'
     
    # send the second init string
    init2 = 'FF 55 02 09 05 F0'
    ser.write(HexToByte(init2))
     
    # listen for the response string: FF 55 04 09 06 00 25 C8
    response2 = ByteToHex(readbytes(8))
    assert response2 == 'FF 55 04 09 06 00 25 C8'
     
    # now we're ready to listen for actual data
    print "nike+ initialized. listening for data"
     
    while True:
        byte = ser.read()
        # if a byte is coming down the port,
        if byte:
            # get the rest of the message (34 chars)
            message = byte + readbytes(33)
            # and decipher it
            data = {
                'number': ByteToHex(message[11]),
                'uid': ByteToHex(message[7:11]),
                'data': ByteToHex(message[12:]),
            }
            print data


You'll also need [hexbyte.py][], which contains convenience conversion
methods between binary and hex.

I'm still unable to fully make sense of this data.  Firstly, each step
seems to inexplicably generate 8 packets instead of one. Second, there
are 22 bytes in the Nike+ data [with an unknown structure][], probably
containing pressure duration data. If someone figures out how to make
sense of this please let me know!

**Update (June 2013)**: Dmitry Grinberg has published a [much more
thorough reverse engineering][dmitry] blog post.

  [Nike+]: http://www.apple.com/ipod/nike/
  [Apple's FAQ]: http://support.apple.com/kb/HT2293?viewlocale=en_US
  [dissected]: http://www.sparkfun.com/commerce/tutorial_info.php?tutorials_id=41
  [Nike+ Serial to USB adapter]: http://www.sparkfun.com/commerce/product_info.php?products_id=8245
  [notable]: http://www.sparkfun.com/commerce/tutorial_info.php?tutorials_id=135
  [projects]: http://dub.washington.edu/pubs/46%0A
  [Visual Basic]: http://www.sparkfun.com/datasheets/DevTools/iPod/Nike_iPod_Serial.zip
  [perl]: http://rtadlock.blogspot.com/2009/06/some-perl-code-for-nikeipod-serial.html
  [hexbyte.py]: https://github.com/borismus/Running-Gestures/blob/master/hexbyte.py
  [with an unknown structure]: http://ipodlinux.org/wiki/Apple_Accessory_Protocol#Nike.2B_.28Mode_9.29
[dmitry]: http://dmitry.gr/index.php?r=05.Projects&proj=05.%20Nike%20plus%20iPod
