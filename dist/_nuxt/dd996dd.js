(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{380:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2f5c6093",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(380)},385:function(t,e,n){var r=n(25)(!1);r.push([t.i,".firm-link[data-v-00a3be5b]{text-decoration:none}.firm-logo[data-v-00a3be5b]{width:45px;height:45px;cursor:pointer}",""]),t.exports=r},388:function(t,e,n){"use strict";n.r(e);var r=n(64),l=(n(31),n(9),n(56),{data:function(){return{avatarSize:32}},computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.smAndDown},timelineItems:function(){var t=this.$store.state.timelineItems;return[].concat(Object(r.a)(t.jobs),Object(r.a)(t.education))}},methods:{hasTimelineItemDetails:function(t){return t.description&&""!=t},navigateToCompany:function(t){if(t&&""!=t){var e=t;window.open(e,"_blank")}}}}),o=(n(384),n(58)),c=n(66),v=n.n(c),d=n(405),f=n(387),m=n(378),_=n(369),C=n(377),h=n(245),x=n(370),y=n(406),k=n(407),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("h2",[t._v("Experience")])])],1),t._v(" "),n("v-row",{staticClass:"justify-center",attrs:{align:"center"}},[n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"8",lg:"7"}},[n("v-timeline",{attrs:{dense:t.isMobileDevice}},t._l(t.timelineItems,(function(e,i){return n("v-timeline-item",{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",{attrs:{size:t.avatarSize,color:e.avatar.bgColor,"align-center":"","justify-center":""}},[n("v-img",{staticClass:"firm-logo",attrs:{contain:"",src:e.avatar.img,alt:e.avatar.alt,width:"24",height:"24"}})],1)]},proxy:!0},{key:"opposite",fn:function(){return[n("a",{staticClass:"firm-link",attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[n("span",[t._v(t._s(e.avatar.label.text))])])]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("v-card",{staticClass:"elevation-2 timeline-item"},[n("v-card-title",{staticClass:"text-h6"},[t._v("\n              "+t._s(e.card.title)+"\n            ")]),t._v(" "),n("v-card-subtitle",[t._v("\n              "+t._s(e.card.period.start)+" -\n              "+t._s(e.card.period.end)+"\n              "),t.isMobileDevice?n("div",{staticStyle:{display:"inline"}},[n("span",{staticClass:"px-1"},[t._v("|")]),t._v(" "),n("a",{attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.avatar.label.text))])]):t._e()]),t._v(" "),t.hasTimelineItemDetails(e.card)?n("v-card-text",[n("p",{staticClass:"ma-0"},[t._v("\n                "+t._s(e.card.description)+"\n              ")]),t._v(" "),n("ul",{staticClass:"ma-0"},t._l(e.card.tools,(function(t,e){return n("li",{key:e})})),0)]):t._e(),t._v(" "),""!=e.card.readMore?n("v-card-actions",[t._v("\n              Read more\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,"00a3be5b",null);e.default=component.exports;v()(component,{VAvatar:d.a,VCard:f.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:_.a,VContainer:C.a,VImg:h.a,VRow:x.a,VTimeline:y.a,VTimelineItem:k.a})}}]);