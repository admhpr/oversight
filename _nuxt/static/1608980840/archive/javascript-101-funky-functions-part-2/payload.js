__NUXT_JSONP__("/archive/javascript-101-funky-functions-part-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{post:{slug:"javascript-101-funky-functions-part-2",title:"JavaScript 101 ~ Funky functions part 2",desc:"In the last funky functions I looked at the silently passed argument, ___argument___. I had full intention to talk about the other implicit argument ___this___ in part 2 but I found myself going down a different path.",published:g,date:"2017-06-08T11:23",taxonomy:{category:["blog"],tag:["javascript","javascript 101"]},googledesc:"A look at ways to define and invoke functions in JavaScript.",twittercardoptions:"summary",articleenabled:f,article:{"@context":n,"@type":"NewsArticle",image:{"@type":x},publisher:{"@type":"Organization",logo:{"@type":x}}},musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":n,"@type":"Restaurant",address:{"@type":y}},facebookenable:g,person:{"@context":n,"@type":"person",address:{"@type":y}},event:{"@context":n,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":n,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:z,depth:A,text:B},{id:C,depth:A,text:D}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"",src:".\u002Fimages\u002Fff.png?cropResize=300,300"},children:[]}]},{type:a,value:c},{type:b,tag:E,props:{id:z},children:[{type:b,tag:e,props:{href:"#funky-functions-part-2",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the last funky functions I looked at the silently passed argument, "},{type:b,tag:F,props:{},children:[{type:b,tag:G,props:{},children:[{type:a,value:"argument"}]}]},{type:a,value:". I had full intention to talk about the other implicit argument "},{type:b,tag:F,props:{},children:[{type:b,tag:G,props:{},children:[{type:a,value:"this"}]}]},{type:a,value:" in part 2 but I found myself going down a different path."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are so many ways to invoke functions in JavaScript I thought I better take a closer look at that first. JavaScript implements the idea of first-class functions i.e. they are given the same privileges as objects, in fact they are objects. They can be passed into other functions as arguments, they can be stored in variables or as methods on objects and even returned from other functions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is extremely cool and confusing at the same time, for me anyway. I intend to rectify the second part of that statement. So, let's look at some ways we can define and invoke functions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm looking at six different ways to add two numbers together in this example. As you lookthem, make a mental note of the differences,they are subtle.  "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note: There is also a way to create a function using 'new' ( e.g. fun = new function; ) however I believe it has depreciated\u002Fis more of a corner feature of JavaScript, you might see it only occasionally.For that reason I choose not to look at it in anymore detail( although one day I may have to ) ."}]},{type:a,value:c},{type:b,tag:q,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fuow32pb5\u002F6\u002Fembed\u002F"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you can see there is plenty of syntax to choose from, they all have their own use cases, which cannot really be shown in a simple add function."}]},{type:a,value:c},{type:b,tag:E,props:{id:C},children:[{type:b,tag:e,props:{href:"#lets-look-at-a-few-of-the-more-common-ones-in-a-little-more-detail",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:r,props:{id:"function-declaration"},children:[{type:b,tag:e,props:{href:"#function-declaration",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"function declaration"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Firstly we use the 'function' keyword, followed by a compulsory function name, a list of parameters in a pair of parenthesis (param1, param2,...etc) and a pair of curly braces {...} that defines the body code ( the do stuff part )."}]},{type:a,value:c},{type:b,tag:q,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F11k81t1p\u002F3\u002Fembed\u002F"},children:[]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:"The function declaration creates a variable in the current "},{type:b,tag:e,props:{href:H,rel:[t,u,v],target:w},children:[{type:a,value:"scope"}]},{type:a,value:" identified as the function name. The variable contains the function object."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The function variable is moved (or hoisted) to the top of the current scope, this allows functions to be called before they have been declared, more on this at another time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note: The function object holds its name in the 'name' property of itself. This is something that can viewed and used in debugging."}]},{type:a,value:c},{type:b,tag:r,props:{id:"function-expression"},children:[{type:b,tag:e,props:{href:"#function-expression",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"function expression"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A function expression starts with the function keyword, any parameters then an optional name, followed by the body of the code.\n"},{type:b,tag:m,props:{},children:[{type:a,value:" function( param1, param2 ...etc){..\u002F\u002Fdo stuff...}; "}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This function expression can be:"}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Assigned to a variable "},{type:b,tag:m,props:{},children:[{type:a,value:" var expression = function( param1, param2 ...etc){..\u002F\u002Fdo stuff...}; "}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Assigned as method on a object "},{type:b,tag:m,props:{},children:[{type:a,value:" method : function( param1, param2 ...etc){..\u002F\u002Fdo stuff...}; "}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"Used as a callback "},{type:b,tag:m,props:{},children:[{type:a,value:" .reduce(function( param1, param2 ...etc){..\u002F\u002Fdo stuff...}); "}]},{type:a,value:o}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:"arrow-function"},children:[{type:b,tag:e,props:{href:"#arrow-function",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"arrow function"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The arrow function uses parenthesis for the parameters "},{type:b,tag:m,props:{},children:[{type:a,value:"( param1, ..etc)"}]},{type:a,value:", followed by a fat arrow =\u003E and a pair of curly braces again for the body."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"An example:"},{type:b,tag:"br",props:{},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"var multiply = (x, y) =\u003E x*y;"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another One:"}]},{type:a,value:c},{type:b,tag:q,props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fy7fhqc9k\u002Fembed\u002F"},children:[]},{type:a,value:s},{type:b,tag:r,props:{id:"a-little-something-extra"},children:[{type:b,tag:e,props:{href:"#a-little-something-extra",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"A little something extra"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here's something I made for my own amusement:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"265",dataThemeId:"dark",dataSlugHash:"MoadRQ",dataDefaultTab:"js,result",dataUser:"harps116",dataEmbedVersion:"2",dataPenTitle:J,className:["codepen"]},children:[{type:a,value:"See the Pen "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FMoadRQ\u002F"},children:[{type:a,value:J}]},{type:a,value:" by Adam Harpur ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116"},children:[{type:a,value:"@harps116"}]},{type:a,value:") on "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io"},children:[{type:a,value:"CodePen"}]},{type:a,value:o}]},{type:a,value:s},{type:b,tag:q,props:{async:g,src:"https:\u002F\u002Fproduction-assets.codepen.io\u002Fassets\u002Fembed\u002Fei.js"},children:[]},{type:a,value:s},{type:b,tag:d,props:{},children:[{type:a,value:"Some additional resources:"}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Frainsoft.io\u002F6-ways-to-declare-javascript-functions\u002F#1functiondeclaration",rel:[t,u,v],target:w},children:[{type:a,value:"A great article by Dmitri Pavlutin"}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:b,tag:e,props:{href:H,rel:[t,u,v],target:w},children:[{type:a,value:"A deep dive into scope by Todd Motto"}]}]},{type:a,value:c}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fjavascript-101-funky-functions-part-2",extension:".md",createdAt:K,updatedAt:K}}],fetch:[],mutations:void 0}}("text","element","\n","p","a",false,true,"true",-1,"span","icon","icon-link","code","http:\u002F\u002Fschema.org\u002F",".","li","script","h4"," \n","nofollow","noopener","noreferrer","_blank","ImageObject","PostalAddress","funky-functions-part-2",3,"funky functions part 2","lets-look-at-a-few-of-the-more-common-ones-in-a-little-more-detail","Let's look at a few of the more common ones in a little more detail","h3","em","strong","https:\u002F\u002Ftoddmotto.com\u002Feverything-you-wanted-to-know-about-javascript-scope\u002F","ul","Different types of functions in JavaScript","2020-12-26T11:06:35.192Z")));