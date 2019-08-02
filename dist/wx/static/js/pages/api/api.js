var __CML__GLOBAL=require("../../manifest.js");__CML__GLOBAL.webpackJsonp([6],{162:function(t,e,a){a(163),a(164)},163:function(t,e){},164:function(t,e,a){function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),s=a(2),l=o(s),r=a(165),c=o(r),u=a(0),f=o(u),d=function(){function t(){i(this,t),this.data={iconApiUri:a(19),cells:[{title:"启动参数",iconUri:a(3),list:[{method:"getLaunchOptionsSync",url:"",title:"获取启动参数"}]},{title:"CanIUse",iconUri:a(3),list:[{method:"canIUse",url:"",title:"CanIUse:showToast",extraData:{apiName:"showToast"}},{method:"canIUse",url:"",title:"CanIUse:showAnyToast",extraData:{apiName:"showAnyToast"}}]},{title:"设置页面标题",iconUri:a(3),list:[{title:"设置标题为: 自定义标题",method:"setTitle",extraData:{title:"自定义标题"}}]},{title:"交互反馈",iconUri:a(3),list:[{title:"toast 弹框",method:"showUx",extraData:{uX:"showToast",message:"toast 弹框"}},{title:"alert 弹框",method:"showUx",extraData:{uX:"alert",message:"alert 弹框"}},{title:"confirm 弹框",method:"showUx",extraData:{uX:"confirm",message:"confirm 弹框"}}]},{title:"选取照片",iconUri:a(3),list:[{title:"从相机获取",method:"chooseImage",extraData:{type:"camera"}},{title:"从相册获取",method:"chooseImage",extraData:{type:"album"}},{title:"菜单选择",method:"chooseImage",extraData:{type:"choice"}}]},{title:"路由导航",iconUri:a(3),list:[{title:"cml.navigateTo",method:"navigateTo"},{title:"cml.redirectTo",method:"redirectTo"}]},{title:"网络请求",iconUri:a(3),list:[{title:"cml.get 请求",method:"request",extraData:{method:"get"}},{title:"cml.post 请求",method:"request",extraData:{method:"post"}},{title:"cml.request 发起 put 请求",method:"request",extraData:{method:"request"}}]},{title:"WebSocket",iconUri:a(3),list:[{title:"查看 WebSocket 展示",method:"webSocket"}]},{title:"数据存储",iconUri:a(3),list:[{title:'存储 name: "ironman"',method:"storage",extraData:{action:"set"}},{title:"获取 name 值",method:"storage",extraData:{action:"get"}},{title:"删除 name 值",method:"storage",extraData:{action:"remove"}}]},{title:"地理位置",iconUri:a(3),list:[{title:"获取地理位置",method:"getGeo"}]},{title:"系统信息",iconUri:a(3),list:[{title:"获取系统信息",method:"getSystemInfo"}]},{title:"单位转换",iconUri:a(3),list:[{title:"px 转 cpx",method:"px2cpx"},{title:"cpx 转 px",method:"cpx2px"}]},{title:"剪贴板",iconUri:a(3),list:[{title:"设置剪贴板为 AA",method:"clipBoard",extraData:{action:"set",text:"AA"}},{title:"获取剪贴内容",method:"clipBoard",extraData:{action:"get"}}]},{title:"元素属性",iconUri:a(3),list:[{title:"获取页面顶部API文本的属性",method:"getRect"}]},{title:"动画",iconUri:a(3),list:[{title:"查看动画展示",method:"goAnimation"}]}]},this.methods={cellItemSeleted:function(t){var e=t.detail,a=e.method,o=e.extraData;this[a]&&this[a](o)},getLaunchOptionsSync:function(){var t=l.default.getLaunchOptionsSync();l.default.showToast({message:JSON.stringify(t)})},openNewBeatlesPage:function(){},callNativeLogin:function(){},onLoginChange:function(){},canIUse:function(t){var e=t.apiName,a=void 0===e?"":e;l.default.canIUse(a).then(function(t){l.default.showToast({message:["当前版本支持",a].join(" ")})},function(t){l.default.showToast({message:["当前版本不支持",a].join(" ")})})},setTitle:function(t){var e=t.title,a=void 0===e?"":e;l.default.setTitle(a)},showUx:function(t){var e=t.uX,a=void 0===e?"":e,o=t.message,i=void 0===o?"":o;"showToast"===a&&l.default.showToast({message:i}),"alert"===a&&l.default.alert({message:i,confirmTitle:"好的"}),"confirm"===a&&l.default.confirm({message:i})},chooseImage:function(t){var e=t.type,a=void 0===e?"":e;l.default.navigateTo({path:"/pages/api/sub-pages/chooseImage",query:{type:a}})},getGeo:function(){l.default.getLocationInfo().then(function(t){l.default.showToast({message:JSON.stringify(t)})}).catch(function(t){l.default.showToast({message:t.message})})},getSystemInfo:function(){l.default.getSystemInfo().then(function(t){l.default.showToast({message:JSON.stringify(t),duration:2e3})})},px2cpx:function(){l.default.showToast({message:["1px 合 ",l.default.px2cpx(1),"cpx"].join("")})},cpx2px:function(){l.default.showToast({message:["1cpx 合 ",l.default.cpx2px(1),"px"].join("")})},clipBoard:function(t){var e=t.action,a=void 0===e?"":e;t.text;"get"===a?l.default.getClipBoardData().then(function(t){l.default.showToast({message:JSON.stringify(t)})}):l.default.setClipBoardData("AA").then(function(t){l.default.showToast({message:"剪贴板内容已设置为:AA"})})},storage:function(t){var e=t.action,a=void 0===e?"":e;"set"===a&&l.default.setStorage("name","ironman").then(function(t){l.default.showToast({message:"name 已设置为 ironman"})}),"get"===a&&l.default.getStorage("name").then(function(t){l.default.showToast({message:t})},function(t){l.default.showToast({message:t.message||"name 值已不存在"})}),"remove"===a&&l.default.removeStorage("name").then(function(t){l.default.showToast({message:"name 值已删除"})})},getRect:function(){l.default.getRect("titleText",this).then(function(t){l.default.showToast({message:JSON.stringify(t)})})},goAnimation:function(){l.default.navigateTo({path:"/pages/api/sub-pages/animation"})},request:function(t){var e=t.method,a=void 0===e?"":e;l.default.navigateTo({path:"/pages/api/sub-pages/request",query:{method:a}})},webSocket:function(){l.default.navigateTo({path:"/pages/api/sub-pages/webSocket"})},navigateTo:function(){l.default.navigateTo({path:"/pages/api/sub-pages/navigate",query:{method:"navigateTo"}})},redirectTo:function(){l.default.redirectTo({path:"/pages/api/sub-pages/navigate",query:{method:"redirectTo"}})}}}return n(t,[{key:"created",value:function(){var t=c.default.getUnsupportApis();this.cells=this.cells.filter(function(e){return!~t.indexOf(e.title)})}}]),t}();e.default=new d,e.default=f.default.createPage(e.default).getOptions()},165:function(t,e,a){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),n=function(){function t(){o(this,t)}return i(t,[{key:"getUnsupportApis",value:function(){return[]}}]),t}();e.default=new n,a(1)(e.default)},3:function(t,e,a){t.exports=a.p+"static/img/icon-default_aeb0517.png"}},[162]);