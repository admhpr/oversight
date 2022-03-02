---
title: better ui testing
date: 2022-02-18T06:23
desc: patterns for better UI testing 🧪
tags:
  - recipes
  - testing
---

> "You can't write good tests for bad code"

### Why Test?

Why bother writing so much more code? sometimes more than the code that is being tested

* Provides confidence, no fear to change code
* Increases code quality
* You are forced to aske yourself "What is this component really doing?"
* Encourages modular code development
* Living documentation of the code

### Separation of Concerns

* Avoid mixing UI logic with business logic
* UI components should render data, avoid adding logic to UI

An example...

The spec:

> A wiget costs $0.60. If you buy over 50, you get a 20% discount. 

Imagine we had a tightly coupled piece of code that looked like this: 

```js
const $widgetCount = $('#widget-count')
$widgetCount.change((event) => {
  const amount = parseInt (event.target.value)
  const totalCost = 0.6 * amount
  const $price = $("#price")
  if (amount > 50) {
    $price.value(totalCost * 0.8)
  } else {
    $price.value(totalCost)
  }
})
```

It is hard to tell where the UI ends and the business logic starts, let's look at a possible refactor:

```js
const $widgetCount = $('#resistors-count')
const widgetPrice = 0.6

funcrion applyDiscount(sum){
  return sum * 0.8
}

function widgetCost(price, amount) {
  const sum = price * amount
  return amount > 50 ? applyDiscount(sum) : sum
}

$widgetCount.change((event) => {
  const amount = parseInt (event.target.value)
  $("#price").value = widgetCost(widgetPrice, amount)
})
```
Now, you can see where the business logic ends and the UI begins - they are literally separated in two different functions.

### Know what to test

Write tests that assert your component's public interface, and treat its internals as a black box. A single test case would assert that some input (user interaction or change of props) provided to the component results in the expected output (render result or emitted custom events).

The benefit of this approach is that as long as your component's public interface remains the same, your tests will pass no matter how the component's internal implementation changes over time.

* Props render relationship
* Event reactions
* Given input what is the expected output


### Know what NOT to test

* Impletation details
* Derived data
* Frameworks and libraries
