import{_ as $}from"./nuxt-link.6b2a5667.js";import{a as x,r as o,o as d,c as w,w as t,j as e,k as g,s as p,t as _,x as S,y as G,v as C,l as H,F as I,m as D,b as B}from"./entry.d054d088.js";const M=i=>(S("data-v-34067482"),i=i(),G(),i),T={class:"headline text-h6 text-md-h5 text-lg-h4"},F=M(()=>g("br",null,null,-1)),N=x({__name:"Hero",setup(i){const s={pre:"I'm ",name:{text:"Giorgos",pronunciation:"(/ɡi.ɔ̌ːr.ɡ.os/)"},post:"a Full Stack Web Developer based in Heraklion of Crete."};return(u,r)=>{const n=$,c=o("v-col"),l=o("v-row"),a=o("v-container");return d(),w(a,{class:"hero-container pa-0 d-flex","fill-height":""},{default:t(()=>[e(l,{"no-gutters":""},{default:t(()=>[e(c,{class:"px-0",cols:"12","align-self":"center"},{default:t(()=>[g("h1",T,[g("span",null,[p(_(s.pre)+" ",1),e(n,{to:{name:"about"},class:"first-name text-secondary"},{default:t(()=>[p(_(s.name.text),1)]),_:1}),p(" "+_(s.name.pronunciation)+",",1),F,p(" "+_(s.post),1)])])]),_:1})]),_:1})]),_:1})}}});const U=C(N,[["__scopeId","data-v-34067482"]]),V=x({__name:"Projects",setup(i){const s="Personal Projects",u=[{src:"/images/portfolio.png",title:"Personal website",link:"https://gtopsis.github.io/",code:"https://github.com/gtopsis/gtopsis.github.io"},{src:"/images/uoc-radio.png",title:"Uoc radio",link:"https://gtopsis.github.io/Uoc-radio-website/index.html",code:"https://github.com/gtopsis/Uoc-radio-website"},{src:"/images/cs-352.png",title:"Website for course cs-352",link:"https://gtopsis.github.io/Course-cs352-website/",code:"https://github.com/gtopsis/Course-cs352-website"}];function r(c){window.open(c.link)}function n(c){window.open(c.code)}return(c,l)=>{const a=o("v-col"),v=o("v-row"),b=o("v-card-title"),k=o("v-img"),h=o("v-btn"),m=o("v-card-actions"),y=o("v-card"),j=o("v-container");return d(),w(j,{fluid:"","full-width":""},{default:t(()=>[e(v,{align:"center",class:"justify-md-center justify-sm-left"},{default:t(()=>[e(a,{cols:"auto",class:"mb-6"},{default:t(()=>[g("h1",null,_(s))]),_:1})]),_:1}),e(v,{dense:"",justify:"center"},{default:t(()=>[(d(),H(I,null,D(u,f=>e(a,{key:f.title,cols:"12",md:"3",lg:"4"},{default:t(()=>[e(y,{class:"mx-auto","max-width":"400"},{default:t(()=>[e(k,{class:"align-end text-white",height:"200",src:f.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:""},{default:t(()=>[e(b,{textContent:_(f.title)},null,8,["textContent"])]),_:2},1032,["src"]),e(m,null,{default:t(()=>[e(h,{color:"secondary",onClick:P=>r(f)},{default:t(()=>[p(" Demo ")]),_:2},1032,["onClick"]),e(h,{color:"secondary",onClick:P=>n(f)},{default:t(()=>[p(" Code ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})}}}),W=x({__name:"Meetups",setup(i){const s="Participation on several Meetups",u=[{src:"/images/devstaff-meetup.jpg",title:"DevStaff: A developer community in Crete",link:"https://www.meetup.com/devstaff/"},{src:"/images/opencoffe-meetup.jpg",title:"Open Coffee Heraklion",link:"https://www.meetup.com/opencoffeeher/"},{src:"/images/gdg-meetup.jpg",title:"Google Developers Group Heraklion",link:"https://www.meetup.com/GDG-Heraklion/"}];function r(n){window.open(n.link)}return(n,c)=>{const l=o("v-col"),a=o("v-row"),v=o("v-card-title"),b=o("v-img"),k=o("v-card"),h=o("v-container");return d(),w(h,{fluid:"","full-width":""},{default:t(()=>[e(a,{align:"center",class:"justify-md-center justify-sm-left"},{default:t(()=>[e(l,{cols:"auto",class:"mb-6"},{default:t(()=>[g("h1",null,_(s))]),_:1})]),_:1}),e(a,{dense:"",justify:"center"},{default:t(()=>[(d(),H(I,null,D(u,(m,y)=>e(l,{key:y,cols:"12",md:"4",lg:"3"},{default:t(()=>[e(k,{class:"meetup-card",onClick:j=>r(m)},{default:t(()=>[e(b,{src:m.src,class:"white--text align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"},{default:t(()=>[e(v,{textContent:_(m.title)},null,8,["textContent"])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]),_:2},1024)),64))]),_:1})]),_:1})}}});const A=C(W,[["__scopeId","data-v-e974bf86"]]),E=x({__name:"index",setup(i){return B({title:"Home",meta:[{hid:"description",name:"description",content:"Home page of personal website. It contains details about my work experience and my education background."}]}),(s,u)=>{const r=U,n=o("v-col"),c=V,l=A,a=o("v-row");return d(),w(a,{class:"page-container","no-gutters":"",justify:"center"},{default:t(()=>[e(n,{cols:"12",class:"section pa-0 mx-0"},{default:t(()=>[e(r)]),_:1}),e(n,{cols:"12",class:"section py-10 mx-0"},{default:t(()=>[e(c)]),_:1}),e(n,{cols:"12",class:"section py-10 mx-0"},{default:t(()=>[e(l)]),_:1})]),_:1})}}});const q=C(E,[["__scopeId","data-v-de65e9f6"]]);export{q as default};
