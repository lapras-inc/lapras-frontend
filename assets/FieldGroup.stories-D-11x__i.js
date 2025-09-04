import{d as h,f as r,u as s,j as n,z as _,A as l,l as v,g as u,m as y,o as a}from"./vue.esm-bundler-B7hVH_fS.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as L}from"./TextInput-BFoDFfLt.js";const b=h({inheritAttrs:!1,props:{label:{type:String,default:""},subLabel:{type:String,default:""},errorMessage:{type:String,default:""},required:{type:Boolean,default:null}}}),M={key:0,class:"label-line"},F={class:"label"},k={key:0},G={class:"field-wrap"},S={key:1,class:"error-message"},V={class:"note"};function $(e,N,B,I,T,C){return a(),r("div",y(e.$attrs,{class:"field-group"}),[e.label?(a(),r("div",M,[n("p",F,[_(l(e.label),1),e.subLabel?(a(),r("small",k,l(e.subLabel),1)):s("",!0)]),e.required!==null?(a(),r("p",{key:0,class:v(["required-badge",{"is-required":e.required}])},l(e.required?"必須":"任意"),3)):s("",!0)])):s("",!0),n("div",G,[u(e.$slots,"default",{},void 0,!0)]),e.errorMessage?(a(),r("p",S,l(e.errorMessage),1)):s("",!0),n("div",V,[u(e.$slots,"note",{},void 0,!0)])],16)}const d=q(b,[["render",$],["__scopeId","data-v-3b2fbddf"]]);b.__docgenInfo={exportName:"default",displayName:"FieldGroup",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMessage",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"note"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/FieldGroup/FieldGroup.vue"]};const z={title:"FieldGroup",component:d,render:e=>({components:{FieldGroup:d,TextInput:L},setup(){return{args:e}},template:`
      <FieldGroup
        :label="args.label"
        :required="args.required"
        :errorMessage="args.errorMessage"
        :subLabel="args.subLabel"
      >
        <template #default>
          <TextInput :error="args.error" />
        </template>
        <template #note>
          {{ args.note }}
        </template>
      </FieldGroup>`})},o={name:"default",args:{label:"email",required:!0,errorMessage:"",subLabel:"",error:!1,note:""}},t={name:"has options",args:{label:"email",required:!1,errorMessage:"invalid email",subLabel:"email",error:!0,note:"hogehoge"}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'default',
  args: {
    label: 'email',
    required: true,
    errorMessage: '',
    subLabel: '',
    error: false,
    note: ''
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,c,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'has options',
  args: {
    label: 'email',
    required: false,
    errorMessage: 'invalid email',
    subLabel: 'email',
    error: true,
    note: 'hogehoge'
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const A=["Default","HasOptions"];export{o as Default,t as HasOptions,A as __namedExportsOrder,z as default};
