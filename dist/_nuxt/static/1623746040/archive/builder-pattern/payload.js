__NUXT_JSONP__("/archive/builder-pattern", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{post:{slug:"builder-pattern",title:"The Builder Pattern",date:"2018-12-31T00:00",desc:$,taxonomy:{category:["blog"],tag:["design patterns","creational"]},twitterenable:B,twittercardoptions:"summary",articleenabled:r,musiceventenabled:r,orgaenabled:r,orga:{ratingValue:aa},orgaratingenabled:r,eventenabled:r,personenabled:r,musicalbumenabled:r,productenabled:r,product:{ratingValue:aa},restaurantenabled:r,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:B,toc:[{id:ab,depth:F,text:ac},{id:ad,depth:F,text:ae},{id:af,depth:F,text:ag}],body:{type:"root",children:[{type:b,tag:G,props:{id:ab},children:[{type:b,tag:H,props:{ariaHidden:y,href:"#name-builder",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:G,props:{id:ad},children:[{type:b,tag:H,props:{ariaHidden:y,href:"#type-creational",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:G,props:{id:af},children:[{type:b,tag:H,props:{ariaHidden:y,href:"#use-when-you-want-to",tabIndex:I},children:[{type:b,tag:c,props:{className:[J,K]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:"do lots of things to build an object"}]},{type:a,value:f},{type:b,tag:ah,props:{},children:[{type:a,value:"design classes whose constructors or static factories would have more than a handful of parameters."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:f},{type:b,tag:L,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:$}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:f},{type:b,tag:L,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Imagine you are at your local sandwhich place. You could just order a premade and call it good. Not having to answer any questions about how you would like it made.\nBut what if you wanted some things on there. What bread you would like? If you want tomato? The builder pattern aims to provide this type of customisation of objects."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Main Purpose:"}]},{type:a,value:f},{type:b,tag:L,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ai,props:{},children:[]},{type:a,value:"\n** A quick note on the telescoping constructor. \n"},{type:b,tag:m,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,"language-text"]},children:[{type:b,tag:Q,props:{},children:[{type:a,value:"enum BreadTypes { \n    wheat,\n    rye,\n    white,\n    oat\n}\n\nclass Sandwhich{\n    \u002F\u002F constructor is telescoping\n    constructor(breadType: BreadTypes, size: number, cheese = true, lettuce = true, tomato = false) {\n            \u002F\u002F instantiation logic\n    }\n}\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"When a constructor takes a large number of parameters which become increasing difficult to understand as the number of parameters grow.\nThis is considered an anit-pattern and should be avoided. The builder pattern is one way to solve this."}]},{type:a,value:f},{type:b,tag:ai,props:{},children:[]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Back to the builder..."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aj]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:au}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n\n\n    "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" \n\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"cheese "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"tomato "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:" Sandwhich "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"console"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n    \n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"BreadTypes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"wheat"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n \n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Full Example:"}]},{type:a,value:f},{type:b,tag:aC,props:{async:B,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fe48pLck3\u002F15\u002Fembed\u002Fjs,result\u002F"},children:[]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Of course this can also be done with a simple object as a param like so:"}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,aj]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ak}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"interface"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:T}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" \n    breadType"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n    cheese"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n    tomato"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:au}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:" builder"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:" SandwhichBuilder "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"rye"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:_}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"builder"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v}]}]}]},{type:a,value:f},{type:b,tag:aC,props:{async:B,src:"\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fpg0yqa1c\u002F1\u002Fembed\u002Fjs,result\u002F"},children:[]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"That was the builder pattern... now what to build?"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fbuilder-pattern",extension:".md",createdAt:aD,updatedAt:aD}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n","keyword"," ","operator",":","(",")","p","{","}","\n    ",",",false,"boolean","this",".","\n\n","class-name","function","true","builtin","=",true,"Sandwhich","\n\n    ",";",2,"h2","a",-1,"icon","icon-link","blockquote","div","nuxt-content-highlight","pre","line-numbers","code","class","constructor","SandwhichBuilder","public"," BreadTypes"," \n        ","\n        ","return","new","const","The builder pattern is an object creation software design pattern with the intentions of finding a solution to the telescoping constructor** anti-pattern.",2.5,"name-builder","Name: Builder","type-creational","Type: Creational","use-when-you-want-to","Use when you want to:","li","hr","language-ts","enum"," BreadTypes "," \n    wheat","\n    rye","\n    white","\n    oat\n","builder "," SandwhichBuilder","\n            ","comment","\u002F\u002F ... "," cheese"," tomato"," breadType","addCheese","addTomato","build"," sandwhich ","script","2020-12-20T10:34:27.850Z")));