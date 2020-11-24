---
title: 'The Command Pattern'
published: true
date: '30-04-2019 15:00'
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

## Name: Command

## Type: Behavioural

## Use when you want to:

Encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

From Wikipedia:

> In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.


Real World Example:

`client` -> `invoker` -> `command` -> `reciever`

> You (the `client`) are switching (the `command`) on a light (the `reciever`)
via a remote control (the `invoker`).

Typescript Code Example:

The `receiver` has the implementation of every action that could be performed:

```
// Receiver
class Bulb { 
    public turnOn() { 
        console.log('bulb on!')
    }

    public turnOff() { 
        console.log('bulb off!')
    }
}

```

There is also an iterface for each command and an implementation of that command:

```
interface ICommand { 
    execute(): void;
    undo(): void;
    redo(): void;
}

// Command
class TurnOn implements ICommand { 
    constructor(protected bulb: Bulb) { }
    public execute() {
        this.bulb.turnOn();
     }
    public undo() {
        this.bulb.turnOff();
     }
    public redo() { 
        this.execute();
    }
}

class TurnOff implements ICommand { 
        constructor(protected bulb: Bulb) { }
    public execute() {
        this.bulb.turnOff();
     }
    public undo() {
        this.bulb.turnOn();
     }
    public redo() { 
        this.execute();
    }
}
```

Then an `invoker` with whom the client will interact with to process the command:

```
class RemoteControl { 
    submit(command: ICommand) { 
        command.execute();
    }
}
```

And now we can tie it all together:

```
// receiver
var bulb = new Bulb();

// commands
var turnOn = new TurnOn(bulb);
var turnOff = new TurnOff(bulb);

// invoker
var remote = new RemoteControl();

// client
remote.submit(turnOn);
remote.submit(turnOff);
```
