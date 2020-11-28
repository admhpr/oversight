---
title: 'Probability and Movement'
date: '2018-01-10T18:02'
publish_date: '10-01-2018 18:02'
taxonomy:
    category:
        - blog
    tag:
        - '100 days of learning'
        - probability
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

## What is Probability?

Probability is the measure of the likelihood that an event will occur. It is a way to evaluate a given set of scenarios and decide how often will event x happen.

Lets look at an example in code:

### Random Walker

<p data-height="317" data-theme-id="0" data-slug-hash="qpxmaK" data-default-tab="result" data-user="harps116" data-embed-version="2" data-pen-title="Random Walker" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/qpxmaK/">Random Walker</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In the example above we set up our little walker object that starts with an x and a y in the middle of the screen, a number is then choosen between 0 - 3, this number determines the walkers next step.


We could say that the walker has 25% chance of going up, down, left or right. That there is an equal chance of the walker moving in one of four directions.

What if we wanted more control over the way the walker moves? 

### Controlling the Random Walker

In this case I want the walker to move biasedly to the right

There are a few different approaches that come to mind here:

* We could increase the conditions for a particular direction

Psuedo Code
```
choice = random(5)

case: n == 0 || 5 
      this.x++
      break;
```

* We could add more liberal conditions to a particular direction

Psuedo Code
```
choice = random(4)

case: n < 3
      this.x++
      break;
```

* We could increase the incrementor for a particular direction

Psuedo Code
```
choice - random(4)

case: n = 0
      this.x += 2
      break;
```

As with any given coding endeveour that are many ways to solve a problem, it is up to you to decide the approach that makes the most sense.

In this particular case I like the final approach as it seems the most natural to me and least likely to have side effects on the mechanics of the other code.

<p data-height="265" data-theme-id="0" data-slug-hash="JMOqKe" data-default-tab="result" data-user="harps116" data-embed-version="2" data-pen-title="Random Right Walker" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/JMOqKe/">Random Right Walker</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


That's all I mangaged to tackle today, I hope to continue looking at movement in code this week.



