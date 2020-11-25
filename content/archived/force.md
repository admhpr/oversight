---
title: Force
date: '2018-03-07T18:14'
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

## So what is a force?

Simply:

`A vector that causes an object with mass to accelerate.`

All objects with mass experience force. Some common forces: gravity, tension, spring, buoyancy, air resistance.

These are things we want to model within our code to create a dynamic simulation of the real world.

Now that we know what a vector is ( an entity with magnitude and acceleration ).

And what acceleration is ( the change in velocity over time ) we can apply these concepts to our object with mass, or at least simulate it.

A quick hark back to high school for a refresher on Newtons law's of motion, a great foundation for our simulation and a ready made framework to simulate motion.

So what happens in the real world according to Newtons law's?

Newtons first law:

`An object at rest stays at rest and an object in motion stays in motion`

The point: An objects velocity never changes unless something acts upon it. In other words a force. i.e friction, air resistance. However in a vacuum or if there is a net force of zero the object will stay in it's current state.

Newton's second law:

`Force = Mass * Acceleration`

This is powerful clue as to what we about to do in code. In a previous example we looked at a basic motion algorithm in our update function ( the function that updates the location of the ball in the draw loop ).

<img src="https://steemitimages.com/DQmb66ZbsKVuobn5aQ5KzUEz5RZzy99MmSfRYS6L8GmSCmJ/acc_vel.gif" alt="moving ball" width="100%"/>


The [code](https://codepen.io/harps116/pen/jZYgZw) for the image.

Here's the basic idea of the function:

```
update() {

acceleration = n;

velocity.add(acceleration);
location.add(velocity)

}
```

Let's take a step back for a second, We can now look at this simple function from a different perspective.

```
Newtons second law: 

F = M * A

Solving for A

A = F / M

Let's say M is one ( programmers can just make up world where the mass of everything is one ) 

A = F

```

So we could say: 

```
update() {

acceleration = force; <-- our cornerstone! 

velocity.add(acceleration);
location.add(velocity)

}

```

So now we have a way to get creative, we have to calculate force. This is our key to applying different forces to our objects to create different types of behavior.

Newton's third law:

`For every action there is an equal and opposite reaction`

The point: forces always occur in pairs. The two forces are of equal strength but in opposite directions.

This is something we don't really have to worry about this in our simulations as we are currently only working with relatively simple examples.

I'm planning on doing a follow up where I actually write some code to incorporate our new perspective on motion!

Happy coding!

Check out Daniel Shiffman's great series on the [Nature of Code](http://natureofcode.com/book/introduction/), this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go.