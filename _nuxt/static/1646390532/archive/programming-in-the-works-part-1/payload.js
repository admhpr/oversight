__NUXT_JSONP__("/archive/programming-in-the-works-part-1", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{post:{slug:"programming-in-the-works-part-1",title:"Programming ~ in the works part one",published:v,date:"2017-07-25T11:23",taxonomy:{category:["blog"],tag:["javascript","web development","ideas"]},twittercardoptions:"summary",articleenabled:g,article:{"@context":i,"@type":"NewsArticle",image:{"@type":w},publisher:{"@type":"Organization",logo:{"@type":w}}},musiceventenabled:g,orgaenabled:g,orga:{ratingValue:2.5},orgaratingenabled:g,eventenabled:g,personenabled:g,restaurantenabled:g,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":i,"@type":"Restaurant",address:{"@type":x}},facebookenable:v,person:{"@context":i,"@type":"person",address:{"@type":x}},event:{"@context":i,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":i,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:y,depth:n,text:z},{id:A,depth:n,text:B},{id:C,depth:n,text:D},{id:E,depth:n,text:F}],body:{type:"root",children:[{type:b,tag:o,props:{id:y},children:[{type:b,tag:e,props:{href:"#in-the-works",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The project: build a quiz application in JavaScript."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One of the big challenges in programming is solving problems. When presented with an idea for an app or program there's normally a few questions that run through my mind:"}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Where do I start?"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Do I really know how to do this?"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"What do I want this to do?"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:A},children:[{type:b,tag:e,props:{href:"#where-do-i-start",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Rather than write about a program after it's complete \"in the works\" aims to explore the build process, how to tackle the problems and how to form a working program. I am pretty new to the world of programming and app development ( less than a year ) and I often struggle to know where to start. Increasingly I've noticed the more important thing is to just start. Normally I stub out a quick plan on paper, roughly defining the functionality of the program then I fire up the text editor and go for it, often ideas for new approaches will come, almost like a reward for putting in the work."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I think beginning a program with a rough plan gives me that extra reference point I need. The encapsulation of ideas on paper gives me a better understanding of my initial thoughts about the program. At the moment I have just started a the project ( a pure JavaScript quiz ) and I have just begun to write the key functions of the program."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is my inital paper plan:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:"paper plan",src:"images\u002Fpaper-plan.jpg?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have been diving deeper in JavaScript and have avoided the allure of the big frameworks and decided to build a few apps in JavaScript to hopefully understand what the frameworks abstract and make easier."}]},{type:a,value:c},{type:b,tag:o,props:{id:C},children:[{type:b,tag:e,props:{href:"#do-i-really-know-how-to-do-this",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Short answer, Yes! long answer, well kinda. Let me explain, after I have a rough plan stubbed out I open up my text editor and this what I'm faced with:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:u,src:"images\u002Fempty.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Like an artist looking at a blank canvas, a writer staring a blank sheet of paper. I know I just have to start, I make an "},{type:b,tag:H,props:{},children:[{type:a,value:"index.html"}]},{type:a,value:" and stub out the basic structure, at this point the headphones are on and I begin to feel in the flow state. I look at my paper plan and begin to transfer the information into the fresh "},{type:b,tag:H,props:{},children:[{type:a,value:"app.js"}]},{type:a,value:" file. I ask myself as I look at the code, do I really need a quiz object? how can I make this cleaner? I wonder what's happening on twitter? I have to ignore that last question, that's the procrastination monster trying to make my life difficult."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I decide that the main app file should be split into three objects, one for data ( the questions ), one for the ui ( creating DOM elements ), and one for the controller ( this the one I will return from the IIFE, as I've decided to use the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcarldanley.com\u002Fjs-revealing-module-pattern\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"revealing module pattern"}]},{type:a,value:" and wrap the three objects in one "},{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FImmediately-invoked_function_expression",rel:[j,k,l],target:m},children:[{type:a,value:"Immediately-invoked function expression"}]},{type:a,value:"). Already my paper plan looks pretty crappy, but I've wrote 70 lines of code and that crappy paper plan got me there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So now I have the data modeled:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:"data",src:"images\u002Fdata.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"a UI:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:"ui",src:"images\u002Fui.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and here's the index.html:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:"index",src:"images\u002Findex.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:o,props:{id:E},children:[{type:b,tag:e,props:{href:"#what-do-i-want-this-app-to-do",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once I can display the data,  I ask myself what else do I want this to do? At the moment here are some things I'm working on:"}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"move to the next question"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"move to the previous question"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"check if the answer is correct"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"keep check of the score"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"make sure a radio button is selected"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm defining these methods in a controller object which is returned the main function and is the exposed "},{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FApplication_programming_interface",rel:[j,k,l],target:m},children:[{type:a,value:"API"}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The incomplete controller object looks like this:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:u,src:"images\u002Fcontroller.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The ouput is as follows:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{alt:u,src:"images\u002Fright-ans.png?cropResize=450,450"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I can scroll through the questions and check if the answer is correct, that's more than half of the functionality already. In part two I'll be defining more methods and maybe I'll escape the console. Along the way I've refactored this inital version as I've went, trying to stick to "},{type:b,tag:e,props:{href:"http:\u002F\u002Fprogrammer.97things.oreilly.com\u002Fwiki\u002Findex.php\u002FDon%27t_Repeat_Yourself",rel:[j,k,l],target:m},children:[{type:a,value:"DRY principals"}]},{type:a,value:" and keeping the code as clean and flexible as possible. The code will probably change more as I work, but that's what makes this medium so fun and rewarding. There are many ways to solve the same problem. Making the code as efficent and elegant as possible is something I strive to do."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The full source code for this project can be found "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fharps116\u002Fjs-quiz",rel:[j,k,l],target:m},children:[{type:a,value:"here"}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Embrace the process and happy coding!"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fprogramming-in-the-works-part-1",extension:".md",createdAt:"2022-03-04T10:40:19.850Z",updatedAt:"2022-03-04T10:40:19.854Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","li",false,"content-img","http:\u002F\u002Fschema.org\u002F","nofollow","noopener","noreferrer","_blank",3,"h3","true",-1,"span","icon","icon-link","",true,"ImageObject","PostalAddress","in-the-works","in the works","where-do-i-start","where do I start?","do-i-really-know-how-to-do-this","do I really know how to do this?","what-do-i-want-this-app-to-do","What do I want this app to do?","ul","code",".")));