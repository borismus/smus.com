Remote controls for web media
=============================
posted: 2014-01-27

When the world wide web was first conceived, it was as a collection of
interlinked textual documents. Today's web is full of rich media.
YouTube and other video sites alone consume an enormous 53% of all
internet traffic. Web denizens often have an open audio player in one of
their tabs. Web-based photo sharing services such as Flickr are the most
common way of enjoying photos on our computers. The remote control,
foundations of which are attributed to everyone's favorite inventor
Nikola Tesla in [patent US613809][remote], has been the preferred way of
controlling media for over half a century.

Yet the only way we can control all of this web media is via the
on-screen user interfaces that the websites provide. The web has no
remote control, and this is a big usability problem. Many use the
desktop versions of streaming services like Spotify and Rdio rather than
their web player, exclusively because of mac media key support. For
scenarios where you're far from the screen, like showing friends a
slideshow of photos on a TV, the lack of remote controllability is a
non-starter.

This post is a concrete proposal for what a remote controls for the web
should be like. To get a sense for how it might feel, try a [rough
prototype][prototype].

[remote]: https://www.google.com/patents/US613809

<!--more-->

![Ways of controlling media: dedicated keyboard buttons,headphone
remotes, hardware remote controls, second-screen remote controls,
camera-based gestures, voice commands](inputs.png)


## Related attempts to solve this problem

Many platforms, especially Android, Mac and iOS, do a pretty good job of
supporting some of the inputs from the above image. The web, one of the
most common platforms for consuming media, supports none of them. The
only exception, of course, is the mouse and keyboard, but only when the
player tab is in the foreground.

On the web, there have been a number of proposals and half-solutions to
address this problem. Back in 2011, I shared [KeySocket][keysocket], a
Menu Bar app for OS X that handles media keys on the mac keyboard and
sends them to a companion Chrome extension that injects content scripts
into web-based media players. A similar project, [Sway.fm][sway] built
support for media keys as an NPAPI plugin (a now [deprecated][npapi]
technology). The [Flutter app][flutter] takes a similar approach (native
app and companion extension), but enables webcam-based gestures for
controlling media.

Recently, I contributed the Mac implementation to the new [global
keyboard shortcuts API][chrome-global-keys] for Chrome Apps and
Extensions. This API lets developers bind to any global shortcut,
including media keys. This is a good start since it brings the media key
handling infrastructure into Chrome, but does not address the problem
for the web in general.


[keysocket]: http://smus.com/chrome-media-keys-revisited/
[sway]: http://sway.fm/
[npapi]: http://blog.chromium.org/2013/09/saying-goodbye-to-our-old-friend-npapi.html
[flutter]: https://flutterapp.com/
[chrome-global-keys]: https://codereview.chromium.org/60353008/

## Starting with a good user experience

Since we have a blank slate when it comes to controlling media on the
web, how should media controls behave? Let's start with some
sub-optimal behaviors. Here's one: all media events to get routed to all
open tabs capable of handling them. Imagine the case with many YouTube
tabs open, and the ensuing cacophony! Another bad approach is to route
commands only to the foreground tab, since a very common case for
needing media controls occurs when music is playing in the background.

[This rough prototype][prototype] illustrates what I think is a pretty
good experience. It follows a focus-based model inspired by mobile
operating systems like iOS and Android. However, the web is messier than
the app model and edge cases like multiple sources of media playing
simultaneously (eg. music player and YouTube video) are likely to
happen, so we need to be careful.

Here is what happens when a user issues a play/pause command. I'll
define the bold terms in a second.

1. If any media is **playing** in a **background tab**, it should pause.
2. Otherwise, if the **foreground tab** supports **media events**, it
   should receive the media control and be pushed to the **media focus
   stack**.
3. Otherwise, if the **media focus stack** is non-empty, the event
   should be routed to the tab at the top of the stack.
4. Otherwise (if the stack is empty), find the first open tab
   supporting **media events**, relay the event to that page and push it
   on the **media focus stack**.
5. If there are no open tabs supporting **media events**, do nothing.
   Optionally alert the user with a non-modal notification (eg. audible
   chime).

When a next or previous control is issued, the command should be routed
to the tab with **media focus**. If there are no tabs with **media
focus** and none capable of media control, we drop the event.

