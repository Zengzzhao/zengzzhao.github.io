import{z as j,T as b,b as H,d as O,o as G,u as J,g as K,a as Q,c as U,k as X,h as Z,e as tt,f as et}from"./app.DHDuoznQ.js";import{_ as nt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang.C3Jzo5Cv.js";import"./chunks/@vueuse/motion.Cy7Bmf3Q.js";import{a as at,u as ot}from"./animation.CFNYV1Px.js";import{F as R,C as B,aa as c,ac as S,af as f,ag as $,B as C,a9 as st,W as t,al as n,ab as T,at as rt,x as a,ap as it,I as P,am as ct,ak as lt,ah as ut}from"./framework.ytzJcTs4.js";import{_ as mt}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.B0-Ga1Cq.js";import{a as pt,u as _t}from"./chunks/vue-router.BMjqtyfa.js";import"./chunks/dayjs.BcKW23cW.js";import{u as ft}from"./chunks/vue-i18n.C5RcpsDP.js";import"./chunks/pinia.BwUPWZQ-.js";import"./chunks/nprogress.DAIWlcdo.js";import"./index.x8TNrC4q.js";function gt(u={primary:"#0078E7"}){const o=j(),s=new b("#999999"),r=new b(u.primary);return{tags:o,getTagStyle:i=>{const p=Array.from(o.value).map(([d,h])=>h.count),g=Math.max(...p),e=Math.min(...p),y=g-e,_=(i-e)/y;return{"--yun-tag-color":s.mix(r,_*100).toString(),fontSize:`${_*36+12}px`}}}}const yt={"inline-flex":""},dt={"inline-flex":"",text:"xs"},ht=R({__name:"YunLayoutPostTag",props:{i:{},title:{},count:{}},setup(u){const o=u,s=B();return at(s,{i:o.i||0,delay:25}),(r,m)=>(c(),S("span",{ref_key:"tagRef",ref:s,"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},[f("span",yt,"#"+$(r.title),1),f("span",dt,"["+$(r.count)+"]",1)],512))}}),vt={class:"yun-text-light",text:"center",p:"2"},xt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},At=R({__name:"tags",setup(u){H([O({"@type":"CollectionPage"})]);const o=pt(),s=_t(),r=G(),{t:m}=ft(),i=J(),{tags:p,getTagStyle:g}=gt({primary:r.value.colors.primary}),e=C(()=>o.query.tag||""),y=K(),_=C(()=>y.postList.filter(l=>l.tags?typeof l.tags=="string"?l.tags===e.value:l.tags.includes(e.value):!1)),d=B(),{show:h}=ot(d);function V(v){s.push({query:{tag:v}}),h()}const A=Q(i),Y=C(()=>Array.from(p.value).sort());return(v,l)=>{const F=U,w=mt,z=ht,k=st("RouterView"),E=nt,I=X,N=Z,W=tt,q=et;return c(),S(P,null,[t(W,null,{default:n(()=>[t(F),t(k,null,{default:n(({Component:D})=>[(c(),T(rt(D),null,{"main-header":n(()=>[t(w,{title:a(A)||a(m)("menu.tags"),icon:a(i).icon||"i-ri-tag-line",color:a(i).color,"page-title-class":a(i).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":n(()=>[t(it,{"enter-active-class":"animate-fade-in animate-duration-400",appear:""},{default:n(()=>[f("div",vt,$(a(m)("counter.tags",Y.value.length)),1)]),_:1}),f("div",xt,[(c(!0),S(P,null,ct(Y.value,([x,L],M)=>(c(),T(z,{key:x,i:M,title:x,count:L.count,style:lt(a(g)(L.count)),onClick:Ct=>V(x.toString())},null,8,["i","title","count","style","onClick"]))),128))]),t(k)]),"main-nav-before":n(()=>[e.value?(c(),T(I,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:n(()=>[t(w,{title:e.value,icon:"i-ri-hashtag"},null,8,["title"]),t(E,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:_.value},null,8,["posts"])]),_:1},512)):ut("v-if",!0)]),_:2},1024))]),_:1}),t(N)]),_:1}),t(q)],64)}}});export{At as default};
