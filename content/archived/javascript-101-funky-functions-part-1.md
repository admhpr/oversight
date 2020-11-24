---
title: 'JavaScript 101 ~ Funky functions part 1'
published: true
date: '01-06-2017 11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'javascript 101'
        - 'funky functions'
googledesc: 'A quick exploration of the arugments parameter and the use of the rest parameter in ES6.'
twittercardoptions: summary
articleenabled: false
article:
    '@context': 'http://schema.org/'
    '@type': NewsArticle
    image:
        '@type': ImageObject
    publisher:
        '@type': Organization
        logo:
            '@type': ImageObject
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
    '@context': 'http://schema.org/'
    '@type': Restaurant
    address:
        '@type': PostalAddress
facebookenable: true
person:
    '@context': 'http://schema.org/'
    '@type': person
    address:
        '@type': PostalAddress
event:
    '@context': 'http://schema.org/'
    '@type': Event
    location:
        '@type': Place
musicalbum:
    '@context': 'http://schema.org/'
    '@type': MusicAlbum
    byArtist:
        '@type': MusicGroup
---

![](./images/101.png?cropResize=300,300)
### Funky functions part 1.

JavaScript has its quirks and that's one of the many things I like about it, but it does have some potential gotchas that are worth noting. In the 'Funky functions' series I'll be looking at some of these quirks as well as taking a deeper dive into functions in JavaScript.

JavaScript really shines when it comes to functions and can do some really powerful things which I'm excited to explore. Like many misunderstood creatures there is often depth and complexity to be found underneath the surface.

Let's start by looking at a basic function:

<script async src="//jsfiddle.net/harps116/8v0r8c2r/2/embed/js,html,result/"></script>


In the above example we can see the structure of a function, first we write the key word 'function' --> give it a name (in this case 'basic')--> state any parameters ( in this case a and b ) --> open the body { --> what you want to do and any conditions you want to meet (none in this case) --> return the result of adding the two parameters --> }; close the body.

Then we store the result of the function in a variable called 'result'. Notice how we call the function like this 'basic( 2, 3 )' instead of a and b we now give the function something to work with. In reality 2 is assigned to a and 3 is assigned to b as the function runs.

note: when we define a function a and b are parameters and when we call a function a and b are arguments.

Now here's the interesting part there are also two implicit function parameters that are passed to functions silently. They are called _arguments_ and _this_. They can be accessed just like any other parameter within the body of the function ( the do stuff part ).

The _this_ parameter is the function context ( we'll explore _this_ at another time ) and an _arguments_ parameter that represents all arguments passed to the function.

note: ES6 provides a new kind of parameter the so-called rest parameter that has a prefix of three dots (...).  The rest parameter allows you to represent an indefinite number of arguments as an array.

### let's try something.

<p data-height="265" data-theme-id="dark" data-slug-hash="PjoEor" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Funky functions  part 1" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/PjoEor/">Funky functions  part 1</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Play around with this and remove "use strict" and you will start to see how the arguments parameter works.

### a quick ES6 example

The rest parameter that has a prefix of three dots (...).Have a look:

 <script async src="//jsfiddle.net/harps116/91bq5sd8/embed/js,html,result/"></script>
 
 
<code> args </code> is an array so we can use the [for of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

In the next funky functions we will look at _this_ and play around with the idea of context.

Some additional resources:
* [JavaScript tutorial on using the rest parameter](http://www.javascripttutorial.net/es6/javascript-rest-parameters/).
* [Secrets of the JavaScript Ninja 2nd Edition](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition), a  great book by John Resig, Bear Bibeault, and Josip Maras.