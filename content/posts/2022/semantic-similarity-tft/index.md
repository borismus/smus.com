Semantic Similarity as a Tool for Thought
===
posted: Sep 22, 2022
type: draft

At the start of the year, I setup a nightly script that scoured my notes and

> If I had time, I'd build an Obsidian plugin version of what I've built.


# Outline

- I have an offline "similar notes" script running since the start of the year.
- At the end of the post, I lamented:

> If I had time, I'd build an Obsidian plugin version of what I've built as a shell script.

- Nobody volunteered to build it for me, so I decided to do it myself.
- The way it works is simple: highlight a passage in your notes and get back a
  list of semantically related notes, ranked by similarity.
- Deep-link into each.

    Video of the experience, on my public notes.

- How it works
  - Nightly, calculate embeddings for every paragraph in the note corpus, along
    the lines of the linker.
  - 
- Alternatives I attempted
  - Other ways of invoking semantic similarity
    - I was going for a completely hands off auto-suggest that would
      populate the sidebar as you type. Unfortunately calculating embeddings takes
      ~1s and interferes with the main thread
  - Indexing within the plugin
    - 
