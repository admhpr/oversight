---
title: 'The Visitor Pattern'
date: '24-05-2019T15:16'
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - behavioural
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

## Name: Visitor

## Type: Behavioural

## Use when you want to:

Add operations to an object without modifying the object.

From Wikipedia:

> In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existing object structures without modifying those structures. It is one way to follow the open/closed principle.

Real World Example:

> A zoo simulation where we have several different kinds of animals and we have to make them create a sound

Typescript Code Example:

```
// Visitee
interface Animal {
    accept(operation: AnimalOperation);
}

// Visitor
interface AnimalOperation {
    visitMonkey(monkey: Monkey);
    visitLion(lion: Lion);
    visitDolphin(dolphin: Dolphin);
}
```
Implementation
```

class Monkey implements Animal {
    public shout() {
        console.log('Ooh oo aa aa!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitMonkey(this);
    }
}

class Lion implements Animal {
    public roar() {
        console.log('Roaaar!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitLion(this);
    }
}

class Dolphin implements Animal {
    public speak() {
        console.log('Tuut tuttu tuutt!');
    }

    public accept(operation: AnimalOperation) {
        operation.visitDolphin(this);
    }
}

```

implement our visitor to add jump and sound behaviour:
```

class Speak implements AnimalOperation {
    public visitMonkey(monkey: Monkey) {
        monkey.shout();
    }

    public visitLion(lion: Lion) {
        lion.roar();
    }

    public visitDolphin(dolphin: Dolphin) {
        dolphin.speak();
    }
}

class Jump implements AnimalOperation {
    public visitMonkey(monkey: Monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    }

    public visitLion(lion: Lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    }

    public visitDolphin(dolphin: Dolphin) {
        console.log('Walked on water a little and disappeared')
    }
}
```
Usage:
```
const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

const speak = new Speak()
const jump = new Jump()

monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground! 

dolphin.accept(speak)  // Tuut tutt tuutt! 
dolphin.accept(jump)   // Walked on water a little and disappeared
```

<script async src="//jsfiddle.net/harps116/cr5gwks1/3/embed/js/"></script>
