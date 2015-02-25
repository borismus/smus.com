About this site
===============

This site is statically generated with [Lightning][lightning], a
blogging engine I wrote. The basic idea is that I write all of my
content like this:

    About this site
    ===============

    This site is statically generated with [Lightning][lightning]

Then a script converts it into the HTML/CSS that you are reading now.

There are many such projects, (eg. [Hyde][hyde],
[Octopress][octopress]). This approach provides clear advantages over a
traditional database-based blog:

- Use any editor you like.
- Use Markdown for structured text.
- No worries about database management and security.

## Lightning

I wrote Lightning to scratch some specific itches (which may or may not
have been addressed in other similar projects by the time you read
this):

- Incremental builds (only rebuild what changed).
- Quick deployment.
- Logical placement of content-specific assets (in same dir as
  content).
- Decouple content structure from output structure.
- Minimalist metadata header.
- Output that doesn't require htaccess, rewrite rules and other HTTPD
  specific setup.

An early version of [Lightning is available on github][lightning].

[octopress]: http://octopress.org/
[hyde]: http://ringce.com/hyde
[lightning]: https://github.com/borismus/lightning
