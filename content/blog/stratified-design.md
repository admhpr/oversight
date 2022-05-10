---
title: stratified design
date: 2022-05-06T06:01
desc: ideas on stratified design 🥮
tags:
  - recipes
  - meta
---

### Straightforward implementation
The layer structure of stratified design should help us build straightforward implementations. When we read a function with a straightforward implementation, the problem the function signature presents should be solved at the right level of detail in the body. Too much detail is a code smell.

### Abstraction barrier
Some layers in the graph provide an interface that lets us hide an important implementation detail. These layers help us write code at a higher level and free our limited mental capacity to think at a
higher level.

### Minimal interface

As our system evolves, we want the interfaces to important business concepts to converge to a small, powerful set of operations.
Every other operation should be defined in terms of those, either directly or indirectly.

### Comfortable layers

The patterns and practices of stratified design should serve our needs as programmers, who are in turn serving the business. We
should invest time in the layers that will help us deliver software faster and with higher quality. We don’t want to add layers for sport. The code and its layers of abstraction should feel comfort-
able to work in.

### Straightforward code solves a problem at a single level of detail

If we code without regard to design, we often have code that is hard to read and modify. But why is it so hard? Most often, the code is hard to read because you have to understand it at different levels of detail. There is a lot to understand to read the function. Straightforward implementations try to narrow the levels of detail you need to understand in order to read the code.

### Stratified design helps us target a specific level of detail

While it’s not an easy formula, we can train our sense of design to look out for these levels of detail with a variety of clues in the code. We can then make appropriate changes. The call graph gives us a rich source of clues about levels of detail. The code itself gives us a lot of clues, but there’s often too much to read at once to get a big picture view. A call graph can show us how many functions are defined in terms of each other. As we
draw the graph, we can place functions at layers that correspond to their level of detail. Using the function signature, body, and call graph, we have a lot of information to help us write straight-forward code.
