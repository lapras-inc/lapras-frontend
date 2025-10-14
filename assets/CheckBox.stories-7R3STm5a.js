import{C as t}from"./CheckBox-dwVZx_Ec.js";import"./vue.esm-bundler-BTCVYwK7.js";import"./Icon-B6yKB3Zo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"CheckBox",component:t,render:p=>({components:{CheckBox:t},setup(){return{args:p}},template:`
      <div>
        <CheckBox v-model="args.modelValue" v-model:indeterminate="args.indeterminate" :disabled="args.disabled" class="additional" />
        <p>modelValue: {{ args.modelValue ? 'on' : 'off' }}</p>
        <p>indeterminate: {{ args.indeterminate }}</p>
      </div>
    `})},e={name:"default",args:{modelValue:!0,disabled:!1,indeterminate:!1}},a={name:"disabled",args:{modelValue:!0,disabled:!0,indeterminate:!1}},r={name:"indeterminate",args:{modelValue:!1,disabled:!1,indeterminate:!0}};var n,s,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'default',
  args: {
    modelValue: true,
    disabled: false,
    indeterminate: false
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'disabled',
  args: {
    modelValue: true,
    disabled: true,
    indeterminate: false
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'indeterminate',
  args: {
    modelValue: false,
    disabled: false,
    indeterminate: true
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const v=["Default","Disabled","Indeterminate"];export{e as Default,a as Disabled,r as Indeterminate,v as __namedExportsOrder,x as default};
