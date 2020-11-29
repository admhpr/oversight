__NUXT_JSONP__("/archive/facade-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{page:{slug:"facade-pattern",title:"The Facade Pattern",desc:u,date:"2019-03-07T17:09",publish_date:"07-03-2019 17:09",taxonomy:{category:["blog"],tag:["design patterns","structural"]},twitterenable:f,twittercardoptions:"summary",articleenabled:d,musiceventenabled:d,orgaenabled:d,orga:{ratingValue:v},orgaratingenabled:d,eventenabled:d,personenabled:d,musicalbumenabled:d,productenabled:d,product:{ratingValue:v},restaurantenabled:d,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:f,toc:[{id:w,depth:g,text:x},{id:y,depth:g,text:z},{id:A,depth:g,text:B}],body:{type:"root",children:[{type:b,tag:h,props:{id:w},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#name-facade",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:h,props:{id:y},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#type-structural",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:h,props:{id:A},children:[{type:b,tag:i,props:{ariaHidden:j,href:"#use-when-you-want-to",tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Provide a simplified interface to a complex subsystem."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"What do you do turn a computer on? Push the power button? Under the hood there is a lot going when you press that power button, like the power on self test, access to the first sector of the drive that is designated as a boot disk, setting up the boot loader and eventually loading the OS. This all happens behind the scences and all you have to worry about is the button."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The computer class."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"class Computer { \n    public initPost() { \n        console.log('POST')\n    }\n\n    public accessFirstSector() { \n        console.log('... accessing first sector')\n    }\n\n    public initBootloader() { \n        console.log('... init boot loader')\n\n    }\n\n    public loadOS() { \n        console.log('... load OS')\n    }\n\n    public ready() { \n        console.log('... ready')\n    }\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The facade."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"class ComputerFacade { \n    constructor(protected computer: Computer) { \n\n    }\n\n    public powerOn() { \n        this.computer.initPost();\n        this.computer.accessFirstSector();\n        this.computer.initBootloader();\n        this.computer.loadOS()\n        this.computer.ready();\n    }\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Usage:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"const myLapytop = new ComputerFacade(new Computer());\n\nmyLapytop.powerOn();\n\n\u002F\u002F POST ... accessing first sector ... init boot ... loader load ... OS ready\n\n"}]}]}]},{type:a,value:c},{type:b,tag:"script",props:{async:f,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002FkpyL8jwc\u002F3\u002Fembed\u002Fjs\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Ffacade-pattern",extension:".md",createdAt:"2020-11-24T08:50:03.333Z",updatedAt:"2020-11-28T15:59:03.250Z"}}],fetch:[],mutations:void 0}}("text","element","\n",false,"p",true,2,"h2","a","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","code","A facade is an object that provides a simplified interface to a larger body of code, such as a class library.",2.5,"name-facade","Name: Facade","type-structural","Type: Structural","use-when-you-want-to","Use when you want to:","blockquote")));