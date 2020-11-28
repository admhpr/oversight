---
title: More Vectors
desc: As expected my schedule is only getting busier, however I have been squeezing in some learning on my lunch breaks. I learnt a little more about vectors and vector math this week so I'm sharing my notes.
date: '2018-01-24T18:08'
taxonomy:
    category:
        - blog
    tag:
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

As expected my schedule is only getting busier, however I have been squeezing in some learning on my lunch breaks. I learnt a little more about vectors and vector math this week so I'm sharing my notes.

[Last post](https://steemit.com/javascript/@harps116/day-6-vectors) I looked at add a vectors together to vectors, let's remind ourselves how that works:

![add_vectors.png](https://steemitimages.com/DQmZf3wEmjEX7DFHkENTgyE5EEYahJUsXS1Vre4vTbSiiKo/add_vectors.png)

In the above diagram we are adding A to B to get R. We are putting these vectors A and B end to end to get R. This new line R is the result of adding the two.

This maps to the idea of location and velocity, let's draw out our bouncing ball example:

![adding_vectors.png](https://steemitimages.com/DQmceb6jjnrFyrBbXNum3QjKNBFp7s2CNixJAcM6TG8AzuZ/adding_vectors.png)

Here is the example in code:

<p data-height="265" data-theme-id="0" data-slug-hash="qpgPLg" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Simple Bouncing Ball Vector" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/qpgPLg/">Simple Bouncing Ball Vector</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

We add the location to velocity to get the new location. The formula in psuedo-code:

```
newLocation.x = location.x + velocity.x
newLocation.y = location.y + velocity.y

```
Now that we have have a handle on adding let's look at subtraction. There isn't that much difference. All we are doing is replacing the add with subtract but it does require a little extra thinking. Lets first write the pseudo code and then draw it out.

```
W.x = V.x - U.x
W.y = V.y - U.y

```
We'll be able to give these letters more meaning after we draw it out:

![sub_vectors.png](https://steemitimages.com/DQmVx8FdP3rb47Dvw7Wow6BbT6MMzvicfmZDj21aQ8iJiD4/sub_vectors.png)

To subtract the vectors we lay the vectors end to end but when subtracting we inverse the direction of one keeping the magnitude ( size ). The vector between the two is the result. In this case we have found the Velocity between the two points.

now in we can label those letters:

```
velocity.x = mouseV.x - centerV.x
velocity.y = mouseV.y - centerV.y

```

Here's an example using code: 

<p data-height="265" data-theme-id="0" data-slug-hash="WdVyMg" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Vector Subtraction P5" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/WdVyMg/">Vector Subtraction P5</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

It is best to follow the link to see the full functionality, hover your mouse around the screen and the line will follow. 

That's all I managed this week.

Thanks for reading!

Check out Daniel Shiffman's great series on the [Nature of Code](http://natureofcode.com/book/introduction/), this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go.