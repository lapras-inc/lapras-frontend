import{d as g,e as y,o as n,f as t,F as h,u as A,v as a,x as s}from"./vue.esm-bundler-DZRSKMuI.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const c=g({name:"ContentLoader",__name:"ContentLoader",props:{type:{default:"PARAGRAPH"},lineCount:{default:5},lineHeight:{default:1},randomLineWidth:{type:Boolean,default:!0},gap:{default:.8}},setup(l){const o=l,L=y(()=>Array.from({length:o.lineCount},(e,u)=>({id:u,maxWidth:o.randomLineWidth?50+Math.random()*50:100})));return(e,u)=>(n(),t("div",{class:"content-loader",style:a({gap:`${e.gap}em`})},[(n(!0),t(h,null,A(L.value,d=>(n(),t("div",{class:"loader-group",key:d.id,style:a({gap:`${e.lineHeight/2.5}em`})},[["CIRCLE","BULLET_LIST"].includes(e.type)?(n(),t("div",{key:0,class:"circle",style:a({width:`${e.lineHeight}em`,height:`${e.lineHeight}em`})},null,4)):s("",!0),["PARAGRAPH","BULLET_LIST"].includes(e.type)?(n(),t("div",{key:1,class:"line",style:a({maxWidth:`${d.maxWidth}%`,height:`${e.lineHeight}em`})},null,4)):s("",!0)],4))),128))],4))}}),i=C(c,[["__scopeId","data-v-5d28d13a"]]);c.__docgenInfo={name:"ContentLoader",exportName:"default",displayName:"ContentLoader",description:"",tags:{},props:[{name:"type",required:!1,type:{name:"union",elements:[{name:'"PARAGRAPH"'},{name:'"BULLET_LIST"'},{name:'"CIRCLE"'}]},defaultValue:{func:!1,value:"'PARAGRAPH'"}},{name:"lineCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"lineHeight",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"randomLineWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gap",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0.8"}}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ContentLoader/ContentLoader.vue"]};const P={title:"ContentLoader",component:i,argTypes:{type:{control:{type:"select"},options:["PARAGRAPH","BULLET_LIST","CIRCLE"],defaultValue:"PARAGRAPH"},lineCount:{control:{type:"number"},defaultValue:5},lineHeight:{control:{type:"number"},defaultValue:1},randomLineWidth:{control:{type:"boolean"},defaultValue:!0},gap:{control:{type:"number"},defaultValue:.8}},render:l=>({components:{ContentLoader:i},setup(){return{args:l}},template:`
      <ContentLoader v-bind="args" />`})},r={name:"default",args:{type:"PARAGRAPH",lineCount:5,lineHeight:1,randomLineWidth:!0,gap:.8}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'default',
  args: {
    type: 'PARAGRAPH',
    lineCount: 5,
    lineHeight: 1,
    randomLineWidth: true,
    gap: 0.8
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,P as default};
