/*! kui-vue v1.6.0 by chuchur (c) 2018 Licensed ISC */
webpackJsonp([36],{HYTp:function(t,e,r){"use strict";r.d(e,"a",function(){return v}),r.d(e,"b",function(){return o});var v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("ColorPicker 颜色")]),t._v(" "),r("Alert",[t._v("注意：非 template/render 模式下，需使用 color-picker。")]),t._v(" "),r("h3",[t._v("代码示例")]),t._v(" "),r("Demo",{attrs:{title:"基础用法"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("p",[t._v(t._s(t.defaultColor))]),t._v(" "),r("ColorPicker",{model:{value:t.defaultColor,callback:function(e){t.defaultColor=e},expression:"defaultColor"}})],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("数据模型是从offce 颜色组件扒下来的。")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.base))])]),t._v(" "),r("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])]),t._v(" "),r("tr",[r("td",[t._v("value")]),t._v(" "),r("td",[t._v("绑定的值，可使用 v-model 双向绑定")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("'#000000'")])]),t._v(" "),r("tr",[r("td",[t._v("transfer")]),t._v(" "),r("td",[t._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("false")])]),t._v(" "),r("tr",[r("td",[t._v("change")]),t._v(" "),r("td",[t._v("当绑定值变化时触发，返回当前值")]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("-")])])])])}]},JkCL:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{defaultColor:"#eeece1",base:'<ColorPicker v-model="defaultColor"></ColorPicker>'}}}},ekr0:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var v=r("JkCL"),o=r.n(v);for(var _ in v)"default"!==_&&function(t){r.d(e,t,function(){return v[t]})}(_);var l=r("HYTp"),n=r("XyMi"),a=Object(n.a)(o.a,l.a,l.b,!1,null,null,null);e.default=a.exports}});