(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6,8],{392:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("cf5ca54c",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5960ae20",content,!0,{sourceMap:!1})},394:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3ae5ac26",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n(392)},400:function(t,e,n){var o=n(19)(!1);o.push([t.i,".hero-container[data-v-56818baf]{height:60vh}.hero-icon[data-v-56818baf]{font-size:2.5rem!important}.headline[data-v-56818baf]{letter-spacing:.25rem!important}.first-name[data-v-56818baf]{height:50px;line-height:50px;text-decoration:none;border-bottom:4px dashed grey}",""]),t.exports=o},401:function(t,e,n){"use strict";n(393)},402:function(t,e,n){var o=n(19)(!1);o.push([t.i,".columns-container[data-v-43483890]{width:100%;height:100%}.column[data-v-43483890]{border:1px solid var(--v-accent-darken2);border-radius:4px;box-shadow:0 3px 1px -2px var(--v-accent-darken2)}.content__icon[data-v-43483890]{font-size:2.5rem;color:var(--v-secondary-base)}.tech-list[data-v-43483890]{list-style-type:none}.column__header[data-v-43483890],.column__main[data-v-43483890]{height:100px}@media only screen and (max-width:600px){.column__main[data-v-43483890]{height:90px}}.column__footer[data-v-43483890]{height:auto}",""]),t.exports=o},403:function(t,e,n){"use strict";n(394)},404:function(t,e,n){var o=n(19)(!1);o.push([t.i,".firm-link[data-v-03e328ca]{text-decoration:none}.firm-logo[data-v-03e328ca]{width:45px;height:45px;cursor:pointer}.timeline-item-title[data-v-03e328ca]{font-size:1.1rem}",""]),t.exports=o},407:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("d1113ce8",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{headline:{pre:"I'm ",name:{text:"Giorgos",pronunciation:"(/ɡi.ɔ̌ːr.ɡ.os/)",route:"about"},post:"a Full Stack Web Developer based in Heraklion of Crete."}}}},r=(n(399),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(389),m=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"hero-container px-0",attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("v-col",{staticClass:"px-0"},[n("h1",{staticClass:"headline text-h5 text-sm-h2 text-md-h4"},[t._v("\n        "+t._s(t.headline.pre)+"\n        "),n("nuxt-link",{staticClass:"first-name",attrs:{to:t.headline.name.route}},[t._v(t._s(t.headline.name.text))]),t._v("\n        "+t._s(t.headline.name.pronunciation)+","),n("br"),t._v("\n        "+t._s(t.headline.post)+"\n      ")],1)])],1)],1)}),[],!1,null,"56818baf",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VRow:m.a})},412:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{title:"Technical Skills"}},computed:{skills:function(){return this.$store.state.skills.skills}}},r=(n(401),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(389),m=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.title))])])],1),t._v(" "),n("v-row",{staticClass:"columns-container justify-md-space-between"},t._l(t.skills,(function(e,o){return n("v-col",{key:o,staticClass:"column mb-sm-3 mb-md-0",class:{"mx-md-5":1==o},attrs:{cols:t.$vuetify.breakpoint.smAndDown?12:void 0}},[n("div",{staticClass:"column__content pa-2"},[n("v-row",[n("v-col",{staticClass:"text-center column__header",attrs:{cols:"12"}},[n("fa",{staticClass:"content__icon mb-2",attrs:{icon:["fas",e.icon]}}),t._v(" "),n("h3",{},[t._v(t._s(e.title))])],1),t._v(" "),n("v-col",{staticClass:"column__main text-center",attrs:{cols:"12"}},[t._v("\n            "+t._s(e.desc)+"\n          ")]),t._v(" "),n("v-col",{staticClass:"column__footer",attrs:{cols:"12"}},[n("h4",{staticClass:"text-center secondary-text mb-2"},[t._v("\n              "+t._s(e.heading)+"\n            ")]),t._v(" "),n("ul",{staticClass:"ma-0 pa-0 tech-list text-center"},t._l(e.technologies,(function(e,o){return n("li",{key:o},[n("span",[t._v(" "+t._s(e)+" ")])])})),0)])],1)],1)])})),1)],1)}),[],!1,null,"43483890",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VRow:m.a})},413:function(t,e,n){"use strict";n.r(e);n(50),n(8),n(49);var o={props:{content:{type:String,default:"experience",validator:function(t){return["experience","education"].includes(t)}}},data:function(){return{avatarSize:40}},computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.smAndDown},timelineTitle:function(){return"experience"==this.content?"Experience":"education"==this.content?"Education":"My Story"},timelineItems:function(){return"experience"==this.content?this.$store.state.experience.jobs:"education"==this.content&&this.$store.state.education.studies||[]}},methods:{hasTimelineItemDetails:function(t){return t.description&&""!=t},navigateToCompany:function(t){if(t&&""!=t){var e=t;window.open(e,"_blank")}}}},r=(n(403),n(59)),c=n(68),l=n.n(c),d=n(429),v=n(408),m=n(390),f=n(379),_=n(389),h=n(251),x=n(380),C=n(430),y=n(433),w=n(386),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.timelineTitle))])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("v-timeline",{attrs:{dense:""}},t._l(t.timelineItems,(function(e,i){return n("v-timeline-item",{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("v-avatar",t._g(t._b({attrs:{size:t.avatarSize,color:e.avatar.bgColor,"align-center":"","justify-center":""}},"v-avatar",c,!1),r),[n("v-img",{staticClass:"firm-logo",attrs:{contain:"",src:e.avatar.img,alt:e.avatar.alt,width:"26",height:"26"}})],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.avatar.label.text))])])]},proxy:!0}],null,!0)},[t._v(" "),n("v-card",{staticClass:"elevation-2 timeline-item"},[n("v-card-title",[n("strong",{staticClass:"timeline-item-title"},[t._v("\n                "+t._s(e.card.title)+"\n              ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n              "+t._s(e.card.period.start)+" -\n              "+t._s(e.card.period.end)+"\n            ")]),t._v(" "),n("v-card-text",[n("p",{staticClass:"mb-0"},[e.avatar.label.link?n("a",{staticClass:"firm-link",attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.avatar.label.text))]):n("span",[t._v(t._s(e.avatar.label.text))])]),t._v(" "),n("p",{staticClass:"ma-0"},[t._v("\n                "+t._s(e.card.description)+"\n              ")]),t._v(" "),n("ul",{staticClass:"ma-0"},t._l(e.card.tools,(function(t,e){return n("li",{key:e})})),0)]),t._v(" "),""!=e.card.readMore?n("v-card-actions",[t._v("\n              Read more\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,"03e328ca",null);e.default=component.exports;l()(component,{VAvatar:d.a,VCard:v.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VCol:f.a,VContainer:_.a,VImg:h.a,VRow:x.a,VTimeline:C.a,VTimelineItem:y.a,VTooltip:w.a})},421:function(t,e,n){"use strict";n(407)},422:function(t,e,n){var o=n(19)(!1);o.push([t.i,".section[data-v-309471c2]{margin:100px 0}.page-container[data-v-309471c2]{max-width:1100px!important;margin:0 auto}",""]),t.exports=o},432:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:"Home page of personal website. It contains details about my work experience and my education background."}]}}},r=(n(421),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"page-container",attrs:{"no-gutters":"","justify-center":""}},[n("v-col",{staticClass:"px-4 py-0 mx-0 section",attrs:{cols:"12"}},[n("hero")],1),t._v(" "),n("v-col",{staticClass:"px-4 py-0 mx-0 section",attrs:{cols:"12"}},[n("skills-collection")],1),t._v(" "),n("v-col",{staticClass:"px-4 py-0 mx-0 section",attrs:{cols:"12"}},[n("v-row",{staticClass:"justify-space-between no-gutters"},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("timeline",{attrs:{content:"experience"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("timeline",{attrs:{content:"education"}})],1)],1)],1)],1)}),[],!1,null,"309471c2",null);e.default=component.exports;l()(component,{Hero:n(411).default,SkillsCollection:n(412).default,Timeline:n(413).default}),l()(component,{VCol:d.a,VRow:v.a})}}]);