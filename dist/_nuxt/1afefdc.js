(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{276:function(t,e,n){"use strict";n.r(e);n(38),n(194);var r={name:"PostSearch",props:{list:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Search here..."}},data:function(){return{search:"",currentIndex:0,showSearchItems:!1}},computed:{filteredList:function(){return this.list}},watch:{search:function(t){this.$emit("selected",this.search),""===this.search&&(this.currentIndex=0,this.showSearchItems=!1)}},methods:{selectSearchItem:function(t){this.search=t.title.toLowerCase(),this.showSearchItems=!1,this.$emit("selected",this.search)},enter:function(){this.filteredList[this.currentIndex]&&(this.search=this.filteredList[this.currentIndex].title.toLowerCase(),this.showSearchItems=!1)},up:function(){this.currentIndex&&(this.currentIndex=this.currentIndex-1)},down:function(){this.currentIndex+1<this.filteredList.length-1?this.currentIndex=this.currentIndex+1:this.currentIndex=0}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"mt-1 flex justify-between rounded-md"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"searchBox",attrs:{type:"text",placeholder:"Search posts...","aria-label":"Search"},domProps:{value:t.search},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)}],input:[function(e){e.target.composing||(t.search=e.target.value)},function(e){t.showSearchItems=!0}]}}),t._v(" "),n("span",{on:{click:function(e){t.search=""}}},[t._v("∅")])]),t._v(" "),t.filteredList.length>0&&t.showSearchItems?n("aside",{staticClass:"absolute w-1/4 z-10 flex flex-col items-start bg-white border rounded-md shadow-md mt-1",attrs:{role:"menu","aria-labelledby":"menu-heading"}},[n("ul",{staticClass:"flex flex-col w-full"},t._l(t.filteredList,(function(e,r){return n("li",{key:r,staticClass:"px-2 py-3 space-x-2 hover:bg-secondary hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none",class:r===t.currentIndex?"bg-secondary text-white":"",on:{click:function(n){t.selectSearchItem(e),t.showSearchItems=!1}}},[t._v("\n        "+t._s(e.title.toLowerCase())+"\n      ")])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);var r={name:"BlogPostPreview",props:{published:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},title:{type:String,required:!0},path:{type:String,required:!0},desc:{type:String,required:!0}},computed:{formatPublishDate:function(){return new Date(this.published).toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"})}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("time",[t._v(t._s(t.formatPublishDate))]),t._v(" "),n("article",{staticClass:"p-8"},[n("h2",{staticClass:"title"},[n("a",{attrs:{href:t.path}},[t._v("‡ "+t._s(t.title.toLowerCase()))])]),t._v(" "),t.desc?n("p",{staticClass:"mb-10"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),n("div",{staticClass:"flex justify-end"},[n("nuxt-link",{staticClass:"subtitle underline",attrs:{to:t.path}},[t._v(" ❒ ")])],1)]),t._v(" "),n("hr")])}),[],!1,null,"3ef6339e",null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);n(33),n(43),n(44),n(45),n(40),n(64),n(41),n(46),n(17),n(279),n(53),n(11),n(38),n(32),n(91),n(42),n(194),n(47);var r=n(60),l=n(276);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){d=!0,l=t},f:function(){try{o||null==n.return||n.return()}finally{if(d)throw l}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={name:"BlogPostList",components:{BlogPostPreview:n(277).default,PostSearch:l.default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{displayRange:{end:10},selectedTag:"",search:""}},computed:{allTags:function(){var t=[],e={};this.list.map((function(t){if(void 0!==t.tags&&t.tags.length){var n,r=o(t.tags);try{for(r.s();!(n=r.n()).done;){var l=n.value;Object.keys(e).includes(l)?e[l]=e[l]+1:e[l]=1}}catch(t){r.e(t)}finally{r.f()}}}));for(var n=0,l=Object.entries(e);n<l.length;n++){var c=Object(r.a)(l[n],2),d=c[0],h=c[1];t.push({name:d,count:h})}return t},filteredList:function(){var t=this;return this.list.filter((function(e){var n=e.path.includes("/blog/")||e.path.includes("/archive/"),r=new Date(e.date)<=new Date,l=!t.search.length||e.title.toLowerCase().includes(t.search),o=e.tags&&e.tags.includes(t.selectedTag);if((t.selectedTag?n&&r&&o:n&&r)&&l)return e})).sort((function(a,b){return new Date(b.date)-new Date(a.date)}))}},methods:{loadMore:function(){this.displayRange.end+=5},updateSelectedTag:function(t){this.selectedTag=t},updateSearch:function(t){this.search=t}}},h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("h2",{staticClass:"title"},[t._v("::")]),t._v(" "),n("PostSearch",{staticClass:"subtitle mt-2",attrs:{list:t.filteredList},on:{selected:t.updateSearch}}),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title"},[t._v("∴")]),t._v(" "),n("div",{staticClass:"flex flex-wrap"},t._l(t.allTags,(function(e){var r=e.name,l=e.count;return n("a",{key:r,staticClass:"underline tag mr-5",attrs:{href:"#"+r},on:{click:function(e){t.selectedTag===r?t.selectedTag="":t.selectedTag=r}}},[n("span",[t._v(" #"+t._s(r)+" ")]),t._v(" "),t.selectedTag===r?n("span",[t._v("∅")]):n("span",{staticClass:"bg-gray-700 text-gray-100 rounded-full bg-white px-2"},[t._v(t._s(l))])])})),0),t._v(" "),n("hr"),t._v(" "),t.filteredList.length?n("div",[n("ul",{staticClass:"mt-5"},t._l(t.filteredList,(function(e,r){return n("li",{key:"blog-post-"+r},[n("BlogPostPreview",{directives:[{name:"show",rawName:"v-show",value:r<t.displayRange.end,expression:"index < displayRange.end"}],attrs:{desc:e.desc,path:e.path,published:e.date,tags:e.tags,title:e.title},on:{updateSelectedTag:t.updateSelectedTag}})],1)})),0),t._v(" "),t.displayRange.end<=t.filteredList.length?n("div",{staticClass:"flex justify-center"},[n("button",{staticClass:"subtitle underline",attrs:{type:"button"},on:{click:t.loadMore}},[t._v("\n        ➾\n      ")])]):t._e()]):n("div",{staticClass:"mt-10 flex justify-center"},[n("iframe",{staticClass:"giphy-embed",attrs:{src:"https://giphy.com/embed/d8lUKXD00IXSw",width:"480",height:"331",frameBorder:"0",allowFullScreen:""}})])],1)}),[],!1,null,"0ad689e2",null);e.default=component.exports;installComponents(component,{PostSearch:n(276).default,BlogPostPreview:n(277).default})},279:function(t,e,n){var r=n(2),l=n(280).entries;r({target:"Object",stat:!0},{entries:function(t){return l(t)}})},280:function(t,e,n){var r=n(9),l=n(65),o=n(18),c=n(92).f,d=function(t){return function(e){for(var n,d=o(e),h=l(d),f=h.length,i=0,v=[];f>i;)n=h[i++],r&&!c.call(d,n)||v.push(t?[n,d[n]]:d[n]);return v}};t.exports={entries:d(!0),values:d(!1)}},284:function(t,e,n){"use strict";n.r(e);n(41);var r={name:"ArchiveList",props:{list:{type:Array,default:function(){return[]}}},computed:{adaptedPosts:function(){return this.list.map((function(t){return body=(e=t).body,n=e.date,r=void 0===n?Date.now():n,l=e.desc,desc=void 0===l?"":l,o=e.extension,path=e.path,title=e.title,c=e.taxonomy,d=(void 0===c?{}:c).tag||[],{body:body,date:String(r),desc:desc,extension:o,path:path,title:title,tags:d};var e,body,n,r,l,desc,o,path,title,c,d}))}}},l=n(8),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("BlogPostList",{attrs:{list:this.adaptedPosts}})}),[],!1,null,"41be7f7e",null);e.default=component.exports;installComponents(component,{BlogPostList:n(278).default})},304:function(t,e,n){"use strict";n.r(e);n(39);var r=n(6),l={components:{ArchiveList:n(284).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("archive").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()}},o=n(8),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("ArchiveList",{attrs:{list:this.posts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArchiveList:n(284).default})}}]);