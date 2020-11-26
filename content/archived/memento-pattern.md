---
title: 'The Memento Pattern'
published: true
date: '12-05-2019T12:40'
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

## Name: Memento

## Type: Behavioural

## Use when you want to:
 
Add undo functionality.

From Wikipedia:

> The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).
 
Real World Example:

> Take the example of a text editor (i.e. originator), where whenever you perform some text the last text state is saved in memory (i.e. memento) so that you can get back to it and maybe get it restored using some action buttons (i.e. caretaker).

Typescript Code Example:

First of all we have our memento object that will be able to hold the editor state
```
class EditorMemento { 
    constructor(protected content: string) {
        
    }

    getContent() { 
        return this.content;
    }
}

```

Then we have our editor i.e. originator that is going to use memento object

```
class Editior { 
    protected content: string = "";

    type(words: string) { 
        this.content = this.content + words
    }

    getContent() { 
        return this.content;
    }

    save() { 
        return new EditorMemento(this.content);
    }

    restore(momento: EditorMemento) { 
        this.content = momento.getContent();
    }

}
```
The two classes can be used as follows:

```
const editor = new Editor()

// Type some stuff
editor.type('This is the first sentence.')
editor.type('This is second.')

// Save the state to restore to : This is the first sentence. This is second.
const saved = editor.save()

// Type some more
editor.type('And this is third.')

// Output: Content before Saving
console.log(editor.getContent())// This is the first sentence. This is second. And this is third.

// Restoring to last saved state
editor.restore(saved)

console.log(editor.getContent()) // This is the first sentence. This is second.
```

<script async src="//jsfiddle.net/harps116/6jscpng2/12/embed/js/"></script>
