import{C as r}from"./CheckBox-Brmx__a7.js";import"./vue.esm-bundler-CXKGtDvb.js";import"./Icon-DvnrdZbN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"CheckBox",component:r,render:m=>({components:{CheckBox:r},setup(){return{args:m}},template:`
      <div>
        <CheckBox v-model="args.modelValue" :disabled="args.disabled" class="additional" />
        <p>{{ args.modelValue ? 'on' : 'off' }}</p>
      </div>
    `})},e={name:"default",args:{modelValue:!0,disabled:!1}},a={name:"disabled",args:{modelValue:!0,disabled:!0}};var s,o,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'default',
  args: {
    modelValue: true,
    disabled: false
  }
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var t,l,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'disabled',
  args: {
    modelValue: true,
    disabled: true
  }
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const f=["Default","Disabled"];export{e as Default,a as Disabled,f as __namedExportsOrder,b as default};
