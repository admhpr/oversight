__NUXT_JSONP__("/archive/chain-of-responsibility", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{post:{slug:"chain-of-responsibility",title:"The Chain of Responsibility",published:P,date:"2019-04-14T12:19",desc:aj,taxonomy:{category:["blog"],tag:["design patterns","behavioural"]},twitterenable:P,twittercardoptions:"summary",articleenabled:s,musiceventenabled:s,orgaenabled:s,orga:{ratingValue:ak},orgaratingenabled:s,eventenabled:s,personenabled:s,musicalbumenabled:s,productenabled:s,product:{ratingValue:ak},restaurantenabled:s,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:P,toc:[{id:al,depth:Q,text:am},{id:an,depth:Q,text:ao},{id:ap,depth:Q,text:aq}],body:{type:"root",children:[{type:b,tag:R,props:{id:al},children:[{type:b,tag:S,props:{ariaHidden:T,href:"#name-chain-of-responsibility",tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:am}]},{type:a,value:h},{type:b,tag:R,props:{id:an},children:[{type:b,tag:S,props:{ariaHidden:T,href:"#type-behavioural",tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:ao}]},{type:a,value:h},{type:b,tag:R,props:{id:ap},children:[{type:b,tag:S,props:{ariaHidden:T,href:"#use-when-you-want-to",tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:aq}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Build a chain of objects. A request enters from one end and keeps moving along the chain until it finds a suitable handler."}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"From Wikipedia:"}]},{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:aj}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Real World Example:"}]},{type:a,value:h},{type:b,tag:ar,props:{},children:[{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Say for example you had three methods of payment. You wanted a payment to be handled by the balance which had enough to cover the charge, if method "},{type:b,tag:B,props:{},children:[{type:a,value:"A"}]},{type:a,value:" did not have the funds method "},{type:b,tag:B,props:{},children:[{type:a,value:"B"}]},{type:a,value:" would try to handle the payment and so on until the payment is complete or cannot be hanldedby any of the accounts."}]},{type:a,value:h}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Typescript Code Example:"}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Here's what all accounts must be able to do:"}]},{type:a,value:h},{type:b,tag:X,props:{className:[Y]},children:[{type:b,tag:Z,props:{className:[_,$]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"abstract"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:" successor"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"account"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"successor "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:a,value:" account"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,L,v]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"Paid "}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:ae}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:" using "}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,L,v]},children:[{type:a,value:M}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:au}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,L,v]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"Cannot pay using "}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,A,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:", Proceeding..."}]},{type:b,tag:c,props:{className:[d,L,v]},children:[{type:a,value:M}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"throw"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"Error"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"'Not enough balance'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"amount"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,z]},children:[{type:a,value:"boolean"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"return"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"balance "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u003E="}]},{type:a,value:" amount"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Now let's setup the payment mentods:"}]},{type:a,value:h},{type:b,tag:X,props:{className:[Y]},children:[{type:b,tag:Z,props:{className:[_,$]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aD}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aE}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O}]}]}]},{type:a,value:h},{type:b,tag:t,props:{},children:[{type:a,value:"Tie them together and handle a payment:"}]},{type:a,value:h},{type:b,tag:X,props:{className:[Y]},children:[{type:b,tag:Z,props:{className:[_,$]},children:[{type:b,tag:B,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:" bank "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"100"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:" paypal "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"200"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:ah}]},{type:a,value:" bitcoin "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"300"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"paypal"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\npaypal"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"bitcoin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"259"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F Cannot pay using Bank, Proceeding..."}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F Cannot pay using Paypal, Proceeding..."}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F Paid 259 using Bitcoin"}]},{type:a,value:h}]}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fchain-of-responsibility",extension:".md",createdAt:aG,updatedAt:aG}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ","keyword","\n","(",")","}",".","{","operator","class-name",";","\n    ","function",false,"p","\n        ","string",":","number","this","builtin","interpolation-punctuation","code","protected","constructor","class","Account","\n\n    "," balance","=","amountToPay","\n            ","template-punctuation","`","new","\n\n",true,2,"h2","a","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-ts","line-numbers","public","setNext","pay","interpolation","${","extends","super","const","comment","In object-oriented design, the chain-of-responsibility pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain.",2.5,"name-chain-of-responsibility","Name: Chain of Responsibility","type-behavioural","Type: Behavioural","use-when-you-want-to","Use when you want to:","blockquote"," Account","void","if","canPay","console","log","template-string","name","else","successor","Bank","Paypal","Bitcoin","\n\nbank","2021-11-26T15:12:44.793Z")));