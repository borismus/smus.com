Semantic Similarity for Note Taking
===
posted: Oct 13, 2022

Days after capturing a "new" insight, it can be humbling to realize that you are
repeating yourself. This might not be a bad thing, as you mull over a complex
idea in its various forms over the course of many weeks. But what if your note
taking app could act as a co-pilot? It could surface similar notes that are
relevant to your current writing, and if you use such a system for long enough,
help you synthesize across your own thinking over many years. You might want to
link to the semantically related note, or to merge with it entirely. Building on
[a previous technique](/ai-note-garden-linker), I implemented this as an
Obsidian plugin:

<iframe width="560" height="360" src="https://www.youtube.com/embed/kZkDCjr8ZqU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!--more-->

I'm pleased with the result. It's nice to feel like my note taking software is
actively trying to help me reconnect with past selves. Whether this ultimately
proves to be useful remains to be seen, but it works well enough that I plan to
run this as a self-experiment over the next few months.

My [first stab](/ai-note-garden-linker) at this problem generated a list of
related notes across the whole corpus using semantic similarity. But my
implementation had two fundamental limitations:

1. **Time**: My script ran at night, so that there was long delay between
   repeating myself and learning about this fact.
2. **Space**: It generated a list of similar notes in a separate text file which
   I would rarely consult.

By building this as an Obsidian plugin, I addressed both fundamental problems in
the time and the space continuum!

1. The current paragraph is continuously fed into a semantic similarity model,
   so that movement of the cursor or textual edits trigger updates in
   real-time.
2. Similar excerpts are presented in a dedicated sidebar, allowing you to
   see related notes and excerpts right away.


# How is this implemented?

The current implementation has two parts:

1. **Indexer** is a script that runs nightly, generating per-paragraph
  embeddings for each note in the corpus. These embeddings and other metadata
  are then saved as JSON.
2. **Obsidian plugin** generates embeddings for any text within Obsidian, and
   then compares the result to the pre-generated embeddings.

Both plugins use exactly the same embedding model to guarantee that the
embedding mappings are identical. The one running inside Obsidian must use
JavaScript, and I've already been using [Universal Sentence Encoder
lite](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
for [other projects](https://github.com/google-research/usnea). For simplicity
and to guarantee identical outputs, I built the indexer using the same exact
model, running in node.js using tfjs-node. My previous python implementation of
this used a [slightly larger model of
USE](https://tfhub.dev/google/universal-sentence-encoder-large/).

The plugin works as follows:

1. Find the currently active text: if there's an active editor, find the
   paragraph at the current cursor position. If there's a selection, use the
   selected text.
2. Extract its semantic similarity embedding, which in the case of USE is a
   512-dimensional vector.
3. Compare its embedding to the rest of the embeddings for every other excerpt
   in the corpus, which is saved as an Nx512 matrix. Comparison here is a matrix
   multiplication, the result of which is a vector of scores corresponding to
   the similarity of the source excerpt with each of the N excerpt.
4. Find the top K scores and their corresponding excerpt.
5. Display the resulting notes and excerpts.

# Running this in a web worker

Doing the above steps takes time. On my laptop it takes a second to generate
embeddings, and another half second to do the multiplication and ranking. This
will of course vary depending on your hardware and note corpus size. But even in
my relatively favorable conditions, the resulting latency of a couple seconds is
far too long to be doing this kind of work on the UI thread, which is the
default behavior of tf.js in the Electron environment of the Obsidian plugin. I
sought and found a workaround, which is to run [tf.js in a web
worker](https://erdem.pl/2020/02/making-tensorflow-js-work-faster-with-web-workers),
in CPU mode. This slows execution by about 50%, but is totally worth it to make
the plugin usable in real life.

# Toward standalone indexing

I'd love for the plugin to run standalone without the need for a separate
indexer. This would allow others to use it far more easily without requiring
them to setup a whole indexing [system](/file-systems-for-thought/).

Implementing indexing within the plugin, I ran into memory issues computing
embeddings for my whole corpus. I haven't yet found the time to dig in to why
this was not a problem for the tfjs-node implementation of the indexer.

Before I seek workarounds, I want to live with the experience first. Is the
plugin useful for navigating my note corpus? Do the excerpts it surfaces make
sense as I'm writing a new note? Is the constantly changing semantic sidebar too
distracting? Let's find out; ƒor science!