If a tab closes, remove it from the **media focus stack** and ensure
that **media focus** is granted to the tab at the top of the stack.

To clarify the description above, here are a few terms:

- **Foreground**: the active tab of the foreground browser window.
- **Background**: every tab that is not in the foreground.
- **Media events**: a new event type that a page can listen to,
  indicating how to interpret media controls (see the next section).
- **Playing tab**: a tab that is currently playing audio or video
  content.
- **Media focused tab**: the tab which is the default receiver of media
  control events.
- **Media focus stack**: a stack of tabs where the top-most tab
  is the one that currently has media focus. If that tab is
  popped off the stack, the next one gets media focus.

The dry description above and [the prototype][prototype] should give a
sense of what tab should handle basic media controls, regardless of
their origin: keyboard, remote control hardware, gesture, etc.

Now, when a command comes in, how does the page know how to interpret
it? That's up to the web developer, and is done through `media` events,
described in the next section.

[prototype]: http://borismus.github.io/media-control-prototype/

## Enabling media controls using media events

A fundamental missing piece so far is a way for a web page to indicate
that it can receive media controls, and a way for it to specify how it
wants to handle them. The solution to this is to create a new type of
event, the `media` event, which are defined on a page-level, bound to
the window object. This suggestion is not new, and first (as far as I
can tell) came up in this [blog post by Paul Rouget][rouget]. Here's
how media events work:

    // Subscribing to media events.
    window.addEventListener('media', function(e) {
      if (e.data == e.MEDIA_PLAY) {
        myPlayer.play();
      } else if (e.data == e.MEDIA_PAUSE) {
        myPlayer.pause();
      } else if (e.data == e.MEDIA_NEXT_TRACK) {
        myPlayer.next();
      } else if (e.data == e.MEDIA_PREVIOUS_TRACK) {
        myPlayer.previous();
      }
    });

This code tells the browser that this page can accept media controls,
and what this page should do when a particular media control is
received.

[rouget]: http://paulrouget.com/e/mediaevents/


## Determining user-initiated media playback change

Another missing piece in the narrative so far is how to populate the
focus stack. So far, we know that a closed tab should be popped from the
stack, and that play/pause sometimes causes a tab to be pushed onto the
stack. But this is not enough, since the user can still interact with
media using the UI of the player. For example, if I start listening to
music through a Spotify tab, and then switch tabs, media commands should
obviously go to the Spotify tab, despite me never having issued any
media controls.

One option is to, as the user navigates between tabs, push any tab with
supporting media events onto the stack. This approach fails for the case
where you are listening to music in the background, and then change
tabs, passing an open YouTube video on the way. In this case, that
YouTube video would become focused and there would be no way to control
the music (until you close the YouTube tab). What we actually need is to
be able to **track when the user interacts with the page using the media
player UI**, in order to then push page to the media focus stack.

A browser can distinguish user-initiated events (like clicks and
keyboard presses) from programatic ones (like a timer firing, or a page
loading). [iOS does this][ios] to prevent annoying pages from
autoplaying music (remember the 90s?). Using the same idea, browsers can
also track when a media player's playback state changes due to user
input.

Even so, there may be special cases that aren't perfect. For example,
imagine a music app with media controls and a video ad on the side. If
the user then clicks the video ad, it doesn't mean that the page should
now have media focus. There are other tricky cases such as a page full
of videos. Here, if a user starts playing a particular video, and then
wants to stop it using media controls, the expectation is that the same
video pauses. If the web developer does not handle this case gracefully,
another video may start playing concurrently.

[ios]: https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html


## Response at FOMS was positive

Pitching this idea at [FOMS 2013][foms] a few months ago, folks seemed
receptive. There was an understanding that a lack of media controls on
the web is a genuine problem. Additionally, I got good feedback on the
solution, which helped to iterate and get to this stage. This is all
very encouraging, and I've written this post to keep the discussion
alive and keep the momentum going. To make remote controls for the web a
reality, we need is a critical mass of interested browser implementers.

As always, thanks for reading, and let me know if you have thoughts or
suggestions on this topic, especially if you make browsers for a living
and want to help standardize!

[foms]: http://www.foms-workshop.org/foms2013/pmwiki.php/Main/MediaFocus
