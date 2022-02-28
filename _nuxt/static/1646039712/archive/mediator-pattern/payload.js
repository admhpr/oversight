__NUXT_JSONP__("/archive/mediator-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:[{post:{slug:"mediator-pattern",title:"The Mediator Pattern",desc:S,published:z,date:"2019-05-07T08:24",taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},feed:{limit:10},twitterenable:z,twittercardoptions:"summary",articleenabled:o,musiceventenabled:o,orgaenabled:o,orga:{ratingValue:T},orgaratingenabled:o,eventenabled:o,personenabled:o,musicalbumenabled:o,productenabled:o,product:{ratingValue:T},restaurantenabled:o,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:z,toc:[{id:U,depth:D,text:V},{id:W,depth:D,text:X},{id:Y,depth:D,text:Z}],body:{type:"root",children:[{type:b,tag:E,props:{id:U},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#name-mediator",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:V}]},{type:a,value:g},{type:b,tag:E,props:{id:W},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#type-behavioural",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:X}]},{type:a,value:g},{type:b,tag:E,props:{id:Y},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#use-when-you-want-to",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"Mediate two objects (colleagues) and how they communicate without the colleagues knowing about eachothers implementations."}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:g},{type:b,tag:_,props:{},children:[{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:S}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:g},{type:b,tag:_,props:{},children:[{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"A general example would be when you talk to someone on your mobile phone, there is a network provider sitting between you and them and your conversation goes through it instead of being directly sent. In this case network provider is mediator."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"Set up the mediator:"}]},{type:a,value:g},{type:b,tag:$,props:{className:[aa]},children:[{type:b,tag:ab,props:{className:[ac,ad]},children:[{type:b,tag:ae,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"interface"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" \n    "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F Mediator"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"implements"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" time "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"Date"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" sender "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:" user"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"console"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,al,l]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:O}]},{type:a,value:"time"},{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:O}]},{type:a,value:"sender"},{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"]:"}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:O}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,v,e]},children:[{type:a,value:n}]}]},{type:b,tag:c,props:{className:[d,al,l]},children:[{type:a,value:am}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"The colleagues:"}]},{type:a,value:g},{type:b,tag:$,props:{className:[aa]},children:[{type:b,tag:ab,props:{className:[ac,ad]},children:[{type:b,tag:ae,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"constructor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:" name"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:" chatMediator"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:t}]},{type:a,value:" IChatRoom"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"return"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"name\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"chatMediator"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" mediator "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" john "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'John Doe'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:x}]},{type:a,value:" jane "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'Jane Doe'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n\njohn"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'Hi there!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\njane"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'Hey!'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"script",props:{async:z,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002F9bj7xyuh\u002F10\u002Fembed\u002Fjs\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fmediator-pattern",extension:".md",createdAt:ar,updatedAt:ar}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","\n","keyword","(",")","operator","string","function","}",false,"p","class-name","{",".",":",",","interpolation-punctuation","\n    ","const","=",true,"builtin","\n        ","new",2,"h2","a","true",-1,"icon","icon-link","showMessage"," message","\n\n","interpolation","${","User","this","send","In software engineering, the mediator pattern defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.",2.5,"name-mediator","Name: Mediator","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote","div","nuxt-content-highlight","pre","language-ts","line-numbers","code","IChatRoom","user"," User","class","ChatRoom","getName","template-punctuation","`","message","private","\n    \n    "," mediator","2022-02-28T09:13:01.095Z")));