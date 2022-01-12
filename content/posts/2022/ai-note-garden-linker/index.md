AI note garden: link suggestions
===

# Ideas and connections

Ideas are naturally interlinked. Ideas build on one another, like stepping stones
in the [[Adjacent Possible]]. It's no accident that curriculums are so common in
education. Concepts build on one another like a dependency graph. Learning is a
sort of personal discovery. You can only learn something if you are ready for it.
It must be in your [[Zone of Proximate Development]].

Our brains reflect this interlinked nature of knowledge, with billions of neurons
and trillions of connections between them creating some representation of the
world around us.

When we sleep, automatic processes in the brain tend to these connections,
creating the new, cementing the time tested, and removing the obsolete.


# Networked notes

A collection of notes can be seen as a mirror of your thoughts. Obsidian
emphasizes interlinking, and places a lot of weight on the note graph, a mind
map-like view of the whole note garden which is decidedly brain-like. This is
emphasized in Roam's marketing as a "note taking tool for **networked** thought".

While this modern crop of note taking tools makes links and backlinks easier,
it's still a pain to interlink notes, to figure out what related notes you might
have written in the past.

What is the note garden equivalent of sleep, during which the brain's
subconscious processes take stock of new information gleaned during the day?
What might be a useful automation here?


# Finding connections automatically

My note corpus is large and old. Inevitably, I repeat myself. If you take
a lot of notes, I bet you've had a feeling of deja-vu as
well, as you realize that you've been parroting something you already wrote
months or perhaps years ago.

The simplest remedy to this problem might be to scour the note garden, looking
for text that appears redundant, and inspired by the sleeping brain, take some action.
You might reword the redundant note, link it to something relevant, refactor
multiple notes to make more sense together, or remove it altogether.

Redundancies aren't all bad! Notes need enough context to stand on their own,
and topics that are actually interconnected can't help but overlap somewhat.
The goal here is not terseness, but cohesion and legibility — if a note is
related to other notes, let's cement it with an explicit link.

Now, how might we determine if two notes are related?


## Sidebar: semantic similarity

In general, the approach is to convert sentences into vectors in a relatively
low-dimensional space, and then compare the vectors for similarity. For example,
[word2vec](https://en.wikipedia.org/wiki/Word2vec) takes each word in a sentence
and represents it as an array of numbers. This array is called an embedding
because it's embedded in a lower dimensional vector space. More modern semantic
similarity models take a whole sentence of variable length and create an
embedding for that. Given two embeddings, we can apply a similarity measure,
often cosine similarity, and calculate a similarity score between any two
strings of text. We can also do this at scale, given N strings calculate an NxN
matrix of similarities which might look like this:

TODO: Similarity matrix


# Semantic similarity in my note garden

I wrote a python script to find related notes in my note garden. Here's how it
works:

1. Load all notes
2. Split each note into paragraphs
3. Calculate embeddings for all paragraphs using [USE](https://tfhub.dev/google/universal-sentence-encoder-large/5),
   keeping track of the source note.
4. Calculate the correlation matrix for all paragraphs using cosine similarity
5. Calculate a similarity score for each note pair using the above matrix
6. Sort note pairs by most similar, providing paragraph pairs as evidence

Now we have a list of the most similar notes in the garden, their associated
similarity score, and evidence of the notes' similarity in the form of paragraph
pairs.

We just forgot one thing: notes that are already interlinked should not show up
in this list of similar notes. We can easily remove them by considering the
graph structure of the note garden. An adjacency matrix gives O(1) lookup.
In practice, going on step further and ignoring note pairs that are a minimum
distance of 2 away has worked better on my note corpus. To help with this,
I hired the [Floyd–Warshall algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
and its friendly [scipy implementation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.sparse.csgraph.floyd_warshall.html).

I currently run similarity nightly across the whole note garden, generating a
meta note `Similar notes.md` which lists the most similar notes across the board.
There is some mathematical beauty to
the fact that the whole note garden serves as input to this process, and the
result it of is another note. Having notes that grow up overnight without my
action makes the note garden feel alive and garden-like.

That said, having an AI make arbitrary modifications to my hand written notes
sounds like a real nightmare, so I have by convention decided to keep all AI-
produced rubbish in the `Nightly/` directory.


# Living with the note garden linker

I've lived with this sort of thing for the last month, so have some sense for
whether or not the resulting output is useful. One observation is that my note
garden grows slowly, and most notes are relatively static. The first time I ran
the similarity script, I found a lot of surprising and actionable output. There
are still occasional surprises, especially after a prolific note taking session,
but running over the whole corpus nightly is probably overkill.

Going through the generated list of similar notes, I tend to
take one of the following actions:

- One of the notes supercedes the other ➡️ merge any useful bits from the deprecated note and remove it
- Both notes point to the same concept ➡️ refactor the concept into a separate note and link to it from both
- Both notes are highly related but not explicitly linked ➡️ create a link from one note to the other

One thing I found surprising was just how similar my writing is TODO

# Future improvements

The USE semantic similarity model I currently use is somewhat limited. It doesn't
perform well on non-latin character sets. According to it, anything with cyrillic
characters is extremely semantically similar. Relatedly, it doesn't perform well
on non-words. Snippets of code, guitar tabs, and ASCII art are all the same.
Lastly, USE is already 4+ years old. The field is progressing so quickly, I
should be using better embeddings. I recently got access to OpenAI's beta
embedding feature, which would be a logical next step. But running OpenAI embeddings on
tens of thousands of paragraphs sounds like an expensive proposition...