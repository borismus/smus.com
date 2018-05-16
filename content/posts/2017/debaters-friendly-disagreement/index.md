Debaters: friendly disagreement
===============================
posted: 2017-03-05

> We have a choice. We have two options as human beings. We have a choice
> between conversation and violence. That's it. 
>
> – Sam Harris

As technological progress plows forward, human nature is unchanged. We each look
at the world through our own lens. In a previous post, I found that [translating
a query between English and Russian greatly determines search results][bread].
In the same way that language matters, so do religious views, culture, political
leanings, and much more. Here's a recent example highlighting a news
source-based lens on the same topic (Nancy Pelosi and Russia):

![Nancy pelosi russia on nytimes vs. breitbart](pelosi.png)

Humanity has always been divided, and in hindsight, the unifying promise of the
internet was a techno-utopian dream. By shrinking the world into a "global
village" (famously coined by communication theorist [Marshall McLuhan][mcluhan])
we have balkanized into increasingly specialized sub-cultures and increased
cross-cultural conflicts. More recently, personalized search results, curated
social network feeds only serve to deepen the divide.

[Debaters][debaters] is a new side project which aims to bring you and someone
with an opposing view into a private, friendly, anonymous conversation. It's
still in development, but I want to share it with you both as a milestone and
to get early feedback.

[bread]: /hot-bread-delicious-deadly/
[mcluhan]: http://www.marshallmcluhan.com/biography/
[debaters]: https://catma-847d6.firebaseapp.com/topics

<!--more-->

## The problem

We are social animals. Rather than starting with a blank slate and using our
brilliant brains to arrive at independent conclusions, we prefer to jump to
our conclusions first through social means, and then rationalize why we are
right. Once we *know* the answer, it's unlikely that we will change our minds.
Because of my-side bias (aka confirmation bias), arguments in favor will stick,
while arguments against will be easily swatted. Entrenched in our socially
defined beliefs, our social circles and personalized information sources quell
potential for dissent, while strengthening our worldview. On a macro scale, this
leads to a polarized society. We can tolerate anything [but the outgroup][ssc].

In light of the above, we are unlikely change our minds. But if you are one of
those rare people that are open to changing their mind, you may have read
articles like [this one][yudkowsky]. However, it's far easier to be understand
the theory of mind changing than it is to actually change your mind on a
specific issue. Many public intellectuals are actively involved in conversations
that test their limits, but normal folks like you and me don't often get the
chance.

I've only attended one [conservative meetup][meetup]. I chose not to reveal my
identity as a crooked centrist, feeling that this would impede further
conversation. I think a similar thing happens in many cities: there must be
Trump supporters (dozens of them?) among us, but they seem to keep a low
profile. Sad!

The way we get better at anything is through practice, which in this case means
to actively test ourselves on new ideas and with new people. Projects like
[Living Room Conversations (LRC)][lrc] in the real world, or [Change My View
(CMV)][cmv] online try to create an environment that enables conversations where
we can practice actual open mindedness.

[ssc]: https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/
[lrc]: http://www.livingroomconversations.org/
[cmv]: https://www.reddit.com/r/changemyview/
[meetup]: https://www.meetup.com/Bay-Area-Conservatives/

## Some problems with existing mind changing tools

[LRC][lrc] requires getting a group of people together physically, and have a
structured conversation about a controversial topic. This is difficult to do
since you must find a group of friendly but disagreeing people in-person. I'd
love to try it, but haven't been able to find a more right-leaning
co-facilitator yet. It is also a social risk, since you are likely pulling in
people from your social circle. Presumably you have briefed them on the plan and
they have consented, but conversations may still escalate and feelings can
easily be hurt. In addition, the prospect of a serious, structured conversation
with close friends sounds quite awkward to me.

