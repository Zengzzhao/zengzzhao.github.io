import{o as I,p as j,_ as M,l as q,s as B,q as R,r as H,t as W,v as G,w as O,e as J,f as K}from"./app.DHDuoznQ.js";import{_ as Q}from"./YunNotice.DILKjvho.js";import"./chunks/@vueuse/motion.Cy7Bmf3Q.js";import{a8 as E,aa as o,ac as r,ah as l,F as v,C as b,D as N,ag as g,ab as y,al as x,af as i,aj as h,ak as P,x as c,I as k,am as T,ae as L,W as a,ap as D,B as w,a9 as U}from"./framework.ytzJcTs4.js";import"./chunks/dayjs.BcKW23cW.js";import{g as F}from"./animation.D8h9Pq7R.js";import{a as X}from"./chunks/vue-router.BMjqtyfa.js";import"./chunks/vue-i18n.C5RcpsDP.js";import"./chunks/pinia.BwUPWZQ-.js";import"./chunks/nprogress.DAIWlcdo.js";const Z={},ee={class:"grid-bg"};function te(u,e){return o(),r("div",ee,[l(" <YunAEFrame /> "),l(" <YunAERect /> ")])}const ne=E(Z,[["render",te]]),se={class:"say"},oe={key:0,class:"say-content animate-fade-in animate-iteration-1"},ae={key:1,class:"say-author"},re={key:2,class:"say-from"},ie=v({__name:"YunSay",setup(u){const e=I(),t=b(""),n=b(""),s=b("");function m(){const _=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;_&&fetch(_).then(f=>{if(f.ok)f.json().then(d=>{if(e.value.say.hitokoto.enable)t.value=d.hitokoto,n.value=d.from_who,s.value=d.from;else{const p=d[Math.floor(Math.random()*d.length)];p.content?(t.value=p.content,n.value=p.author,s.value=p.from):t.value=p}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${f.status}`)}).catch(f=>{console.error(f.message)})}return N(()=>{m()}),(_,f)=>(o(),r("div",se,[t.value?(o(),r("span",oe,g(t.value),1)):l("v-if",!0),n.value?(o(),r("span",ae,g(n.value),1)):l("v-if",!0),s.value?(o(),r("span",re,g(s.value),1)):l("v-if",!0)]))}}),ce=v({__name:"YunSiteLinkItem",props:{page:{}},setup(u){const e=j();return(t,n)=>{const s=M;return o(),y(s,{class:"link-item inline-flex-center gap-2 transition rounded-lg text-xl p-2 md:text-lg md:p-2 lg:text-xl lg:p-3 text-$va-c-text",bg:"white/5 dark:black/5","inline-flex":"",to:t.page.url,title:t.page.name,style:P(`color:${t.page.color}`),hover:"bg-white/80 dark:bg-black/80",onClick:n[0]||(n[0]=m=>c(e).fullscreenMenu.isOpen=!1)},{default:x(()=>[i("div",{class:h([t.page.icon,"icon"])},null,2),i("span",null,g(t.page.name),1)]),_:1},8,["to","title","style"])}}}),le={key:0,class:"site-description text-$va-c-text text-sm"},ue=v({__name:"YunSiteDescription",setup(u){const e=q();return(t,n)=>c(e).description?(o(),r("div",le,g(c(e).description),1)):l("v-if",!0)}}),_e={key:0,class:"site-subtitle block text-$va-c-text op-80 font-medium",text:"sm"},pe=v({__name:"YunSiteSubtitle",setup(u){const e=q();return(t,n)=>c(e).subtitle?(o(),r("h4",_e,g(c(e).subtitle),1)):l("v-if",!0)}}),me=v({__name:"YunAnimLineDraw",setup(u){const e=b(!1);return N(()=>{e.value=!0}),(t,n)=>(o(),r("div",{class:h(["line",{enter:e.value}])},null,2))}}),fe=E(me,[["__scopeId","data-v-3207662b"]]),de={key:0,class:"site-author-intro",m:"t-0 b-4"},ve=v({__name:"YunAuthorIntro",setup(u){const e=q();return(t,n)=>c(e).author.intro?(o(),r("div",de,g(c(e).author.intro),1)):l("v-if",!0)}}),he={key:0,class:"line-burst-effects absolute"},be=v({__name:"LineBurstEffects",props:{delay:{},duration:{}},setup(u){const e=u,t=b(!0);return N(async()=>{await B(e.delay),t.value=!1,await B(e.duration),t.value=!0}),(n,s)=>t.value?l("v-if",!0):(o(),r("div",he,[(o(),r(k,null,T(8,m=>i("div",{key:m,class:"line"},s[0]||(s[0]=[i("div",null,[i("span")],-1)]))),64))]))}}),ge={flex:"~ col",class:"yun-square-container items-center justify-center text-center max-w-2xl"},ye={flex:"~ col",class:"yun-square square-rotate z-1 bg-white/80"},$e={class:"py-4 md:py-5 lg:pt-6"},xe={flex:"~ col",class:"gap-2 items-center justify-center"},ke={class:"scale-x--100 py-4 md:py-5 lg:pb-6"},we={class:"mt-4 flex-center w-72 md:w-150 m-auto gap-2",flex:"~ wrap"},Ye=v({__name:"YunPrologueSquare",setup(u){const e=I(),t=b(!1);return(n,s)=>{const m=be,_=R,f=H,d=ve,p=fe,C=W,$=pe,Y=ue,z=G,S=ce;return o(),r("div",ge,[L(n.$slots,"default",{},void 0,!0),i("div",{flex:"~ col center",class:h(["info-with-avatar relative duration-800 transition-cubic-bezier-ease-in",{show:t.value}])},[a(D,{"enter-from-class":"enter-from","enter-to-class":"enter-to",appear:"",onAfterAppear:s[0]||(s[0]=A=>t.value=!0)},{default:x(()=>[i("div",ye,[a(m,{class:"absolute top-0 left-0 right-0 bottom-0 size-full scale-200",delay:200,duration:400}),a(D,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-400 delay-400",appear:""},{default:x(()=>[a(_)]),_:1})])]),_:1}),i("div",{class:h(["info",{show:t.value}])},[a(f,{class:"mt-3"}),a(d),i("div",$e,[a(p)]),i("div",xe,[a(C),a($),a(Y)]),i("div",ke,[a(p)]),a(z),i("div",we,[a(S,{page:{name:"博客文章",icon:"i-ri-article-line",url:"/posts/"}}),L(n.$slots,"default",{},void 0,!0),(o(!0),r(k,null,T(c(e).pages,(A,V)=>(o(),y(S,{key:V,page:A},null,8,["page"]))),128))])],2)],2)])}}}),Ce=E(Ye,[["__scopeId","data-v-8a507115"]]),Se=v({__name:"YunGoDown",setup(u){return(e,t)=>(o(),r("button",{class:"go-down w-20 bottom-0 text-sm md:bottom-2 md:text-40px","aria-label":"go-down",onClick:t[0]||(t[0]=(...n)=>c(F)&&c(F)(...n))},t[1]||(t[1]=[i("div",{"i-ri-arrow-down-s-fill":"","inline-flex":""},null,-1)])))}}),Ae={class:"banner-char-container"},Be={class:"char"},Le=v({__name:"YunBannerCharContainer",props:{title:{},chars:{}},setup(u){return(e,t)=>(o(),r("div",Ae,[(o(!0),r(k,null,T(e.title,(n,s)=>(o(),r("div",{key:s,class:"char-box"},[i("span",{class:h([s%2!==0?"char-right":"char-left"]),style:P({"--banner-char-size":`${e.chars[s]}rem`})},[i("span",Be,g(n),1)],6)]))),128))]))}});function De(u){const e=w(()=>{const n=[];for(let s=0;s<u.title.length;s++){const m=O(1.5,3.5);n.push(m)}return n}),t=w(()=>e.value.reduce((n,s)=>n+s,0));return{chars:e,totalCharHeight:t}}const Ie={class:"banner-line-container"},Ne={class:"banner-line-container bottom"},ze=v({__name:"YunBanner",setup(u){const e=j(),t=I(),{totalCharHeight:n,chars:s}=De(t.value.banner),m=w(()=>{const p={"--total-char-height":`${n.value}rem`,"--banner-line-height":`calc(var(--banner-height, 100 * var(--vh)) / 2 - ${n.value/2}rem)`,"justify-content":"space-between"};return e.isStrato&&(p.borderBottom="1px solid var(--banner-line-color)"),p}),_=b("enter"),f=w(()=>_.value),d=b("banner");return N(async()=>{await B(500),_.value="active",e.isNimbo&&(await B(500),_.value="exit",d.value="prologue")}),(p,C)=>{const $=Le,Y=Se;return o(),r("div",{id:"yun-banner",border:"b-1px b-solid b-$banner-line-color",style:P(m.value)},[i("div",Ie,[i("div",{class:h(["banner-line vertical-line-top",f.value])},null,2)]),c(e).isNimbo?(o(),r(k,{key:0},[d.value==="banner"?(o(),y($,{key:0,title:c(t).banner.title,chars:c(s)},null,8,["title","chars"])):l("v-if",!0)],64)):l("v-if",!0),c(e).isStrato?(o(),y($,{key:1,title:c(t).banner.title,chars:c(s)},null,8,["title","chars"])):l("v-if",!0),i("div",Ne,[i("div",{class:h(["banner-line vertical-line-bottom",f.value])},null,2)]),a(Y)],4)}}}),je={class:"absolute top-0 left-5 right-5 bottom-0 flex-center"},Ge=v({__name:"home",setup(u){const e=j(),t=X(),n=I(),s=w(()=>t.path.startsWith("/page")),m=w(()=>{const _=n.value.notice;return _.enable&&(s.value?!_.hideInPages:!0)});return(_,f)=>{const d=ze,p=Ce,C=ie,$=ne,Y=Q,z=U("RouterView"),S=J,A=K;return o(),r(k,null,[a(S,{class:h(["items-center flex-col",{"mt-0!":!s.value}])},{default:x(()=>[s.value?l("v-if",!0):(o(),r(k,{key:0},[a(d),a(D,{"enter-from-class":"scale-60","enter-to-class":"scale-100","enter-active-class":"transition-300 transition-cubic-bezier-ease-in-out delay-1000",appear:""},{default:x(()=>[i("div",je,[a(D,{"enter-from-class":"op-0","enter-to-class":"op-100","enter-active-class":"transition-800 delay-1000",appear:""},{default:x(()=>[a(p,{class:"z-1"})]),_:1})])]),_:1}),c(n).say.enable?(o(),y(C,{key:0,w:"full"})):l("v-if",!0),c(e).isNimbo?(o(),y($,{key:1,class:"absolute left-0 top-0 right-0 bottom-0"})):l("v-if",!0)],64)),m.value?(o(),y(Y,{key:1,class:h(["mb-2 md:mb-6",{"mt-4":!s.value}]),content:c(n).notice.content},null,8,["class","content"])):l("v-if",!0),L(_.$slots,"board"),L(_.$slots,"default",{},()=>[a(z)])]),_:3},8,["class"]),a(A)],64)}}});export{Ge as default};
