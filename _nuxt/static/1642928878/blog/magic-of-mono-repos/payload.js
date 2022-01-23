__NUXT_JSONP__("/blog/magic-of-mono-repos", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{post:{slug:"magic-of-mono-repos",title:"magic of mono repos",date:"2022-01-05T05:02",desc:"a setup guide to a magic mono repo 🧙",tags:["recipes","typescript"],toc:[{id:_,depth:2,text:$},{id:aa,depth:I,text:ab},{id:ac,depth:I,text:ad},{id:ae,depth:I,text:af},{id:ag,depth:I,text:ah},{id:ai,depth:I,text:aj},{id:ak,depth:I,text:al},{id:am,depth:I,text:an},{id:ao,depth:I,text:ap},{id:aq,depth:I,text:ar}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:_},children:[{type:b,tag:n,props:{href:"#15-package",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:$}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The value proposition of a well setup mono-repo, N packages with the maintainence overhead on 1.5. That's it, that's the goal. Below describes one of many approaches to achieve that using typescript as the primary language."}]},{type:a,value:e},{type:b,tag:J,props:{id:aa},children:[{type:b,tag:n,props:{href:"#prerequisites",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ab}]},{type:a,value:e},{type:b,tag:as,props:{},children:[{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:"node \u003E= "},{type:b,tag:n,props:{href:"https:\u002F\u002Fnodejs.org\u002Fdownload\u002Frelease\u002Fv14.18.2\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"v14.18.2"}]}]},{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:"npm  \u003E= "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fnpm\u002Fcli",rel:[D,E,F],target:G},children:[{type:a,value:"v8"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:J,props:{id:ac},children:[{type:b,tag:n,props:{href:"#optional",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ad}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:W},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fnvm-sh\u002Fnvm",rel:[D,E,F],target:G},children:[{type:a,value:"nvm"}]},{type:a,value:" to manage node versions"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:at},{type:b,tag:l,props:{},children:[{type:a,value:".nvmrc"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"v14.18.2\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"once installed calling "},{type:b,tag:l,props:{},children:[{type:a,value:"nvm use"}]},{type:a,value:" from root will enable the correct version if not already enabled"}]},{type:a,value:e},{type:b,tag:J,props:{id:ae},children:[{type:b,tag:n,props:{href:"#setup",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:af}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:W},{type:b,tag:n,props:{href:"https:\u002F\u002Fdocs.npmjs.com\u002Fcli\u002Fv8\u002Fusing-npm\u002Fworkspaces",rel:[D,E,F],target:G},children:[{type:a,value:"npm workspaces"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add to "},{type:b,tag:l,props:{},children:[{type:a,value:"package.json"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"my-workspaces-powered-project\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"workspaces\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"packages\u002F*\""}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add deps to workspace"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,S]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:"workspace-dep"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,S]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:"workspace-dev-dep"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add deps to package"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,S]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:X}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,S]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:U}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:P}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ag},children:[{type:b,tag:n,props:{href:"#folder-structure",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ah}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"packages\n   ├── \u003Cpackage-a\u003E\n   |-- \u003Cpackage-b\u003E\n   └── \u003Cpackage-c\u003E\n\n"}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ai},children:[{type:b,tag:n,props:{href:"#clean-up",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:aj}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install "},{type:b,tag:n,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Frimraf",rel:[D,E,F],target:G},children:[{type:a,value:"rimraf"}]},{type:a,value:" at workspace level,"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add to scripts for each package:"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"rimraf dist *.tsbuildinfo"}]}]},{type:a,value:e},{type:b,tag:J,props:{id:ak},children:[{type:b,tag:n,props:{href:"#typescript-config",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:al}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install deps:"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:W},{type:b,tag:n,props:{href:"https:\u002F\u002Fwww.typescriptlang.org\u002Ftsconfig#composite",rel:[D,E,F],target:G},children:[{type:a,value:"composite"}]},{type:a,value:" ts projects to speed up build times"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"base ts config in packages root"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"packages\u002F"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"allowJs\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"allowSyntheticDefaultImports\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"esModuleInterop\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"inlineSourceMap\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"listEmittedFiles\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"listFiles\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"module\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"esnext\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"moduleResolution\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noFallthroughCasesInSwitch\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noUnusedLocals\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"noUnusedParameters\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"pretty\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"resolveJsonModule\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"skipLibCheck\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"strict\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"target\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"es2015\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"traceResolution\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"types\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"jest\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"compileOnSave\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"exclude\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"node_modules\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"reference ts config"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"files\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"references\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"\u003Cpackage-a\u003E\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"\u003Cpackage-b\u003E\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"ts config per package"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"packages\u002F\u003Cpackage-?\u003E"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"..\u002Ftsconfig.settings.json\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"include\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"src\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"composite\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:"\n    ...\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:J,props:{id:am},children:[{type:b,tag:n,props:{href:"#tasks",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:an}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Managing task flows with "},{type:b,tag:n,props:{href:"https:\u002F\u002Flerna.js.org\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"lerna"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aC}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npm i -WD lerna"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"setup a "},{type:b,tag:l,props:{},children:[{type:a,value:"scripts"}]},{type:a,value:" folder like so:"}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"scripts\n├── packages\n└── workspace\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"mkdir -p scripts\u002F{packages,workspace}"}]}]},{type:a,value:e},{type:b,tag:as,props:{},children:[{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:"for each workspace task add to "},{type:b,tag:l,props:{},children:[{type:a,value:"scripts\u002Fworkspace"}]}]},{type:a,value:e},{type:b,tag:R,props:{},children:[{type:a,value:"for each package task add to "},{type:b,tag:l,props:{},children:[{type:a,value:"scripts\u002Fpackages"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:K,props:{id:"running-tasks-based-on-git-hooks"},children:[{type:b,tag:n,props:{href:"#running-tasks-based-on-git-hooks",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Running tasks based on git hooks"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Ftypicode\u002Fhusky",rel:[D,E,F],target:G},children:[{type:a,value:"husky"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npm i -WD husky\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npx husky add .husky\u002Fpre-commit"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"#!\u002Fbin\u002Fsh\nnpx lint-staged\n"}]}]}]},{type:a,value:e},{type:b,tag:K,props:{id:"appling-lint-tasks-only-to-staged-files"},children:[{type:b,tag:n,props:{href:"#appling-lint-tasks-only-to-staged-files",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Appling lint tasks only to staged files"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fokonet\u002Flint-staged",rel:[D,E,F],target:G},children:[{type:a,value:"lint-staged"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npm i -WD lint-staged\n"}]}]}]},{type:a,value:e},{type:b,tag:K,props:{id:"lint"},children:[{type:b,tag:n,props:{href:"#lint",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Lint"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V},{type:b,tag:n,props:{href:"https:\u002F\u002Feslint.org\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"eslint"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"install (with ts deps):"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npm i -WD eslint @typescript-eslint\u002Fparser @typescript-eslint\u002Feslint-plugin"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"setup ignores, touch "},{type:b,tag:l,props:{},children:[{type:a,value:".eslintignore"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aD}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:aE}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"add base config to project root "},{type:b,tag:"strong",props:{},children:[{type:a,value:"not"}]},{type:a,value:" packages root, this helps IDEs like vscode find the lint file"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:aF}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"env\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"es2021\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"eslint:recommended\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"plugin:@typescript-eslint\u002Frecommended\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"plugin:@typescript-eslint\u002Frecommended-requiring-type-checking\""}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"parser\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"@typescript-eslint\u002Fparser\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"ecmaVersion\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"12"}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"plugins\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"@typescript-eslint\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"rules\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"prefer-const\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"error\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-member-access\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-call\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"@typescript-eslint\u002Fno-unsafe-assignment\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:Z}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"in each package directory "},{type:b,tag:l,props:{},children:[{type:a,value:aF}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"a thin lint config extending from base, additional per package rules can be added here."}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,O]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"..\u002F..\u002F.eslintrc\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"project\""}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"tsconfig.json\""}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"touch scripts\u002Fworkspace\u002Flint.sh"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"#!\u002Fusr\u002Fbin\u002Fenv sh\necho \"┏━━━ 🕵️‍♀️ LINT WORKSPACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\"\nnpm run lint --workspaces\n"}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"touch scripts\u002Fpackages\u002Flint.sh"}]}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"#!\u002Fusr\u002Fbin\u002Fenv sh\necho \"┏━━━ 🕵️‍♀️ LINT $(pwd) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\"\neslint src --ext ts,js\n"}]}]}]},{type:a,value:e},{type:b,tag:K,props:{id:"format"},children:[{type:b,tag:n,props:{href:"#format",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Format"}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:V},{type:b,tag:n,props:{href:"https:\u002F\u002Fprettier.io\u002F",rel:[D,E,F],target:G},children:[{type:a,value:"prettier"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aC}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"npm i -WD prettier"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:at},{type:b,tag:l,props:{},children:[{type:a,value:".prettierignore"}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:aD}]},{type:a,value:e},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,H]},children:[{type:b,tag:l,props:{},children:[{type:a,value:aE}]}]}]},{type:a,value:e},{type:b,tag:K,props:{id:X},children:[{type:b,tag:n,props:{href:"#dev",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Dev"}]},{type:a,value:e},{type:b,tag:K,props:{id:"build"},children:[{type:b,tag:n,props:{href:"#build",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Build"}]},{type:a,value:e},{type:b,tag:K,props:{id:"version"},children:[{type:b,tag:n,props:{href:"#version",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Version"}]},{type:a,value:e},{type:b,tag:K,props:{id:"package"},children:[{type:b,tag:n,props:{href:"#package",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Package"}]},{type:a,value:e},{type:b,tag:K,props:{id:"release"},children:[{type:b,tag:n,props:{href:"#release",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:"Release"}]},{type:a,value:e},{type:b,tag:J,props:{id:ao},children:[{type:b,tag:n,props:{href:"#task-flow",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:J,props:{id:aq},children:[{type:b,tag:n,props:{href:"#publishing",ariaHidden:o,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ar}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fmagic-of-mono-repos",extension:".md",createdAt:aH,updatedAt:aH}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","operator"," ","property",":","p","code",",","a","true","string","div","nuxt-content-highlight","pre","line-numbers","\n        ",-1,"icon","icon-link","\n  ","\n    ","boolean","{","}","nofollow","noopener","noreferrer","_blank","language-text",3,"h3","h4","[","]","false","language-json","\u003C","\u003E","li","language-bash","function","npm","tool: ","use ","dev","\"extends\"","\"off\"","15-package","1.5 package","prerequisites","Prerequisite's","optional","Optional","setup","Setup","folder-structure","Folder Structure","clean-up","Clean Up","typescript-config","TypeScript Config","tasks","Tasks","task-flow","Task Flow","publishing","Publishing","ul","touch "," i "," i -D ","package-dep"," -w ","workspace-name","\"compilerOptions\"","\"node\"","\"path\"","install:","add","node_modules\n","touch .eslintrc","\"parserOptions\"","2022-01-23T09:05:33.924Z")));