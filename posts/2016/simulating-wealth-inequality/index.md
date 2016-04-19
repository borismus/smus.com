Simulating wealth inequality
============================
posted: 2016-01-19

Economic inequality is rising in the US. A viral video from several years ago
made this abundantly clear:

[![Wealth inequality in U.S.](video_small.jpg)][video]

The gap between desire, expectation and reality is truly shocking, and inspired
me to learn more. In particular, whether or not inequality is actually a big
problem, and then to better understand issues that the video above did not
address:

1. How did the US become so economically unequal?
2. How can this inequality be reduced?

My answers come in the form of simple simulations. For example, the following
simulation has two agents with different salaries, but the same spending habits.
You can [play with it][sim1] yourself!

<a href="http://borismus.github.io/inequality-simulator/?model=1-world-income-ineq-doesnt-lead-to-wealth-ineq.js">
<video src="simulator.mp4" autoplay loop style="width: 100%"></video>
</a>

In the first part of this post, I try to provide some background on economic
inequality: how to measure it, various forms of it, and whether or not it's a
problem.  In the last part, I try to explain how we got to the status quo, and
how inequality can potentially be reduced. Rather than just making claims, I use
simulations like the one above to defend my claims. This way, you can see more
clearly where I'm coming from, and if you disagree, you can [make your own
simulation][gh] with better assumptions.


[video]: https://www.youtube.com/watch?v=QPKKQnijnsM

<!--more-->

## What is economic inequality?

There are [three main ways][economist] to measure economic inequality: income,
consumption, and wealth. Income inequality in particular has become a huge
national issue, with [some presidential candidates][bernie] focusing large
amounts of their time addressing it directly, with policies such as the $15
federal minimum wage.

Inequality can be measured using the Gini coefficient. The greater the Gini, the
more unequal a society is. A Gini of 0 means perfect equality: everybody has the
same. A Gini of 1 means perfect tyranny: the winner takes it all. This metric
can be applied to any distribution: wealth, income, or consumption.

All forms of inequality are unequal, but some are more unequal than others! In
general, wealth is the most unequally distributed of the three indicators,
consumption the least. But which measure of inequality is most important to
consider?

[economist]: http://www.economist.com/blogs/freeexchange/2014/07/measuring-inequality
[pew]: http://www.pewresearch.org/fact-tank/2015/09/22/the-many-ways-to-measure-economic-inequality/
[bernie]: https://berniesanders.com/issues/income-and-wealth-inequality/


### Types of economic inequality

Income inequality is difficult to measure. What constitutes income? Obviously a
salary is included, but how about investment income? Unsold stocks? Options?
The [list of $1 salary CEOs][$1] is famously long, but what is their effective
income? Pew Research provides [many more reasons][pew] why income is hard to
measure, and may not be a meaningful indicator:

> Some economists say income data have too many flaws to be the primary measure
> of inequality. For one thing, many income inequality measures use income
> before accounting for the impact of taxes and transfer payments. [...]
> In addition, critics of the income-based approach note that an individual’s
> (or household’s) income can vary considerably over time, and may not reflect
> all available economic resources.

Income also isn't a great indicator for quality of life. Indeed, many economists
agree that [consumption inequality][consumption] is a better proxy for that.
[The Economist][economist] writes:

> For the purpose of measuring how inequality affects a community [income
> inequality] is also probably the least interesting yardstick of the three.
> Consumption inequality, though harder to measure, provides a better proxy of
> social welfare. This is because people’s living standards depend on the amount
> of goods and services they consume, rather than the number of dollars in their
> wage packet.

But consumption inequality has its limitations too. For one, it is difficult to
measure directly. More importantly, consumption is an indication of the current
state, but does not reflect ones ability to deal with the future. Wealth and
consumption are tightly linked. When times get tough, only the wealthy can
maintain their lifestyle by dipping into their savings. Having this reserve of
"potential energy" is especially important in inevitable periods of instability.

This leaves us with wealth inequality, which I will focus on from now on.

[$1]: https://en.wikipedia.org/wiki/One-dollar_salary
[consumption]: http://www.aei.org/wp-content/uploads/2012/06/-a-new-measure-of-consumption-inequality_142931647663.pdf


### Adverse effects of extreme wealth inequality

There are plenty of arguments to be made for dangers of high wealth inequality.
The common sense reason is the diminishing marginal utility of wealth. For an
unemployed person, suddenly having a job that pays $40K is a game changer. But
for a top-1% income earner already making $500K, the additional $40K makes no
practical difference.

