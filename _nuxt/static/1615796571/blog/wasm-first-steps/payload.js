__NUXT_JSONP__("/blog/wasm-first-steps", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$){return {data:[{post:{slug:"wasm-first-steps",title:"wasm first steps",date:"2021-01-29T05:02",desc:"first steps with wasm",tags:["wasm","rust"],toc:[{id:ak,depth:B,text:al},{id:am,depth:B,text:an},{id:ao,depth:B,text:ap},{id:aq,depth:B,text:ar},{id:as,depth:B,text:at},{id:au,depth:B,text:av}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"After a number of weeks getting to grips with the basics of Rust and some of the syntax I'm going to explore how we can use Rust code with JavaScript via Web Assembly."}]},{type:a,value:e},{type:b,tag:C,props:{id:ak},children:[{type:b,tag:t,props:{href:"#getting-started",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:al}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"I'll be using a template to get started, the folks over at "},{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm",rel:[H,I,J],target:K},children:[{type:a,value:"rustwasm"}]},{type:a,value:" have set up the boiler plate to get started. Note that "},{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Fcargo-generate\u002Fcargo-generate",rel:[H,I,J],target:K},children:[{type:a,value:"cargo generate"}]},{type:a,value:" is also used."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-text"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"cargo generate --git https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fwasm-pack-template\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"using "},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:" as name of the project."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"builtin",ab]},children:[{type:a,value:"cd"}]},{type:a,value:" wasm-game-of-life\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"here are the contents:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002F\n├── Cargo.toml\n├── LICENSE_APACHE\n├── LICENSE_MIT\n├── README.md\n└── src\n   ├── lib.rs\n   └── utils.rs\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"an overview"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Cargo.toml"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Here is where dependencies and meta data are defined for the cargo, which is Rust's package manager and build tool. As we used a template to inialise the project, the file is already pre-configured with the "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" dependency."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"src\u002Flib.rs"}]},{type:a,value:"\nThis file is the root of the Rust crate that is going to be compiled into WebAssembly. It uses "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" to interface with JavaScript. It currently exports the "},{type:b,tag:g,props:{},children:[{type:a,value:U}]},{type:a,value:" function which uses the "},{type:b,tag:g,props:{},children:[{type:a,value:"window.alert"}]},{type:a,value:" method to alert a message."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-rust"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"mod"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"module-declaration",Y]},children:[{type:a,value:"utils"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"use"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"wasm_bindgen"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:"prelude"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"\u002F\u002F When the `wee_alloc` feature is enabled, use `wee_alloc` as the global"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"\u002F\u002F allocator."}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Z,M]},children:[{type:a,value:"#[cfg(feature = "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"wee_alloc\""}]},{type:a,value:")]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,Z,M]},children:[{type:a,value:"#[global_allocator]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"static"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"ALLOC"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ay}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ae}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"INIT"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,Z,M]},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"extern"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aA}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aB,s]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:"s"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"&"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"str"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,Z,M]},children:[{type:a,value:az}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"pub"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aA}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aB,s]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"Hello, wasm-game-of-life!\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:L}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"src\u002Futils.rs"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The src\u002Futils.rs module provides common utilities to make working with Rust compiled to WebAssembly easier."}]},{type:a,value:e},{type:b,tag:C,props:{id:am},children:[{type:b,tag:t,props:{href:"#building-the-project",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:an}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"I'll be using "},{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fwasm-pack",rel:[H,I,J],target:K},children:[{type:a,value:"wasm-pack"}]},{type:a,value:" to orchestrate the following build steps:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:af,props:{},children:[{type:a,value:"Ensure that we have Rust 1.30 or newer and the "},{type:b,tag:g,props:{},children:[{type:a,value:"wasm32-unknown-unknown"}]},{type:a,value:" target installed via "},{type:b,tag:g,props:{},children:[{type:a,value:"rustup"}]},{type:a,value:x}]},{type:a,value:e},{type:b,tag:af,props:{},children:[{type:a,value:"Compile the Rust sources into a WebAssembly "},{type:b,tag:g,props:{},children:[{type:a,value:".wasm"}]},{type:a,value:" binary via cargo,"}]},{type:a,value:e},{type:b,tag:af,props:{},children:[{type:a,value:"Use "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" to generate the JavaScript API for using our Rust-generated WebAssembly."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The above points can be satisfied, the following command is ran inside the project directory:\n"},{type:b,tag:g,props:{},children:[{type:a,value:"wasm-pack build"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"When the build is completed, artifacts are generated in the "},{type:b,tag:g,props:{},children:[{type:a,value:"pkg"}]},{type:a,value:" directory, with the following content:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"pkg\u002F\n├── package.json\n├── README.md\n├── wasm_game_of_life_bg.wasm\n├── wasm_game_of_life.d.ts\n└── wasm_game_of_life.js\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fpkg\u002Fwasm_game_of_life.d.ts"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:aD},{type:b,tag:g,props:{},children:[{type:a,value:".d.ts"}]},{type:a,value:" file contains Typescript type declarations for the JavaScript glue. One advantage of this is the ability to have calls into WebAssembly functions type checked, meaning an IDE can provide autocompletions and suggestions."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-typescript"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fpkg\u002Fpackage.json"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:aD},{type:b,tag:t,props:{href:"https:\u002F\u002Fdocs.npmjs.com\u002Fcli\u002Fv7\u002Fconfiguring-npm\u002Fpackage-json",rel:[H,I,J],target:K},children:[{type:a,value:aE}]},{type:a,value:" file contains metadata about the generated JavaScript and WebAssembly package. This is used by npm and JavaScript bundlers to determine dependencies across packages, package names, versions, and a bunch of other stuff. It helps Rust (and ultimately wasm) integrate with JavaScript tooling and allows us to publish the package to npm."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,aF]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"collaborators\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aG}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"Your Name \u003Cyour.email@example.com\u003E\""}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"description\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,R,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"version\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"0.1.0\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"license\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,R,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"repository\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,R,k]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"files\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aG}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"wasm_game_of_life_bg.wasm\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aI}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"main\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"wasm_game_of_life.js\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"types\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aI}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:C,props:{id:ao},children:[{type:b,tag:t,props:{href:"#adding-the-package-it-to-a-web-page",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"To add the package to a web page we can bootstrap a web based wasm project using the "},{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Frustwasm\u002Fcreate-wasm-app",rel:[H,I,J],target:K},children:[{type:a,value:"create-wasm-app"}]},{type:a,value:" JavaScript project template."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Run this command within the project directory:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:a,value:" init wasm-app www\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Here's the output in the "},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:" directoy:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fwww\u002F\n├── bootstrap.js\n├── index.html\n├── index.js\n├── LICENSE-APACHE\n├── LICENSE-MIT\n├── package.json\n├── README.md\n└── webpack.config.js\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Let's take a tour of the files."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aJ}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This package.json comes pre-configured with "},{type:b,tag:g,props:{},children:[{type:a,value:"webpack"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"webpack-dev-serve"}]},{type:a,value:"r dependencies, as well as a dependency on "},{type:b,tag:g,props:{},children:[{type:a,value:"hello-wasm-pac"}]},{type:a,value:"k, which is a version of the initial wasm-pack-template package that has been published to npm."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fwww\u002Fwebpack.config.js"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This file configures webpack and its local development server. It comes pre-configured, and you shouldn't have to tweak this at all to get webpack and its local development server working."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"wasm-game-of-life\u002Fwww\u002Findex.html"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This is the root HTML file for the Web page. It doesn't do much other than load bootstrap.js, which is a very thin wrapper around index.js."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-html"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,"doctype"]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C!"}]},{type:b,tag:c,props:{className:[d,"doctype-tag"]},children:[{type:a,value:"DOCTYPE"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"name"]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:"meta"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"charset"}]},{type:b,tag:c,props:{className:[d,aL]},children:[{type:b,tag:c,props:{className:[d,f,aM]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:"utf-8"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:"Hello wasm-pack!"},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:aj}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,aL]},children:[{type:b,tag:c,props:{className:[d,f,aM]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:".\u002Fbootstrap.js"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:b,tag:c,props:{className:[d,aj]},children:[]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]}]},{type:a,value:L}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aP}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The index.js is the main entry point for our Web page's JavaScript. It imports the hello-wasm-pack npm package, which contains the default wasm-pack-template's compiled WebAssembly and JavaScript glue, then it calls hello-wasm-pack's greet function."}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,aQ]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aR}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aS]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aT}]},{type:a,value:aU}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aV}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"hello-wasm-pack\""}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,aY,s,aZ]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:C,props:{id:aq},children:[{type:b,tag:t,props:{href:"#install-dependencies",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:ar}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"First, ensure that the local development server and its dependencies are installed by running "},{type:b,tag:g,props:{},children:[{type:a,value:"npm install"}]},{type:a,value:" within the "},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:" subdirectory:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:a_}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This will read "},{type:b,tag:g,props:{},children:[{type:a,value:aE}]},{type:a,value:" and install the dependencies listed there, including the webpack javascript bundler and development server."}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Note that webpack is not required for working with Rust and WebAssembly, it is just the bundler and development server we've chosen for convenience here. Parcel and Rollup should also support importing WebAssembly as ECMAScript modules. You can also use Rust and WebAssembly "},{type:b,tag:t,props:{href:"https:\u002F\u002Frustwasm.github.io\u002Fdocs\u002Fwasm-bindgen\u002Fexamples\u002Fwithout-a-bundler.html",rel:[H,I,J],target:K},children:[{type:a,value:"without a bundler"}]},{type:a,value:" if you prefer!"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:C,props:{id:as},children:[{type:b,tag:t,props:{href:"#using-local-package-in-www",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:at}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Rather than use the "},{type:b,tag:g,props:{},children:[{type:a,value:"hello-wasm-pack package"}]},{type:a,value:" from npm, we want to use our local "},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:" package instead. This will allow us to incrementally develop our Game of Life program."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Open up "},{type:b,tag:g,props:{},children:[{type:a,value:aJ}]},{type:a,value:" and next to \"devDependencies\", add the \"dependencies\" field, including a \"wasm-game-of-life\": \"file:..\u002Fpkg\" entry:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,aF]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"dependencies\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:"                     "},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"\u002F\u002F Add this three lines block!"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"\"file:..\u002Fpkg\""}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\"devDependencies\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"\u002F\u002F..."}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Next, modify "},{type:b,tag:g,props:{},children:[{type:a,value:aP}]},{type:a,value:" to import "},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:" instead of the "},{type:b,tag:g,props:{},children:[{type:a,value:"hello-wasm-pack"}]},{type:a,value:" package:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,aQ]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aR}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,aS]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ad}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aT}]},{type:a,value:aU}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,k,T]},children:[{type:a,value:aV}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,aY,s,aZ]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Since we declared a new dependency, we need to install it:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:a_}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The web page is now ready to be served locally!"}]},{type:a,value:e},{type:b,tag:C,props:{id:au},children:[{type:b,tag:t,props:{href:"#serving-locally",ariaHidden:D,tabIndex:E},children:[{type:b,tag:c,props:{className:[F,G]},children:[]}]},{type:a,value:av}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Next, open a new terminal for the development server. Running the server in a new terminal lets us leave it running in the background, and doesn't block us from running other commands in the meantime. In the new terminal, run this command from within the "},{type:b,tag:g,props:{},children:[{type:a,value:ah}]},{type:a,value:" directory:"}]},{type:a,value:e},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,A]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:_}]},{type:a,value:" run start\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Navigate your Web browser to http:\u002F\u002Flocalhost:8080\u002F and you should be greeted with an alert message. Anytime you make changes and want them reflected on http:\u002F\u002Flocalhost:8080\u002F, just re-run the wasm-pack build command within the wasm-game-of-life directory."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"That's it, we have a hello world!"}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fwasm-first-steps",extension:".md",createdAt:a$,updatedAt:a$}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","punctuation","code","p"," ","tag","keyword","\n  ","operator","div","nuxt-content-highlight","pre","line-numbers",":","function","a","string","property","\u003E",",",";","\n    ","language-bash",3,"h3","true",-1,"icon","icon-link","nofollow","noopener","noreferrer","_blank","\n\n","attr-name","{","(",")","}","null","\u003C","module","greet","::","comment","\u003C\u002F","namespace","attribute","npm","\"","wasm-game-of-life","class-name","wasm-bindgen","*","=","li","\"wasm-game-of-life\"","wasm-game-of-life\u002Fwww","html","script","getting-started","Getting Started","building-the-project","Building the project","adding-the-package-it-to-a-web-page","Adding the package it to a web page","install-dependencies","Install Dependencies","using-local-package-in-www","Using local package in www","serving-locally","Serving Locally","constant","wee_alloc","WeeAlloc","#[wasm_bindgen]","fn","function-definition","alert","The ","package.json","language-json","[","]","\"wasm_game_of_life.d.ts\"","wasm-game-of-life\u002Fwww\u002Fpackage.json","head","attr-value","attr-equals","title","body","wasm-game-of-life\u002Fwww\u002Findex.js","language-javascript","import","imports","as"," wasm","from","\n\nwasm",".","method","property-access","install","2021-03-15T08:22:11.082Z")));