Book list
=========
class: split
type: book


Three Body Problem by Liu Cixin (audio)
===
posted: September 27, 2018
rating: yes

Everyone’s reading it, so I finally got around to it too. I guess this is a
science fiction mystery book, and I enjoyed it overall. I was a bit disappointed
when the whole mystery was revealed though, maybe this is the nature of mystery
books?

The part about the Cultural Revolution in the beginning was super interesting
and well written, including great metaphors which were somehow preserved (or
maybe introduced) by the translator. I also liked the way in which the Communist
theme permeated throughout the book, especially in how the message broadcast
from Red Coast evolved from one loaded with propaganda and political fervor to a
much more neutral and nuanced one. Incidentally, I wonder how this book made it
past the Chinese censors.

Throughout the mysterious first part, I got a kick trying to figure out what was
going on, and was really captured by the story. But I was disappointed by the
big reveal. I found the hard sci-fi quantum and multi-dimensional explanation to
be a bunch of mumbo jumbo, maybe due lack of physics expertise? Also, the AI
protons sent by the Trisolarans just felt like a lazy explanation for the weird
phenomenon plaguing Wong and other scientists earlier in the book. That said,
blocking another civilization’s development is an interesting angle I haven’t
thought/read/heard about before.

I enjoyed the development of some of the characters, especially Ye Wenjie and
Big Shi. She was a compelling hero and a complex character. Her early life was
well written, and again the slow revelation of the mysterious aspects of her
backstory was compelling to me. I think it also helped that my audio book's
reader did a good job modulating voices and 

I really liked that I had to check some of the references made in the book to
see if they were fictional or not. Turns out Silent Spring and Rachel Carson are
real, but Bill Mather’s “contact as symbol” theory corporation is made up. This
was a nice device to keep me on my feet, and blend fiction with reality.

There is a dark, unstated backdrop to the whole book. Ye wants to find a new
civilization to right the wrongs of humanity, but after contact, rather than
some profound shift in the worldview of our intelligent species, concerns just
go up to a meta level. Both Sapiens and Trisolarans are back to the same
inter-species competitive grind.

This book made me want to read Silent Spring, and get more informed about the
Chinese Communist Party and Chinese history in general. I found the end to be
both a humbling and hopeful. We may be bugs, but we are proud of it!


Book of Why by Judea Pearl
===
posted: September 15, 2018
rating: yes

[Book of Why][book] came up as part of a reading group I'm involved in. I
recommend this book only reluctantly. In the end, Pearl convinced me that causal
inference is important and historically under-appreciated. Science progresses as
a step function, and I think that in the current step in AI (deep learning) we
are already starting to see the plateau.

My reluctance stems mainly from the way the material is presented. The book is a
strange combination of anecdotes, verbal descriptions that genuinely help build
intuition, some case studies, and a bunch of name dropping of students and
collaborators. Most of it appears to be written for a popular audience, but
sometimes the author jumps into mathematical formulas seemingly conjured from
mid-air with very little explanation. Other times he provides terse proofs that
read more like a math text book than anything else. Overall, the book is not
well structured and awkwardly straddles the line between popular science,
textbook, and paper. I was also annoyed by the aggrandizing use of "Causal
Revolution", which I think detracted from its credibility.

[book]: https://www.amazon.com/Book-Why-Science-Cause-Effect/dp/046509760X

Some chapters were especially tough, in particular Chapter 9, nominally about
mediation, seemed to drag on pointlessly. I also found some parts challenging to
internalize, particularly the front- and back-door criterion: what they are for,
and what they allow you to do. Perhaps if I was actively studying statistics,
and had more time to delve deeper into the content, I would be more patient with
the author, and find more time to work out the details of the mathematics in my
spare time. I think an interactive explanation of a causal diagram, data set and
application of one of the de-confounding criterion would be super instructive.
Nonetheless, here are the Pearls I managed to uncover for myself:

**Ladder of causation**: Early on, the author presents "three distinct levels of
cognitive ability: seeing, doing, and imagining.":

![Ladder of causation](/assets/ladder-causation.png)

The vast majority of today's machine learning resides on the first rung of the
ladder: observational data. Pearl believes that the core of human intelligence
resides on higher rungs: "Deep learning has given us machines with truly
impressive abilities but no intelligence." Later, he suggests this more
explicitly: "I conjecture, that human intuition is organized around causal, not
statistical, relations." This jives well with my intuition.

**Beyond RCTs**: what made me most interested in this book is the idea that
causality can be established by means other than randomized control trials
(RCTs). Pearl suggests having more than just data, but also a causal model, in
the form of a directed acyclic graph (DAG), originally introduced by Sewall
Wright. Pearl really pushes on this, evangelizing the concept. "A sufficiently
strong and accurate causal model can allow us to use rung-one (observational)
data to answer rung-two (interventional) queries." In many cases, running an RCT
may be physically impossible (eg. can't make people become obese to study the
effect of obesity on heart disease), or unethical (eg. can't force random people
to smoke for 10 years).

However it’s unclear to me how one is to generate the causal model in the first
place, and how you to ascertain that the model is "string and accurate".
Pearl says so himself: "If she is confident that her causal model accounts for a
sufficient number of deconfounders and she has gathered data on them, then she
can estimate the effect of Fertilizer on Yield in an unbiased way." That's a
fair amount of hedging.

**Blending probability and logic**: Although he never states it explicitly,
Pearl's causal graphs seem to bridge the gap between formal logic (eg. A implies
B) with probability. This is interesting, but I think Pearl is very much a
statistician, since he hardly ever mentions logic, only introducing concept of
necessary and sufficient towards the end of the book.

**Casual aversion in stats**: Pearl spends a lot of time complaining about
the mantra "correlation does not imply causation" embodied by various
authoritarian statisticians like Karl Pearson, and R. A. Fisher. Instead of such
a strong statement, the author proposes "some correlations do imply causation,"
although he does dial it back and suggests that it may instead be called
"provisional causality".

**Causal diagrams**: The path diagram concept introduced by Wright was met with
resistance by his contemporaries, who were drawn to the allure of just looking
at the data without any models, since the data is objective, and models are
subjective. This is where Bayesian Statistics comes in, which tells you how to
update Beliefs based on Evidence.

**Disease prevention**: James Lind discovered that citrus fruits prevent scurvy.
John Snow (not that one) discovered that water contaminated with feces causes
cholera. These findings were based on observational data, before widespread use
of RCTs, yet causation was established.

**Judicious biblical references**: I loved that Pearl often cited the Bible in
this book, most prominently the example of a controlled experiment from the Book
of Daniel, but also chapter heading quotes from the Book of Jonah: "At last the
sailors said to each other, Come and let us cast lots to find out who is to
blame for this ordeal.", and Maimonides: "All is pre-determined, yet permission
is always granted." (Really makes me want to read Nevi'im and Ketuvim one day.)

**Monty Hall problem**:
In Chapter 6, the book meanders onto the topic of paradoxes, which is a bit of a
tangent, but I guess is intended to illustrate the limitations of "first-rung"
intuitions, and ways in which causal thinking can nullify these supposed
paradoxes.  Imagine a game show where contestants pick one of three
doors, one of which has a car behind it, and two of which have goats. When the
contestant opens one door, the host will pick one with a goat. The host will
then open another door for the contestant. Should the contestant switch doors?
The answer is yes.

Finally I understood it like this: by the rules of the game, the host (who knows
where the goats and cars are) must open a door to reveal a goat. By so doing,
he has revealed information about the door you picked. (This was made clear in
the Bayesian explanation, without any reference to causality.)

**Simpson's paradox**: Imagine a drug that is supposed to reduce the risk of a
heart attack. Here's fictional data for such a scenario:

