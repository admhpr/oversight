__NUXT_JSONP__("/archive/adapter-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw){return {data:[{post:{slug:"adapter-pattern",title:"The Adapter Pattern",date:"2018-03-12T17:12",desc:aa,published:A,taxonomy:{category:["blog"],tag:["design patterns","structural"]},twitterenable:A,twittercardoptions:"summary",articleenabled:p,musiceventenabled:p,orgaenabled:p,orga:{ratingValue:ab},orgaratingenabled:p,eventenabled:p,personenabled:p,musicalbumenabled:p,productenabled:p,product:{ratingValue:ab},restaurantenabled:p,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:A,toc:[{id:ac,depth:B,text:ad},{id:ae,depth:B,text:af},{id:ag,depth:B,text:ah},{id:ai,depth:B,text:aj},{id:T,depth:3,text:T}],body:{type:"root",children:[{type:b,tag:C,props:{id:ac},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#name-adapter",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:ad}]},{type:a,value:g},{type:b,tag:C,props:{id:ae},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#type-structural",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:af}]},{type:a,value:g},{type:b,tag:C,props:{id:ag},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#use-when-you-want-to",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:ah}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Make interfaces compatable"}]},{type:a,value:g},{type:b,tag:C,props:{id:ai},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#variants",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:aj}]},{type:a,value:g},{type:b,tag:"h3",props:{id:T},children:[]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:g},{type:b,tag:U,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:aa}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:g},{type:b,tag:U,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Consider that you have some pictures in your memory card and you need to transfer them to your computer. In order to transfer them you need some kind of adapter that is compatible with your computer ports so that you can attach memory card to your computer. In this case card reader is an adapter. Another example would be the famous power adapter a three legged plug can't be connected to a two pronged outlet, it needs to use a power adapter that makes it compatible with the two pronged outlet. Yet another example would be a translator translating words spoken by one person to another."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Main Purpose:"}]},{type:a,value:g},{type:b,tag:U,props:{},children:[{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"The Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Let's say we had made a game called "},{type:b,tag:w,props:{},children:[{type:a,value:"Lion Hunter"}]},{type:a,value:" now our marketing manager loves a good scandal and knows a game like this will generate a lot of social media attention. So we write some code:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'rooarrr!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"AsianLion"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'roawwwr!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q}]}]}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Now we have a couple of lions, now let's create the hunter:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"lion "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:_}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:_}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" \n        lion"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"It's all working and our PM is very happy...but marketing comes back and says we need more sweet animals to kill, maybe dogs or something..."}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Rather than mess with the hunter set up we can make an adapter that uses the already established interface like so:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"'bark! bark!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"constructor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"protected"}]},{type:a,value:" dog"},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:_}]},{type:a,value:" WildDog"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"dog"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q}]}]}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Usage:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:" wildDog "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:" wildDogAdapter "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"wildDog"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:" lion "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:a,value:" hunter "},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"wildDogAdapter"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:m,props:{},children:[{type:a,value:"Full Example:"}]},{type:a,value:g},{type:b,tag:"script",props:{async:A,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F8psnf49z\u002F8\u002Fembed\u002Fjs,result\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fadapter-pattern",extension:".md",createdAt:aw,updatedAt:aw}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","\n","keyword","(",")","class-name","function","p","{","}",false,"\n\n",".","\n    ","operator"," \n    ",";","code","roar","class","implements",true,2,"h2","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-ts","line-numbers","ILion","public","hunt","const","=","new","","blockquote","interface","builtin","console","log","string",":","bark","In software engineering, the adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface. It is often used to make existing classes work with others without modifying their source code.",2.5,"name-adapter","Name: Adapter","type-structural","Type: Structural","use-when-you-want-to","Use when you want to:","variants","Variants","AfricanLion"," \n        ","IHunter"," ILion","Hunter","lion","IWildDog","WildDog","\n        ","WildDogAdapter","\n\n    ","\nhunter","2022-02-04T06:51:43.863Z")));