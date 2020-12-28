__NUXT_JSONP__("/archive/probability", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{post:{slug:"probability",title:"Probability and Movement",date:"2018-01-10T18:02",desc:w,publish_date:"10-01-2018 18:02",taxonomy:{category:["blog"],tag:["100 days of learning"]},twitterenable:g,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:g,toc:[{id:x,depth:2,text:y},{id:z,depth:A,text:h},{id:B,depth:A,text:C}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:x},children:[{type:b,tag:e,props:{ariaHidden:i,href:"#what-is-probability",tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lets look at an example in code:"}]},{type:a,value:c},{type:b,tag:D,props:{id:z},children:[{type:b,tag:e,props:{ariaHidden:i,href:"#random-walker",tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"317",dataThemeId:E,dataSlugHash:"qpxmaK",dataDefaultTab:F,dataUser:G,dataEmbedVersion:H,dataPenTitle:h,className:[I]},children:[{type:a,value:J},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FqpxmaK\u002F"},children:[{type:a,value:h}]},{type:a,value:K},{type:b,tag:e,props:{href:L},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:e,props:{href:O},children:[{type:a,value:P}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:R,props:{async:g,src:S},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the example above we set up our little walker object that starts with an x and a y in the middle of the screen, a number is then choosen between 0 - 3, this number determines the walkers next step."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We could say that the walker has 25% chance of going up, down, left or right. That there is an equal chance of the walker moving in one of four directions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"What if we wanted more control over the way the walker moves?"}]},{type:a,value:c},{type:b,tag:D,props:{id:B},children:[{type:b,tag:e,props:{ariaHidden:i,href:"#controlling-the-random-walker",tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this case I want the walker to move biasedly to the right"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are a few different approaches that come to mind here:"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"We could increase the conditions for a particular direction"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"choice = random(5)\n\ncase: n == 0 || 5 \n      this.x++\n      break;\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"We could add more liberal conditions to a particular direction"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"choice = random(4)\n\ncase: n \u003C 3\n      this.x++\n      break;\n"}]}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:"We could increase the incrementor for a particular direction"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:v,props:{},children:[{type:a,value:"choice - random(4)\n\ncase: n = 0\n      this.x += 2\n      break;\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As with any given coding endeveour that are many ways to solve a problem, it is up to you to decide the approach that makes the most sense."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this particular case I like the final approach as it seems the most natural to me and least likely to have side effects on the mechanics of the other code."}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"265",dataThemeId:E,dataSlugHash:"JMOqKe",dataDefaultTab:F,dataUser:G,dataEmbedVersion:H,dataPenTitle:T,className:[I]},children:[{type:a,value:J},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FJMOqKe\u002F"},children:[{type:a,value:T}]},{type:a,value:K},{type:b,tag:e,props:{href:L},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:e,props:{href:O},children:[{type:a,value:P}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:R,props:{async:g,src:S},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's all I mangaged to tackle today, I hope to continue looking at movement in code this week."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fprobability",extension:".md",createdAt:U,updatedAt:U}}],fetch:[],mutations:void 0}}("text","element","\n","p","a",false,true,"Random Walker","true",-1,"span","icon","icon-link","ul","li","Psuedo Code","div","nuxt-content-highlight","pre","language-text","line-numbers","code","Probability is the measure of the likelihood that an event will occur. It is a way to evaluate a given set of scenarios and decide how often will event x happen.","what-is-probability","What is Probability?","random-walker",3,"controlling-the-random-walker","Controlling the Random Walker","h3","0","result","harps116","2","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen",".","script","https:\u002F\u002Fproduction-assets.codepen.io\u002Fassets\u002Fembed\u002Fei.js","Random Right Walker","2020-12-28T14:52:44.047Z")));