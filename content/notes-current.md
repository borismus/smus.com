Short notes
===
type: note
class: split


Local e-ink handwriting recognition with on-device VLMs
===
posted: Dec 18, 2025

For decades, I've carried a Field Notes notebook and a pen. I mainly used them to capture ideas on the go, but it would also be great to sketch out a diagram, or to journal a little bit, especially while traveling. 

Fast note-taking via the iPhone's action button has alleviated a lot of my need for quickly capturing ideas. But nothing can replace pen and paper for long form stream-of-consciousness writing or diagramming. 

I wanted to give my writing a digital life alongside the rest of my notes. So a year ago, I bought an A5 e-ink writer called Supernote. I really like it so far: it's a good size, input latency is reasonable, and the overall writing experience is fine. The device provides real-time text recognition on-device and a modest cloud syncing service. I've been using their unofficial API to sync notes and bring them into my Obsidian inbox. But then something happened...

<!--more-->

1. I wrote quite a bit on the Supernote during my trip to Patagonia, and came back to realize that the on-device recognizer has a pretty high error rate.
2. Supernote Cloud enabled mandatory two-factor authentication. This broke my programmatic access to their cloud. So much for ["unofficial but stable"](https://smus.com/notes/2025/the-pursuit-of-frictionless-capture/#:~:text=Supernote%20has%20a%20cloud%20sync%20service%20with%20unofficial%20but%20stable%20APIs.%20Notes%20are%20saved%20in%20a%20proprietary%20but%20reverse%2Dengineered%20.note%20file%2C%20see%20unofficial%20python%20library.).
3. The quality of handwriting recognition using Vision Language Models (VLMs) has skyrocketed, including for models capable of running locally on a modern Mac.

# Measuring handwriting recognition accuracy
Just three weeks ago (November 2025), someone released [OCR Arena](https://www.ocrarena.ai), a knockoff of [LM Arena](https://lmarena.ai) but for comparing VLMs in their OCR abilities. AI is moving so quickly, as soon as you have a cool idea, someone's just done it!

OCR Arena compares the latest crop of VLMs but obviously does not include Supernote's on-device handwriting recognizer, nor does it include previous generation OCR libraries. I wanted a more broad-based multi-way comparison specific to my scenario. How well do the various approaches work on my handwriting on this device? I set out to compare a few different approaches to this problem:

- A state-of-the-art cloud model (e.g. Anthropic's `claude-opus-4-5-20251101`)
- A state-of-the-art open weights VLM capable of running on my stock Mac Mini M4 (e.g. `qwen3-vl:8b`)
- The real-time handwriting recognition engine which runs on the Supernote e-ink writer device.
- Traditional, pre-LLM OCR systems. (I realize tesseract is not the best for this, but still an interesting baseline.)

I put together a tiny evaluation set which included five handwritten pages from my Patagonian journal, and manually transcribed them for ground truth. Claude and I built a small evaluation script for transcribing the examples in the dataset and comparing Word Error Rates (WER) across them. 

To make this concrete, here's a page I wrote from my travel log and the ground truth I manually transcribed:

![Handwritten journal page from Supernote e-ink tablet with ground truth transcription](/assets/ocr-original-to-groundtruth-comparison.png)

And here's a side-by-side comparison of the transcript produced by qwen3-vl:8b, Supernote's on-device model, and tesseract:

![Side-by-side comparison of handwriting recognition output from qwen3-vl, Supernote, and tesseract](/assets/ocr-qwen-to-supernote-to-tesseract-comparison.png)

As you can see, tesseract produces terrible output. This is not surprising, since it's not trained for handwritten text but printed text. To do this right, you'd need to retrain it with a corpus of handwritten documents, but I still wanted to include it as a baseline.

Supernote's real-time on-device handwriting recognizer does reasonably well sometimes, but other times goes off the rails, as you can see in the example above. For the curious, code for these benchmark scripts [is available](https://github.com/borismus/supernote-ocr-bench).


Calculating word error rates and aggregating all the pages' WER scores resulted in the following table:

| Model                    | WER Mean | Latency Mean |
| ------------------------ | -------- | ------------ |
| claude-opus-4-5-20251101 | 0.0308   | 6.17s        |
| qwen3-vl:8b              | 0.0514   | 74.13s       |
| supernote                | 0.2731   | N/A          |
| tesseract                | 0.9533   | 0.57s        |

# Improving qwen3-vl:8b with a bit of prompting
Surprisingly, the prompt given to `qwen3-vl:8b` matters quite a bit. My initial prompt was:

```    
prompt = "Extract all text from this handwritten note. Return only the transcribed text in markdown format, without any additional commentary or formatting."
```

With this basic prompt, `qwen3-vl:8b` would get stuck in a thinking loop and return an empty transcript at all about a quarter of the time. This failure mode would take hundreds of seconds and eventually end up repeating the same word dozens of times and then timing out.

After some experimentation with prompt and other parameters, I found empirically that updating the prompt seemed to reduce this rate to almost zero:

```
prompt = """You are an OCR engine, not a writing assistant.

Task:
- Read the handwritten note in the image.
- Output the exact transcription of the text as plain markdown.

Critical constraints:
- Do NOT explain what you are doing.
- Do NOT think step-by-step.
- Do NOT describe, analyze, or comment on the note.
- Do NOT use phrases like "let's", "wait", "first line", "next line", "line X", "Got it", or "step by step".
- Do NOT mention spellings or say how words are written.
- Do NOT repeat any single word more than twice in a row.
- If you notice yourself repeating a word or phrase, immediately stop and output your best single transcription of the whole note.
- Your entire response must be ONLY the final transcription text, nothing else."""
```

# Integration into my System for Thought
Now that I had some metrics for word error rates across various approaches, I was able to make an informed decision driven by these considerations:

- **Privacy > everything**. Privacy preservation is extremely important to me as I'm journalling about potentially very personal topics. I don't want my journal in anyone's training set.
- **Accuracy > latency**. Supernote's on-device transcription is handy, but I'm mostly not in a hurry. I'd happily trade speed for higher quality transcription.

I went with `qwen3-vl:8b`. It takes about a minute to process a page on my $450 Mac Mini. The word error rate is about 5% which is not far from the best possible results of 3% via Claude's high-end model.

Handwriting transcription is now implemented in my `note-vault-utilities`, a suite of scripts that [garden my plaintext note corpus](https://smus.com/file-systems-for-thought/). Cloud sync to desktop is achieved using the [Supernote Mac app](https://support.supernote.com/en_US/Tools-Features/supernote-partner-app-for-desktop) and my daily note cron job picks up and transcribes any new handwritten notes into the Obsidian note corpus.


The pursuit of frictionless capture
===
posted: Sep 29, 2025

The most fruitful moments for contemplation are often the least conducive to capture. I've been working on reducing friction in capturing thoughts, feelings, and ideas wherever I may be and whatever I may be doing. At the same time, I want to stay in the moment and not get distracted by the act of capturing itself. 

In addition, I want to retain control over all of this data. It should be stored in human-friendly plaintext format. It should touch as few servers as possible and come to rest on a surface that I control.

I am excited about all three of the capture methods I'm about to share with you. Three questions to whet your appetite:

1. What if you could freewrite with pen on paper and have the salient bits magically show up in my digital note corpus?
2. What if you could use your locked smartphone to type a note without ever being distracted by its contents?
3. What if you could dictate notes while walking, running, or riding a bike *without even requiring a smartphone*?

To motivate this, watch this quick summary of the scenarios above, and read on for some tech details for how it all works.

<iframe width="600" height="394" src="https://www.youtube-nocookie.com/embed/7B-42UeuIps?si=dNDpceiSLafEifhh&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<!--more-->

# Capture fragments from e-ink notebook

**Vision: Freewrite with pen on paper and have the salient bits magically show up in my digital note corpus.**

I've been using an e-ink writer called the Supernote Nomad for the last half year. It's light, portable, and almost feels like a reasonable replacement for paper. Additionally, the [Staedtler Digital pencil][pencil] feels nice in the hand and has a soft digital eraser which feels great. Most of my use is in meetings or at appointments where I want to be fully present.

Supernote has a cloud sync service with [unofficial but stable APIs][supernote-api]. Notes are saved in a proprietary but reverse-engineered `.note` file, see [unofficial python library][supernote-python]. Supernote's built-in on-device transcription does a good job transforming sketches of symbols into unicode characters. For example, a hand drawn rightward arrow is reliably transcribed into "→" and a square box is reliably transcribed as "☐". Relying on this, my conversion script scours the transcript for lines that begin with special characters. "→" is an indication that the following line should be captured in a note. "☐" indicates that what follows should be captured as a TODO item. These items are then saved in the daily inbox `YYYY-MM-DD.md` file along with a link to the note itself, which can be rendered by an [Obsidian plugin][supernote-plugin].

[supernote-api]: https://github.com/bwhitman/supernote-cloud-python
[supernote-python]: https://github.com/jya-dev/supernote-tool
[supernote-plugin]: https://github.com/philips/supernote-obsidian-plugin
[pencil]: https://www.staedtler.com/us/en/discover/noris-digital/

# Capture from phone

**Vision: Press a locked iPhone's action button and type a note without ever being distracted by your phone's contents.**

My Apple Shortcut [Type Note](https://www.icloud.com/shortcuts/a0046291c36e4ff9b1e9e508a50af1be) appends typed text to a `YYYY-MM-DD.md` file saved to a directory stored on iCloud Drive. This directory is then symlinked into my Obsidian vault. This works quite well in practice, with Obsidian Sync seeming to have no issues integrating this into the rest of the vault. Another Shortcut [Dictate Note][dictate-note], does the same thing but with voice input. A third shortcut I call "Magic Mode" runs when the iPhone's action button is pressed, and decides which of the two to call depending on context.

This works super well. I'm pleased that Apple has fixed longstanding issues with the "Ask for text" action in Shortcuts, which, when activated from a lock screen, used to dismiss far too quickly despite the user actively typing on the onscreen keyboard.

[dictate-note]: https://www.icloud.com/shortcuts/590b74fe358b42eaa919755a9783af34


# Dictation from watch

**Vision: Dictate notes while walking, running, or riding a bike *without requiring a smartphone*. You are *never cut off* and the result is a high quality, timestamped transcript.**

My current solution is to use my custom [Record Note](https://www.icloud.com/shortcuts/6668b84b335949cd8ad82c5f86cbea79) shortcut which records audio and saves it to an iCloud drive directory. An hourly script running on my trusty MacMini looks for new recordings and transcribes them with [whisper][]. This approach is more reliable than other alternatives I have experimented with. Here are some failure modes I am now avoiding:

- **Dictation failures**: sometimes using [Dictate Note][dictate-note] shortcut, dictation inexplicably fails, simply stating "dictation failed" with no ability to recover. This never happens with a recording.
- **Minute limit**: [Dictate Note][dictate-note] only works if the recording is under a minute. Beyond that, all transcription stops, and the result of dictation is an empty transcript.
- **Location failures**: [Dictate Note][dictate-note] does a location lookup. This often fails on the watch and is not critical for capturing the note itself. Record Note does not request location to increase reliability.
- **Built-in mic**: [Just Press Record][jpr] is a well known Apple Watch compatible app that provides a dead simple recorder UI. It even works fully offline! But it has one major flaw, which is that it uses the default microphone attached to the watch, with no ability to override. This is a major problem while running or biking, where wind noise in the AirPods is overwhelmingly loud and ruins the quality of the recording. Meanwhile, the Record Note shortcut always uses the built-in microphone whether or not the AirPods are attached, producing far cleaner transcripts.

Dictation failure is a catastrophic scenario. It's also awkward as hell since as it turns out, you were just a crazy person talking to yourself all along. Rather than dictating in real-time, it's totally fine to sacrifice latency in favor of reliability.

[whisper]: https://github.com/openai/whisper
[jpr]: https://www.openplanetsoftware.com/just-press-record/

---

As you have seen, I currently have three note inboxes which originate from various devices. Obsidian itself also has an inbox which I tend to use if I am note taking while at the computer. The result is at least four inboxes all of which need to be consolidated. I'll focus on this in the next post, as we'll dive into my Friday afternoon note detangling ritual. This has become something I really look forward to as the week winds down.

This post serves as a snapshot-in-time of my current daily note taking rituals as of September 2025. My current setup is highly customized to my specific needs, but in the spirit of working "with the garage door up", I thought it would be fun to share with you. Code available on request, email me.


Invention & Discovery Cards work complete
===
posted: Jan 24, 2025

I'm pleased to have completed transforming [Asimov's Chronology of Science and Discovery](/books/asimovs-chronology-of-science-and-discovery/) into a deck of Magic Cards. Over five years later, all 1477 entries from
Asimov's encyclopedia are now represented as illustrated cards on <https://invention.cards>. The
website is rendered based on [this master spreadsheet](https://docs.google.com/spreadsheets/d/1hDNXas7DzwglB95HV2_2u1utWAwBZR2hQHlMPz-fj5A/edit?gid=0#gid=0) which I compiled with the help of AI
and manually vetted. Since AI hallucinations can safely be ignored, and I am infallible, I declare victory!

<!--more-->

# Just kidding...

A project like this is never over, but I did make some revisions to <https://invention.cards> to celebrate
the data milestone.

- The site now has a title.
- The list of all cards is now fully scrollable.
- Rendering is capped to 100 cards to maintain performance.
- No limit to the depth of the ancestor or successor trees.
- Added random card button.

In 2019, when I [first cracked Asimov's encyclopedia](/books/asimovs-chronology-of-science-and-discovery/), I immediately wanted to turn it into a visual chronology:

> My goal is to ultimately generate a visual, Civilization-style technology tree for this whole book.

Mission accomplished, amirite? Permit me a quick walk down memory lane:

- 2020: My [initial visualization](/visual-chronology-science-discovery) was inspired by the then newly coined [Progress Studies](https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/).
- 2021 brought headwinds which stymied my progress studies. We now had two young children to raise and a pandemic to survive.
- 2022 brought tailwinds in the form of hawt new AI models. By early 2024 I posted an [illustrated revision](/visual-chronology-science-discovery-v2/) and extended the chronology to the year 1850. Data-wise, this was just the half-way point.
- 2024: I [used AI to accelerate the process](/invention-cards-ai/) and by the end of the year, I'd advanced up to 1945.
- 2025 brings us to today!

# That's funny...

> The most exciting phrase to hear in science, the one that heralds new discoveries, is not "Eureka!" but "That's funny..." - Isaac Asimov

Throughout the process of reading and summarizing, I kept an "Asimov surprise log", capturing the head scratchers that made me pause and say "That's funny...":

1. Specific surprising inventions and discoveries (e.g. Why is it that [Dendrochronology](https://invention.cards/dendrochronology) was only conceived of in 1920?)
2. Multiple inventions and discoveries (e.g. How is it that we made space-related discoveries before inventing [telescopes](https://invention.cards/telescope)?)
3. Groups of cards that tell a compelling story (e.g. Why did it take fifteen centuries to invent the practical steam engine after the [Greeks harnessed steam for motion](https://invention.cards/basic-steam-engine)?)
4. Broad patterns across inventions and discoveries (e.g. Which general purpose inventions unlocked the most compelling discoveries?)
5. Meta-observations about what the source material (e.g. Asimov's background in Chemistry and golden age sci-fi explains disproportional energy spend on biology, chemistry, and astronomy. In 2025, what are our collective blinders?)

Now that this project is in some sense complete, I hope to spend some energy elaborating on these and other
questions in the near future. Stay tuned!


Unintended Consequences of False Equity
===
posted: Oct 28, 2024

What if our pursuit of educational equity is perpetuating inequality? Just as a rising tide lifts all boats, true educational equity must lift all students, regardless of background or ability.

In a school setting, equity refers not to the equality of outcomes, but to the equality of opportunities for all students to succeed. In recent years, Seattle Public Schools (SPS) has prioritized supporting students furthest from educational justice (FFEJ), a laudable goal that aims to address historical inequities. However, this narrow focus has unintended consequences. While healthy adults may not need medicine, children — even the brightest — require external stimulation to reach their full academic potential. Here are three negative secondary effects of an overemphasis on FFEJ students.

<!--more-->

First is **reduced enrollment and funding to the district**. As high-end academics stagnate, displeased parents of capable children pull their children out of public school. This exodus is prominently displayed in Seattle, where a quarter of school-age children have now withdrawn from public school (up from one-sixth in 2022). Since Washington schools are funded per capita, less enrollment means less money funneling into the school district. From this purely self-interested financial perspective, neglecting capable students is like sawing off the branch you are sitting on.
Furthermore, prioritizing FFEJ students also leads to **less equity for highly capable students from poorer families**. Private school is not cheap, and homeschooling is a luxury that only some families can afford, with at least one parent no longer able to work full-time. Thus, many families dissatisfied with public academics will not have the luxury of leaving the system. With the richest opting out of the public system, there are also less donations flowing to the Parent Teacher Student Associations (PTSA). With fewer capable students in the system and fewer exemplars of excellence for other students to follow, we will see a stronger correlation between socioeconomic status and academics. As a result, highly capable students forced to remain in the public system have reduced upward mobility.

A related side effect of this policy is an **academic inversion in affluent neighborhoods**, whose public schools become worse than those in poorer neighborhoods. When an upper-class neighborhood predominantly enrolls its children in private schools, the public school in the area will stagnate and cater to a smaller audience on the outer rim of the catchment area. In Seattle, this effect is on display in Laurelhurst.

Quoting [Charlotte Howard](https://mediadirectory.economist.com/people/charlotte-howard/), The Economist’s executive editor:

> There’s a real opportunity for leaders to talk not about coddling specific subgroups, but passing broad policies to help Americans writ large, regardless of their particular group to advance.

What needs to happen is pretty simple: give each student what they need to thrive; actual equity. In SPS, this would mean bringing back programs for highly capable students. This does not need to be done in a separate school as in the recently terminated Highly Capable Cohort (HCC) program. But it should probably not be done in the same classrooms as the other students, with no additional resources for already overloaded teachers. Enriched and remedial classes within neighborhood schools are a tested and true solution to this problem. These new programs need measurable goals so that the district can begin [to be accountable](/notes/2024/seattle-public-schools-accountability-problem/) in their pursuits of high-end excellence.

In conclusion, our current educational system's emphasis on minimal standards directly impacts highly capable students and ultimately has an indirect negative impact on all students. It's time for Seattle and other progressive school districts to reclaim "equity", unlock the full potential of our children, and empower them to shape a brighter future for humanity.


Seattle Public Schools accountability problem
===
posted: Oct 12, 2024

Imagine if Microsoft's company guidance was that it would make $100 billion this quarter. The end of the quarter rolls along and as it turns out, they only made $10 billion. This surprising result would lead to a market selloff frenzy. Microsoft's stock would take such a beating that surely their board would demand their CEO's resignation for gross mismanagement.

In contrast, Seattle Public Schools (SPS) has missed their targets comparably. The school district has not been held accountable by the school board. In 2019, SPS declared their first [top-line goal](https://www.seattleschools.org/about/school-board/student-outcomes-focused-governance/) was as follows:

> The percentage of Black boys who achieve English Language Arts proficiency or higher on the 3rd grade Smarter Balanced Assessment will increase from 28% in June 2019, to 70% in June 2024.

June 2024 has come and gone, and this metric has moved from 28% to 32%. This is a mere 4% difference; a far cry from the 40% required to meet their self-determined goal. For this objectively terrible performance, the school board gave Mr. Jones a raise and lauded him for being “a strong leader for racial equity and educational justice.”

The situation is even worse than this comparison to big tech reveals. When Microsoft misses its goals, the victims are also the most capable of having righted the ship. Also, the damage is limited: the CEO and former employees will find new jobs, and shareholders will make better investments next time. In the case of a school district, the victims are innocent children who had no hand in the matter, and the impact on their life is profound. In short, our children's education is being undermined by shortsighted, unaccountable adults.

It's time for the school board to do their job and hold school district executives accountable for failing to meet expectations. It's time to set better, more realistic goals, and it's time to achieve them.

> "And I'm sorry, Mr. Jones... It's time" — Ben Folds


Nine Links for Fall 2023
===
posted: Jan 8, 2024

Here is a small selection of intriguing articles I read online over the last three months.

- [Political Analysis Needs More Witchcraft](https://www.theatlantic.com/international/archive/2023/10/magic-sorcery-politics/675836/) (*The Atlantic*) — Beliefs, true or false, rational or irrational, shape politics, and many people self-report a belief in witchcraft (1/6 in US, 2/3 of Latvia), and 85% globally believe in God. Academics and pundits tend to dismiss these views for being outlandish and this is a major blind spot.
- [Metrics, Cowardice, and Mistrust](https://nothinghuman.substack.com/p/metrics-cowardice-and-mistrust) (*Ivan Vendrov*) — Vendrov describes a feedback loop in which making the wrong call based on intuition, or delegating to someone who does the same can be a firing offense at a corporate job. The result of this cover-your-ass mentality is an over-reliance on metrics at the expense of velocity and good outcomes.
- [A Whole New Cope](https://studio.ribbonfarm.com/p/a-whole-new-cope) (*Venkatesh Rao*) — Most of us have negligible power to do anything about concerning events half way across the world, yet are deeply affected by them. Rao suggests this is because we interpret these events not in isolation but as signs and portents of our entire world beginning to come apart.
- [‘Ketman’ and Doublethink: What It Costs to Comply With Tyranny](https://aeon.co/ideas/ketman-and-doublethink-what-it-costs-to-comply-with-tyranny) (*Jacob Mikanowski*) — Contra Arendt, who believed that the subjects produced by totalitarianism no longer distinguish between fact and fiction, Miłosz argued that they practiced what he called Ketman, first mastering deception, then practicing it competitively, valuing cunning over all else, and finally losing the ability to "differentiate his true self from the self he simulates".
- [Employees Risk More](https://medium.com/@ben_mathes/employees-risk-more-8b757f6bbf0a) (*Ben Mathes*) — VCs invest money into a portfolio of bets, while the startup employee invests all of their time into one risky bet. Investors can raise more money, but employees can't raise more time, so if you're looking to join a startup, do your homework!
- [The Wolf](https://randsinrepose.com/archives/the-wolf/) (*Rands*) — Describes an engineer archetype who works outside well-defined processes and is unburdened by the "encumbering necessities of a group of people building at scale". As a result, he is incredibly effective and appears to suffer no consequences for not following the rules.
- [Old Wards and New Against Fake Humans](https://interconnected.org/home/2023/09/22/wards) (*Interconnected*) — Practical advice for detecting a fake human on the internet: challenge him to say something obscene. On a video call? Have your interlocutor turn sideways and show you her ears, and watch for visual glitches. It's "like shaking hands from the old days, demonstrating that I’m not about to draw my sword."
- [Becoming a magician](https://autotranslucence.com/2018/03/30/becoming-a-magician/) (*Autotranslucence*) — Have you reached a plateau? Is your well-worn strategy bringing you diminishing returns? Pause and consider who you want to be next. What are the fears that hold you back? Who are you really impressed by? Surround yourself with those people that look like magicians to you, learn from them, articulate your new goal and find a new strategy to get there.
- [A Tool to Supercharge Your Imagination](https://www.theatlantic.com/technology/archive/2023/10/ai-image-generation-human-creativity-imagination/675840/) (*Ian Bogost*) — In an uncharacteristically optimistic article, Bogost lauds modern image generation models for their ability to quickly "shape unfiltered thoughts" and give them "shape outside your mind", but ignores the downsides. It's a bit like reading a book and then watching the movie: all of the fuzzy but vivid mental imagery in your mind's eye collapses into the images on the screen. Gandalf will never again be an abstract wizard, only the one depicted by Ian McKellen.

Happy New Year to you all!