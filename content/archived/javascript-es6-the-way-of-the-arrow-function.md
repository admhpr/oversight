---
title: 'JavaScript ES6 ~ The Way of the Arrow Function'
published: true
date: '01-07-2017 11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'javascript ES6'
        - 'web development'
googledesc: 'How and when to use the arrow function in JavaScript.'
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

![](./images/arrow.png?cropResize=300,300)  
 
### Why arrow functions? 
 
Doing what is comfortable at the moment is not the best approach to learning how to code, for me anyway. Pushing yourself outside of your comfort zone is one of the most important parts of learning and getting good at a new skill. It's for that reason I have been making a conscious effort to embrace ES6. 

In this post ( the clue is in the title ) I'll be looking at the new ES6 addition arrow functions.

Arrow functions are not only more condensed compared to ES5 functions but they also solve common problems with the use of ```this``` ( this is covered [here](http://adamharpur.com/blog/javascript-101-this) ) and scope. The ```this``` of an arrow function is picked up from it's surroundings and is therefore lexical i.e. uses [closure](http://adamharpur.com/blog/javascript-101-closure). 
 
Let's look at some examples: 
 
First let's look at a function in the ES5 syntax which will then be shown in the ES6 arrow function syntax below it. 
 
ES5: 
<script async src="//jsfiddle.net/harps116/pcv6fupy/3/embed/"></script> 
 
ES6: 
<script async src="//jsfiddle.net/harps116/h7nbh0m7/3/embed/"></script> 
 
Using the arrow syntax has reduced the amount of code needed and has also maintained the readability. Some would argue that the ES6 syntax is more readable, but that's assuming that the reader understands the ES6 syntax. So let's make sure that's the case. The easiest comparison is the ES5 function expression. Which looks like this: 
<script async src="//jsfiddle.net/harps116/skwLm15g/embed/"></script> 
 
vs the arrow syntax of the same function which looks like this: 
<script async src="//jsfiddle.net/harps116/e7twuh1r/embed/"></script> 
 
Both are stored in a variable ( I am using ```const``` to store arrow which is a ES6 syntax, but more on that another time ), both accept two parameters ```function( a, b )``` , ```( a, b )``` and return the result of those two parameters when they are added together ```{ return a + b }```, ``` => a + b ```. They are then passed two arguments ```expression( 1, 2 )```, ```arrow( 1, 2 )``` the result of which is stored in another variable ( again I am using the ES6 syntax in 'arrow' with ```let``` ) which is then output by the log function ( which is just a utility to output to the result pane in [jsfiddle](https://jsfiddle.net/) ). 
 
Some [function composition](http://adamharpur.com/blog/javascript-beyond-the-basics-function-composition) using the arrow syntax: 
<script async src="//jsfiddle.net/harps116/5tx1o893/2/embed/"></script> 
 
```comp``` takes a function ```f``` returns a function that takes another function ```g``` which returns a function that takes a parameter x. Which then calls ```g``` which is passed ```x``` the result of which is passed to ```f```. Here's the same functionality written in the ES5 syntax: 
<script async src="//jsfiddle.net/harps116/5tx1o893/4/embed/"></script> 
 
### A practical example 
 
First in ES5: 
<script async src="//jsfiddle.net/harps116/p7jwd9nc/1/embed/"></script> 
 
ES6: 
<script async src="//jsfiddle.net/harps116/raf24tjy/embed/"></script> 
 
The important difference between the two is that there is no need to define the context of ```this``` in the ES6 version. Using ''' var that = this'''  is clunky at best, of course you could use ```bind``` or pass ```this``` in as an extra parameter to ```.map``` but that is still not ideal. ES6 takes care of all the awkward sidestepping. 
 
### when not to use arrow functions 
 
Arrow functions have use cases, and it is best if they are not used for the sake of using them. When using arrow functions '''this''' is ___not___ bound to anything, but simply inherits it from the scope of it's parent ( which is why it doesn't need defined in the "prefixArray" '''.map''' as its parent is the constructed instance of Prefixer ). However that sort of behavior can be the opposite of what we what in these cases: 
 
* click handlers ( we want '''this''' to bind to what was clicked not the global '''window''' object ) 
* object methods ( we want '''this''' to bind to the object not the global '''window''' object ) 
* prototype methods ( we want '''this''' to bind to the object not the global '''window''' object, note using arrow functions inside these methods is a great way to access the correct '''this''' context as shown in the example above). 
* when you want access to the '''arguments''' object more on the '''arguments object''' [here](http://adamharpur.com/blog/javascript-101-funky-functions-part-2)
 
Arrow functions are great when used correctly and they are a welcome edition to JavaScript native toolkit. Here are some additional resources:  
* [Wes Bow's "When Not to use an Arrow Function"](http://wesbos.com/arrow-function-no-no/) 
* [exploringjs post on arrow functions](http://exploringjs.com/es6/ch_arrow-functions.html) 
* [Eric Elliot's "Familiarity Bias is Holding You Back: It’s Time to Embrace Arrow Functions"](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)
 
