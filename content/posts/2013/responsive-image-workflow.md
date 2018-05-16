Responsive image workflow
=========================
posted: 2013-09-09

About a year ago, I wrote an overview of many of the different [responsive
image approaches][h5r1] in an HTML5Rocks article, all of which try to solve the
fundamental problem:

**Serve the optimal image to the device.**

Sounds simple, but the devil's in the details. For the purposes of this here
discussion, I will focus on optimal image size and fidelity, and much to your
chagrin, will completely ignore the art direction component of the problem.

Even for tackling screen density, a lot of the solutions out there involve a
lot of extra work for web developers. I'll go into two solutions (client and
server side) on the horizon that serve the right density images. In both cases,
all you need to do is:

    <img src="img.jpg"/>

[h5r1]: http://www.html5rocks.com/en/mobile/high-dpi/

<!--more-->

## Nobody cares about responsive images (that much)

Let me start with an underlying problem: for one reason or another, most developers
don't really care that much about responsive images. Even if left unsolved,
the images still get to their destination, they're just a little crummier than
they should be. If fidelity doesn't matter much to you and your app, then no
big deal.

Others may not even know about the problem. If you're not a high density screen
user, you may have not been disappointed by the gulf in quality between crisp
images in native apps and blurry images in web apps. Some applications may prioritize
performance over fidelity, and want to deliberately send low resolution images.

**A vast majority of devs know about the problem, but are just waiting for a
solution that works well**. We're all inherently lazy and in my opinion, a
reasonable solution is one that requires little to no extra work.


## Good solutions require almost no extra work

How can we serve the optimal image to the device with as little work as
possible?  One approach is to always serve a highly compressed but high density
image, as I outlined in [Easy High DPI Images][h5r2] on HTML5Rocks. This
approach is better than nothing, but isn't really optimal since you end up
sending high density images to low density screens.

Two promising standards are on the horizon to wider adoption: the `srcset`
attribute for `img` elements, and the `CH` client hint header.

[h5r2]: http://www.html5rocks.com/en/mobile/easy-high-dpi-images/

### Solution 1: Client-side build step with srcset & friends

The `srcset` attribute [recently landed in WebKit][webkit], and it looks like
others will follow. Though it's more terse than `<picture>` and friends, `srcset`
still requires quite a bit of extra work to implement:

    <img src="img.jpg" srcset="img-1.5x.jpg 1.5x, img-2x.jpg 2x, img-3x.jpg 3x">

[`image-set`][image-set] is the CSS equivalent, and looks quite similar.
Unfortunately it requires even more work:

    selector {
      background-image: url(img.jpg);
      background-image: -webkit-image-set(
          url(img-1.5x.jpg) 1.5x, url(img-2x.jpg) 2x, url(img-3x.jpg) 3x);
      background-image: -moz-image-set(
          url(img-1.5x.jpg) 1.5x, url(img-2x.jpg) 2x, url(img-3x.jpg) 3x);
      background-image: -ms-image-set(
          url(img-1.5x.jpg) 1.5x, url(img-2x.jpg) 2x, url(img-3x.jpg) 3x);
      background-image: -o-image-set(
          url(img-1.5x.jpg) 1.5x, url(img-2x.jpg) 2x, url(img-3x.jpg) 3x);
      /* Hehe, moar prefixes! */
    }

Phew! After you have exploded your markup, you need to generate multiple images
of different sizes and decide on appropriate compression levels for each.

You'll notice that this extra work is very formulaic. It almost looks like it
could be automated! Let's skip the busywork and write our web pages like we do
today, specifying a very high quality asset (eg. 3x), and running a build
script. In your markup, all you need to do is:

    <img src="img.jpg" />

or

    selector {
      background-image: url(img.jpg);
    }

This magic time-saving script would need to do two things. First, it
generates images:

1. Find all image files on the site.
2. Downsize all image files to the right size depending on desired density breakpoints (eg. `1x, 1.5x, 2x, 3x`).
3. Name the images according to some convention (eg. `${image}-${density}.${format}`).

Image resizing already has a [grunt-based solution][addy], and many
others will surely follow. The second part is rewriting the HTML and
CSS. Here's how it works:

1. Parse all image references from HTML (eg. `img`) and CSS (eg. `background`,
   `background-image`).
2. Augment all HTML `img` elements with the right srcset. Augment all CSS
   `background` and `background-image` properties with the right (and prefixed)
   image-set value.

Now we're talking! And all you need to do is provide one set of high quality
image assets and add this script to your build step (you have a build step,
right?). Keep writing those `<img src>`s!

[webkit]: https://www.webkit.org/blog/2910/improved-support-for-high-resolution-displays-with-the-srcset-image-attribute/
[image-set]: http://www.w3.org/TR/css4-images/#image-set-notation
[addy]: http://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/


### Solution 2: Server-side build step with Client-Hints

The [Client-Hints proposal][ch] (CH) is another promising (read: minimal
developer effort required) future direction that would help solve the
responsive image problem on the server. Ilya Grigorik goes into much
more detail in [his post][ilya].

Currently, the main thing a server has to identify a client is its
User-Agent (UA) header. The UA header is insufficient to infer basic
things like display density, even in conjunction with a [UA
database][wurfl]. CH is a new header used to pass information to the
server about the user agent.  With it, you can specify the
`devicePixelRatio` (DPR) of your device explicitly:

    CH: dpr=2

Once browsers send this CH header, you can imagine some really simple
server-side logic to serve the best asset for the DPR specified. You will need
either a smart image generator (and cache) on the server, or a build script for
generating images at different densities. Luckily this build script is the same
as the first half of solution 2, so less work for us! Once the images are
generated, it's just a matter of producing the right redirects based on the CH
header, which Ilya provides his [article][ilya].

One benefit of solving this problem server side is that it's universal
and completely transparent to the client. A drawback to the first
(client-side) solution is that it will not work when setting `<img src>`
with JavaScript, although this can be remedied easily with a loader that
you use to specify the image asset. In practice, instead of specifying
the image asset directly, you would need to go through a small image URL
rewriter. Imagine something like this:

    var imagePath = images.get('img.jpg');
    // imagePath is now img-2x.jpg if on a 2x display.
    imageEl.src = imagePath;

Another benefit of the server-side approach is that there's no need for
parsing HTML and CSS (the second part of the build step) which can be
tricky and error prone.

[wurfl]: http://en.wikipedia.org/wiki/WURFL

## Both solutions are good

In summary, both solutions have merit, and since `srcset` has [momentum
already][webkit], it should be standardized and broadly supported as soon as
possible. Many designers may not have access to server side configuration, so
for them the client-side build script would make sense. Conversely, many
developers that have access to server-side image generators and advanced
caching techniques should take advantage of Client-Hints once it's
available, which [may be soon][ch-intent]!

Now, to write that build script... Any volunteers?


[ilya]: http://www.igvita.com/2013/08/29/automating-dpr-switching-with-client-hints/
[ch]: http://tools.ietf.org/html/draft-grigorik-http-client-hints-00
[ch-intent]: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/c38s7y6dH-Q
