---
title: 'Maze Generation'
media_order: '01-grid.png,02-cell-corners.png,03-cells.png,04-walls.png'
date: '2018-09-11T23:05'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - programming
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

Using a depth first search and a recursive back tracking algorithm

and this [Wiki Page](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker).

## How?

First I have to think about how I am going to approach the maze.

I'm using an HTML5 canvas which I will divide into a grid with each cell being it's own object. The program will figure out which walls of the cells to remove to create a maze.

![](01-grid.png)

So, the cell object will need to know it's location on the grid, it's row number ( y ) and column number ( x ).

It will also need to know it's wall status ( whether it is opened or closed ).

In this next chunk of code I will create the grid and cell objects.

I will need the following variables:

* The grid width, height

* The cell width, height 

* The row total ( grid height / cell height )

* The column total ( grid width / cell width )

Once the values are calculated I will iterate through each row and for each row iterate through the columns and each cell will get its row number and column number.

Then calling the show method ( this is where the render logic will be ) I can render the cell. It's worth mentioning I am using the [P5.js](https://p5js.org/reference/) library to do most of the rendering. It makes drawing in the browser much easier and it's really fun to use.

Here is our starting point:


<p data-height="650" data-theme-id="0" data-slug-hash="dqJZWz" data-default-tab="js,result" data-user="harps116" data-pen-title="Grid" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/dqJZWz/">Grid</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This is rough and will be cleaned up as the program evolves, I normally like to get something working before I refactor.

The cells are lines that run the perimeter of the cell using a line that connects these points.( Our x and y coordinates draw from the top left ).

![](02-cell-corners.png)

> Note the `this.walls` array on the cell, this will tell our cell whether it's wall is enabled or disabled in this order: top, right, bottom, left

I spent some time refactoring the plot method to DRY up the function. This is the base for the next stage.

Now we can break down our algorithm which follows these steps:

* Make the initial cell and mark it as visited
* While there are unvisited cells:
    
    if any neighbours of the current cell have not been visited.
       
        1. Choose randomly one of the unvisited neighbours

        2. Push the current cell to the stack

        3. Remove the wall between the current cell and the chosen cell

        4. Make the chosen cell the current cell and mark it as visited
    
    else if stack is not empty
        
        1. Pop cell from the stack
        
        2. Make it the current cell

Above is the break down of the algorithm from the [wiki page](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker). 

Here is the maze in place without the backtracking functionality:

<p data-height="650" data-theme-id="0" data-slug-hash="JappvQ" data-default-tab="js,result" data-user="harps116" data-pen-title="Grid with generator and removing walls" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/JappvQ/">Grid with generator and removing walls</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



The were a couple tricky parts which I'm going to break down a little further:

Checking the neighbours to see if they have been visited and exist:

All of the logic for this is in the `checkNeighbours` function.When called looks at the surrounding cells and checks if they exist and if so if they have been visited ( by looking the visited flag ).

Here a diagram to show the relative `col` and `row` number props on each cell:

![](03-cells.png)

Once we know they exist the function then checks if the cell has not been visited, if that is the case it assed to the `notVisited` array which returns a random cell or nothing.

if nothing, then the program knows that all have been visited and act accordingly ( this is where the backtracker comes in ).

Another trickier part was the ability to remove walls: 

The `removeWalls` function holds all the logic to determine which should be removed.

Here is how it works:

We have a pair of cells one being the current cell and the other being the neighbour with each needing a wall removed, it is the difference in the x property of each ( for the right or left ) and y ( for the top or bottom ) which decides which wall will be removed for the cell. there is an array on each cell that has four values like so:

`this.walls = [ true, true, true, true ]`

This indicates if the top, right, bottom, or left wall is displayed for that cell. So first the difference is computed and if the value is -1 the neighbour is to the right or bottom of the current cell and if the value is 1 the neighbour is to the left or top.

![](04-walls.png)


In the above scenario the left wall of the neighbour is removed and the right wall of the current cell.

The corresponding walls are then switched off for the cell. This will give the maze it's shape.

There is still one problem, if we run into a dead end the cell stops moving and thr program stops. This is where the backtracker comes in.

This will allow the cell to know where it has been and to jump back to that position.

A stack is used to keep track of these past positions. This is represented in code by an array that gets items ( in this case the current cell before switching to next ) pushed and popped on and off of it. This is know as a last in, first out structure.

In Javascript there is already the push and pop functionality on an array which makes it the perfect data structure to hold our data.

There isn't much code to add, and here is our finished maze generator:

<p data-height="650" data-theme-id="0" data-slug-hash="NLyBJJ" data-default-tab="js,result" data-user="harps116" data-pen-title="Grid with generator and removing walls and backtracking" class="codepen">See the Pen <a href="https://codepen.io/harps116/pen/NLyBJJ/">Grid with generator and removing walls and backtracking</a> by Adam Harpur (<a href="https://codepen.io/harps116">@harps116</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


That was a brief look at maze generator in Javascript. This is my attempt to dive deeper into some of the work by [Daniel Shiffman](https://shiffman.net/) and his various [coding challenges](https://www.youtube.com/watch?v=HyK_Q5rrcr4&t).