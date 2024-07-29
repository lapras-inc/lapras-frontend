import{d as b,o as V,f as _,k as c,m as h,p as I,q as R,s as k}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=b({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":null},setup(e,a){const t=s=>{s&&a.emit("update:modelValue",!0)};return{onInput:s=>t(s.target.checked)}}}),B=e=>(R("data-v-4f75ed60"),e=e(),k(),e),S=["checked"],$=B(()=>c("div",{class:"dot"},null,-1));function D(e,a,t,g,s,C){return V(),_("label",{class:I(["radio",{"is-disabled":e.disabled}])},[c("input",h(e.$attrs,{checked:e.modelValue,onChange:a[0]||(a[0]=(...v)=>e.onInput&&e.onInput(...v)),class:"input",type:"radio"}),null,16,S),$],2)}const d=y(f,[["render",D],["__scopeId","data-v-4f75ed60"]]);f.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/Radio/Radio.vue"]};const w={title:"Radio",component:d,render:e=>({components:{Radio:d},setup(){return{args:e}},template:`
      <div>
        <Radio @update:modelValue="args.value = 'a'" :modelValue="args.value === 'a'" v-bind="args" />
        <Radio @update:modelValue="args.value = 'b'" :modelValue="args.value === 'b'" v-bind="args" />
        <p>{{ args.value }}</p>
      </div>
    `})},o={name:"default",args:{value:"a"}},n={name:"disabled",args:{modelValue:!1,disabled:!0},render:e=>({components:{Radio:d},setup(){return{args:e}},template:`
      <div>
        <Radio v-model="args.modelValue" v-bind="args" />
        <p>disabled</p>
      </div>
    `})};var l,r,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: 'a'
  }
}`,...(u=(r=o.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const E=["Default","Disabled"];export{o as Default,n as Disabled,E as __namedExportsOrder,w as default};
