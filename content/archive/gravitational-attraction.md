---
title: Gravitational Attraction
desc: If you want to see the pull of gravity, drop whatever you're holding right now. If you had listened, you may have seen your phone drop to the ground and bounce. 
date: '2018-10-12T15:19'
taxonomy:
    category:
        - blog
    tag:
        - javascript
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

If you want to see the pull of gravity, drop whatever you're holding right now. If you had listened, you may have seen your phone drop to the ground and bounce. 

It may even have a few scuffs, or that pen may have hit the desk. Whatever the scenario there is no denying gravity is something that we cannot escape from.

In fact everything is exerting gravity on everything else around it. The earth just happens to be big enough to make the other objects gravitational pull seem irrelevant.

Here's the formula for calculating the strengths of these forces.

![](grav_attraction.png)

Let's break down it down a bit:

`F` refers to gravitational force, this will be a vector calculated later.

`G` is the _universal gravitational constant_, which equals... *BIG NUMBER ALERT*.. `6.67428 X 10 ecks to the -11 meters cubed per kilogram per second squared`. Which matters if you're a physicist, but not really if you're a programmer. It's a constant that can be used to make forces in our virtual world weaker or stronger. It just could just as easily be set to one and forgotten about.

`m1` and `m2` are the masses of objects 1 and 2.Mass is also something that can be ignored.[See Newtons Second law of motion](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion). `F=MA` or `force equals mass times acceleration`. Objects on the screen don't have a mass, but if we define masses we can simulate "bigger" objects with more gravitational force.

`^r` refers to the vector pointing from object 1 and 2. This will be computed by subtracting the location of object 1 and 2.

`r squared` refers to the distance the between the two objects squared. Take the values we have looked at `G m1 m2`. The bigger the value the stronger the force. If we divide by something, that would be the opposite. The strength of the force is inversely proportional to the distance squared. The _farther away an object is, the weaker the force; the closer, the stronger_ like the attraction of gravity.

Now that the formula has been examined we can start to create our simulation in code.

There are two objects:

1. Each has a location.

2. Each has a mass.

3. There is also a constant `G` the _universal gravitational constant_.

Given these parameters, we can compute the `force` vector, the force of gravity. First the direction will be computed, `^r`. Then the strength of that force according to the masses and distance.

Let's write some pseudo code, one object will be the mover and another the attractor, some considerations beforehand:

The below table being a few ways for the two objects to interact.


| Task                                                                                                                                                              | Function                            |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| A function that takes the attractor and mover                                                                                                                     | attraction(a,m)                     |
| A function in the attractor class that receives a mover                                                                                                           | a.attract(m)                        |
| A function in the mover class that receives an attractor                                                                                                          | m.attractedTo(a)                    |
| A function in the attractor that calculates and return the vector between the mover and itself. That force is then passed to method on the mover that applies it. |  f = a.attract(m)   m.applyForce(f) |

Option 1 is not very OO, and 2 and 3 say essential the same thing. The fourth in this case seems the most appropriate. So we will have to create the `calculateForce` function in the `attractor`, and an `applyForce` method on the `mover`.


```
class Attractor {
  (float) mass;
  (Vector) location;
  (float) G

  attract((Mover) m ){
    force = location - m.location
    distance = force.magnitude()
    strength = (G * mass * m.mass) / (distance * distance)
    return force
  }

  display(){
    ellipse(location.x, location.y, mass*2, mass*2)	
  }
}

```

```
class Mover {
  constructor() {
    (Vector) position
    (Vector) velocity
    (Vector) acceleration
    (int) mass = 1
  }

  applyForce((Vector) force) {
    f = divide(force, mass);
    acceleration.add(f);
  }

  update() {
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);
  }

  display() {
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (position.x > width) {
      position.x = width;
      velocity.x *= -1;
    } else if (position.x < 0) {
      velocity.x *= -1;
      position.x = 0;
    }
    if (this.position.y > height) {
      velocity.y *= -1;
      position.y = height;
    }
  }
}
```
The draw loop:

```
mover;
attractor;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
  attractor =new Attractor();
}

function draw() {
  background(51);

  force = attractor.calculateAttraction(mover);
  mover.applyForce(force);
  mover.update();

  attractor.display();
  mover.display();
}
```
Here is a basic example with using the [p5 library](https://p5js.org/) with one mover:

<p data-height="265" data-theme-id="0" data-slug-hash="zmKaJN" data-default-tab="js,result" data-user="harps116" data-pen-title="Gravitational Attraction" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/zmKaJN/">Gravitational Attraction</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Simply by adding an array we can have many movers add apply the same algorithm to each instance of the mover class:

<p data-height="265" data-theme-id="0" data-slug-hash="xyEzQL" data-default-tab="js,result" data-user="harps116" data-pen-title="Gravitational Attraction Many Movers" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/xyEzQL/">Gravitational Attraction Many Movers</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Inspired by [The Nature of Code](https://natureofcode.com/book/chapter-2-forces/) by [Dan Shiffman](https://shiffman.net/)
