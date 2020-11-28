---
title: JavaScript Beyond the Basics ~ Function Composition
desc:  In the Beyond the Basics series I'll be exploring more intermediate/advanced topics in JavaScript in an attempt to understand these topics more on a personal level. 
published: true
date: '2017-07-16T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'javascript beyond the basics'
        - programming
googledesc: 'A brief look at function composition in JavaScript.'
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

![](./images/bb.png?cropResize=300,300)
 
### function composition 
 
In the "Beyond the Basics" series I'll be exploring more intermediate/advanced topics in JavaScript in an attempt to understand these topics more on a personal level. 
 
On my Journey to learn JavaScript more deeply I can't help but come across a number of ideas around functional programming. It is gaining a lot of traction in the JS world and for good reason. Functional programming is extremely powerful, but there is a lot of jargon and new concepts to come to terms with, function composition is one of these terms that I'll be looking at in this post. 
 
### What is function composition? 
 
Function composition is the combing of two or more functions to make another entirely new function.Functions are treated like parts that can be combined to make new parts that process data in new ways. The concept is really powerful and useful. 
 
Let's look at a quick example:  
 
<script async src="//jsfiddle.net/harps116/pcv6fupy/3/embed/"></script> 
 
In the above function we first define two binary functions ( a function that takes two inputs ). Then we define a function ```compose``` that takes two functions as arguments ```f``` and ```g```, when then return a function that takes three arguments that are then passed to the binary functions that are accessible via [closure](http://adamharpur.com/blog/javascript-101-closure). 
 
Using functions in this way means that we can snap together the parts we need and make functions that do the work for us, many times the same basic functions can be reused over and over again saving rewriting a new function from scratch. 
 
Have a look at these example and you will start to get a feel for how functions can be used together to make new ones: 
 
In this example we take a param double it and then square the result by its new value. So in this case 5 gets added to itself to make 10, which is then squared by itself to make 100. Study the code and try to really see what is happening, there are comments to make things a little clearer. 
 
<script async src="//jsfiddle.net/harps116/wk2zLkvr/6/embed/"></script> 
 
 
Here we are defining a function to keep an index within a range, you can see that we use two functions called ```from``` and ```to``` to eventually create the final ```fromTo``` functions which keep the track of the numbers. A pillar of functional programming is to let the functions do the work, if you have something that is already written and can be utilized in making another function you need, then use it. 
 
<script async src="//jsfiddle.net/harps116/jk5rmjfa/2/embed/"></script> 
 
This one may be a little harder to follow, I was mainly just playing around with different concepts including currying which is something I will examine further in a future post. 
 
<script async src="//jsfiddle.net/harps116/6vtdndwj/4/embed/"></script> 
 
Some additional resources:  
 
* [Why use functional programming? by Eric Elliot](https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257) 
* [Master the JavaScript Interview: What is Function Composition? by Eric Elliot](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)
* [Functional Programming for JavaScript People by Chet Corcos](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504)