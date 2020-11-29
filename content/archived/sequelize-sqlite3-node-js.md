---
title: ' Node js ~ sequelize and sqlite'
date: '2017-06-01T11:23'
desc: I have been teaching myself Node.js over the last few weeks and it has really tested my JavaScript skills.  
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - node
googledesc: 'A quick guide to setting up sequelize.js to interact with a sqlite database in node.'
twitterenable: true
twittercardoptions: summary
articleenabled: false
article:
    '@context': 'http://schema.org/'
    '@type': NewsArticle
    image:
        '@type': ImageObject
    publisher:
        '@type': Organization
        logo:
            '@type': ImageObject
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
    '@context': 'http://schema.org/'
    '@type': Restaurant
    address:
        '@type': PostalAddress
facebookenable: true
person:
    '@context': 'http://schema.org/'
    '@type': person
    address:
        '@type': PostalAddress
event:
    '@context': 'http://schema.org/'
    '@type': Event
    location:
        '@type': Place
musicalbum:
    '@context': 'http://schema.org/'
    '@type': MusicAlbum
    byArtist:
        '@type': MusicGroup
---

	
![](./images/node.js.png?cropResize=300,300)
### connecting to a sqlite database in node.  
  
I have been teaching myself Node.js over the last few weeks and it has really tested my JavaScript skills.  
  
The added layers of complexity along with the cornucopia of modules available have made for an interesting time as I wrestle with selecting the best tools for the job.  
  
here is the stack that I have been working with:  
  
* database: sqlite3  
* server: node.js (obviously)  
*          +express.js  
* frontend: vue.js  
  
I've started to tackle the backend and have encountered a few architectural challenges, I decided to use sequelize.js to map the sqlite data as objects ( known as Object Relational Mapping if you want to add to the jargon buster ) to approach the data like a true JavaScripter and solve the [Object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object-relational_impedance_mismatch).  
  
Building SQL queries using JavaScript just doesn't feel right. Luckily sequelize makes it possible to use SQL and not feel like you've left JavaScript land. 
 
Let's look at a basic example to get up and running. You will need: 
 
* [node.js](https://nodejs.org/en/download/) 
* [sqlite](http://sqlite.org/download.html) 
* [a text editor](http://blog.liveedu.tv/10-best-text-editors-programming-2016/) 
 
Once everything is installed fire up a terminal ( on Linux or Mac ) or command prompt in Windows and make your project directory ( I'm on Linux here so these commands will not work on Windows ): 
 
1.Make a directory --> enter that directory --> make two files one for our script ( app.js ) and one to hold the data ( test.sqlite ) --> create a package.json file for our dependencies 
 
note: the '-y' flag on npm init will stub out a default package.json perfect for testing. 
 
![](./images/setup.png)
 
2.install our dependencies 
 
![](./images/setup2.png) <br/> 
![](./images/setup3.png) 
  
note: the sqlite module will not be used directly but is used by the sequelize module, '-S' on npm install is shorthand for '--save', this will add the dependency to the package.json file you can also us 'i' instead of 'install'.  
 
We're all set, we can now start to write in our app.js file. Fire up your favourite text editor and code along.
 
3.Grab the sequelize module --> create an instance of a sequelize object which we'll call 'con' short for connection which is what the instance represents. 
 
![](./images/1.png)
 
4.Call the define method on that instance to define a table called article, note the proprieties of this object represent column names and the values are the data types. 
 
![](./images/2.png)
 
5.Call the sync method on the connection instance and then ( sequelize uses JavaScript promises more on that [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)) call the create method on the table we defined above.  
 
![](./images/3.png)
 
6.Call sync and query the table that will be created when we run the script. I have used both the findAll and findById methods here findById is commented out feel free to play around here and see what queries you can come up with. One thing to note is that sequelize automatically pluralises queries that return many results. I.e. article is articles. 
 
![](./images/4.png)
 
7.Now we can return to the terminal ( make sure your in the project directory ) and enter 'node app.js'.  
 
![](./images/5.png)
 
Notice how we can see the SQL queries being logged in the terminal. This is the leg work that sequelize is doing for us behind the scenes. 
 
8.We can double check that everything has worked correctly by using a tool like SQLite manager which is a firefox extension perfect for messing around with sqlite database in the browser. 
 
![](./images/6.png)
 
This is a very basic example, but does cover the most basic steps to get you up and running. It would be worth while to check out some of these resources to gain a deeper understanding or this process. 
 
* Sequelize tutorial by [@bookercodes](https://twitter.com/bookercodes) video series [here](https://www.youtube.com/watch?v=qsDvJrGMSUY&list=PL5ze0DjYv5DYBDfl0vF_VRxEu8JdTIHlR)  
* Sequelize documentation ( it can be a heavy read but there is some good info ) [here](http://docs.sequelizejs.com/) 
* Sequelize CRUD 101 by [@lorenstewart111](https://twitter.com/lorenstewart111) found [here](http://lorenstewart.me/2016/10/03/sequelize-crud-101/)
 
               