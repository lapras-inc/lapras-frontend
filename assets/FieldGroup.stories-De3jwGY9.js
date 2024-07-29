import{d as h,o as a,f as r,k as n,y,z as s,A as l,p as _,g as u,m as q}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as F}from"./TextInput-Dt0JHYtG.js";const b=h({inheritAttrs:!1,props:{label:{type:String,default:""},subLabel:{type:String,default:""},errorMessage:{type:String,default:""},required:{type:Boolean,default:null}}}),L={key:0,class:"label-line"},M={class:"label"},k={key:0},G={class:"field-wrap"},S={key:1,class:"error-message"},V={class:"note"};function $(e,B,N,C,I,T){return a(),r("div",q(e.$attrs,{class:"field-group"}),[e.label?(a(),r("div",L,[n("p",M,[y(s(e.label),1),e.subLabel?(a(),r("small",k,s(e.subLabel),1)):l("",!0)]),e.required!==null?(a(),r("p",{key:0,class:_(["required-badge",{"is-required":e.required}])},s(e.required?"必須":"任意"),3)):l("",!0)])):l("",!0),n("div",G,[u(e.$slots,"default",{},void 0,!0)]),e.errorMessage?(a(),r("p",S,s(e.errorMessage),1)):l("",!0),n("div",V,[u(e.$slots,"note",{},void 0,!0)])],16)}const i=v(b,[["render",$],["__scopeId","data-v-1a297517"]]);b.__docgenInfo={exportName:"default",displayName:"FieldGroup",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMessage",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"note"}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/FieldGroup/FieldGroup.vue"]};const w={title:"FieldGroup",component:i,render:e=>({components:{FieldGroup:i,TextInput:F},setup(){return{args:e}},template:`
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
      </FieldGroup>`})},o={name:"default",args:{label:"email",required:!0,errorMessage:"",subLabel:"",error:!1,note:""}},t={name:"has options",args:{label:"email",required:!1,errorMessage:"invalid email",subLabel:"email",error:!0,note:"hogehoge"}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'default',
  args: {
    label: 'email',
    required: true,
    errorMessage: '',
    subLabel: '',
    error: false,
    note: ''
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'has options',
  args: {
    label: 'email',
    required: false,
    errorMessage: 'invalid email',
    subLabel: 'email',
    error: true,
    note: 'hogehoge'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Default","HasOptions"];export{o as Default,t as HasOptions,z as __namedExportsOrder,w as default};
