---
title: 'Programming ~ in the works part one'
published: true
date: '2017-07-25T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'web development'
        - ideas
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

### in the works

The project: build a quiz application in JavaScript.

One of the big challenges in programming is solving problems. When presented with an idea for an app or program there's normally a few questions that run through my mind: 

- Where do I start?
- Do I really know how to do this?
- What do I want this to do?

### where do I start?

Rather than write about a program after it's complete "in the works" aims to explore the build process, how to tackle the problems and how to form a working program. I am pretty new to the world of programming and app development ( less than a year ) and I often struggle to know where to start. Increasingly I've noticed the more important thing is to just start. Normally I stub out a quick plan on paper, roughly defining the functionality of the program then I fire up the text editor and go for it, often ideas for new approaches will come, almost like a reward for putting in the work. 

I think beginning a program with a rough plan gives me that extra reference point I need. The encapsulation of ideas on paper gives me a better understanding of my initial thoughts about the program. At the moment I have just started a the project ( a pure JavaScript quiz ) and I have just begun to write the key functions of the program.

Here is my inital paper plan:

![paper plan](images/paper-plan.jpg?cropResize=450,450)

I have been diving deeper in JavaScript and have avoided the allure of the big frameworks and decided to build a few apps in JavaScript to hopefully understand what the frameworks abstract and make easier.

### do I really know how to do this? 

Short answer, Yes! long answer, well kinda. Let me explain, after I have a rough plan stubbed out I open up my text editor and this what I'm faced with: 

![](images/empty.png?cropResize=450,450)

Like an artist looking at a blank canvas, a writer staring a blank sheet of paper. I know I just have to start, I make an `index.html` and stub out the basic structure, at this point the headphones are on and I begin to feel in the flow state. I look at my paper plan and begin to transfer the information into the fresh `app.js` file. I ask myself as I look at the code, do I really need a quiz object? how can I make this cleaner? I wonder what's happening on twitter? I have to ignore that last question, that's the procrastination monster trying to make my life difficult.

I decide that the main app file should be split into three objects, one for data ( the questions ), one for the ui ( creating DOM elements ), and one for the controller ( this the one I will return from the IIFE, as I've decided to use the [revealing module pattern](https://carldanley.com/js-revealing-module-pattern/) and wrap the three objects in one [Immediately-invoked function expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)). Already my paper plan looks pretty crappy, but I've wrote 70 lines of code and that crappy paper plan got me there.

So now I have the data modeled: 
 
![data](images/data.png?cropResize=450,450)
 
a UI: 
 
![ui](images/ui.png?cropResize=450,450)
 
and here's the index.html: 
 
![index](images/index.png?cropResize=450,450)


### What do I want this app to do?

Once I can display the data,  I ask myself what else do I want this to do? At the moment here are some things I'm working on: 
 
* move to the next question 
* move to the previous question 
* check if the answer is correct 
* keep check of the score 
* make sure a radio button is selected 

I'm defining these methods in a controller object which is returned the main function and is the exposed [API](https://en.wikipedia.org/wiki/Application_programming_interface).

The incomplete controller object looks like this: 

![](images/controller.png?cropResize=450,450)

The ouput is as follows:

![](images/right-ans.png?cropResize=450,450)

I can scroll through the questions and check if the answer is correct, that's more than half of the functionality already. In part two I'll be defining more methods and maybe I'll escape the console. Along the way I've refactored this inital version as I've went, trying to stick to [DRY principals](http://programmer.97things.oreilly.com/wiki/index.php/Don%27t_Repeat_Yourself) and keeping the code as clean and flexible as possible. The code will probably change more as I work, but that's what makes this medium so fun and rewarding. There are many ways to solve the same problem. Making the code as efficent and elegant as possible is something I strive to do.

The full source code for this project can be found [here](https://github.com/harps116/js-quiz).

Embrace the process and happy coding!