__NUXT_JSONP__("/blog/better-testing", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{post:{slug:"better-testing",title:"better ui testing",date:"2022-02-18T06:23",desc:"patterns for better UI testing 🧪",tags:["recipes","testing"],toc:[{id:E,depth:3,text:F}],body:{type:"root",children:[{type:b,tag:G,props:{},children:[{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"\"You can't write good tests for bad code\""}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:"h3",props:{id:E},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#separation-of-concerns",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:F}]},{type:a,value:g},{type:b,tag:"ul",props:{},children:[{type:a,value:g},{type:b,tag:H,props:{},children:[{type:a,value:"Avoid mixing UI logic with business logic"}]},{type:a,value:g},{type:b,tag:H,props:{},children:[{type:a,value:"UI components should render data, avoid adding logic to UI"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"An example..."}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"The spec:"}]},{type:a,value:g},{type:b,tag:G,props:{},children:[{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"A wiget costs $0.60. If you buy over 50, you get a 20% discount."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"Imagine we had a tightly coupled piece that looked like this:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" $widgetCount "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'#widget-count'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n$widget"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,h]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" totalCost "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" $price "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"amount "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"totalCost "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"totalCost"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:r,props:{},children:[{type:a,value:"It is hard to tell where the UI ends and the business logic starts, let's look at a possible refactor:"}]},{type:a,value:g},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,M]},children:[{type:b,tag:N,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" widgetPrice "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:T}]},{type:a,value:"\n\nfuncrion "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:Z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"price"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:" price "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:aa}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:":"}]},{type:a,value:" sum\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n\n$widgetCount"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,h]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:R}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"widgetPrice"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fbetter-testing",extension:".md",createdAt:af,updatedAt:af}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","\n","operator","(",")","function","keyword",".","property-access","\n  ","=","const","p","{","number","}","value","method","parameter","event","*","control-flow","$","string"," amount ","separation-of-concerns","Separation of Concerns","blockquote","li","div","nuxt-content-highlight","pre","language-js","line-numbers","code","change","arrow","=\u003E","parseInt","target","0.6"," amount\n  ","\"#price\"","\u003E","50","\n    $price","0.8","applyDiscount","sum","return"," sum ","widgetCost",","," amount","2022-02-22T11:21:50.058Z")));