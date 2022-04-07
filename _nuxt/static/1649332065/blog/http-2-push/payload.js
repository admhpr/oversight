__NUXT_JSONP__("/blog/http-2-push", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{post:{slug:"http-2-push",title:"HTTP 2 and you!",date:"2022-04-06T08:23",desc:"scribbles on http 2 push 🙌",tags:["recipes","real-time"],toc:[],body:{type:"root",children:[{type:b,tag:f,props:{id:"http-overview"},children:[{type:b,tag:e,props:{href:"#http-overview",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"HTTP Overview"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"HTTP in a normal request, the client makes a call to an endpoint and it waits for a single response."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's a one-to-one exchange, you request a thing and het back a thing."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The premise behind HTTP\u002F2 (or H2 as it is sometimes referred to) is that the initial request is not closed after getting back the thing that was requested."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(a long running request)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"HTTP 1.1 which is common across many websites, using the thing for thing model has been around since 1996."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It is still completely valid and a legitimite option, and for most sites it will get the job done."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSPDY",rel:[m,n,o],target:p},children:[{type:a,value:"SPDY"}]},{type:a,value:", a protocol (now obsolete) developed by Google, made HTTP faster in many ways."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Slowly the major browsers began to ship SPDY until it became the natural succcesor to HTTP 1.1 after nearly 20 years (2015)."}]},{type:a,value:c},{type:b,tag:f,props:{id:"http2-overview"},children:[{type:b,tag:e,props:{href:"#http2-overview",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"HTTP\u002F2 Overview"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"HTTP\u002F2 was ratified as an offical standard of HTTP. It added many new features including:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Multiplex requests,  meaning you can send many individual messages over a single connection.\nWith 1.1 we had to do a whole new connection with headers, handshakes, security, etc. for every single request.\nWith 2, you can reuse the same connection for multiple things. (Think about the performance win here for big streaming sites like Netflix)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Better compression strategies. Finer grain access to the underlying data frames."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Request prioritisation. You can now request images last and css first."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Long running requests, In practice, are primarily used to bundle up and send parts of a webpage in chunks. It means on a document that takes a\nlong time to render, you can send the "},{type:b,tag:"code",props:{},children:[{type:a,value:"\u003Chead\u003E"}]},{type:a,value:" element to begin fetching css, fonts and other files, while contining to render the body\nsending it when it is ready. Assuming the head is relatively immutable and the body is the part that is dynamic. It's a very powerful pattern and worth\nlooking into if there any sort of lag in the rendering of the main content."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We can take that one step further and use that mechanism to deliver little small chunks of JSON."}]},{type:a,value:c},{type:b,tag:f,props:{id:"http3"},children:[{type:b,tag:e,props:{href:"#http3",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"HTTP\u002F3"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A note on HTTP\u002F3 (aka QUIC) It messes less with the semantics of HTTP like 2 did and more with the transport of it."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Whereas 1.1 and 2 used TCP to send data which has the fundamental problem that if you drop data, you have to wait for the packet to be sent again,\nmaking those stalls painful. QUIC is based upon UDP which has a better recovery strategy and can accept packets out of order"}]},{type:a,value:c},{type:b,tag:f,props:{id:"check-the-demo-below"},children:[{type:b,tag:e,props:{href:"#check-the-demo-below",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Check the demo below"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fadmhpr\u002Fhttp-2-push",rel:[m,n,o],target:p},children:[{type:a,value:"Demo"}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fhttp-2-push",extension:".md",createdAt:q,updatedAt:q}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","h4","true",-1,"span","icon","icon-link","li","nofollow","noopener","noreferrer","_blank","2022-04-07T11:46:03.959Z")));