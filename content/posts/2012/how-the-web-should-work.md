How the web should work
=======================
posted: 2012-09-12

When developing in a particular environment, say Android or Cocoa, we
are subconsciously aware that the APIs are essentially fixed and beyond
our control. There is no effective mechanism to go and tell Apple that
some method is poorly named, or tell the Android team how much you wish
the Audio APIs were nicer to use.

The web, however, is built by many different companies and individuals,
giving consumers of the platform (web developers) a unique chance to
also become contributors to its evolution. Rather than griping about how
broken something on the web is, remember that you can play a part in
fixing it!

<!--more-->


## Current flow: "top down"

Today, features get added to the web platform as a result of competition
between browsers and some standardization work. The web developer has
little say in the process until perhaps the very end. Worse, many spec
authors and browser engineers are not web developers, so they have no
intuition or experience as to what the web platform actually needs.
Here's how it works today:

1. Browser vendor proposes way for solving a problem and implements it
   in their browser. (browser vendor)
2. In some cases it's concurrently introduced as a W3C specification.
   (spec author)
3. Other browser vendors implement the feature. (browser vendor)
4. Much later, someone implements a JS wrapper on top of feature to make
   the feature practical for web developers to use. (web developer)

Some of the negative features of this flow are:

- Takes a long time before any developer feedback is received.
- New features have partial support for a very long time.
- Innovation is very browser vendor/spec writer centric.
- Very slow cycle overall.
- Little room for incremental improvements.


## Ideal flow "forward polyfills"

Rather than sticking to the top down flow, web developers can be
included in the loop. While forming organizations like
[CoreMob](http://www.w3.org/community/coremob/) might be a good first step, we can have a more direct
impact as well. The following alternative flow can work pretty well in
conjunction with the status quo, described above.

The basic idea is to hit the ground running with a prototype developed
in JavaScript, get early feedback and then propose to W3C when you are
ready.

1. Propose a sane API that developers can use & implement it on top of
   existing API(s). (web developer)
2. Solicit adoption and iterate on feedback. (web developer)
3. Push through standardization. (spec author)
4. Implement natively in browsers. (browser vendor)

This flow has many benefits over the first one.

### Prototypes have a tighter feedback loop

By releasing a JavaScript library quickly, you immediately get feedback
from developers. As you tweak your API, you can incorporate real world
feedback. This can be a very short cycle, especially with the help of
tools like github, where consumers of your library can give you
suggestions and fix your bugs!

### Useful out of the gate

By the time you are ready to propose your library to be standardized as
a core web specification, you already have a reference implementation
with unit tests. These can then be used by browser vendors as they
implement the specification. This is much more useful to have than
the abstract pseudocode that the W3C specs currently provide, and should
lead to a more consistent set of browser implementations.

Even more importantly, you know that what you are proposing is something
useful because that real web developers have already used it! This is
already better than many APIs currently offered by the web platform,
some of which has seen little developer uptake.

### A polyfill at launch

By the time the first browsers start implementing the spec, you already
have a polyfill for developers to use &mdash; the library you wrote in
step 1. This polyfill should feature detect for the presence of the API,
and if not present, load the functionality via the JavaScript library.


## Limitation: some things need more than JavaScript

Not all features can be implemented in JavaScript. In fact, some of the
most exciting ones require browser-level innovation because JavaScript
is heavily sandboxed (eg. contacts API, access to new sensors). Still,
many new features **can** be implemented, such as new layout models (eg.
flexbox, new storage APIs, responsive image solutions).

Even if you can't provide a JavaScript implementation, there are ways to
prototype these features to see if they are useful or not, giving
some of the benefits describe above. PhoneGap and other WebView wrappers
can be easily instrumented with plugins that bring native functionality
to the web. More ambitiously, if you can stomach the learning curve,
contribute to open source browsers like WebKit/Chromium and Firefox!


## Limitation: JS library to spec is uncharted territory

One of the missing pieces in the "forward polyfill" approach I advocate
for in this post is that it can still be very difficult to get your
voice heard without being a browser vendor or spec author.

Anecdotally I've sent a few messages to the [www-style@
list][www-style](http://goo.gl/hrBvS), without many tangible results. Other web developers
such as, roughly following the tactic I described earlier, have
experienced similar frustrations in the recent discussions [regarding
high DPI images][images](https://www.wired.com/2012/05/browsers-at-odds-with-web-developers-over-adaptive-images/).

## Conclusion

This post is a summary of my thinking around most of my recent web
development work: projects like [pointer.js](https://github.com/borismus/pointer.js), [physical units](https://github.com/borismus/physical-units)
and the [srcset-polyfill](https://github.com/borismus/srcset-polyfill/) all have the same mission in mind: to
cease to exist by having their functionality replaced by the web
platform itself. The most notable example of such a project is PhoneGap,
which explicitly states self destruction as its now famous [second
goal][phonegap-goal](http://phonegap.com/2012/05/09/phonegap-beliefs-goals-and-philosophy/).

It may seem strange to develop projects with such a nihilistic purpose.
But keep in mind, that in this case it's not just the code that counts,
but the ideas behind it. We would be better off with many of these
things in the web platform: an implementation of pointer events,
physical units, and a good set of device APIs.

I'm not arguing that the current spec-and-browser-first flow should be
replaced. I'm merely suggesting that there is an alternative out
there that involves web developers; one worthy of exploration by
those of us that aren't in the business of writing browsers but
care enough about the web platform to try to make a change.

***UPDATE***: At Paul Irish's great suggestion, please post your
comments in [this Google+ thread](https://plus.google.com/115694705577863745195/posts/fMyCkBYvHRi).
