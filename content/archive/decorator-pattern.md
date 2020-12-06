---
title: The Decorator Pattern
date: '2019-03-05T12:43'
desc: In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.
publish_date: '05-03-2019 12:43'
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

## Name: Decorator

## Type: Structural

## Use when you want to:

Change the behaviour of one object dynamically and transparently, without changing the class of objects.

From Wikipedia:

> In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

Real World Example:

> Say you ran a coffee shop offering multiple ways to serve coffee. How do you know how much to charge? You would add how much each variation costs and add that to the total cost of the coffee. See example below.

Main Purpose:

> Change the behaviour of one object dynamically and transparently, without changing the class of objects.

Typescript Code Example:

Start off with a basic coffee definition:

```ts
interface Coffee{
    getCost() : number;
    getDescription() : string;
}

class SimpleCoffee implements Coffee{
    public getCost(){
        return 10;
    }

    public getDescription(){
        return 'Simple coffee';
    }
}

```
We want to make the code extensible to allow options to modify it if required. Lets make some add-ons (decorators)

```ts
class AsLatte implements Coffee{

    constructor(protected coffee: Coffee){
        this.coffee = coffee;
    }

    public getCost(){
        return this.coffee.getCost() + 3;
    }

  public getDescription() {
    return `${this.coffee.getDescription()
    }, foam`
    }
}


class WithVanilla implements Coffee
{
      constructor(protected coffee: Coffee){
        this.coffee = coffee;
    }

    public getCost(){
        return this.coffee.getCost() + 5;
    }

  public getDescription() {
    return `${this.coffee.getDescription()
    }, vanilla`
    }
}

```
Usage:

```ts
let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new WithMilk(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee milk


someCoffee = new AsLatte(someCoffee);
console.log(someCoffee.getCost()); // 15
console.log(someCoffee.getDescription()); // Simple Coffee milk, foam

someCoffee = new WithVanilla(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // Simple Coffee milk, foam, vanilla
```


<script async src="//jsfiddle.net/harps116/t84vLspz/7/embed/js/"></script>