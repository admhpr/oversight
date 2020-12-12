__NUXT_JSONP__("/blog/rust-variables-and-mutability", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR){return {data:[{page:{slug:"rust-variables-and-mutability",title:"variables and mutability in rust",date:"2020-12-11T11:02",desc:"A look at basic building blocks using rust",tags:["rust"],toc:[{id:am,depth:X,text:an},{id:ao,depth:X,text:ap},{id:aq,depth:X,text:ar}],body:{type:"root",children:[{type:b,tag:Y,props:{id:am},children:[{type:b,tag:R,props:{href:"#first-steps",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Variables in rust are "},{type:b,tag:R,props:{href:"https:\u002F\u002Fwww.dictionary.com\u002Fbrowse\u002Fimmutable",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"immutable"}]},{type:a,value:" by default. a helpful hint by the language to write code that is easy to follow and avoid any unwanted side effects are reduced."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Once a immutable variable is bound to a name, it cannot change. Let's have a quick look at what that means."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ac}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,ad,z]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:ah}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The above code will not compile. We are trying to change the value of "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" from 5 to 6. The compiler will complain pretty loudly in fact."}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,S]},children:[{type:b,tag:g,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:"E0384"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:": cannot assign twice to immutable variable "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:"\n --"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:au}]},{type:a,value:" src\u002Fmain.rs:4:5\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ai}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"     "},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"         -\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"         "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"         first assignment to "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"         help: "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"make"}]},{type:a,value:" this binding mutable: "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"mut x"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:av}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"     println"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:a,value:", x"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"4"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"     x "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"     ^^^^^ cannot assign twice to immutable variable\n\nerror: aborting due to previous error\n\nFor "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"rustc --explain E0384"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:F}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:F}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aB}]},{type:a,value:" again with --verbose.\n\n"}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This is a good thing, the compiler is nudging you to solving the issue at hand. Take note of the following message: "},{type:b,tag:g,props:{},children:[{type:a,value:"cannot assign twice to immutable variable x"}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Now we know we have two options to achieve the desired output. We can either create a new immutable variable and assign "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" to it. Or, we can make "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" mutable. If we want to make "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" mutable we can add the "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" keyword to the variable declaration."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ac}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,ad,z]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:ah}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"We can now run the program"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,S]},children:[{type:b,tag:g,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aG}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aH}]},{type:a,value:".30s\n     Running "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"In some cases, you’ll want to make a variable mutable because it makes the code more convenient to write than if it had only immutable variables."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"There are always going to be trade offs when choosing to make things immutable or mutable. For instance if the data structure was particularly large it may make sense to mutate in place rather than save a copy and re-allocate the data. With small data it may make sense to create new instances of the data and writing it in a more functional style, the drop in performance may a price worth paying for legibility."}]},{type:a,value:f},{type:b,tag:Y,props:{id:ao},children:[{type:b,tag:R,props:{href:"#variables-vs-constants",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Having an immutable variable may sound like that variable is really a constant. However in rust constants cannot be marked as mutable using "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:". They are always immutable."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"You declare constants using the "},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:" keyword instead of let as you would with a variable. You also must annotate a type. They can be declared in any scope including the global scope which makes them useful for values that many parts of code need to know about."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The last difference is that constants may be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Below is how you would declare a constant for "},{type:b,tag:g,props:{},children:[{type:a,value:aK}]},{type:a,value:" with a value set to 100,000."}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aJ}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:":"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"u32"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"100_000"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Constants stick around for the entire time a program runs within the scope in which it is declared. These values are the non-changing hardcoded values like "},{type:b,tag:g,props:{},children:[{type:a,value:"SPEED_OF_SOUND"}]},{type:a,value:aL},{type:b,tag:g,props:{},children:[{type:a,value:"HOURS_IN_DAY"}]},{type:a,value:". They let maintainers know that these values are intentionally hardcoded. It also allows these values to be changed in one place, should they need to be updated in the future."}]},{type:a,value:f},{type:b,tag:Y,props:{id:aq},children:[{type:b,tag:R,props:{href:"#shadowing",ariaHidden:Z,tabIndex:_},children:[{type:b,tag:c,props:{className:[$,aa]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"You can declare a new variable with the same name as a previous variable, and the new variable shadows the previous variable. The first variable is "},{type:b,tag:"strong",props:{},children:[{type:a,value:"shadowed"}]},{type:a,value:" by the second. This means the second variables value is what appears when the variable is used. A quick example:"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ab}]}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:ac}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,ad,z]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"+"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"*"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,L,M]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This program first binds "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" to a value of "},{type:b,tag:g,props:{},children:[{type:a,value:I}]},{type:a,value:". Then it shadows "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" by repeating "},{type:b,tag:g,props:{},children:[{type:a,value:"let x ="}]},{type:a,value:", taking the original value and adding "},{type:b,tag:g,props:{},children:[{type:a,value:aM}]},{type:a,value:" so the value of "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" is then "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:". The third let statement also shadows "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:", multiplying the previous value by "},{type:b,tag:g,props:{},children:[{type:a,value:ai}]},{type:a,value:" to give "},{type:b,tag:g,props:{},children:[{type:a,value:y}]},{type:a,value:" a final value of "},{type:b,tag:g,props:{},children:[{type:a,value:aN}]},{type:a,value:". When we run this program, it will output the following:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,S]},children:[{type:b,tag:g,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aG}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aH}]},{type:a,value:".31s\n     Running "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aN}]},{type:a,value:ah}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Shadowing is different from marking a variable as "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:". We would get a compile-time error\nif we accidentally try to reassign to this variable without using the "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:" keyword. Using "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:" we can perform transformations on a value but have the variable be immutable after those transformations have occurred."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The other difference between "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" and shadowing is that because we’re effectively creating a new variable when we use the "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:" keyword again, we can change the type of the value but reuse the same name. For example, say our program asks a user to show how many spaces they want between some text by inputting space characters, but we really want to store that input as a number:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This is valid as we use the keyword "},{type:b,tag:g,props:{},children:[{type:a,value:s}]},{type:a,value:" which ensures the second "},{type:b,tag:g,props:{},children:[{type:a,value:"spaces"}]},{type:a,value:" is a brand new variable. This saves us the need to come up with new names for each assignment, like "},{type:b,tag:g,props:{},children:[{type:a,value:"spaces_str"}]},{type:a,value:aL},{type:b,tag:g,props:{},children:[{type:a,value:"spaces_num"}]},{type:a,value:". Note that using "},{type:b,tag:g,props:{},children:[{type:a,value:G}]},{type:a,value:" will not achieve the desired outcome:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,H]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"    "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"\n    spaces "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,S]},children:[{type:b,tag:g,props:{},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:"E0308"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:": mismatched types\n --"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:au}]},{type:a,value:" src\u002Fmain.rs:3:14\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:av}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"     spaces "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:r}]},{type:a,value:" spaces.len"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:t}]},{type:a,value:"              ^^^^^^^^^^^^ expected "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"&"}]},{type:a,value:"str"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:", found "},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"usize"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:a,value:"\n\nerror: aborting due to previous error\n\nFor "},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"rustc --explain E0308"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:F}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]}]},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:F}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,D,E]},children:[{type:a,value:aB}]},{type:a,value:" again with --verbose.\n"}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"I'll be looking at data types next"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Frust-variables-and-mutability",extension:".md",createdAt:aR,updatedAt:aR}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n","code","operator","variable"," ","p","`",";","number","(",")","keyword","=","let","|","div","nuxt-content-highlight","pre","line-numbers","x","function"," x ","string","\n    ","builtin","class-name",".","mut","language-rust","5","\"The value of x is: {}\"","6","macro","property","println!",","," x","\n  ","a","language-bash","$ cargo run\n   Compiling variables v0.1.0 ","file:\u002F\u002F\u002Fprojects\u002Fvariables","[","]",2,"h2","true",-1,"icon","icon-link","src\u002Fmain.rs","fn","function-definition","main","{","}","\n\n","2","\nThe value of x is: ","\n\n    "," spaces ","first-steps","First Steps","variables-vs-constants","Variables vs Constants","shadowing","Shadowing","\n    x ","\nerror","\u003E","3","more"," information about this error, try ","\nerror: could not compile ","variables","\n\nTo learn more, run the ","command","\n    Finished dev ","unoptimized + debuginfo"," target","s","in","0","target\u002Fdebug\u002Fvariables","const","MAX"," or ","1","12","\"   \""," spaces","len","2020-12-12T09:00:30.088Z")));