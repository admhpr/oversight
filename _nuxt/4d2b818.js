(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,9],{290:function(t,e,n){"use strict";n.r(e);n(23),n(136),n(74);var r={props:{post:{type:Object,required:!0}},computed:{formatPublishDate:function(){var t=new Date(this.post.date),time=this.post.date.split("T")[1];return"".concat(t.toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"}),", ").concat(time)}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bg-white py-5 px-8 w-screen lg:w-full"},[n("article",[n("p",{staticClass:"my-5"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.post.title.toLowerCase()))]),t._v(" "),n("hr"),t._v(" "),n("nuxt-content",{directives:[{name:"show",rawName:"v-show",value:t.post,expression:"post"}],staticClass:"p-2",attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);n(294);var r={props:{posts:{type:Array,required:!0},currentPostIndex:{type:Number,required:!0}},computed:{postAfter:function(){return 0!==this.currentPostIndex&&this.posts[this.currentPostIndex-1]},postBefore:function(){return this.currentPostIndex!==this.posts.length-1&&this.posts[this.currentPostIndex+1]}}},o=n(12),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-5 flex flex-col sm:flex-row",class:t.postAfter&&t.postBefore?"":"justify-end"},[n("hr"),t._v(" "),t.postAfter?n("nuxt-link",{staticClass:"p-5 navbar-item",attrs:{to:t.postAfter.path}},[n("span",{staticClass:"text-xl"},[t._v("← "+t._s(t.postAfter.title)+" ")])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.postBefore?n("nuxt-link",{staticClass:"ml-auto p-5 navbar-item",attrs:{to:t.postBefore.path}},[n("span",{staticClass:"text-xl"},[t._v(t._s(t.postBefore.title)+" →")])]):t._e()],1)}),[],!1,null,"64af341a",null);e.default=component.exports},293:function(t,e,n){"use strict";var r=n(2),o=n(61).findIndex,c=n(96),l=n(41),f="findIndex",h=!0,d=l(f);f in[]&&Array(1).findIndex((function(){h=!1})),r({target:"Array",proto:!0,forced:h||!d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(f)},294:function(t,e,n){"use strict";var r=n(10),o=n(6),c=n(95),l=n(21),f=n(13),h=n(50),d=n(202),v=n(72),m=n(5),x=n(71),_=n(73).f,I=n(39).f,P=n(15).f,w=n(203).trim,y="Number",N=o.Number,A=N.prototype,C=h(x(A))==y,E=function(t){var e,n,r,o,c,l,f,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=w(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+h}for(l=(c=h.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+h};if(c(y,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(C?m((function(){A.valueOf.call(n)})):h(n)!=y)?d(new N(E(e)),n,O):E(e)},j=r?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),V=0;j.length>V;V++)f(N,T=j[V])&&!f(O,T)&&P(O,T,I(N,T));O.prototype=A,A.constructor=O,l(o,y,O)}},295:function(t,e,n){"use strict";n(293),n(49),n(60),n(38);var r=n(290),o=n(291),c={components:{PostView:r.default,PostPagination:o.default},props:{hasPagination:{type:Boolean,default:!0},post:{type:Object,required:!0},postType:{type:String,required:!0}},data:function(){return{posts:[]}},computed:{currentPostIndex:function(){var t=this;return this.posts.findIndex((function(e){return t.post.path===e.path}))}},created:function(){var t={blog:this.$blogPosts,archive:this.$archivedPosts,notes:this.$notesPosts};this.posts=Object.keys(t).includes(this.postType)?t[this.postType]:this.$blogPosts}},l=n(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("PostView",{attrs:{post:t.post}}),t._v(" "),n("PostPagination",{directives:[{name:"show",rawName:"v-show",value:t.hasPagination,expression:"hasPagination"}],attrs:{posts:t.posts,"current-post-index":t.currentPostIndex}})],1)}),[],!1,null,"e2e0216e",null);e.a=component.exports;installComponents(component,{PostView:n(290).default,PostPagination:n(291).default})},357:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(36),n(295)),c="archive",l={components:{PostViewContainer:o.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("".concat(c,"/").concat(t.params.slug)).fetch();case 2:return n=e.sent,e.abrupt("return",{post:n});case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{postType:c}}},f=n(12),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostViewContainer",{attrs:{post:t.post,"post-type":t.postType}})}),[],!1,null,null,null);e.default=component.exports}}]);