---
name: prepublish
description: Suggest where to share a new smus.com post to get real feedback. Use when the user says "publish", "deploy", "ship this post", "where should I post this", or is about to run deploy.sh after writing a post, note, or book review.
---

# Prepublish: pick venues for feedback

The goal of sharing a post is actual feedback (replies, disagreement, questions), not reach. Likes from followers on Bluesky/Mastodon/Twitter rarely turn into discussion. Topic communities do.

## Steps

1. **Find the new content.** Look at uncommitted and recently committed changes under `content/` (`git status`, `git log -5 --stat`). New posts live in `content/posts/<year>/<slug>/index.md`. Notes and book reviews are entries in the multi-entry files `content/notes-current.md` and `content/books-current.md` (title, `===`, YAML front matter, blank line, body). Read the post in full.

2. **Suggest, concisely:**
   - **Where (1–2 venues):** specific communities whose members care about the topic: named subreddits, Hacker News, Lobsters, niche forums, Discords. Favor small, on-topic communities over big general ones. If you're unsure a venue fits, say so instead of guessing confidently. Note when a subreddit is known to be strict about self-promotion.
   - **Framing:** a title and opener for that venue, written as a question or "here's what I tried" rather than an ad for the blog. Put the substance in the post itself rather than only a link.
   - **The ask:** the one specific question the post should end with, or that the share should lead with. Suggest adding it to the post if it's missing.
   - **Who:** 1–2 specific people worth emailing directly (people cited or reviewed, or people known to work on the topic) when obvious; skip if not.
   - **Social posts:** one Bluesky/Mastodon blurb that leads with the post's most arguable claim, not "new post: <title>".

3. **Do not post anywhere or run `deploy.sh` yourself** unless the user explicitly asks.

## After a discussion happens

When the user shares a discussion link, add it to the entry's front matter. `template/discussion.html` renders a "Discussed on …" line only when this list exists:

```yaml
discussion:
  - https://www.reddit.com/r/Supernote/comments/...
```

## What has worked before

- r/Supernote: supernote-cli and the e-ink handwriting VLM note both got good threads.
- r/historyteachers: the Invention Cards tech tree.
- Hacker News worked in 2011–13 for practical web-dev posts (Backbone vs Ember: 40 comments). Recent submissions there have drawn little.
- Bluesky/Mastodon: mostly likes. Occasional good threads (Telejam, The Dispossessed).
- Practical build/tool posts get discussion more easily than reflective essays and book reviews. For those, emailing a few people or one small matching community fits better.
