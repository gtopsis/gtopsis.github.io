(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{391:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3e25959e",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";n(391)},396:function(t,e,n){var r=n(21)(!1);r.push([t.i,".firm-link[data-v-cd2b4022]{text-decoration:none}.firm-logo[data-v-cd2b4022]{width:45px;height:45px;cursor:pointer}.timeline-item-title[data-v-cd2b4022]{font-size:1.15rem}",""]),t.exports=r},402:function(t,e,n){"use strict";n.r(e);var r=n(66),o=(n(28),n(8),n(51),{data:function(){return{timelineTitle:"Experience and Studies",avatarSize:34}},computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.smAndDown},timelineItems:function(){var t=this.$store.state.timelineItems;return[].concat(Object(r.a)(t.jobs),Object(r.a)(t.education))}},methods:{hasTimelineItemDetails:function(t){return t.description&&""!=t},navigateToCompany:function(t){if(t&&""!=t){var e=t;window.open(e,"_blank")}}}}),l=(n(395),n(59)),c=n(69),d=n.n(c),v=n(417),m=n(399),f=n(389),_=n(378),C=n(388),k=n(250),w=n(379),h=n(418),y=n(419),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-2",attrs:{cols:"auto"}},[n("h2",[t._v(t._s(t.timelineTitle))])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"px-0",attrs:{cols:"12",md:"10",lg:"9"}},[n("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.smAndDown}},t._l(t.timelineItems,(function(e,i){return n("v-timeline-item",{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",{attrs:{size:t.avatarSize,color:e.avatar.bgColor,"align-center":"","justify-center":""}},[n("v-img",{staticClass:"firm-logo",attrs:{contain:"",src:e.avatar.img,alt:e.avatar.alt,width:"24",height:"24"}})],1)]},proxy:!0},{key:"opposite",fn:function(){return[n("a",{staticClass:"firm-link",attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[n("span",[t._v(t._s(e.avatar.label.text))])])]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("v-card",{staticClass:"elevation-2 timeline-item"},[n("v-card-title",[n("strong",{staticClass:"timeline-item-title"},[t._v("\n                "+t._s(e.card.title)+"\n              ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n              "+t._s(e.card.period.start)+" -\n              "+t._s(e.card.period.end)+"\n            ")]),t._v(" "),t.$vuetify.breakpoint.smAndDown?n("v-card-text",[t.$vuetify.breakpoint.smAndDown?n("p",{staticClass:"mb-0"},[n("a",{staticClass:"firm-link",attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.avatar.label.text))])]):t._e(),t._v(" "),n("p",{staticClass:"ma-0"},[t._v("\n                "+t._s(e.card.description)+"\n              ")]),t._v(" "),n("ul",{staticClass:"ma-0"},t._l(e.card.tools,(function(t,e){return n("li",{key:e})})),0)]):t._e(),t._v(" "),""!=e.card.readMore?n("v-card-actions",[t._v("\n              Read more\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,"cd2b4022",null);e.default=component.exports;d()(component,{VAvatar:v.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:_.a,VContainer:C.a,VImg:k.a,VRow:w.a,VTimeline:h.a,VTimelineItem:y.a})}}]);