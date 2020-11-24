---
title: 'Sierpinski Triangle'
date: '28-10-2018 14:22'
taxonomy:
    category:
        - blog
    tag:
        - p5
        - fractals
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
musicalbumenabled: false
productenabled: false
product:
    ratingValue: 2.5
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

The Sierpinski Triangle is rather beautiful. I thought might be interesting to try and create it in code. Luckily I was able to find many others who had attempted the same thing. I did a little reading on what was involved and the steps are pretty straight forward:

1. Start with an equilateral triangle and locate the midpoints of each of the sides of the triangle.
1. Connect each of the midpoints with a line segment, and remove the triangle you just created.
1. You now have three equilateral triangles within the original equilateral triangle. Repeat steps 1 and 2 for each of these triangles. This process can be continued indefinitely or until you choose to stop.

Here's my attempt:

<p data-height="344" data-theme-id="0" data-slug-hash="BqbvgR" data-default-tab="js,result" data-user="harps116" data-pen-title="Sierpinski Triangle" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/BqbvgR/">Sierpinski Triangle</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>