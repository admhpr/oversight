__NUXT_JSONP__("/blog/magic-of-mono-repos", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{post:{slug:"magic-of-mono-repos",title:"magic of mono repos",date:"2022-01-05T05:02",desc:"why mono repos are magic 🧙",tags:["recipes","typescript"],toc:[{id:B,depth:2,text:C},{id:D,depth:m,text:E},{id:F,depth:m,text:G},{id:H,depth:m,text:I},{id:J,depth:m,text:K},{id:L,depth:m,text:M},{id:N,depth:m,text:O},{id:P,depth:m,text:Q}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:B},children:[{type:b,tag:g,props:{href:"#15-package",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"The value proposition of a well setup mono-repo, N packages with the maintainence overhead on 1.5. That's it, that's the goal. Below describes one of many approaches to achieve that using typescript as the primary language."}]},{type:a,value:d},{type:b,tag:o,props:{id:D},children:[{type:b,tag:g,props:{href:"#prerequisites",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:"ul",props:{},children:[{type:a,value:d},{type:b,tag:R,props:{},children:[{type:a,value:"node \u003E= "},{type:b,tag:g,props:{href:"https:\u002F\u002Fnodejs.org\u002Fdownload\u002Frelease\u002Fv14.18.2\u002F",rel:[S,T,U],target:V},children:[{type:a,value:"v14.18.2"}]}]},{type:a,value:d},{type:b,tag:R,props:{},children:[{type:a,value:"npm  \u003E= "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fnpm\u002Fcli",rel:[S,T,U],target:V},children:[{type:a,value:"v7"}]},{type:a,value:z},{type:b,tag:l,props:{},children:[{type:a,value:"npm i -g npm@7"}]}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:o,props:{id:F},children:[{type:b,tag:g,props:{href:"#setup",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"add to "},{type:b,tag:l,props:{},children:[{type:a,value:"package.json"}]}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,"language-json"]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[e,v]},children:[{type:a,value:"{"}]},{type:a,value:A},{type:b,tag:c,props:{className:[e,W]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:X}]},{type:a,value:z},{type:b,tag:c,props:{className:[e,Y]},children:[{type:a,value:"\"my-workspaces-powered-project\""}]},{type:b,tag:c,props:{className:[e,v]},children:[{type:a,value:","}]},{type:a,value:A},{type:b,tag:c,props:{className:[e,W]},children:[{type:a,value:"\"workspaces\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:X}]},{type:a,value:z},{type:b,tag:c,props:{className:[e,v]},children:[{type:a,value:"["}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[e,Y]},children:[{type:a,value:"\"packages\u002F*\""}]},{type:a,value:A},{type:b,tag:c,props:{className:[e,v]},children:[{type:a,value:"]"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,v]},children:[{type:a,value:"}"}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"add deps to workspace"}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,w]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:y}]},{type:a,value:Z},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:"workspace-dep"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,w]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:y}]},{type:a,value:$},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:"workspace-dev-dep"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"add deps to package"}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,w]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:y}]},{type:a,value:Z},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:aa},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:ac},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,w]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:y}]},{type:a,value:$},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:aa},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:ab},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:t}]},{type:a,value:ac},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:u}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:o,props:{id:H},children:[{type:b,tag:g,props:{href:"#folder-structure",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:I}]},{type:a,value:d},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,"language-text"]},children:[{type:b,tag:l,props:{},children:[{type:a,value:".\n├── packages\n│   ├── \u003Cpackage-a\u003E\n│   |-- \u003Cpackage-b\u003E\n│   └── \u003Cpackage-c\u003E\n└── scripts\n    ├── packages\n    └── workspace\n"}]}]}]},{type:a,value:d},{type:b,tag:o,props:{id:J},children:[{type:b,tag:g,props:{href:"#typescript-config",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:K}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"use composite ts projects"}]},{type:a,value:d},{type:b,tag:o,props:{id:L},children:[{type:b,tag:g,props:{href:"#tasks",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:M}]},{type:a,value:d},{type:b,tag:o,props:{id:N},children:[{type:b,tag:g,props:{href:"#task-flow",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:O}]},{type:a,value:d},{type:b,tag:o,props:{id:P},children:[{type:b,tag:g,props:{href:"#publishing",ariaHidden:h,tabIndex:i},children:[{type:b,tag:c,props:{className:[j,k]},children:[]}]},{type:a,value:Q}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fmagic-of-mono-repos",extension:".md",createdAt:ad,updatedAt:ad}}],fetch:{},mutations:void 0}}("text","element","span","\n","token","operator","a","true",-1,"icon","icon-link","code",3,"p","h3","div","nuxt-content-highlight","pre","line-numbers","\u003C","\u003E","punctuation","language-bash","function","npm"," ","\n  ","15-package","1.5 package","prerequisites","Prerequisite's","setup","Setup","folder-structure","Folder Structure","typescript-config","TypeScript Config","tasks","Tasks","task-flow","Task Flow","publishing","Publishing","li","nofollow","noopener","noreferrer","_blank","property",":","string"," i ","dev"," i -D ","package-dep"," -w ","folder name","2022-01-12T09:21:38.964Z")));