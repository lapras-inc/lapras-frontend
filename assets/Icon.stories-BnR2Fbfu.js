import{I as t,i}from"./Icon-BHk58rUJ.js";import"./vue.esm-bundler-B7hVH_fS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"Icon",component:t,render:a=>({components:{Icon:t},setup(){return{args:a,iconMap:i}},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); color: #2C2C2C;">
        <div v-for="name in Object.keys(iconMap)" :key="name" style="text-align: center; border: 1px solid #efefef; padding: 12px;">
          <Icon :name="name" style="font-size: 38px;" />
          <div style="font-size: 16px; margin-top: 8px;">{{ name }}</div>
        </div>
      </div>
    `})},e={name:"icon list"};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'icon list'
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const d=["IconList"];export{e as IconList,d as __namedExportsOrder,c as default};
