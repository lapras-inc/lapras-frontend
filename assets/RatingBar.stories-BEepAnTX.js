import{d as g,o as h,f as v,k as b,B as y,m as B}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const f=g({inheritAttrs:!1,props:{max:{type:Number,default:5},value:{type:Number,default:0},barColor:{type:String,default:"linear-gradient(90deg, #171c60 0%, #009ee8 100%)"},highThreshold:{type:Number,default:1/0},highBarColor:{type:String,default:"#ff5a5f"}}});function S(e,_,N,R,V,$){return h(),v("div",B(e.$attrs,{class:"score-bar"}),[b("div",{class:"inner",style:y({width:`${e.value/e.max*100}%`,background:e.value>=e.highThreshold?e.highBarColor:e.barColor})},null,4)],16)}const n=C(f,[["render",S],["__scopeId","data-v-814aab7c"]]);f.__docgenInfo={exportName:"default",displayName:"RatingBar",description:"",tags:{},props:[{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"value",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"barColor",type:{name:"string"},defaultValue:{func:!1,value:"'linear-gradient(90deg, #171c60 0%, #009ee8 100%)'"}},{name:"highThreshold",type:{name:"number"},defaultValue:{func:!1,value:"Infinity"}},{name:"highBarColor",type:{name:"string"},defaultValue:{func:!1,value:"'#ff5a5f'"}}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/RatingBar/RatingBar.vue"]};const I={title:"RatingBar",component:n,render:e=>({components:{RatingBar:n},setup(){return{args:e}},template:'<RatingBar v-bind="args" />'})},a={name:"default",args:{value:3.5}},r={name:"high score",args:{value:3.5,highThreshold:3.5}},o={name:"custom color",args:{value:3.5,barColor:"#58ba0c"}};var s,t,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'default',
  args: {
    value: 3.5
  }
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'high score',
  args: {
    value: 3.5,
    highThreshold: 3.5
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'custom color',
  args: {
    value: 3.5,
    barColor: '#58ba0c'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const w=["Default","HighScore","CustomColor"];export{o as CustomColor,a as Default,r as HighScore,w as __namedExportsOrder,I as default};