Another economic argument goes something like this. Low wealth causes reduced
purchasing power, which ultimately means less money going to corporations, fewer
jobs, and a slower economy. More people should have spending power, which will
keep our economy running smoothly. Robert Reich makes this point well in his
moving [Inequality for All][reich]. However, the link between low wealth and
reduced spending is somewhat tenuous, given the much less extreme consumption
inequality distribution.

Wealth as potential energy also has a psychological dimension. Wealth gives some
peace of mind that you have a buffer against unforseeable problems, increasing
well being. This is especially important in countries with weak social programs
and relatively small safety nets. In such scenarios, more people feel the need
to accumulate wealth as a personal buffer.

There is also something philosophically unfair about wealth concentration. What
makes a society fair is a matter of opinion, but the [Original Position][op], a
thought experiment proposed by John Rawls provides an interesting starting
point. In the Original Position, you and your hypothetical countrymen select
principles that will determine the basic structure of the society you will live
in. This choice is made from behind what he calls a veil of ignorance, which
prevents you from knowing your economic status.

Being born into a society with high wealth inequality, you are subject to a
"lottery of birth". Quoth [The Economist][economist]:

> Wealth is also an important metric since it can be inherited, unlike income.
> When wealth inequality increases, the lottery of birth becomes an increasingly
> important determinant of living standards. Consequently, a society which wants
> to ensure an equal level of opportunity, in which outcomes are not closely
> linked to surnames, will endeavour to keep wealth inequality at tolerably low
> levels.


### Some wealth inequality is good

Yet clearly we don't want complete economic equality. It's important that people
work and create value. The best way to do this is to incentivize them by
rewarding high performing individuals. History has shown socialist societies
like the Soviet Union fail in part because there was no incentive to work. In Soviet
Russia, wealth inequality was low: everybody except the ruling class had the
same amount of the sad little pie. A small piece of a much larger (eg. American)
pie is better than an average slice of a small (eg. Soviet) one. This [Khan
Academy video][khan] makes this point well.

Wealth inequality alone is not a great indicator of prosperity either. Many
Scandinavian countries have very high wealth inequality, potentially because
life is already so good. According to [Credit Suisse][scandinavia],

> Strong social security programs, good public pensions, free higher education
> or generous student loans, unemployment and health insurance can greatly
> reduce the need for personal financial assets.

Wealth acts as a personal safety net. In countries with significant public
safety nets for ailing citizens, accumulating wealth is less important. Compare
a society with high inequality but a solid public safety net, with one with
equality but no public safety net. From the perspective of Rawls' Original
Position, the solid safety net is preferred, since even if you are the poorest
in such a society, you are still guaranteed a standard of living.

[reich]: http://www.pbs.org/newshour/making-sense/why-robert-reich-cares-so-passionately-about-economic-inequality/
[op]: https://en.wikipedia.org/wiki/Original_position
[scandinavia]: http://www.businessinsider.com/why-socialist-scandinavia-has-some-of-the-highest-inequality-in-europe-2014-10
[khan]: https://www.khanacademy.org/economics-finance-domain/macroeconomics/gdp-topic/piketty-capital/v/inequality-good-or-bad


## Modeling inequality

Inspired by [Bret Victor][bv], [Nicky Case][nc], and chats with [Mike
Johnston][mj], I've built a visualizer to give an [explorable explanation][ie]
of how wealth inequality arises, and how policy changes can reduce it.

The simulation itself is very simple, consisting of a set of rules which can be
defined in JSON, and then households that have property bags. Every year, each
rule is applied to each household in order. The result of each rule is some
change in the net worth of the household. Each simulation is defined by a
collection of rules and actors. In the GUI, you can inspect rules and actors by
clicking on them. The visualization itself is implemented in [three.js][three].
For more information, check out the [github][gh] page.

Using these models, let's jump in and explore some factors contributing to our
current state of wealth inequality. Then, some policies that can change the
status quo.

[three]: http://threejs.org/
[mj]: http://mikejohnstn.com/
[bv]: http://worrydream.com/
[nc]: http://ncase.me/
[ie]: http://worrydream.com/ExplorableExplanations/


### Cause 1: Income inequality

In this first simulation, we consider two households: one with low income and
one with high income. They have the same spending habits, but the high income
household has twice the income.

[![Income inequality not sole cause wealth inequality.][img1]][sim1]

[img1]: screenshots/1-world-income-ineq-doesnt-lead-to-wealth-ineq.png
[sim1]: http://borismus.github.io/inequality-simulator/?model=1-world-income-ineq-doesnt-lead-to-wealth-ineq.js

As you can see above (or if you click the image and [run the simulation
yourself][sim1]), such a scenario does not yield huge differences in wealth.
Even a hundred years later, wealth remains proportional to income, so we look to
other factors to explain the wealth inequality we see today.


