---
title: The Flyweight Pattern
date: '2019-03-12T12:16'
desc: In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - structural
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

## Name: Flyweight

## Type: Structural

## Use when you want to:

Avoid recomputing data that has previously been computed. (memoization).

From Wikipedia:

> In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.

Real World Example:

> Say you went to a tea stall at a busy market and ordered some tea. They might make more than one cup to use for the person behid you in the line and therefore save the resources used to boil the water.

Main Purpose:

> It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

Typescript Code Example:

Setup teapot:

```
// Anything that will be cached is flyweight.
// Types of tea here will be flyweights.
class Teapot{
    constructor(public teaType: string) { 
        console.log(`Teapot filled`)
    }

    public getTeaType() { 
        return this.teaType
    }
}
```
Our tea maker and shop:

```
// Acts as a factory and saves the tea
class TeaMaker{
    protected availableTea = new Map([]);

    public make(preference: string) {
        if (!this.availableTea.has(preference)) {
            this.availableTea.set(preference, new Teapot(preference))
        }

        return this.availableTea.get(preference)
    }
}

class TeaShop{
    protected orders = [];
    public constructor(protected teaMaker: TeaMaker) { 
    }

    public takeOrder(teaType: string, table: number) {
        this.orders[table] = this.teaMaker.make(teaType)
    }

    public serve(){
        for( const order in this.orders) {
            console.log(`Serving ${this.orders[order].getTeaType()} to table #${order}`)
        }
    }
}
```
Usage:
```
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder('lemon', 1);
shop.takeOrder('milky', 2);
shop.takeOrder('mint', 5);
shop.takeOrder('lemon', 3);

shop.serve();

// Teapot filled
// Teapot filled
// Teapot filled
// Serving lemon to table #1
// Serving milky to table #2
// Serving mint to table #5
// Serving lemon to table #3

// note that the Teapot is filled three times but the served four
```
<script async src="//jsfiddle.net/harps116/w2zqxhba/1/embed/js/"></script>