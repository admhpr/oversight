__NUXT_JSONP__("/blog/better-testing", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{post:{slug:"better-testing",title:"better ui testing",date:"2022-02-18T06:23",desc:"patterns for better UI testing 🧪",tags:["recipes","testing"],toc:[{id:E,depth:3,text:F}],body:{type:"root",children:[{type:b,tag:"blockquote",props:{},children:[{type:a,value:h},{type:b,tag:v,props:{},children:[{type:a,value:"\"You can't write good tests for bad code\""}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:"h3",props:{id:E},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#separation-of-concerns",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:F}]},{type:a,value:h},{type:b,tag:"ul",props:{},children:[{type:a,value:h},{type:b,tag:G,props:{},children:[{type:a,value:"Avoid mixing UI logic with business logic"}]},{type:a,value:h},{type:b,tag:G,props:{},children:[{type:a,value:"UI components should render data, avoid adding logic to UI"}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:v,props:{},children:[{type:a,value:"An example..."}]},{type:a,value:h},{type:b,tag:v,props:{},children:[{type:a,value:"The spec:\nA wiget costs $0.60. If you buy over 50, you get a 20% discount. Imagine we had a tightly coupled piece that looked like this:"}]},{type:a,value:h},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" $widgetCount "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"'#widget-count'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n$widget"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,O,g]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" totalCost "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" $price "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"amount "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"totalCost "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"totalCost"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:v,props:{},children:[{type:a,value:"It is hard to tell where the UI ends and the business logic starts, let's look at a possible refactor:"}]},{type:a,value:h},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:" widgetPrice "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:S}]},{type:a,value:"\n\nfuncrion "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"price"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:" price "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,l,A]},children:[{type:a,value:$}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:W}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:":"}]},{type:a,value:" sum\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"\n\n$widgetCount"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,w,k,n]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,O,g]},children:[{type:a,value:P}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:q}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"widgetPrice"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fbetter-testing",extension:".md",createdAt:ae,updatedAt:ae}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","operator","\n","(",")","function","keyword",".","property-access","\n  ","=","const","{","number","}","value","p","method","parameter","event","*","control-flow","$","string"," amount ","separation-of-concerns","Separation of Concerns","li","div","nuxt-content-highlight","pre","language-js","line-numbers","code","change","arrow","=\u003E","parseInt","target","0.6"," amount\n  ","\"#price\"","\u003E","50","\n    $price","0.8","applyDiscount","sum","return"," sum ","widgetCost",","," amount","2022-02-22T10:55:48.058Z")));