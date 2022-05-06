title: stratified design
date: 2022-05-06T06:01
desc: ideas on stratified design 🥮
tags:
  - recipes
  - meta
---

### Straightforward implementation
The layer structure of stratified design should help us build straightforward implementations. When we read a function with a straightforward implementation, the problem the function signa-
ture presents should be solved at the right level of detail in the body. Too much detail is a code smell.

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
