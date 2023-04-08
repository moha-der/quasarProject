import{c as q,Q as c}from"./QBtn.1fbad925.js";import{Q as L}from"./QToolbarTitle.d207f0df.js";import{c as k,b as C,Q as S,a as V,d as $}from"./QDrawer.77123c3b.js";import{a as d,Q as D}from"./QList.6f688183.js";import{a as N,Q as T}from"./QLayout.9c1f2145.js";import{Q as B,_ as F,o,c as n,w as t,a as e,e as p,b as l,X as h,W as I,V as E,r as x,d as A,R as v,U,ad as G,ae as H,f as Q,a2 as M}from"./index.f4629730.js";import"./render.88f1a746.js";import"./dom.f0aee417.js";import"./use-dark.36564460.js";const O=B({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function P(a,i,m,f,u,r){return o(),n(C,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:t(()=>[a.icon?(o(),n(k,{key:0,avatar:""},{default:t(()=>[e(q,{name:a.icon},null,8,["name"])]),_:1})):p("",!0),e(k,null,{default:t(()=>[e(d,null,{default:t(()=>[l(h(a.title),1)]),_:1}),e(d,{caption:""},{default:t(()=>[l(h(a.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var R=F(O,[["render",P]]);const ae={__name:"MainLayout",setup(a){const i=I(),m=E(),f=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],u=i.isAuthenticated,r=x(!1),b=()=>r.value=!r.value,g=()=>{i.SIGN_OUT(),m.push("/")};return(j,_)=>{const w=Q("router-link"),y=Q("router-view");return o(),n(N,{view:"lHh Lpr lFf"},{default:t(()=>[e(V,{elevated:""},{default:t(()=>[e(S,null,{default:t(()=>[e(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:b}),e(L,null,{default:t(()=>[e(w,{to:"/",style:{"text-decoration":"none",cursor:"pointer"},class:"text-white"},{default:t(()=>[l(" System Name ")]),_:1})]),_:1}),A("div",null,[v(u)?p("",!0):(o(),n(c,{key:0,flat:"",dense:"",label:"Login",to:"/login"})),v(u)?(o(),n(c,{key:1,flat:"",dense:"",label:"Logout",onClick:g,id:"logout-button"})):p("",!0)])]),_:1})]),_:1}),e($,{modelValue:r.value,"onUpdate:modelValue":_[0]||(_[0]=s=>r.value=s),bordered:"","show-if-above":""},{default:t(()=>[e(D,null,{default:t(()=>[e(d,{header:""},{default:t(()=>[l(" Essential Links ")]),_:1}),(o(),U(H,null,G(f,s=>e(R,M({key:s.title},s),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(T,null,{default:t(()=>[e(y)]),_:1})]),_:1})}}};export{ae as default};
