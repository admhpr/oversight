(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{296:function(t,e,n){"use strict";n.r(e);n(42);var o={name:"ArchiveList",components:{BlogPostList:n(292).default},props:{list:{type:Array,default:function(){return[]}}},computed:{adaptedPosts:function(){return this.list.map((function(t){return body=(e=t).body,n=e.date,o=void 0===n?Date.now():n,r=e.desc,desc=void 0===r?"":r,d=e.extension,path=e.path,title=e.title,c=e.taxonomy,l=(void 0===c?{}:c).tag||[],{body:body,date:String(o),desc:desc,extension:d,path:path,title:title,tags:l};var e,body,n,o,r,desc,d,path,title,c,l}))}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BlogPostList",{attrs:{list:t.adaptedPosts}})}),[],!1,null,"76fe316a",null);e.default=component.exports}}]);