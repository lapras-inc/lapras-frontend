import{d as g,o as V,f as _,k as c,m as I,p as R,q as h,s as k}from"./vue.esm-bundler-DZRSKMuI.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=g({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":null},setup(e,a){const l=s=>{s&&a.emit("update:modelValue",!0)};return{onInput:s=>l(s.target.checked)}}}),B=e=>(h("data-v-2b146e1a"),e=e(),k(),e),S=["checked","disabled"],$=B(()=>c("div",{class:"dot"},null,-1));function D(e,a,l,b,s,C){return V(),_("label",{class:R(["radio",{"is-disabled":e.disabled}])},[c("input",I(e.$attrs,{checked:e.modelValue,onChange:a[0]||(a[0]=(...v)=>e.onInput&&e.onInput(...v)),class:"input",type:"radio",disabled:e.disabled}),null,16,S),$],2)}const d=y(f,[["render",D],["__scopeId","data-v-2b146e1a"]]);f.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/Radio/Radio.vue"]};const E={title:"Radio",component:d,render:e=>({components:{Radio:d},setup(){return{args:e}},template:`
      <div>
        <Radio @update:modelValue="args.value = 'a'" :modelValue="args.value === 'a'" v-bind="args" />
        <Radio @update:modelValue="args.value = 'b'" :modelValue="args.value === 'b'" v-bind="args" />
        <p>{{ args.value }}</p>
      </div>
    `})},n={name:"default",args:{value:"a"}},o={name:"disabled",args:{modelValue:!1,disabled:!0},render:e=>({components:{Radio:d},setup(){return{args:e}},template:`
      <div>
        <Radio v-model="args.modelValue" v-bind="args" />
        <p>disabled</p>
      </div>
    `})};var t,r,u;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: 'a'
  }
}`,...(u=(r=n.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'disabled',
  args: {
    modelValue: false,
    disabled: true
  },
  render: args => ({
    components: {
      Radio
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Radio v-model="args.modelValue" v-bind="args" />
        <p>disabled</p>
      </div>
    \`
  })
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["Default","Disabled"];export{n as Default,o as Disabled,q as __namedExportsOrder,E as default};
