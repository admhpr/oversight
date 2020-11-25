---
title: 'Custom Distribution : Controlling the Random'
date: '2018-01-31T18:09'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - '100 days of learning'
twitterenable: true
twittercardoptions: summary
articleenabled: false
musiceventenabled: false
orgaenabled: false
orga:
    ratingValue: 2.5
orgaratingenabled: false
eventenabled: false
personenabled: false
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

Last time I looked at how [Normal Distrobution](https://steemit.com/coding/@harps116/day-3-normal-distribution-taming-the-random) can make make random numbers consistently closer to the mean.

Let's customize the distribution a little.

Back to cacti, say we wanted to model a mature group of cacti that are all very tall.

<img src="https://steemitimages.com/DQmbjpHGacczLQsW6pBNnjzpHCy2MqXWbsbVmnAZoQLqCcP/cactus.jpg" alt="cactus" style="width: 100%;"/>

We might create a function like this:

<img src="https://steemitimages.com/DQmXeppkVi2H1Za6nqdbStFs6s7B1jAv1AaRobjTjD3GjML/code.png" alt="code" style="width: 100%;"/>

We would just push the first number if we wanted to model younger smaller cacti.

Here is a quick chart showing accumulated total of the two generated data sets:

<p data-height="451" data-theme-id="0" data-slug-hash="godVON" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Custom Distribution" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/godVON/">Custom Distribution</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

As you can see the tall biased set contains significantly larger numbers than the smaller biased set.

Happy Coding!

Check out Daniel Shiffman's great series on the [Nature of Code](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK), this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go.