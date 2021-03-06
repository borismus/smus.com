Addressable apps
================
posted: 2014-05-21

It is human nature to create taxonomies for everything: people, places,
and things.  Without such a system of reference, we become lost and
disoriented.  Imagine your city with street names and addresses blanked
out. Finding your favorite cafe, meeting up with your friend on the
weekend, even locating your own parked car would become incredibly
difficult. Travel outside your city would become far more
challenging.

The web's defining property is addressability. URLs on the web are like
street names and addresses in the physical world. This makes sharing
and cross-linking easy. Non-web platforms are a little bit like our
city with blanked out street names and addresses. There's no good
way of talking about where you currently are, or how to get somewhere
else. These platforms typically give users a crutch to help with the
issue, such as a share button or dialog. But these create an
inherently inferior experience, since addressability is no longer
built-in. Addressability becomes a burden on the app developer, and
as a result, the platform is no longer navigable.

In light of the success of Android and iOS, and given a potential
explosion in new types of lower power computing (wearables, IoT, etc),
it's unclear if [browsers will be as ubiquitous][ebb-web] as they are
today (at least in the near term). I'm very interested in seeing if and
how non-web platforms can embrace URLs.  How closely coupled are URLs to
HTML, and do they make sense without a presentation layer?

[ebb-web]: http://smus.com/ebb-of-the-web/

<!--more-->


## Not all URLs are created equal

The modern URL can host several very different kinds of entities:

1. **Data**: text files, images, audio, movies, JSON, etc.
2. **Hypertext** (content-program hybrid): HTML that can reference
   content.
3. **Program**: webapps designed to deliver a bundle of JavaScript that
   then constructs the HTML dynamically from other URLs.

![Program vs. data: evolution of web](data-vs-program.png)

Without an HTML renderer, hypertext and program URLs cannot be
interpreted. Only one of these types of entities makes sense: data. Data
URLs are seen everywhere on the web: whenever you include an `<img>` tag
on your page, or embed a `<video>`, reference some CSS, or make an XHR
to fetch some JSON, you are using a data URL.

Apps on other platforms use data URLs too, though not as much. Images
are typically included as part of the app itself, but all API access is
done in exactly the same fashion as on the web: using HTTP requests to
text or binary data.

The similarity isn't entirely superficial. Any sort of web-connected app
can be seen as just a view on top of a series of data URLs (APIs).
However, data URLs are typically hidden from the user. The only types of
URLs that users see are hypertext and program URLs. These are the ones
that are being shared around. But both of these types of URLs ultimately
map to HTML, sometimes via JavaScript. The underlying data URLs  are
concealed inside the page, and aren't exposed to the user.


## The "URL in, URL out" principle

A user need not understand schemes, domain names, DNS, HTTP or GET
requests. They don't need to think about conceptual distinctions
between URL types to know that a URL is an address that gets you to the
same thing you're looking at right now. Whether it's Android/Java,
Polymer/JS or *InsertPlatform/InsertLanguage* underneath, the only thing
they want to be able to do is to continue reading their book on whatever
device they happen to be transitioning to. They want to share it with
their friend too, and have them enjoy a good read.

To make a platform URL-friendly, it should satisfy two simple
requirements:

1. The platform should provide a way for apps to reveal the underlying
   URL for the view.
2. Given a URL, the platform should open it in a way that yields the
   best available user experience.

![Platforms handle content URLs and provide them on demand.](url-in-url-out.png)

However, to bring URL friendliness to a platform retroactively takes a
lot of effort. Taking a quick look at today's trending web-alternatives,
it's plain to see that Android has some form of URL in (via intent
filters), but no URL out. iOS has neither in, nor out (you're stuck). To
address this lack of URL out in Android, you can imagine all Android
activities having to implement a `URLReporter` interface like this:

    class TwitterProfileViewer extends Activity implements URLReporter {
      @Override
      String reportURL() {
        return String.format("http://twitter.com/%s", username);
      }
    }

Of course, there is the not-unimportant UX question of how to then
reveal the URL and transfer it to other devices and people. But this
question will for now be left unanswered. With this API, a very
tasty carrot, and a very painful stick to force developers to implement
it (and a bit more UX thinking), we can make Android URL-friendly. 


## But URLs aren't just identifiers

You can look at URLs in one of two ways:

1. As a **universal identifier**. The same URL is also the universal and
   canonical way of getting to content that you are reading now.
2. As a **web address**. A URL like `http://smus.com/addressable-apps`
   can be viewed as instructions for getting to a certiain place:
   resolve the `smus.com` to `205.251.243.108`, connect to port 80 over
   TCP, perform a `GET /addressable-apps` request.

The real power of URLs is in both aspects combined. When only one facet
is used, the system is broken. I can't quite put my finger on it, but
something feels wrong in the cases, where the addressability aspect (2)
of URLs are not taken into account:

- AppLinks: these aren't universal identifiers, but fragile shortcuts to
  the platform-specific apps. (violates 1)
- Android intent filters: when you register an URL indent filter for
  your activity, you aren't actually hosting anything at that URL.
  (violates 2)
- History API: a hack allowing developers to set the path of the URL to
  anything they want. (violates 2)

The History API emerged from a trend on the web: highly imperative
applications. These apps have grown so far from being a collection of
hyperlinked markup that they no longer have a natural URL-to-HTML-page
mapping. Because they are so script heavy, they need to be able to
pretend to respond to URLs. The History API is the webapp's hack for
URL-out.


## Mixed feelings

This is my umpteenth attempt at finishing a post on the complicated
subject of URLs in non-web apps. And you have had the pleasure of
reading it not because the ideas in my head have crystallized into a
something coherent, but because I feel that the topic is difficult and
fundamentally unresolvable. In light of that, this post contains more
questions than answers. Sorry to disappoint :)

I'm still torn between maintaining the ideological and benefits of the
[mostly-declarative web][polymer] and the practicality of [jumping out
of the web's sandbox][sandbox]. While I would be happy to see more
native platforms embrace URL in URL out, I don't think that the solution
is a clean one, nor do I think that first-class URLs are likely to
emerge in any platform after-the-fact. Unfortunately I don't think that
there is a clean solution.

However, as an optimist, I must believe in the long-term victory of the
web, though not in the sense that the web will rule over all other
user-facing platforms unopposed. Instead, platforms will continue to
rise and fall; the web's influence will ebb and flow as well. But the
web must be the one that wins out the most, keeping the idea of
addressability alive.

That URLs become a universal address that works across all platforms,
and not just the web, is a proposition worth considering.

[polymer]: http://www.polymer-project.org/
[sandbox]: http://smus.com/installable-webapps/
