---
title: 'How Flappy Bird Was Made'
date: '21-03-2018 18:17'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - '100 days of learning'
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
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

### A Journey back in time..

In 2013 a game was released that in the following year would take the world by storm. A young Vietnamese programmer named Dong Nguyen released a game that he would later remove from the App store from guilt of overuse and the addictive nature of the game. That game was Flappy Bird.

![flappy-bird.jpg](https://steemitimages.com/DQmeb1KvmvKkkGMwC4R7LgCvPNr9ajFWSjaHJCHyZxniYbn/flappy-bird.jpg)
 
Today I am going to inform you on how to make it. Now this is just one way of doing it, there is no way I can go into any level of detail to have you publishing on the app store in a short write up like this one.  Think of the following steps like a template for anyone who would like to get started and learn more about theories behind programming and animation. I have been writing code professionally for close to year so my relative knowledge is fairly limited but hopefully I can convey the main aspects of this program.

I will briefly talk about the tools involved and then go on to talk about the concept used to generate a basic physics and game engine using a coding style known as Object Oriented Programming.

### Tooling up

The Language I will be using is known as JavaScript which is a dynamic , high-level, weakly typed, prototype-based, multi-paradigm interpreted programming language that runs in the browser, currently the only language to run natively in the browser. That’s a lot of jargon for a dead simple and really a fun first language to learn.

I will also be using a library called [P5.js](https://p5js.org/) which is a library written in JavaScript that is a browser implementation of the Proccessing a library designed to make coding more accessible to artists, designers, beginners and educators. ( touch on what a library is ).

![p5.png](https://steemitimages.com/DQmengU6tTprJhhsGvdRS42G6F1gPQqTszdejzSBFpYkChk/p5.png)

Due to the nature of JS, all of the logic can run in the browser, it can be implemented on websites such as [CodePen](https://codepen.io) or [JSFiddle](https://jsfiddle.net/) which give people an environment to run browser based languages. This is the lower barrier to entry and getting started that there is in programming.

### The Process

Initially we must write the code to create a canvas or run our program ( or to use a P5 term the sketch ). The library introduces us to the idea of a setup and a draw concept. The setup allows us to create the things that we are going to use within the draw loop that continues to run throughout the lifespan of the sketch.

Luckily that is very easy in P5.js which uses a very simple syntax to allow rich functionality. Programming languages in general aim to express the sequence of actions required to create functionality. This is as more for the human side of the equation as it is for the machine underneath. 

JS’s syntax allows for the concept of Object Orientated Programming, which is for another talk. Simply we are going to create the things needed for the game in code. We need a bird and pipes. That’s it. We then need to give behavior to the bird and the pipes.

Let’s line up the steps in creating the Flappy Bird Game:
* Create a canvas add a bird and many pipes.  
* To the bird add x and y position, a way for it to appear and update in the draw loop. Add forces, gravity, lift, drag.
*  Make the pipes appear at random points on the canvas.
*  Add the functionality to react to the space bar being pressed.

Here is the game action:

<p data-height="265" data-theme-id="0" data-slug-hash="KQwOKL" data-default-tab="js,result" data-user="harps116" data-embed-version="2" data-pen-title="Crappy Bird" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/KQwOKL/">Crappy Bird</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


The Flappy Bird game uses a series of objects with behaviour that reacts to user input. The input simply increases the lift when the space bar is pressed the bird checks it’s y position with that of the pipe to see if its been hit. If that is the case it turns the pipe red. The pips also have a decreasing x position that give the impression that the bird is moving forward. 

The secret to learning how to write code is to first ask how something does what it can do and then write the steps to do it. Libraries like P5.js make exploring ideas easy and enjoyable and I would recommend checking out their [website](https://p5js.org/) for more info.