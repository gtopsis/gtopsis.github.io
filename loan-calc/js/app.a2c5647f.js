(function(t){function e(e){for(var n,r,i=e[0],o=e[1],u=e[2],m=0,d=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(l.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},l=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1b07":function(t,e,a){t.exports=a.p+"img/spotawheel-logo.b5bc2641.png"},"50cf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],r=(a("034f"),a("2877")),i={},o=Object(r["a"])(i,s,l,!1,null,null,null),u=o.exports,c=a("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container-fluid"},[n("img",{attrs:{width:"100%",alt:"Vue logo",src:a("1b07")}}),n("LoanCalcModal",{attrs:{isShow:""}})],1)},d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modalRef",staticClass:"modal fade",attrs:{tabindex:"-1","aria-hidden":"true"}},[a("div",{staticClass:"loanCalcModal modal-dialog modal-fullscreen-md-down modal-lg modal-dialog-centered modal-dialog-scrollable"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"container-fluid mb-4 px-2 px-md-5"},[a("header",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12"},[a("h5",{staticClass:"modal-title text-center"},[t._v(" "+t._s(t.modalTitle)+" ")])]),a("div",{staticClass:"modal-subtitle col-12"},[a("p",{staticClass:"text-center"},[t._v(t._s(t.modalSubtitle))])])]),a("main",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 mb-4"},[a("custom-range",{attrs:{min:t.sliderA.min,max:t.sliderA.max,label:t.sliderA.label,step:t.sliderA.step,initValue:t.sliderA.initValue,measurementUnit:t.sliderA.measurementUnit},on:{change:t.updateValueA}})],1),a("div",{staticClass:"col-12"},[a("custom-range",{attrs:{min:t.sliderB.min,max:t.sliderB.max,label:t.sliderB.label,step:t.sliderB.step,initValue:t.sliderB.initValue,measurementUnit:t.sliderB.measurementUnit},on:{change:t.updateValueB}})],1)]),a("footer",{staticClass:"loanCalc__monthly-installment row justify-content-center"},[a("div",{staticClass:"col-lg-auto px-0 col-sm-12 text-sm-start text-lg-center"},[a("strong",[a("span",{staticClass:"monthly-installment__secondary"},[t._v(" "+t._s(t.monthlyInstallmentLabel)+" ")]),a("span",{staticClass:"monthly-installment__primary"},[t._v(t._s(t.monthlyInstallment)+"€")])])])])])]),a("div",{staticClass:"modal-footer p-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6"},[a("label",{staticClass:"text-white text-md-start text-sm-center",attrs:{for:"telephone"}},[a("p",{staticClass:"mb-1"},[a("strong",[t._v(t._s(t.telephoneInput.label.sentence1))])]),a("p",{staticClass:"mb-sm-2 mb-md-0"},[a("strong",[t._v(t._s(t.telephoneInput.label.sentence2))])])])]),a("div",{staticClass:"col-12 col-md-6"},[a("form",{staticClass:"needs-validation",on:{submit:t.checkForm}},[a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("📞")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.telephoneInput.value,expression:"telephoneInput.value"}],staticClass:"form-control",attrs:{type:"telephone",id:"telephone",placeholder:t.telephoneInput.placeholder,"aria-label":"Client's telephone",maxlength:"10"},domProps:{value:t.telephoneInput.value},on:{input:function(e){e.target.composing||t.$set(t.telephoneInput,"value",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("input",{staticClass:"btn submit-btn text-white",attrs:{type:"submit"},domProps:{value:t.formattedSubmitBtnText}})])]),t.errors.length?a("div",[a("ul",{staticClass:"mb-0 p-0 text-start"},t._l(t.errors,(function(e,n){return a("li",{key:n},[a("span",{staticClass:"error-msg "},[t._v(t._s(e))])])})),0)]):t._e(),t.isFormValid?a("div",[a("span",{staticClass:"success-msg"},[t._v(" "+t._s(t.successMsg)+" ")])]):t._e()])])])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],h=a("7b17"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"range-container container-fluid px-0"},[a("header",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-auto ps-0 mb-2"},[a("strong",[a("label",{staticClass:"range-container__label mb-0",attrs:{for:"range"}},[t._v(t._s(t.label))])])]),a("div",{staticClass:"col-auto pe-0 text-right"},[a("strong",{staticClass:"range-container__value mb-0"},[a("span",{staticClass:"range-value__primary"},[t._v(" "+t._s(t.formattedCurrValue)+" ")]),a("span",{staticClass:"range-value__secondary"},[t._v(" "+t._s(t.measurementUnit)+" ")])])])]),a("main",{staticClass:"row mb-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currValue,expression:"currValue"}],staticClass:"range-container__slider",attrs:{type:"range",id:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.currValue},on:{change:t.emitValue,__r:function(e){t.currValue=e.target.value}}})]),a("footer",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-auto ps-0"},[a("span",{staticClass:"range-container__min-value text-left"},[t._v(t._s(t.formattedMinValue)+t._s(t.measurementUnit))])]),a("div",{staticClass:"col-auto pe-0"},[a("span",{staticClass:"range-container__max-value text-right"},[t._v(t._s(t.formattedMaxValue)+t._s(t.measurementUnit))])])])])},b=[],_=(a("a9e3"),a("ac1f"),a("5319"),a("d3b7"),a("25f0"),{name:"CustomRange",props:{min:{type:Number,default:0},max:{type:Number,default:0},step:{type:Number,default:1},initValue:{type:Number,default:0},label:{type:String,default:""},measurementUnit:{type:String,default:""}},data:function(){return{currValue:0}},computed:{formattedCurrValue:function(){var t=this.currValue;return this.formatNummericValue(t)},formattedMinValue:function(){var t=this.min;return this.formatNummericValue(t)},formattedMaxValue:function(){var t=this.max;return this.formatNummericValue(t)}},methods:{formatNummericValue:function(t){var e=".";return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1".concat(e))},emitValue:function(t){this.$emit("change",t.target.value)}},mounted:function(){this.currValue=this.initValue}}),g=_,C=(a("770e"),Object(r["a"])(g,v,b,!1,null,"67dac399",null)),x=C.exports,y={name:"LoanCalcModal",components:{CustomRange:x},props:{isShow:{type:Boolean,default:!1}},data:function(){return{modalTitle:"Υπολογισμός Δόσης",modalSubtitle:"Επίλεξε την προκαταβολή και την διαρκεια που σε συμφέρει",monthlyInstallmentLabel:"Μηνιαία Δόση:",dialog:null,finalPrice:2e4,downPayment:200,duration:12,sliderA:{min:0,step:50,max:10700,initValue:4800,label:"Προκαταβολή",measurementUnit:"€"},sliderB:{min:0,max:72,step:1,initValue:72,label:"Διάρκεια",measurementUnit:" μήνες"},telephoneInput:{label:{sentence1:"Συμπλήρωσε εδώ το τηλέφωνό σου.",sentence2:"Θα σε καλέσουμε άμεσα."},placeholder:"Αριθμός τηλεφώνου...",icon:"",value:null},submitBtnText:"ΚΑΛΕΣΤΕ ΜΕ",errors:[],isFormValid:!1,successMsg:"Ευχαριστούμε. Θα σας καλέσουμε άμεσα."}},computed:{monthlyInstallment:function(){var t=(this.finalPrice-this.downPayment)/this.duration;return Math.ceil(t)},formattedSubmitBtnText:function(){return this.submitBtnText.toUpperCase()}},methods:{updateValueA:function(t){this.downPayment=t},updateValueB:function(t){this.duration=t},showModal:function(){this.dialog.show()},checkForm:function(t){this.errors=[],this.isFormValid=!1;var e=this.telephoneInput.value,a=/^\d{10}$/;e?a.test(e)?this.isFormValid=!0:this.errors.push("Το τηλέφωνο πρέπει να αποτελείται από 10 ψηφία"):this.errors.push("Το πεδίο είναι υποχρεωτικό"),t.preventDefault()}},mounted:function(){var t=this.$refs["modalRef"];this.dialog=new h["a"](t,{backdrop:!0}),!0===this.isShow&&this.showModal()}},w=y,V=(a("7433"),Object(r["a"])(w,p,f,!1,null,"f53a5146",null)),M=V.exports,j={name:"Home",components:{LoanCalcModal:M}},O=j,P=(a("6a98"),Object(r["a"])(O,m,d,!1,null,"74713582",null)),S=P.exports;n["a"].use(c["a"]);var B=[{path:"/",name:"CarDetails",component:S}],I=new c["a"]({mode:"history",base:"/",routes:B}),U=I;a("ab8b");n["a"].config.productionTip=!1,new n["a"]({router:U,render:function(t){return t(u)}}).$mount("#app")},"6a98":function(t,e,a){"use strict";a("50cf")},"6dd3":function(t,e,a){},7433:function(t,e,a){"use strict";a("6dd3")},"770e":function(t,e,a){"use strict";a("8372")},8372:function(t,e,a){},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.a2c5647f.js.map