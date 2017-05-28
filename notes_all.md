Short notes
===
type: note
class: split


Split markdown pages in Lightning
===
posted: May 28, 2017

Lately, I have been dissatisfied with my blogging. My recent posts have been
long and unfocused, presenting many different thoughts without a single clear
message. Why has this happened? One possibility is that Lightning, the static
blog engine I wrote and use needs a bit of an upgrade. As they say in Russian, a
bad dancer blames his balls.

Lightning is awesome for long form content because it lets you gather all of the
assets you want to include in your post together in one directory, place it
alongside the markdown `index.md`, and put the content out there in a single
bundle. But this does not work well for short form content, since it requires
too much up-front effort:

1. Decide where to place the new directory. New posts belong in the
   `content/posts/2017/how-to-fix-the-world`. Deciding on this directory involves
   navigating to the right place, and deciding on the slug for the post.

2. Create the index.md file and write all of the information in the markdown
   file, including the human-readable title and the posted date.

        How to Fix the World
        ===
        posted: May 28, 2017

        Listen to me, I have the answers.

Then, after writing the post, you have to rename the directory to reflect the
slug since inevitably the title has changed: `mv how-to-fix-the-world
how-to-slightly-improve-the-world`. Finally I publish and tweet, and hopefully
the world becomes infinitesimally better.

## Split markdown pages

I wanted to reduce the barrier to writing by just top-posting to an existing
file and have the engine automatically generate a slug based on the title and
split the file into multiple pages. This is the conceptual inverse of
[MultiMarkdown transclusion][mmd], which lets you create extra long articles
from multiple markdown files. I've also refactored [Lightning][lightning] into
classes, making it easier to add features in the future.

Split markdown files power two new sections on <http://smus.com>: a [book
reviews section][books], and a [notes section][notes]. I'm really hoping that
this will encourage me to write shorter, more focused posts with increasing
frequency. To give a sense of what these split markdown files look like, take a
look at the [notes markdown][notes-md].


[mmd]: http://fletcher.github.io/MultiMarkdown-5/transclusion.html
[books]: /books
[notes]: /notes
[notes-md]: https://github.com/borismus/smus.com/blob/master/notes_all.md
[lightning]: https://github.com/borismus/lightning



Analogies from the industrial revolution
===
posted: May 24, 2017

Several centuries after the industrial revolution, machines still can't do all
physical things humans can, not even by a long shot. Drawing a masterwork,
singing an aria, playing a musical instrument, manipulating a soft object,
cutting hair, taking care of the sick are all examples of human-only tasks. The
industrial revolution gave machines the ability to do crude, physically
demanding work at scale, but it did not address all of physicality.

Just like the industrial revolution did not automate all aspects of physical
work, there is good reason to believe that the AI revolution will not solve
all aspects of intellectual work. Where the line will be drawn remains to be
seen, but I would bet that one aspect of human cognition that isn't really at
risk from any immediate AI-based disruption are creative pursuits. Many well
respected professions like doctor, lawyer, and engineer have both a rote
component that lends itself easily to automation, and a creative one. Some
examples:

- Curing patients boils down to the application of known heuristics to
  triage specific cases, but if you are a MD-PhD studying a new area of medicine
  or tackling a new disease, it's a much more creative and speculative process. 

- The legal profession involves finding the right precedents relevant to the case
  at hand, but articulating a convincing argument or deciding how to work out a
  new situation where there are now laws yet? Creativity.

- Designing a marketing webpage for a clothing brand is pretty formulaic. But
  inventing way of solving a problem using new technology? Totally creative. 
