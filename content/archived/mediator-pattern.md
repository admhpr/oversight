---
title: 'The Mediator Pattern'
published: true
publish_date: '2019-05-07T08:24'
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

## Name: Mediator

## Type: Behavioural

## Use when you want to:

Mediate two objects (colleagues) and how they communicate without the colleagues knowing about eachothers implementations.

From Wikipedia:

> In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.

Real World Example:

> A general example would be when you talk to someone on your mobile phone, there is a network provider sitting between you and them and your conversation goes through it instead of being directly sent. In this case network provider is mediator.

Typescript Code Example:


Set up the mediator:

```
interface IChatRoom { 
    showMessage(user: User, message: string)
}

// Mediator
class ChatRoom implements IChatRoom {
    showMessage(user: User, message: string) {
        const time = new Date()
        const sender = user.getName()

        console.log(`${time}[${sender}]:${message}`)
    }
}
```

The colleagues:

```
class User {
    constructor(private name: string, private chatMediator: IChatRoom) {
    }
    
    getName() {
        return this.name
    }
    
    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}

const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

john.send('Hi there!')
jane.send('Hey!')
```
<script async src="//jsfiddle.net/harps116/9bj7xyuh/10/embed/js/"></script>