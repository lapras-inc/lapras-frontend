import{d as p,j as r,o as u,f as m,k as n,m as i,l as f,p as h}from"./vue.esm-bundler-CXKGtDvb.js";import{I as k}from"./Icon-DvnrdZbN.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const t=p({inheritAttrs:!1,components:{Icon:k},props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue":null},setup(e,a){const s=o=>a.emit("update:modelValue",o);return{onInput:o=>{s(o.target.checked)}}}}),_=["checked","disabled"],I={class:"icon-wrap"};function V(e,a,s,l,o,B){const d=r("Icon");return u(),m("label",{class:h(["check-box",{"is-disabled":e.disabled}])},[n("input",i(e.$attrs,{checked:e.modelValue,disabled:e.disabled,onChange:a[0]||(a[0]=(...c)=>e.onInput&&e.onInput(...c)),class:"input",type:"checkbox"}),null,16,_),n("div",I,[f(d,{name:"check"})])],2)}const y=b(t,[["render",V],["__scopeId","data-v-130587c5"]]);t.__docgenInfo={exportName:"default",displayName:"CheckBox",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/kawamataryou/ghq/github.com/lapras-inc/lapras-frontend/src/components/CheckBox/CheckBox.vue"]};export{y as C};
