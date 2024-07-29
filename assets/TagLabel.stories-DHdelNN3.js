import{d as h,o as s,f as n,g as c,A as y,k as _,p as I,m as $}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as E}from"./Icon-DvnrdZbN.js";const T=h({inheritAttrs:!1,props:{background:{type:String,default:"#EAEAEA"},color:{type:String,default:"#7F7F7F"}}}),F={key:0,class:"sub"};function B(e,P,H,N,V,C){return s(),n("div",$(e.$attrs,{style:{background:e.background,color:e.color},class:"tag-label"}),[e.$slots.subLabel?(s(),n("p",F,[c(e.$slots,"subLabel",{},void 0,!0)])):y("",!0),_("p",{class:I(["main",{"has-sub-label":e.$slots.subLabel}])},[c(e.$slots,"default",{},void 0,!0)],2)],16)}const a=A(T,[["render",B],["__scopeId","data-v-b448a5a6"]]);T.__docgenInfo={exportName:"default",displayName:"TagLabel",description:"",tags:{},props:[{name:"background",type:{name:"string"},defaultValue:{func:!1,value:"'#EAEAEA'"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"'#7F7F7F'"}}],slots:[{name:"subLabel"},{name:"default"}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/TagLabel/TagLabel.vue"]};const w={title:"TagLabel",component:a},r={name:"default",args:{defaultSlot:"label",background:void 0,color:void 0},render:e=>({components:{TagLabel:a},setup(){return{args:e}},template:`
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `})},o={name:"background",args:{defaultSlot:"OSS",background:"#003089",color:"#fff"},render:e=>({components:{TagLabel:a},setup(){return{args:e}},template:`
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `})},l={name:"has level",args:{defaultSlot:"Python",background:void 0,color:void 0,level:"5",subLabel:"5"},render:e=>({components:{TagLabel:a},setup(){return{args:e}},template:`
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>{{ args.subLabel }}</template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `})},t={name:"has icon",args:{defaultSlot:"Python",background:void 0,color:void 0,level:"5",icon:"eye-close"},render:e=>({components:{TagLabel:a,Icon:E},setup(){return{args:e}},template:`
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>
          <Icon :name="args.icon" />
        </template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `})};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'default',
  args: {
    defaultSlot: 'label',
    background: undefined,
    color: undefined
  },
  render: args => ({
    components: {
      TagLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    \`
  })
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,m,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'background',
  args: {
    defaultSlot: 'OSS',
    background: '#003089',
    color: '#fff'
  },
  render: args => ({
    components: {
      TagLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    \`
  })
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,i,L;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'has level',
  args: {
    defaultSlot: 'Python',
    background: undefined,
    color: undefined,
    level: '5',
    subLabel: '5'
  },
  render: args => ({
    components: {
      TagLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>{{ args.subLabel }}</template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    \`
  })
}`,...(L=(i=l.parameters)==null?void 0:i.docs)==null?void 0:L.source}}};var k,v,S;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'has icon',
  args: {
    defaultSlot: 'Python',
    background: undefined,
    color: undefined,
    level: '5',
    icon: 'eye-close'
  },
  render: args => ({
    components: {
      TagLabel,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>
          <Icon :name="args.icon" />
        </template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    \`
  })
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const z=["Default","Background","HasLevel","HasIcon"];export{o as Background,r as Default,t as HasIcon,l as HasLevel,z as __namedExportsOrder,w as default};
