__NUXT_JSONP__("/blog/rust-control-flow", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW){return {data:[{post:{slug:"rust-control-flow",title:"control flow in rust",date:"2020-12-27T06:11",desc:"A look at basic building blocks of rust",tags:["rust"],toc:[{id:an,depth:U,text:ao},{id:ap,depth:U,text:aq},{id:ar,depth:U,text:as},{id:at,depth:U,text:au},{id:av,depth:U,text:aw},{id:ax,depth:U,text:ay},{id:az,depth:U,text:aA}],body:{type:"root",children:[{type:b,tag:o,props:{},children:[{type:a,value:"Deciding what piece of code to run based on a whether a condition is met or not is the essence of control flow in code. The most common of which in most languages (including Rust) are "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" expressions and "},{type:b,tag:h,props:{},children:[{type:a,value:"loops"}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:V,props:{id:an},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#if-expressions",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:ao}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"An "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" expression allows you to branch your code depending on conditions. You provide a condition and then state, “If this condition is met, run this block of code. If the condition is not met, do not run this block of code.”"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"src\u002Fmain.rs"}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"condition was true\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"condition was false\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"The above snippet is pretty self explanatory, if the number is less than "},{type:b,tag:h,props:{},children:[{type:a,value:ac}]},{type:a,value:" it prints \"condition was true\" and if the number is greater than 5 it \"condition was false\"."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Optionally, we can also include an "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" expression, which we chose to do here, to give the program an alternative block of code to execute should the condition evaluate to false. If you don’t provide an else expression and the condition is false, the program will just skip the if block and move on to the next bit of code."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Note that the expression being checked in the "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" expression must be of type "},{type:b,tag:h,props:{},children:[{type:a,value:"bool"}]},{type:a,value:". Rust will not automatically try to convert non-Boolean types to a Boolean."}]},{type:a,value:g},{type:b,tag:V,props:{id:ap},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#handling-multiple-conditions-with-else-if",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:aq}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"You can have multiple conditions by combining "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" in an "},{type:b,tag:h,props:{},children:[{type:a,value:"else if"}]},{type:a,value:" expression. For example:"}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"number is divisible by 4\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"number is divisible by 3\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ae}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"number is divisible by 2\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"number is not divisible by 4, 3, or 2\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:V,props:{id:ar},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#using-if-in-a-let-statement",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:as}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Because if is an expression, we can use it on the right side of a "},{type:b,tag:h,props:{},children:[{type:a,value:F}]},{type:a,value:" statement."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"The value of number is: {}\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"The value options provided in the "},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:" expression must be of the same type, or the compiler will throw an error. Rust needs to know at compile time what type the number variable is and cannot do that if the value of "},{type:b,tag:h,props:{},children:[{type:a,value:j}]},{type:a,value:" is determined at runtime."}]},{type:a,value:g},{type:b,tag:V,props:{id:at},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#repetition-with-loops",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:au}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"It’s often useful to execute a block of code more than once. For this task, Rust provides several loops. A loop runs through the code inside the loop body to the end and then starts immediately back at the beginning."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Rust has three kinds of loops: "},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:aa}]},{type:a,value:ai},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:"h4",props:{id:"repeating-code-with-loop"},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#repeating-code-with-loop",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:"Repeating Code with loop"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"The "},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:" keyword tells Rust to execute a block of code over and over again forever or until you explicitly tell it to stop."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"again!\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"When we run this program, we’ll see "},{type:b,tag:h,props:{},children:[{type:a,value:"again!"}]},{type:a,value:" printed over and over continuously until we stop the program manually (using "},{type:b,tag:h,props:{},children:[{type:a,value:"ctrl-c"}]},{type:a,value:" to interrupt at the terminal)."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Fortunately, Rust provides another, more reliable way to break out of a loop. You can place the "},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:" keyword within the loop to tell the program when to stop executing the loop."}]},{type:a,value:g},{type:b,tag:V,props:{id:av},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#returning-values-from-loops",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:aw}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:aF},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:", stopping the loop."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:" result "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n        counter "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:x}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"*"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"The result is {}\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" result"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Before the loop, we declare a variable named counter and initialize it to "},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:". Then we declare a variable named "},{type:b,tag:h,props:{},children:[{type:a,value:aH}]},{type:a,value:" to hold the value returned from the loop. On every iteration of the loop, we add "},{type:b,tag:h,props:{},children:[{type:a,value:W}]},{type:a,value:" to the counter variable, and then check whether the counter is equal to "},{type:b,tag:h,props:{},children:[{type:a,value:af}]},{type:a,value:". When it is, we use the break keyword with the value "},{type:b,tag:h,props:{},children:[{type:a,value:"counter * 2"}]},{type:a,value:". After the loop, we use a semicolon to end the statement that assigns the value to result. Finally, we print the value in "},{type:b,tag:h,props:{},children:[{type:a,value:aH}]},{type:a,value:", which in this case is 20."}]},{type:a,value:g},{type:b,tag:V,props:{id:ax},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#conditional-loops-with-while",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:ay}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:aF},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:", stopping the loop. This loop type could be implemented using a combination of "},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:ai},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"However, this pattern is so common that Rust has a built-in language construct for it, called a "},{type:b,tag:h,props:{},children:[{type:a,value:aa}]},{type:a,value:" loop."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"!="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n        number "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"-="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,aK]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"This construct eliminates a lot of nesting that would be necessary if you used "},{type:b,tag:h,props:{},children:[{type:a,value:X}]},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:x}]},{type:a,value:$},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:ai},{type:b,tag:h,props:{},children:[{type:a,value:Y}]},{type:a,value:", and it’s clearer. While a condition holds true, the code runs; otherwise, it exits the loop."}]},{type:a,value:g},{type:b,tag:V,props:{id:az},children:[{type:b,tag:P,props:{ariaHidden:I,href:"#looping-through-a-collection-with-for",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]},{type:a,value:aA}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"You could use the "},{type:b,tag:h,props:{},children:[{type:a,value:aa}]},{type:a,value:" construct to loop over the elements of a collection, such as an array."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aj}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:"index"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n        index "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n\n"}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Here, the code counts up through the elements in the array. It starts at index "},{type:b,tag:h,props:{},children:[{type:a,value:T}]},{type:a,value:", and then loops until it reaches the final index in the array (that is, when "},{type:b,tag:h,props:{},children:[{type:a,value:"index \u003C 5"}]},{type:a,value:" is no longer true)."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"This approach is error prone; we could cause the program to panic if the index length is incorrect. It’s also slow, because the compiler adds runtime code to perform the conditional check on every element on every iteration through the loop."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"As a more concise alternative, you can use a "},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:" loop and execute some code for each item in a collection."}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:" element "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aU}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"iter"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" element"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"The safety and conciseness of for loops make them the most commonly used loop construct in Rust. Even in situations in which you want to run some code a certain number of times, as in the countdown example that used a while loop."}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"Here’s what the countdown would look like using a "},{type:b,tag:h,props:{},children:[{type:a,value:ab}]},{type:a,value:" loop and "},{type:b,tag:h,props:{},children:[{type:a,value:aV}]},{type:a,value:", to reverse the range:"}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,L,E]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aU}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:".."}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,aK]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Frust-control-flow",extension:".md",createdAt:aW,updatedAt:aW}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","\n","code","keyword","number","operator",";","(",")","p","{","\n    ","}","macro","property","println!","string",",","if","\n        ","!","div","nuxt-content-highlight","pre","line-numbers","function","let"," number ","=","true","language-rust","fn","function-definition","main","\n\n    ","else","a",-1,"icon","icon-link","0",3,"h3","1","loop","break",".","3",", ","while","for","5","==","2","10","%"," number",", and ","mut"," counter ","[","]","if-expressions","if Expressions","handling-multiple-conditions-with-else-if","Handling Multiple Conditions with else if","using-if-in-a-let-statement","Using if in a let Statement","repetition-with-loops","Repetition with Loops","returning-values-from-loops","Returning Values from Loops","conditional-loops-with-while","Conditional Loops with while","looping-through-a-collection-with-for","Looping Through a Collection with for","\u003C","6","4"," condition ","It’s often useful for a program to evaluate a condition within a loop. While the condition is true, the loop runs. When the condition ceases to be true, the program calls ","+=","result","\"{}!\"","\"LIFT OFF!!!\"","language-bash","\nLIFT OFF"," a ","20","30","40","50"," index ","\"the value is: {}\""," a","in","rev","2022-01-11T15:47:41.823Z")));