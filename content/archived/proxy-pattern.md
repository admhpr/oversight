---
title: 'The Proxy Pattern'
date: '2019-03-25T17:05'
desc: A proxy, in its most general form, is a class functioning as an interface to something else. A proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.
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

## Name: Proxy

## Type: Structural

## Use when you want to:

Represent the functionality of anoter class.

From Wikipedia:

> A proxy, in its most general form, is a class functioning as an interface to something else. A proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked.

Real World Example:

> A door can be opened in many different way, either with a code or a key card. The doors functionality is to open and can be achieved in many different ways


Typescript Code Example:

Say we have a hotel room door:

```
interface IDoor { 
    open(): void;
    close(): void;
}

class HotelRoomDoor implements IDoor { 
    open() { 
        console.log('opening door');
    }

    close() { 
        console.log('closing door');
    }
}



```
Which we wanted to add some security to:

```
class SecureDoor { 
    constructor(protected door: IDoor) { }

    authenticate(code: number) { 
        return code === 1234;
    }
    open(code: number) { 
        if (this.authenticate(code)) { 
            this.door.open();
            return
        }

        console.log('wrong passcode');
        return
    }

    close() { 
        this.door.close()
    }
}

```

We can now use the secure door as a proxy to the actual hotel door like so:


```
const door = new SecureDoor(new HotelRoomDoor())

door.open(4567); // wrong passcode

door.open(1234); // opening door
door.close() // closing door
```

Full Example:

<script async src="//jsfiddle.net/harps116/mb81ufgr/embed/js/"></script>

