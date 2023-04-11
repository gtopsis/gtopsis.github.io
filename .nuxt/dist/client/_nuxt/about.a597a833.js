import{a as C,b as J,e as T,f as E,h as z,i as x,r as n,o as d,c as v,w as e,j as t,k as i,t as c,u as f,l as p,F as S,m as k,p as G,q as I,s as A,v as q,x as Y}from"./entry.5b2129fc.js";const $=C({__name:"SocialHead",props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"./images/Twitter-card.png"}},setup(a){const o=a;return J({meta:[{hid:"twitter:title",name:"twitter:title",content:o.title},{hid:"twitter:description",name:"twitter:description",content:o.description},{hid:"twitter:image",name:"twitter:image",content:o.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:o.title},{hid:"og:title",property:"og:title",content:o.title},{hid:"og:description",property:"og:description",content:o.description},{hid:"og:image",property:"og:image",content:o.image}]}),(b,m)=>T("",!0)}}),Q=E("JobsStore",{state:()=>({jobs:[{id:1,avatar:{img:"/images/fairlo_logo.png",alt:"Logo of software agency Fairlo",bgColor:"#fff",label:{text:"Fairlo",link:"https://fairlo.se"}},card:{title:"Back-End Engineer",roles:[{jobTitle:"Back-End Engineer",period:{start:"September 2021",end:"February 2023"}}],period:{start:"September 2021",end:"February 2023"},description:"",tools:["TypeScript","Node.js","PostgreSQL","Jest","AWS ","Document RESTful APIs (OpenAPI specification)"],readMore:""}},{id:2,avatar:{img:"/images/conveos_logo.png",alt:"Logo of software agency Conveos",bgColor:"#000",label:{text:"Conveos",link:"https://conveos.com"}},card:{title:"Back-End Web Developer",roles:[{jobTitle:"Back-End Web Developer",period:{start:"January 2021",end:"June 2021"}}],period:{start:"January 2021",end:"June 2021"},description:"",tools:["JavaScript","Node.js","MongoDB","Jest","Document RESTful APIs (OpenAPI specification)"],readMore:""}},{id:3,avatar:{img:"/images/conveos_logo.png",alt:"Logo of software agency Conveos",bgColor:"#000",label:{text:"Conveos",link:"https://conveos.com"}},card:{title:"Back-End Web Developer",roles:[{jobTitle:"Back-End Web Developer",period:{start:"July 2019",end:"July 2020"}},{jobTitle:"Front-End Web Developer",period:{start:"July 2019",end:"July 2020"}}],period:{start:"July 2019",end:"July 2020"},description:"",tools:["JavaScript","Vue.js","Vuetify","Node.js","MongoDB","Document RESTful APIs (OpenAPI specification)"],readMore:""}},{id:4,avatar:{img:"/images/forth_logo.png",alt:"Logo of FORTH in Greece",bgColor:"#fff",label:{text:"Laboratory HCI of ICS-FORTH",link:"https://www.ics.forth.gr/"}},card:{title:"Graduate R&D assistant at Human-Computer Interaction Lab (HCI)",roles:[{jobTitle:"Back-End Web Developer",period:{start:"Jun 2016",end:"Jun 2019"}}],period:{start:"Jun 2016",end:"Jun 2019"},description:"",tools:["JavaScript","AngularJS (v1.6)","Foundation for Sites","Node.js","MongoDB","SocketIO","Invision","Gravid Designer","Presentator.io"],readMore:""}}]}),getters:{jobsList:a=>a.jobs}}),K=E("StudiesStore",{state:()=>({studies:[{id:1,avatar:{img:"/images/uoc_logo.png",alt:"Logo of University of Crete",bgColor:"#000",label:{text:"University of Crete",link:"https://www.uoc.gr/"}},card:{title:"MSc in Computer Science - Human Computer Interaction, Information Systems",roles:[{jobTitle:"Back End Web Developer",period:{start:"September 2016",end:"November 2019"}}],period:{start:"September 2016",end:"November 2019"},description:"",tools:[],readMore:""}},{id:2,avatar:{img:"/images/chalmers_logo.png",alt:"Logo of Chalmers University of Technology",bgColor:"#fff",label:{text:"Chalmers University of Technology",link:"https://www.chalmers.se/"}},card:{title:"ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",roles:[],period:{start:"August 2017",end:"January 2018"},description:"",tools:[],readMore:""}},{id:3,avatar:{img:"/images/uoc_logo.png",alt:"Logo of University of Crete",bgColor:"#000",label:{text:"University of Crete",link:"https://www.uoc.gr/"}},card:{title:"BSc in Computer Science",roles:[],period:{start:"September 2011",end:"March 2015"},description:"",tools:[],readMore:""}},{id:4,avatar:{img:"/images/uoc_cyprus_logo.png",alt:"Logo of University of Cyprus",bgColor:"#fff",label:{text:"University of Cyprus",link:"https://www.uoc.gr/"}},card:{title:"ERASMUS+ for Undergraduate studies",roles:[],period:{start:"September 2014",end:"January 2015"},description:"",tools:[],readMore:""}}]}),getters:{studiesList:a=>a.studies}}),X={class:"timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold"},Z={class:"mb-0"},ee=["href"],te={key:1,class:"text-secondary font-weight-bold"},oe={class:"ma-0"},ne={class:"ma-2"},ae=C({__name:"Timeline",props:{content:{type:String,default:"experience",validator:a=>["experience","education"].includes(a)}},setup(a){const o=a,{mobile:b}=z(),m=x(()=>{switch(b.value){case!0:return"vertical";case!1:return"horizontal"}}),j=44,D=o.content=="education"?"start":"both",h=x(()=>o.content=="experience"?"Experience":o.content=="education"?"Education":"My Story"),r=x(()=>{if(o.content==="experience"){const{jobs:l}=Q();return l}else if(o.content==="education"){const{studies:l}=K();return l}return[]});return(l,_)=>{const u=n("v-col"),g=n("v-row"),y=n("v-img"),M=n("v-avatar"),B=n("v-tooltip"),L=n("v-card-title"),W=n("v-card-subtitle"),F=n("v-card-text"),U=n("v-card-actions"),H=n("v-card"),P=n("v-timeline-item"),R=n("v-timeline"),N=n("v-container");return d(),v(N,{class:"pa-0"},{default:e(()=>[t(g,{align:"center",class:"justify-md-center justify-sm-left"},{default:e(()=>[t(u,{cols:"auto",class:"mb-3"},{default:e(()=>[i("h1",null,c(f(h)),1)]),_:1})]),_:1}),t(g,{"no-gutters":""},{default:e(()=>[t(u,{cols:"12",class:"px-0"},{default:e(()=>[t(R,{align:"center",direction:f(m),side:"end","truncate-line":f(D)},{default:e(()=>[(d(!0),p(S,null,k(f(r),(s,O)=>(d(),v(P,{key:O,"fill-dot":"","dot-color":s.avatar.bgColor,elevation:"2",style:{"align-self":"flex-start"}},{icon:e(()=>[t(B,{location:"bottom"},{activator:e(({props:w})=>[t(M,G({size:j,class:"timeline-avatar"},w),{default:e(()=>[t(y,{contain:"",src:s.avatar.img,alt:s.avatar.alt,class:"firm-logo",width:"32",height:"32"},null,8,["src","alt"])]),_:2},1040)]),default:e(()=>[i("span",null,c(s.avatar.label.text),1)]),_:2},1024)]),default:e(()=>[t(H,{class:"timeline-item-card"},{default:e(()=>[t(L,null,{default:e(()=>[i("h4",X,c(s.card.title),1)]),_:2},1024),t(W,null,{default:e(()=>[i("span",null,c(s.card.period.start)+" - "+c(s.card.period.end),1),i("p",Z,[s.avatar.label.link?(d(),p("a",{key:0,class:"text-secondary font-weight-bold",href:s.avatar.label.link,target:"_blank",rel:"noopener noreferrer"},c(s.avatar.label.text),9,ee)):(d(),p("span",te,c(s.avatar.label.text),1))])]),_:2},1024),t(F,null,{default:e(()=>[i("p",oe,c(s.card.description),1),i("ul",ne,[(d(!0),p(S,null,k(s.card.tools,(w,V)=>(d(),p("li",{key:V,class:"text-left"},[i("span",null,c(w),1)]))),128))])]),_:2},1024),s.card.readMore!=""?(d(),v(U,{key:0},{default:e(()=>[I(" Read more ")]),_:1})):T("",!0)]),_:2},1024)]),_:2},1032,["dot-color"]))),128))]),_:1},8,["direction","truncate-line"])]),_:1})]),_:1})]),_:1})}}});const se=A(ae,[["__scopeId","data-v-63fa1527"]]),re=a=>(q("data-v-f5b224e5"),a=a(),Y(),a),ie=re(()=>i("p",{class:"text-center text-h6 text-sm-h5 text-md-h4"},[I(" What You "),i("span",{class:"text-primary"},"Read"),I(" is What you Get ")],-1)),le=C({__name:"about",setup(a){J({title:"About",meta:[{hid:"description",name:"description",content:"About me page contains details about my personal hobbies, projects and goals."}]});const o={title:"About - Giorgos Topsis",description:"Learn more about me!",image:"./images/Twitter-card.png"},m=[`As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,`
Well, for more than ${new Date().getFullYear()-2017} years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 3 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs as well as developing third-party intefrations utilizing several AWS services.`,`
As a partner, I seek trustworthy connections and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel a secure, productive, and funny teammate ツ.
`,"When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop."];return(j,D)=>{const h=$,r=n("v-col"),l=n("v-row"),_=n("v-container"),u=se;return d(),v(_,{class:"d-flex pa-0",fluid:"","full-width":"","fill-height":"",align:"center"},{default:e(()=>[t(h,{title:o.title,description:o.description,image:o.image},null,8,["title","description","image"]),t(l,{class:"page-container","no-gutters":"",justify:"center"},{default:e(()=>[t(r,{cols:"12",class:"section pa-0 mx-0"},{default:e(()=>[t(_,{class:"hero-container ma-0 pa-0","fill-height":""},{default:e(()=>[t(l,{"no-gutters":"",justify:"center",align:"center"},{default:e(()=>[t(r,{cols:"auto","align-self":"center"},{default:e(()=>[ie]),_:1})]),_:1})]),_:1})]),_:1}),t(r,{cols:"12",class:"section px-0 py-10 mx-0"},{default:e(()=>[t(_,{class:"about-me-container",fluid:"","full-width":""},{default:e(()=>[t(l,{"full-width":"",justify:"center",align:"center"},{default:e(()=>[t(r,{cols:"12",md:"10",lg:"9",class:"px-4"},{default:e(()=>[(d(),p(S,null,k(m,(g,y)=>i("p",{key:y,class:"text-left text-body-1 mb-6",white:""},c(g),1)),64))]),_:1}),t(r,{cols:"12"})]),_:1})]),_:1})]),_:1}),t(r,{cols:"12",class:"section px-0 py-10 mx-0"},{default:e(()=>[t(l,{class:"justify-space-between no-gutters"},{default:e(()=>[t(r,{cols:"12",mb:"2"},{default:e(()=>[t(u,{content:"experience"})]),_:1})]),_:1})]),_:1}),t(r,{cols:"12",class:"section px-0 py-10 mx-0"},{default:e(()=>[t(l,{class:"justify-space-between no-gutters"},{default:e(()=>[t(r,{cols:"12",mb:"2"},{default:e(()=>[t(u,{content:"education"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const de=A(le,[["__scopeId","data-v-f5b224e5"]]);export{de as default};
