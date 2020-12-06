---
title: 'The Prototype Pattern'
published: true
desc: The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
date: '2019-01-13T00:00'
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

## Name: Prototype

## Type: Creational

## Use when you want to:

Clone an object rather than create one

From Wikipedia:

> The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.

Real World Example:

> Remember dolly? The sheep that was cloned! Well we can clone objects aswell

Main Purpose:

> Create object based on an existing object through cloning.

Typescript Code Example:

```ts
enum SheepType{ 
    mountain,
    fluffy,
    friendly,
}

class Sheep{ 
    constructor(private _name: string, private _category: SheepType) { 

    }

    setName(name: string) { 
        this._name = name;
    }

    setCategory(category: SheepType) { 
        this._category = category
    }

    identify() { 
        return "Hi my name is " + this._name + " and I'm a " + SheepType[this._category] + " sheep."
    }

    static clone(sheep: Sheep): Sheep { 
        let copy = <Sheep>{}
        
        return new Sheep(sheep._name, sheep._category)
    }
}
const sheepy = new Sheep('sheepy', SheepType.mountain);

const dolly = Sheep.clone(sheepy);
```

Full Example:

<script async src="//jsfiddle.net/harps116/p1yq2c7n/8/embed/js,result/"></script>


