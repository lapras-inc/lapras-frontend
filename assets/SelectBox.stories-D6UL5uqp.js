import{d as h,f as l,k as u,C as _,v as y,B as p,F as S,s as V,l as B,q as I,o as n,D as b}from"./vue.esm-bundler-BTCVYwK7.js";import{I as k}from"./Icon-B6yKB3Zo.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=h({components:{Icon:k},props:{options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},modelValue:{type:String,default:""}},emits:{"update:modelValue":null},setup(e,a){const r=t=>a.emit("update:modelValue",t);return{context:a,onInput:t=>r(t.target.value)}}}),x={class:"select-box"},C=["value"],D=["value"],N={class:"icon-wrap"};function $(e,a,r,v,t,F){const g=I("Icon");return n(),l("div",x,[u("select",{class:"select",value:e.modelValue,onChange:a[0]||(a[0]=(...o)=>e.onInput&&e.onInput(...o))},[e.placeholder?_((n(),l("option",{key:0,value:""},p(e.placeholder),513)),[[b,!1]]):y("",!0),(n(!0),l(S,null,V(e.options,o=>(n(),l("option",{value:o.value,key:o.value},p(o.label),9,D))),128))],40,C),u("div",N,[B(g,{name:"arrow-down"})])])}const c=w(f,[["render",$],["__scopeId","data-v-d6a6e489"]]);f.__docgenInfo={exportName:"default",displayName:"SelectBox",description:"",tags:{},props:[{name:"options",type:{name:"SelectBoxOption[]"},defaultValue:{func:!0,value:"() => []"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/SelectBox/SelectBox.vue"]};const A={title:"SelectBox",component:c,render:e=>({components:{SelectBox:c},setup(){return{args:e}},template:`
      <div>
        <SelectBox :options="args.options" :placeholder="args.placeholder" />
      </div>
    `})},s={name:"default",args:{options:[{value:"hoge key",label:"hoge label"},{value:"fuga key",label:"fuga label"}],placeholder:"placeholder"}};var d,m,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'default',
  args: {
    options: [{
      value: 'hoge key',
      label: 'hoge label'
    }, {
      value: 'fuga key',
      label: 'fuga label'
    }],
    placeholder: 'placeholder'
  }
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,A as default};
