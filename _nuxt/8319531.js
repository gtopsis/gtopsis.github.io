(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{448:function(t,e,n){var content=n(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0a4d3a99",content,!0,{sourceMap:!1})},459:function(t,e,n){"use strict";n(448)},460:function(t,e,n){var r=n(22)(!1);r.push([t.i,"\n.firm-link[data-v-03e328ca] {\n  text-decoration: none;\n}\n.firm-logo[data-v-03e328ca] {\n  width: 45px;\n  height: 45px;\n  cursor: pointer;\n}\n.timeline-item-title[data-v-03e328ca] {\n  font-size: 1.1rem;\n}\n",""]),t.exports=r},469:function(t,e,n){"use strict";n.r(e);var r=n(486),o=n(463),c=n(442),l=n(432),d=n(441),v=n(279),f=n(431),_=n(485),m=n(489),h=n(438),x=(n(189),n(13),n(59),n(48),{props:{content:{type:String,default:"experience",validator:function(t){return["experience","education"].includes(t)}}},data:function(){return{avatarSize:40}},computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.smAndDown},timelineTitle:function(){return"experience"==this.content?"Experience":"education"==this.content?"Education":"My Story"},timelineItems:function(){return"experience"==this.content?this.$store.state.experience.jobs:"education"==this.content&&this.$store.state.education.studies||[]}},methods:{hasTimelineItemDetails:function(t){return t.description&&""!=t},navigateToCompany:function(t){if(t&&""!=t){var e=t;window.open(e,"_blank")}}}}),y=(n(459),n(62)),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{fluid:""}},[e(f.a,{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[e(l.a,{staticClass:"mb-3",attrs:{cols:"auto"}},[e("h1",[t._v(t._s(t.timelineTitle))])])],1),t._v(" "),e(f.a,{attrs:{align:"center",justify:"center"}},[e(l.a,{staticClass:"px-0",attrs:{cols:"12"}},[e(_.a,{attrs:{dense:""}},t._l(t.timelineItems,(function(n,i){return e(m.a,{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[e(h.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on,l=o.attrs;return[e(r.a,t._g(t._b({attrs:{size:t.avatarSize,color:n.avatar.bgColor,"align-center":"","justify-center":""}},"v-avatar",l,!1),c),[e(v.a,{staticClass:"firm-logo",attrs:{contain:"",src:n.avatar.img,alt:n.avatar.alt,width:"26",height:"26"}})],1)]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(n.avatar.label.text))])])]},proxy:!0}],null,!0)},[t._v(" "),e(o.a,{staticClass:"elevation-2 timeline-item"},[e(c.d,[e("strong",{staticClass:"timeline-item-title"},[t._v("\n                "+t._s(n.card.title)+"\n              ")])]),t._v(" "),e(c.b,[t._v("\n              "+t._s(n.card.period.start)+" -\n              "+t._s(n.card.period.end)+"\n            ")]),t._v(" "),e(c.c,[e("p",{staticClass:"mb-0"},[n.avatar.label.link?e("a",{staticClass:"firm-link",attrs:{href:n.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.avatar.label.text))]):e("span",[t._v(t._s(n.avatar.label.text))])]),t._v(" "),e("p",{staticClass:"ma-0"},[t._v("\n                "+t._s(n.card.description)+"\n              ")]),t._v(" "),e("ul",{staticClass:"ma-0"},t._l(n.card.tools,(function(t,n){return e("li",{key:n})})),0)]),t._v(" "),""!=n.card.readMore?e(c.a,[t._v("\n              Read more\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,"03e328ca",null);e.default=component.exports}}]);