---
title: 'The Observer Pattern'
published: true
desc: The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
date: '2019-05-17T09:05'
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - behavioural
external_links:
    process: false
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

## Name: Observer

(Otherwise known as "pub-sub")

## Type: Behavioural

## Use when you want to:

Define a dependency between objects so that whenever an object changes its state, all its dependents are notified.

From Wikipedia:

> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

Real World Example:

> A good example would be the job seekers where they subscribe to some job posting site and they are notified whenever there is a matching job opportunity.

Typescript Code Example:

Job seekers that need to be notified for a job posting:

```ts
class JobPost {
    constructor(protected title: string) { }

    public getTitle() {
        return this.title;
    }
}
class JobSeeker {
    constructor(protected name: string) { }

    public notify(job: JobPost) {
        // Do something with the job posting
        console.log('Hi ' + this.name + '! New job posted: ' + job.getTitle();
    }
}
```
Job postings to which the job seekers will subscribe:
```ts
class JobBoard {
    private subscribers = []
    subscribe(jobSeeker) {
        this.subscribers.push(jobSeeker)
    }
    addJob(jobPosting) {
        this.subscribers.forEach(subscriber => {
            subscriber.notify(jobPosting)
        })
    }
}
```
Usage:
```ts
// Create subscribers
const jonDoe = new JobSeeker('John Doe')
const janeDoe = new JobSeeker('Jane Doe')
const kaneDoe = new JobSeeker('Kane Doe')

// Create publisher and attach subscribers
const jobBoard = new JobBoard()
jobBoard.subscribe(jonDoe)
jobBoard.subscribe(janeDoe)

// Add a new job and see if subscribers get notified
jobBoard.addJob(new JobPost('Software Engineer'))

// Output
// John Doe has been notified of a new posting : Software Engineer
// Jane Doe has been notified of a new posting : Software Engineer
```
<script async src="//jsfiddle.net/harps116/1barv6dy/1/embed/js/"></script>
