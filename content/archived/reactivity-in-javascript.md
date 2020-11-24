---
title: 'Reactivity In JavaScript'
date: '23-05-2018 18:17'
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
---

# Reactivity in JS

> context: I have been using [Vue.js](https://vuejs.org/)for a number of side projects and really enjoy working with it, I also use [Knockout.js](http://knockoutjs.com/)a lot in work which uses a similar approach. I wanted to dive into the abstracted functionality a little deeper to help me understand the libraries I work with.

How do changes in state translate to changes in the DOM?

Let's start with a variable:

`let a = 10`

and another one: 

`let b = a * 10`

the complete picture now looks like this:

```javascript

let a = 10
let b = a * 10

```

We want `b` to always be 10 times of a. We now have a problem, when `a` changes `b` will not be aware of that change and not update, no matter what `a` is,`b` will always be the original value of `a` times 10.

This is a imperative and procedural implementation which does not solve the problem fully, what we need is an approach that is declarative and object oriented.

In an ideal world we would have a function that looked like this: 

```javascript

onStateChanged( () => {
   b = a * 10
})

```

This function would run every time `a` changes to update the value of `b`. So how do we implement this function? We can see that it takes a function that is then ran to set the new state.

> jargon buster: a program is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system.

[![react.png](https://s14.postimg.cc/b7icfd9o1/react.png)](https://postimg.cc/image/vrn6dupf1/)

> This is an approach that React uses and why setState is always used to well.. set the state.

There is another way that involves taking the state object and converting it into a reactive object.

Our `onStateChanged` function will be renamed `autorun` why will become clearer as we move through the examples.

Let's implement a mini data observer and look at how Vue.js handles things.

first we need to define accessors using the [Object.defineProperty() API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). This will allow us later to get and set the current state.

![convert.png](https://steemitimages.com/DQmXYQesGUkgJ2EVcGWdH1tKFo7wGAtw8v9hACRbC5Sb9TM/convert.png)

[View the code]( https://jsfiddle.net/harps116/wc2e0vgv/16/ )

That seems to be working as expected, we have a few more parts to create. Later we will change the name to observe rather than convert.

We are going to create a dependency class that keeps track of the things our state depends on, it will also notify those that depend on it that it has changed.

![dep.png](https://steemitimages.com/DQmVjNcmz6vjhJhSbjhbisgdHeWKntN1ezUQtnQuzB4Z5xm/dep.png)

![dep-2.png](https://steemitimages.com/DQmWb7LoH3tqzyzYRB9reE4N946rgsYYBYRvR64RMghMCfj/dep-2.png)

[View the code](https://jsfiddle.net/harps116/7wf1vc2j/16/)

This of course is not the complete picture and a simplified version of the general idea. Notice the wrappedUpdate. This is a little trick to ensure that the correct function is added to the subscribers list. As it is assigned to the activeUpdate which our dependency instance checks for in its depend method, we can ensure that what we add to the subscribers list is currently active. 

Putting it all together: 

![3.png](https://steemitimages.com/DQmU9uNzVuRC6xFwjikr3sD2XLyU4bJLPu3UjJvWwjLCJND/3.png)
![3.2.png](https://steemitimages.com/DQmccyMkujPF8CqmGqunJY43H6hbYwH9vUuxaaAy91GkzfX/3.2.png)
![3.3.png](https://steemitimages.com/DQmNyz6mtQmaYaFkGsHLtqCzQfHviMtX8sbFNdEAxhZw4Pp/3.3.png)

[View the code](https://jsfiddle.net/harps116/gL46sfxs/4/)

Read through the code and play around with the state. You see it log out the changes.

You can read more about reactivity in Vue [here](https://vuejs.org/v2/guide/reactivity.html).

This idea may change a little in up coming version of Vue. You can read more about it [here](https://blog.cloudboost.io/reactivity-in-vue-js-2-vs-vue-js-3-dcdd0728dcdf).

Happy Coding!