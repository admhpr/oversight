---
title: 'JavaScript 101 ~ Funky functions part 2'
published: true
date: '08-06-2017 11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'javascript 101'
        - 'funky functions'
googledesc: 'A look at ways to define and invoke functions in JavaScript.'
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

![](./images/ff.png?cropResize=300,300)
### funky functions part 2  
 
In the last funky functions I looked at the silently passed argument, ___argument___. I had full intention to talk about the other implicit argument ___this___ in part 2 but I found myself going down a different path. 
 
There are so many ways to invoke functions in JavaScript I thought I better take a closer look at that first. JavaScript implements the idea of first-class functions i.e. they are given the same privileges as objects, in fact they are objects. They can be passed into other functions as arguments, they can be stored in variables or as methods on objects and even returned from other functions. 
 
This is extremely cool and confusing at the same time, for me anyway. I intend to rectify the second part of that statement. So, let's look at some ways we can define and invoke functions. 
 
I'm looking at six different ways to add two numbers together in this example. As you lookthem, make a mental note of the differences,they are subtle.  
 
Note: There is also a way to create a function using 'new' ( e.g. fun = new function; ) however I believe it has depreciated/is more of a corner feature of JavaScript, you might see it only occasionally.For that reason I choose not to look at it in anymore detail( although one day I may have to ) .  
 
<script async src="//jsfiddle.net/harps116/uow32pb5/6/embed/"></script>
 
As you can see there is plenty of syntax to choose from, they all have their own use cases, which cannot really be shown in a simple add function. 
 
### Let's look at a few of the more common ones in a little more detail 
 
#### function declaration 
 
Firstly we use the 'function' keyword, followed by a compulsory function name, a list of parameters in a pair of parenthesis (param1, param2,...etc) and a pair of curly braces {...} that defines the body code ( the do stuff part ). 
 
<script async src="//jsfiddle.net/harps116/11k81t1p/3/embed/"></script> 
 
The function declaration creates a variable in the current [scope](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/) identified as the function name. The variable contains the function object. 
 
The function variable is moved (or hoisted) to the top of the current scope, this allows functions to be called before they have been declared, more on this at another time. 
 
Note: The function object holds its name in the 'name' property of itself. This is something that can viewed and used in debugging. 
 
#### function expression 
 
A function expression starts with the function keyword, any parameters then an optional name, followed by the body of the code. 
<code> function( param1, param2 ...etc){..//do stuff...}; </code>. 
 
This function expression can be: 
 
* Assigned to a variable <code> var expression = function( param1, param2 ...etc){..//do stuff...}; </code>. 
* Assigned as method on a object <code> method : function( param1, param2 ...etc){..//do stuff...}; </code>. 
* Used as a callback <code> .reduce(function( param1, param2 ...etc){..//do stuff...}); </code>. 
 
#### arrow function 
 
The arrow function uses parenthesis for the parameters <code>( param1, ..etc)</code>, followed by a fat arrow => and a pair of curly braces again for the body. 
 
An example:  
<code>var multiply = (x, y) => x*y;</code> 
 
Another One:  
<script async src="//jsfiddle.net/harps116/y7fhqc9k/embed/"></script> 
 
#### A little something extra 
 
Here's something I made for my own amusement: 
 
<p data-height="265" data-theme-id="dark" data-slug-hash="MoadRQ" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Different types of functions in JavaScript" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/MoadRQ/">Different types of functions in JavaScript</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p> 
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script> 
 
Some additional resources: 
 
* [A great article by Dmitri Pavlutin](https://rainsoft.io/6-ways-to-declare-javascript-functions/#1functiondeclaration) 
* [A deep dive into scope by Todd Motto](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)