Reusable JavaScript for MVC frameworks
======================================
posted: 2012-11-06

These days, I write a lot more code, and my projects have increased in
complexity. Often, a single application brings many kinds of data
sources and bleeding edge web features together. On the other hand, most
of what I build are prototypes, which need to be churned out quickly,
work reliably in demos, and look/feel good.

MVC frameworks help write UI code much more quickly, but there are
drawbacks too: there are too many to choose from, they don't
interoperate with one another, and if you want to release parts of your
code to the open source community, only those developers that use the
same framework will benefit. The solution is to create a clear
separation between core application logic and MVC UI code. This way you
can reuse a lot of code and reduce switching costs.

<!--more-->

Before jumping in, here's a diagram of the approach:

![diagram](mvc-js-layers.svg)

The rest of the post is about interop problems with JS MVC frameworks,
and a closer look reasons for taking the above approach.

## MVC frameworks are great

One of my key requirements is to be able to build user interfaces
**quickly**. This means that writing in pure JavaScript is out of the
question, because it simply doesn't provide a high enough layer of
abstraction for highly interactive user interfaces, and reduces to
spaghetti code in just a couple of days. Instead of raw JS, use an model
view controller (MVC) framework.

My current weapon of choice is [Ember.js][ember], mostly because it
makes many decisions that I agree with, providing easy two-way binding,
a sane templating syntax, observers and computed properties. All-in-all,
it is pretty effective for whipping up consistent UIs quickly.

But there are problems with buying into an MVC framework.

[ember]: http://emberjs.com/

## JS libraries are like insects

JavaScript frameworks are like insects. There are thousands of them,
they move very quickly, and generally have very short life spans.

If you've ever taken a hiatus from client-side web development, you were
probably overwhelmed with the amount of new stuff available when you
returned. The flipside is that many of the frameworks you were familiar
with could have easily disappeared. To be fair, some winners have
emerged in the past, most notably in the utility frameworks, where
jQuery has risen to the top, and Prototype has fallen to obscurity. In
MVC frameworks, however, there are many interesting contenders and, as I
wrote earlier, still [no clear winner][backbone-vs-ember].

So at this stage, going all-in in on a framework may be a bad idea,
because what if the community moves on to something else? What if the
framework developers get bored, stop caring or cease maintenance for
some other reasons? I have this feeling all the time, despite framework
authors promises to the contrary. And this is the case even though I
build mostly prototypes with relatively short life spans.

[backbone-vs-ember]: http://smus.com/backbone-and-ember/

## Switching cost between MVC frameworks is high

Once you bite the bullet and decide to invest in a framework, you often
have no easy way to move your code out of it. If you pick Backbone, but
decide mid-cycle that it's not for you, you are in for a world of hurt:

Not only do your Models and Views not share the same base classes, they
don't even use the same **class system**. Backbone and Ember provide
their own class systems that are not compatible. This is a ridiculous
problem to have, and one unique to JavaScript, which provides a
prototypal inheritance system which is so inconvenient, there are about
[a million libraries][js-class] that add OO-style classes to the
language.

1. Those who use or invent a custom class system in JavaScript that
   looks more like traditional OO.
2. Those who don't believe in classes, or think that JavaScript provides
   enough through prototypal inheritance.

For the reasons outlined above, I'm very much in favor of the former
option: having a language-level class abstraction. This seems to be
[coming soon in ECMAScript 6][real-classes], and will basically provide
syntactic sugar on top of prototypal inheritance. Having a consistent
class and module system is one of the main reasons why languages like
[Dart][dart], [TypeScript][ts] and [Coffeescript][cs] are increasingly
appealing to me.

[js-class]: http://goo.gl/hqAHD
[real-classes]: http://h3manth.com/content/classes-javascript-es6
[dart]: http://www.dartlang.org/
[ts]: http://www.typescriptlang.org/
[cs]: http://coffeescript.org/

## Coding to a framework restricts your audience

Because of a lack of interoperability between frameworks and their class
systems, if you write non-UI code using a framework, only users of that
framework will use your code. It's very unlikely that someone building
an Ember application will want to use your library that uses Backbone
objects. 

Often your collaborators may have varied tastes and prefer one framework
over another, but including multiple MVC frameworks in the same
application gets messy quickly. If you have core functionality that you
want to release, release it in pure JavaScript, not as a jQuery plugin,
or Ember module. Of course use prototypal inheritance and proper
abstraction (or at least, as proper as JS can provide).

## Solution: defensive architecture

To avoid framework and class-system lock-in, I have taken a slightly
different approach to developing with JavaScript MVC frameworks. It
affords the convenience of building a UI with MVC, but keeps the core
of the application flexible.

The basic idea is to separate the core functionality of the application
from the user interface into two separate layers. With this separation,
you can implement the two layers differently:

1. Build the base layer using pure JavaScript prototypal inheritance.
   This is the part you write with the intention of keeping for later.
   This base layer will need an API that you will want to spend a bit of
   time honing.  To make the separation crystal clear, you can think of the
   UI as a client that uses this API as if it were on the server. This way
   you can avoid creating leaky abstractions.

2. Use an MVC framework to implement the UI, and call into the base
   layer directly. This lets you move quickly and focus entirely on writing
   the user interface. This architecture lets you build your UI on a solid
   foundation and avoid getting stuck.

## Benefits of this approach

You get many benefits by taking this approach:

1. If you want to scrap your existing UI and write a new one very
   quickly, you can easily do this and still reuse large chunks of your
   logic.

2. Clear layer separation leads to more maintainable code.

3. Easy to ship the underlying core functionality as a library or
   standalone module.

4. Easy to write unit tests for the core functionality of the
   application. Unit tests aren't well suited to user interface code
   anyway.

## This is why we can't have nice things

The lack of a widely used class system is ridiculous. The sheer number
of different JS class systems is a clear signal that this is a big
omission in the language. Similarly for MVC frameworks. A renewed
interest in JavaScript MVC shows that the web platform needs something
built-in to address this problem.

All other widely used programming languages provide a consistent class
system, and popular platforms provide a framework for separating
application logic and user interface. Until these things come to the
web, I'll continue to have second thoughts about embracing any
particular MVC framework or custom class system.
