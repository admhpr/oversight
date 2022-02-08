---
title: Building better software
date: 2022-02-05T07:02
desc: Ideas on building software 🏗️
tags:
  - recipes
  - meta
---

### Manage complexity

>  The biggest problem in the development and maintenance of large-scale software systems is complexity — large systems are hard to understand.


The threads of complexity...

> The major contributor to this complexity in many systems is the handling of state and the burden that this adds when trying to analyse and reason about the system. Other closely related contributors are code volume, and explicit concern with the flow of control through the system.

[Out of the Tarpit - Ben Mosely, Peter Marks](http://curtclifton.net/papers/MoseleyMarks06a.pdf)

#### Balance and harmony

A key idea is ensure that state, flow of control, and code volume are in balance and harmony. What is the application modelling (state), how does the application interact with that model (flow of control) and how much logic is needed to achieve the desired outcome (code volume).

Any application with a shared mutable state can be difficult to test or share code across multiple components.

#### Micro complexity

Micro complexity is addressed at the component level. In order for component code to be testable, it should avoid hidden state and adhere to the single responsibility principle. The first step to fixing issues with hidden state is utilizing dependency injection.

Ask yourself...

> Can I know the result of this at all times?

> Can I reuse this code?

> Can I test this code?

It is impossible to write good tests for bad code, you can write hacky tests...perhaps. Commit to writing testable code. 

How?...

* Reduce hidden state
* Do not voilate the single responsibility principle
* Avoid nested logic 

#### Meso complexity

Meso complexity is addressed at the inter component level.

* Define state
* Model Objects as nouns
* Methods as verbs
* Making decisions
* Iterating over things

#### Macro complexity

Macro complexity is addressed at the application or applications level.

