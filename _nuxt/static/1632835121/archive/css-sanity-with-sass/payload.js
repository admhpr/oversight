__NUXT_JSONP__("/archive/css-sanity-with-sass", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:[{post:{slug:"css-sanity-with-sass",title:"CSS sanity with SASS: Setup.",date:"2017-09-09T18:27",desc:v,metadata:{Sass:"Blog"},taxonomy:{category:["blog"],tag:["web development","web design","CSS"]},twittercardoptions:"summary",articleenabled:q,article:{"@context":t,"@type":"NewsArticle",image:{"@type":w},publisher:{"@type":"Organization",logo:{"@type":w}}},musiceventenabled:q,orgaenabled:q,orga:{ratingValue:2.5},orgaratingenabled:q,eventenabled:q,personenabled:q,restaurantenabled:q,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":t,"@type":"Restaurant",address:{"@type":x}},facebookenable:true,person:{"@context":t,"@type":"person",address:{"@type":x}},event:{"@context":t,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":t,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"\"as I tack on line 1000 of a css file in fear of breaking something otherwise\""}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I think even those that truely love language would agree. If you lean towards the front end of web development CSS is unavoidable. CSS shouldn't be this painful, we as programmers\u002Fdevelopers\u002Fhackers\u002Fcode monkies should not shy away from making things look nice."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"After all who do you write programs for....other people, normally not programmers.As far as anyone else is concerned the UI is the program. They don't care how nicely you've abstracted functionality, how that new method you tried out worked or if you have clear comments. They want to interact with the program."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"There is a better way"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"introducing "},{type:b,tag:"em",props:{},children:[{type:b,tag:k,props:{href:"http:\u002F\u002Fsass-lang.com\u002Fguide",rel:[l,m,n],target:o},children:[{type:b,tag:i,props:{},children:[{type:a,value:"SASS: Syntactically Awesome Style Sheets"}]}]}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"This language makes sense, it organizes things effectively and clearly. Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"It's been around a while in web dev terms (since 2006),  but has really gained popularity over the last few years and is currently used and supported in many web development technologies such as "},{type:b,tag:k,props:{href:"http:\u002F\u002Fgetbootstrap.com\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"Bootstrap"}]},{type:a,value:", "},{type:b,tag:k,props:{href:"https:\u002F\u002Fjekyllrb.com\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"Jekyll"}]},{type:a,value:" and is supported in the 2017 Adobe Dreamweaver (yes it still exsists)."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"So let's get started, I'll be using Linux this will probably work on Mac but will obviously not on Windows."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We have to have some way to compile the SassScript, for that we need "},{type:b,tag:i,props:{},children:[{type:a,value:y}]},{type:a,value:" a programming language that gained popularity with "},{type:b,tag:i,props:{},children:[{type:a,value:"Rails"}]},{type:a,value:" a server side framework written in "},{type:b,tag:i,props:{},children:[{type:a,value:y}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"I use a "},{type:b,tag:k,props:{href:"https:\u002F\u002Frvm.io\u002Frvm\u002Finstall",rel:[l,m,n],target:o},children:[{type:a,value:z}]},{type:a,value:" which stands for Ruby version manager... I'm sure you can guess what it does. This will keep things neat and tidy."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Follow the download instructions for "},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:". After that run:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"rvm install \u003Cthe_ruby_version_you_want\u003E"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"eg:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"rvm  install 2.3.1"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"rvm use 2.3.1"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"then:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"rvm rubygems latest"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"now we install "},{type:b,tag:k,props:{href:"http:\u002F\u002Fcompass-style.org\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"compass"}]},{type:a,value:" an open-source CSS Authoring Framework. This will allow us to turn our Sass files into CSS,  you may or may not need sudo here.."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{href:"https:\u002F\u002Fpostimg.org\u002Fimage\u002F8009mjsk5\u002F",rel:[l,m,n],target:o},children:[{type:b,tag:"content-img",props:{alt:"Screenshot_from_2017-09-08_21-57-49.png",src:"https:\u002F\u002Fs26.postimg.org\u002Fuopgm49y1\u002FScreenshot_from_2017-09-08_21-57-49.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We are ready to roll:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"set up a "},{type:b,tag:i,props:{},children:[{type:a,value:"config.rb"}]},{type:a,value:" file in your project root to let compass know what's up, here's a sample to get you started:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# Require any additional compass plugins here."}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# defaults to project root"}]},{type:a,value:"\n\nhttp_path "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"\u002F\""}]},{type:a,value:"\ncss_dir "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"css\""}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,"assign-left","variable"]},children:[{type:a,value:"sass_dir"}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"sass\""}]},{type:a,value:"\nimages_dir "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"images\""}]},{type:a,value:"\njavascripts_dir "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"js\""}]},{type:a,value:"\nfonts_dir "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:"\"fonts\""}]},{type:a,value:"\n\noutput_style "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:" :nested\n\n"},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# To enable relative paths to assets via compass helper functions. Uncomment:"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# relative_assets = true"}]},{type:a,value:"\n\nline_comments "},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:d,props:{className:[e,"boolean"]},children:[{type:a,value:"false"}]},{type:a,value:"\n\n\n"},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# If you prefer the indented syntax, you might want to regenerate this"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# project again passing --syntax sass, or you can uncomment this:"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# preferred_syntax = :sass"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# and then run:"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"For more details on configuration check out the compass "},{type:b,tag:k,props:{href:"http:\u002F\u002Fcompass-style.org\u002Fhelp\u002Fdocumentation\u002Fconfiguration-reference\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"docs"}]},{type:a,value:c},{type:b,tag:F,props:{},children:[]},{type:a,value:"\nbe sure to set your paths correctly this example project looks like this:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"index.html\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"\ncss\u002Fstyles.css\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"--sass\u002F \n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"-- partials\u002F                   "},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# Partials do a quick google search for \"Sass partials\""}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"-- _base.sass        "},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:"# imports for all mixins + global project variables"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:u},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"-- styles.scss     \n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"--js\u002F\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"--images\u002F\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:"--fonts\u002F\n"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:h}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:F,props:{},children:[]},{type:a,value:"\nnext run either `compass watch` to watch for changes to Sass files and auto compile to CSS or manually  run `compass compile` to turn your Sass into CSS.\n"},{type:b,tag:f,props:{},children:[{type:a,value:"Well I didn't really cover Sass here but at least your ready to go!"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Head over to "},{type:b,tag:k,props:{href:G,rel:[l,m,n],target:o},children:[{type:a,value:G}]},{type:a,value:" for some great tutorials. Check out the "},{type:b,tag:i,props:{},children:[{type:a,value:"Advanced"}]},{type:a,value:" section to get your mind blown."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"You can always try Sass at somewhere like  "},{type:b,tag:k,props:{href:"https:\u002F\u002Fcodepen.io\u002F#",rel:[l,m,n],target:o},children:[{type:a,value:"Codepen"}]},{type:a,value:" without all the overhead. Simply choose Sass in the CSS preprocessors tab under settings."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"It really is worth a little set up for a massive longterm gain. I've had great fun learning Sass and hope to dive a little deeper this year."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"So I'll prob be posting about how to use Sass at some point in the future."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Until then..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Happy Styling!"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fcss-sanity-with-sass",extension:".md",createdAt:H,updatedAt:H}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","p","operator","|","code","comment","a","nofollow","noopener","noreferrer","_blank","=",false," ","string","http:\u002F\u002Fschema.org\u002F","    ","CSS can be painful to write and even worse to maintain...","ImageObject","PostalAddress","Ruby","RVM","div","nuxt-content-highlight","pre","language-bash","line-numbers","br","http:\u002F\u002Fthesassway.com\u002F","2021-09-28T13:17:43.874Z")));