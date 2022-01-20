__NUXT_JSONP__("/archive/state-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au){return {data:[{post:{slug:"state-pattern",title:"The State Pattern",date:"2019-07-04T01:43",desc:ac,taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},feed:{limit:10},twitterenable:O,twittercardoptions:"summary",articleenabled:s,musiceventenabled:s,orgaenabled:s,orga:{ratingValue:ad},orgaratingenabled:s,eventenabled:s,personenabled:s,musicalbumenabled:s,productenabled:s,product:{ratingValue:ad},restaurantenabled:s,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:O,toc:[{id:ae,depth:D,text:af},{id:ag,depth:D,text:ah},{id:ai,depth:D,text:aj},{id:ak,depth:D,text:al}],body:{type:"root",children:[{type:b,tag:E,props:{id:ae},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#name-command",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:af}]},{type:a,value:f},{type:b,tag:E,props:{id:ag},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#name-state",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:E,props:{id:ai},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#type-behavioural",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:E,props:{id:ak},children:[{type:b,tag:F,props:{ariaHidden:G,href:"#use-when-you-want-to",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Change the behavior of a class when the state changes."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:f},{type:b,tag:am,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:ac}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:f},{type:b,tag:am,props:{},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"An example of the state patterns use case is a text editor, it lets you change the state of text that is being typed, i.e. if you have selected bold, it starts writing in bold, if italic then in italics etc."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"First of all we have our state interface and some state implementations"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"interface"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"toUpperCase"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"toLowerCase"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ap}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"The Editor:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:M}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"protected"}]},{type:a,value:" state "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"constructor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Usage:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:U,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"const"}]},{type:a,value:" editor "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'First line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Second line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\neditor"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Third line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"'Fourth line'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F Output:"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F First line"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F SECOND LINE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F THIRD LINE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F fourth line"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"\u002F\u002F fifth line"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:"script",props:{async:O,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fqphyzjva\u002F1\u002Fembed\u002Fjs\u002F"},children:[]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fstate-pattern",extension:".md",createdAt:au,updatedAt:au}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","(",")","keyword","function",".",";","class-name","operator","{","\n    ","}",false,"p","words",":","string","builtin","\n        ","comment","write","type","\n\neditor",2,"h2","a","true",-1,"icon","icon-link","WritingState","\n\n","class","new",true,"div","nuxt-content-highlight","pre","language-ts","line-numbers","code","implements","console","log"," WritingState","\n\n    ","state","this","=","setState","The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface.",2.5,"name-command","Name: Command","name-state","Name: State","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote","UpperCase","LowerCase","DefaultText","TextEditor","state "," state","public","2022-01-20T12:00:55.941Z")));