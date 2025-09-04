import{d as g,f as V,j as r,m as R,l as _,o as I}from"./vue.esm-bundler-B7hVH_fS.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=g({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":null},setup(e,a){const l=s=>{s&&a.emit("update:modelValue",!0)};return{onInput:s=>l(s.target.checked)}}}),y=["checked","disabled"];function B(e,a,l,b,s,$){return I(),V("label",{class:_(["radio",{"is-disabled":e.disabled}])},[r("input",R(e.$attrs,{checked:e.modelValue,onChange:a[0]||(a[0]=(...v)=>e.onInput&&e.onInput(...v)),class:"input",type:"radio",disabled:e.disabled}),null,16,y),a[1]||(a[1]=r("div",{class:"dot"},null,-1))],2)}const o=k(f,[["render",B],["__scopeId","data-v-2b146e1a"]]);f.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/Radio/Radio.vue"]};const C={title:"Radio",component:o,render:e=>({components:{Radio:o},setup(){return{args:e}},template:`
      <div>
        <Radio @update:modelValue="args.value = 'a'" :modelValue="args.value === 'a'" v-bind="args" />
        <Radio @update:modelValue="args.value = 'b'" :modelValue="args.value === 'b'" v-bind="args" />
        <p>{{ args.value }}</p>
      </div>
    `})},n={name:"default",args:{value:"a"}},d={name:"disabled",args:{modelValue:!1,disabled:!0},render:e=>({components:{Radio:o},setup(){return{args:e}},template:`
      <div>
        <Radio v-model="args.modelValue" v-bind="args" />
        <p>disabled</p>
      </div>
    `})};var t,u,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: 'a'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,m,c;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(m=d.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Default","Disabled"];export{n as Default,d as Disabled,N as __namedExportsOrder,C as default};
