(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{365:function(t,e,n){"use strict";n.r(e);var r={name:"BlogPostPreview",props:{published:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},title:{type:String,required:!0},path:{type:String,required:!0},desc:{type:String,required:!0}},computed:{formatPublishDate:function(){return new Date(this.published).toLocaleDateString("en-IE",{year:"numeric",month:"long",day:"numeric"})}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"w-full min-width-full"},[e("hr",{staticClass:"mb-5"}),t._v(" "),e("time",{staticClass:"mt-5"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),e("article",{staticClass:"p-8"},[e("h2",{staticClass:"title"},[e("nuxt-link",{staticClass:"subtitle underline",attrs:{to:t.path}},[t._v("\n        ‡ "+t._s(t.title.toLowerCase()))])],1),t._v(" "),t.desc?e("p",{staticClass:"mb-10"},[t._v(t._s(t.desc))]):t._e(),t._v(" "),e("div",{staticClass:"flex justify-end"},[e("nuxt-link",{staticClass:"subtitle underline",attrs:{to:t.path}},[t._v(" ❒ ")])],1)])])}),[],!1,null,"b9c547c6",null);e.default=component.exports}}]);