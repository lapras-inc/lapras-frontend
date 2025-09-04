import{a as c}from"./index-B-lxVbXh.js";import{T as a}from"./TextInput-BFoDFfLt.js";import{r as d}from"./vue.esm-bundler-B7hVH_fS.js";import"./v4-CtRu48qb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"TextInput",component:a,args:{multiline:!1,error:!1,disabled:!1,placeholder:"placeholder",autoExpand:!1,baseTextareaHeight:56},argTypes:{type:{control:{type:"select"},options:["text","password","email","number","tel","date"],defaultValue:"text"}},render:m=>({components:{TextInput:a},setup(){const i=d(""),p=c("focus");return{args:m,value:i,onFocus:p}},template:`
      <TextInput v-bind="args" v-model="value" @focus="onFocus"/>
    `})},e={name:"default"},t={name:"multiline",args:{multiline:!0}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'default'
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,l,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'multiline',
  args: {
    multiline: true
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const h=["Default","Multiline"];export{e as Default,t as Multiline,h as __namedExportsOrder,v as default};
