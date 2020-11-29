__NUXT_JSONP__("/archive/steering-behaviour", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{page:{slug:"steering-behaviour",title:"Steering Behaviour",media_order:"auto_2.png,auto_1.png",date:"2018-09-22T09:28",desc:s,taxonomy:{category:["blog"],tag:["p5"]},twitterenable:k,twittercardoptions:"summary",articleenabled:g,musiceventenabled:g,orgaenabled:g,orga:{ratingValue:t},orgaratingenabled:g,eventenabled:g,personenabled:g,musicalbumenabled:g,productenabled:g,product:{ratingValue:t},restaurantenabled:g,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:k,toc:[{id:u,depth:2,text:v},{id:w,depth:x,text:y},{id:m,depth:x,text:z}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:u},children:[{type:b,tag:f,props:{href:"#autonomous-agents-and-steering",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Previously I had looked at the way forces act on objects. In this post I wanted to explore objects that aren't inanimate and have some ability to make a choice about their behaviour."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will start with a quick look at some initial considerations and basic examples:"}]},{type:a,value:c},{type:b,tag:A,props:{id:w},children:[{type:b,tag:f,props:{href:"#what-is-meant-by-autonomous-agent",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"limited ability to perceive it's environment"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"process the environment and calculate an action"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"the calculation then results in a force being applied to it"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"no global plan or leader"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"These agents or vehicle's operate in three steps:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"action selection"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:m}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"locomotion"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"They will have a desired velocity, they will want to do something, once that is established a steering force will then be calculated. Once the force is calculated it will then be applied to the object."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"These are the basic ingredients that will create the vehicle:"}]},{type:a,value:c},{type:b,tag:A,props:{id:m},children:[{type:b,tag:f,props:{href:"#steering",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's look at a simple scenario. We are going to establish a scenario where our vehicle seeks a target."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:B,props:{alt:C,src:"auto_1.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the drawing above we a have a vehicle that has a velocity and a target. The action being selected is a "},{type:b,tag:e,props:{},children:[{type:a,value:"seeking"}]},{type:a,value:" behaviour. Here is how we will calculate steering."}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"steering = desire - velocity\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the surface this looks like a very simple formula.However the "},{type:b,tag:e,props:{},children:[{type:a,value:"desire"}]},{type:a,value:" variable is one that will need some thought to determine. In this case the desired velocity is towards the target at "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:", we will create a vector that points at the target."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is how the vector is calculated. The desired velocity is established by creating a vector that is the result of "},{type:b,tag:e,props:{},children:[{type:a,value:"target - location"}]},{type:a,value:".The magnitude of the vector is set to it's established "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The steering is then calculated like so "},{type:b,tag:e,props:{},children:[{type:a,value:"desire - velocity"}]},{type:a,value:". The steering force is limited in some way and then the force "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:" is applied to send the vehicle to the target."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:B,props:{alt:C,src:"auto_2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here are those steps encapsulated in code:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:E,dataThemeId:F,dataSlugHash:"MqRKqy",dataDefaultTab:G,dataUser:H,dataPenTitle:I,className:[J]},children:[{type:a,value:K},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FMqRKqy\u002F"},children:[{type:a,value:I}]},{type:a,value:L},{type:b,tag:f,props:{href:M},children:[{type:a,value:N}]},{type:a,value:O},{type:b,tag:f,props:{href:P},children:[{type:a,value:Q}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:R,props:{async:k,src:S},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you can see the vehicle follows the mouse position, play around with the numbers and watch the behaviour change. "},{type:b,tag:e,props:{},children:[{type:a,value:D}]},{type:a,value:T},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:" will have the biggest impact."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the vehicle gets to it's target, currently it just continues and will then have to turn and head back. It would be nicer if it could sense that the target was approaching and slow down."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The key to this is to think about the vehicles desired velocity at any given point. This so far has always to be set to "},{type:b,tag:e,props:{},children:[{type:a,value:"maxpeed"}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If we imagined that the target has a boundary around it, another circle with a larger radius than the target and the same centre point. We could set a rule that would say:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if the vehicle is outside the boundary the vehicles desired velocity has a magnitude of "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:j}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once inside the boundary the rules change a bit:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if at the edge of the boundary magnitude = "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:",if on the target magnitude = 0, with points in between falling somewhere between those two numbers dependent on location."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To calculate this, the distance between the location and target is needed. Which we then can apply to the magnitude using a map function."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"speed = map( "},{type:b,tag:e,props:{},children:[{type:a,value:"distance"}]},{type:a,value:U},{type:b,tag:e,props:{},children:[{type:a,value:"boundary radius"}]},{type:a,value:U},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:" )"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will map the distance from target to current magnitude. So the final approach is this:"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if the distance is greater than the radius of the boundary it is at "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:", if the distance is less that the boundary radius it is some range between 0 and "},{type:b,tag:e,props:{},children:[{type:a,value:h}]},{type:a,value:j}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:E,dataThemeId:F,dataSlugHash:"jvRqyV",dataDefaultTab:G,dataUser:H,dataPenTitle:V,className:[J]},children:[{type:a,value:K},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FjvRqyV\u002F"},children:[{type:a,value:V}]},{type:a,value:L},{type:b,tag:f,props:{href:M},children:[{type:a,value:N}]},{type:a,value:O},{type:b,tag:f,props:{href:P},children:[{type:a,value:Q}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:R,props:{async:k,src:S},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With a few adjustments to the previous example we can set the vehicle to slow down and stop when approaching the target."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That was a quick look at autonomous agents. This post was heavily influence by the work "},{type:b,tag:f,props:{href:"https:\u002F\u002Fshiffman.net\u002F",rel:[W,X,Y],target:Z},children:[{type:a,value:"Daniel Shiffman"}]},{type:a,value:T},{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.red3d.com\u002Fcwr\u002Fsteer\u002F",rel:[W,X,Y],target:Z},children:[{type:a,value:"Craig Reynolds"}]},{type:a,value:j}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fsteering-behaviour",extension:".md",createdAt:"2020-11-24T08:50:03.343Z",updatedAt:"2020-11-29T09:26:04.123Z"}}],fetch:[],mutations:void 0}}("text","element","\n","p","code","a",false,"maxspeed","li",".",true,"blockquote","steering","true",-1,"span","icon","icon-link","The goal of this post is to examine simulations where the objects make decisions.",2.5,"autonomous-agents-and-steering","Autonomous Agents and Steering","what-is-meant-by-autonomous-agent",3,"What is meant by autonomous agent?","Steering","h3","img","","maxforce","265","0","js,result","harps116","Seeking Behaviour Example","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen","script","https:\u002F\u002Fstatic.codepen.io\u002Fassets\u002Fembed\u002Fei.js"," and ",", 0, ","Seeking Behaviour with arrival Example","nofollow","noopener","noreferrer","_blank")));