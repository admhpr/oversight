---
title: 'The Bridge Pattern'
date: '2018-04-12T17:05'
desc: The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently"
published: true
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

## Name: Bridge

## Type: Structural

## Use when you want to:
Handle orthogonal ("Changing A does not change B") concerns separately. Think colors, shapes.


## Variants


From Wikipedia:

> The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently"

Real World Example:

>  Consider you have a website with different pages and you are supposed to allow the user to change the theme. What would you do? Create multiple copies of each of the pages for each of the themes or would you just create separate theme and load them based on the user's preferences? Bridge pattern allows you to do the second.

Main Purpose:

> Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

Typescript Code Example:

The webpage:

```ts

interface IWebPage {
    theme: Theme;
    getContent();
}


class About implements IWebPage{ 
    constructor(public theme) {
        this.theme = theme
    }
    
    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

class Careers implements IWebPage{
   constructor(public theme) {
       this.theme = theme
   }
   
   getContent() {
       return "Careers page in " + this.theme.getColor()
   } 
}
```

And the separate theme hierarchy,

```ts
interface Theme {
    getColor();
}

class DarkTheme implements Theme{
    getColor(){
        return 'Dark Black';
    }
}
class LightTheme implements Theme{
    getColor(){
        return 'Off white';
    }
}
class AquaTheme implements Theme{
    getColor(){
        return 'Light blue';
    }
}
```

Usage:

```ts
const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black";
console.log(careers.getContent()); // "Careers page in Dark Black";

```
<script async src="//jsfiddle.net/harps116/vsp3kdL1/11/embed/js,result/"></script>