---
title: 'The Chain of Responsibility'
published: true
date: '14-04-2019 12:19'
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

## Name: Chain of Responsibility

## Type: Behavioural

## Use when you want to:

Build a chain of objects. A request enters from one end and keeps moving along the chain until it finds a suitable handler. 

From Wikipedia:

> In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain.


Real World Example:

> Say for example you had three methods of payment. You wanted a payment to be handled by the balance which had enough to cover the charge, if method `A` did not have the funds method `B` would try to handle the payment and so on until the payment is complete or cannot be hanldedby any of the accounts.

Typescript Code Example:

Here's what all accounts must be able to do:

```
abstract class Account {

    protected successor: Account;
    protected balance: number;

    public setNext(account: Account): void {
        this.successor = account;
    }

    public pay(amountToPay: number): void {
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} using ${this.constructor.name}`)
        } else if (this.successor) {
            console.log(`Cannot pay using ${this.constructor.name}, Proceeding...`)
            this.successor.pay(amountToPay);
        } else {
            throw new Error('Not enough balance');
        }
    }

    public canPay(amount: number): boolean {
        return this.balance >= amount;
    }
}
```

Now let's setup the payment mentods:

```

class Bank extends Account {
    constructor(protected balance) {
        super()
    }
}

class Paypal extends Account {
    constructor(protected balance) {
        super()
    }
}

class Bitcoin extends Account {
    constructor(protected balance) {
        super()
    }
}

```

Tie them together and handle a payment:

```
const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300)

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);

// Cannot pay using Bank, Proceeding...
// Cannot pay using Paypal, Proceeding...
// Paid 259 using Bitcoin
```