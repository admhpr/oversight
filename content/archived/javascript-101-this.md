---
title: 'JavaScript 101  ~  This'
published: true
date: '2017-06-16T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'web development'
        - 'javascript 101'
header_image: '1'
googledesc: 'A look into the ''this'' keyword in JavaScript.'
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

* ![](./images/101.png?cropResize=300,300)
### this 

If you have spent some time reading or writing JavaScript, you will have no doubt came across the `this` keyword. In other object orientated languages, the `this` keyword refers to the current instance of the class. In JavaScript the value of this depends on the context of the function and where it is called.Not knowing this or rather `this` can be confusing. 
 
In a [previous post](http://adamharpur.com/blog/javascript-101-funky-functions-part-1) I looked at the silently passed argument `argument`, where I mentioned that there where two, `this` is the second and more widely used of these implicit arguments. 
 
In this post I'm going to be looking at `this` in four different situations: 
* In a regular function. 
* When a function is called as a method. 
* In a function that's being called as a constructor. 
* When you explicitly set the value of `this` manually using `bind`, `apply`, or `call`. 
 
Let's get started... 
 
#### In a regular function 
<script async src="//jsfiddle.net/harps116/d9zpz8dx/embed/"></script> 
 
In a regular function ( or anywhere outside of a function ) when in **non strict mode** `this` refers to the window object, or the root of the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). In **strict mode** i.e.. when `"use strict"` is at the top of the JavaScript file, `this` is undefined, which is probably more desirable and will reduce any unwanted side effects. 
 
#### When a function is called as a method 
<script async src="//jsfiddle.net/harps116/o5y9oLyu/7/embed/"></script>
 
`this` inside of an object refers to the object on which the method is being called on. In the above example this refers to the anObject..object. Gordon Zhu founder of [Watch and Code](https://watchandcode.com/p/practical-javascript), uses the term "the left of the dot rule", which I think is a great way to identifying what `this` will refer to. 
 
For example if we had something that looked like `object.innerObject.oneMoreObj.doSomething()` using the "left of the dot rule", We can quickly see that doSomething is a method of the oneMoreObj object. 
 
#### In a function that's being called as a constructor 
<script async src="//jsfiddle.net/harps116/tzt2ys7x/8/embed/"></script>
 
In a function that's being used as a constructor, `this` points object that has been created from the constructor. 
 
#### When you explicitly set the value of `this` manually using `bind`, `apply`, or `call`. 
<script async src="//jsfiddle.net/harps116/m7k88ujv/embed/"></script> 
 
Bind sets the 'this' of the function, call and apply execute the function and set the `this`. Call and apply are very similar except apply takes arguments as an array and call takes its arguments as a comma separated list. I look at the first letter to remember the difference, apply: array, call: commas. It is worth noting once bind is set, it is bound once and cannot be changed. 
 
That was `this`. 
 
Some additional resources: 
* [Watch and Code: Practical JavaScript](https://watchandcode.com/p/practical-javascript) 
* [This on Stack Overflow](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work)