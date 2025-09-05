import{d as M,e as f,f as Q,g as U,m as Y,o as Z}from"./vue.esm-bundler-B7hVH_fS.js";const ee=["href","rel","target"],u=M({inheritAttrs:!1,__name:"ProtectedLink",props:{href:{type:String,validator(e){return e?!(e.includes(":")&&!e.match(/^https?:\/\//i)):!0},required:!0},force:{type:Boolean,default:!1},target:{type:String,default:void 0},rel:{type:String,default:void 0}},setup(e){const O=a=>a?a.includes(":")&&!a.match(/^https?:\/\//i)?void 0:a:void 0,t=e,z=f(()=>t.force?t.href:O(t.href)),G=f(()=>t.target==="_blank"?`noopener ${t.rel||""}`.replace(/\s$/,""):t.rel);return(a,K)=>(Z(),Q("a",Y(a.$attrs,{href:z.value,rel:G.value,target:e.target}),[U(a.$slots,"default")],16,ee))}});u.__docgenInfo={exportName:"default",displayName:"ProtectedLink",description:"",tags:{},props:[{name:"href",type:{name:"string"},required:!0},{name:"force",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"target",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"rel",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ProtectedLink/ProtectedLink.vue"]};const te={title:"ProtectedLink",component:u,render:e=>({components:{ProtectedLink:u},setup(){return{args:e}},template:'<ProtectedLink v-bind="args">{{ args.default }}</ProtectedLink>'})},r={name:"default",args:{href:"//placehold.jp/150x150.png",default:"//placehold.jp/150x150.png"}},n={name:"http",args:{href:"http://placehold.jp/150x150.png",default:"http://placehold.jp/150x150.png"}},s={name:"https",args:{href:"https://placehold.jp/150x150.png",default:"https://placehold.jp/150x150.png"}},o={name:"absolute path",args:{href:"/example",default:"/example"}},p={name:"relative path1",args:{href:"./example",default:"./example"}},l={name:"relative path2",args:{href:"example",default:"example"}},c={name:"valid attrs inherited",args:{href:"https://placehold.jp/150x150.png",default:"https://placehold.jp/150x150.png"}},d={name:"xss javascript scheme",args:{href:"javascript:alert(document.domain)",default:"javascript:alert(document.domain)"}},m={name:"target=_blank",args:{href:"https://en.wikipedia.org/wiki/William_Shakespeare",target:"_blank",rel:"author",default:"author of Hamlet"}},i={name:"force permit any link",args:{href:"javascript:alert(document.domain)",force:!0,default:"javascript:alert(document.domain)"}};var h,g,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'default',
  args: {
    href: '//placehold.jp/150x150.png',
    default: '//placehold.jp/150x150.png'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,k,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'http',
  args: {
    href: 'http://placehold.jp/150x150.png',
    default: 'http://placehold.jp/150x150.png'
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var S,P,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'https',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png'
  }
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var y,b,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'absolute path',
  args: {
    href: '/example',
    default: '/example'
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var H,A,w;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'relative path1',
  args: {
    href: './example',
    default: './example'
  }
}`,...(w=(A=p.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var B,R,V;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'relative path2',
  args: {
    href: 'example',
    default: 'example'
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var N,$,F;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'valid attrs inherited',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png'
  }
}`,...(F=($=c.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var I,X,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'xss javascript scheme',
  args: {
    href: 'javascript:alert(document.domain)',
    default: 'javascript:alert(document.domain)'
  }
}`,...(q=(X=d.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var D,E,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'target=_blank',
  args: {
    href: 'https://en.wikipedia.org/wiki/William_Shakespeare',
    target: '_blank',
    rel: 'author',
    default: 'author of Hamlet'
  }
}`,...(J=(E=m.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var T,W,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'force permit any link',
  args: {
    href: 'javascript:alert(document.domain)',
    force: true,
    default: 'javascript:alert(document.domain)'
  }
}`,...(C=(W=i.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const re=["Default","Http","Https","AbsolutePath","RelativePath1","RelativePath2","ValidAttrsInherited","XssJavascriptScheme","TargetBlank","ForcePermitAnyLink"];export{o as AbsolutePath,r as Default,i as ForcePermitAnyLink,n as Http,s as Https,p as RelativePath1,l as RelativePath2,m as TargetBlank,c as ValidAttrsInherited,d as XssJavascriptScheme,re as __namedExportsOrder,te as default};
