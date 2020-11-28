---
title: 'The Adapter Pattern'
date: '2018-03-12T17:12'
desc: In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.
published: true
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

## Name: Adapter

## Type: Structural

## Use when you want to:

Make interfaces compatable

## Variants

### 

From Wikipedia:

> In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.
 
Real World Example:

> Consider that you have some pictures in your memory card and you need to transfer them to your computer. In order to transfer them you need some kind of adapter that is compatible with your computer ports so that you can attach memory card to your computer. In this case card reader is an adapter. Another example would be the famous power adapter a three legged plug can't be connected to a two pronged outlet, it needs to use a power adapter that makes it compatible with the two pronged outlet. Yet another example would be a translator translating words spoken by one person to another.

Main Purpose:

> The Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class

Typescript Code Example:

Let's say we had made a game called `Lion Hunter` now our marketing manager loves a good scandal and knows a game like this will generate a lot of social media attention. So we write some code:

```typescript
interface ILion { 
    roar()
}

class AfricanLion implements ILion { 
    roar() { 
        console.log('rooarrr!')
    }
}

class AsianLion implements ILion { 
    public roar() { 
        console.log('roawwwr!')
    }
}

```

Now we have a couple of lions, now let's create the hunter:

```typescript
interface IHunter { 
    hunt(lion : ILion)
}

class Hunter implements IHunter { 
    public hunt(lion: ILion) { 
        lion.roar()
    }
}
```

It's all working and our PM is very happy...but marketing comes back and says we need more sweet animals to kill, maybe dogs or something...


Rather than mess with the hunter set up we can make an adapter that uses the already established interface like so:


```typescript
interface IWildDog { 
    bark()
}

class WildDog implements IWildDog {
    public bark() {
        console.log('bark! bark!')
    }
}

class WildDogAdapter implements ILion {;

    constructor(protected dog: WildDog){
    }

    public roar(){
        this.dog.bark();
    }
}

```

Usage:

```typescript
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);
const lion = new AfricanLion()

const hunter = new Hunter();
hunter.hunt(lion)
hunter.hunt(wildDogAdapter);
```

Full Example:

<script async src="//jsfiddle.net/harps116/8psnf49z/8/embed/js,result/"></script>

