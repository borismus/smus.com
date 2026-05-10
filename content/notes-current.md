Short notes
===
type: note
class: split


supernote-cli: pen, paper, and a pipe
===
posted: May 9, 2026


A recent [NYT piece](https://www.nytimes.com/2026/03/27/opinion/technology-mental-fitness-cognitive.html) argued we need a mental fitness revolution to combat the cognitive decay caused by algorithmic feeds and generative AI. It's an efficient one-two punch. If you're not brainrotting on short form video content, you're outsourcing all of your thinking to an LLM. The result is a kind of cognitive strip-mining. What's left requires active defense.

For me, one way of defending that capacity for deep work is with a pen on e-ink. Whether it's annotating a paper or starting a sketch from scratch, I'm intentionally making room for focused thought. My army of clawed Claudes and Codexes will just have to wait.

<!--more-->

As I've written [before](/notes/2025/the-pursuit-of-frictionless-capture/), my e-ink writer of choice is a Supernote Nomad. The Nomad does one thing: it removes the exits. No feed, no notifications, no reflex to ask the nearest model. Just the question you're sitting with.

But there’s still a gap: extracting digests and handwritten notes relies on the awkward Supernote Partner desktop app, which doesn't easily support bulk exports. I'm no luddite and use GenAI for a bunch of work, including critique of ideas and iteration on writing. If I can't automatically pipe my focused thinking into Obsidian or my AI workflows, my [system for thought](/file-systems-for-thought/) breaks. It doesn't help that the [Python sync libraries](https://pypi.org/project/sncloud/) that used to work no longer do.

# Introducing supernote-cli
So I extracted `supernote-cli` from my note management scripts to fix the plumbing and introduce a few conveniences. Here are some examples of usage:

**Extract handwritten notes** and show their on-device transcript:

```
$ supernote notebook ls --limit 3
 1251704792368021505  2026-04-22  A2A ideation for Agent book
 1254057731111780353  2026-04-24  San Francisco Note, April 20
 1254579462477971456  2026-04-27  20260424_081053

$ supernote nb 1254057731111780353
## Page 1
Excited to do that again it's been over a decade since I
went to that space and <redacted> is kind of a hero for me.
...
```

**List annotated documents** and extract handwritten highlights and notes, and transcribe them with a [local VLM](/notes/2025/local-e-ink-handwriting-recognition-with-on-device-vlms/).

```
$ supernote annotation ls --limit 4
Breath_The_New_Science_of_a_Lost_Art_James_Nestor.pdf
 833859954824708096  Apr 18 17:43  Any gum chewing can strengthen the jaw a (A)
 833859955948781568  Apr 18 17:45  TUMMO There are two forms of Tummo—one t (A)
 833859956464680960  Apr 18 17:49  Breathhold Walking Anders Olsson uses th
 833859957852995584  Apr 18 18:00  Close the mouth and inhale quietly throu (A)
 
$ supernote an 833859955948781568
> Any gum chewing can strengthen the jaw and stimulate stem cell growth, but harder textured varieties offer a more vigorous workout.

seems ridiculous — so do night guards do the same?  
```

**Extract inbox highlights** from notes using a custom VLM prompt:

```
$ supernote nb 1254579462477971456 --prompt "Whenever you see a line beginning with → or ☐ or ☑, transcribe the rest of the line (including any continuation onto subsequent lines) and include the leading → or ☐ or ☑ at the start of the output line. Emit nothing for any other lines."

☐ Finish supernote - cli blog
☐ Efoil: block hole w/ Epoxy (and fix up wiring)
☐ Canada passport renew & send.
☐ Summarize Tillich
```

Check it out [on GitHub](https://github.com/borismus/supernote-cli).

The scarce input in the AI era isn't prompts or models; it's focused thinking. Synthesis gets cheaper each year, while deep work gets harder. The pen-and-paper thing isn't nostalgia but a line of defense.