![Simpson's paradox data](/assets/simpsons-paradox.png)

From the data, this drug has a negative effect on men (30% without, 40% with
drug), a negative effect on women (5% without, 7.5% with), but overall better
(22% without, 18% with). This doesn't make sense: logically, either the drug
increases heart attacks for people, or the opposite. It's a question of
partitioning vs. aggregating the data.  Pearl's fictional example is resolved by
the fact that gender affects whether or not you take the drug in the first
place. Women had a preference for taking the drug, and men had the opposite
preference, so you would need to control for gender.

Here's a visual example I found approachable. Both illustrations show the same
data set, in one case aggregated and in another case partitioned by age.

![Partitioning vs. aggregating](/assets/partition-vs-aggregation.png)

In the graphical example above, the more you age, the more they exercise. If you
don't control for age it, it appears that the more you exercise, the higher your
cholesterol! To be clear, by partitioning the group by age, you control for age
and get to see the relationship which is muddied in aggregate.

## Causal diagrams tell you what to control for

A whole chapter of the book is dedicated to the smoking and cancer debate of the
mid-20th century. Many statisticians were highly skeptical of the causal
argument. Some lurking third factor could be the cause, such as a gene that
causes people to both crave cigarettes and made them more likely to develop lung
cancer. In causal diagram form, the debate is between these two scenarios:

![and birth-weight](/assets/smoking-gene.png)

**Junctions**: every causal diagram consists entirely of these three types of
junctions:

1. A → B → C: Mediator junction. Example: Fire → Smoke → Alarm. Fire causes the
   Smoke, and Smoke triggers the Alarm.
2. A ← B → C: Fork junction. Example: Shoe Size ←  Age of Child → Reading
   Ability. Children with larger shoe sizes tend to read better, but it's not a
   causal relationship.
3. A → B ← C : Collider junction. Example: Talent → Celebrity ← Beauty. Suppose
   only one of talent and beauty is sufficient to be a celebrity. Then, if a
   celebrity were a good actor, they would need to be less beautiful.
   Conversely, if they were beautiful, they would need to be less talented.

**Controlling for junctions**: if you view a causal diagram as pipes conveying
information from a starting point to an ending point, each type of junction can
be blocked by controlling for a certain variable:

1. In a mediator (A → B → C) or fork (A ← B → C) the pipe between A and C is
   open, but controlling for B closes the pipe.
2. In a collider (A → B ← C), the pipe between A and C is closed, but
   controlling for B opens the pipe.

**Back-door adjustment**: Shit I really don't get it. This book doesn't do a
great job of explaining the technical parts. I'll pause for now, and try
approaching the material with this course instead:
<https://www.coursera.org/learn/crash-course-in-causality/home/welcome>.


Living the French Revolution (audio)
===
posted: September 11, 2018
rating: yes

Over the summer, I spent three weeks in Paris with my family. I'd visited a few
times in the past, but only for a few days at a time. Since we had so much time
and just one home base in St. Germain, I felt immersed in the city. Upon
returning home, I wanted to keep that connection alive, and delve deeper into
French history and culture.

[The lecture][lecture] proceeds roughly chronologically, covering France between
1789 and 1814. It is informally split into two parts. The first thirty or so
lectures cover the French Revolution, including causes and ramifications, and
the remaining 18 focus on Napoleon. Overall, I found it super informative
and interesting, once you get used to the sometimes monotonous delivery style.
It's hard to summarize such a long and detailed account in this format, so I'll
try to just pick out the stuff that really stuck out to me.

[lecture]:
https://www.thegreatcourses.com/courses/living-the-french-revolution-and-the-age-of-napoleon.html

## First half: The French Revolution

In 1789, the people of France came together into a general assembly. I finally
learned the meaning of the three estates. The clergy were the first estate,
nobles the second, and lastly, the third estate referred to the commoners. (Much
later, and in a different country, the fourth estate came to refer to
journalists. The fifth estate is an even newer notion, referring to journalism
with non-mainstream viewpoints, sometimes on the internet. There are also
enumerated estates greater than five, but it seems the higher the estate number,
the more suspect the source.)

**Political spectrum**: during the contentious reign of Louis XVI, monarchists
sat on the king's right, while the republicans sat on his left.

Major causes of the revolution:

1. Home grown enlightenment ideas (Voltaire, Rousseau) became extremely popular
   with the French people.
2. The French government was going bankrupt due to poor domestic management, and
   large expenditures on foreign wars with England. Thank Ben Franklin for that!
   He was quite the diplomat, and made a splash with the French people, who were
   impressed by the combination of beaver hat and ability to wax
   philosophically.
3. A series of bad harvests led to bread riots in the late 1780s.

After the storming of the Bastille in 1789, the revolution had started in
earnest. Louis XVI was coerced into moving to Paris to be closer to the people,
but as revolutionary fervor escalated, many nobles escaped France. Publicly,
Louis XVI supported the revolution, but privately he thought that Paris was
under control of Jacobin extremists. The king himself eventually attempted to
escape, but it and attempts to frame it as a kidnapping failed embarassingly.
Anti-monarchist sentiments flared and eventually the king was guillotined.

The revolutionaries instituted a variety of interesting changes:

- Catholic priests were coerced to take an oath to the republic of France,
  against the will of the pope. About half declined, along the left-right
  divide.
- A new revolutionary calendar was introduced. Each month was composed of three
  10 day weeks called decades. It started on September 22 to celebrate the
  death of Louis XVI.
- New, explicitly secular holidays were created to supplant the old ones. (This
  reminded me of Rationalist Solstice.)

These changes were pretty radical, and led to a counter revolution, spurred on
by a desire for religious freedom, rebellion against increased military
taxation, and hunger. Peasant uprisings in the west were especially prevalent on
religious grounds. The Republican army wore blue which is why French soccer team
wears blue as well, hence the French cheer "Allez les Bleus". Monarchists such
as the Vendee from the west wore white with king and church front and center.

The new government, a highly factional assembly of people, was led by the
Jacobins, with Robespierre at the helm. They needed to maintain control,
quashing opposition. Marat's writing was emblematic of the mood in 1793 just as
the reign of terror was starting. He advocated for violence as necessary to
establish the Republic. “The death of ___ had become a necessity” is a recurring
theme in this sad story. Robespierre seems to be a tragic hero.  Initially
opposed to the death penalty, he slipped towards the terror one step at a time,
first arguing in favor of the death of Louis XVI, next killing others that were
seen as opponents to the revolution. This is the sort of thing that happens when
means and ends get mixed up. 

There was also a strong proselytizing, international aspect to the revolution,
foreshadowing the Comintern.  In the grand scheme, it was a war of people
against kings. This led to war with Austria, which was desired by all sides.
The revolutionaries wanted it to spread the revolution, but Louis XVI, still alive and nominally in control at the start of the war, wanted
it so that France could lose and be rescued by his relative by marriage, the
emperor of Austria.

I was surprised to learn that by time of the Terror, America-France relations
had crumbled. I didn't realize how pro-British some of the American federalist
were. For a few years America was allowing Privateers to raid French vessels.
As an aside, I realized that "privateer", "mercenary", and the more modern
"military contractor" are all basically interchangeable terms for guns for hire.

Here's a resolution to some confusing terminology. In France, "federation"
refers to multiple states that have equal political rights. In the US, the same
word has the opposite meaning: a strong central government; US "confederation" =
French "federation". 


## Second half: Napoleon

Napoleon came to power through a coup in 1799. By then the French people were
too tired to resist yet another upheval, exhausted by the infighting of the
revolution, terror, and frustrated by a newly instated Directorate system, whose
weak executive branch couldn't rule effectively. Upon seizing power, Napoleon
drafted an illiberal constitution that greatly increased executive power. This
was the fourth French constitution of the decade of the 1790s. 

At his core, Napoleon was a pragmatist. In 1806, Napoleon turned down the
revolutionary calendar. He distanced itself from the revolutionary ideals in
favor of stability, French nationalism and catholicism. I loved this quote:

> "It is by making myself Catholic that I brought peace to Brittany and Vendée.
It is by making myself Italian that I won minds in Italy. It is by making myself
a Moslem that I established myself in Egypt. If I governed a nation of Jews, I
should reestablish the Temple of Solomon."

In 1806, Napoleon crowned himself emperor after a popular vote. He then amended
the constitution allowing for hereditary rule. By becoming emperor he solved the
monarchist threat, but the Jacobin threat remained. He dealt with the Jacobins
by using them as scapegoats for any rebellious acts and then punishing them by
exile or death.

Napoleon's strategy seems to have been driven by several modus operandi:

- Nepotism: he placed his many brothers into positions of power, used his
  siblings for strategic marriages with European royalty. 
- Military autonomy: he restructured the Grand Armee into separately managed
  corps to be more autonomous.
- Expansionary conscription: he used the newly conquered peoples to expand the
  Grand Armee with fresh blood, and eventually reduced the draft age.
- Foraging and looting: by relying more on eating off of conquered lands and
  less on supply trains, Napoleon's armies could move faster and be larger than
  his opposition.
- Domestic improvement: due to general mistrust of the people, he instituted
  great public works projects that would placate and benefit them.
- Military glory: due to a deep-seated sense of illegitimacy, Napoleon craved
  great military victories.
- Propaganda: whatever the outcome of his military campaigns, Napoleon made sure
  his image was propped up by cherry picking just the good parts.
- British nemesis: the French navy was consistently crushed by the British. In
  retaliation, and because of a general French hatred of the British, Napoleon
  banned English imports throughout the French empire.

Napoleon's conquests are many and varied. At its peak in 1812, the French Empire
spanned from Spain to Poland.

- Egypt: one of Napoleon's earliest campaigns was a PR success, but ultimately a
  defeat at the hands of the Ottoman Empire and Great Britain. This expedition
  led to the discovery of the Rosetta Stone.
- Italy: after self-crowning as emperor, he created the Kingdom of Italy and the
  Italian flag, which was inspired by the tricolor of the French revolution.
- Austria: by 1806, at Austerlitz, France defeated Austria and its allies
  including the Russian empire. This was the formal end of the Holy Roman
  Empire.
- Britain: at the Battle of Trafalgar, the French navy was crushed by Admiral
  Lord Nelson's forces (Rule, Britannia!), which cemented Napoleon's hatred for
  Britain. During the battle, Nelson was shot and killed by a French musketeer.
- Prussia: in 1807, French forces pushed into Prussia and defeated Friedrich
  Wilhelm III in two parallel decisive battles led by different corps of the
  Grand Armee.
- Spain: Napoleon offered to resolve a succession dispute between the Spanish
  king and his heir, but instead exiled the royal family and installed his
  brother Joseph there. He was overly confident that the Spanish would be on
  the French side, underestimated their conservatism and their ability to
  resist. 200K Grand Armee soldiers were stationed there in order to try to keep
  the peace. The term guerilla (little war) comes from this period. 
- Russia: by 1812 Napoleon needed another great victory to maintain his
  legitimacy as emperor. Once improving Russian relations had soured since
  Alexander I felt threatened by French proximity in Warsaw. Napoleon marched
  east with 650K strong and conquered Vilnius and by the time he entered Belarus
  he'd lost half due to disease, extreme heat and cold. The day after he took
  Moscow it was burned down by retreating Russian forces. Napoleon was
  eventually forced to retreat and returned home with one fifth the men.
  
Weakened after the Russian campaign, Napoleon's forces were crushed decisively
by a joint force of Austrians, Russians, and Prussians. Louis XVIII, a cousin of
Louis XVI, returned from exile and was placed onto the throne by the victorious
coalition. This Louis introduced a new constitution, attempted turn back time,
reverting France to the divine right of kings. He forced a lot of the army
retire and was unpopular with the people.

Napoleon didn’t last long in his exile at Elba. He was given reign over the
island where he gathered a force of 1000 men and marched back to France. On his
way, the French forces sent to stop him joined his cause instead. He entered
Paris unopposed, framing himself as a product of the revolution in opposition to
the tyrannical Louis XVIII. Upon his return, Napoleon amended the constitution
he drafted with limits to executive power, making France more of a
constitutional Monarchy. Of course, his foreign opponents were unhappy with his
return and decided to stop him once and for all. Napoleon had to prove himself
once more with a decisive battle at Waterloo. 

Defeated, Bonaparte was exiled to St. Helena where he spent his last 6 years.
Even after his death, Napoleon remained incredibly popular and became more and
more associated with the revolution. After Napoleon's final exile, Louis XVIII
returned to the throne and was followed by his successor Charles X, in a period
called the Bourbon Restoration. The royal lineage was overthrown by Napoleon's
nephew Louis-Napoleon Bonaparte, who was elected democratically, but like his
uncle, crowned himself Emperor.

Truth be told, my interest was initially piqued by events of the mid-19th
century: the surprising rise of Napoleon III in 1848, and the Paris Commune of
1871, which I knew nothing about until my most recent trip to Paris. This
lecture series was as close as TTC offered on this turbulent period. I'd have
loved to hear the lecturer continue on in French history. It will be nice to
return to the subject later.



Tao of Philosophy by Alan Watts
===
posted: August 3, 2018
rating: yes

Every society operates on very deeply rooted assumptions that are worth
understanding. Watts thinks we can seek wisdom from Chinese and Indian culture
to better understand our own. 

Watts is for a holistic view of self without boundaries. We humans have a clear
distinction between the natural (eg. our bodies) and artificial (eg. our houses).
But what about bees? Are bees natural and bee hives artificial? Clearly not.
Watts runs with the boundary-less way of thinking about self and extends it to
limits of our understanding. Watts points to a certain fundamental law of
symmetry. Every coin has heads and tails, every inside has an outside. Waves,
the fundamental unit of animal perception is composed from crests and troughs.
You cannot have one without the other. His ultimate aim here is to try to
eliminate the illusion of self. In this view, there’s no barrier between
yourself and the rest, just a unified whole. 

Watts is a big fan of gerunds, and does a good job of taking an outside view:

> The Apple tree “apples”, meaning it produces apples, and in the same way earth
“peoples”, producing intelligent humans. 

He breaks down various kinds of “why?” Which reminds me of Alex’s post that
in Russian there are at least two words for why: зачем (instrumental: what is it
for?) and почему (epistemic: how is it so?). Watts scoffs at the instrumental
and gravitates towards the epistemic question.

Relatedly, Watts preaches the need for purposelessness as an end in itself. If
you play because it is good for you, you aren’t really playing. Playing has to
be purposeless, like daydreaming or dancing for its own sake. Significance must
be in itself, not for the sake of something else. Great example of Bach and
baroque composers that are satisfying as is without having explicit meaning.
Watts calls for us to embrace nonsense, pointing at Lewis Carroll’s whimsical
“twas brillig...”, babbling choruses in English folk songs (eg. The Corries) and
bopping to Jazz. 

He quotes G. K. Chesterton quite a bit, and I enjoyed the quotes he selected:

> It is one thing to look with amazement at gorgon or griffin, a creature that
does not exist, but it is quite another thing to look at a hippopotamus, a
creature who does exist, but looks like he does not. – G. K. Chesterton

Watts ends with a question: Is human nature flawed as in western
conception? Or is it fundamentally trustworthy and essentially good as in the
Chinese conception? The sentiment “I do not trust nature, it has to be watched”
quickly leads to totalitarianism since you assume the worst in people.



Bad Blood by John Carreyrou
===
posted: July 20, 2018
rating: no

A sad story about Theranos and it’s leadership, in large part Elisabeth Holmes,
a tragic hero with a fatal flaw: unbridled ambition. 

The rest follows: unreasonably high confidence, sweeping major problems under
the rug, and cargo cult worship dedicated to successful leaders. Which includes
setting super high expectations for employees, fostering internal competition,
demanding absolute loyalty and punishing any whiffs of dissent. 

What was most surprising to me were the many ethical breaches exhibited by
Holmes herself: mixing business and romance, hiring exclusively political
celebrities to your board, and showing almost no empathy for employees, while
pursuing ruthless legal tactics in personal vendettas. 

It’s hard to say how fringe the Theranos story is. I’ve seen some parts in other
Silicon Valley contexts, especially Steve Jobs worship, unreasonable levels of
confidence in executives. And incredible secrecy for questionable reasons. 

But some parts of the Theranos story seem more unique, especially given their
specialized domain of health care where I think many startups tread lightly
because of the regulatory environment. Uber may be a good analogy and
counterpoint here, playing hard and fast with regulation and actually
succeeding. The stakes in health care are understandably higher and its probably
a good thing Theranos was ultimately stopped. 

The Theranos story may in part be a cautionary tale of digital culture colliding
with physical culture. But it is not helped by a morally compromised leader who
believes that the ends justify the means. 


Darkness at Noon by Arthur Koestler (audio)
===
posted: July 5, 2018
rating: yes

I learned about "Darkness at Noon" from a [Herb Simon
essay](/books/reason-in-human-affairs-by-herbert-simon/), where he praised
emotional story telling as a vehicle for helping people "attend to issues
longer, to think harder about them, to receive deeper impressions that last
longer". He asked: would you rather read "Darkness at Noon", or verbatim
transcripts of Stalin's purges?

The book is historical fiction loosely based on 1930s Soviet Russia. Supposed
counter revolutionary movements are being quashed by Stalin. The "hero",
Nicholas Rubashov finds himself in the middle of absurd Stalinist show trials,
having to publicly admit to crimes he never committed. The intent of his captor
is “to gild the right, to blacken the wrong”, ingraining black and white thinking
into the masses. The means and ends of the current government are good and just
and pure, and everything that opposes it is hellspawn and deserves only one
fate. Despite Rubashov's intention to deliver an impassioned speech
like Danton did before the guillotine, he finds himself powerless against the
Soviet machine, mechanically pleading guilty in the show trial, and then being
put to death.

That isn't to say that Rubashov is innocent. As a younger man fervently
dedicated to the party, he indirectly condemned his own lover to death,
supposedly for the sake of the collective. Now in jail, and softened by sudden
onsets of nuance, the former revolutionary has time to reflect. Intensely
psychological, the book delves into Rubashov's evolution as he realizes that
human life is sacred and no idea is worth sacrificing it for. Rational
mathematics does not apply in this domain, and Rubashov eventually becomes a
humanist. Fundamentally, Koestler's powerful critique of Stalinism is that the
ends do not justify the means.

Late in the book, a distinction between two kinds of suffering:

1. Biological: Inevitable suffering from unmet basic needs.
2. Social: Avoidable suffering from broken social systems.

Koestler observes that Revolution reduces Type 2 suffering but inevitably
increases to Tyle 1 suffering. Was the Russian Revolution justified? When is
revolution ever justified?  Through Rubashov, he wrestles with this issue,
acknowledging the need for social change, but questioning the means:

> One cannot heal a person mortally ill by pious exhortations. The only solution
> was the surgeon's knife and his cool calculation. But wherever the knife had
> been applied, a new sore had appeared in place of the old.

I really liked this book. Not having read the transcript of Stalin's purges, I
am going to assume that Herbert Simon was right: Darkness at Noon is well
written, interesting, and visceral.


You Belong to the Universe (audio)
===
posted: May 28, 2018
rating: no

Buckminster Fuller's name seems to pop up everywhere in the last few years. I
saw Jonathon Keats talk at The Interval a few years ago, on a book tour about
Fuller's life and work. I finally got to listen to the audio version. I found
bits to be interesting, but overall this book is less of a biography, and more
of an attempt to riff on various modern incarnations of Fuller's ideas. Fuller
himself comes off as overly self-involved. His investment and belief in panacea
projects like the World Game, Domed Manhattan, Dymaxions comes off as overly
naive for such a great man.

The book itself is interesting but not groundbreaking. It involves overly
flowery descriptions of things that I consider obvious: Google, Nest, Sim City,
self driving cars, etc. The end appears especially weak. The author spends too
much time on platitudes about specialization. If I had a dollar for every time
he wrote “comprehensive anticipatory design science”...

Leads from the book:

- [Wikihouse](https://wikihouse.cc/): simple, sustainable, open building
  technologies.
- [Sunrise Semester](https://www.insidehighered.com/blogs/technology-and-learning/mooc-pre-history) was an early morning CBS program that offered NYU courses for credit to viewers, precursor of MOOCs. Thousands of people participated.
- [Green Float](https://www.designbuild-network.com/projects/green-float/) is a
  proposed floating city concept developed by Shimizu Corporation of Japan.
- Lewis Mumfort's [Pentagon of Power][pop] criticizes planned cities as
  anti-cities, and Bucky's [Tetrahedron City project][tetra] as “A pyramid big
  enough to entomb the population of a while town”.
- [Shigeru Ban][shigeru] designed some cardboard-based buildings for refugees,
  from practical dwellings to cathedrals. Impressive!
- One of Fuller's collaborators, critiques domes as ["smart but not
  wise"][smart], a quip that is often applicable to modern tech. Specifically:

> Metaphorically, our work on domes now appears to us to have been smart: mathematics, computers, new materials, plastics. Yet reevaluation of our actual building experiments, publications, and feedback from others leads us to emphasize that there continue to be many unsolved problems with dome homes. Difficulties in making the curved shapes livable, short lives of modern materials, and as-yet-unsolved detail and weatherproofing problems.

[pop]: https://en.wikipedia.org/wiki/The_Myth_of_the_Machine
[tetra]: https://www.moma.org/collection/works/863
[shigeru]: http://www.shigerubanarchitects.com/works/2013_CCC/index.html
[smart]: http://www.domerama.com/general/smart-but-not-wise/

Unsong by Scott Alexander
===
posted: May 10, 2018
rating: no

Unsong is based on a really compelling concept. As it turns out, the Torah is
literally true. God is real, angels and demons literally control the fate of the
world. Kaballah is indeed the fundamental way that the universe works. Some
people continue to irrationally cling to their old beliefs (Science, Pluralism)
despite overwhelming evidence to the contrary. Earth is the center of the
Universe, and when Apollo 11 launched, it crashed into the firmament and left a
gaping hole in it. 

Alexander's novel excels at world building. The back story to how the world came
to be is fascinating. Unsong is full of gullible archangels and clever
Kaballists-programmers, San Francisco is Jerusalem, magical incantations possess
true powers and a righteous police force enforces their usage. These are all
super creative components of the complex universe conjured from thin air.

Unfortunately, despite the awesome concept, Unsong is not well executed. The
storyline is dull, the characters all speak in one voice, the pacing is off, the
interludes break the flow of the story, and the puns get annoying fast. This is
in stark contrast with Ted Chiang's works, which are great conceptually and
share some of the same fascinating themes (Tower of Babel, Hell is the absence
of God, the one about golems). The difference is that Chiang’s stories are well
crafted and come together as coherent wholes. They are emotionally driven,
memorable, well paced, and appropriate in length. 

I got through half of the book over the last few months, in small chunks because
Eliana is so small, often having to put the book down out of annoyance. Today I
have decided to declare bankruptcy. I am not invested in the story, I don't care
about the characters, and I don't care what happens in the end. Perhaps one day,
if it is aggressively edited, I will give it another chance.


Reason in Human Affairs by Herbert Simon
===
posted: April 26, 2018
rating: yes

One of the people I worked with at CMU was a "Herbert A. Simon Professor of
Human-Computer Interaction". I hadn't heard of Herbert Simon before, but his
name came up again recently at the end of ["Skin in the Game"](/books/skin-in-the-game-by-taleb-audio/). Turns out Simon
was a pretty interesting guy, and had a lot to say about Rationality.

Simon was an academic, and mostly wrote for academic audiences. This is his
least academic book, and still presents a dry read. The first essay, called
"Visions of Rationality", describes three flavors of rationality: SEU,
Bounded Rationality, and Intuitive Rationality. I skipped the second essay
because it was too boring. The third essay was about rationality in
organizations, which is Simon's home turf, being a key figure in Organizational
Behavior.

Critically, Simon treats reason as "wholly instrumental. It cannot tell us where
to go; at best it can tell us how to get there. Thus, whereas reason may provide
powerful help in finding means to reach our ends, it has little to say about the
ends themselves".

Subjective Expected Utility (SEU) is the God-like “Olympian model”, but is not a
suitable model for the mind of man. That said, Rationalists tend to elevate this
model:

1. Well defined utility function.
2. Well defined set of alternatives to choose from.
3. Can assign a consistent joint probability distribution to all future sets of
   events.
4. Maximize the expected value of the utility function.

Bounded rationality postulates that our minds are limited, bounded by
computational powers. The model more closely reflects human ability:

1. A mechanism to focus attention. "Rationality could focus on dealing with one
   or a few problems at a time".
2. A mechanism capable of generating alternatives.
3. A capability for acquiring facts about the environment, the ability to draw
   inferences from facts.

Intuitive rationality recognizes that thought is often affected by emotion, 
which can usefully "distract you from your current focus of thought, and to call
your attention to something else that presumably needs attention right now.".
There is no contradiction between SEU/Bounded models and intuitive rationality.

I really liked Herb Simon’s take on novels over textbooks for teaching social
science. This “hot cognition” is what makes Ted Chiang’s stuff so compelling.

> “Most humans are able to attend to issues longer, to think harder about them,
to receive deeper impressions that last longer, if information is presented in a
context of emotion, a sort of hot dressing, than if it’s presented wholly
without effect.”

Examples:

- "Darkness at Noon" vs. a history book or transcripts of Stalin's purges?
- "War and Peace" vs. a treatise on military sociology?
- Proust and Chekhov versus a textbook on personality?

People respond well to story, but this leaves us with an important
responsibility: “if we are to learn our social science from novelists, then the
novelists have to get it right. The scientific content must be valid.” Example:
Freud’s stuff still permeates novels despite very few orthodox Freudians left in
psych today.


The Fourth Turning by Howe and Strauss
===
posted: April 23, 2018
rating: yes

I don’t remember why I decided to read this book. The political theory it
describes is loved by both Gore and Bannon. This surprisingly heterogeneous
recommendation reignited my interest when I saw it on my reading list. 

The basic idea is this: history is cyclical with the unit of interest being
80-90 years. The authors call it a "saeculum", also known as a natural century,
or a long human life. Each saeculum has four stages with the last one climaxing
into a crisis. Each stage is associated with a general mood, and last roughly
20-22 years each. 

1. High - occurs after a crisis, institutions are strong, individuals weak. 
2. Awakening - institutions are attacked in the name of personal autonomy. 
3. Unraveling - institutions are weak, individuals strong. 
4. Crisis - often involves destruction, sometimes war or revolution. 

Each stage brings forth a new generation with a distinct personality type which
evolves the generational lifespan.

1. Prophets (eg. Boomers) enter childhood during a High, a time of rejuvenated
   community life and consensus around a new societal order.
2. Nomads (eg. Gen X) enter childhood during an Awakening, a time of social
   ideals and spiritual agendas, when young adults are passionately attacking
   the established institutional order.
3. Heros (eg. Millenials, G. I. Generation) enter childhood during an
   Unraveling, a time of individual pragmatism, self-reliance, and
   laissez-faire.
4. Artists (eg. Gen Z, Silent Generation) enter childhood during a Crisis, a
   time when great dangers cut down social and political complexity in favor of
   public consensus, aggressive institutions, and an ethic of personal
   sacrifice. 

The authors view [history through this lens][turnings], for example citing
previous great crises in US history:

- 1774-94: Era of the American Revolution and the Constitution
- 1860-68: the Civil War and its immediate aftermath 
- 1929-45: and the Depression and the Second World War

[turnings]: https://en.wikipedia.org/wiki/Strauss%E2%80%93Howe_generational_theory#Timing_of_generations_and_turnings

The book is written in 1997, and the authors make grand predictions for the next
decades, it's fun to see how well the theory predicts the present. It's still
too soon to know how accurate their predictions were, but it's already clear
that their track record will be a mixed bag.

The Crisis turning of this last saeculum was supposed to start sometime
2002-2008, peak around 2020, and resolve by 2026. Several important events can
be shoehorned into the theory as demarcating the beginning of the fourth
turning: 9/11 in 2001, the recession of 2008. Trump's election in 2016 can also
fit into their framework. Other things are way off. The way the media represents
millennials is quite far from heroic (at least so far). Or like the way that
millennial’s are supposed to be like GIs, community focused and socially
cohesive. The increased communitarianism in the 4th turning has not panned out. 

A summary from Howe from 2017 retroactively glosses over the parts that don’t
fit, and focuses on those that do: <https://m.youtube.com/watch?v=8Yfb2zQjKWE>.

Overall, the theory is unfalsifiable and overly general. Specific claims in the
book are often unsubstantiated. However I found it an entertaining read, and
potentially a fruitful “fake framework”. 


The Coffee-House: A Cultural History
===
posted: April 11, 2018
rating: no

A chronicle of coffee, especially focused on the coffee houses of 17th and 18th
century England. I found it too long-winded to recommend outright. So here's a
much shorter summary that captures the parts that I found most interesting.

**In Turkey**, coffee was used by Sufis, "as a medicinal delicacy to enable the
pious and the studious to stay awake during their devotions". It was also used
more socially in many coffee houses throughout the Ottoman empire: "There sit
they chatting most of the day; and sippe of a drinke called Coffa (of the berry
that it is made of) in little China dishes, as hot as they can suffer it. It
came to symbolize freedom of assembly, so much so that "building a grand
coffee-house became one of the first things Ottoman rulers did in newly
conquered cities, to demonstrate the civility of their rule." Smyrma had over 40
coffee houses in 1658. In addition, it was very egalitarian in nature "because
all were served in turn, no man served another and, furthermore, each was seated
according to the order in which he arrived, rather than that of precedence
usually encountered in the hierarchical Ottoman state."

**Humble beginnings**: It came to England from Turkey in the early 17th century,
after some initial struggle, since some thought that "while ‘coffa’ agrees very
well with the constitution of the Turk, [...] it will not suit that of the
Englishman".  The first coffee-man in London, Pasqua Rosee, was a lowly coachman
in the service of Daniel Edwards. His customers, having bought their coffee,
assembled in groups under his awning, and Rosee’s enterprise was apparently
successful.  He was criticized under xenophobic pretenses, and his establishment
was far removed from the elegant and comfortable structures the merchants
remembered from their days in the Levant. On my last trip to London, I saw a
blue plaque celebrating his 1652 ‘coffee-house’, locating their memorial on the
walls of the Jamaica Wine House.

**Coffee House**: Daniel Edwards and Thomas Hodges, however, could see the
commercial potential of coffee and were unwilling to let pass the opportunity
Rosee’s shop presented.  Eventually, a proper coffee-house emerged, with
dedicated, specially furnished coffee room, with its fires and stoves for warmth
and preparing coffee, was a retail revolution, although such places quickly lost
their strangeness.  In the fanatical environment of the Interregnum and
Restoration, the coffee-house to many was a haven of civility, but also of
revolution, debate, philosophy, puzzles, socialization, equality, and upward
mobility.

**Criticism**: But of course there were critics, many skeptical of coffee house
style debate, which was often seen as shallow, critiqued as falling into four
particular qualities of ruined discourse: gabbling, gossip, wheedling and
idleness. Is it just a waste of time? ‘at this place a man is cheated of what
is, by far more valuable than Mony, that is, Time’. On the other hand, "the
wakeful sobriety of coffee made the coffee-house the natural ally of this
puritan ideology of work and labour". Coffee houses in Turkey came under threat
when the kadis signed a protocol describing the properties of coffee and
declaring it unlawful for Muslims. It was later repealed. In England, "The King
was propelled to issue the proclamation [banning coffee houses] in 1675 in
response to the increasingly fractious nature of political debate". This attempt
ultimately failed, and "the defence of the coffee-houses, it was understood, was
a defence of freedom of speech." Later in England, it was rumored "that coffee
there was widely deployed as a contraceptive" in Persia.

Coffee houses played a part in many of today's important institutions:

- News: "on entering, customers were as likely to call out ‘What news?’ as they
  were to order a dish of coffee."
- Auctions: "were conducted ‘by an inch of candle’, in which a section of wax
  candle was lit, and bidding continued until the flame went out, with the final
  bid carrying the lot."
- Stock brokers: "jobbers bought and sold securities on their own account. These
  men made a ready market by facilitating buying and selling, because if someone
  wanted to sell, jobbers ensured they could always find a buyer."
- US central banking: "group of prominent financiers to discuss proposals for a
  bank to provide credit for the fledgling republic, modelled on the Bank of
  England."
- American Revolution: "In America the coffee-house was also associated with
  news and rebellion through the eighteenth century."

**End of an era**: In the late 17th century, "Tea was much more expensive than
coffee and it remained a rarity long after coffee was ubiquitous in London". It
later surpassed coffee, but remained something that was "more often associated
with women, with consumption in the home and with luxury: and most often in a
combination of all three". At its peak, there were 500 coffee houses in London,
but eventually Coffee started to wane. "Many blamed tea, and the passing of the
coffee-house was certainly accompanied by an unprecedented rise in tea drinking
among the British people". As early as 1750 coffee consumption in Britain had
been eclipsed by that of tea. Tea was monopolized by the East India Company,
which was "able to use its political influence to manipulate the system of
tariff preferences to distort the trade." By the early nineteenth century almost
six times as much tea was drunk per capita as coffee.  In 1888 a City
businessman wrote that the golden age of coffee-houses, as depicted in the light
literature of the last century, has passed away for ever.

**European rivals**: "Paradoxically, while coffee-houses waned in Britain,
various Contintental rivals – the French café, the Italian caffè and the
Viennese Kaffeehaus – prospered, both in reality and in the mind even of the
British." While Manet seems to celebrate café life, works like Interior ofa
Café, The Café Concert (1879) and Corner of the Café Concert (1878) also
suggests a powerful sense of anomie: in the sociable spaces of the city few
people seem to connect with each other. But there are exceptions, such as Café
Central, in the Herrengasse, had a central court with a high glass roof,
originally constructed to serve as an exchange for the merchants. Countless
journalists, lawyers, school-teachers, tradesmen and merchants, made the
Kaffeehaus not simply a place to socialise over coffee and read newspapers, but
also a central location for their intellectual life. Still the closest analogy
for Viennese Kaffeehaus in England was with the tavern or public house.

**Espresso revolution**: by WW2, "coffee disappeared off the market for more
than a decade, to be replaced by foul-tasting, adulterated imitations and
substitutes".  After the war, Riservato started the Gaggia Experimental Coffee
Bar, known also as the Riservato, in the summer of 1953, modeled after Italian
Caffes.  Within a year a legion of exotic new espresso bars had opened across
London and the provinces: The Times noted ‘the mushroom growth of espresso
coffee bars in London’ in October 1955. In San Francisco’s North Beach an
Italian immigrant opened Café Trieste in 1957. The ‘espresso revolution’, as
Pearson called it on BBC radio in 1956, changed more than just the appearance of
coffee retailing, reintroducing some of the sociability once associated with the
coffee-house. But, "The ubiquity of coffee bars, and the sameness of their
design, also mitigated their revolutionary sociability for Laski, who suggested
that many of the coffee-bar habitués would be as happy in a traditional tea
shop." The coffee bar was not simply a home for working-class or middle-class
culture, but a space where young people of different social stations mixed
freely, confusing the hierarchies of value both of Marxist and conservative
analysis.

**Seattleization**: In 1966 a Dutch immigrant, Alfred Peet, opened a whole-bean
coffee bar at the corner of Vine and Walnut in Berkeley. As the home of the Beat
poets and student protest, cafés and coffee-shops played an important part in
nurturing San Francisco’s cultural revolution in the 1960s. In 1970 three
college graduates who shared an enthusiasm for Peet’s coffee banded together to
open a coffee shop in Pike Place Market in Seattle, doing their own roasting. 
One of their number, Jerry Baldwin, came up with ‘Starbuck’, a name with no
special meaning to them other than a pleasing sound and look. By 2003, Starbucks
was more than twenty times larger than its nearest rival in the American market
Schultz (Starbucks CEO) refers repeatedly to ‘the romance of coffee’. These
deep-seated associations, he argues, can be evoked through aroma, but also
through reiteration.

**Got milk**: At Starbucks, and other Seattleised coffee-bar
chains, ordering a coffee has become a farcically complex operation requiring
specific and artificial terms. ‘wet’ means without foam, ‘skinny’ means to use
skimmed milk, ‘with wings’ means the coffee is to take away. Although the
chain’s consumption of milk is vast, almost no mention of its origins,
suppliers, chemistry, preparation or flavour. But milk was rarely added to
coffee before the nineteenth century.

**Anti-social**: The sociability encouraged by Starbucks is based on
consumption, not conversation. The interior arrangements of the coffee shop
recalls the communal space of the early coffee-house, but atomises people into
distinct individuals, promising customers peace and security from others, not
encounter and discussion. A plaintive symbol of these ambitions is seen in the
encouragement coffee-house chains have given to wifi by which means individuals
using their own laptops can participate in the on-line ‘community’ of the
Internet, all the while remaining oblivious of the living world around them.
In the sanitised, lactified form of the branded chain, the coffee-house is no
longer oppositional, rebellious and dissident. This is their profit, but our
loss.

> Yet these will o’er their Jewish Liquor  
About Religion Jar and Bicker;  
And rave till grown as Piping Hot,  
As the dull Grout o’er which they sot.  
&mdash; Vulgus Britannicus: or The British Hudibras


Player of Games by Iain M. Banks
===
posted: March 30, 2018
rating: yes

Culture, the dominant empire in the known universe, is an interesting place.
People have fully tamed their hormones, able to secrete anything at will, change
genders, heal wounds. Machines and humans co-exist with mutual respect. Tiny
drones and intergalactic starships are independent, intelligent entities with
personality. Humanity has broadened: it's not just homo sapiens, but many many
other kinds of humanoids from all sorts of different planets. Mysterious
superintelligent Minds (presumably machine) that seem to run the system. How
does Culture interface with other civilizations?

This book is definitely a page turner: great story telling, with an air of
mystery throughout.


Skin in the Game by Taleb (audio)
===
posted: March 29, 2018
rating: no

Taleb is back with another book. It has interesting, but poorly organized ideas.
Fortunately, it is mercifully short acting more of a summary of his previous
work (I only read Antifragile). I don't think I could handle much more virtiol.

First, the interesting parts.

The thesis of "Skin in the Game" is that decision makers need to be
subject to the downsides that arise from their bad decisions, not just the
upside of their good ones. Skin in the game used to be normal: some kings and
emperors would fight on the front lines. Lords traded personal risk for
prominence. In modernity, many decision makers, such as bureaucrats that make
decisions on whether or not to go to war, are shielded from their actions. He
makes some interesting arguments:

- Big companies want employees to be family men. Because they have more
  dependents and thus debt. So they are less likely to leave. 
- Cato’s injunction: it's better to have someone ask why you don’t have a statue
  rather than why you do. 
- VR can never be compelling since there's no downside risk to you. You have no
  skin in the game. (This might be a leap I'm taking).
- The Silver Rule - negative version of the golden rule: don’t do to others what
  you wouldn’t want them to do to you. He expands on the definition of "you",
  which is interestingly applied in the plural as well, to individuals,
  families, tribes, countries. This is the libertarian version of the Golden
  Rule.
- Static vs. dynamic inequality: an important distinction. Wealth inequality is
  not itself bad. It would be fair if people rotated through the wealth classes
  over their lifetimes. Taleb claims that they do (which I highly doubt) and
  this is his critique of Picketty.
- But the fact that the market permits the prince become the pauper is an
  example of skin in the game. And actually this status loss is super
  relatable to people (eg. Trump).
- Taleb is in favor of parsimony, and suspicious of an argument defended by too
  many data points. This is his critique of Pinker's "everything is awesome"
  narrative.
- Lindy effect - for some non-perishable things, the longer something exists the
  longer it will continue to exist.
- Peer reviews are problematic because your peers aren’t necessarily the right
  judges. Instead, time is the only judge. (I agree in theory, but in
  practice, time takes too long).
- Religion can affect actions and words. To the extent that religions affect
  words, Taleb is fine with it. He claims most modern religions affect words
  only, and there is no function difference between a Catholic and an Atheist.
- Claims that Atheists like Dawkins & Harris don't properly understand the
  distinctions between various kinds of belief. In practice, everyone has some
  "religious" practices like honoring the dead.
- Rationality of a belief makes no sense. The only rationality that makes sense,
  is that of an action, any only from the standpoint of survival. That which
  helps you survive is rational. From this perspective, whether or not you can
  explain something has no bearing on whether it’s rational or not. 
- Good reminder: correlation between deaths matters. Even though Ebola kills
  fewer people than bathtubs, it’s still a bigger risk because it's an
  infectuous disease, and so has huge downside. 
- Loss aversion isn't an irrational bias. It's rational to be fearful of ruin.
- Summary statistics are often misleading. “Never cross a river if it is on
  average 4ft deep”.

Taleb concludes with thought provoking advice:

1. Never engage in virtue signaling;
2. Never engage in rent-seeking;
3. You must start a business. Put yourself on the line, start a business.

I take issue with the tone in which the book is written. Taleb's level of hatred
towards some ideas and people, especially Steven Pinker is quite funny and
jarring. Whole chapters, such as the one devoted to Intellectuals Yet Idiots,
come off as a giant rant. He makes a lot of ridiculous claims which deserve to
be ignored or made fun of:

- He insults people as "not even weightlifters". I think this is a reference to
  his obsession with deadlifting.
- Taleb uses “domestication" as an insult. But the flip side is that this is the
  basis of a functional social system. 
- He claims that employees are just like slaves. But employment is at-will on
  both sides, and the trend today is away from "lifer"-dom.
- He disparages academics because "talk is cheap", yet writes many books with
  pompous names.
- He claims that public speakers get nervous because of the stage lights in
  their eyes.
- Made up words like econophaster, psychosophaster and scientism aren't
  winning him any favors.

Taleb is a provocoteur. But why? His ideas are actually quite academic and
intellectual, so he's not trying to appeal to populist masses. So who **is**
his target audience? Who knows? Anyway, I listened to this book, and it was
probably more worthwhile than listening to podcasts, but that's a pretty low
bar. I can't really recommend you do the same, so here are some interesting
names that Taleb mentions instead:

- Herb Simon - bounded rationality: people are fundamentally limited. (I've been
  meaning to read him since being a CMU student.)
- Gerd Gigerenzer - many things appear illogical but are actually done for good
  reasons. 
- Ken Binmore - the word “rational” is ill defined. It’s all about revealed
  preferences. 



The Modern Political Tradition: Hobbes to Habermas
===
posted: March 4, 2018
rating: yes

An impressively comprehensive series of 36 half-hour [lectures on political
philosophy][link]. I wanted a political philosophy survey to better understand
some of the political articles I've been reading in Foreign Affairs, as well as
have a better sense of context for the current moment. 

[link]: https://www.audible.com/pd/Nonfiction/The-Modern-Political-Tradition-Hobbes-to-Habermas-Audiobook/B00K58X53Q

The lecturer, Lawrence Cahoone, is an engaging speaker, and organized the
material really well. He goes chronologically through some of modernity's most
influential political philosophers, and summarizes their most important ideas.
I found that Cahoone was able to summarize the philosophers I was familiar with
pretty succinctly, although of course it's very hard to avoid
oversimplification. I was also surprised by how many thinkers I hadn't even
heard of.

This was not an easy course to follow for a layperson like me. I found myself
having to re-listen to some of the more dense lectures multiple times before I
felt like I grasped the concepts. Some philosphers remain shrowded in mystery.
Most notably, Hegel and Strauss continue to defy summarization. In the latter
lectures, he does a great job of tying more modern and controversial ideas
surrounding feminism and multiculturalism back to older thinkers.

Here are some of the philosophers he covers, as well as brief summaries for me
to index on later. As a note to myself, here are ones that I thought were most
interesting, and would be worth delving into in more depth: Carl von Clausewitz,
Alexis de Tocqueville, Émile Durkheim, Max Weber, Leonard Hobhouse, Hannah
Arendt, Friedrich von Hayek, Michael Sandel, Alasdair MacIntyre, William
Galston, Michael Waltzer, Carol Gilligan, Charles Taylor, Aldo Leopold, Jürgen
Habermas, Benjamin Barber, Ernest Gelner. What follow are a survey of a survey,
brief notes on each philosopher that was mentioned in the course.


## Formation of Liberal Republicanism (Lectures 3 - 16)

- Plato - we need a philosopher king.
- Machiavelli - Realpolitik. Politics is amoral. The enemy of my enemy is my
  friend.
- Hobbes - the state of nature is a war of all against all. In the social
  contract, you give up rights for security. (Social contract)
- Locke - people have natural rights to life, liberty and property. The
  government isn’t your master, it’s your servant. (Liberty)
- Rousseau - the noble savage was better off than the modern man because
  everyone was equal. Independence, equality and community are most important.
  "Man is born free yet is everywhere in chains". (Equality)
- Kant - morals are derived from reason and not experience. And you must always
  act according to the categorical imperative. Kant is a non-consequentialist,
  outcome doesn’t matter. (Deontology)
- Adam Smith - self-interest can be good. The invisible hand guides private self
  interest to create public benefit. (Emergence, Markets)
- Montesquieu - checks and balances will prevent despotism. Separate powers into
  legislative, executive and judicial branches. (Checks and Balances)
- Jefferson - inherited wealth and inherited debt is bad for society.
- Hamilton - too much federation is bad, leads to internal conflict. Feared
  “Petty republics without any shared unifying purposes”. Centralize for
  strength: banks, patent office, etc.
- Madison - tyranny of the majority is real. States/communities should have
  equal power in some sense (eg. electoral college, 2 senators per state)
- Richard Price - the French rightfully replaced King’s with laws. In favor of
  elections and explicit consent. (Republicanism)
- Edmund Burke - England depends on traditional institutions: royalty, the
  church.  Political norms don't come from reason but from tradition.
  (Conservatism)
- Thomas Payne - there is no power above the people other than god. Natural
  rights exist, according to reason. Burke is irrational, tradition is bad.
- Joseph de Maistre (far right) - nature is inherently evil. Man must submit
  soul to god and body to the state. The order is not rational.
  (Counter-enlightenment)
- William Godwin (far left) - government coercion is bad. Moral individuality and
  rationally derived conduct is good. (Anarchy)
- Pierre-Joseph Proudhon (far far left) - there is no such thing as absolute
  dominion. Property rights over indefinite timescale don’t make sense.
  (Anarchy)
- Leo Tolstoy - war and church are sources of violent coercion. Violence is
  always evil even when monopolized by government. Logical continuation from
  turning the other cheek from Christ. (Anarchic pacifism)
- Johann Gottlieb Fichte - "For each people, a country, for each country, a
  people". This means pan-German unification, mass literacy, etc. A sort of
  celebration of diversity on a country level. (Nationalism)
- Napoleon - The draft changed warfare forever. No more chivalrous knights,
  fealty for the king and hired mercenaries. Just a 600k strong standing army.
  (Conscription)
- **Carl von Clausewitz** - "War is the continuation of politics by other means".
  "Real war" is ritualized, chivalrous, traditional. But "ideal war" is pure
  conflict, fewer rules, objective is to make your opponents surrender. (War
  theory)
- Isaiah Berlin - negative liberty (freedom from x, liberty from coercion) vs
  positive liberty (freedom to do y, self determination). Positive liberty means
  there are multiple “goods”, requiring a pluralistic society.
- Hegel - Everything has a thesis, a counter thesis, and then a synthesis
  combining both. (Dialectic?)
- **Alexis de Tocqueville** - Traditional society gave aristocratic individuals
  freedom, provided structures of mutual obligation. Modern citizens are
  independent free and equal but alone so the government will have to do many
  things that family, guilds, feudal structures did before. But in America this
  can be mitigated with clubs, churches, other “civil society” outside of
  politics. (Civil society)
- Jeremy Bentham and James Mill - natural rights is “nonsense on stilts”, the
  guiding star is general utility. And this means what people actually value
  (from experience, not kantian intuition). Bentham: “push-pin (a children's
  game) is as good as poetry” (Utilitarianism)
- John Stuart Mill - there is a hierarchy of pleasures. “It is better to be a human
  dissatisfied than a pig satisfied. Better to be Socrates dissatisfied than a
  fool satisfied.” Act to maximize total pleasure overall. Also the harm
  principle: be free up to the point of harming others. Harm here
  is specifically utilitarian (eg. affecting others concretely, ie. not eating
  pork in private). Diversity of opinion is important, marketplace of ideas
  brings us closer to the truth. (Liberalism)
- Henry J. S. Maine - the individual surpasses the family as the unit to which
  law applies. (Individualism)
- Eric Weil - loss of community is part of modernity in favor of a looser
  association and voluntary groups.
- **Émile Durkheim** - Modern society is characterized by specialization.
  Traditional society was fractal - every hunter gatherer group was the same,
  now they vary. (Specialization)
- Georg Simmel - Money dehumanizes.
- **Max Weber** - work is good in itself, a sign of higher character. Modernity
  is all about instrumental rationality: refining means to achieve ends.
  Modernity is polytheistic. Each context provides its own value. This leads to
  a permanent identity crisis. Weber’s options are: bear with it or return to an
  all encompassing religion. (Protestant capitalism)
- Friedrich Nietzsche - "God is dead" and modern society is sick. What are the
  values that increase the viability of a society? Definitely not equality,
  since without ambition it turns mankind into a herd. Need Übermensch to
  transcend the Judeo-Christian tradition by finding meaning in chaotic
  modernity.
- Sigmund Freud - people are still basically primitive and have drives that
  contradict modern values. This leads to inevitable regressions like world war
  1 and 2.  (Drive theory)

## The Crisis of Liberal Republicanism from 1914 to 1953 (Lectures 17 - 20)

- **Leonard Hobhouse** - Laissez faire capitalism didn’t work and reduced the
  world to “Manchesterism” - terrible industrial dystopia. Sought a softer mix
  of liberalism and socialism. “Organic liberalism” is consequentialist, and
  should improve society. People are inherently social, and any impact they have
  must be reflected there. Communitarian, interactionist, prescient.
- William J. Brian - empower the poor against the elites. Hallmark of populism
  is railing against the economic hegemony and social
  conservatism. (Populism)
- Roosevelt - large monopolies have too much power. The wealthy few form a
  tyranny of the minority. 3 C’s: consumer protection, control of corporations,
  conservation of natural resources. A shift to more presidential/executive
  power to reform the constitution and modernize it.
- Wilson - again shift to more presidential power. Checks and balances are too
  constraining. Political society is evolving.
- Eduard Bernstein - capitalism will evolve to be more socialist organically,
  and markets don’t need to be fully abolished. What’s important is that workers
  are treated better. (Soft socialism)
- Lenin - communism won’t come on its own. Bernstein is a political prostitute.
  Communism needs a revolution and a hard line proletarian government that is
  wholly dedicated to ushering the new era. Freedom isn’t possible until then so
  all spheres of life, including art, must serve this goal. (Totalitarian
  socialism)
- György Lukács / Theodor Adorno / Max Horkheimer - capitalism lacks any
  reference point from which to criticize it. It commodifies everything too
  well. But despite western leanings they were quite sympathetic to Leninism.
  “parliamentary democracy is like having a debate club at the edge of the
  abyss.” The enlightenment wears away at beliefs, so all that remains is power.
- Georges Sorel - True morality requires martial virtue, readiness for violence,
  and self sacrifice. (Anarcho syndicalism)
- Carl Schmitt - Fascism is an enlightened rationalist dictatorship. Politics is
  above economics, morality, etc. Social contract theory is wrong. Even Locke
  wanted there to be an emergency valve where the executive branch takes over.
  But then the executive must also decide if there’s an emergency in the first
  place. Ultimately it comes down to a non-rational decision. It’s a theological
  politics. (Fascism)
- Peter Drucker - Fascism is disappointed socialism. Need something less
  international, less economic centric. Especially in light of standing armies
  of WW1, nationalism is key, and there needs to be a [bigger
  idea](https://www.youtube.com/watch?v=29Mg6Gfh9Co). (Nationalism)
- **Hannah Arendt** - totalitarianism of Hitler and Stalin is unlike anything
  that came before. Total organization of society is mobilized for the state.
  Nothing remains of civil society. No more art or chess for its own sake. She
  characterized Nazis as banality of evil, just following orders while comma
  unthinkable atrocities. (Totalitarianism) Distinction between labor, work, and
  action:
  - Labor is recurring and pure maintenance: cooking, dishes, chores,
    ephemeral output.
  - Work results in durable output: fixing the car, wiring poetry.
  - Action: deeds and speeches of free and equal individuals.

  For Arendt, action > work > labor, but modernity focuses too much on economics
  and so devalues work in favor of labor and action in favor of work. Powerful
  argument against both capitalism and marxism framed in art. For capitalists,
  the value of art is financial, for marxists, it's instrumental: for the sake
  of advancing communism. For her, it's intrinsic.
- Giulio Douhet - since so much depends on military technology, produced in
  factories, factories and civilians are legitimate targets.

## Political theory during the Cold War (Lectures 21 - 24)

- Michael Oakeshott - political behavior cannot be deduced from rationalism alone.
  Politics can be engineered and must be guided by practical knowledge. Great
  analogy to recipes: you need cooking skills to make a great dish, not just
  rule following.
- Ludwig von Mises - a planned economy is actually impossible. It’s too complex.
  Markets have emergent properties and no central planner can know it.
  (Anti-communist)
- **Friedrich von Hayek** - Government should ensure equal rights but not equal
  outcomes. Avowed anti-rationalist, believes in limitations of rationality, and
  so spontaneous order created by multiple individuals. Markets are both good
  and bad, you must have losers to have winners. The market must remain free,
  but the losers can be propped up by the government. The market isn’t a
  meritocracy, but based around value, or willingness to pay. Hayek is in
  favor of free market regulation, for some domains: safety, sanitation,
  breaking up monopolies, even health care. The worst is when prices, wages, and
  production schedules are fixed by the government because it breaks emergent
  spontaneity.
- Milton Friedman - in favor of negative income tax or basic income. Opposed to
  professional licensing run by governments. (Libertarianism)
- Leo Strauss - Philosophy is fundamentally always inconclusive. Athens vs
  Jerusalem: religion has all of the answers, but the ancient philosophers could
  deal with the uncertainty of taking philosophy seriously.
- Alexandre Kojève - history ended with Napoleon and Hegel. No more
  qualitative changes in human thinking.
- Herbert Marcuse - Advanced capitalism is totalitarian, integrating everything
  into itself. Example: music that may have begun as counter culture like jazz,
  hip hop, rock eventually gets played at the Super Bowl. In post capitalism,
  work becomes play. “One dimensional man” was the Bible for the new left and
  SDS of the 60s (New Left)

## Domestic political arguments (Lectures 25 - 28)

- John Rawls - what distribution of material wealth is just? Socialists usually
  focus on outcomes, neoliberals on history. Rawls is a progressive deontologist.
  Veil of Ignorance forces people to make ideal laws for a society without
  knowing what their position will be. In this case, take the maximin approach:
  best worst case. The only acceptable inequality is due to talent & hard work,
  not birth status. “Fair opportunity“. Difference principle: remove inequality
  until it hurts the least advantages. Contrast to Pareto efficiency principle,
  which doesn't care about individuals, but just overall outcome. (Fair
  opportunity)
- Ayn Rand - hates altruism from a Nietzsche perspectives. Selfishness is good
  because people have value in themselves. So capitalism is the only moral
  system of government. Society is only great in so far as it’s individuals are
  great. In favor of minimal states: optional taxes for police and military.
  (Objectivism)
- Robert Nozick - Any distribution scheme is unjust because it requires too much
  intervention to maintain. Inevitably people will gain a promotion or lose a
  job, disrupting the distribution. Also you don’t owe anyone for your fortune
  in life: analogy of musician who plays outside your house and then comes with
  a bill the next day - you don’t owe them. The veil of ignorance is contrived.
  It works for “life boat” cases and other emergency cases, but not in society
  where how you got your money matters. Imagine living your life based on how
  others want you to live, and you sell shares in your decisions. This is the
  opposite of free society, some degree of slavery. (Libertarianism)
- **Michael Sandel** - Rawls and Nosick are wrong because some values are unchosen:
  community, family, etc. the rest are chosen on top. In some cases, individual
  liberty can impact community from which that individual liberty is partly
  derived. Therefore some things should not become commodities to be bought and
  sold: a mother child relationship, surrogacy, outsourcing child rearing etc is
  wrong. (Communitarianism)
- **Alasdair MacIntyre** - Meaning can only be found in narrative, which is
  based on the culture and community you belong to. He rejects modernism and
  prefers premodern Aristotle to postmodern Nietzsche.
- **William Galston** - positive liberalism is important but is one of many
  worthy values. He rejects moral monism (foxes > hedgehogs) and thinks these
  values are in general conflict. Ultimate values are: life itself,
  purposiveness, instrumental rationality.
- **Michael Waltzer** - distributive justice is important but not why Rawls
  thinks. A just distribution of a good depends on the good and cultural
  conditions. Food, swimming pools, education are all different so distribution
  should vary.  What is bad about income inequality? Tyranny of one type
  of good over another: it’s that money can buy everything: security,
  healthcare, better cars, sex, political influence, commutation (avoiding the
  draft). It’s bad when different “spheres of justice” become too asymmetrical.
  Free market rules only apply to the bazaar, but treating everything as commerce
  ruins things.

## Feminism, Multiculturalism, Environmentalism, Postmodernism (Lectures 29 - 32)

- Susan Okin - progressive justice doesn’t take into account women’s special
  rights. Women in reality make less, so no fault marriage is equal but unjust.
  Wife beating is political in the same way that racially motivated crime is.
  The private is political. Women are generally more focused on the private.
  (Feminism)
- **Carol Gilligan** - normal development for humans is masculinized by society.
  In fact women are fundamentally different (essentialist). Men think in terms
  of rights and rules. Women focus more on care, community.
- Iris Marion Young - identity is often construed as negative. Example: Who am
  I? I’m not like this cis-gendered white male! Critical of negative identity
  because individuals belong to many groups.
- **Charles Taylor** - all cultures deserve to be recognized but what is their
  respective value? Should Shakespeare and Achebe get the same amount of
  coverage in school? Cultures are of equal value is nonsensical, muzzles
  critical powers.
- Bhikhu Parekh - the majority culture should adjust to its immigrants. For
  example, wearing a turban is a disadvantage for motorcycling, hence the Sikh
  helmet exception law in the UK, which is just to normalize the disadvantage.
- Brian Barry - individuals should not be disadvantaged by the groups they are
  born into. The Amish must stop preventing their children from going to high
  school. (Assimilation)
- Will Kymlicka - in liberalism, a group has as much rights as the sum total of
  rights of its individuals. But this doesn’t work for small groups like
  indigenous tribes. This gets tricky if liberties undermine the culture of the
  minority community. (Multiculturalism)
- John Muir - preserve nature as it is because it is sacred. (Preservation)
- Gifford Pinchot - conserve nature but still allow it to be used for human
  purposes. (Managed Conservation)
- Peter Singer - argues for animal welfare on a utilitarian basis. Their
  suffering should be reduced wherever possible. Applies to mammals and probably
  birds and amphibians. Speciesism is the analogue of sexism, racism etc.
  (Animal rights)
- Tom Regan - non human animals have deontological rights. They have an identity
  and so have inherent value and rights. (Kantian animal rights)
- **Aldo Leopold** - animals eat one another in the wild, but we now have
  control over ecosystems. We must "think like a mountain". This is a
  communitarian approach often driven by the desire to keep biodiversity high.
  (Moral ecology)
- Richard Rorty - there is no non circular justification for any philosophical
  argument. (Anti-foundationalism)
- Jean-François Lyotard -  everything is mediated by culture, which
- manifests as a series of signs. Beyond that, it’s all language games. (Radical
  structuralism)
- Michel Foucault - truth is defined by society and is intended for controlling
  the people. Society has constructed its canon out of straight white men. This
  is a problem, and blacks, women, and homosexuals need to be brought into the
  fray. Biases inherent in western ideals, feminist, multicultural ideas are
  all legacies. (Postmodernism)
- **Jürgen Habermas** - attempts to defend enlightenment and modernism from both
  Nietzsche postmodernism and conservative premodernism. Expands notion of
  rationality to communication. Kinds of rationality:
  - Epistemically rationality: what is true.
  - Instrumental rationality: rational action.
  - Communicative rationality (Habermas): we can decide together what we should
    do. If what parties are saying is expressed dishonestly, it’s strategic
    communication.

  Democracy is all about communicative rationality. There is a conflict between
  “the system” and the “lifeworld”, first of which is money and power driven,
  second is democratic communicative action. System infringes on the life world:
  less is decided conversationally and more moneyed.

## Post cold war (Lectures 33 - 35)

- Francis Fukuyama - History is about the slaves seeking and achieving equality
  (Hegel, Kojev). We're well on our way now, and nothing will really beat
  liberal democracy ever. Problem is that the end-state (universal equality) is
  bad because it leads to Nietzches “last man”, an ambitionless passiveness. So
  there must be room for individual thriving, or Thumos. (End of History)
- **Benjamin Barber** - We accidentally flooded the world with mcworld, the 3
  Ms: McDonald’s, Macintosh, MTV, but not with the civil society requires for
  democracy. “Neither Jihad nor McWorld promises a remotely democratic future”.
  Model: Tocqueville. (Jihad vs. McWorld)
- Samuel Huntington - Culture matters to how states govern.  Listen 9 modern
  civilizations: Eastern Europe, greater China, Islamic belt, India, Japan, etc.
  Conflicts will occur at the borders between these civilizations.  Western
  culture is not replicable. Elements are exportable, but it won’t be a full
  package. Globalism will increase tension and resistance because identity is
  often constructed negatively. (The Clash of Civilizations)
- **Ernest Gelner** - airlifting free elections and market economy into Soviet
  block countries isn’t sufficient. What you need is modern civil society, by
  which he means a plurality of ideas: neither church, nor market, nor govt can
  dominate. Life is modular and each part follows different rules. So pluralism
  is key. In the West this loss of identity was OK because of nationalism. Most
  countries are no longer Ideocracies (single moral idea, no pluralism) with the
  exception of those dominated by political Islam. 
- Mahatma Gandhi/Martin Luther King - forceful non violent resistance but
  inspired by Tolstoy. (Non-violent resistance)
- William T. Sherman - open to war as needed. "War is hell". (War Realism)
- **Michael Waltzer** (this time on war) - War is sometimes justified but is
  regimented by rules for going to war and then conduct during war. (Contrast to
  Just War Pacifism, which thinks modern technology is too dangerous to ever
  use.) Codified in Geneva and Hague conventions.  But tricky for civil wars:
  are the rebels criminals (to be punished) or combatants (protected by Geneva)?
  Terror against civilians is never ok, and tricky for combatants. Peacekeeping
  is justified if the target country is no longer able to guarantee rights to
  its people ("the right to have rights"). For example if there’s a genocide the
  country is unable to protect its citizens or is complicit in the act and must
  be stopped. Less clear who needs to intervene though. Dirty hands: politicians
  cannot be deontologists but must consider the utilitarian outcome for their
  people. (Just War theory)

This is a great overview of some philosophical underpinning of politics. I
learned a ton, gleaming new things about philosophers I was already familiar
with because of superior summarization, and learning about completely new
philosophers I hadn't even heard of before. Well worth a listen, and a
re-listen.


Scale by Geoffrey West
===
posted: February 23, 2018
rating: yes

I listened to a podcast with Geoffrey West and thought his ideas were compelling
enough that I should delve deeper. "Scale" covers a lot of ground, but the main
focus is what West calls [allometric][allometry] (as opposed to isometric)
scaling laws, which means a nonlinear relationship. 

True to his physicist roots, West looks for a unified theory of everything. 
According to him, biologists in general lack an appreciation for theory. And in
general biology has us “drowning in a sea of data and thirsting for some
theoretical framework with which to understand it”. The same can be said about
the other, even less scientific fields that are subject to West's analysis:
cities, economies, and companies.

West invokes colorful characters like [Isambard Kingdom Brunel][brunel] (what a
name!) and his ship building adventures. His insight was that scaling law favor
long ships: the main slowing factor in drag is cross sectional area, but thing
to optimize is volume. 

One of the earliest formulations of allometric scaling is [Klieber's
law][kleiber]. Animal metabolic rates scale as the ¾ power of the animal's
mass. Many other traits follow similar power laws with exponents that are
integral multiples of ¼. This pattern holds in many other examples:

- Biomass produced by insects ~ Mass of colony ^ 3/4
- Heart rates of animals ~ Mass of animal ^ -1/4
- White matter volume ~ Gray matter volume ^ 5/4
- Metabolic rate for cells ~ Mass of cell ^ 3/4

West poses the question: why ¼ is such an important and recurring ratio? He
turns to network theory and fundamentals for an explaination: "these networks
are constrained by three postulates: they are space filling, have invariant
terminal units, and minimize the energy needed to pump fluid through the
system." 

The physics of blood flow was first understood by [Thomas Young][young], the
same guy (polymath) most famous for his double slit experiment. Interesting is
that blood pressure is invariant across all animals regardless of size. One of
the characteristics is that in animal pipes (veins and arteries), and plants
(fiber bundles), the sum of cross sectional area of inflow has to equal sum of
cross sectional area of outflow.

West tries really hard to make the book accessible to a wide range of readers,
and is careful to never use any equations in the book. One unfortunate side
effect of this is that he isn't able to complete the argument and actually
derive the reason why multiples of ¼ show up so often. I had to look up [the
math][branching] later.

*Something I haven't thought about is how blood flow goes from pulsative (near
heart) to non pulsative (at capillaries). How does this transition occur? I'd
love to do an explorable explanation around this. Small mammals can’t exist
because pulsative transmission is more efficient and requires a minimum vessel
size. Is this related to why AC is more effective at travelling long distances
than DC?*

Next, he turns to fractals. Measuring lengths of borders between countries, the
higher the resolution the longer the length. In non-fractal situations, higher
resolution causes convergence to a value. In fractal situations, higher
resolution causes the value to increase indefinitely.  You can quantify how
fractal something is by looking at how quickly it’s length decreases as a
function of resolution. So it’s basically:

    fractality = - d(length) / d(resolution)

This was first identified when trying to measure lengths of coastlines, leading
to the [Coastline paradox][coastline], first identified by
[Richardson][richardson]. A straight line has [fractal dimension][fractal] 1, but
crinkly and fjord-filled borders of Norway have fractality 0.5 by the above
definition, and so has a fractal dimension of 1 + 0.5 = 1.5. The crinkliest line
would have a dimension close to 2, which corresponds to the fractal dimension of
a perfectly smooth surface. The crinkliest surface would have a dimension close
to 3, corresponding to a volume. This is fascinating since now we’re talking
about a continuum in R^n, where n is no longer an integer! 

*I wonder... What would fractal dimension greater than 3 look like?*

Even time series can be fractal: you can’t tell the time scale by looking at a
snapshot of the value of a stock over time. I wondered if there were clear
fractals in nature, as observed in satellite imagery, and [found this
site][fractal-earth]. Also, it would be very neat to have an AxiDraw generate
fractal drawings. I went on a tangent, the way to do this would be with
[L-systems][lsystem].

> “Smooth shapes are very rare in the wild but extremely important in the ivory
> tower and factory.” - Mandelbrodt

The reason growth stops is that there are too many cells to support at some
point, so no more extra energy to spend on creating net new ones. Holds true for
individuals, colonies of organisms, and tumors. In terms of aging and human
limits, the average age has been going up but the max seems to be converging at
125. Most age related damage happens at the terminals (capillaries, mitochondria).
These are space filling so evenly distributed throughout.  The larger the
animal, the slower the metabolic rate and so less damage at terminals and so
longer lifespan. 

Caloric restriction and temperature reduction are both viable ways of increasing
lifespans but obviously have negative side effects. Also these methods yield
only moderate improvement, an order of 10%.

> “Even if every cause of death were eliminated, all humans are destined to die
> before they reach 125.”

Cities also have scaling patterns associated with them. There’s an economy of
scale of many infrastructure elements: gas station, length of roads, electrical,
water and gas lines, all scale at `rate ~ population ^ 0.85`. At the same
time, socioeconomic metrics scale at a super linear rate. Number of patents,
wages, crime rates, number of restaurants, scale at `rate ~ population ^ 1.15`. 

There are inherent limits to how many people you can know: 5 intimates, 15 close
friends, 50 acquaintances, 150 familiars. This is [Dunbar’s number][dunbar],
which seems to be fundamental and spans across societies. Another pattern is
[Zipf's Law][zipf] which originated for words usage which varies inversely with rank.
Example: “the” is most frequently used at 7%, next is “of” at 3.5% (1/2), then
“and” at 2.3% (1/3). Same non-normal distribution applies to size of cities and
companies. 

Socioeconomic interactions in a city are the sum of interactions between people.
If everyone knew everyone it would be a power law with exponent 2. But because
of these limits like Dunbar’s number and Zipf's Law, there’s still a super
linear relationship but the exponent is closer to 1 than 2. But why does
infrastructure sublinearly and socioeconomic scale superlinearly? In
infrastructure the biggest flow are main arteries: highways, major sewers,
aortas. The nodes have capillary like access with small flows. In
socioeconomics, the biggest flow is between terminals, or people. The rest just
facilitated people getting together so have a smaller relative flow of
information.

Movement in cities in general is not random but very structured: most commonly,
going from home to work and back, or home to another place and back. And there
are clear patterns, such as this inverse square one: number of people visiting a
location at a distance (r) and a number of times per month (f) is given by a
power law: `n ~ (r f) ^ -2`.

West presents an interesting critique of per-capita metrics in cities: “it
implicitly assumes that the baseline for any urban characteristic is that it
scales linearly with population” contrary to the thesis of this book. Instead,
per capita metrics should be compared to the expected values of those metrics
based on the size of the city and the scaling law. He proposes a scale called
Scale Adjusted Metro Indicators (SAMIs). Apparently San Francisco has a really
good SAMI for innovation. I wonder how Seattle stacks up?

Organisms vs. cities vs. companies:

- Organisms: sublinear scaling and economies of scale dominating biology lead to
  stable bounded growth and slowing pace of life. 
- Cities: superlinear scaling dominating socioeconomic activity leads to
  unbounded growth and increasing pace of life. 
- Companies scale more like organisms than like cities. There is an analogy
  between metabolism and revenue, between maintenance and expenses.

Just like organisms that have a maximum size, companies also stop growing in
relation to the market. There’s a temporal aspect too, by 20 years, 85% of
companies disappear through bankruptcy or liquidation. 

Speculation on why companies die: R&D fraction goes down over time. More rules
and process over time, ossification of processes. More focused on short term
results and a “tried and true” strategy. (Google appears to be good at
mitigating a lot of this, may be in some sense more city-like).

I don’t understand why superexponential means that there must be finite time
singularities. It seems to me like `e^x < f(x) < \inf` between the two. West's
overall view is that major paradigm shifts happen increasingly frequently.
Either we will need to be more and more innovative or learn to “be content with
what we’ve got and find some new way of defining progress”. 

A surprisingly zenful end to a whirlwind of a book. It opened up my eyes to a
lot of interesting ideas. I recommend it!

[allometry]: https://en.wikipedia.org/wiki/Allometry
[richardson]: https://en.wikipedia.org/wiki/Lewis_Fry_Richardson
[coastline]: https://en.wikipedia.org/wiki/Coastline_paradox
[brunel]: https://en.wikipedia.org/wiki/Isambard_Kingdom_Brunel
[kleiber]: https://en.wikipedia.org/wiki/Kleiber%27s_law
[young]: https://blogs.royalsociety.org/publishing/thomas-youngs-surprising-contribution-to-biomechanics/
[branching]: http://mathbench.umd.edu/modules/misc_scaling/page22.htm
[fractal-earth]: http://paulbourke.net/fractals/googleearth/
[dunbar]: https://en.wikipedia.org/wiki/Dunbar%27s_number
[zipf]: https://en.wikipedia.org/wiki/Zipf%27s_law
[fractal]: https://en.wikipedia.org/wiki/Fractal_dimension
[lsystem]: https://en.wikipedia.org/wiki/L-system


Anthem by Ayn Rand
===
posted: January 28, 2018
rating: no

I’ve made multiple attempts at reading both Fountainhead and Atlas Shrugged, but can get no further than the first 50 or so pages. Luckily, this novella only has 50 or so pages in it, so this is an Ayn Rand book I can finish!

Anthem is a post-apocalyptic dystopia that operates as a communist state. There is a planned economy, jobs are allocated by the government. Everything sucks, you have no freedoms. Pronouns are different: saying "I" is punishable by death, and so the first person is always "we", and the third always "they", which sounds surprisingly modern (not an endorsement). Romantic attraction is illegal, and sex is only done on a special day, with a partner provided by the Eugenics administration. Everything is done for the collective, everybody must be happy. Oh and by the way, this society somehow forgot technology, and is now living in the technological dark ages. In practice, everything is terrible, and everyone lives in fear.

The lack of nuance or any sort of silver lining in this novel is truly astounding. Ayn Rand’s ideas of what is good can be inferred directly from negating everything about the dystopian society.

The fact that the protagonist immediately sees all of the implications of the primitive electrical circuit that he discovers in his makeshift laboratory is clearly Rand projecting her love for progress. A lot of the rest of the writing lacks any sort of subtlety. The contrast between the bureaucratic Council of Scholars and the entrepreneurial rebel protagonist, supported by their piety towards antiquated technology is really on the nose.

Still, it has its moments, such as this passage reeling against group think and "design by committee":

> "What is not thought by all men cannot be true," said Collective 0-0009. "Should it be what they claim of it," said Harmony 9-2642, "the it would bring ruin to the Department of Candles. The Candle is a great boon to mankind, as approved by all men. Therefore, it cannot be destroyed by the whim of one."

Ayn Rand seems to really enjoy asking rhetorical questions. I remember reading up to the "Who is John Galt?" Of one of her other novels. This one features chapters ending with questions like "What— even if we have to burn for it like the Saint of the Pyre— what is the Unspeakable word", and later, when the protagonist begins to awaken from his socialist stupor, "And we felt torn, torn for some word we could not find." Until finally the protagonist has their epiphany, which is of course that there exists a first-person singular pronoun, and the unbridled individualism that comes with it.

> For the word "We" must never be spoken, save by one’s choice and as a second thought. This word must never be placed first within man’s soul, else it becomes a monster, the root of all the evils on earth, the root of man’s torture by men, and of an unspeakable lie.

I’m glad Ayn Rand has the answers. Certainly, she has the zealotry of a fanatic:

> And now I see the face of god, and I raise this god over the earth, this god whom men have sought since men came into being, this god who will grant them joy and peace and pride. This god, this one word: I.

Oh, and in case you were wondering why this society collapsed in the first place? Obviously because of the collective!

> What disaster took their reason away from men? ... The worship of the word
> "we". When men accepted that worship, the structure of centuries collapsed
> about them, the structure whose every beam had come from the thought of some
> one man.

Ayn Rand’s writing is intense and views are extreme. At the very least, the book is historically interesting, and provides a counterpoint to the left leaning views espoused by my friends. Unfortunately this short novella is written in a way too closely resembling a wrecking ball persistently swinging at an already crumbling building.


Impro by Keith Johnstone
===
posted: January 24, 2018
rating: yes

I picked this book up because of a recommendation from the Internet. My first reaction was negative: the author’s claim pointing at things and calling them wrong names will cause your whole sense of perception to shift: colors become more vivid, outlines become sharper, people look smaller, the shape of the room changes. This, presented not as metaphorical truth, or a parable, but as actual truth, is something I continue to find hard to swallow. That said I think the essays in the book are worth it, if you suspend a bit of disbelief.

Next, I was disappointed in the long-winded story-of-my-life narrative that the book begins with. I recommend skipping the "Notes on Myself" section, as I did. What follows are three mind-opening essays called Status, Spontenaity, and Narrative Skills. These essays touch on a variety of subjects nominally about improvisation and the theatre, but are written in a way that feels applicable beyond the stage. The last essay on Masks and Trance I found to be somewhat more esoteric, and harder to imagine applying to reality. Here are some interesting tidbits from the book:

## Status

Before improvising a scene, a helpful technique is to decide your place in the status hierarchy in relation to the other actors. What Johnstone means by status isn’t necessarily some socio-economic standing in the world, but more of an internal confidence which corresponds to a pecking order. In the animal sense, low status means "don’t bite me, I’m not tasty", while high status means "don’t come near, I bite". Status can also be a lens with which to analyze any social interaction, and Johnstone presents dialogue that he annotates with status transactions, for example:

> Sgnarelle: [Raising himself] I’m the master.
Martine: [Lowers S, raises self] And I’m telling you that I’lol have you do as I want. I didn’t marry you to put up with your nonsense.
S: [Lowers Martine] Oh! The misery of married life! How right Aristotle was when he said wives were the very devil.
M: [Lowers S and Aristotle]: Just listen to the clever fellow — him and his blockhead of an Aristotle!

Usually, status manifests in various physical ways:

- Eye contact: breaking it can cause status loss. Not making it in the first place can cause status gain.
- Controlling space: low status players shut off their own space (eg. servants kneeling, bowing, prostrating). High status allows their space to flow into other people (eg. drill sergeant yelling at someone from an inch away) 
- Leg position: toes inward for low status, outward for high.
- Stillness: holding still while speaking raises status. Fidgeting lowers it.

Status is also a useful tool for examining jokes and narratives in general. For example, when high status individuals lower in status, the rest rise up in status, and vice versa. Explains why kings had low status courtiers (eg. midgets, jesters) in their midst.

Interesting games:

- Adding swearwords gratuitously. Loosens the atmosphere, for example:

> Buy something, I shout
I want a hat, buckteeth!
Buckteeth! Try this on for size, you jerk.
You call *me* a jerk? Cowflop!

- Master-servant, where both players act as if all of the space belongs to the master. A variant where the master can snap at the servant if he is displeased, and the servant dies after 3 snaps. The master doesn’t need to be reasonable. 
- Another variant with more people in a proscribed pecking order.

> I don’t myself see that an educated man in this culture necessarily has to understand the second law of thermodynamics, but he certainly should understand that we are pecking-order animals and that this affects the tiniest details of our behavior.

## Spontenaeity

Johnstone begins with a tirade against school. "Most schools encourage children to be unimaginative. The research so far shows that imaginative children are disliked by their teachers." And I anecdotally agree, from my own experience, as well as Seymour Papert’s writings. He argues that schooling beats creativity out of children.

> Suppose an eight year old writes a story about being chased down a mouse hole by a monstrous spider. No one will worry. But if he writes the same story when he’s fourteen, it may be taken as a sign of mental abnormality. Writing such things leaves the adolescent up to criticism. He therefore has to fake everything so that he appears ‘sensitive’ or ‘witty’ or ‘intelligent’ according to the image he is trying to establish in the eyes of other people.

This essay’s goal is to try to fix the above, providing an antidote to the switch-off that occurs at puberty. For example, when responding to "what’s for supper?", there is a temptation to think of something really clever. You will be too slow, and come up with something lame like "fried mermaid", but if you said "fish" quickly, would be better. 

Some exercises:

- Story invention by completing the next phrase, eg: "Imagine a man walking along the street. Suddenly he hears a sound and turns to see something moving in the doorway..." By this point the other person has come up with a mental image. "What is he wearing?" "A suit" "What type of suit?" "Striped", etc. It’s like visualization that happens when you read a book.
- This can be done implicitly, for example if you are asked to act an emotion "be sad", it can help to improvise by inventing a story about why.
- Association games: "tell me a color", "put your hand in an imaginary box, what do you take out?" "A cricket ball" "unscrew it, what’s inside?" "A medallion" "What’s written on it?" "Christmas 1948"

>Those who say "Yes" are rewarded by the adventures they have, and those that say "No" are rewarded by the safety they attain.

>At all points we would say "No" in life, we want to see the actors yield and say "Yes".

>If you’ll stop reading for a moment and think of something you wouldn’t want to happen to you, or to someone you love, then you’ll have thought of something worth staging or filming.

- Accept all: in an improv act, say "yes and" to everything. Never block any offers.
- Learn to make interesting offers, "Good morning!" is dull. But "Good morning, great heavens Frank, did they let you out?" is interesting.
- Two places: one actor pretends to be, for example, waiting at a bus stop while the other claims stage is living room.
- Presents: pretend to give presents to another actor, and they have to be very delighted with them and come up with what the present was.
- It’s Tuesday: overaccept everything, even the most mundane. Eg. someone says "it’s tuesday", and you go ballistic: "zomg, that’s when my brain surgery is scheduled for!"
- Yes But: accept, then add a "but" clause that you make up on the spot. "Is that your dog?" "Yes, but I’m thinking of selling him" "Will you sell him to me?" "Yes, but he‘s expensive"

In general, Johnstone’s advise is to follow the rules to see what happens, but not feel responsible for the resulting content. If you improvise spontaneously in front of an audience, you have to accept that your innermost self will be revealed.


## Narrative structure

Dictionary definition of story: account of imaginary or real people and events told for entertainment (Google). But it can’t just be a series of facts. Small children ask "and is that the end?" because they feel that a narrative has ended. Why are some stories told, but not others?

A made up sequence of events (eg. “met a bear in the forest, it chased me until I come to a lake, leapt into a boat") is storytelling, but doesn’t constitute a story. There’s no natural place for it to stop since there’s no re-incorporation going on, no cross-referencing of  previously mentioned happenings. This is kind of an improviser’s [Chekhov’s Gun](https://en.m.wikipedia.org/wiki/Chekhov%27s_gun).

Some exercises to create stories:

- (With a kid) try collaborative storytelling, by asking the kid questions as in a choose your own adventure book.
- Random story: pretend to have come up with a story, and let the other person “extract" it out of you by having them ask you yes/no questions. But just use a stupid rule like yes if the question ends with a vowel, no if it ends with a vowel, and maybe if it ends in a ‘y’.
- Connect the story: have one actor provide multiple unrelated sentences (eg. "It was a cold winter night. The wolves howled in the trees. The concert pianist adjusted his sleeves and began to play. An old lady was shoveling snow by the door.”) and the other synthesize them into something cohesive (eg. “When she heard the piano, the old lady began shoveling snow faster. When she reached the concert hall she cried ‘That pianist is my son!’. Wolves appeared at all the windows and the pianist sprang on to the piano, thick fur growing visibly from under his clothes”)
- In general, ^^ can be done with just one person by alternating periods of *free association* with *connection*.
- List dumps: an easy way of free associating is to just dump lists of words from your head.
- Invent characters: put actors in groups of 3 and have them invent a name for a character, then describe what she is like.
- Automatic reading: imagine you are reading something from a sheet of paper, or that you are uncovering an old tome of poetry. What does the tome say? All you have to do is read it. (Maybe this works by making it feel like you’re just a conveyance, and the result isn’t coming from your head.)
- Experts: one actor is a TV interviewer, the other is an expert. The two are to have a dialog about some ridiculous topic that the interviewer asks about.
- Verbal Chase ("Curveball"): again a question asker and responder, but the asker has to be unpredictable. For example "Imagine a box" prompts "What’s in it", but the asker goes another way: "Who put you there?" ”My father”, which anticipates “Why did he put you there”, but instead you go “What’s in there?”. This requires a very skilled asker!
- Word at a time (this is amazing): free association to tell a story with multiple people involved. It goes quickly, and each person has to produce a word on their turn. In one variant, a slow person gets kicked out of the circle until just two remain. In another variant, the person who just spoke points to the next person for a word, making it harder.
- The exercise above can sometimes lead to really boring stories, so it can help to force crazy situations (eg. a womb, an alien planet)
- Rather than "make up a story", play "describe a routine and then interrupt it". (Eg. Little Red Riding hood brings groceries to her grandma, but then ...)
- Playwright: one person directs two others in a fake play. If the playwright gets blocked, he asks the others for a suggestion. The goal is to not get blocked. It’s important to keep the focus on what happens onstage, not what happens elsewhere.

>You have to trick students into believing that content isn’t important and that it looks after itself, or they never get anywhere. It’s the same kind of trick you use when you tell them that their imaginations have nothing to do with them, and they’re in no way responsible for what their mind gives them.


The Truth of Fact, the Truth of Feeling by Ted Chiang
===
posted: January 4, 2018
rating: yes

Ted Chiang wrote a bunch of short stories that aren't published in book form. I
really wish he would sell another anthology. He deserves more recognition, and I
prefer reading physical books.

Here's one recommended by Alex, available [online][link].  The premise is that
in the future, a tech giant comes up with a technology called Remem giving
perfect audio-visual recall. You input text by sub-vocalizing, and see the
output immediately in your retinas.

This work is a great example of trying to unpack a complex issue and telling a
compelling story that is very focused on a particular set of technologies and
ideas. Ted could have probably written a non-fiction article about the same
subjects, but it would have been a much less appealing way of getting his ideas
across.

The structure of the story is also interesting: it's written from two
perspectives: one story about the journalist and his daughter, and one
seemingly from left field, of an oral-only Asian people making first contact
with European missionaries. It takes some time to relate the two stories
together, but that's part of the process.

Ted is amazing at retelling how it might have felt to experience writing for the
first time. I especially writing as an analogy to nature:

> “Where you or I would see nothing but some disturbed grass, he can see that a
> leopard had killed a cane rat at that spot and carried it off,” his father
> said. Gbegba was able to look at the ground and know what had happened even
> though he had not been present. This art of the Europeans must be similar:
> those who were skilled in interpreting the marks could hear a story even if
> they hadn’t been there when it was told.

And, justifying the need for spaces between words:

> You could not find the places where words began and ended by listening. The
> sounds a person made while speaking were as smooth and unbroken as the hide of
> a goat’s leg, but the words were like the bones underneath the meat, and the
> space between them was the joint where you’d cut if you wanted to separate it
> into pieces. 

Another core idea is whether or not perfect recall is desirable. Perfect recall
can be a disability: "At times, he tried to deliberately forget things. He wrote
down numbers he no longer wanted to remember on slips of paper and then burnt
them". And in personal relationships, pursuit of truth may be misguided. Perhaps
the ability to replay a painful conflict would prevent that wounds from ever
healing?

> It seemed to me that continuous video of my entire childhood would be full of
> facts but devoid of feeling, simply because cameras couldn’t capture the
> emotional dimension of events.

Another idea: something is lost in writing and in life capture through cameras
and microphones. In the Asian missionary world, the student of writing laments
"The paper version of the story was curiously disappointing.". Memory is
fallible, and without externalizing it, every time it is remembered and retold,
it changes. Oral history is alive, while written history is dead (with caveats).

> Part of me wanted to stop this, to protect children’s ability to see the
> beginning of their lives filtered through gauze, to keep those origin stories
> from being replaced by cold, desaturated video. But maybe they will feel just
> as warmly about their lossless digital memories as I do of my imperfect,
> organic memories.

Interesting distinction between semantic memory (knowledge of facts), and
episodic memory (recollection of personal experiences). The former is already
solved today via Wikipedia etc. The latter is on its way to being solved. Maybe
not practical yet because of battery life, but this will probably change in
lifetime.

Quick idea: over-reliance on external memory leads to virtual amnesia in the
absense of an extenral medium. This is already true for writing to some extent. 

In the climax of the story, both the future-journalist and past-missionary arcs
twist. When his wife and her mother left them, the journalist-protagonist
recalls his daughter lashing out at him, “You’re the reason she left. You can
leave too, for all I care. I sure as hell would be better off without you.” But
as it turned out, Remem made it clear that he was the one who said those words
to his daughter.

In the Asian missionary arc, the European colonizers force the indigenous
tribes into dividing into seven arbitrary regions (for easier governance), and
there is a tribal dispute over how to draw the lines. The decision came down
to blood lines, and two tribes claimed to both be exclusive decendents of one
lineage. Ultimately, the written record shows which tribe is right, and the
tribal protagonist's tribe ends up losing the dispute.

So, is perfect episodic recall desirable? It's complicated. Ted is incredibly
good at presenting both sides of the argument.

> It would be easy for me to assert that literate cultures are better off than
> oral ones, but my bias should be obvious, since I’m writing these words rather
> than speaking them to you. Instead I will say that it’s easier for me to
> appreciate the benefits of literacy and harder to recognize everything it has
> cost us.

In the end, Ted's proxy character, the future-journalist, decides to apologize
to his daughter.

> And I think I’ve found the real benefit of digital memory. The point is not to
> prove you were right; the point is to admit you were wrong.

Lastly, why does the story have such a strange title?

> Regarding the role of truth in autobiography, the critic Roy Pascal wrote, “On
> the one side are the truths of fact, on the other the truth of the writer’s
> feeling, and where the two coincide cannot be decided by any outside authority
> in advance.”

These two concepts are given indigenous terms:

> “But that doesn’t mean he was lying.” Then Jijingi remembered something about
> the European language, and understood Moseby’s confusion. “Our language has
> two words for what in your language is called ‘true.’ There is what’s right,
> **mimi**, and what’s precise, **vough**. In a dispute the principals say what
> they consider right; they speak **mimi**. The witnesses, however, are sworn to
> say precisely what happened; they speak **vough**. When Sabe has heard what
> happened can he decide what action is mimi for everyone. But it’s not lying if
> the principals don’t speak **vough**, as long as they speak **mimi**.”

[Go read it.][link]

[link]: https://subterraneanpress.com/magazine/fall_2013/the_truth_of_fact_the_truth_of_feeling_by_ted_chiang


