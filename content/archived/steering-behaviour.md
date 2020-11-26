---
title: 'Steering Behaviour'
media_order: 'auto_2.png,auto_1.png'
date: '22-09-2018T09:28'
taxonomy:
    category:
        - blog
    tag:
        - p5
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
musicalbumenabled: false
productenabled: false
product:
    ratingValue: 2.5
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

## Autonomous Agents and Steering

The goal of this post is to examine simulations where the objects make decisions.

Previously I had looked at the way forces act on objects. In this post I wanted to explore objects that aren't inanimate and have some ability to make a choice about their behaviour.

This will start with a quick look at some initial considerations and basic examples:

### What is meant by autonomous agent?

* limited ability to perceive it's environment
* process the environment and calculate an action
* the calculation then results in a force being applied to it
* no global plan or leader

These agents or vehicle's operate in three steps:

1. action selection
1. steering
1. locomotion

They will have a desired velocity, they will want to do something, once that is established a steering force will then be calculated. Once the force is calculated it will then be applied to the object.

These are the basic ingredients that will create the vehicle:


### Steering


Let's look at a simple scenario. We are going to establish a scenario where our vehicle seeks a target.

![](auto_1.png)

In the drawing above we a have a vehicle that has a velocity and a target. The action being selected is a `seeking` behaviour. Here is how we will calculate steering.


```
steering = desire - velocity

```

On the surface this looks like a very simple formula.However the `desire` variable is one that will need some thought to determine. In this case the desired velocity is towards the target at `maxspeed`, we will create a vector that points at the target.


Here is how the vector is calculated. The desired velocity is established by creating a vector that is the result of `target - location`.The magnitude of the vector is set to it's established `maxspeed`. 

The steering is then calculated like so `desire - velocity`. The steering force is limited in some way and then the force `maxforce` is applied to send the vehicle to the target.

![](auto_2.png)

Here are those steps encapsulated in code:

<p data-height="265" data-theme-id="0" data-slug-hash="MqRKqy" data-default-tab="js,result" data-user="harps116" data-pen-title="Seeking Behaviour Example" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/MqRKqy/">Seeking Behaviour Example</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you can see the vehicle follows the mouse position, play around with the numbers and watch the behaviour change. `maxforce` and `maxspeed` will have the biggest impact.

Once the vehicle gets to it's target, currently it just continues and will then have to turn and head back. It would be nicer if it could sense that the target was approaching and slow down.

The key to this is to think about the vehicles desired velocity at any given point. This so far has always to be set to `maxpeed`. 

If we imagined that the target has a boundary around it, another circle with a larger radius than the target and the same centre point. We could set a rule that would say:

> if the vehicle is outside the boundary the vehicles desired velocity has a magnitude of `maxspeed`.

Once inside the boundary the rules change a bit:

> if at the edge of the boundary magnitude = `maxspeed`,if on the target magnitude = 0, with points in between falling somewhere between those two numbers dependent on location.	

To calculate this, the distance between the location and target is needed. Which we then can apply to the magnitude using a map function.

> speed = map( `distance`, 0, `boundary radius`, 0, `maxspeed` )

This will map the distance from target to current magnitude. So the final approach is this:

> if the distance is greater than the radius of the boundary it is at `maxspeed`, if the distance is less that the boundary radius it is some range between 0 and `maxspeed`.

<p data-height="265" data-theme-id="0" data-slug-hash="jvRqyV" data-default-tab="js,result" data-user="harps116" data-pen-title="Seeking Behaviour with arrival Example" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/jvRqyV/">Seeking Behaviour with arrival Example</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

With a few adjustments to the previous example we can set the vehicle to slow down and stop when approaching the target.

That was a quick look at autonomous agents. This post was heavily influence by the work [Daniel Shiffman](https://shiffman.net/) and [Craig Reynolds](http://www.red3d.com/cwr/steer/).