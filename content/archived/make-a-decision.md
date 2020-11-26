---
title: 'Make a Decision'
date: '17-01-2018T18:06'
taxonomy:
    category:
        - blog
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
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

I'm going the explore the things to consider when planning a new project.

![Ptolemy.png](https://steemitimages.com/DQmYGiYy5zVWPXF4SfQuE2DHqGLm4Nr3AEeD7XrUGnxP5xf/Ptolemy.png)
[Ptolemy](https://en.wikipedia.org/wiki/Ptolemy)

## Make a Decision 
 
As a web application developer I make a lot of decisions each day. The art of programming is making decisions ahead of time and writing the code to deal with the potential decisions the program should know how to make depending  on the interactions of the user or other programs. 
 
Some examples: 
 
Decide if the user  is logged in 
Decide what data they would like 
Decide if a button is clicked 
Decide if another program needs data from a database 
 
These are the micro decisions that allow the program to run. 
 
As a builder understands the formation of the bricks and the grain of the wood, the engineer understands why the walls are there and the importance of the angle the frames join at. 
 
This is the same for application development. I have to decided to look at the decision making process for making the bigger picture decisions that a software engineer or architect may have to make. 
 
## Define the Decision Clearly 
 
I have decided to make a data driven application that responds quickly to user interaction. 
 
## Consider All the Possible Choices 
 
There are an infinite number of ways to make a program ,the five following patterns are some of the most common: 
 
### Layered (n-tier) architecture 

This is a very common approach and found in a number of the larger frameworks for application development. The code is arranged so the data collected at the top tier and works it’s way down to the database. 

i.e. form data from website  → send to server → process the data → add to database. 

It’s common for teams for developers to work on different tiers as each layer is independent from the layers below it. 
 
### Event-driven architecture 

As the name suggests this pattern centers on responding to events, there is normally one main unit that receives data and then delegates it to a separate module that then handles the particular data type. This type of handoff is considered to be event generation and processing. 
This type pattern is often used in interactive web documents that deal with events in the browser like mouse clicks or key strokes. 

### Micro kernel architecture 

There are many applications that do the same operations over and over again in slightly different ways depending on the data and the task involved. The Micro kernel architecture is designed to deal with this  scenario.

It separates a minimal functional core from extended functionality and customer-specific parts. Meaning the program follows a basic set of rules which are then expanded upon for variations or additions of the core rules.
 
i.e. The rules that govern a sales transaction, receive funds and exchange goods all follow the same basic pattern, but the type of payment and goods exchanged may differ. This would be implemented in the extension of the micro kernel.
 
### Micro services architecture 

The micro service architecture is designed to help developers avoid making programs too large and hard to maintain. 

Instead of building one big program, the goal is to create a number of different smaller programs and then create a new small program every time a new feature is requested.  

i.e. Netflix uses this approach to separate all the components of the interface. Each section is its own separate entity that is bound together by the interface itself. 

### Space-based architecture 

Many applications are built around a database. When a database is under stress and can’t keep up with the constant challenge of writing a log of the transactions, the entire website may fail. 

The space-based architecture is designed to avoid functional collapse under high load by splitting up both the processing and the storage between multiple servers. The data is spread out across the nodes 

just like the responsibility for servicing calls. 

i.e This is the architecture behind what many of us have come to know as cloud computing. 
 
## Gather All Relevant Information and Evaluate the Pros and Cons of Each 

### Possible Choices 
 
**Layered (n-tier) architecture** 

Pros: 

* Easy to maintain if done correctly. 
* Testable. 
* Separation of concerns. 

Cons: 

* Code has the potential to get messy if the process is organized. 
* Code can become slow if there are two many layers used. 
* Layer isolation can sometime be hard to follow. 

**Event-driven architecture** 

Pros: 

* Very flexible. 
* Scales well. 
* Easy to extend. 

Cons: 

* Hard to test. 
* If a module fails the main unit must have a back up. 
* Error handling can be difficult if many modules react to the same event. 

**Micro kernel architecture** 

Pros: 

* Clearly divides basic routines and more complex rules. 
* Application can be used by many people in the same industry. 

Cons: 

* Hard to decide what the core rules are. 
* Modifying the micro kernel can be difficult. 
* Plug-ins require a lot of communication with the kernel. 
 
**Micro services architecture** 

Pros: 

* Tasks are easily separated. 
* Processes can be assigned by each module. 
* Development can be quick. 
* Good for remote development. 

Cons: 

* Services have to be independent. 
* Performance can suffer if modules are too far spread out. 
* Can be confusing to end users as modules may load at different times. 


**Space-based architecture** 

Pros: 
 
* Can Handle large amounts of data. 
* Good for large workloads. 
* Good for social networks. 
 
Cons: 
 
* Hard to test load capabilities. 
* Data can sometimes be lost. 
 
## Select the Choice that Seems to Best Meet the Needs of the Situation 
 
Decision:  Event-driven architecture 
 
I have chosen this pattern as it will allow the application to respond quickly to events and allow for easier maintainability for a relatively small application. 
 
There may be some difficulty handling errors as well as handling many events at once. There may be a case for using a Layered style such as MC which is a common implementation of the design pattern which would provide more reliability as well as providing a structure for the sub-modules that handle the events. 
 
## Implement a Plan of Action and Then Monitor the Results, Making Necessary Adjustments 
 
Through the course of implementing the plan there were many times that the plan had to adapt to the growing requires of the program. Often during the actual development many small adjustments had to be made to ensure the project was a success. 
 
## The Plan, Do, Check, Act lifecycle 
 
This is way to perform iterative planning allowing the main overall plan to flex and recalibrate in order to achieve the end goal that the plan was originally devised to achieve. 
 
Here is an example iteration: 
 
### Plan 
 
Using a event driven architecture implement a question forum. 
 
### Do 
 
Develop a page that presents user questions and answers together. 
 
### Check 
 
Ask the right questions. 
 
Is the best way to handle the data? 
 
A layered approach may be more applicable to handle the processing logic of the data. 
 
### Act 
 
Begin to develop with MVC pattern 
 
Start lifecycle again.

These iterations are important and your end result will most like end up a combination of architectural patterns. The important thing is knowing how and why you should be using them.

Happy Coding!