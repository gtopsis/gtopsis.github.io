(window.webpackJsonp=window.webpackJsonp||[]).push([[9,5,7],{391:function(t,e,n){var content=n(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("067de7aa",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(391)},398:function(t,e,n){var o=n(19)(!1);o.push([t.i,".meetup-card[data-v-540abe05]:hover{cursor:pointer}",""]),t.exports=o},406:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0c87e9e7",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e);n(8),n(49);var o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"./images/Twitter-card.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image}]}}},r=n(59),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n.r(e);n(252);var o={data:function(){return{title:"Proud member of Meetups",meetups:[{src:"/images/devstaff-meetup.jpg",title:"DevStaff: A developer community in Crete",link:"https://www.meetup.com/devstaff/"},{src:"/images/opencoffe-meetup.jpg",title:"Open Coffee Heraklion",link:"https://www.meetup.com/opencoffeeher/"},{src:"/images/gdg-meetup.jpg",title:"Google Developers Group Heraklion",link:"https://www.meetup.com/GDG-Heraklion/"}]}},methods:{navigateToMeetup:function(t){window.open(t.link)}}},r=(n(397),n(59)),l=n(68),c=n.n(l),d=n(408),f=n(390),m=n(379),h=n(389),v=n(251),w=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","full-width":""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.title))])])],1),t._v(" "),n("v-row",{attrs:{dense:"",justify:""}},t._l(t.meetups,(function(e,o){return n("v-col",{key:o,attrs:{cols:"12",md:"4",lg:"3"}},[n("v-card",{staticClass:"meetup-card",on:{click:function(n){return t.navigateToMeetup(e)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1)}),[],!1,null,"540abe05",null);e.default=component.exports;c()(component,{VCard:d.a,VCardTitle:f.d,VCol:m.a,VContainer:h.a,VImg:v.a,VRow:w.a})},415:function(t,e,n){"use strict";n(406)},416:function(t,e,n){var o=n(19)(!1);o.push([t.i,".main-layout[data-v-fcf53f96]{width:100%}.headline-container[data-v-fcf53f96]{height:60vh}.fullname[data-v-fcf53f96]{letter-spacing:.25rem!important}.page-container[data-v-fcf53f96]{max-width:1100px!important;margin:0 auto}.section[data-v-fcf53f96]{margin:100px 0}",""]),t.exports=o},431:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{head:{title:"About - Giorgos Topsis",description:"Learn more about me!",image:"./images/Twitter-card.png"},aboutMe:["As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!\nMy studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.","\nWell, for more than 5 years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 2 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs and robust databases.","\nAs a member of a team, I seek honest and trustworthy connections. In such environments, I feel secure, efficient and funny ツ. I'm not a fan of life hack \"Fake it until you make it\" and also I'm trying to be social without having presence on most social networking platforms.\n","When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop. Moreover, I love cycling around the seaside part of Heraklion and playing football with good friends in 8x8 fields weekly."]}},head:function(){return{title:"About",meta:[{hid:"description",name:"description",content:"About me page contains details about my personal hobbies, projects and goals."}]}}},r=(n(415),n(59)),l=n(68),c=n.n(l),d=n(379),f=n(389),m=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-layout page-container"},[n("SocialHead",{attrs:{title:t.head.title,description:t.head.description,image:t.head.image}}),t._v(" "),n("v-container",{staticClass:"headline-container section",attrs:{fluid:"","full-width":"","fill-height":""}},[n("v-row",{staticClass:"no-gutters",attrs:{"full-width":"","fill-height":"","justify-center":"","align-center":""}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center text-h5 text-sm-h2 text-md-h4 mb-3",attrs:{white:""}},[t._v("\n          Giorgos Topsis\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"text-center text-sm-h4 text-md-h6"},[t._v("\n          What You "),n("span",{staticClass:"text-primary"},[t._v("Read")]),t._v(" is What you Get\n        ")])])],1)],1),t._v(" "),n("v-container",{staticClass:"about-me-container section",attrs:{fluid:"","full-width":""}},[n("v-row",{attrs:{"full-width":"",justify:"center",align:"center"}},[n("v-col",{staticClass:"px-4",attrs:{cols:"12",md:"10",lg:"9"}},t._l(t.aboutMe,(function(e,i){return n("p",{key:i,staticClass:"text-left",attrs:{white:""}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("v-col",{attrs:{cols:"12"}})],1)],1),t._v(" "),n("meetups",{staticClass:"section"})],1)}),[],!1,null,"fcf53f96",null);e.default=component.exports;c()(component,{SocialHead:n(409).default,Meetups:n(410).default}),c()(component,{VCol:d.a,VContainer:f.a,VRow:m.a})}}]);