Online, [CMV][cmv] is great but has its own problems, despite the efforts of
well meaning and intelligent moderators. Some users that start threads seem to
use CMV as a way of pressure testing their own view. They get all of the counter
arguments, learn how to counter them, and get even better at rationalizing away
any future doubts. Some respondents may make arguments whether or not they
actually think that way just for the sake of deltas. As a subreddit, CMV
users tend to fall into Reddit's skewed demographics. This means less potential
for viewpoint diversity. Lastly, CMV is public and not truly anonymous. This
encourages people to be clever rather than honest, although there is no shortage
of [subreddits][donald] whose members prefer honesty over cleverness.

[donald]: https://www.reddit.com/r/The_Donald/
[yudkowsky]: https://wiki.lesswrong.com/wiki/How_To_Actually_Change_Your_Mind


## What is Debaters?

So, to address some of the shortcomings of existing approaches like CMV and LRC,
I've been working on a side project provisionally called [Debaters][debaters].

> Debaters enables one-on-one conversations on a controversial topic, with
> someone of the opposing view. You may not be convinced by their arguments,
> but your conversation may lead to a better understanding on both sides.
> Interaction with someone with a different viewpoint will lead to reduced
> animosity toward their whole group.

![Screenshots of Debaters](debaters.png)

I took a bit of time off recently and got carried away on the implementation,
with [Antonio's help][antonio] on the UX front, and now it's live on
<https://catma-847d6.firebaseapp.com/topics>. If you visit, you will be
presented with a list of issues and asked to opine on each. After you provide
your opinion you are matched to someone with the opposite view, then you engage
in a conversation about the issue.

Let me address one common question up-front: trolling. I do not think trolling
is much of an issue for Debaters. Trolls want to make an impact. In other words,
they want to either reach a lot of people, or affect some people in a
significant way. In a 1:1 conversation, their reach is limited. In an anonymous
context, the amount of personal harm a troll can inflict is limited too.

### Crowdsourced beta testing

To work out bugs and test out the platform, I took to Mechanical Turk. That's
right, I paid people to have an argument in the spirit of Monty Python's
Argument Clinic:

<iframe width="600" height="337" src="https://www.youtube.com/embed/kQFKtI6gn9Y" frameborder="0" allowfullscreen></iframe>

Kidding aside, Turkers effectively became poorly paid ($0.25 per session) QA
testers. I asked them to try out Debaters and answer a question or two.
Meanwhile, I would assume the position of devil's advocate (as needed) and we
would have 5-10 minute long conversations. This helped iron out the bugs and
prioritize features.

Getting people to use the service without bribes was hard, mainly because
Debaters is a marketplace. Two people are required to answer the same question
differently to get matched. So inevitably, the first respondent needs to wait
while a match is found. Attention spans are short, and Debaters users are few.
Debaters attempts to address this by taking advantage of [web
notifications][notifications]. Once a match is made, you are notified through a
browser notification. By this point though, you may be less likely to be up for
a conversation.

One of my milestones for the first version of Debaters was to facilitate a
conversation between two people I didn't know. I managed to do this by actively
promoting it on Twitter while also paying users on Mechanical Turk, creating a
critical mass so that people would get matched without too much waiting. This
worked out, and finally I had a half organic conversation. This one was about
a federal minimum wage. Dustin answered "Not sure", Lawrence answered "No". In
case you are wondering, Debaters assigns names and avatars randomly.

    Dustin Collier:    hi Lawrence
    Lawrence Castillo: hi dustin
                       guessing these names are not real
    Dustin Collier:    hehe. mine isn't, dunno about yours :)
    Lawrence Castillo: i was scared for a second and thought they were real but
                       thats good
    Dustin Collier:    is yours really lawrence!!!!!
                       or did you forget your name for a sec
    Lawrence Castillo: no no
                       i saw your name and was like "oh shit people can
                       see names"
                       glad they're fake
    Dustin Collier:    ah yea
                       anonymous.
                       u dont like minimum wage?
    Lawrence Castillo: i think federal minimum wage, at least how we've been
                       talking about it is pretty flawed
    Dustin Collier:    how so?
    Lawrence Castillo: like, the minimum wage in nebraska should be very
                       different from the minimum wage in nyc
                       if we want a minimum wage it needs to be a percent of
                       cost of living
    Dustin Collier:    ah yeah, cost of living adjusted
    Lawrence Castillo: the idea of 15 dollars is kind of crazy
                       people in ny are still poor, and business can't pay it
                       in rural areas
                       i feel that way about most federal laws though
    Dustin Collier:    yea i agree, but that's not even on the table
                       bernie was all like "$15"
    Lawrence Castillo: yeah i loved the energy but...

The next milestone is to have a fully organic conversation, where both sides
arrive at Debaters without monetary incentives, but out of legimiate interest.

[antonio]: https://twitter.com/abmcosta
[python]: https://www.youtube.com/watch?v=kQFKtI6gn9Y
[notifications]: https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/

## Problems with Debaters

Now that the first version of Debaters is released, the technical problems have
been addressed, and the UX is in an early but usable state. The fundamental
problem is **how to attract users**. 

I think that the name "Debaters" connotes exactly the wrong thing. Debates are
something you win, and invoke a high school debate club. The name is also
suggestive of conflict, which people generally tend to avoid. Unfortunately I
was unable to come up with a catchy alternative.

That said, the name is not the limiting factor on user acquisition; there are
more fundamental forces at play. In today's political climate, people want to be
upset and angry. We are constantly outraged, and [some view it as a good
thing][krugman] that builds social cohesion. We don't want to change our minds,
that would be like colluding with the enemy. After all, [arguments are
soldiers][soldiers]. I disagree.

Conversations with people that hold different views is like getting kids to eat
their vegetables. It's good for them, but they aren't necessarily going to like
it.


## Tricking people into friendly debate

A common tactic for getting kids to each their vegetables is to disguise them as
something else. Could a similar approach be taken with Debaters?

One avenue might be to target people that want to proselytize their ideas.
They might come to Debaters to sway others about one issue they are passionate
about, and then become engaged in another conversation on another issue, where
they are more likely to listen. This is pure theory. Maybe proselytizers are
certain about everything.

Another avenue might be to target neurotic people. This has sort of been tried
in the form of [The Asteroids Club][asteroids]. This project is framed as a
"non-debate on America's biggest problems, which are hurtling toward us through
space and time at an alarming rate of speed". Unfortunately it hasn't taken off
yet.

People are inherently curious. Projects like [Talk to an Iraqi][iraqi] and [The
Swedish Number][swede] have been effective at attracting an audience. Haidar
Hamza's public booth seems to have also been effective at bringing up difficult
political issues. Could we take advantage of this curiosity by surfacing
something unusual about your future interlocutor?

And yet resorting to trickery may not work. Even a more oblique form of it,
[nudging][nudge], has [had significant opposition][anti-nudge]. But, as Sam
Harris starkly puts it, the only tools we have for changing minds are
conversation and violence. My opinion? I'd like to avoid the latter, so intend
to continue thinking about and building in this difficult but incredibly
important problem space.

[soldiers]: https://wiki.lesswrong.com/wiki/Arguments_as_soldiers
[veggies]: https://www.washingtonpost.com/national/health-science/your-kid-hates-veggies-you-may-be-to-blame-but-its-possible-to-make-peas-more-palatable/2014/03/17/ac9e39d8-8466-11e3-9dd4-e7278db80d86_story.html
[nudge]: https://en.wikipedia.org/wiki/Nudge_theory
[anti-nudge]: https://www.theguardian.com/commentisfree/2014/apr/24/nudge-backlash-free-society-dignity-coercion
[iraqi]: http://wolfmanproductions.com/haider-hamza/
[swede]: https://www.theswedishnumber.com/
[krugman]: https://www.nytimes.com/2017/02/27/opinion/the-uses-of-outrage.html
[asteroids]: http://asteroidsclub.org/
