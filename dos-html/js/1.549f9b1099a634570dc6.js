webpackJsonp([1],{388:function(t,i,n){var e=n(0),o=n(448),l=n(450),c=e(o,l,!1,null,null,null);t.exports=c.exports},448:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{nav:[{title:"开始",child:[{title:"安装",link:"/install"},{title:"快速上手",link:"/start"},{title:"更新日志",link:"/log"},{title:"kyui-loader",link:"/kyui-loader"}]},{title:"基础组件",child:[{title:"图标",sub:"Icon",link:"/icon",icon:"heart"},{title:"按钮",sub:"Button",link:"/button",icon:"stop"},{title:"输入框",sub:"Input",link:"/input",icon:"ios-compose"},{title:"多选框",sub:"Checkbox",link:"/checkbox",icon:"android-checkbox"},{title:"单选框",sub:"Radio",link:"/radio",icon:"android-radio-button-on"},{title:"开关",sub:"Switch",link:"/switch",icon:"ios-toggle"},{title:"下拉框",sub:"Select",link:"/select",icon:"chevron-down"},{title:"布局",sub:"Layout",link:"/layout",icon:"social-buffer"},{title:"日期",sub:"datePicker",link:"/datepicker",icon:"ios-calendar-outline"},{title:"表格",sub:"Table",link:"/table",icon:"ios-grid-view"},{title:"分页",sub:"Page",link:"/page",icon:"ios-skipforward"},{title:"对话框",sub:"Modal",link:"/modal",icon:"ios-browsers"},{title:"颜色",sub:"ColorPicker",link:"/colorpicker",icon:"android-color-palette"},{title:"表单",sub:"Form",link:"/form",icon:"ios-list"}]},{title:"其他",child:[{title:"github",weblink:"https://github.com/chuchur/kui",icon:"social-github"},{title:"支持作者",link:"/sponsor",icon:"social-usd"},{title:"关于",link:"/index",icon:"android-happy"}]}],logo:n(449)}},methods:{},created:function(){console.log(this.$route.path),this.nav.forEach(function(t){return t.child.forEach(function(t){return t.selected=!1})})}}},449:function(t,i,n){t.exports=n.p+"img/logo.png?65b281a"},450:function(t,i){var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("section",{staticClass:"body"},[n("header",[n("img",{attrs:{src:t.logo}}),t._v("VUE KUI 使用文档\n  ")]),n("section",{staticClass:"main"},[n("Row",[n("Col",{attrs:{span:"4"}},[n("nav",{staticClass:"nav"},[n("menu",t._l(t.nav,function(i,e){return n("li",{key:e},[n("em"),n("h5",[t._v(t._s(i.title))]),t._l(i.child,function(i,e){return n("a",{key:e,class:{active:t.$route.path==i.link},attrs:{href:i.weblink||"#"+i.link,target:i.weblink?"_blank":""}},[i.icon?n("Icon",{attrs:{type:i.icon}}):t._e(),t._v("\n              "+t._s(i.title)+"\n              "),n("span",[t._v(t._s(i.sub))])],1)})],2)}))])]),n("Col",{attrs:{span:"20"}},[n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)])],1)],1),t._m(0,!1,!1)])},e=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("footer",[n("p",[t._v("Copyright ©2009-2018\n      "),n("a",{attrs:{href:"http://www.chuchur.com"}},[t._v("禅境花园")]),t._v(" by chuchur 粤ICP备17111365号 ")])])}];t.exports={render:n,staticRenderFns:e}}});