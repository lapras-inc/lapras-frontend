import{a as we}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as $e,o as h,y as _e,A as Ve,m as xe,z as He,f as v,g as y,x as B,k as Le}from"./vue.esm-bundler-DZRSKMuI.js";import{I as z}from"./Icon-DBiXbAZg.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const Fe=$e({inheritAttrs:!1,components:{Icon:z},props:{skin:{type:String,default:"primary"},size:{type:String,default:"m"},disabled:{type:Boolean,default:void 0},enhanced:{type:Boolean,default:!1},tag:{type:String,default:"button"}}}),Pe={key:0,class:"icon-wrap is-left"},Ce={class:"body"},Ee={key:1,class:"icon-wrap is-right"};function Me(e,Ne,Xe,Ae,Re,Te){return h(),_e(He(e.tag),xe(e.$attrs,{class:[[`skin-${e.skin}`,`size-${e.size}`,e.enhanced&&"is-enhanced"],"flat-button"],disabled:e.disabled||void 0}),{default:Ve(()=>[e.$slots.leftIcon?(h(),v("div",Pe,[y(e.$slots,"leftIcon",{},void 0,!0)])):B("",!0),Le("div",Ce,[y(e.$slots,"default",{},void 0,!0)]),e.$slots.rightIcon?(h(),v("div",Ee,[y(e.$slots,"rightIcon",{},void 0,!0)])):B("",!0)]),_:3},16,["class","disabled"])}const S=De(Fe,[["render",Me],["__scopeId","data-v-ef3a5852"]]);Fe.__docgenInfo={exportName:"default",displayName:"FlatButton",description:"",tags:{},props:[{name:"skin",values:["important","primary","primary-line","secondary","tertiary","muted","disabled"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",values:["xl","l","m","s","xs"],type:{name:"string"},defaultValue:{func:!1,value:"'m'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"enhanced",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tag",type:{name:"string"},defaultValue:{func:!1,value:"'button'"}}],slots:[{name:"leftIcon"},{name:"default"},{name:"rightIcon"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/FlatButton/FlatButton.vue"]};const Ke={title:"FlatButton",component:S,render:e=>({components:{FlatButton:S,Icon:z},setup(){return{args:e,action:we("clicked")}},template:`
      <FlatButton
        @click="action"
        :skin="args.skin"
        :size="args.size"
        :enhanced="args.enhanced"
      >
        <template #default>{{ args.label }}</template>
        <template v-if="args.leftIcon" #leftIcon>
          <Icon :name="args.leftIcon" />
        </template>
        <template v-if="args.rightIcon" #rightIcon>
          <Icon :name="args.rightIcon" />
        </template>
      </FlatButton>
    `})},a={name:"default",args:{label:"label",skin:void 0,size:void 0,enhanced:!1,leftIcon:void 0,rightIcon:void 0}},n={name:"skin: important",args:{label:"label",skin:"important"}},s={name:"skin: primary",args:{label:"label",skin:"primary"}},r={name:"skin: primary line",args:{label:"label",skin:"primary-line"}},t={name:"skin: secondary",args:{label:"label",skin:"secondary"}},o={name:"skin: tertiary",args:{label:"label",skin:"tertiary"}},l={name:"skin: muted",args:{label:"label",skin:"muted"}},i={name:"skin: disabled",args:{label:"label",skin:"disabled"}},c={name:"size: xl",args:{label:"label",size:"xl"}},m={name:"size: l",args:{label:"label",size:"l"}},d={name:"size: m",args:{label:"label",size:"m"}},p={name:"size: s",args:{label:"label",size:"s"}},u={name:"size: xs",args:{label:"label",size:"xs"}},g={name:"has icons",args:{label:"label",leftIcon:"arrow-left",rightIcon:"arrow-right"}},f={name:"has left icon",args:{label:"label",leftIcon:"arrow-left"}},b={name:"has right icon",args:{label:"label",rightIcon:"arrow-right"}},k={name:"inline",args:{label:"Button",leftIcon:"cross"},render:e=>({components:{FlatButton:S,Icon:z},setup(){return{args:e}},template:`
      <span style="display: inline-block;">
        <FlatButton
          :skin="args.skin"
          :size="args.size"
          :enhanced="args.enhanced"
        >
          <template #default>{{ args.label }}</template>
          <template v-if="args.leftIcon" #leftIcon>
            <Icon :name="args.leftIcon" />
          </template>
          <template v-if="args.rightIcon" #rightIcon>
            <Icon :name="args.rightIcon" />
          </template>
        </FlatButton>
      </span>
    `})},I={name:"enhanced",args:{label:"Button",enhanced:!0}};var F,w,$;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'default',
  args: {
    label: 'label',
    skin: undefined,
    size: undefined,
    enhanced: false,
    leftIcon: undefined,
    rightIcon: undefined
  }
}`,...($=(w=a.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var _,V,x;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'skin: important',
  args: {
    label: 'label',
    skin: 'important'
  }
}`,...(x=(V=n.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var H,L,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'skin: primary',
  args: {
    label: 'label',
    skin: 'primary'
  }
}`,...(D=(L=s.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var P,C,E;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'skin: primary line',
  args: {
    label: 'label',
    skin: 'primary-line'
  }
}`,...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var M,N,X;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'skin: secondary',
  args: {
    label: 'label',
    skin: 'secondary'
  }
}`,...(X=(N=t.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var A,R,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'skin: tertiary',
  args: {
    label: 'label',
    skin: 'tertiary'
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var O,j,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'skin: muted',
  args: {
    label: 'label',
    skin: 'muted'
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,J,K;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'skin: disabled',
  args: {
    label: 'label',
    skin: 'disabled'
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'size: xl',
  args: {
    label: 'label',
    size: 'xl'
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'size: l',
  args: {
    label: 'label',
    size: 'l'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,se;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'size: m',
  args: {
    label: 'label',
    size: 'm'
  }
}`,...(se=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,te,oe;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'size: s',
  args: {
    label: 'label',
    size: 's'
  }
}`,...(oe=(te=p.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ie,ce;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'size: xs',
  args: {
    label: 'label',
    size: 'xs'
  }
}`,...(ce=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,de,pe;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'has icons',
  args: {
    label: 'label',
    leftIcon: 'arrow-left',
    rightIcon: 'arrow-right'
  }
}`,...(pe=(de=g.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,ge,fe;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'has left icon',
  args: {
    label: 'label',
    leftIcon: 'arrow-left'
  }
}`,...(fe=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var be,ke,Ie;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'has right icon',
  args: {
    label: 'label',
    rightIcon: 'arrow-right'
  }
}`,...(Ie=(ke=b.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var he,ye,Se;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'inline',
  args: {
    label: 'Button',
    leftIcon: 'cross'
  },
  render: args => ({
    components: {
      FlatButton,
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <span style="display: inline-block;">
        <FlatButton
          :skin="args.skin"
          :size="args.size"
          :enhanced="args.enhanced"
        >
          <template #default>{{ args.label }}</template>
          <template v-if="args.leftIcon" #leftIcon>
            <Icon :name="args.leftIcon" />
          </template>
          <template v-if="args.rightIcon" #rightIcon>
            <Icon :name="args.rightIcon" />
          </template>
        </FlatButton>
      </span>
    \`
  })
}`,...(Se=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var ze,ve,Be;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'enhanced',
  args: {
    label: 'Button',
    enhanced: true
  }
}`,...(Be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};const Qe=["Default","SkinImportant","SkinPrimary","SkinPrimaryLine","SkinSecondary","SkinTertiary","SkinMuted","SkinDisabled","SizeXl","SizeL","SizeM","SizeS","SizeXs","HasIcons","HasLeftIcon","HasRightIcon","Inline","Enhanced"];export{a as Default,I as Enhanced,g as HasIcons,f as HasLeftIcon,b as HasRightIcon,k as Inline,m as SizeL,d as SizeM,p as SizeS,c as SizeXl,u as SizeXs,i as SkinDisabled,n as SkinImportant,l as SkinMuted,s as SkinPrimary,r as SkinPrimaryLine,t as SkinSecondary,o as SkinTertiary,Qe as __namedExportsOrder,Ke as default};
