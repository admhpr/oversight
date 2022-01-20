__NUXT_JSONP__("/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE){return {data:[{posts:[{slug:"magic-of-mono-repos",title:"magic of mono repos",date:"2022-01-05T05:02",desc:"why mono repos are magic 🧙",tags:["recipes","typescript"],toc:[{id:Z,depth:2,text:_},{id:$,depth:H,text:aa},{id:ab,depth:H,text:ac},{id:ad,depth:H,text:ae},{id:af,depth:H,text:ag},{id:ah,depth:H,text:ai},{id:aj,depth:H,text:ak},{id:al,depth:H,text:am},{id:an,depth:H,text:ao}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:Z},children:[{type:b,tag:o,props:{href:"#15-package",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The value proposition of a well setup mono-repo, N packages with the maintainence overhead on 1.5. That's it, that's the goal. Below describes one of many approaches to achieve that using typescript as the primary language."}]},{type:a,value:e},{type:b,tag:I,props:{id:$},children:[{type:b,tag:o,props:{href:"#prerequisites",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:ap,props:{},children:[{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"node \u003E= "},{type:b,tag:o,props:{href:"https:\u002F\u002Fnodejs.org\u002Fdownload\u002Frelease\u002Fv14.18.2\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"v14.18.2"}]}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"npm  \u003E= "},{type:b,tag:o,props:{href:"https:\u002F\u002Fgithub.com\u002Fnpm\u002Fcli",rel:[D,E,F],target:G},children:[{type:a,value:"v8"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:I,props:{id:ab},children:[{type:b,tag:o,props:{href:"#setup",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aq},{type:b,tag:o,props:{href:"https:\u002F\u002Fdocs.npmjs.com\u002Fcli\u002Fv8\u002Fusing-npm\u002Fworkspaces",rel:[D,E,F],target:G},children:[{type:a,value:"npm workspaces"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add to "},{type:b,tag:m,props:{},children:[{type:a,value:"package.json"}]}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"my-workspaces-powered-project\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"workspaces\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"packages\u002F*\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add deps to workspace"}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:"workspace-dep"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:"workspace-dev-dep"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add deps to package"}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,R]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:O}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:I,props:{id:ad},children:[{type:b,tag:o,props:{href:"#folder-structure",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ae}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,U]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"packages\n   ├── \u003Cpackage-a\u003E\n   |-- \u003Cpackage-b\u003E\n   └── \u003Cpackage-c\u003E\n\n"}]}]}]},{type:a,value:e},{type:b,tag:I,props:{id:af},children:[{type:b,tag:o,props:{href:"#clean-up",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ag}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install "},{type:b,tag:o,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Frimraf",rel:[D,E,F],target:G},children:[{type:a,value:"rimraf"}]},{type:a,value:" at workspace level,"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add to scripts for each package:"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"rimraf dist *.tsbuildinfo"}]}]},{type:a,value:e},{type:b,tag:I,props:{id:ah},children:[{type:b,tag:o,props:{href:"#typescript-config",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ai}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install deps:"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aq},{type:b,tag:o,props:{href:"https:\u002F\u002Fwww.typescriptlang.org\u002Ftsconfig#composite",rel:[D,E,F],target:G},children:[{type:a,value:"composite"}]},{type:a,value:" ts projects to speed up build times"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"base ts config in packages root"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"packages\u002F"}]}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"allowJs\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"allowSyntheticDefaultImports\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"esModuleInterop\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"inlineSourceMap\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"listEmittedFiles\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"listFiles\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"module\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"esnext\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"moduleResolution\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noFallthroughCasesInSwitch\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noUnusedLocals\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noUnusedParameters\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"pretty\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"resolveJsonModule\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"skipLibCheck\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"strict\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"target\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"es2015\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"traceResolution\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"types\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"jest\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"compileOnSave\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"exclude\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"node_modules\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"reference ts config"}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"files\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"references\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"\u003Cpackage-a\u003E\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"\u003Cpackage-b\u003E\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"ts config per package"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"packages\u002F\u003Cpackage-?\u003E"}]}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"..\u002Ftsconfig.settings.json\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"include\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"src\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"composite\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:a,value:"\n    ...\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:I,props:{id:aj},children:[{type:b,tag:o,props:{href:"#tasks",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ak}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Managing task flows with "},{type:b,tag:o,props:{href:"https:\u002F\u002Flerna.js.org\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"lerna"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"npm i -WD lerna"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"setup a "},{type:b,tag:m,props:{},children:[{type:a,value:"scripts"}]},{type:a,value:" folder like so:"}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,U]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"scripts\n├── packages\n└── workspace\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"mkdir -p scripts\u002F{packages,workspace}"}]}]},{type:a,value:e},{type:b,tag:ap,props:{},children:[{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"for each workspace task add to "},{type:b,tag:m,props:{},children:[{type:a,value:"scripts\u002Fworkspace"}]}]},{type:a,value:e},{type:b,tag:Q,props:{},children:[{type:a,value:"for each package task add to "},{type:b,tag:m,props:{},children:[{type:a,value:"scripts\u002Fpackages"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:L,props:{id:"appling-actions-only-to-staged-files"},children:[{type:b,tag:o,props:{href:"#appling-actions-only-to-staged-files",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Appling actions only to staged files"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:X},{type:b,tag:o,props:{href:"https:\u002F\u002Fgithub.com\u002Fokonet\u002Flint-staged",rel:[D,E,F],target:G},children:[{type:a,value:"lint-staged"}]}]},{type:a,value:e},{type:b,tag:L,props:{id:"lint"},children:[{type:b,tag:o,props:{href:"#lint",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Lint"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:X},{type:b,tag:o,props:{href:"https:\u002F\u002Feslint.org\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"eslint"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install (with ts deps):"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"npm i -WD eslint @typescript-eslint\u002Fparser @typescript-eslint\u002Feslint-plugin"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"setup ignores, touch "},{type:b,tag:m,props:{},children:[{type:a,value:".eslintignore"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aA}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,U]},children:[{type:b,tag:m,props:{},children:[{type:a,value:aB}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add base config to project root "},{type:b,tag:"strong",props:{},children:[{type:a,value:"not"}]},{type:a,value:" packages root, this helps IDEs like vscode find the lint file"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:aC}]}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"env\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"es2021\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:n}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"eslint:recommended\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"plugin:@typescript-eslint\u002Frecommended\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"plugin:@typescript-eslint\u002Frecommended-requiring-type-checking\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"parser\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"@typescript-eslint\u002Fparser\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"ecmaVersion\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"12"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"plugins\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"@typescript-eslint\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"rules\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"prefer-const\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"error\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-member-access\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-call\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-assignment\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Y}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"in each package directory "},{type:b,tag:m,props:{},children:[{type:a,value:aC}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"a thin lint config extending from base, additional per package rules can be added here."}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,N]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"..\u002F..\u002F.eslintrc\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"project\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"tsconfig.json\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:L,props:{id:"format"},children:[{type:b,tag:o,props:{href:"#format",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Format"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:X},{type:b,tag:o,props:{href:"https:\u002F\u002Fprettier.io\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"prettier"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"npm i -WD prettier"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"touch "},{type:b,tag:m,props:{},children:[{type:a,value:".prettierignore"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aA}]},{type:a,value:e},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,U]},children:[{type:b,tag:m,props:{},children:[{type:a,value:aB}]}]}]},{type:a,value:e},{type:b,tag:L,props:{id:V},children:[{type:b,tag:o,props:{href:"#dev",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Dev"}]},{type:a,value:e},{type:b,tag:L,props:{id:"build"},children:[{type:b,tag:o,props:{href:"#build",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Build"}]},{type:a,value:e},{type:b,tag:L,props:{id:"version"},children:[{type:b,tag:o,props:{href:"#version",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Version"}]},{type:a,value:e},{type:b,tag:L,props:{id:"package"},children:[{type:b,tag:o,props:{href:"#package",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Package"}]},{type:a,value:e},{type:b,tag:L,props:{id:"release"},children:[{type:b,tag:o,props:{href:"#release",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"Release"}]},{type:a,value:e},{type:b,tag:I,props:{id:al},children:[{type:b,tag:o,props:{href:"#task-flow",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:am}]},{type:a,value:e},{type:b,tag:I,props:{id:an},children:[{type:b,tag:o,props:{href:"#publishing",ariaHidden:n,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ao}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fmagic-of-mono-repos",extension:".md",createdAt:aE,updatedAt:aE}]}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","operator"," ","property",":","p",",","code","true","a","string","\n        ","\n  ","\n    ",-1,"icon","icon-link","boolean","div","nuxt-content-highlight","pre","line-numbers","{","}","nofollow","noopener","noreferrer","_blank",3,"h3","[","]","h4","false","language-json","\u003C","\u003E","li","language-bash","function","npm","language-text","dev","\"extends\"","tool: ","\"off\"","15-package","1.5 package","prerequisites","Prerequisite's","setup","Setup","folder-structure","Folder Structure","clean-up","Clean Up","typescript-config","TypeScript Config","tasks","Tasks","task-flow","Task Flow","publishing","Publishing","ul","use "," i "," i -D ","package-dep"," -w ","workspace-name","\"compilerOptions\"","\"node\"","\"path\"","install:","add","node_modules\n","touch .eslintrc","\"parserOptions\"","2022-01-20T11:56:10.075Z")));