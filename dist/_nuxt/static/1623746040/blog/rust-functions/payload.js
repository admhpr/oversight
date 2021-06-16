__NUXT_JSONP__("/blog/rust-functions", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{post:{slug:"rust-functions",title:"functions in rust",date:"2020-12-19T07:02",desc:"A look at basic building blocks of rust",tags:["rust"],toc:[{id:am,depth:ab,text:an},{id:ao,depth:ab,text:ap},{id:aq,depth:ab,text:ar}],body:{type:"root",children:[{type:b,tag:m,props:{},children:[{type:a,value:"Functions are everywhere in Rust code. The most important function in the language is a function called "},{type:b,tag:h,props:{},children:[{type:a,value:y}]},{type:a,value:", which is the entry to many programs. Another key word to take note of is the "},{type:b,tag:h,props:{},children:[{type:a,value:v}]},{type:a,value:" keyword, which is a way to declare new functions."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Rust uses "},{type:b,tag:W,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSnake_case",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"snake case"}]},{type:a,value:" as the convention in function and variable names. Quick example of a couple of functions including "},{type:b,tag:h,props:{},children:[{type:a,value:y}]},{type:a,value:U}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\"Hello, world!\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"\"Another function.\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Function definitions in Rust start with fn and have a set of parentheses after the function name. The curly brackets tell the compiler where the function body begins and ends."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"We can call any function we’ve defined by entering its name followed by a set of parentheses. Because "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" is defined in the program, it can be called from inside the "},{type:b,tag:h,props:{},children:[{type:a,value:y}]},{type:a,value:" function. Note that we defined "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" after the "},{type:b,tag:h,props:{},children:[{type:a,value:y}]},{type:a,value:" function in the source code; we could have defined it before as well. Rust doesn’t care where you define your functions, only that they’re defined somewhere."}]},{type:a,value:f},{type:b,tag:ac,props:{id:am},children:[{type:b,tag:W,props:{href:"#function-parameters",ariaHidden:ad,tabIndex:ae},children:[{type:b,tag:c,props:{className:[af,ag]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Some function will have parameters as part of the functions signature. When concrete values are passed (technically called arguments) those values are used within the function."}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The declaration of "},{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" has one parameter named "},{type:b,tag:h,props:{},children:[{type:a,value:P}]},{type:a,value:". The type of "},{type:b,tag:h,props:{},children:[{type:a,value:P}]},{type:a,value:" is specified as "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:". When 5 is passed to another_function, the "},{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:" macro puts 5 where the pair of curly brackets were in the format string."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"In function signatures the type of argument a function should expect is required. This is a deliberate decision in Rust’s design: requiring type annotations in function definitions means the compiler almost never needs you to use them elsewhere in the code to figure out what you mean."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"When you want a function to have multiple parameters, separate the parameter declarations with commas, like so:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:ac,props:{id:ao},children:[{type:b,tag:W,props:{href:"#function-bodies",ariaHidden:ad,tabIndex:ae},children:[{type:b,tag:c,props:{className:[af,ag]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Function bodies are made up of a series of statements optionally ending in an expression. So far, we’ve only covered functions without an ending expression, but you have seen an expression as part of a statement. Because Rust is an expression-based language, this is an important distinction to understand. Other languages don’t have the same distinctions, so let’s look at what statements and expressions are and how their differences affect the bodies of functions."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:at,props:{},children:[{type:a,value:"Statements"}]},{type:a,value:" are instructions that perform some action and do not return a value. "},{type:b,tag:at,props:{},children:[{type:a,value:"Expressions"}]},{type:a,value:" evaluate to a resulting value."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Creating a variable and assigning a value to it with the "},{type:b,tag:h,props:{},children:[{type:a,value:w}]},{type:a,value:" keyword is a statement. "},{type:b,tag:h,props:{},children:[{type:a,value:au}]},{type:a,value:" is a statement."}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Function definitions are also statements; the entire preceding example is a statement in itself."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Statements do not return values. Therefore, you can’t assign a let statement to another variable, as the following code tries to do; you’ll get an error:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"When you run this program, the error you’ll get looks like this:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,av]},children:[{type:b,tag:h,props:{},children:[{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\nerror: expected expression, found statement "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n --"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:" src\u002Fmain.rs:2:14\n  "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"2"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"     "},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"let y "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"              ^^^\n  "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:" note: variable declaration using "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:a,value:" is a statement\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ay},{type:b,tag:h,props:{},children:[{type:a,value:"let y = 6"}]},{type:a,value:" statement does not return a value, so there isn’t anything for "},{type:b,tag:h,props:{},children:[{type:a,value:P}]},{type:a,value:" to bind to. This is different from what happens in other languages, such as C and Ruby, where the assignment returns the value of the assignment. In those languages, you can write "},{type:b,tag:h,props:{},children:[{type:a,value:"x = y = 6"}]},{type:a,value:" and have both "},{type:b,tag:h,props:{},children:[{type:a,value:P}]},{type:a,value:" and "},{type:b,tag:h,props:{},children:[{type:a,value:"y"}]},{type:a,value:" have the value 6; that is not the case in Rust."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Expressions evaluate to something and make up most of the rest of the code that you’ll write in Rust. Consider a simple math operation, such as "},{type:b,tag:h,props:{},children:[{type:a,value:"5 + 6"}]},{type:a,value:", which is an expression that evaluates to the value "},{type:b,tag:h,props:{},children:[{type:a,value:"11"}]},{type:a,value:". Expressions can be part of statements: below, the 6 in the statement "},{type:b,tag:h,props:{},children:[{type:a,value:au}]},{type:a,value:" is an expression that evaluates to the value 6. Calling a function is an expression. Calling a macro is an expression. The block that we use to create new scopes, "},{type:b,tag:h,props:{},children:[{type:a,value:"{}"}]},{type:a,value:", is an expression, for example:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n        x "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:_}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"take note of this block:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"In this case, evaluates to "},{type:b,tag:h,props:{},children:[{type:a,value:"4"}]},{type:a,value:". That value gets bound to y as part of the let statement. Note the "},{type:b,tag:h,props:{},children:[{type:a,value:aB}]},{type:a,value:" line without a semicolon at the end, which is unlike most of the lines you’ve seen so far. Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, which will then not return a value."}]},{type:a,value:f},{type:b,tag:ac,props:{id:aq},children:[{type:b,tag:W,props:{href:"#functions-with-return-values",ariaHidden:ad,tabIndex:ae},children:[{type:b,tag:c,props:{className:[af,ag]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Functions can return values to the code that calls them. Return types are not named, but their values are declared using the an arrow "},{type:b,tag:h,props:{},children:[{type:a,value:al}]},{type:a,value:". In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function. You can return from a function early by using the "},{type:b,tag:h,props:{},children:[{type:a,value:aC}]},{type:a,value:" keyword and specifying a value. Most functions however return the last expression implicitly. For example:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"There are no function calls, macros, or even "},{type:b,tag:h,props:{},children:[{type:a,value:w}]},{type:a,value:" statements in the "},{type:b,tag:h,props:{},children:[{type:a,value:$}]},{type:a,value:" function—just the number "},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" by itself. Which is a perfectly valid function in Rust. Note that the functions return type is specified as "},{type:b,tag:h,props:{},children:[{type:a,value:"-\u003E i32"}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ay},{type:b,tag:h,props:{},children:[{type:a,value:O}]},{type:a,value:" in "},{type:b,tag:h,props:{},children:[{type:a,value:$}]},{type:a,value:" is the function’s return value, which is why the return type is "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Another example:"}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,F]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:w}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,p]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Running this code will print "},{type:b,tag:h,props:{},children:[{type:a,value:"The value of x is: 6"}]},{type:a,value:". But if we place a semicolon at the end of the line containing "},{type:b,tag:h,props:{},children:[{type:a,value:aB}]},{type:a,value:", changing it from an expression to a statement, we’ll get an error."}]},{type:a,value:f},{type:b,tag:B,props:{className:[C]},children:[{type:b,tag:D,props:{className:[E,av]},children:[{type:b,tag:h,props:{},children:[{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\nerror"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:"E0308"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:": mismatched types\n --"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:" src\u002Fmain.rs:7:24\n  "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"7"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:" fn plus_one"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"x: i32"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" -"},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:" i32 "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"    --------            ^^^ expected "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:a,value:", found "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"    "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"    implicitly returns "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:a,value:" as its body has no "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"tail"}]},{type:a,value:" or "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:a,value:" expression\n"},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"8"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"     x + "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:A}]},{type:a,value:"          - help: consider removing this semicolon\n\nerror: aborting due to previous error\n\nFor "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"more"}]},{type:a,value:" information about this error, try "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:"rustc --explain E0308"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:aa}]},{type:a,value:"\nerror: could not compile "},{type:b,tag:c,props:{className:[d,n]},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:"functions"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:aa}]},{type:a,value:"\n\nTo learn more, run the "},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:"command"}]},{type:a,value:" again with --verbose.\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The main error message, “mismatched types,” reveals the core issue with this code. The definition of the function plus_one says that it will return an i32, but statements don’t evaluate to a value, which is expressed by (), an empty tuple. Therefore, nothing is returned, which contradicts the function definition and results in an error. In this output, Rust provides a message to possibly help rectify this issue: it suggests removing the semicolon, which would fix the error."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Frust-functions",extension:".md",createdAt:"2020-12-20T10:34:27.860Z",updatedAt:"2021-01-01T12:19:24.650Z"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","code","(",")","operator","keyword","p","variable",";","function","number","{","`","\n    ","}","fn","let","function-definition","main","=","|","div","nuxt-content-highlight","pre","line-numbers","language-rust","println!","another_function","i32","macro","property","string","\n\n",",","5","x"," x ","builtin","class-name","\n  ",":","\n\n    ","a","\"The value of x is: {}\""," x","6","1","five",".",3,"h3","true",-1,"icon","icon-link"," y"," y ","\u003E","+","-\u003E","function-parameters","Function Parameters","function-bodies","Function Bodies","functions-with-return-values","Functions with Return Values","\"The value of y is: {}\"","strong","let y = 6;","language-bash","$ cargo run\n   Compiling functions v0.1.0 ","file:\u002F\u002F\u002Fprojects\u002Ffunctions","The ","3","\n    x ","x + 1","return","plus_one")));