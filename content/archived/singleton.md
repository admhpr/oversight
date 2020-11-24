---
title: 'The Singleton Pattern'
date: '06-01-2019 00:00'
publish_date: '06-01-2019 00:00'
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - creational
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

## Name: Singleton

## Type: Creational

## Use when you want to:

* To manage a shared resource.
* To read global state.

A quick note:

> There aren't a ton of reasons to ever use a singleton. If however you want global information to flow into the singleton and not back into the app again, then it is a acceptable solution. A logger is a good example of this.


From Wikipedia:

> In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Real World Example:

> There can only be one monarch of a country at a time. The same monarch has to be brought to action, whenever duty calls. The monarch here is singleton.

Main Purpose:

> Ensures that only one object of a particular class is ever created.

Typescript Code Example:

```
class Monarch {

    private static _instance:Monarch = new Monarch();

    private _duties = 0;

    constructor() {
        if(Monarch._instance){
            throw new Error("Error: Instantiation failed: Use Monarch.getInstance() instead of new.");
        }
        Monarch._instance = this;
    }

    public static getInstance():Monarch
    {
        return Monarch._instance;
    }


    public addDuties(value:number):void
    {
        this._duties += value;
    }

    public dutyTotal() { 
        return this._duties;
    }

}

const queen = Monarch.getInstance();

queen.addDuties(2);

const king = new Monarch(); // will not work
```
Full Example:

<script async src="//jsfiddle.net/harps116/um9sroc3/6/embed/js,result/"></script>