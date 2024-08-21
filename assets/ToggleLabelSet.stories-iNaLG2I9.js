import{d as y,o as T,f as k,k as r,g as i,p as L,r as $}from"./vue.esm-bundler-C4Pyz16h.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as o}from"./CheckBox-CP86DqFH.js";import{T as _}from"./ToggleSwitch-O-fqZDkC.js";import"./Icon-DzxJckmy.js";const h=y({props:{isActive:{type:Boolean,default:!1},isButton:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isFlipped:{type:Boolean,default:!1}}}),w={class:"toggle"},A={class:"label"};function D(e,n,x,N,E,I){return T(),k("label",{class:L(["toggle-label-set",{"is-active":e.isActive,"is-button":e.isButton,"is-disabled":e.disabled,"is-flipped":e.isFlipped}])},[r("div",w,[i(e.$slots,"toggle",{},void 0,!0)]),r("div",A,[i(e.$slots,"default",{},void 0,!0)])],2)}const d=V(h,[["render",D],["__scopeId","data-v-29bfced2"]]);h.__docgenInfo={exportName:"default",displayName:"ToggleLabelSet",description:"",tags:{},props:[{name:"isActive",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isButton",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isFlipped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle"},{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ToggleLabelSet/ToggleLabelSet.vue"]};const H={title:"ToggleLabelSet",component:d,render:e=>({components:{ToggleLabelSet:d,CheckBox:o,ToggleSwitch:_},setup(){const n=$(e.value);return{args:e,value:n}},template:`
      <div style="width: fit-content;">
        <ToggleLabelSet
          :disabled="args.disabled"
          :isFlipped="args.isFlipped"
          :isButton="args.isButton"
          :isActive="value"
        >
          <template #toggle>
            <component :is="args.toggleComponent" v-model="value" />
          </template>
          <template #default>{{ args.label }}</template>
        </ToggleLabelSet>
      </div>
    `})},a={name:"default",args:{value:!0,label:"label",toggleComponent:o,disabled:!1,isFlipped:!1,isButton:!1}},l={name:"disabled",args:{value:!0,label:"label",toggleComponent:o,disabled:!0,isFlipped:!1,isButton:!1}},s={name:"flipped",args:{value:!0,label:"label",toggleComponent:_,disabled:!1,isFlipped:!0,isButton:!1}},t={name:"button",args:{value:!0,label:"label",toggleComponent:o,disabled:!1,isFlipped:!1,isButton:!0}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: false,
    isFlipped: false,
    isButton: false
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,c,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'disabled',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: true,
    isFlipped: false,
    isButton: false
  }
}`,...(g=(c=l.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var b,v,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'flipped',
  args: {
    value: true,
    label: 'label',
    toggleComponent: ToggleSwitch,
    disabled: false,
    isFlipped: true,
    isButton: false
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var C,F,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'button',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: false,
    isFlipped: false,
    isButton: true
  }
}`,...(S=(F=t.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const J=["Default","Disabled","Flipped","Button"];export{t as Button,a as Default,l as Disabled,s as Flipped,J as __namedExportsOrder,H as default};
