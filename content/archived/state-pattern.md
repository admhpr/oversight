---
title: 'The State Pattern'
date: '04-07-2019T01:43'
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

## Name: Command

## Name: State

## Type: Behavioural

## Use when you want to:

Change the behavior of a class when the state changes.

From Wikipedia:

> The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface.
Real World Example:

> 
Typescript Code Example:

An example of the state patterns use case is a text editor, it lets you change the state of text that is being typed, i.e. if you have selected bold, it starts writing in bold, if italic then in italics etc.

First of all we have our state interface and some state implementations

```
interface WritingState{
    write(words: string) : void;
}

class UpperCase implements WritingState{
    write(words: string){
        console.log(words.toUpperCase());
    }
}

class LowerCase implements WritingState{
    write(words: string){
        console.log(words.toLowerCase())
    }
}

class DefaultText implements WritingState{
    write(words: string){
        console.log(words)
    }
}
```

The Editor:

```
class TextEditor{
    protected state : WritingState;

    constructor(state: WritingState){
        this.state = state;
    }

    public setState(state: WritingState){
        this.state = state;
    }

    public type(words: string){
        this.state.write(words);
    }
}
```

Usage:

```
const editor = new TextEditor(new DefaultText());

editor.type('First line');

editor.setState(new UpperCase());

editor.type('Second line');
editor.type('Third line');

editor.setState(new LowerCase());

editor.type('Fourth line');

// Output:
// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line
```
<script async src="//jsfiddle.net/harps116/qphyzjva/1/embed/js/"></script>