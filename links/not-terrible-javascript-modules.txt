Not Terrible JavaScript Modules
===============================
posted: 2013-07-24
link: https://github.com/substack/node-browserify

[Browserify](https://github.com/substack/node-browserify) lets you use node-style module definitions for JavaScript running in the browser. I tried it for a previous project, but at the time it required a node web server to use it.

Looking again for a sane module and dependency solution for one of my current projects, I've found that browserify can now be invoked from the command line:

    browserify main.js -o bundle.js

With just a few exports and inline dependency requirements, you get modules for JavaScript with reasonable syntax (unlike [AMD](http://addyosmani.com/writing-modular-js/)).

[This blog post](http://engineering.yp.com/post/browserify) gives a pretty good idea of how to create modules and require them. I'll be using it for my next web project.
