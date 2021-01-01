__NUXT_JSONP__("/archive/sass-an-introduction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK){return {data:[{post:{slug:"sass-an-introduction",title:"SASS ~ An Introduction",published:ad,date:"2017-09-01T18:26",desc:"In this post I am going to be building off a previous post. I went over how to install and setup Sass using Ruby aswell as the basic project structure, since that post I have came across away to use Sass with Nod",metadata:{Sass:"Blog"},taxonomy:{category:["blog"],tag:["web development","web design"]},twittercardoptions:"summary",articleenabled:y,article:{"@context":G,"@type":"NewsArticle",image:{"@type":ae},publisher:{"@type":"Organization",logo:{"@type":ae}}},musiceventenabled:y,orgaenabled:y,orga:{ratingValue:2.5},orgaratingenabled:y,eventenabled:y,personenabled:y,restaurantenabled:y,restaurant:{acceptsReservations:"yes",priceRange:af,"@context":G,"@type":"Restaurant",address:{"@type":ag}},facebookenable:ad,person:{"@context":G,"@type":"person",address:{"@type":ag}},event:{"@context":G,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":G,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:ah,depth:ai,text:aj},{id:ak,depth:Q,text:al},{id:am,depth:Q,text:an},{id:ao,depth:ai,text:ap},{id:aq,depth:Q,text:ar},{id:as,depth:Q,text:at}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-logo-sm.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmTKGuMVXrLwu4LV76YKvLYhcoJMpGnpq4hrFmHEojfnfZ\u002Fsass-logo-sm.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In this post I am going to be building off a previous post you can find "},{type:b,tag:h,props:{href:"https:\u002F\u002Fsteemit.com\u002Fprogramming\u002F@harps116\u002Fgetting-sassy-with-sass-css-s-wiser-uncle",rel:[n,o,p],target:q},children:[{type:a,value:"here"}]},{type:a,value:". I went over how to install and setup Sass using Ruby aswell as the basic project structure, since that post I have came across away to use Sass with Node."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The steps are lined out in this "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwebdesign.tutsplus.com\u002Ftutorials\u002Fwatch-and-compile-sass-in-five-quick-steps--cms-28275",rel:[n,o,p],target:q},children:[{type:a,value:au}]},{type:a,value:" by Zviad Sichinava. Since I am already using NodeJS in my workflow I've made the switch."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Of course you can use task runners such as "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgulpjs.com\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Gulp"}]},{type:a,value:" or "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgruntjs.com\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Grunt"}]},{type:a,value:" to get the job done, but there is really no need for the overhead if you are just playing around with Sass's functionality. I've found that build tools can become a bit of a rabbit hole and you often times spend more time on setting up build tools than actually writing code, this up front cost is worth it on bigger projects but not really for small or medium ventures."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"For reference I am assuming you project folder is as follows:"}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,"language-bash"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\nindex.html\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"\ncss\u002Fstyles.css\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"--scss\u002F \n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"-- partials\u002F                   \n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"-- _base.scss\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"--_variables.scss\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"--_mixins.scss\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"-- styles.scss     \n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"----♦ ♦ ♦-----♦ ♦ ♦------ Other folders unrelated to this tutorial\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"--js\u002F\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"--img\u002F\n"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:"\nX\n\n\n\n"}]}]}]},{type:a,value:e},{type:b,tag:av,props:{id:ah},children:[{type:b,tag:h,props:{href:"#your-recipe-to-get-the-most-from-sass",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:aj}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Head over to github and grab the repo if you would like to follow along: "},{type:b,tag:h,props:{href:aw,rel:[n,o,p],target:q},children:[{type:a,value:"resource"}]},{type:a,value:ax}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"{ If you don't know what git or github is check out this "},{type:b,tag:h,props:{href:"https:\u002F\u002Fsteemit.com\u002Fprogramming\u002F@jfuenmayor96\u002Fwhat-is-github-why-should-you-use-it-in-your-project",rel:[n,o,p],target:q},children:[{type:a,value:au}]},{type:a,value:" by a fellow steemer @jfuenmayor96. He has a great series on getting to grips with git. }"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Navigate to the freshly cloned repo and run "},{type:b,tag:i,props:{},children:[{type:a,value:"npm install"}]},{type:a,value:" and you should be good to go, I'm assuming you have Node and NPM installed and know how to work a computer.  You can also run "},{type:b,tag:i,props:{},children:[{type:a,value:"npm i"}]},{type:a,value:" to really feel like a badass."}]},{type:a,value:e},{type:b,tag:R,props:{id:ak},children:[{type:b,tag:h,props:{href:"#variables",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:al}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Variables in Sass are like variables in any other language they hold values that can be used anywhere throughout the project, although strictly speaking they are more like constants than variables as there is no reassignment, but thats a story for another post. This one feature of Sass should be enough to justify trying it out, (no more looking up Hex codes)."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"I mainly use variables for things like colors, fonts and occasionaly spacing. Here's a quick example:"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-1.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmUbL52W9QJoETDvQNkHW6cfLEFFauEPcz4LdS3YxB4Afy\u002Fsass-1.png"},children:[]}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,"language-text"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u002F*Note: remember the more descriptive the variable\nnames the better, they should describe what they hold.*\u002F\n\n\u002F*importing the font from google*\u002F\n@import url('https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro');\n\n\u002F*define the colors*\u002F\n$light-blue: #469ef3;\n$dark-blue: #154e9a;\n\n\u002F*define the font*\u002F\n$font: \"Source Sans Pro\", sans-serif;\n$font-size: 5em;\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Variables always start with "},{type:b,tag:i,props:{},children:[{type:a,value:af}]},{type:a,value:" in Sass which is the convention in many other languages so it shouldn't be too out of the ordinary. You can find the completed project for reference in the sass-starter-reference folder if you get lost or want to skip ahead and get going right away."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"You can also do math with variables and pass them into Sass's build in functions ( you can make your own functions that's coming up next ) here's a list of the toys that Sass comes with out of the box: "},{type:b,tag:h,props:{href:"http:\u002F\u002Fsass-lang.com\u002Fdocumentation\u002FSass\u002FScript\u002FFunctions.html",rel:[n,o,p],target:q},children:[{type:a,value:"functions list"}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Each sub-folder will have access to the set of node_modules at the root of the folder and you can run from the root "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" to watch and compile the sass in the sass-starter and "},{type:b,tag:i,props:{},children:[{type:a,value:"npm run sass-ref"}]},{type:a,value:"  for the reference. However the "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" will not do anything at this stage, patience young padawan."}]},{type:a,value:e},{type:b,tag:R,props:{id:am},children:[{type:b,tag:h,props:{href:"#mixins",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:an}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Mixins! Get excited for mixins they are a very fun and exciting, really they are very useful, once you have an arsenal or mixins at your disposal you will be surprised how quick you can go from concept to design.  Infact there are mixin libraries such as "},{type:b,tag:h,props:{href:"http:\u002F\u002Fbourbon.io\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Bourbon"}]},{type:a,value:". Bourbon is superb and also has its own set of sub libraries that are on the website if you wish to explore them ( I encourage you to do so ). There is also a huge suite of mixins called "},{type:b,tag:h,props:{href:"http:\u002F\u002Fcompass-style.org\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Compass"}]},{type:a,value:" which has a ton of features."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Mixins are essentially functions that you pass parameters into and a value is returned that can be used to style an element. They aren't technically functions because their function is to generate code at compile time not execute code at run time, templates maybe? Macros? Whatever they are, they are a core factor in the enjoyment of using Sass."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Let's continue working on our starter project, add this to "},{type:b,tag:i,props:{},children:[{type:a,value:"\u002Fsass-starter\u002Fscss\u002Fpartials\u002F_mixins.scss"}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-2.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmcXihj8RyF75gppmPXyCXEQ4ZgwinaLokAsTdriqPj8fw\u002Fsass-2.png"},children:[]}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,Y]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"\u002F*with mixins we use the @mixin keyword to tell \nthe compiler that it is approaching a mixin,\nwe then define the values and properties inside\nthe mixin.*\u002F"}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:az}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aB}]},{type:a,value:" $"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"width"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" $height"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:az}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"max-width"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aF}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:T}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It's worth noting that "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" is still not working at this point, we will fix that in the next section, we will also see how the above mixins work. they are fairly contrived examples, I'd recommend checking out "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.sitepoint.com\u002Fsass-mixins-kickstart-project\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"this post"}]},{type:a,value:" on mixins to really see their power."}]},{type:a,value:e},{type:b,tag:av,props:{id:ao},children:[{type:b,tag:h,props:{href:"#nesting-and-using-sass",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It's about time we actually started styling something, notice in the index.html file that there are only  four classes that we will be styling "},{type:b,tag:i,props:{},children:[{type:a,value:"main"}]},{type:a,value:aH},{type:b,tag:i,props:{},children:[{type:a,value:"main-img"}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"main-text"}]},{type:a,value:aH},{type:b,tag:i,props:{},children:[{type:a,value:"inner-text"}]},{type:a,value:ax}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"With nesting you can style elements that are within other elements. Let's look at a example, we will also be using those mixins we made earlier. First we have to hook up our base partial to the "},{type:b,tag:i,props:{},children:[{type:a,value:aI}]},{type:a,value:" which is the entry point to Scss folder and what node-sass is watching."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-3.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmThgVZojvEjBsY4tSmrQLWa68fFHLfDXQzipzG2umtDZo\u002Fsass-3.png"},children:[]}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,Y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u002F\u002F modules and variables\n"},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\"partials\u002Fbase\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:"h4",props:{id:"quick-side-note"},children:[{type:b,tag:h,props:{href:"#quick-side-note",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:b,tag:U,props:{},children:[{type:a,value:"Quick Side Note"}]}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It's worth noting that in larger projects you can also put all your partials in the "},{type:b,tag:i,props:{},children:[{type:a,value:aI}]},{type:a,value:" or entry point to your scss , the order is important with the lower imports having access to the ones above it, but not the other way around. Below is an example from another project to give you an idea of what I mean."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-7.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmY1XAWQna54Z13FHURWfsakW7kunyJhAGui66mWwNbwUC\u002Fsass-7.png"},children:[]}]},{type:a,value:e},{type:b,tag:R,props:{id:aq},children:[{type:b,tag:h,props:{href:"#back-to-it",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:ar}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The _base.scss can now be seen by node-sass, next we can hook in the mixins and variables we made earlier to the the _base.scss file and add some styling that will be applied to our webpage."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Once the two top import statements are added we can now head over to the terminal and run "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:", now the node-sass module is watch for changes on the styles.scss which hooked into the _base.scss which is hooked into the _variables.scss and the _mixins.scss. Hopefully you can picture how this is all working."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Let's look at our finished styles.scss file. Notice how we are passing in values to our mixins and using our variables."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-4.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmSctgi8jYhpqJGRWBpPQexuywPWcez5HMuZa7iVEE6LEG\u002Fsass-4.png"},children:[]}]},{type:a,value:e},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,Y]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"\u002F*Note: that we are importing the files that \nwe need and are using in this base file,\nthe SassScript compiler automatically \nremoves the _ prefix from any files in the partials folder,\nif we want to use a mixin we can use the @include syntax*\u002F"}]},{type:a,value:"\n\n\u002F\u002F modules and variables\n"},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\"variables\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:"\"mixins\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:".main"}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ab}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"30"}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ab}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"50"}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aB}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"25"}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" flex"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aF}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" $dark-"},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:";\n\n  "},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:".main-text"}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"margin-top"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"1.25"}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"font-family"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" $font"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"font-size"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" $font-size"},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:";\n    "},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:".inner-text"}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:s}]},{type:a,value:" $light-"},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,V]},children:[{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:".main-img"}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,w]},children:[{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ab}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"9"}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"This is what this file will compile to:"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-5.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmQtV8fjAYu9QZsRZuw5xETnMuf1C9V5RxZtmqSBSE6jCs\u002Fsass-5.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Open up the index.html and you should get the following output:"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:u,props:{alt:"sass-6.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmRPGiRTn1UZo8R9nWjocC8QYV34qopAiN6ScAVVNiXjd7\u002Fsass-6.png"},children:[]}]},{type:a,value:e},{type:b,tag:R,props:{id:as},children:[{type:b,tag:h,props:{href:"#other-areas-worth-exploring-and-links-to-resources",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:ac,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.sitepoint.com\u002Fsass-extend-nobody-told-you\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"Extends"}]}]},{type:a,value:e},{type:b,tag:ac,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002FHugoGiraudel\u002Fawesome-sass",rel:[n,o,p],target:q},children:[{type:a,value:"Big Fat List of Sassy Stuff"}]}]},{type:a,value:e},{type:b,tag:ac,props:{},children:[{type:b,tag:h,props:{href:aw,rel:[n,o,p],target:q},children:[{type:a,value:"repo for this post"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"That was a brief intro to the basics of Sass thanks for reading!"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fsass-an-introduction",extension:".md",createdAt:"2021-01-01T12:14:07.136Z",updatedAt:"2021-01-01T12:14:07.140Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","p","a","code","operator","|"," ",";","nofollow","noopener","noreferrer","_blank","property",":","\n  ","img","    ","atrule","rule",false,"true",-1,"icon","icon-link","number","{","}","http:\u002F\u002Fschema.org\u002F","div","nuxt-content-highlight","pre","line-numbers","function","(",")","unit","\n    ",3,"h3","npm run sass","\n\n","em","selector","class","color","language-css","size"," $width","@import","string","@include","li",true,"ImageObject","$","PostalAddress","your-recipe-to-get-the-most-from-sass",2,"Your recipe to get the most from Sass.","variables","Variables","mixins","Mixins","nesting-and-using-sass","Nesting and using Sass","back-to-it","Back to it","other-areas-worth-exploring-and-links-to-resources","Other areas worth exploring and links to resources:","post","h2","https:\u002F\u002Fgithub.com\u002Fharps116\u002Flearn-sass",".","comment","@mixin","$width",",","height","center","margin","0"," auto","  ","styles.scss","%","blue")));