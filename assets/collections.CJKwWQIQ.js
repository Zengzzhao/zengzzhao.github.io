import{e as d}from"./app.DHDuoznQ.js";import"./chunks/@vueuse/motion.Cy7Bmf3Q.js";import{C as f,F as l,a9 as i,aa as e,ab as o,al as t,ai as k,W as C,at as h,af as x,ac as g,I as w,am as v,x as B}from"./framework.ytzJcTs4.js";import"./chunks/dayjs.BcKW23cW.js";import"./chunks/vue-router.BMjqtyfa.js";import"./chunks/vue-i18n.C5RcpsDP.js";import"./chunks/pinia.BwUPWZQ-.js";import"./chunks/nprogress.DAIWlcdo.js";function L(){return{collections:f([{id:"i-and-she",name:"I and She",description:"Love letters from the past"},{id:"love-and-peace",name:"爱与和平",description:"Recipes for a good life"}])}}const R=l({__name:"YunCollectionItem",props:{collection:{}},setup(r){return(n,a)=>{const s=i("RouterLink");return e(),o(s,{class:"inline-flex rounded p-4 h-50 w-40 bg-gray-100 dark:bg-dark-300 shadow",to:`/collections/${n.collection.id}`},{default:t(()=>a[0]||(a[0]=[k(" Book ")])),_:1},8,["to"])}}}),V={flex:"~ wrap",gap:"4"},D=l({__name:"collections",setup(r){const{collections:n}=L();return(a,s)=>{const p=R,m=i("RouterView"),u=d;return e(),o(u,null,{default:t(()=>[C(m,null,{default:t(({Component:_})=>[(e(),o(h(_),null,{default:t(()=>[x("div",V,[(e(!0),g(w,null,v(B(n),c=>(e(),o(p,{key:c.id,collection:c},null,8,["collection"]))),128))])]),_:2},1024))]),_:1})]),_:1})}}});export{D as default};