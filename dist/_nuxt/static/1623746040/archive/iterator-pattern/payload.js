__NUXT_JSONP__("/archive/iterator-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{post:{slug:"iterator-pattern",title:"The Iterator Pattern",desc:U,published:A,date:"2019-05-04T13:49",publish_date:"04-05-2019 13:54",taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},feed:{limit:10},twitterenable:A,twittercardoptions:"summary",articleenabled:n,musiceventenabled:n,orgaenabled:n,orga:{ratingValue:V},orgaratingenabled:n,eventenabled:n,personenabled:n,musicalbumenabled:n,productenabled:n,product:{ratingValue:V},restaurantenabled:n,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:A,toc:[{id:W,depth:B,text:X},{id:Y,depth:B,text:Z},{id:_,depth:B,text:$}],body:{type:"root",children:[{type:b,tag:C,props:{id:W},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#name-iterator",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:X}]},{type:a,value:i},{type:b,tag:C,props:{id:Y},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#type-behavioural",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:Z}]},{type:a,value:i},{type:b,tag:C,props:{id:_},children:[{type:b,tag:D,props:{ariaHidden:E,href:"#use-when-you-want-to",tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:$}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"Access the elements of an object without exposing the underlying presentation."}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:i},{type:b,tag:aa,props:{},children:[{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:U}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"Real world example:"}]},{type:a,value:i},{type:b,tag:aa,props:{},children:[{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"An old radio set will be a good example of iterator, where user could start at some channel and then use next or previous buttons to go through the respective channels. Or take an example of MP3 player or a TV set where you could press the next and previous buttons to go through the consecutive channels or in other words they all provide an interface to iterate through the respective channels, songs or radio stations."}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"Create a radio station:"}]},{type:a,value:i},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"private"}]},{type:a,value:" frequency"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"frequency "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:a,value:" frequency    \n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"frequency\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:" \n"}]}]}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"And a list of stations"}]},{type:a,value:i},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"public"}]},{type:a,value:" stations"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ae}]},{type:a,value:" RadioStation"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"push"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"toRemove"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:al}]},{type:a,value:" toRemoveFrequency "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:a,value:" toRemove"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"stations "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"filter"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ag}]},{type:a,value:" station"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"!=="}]},{type:a,value:" toRemoveFrequency\n        "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:o,props:{},children:[{type:a,value:"Iterate through th list:"}]},{type:a,value:i},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:al}]},{type:a,value:" stationList "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"101"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"102"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"103.2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"forEach"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:"console"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:ar}]}]},{type:a,value:"`\n"}]}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fiterator-pattern",extension:".md",createdAt:as,updatedAt:as}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","(",")","\n","keyword",".","function","operator",false,"p","class-name","{","}","RadioStation","number","new","\n        ","this","=","addStation","getFrequency",true,2,"h2","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-ts","line-numbers","code","\n    \n    ","\n    ","station","stations","\n\nstationList","\nstationList","In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.",2.5,"name-iterator","Name: Iterator","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote","class","\n\n    ","constructor",":","builtin","return","StationList","[","]","removeStation","const","station ","=\u003E","89","template-punctuation","string","`","2020-12-20T10:34:27.850Z")));