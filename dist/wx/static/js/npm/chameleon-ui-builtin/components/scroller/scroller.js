var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([90],{476:function(t,e,r){r(477),r(478)},477:function(t,e){},478:function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var l=e[o](i),c=l.value}catch(t){return void r(t)}if(!l.done)return Promise.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=r(42),c=n(l),u=r(43),a=n(u),s=r(20),f=n(s),h=r(8),d=n(h),p=r(41),m=n(p),y=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),w=r(0),v=n(w),b=function(){function t(){i(this,t),this.props={cstyle:{type:String,default:""},bottomOffset:{type:Number,default:0},scrollDirection:{type:String,default:"vertical"},bounce:{type:Boolean,default:!0},height:{type:Number,default:0},width:{type:Number,default:0},scrollTop:{type:Number,default:0},scrollLeft:{type:Number,default:0}},this.data={cmtStyle:"",scrollTopPx:0,scrollLeftPx:0},this.computed={wrapperStyle:function(){if("vertical"===this.scrollDirection){if(this.height>=0)return this.cstyle+";height:"+this.height+"rpx;"}else if(this.width>=0)return this.cstyle+";width:"+this.width+"rpx;white-space:nowrap;";return this.cmtStyle+this.cstyle}},this.watch={scrollTop:function(t){this.scrollTopPx=(0,m.default)(t)},scrollLeft:function(t){this.scrollLeftPx=(0,m.default)(t)}},this.methods={onScroll:function(t){var e=t.detail;e.deltaX=e.deltaX||0,e.deltaY=e.deltaY||0,Object.keys(e).forEach(function(t){e[t]=(0,d.default)(e[t])}),this.$cmlEmit("onscroll",e),this.$cmlEmit("customscroll",e)},onBottom:function(t){this.$cmlEmit("scrolltobottom",t.detail)}}}return y(t,[{key:"mounted",value:function(){var t=this;setTimeout(o(c.default.mark(function e(){var r,n,o,i;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("vertical"!==t.scrollDirection||t.height){e.next=3;break}return console.error("纵向滚动必须传递高度属性"),e.abrupt("return");case 3:if("vertical"===t.scrollDirection||t.width){e.next=6;break}return console.error("横向滚动必须传递宽度属性"),e.abrupt("return");case 6:if(-1!==t.height&&-1!==t.width){e.next=14;break}return e.next=9,(0,f.default)("c-scroller",t);case 9:return r=e.sent,e.next=12,(0,a.default)();case 12:n=e.sent,"vertical"===t.scrollDirection?(o=n.viewportHeight-r.top,t.cmtStyle="height:"+o+"cpx;"):(i=n.viewportWidth-r.left,t.cmtStyle="width:"+i+"cpx;white-space:nowrap;");case 14:t.scrollLeftPx=(0,m.default)(t.scrollLeft),t.scrollTopPx=(0,m.default)(t.scrollTop);case 16:case"end":return e.stop()}},e,t)})),200)}}]),t}();e.default=new b,e.default=v.default.createComponent(e.default).getOptions()}},[476]);