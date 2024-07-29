import{d as g,o as f,f as b,g as S,m as _}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const p=g({inheritAttrs:!1,props:{skin:{type:String,default:"default"}}});function C(e,$,B,y,v,w){return f(),b("div",_(e.$attrs,{class:[`is-skin-${e.skin}`,"card"]}),[S(e.$slots,"default")],16)}const s=h(p,[["render",C]]);p.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"skin",values:["default","background","background-line"],type:{name:"string"},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/Card/Card.vue"]};const E={title:"Card",component:s,render:e=>({components:{Card:s},setup(){return{args:e}},template:'<Card :skin="args.skin">There is always light<br>behind the clouds.</Card>'})},a={name:"skin: default",args:{skin:"default"}},n={name:"skin: background",args:{skin:"background"}},r={name:"skin: background line",args:{skin:"background-line"}};var o,t,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'skin: default',
  args: {
    skin: 'default'
  }
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,i,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'skin: background',
  args: {
    skin: 'background'
  }
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,k,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'skin: background line',
  args: {
    skin: 'background-line'
  }
}`,...(m=(k=r.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const L=["SkinDefault","SkinBackground","SkinBackgroundLine"];export{n as SkinBackground,r as SkinBackgroundLine,a as SkinDefault,L as __namedExportsOrder,E as default};
