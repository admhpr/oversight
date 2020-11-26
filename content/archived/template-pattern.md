---
title: 'The Template Pattern'
date: '08-07-2019T00:21'
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - behavioural
feed:
    limit: 10
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

## Name: Template

## Type: Behavioural

## Use when you want to:

define a skeleton of how a certain algorithm could be performed, and defer the implementation of those steps to the children classes

From Wikipedia:

> In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets one redefine certain steps of an algorithm without changing the algorithm's structure.

 
Real World Example:

> Suppose we are getting some house built. The steps for building might look like

        * Prepare the base of house
        * Build the walls
        * Add roof
        * Add other floors

The order of these steps could never be changed i.e. you can't build the roof before building the walls etc but each of the steps could be modified for example walls can be made of wood or polyester or stone.


In the example we are imagining that we have a build tool that helps us test, lint, build, generate build reports (i.e. code coverage reports, linting report etc) and deploy our app on the test server.

First of all we have our base class that specifies the skeleton for the build algorithm

```
abstract class Builder {
    build(){
        this.test();
        this.lint();
        this.assemble();
        this.deploy();
    }

    abstract test(): void;
    abstract lint(): void ;
    abstract assemble(): void;
    abstract deploy(): void
}

```

The implementations:

```
class AndroidBuilder extends Builder{
    test(){     
        console.log('Running android tests');
    }

    lint(){
         console.log('Linting the android code');
    }

    assemble(){
         console.log('Assembling the android build');
    }

    deploy(){
         console.log('Deploying android build to server');
    }
}

class IosBuilder extends Builder{
    test(){
        console.log('Running ios tests');
    }

    lint(){
        console.log('Linting the ios code');
    }

    assemble(){
        console.log('Assembling the ios build');
    }

    deploy(){
        console.log('Deploying ios build to server');
    }
}

```

Usage:

```

const androidBuilder = new AndroidBuilder();
androidBuilder.build();

// Output:
// Running android tests
// Linting the android code
// Assembling the android build
// Deploying android build to server

const iosBuilder = new IosBuilder();
iosBuilder.build();

// Output:
// Running ios tests
// Linting the ios code
// Assembling the ios build
// Deploying ios build to server
```
<script async src="//jsfiddle.net/harps116/ofkdt6rz/2/embed/js/"></script>