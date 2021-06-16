__NUXT_JSONP__("/archive/reactivity-in-javascript", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:[{post:{slug:"reactivity-in-javascript",title:"Reactivity In JavaScript",date:"2018-05-23T18:17",desc:y,twittercardoptions:"summary",articleenabled:m,musiceventenabled:m,orgaenabled:m,orga:{ratingValue:2.5},orgaratingenabled:m,eventenabled:m,personenabled:m,restaurantenabled:m,restaurant:{acceptsReservations:"yes",priceRange:"$"},toc:[],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"reactivity-in-js"},children:[{type:b,tag:g,props:{href:"#reactivity-in-js",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:e,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:"Reactivity in JS"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"context: I have been using "},{type:b,tag:g,props:{href:"https:\u002F\u002Fvuejs.org\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"Vue.js"}]},{type:a,value:"for a number of side projects and really enjoy working with it, I also use "},{type:b,tag:g,props:{href:"http:\u002F\u002Fknockoutjs.com\u002F",rel:[i,j,k],target:l},children:[{type:a,value:"Knockout.js"}]},{type:a,value:"a lot in work which uses a similar approach. I wanted to dive into the abstracted functionality a little deeper to help me understand the libraries I work with."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's start with a variable:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"let a = 10"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and another one:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"let b = a * 10"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"the complete picture now looks like this:"}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[f,E]},children:[{type:a,value:F}]},{type:a,value:t},{type:b,tag:e,props:{className:[f,o]},children:[{type:a,value:u}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,v]},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,E]},children:[{type:a,value:F}]},{type:a,value:" b "},{type:b,tag:e,props:{className:[f,o]},children:[{type:a,value:u}]},{type:a,value:t},{type:b,tag:e,props:{className:[f,o]},children:[{type:a,value:G}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,v]},children:[{type:a,value:w}]},{type:a,value:H}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We want "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" to always be 10 times of a. We now have a problem, when "},{type:b,tag:h,props:{},children:[{type:a,value:g}]},{type:a,value:" changes "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" will not be aware of that change and not update, no matter what "},{type:b,tag:h,props:{},children:[{type:a,value:g}]},{type:a,value:" is,"},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" will always be the original value of "},{type:b,tag:h,props:{},children:[{type:a,value:g}]},{type:a,value:" times 10."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a imperative and procedural implementation which does not solve the problem fully, what we need is an approach that is declarative and object oriented."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In an ideal world we would have a function that looked like this:"}]},{type:a,value:c},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,D]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{className:[f,"function"]},children:[{type:a,value:I}]},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:J}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:J}]},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:K}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,"arrow",o]},children:[{type:a,value:"=\u003E"}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:"{"}]},{type:a,value:"\n   b "},{type:b,tag:e,props:{className:[f,o]},children:[{type:a,value:u}]},{type:a,value:t},{type:b,tag:e,props:{className:[f,o]},children:[{type:a,value:G}]},{type:a,value:p},{type:b,tag:e,props:{className:[f,v]},children:[{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:"}"}]},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:K}]},{type:a,value:H}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This function would run every time "},{type:b,tag:h,props:{},children:[{type:a,value:g}]},{type:a,value:" changes to update the value of "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:". So how do we implement this function? We can see that it takes a function that is then ran to set the new state."}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"jargon buster: a program is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fpostimg.cc\u002Fimage\u002Fvrn6dupf1\u002F",rel:[i,j,k],target:l},children:[{type:b,tag:n,props:{alt:"react.png",src:"https:\u002F\u002Fs14.postimg.cc\u002Fb7icfd9o1\u002Freact.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is an approach that React uses and why setState is always used to well.. set the state."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There is another way that involves taking the state object and converting it into a reactive object."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Our "},{type:b,tag:h,props:{},children:[{type:a,value:I}]},{type:a,value:" function will be renamed "},{type:b,tag:h,props:{},children:[{type:a,value:"autorun"}]},{type:a,value:" why will become clearer as we move through the examples."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's implement a mini data observer and look at how Vue.js handles things."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"first we need to define accessors using the "},{type:b,tag:g,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fen-US\u002Fdocs\u002FWeb\u002FJavaScript\u002FReference\u002FGlobal_Objects\u002FObject\u002FdefineProperty",rel:[i,j,k],target:l},children:[{type:a,value:"Object.defineProperty() API"}]},{type:a,value:". This will allow us later to get and set the current state."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{alt:"convert.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmXYQesGUkgJ2EVcGWdH1tKFo7wGAtw8v9hACRbC5Sb9TM\u002Fconvert.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fjsfiddle.net\u002Fharps116\u002Fwc2e0vgv\u002F16\u002F",rel:[i,j,k],target:l},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That seems to be working as expected, we have a few more parts to create. Later we will change the name to observe rather than convert."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We are going to create a dependency class that keeps track of the things our state depends on, it will also notify those that depend on it that it has changed."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{alt:"dep.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmVjNcmz6vjhJhSbjhbisgdHeWKntN1ezUQtnQuzB4Z5xm\u002Fdep.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{alt:"dep-2.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmWb7LoH3tqzyzYRB9reE4N946rgsYYBYRvR64RMghMCfj\u002Fdep-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fjsfiddle.net\u002Fharps116\u002F7wf1vc2j\u002F16\u002F",rel:[i,j,k],target:l},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This of course is not the complete picture and a simplified version of the general idea. Notice the wrappedUpdate. This is a little trick to ensure that the correct function is added to the subscribers list. As it is assigned to the activeUpdate which our dependency instance checks for in its depend method, we can ensure that what we add to the subscribers list is currently active."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Putting it all together:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:n,props:{alt:"3.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmU9uNzVuRC6xFwjikr3sD2XLyU4bJLPu3UjJvWwjLCJND\u002F3.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{alt:"3.2.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmccyMkujPF8CqmGqunJY43H6hbYwH9vUuxaaAy91GkzfX\u002F3.2.png"},children:[]},{type:a,value:c},{type:b,tag:n,props:{alt:"3.3.png",src:"https:\u002F\u002Fsteemitimages.com\u002FDQmNyz6mtQmaYaFkGsHLtqCzQfHviMtX8sbFNdEAxhZw4Pp\u002F3.3.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fjsfiddle.net\u002Fharps116\u002FgL46sfxs\u002F4\u002F",rel:[i,j,k],target:l},children:[{type:a,value:x}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Read through the code and play around with the state. You see it log out the changes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can read more about reactivity in Vue "},{type:b,tag:g,props:{href:"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fguide\u002Freactivity.html",rel:[i,j,k],target:l},children:[{type:a,value:L}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This idea may change a little in up coming version of Vue. You can read more about it "},{type:b,tag:g,props:{href:"https:\u002F\u002Fblog.cloudboost.io\u002Freactivity-in-vue-js-2-vs-vue-js-3-dcdd0728dcdf",rel:[i,j,k],target:l},children:[{type:a,value:L}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Happy Coding!"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Freactivity-in-javascript",extension:".md",createdAt:N,updatedAt:N}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","token","a","code","nofollow","noopener","noreferrer","_blank",false,"content-img","operator"," ","punctuation","b","blockquote"," a ","=","number","10","View the code","How do changes in state translate to changes in the DOM?","div","nuxt-content-highlight","pre","language-javascript","line-numbers","keyword","let","*","\n\n","onStateChanged","(",")","here",".","2020-12-20T10:34:27.860Z")));