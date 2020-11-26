---
title: 'The Strategy Pattern'
published: true
date: '25-06-2019T01:52'
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

## Name: Strategy

## Type: Behavioural

## Use when you want to:

Switch the algorithm or strategy based upon the situation.

From Wikipedia:

> In computer programming, the strategy pattern (also known as the policy pattern) is a behavioural software design pattern that enables an algorithm's behavior to be selected at runtime.

Real World Example:

> Consider the example of sorting, we implemented bubble sort but the data started to grow and bubble sort started getting very slow. In order to tackle this we implemented Quick sort. But now although the quick sort algorithm was doing better for large datasets, it was very slow for smaller datasets. In order to handle this we implemented a strategy where for small datasets, bubble sort will be used and for larger, quick sort.

Typescript Code Example:

Strategies that conform to the interface:

```
interface SortStrategy {
    sort(data: number[]): number[]
}

class BubbleSortStrategy implements SortStrategy{
    sort(data){
        console.log("Sorting using bubble sort");
        // Do sorting
        return data;
    }
}

class QuickSortStrategy implements SortStrategy{
    sort(data){
        console.log("Sorting using quick sort")
        return data;
    }

}
```
The Sorter:

```
class Sorter { 
    protected sorter;
    constructor(sorter: SortStrategy) { 
        this.sorter = sorter;
    }

    sort(data): number[] {
        return this.sorter.sort(data);
    }
}
```
Usage:

```
const dataset = [1, 5, 4, 3, 2, 8];

const bubbleSorter = new Sorter(new BubbleSortStrategy());

bubbleSorter.sort(dataset);

const quickSorter = new Sorter(new QuickSortStrategy());

quickSorter.sort(dataset);
```

<script async src="//jsfiddle.net/harps116/xynw4fzp/embed/js/"></script>
