import{T as r}from"./ToggleSwitch-Cs4W-V_9.js";import{r as c}from"./vue.esm-bundler-CXKGtDvb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"ToggleSwitch",component:r,render:s=>({components:{ToggleSwitch:r},setup(){const u=c(s.value);return{args:s,value:u}},template:`
      <div>
        <ToggleSwitch v-model="value" :disabled="args.disabled" />
        <p>{{ value ? 'on' : 'off' }}</p>
      </div>
    `})},e={name:"default",args:{value:!1,disabled:!1}},a={name:"has label",args:{value:!1,disabled:!0}};var l,t,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: false,
    disabled: false
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var n,d,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'has label',
  args: {
    value: false,
    disabled: true
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const v=["Default","HasLabel"];export{e as Default,a as HasLabel,v as __namedExportsOrder,g as default};
