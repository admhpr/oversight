__NUXT_JSONP__("/blog/rust-ownership", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{post:{slug:"rust-ownership",title:"ownership in rust",date:"2021-01-03T08:11",desc:"A look at basic building blocks of rust",tags:["rust"],toc:[{id:Q,depth:C,text:R},{id:S,depth:C,text:T},{id:U,depth:C,text:V},{id:W,depth:C,text:X}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"Rust’s central feature is ownership. Although the feature is straightforward to explain, it has deep implications for the rest of the language."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"All programs have to manage the way they use a computer’s memory while running. Some languages have garbage collection that constantly looks for no longer used memory as the program runs; in other languages, the programmer must explicitly allocate and free the memory. Rust uses a third approach: memory is managed through a system of ownership with a set of rules that the compiler checks at compile time. None of the ownership features slow down your program while it’s running."}]},{type:a,value:e},{type:b,tag:D,props:{id:Q},children:[{type:b,tag:o,props:{href:"#the-stack-and-the-heap",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In many programming languages, you don’t have to think about the stack and the heap very often. But in a systems programming language like Rust, whether a value is on the stack or the heap has more of an effect on how the language behaves and why you have to make certain decisions."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Both the stack and the heap are parts of memory that are available to your code to use at runtime, but they are structured in different ways. The stack stores values in the order it gets them and removes the values in the opposite order. This is referred to as "},{type:b,tag:K,props:{},children:[{type:a,value:"last in"}]},{type:a,value:", "},{type:b,tag:K,props:{},children:[{type:a,value:"first out"}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"All data stored on the stack must have a known, fixed size. Data with an unknown size at compile time or a size that might change must be stored on the heap instead. The heap is less organized: when you put data on the heap, you request a certain amount of space. The memory allocator finds an empty spot in the heap that is big enough, marks it as being in use, and returns a pointer, which is the address of that location."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Keeping track of what parts of code are using what data on the heap, minimizing the amount of duplicate data on the heap, and cleaning up unused data on the heap so you don’t run out of space are all problems that ownership addresses."}]},{type:a,value:e},{type:b,tag:D,props:{id:S},children:[{type:b,tag:o,props:{href:"#ownership-rules",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Here are the three rules of ownership in Rust:"}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"Each value in Rust has a variable that's called its owner."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"There can only be one owner at a time."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"When the owner goes out of scope, the value will be dropped."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:D,props:{id:U},children:[{type:b,tag:o,props:{href:"#variable-scope",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:V}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"As a first example of ownership, we’ll look at the scope of some variables. A scope is the range within a program for which an item is valid. Let’s say we have a variable that looks like this:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The variable "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" refers to a string literal, where the value of the string is hardcoded into the text of our program. The variable is valid from the point at which it’s declared until the end of the current scope."}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:h,props:{},children:[{type:a,value:Y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Z}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F s is not valid here, it’s not yet declared"}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"   "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ae}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F this scope is now over, and s is no longer valid"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In other words, there are two important points in time here:"}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"When "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" come into scope and is therefore valid."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"It remains valid until it goes out of scope."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"At this point, the relationship between scopes and when variables are valid is similar to that in other programming languages. Now we’ll build on top of this understanding by introducing the "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:" type."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The types covered "},{type:b,tag:o,props:{href:"..\u002Frust-data-types.md"},children:[{type:a,value:"previously"}]},{type:a,value:" are all stored on the stack and popped off the stack when their scope is over, but we want to look at data that is stored on the heap and explore how Rust knows when to clean up that data."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"String literals are immutable which may not be suitable for every situation. Also, not every string value can be known at author time (think user input). For these scenarios Rust has a second string type, "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:". This type is allocated on the heap and as such is able to store an amount of text that is unknown to us at compile time. You can create a "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:" from a string literal using the "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" function, like so:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"This kind of string can be mutated:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:v}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"mut"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"\ns"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"push_str"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\", world!\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F push_str() appends a literal to a String"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"macro","property"]},children:[{type:a,value:"println!"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"{}\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:" s"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F This will print `hello, world!`"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"So, what’s the difference here? Why can "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:" be mutated but literals cannot? The difference is how these two types deal with memory."}]},{type:a,value:e},{type:b,tag:D,props:{id:W},children:[{type:b,tag:o,props:{href:"#memory-and-allocation",ariaHidden:E,tabIndex:F},children:[{type:b,tag:c,props:{className:[G,H]},children:[]}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In the case of a string literal, we know the contents at compile time, so the text is hardcoded directly into the final executable. This is why string literals are fast and efficient. But these properties only come from the string literal’s immutability. Unfortunately, we can’t put a blob of memory into the binary for each piece of text whose size is unknown at compile time and whose size might change while running the program."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"With the "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:" type, in order to support a mutable, growable piece of text, we need to allocate an amount of memory on the heap, unknown at compile time, to hold the contents. This means:"}]},{type:a,value:e},{type:b,tag:M,props:{},children:[{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"The memory must be requested from the memory allocator at runtime."}]},{type:a,value:e},{type:b,tag:l,props:{},children:[{type:a,value:"We need a way of returning this memory to the allocator when we’re done with our String."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"That first part is done by us: when we call "},{type:b,tag:h,props:{},children:[{type:a,value:"String::from"}]},{type:a,value:", its implementation requests the memory it needs. This is pretty much universal in programming languages."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"However, the second part is different. In languages with a "},{type:b,tag:K,props:{},children:[{type:a,value:"garbage collector"}]},{type:a,value:" (GC), the GC keeps track and cleans up memory that isn’t being used anymore, and we don’t need to think about it."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Without a GC, it’s our responsibility to identify when memory is no longer being used and call code to explicitly return it,just as we did to request it. Doing this correctly has historically been a difficult programming problem. If we forget,we’ll waste memory. If we do it too early, we’ll have an invalid variable. If we do it twice, that’s a bug too. We need to pair exactly one "},{type:b,tag:h,props:{},children:[{type:a,value:"allocate"}]},{type:a,value:" with exactly one "},{type:b,tag:h,props:{},children:[{type:a,value:"free"}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Rust takes a different path: the memory is automatically returned once the variable that owns it goes out of scope."}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:h,props:{},children:[{type:a,value:Y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Z}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ae}]},{type:a,value:"                                  "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F this scope is now over, and s is no"}]},{type:a,value:"\n                                       "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F longer valid"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"There is a natural point at which we can return the memory our String needs to the allocator: when "},{type:b,tag:h,props:{},children:[{type:a,value:N}]},{type:a,value:" goes out of scope.\nRust calls a special function called "},{type:b,tag:h,props:{},children:[{type:a,value:"drop"}]},{type:a,value:" when a variable goes out of scope. This style similar to "},{type:b,tag:o,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FResource_acquisition_is_initialization",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Resource Acquisition Is Initialization"}]},{type:a,value:" in C++,has a huge impact on the way Rust code is authored."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Frust-ownership",extension:".md",createdAt:af,updatedAt:af}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","p","code","comment"," ","String","li","string",";","a","keyword","div","nuxt-content-highlight","pre","language-rust","line-numbers","let"," s ","operator","=","\"hello\"","(",")",3,"h3","true",-1,"icon","icon-link","from","function","strong",".","ul","s","class-name","::","the-stack-and-the-heap","The Stack and the Heap","ownership-rules","Ownership Rules","variable-scope","Variable Scope","memory-and-allocation","Memory and Allocation","    ","{","                      ","\n        ","\u002F\u002F s is valid from this point forward","\n\n        ","\u002F\u002F do stuff with s","\n    ","}","2021-01-03T11:05:43.253Z")));