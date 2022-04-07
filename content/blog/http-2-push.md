---
title: HTTP 2 and you!
date: 2022-04-06T08:23
desc: scribbles on http 2 push 🙌
tags:
  - recipes
  - real-time
---

#### HTTP Overview

HTTP in a normal request, the client makes a call to an endpoint and it waits for a single response. 

It's a one-to-one exchange, you request a thing and het back a thing.

The premise behind HTTP/2 (or H2 as it is sometimes referred to) is that the initial request is not closed after getting back the thing that was requested.

(a long running request)

HTTP 1.1 which is common across many websites, using the thing for thing model has been around since 1996. 

It is still completely valid and a legitimite option, and for most sites it will get the job done.

[SPDY](https://en.wikipedia.org/wiki/SPDY), a protocol (now obsolete) developed by Google, made HTTP faster in many ways. 

Slowly the major browsers began to ship SPDY until it became the natural succcesor to HTTP 1.1 after nearly 20 years (2015).

#### HTTP/2 Overview

HTTP/2 was ratified as an offical standard of HTTP. It added many new features including:

* Multiplex requests,  meaning you can send many individual messages over a single connection. 
  With 1.1 we had to do a whole new connection with headers, handshakes, security, etc. for every single request. 
  With 2, you can reuse the same connection for multiple things. (Think about the performance win here for big streaming sites like Netflix)

* Better compression strategies. Finer grain access to the underlying data frames. 

* Request prioritisation. You can now request images last and css first.

Long running requests, In practice, are primarily used to bundle up and send parts of a webpage in chunks. It means on a document that takes a 
long time to render, you can send the `<head>` element to begin fetching css, fonts and other files, while contining to render the body 
sending it when it is ready. Assuming the head is relatively immutable and the body is the part that is dynamic. It's a very powerful pattern and worth
looking into if there any sort of lag in the rendering of the main content.

We can take that one step further and use that mechanism to deliver little small chunks of JSON.

#### HTTP/3

> A note on HTTP/3 (aka QUIC) It messes less with the semantics of HTTP like 2 did and more with the transport of it. 
Whereas 1.1 and 2 used TCP to send data which has the fundamental problem that if you drop data, you have to wait for the packet to be sent again, 
making those stalls painful. QUIC is based upon UDP which has a better recovery strategy and can accept packets out of order

#### Check the demo below

[Demo](https://github.com/admhpr/http-2-push)
