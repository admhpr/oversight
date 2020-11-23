---
title: 'Breaking ground'
published: true
date: '29-05-2017 00:00'
publish_date: '29-05-2017 00:00'
taxonomy:
    category:
        - blog
    tag:
        - 'web development'
        - ideas
twitterenable: true
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
musicalbumenabled: false
productenabled: false
product:
    ratingValue: 2.5
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

### first post 

Im excited to be writing my first post on here. I orginally had put together this site six months ago. Back then I was struggling with what web development actually was, how HTML markup worked and what CSS was used for. CSS can still give me some troubles from time to time. As I write this, the site on small screens still needs a little work, but I just wanted to get this project going sooner than later.

I'm using a CMS called grav and so far I've really enjoyed the experience. [Check out the site](https://getgrav.org/)

Everything seems to work right out of the box and it was fairly straight forward getting everything configured. They use a templating engine called [Twig](https://twig.sensiolabs.org/) which is a PHP templating engine. I've never used PHP before but the Twig syntax is pretty semantic. They use partials, which are pre-templated sections of a web page which you can use in combination to create whatever layout you want.

### installation
The installation went smoothly for the most part, although took some tinkering as I was locally developing in a [Docker](https://www.docker.com/) container which was a very convenient as I didnt have to host directly on my Linux box (devs like to call laptops boxes I've noticed). However this meant there was some config on my web hosting server as the container was a NGNIX container and not APACHE.

The easiest way I found was to download GRAV and extract the folder on the webroot (the top of the sites folder tree) and then just transfer over my local user folder.

### what's to come
I'm going to be getting back to basics in these posts and exploring the fundatmentals of JavaScript and modern web development. A couple of ideas I've had are:

* JavaScript 101 no frameworks to get better at frameworks
* Blockchain tech
* The future and current climate of tech
* ES6 and beyond
* Node.js
* Python
* Data Viz
* Design

Im going to leave it here for now.