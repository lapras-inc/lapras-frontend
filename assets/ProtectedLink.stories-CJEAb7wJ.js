import{d as G,e as u,o as K,f as M,g as Q,m as U}from"./vue.esm-bundler-DZRSKMuI.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=e=>{if(e&&!(e.includes(":")&&!e.match(/^https?:\/\//i)))return e},z=G({inheritAttrs:!1,props:{href:{type:String,validator(e){return!!h(e)}},force:{type:Boolean,default:!1},target:{type:String},rel:{type:String}},setup(e){const m=u(()=>e.force?e.href:h(e.href)),i=u(()=>e.target==="_blank"?`noopener ${e.rel||""}`.replace(/\s$/,""):e.rel);return{escapedHref:m,formattedRel:i}}}),Z=["href","rel","target"];function ee(e,m,i,ae,re,te){return K(),M("a",U(e.$attrs,{href:e.escapedHref,rel:e.formattedRel,target:e.target}),[Q(e.$slots,"default")],16,Z)}const f=Y(z,[["render",ee]]);z.__docgenInfo={exportName:"default",displayName:"ProtectedLink",description:"",tags:{},props:[{name:"href",type:{name:"string"}},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"target",type:{name:"string"}},{name:"rel",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ProtectedLink/ProtectedLink.vue"]};const oe={title:"ProtectedLink",component:f,render:e=>({components:{ProtectedLink:f},setup(){return{args:e}},template:'<ProtectedLink v-bind="args">{{ args.default }}</ProtectedLink>'})},a={name:"default",args:{href:"//placehold.jp/150x150.png",default:"//placehold.jp/150x150.png"}},r={name:"http",args:{href:"http://placehold.jp/150x150.png",default:"http://placehold.jp/150x150.png"}},t={name:"https",args:{href:"https://placehold.jp/150x150.png",default:"https://placehold.jp/150x150.png"}},n={name:"absolute path",args:{href:"/example",default:"/example"}},s={name:"relative path1",args:{href:"./example",default:"./example"}},o={name:"relative path2",args:{href:"example",default:"example"}},p={name:"valid attrs inherited",args:{href:"https://placehold.jp/150x150.png",default:"https://placehold.jp/150x150.png"}},l={name:"xss javascript scheme",args:{href:"javascript:alert(document.domain)",default:"javascript:alert(document.domain)"}},c={name:"target=_blank",args:{href:"https://en.wikipedia.org/wiki/William_Shakespeare",target:"_blank",rel:"author",default:"author of Hamlet"}},d={name:"force permit any link",args:{href:"javascript:alert(document.domain)",force:!0,default:"javascript:alert(document.domain)"}};var g,x,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'default',
  args: {
    href: '//placehold.jp/150x150.png',
    default: '//placehold.jp/150x150.png'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var k,j,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'http',
  args: {
    href: 'http://placehold.jp/150x150.png',
    default: 'http://placehold.jp/150x150.png'
  }
}`,...(S=(j=r.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,P,y;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'https',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png'
  }
}`,...(y=(P=t.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var b,L,H;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'absolute path',
  args: {
    href: '/example',
    default: '/example'
  }
}`,...(H=(L=n.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var $,A,R;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'relative path1',
  args: {
    href: './example',
    default: './example'
  }
}`,...(R=(A=s.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var w,B,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'relative path2',
  args: {
    href: 'example',
    default: 'example'
  }
}`,...(F=(B=o.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var I,V,X;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'valid attrs inherited',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png'
  }
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var D,E,J;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'xss javascript scheme',
  args: {
    href: 'javascript:alert(document.domain)',
    default: 'javascript:alert(document.domain)'
  }
}`,...(J=(E=l.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var N,T,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'target=_blank',
  args: {
    href: 'https://en.wikipedia.org/wiki/William_Shakespeare',
    target: '_blank',
    rel: 'author',
    default: 'author of Hamlet'
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,O,q;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'force permit any link',
  args: {
    href: 'javascript:alert(document.domain)',
    force: true,
    default: 'javascript:alert(document.domain)'
  }
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const pe=["Default","Http","Https","AbsolutePath","RelativePath1","RelativePath2","ValidAttrsInherited","XssJavascriptScheme","TargetBlank","ForcePermitAnyLink"];export{n as AbsolutePath,a as Default,d as ForcePermitAnyLink,r as Http,t as Https,s as RelativePath1,o as RelativePath2,c as TargetBlank,p as ValidAttrsInherited,l as XssJavascriptScheme,pe as __namedExportsOrder,oe as default};
