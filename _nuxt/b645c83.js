(window.webpackJsonp=window.webpackJsonp||[]).push([[0,3,8,10,11],{285:function(t,e,r){var n=r(27),o=r(202);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},292:function(t,e,r){"use strict";r.r(e);var n=r(88),o=r(20),l=(r(29),r(48),r(59),r(37),r(205),r(12),r(299),r(22),r(303),r(305),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(24),r(30),r(42),r(57),r(134),r(43),r(17),r(44),r(28),r(45),r(46),r(293)),c=r(294),f=r(297),d=r(298);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var y={name:"BlogPostList",components:{BlogPostPreview:c.default,PostSearch:l.default,TagSelect:f.default,YearSelect:d.default},props:{list:{type:Array,default:function(){return[]}}},data:function(){return{displayRange:{end:10},selectedTags:[],selectedYears:[],search:""}},computed:{allTags:function(){var t=this,e=[],r={};this.list.forEach((function(e){if(void 0!==e.tags&&e.tags.length){var n,o=h(e.tags);try{for(o.s();!(n=o.n()).done;){var l=n.value,c=0===t.selectedYears.length||t.selectedYears.includes(new Date(e.date).getFullYear()),f=new Date(e.date)<=new Date;Object.keys(r).includes(l)&&c&&f?r[l]=r[l]+1:f&&c&&(r[l]=1)}}catch(t){o.e(t)}finally{o.f()}}}));for(var n=0,l=Object.entries(r);n<l.length;n++){var c=Object(o.a)(l[n],2),f=c[0],d=c[1];e.push({name:f,count:d})}return e},allYears:function(){return Object(n.a)(new Set(this.filteredList.map((function(t){return new Date(t.date).getFullYear()})).filter((function(t){return t<=(new Date).getFullYear()})))).sort((function(a,b){return b-a}))},filteredList:function(){var t=this;return this.list.filter((function(e){var r=e.path.includes("/blog/")||e.path.includes("/archive/")||e.path.includes("/notes/"),n=new Date(e.date)<=new Date,o=!t.search.length||e.title.toLowerCase().includes(t.search),l=e.tags&&e.tags.filter((function(e){return t.selectedTags.includes(e)})).length===t.selectedTags.length,c=!t.selectedYears.length||t.selectedYears.includes(new Date(e.date).getFullYear()),f=r&&n&&c;if((t.selectedTags.length?f&&l:f)&&o)return e})).sort((function(a,b){return new Date(b.date)-new Date(a.date)}))}},methods:{loadMore:function(){this.displayRange.end+=5},onTagSelected:function(t){this.selectedTags.push(t)},onTagRemoved:function(t){this.selectedTags=this.selectedTags.filter((function(e){return e!==t}))},onYearSelected:function(t){this.selectedYears.push(t)},onYearRemoved:function(t){this.selectedYears=this.selectedYears.filter((function(e){return e!==t}))},updateSearch:function(t){this.search=t}}},m=r(13),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white mt-5 p-5"},[r("section",{staticClass:"p-5"},[r("h2",{staticClass:"title"},[t._v("::")]),t._v(" "),r("PostSearch",{staticClass:"subtitle mt-2",attrs:{list:t.filteredList},on:{selected:t.updateSearch}}),t._v(" "),r("hr",{staticClass:"mb-2"}),t._v(" "),r("YearSelect",{attrs:{"all-years":t.allYears,"selected-years":t.selectedYears},on:{yearSelected:t.onYearSelected,yearRemoved:t.onYearRemoved}}),t._v(" "),r("h2",{staticClass:"title"},[t._v("∴")]),t._v(" "),r("TagSelect",{attrs:{"all-tags":t.allTags,"selected-tags":t.selectedTags},on:{tagSelected:t.onTagSelected,tagRemoved:t.onTagRemoved}})],1),t._v(" "),t.filteredList.length?r("div",[r("ul",{staticClass:"p-5 mt-5"},t._l(t.filteredList,(function(e,n){return r("li",{key:"blog-post-"+n},[r("BlogPostPreview",{directives:[{name:"show",rawName:"v-show",value:n<t.displayRange.end,expression:"index < displayRange.end"}],attrs:{desc:e.desc,path:e.path,published:e.date,tags:e.tags,title:e.title}})],1)})),0),t._v(" "),t.displayRange.end<=t.filteredList.length?r("div",{staticClass:"flex justify-center"},[r("button",{staticClass:"subtitle underline",attrs:{type:"button"},on:{click:t.loadMore}},[t._v("\n        ➾\n      ")])]):t._e()]):r("div",{staticClass:"mt-10 flex justify-center"},[r("iframe",{staticClass:"giphy-embed",attrs:{src:"https://giphy.com/embed/d8lUKXD00IXSw",height:"330",frameBorder:"0",allowFullScreen:""}})])])}),[],!1,null,"07425f3f",null);e.default=component.exports;installComponents(component,{PostSearch:r(293).default,BlogPostPreview:r(294).default})},293:function(t,e,r){"use strict";r.r(e);r(57),r(134);var n={name:"PostSearch",props:{list:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Search here..."}},data:function(){return{search:"",currentIndex:0,showSearchItems:!1}},computed:{filteredList:function(){return this.list}},watch:{search:function(t){this.$emit("selected",this.search),""===this.search&&(this.currentIndex=0,this.showSearchItems=!1)}},methods:{selectSearchItem:function(t){this.search=t.title.toLowerCase(),this.showSearchItems=!1,this.$emit("selected",this.search)},enter:function(){this.filteredList[this.currentIndex]&&(this.search=this.filteredList[this.currentIndex].title.toLowerCase(),this.showSearchItems=!1)},up:function(){this.currentIndex&&(this.currentIndex=this.currentIndex-1)},down:function(){this.currentIndex+1<this.filteredList.length-1?this.currentIndex=this.currentIndex+1:this.currentIndex=0}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{staticClass:"mt-1 flex justify-between rounded-md"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"searchBox",staticClass:"w-full",attrs:{type:"text",placeholder:"search...","aria-label":"Search"},domProps:{value:t.search},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enter(e)}],input:[function(e){e.target.composing||(t.search=e.target.value)},function(e){t.showSearchItems=!0}]}}),t._v(" "),r("span",{on:{click:function(e){t.search=""}}},[t._v("∅")])]),t._v(" "),r("div",{staticClass:"w-full"},[t.filteredList.length>0&&t.showSearchItems?r("aside",{staticClass:"z-10 flex justify-between flex-col items-start bg-white border rounded-md shadow-md mt-1",attrs:{role:"menu","aria-labelledby":"menu-heading"}},[r("ul",{staticClass:"flex flex-col w-full"},t._l(t.filteredList,(function(e,n){return r("li",{key:n,staticClass:"px-2 py-3 space-x-2 hover:bg-secondary hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none",class:n===t.currentIndex?"bg-secondary text-white":"",on:{click:function(r){t.selectSearchItem(e),t.showSearchItems=!1}}},[t._v("\n          "+t._s(e.title.toLowerCase())+"\n        ")])})),0)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var n={name:"BlogPostPreview",props:{published:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},title:{type:String,required:!0},path:{type:String,required:!0},desc:{type:String,required:!0}},computed:{formatPublishDate:function(){return new Date(this.published).toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"})}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full min-width-full"},[r("hr",{staticClass:"mb-5"}),t._v(" "),r("time",{staticClass:"mt-5"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),r("article",{staticClass:"p-8"},[r("h2",{staticClass:"title"},[r("nuxt-link",{staticClass:"subtitle underline",attrs:{to:t.path}},[t._v("\n        ‡ "+t._s(t.title.toLowerCase()))])],1),t._v(" "),t.desc?r("p",{staticClass:"mb-10"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),r("div",{staticClass:"flex justify-end"},[r("nuxt-link",{staticClass:"subtitle underline",attrs:{to:t.path}},[t._v(" ❒ ")])],1)])])}),[],!1,null,"b9c547c6",null);e.default=component.exports},295:function(t,e,r){var n=r(74),o=r(11),l=r(10),c=r(15).f,f=r(96),d=r(301),h=f("meta"),v=0,y=Object.isExtensible||function(){return!0},m=function(t){c(t,h,{value:{objectID:"O"+ ++v,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,h)){if(!y(t))return"F";if(!e)return"E";m(t)}return t[h].objectID},getWeakData:function(t,e){if(!l(t,h)){if(!y(t))return!0;if(!e)return!1;m(t)}return t[h].weakData},onFreeze:function(t){return d&&meta.REQUIRED&&y(t)&&!l(t,h)&&m(t),t}};n[h]=!0},297:function(t,e,r){"use strict";r.r(e);var n={props:{allTags:{type:Array,default:function(){return[]}},selectedTags:{type:Array,default:function(){return[]}}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex max-w-full flex-wrap"},t._l(t.allTags,(function(e){var n=e.name,o=e.count;return r("a",{key:n,staticClass:"underline tag mr-5",attrs:{href:"#"+n},on:{click:function(e){t.selectedTags.includes(n)?t.$emit("tagRemoved",n):t.$emit("tagSelected",n)}}},[r("span",[t._v(" #"+t._s(n)+" ")]),t._v(" "),t.selectedTags.includes(n)?r("span",[t._v("∅")]):r("span",{staticClass:"bg-gray-700 text-gray-100 rounded-full bg-white px-2"},[t._v(t._s(o))])])})),0)}),[],!1,null,"2d13aad2",null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var n={props:{allYears:{type:Array,default:function(){return[]}},selectedYears:{type:Array,default:function(){return[]}}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex max-w-full flex-wrap"},t._l(t.allYears,(function(e){return r("a",{key:e,staticClass:"underline tag mr-5",on:{click:function(r){t.selectedYears.includes(e)?t.$emit("yearRemoved",e):t.$emit("yearSelected",e)}}},[r("span",[t._v(" "+t._s(e)+" ")]),t._v(" "),t.selectedYears.includes(e)?r("span",[t._v("∅")]):t._e()])})),0)}),[],!1,null,"0ee20e9b",null);e.default=component.exports},299:function(t,e,r){"use strict";var n=r(300),o=r(302);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},300:function(t,e,r){"use strict";var n=r(2),o=r(5),l=r(92),c=r(16),f=r(295),d=r(200),h=r(94),v=r(11),y=r(6),m=r(135),w=r(50),S=r(201);t.exports=function(t,e,r){var x=-1!==t.indexOf("Map"),_=-1!==t.indexOf("Weak"),I=x?"set":"add",T=o[t],R=T&&T.prototype,E=T,C={},k=function(t){var e=R[t];c(R,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(_&&!v(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!v(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!v(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(l(t,"function"!=typeof T||!(_||R.forEach&&!y((function(){(new T).entries().next()})))))E=r.getConstructor(e,t,x,I),f.REQUIRED=!0;else if(l(t,!0)){var D=new E,O=D[I](_?{}:-0,1)!=D,A=y((function(){D.has(1)})),Y=m((function(t){new T(t)})),j=!_&&y((function(){for(var t=new T,e=5;e--;)t[I](e,e);return!t.has(-0)}));Y||((E=e((function(e,r){h(e,E,t);var n=S(new T,e,E);return null!=r&&d(r,n[I],{that:n,AS_ENTRIES:x}),n}))).prototype=R,R.constructor=E),(A||j)&&(k("delete"),k("has"),x&&k("get")),(j||O)&&k(I),_&&R.clear&&delete R.clear}return C[t]=E,n({global:!0,forced:E!=T},C),w(E,t),_||r.setStrong(E,t,x),E}},301:function(t,e,r){var n=r(6);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},302:function(t,e,r){"use strict";var n=r(15).f,o=r(69),l=r(137),c=r(58),f=r(94),d=r(200),h=r(136),v=r(138),y=r(8),m=r(295).fastKey,w=r(39),S=w.set,x=w.getterFor;t.exports={getConstructor:function(t,e,r,h){var v=t((function(t,n){f(t,v,e),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[h],{that:t,AS_ENTRIES:r})})),w=x(e),_=function(t,e,r){var n,o,l=w(t),c=I(t,e);return c?c.value=r:(l.last=c={index:o=m(e,!0),key:e,value:r,previous:n=l.last,next:void 0,removed:!1},l.first||(l.first=c),n&&(n.next=c),y?l.size++:t.size++,"F"!==o&&(l.index[o]=c)),t},I=function(t,e){var r,n=w(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return l(v.prototype,{clear:function(){for(var t=w(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,r=w(e),n=I(e,t);if(n){var o=n.next,l=n.previous;delete r.index[n.index],n.removed=!0,l&&(l.next=o),o&&(o.previous=l),r.first==n&&(r.first=o),r.last==n&&(r.last=l),y?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=w(this),n=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!I(this,t)}}),l(v.prototype,r?{get:function(t){var e=I(this,t);return e&&e.value},set:function(t,e){return _(this,0===t?0:t,e)}}:{add:function(t){return _(this,t=0===t?0:t,t)}}),y&&n(v.prototype,"size",{get:function(){return w(this).size}}),v},setStrong:function(t,e,r){var n=e+" Iterator",o=x(e),l=x(n);h(t,e,(function(t,e){S(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),v(e)}}},303:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(304);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return l.apply(this,arguments)}})},304:function(t,e,r){"use strict";var n=r(7),o=r(68);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,l=arguments.length;r<l;r++)e.call(t,arguments[r]);return t}},305:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(306);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return l.apply(this,arguments)}})},306:function(t,e,r){"use strict";var n=r(7),o=r(68);t.exports=function(){for(var t,e=n(this),r=o(e.delete),l=!0,c=0,f=arguments.length;c<f;c++)t=r.call(e,arguments[c]),l=l&&t;return!!l}},307:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(91),h=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=c(this),r=new(d(e,l("Set")))(e),n=f(r.delete);return h(t,(function(t){n.call(r,t)})),r}})},308:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(58),f=r(285),d=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=l(this),r=f(e),n=c(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},309:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(58),h=r(91),v=r(285),y=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=c(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,l("Set"))),m=f(o.add);return y(r,(function(t){n(t,t,e)&&m.call(o,t)}),{IS_ITERATOR:!0}),o}})},310:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(58),f=r(285),d=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=l(this),r=f(e),n=c(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},311:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(91),h=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=c(this),r=new(d(e,l("Set"))),n=f(e.has),o=f(r.add);return h(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},312:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(68),f=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},313:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(202),h=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=c(t),n=r.has;return"function"!=typeof n&&(r=new(l("Set"))(t),n=f(r.has)),!h(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},314:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(68),f=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},315:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(285),f=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=l(this),r=c(e),n=void 0===t?",":String(t),o=[];return f(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},316:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(58),h=r(91),v=r(285),y=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=c(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(h(e,l("Set"))),m=f(o.add);return y(r,(function(t){m.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},317:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(68),f=r(285),d=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=l(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(c(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},318:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(7),c=r(58),f=r(285),d=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=l(this),r=f(e),n=c(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},319:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(91),h=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=c(this),r=new(d(e,l("Set")))(e),n=f(r.delete),o=f(r.add);return h(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},320:function(t,e,r){"use strict";var n=r(2),o=r(27),l=r(36),c=r(7),f=r(68),d=r(91),h=r(200);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=c(this),r=new(d(e,l("Set")))(e);return h(t,f(r.add),{that:r}),r}})}}]);