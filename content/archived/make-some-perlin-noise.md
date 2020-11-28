---
title: 'Make some ( Perlin ) Noise'
date: '2018-02-07T18:10'
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

## Making the random numbers seem more organic.

But there is another mathematical tool that we have at our disposal to make some nice sets of numbers. Enter:

## Perlin Noise

Perlin Noise allows us to make smooth randomness, It was originally developed to create textures in 3d graphics. Let's say we wanted to make a vase seem like it was made of marble. Rather than hand create we can use an algorythm to generate a texture.

So what does Perlin Noise look like?


Say we picked a random number at any given moment in time, the timeline would look totally random like so:

<p data-height="265" data-theme-id="0" data-slug-hash="qpgmWo" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Random Wave" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/qpgmWo/">Random Wave</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The X axis represents our timeline and each point is a random number at that given point in time with a sequencial x value as it iterates across the width of the canvas and a series of vertices at random y values that create the wave shape.

The output is showing us the values as we move through time, but it isn't that pleasant to look at, the peaks and troughs are very harsh.

We could use Perlin Noise to make a nice smooth pattern. Yes, the numbers are still random but they seem to have a closer relationship to eachother:

Here we scanning Perlin Noise space, we get a noise value returned from p5.js's noise function which is a number between one and zero which we then multiply by the height of the canvas. This us allows us to plot the points. We increase the X value by the increment and set the start position to a start variable which is also incremented. This lets us move across the Perlin Noise graph.

<p data-height="244" data-theme-id="0" data-slug-hash="EorZra" data-default-tab="result" data-user="harps116" data-embed-version="2" data-pen-title="Perlin Noise 1D" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/EorZra/">Perlin Noise 1D</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

That was quick at look at what Perlin Noise can do for us in terms of creating Random Numbers. This has a lot of potential and I'm hoping to explore more advanced topics involving Perlin Noise.

Check out Daniel Shiffman's great series on the [Nature of Code](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK), this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go.