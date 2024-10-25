import{d as h,o as r,f as a,k as n,B as _,C as s,x as o,p as v,g as u,m as y}from"./vue.esm-bundler-DZRSKMuI.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as F}from"./TextInput-DouKHoE0.js";const b=h({inheritAttrs:!1,props:{label:{type:String,default:""},subLabel:{type:String,default:""},errorMessage:{type:String,default:""},required:{type:Boolean,default:null}}}),L={key:0,class:"label-line"},M={class:"label"},k={key:0},G={class:"field-wrap"},S={key:1,class:"error-message"},V={class:"note"};function $(e,B,C,N,I,T){return r(),a("div",y(e.$attrs,{class:"field-group"}),[e.label?(r(),a("div",L,[n("p",M,[_(s(e.label),1),e.subLabel?(r(),a("small",k,s(e.subLabel),1)):o("",!0)]),e.required!==null?(r(),a("p",{key:0,class:v(["required-badge",{"is-required":e.required}])},s(e.required?"必須":"任意"),3)):o("",!0)])):o("",!0),n("div",G,[u(e.$slots,"default",{},void 0,!0)]),e.errorMessage?(r(),a("p",S,s(e.errorMessage),1)):o("",!0),n("div",V,[u(e.$slots,"note",{},void 0,!0)])],16)}const d=q(b,[["render",$],["__scopeId","data-v-3b2fbddf"]]);b.__docgenInfo={exportName:"default",displayName:"FieldGroup",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMessage",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",type:{name:"boolean | null"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"note"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/FieldGroup/FieldGroup.vue"]};const w={title:"FieldGroup",component:d,render:e=>({components:{FieldGroup:d,TextInput:F},setup(){return{args:e}},template:`
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
      </FieldGroup>`})},l={name:"default",args:{label:"email",required:!0,errorMessage:"",subLabel:"",error:!1,note:""}},t={name:"has options",args:{label:"email",required:!1,errorMessage:"invalid email",subLabel:"email",error:!0,note:"hogehoge"}};var i,p,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'default',
  args: {
    label: 'email',
    required: true,
    errorMessage: '',
    subLabel: '',
    error: false,
    note: ''
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,c,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'has options',
  args: {
    label: 'email',
    required: false,
    errorMessage: 'invalid email',
    subLabel: 'email',
    error: true,
    note: 'hogehoge'
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const H=["Default","HasOptions"];export{l as Default,t as HasOptions,H as __namedExportsOrder,w as default};
