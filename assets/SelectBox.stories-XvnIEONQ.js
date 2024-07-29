import{d as h,j as _,o as l,f as n,k as u,C as y,z as p,A as S,F as V,D as I,l as b,E as k}from"./vue.esm-bundler-CXKGtDvb.js";import{I as B}from"./Icon-gV1avNZM.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=h({components:{Icon:B},props:{options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},modelValue:{type:String,default:""}},emits:{"update:modelValue":null},setup(e,a){const r=t=>a.emit("update:modelValue",t);return{context:a,onInput:t=>r(t.target.value)}}}),x={class:"select-box"},C=["value"],D=["value"],N={class:"icon-wrap"};function $(e,a,r,v,t,E){const g=_("Icon");return l(),n("div",x,[u("select",{class:"select",value:e.modelValue,onChange:a[0]||(a[0]=(...o)=>e.onInput&&e.onInput(...o))},[e.placeholder?y((l(),n("option",{key:0,value:""},p(e.placeholder),513)),[[k,!1]]):S("",!0),(l(!0),n(V,null,I(e.options,o=>(l(),n("option",{value:o.value,key:o.value},p(o.label),9,D))),128))],40,C),u("div",N,[b(g,{name:"arrow-down"})])])}const c=w(f,[["render",$],["__scopeId","data-v-e11577f7"]]);f.__docgenInfo={exportName:"default",displayName:"SelectBox",description:"",tags:{},props:[{name:"options",type:{name:"SelectBoxOption[]"},defaultValue:{func:!0,value:"() => []"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/SelectBox/SelectBox.vue"]};const j={title:"SelectBox",component:c,render:e=>({components:{SelectBox:c},setup(){return{args:e}},template:`
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
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const z=["Default"];export{s as Default,z as __namedExportsOrder,j as default};
