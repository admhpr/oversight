---
title: Recursion
media_order: recursion.jpg
date: '2018-09-30T15:50'
desc: Recurions  is one of those topics in programming that I have had an interest in. Partly because infinate recursion is well... so weird.
publish_date: '30-09-2018 15:50'
taxonomy:
    category:
        - blog
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

### Recursion

Recurions  is one of those topics in programming that I have had an interest in. Partly because infinate recursion is well... so weird. It reminds of me of the [Eternal Return Theory](https://en.wikipedia.org/wiki/Eternal_return). 


However in code we have control of the boundaries and can stop the recursive call at anypoint. This can yield some interesting results

But first let's graple with what recursion actually is...

say we have a function:

```
function someFunction(){

}
```

and it calls itself:

```
function someFunction(){
	someFunction()
}
```

It would be known as a recursive call and is a technique for solving certain types of problems. A basic example is the [factorial calculation](https://en.wikipedia.org/wiki/Factorial).

The factorial of a number written as `n!`, `n` being the number.

```
4! = 4 * 3 * 2 * 1
3! = 3 * 2 * 1

```

the above can also be written as:

```
4! = 4 * 3!

```

Or in general terms:

```
n! = n * (n - 1)!

```

and finally in english:

```
_the factorial of n is defined as n times the factorial of n-1_

```

The english version defines factorial in the the definition of factorial. This self reference is a clue that the problem can be solved with recurion.

To illustrate the difference between a recursive implementation and a iterative one I am going to calculate the factorial of a number with a loop first:

<iframe height="400px" width="100%" src="https://repl.it/@harps116/iterative-factorial?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Now here is a example using a recursive stragegy:

<iframe height="400px" width="100%" src="https://repl.it/@harps116/recursive-factorial?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

Notice there is no iteration, this is key. 

Recursion is unusual at first but is really beautiful and can create some interesting patterns.


Here is a simple circle that recursively gets smaller and smaller until the radius equals two

<p data-height="265" data-theme-id="0" data-slug-hash="aROOmX" data-default-tab="js,result" data-user="harps116" data-pen-title="Recursive circle" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/aROOmX/">Recursive circle</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This pattern is pretty trival and could be displayed using an iterative approach. Here is one that needs recursion to work. For every circle displayed draw a circle half it's size to the left and right of that circle.

<p data-height="265" data-theme-id="0" data-slug-hash="xyGGge" data-default-tab="js,result" data-user="harps116" data-pen-title="Recursive circles two" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/xyGGge/">Recursive circles two</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

We a little more code we can draw a circle above and below aswell.

<p data-height="265" data-theme-id="0" data-slug-hash="QZbbGq" data-default-tab="js,result" data-user="harps116" data-pen-title="Recursive circles four" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/QZbbGq/">Recursive circles four</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Recursion is both elegant and useful and an important tool on the programmer's toolbelt.

Inspired by [The Nature of Code](https://natureofcode.com/book/chapter-8-fractals/) by [Dan Shiffman](https://shiffman.net/)