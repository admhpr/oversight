__NUXT_JSONP__("/archive/javascript-es6-the-way-of-the-arrow-function", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{post:{slug:"javascript-es6-the-way-of-the-arrow-function",title:"JavaScript ES6 ~ The Way of the Arrow Function",desc:y,published:g,date:"2017-07-01T11:23",taxonomy:{category:["blog"],tag:["javascript","web development"]},googledesc:"How and when to use the arrow function in JavaScript.",twittercardoptions:"summary",articleenabled:n,article:{"@context":p,"@type":"NewsArticle",image:{"@type":z},publisher:{"@type":"Organization",logo:{"@type":z}}},musiceventenabled:n,orgaenabled:n,orga:{ratingValue:2.5},orgaratingenabled:n,eventenabled:n,personenabled:n,restaurantenabled:n,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":p,"@type":"Restaurant",address:{"@type":A}},facebookenable:g,person:{"@context":p,"@type":"person",address:{"@type":A}},event:{"@context":p,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":p,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:B,depth:r,text:C},{id:D,depth:r,text:E},{id:F,depth:r,text:G}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"",src:".\u002Fimages\u002Farrow.png?cropResize=300,300"},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{id:B},children:[{type:b,tag:f,props:{href:"#why-arrow-functions",ariaHidden:t,tabIndex:u},children:[{type:b,tag:v,props:{className:[w,x]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"In this post ( the clue is in the title ) I'll be looking at the new ES6 addition arrow functions."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Arrow functions are not only more condensed compared to ES5 functions but they also solve common problems with the use of "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" ( this is covered "},{type:b,tag:f,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fjavascript-101-this",rel:[h,i,j],target:k},children:[{type:a,value:H}]},{type:a,value:" ) and scope. The "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" of an arrow function is picked up from it's surroundings and is therefore lexical i.e. uses "},{type:b,tag:f,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fjavascript-101-closure",rel:[h,i,j],target:k},children:[{type:a,value:"closure"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Let's look at some examples:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"First let's look at a function in the ES5 syntax which will then be shown in the ES6 arrow function syntax below it."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ES5:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fpcv6fupy\u002F3\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fh7nbh0m7\u002F3\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Using the arrow syntax has reduced the amount of code needed and has also maintained the readability. Some would argue that the ES6 syntax is more readable, but that's assuming that the reader understands the ES6 syntax. So let's make sure that's the case. The easiest comparison is the ES5 function expression. Which looks like this:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002FskwLm15g\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"vs the arrow syntax of the same function which looks like this:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fe7twuh1r\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Both are stored in a variable ( I am using "},{type:b,tag:d,props:{},children:[{type:a,value:"const"}]},{type:a,value:" to store arrow which is a ES6 syntax, but more on that another time ), both accept two parameters "},{type:b,tag:d,props:{},children:[{type:a,value:"function( a, b )"}]},{type:a,value:" , "},{type:b,tag:d,props:{},children:[{type:a,value:"( a, b )"}]},{type:a,value:" and return the result of those two parameters when they are added together "},{type:b,tag:d,props:{},children:[{type:a,value:"{ return a + b }"}]},{type:a,value:J},{type:b,tag:d,props:{},children:[{type:a,value:"=\u003E a + b"}]},{type:a,value:". They are then passed two arguments "},{type:b,tag:d,props:{},children:[{type:a,value:"expression( 1, 2 )"}]},{type:a,value:J},{type:b,tag:d,props:{},children:[{type:a,value:"arrow( 1, 2 )"}]},{type:a,value:" the result of which is stored in another variable ( again I am using the ES6 syntax in 'arrow' with "},{type:b,tag:d,props:{},children:[{type:a,value:"let"}]},{type:a,value:" ) which is then output by the log function ( which is just a utility to output to the result pane in "},{type:b,tag:f,props:{href:"https:\u002F\u002Fjsfiddle.net\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"jsfiddle"}]},{type:a,value:" )."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Some "},{type:b,tag:f,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fjavascript-beyond-the-basics-function-composition",rel:[h,i,j],target:k},children:[{type:a,value:"function composition"}]},{type:a,value:" using the arrow syntax:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F5tx1o893\u002F2\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"comp"}]},{type:a,value:" takes a function "},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:" returns a function that takes another function "},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:" which returns a function that takes a parameter x. Which then calls "},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:" which is passed "},{type:b,tag:d,props:{},children:[{type:a,value:"x"}]},{type:a,value:" the result of which is passed to "},{type:b,tag:d,props:{},children:[{type:a,value:K}]},{type:a,value:". Here's the same functionality written in the ES5 syntax:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F5tx1o893\u002F4\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:s,props:{id:D},children:[{type:b,tag:f,props:{href:"#a-practical-example",ariaHidden:t,tabIndex:u},children:[{type:b,tag:v,props:{className:[w,x]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"First in ES5:"}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fp7jwd9nc\u002F1\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:c},{type:b,tag:l,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fraf24tjy\u002Fembed\u002F"},children:[]},{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"The important difference between the two is that there is no need to define the context of "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" in the ES6 version. Using ''' var that = this'''  is clunky at best, of course you could use "},{type:b,tag:d,props:{},children:[{type:a,value:"bind"}]},{type:a,value:" or pass "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:" in as an extra parameter to "},{type:b,tag:d,props:{},children:[{type:a,value:".map"}]},{type:a,value:" but that is still not ideal. ES6 takes care of all the awkward sidestepping."}]},{type:a,value:c},{type:b,tag:s,props:{id:F},children:[{type:b,tag:f,props:{href:"#when-not-to-use-arrow-functions",ariaHidden:t,tabIndex:u},children:[{type:b,tag:v,props:{className:[w,x]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Arrow functions have use cases, and it is best if they are not used for the sake of using them. When using arrow functions '''this''' is "},{type:b,tag:"em",props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"not"}]}]},{type:a,value:" bound to anything, but simply inherits it from the scope of it's parent ( which is why it doesn't need defined in the \"prefixArray\" '''.map''' as its parent is the constructed instance of Prefixer ). However that sort of behavior can be the opposite of what we what in these cases:"}]},{type:a,value:c},{type:b,tag:M,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"click handlers ( we want '''this''' to bind to what was clicked not the global '''window''' object )"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"object methods ( we want '''this''' to bind to the object not the global '''window''' object )"}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"prototype methods ( we want '''this''' to bind to the object not the global '''window''' object, note using arrow functions inside these methods is a great way to access the correct '''this''' context as shown in the example above)."}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"when you want access to the '''arguments''' object more on the '''arguments object''' "},{type:b,tag:f,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fjavascript-101-funky-functions-part-2",rel:[h,i,j],target:k},children:[{type:a,value:H}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Arrow functions are great when used correctly and they are a welcome edition to JavaScript native toolkit. Here are some additional resources:"}]},{type:a,value:c},{type:b,tag:M,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fwesbos.com\u002Farrow-function-no-no\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Wes Bow's \"When Not to use an Arrow Function\""}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Fexploringjs.com\u002Fes6\u002Fch_arrow-functions.html",rel:[h,i,j],target:k},children:[{type:a,value:"exploringjs post on arrow functions"}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fmedium.com\u002Fjavascript-scene\u002Ffamiliarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75",rel:[h,i,j],target:k},children:[{type:a,value:"Eric Elliot's \"Familiarity Bias is Holding You Back: It’s Time to Embrace Arrow Functions\""}]}]},{type:a,value:c}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fjavascript-es6-the-way-of-the-arrow-function",extension:".md",createdAt:"2021-01-28T17:23:03.279Z",updatedAt:"2021-01-28T17:23:03.283Z"}}],fetch:[],mutations:void 0}}("text","element","\n","code","p","a",true,"nofollow","noopener","noreferrer","_blank","script"," \n",false,"li","http:\u002F\u002Fschema.org\u002F","this",3,"h3","true",-1,"span","icon","icon-link","Doing what is comfortable at the moment is not the best approach to learning how to code, for me anyway. Pushing yourself outside of your comfort zone is one of the most important parts of learning and getting good at a new skill. It's for that reason I have been making a conscious effort to embrace ES6.","ImageObject","PostalAddress","why-arrow-functions","Why arrow functions?","a-practical-example","A practical example","when-not-to-use-arrow-functions","when not to use arrow functions","here","ES6:",", ","f","g","ul")));