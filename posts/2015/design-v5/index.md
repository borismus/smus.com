Site redesign, version five
===========================
posted: 2015-06-10

It's been over three years since the design of this site has been
updated. Time to change that!

<img src="0days.jpg" class="floatright"/>

This is the fifth revision of this site's design. Looking over [previous
designs](/redesign-2012), I've been happier with minimal designs,
especially [this one](/redesign-2012/v2.png) from 2012. I was inspired
by many excellent designs such as [Butterick's Practical
Typography](http://practicaltypography.com/typography-in-ten-minutes.html),
[Teehan+Lax](http://www.teehanlax.com/), [Erik
Johansson](http://www.erikjohanssonphoto.com/),
[Medium](https://medium.com/designing-medium/death-to-typewriters-9b7712847639)
and [Frank Chimero](http://frankchimero.com/writing/other-halves).

The new design is visually cleaner. I [use
flexbox](http://caniuse.com/#feat=flexbox) in many places, which makes
the CSS far more intuitive. The responsive parts are very simple,
consisting of just ten CSS declarations.

<!--more-->

Rather than subjecting readers to my face on every page, I have a simple
stipple background on the [about page](/about), which I created using the
complex but functional [StippleGen](http://www.evilmadscientist.com/2012/stipplegen2/).

Also, I've started working on a self-hosted visual link blog that you
can check out in under [inspiring clippings](/inspiration). I've
implemented a companion Chrome extension that makes it super easy to
clip inspiring content from anywhere on the web and bring it to that
page.

**Typography:** I'm continuing to use Google fonts, which seems to be so
much simpler to use than various competitors. I have not completely
optimized my selection of fonts, but this is satisfactory given my
belief that no design is ever finished. [Performance is UX][perf] too,
and aesthetic decisions need to be counterbalanced by mundane
considerations like page load time.  Unfortunately [Dosis][dosis] didn't
make the cut.

**Infrastructure:** This site is still built using the [lightning static
blog][lightning] engine, which I'm continuing to improve. On that front,
I've dropped the ambitious goal of being able to edit content from any
device using dropbox, since in practice I always author on my laptop.
Instead, the focus has been on optimizing the edit flow for the local
offline case, and I have built [livereload][] into the local preview
server. As far as hosting, I have conceded to GitHub Pages, and have
migrated away from using S3 directly.

**Thanks:** to [Mike](https://twitter.com/mikemartin604),
[Paul](https://twitter.com/paul_irish),
[Seungho](https://twitter.com/smattyang),
[Scott](https://twitter.com/scottjenson),
[Michael](https://twitter.com/mahemoff), and other awesome friends that
gave me excellent design suggestions and found bugs!

While I appreciate companies like [Medium](http://medium.com) and
[Svbtle](http://svbtle.com/) advancing the aesthetics of the web, I
completely [agree with Matthew Butterick][billionaire]'s view, and will
continue self-hosting my writings for as long as possible. Long live the
plurality of the web!


[dosis]: https://www.google.com/fonts/specimen/Dosis
[lightning]: https://github.com/borismus/lightning
[livereload]: https://github.com/lepture/python-livereload
[billionaire]: http://practicaltypography.com/billionaires-typewriter.html
[perf]: http://alistapart.com/article/improving-ux-through-front-end-performance
