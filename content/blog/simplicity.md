---
title: simplicity
date: 2021-11-29T06:05
desc: thoughts on simplicity
tags:
  - simplicity
  - principles
---

### Minimise implicit inputs and outputs

Implicit inputs are all of the inputs that aren’t arguments. And implicit outputs are all of the outputs that aren’t the return value.

A function with implicit inputs and outputs is like a component hardwired to other components. It’s not modular. It can’t be used in another place. And its behavior depends on the behavior 
of the parts it’s connected to.

### Design is about pulling things apart

Functions give us a very natural way to separate concerns. Functions separate what value is provided as an argument from how the value is used. Very often, we are tempted to put things together. 
Bigger, more complex things feel more substantial. But things that are pulled apart can always be composed back together. The hard part is figuring out useful ways to pull them apart.

* Easier to reuse

Smaller, simpler functions are easier to reuse. They do less. They make fewer assumptions.

* Easier to maintain

Smaller functions are easier to understand and maintain. They have less code. They are often obviously right (or wrong).

* Easier to test

Smaller functions are easier to test. They do one thing, so you just test that one thing. Even if there is no identifiable problem in a function, if you see something you can pull out, it’s worth at least trying to extract it. It might lead to a better design.

### Stratify the design when possible

Stratified design is a technique for building software in layers. Each layer defines new functions in terms of the functions in the layers below it. By training our sense of design, we can find arrangements of layers that make our software flexible to change, readable, easy to test, and much more reusable.

```
business rules -> entity operations -> copy-on-write -> built ins
```

* Pattern 1: Straightforward implementation 

The layer structure of stratified design should help us build straightforward implementations. When we read a function with a straightforward implementation, the problem the function signature presents should be solved at the right level of detail in the body. Too much detail is a code smell.

* Pattern 2: Abstraction barrier

Some layers provide an interface that lets us hide an important implementation detail. These layers help us write code at a higher level and free our limited mental capacity to think at a higher level.

* Pattern 3: Minimal interface

As our system evolves, we want the interfaces to important business concepts to converge to a small, powerful set of operations.
Every other operation should be defined in terms of those, either directly or indirectly.

* Pattern 4: Comfortable layers

The patterns and practices of stratified design should serve our needs as programmers, who are in turn serving the business. We
should invest time in the layers that will help us deliver software faster and with higher quality. We don’t want to add layers for
sport. The code and its layers of abstraction should feel comfortable to work in.
