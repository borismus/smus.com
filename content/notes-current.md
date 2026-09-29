Short notes
===
type: note
class: split


We are as gods, we are as cogs
===
posted: Sep 29, 2026

> Everyone must have two pockets, with a note in each pocket, so that he can reach into the one or the other, depending on the need. When feeling lowly and depressed, one should reach into the right pocket, and, there, find the words: "For my sake was the world created." But when feeling high and mighty, one should reach into the left pocket, and find the words: "I am but dust and ashes." — Rabbi Simcha Bunim of Peshischa

Technological revolutions pull in two directions at once. On one hand they are *Promethean*, enlarging our command over the world. On the other, they are *decentering*, diminishing our imagined place within it.

<!--more-->

The telescope extended our ability to see into the heavens, but it also supplied evidence for the Copernican worldview. Earth was not the center of the universe, and ours was one world among many.

![Pale Blue Dot](/assets/earth-pale-blue-dot.jpg)
*Pale Blue Dot, Voyager 1, 1990, ~6 billion km*

Spaceflight let us escape Earth's gravity and set foot on another world. But later photographs of Earth from space showed a tiny, fragile world suspended in a lethal void.

Darwin argued that we are apes, shaped by the same evolutionary processes as all living things. Then we learned to read the genetic code. When we read the chimpanzee genome beside ours, Darwin's argument came back in writing: letter for letter, nearly 99% the same. We had learned to read the book of life, and it turned out we weren't the main character.

Alan Turing described a universal computing machine, and within a lifetime these machines guided Apollo to the Moon, sequenced the genome, and put the sum of human knowledge in our pockets. Turing also asked whether machines could think, and anticipated the reaction:

> The consequences of machines thinking would be too dreadful. Let us hope and believe that they cannot do so.

Large language models ended the hoping.

Every major technological revolution is simultaneously Promethean and carries the seeds of decentering. Those of us enthusiastically building systems with AI have never felt more powerful, while many on the sidelines are watching machines do what they thought only a human mind could. I see myself in both camps, sometimes within the same afternoon agentic coding session.

Rabbi Bunim would hand each of us the note they most need. To the AI-pilled builders: "I am but dust and ashes." To everyone else: "For my sake was the world created." Let us not forget: everyone must have two pockets.


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
