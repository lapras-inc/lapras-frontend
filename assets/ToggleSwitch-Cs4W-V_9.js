import{d as p,o as c,f as i,k as s,m as u,p as r,q as m,s as f}from"./vue.esm-bundler-CXKGtDvb.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const l=p({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0}},emits:{"update:modelValue":null},setup(e,a){const t=o=>a.emit("update:modelValue",o);return{onInput:o=>t(o.target.checked)}}}),b=e=>(m("data-v-b0aac0b1"),e=e(),f(),e),g={class:"toggle-switch"},_=["checked","disabled"],v=b(()=>s("div",{class:"toggle"},null,-1)),I=[v];function k(e,a,t,n,o,V){return c(),i("label",g,[s("input",u(e.$attrs,{checked:e.modelValue,disabled:e.disabled||void 0,onChange:a[0]||(a[0]=(...d)=>e.onInput&&e.onInput(...d)),class:"checkbox",type:"checkbox"}),null,16,_),s("div",{class:r(["switch-base",{"is-disabled":e.disabled}])},I,2)])}const y=h(l,[["render",k],["__scopeId","data-v-b0aac0b1"]]);l.__docgenInfo={exportName:"default",displayName:"ToggleSwitch",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ToggleSwitch/ToggleSwitch.vue"]};export{y as T};
