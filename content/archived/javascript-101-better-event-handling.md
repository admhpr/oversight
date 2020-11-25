---
title: 'JavaScript 101  ~  Better Event Handling'
date: '2017-06-01T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'web development'
        - 'javascript 101'
googledesc: 'A better way to event handle. ( from the previous post anyway ).'
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
### A better way to event handle

In a [previous post](http://www.adamharpur.com/blog/js-101-event-handling) I took at look event handling in JavaScript. The title of this post is a clue you can expect more of the same in this one.This time, my goal is to show that there is merit to spending some time refactoring and tidying up code once your idea has been stubbed out and is working, and hopefully in the following example I can make my case.

Note: there is no difference in functionality of the buttons, they just handle the click event differently.The JavaScript is heavily commented and is worth reviewing if you would like a deeper understanding of what is happening.

<p data-height="265" data-theme-id="0" data-slug-hash="XgbRwG" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Handler object in plain ol' JavaScript" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/XgbRwG/">Handler object in plain ol' JavaScript</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### a summary of what is happening

In technique one we are grabbing the element we want to listen on, then we add an event listener to that element, then we trigger a function on that event.

There is a cleaner and more explicit way, in technique two we add the 'onclick' attribute to the element and call a method of a 'handler' object which stores all potential events that could be triggered and returns the corresponding function.This greatly reducing the need to repeat code and makes the whole script more legible, not only for anyone else that reads your code but also for your future self.

This post was inspired by content fron this amazing and free course:
[Practical JavaScript | Watch and Code](https://watchandcode.com/p/practical-javascript)