const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery.CqJ-d_LM.js","assets/framework.ytzJcTs4.js","assets/app.DHDuoznQ.js","assets/chunks/vue-router.BMjqtyfa.js","assets/chunks/@vueuse/motion.Cy7Bmf3Q.js","assets/chunks/dayjs.BcKW23cW.js","assets/chunks/vue-i18n.C5RcpsDP.js","assets/chunks/pinia.BwUPWZQ-.js","assets/chunks/nprogress.DAIWlcdo.js","assets/app.BFs5M9Su.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.B0-Ga1Cq.js"])))=>i.map(i=>d[i]);
import{F as x,a9 as k,aa as i,ab as g,C as b,B as C,ac as w,af as r,an as $,av as K,aj as S,aB as T,W as _,aw as G,aE as O,al as h,at as Y,x as o,ag as F,I as j,_ as L}from"./framework.ytzJcTs4.js";import{l as I,u as M,a as U,b as N,d as W,m as z,n as H,c as J,e as q,f as Q}from"./app.DHDuoznQ.js";import"./chunks/@vueuse/motion.Cy7Bmf3Q.js";import"./chunks/dayjs.BcKW23cW.js";import{_ as X}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.B0-Ga1Cq.js";import{u as Z,a as ee}from"./chunks/vue-router.BMjqtyfa.js";import{u as te}from"./chunks/vue-i18n.C5RcpsDP.js";function oe(a){const t=new TextEncoder;return window.crypto.subtle.importKey("raw",t.encode(a),"PBKDF2",!1,["deriveBits","deriveKey"])}function ne(a,t){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},a,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function ae(){const a=I(),{encrypt:t}=a.value,l=Uint8Array.from(Object.values(t.iv)),e=Uint8Array.from(Object.values(t.salt));return{decrypt:async(s,u)=>{if(!s)return;const y=await oe(s),m=await ne(y,e),f=Uint8Array.from(u,c=>c.charCodeAt(0)),p=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:l},m,f);return new TextDecoder().decode(p)}}}const se=x({__name:"YunGallery",props:{photos:{}},setup(a){return(t,l)=>{const e=k("VAGallery");return i(),g(e,{photos:t.photos},null,8,["photos"])}}}),re={key:0,"w-full":"","pt-14":"","pb-10":""},le={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},ce={key:1},ie=x({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(a,{expose:t}){const l=a,e=b(""),s=b(""),u=b(!1),{decrypt:y}=ae();async function m(){const c=l.encryptedPhotos;if(c)try{const n=await y(e.value,c);s.value=n||""}catch(n){u.value=!0,console.error(n)}}function f(){s.value="",e.value=""}const p=C(()=>JSON.parse(s.value||"[]")||[]);return t({photos:p}),(c,n)=>{const v=se;return i(),w("div",null,[s.value?(i(),w("div",ce,[_(v,{photos:p.value},null,8,["photos"]),r("div",{"w-full":"","text-center":"","mt-8":""},[r("button",{"m-auto":"",class:"btn","font-bold":"",onClick:f}," Encrypt Again ")])])):(i(),w("div",re,[r("div",le,[$(r("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:S(u.value&&"border-red"),onInput:n[1]||(n[1]=d=>u.value=!1),onKeyup:T(m,["enter"])},null,34),[[K,e.value]]),r("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:m})])]))])}}}),ue={text:"center",class:"yun-text-light",p:"2"},pe={class:"page-action",text:"center"},de=["title"],ye=x({__name:"gallery",setup(a){const t=Z(),{t:l}=te(),e=M(),s=U(e);N([W({"@type":"CollectionPage"})]);const u=ee(),y=C(()=>u.meta.frontmatter.photos||[]),f=z().value.addons["valaxy-addon-lightgallery"]?G(()=>L(()=>import("./YunGallery.CqJ-d_LM.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))):()=>null,p=H(),c=O("galleryRef"),n=C(()=>{var v;return y.value.length||((v=c.value)==null?void 0:v.photos.length)});return(v,d)=>{const A=J,P=X,B=ie,D=k("RouterView"),E=q,R=Q;return i(),w(j,null,[_(E,null,{default:h(()=>[_(A),_(D,null,{default:h(({Component:V})=>[(i(),g(Y(V),null,{"main-header":h(()=>[_(P,{title:o(s)||o(l)("title.gallery"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color,"page-title-class":o(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),default:h(()=>[r("div",ue,F(o(l)("counter.photos",n.value||0)),1),r("div",pe,[r("a",{class:"yun-icon-btn",title:o(l)("accessibility.back"),onClick:d[0]||(d[0]=()=>o(t).back())},d[1]||(d[1]=[r("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,de)]),o(p)?(i(),g(B,{key:0,ref_key:"galleryRef",ref:c,"encrypted-photos":o(p)},null,8,["encrypted-photos"])):(i(),g(o(f),{key:1,photos:y.value},null,8,["photos"]))]),_:2},1024))]),_:1})]),_:1}),_(R)],64)}}}),be=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{se as _,be as g};