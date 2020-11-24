---
title: 'The Factory Pattern'
date: '28-12-2018 12:14'
publish_date: '28-12-2018 12:14'
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

### Name: Factory

### Type: Creational

### Use when you want to:

* Generate an instance for a client without exposing any instantiation logic to the client
* Hide the dependencies of class instantiation from clients

### Variants

### Simple

From Wikipedia:

> In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a function or method that returns objects of a varying prototype or class from some method call, which is assumed to be "new".

Real World Example:

> You are building a house that needs doors. You can either build the door from scratch, with all the things needed to do so (glue, tools, knowledge) or you can call the factory and have them build a door for you.

Main Purpose:

> Simple factory simply generates an instance for client without exposing any instantiation logic to the client
 
Typescript Code Example:

Door interface and implementation

```
interface IDoor{
	getWidth: () => number;
	getHeight: () => number;
}

class WoodenDoor implements IDoor {
  constructor(public width: number, public height: number){
  }

  getWidth(): number{
    return this.width
  }

  getHeight(): number{
    return this.height
  }
}

```
Door Factory that makes an instance of the Door

```
class DoorFactory{
	public static makeDoor(w : number, h: number){ 
        return new WoodenDoor(w, h)
    }
}
```

And can be used like so:

```
const door = DoorFactory.makeDoor(100, 200)

console.log(door.getWidth())
console.log(door.getHeight())

const anotherDoor = DoorFactory.makeDoor(50,100)
```
Full example:

<script async src="//jsfiddle.net/harps116/bkmf1Lct/2/embed/js,result/"></script>

### Method

This is a variation on the simple factory we looked at above. This method is used when there is some generic processing on a class but want to vary what kind of things the processing is done on.

From Wikipedia:

> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

Analogy:

> Consider the case of a hiring manager. It is impossible for one person to interview for each of the positions. Based on the job opening, she has to decide and delegate the interview steps to different people.

Main purpose:

> It provides a way to delegate the instantiation logic to child classes.

Typescript Code example:

Setup variations of question askers
```
interface IInterviewer{
    askQuestions: () => void;
}

class Developer implements IInterviewer {
  askQuestions() {
    console.log('Asking about design patterns!')
  }
}

class CommunityExecutive implements IInterviewer {
  askQuestions() {
    console.log('Asking about community building')
  }
}
```

Asking the question
```
abstract class HiringManager{

    // Factory method
    protected abstract makeInterviewer() : IInterviewer;

    public takeInterview(){
        const interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}
```
Who asks the question
```
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}
```
Usage
```
const devManager = new DevelopmentManager()
devManager.takeInterview() // Output: Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview()// Output: Asking about community building 
```

Full Example:

<script async src="//jsfiddle.net/harps116/nubskw0c/8/embed/js,result/"></script>

### Abstract

From Wikipedia:

> The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes

Analogy:

> Back to doors. Say this time we need a wooden door from a wood shop and a iron door from a iron shop. For each type of door you would need a different worker to create and fit the door.

Main Purpose:

> A way to group individual but related/dependant factories together without specifying their concrete class

Door interface implementation
```
interface Door {
    getDescription() : void;
}

class WoodenDoor implements Door{
    public getDescription(){
        console.log('I am a wooden door');
    }
}

class IronDoor implements Door{
    public getDescription(){
        console.log('I am an iron door')
    }
}
```
Door Fitter and implemenation
```
interface DoorFittingExpert {
    getDescription() : void;
}

class Welder implements DoorFittingExpert{
    public getDescription(){
        console.log('I can only fit iron doors');
    }
}

class Carpenter implements DoorFittingExpert{
    public getDescription(){
        console.log('I can only fit wooden doors');
    }
}
```
Grouping the dependencies together
```
interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
}

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory implements DoorFactory {
    public makeDoor(): Door {
        return new WoodenDoor();
    }

    public makeFittingExpert(): DoorFittingExpert{
        return new Carpenter();
    }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory implements DoorFactory{
    public makeDoor(): Door {
        return new IronDoor();
    }

    public makeFittingExpert(): DoorFittingExpert{
        return new Welder();
    }
}
```

Usage

```

const woodenFactory = new WoodenDoorFactory()

const woodenDoor = woodenFactory.makeDoor()
const woodExpert = woodenFactory.makeFittingExpert()

woodenDoor.getDescription()  // Output: I am a wooden door
woodExpert.getDescription() // Output: I can only fit wooden doors

// Same for Iron Factory
const ironFactory = new IronDoorFactory()

const ironDoor = ironFactory.makeDoor()
const ironExpert = ironFactory.makeFittingExpert()

ironDoor.getDescription()  // Output: I am an iron door
ironExpert.getDescription() // Output: I can only fit iron doors
```
Full Example:

<script async src="//jsfiddle.net/harps116/o683w0fg/4/embed/js,result/"></script>

And that in a nutshell is the factory pattern!