From VPS to static hosting
==========================
posted: 2013-01-16

All good things must come to an end. VPS hosting paid for by my former
university is no exception! Ever since the University of
Madeira-provided credit card paying for the account expired, I began
wondering whether it's worth paying for a VPS that I hardly use.
Combined with two consecutive 10-minute stretches of downtime last week,
I had my answer.

I run this blog, my mother's site and a handful of mini-sites, all of
which are inherentily static content. Today, I moved them all away from
my VPS completely. I migrated the relatively complex sites to the
[lightning][] engine, and updated the engine with a couple of nice
features: fixed content links in list pages and feeds, and support for
publishing to S3.

<!--more-->

[lightning]: https://github.com/borismus/lightning

## System administration

In my early Linux days, I ran an AMD Athlon server off my parents'
internet connection. I took pride in configuration, maintenance,
administration, endlessly recompiling updates and dealing with broken
dependencies. I enjoyed the challenge and got very good at it. By
sinking enough time into any problem, I was confident that I would
ultimately solve it. Sometimes I contributed an ebuild or two to
portage. I learned a lot, and eventually my web server outgrew my
parents' internet connection.

So I turned to managed hosting. Several years later, sick of the crappy
management UI, and yearning to flex some sysadmin muscle, I jumped on
VPS opportunity for performance reasons. While clearly overkill for
static sites, it was appealing from a "what if?" perspective: what if
suddenly I wanted to run a complex webapp? No problem, VPS was ready!

## Except system administration sucks

My VPS slice was running Ubuntu 8. Since Ubuntu 12 was released, I was
greeted with a "48 packages are out of date" message upon logging into
the machine. 

Long ago, this message would have sent me down a rabbit hole of emerging
all of the outdated packages, resolving dependencies and rewriting
config files. It was gratifying to be on the bleeding edge, to have a
clean system with all of the daemons dancing to your tune in perfect
harmony.

These days, I could care less about being up-to-date. In fact, I
actively dislike upgrading. An upgrade is a risk, likely to lead to
something breaking, likely without me noticing at first. So rather than
the "ooh, new shiny" feeling I used to have when Apache needed an
update, I actively dread needing to update anything. I don't want to
need to tweak configurations, especially because I've forgotten a lot of
the domain-specific config languages. 

## S3 for static hosting, PaaS for everything else

Happily, all of my sites are currently static. Blogs and mini-sites all
lend themselves very well to being hosted on S3.

For the hypothetical case that I require a dynamic web server on
the internet, I'll turn to a Platform-as-a-service solution like
[Nodejitsu][njsu] or [AppEngine][gae] to avoid doing rote configuration
tasks.

Being a sysadmin is not a part time job.

[njsu]: http://nodejitsu.com/
[gae]: https://developers.google.com/appengine/
