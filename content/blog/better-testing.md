---
title: better ui testing
date: 2022-02-18T06:23
desc: patterns for better UI testing 🧪
tags:
  - recipes
  - testing
---

> "You can't write good tests for bad code"

### Separation of Concerns

* Avoid mixing UI logic with business logic
* UI components should render data, avoid adding logic to UI

An example...

The spec:
A wiget costs $0.60. If you buy over 50, you get a 20% discount. Imagine we had a tightly coupled piece that looked like this: 

```js
const $widgetCount = $('#widget-count')
$widget.change((event) => {
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
const widgetPrice = 0.6
function widgetCost(price, amount) {
    if (amount > 50) {
    return price * amount * 0.8
    } else {
    return price * amount
    }
}

$widgetCount.change((event) => {
  const amount = parseInt (event.target.value)
  $("#price").value = widgetCost(widgetPrice, amount)
})
```
