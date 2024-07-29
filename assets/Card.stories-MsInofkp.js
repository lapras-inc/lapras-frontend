import{d as g,o as f,f as b,g as S,m as _}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const m=g({inheritAttrs:!1,props:{skin:{type:String,default:"default"}}});function h(e,$,B,v,y,w){return f(),b("div",_(e.$attrs,{class:[`is-skin-${e.skin}`,"card"]}),[S(e.$slots,"default")],16)}const s=C(m,[["render",h]]);m.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"skin",values:["default","background","background-line"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/Card/Card.vue"]};const E={title:"Card",component:s,render:e=>({components:{Card:s},setup(){return{args:e}},template:'<Card :skin="args.skin">There is always light<br>behind the clouds.</Card>'})},n={name:"skin: default",args:{skin:"default"}},a={name:"skin: background",args:{skin:"background"}},r={name:"skin: background line",args:{skin:"background-line"}};var o,t,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'skin: default',
  args: {
    skin: 'default'
  }
}`,...(d=(t=n.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,i,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'skin: background',
  args: {
    skin: 'background'
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,k,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'skin: background line',
  args: {
    skin: 'background-line'
  }
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const L=["SkinDefault","SkinBackground","SkinBackgroundLine"];export{a as SkinBackground,r as SkinBackgroundLine,n as SkinDefault,L as __namedExportsOrder,E as default};
