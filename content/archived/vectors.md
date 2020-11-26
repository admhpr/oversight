---
title: Vectors
date: '14-02-2018T18:11'
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

## What is a vector?

In the Euclidean sense a vector is something that has magnitude and direction.

The size of the vector is the magnitude and the direction is the angle in relation to an x axis running adjacent to the vector.

A vector doesn't necessarily have to be expressed as a magnitude and a direction it can also be expressed as an x and y pair.

An quick example by Johan Karlsson:

<p data-height="467" data-theme-id="0" data-slug-hash="MExzwz" data-default-tab="result" data-user="DonKarlssonSan" data-embed-version="2" data-pen-title="A Vector" class="codepen">See the Pen <a href="https://codepen.io/DonKarlssonSan/pen/MExzwz/">A Vector</a> by Johan Karlsson (<a href="https://codepen.io/DonKarlssonSan">@DonKarlssonSan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Watching this animation really helped me wrap my head around the idea that x and y positions can also be represented by vectors, So I am sharing it in the hopes it will do the same for you.

However changing the x and y values all the time isn't exactly efficient. We normally end up adding things to the x an y to create speed or position etc until there are many functions and variables to keep track of.

Now with an understanding of vectors we can represent the position as a vector.

Here's a simple example and refactor. Take this boucing ball for example:

<p data-height="265" data-theme-id="0" data-slug-hash="eyxGmv" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Simple Bouncing Ball X,Y" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/eyxGmv/">Simple Bouncing Ball X,Y</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The ball has an x and y that is increased or decreased depending on it's location on the canvas. With this approach we are constantly checking and updating the and x and y variables.

Refactor using vectors:

<p data-height="265" data-theme-id="0" data-slug-hash="qpgPLg" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Simple Bouncing Ball Vector" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/qpgPLg/">Simple Bouncing Ball Vector</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

With this approach we encapsulate all the logic into a ball constructor and create a new instance on setup, we then call the move and show methods. The move method checks the balls location and adjusts the velocity vector based on the boundaries of the canvas, that adjusted vector is then added to the balls location.

It's best to checkout the links to see the full functionality.

Happy Coding!