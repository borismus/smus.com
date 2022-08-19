AI note garden: Dreamer, note collider
===
posted: August 19, 2022

The process of interconnection is critical for creativity and divergent thought in general. Synthesis is how many new insights are generated. We humans have a knack for doing this, even in bed. Sleep intelligently interconnects newly gleaned information with prior memories. [Matt Walker](https://www.goodreads.com/book/show/34466963-why-we-sleep) describes this as “a form of informational alchemy”. A study he cites has shown that discovering a hidden pattern in a problem set is thrice more likely during sleep.

In this post, I describe my early attempt use GPT-3 to emulate this nightly synthesis. A python script takes two randomly selected notes from my note corpus, and tries to divine a connection between them. The results are often nonsensical and surreal, and sometimes funny.

<!--more-->

# How can an AI dreamer synthesize new connections?

Let's take two random notes and see if the collective wisdom contained within a large language model can generate something interesting based on the text content of each. Picking two notes at random is easy enough, but the two need to be combined somehow to ultimately create a string of input for GPT-3.

The simplest imaginable thing of concatenating the two random notes together and seeing what GPT-3 spits out is a non-starter for several reasons. Firstly, GPT-3 is constrained in its input length. Secondly, GPT-3 is pretty susceptible to the order in which these prompts are presented. Since it generates a string to continue the provided text, the closer a word is to the end of the input, the more weight it is effectively given.


## Multiple doses of GPT-3

We have a note corpus, and [the power of summarization](/ai-note-garden-summarizer). Broadly speaking, each note consists of the following:

- Name (`note.name`)
- Note body (`note.body`)
- First paragraph of the note body (`shortbody`)
- Summary (`summary`)
- Summarized summary (`sumsum`)

The goal is to build a prompt string that encourages GPT-3 to synthesize something interesting related to both notes, ideally written in a writing style that mimics the originals.

Here's the best I've come up with so far (prompt engineers, please @-me):

 ```
 f'''{note1.name}: {shortbody1}
 {note2.name}: {shortbody2}
 In summary: {sumsum2} and {sumsum1}.
 The connection between "{note1.name}" and "{note2.name}" is the following.'''
 ```

This python f-string contains excerpts of my own writing (`shortbody`), the summarized summary (`sumsum`), as well as both note names at the very end, to remind GPT-3 what we are after as explicitly as possible. I try to mix up the order so as to not bias too much towards one of the two notes.

By having the verbatim text of the original notes, I gently nudge GPT-3 to produce output in a similar style.

One parameter of these LLMs is called temperature, which is a proxy for how wild the output should be. I've cranked it up to close to its maximum value for more spicy results.


# Results from living with AI note collider

Dreamer is now part of my [System for Thought](/file-systems-for-thought/) suite, running nightly alongside [other]() [AI gardeners](). It's been operational since late 2021, so I have had about a hundred examples of its output to casually peruse.

Just seeing two random notes from the garden can a good nudge to remove a note that was temporary, spark a new connection, or create a new note. Sometimes it's fascinating to revisit an old shower thought that I'd long forgotten about.

Dreamer's results are usually nonsensical, but sometimes surprisingly funny and surreal. Here are some of [my favorites](https://photos.app.goo.gl/oRTnemu2EiwMewm1A):

<table>
	<thead>
		<tr>
      <td>Index</td>
			<td>Note 1</td>
			<td>Note 2</td>
			<td>Collision excerpt</td>
		</tr>
	</thead>
	<tr>
		<td>1</td>
		<td>Ikea shopping list</td>
		<td>Political debates in VR</td>
		<td>"IKEA", in Norway, is known as the "Freedom Store", because of the store's role during the German occupation of Norway in World War II, who hid people in a secret room in the ceiling.</td>
	</tr>
	<tr>
		<td>2</td>
		<td>Carolingian miniscule</td>
		<td>Canada debate aphorisms</td>
		<td>In the beginning, there was no spaces between words. Then, people started to want more space between words. Canada debated tax-increases on the rich. NDP said, "FUCK THE RICH!" The Liberals wanted more social services. Conservatives wanted a balanced budget. People wanted a tighter pussy. People changed their mind.</td>
	</tr>
	<tr>
		<td>3</td>
		<td>Whitman kitchen paint</td>
		<td>Notes from mentoring session</td>
		<td>It feels so clear that I will even share it: Cooking is a merging of UX and engineering that results in an edible meal. Which is well written amounts to an edible book.</td>
	</tr>
	<tr>
		<td>4</td>
		<td>Canadians entering US by land</td>
		<td>Steveston's Fraser River estuary and current flow</td>
		<td>Officer says "Good That's more interesting than the usual vacation." Note: Canada has quite a few kind of kayaks to rent. Large types used for the interior of huge lakes. Also the kind used for the Sea used for day touring</td>
	</tr>
</table>

1. IKEA is Swedish not Norwegian. It was founded in 1943, so had no significant role to play in WWII. As far as I can tell, is not known as the "Freedom Store" in any way whatsoever. But I loved the visual of hiding people in a secret room in the ceiling.
2. Good trajectory, first taking a bit from Carolingian miniscule, then advancing to Canadian politics. But then things take an unexpected turn for the worse. That escalated quickly!
3. I liked that cooking was poetically described as a mix of UX and engineering that resulted in an "edible meal". Edible meals are my favorite kind. The "edible book" gave me pause, and made me question the AI's taste.
4. I enjoyed the border guard's description of Canada's broad variety of kayaks available for the day touring!

# Failure modes and ideas for improvement
Most of Dreamer's results are bad in a variety of ways. Here are a few of them:

1. **Errors accrue**: My current approach relies on running GPT-3 several times for summarization. Each of these invocations blurs the idea a little bit, and then a little bit more. The resulting soup is then blurred again at collision time. If I was more diligent about [[Bottom Line Up Front (BLUF) note taking style]] in my note corpus, summarization might not be necessary to fit within the token limits.
2. **One of the notes is ignored**: Despite my efforts, GPT-3 still often overindexes on one of the notes and completely ignores the other.
3. **False information**: There is no attempt at grounding output in truth. Generated results often include alternative facts, to put it mildly.
4. **The notes are truly unrelated**: This happens quite often, since my notes are written on a broad variety of topics in a variety of styles. Some are Evergreen notes, others are lists of quotes, others indices that link a certain topic together. Others are notes about my day-to-day life, dream logs, etc.

One March night, Dreamer attempted to combine my aspirational lifestyle notes on building a camper van with historical research notes about the "high medieval power shift from lords to peasants and kings". This resulted in the following:

> One weekend when we’re all together in Idaho, we're going drive Nic’s Audi A4 FSi Quattro to Guernsey together and find avocados on an island called Herm. That’s southern France. It’s on the English Channel. Also where I started! Overall happy with the car and the weekend. Felt good to run an out of town car in the snow, and liked the road.

Drivel? Yes, let me count the ways:

- You can't drive to an island.
- The English Channel is not near southern France.
- Herm is not a very good place to find avocados.

But this example is still illustrative because you can see how GPT-3 incorporated bits of both notes. A car is close enough to a camper van. Lords and kings and peasants sound like they are vaguely related to the Norman conquest, hence the English Channel, Herm, and France.

Finding a meaningful connection in the above example is pretty difficult, even for human intelligence. Is it really fair to blame an AI for failing at this task?

It often takes an oneirocritic to extract insight out of a cryptic dream. Cormac McCarthy [writes eloquently](https://nautil.us/the-kekul-problem-6082/) about this subject. If we consider [LLMs as a muse](https://read.fluxcollective.org/p/64), perhaps this cryptic output is good enough?