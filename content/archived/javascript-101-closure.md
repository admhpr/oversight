---
title: 'JavaScript 101  ~  Closure'
date: '2017-06-20T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'web development'
        - 'javascript 101'
googledesc: 'A quick look at scope and closure in JavaScript.'
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
### Closure 
 
In this post I'm going to be taking a look at the idea of closure and how it can be used in JavaScript. Closure can seem almost mystical at first glance and can certainly be a mind bender. 
 
### Scope 
 
Before diving any deeper into closure let's first wrestle with the idea of scope.... 
 
<script async src="//jsfiddle.net/harps116/rez3x5vr/embed/"></script> 
 
The variable names are fairly self explanatory, but as you can see the inner functions have access to any variables declared in the function they are nested inside, but the outer functions can not access any variables declared inside the functions that are nested within them. This is important. 
 
### Moving on.. 
 
Closure is often leveraged in JavaScript to make modules, in order stop variables interacting with each other and causing unexpected side effects. Closures make code more compact, readable and beautiful and promote functional re-use. Understanding closure will greatly improve your ability to write clean and reusable code in JavaScript. 
 
So lets begin to try and wrap our heads around the concept. The first step to understanding closure is to understand that a reference to function can be returned to a variable, what's that supposed to mean? ..let's look at a quick example. 
 
<script async src="//jsfiddle.net/harps116/drkbbaL3/embed/"></script> 
 
In this case that variable is <code>hi</code>, it can then be invoked and the returned function that it stores will run. 
 
### How does this differ from other languages? 
 
A programmer using Java would think of the function as returning a pointer to a function, and that the variables <code>speak</code> and <code>hi</code> were each a pointer to a function. 
 
There is a key difference between a Java pointer to a function and a JavaScript reference to a function. In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure. 
 
This means that the inner function has access to the outer functions variables, and therefore has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables ( although it is probably best to avoid global variables all together )..  
 
This may sound weird, but I think of the outer function as almost blossoming the inner function which is still attached to outer leaves as it blossoms like this... 
<br/><br/> 
![](./images/bud_.jpg?cropResize=350,350){.blog_img} 
 
In fairness I did give you a weirdness warning.Regardless, In most other common languages, after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed. 
 
The above code has a closure because the anonymous function <code>function() { log(`Hi ${name}`); }</code> is declared inside another function, <code>hello()</code>. In JavaScript, if you use the function keyword inside another function, you are creating a closure. 
 
This is an extremely powerful idea, and allows us to expose aspects of our code whilst simulating privacy, let's look at a more interesting example. 
 
<script async src="//jsfiddle.net/harps116/kkg8rfo2/3/embed/"></script> 
 
As always the code is commented to hopefully highlight what is going on, this is a simple example of how to expose a public api ( the things a user or program can interact with ), using a module pattern ( and closure ) in JavaScript. 
 
Some additional resources:  
* [Closures with ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/) 
* [Organizing JavaScript Functionality a course on Frontend Masters](https://frontendmasters.com/) 
 
