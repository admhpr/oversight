__NUXT_JSONP__("/archive/make-some-perlin-noise", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{page:{slug:"make-some-perlin-noise",title:"Make some ( Perlin ) Noise",desc:h,date:"2018-02-07T18:10",taxonomy:{category:["blog"],tag:["javascript","100 days of learning"]},twitterenable:g,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:g,toc:[{id:i,depth:j,text:k},{id:l,depth:j,text:m}],body:{type:"root",children:[{type:b,tag:n,props:{id:i},children:[{type:b,tag:e,props:{href:"#making-the-random-numbers-seem-more-organic",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But there is another mathematical tool that we have at our disposal to make some nice sets of numbers. Enter:"}]},{type:a,value:c},{type:b,tag:n,props:{id:l},children:[{type:b,tag:e,props:{href:"#perlin-noise",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So what does Perlin Noise look like?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Say we picked a random number at any given moment in time, the timeline would look totally random like so:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"265",dataThemeId:t,dataSlugHash:"qpgmWo",dataDefaultTab:"js,result",dataUser:u,dataEmbedVersion:v,dataPenTitle:w,className:[x]},children:[{type:a,value:y},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FqpgmWo\u002F"},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:e,props:{href:A},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:e,props:{href:D},children:[{type:a,value:E}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:G,props:{async:g,src:H},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The X axis represents our timeline and each point is a random number at that given point in time with a sequencial x value as it iterates across the width of the canvas and a series of vertices at random y values that create the wave shape."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The output is showing us the values as we move through time, but it isn't that pleasant to look at, the peaks and troughs are very harsh."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We could use Perlin Noise to make a nice smooth pattern. Yes, the numbers are still random but they seem to have a closer relationship to eachother:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here we scanning Perlin Noise space, we get a noise value returned from p5.js's noise function which is a number between one and zero which we then multiply by the height of the canvas. This us allows us to plot the points. We increase the X value by the increment and set the start position to a start variable which is also incremented. This lets us move across the Perlin Noise graph."}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"244",dataThemeId:t,dataSlugHash:"EorZra",dataDefaultTab:"result",dataUser:u,dataEmbedVersion:v,dataPenTitle:I,className:[x]},children:[{type:a,value:y},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FEorZra\u002F"},children:[{type:a,value:I}]},{type:a,value:z},{type:b,tag:e,props:{href:A},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:e,props:{href:D},children:[{type:a,value:E}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:G,props:{async:g,src:H},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That was quick at look at what Perlin Noise can do for us in terms of creating Random Numbers. This has a lot of potential and I'm hoping to explore more advanced topics involving Perlin Noise."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out Daniel Shiffman's great series on the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fplaylist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Nature of Code"}]},{type:a,value:", this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fmake-some-perlin-noise",extension:".md",createdAt:"2020-11-24T08:50:03.333Z",updatedAt:"2020-11-28T16:06:16.048Z"}}],fetch:[],mutations:void 0}}("text","element","\n","p","a",false,true,"Perlin Noise allows us to make smooth randomness, It was originally developed to create textures in 3d graphics. Let's say we wanted to make a vase seem like it was made of marble. Rather than hand create we can use an algorythm to generate a texture.","making-the-random-numbers-seem-more-organic",2,"Making the random numbers seem more organic.","perlin-noise","Perlin Noise","h2","true",-1,"span","icon","icon-link","0","harps116","2","Random Wave","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen",".","script","https:\u002F\u002Fproduction-assets.codepen.io\u002Fassets\u002Fembed\u002Fei.js","Perlin Noise 1D")));