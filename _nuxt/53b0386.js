(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{283:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("adc8d714",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(283)},290:function(t,e,n){(e=n(22)(!1)).push([t.i,'body{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.title{font-size:1.875rem}.subtitle,.title{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;letter-spacing:1px}.subtitle{font-size:1.5rem}.tag{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;font-size:1.125rem;letter-spacing:1px}.content{margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;max-width:740px}.nuxt-content blockquote{font-style:italic;margin-left:.75rem;padding-left:.75rem;padding-right:.75rem;border-left:2px solid #551ab8}.nuxt-content a{color:#2c3e50;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:600;font-size:1.125rem;text-decoration:underline;letter-spacing:1px}.nuxt-content a[target=_blank]:after{content:"∉"}.nuxt-content h2{color:#2c3e50;font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem;padding-bottom:.75rem;font-size:1.25rem;line-height:1.3}.nuxt-content h2,.nuxt-content li,.nuxt-content p{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.nuxt-content li,.nuxt-content p{line-height:1.7;font-size:16px}@media screen and (min-width:600px){.nuxt-content li,.nuxt-content p{font-size:18px}}.nuxt-content p{margin-bottom:1rem}.nuxt-content ol,.nuxt-content ul{list-style-type:decimal;list-style-position:inside;margin-bottom:1rem}',""]),t.exports=e},307:function(t,e,n){"use strict";n.r(e);n(93),n(38),n(95),n(39);var o=n(6),r={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog/".concat(t.params.slug)).fetch();case 2:return n=e.sent,e.abrupt("return",{page:n});case 4:case"end":return e.stop()}}),e)})))()},computed:{formatPublishDate:function(){var t=new Date(this.page.date),time=this.page.date.split("T")[1];return"".concat(t.toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"}),", ").concat(time)}}},c=(n(289),n(8)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"content"},[n("p",[t._v(t._s(t.formatPublishDate))]),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.page.title.toLowerCase()))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);