__NUXT_JSONP__("/archive/acceleration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{post:{slug:n,title:o,date:"2018-02-28T18:12",desc:F,taxonomy:{category:["blog"],tag:["javascript","100 days of learning"]},twitterenable:G,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:G,toc:[{id:n,depth:H,text:o},{id:I,depth:H,text:J},{id:K,depth:p,text:L},{id:M,depth:p,text:N},{id:O,depth:p,text:P}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's not going to stop me getting to it when I can, It just my progress will be a little slower."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I managed to get some time this morning to take some notes."}]},{type:a,value:c},{type:b,tag:Q,props:{id:n},children:[{type:b,tag:e,props:{href:"#acceleration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's recap quickly, before we were looking at this example:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a ball that bounces around the screen. If we look at the code, we can see that the ball object has two vectors, location ( where it is ) and velocity ( change in location over time )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In our update function we add velocity to location. This gives the ball movement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Instinctively to make this ball move differently you may think it would be a good idea to change velocities x and mess around with location, add random to location y. All these things directly mess with location and velocity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's assume that this is not a good idea, A cleaner approach would be to add another vector that represents a force acting on the ball. Let's look at what is happening here:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"location+velocity.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmP49Sece8H8Dd3F4r2mbL38LwrnXyur3tadUAgV9iHvQr\u002Flocation%2Bvelocity.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the diagram we are looking at a snapshot of movement. We can see the impact that adding velocity to location has over time. If we wanted to make the velocity change we could potential mess around with the internal variables of the vector. This may work now, but as things get more complex it will gradually get harder to keep track of all the variables."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Instead we could add another vector, In this case acceleration. Just as velocity effects location over time, acceleration effects velocity over time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Acceleration is any change in velocity over time, it could be the magnitude ( size ) of the velocity ( speed ) the direction of the velocity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's add acceleration to our original bouncing ball:"}]},{type:a,value:c},{type:b,tag:Q,props:{id:I},children:[{type:b,tag:e,props:{href:"#adding-acceleration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:q,props:{id:K},children:[{type:b,tag:e,props:{href:"#constant-acceleration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this example the acceleration vector is slowly added to the ball over time, you can see that the ball will move faster and faster as the acceleration accumulates."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"acceleration.gif",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmUptnfcf5AKfcyvd6rdd4cZrNj2stEpZRxrHaYZfpopPd\u002Facceleration.gif"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:r,dataThemeId:s,dataSlugHash:"oEpKBm",dataDefaultTab:t,dataUser:u,dataEmbedVersion:v,dataPenTitle:m,className:[w]},children:[{type:a,value:x},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FoEpKBm\u002F"},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:e,props:{href:z},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:e,props:{href:C},children:[{type:a,value:D}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"change the value of the acceleration vector's x value to see the effect on the balls velocity. You will notice that things will get very fast if the value is over 0.5. This is because every frame the acceleration is increasing by that x value. We are running our animation at the default p5 rate of 60 frames per second. So hopefully you can see how things get very fast in a short span of time."}]},{type:a,value:c},{type:b,tag:q,props:{id:M},children:[{type:b,tag:e,props:{href:"#constant-acceleration-with-velocity",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this example we are adding acceleration to an existing velocity that is moving two pixels downward."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"acc_vel.gif",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmb66ZbsKVuobn5aQ5KzUEz5RZzy99MmSfRYS6L8GmSCmJ\u002Facc_vel.gif"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:r,dataThemeId:s,dataSlugHash:"jZYgZw",dataDefaultTab:t,dataUser:u,dataEmbedVersion:v,dataPenTitle:m,className:[w]},children:[{type:a,value:x},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FjZYgZw\u002F"},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:e,props:{href:z},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:e,props:{href:C},children:[{type:a,value:D}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"with this approach is almost like a wind is acting on the ball that is getting stronger and stronger. The acceleration vectors x component is very low in order to really see the full effect."}]},{type:a,value:c},{type:b,tag:q,props:{id:O},children:[{type:b,tag:e,props:{href:"#random-acceleration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here we use the handy p5 Vector function 'vector_instance'."},{type:b,tag:e,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5.Vector",rel:[R,S,T],target:U},children:[{type:a,value:"random2D()"}]},{type:a,value:" which gives us a random vector with a random x and y component. Note that we wouldn't want a z component as we are still working in 2D."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:l,props:{alt:"random_acc.gif",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmbURWZkjyiSrDtzcrWYnZRfnhUwjAtKTa7LNrMWEo4mF6\u002Frandom_acc.gif"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:r,dataThemeId:s,dataSlugHash:"zRpgXy",dataDefaultTab:t,dataUser:u,dataEmbedVersion:v,dataPenTitle:V,className:[w]},children:[{type:a,value:x},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FzRpgXy\u002F"},children:[{type:a,value:V}]},{type:a,value:y},{type:b,tag:e,props:{href:z},children:[{type:a,value:A}]},{type:a,value:B},{type:b,tag:e,props:{href:C},children:[{type:a,value:D}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out Daniel Shiffman's great series on the "},{type:b,tag:e,props:{href:"http:\u002F\u002Fnatureofcode.com\u002Fbook\u002Fintroduction\u002F",rel:[R,S,T],target:U},children:[{type:a,value:"Nature of Code"}]},{type:a,value:", this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Facceleration",extension:".md",createdAt:W,updatedAt:W}}],fetch:[],mutations:void 0}}("text","element","\n","p","a",false,"true",-1,"span","icon","icon-link","img","Simple Bouncing Ball Vector With Constant Acceleration","acceleration","Acceleration",3,"h3","265","0","js,result","harps116","2","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen",".","This year has really got off to a flying start. I'm super busy at work and school and I have been squeezing in non work related learning when I can. I have had to do more database work at my day job so I have been wrapping my head around that which has stunted my progress with the Nature of Code.",true,2,"adding-acceleration","Adding Acceleration","constant-acceleration","Constant Acceleration","constant-acceleration-with-velocity","Constant acceleration with velocity","random-acceleration","Random acceleration.","h2","nofollow","noopener","noreferrer","_blank","Random Acceleration and Velocity","2021-01-08T17:06:58.035Z")));