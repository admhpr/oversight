(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(e,t,n){"use strict";var r=n(98),l=n(27),c=(n(14),n(33),n(74),n(93),n(50),n(236),n(238),n(366),n(31),n(367),n(368),n(369),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(35),n(34),n(52),n(28),n(155),n(53),n(44),n(16),n(51),n(32),n(54),n(55),{name:"PostSearch",props:{list:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Search here..."}},data:function(){return{input:"",currentIndex:0,showSearchItems:!1}},computed:{filteredList:function(){return this.list},search:function(){return this.input.toLowerCase()}},watch:{search:function(){this.$emit("selected",this.search),""===this.search&&(this.currentIndex=0,this.showSearchItems=!1)}},methods:{selectSearchItem:function(e){this.search=e.title.toLowerCase(),this.showSearchItems=!1,this.$emit("selected",this.search)},enter:function(){this.filteredList[this.currentIndex]&&(this.search=this.filteredList[this.currentIndex].title.toLowerCase(),this.showSearchItems=!1)},up:function(){this.currentIndex&&(this.currentIndex=this.currentIndex-1)},down:function(){this.currentIndex+1<this.filteredList.length-1?this.currentIndex=this.currentIndex+1:this.currentIndex=0}}}),o=n(18),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full"},[t("div",{staticClass:"mt-1 flex justify-between rounded-md"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],ref:"searchBox",staticClass:"w-full p-2",attrs:{type:"text",placeholder:"search...","aria-label":"Search"},domProps:{value:e.input},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter.apply(null,arguments)}],input:[function(t){t.target.composing||(e.input=t.target.value)},function(t){e.showSearchItems=!0}]}}),e._v(" "),t("span",{staticClass:"p-2",on:{click:function(t){e.search=""}}},[e._v("∅")])]),e._v(" "),t("div",{staticClass:"w-full"},[e.filteredList.length>0&&e.showSearchItems?t("aside",{staticClass:"z-10 flex justify-between flex-col items-start bg-white border rounded-md shadow-md mt-1",attrs:{role:"menu","aria-labelledby":"menu-heading"}},[t("ul",{staticClass:"flex flex-col w-full"},e._l(e.filteredList,(function(n,r){return t("li",{key:r,staticClass:"px-2 py-3 space-x-2 hover:bg-secondary hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none",class:r===e.currentIndex?"bg-secondary text-white":"",on:{click:function(t){e.selectSearchItem(n)(e.showSearchItems=!1)}}},[e._v("\n          "+e._s(n.title.toLowerCase())+"\n        ")])})),0)]):e._e()])])}),[],!1,null,null,null),d=component.exports,f={name:"BlogPostPreview",props:{published:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},title:{type:String,required:!0},path:{type:String,required:!0},desc:{type:String,required:!0}},computed:{formatPublishDate:function(){return new Date(this.published).toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"})}}},h=Object(o.a)(f,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"w-full min-width-full"},[t("hr",{staticClass:"mb-5"}),e._v(" "),t("time",{staticClass:"mt-5"},[e._v(e._s(e.formatPublishDate))]),e._v(" "),t("article",{staticClass:"p-8"},[t("h2",{staticClass:"title"},[t("nuxt-link",{staticClass:"subtitle underline",attrs:{to:e.path}},[e._v("\n        ‡ "+e._s(e.title.toLowerCase()))])],1),e._v(" "),e.desc?t("p",{staticClass:"mb-10"},[e._v(e._s(e.desc))]):e._e(),e._v(" "),t("div",{staticClass:"flex justify-end"},[t("nuxt-link",{staticClass:"subtitle underline",attrs:{to:e.path}},[e._v(" ❒ ")])],1)])])}),[],!1,null,"b9c547c6",null).exports,m={props:{allTags:{type:Array,default:function(){return[]}},selectedTags:{type:Array,default:function(){return[]}}}},v=Object(o.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex max-w-full flex-wrap"},e._l(e.allTags,(function(n){var r=n.name,l=n.count;return t("a",{key:r,staticClass:"underline tag mr-5",attrs:{href:"#"+r},on:{click:function(t){e.selectedTags.includes(r)?e.$emit("tagRemoved",r):e.$emit("tagSelected",r)}}},[t("span",[e._v(" #"+e._s(r)+" ")]),e._v(" "),e.selectedTags.includes(r)?t("span",[e._v("∅")]):t("span",{staticClass:"bg-gray-700 text-gray-100 rounded-full bg-white px-2"},[e._v(e._s(l))])])})),0)}),[],!1,null,"2d13aad2",null).exports,y={props:{allYears:{type:Array,default:function(){return[]}},selectedYears:{type:Array,default:function(){return[]}}}};function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw l}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var x={name:"BlogPostList",components:{BlogPostPreview:h,PostSearch:d,TagSelect:v,YearSelect:Object(o.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex max-w-full flex-wrap"},e._l(e.allYears,(function(n){return t("a",{key:n,staticClass:"underline tag mr-5",on:{click:function(t){e.selectedYears.includes(n)?e.$emit("yearRemoved",n):e.$emit("yearSelected",n)}}},[t("span",[e._v(" "+e._s(n)+" ")]),e._v(" "),e.selectedYears.includes(n)?t("span",[e._v("∅")]):e._e()])})),0)}),[],!1,null,"0ee20e9b",null).exports},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{displayRange:{end:10},selectedTags:[],selectedYears:[],search:""}},computed:{allTags:function(){var e=this,t=[],n={};this.list.forEach((function(t){if(void 0!==t.tags&&t.tags.length){var r,l=w(t.tags);try{for(l.s();!(r=l.n()).done;){var c=r.value,o=0===e.selectedYears.length||e.selectedYears.includes(new Date(t.date).getFullYear()),d=new Date(t.date)<=new Date;Object.keys(n).includes(c)&&o&&d?n[c]=n[c]+1:d&&o&&(n[c]=1)}}catch(e){l.e(e)}finally{l.f()}}}));for(var r=0,c=Object.entries(n);r<c.length;r++){var o=Object(l.a)(c[r],2),d=o[0],f=o[1];t.push({name:d,count:f})}return t},allYears:function(){return Object(r.a)(new Set(this.filteredList.map((function(e){return new Date(e.date).getFullYear()})).filter((function(e){return e<=(new Date).getFullYear()})))).sort((function(a,b){return b-a}))},filteredList:function(){var e=this;return this.list.filter((function(t){var n=t.path.includes("/blog/")||t.path.includes("/archive/")||t.path.includes("/notes/"),r=new Date(t.date)<=new Date,l=!e.search.length||t.title.toLowerCase().includes(e.search),c=t.tags&&t.tags.filter((function(t){return e.selectedTags.includes(t)})).length===e.selectedTags.length,o=!e.selectedYears.length||e.selectedYears.includes(new Date(t.date).getFullYear()),d=n&&r&&o;if((e.selectedTags.length?d&&c:d)&&l)return t})).sort((function(a,b){return new Date(b.date)-new Date(a.date)}))}},methods:{loadMore:function(){this.displayRange.end+=5},onTagSelected:function(e){this.selectedTags.push(e)},onTagRemoved:function(e){this.selectedTags=this.selectedTags.filter((function(t){return t!==e}))},onYearSelected:function(e){this.selectedYears.push(e)},onYearRemoved:function(e){this.selectedYears=this.selectedYears.filter((function(t){return t!==e}))},updateSearch:function(e){this.search=e}}},C=Object(o.a)(x,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-white mt-5 p-5"},[t("section",{staticClass:"p-5"},[t("h2",{staticClass:"title"},[e._v("::")]),e._v(" "),t("PostSearch",{staticClass:"subtitle mt-2",attrs:{list:e.filteredList},on:{selected:e.updateSearch}}),e._v(" "),t("hr",{staticClass:"mb-2"}),e._v(" "),t("YearSelect",{attrs:{"all-years":e.allYears,"selected-years":e.selectedYears},on:{yearSelected:e.onYearSelected,yearRemoved:e.onYearRemoved}}),e._v(" "),t("h2",{staticClass:"title"},[e._v("∴")]),e._v(" "),t("TagSelect",{attrs:{"all-tags":e.allTags,"selected-tags":e.selectedTags},on:{tagSelected:e.onTagSelected,tagRemoved:e.onTagRemoved}})],1),e._v(" "),e.filteredList.length?t("div",[t("ul",{staticClass:"p-5 mt-5"},e._l(e.filteredList,(function(n,r){return t("li",{key:"blog-post-".concat(r)},[t("BlogPostPreview",{directives:[{name:"show",rawName:"v-show",value:r<e.displayRange.end,expression:"index < displayRange.end"}],attrs:{desc:n.desc,path:n.path,published:n.date,tags:n.tags,title:n.title}})],1)})),0),e._v(" "),e.displayRange.end<=e.filteredList.length?t("div",{staticClass:"flex justify-center"},[t("button",{staticClass:"subtitle underline",attrs:{type:"button"},on:{click:e.loadMore}},[e._v("\n        ➾\n      ")])]):e._e()]):t("div",{staticClass:"mt-10 flex justify-center"},[t("iframe",{staticClass:"giphy-embed",attrs:{src:"https://giphy.com/embed/d8lUKXD00IXSw",height:"330",frameBorder:"0",allowFullScreen:""}})])])}),[],!1,null,"07425f3f",null);t.a=C.exports},418:function(e,t,n){"use strict";n.r(t);var r=n(8),l=(n(43),{components:{BlogPostList:n(364).a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("notes").fetch();case 3:return r=t.sent,t.abrupt("return",{notes:r});case 5:case"end":return t.stop()}}),t)})))()}}),c=l,o=n(18),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("p",{staticClass:"font-mono mt-5 ml-5"},[e._v("For my future self...")]),e._v(" "),t("BlogPostList",{attrs:{list:e.notes}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);