/*! kui-vue v1.9.1 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{AGwT:function(e,t,l){"use strict";l.r(t);var a=l("mNc1"),n=l("f2WU");for(var s in n)"default"!==s&&function(e){l.d(t,e,function(){return n[e]})}(s);var v=l("KHd+"),o=Object(v.a)(n.default,a.a,a.b,!1,null,null,null);o.options.__file="demo.vue",t.default=o.exports},AguX:function(e,t,l){"use strict";l.r(t);var a=l("Wm5e"),n=l("q5M/");for(var s in n)"default"!==s&&function(e){l.d(t,e,function(){return n[e]})}(s);var v=l("KHd+"),o=Object(v.a)(n.default,a.a,a.b,!1,null,null,null);o.options.__file="select.vue",t.default=o.exports},LHuI:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(l("YEIV")),n=o(l("w3Nn")),s=o(l("Ff65")),v=o(l("7+I9"));function o(e){return e&&e.__esModule?e:{default:e}}t.default={directives:{resize:v.default},components:{Code:n.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,a.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},VnO1:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(l("ei+9")),n=s(l("ZNdt"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Demo:n.default},data:function(){return{code:a.default,select:"3",select1:2,select2:2,select3:1,select4:1,data:[{label:"苹果🍎",value:0},{label:"橘子🍊",value:1},{label:"香蕉🍌",value:2},{label:"栗子🌰",value:3},{label:"葡萄🍇",value:4}]}}}},Wm5e:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h2",[e._v("Select 选择器")]),e._v(" "),l("Alert",[e._v("注意：非 template/render 模式下，需使用 k-select")]),e._v(" "),l("h3",[e._v("代码示例")]),e._v(" "),l("Row",{attrs:{gutter:"8"}},[l("Col",{attrs:{span:"12"}},[l("Demo",{attrs:{title:"基础用法"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},e._l(e.data,function(t,a){return l("Option",{key:a,attrs:{value:t.value}},[e._v(e._s(t.label))])})),e._v(" "),l("Button",{on:{click:function(t){e.select=""}}},[e._v("清除")]),e._v(" "),l("Button",{on:{click:function(t){e.select=1}}},[e._v("选中橘子")])],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),l("code",[e._v("v-model")]),e._v("进行数据双向绑定")]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),l("Demo",{attrs:{title:"尺寸"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,value:""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.data,function(t,a){return l("Option",{key:a,attrs:{value:t.value}},[e._v(e._s(t.label))])})),e._v(" "),l("Select",{attrs:{width:200,mini:"",value:""},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}},e._l(e.data,function(t,a){return l("Option",{key:a,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),l("code",[e._v("width")]),e._v("和\n        "),l("code",[e._v("mini")]),e._v("可控制组件尺寸大小")]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.size))])]),e._v(" "),l("Demo",{attrs:{title:"可清除"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,clearable:""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.data,function(e,t){return l("Option",{key:t,attrs:{value:e.value,label:e.label}})})),e._v(" "),l("Select",{attrs:{width:200,clearable:"",mini:""},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}},e._l(e.data,function(e,t){return l("Option",{key:t,attrs:{value:e.value,label:e.label}})}))],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),l("code",[e._v("clearable")]),e._v("可控制组件是否显示清除按钮")]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.clearable))])])],1),e._v(" "),l("Col",{attrs:{span:"12"}},[l("Demo",{attrs:{title:"可搜索"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{width:200,filterable:""},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}},e._l(e.data,function(e,t){return l("Option",{key:t,attrs:{value:e.value,label:e.label}})}))],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),l("code",[e._v("filterable")]),e._v("可设置组件是否呈现搜索模式")]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.search))])]),e._v(" "),l("Demo",{attrs:{title:"禁用"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("Select",{attrs:{disabled:"",width:200}}),e._v(" "),l("Select",{attrs:{width:200},model:{value:e.select4,callback:function(t){e.select4=t},expression:"select4"}},e._l(e.data,function(e,t){return l("Option",{key:t,attrs:{value:e.value,label:e.label,disabled:3==t}})}))],1),e._v(" "),l("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过\n        "),l("code",[e._v("disabled")]),e._v("可设置组件是否被禁用")]),e._v(" "),l("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.disabled))])])],1)],1),e._v(" "),l("h3",[e._v("Select API")]),e._v(" "),e._m(0),e._v(" "),l("h3",[e._v("Option API")]),e._v(" "),e._m(1)],1)},n=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[e._v("属性")]),e._v(" "),l("th",[e._v("说明")]),e._v(" "),l("th",[e._v("类型")]),e._v(" "),l("th",[e._v("默认值")])]),e._v(" "),l("tr",[l("td",[e._v("value")]),e._v(" "),l("td",[e._v("指定选中项目的 value 值，可以使用 v-model 双向绑定数据")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("width")]),e._v(" "),l("td",[e._v("组件宽度")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("placeholder")]),e._v(" "),l("td",[e._v("选择框默认文字")]),e._v(" "),l("td",[e._v("String")]),e._v(" "),l("td",[e._v("请选择")])]),e._v(" "),l("tr",[l("td",[e._v("disabled")]),e._v(" "),l("td",[e._v("是否禁用当前项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("clearable")]),e._v(" "),l("td",[e._v("是否可以清空选项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("change")]),e._v(" "),l("td",[e._v("在选项状态发生改变时触发，返回选择项{value:xx,label:xx}")]),e._v(" "),l("td",[e._v("Function")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("openChange")]),e._v(" "),l("td",[e._v("下拉框展开或收起时触发")]),e._v(" "),l("td",[e._v("Function")]),e._v(" "),l("td",[e._v("true / false")])])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table-border"},[l("table",[l("tr",[l("th",[e._v("属性")]),e._v(" "),l("th",[e._v("说明")]),e._v(" "),l("th",[e._v("类型")]),e._v(" "),l("th",[e._v("默认值")])]),e._v(" "),l("tr",[l("td",[e._v("value")]),e._v(" "),l("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("label")]),e._v(" "),l("td",[e._v("选项显示的内容")]),e._v(" "),l("td",[e._v("String,Number")]),e._v(" "),l("td",[e._v("-")])]),e._v(" "),l("tr",[l("td",[e._v("mini")]),e._v(" "),l("td",[e._v("组件尺寸大小")]),e._v(" "),l("td",[e._v("Boolean ")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("disabled")]),e._v(" "),l("td",[e._v("是否禁用当前项")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])]),e._v(" "),l("tr",[l("td",[e._v("transfer")]),e._v(" "),l("td",[e._v("是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果")]),e._v(" "),l("td",[e._v("Boolean")]),e._v(" "),l("td",[e._v("false")])])])])}];l.d(t,"a",function(){return a}),l.d(t,"b",function(){return n})},ZNdt:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=l("AGwT"),s=(a=n)&&a.__esModule?a:{default:a};t.default=s.default},"ei+9":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={base:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Button @click="select=\'\'">清除</Button>\n<Button @click="select=1">选中橘子</Button>\n<script>\n  export default {\n    data() {\n      return {\n      select: "3",\n      data: [\n        { label: "苹果🍎", value: 0 },\n        { label: "橘子🍊", value: 1 },\n        { label: "香蕉🍌", value: 2 },\n        { label: "栗子🌰", value: 3 },\n        { label: "葡萄🍇", value: 4 }\n      ],\n      };\n    }\n  }\n<\/script>',size:'<Select :width="200" v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<Select :width="200" v-model="select" mini >\n<Option v-for="(x,y) in data" :key="y" :value="x.value">{{x.label}}</Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: ""\n      };\n    }\n  }\n<\/script>',clearable:'<Select :width="200" clearable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<Select :width="200" clearable mini  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: ""\n      };\n    }\n  }\n<\/script>',search:'<Select :width="200" filterable  v-model="select">\n<Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label"></Option>\n</Select>\n<script>\n  export default {\n    data() {\n      return {\n        select: "",\n        data: [\n          { label: "苹果🍎", value: 0 },\n          { label: "橘子🍊", value: 1 },\n          { label: "香蕉🍌", value: 2 },\n          { label: "栗子🌰", value: 3 },\n          { label: "葡萄🍇", value: 4 }\n        ],\n      };\n    }\n  }\n<\/script>',disabled:'<Select disabled :width="200"  v-model="select"></Select>\n<Select :width="200">\n  <Option v-for="(x,y) in data" :key="y" :value="x.value" :label="x.label" :disabled="y==3"></Option>\n</Select>\ndata() {\n  return {\n    select: "3",\n    data: [\n      { label: "苹果🍎", value: 0 },\n      { label: "橘子🍊", value: 1 },\n      { label: "香蕉🍌", value: 2 },\n      { label: "栗子🌰", value: 3 },\n      { label: "葡萄🍇", value: 4 }\n    ],\n  };\n}'};t.default=a},f2WU:function(e,t,l){"use strict";l.r(t);var a=l("LHuI"),n=l.n(a);for(var s in a)"default"!==s&&function(e){l.d(t,e,function(){return a[e]})}(s);t.default=n.a},mNc1:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[l("div",{ref:"demo",staticClass:"k-demo-main"},[l("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),l("div",{staticClass:"k-desc"},[l("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),l("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),l("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[l("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),l("div",{staticClass:"k-demo-line"}),e._v(" "),l("Collapse",[l("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},n=[];l.d(t,"a",function(){return a}),l.d(t,"b",function(){return n})},"q5M/":function(e,t,l){"use strict";l.r(t);var a=l("VnO1"),n=l.n(a);for(var s in a)"default"!==s&&function(e){l.d(t,e,function(){return a[e]})}(s);t.default=n.a}}]);