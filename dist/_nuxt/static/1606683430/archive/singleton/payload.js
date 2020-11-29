__NUXT_JSONP__("/archive/singleton", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{page:{slug:"singleton",title:"The Singleton Pattern",date:"2019-01-06T00:00",desc:p,publish_date:"06-01-2019 00:00",taxonomy:{category:["blog"],tag:["design patterns","creational"]},twitterenable:g,twittercardoptions:"summary",articleenabled:e,musiceventenabled:e,orgaenabled:e,orga:{ratingValue:q},orgaratingenabled:e,eventenabled:e,personenabled:e,musicalbumenabled:e,productenabled:e,product:{ratingValue:q},restaurantenabled:e,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:g,toc:[{id:r,depth:h,text:s},{id:t,depth:h,text:u},{id:v,depth:h,text:w}],body:{type:"root",children:[{type:b,tag:i,props:{id:r},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#name-singleton",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:i,props:{id:t},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#type-creational",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:i,props:{id:v},children:[{type:b,tag:j,props:{ariaHidden:k,href:"#use-when-you-want-to",tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:"To manage a shared resource."}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:"To read global state."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A quick note:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There aren't a ton of reasons to ever use a singleton. If however you want global information to flow into the singleton and not back into the app again, then it is a acceptable solution. A logger is a good example of this."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There can only be one monarch of a country at a time. The same monarch has to be brought to action, whenever duty calls. The monarch here is singleton."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Main Purpose:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ensures that only one object of a particular class is ever created."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"class Monarch {\n\n    private static _instance:Monarch = new Monarch();\n\n    private _duties = 0;\n\n    constructor() {\n        if(Monarch._instance){\n            throw new Error(\"Error: Instantiation failed: Use Monarch.getInstance() instead of new.\");\n        }\n        Monarch._instance = this;\n    }\n\n    public static getInstance():Monarch\n    {\n        return Monarch._instance;\n    }\n\n\n    public addDuties(value:number):void\n    {\n        this._duties += value;\n    }\n\n    public dutyTotal() { \n        return this._duties;\n    }\n\n}\n\nconst queen = Monarch.getInstance();\n\nqueen.addDuties(2);\n\nconst king = new Monarch(); \u002F\u002F will not work\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Full Example:"}]},{type:a,value:c},{type:b,tag:"script",props:{async:g,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fum9sroc3\u002F6\u002Fembed\u002Fjs,result\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fsingleton",extension:".md",createdAt:"2020-11-24T08:50:03.333Z",updatedAt:"2020-11-29T09:25:35.941Z"}}],fetch:[],mutations:void 0}}("text","element","\n","p",false,"blockquote",true,2,"h2","a","true",-1,"span","icon","icon-link","In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.",2.5,"name-singleton","Name: Singleton","type-creational","Type: Creational","use-when-you-want-to","Use when you want to:","li")));