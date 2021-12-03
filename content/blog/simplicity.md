---
title: simplicity
date: 2021-11-29T06:02
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

#### Easier to reuse

Smaller, simpler functions are easier to reuse. They do less. They make fewer assumptions.

#### Easier to maintain

Smaller functions are easier to understand and maintain. They have less code. They are often obviously right (or wrong).

#### Easier to test

Smaller functions are easier to test. They do one thing, so you just test that one thing. Even if there is no identifiable problem in a function, if you see something you can pull out, it’s worth at least trying to extract it. It might lead to a better design.
