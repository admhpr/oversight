(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{296:function(e,t,n){"use strict";n.r(t);n(57),n(135);var r={name:"PostSearch",props:{list:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Search here..."}},data:function(){return{input:"",currentIndex:0,showSearchItems:!1}},computed:{filteredList:function(){return this.list},search:function(){return this.input.toLowerCase()}},watch:{search:function(){this.$emit("selected",this.search),""===this.search&&(this.currentIndex=0,this.showSearchItems=!1)}},methods:{selectSearchItem:function(e){this.search=e.title.toLowerCase(),this.showSearchItems=!1,this.$emit("selected",this.search)},enter:function(){this.filteredList[this.currentIndex]&&(this.search=this.filteredList[this.currentIndex].title.toLowerCase(),this.showSearchItems=!1)},up:function(){this.currentIndex&&(this.currentIndex=this.currentIndex-1)},down:function(){this.currentIndex+1<this.filteredList.length-1?this.currentIndex=this.currentIndex+1:this.currentIndex=0}}},c=n(13),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"mt-1 flex justify-between rounded-md"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],ref:"searchBox",staticClass:"w-full p-2",attrs:{type:"text",placeholder:"search...","aria-label":"Search"},domProps:{value:e.input},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.down(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.up(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter(t)}],input:[function(t){t.target.composing||(e.input=t.target.value)},function(t){e.showSearchItems=!0}]}}),e._v(" "),n("span",{staticClass:"p-2",on:{click:function(t){e.search=""}}},[e._v("∅")])]),e._v(" "),n("div",{staticClass:"w-full"},[e.filteredList.length>0&&e.showSearchItems?n("aside",{staticClass:"z-10 flex justify-between flex-col items-start bg-white border rounded-md shadow-md mt-1",attrs:{role:"menu","aria-labelledby":"menu-heading"}},[n("ul",{staticClass:"flex flex-col w-full"},e._l(e.filteredList,(function(t,r){return n("li",{key:r,staticClass:"px-2 py-3 space-x-2 hover:bg-secondary hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none",class:r===e.currentIndex?"bg-secondary text-white":"",on:{click:function(n){e.selectSearchItem(t)(e.showSearchItems=!1)}}},[e._v("\n          "+e._s(t.title.toLowerCase())+"\n        ")])})),0)]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);