### Cause 2: Investors win over the long term

In addition to salaries, households can also invest money. For simplicity,
assume that the net worth of each household is subject to some investment
return. Most Americans (52%) [avoid the stock market][avoid] entirely, which
cuts them out from any investment income.

In the next simulation, one household does not invest at all, and another
household invests its whole net worth. We assume that the yield is the average
return of the market, which is about [10% from 1930 to 2013][returns].

[![Simulation of investors vs. non-investors][img2]][sim2]

[img2]: screenshots/2-investing-ability.png
[sim2]: http://borismus.github.io/inequality-simulator/?model=2-investing-ability.js

This is effectively a demonstration of compound interest. Given the [correlation
between wealth and investment ability][noah], the impact of investing is huge on
wealth inequality.


[returns]: http://www.marketwatch.com/story/8-lessons-from-80-years-of-market-history-2014-11-19
[avoid]: http://www.gallup.com/poll/182816/little-change-percentage-americans-invested-market.aspx
[noah]: http://www.bloombergview.com/articles/2015-09-25/the-rich-are-different-they-re-better-investors-

### Cause 3: Entrepreneurship can have huge payoff

Many of the wealthiest people in the world became so by creating new companies.
Most enterprises fail, but it only takes one incredible success to generate
massive amounts of wealth.

I found that modeling this accurately is very difficult, but for the purposes of
illustration, this next simulation includes three households: a
non-entrepreneur, a regular entrepreneur, and a lucky entrepreneur. An
enterprise failure (10% yearly chance) is modeled as a 5% reduction in wealth,
while a success (1% yearly chance, 2% if lucky) is modeled as a 50% increase in
wealth.

The expected wealth of the regular entrepreneur is the same as the
non-entrepreneur, but the lucky entrepreneur has a 2% chance of success, and
thus a higher expected wealth. Entrepreneurship introduces volatility and can
lead to more wealth inequality.

[![Simulation of entrepreneurs vs. non-entrepreneurs][img3]][sim3]

[img3]: screenshots/3-with-entrepreneurship.png
[sim3]: http://borismus.github.io/inequality-simulator/?model=3-with-entrepreneurship.js


### All together: income, investments, and entrepreneurship

Consider all of these factors together: varying salaries, investment abilities
and entrepreneurial inclinations/luck. Here we have 8 agents with varying
parameters along these dimensions.

[![Simulation of entrepreneurs vs. non-entrepreneurs][img4]][sim4]

[img4]: screenshots/4-income-invest-entrepreneur.png
[sim4]: http://borismus.github.io/inequality-simulator/?model=4-income-invest-entrepreneur.js

We can see that after 50 years, we have a Gini of 0.44. In the real world, the
spread of incomes is much greater than here, the most successful entrepreneurs
make orders of magnitudes more than regular employees, and the best investors
are wildly successful. The [real world wealth Gini][country-gini] of the US is
0.8.


## Reducing inequality

Working within the system, inequality can be reduced through progressive
taxation of the wealthy. However, it's key to avoid becoming a [paperclip
maximizer][paperclip] when it comes to the Gini coefficient. Making the
wealthiest slightly less wealthy will certainly reduce the Gini, but will do
little to improve life for actual poor people.

Through additional taxation, the wealthy end up being less wealthy, with the
difference going to the government. Implied is a hope that the government is
capable and sufficiently efficient to use this extra money for good. By
investing in public works, creating relevant jobs, and establishing a more solid
safety net, there is potential to improve lives of those that are less
fortunate.

[paperclip]: https://wiki.lesswrong.com/wiki/Paperclip_maximizer


### Solution 1: Tax capital gains like income

Compound interest is a powerful force. Once an individual's wealth is large
enough, returns on investing their wealth will exceed even their salary.
However, the US currently imposes a very low capital gains tax, a long-term
capital gain tax rate of 15% for most normal annual incomes.

An easy solution is to increase capital gains taxes, or simply to treat capital
gains like regular income. This would effectively reduce the return rate on
investment and reduce inequality. The following simulation shows what happens
when investment income is taxed at a flat 40%. This is a crude estimate, since
it would actually be subject to a variable tax rate like the income tax, but
gets the point across.

[![Simulation of higher capital gains.][img5]][sim5]

[img5]: screenshots/5-higher-capital-gains-tax.png
[sim5]: http://borismus.github.io/inequality-simulator/?model=5-higher-capital-gains-tax.js

As you can see, the Gini at 100 years is much smaller than before.

### Solution 2: Estate taxes

