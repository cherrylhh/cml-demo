var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([88],{482:function(t,e,l){l(483),l(484)},483:function(t,e){},484:function(t,e,l){function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=l(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n),a=function t(){u(this,t),this.props={cStyle:{type:String,default:""},cstyle:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},maxlength:{type:Number,default:140},returnKeyType:{type:String,default:"done"},placerHolderColor:{type:String,default:"#666"},rows:{type:Number,default:2}},this.data={},this.computed={wxPlaceHolderStyle:function(){return"color: "+this.placerHolderColor},computedStyle:function(){return this.cStyle||this.cstyle}},this.watch={focus:function(t,e){}},this.methods={inputEvent:function(t){this.$cmlEmit("input",{value:t.detail.value||""}),this.$cmlEmit("inputevent",{value:t.detail.value||""})},blurEvent:function(t){this.$cmlEmit("blur",{value:t.detail.value||""}),this.$cmlEmit("blurevent",{value:t.detail.value||""})},focusEvent:function(t){this.$cmlEmit("focus",{value:t.detail.value||""}),this.$cmlEmit("focusevent",{value:t.detail.value||""})},confirmEvent:function(t){this.$cmlEmit("confirm",{value:t.detail.value||""}),this.$cmlEmit("confirmevent",{value:t.detail.value||""})}}};e.default=new a,e.default=i.default.createComponent(e.default).getOptions()}},[482]);