__NUXT_JSONP__("/archive/state-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{page:{slug:"state-pattern",title:"The State Pattern",date:"2019-07-04T01:43",desc:"The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface.",taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},feed:{limit:10},twitterenable:O,twittercardoptions:"summary",articleenabled:s,musiceventenabled:s,orgaenabled:s,orga:{ratingValue:ac},orgaratingenabled:s,eventenabled:s,personenabled:s,musicalbumenabled:s,productenabled:s,product:{ratingValue:ac},restaurantenabled:s,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:O,toc:[{id:ad,depth:D,text:ae},{id:af,depth:D,text:ag},{id:ah,depth:D,text:ai},{id:aj,depth:D,text:ak}],body:{type:"root",children:[{type:b,tag:E,props:{id:ad},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#name-command",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:E,props:{id:af},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#name-state",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:E,props:{id:ah},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#type-behavioural",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:E,props:{id:aj},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#use-when-you-want-to",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"Change the behavior of a class when the state changes."}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface.\nReal World Example:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:al,props:{},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"An example of the state patterns use case is a text editor, it lets you change the state of text that is being typed, i.e. if you have selected bold, it starts writing in bold, if italic then in italics etc."}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"First of all we have our state interface and some state implementations"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"interface"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"toUpperCase"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"toLowerCase"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ao}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"The Editor:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"protected"}]},{type:a,value:" state "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"constructor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{},children:[{type:a,value:"Usage:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"const"}]},{type:a,value:" editor "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'First line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'Second line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\neditor"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'Third line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'Fourth line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Output:"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F First line"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F SECOND LINE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F THIRD LINE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F fourth line"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F fifth line"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"script",props:{async:O,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fqphyzjva\u002F1\u002Fembed\u002Fjs\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fstate-pattern",extension:".md",createdAt:"2020-12-10T14:32:58.293Z",updatedAt:"2020-12-10T14:32:58.297Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","keyword"," ","(",")",".","function",";","class-name","operator","{","\n    ","}",false,"words",":","string","p","builtin","\n        ","comment","write","type","\n\neditor",2,"h2","a","true",-1,"icon","icon-link","WritingState","\n\n","class","new",true,"div","nuxt-content-highlight","pre","language-ts","line-numbers","code","implements","console","log"," WritingState","\n\n    ","state","this","=","setState",2.5,"name-command","Name: Command","name-state","Name: State","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote","UpperCase","LowerCase","DefaultText","TextEditor","state "," state","public")));