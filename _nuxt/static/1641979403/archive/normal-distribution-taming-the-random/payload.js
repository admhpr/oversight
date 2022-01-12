__NUXT_JSONP__("/archive/normal-distribution-taming-the-random", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{post:{slug:"normal-distribution-taming-the-random",title:"Normal Distribution, Taming the Random",desc:l,date:"2018-01-24T18:08",taxonomy:{category:["blog"],tag:["javascript","100 days of learning"]},twitterenable:g,twittercardoptions:"summary",articleenabled:e,musiceventenabled:e,orgaenabled:e,orga:{ratingValue:2.5},orgaratingenabled:e,eventenabled:e,personenabled:e,restaurantenabled:e,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:g,toc:[{id:m,depth:2,text:n}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"In post one I looked a "},{type:b,tag:f,props:{href:"https:\u002F\u002Fsteemit.com\u002Fcoding\u002F@harps116\u002Fday-1-probability",rel:[h,i,j],target:k},children:[{type:a,value:"random walker"}]},{type:a,value:", a small dot that moved across the screen based on a number between 0 - 3."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Although It worked, It didn't move in a way that seemed natural. It was, well, too random."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Well, it just so happens that is possible to do so."}]},{type:a,value:c},{type:b,tag:"h2",props:{id:m},children:[{type:b,tag:f,props:{href:"#gaussian-distribution",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In reality things are not totally random."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Height is a good example of this."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Say we are looking at the heights of cacti."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"       `\"\"',\n      ;' ` ;\n      ;`,',;\n      ;' ` ;\n ,,,  ;`,',;\n;,` ; ;' ` ;   ,',\n;`,'; ;`,',;  ;,' ;\n;',`; ;` ' ; ;`'`';\n;` '',''` `,',`',;\n `''`'; ', ;`'`'\n      ;' `';\n      ;` ' ;\n      ;' `';\n      ;` ' ;\n      ; ',';\n      ;,' ';\n  dwb\\|\u002F\\|\u002F;\\|\u002F\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With the random approach cactus height between 1 - 100 would eventually end up like this:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"|\n|\n|_____________________\n|\n|\n|_____________________\n0            100 \n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's because each number has an equal chance of being picked."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That doesn't really reflect reality as there would be more cacti around the middle or the mean like so:"}]},{type:a,value:c},{type:b,tag:"content-img",props:{src:"https:\u002F\u002Fsteemitimages.com\u002FDQme8rV2SsTmbnqbmab5L559keiAmovct13cdebRdLxKskq\u002F%F0%9F%8C%B5",alt:"cactus",style:"width: 300px;"},children:[]},{type:a,value:"\n  "},{type:b,tag:"sub",props:{},children:[{type:a,value:"Apparently you can enhance the look of a graph by putting a pen across the page you just drew on."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's more like it, a lot more around the mean and a few outliers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This would be an example of a normal distribution, a mean of 50 and a standard deviation of 2."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"How to calculate "},{type:b,tag:f,props:{href:"http:\u002F\u002Fnatureofcode.com\u002Fbook\u002Fintroduction\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"standard deviation"}]},{type:a,value:" see figure 1.4."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"How does standard deviation look:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The larger the standard deviation the shallower the curve, in the pictures above the left image would have a lower standard deviation that the right picture."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's apply these ideas to code:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:"464",dataThemeId:"0",dataSlugHash:"eyjJbX",dataDefaultTab:"js,result",dataUser:"harps116",dataEmbedVersion:"2",dataPenTitle:u,className:["codepen"]},children:[{type:a,value:"See the Pen "},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FeyjJbX\u002F"},children:[{type:a,value:u}]},{type:a,value:" by Adam Harpur ("},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116"},children:[{type:a,value:"@harps116"}]},{type:a,value:") on "},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io"},children:[{type:a,value:"CodePen"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:"script",props:{async:g,src:"https:\u002F\u002Fproduction-assets.codepen.io\u002Fassets\u002Fembed\u002Fei.js"},children:[]},{type:a,value:" \n"},{type:b,tag:d,props:{},children:[{type:a,value:"In this example I generated a random sample of 10,000 numbers between 1 - 10 with a mean of 5 and standard deviation of 1. This set is then plotted on a graph. As you can see our chart behaves as expected with most of the numbers hovering around the average of 5 and less around 1 and 10."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I added some comments and references to the code so it's worth checking out if you'd like see how everything works together. You can also open your console ( ctrl + shift + i and click the console tab to see the logs )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Feel free to change the labelled values around to see how the chart grows and shrinks. Decreasing the standard deviation will create more numbers closer to the mean. Increasing the standard deviation will create more numbers towards the max high and low."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Thanks for reading && happy coding!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out Daniel Shiffman's great series on the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fplaylist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK",rel:[h,i,j],target:k},children:[{type:a,value:"Nature of Code"}]},{type:a,value:", this 100 days of learning is a great excuse for me to finally work through the lessons and take some notes as I go."}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fnormal-distribution-taming-the-random",extension:".md",createdAt:v,updatedAt:v}}],fetch:{},mutations:void 0}}("text","element","\n","p",false,"a",true,"nofollow","noopener","noreferrer","_blank","Wouldn't it be great to generate sets of numbers that seem more naturally distributed.","gaussian-distribution","Gaussian Distribution","div","nuxt-content-highlight","pre","language-text","line-numbers","code","Normal Distribution","2022-01-12T09:21:38.960Z")));