Estate tax is intended as an effective tool for preventing the concentration of
wealth in the hands of a relatively few powerful families. It also encourages
charitable giving, since the money that is to be bequeathed is subject to the
tax.

Estate tax is collected when the deceased transfers their wealth to the
recipient of their inheritance. The deceased's net worth exceeding a certain
threshold is subject to the estate tax rate. Both the threshold and the tax rate
have varied a surprising [amount over time][estate-sheet]:

![Historical estate taxes](estate-tax-history.png)

In a previous simulation, we saw what would have happened with no estate tax (as
was the case in 2010, a good year to die). The following simulation shows the
average tax rate since 2000, which is 41%, with a threshold of 100 units.

[![Simulation of entrepreneurs vs. non-entrepreneurs][img6]][sim6]

[img6]: screenshots/6-estate-tax.png
[sim6]: http://borismus.github.io/inequality-simulator/?model=6-estate-tax.js

[estate-history]: https://www.irs.gov/pub/irs-soi/ninetyestate.pdf
[estate-sheet]: https://docs.google.com/spreadsheets/d/1lWzzz6RlMmxWTGYoU9kxxXqL9Q8Pto4cbzZRozVc8wU/pubhtml

### Solution 3: Wealth taxes

[Piketty's solution][piketty] to inequality is a global wealth tax. The idea is
that individuals with over a certain amount of wealth (here, 100 units) be taxed
at some rate for just maintaining that level of wealth. This seems difficult to
enforce, especially since in a global economy, a single neutral country
(say, Switzerland?) that does not impose a wealth tax will end up being a
natural safe haven for the rich.

[![Simulation of wealth taxes][img7]][sim7]

[img7]: screenshots/7-wealth-tax.png
[sim7]: http://borismus.github.io/inequality-simulator/?model=7-wealth-tax.js

[piketty]: http://www.cnbc.com/2015/03/10/why-we-need-a-global-wealth-tax-piketty.html


## Conclusion

Geez, you're still here?


### Practical limitations

Theoretically, inequality is not an insurmountable issue by any stretch. As
shown, by introducing policies like increased capital gains tax, estate tax and
wealth tax, inequality can be reduced. The real question is how much inequality
is actually desirable, and how effective the above policies are in practice.

[![Estate taxes, wealth taxes and ][img8]][sim8]

[img8]: screenshots/8-solution.png
[sim8]: http://borismus.github.io/inequality-simulator/?model=8-solution.js







In practice, estate tax is often avoided or minimized, [according to the
Urban-Brookings Tax Policy Center][est-tax],

> Among the 3,780 estates that owe any tax, the "effective" tax rate — that is,
> the percentage of the estate's value that is paid in taxes — is 16.6 percent,
> on average. 

A wealth tax is even harder to enforce, since you can simply move your wealth to
a country that does not have a wealth tax.

[est-tax]: http://www.calculator.net/estate-tax-calculator.html
[country-gini]: https://docs.google.com/spreadsheets/d/1HZBF47q9DYgFj49Q2ZLBb_3gpsoayAuGF_kUdYIM9nQ/pubhtml?gid=0&single=true



## Conclusion

**Roll your own**. The good news is that the models above show how inequality
can arise and how inequality can be effectively reduced! The bad news is that I
just made these models up with only a minimal understanding of how the world
works. However, more good news! If you are wise in the ways of economics and/or
have a suggestion for a more accurate, or perhaps more provocative way of
modeling wealth inequality, get in touch! Or if you just want to DIY, simulation
and visualizer are [on the githubs][gh].

**Eyes on the prize**. [Zimbabwe and Denmark][country-gini] both have high
wealth ginis (over 0.8), while [Yemen and Japan][country-gini] both have low
wealth ginis (under 0.6), yet these pairs of countries couldn't be more
different. Wealth inequality in itself is not really the problem, just an
indicator. The Rawlsian goal is not to reduce it arbitrarily, but to make life
actually better for everybody.

**Micro to macro**. The simple two household simulations I started with feel
like microeconomics. The more complex simulations we ended with started feeling
more like something from macroeconomics. Put another way, each household starts
with just a couple of bars of wealth, but as the simulation proceeds, the canvas
begins to resemble a bar chart. I found this quantity-to-quality transition
fascinating.

**On simulations**. I'm intrigued by simulations as way of explaining
complicated things to non-experts. However, any simulation is inherently
inaccurate, as it approximates the real world in order to have explanatory
power. In other words, there is some continuum between accuracy and
insight. The simulations in this post are more simple than they are realistic,
however, I hope they are at least somewhat informative and interesting.

[gh]: http://github.com/borismus/inequality-simulator
