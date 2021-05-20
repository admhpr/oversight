__NUXT_JSONP__("/notes/on-signature-schemes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{post:{slug:"on-signature-schemes",title:"on signature schemes",date:"2021-05-20T08:09",desc:"notes on signature schemes",tags:[p],toc:[{id:q,depth:3,text:r},{id:s,depth:m,text:t},{id:u,depth:m,text:v},{id:w,depth:m,text:x},{id:y,depth:m,text:z},{id:p,depth:m,text:A},{id:B,depth:m,text:C}],body:{type:"root",children:[{type:b,tag:"h3",props:{id:q},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#field-guide-to-signature-schemes",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"triple of three algorithms G S V"}]},{type:a,value:c},{type:b,tag:n,props:{id:s},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#generator",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"creates public key and secret key"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:u},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#signer",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"takes secret key and value to be signed"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"returns a tag, a random string that allows verification againist x"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:w},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#verifier",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"V(pk,x,t) -\u003E accept|reject"}]}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"takes public key, value, and signed value"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"accepts or rejects based on x and t"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:y},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#correctness",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"the result of the signer with arguments secret key and value will verify with verification function with arguments public key, value, and result of signer."}]},{type:a,value:c},{type:b,tag:n,props:{id:p},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#security",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"V(pk, x, t)"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"this will be next to impossible, computationally difficult"}]},{type:a,value:c},{type:b,tag:n,props:{id:B},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#typical-flow",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"server calls generator "},{type:b,tag:f,props:{},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"client logs in"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"server validates log credientials"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"server returns tag "},{type:b,tag:f,props:{},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"on next interaction from client server validates "},{type:b,tag:f,props:{},children:[{type:a,value:F}]}]},{type:a,value:c}]}]},dir:"\u002Fnotes",path:"\u002Fnotes\u002Fon-signature-schemes",extension:".md",createdAt:G,updatedAt:G}}],fetch:{},mutations:void 0}}("text","element","\n","li","p","code","a","true",-1,"span","icon","icon-link",2,"h2","ul","security","field-guide-to-signature-schemes","field guide to signature schemes","generator","Generator","signer","Signer","verifier","Verifier","correctness","Correctness","Security","typical-flow","typical flow","G() -\u003E (pk, sk)","S(sk, x) -\u003E t","V(pk, x, S(sk, x))","2021-05-20T08:14:13.059Z")));