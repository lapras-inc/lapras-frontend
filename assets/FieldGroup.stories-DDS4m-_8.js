import{d as h,o as r,f as a,k as n,y,z as s,A as o,p as _,g as u,m as v}from"./vue.esm-bundler-C4Pyz16h.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as F}from"./TextInput-vkwZ5q0F.js";const b=h({inheritAttrs:!1,props:{label:{type:String,default:""},subLabel:{type:String,default:""},errorMessage:{type:String,default:""},required:{type:Boolean,default:null}}}),L={key:0,class:"label-line"},M={class:"label"},k={key:0},G={class:"field-wrap"},S={key:1,class:"error-message"},V={class:"note"};function $(e,B,N,C,I,T){return r(),a("div",v(e.$attrs,{class:"field-group"}),[e.label?(r(),a("div",L,[n("p",M,[y(s(e.label),1),e.subLabel?(r(),a("small",k,s(e.subLabel),1)):o("",!0)]),e.required!==null?(r(),a("p",{key:0,class:_(["required-badge",{"is-required":e.required}])},s(e.required?"必須":"任意"),3)):o("",!0)])):o("",!0),n("div",G,[u(e.$slots,"default",{},void 0,!0)]),e.errorMessage?(r(),a("p",S,s(e.errorMessage),1)):o("",!0),n("div",V,[u(e.$slots,"note",{},void 0,!0)])],16)}const i=q(b,[["render",$],["__scopeId","data-v-1a297517"]]);b.__docgenInfo={exportName:"default",displayName:"FieldGroup",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMessage",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"note"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/FieldGroup/FieldGroup.vue"]};const w={title:"FieldGroup",component:i,render:e=>({components:{FieldGroup:i,TextInput:F},setup(){return{args:e}},template:`
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
      </FieldGroup>`})},l={name:"default",args:{label:"email",required:!0,errorMessage:"",subLabel:"",error:!1,note:""}},t={name:"has options",args:{label:"email",required:!1,errorMessage:"invalid email",subLabel:"email",error:!0,note:"hogehoge"}};var d,p,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'default',
  args: {
    label: 'email',
    required: true,
    errorMessage: '',
    subLabel: '',
    error: false,
    note: ''
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'has options',
  args: {
    label: 'email',
    required: false,
    errorMessage: 'invalid email',
    subLabel: 'email',
    error: true,
    note: 'hogehoge'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const z=["Default","HasOptions"];export{l as Default,t as HasOptions,z as __namedExportsOrder,w as default};
