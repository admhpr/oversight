---
title: The Facade Pattern
desc:  A facade is an object that provides a simplified interface to a larger body of code, such as a class library.
date: '2019-03-07T17:09'
publish_date: '07-03-2019 17:09'
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

## Name: Facade

## Type: Structural

## Use when you want to:

Provide a simplified interface to a complex subsystem.

From Wikipedia:

> A facade is an object that provides a simplified interface to a larger body of code, such as a class library.

Real World Example:

> What do you do turn a computer on? Push the power button? Under the hood there is a lot going when you press that power button, like the power on self test, access to the first sector of the drive that is designated as a boot disk, setting up the boot loader and eventually loading the OS. This all happens behind the scences and all you have to worry about is the button.

Typescript Code Example:


The computer class.

```

class Computer { 
    public initPost() { 
        console.log('POST')
    }

    public accessFirstSector() { 
        console.log('... accessing first sector')
    }

    public initBootloader() { 
        console.log('... init boot loader')

    }

    public loadOS() { 
        console.log('... load OS')
    }

    public ready() { 
        console.log('... ready')
    }
}

```

The facade.

```

class ComputerFacade { 
    constructor(protected computer: Computer) { 

    }

    public powerOn() { 
        this.computer.initPost();
        this.computer.accessFirstSector();
        this.computer.initBootloader();
        this.computer.loadOS()
        this.computer.ready();
    }
}

```

Usage:

```
const myLapytop = new ComputerFacade(new Computer());

myLapytop.powerOn();

// POST ... accessing first sector ... init boot ... loader load ... OS ready

```

<script async src="//jsfiddle.net/harps116/kpyL8jwc/3/embed/js/"></script>