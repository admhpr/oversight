---
title: 'The Builder Pattern'
date: '2018-12-31T00:00'
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

## Name: Builder

## Type: Creational

## Use when you want to:

* do lots of things to build an object
* design classes whose constructors or static factories would have more than a handful of parameters.
 
From Wikipedia:

> The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor** anti-pattern.

Real World Example:

> Imagine you are at your local sandwhich place. You could just order a premade and call it good. Not having to answer any questions about how you would like it made.
But what if you wanted some things on there. What bread you would like? If you want tomato? The builder pattern aims to provide this type of customisation of objects.

Main Purpose:

> Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

<hr/>
** A quick note on the telescoping constructor. 

Example: 

```
enum BreadTypes { 
    wheat,
    rye,
    white,
    oat
}

class Sandwhich{
	// constructor is telescoping
	constructor(breadType: BreadTypes, size: number, cheese = true, lettuce = true, tomato = false) {
    		// instantiation logic
	}
}
```
When a constructor takes a large number of parameters which become increasing difficult to understand as the number of parameters grow.
This is considered an anit-pattern and should be avoided. The builder pattern is one way to solve this.


<hr/>

Back to the builder... 

Typescript Code Example:

```
enum BreadTypes { 
    wheat,
    rye,
    white,
    oat
}

class Sandwhich{
	constructor(builder : SandwhichBuilder) {
    		// ... 
	}
}

class SandwhichBuilder{

    public cheese: boolean;
    public tomato: boolean;


    constructor(public breadType: BreadTypes) { 

    }

    addCheese(): this { 
        this.cheese = true;
        return this
    }

    addTomato(): this { 
        this.tomato = true;
        return this
    }

    build(): Sandwhich { 
        console.log(this)
        return new Sandwhich(this)
    }
    
}

const sandwhich = (new SandwhichBuilder(BreadTypes.wheat))
    .addCheese()
    .addTomato()
    .build()
 
```

Full Example:

<script async src="//jsfiddle.net/harps116/e48pLck3/15/embed/js,result/"></script>

Of course this can also be done with a simple object as a param like so:

```
enum BreadTypes { 
    wheat,
    rye,
    white,
    oat
}

interface SandwhichBuilder { 
    breadType: BreadTypes,
    cheese: boolean,
    tomato: boolean
}
class Sandwhich{
	constructor(builder : SandwhichBuilder) {
    		// ... 
	}
}

const builder: SandwhichBuilder = { breadType: BreadTypes.rye, cheese: true, tomato: false}

const sandwhich = new Sandwhich(builder)

```
<script async src="//jsfiddle.net/harps116/pg0yqa1c/1/embed/js,result/"></script>

That was the builder pattern... now what to build?