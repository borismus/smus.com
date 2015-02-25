High DPI images article
=======================
link: http://www.html5rocks.com/en/mobile/high-dpi/
posted: 2012-08-22

My [article on high DPI images][article] went up on [HTML5Rocks][h5r]
this morning. In it, I outline techniques for delivering the best
quality images as quickly and efficiently as possible. I'm most excited
about the new platform features that help developers reach this goal:

- The CSS function `image-set` is already available in WebKit. Read [the
  spec][imageset-spec] to learn more.
- The new `<img>` attribute `srcset` isn't implemented anywhere yet, but
  is available [via polyfill][srcset-polyfill]. Read [the spec][srcset-spec]
  to learn more.

These new features are very similar to one another, but have subtly
different syntax. See [this thread][email] to `www-style` and `whatwg`
for an deep dive into these differences and an attempt to fix some
problems in the spec.

[article]: http://www.html5rocks.com/en/mobile/high-dpi/
[h5r]: http://www.html5rocks.com/
[imageset-spec]: http://dev.w3.org/csswg/css4-images/#image-set-notation
[srcset-spec]: http://www.whatwg.org/specs/web-apps/current-work/multipage/embedded-content-1.html#attr-img-srcset
[srcset-polyfill]: https://github.com/borismus/srcset-polyfill/
[email]: http://lists.w3.org/Archives/Public/www-style/2012Aug/0604.html
