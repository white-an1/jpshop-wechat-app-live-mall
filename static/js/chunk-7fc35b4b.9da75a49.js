(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fc35b4b"],{"0e56":function(t,e,n){"use strict";var r=n("c6ac"),a=n.n(r);a.a},"2e9f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-app-container"},[n("el-form",{ref:"addform",attrs:{model:t.setData,"label-width":"160px",size:"small"}},[n("div",{staticStyle:{margin:"15px"}}),t._v(" "),n("el-form-item",{attrs:{label:"总佣金"}},[n("el-input",{staticStyle:{width:"20%"},model:{value:t.setData.distribution.total,callback:function(e){t.$set(t.setData.distribution,"total",e)},expression:"setData.distribution.total"}})],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{padding:"8px 30px"},attrs:{type:"primary",size:"small"},on:{click:t.submit}},[t._v("保 存")])],1)],1)},a=[],i=n("df19"),u={name:"partner-setting",data:function(){return{id:0,setData:{key:this.$store.state.app.activeApp.saa_key,distribution:{total:0}}}},mounted:function(){this.getDistributionSetting()},methods:{getDistributionSetting:function(){var t=this;Object(i["d"])({key:this.$store.state.app.activeApp.saa_key}).then((function(e){200===e.status?(t.id=e.data.id,e.data.distribution&&null!==e.data.distribution?t.setData.distribution=e.data.distribution:t.setData.distribution={total:0}):t.$message.error(e.message)}))},submit:function(){var t=this,e=this.setData;e.id=this.id,Object(i["m"])(e).then((function(e){200===e.status?t.$message.success("保存成功！"):t.$message.error(e.message)}))}}},s=u,o=(n("0e56"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"1d1ca978",null);e["default"]=c.exports},c6ac:function(t,e,n){},df19:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"k",(function(){return i})),n.d(e,"o",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"l",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"n",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"h",(function(){return m})),n.d(e,"p",(function(){return b})),n.d(e,"d",(function(){return h})),n.d(e,"m",(function(){return g}));var r=n("b775");function a(t){return Object(r["a"])({url:"/superUsers",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/superUsers",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/superUsers",method:"put",data:t})}function s(t){return Object(r["a"])({url:"/agentUsers",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/agentUsers",method:"post",data:t})}function c(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/agentUsers/"+e,method:"put",data:t})}function d(t){return Object(r["a"])({url:"/operatorUsers",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/operatorUsers",method:"post",data:t})}function f(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/operatorUsers/"+e,method:"put",data:t})}function p(t){return Object(r["a"])({url:"/distributionAccess",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/upUser",method:"get",params:t})}function b(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/upUser/"+e,method:"put",data:t})}function h(t){return Object(r["a"])({url:"/merchantDistribution",method:"get",params:t})}function g(t){var e=t.id;return delete t.id,Object(r["a"])({url:"/merchantDistribution/"+e,method:"put",data:t})}}}]);