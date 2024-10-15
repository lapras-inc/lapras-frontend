import{d as k,j as M,o as t,y as u,A as C,T as B,f as n,k as o,v as i,p as d,x as c,g as I}from"./vue.esm-bundler-DZRSKMuI.js";import{I as H}from"./Icon-DBiXbAZg.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=k({components:{Icon:H},props:{filterBackground:{type:String,default:"rgba(0, 48, 137, 0.14)"},hasClose:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},panel:{type:Boolean,default:!0},gutter:{type:Number,default:20},zIndex:{type:Number,default:10},outerClose:{type:Boolean,default:!0}},emits:{close:null}}),O={key:0,class:"modal",ref:"modal"},V={class:"modal-body"},x={key:1,class:"icon-cancel"};function z(e,a,T,_,D,N){const y=M("Icon");return t(),u(B,{name:"fade"},{default:C(()=>[e.visible?(t(),n("div",O,[o("div",{class:"modal-overlay",style:i({background:e.filterBackground,zIndex:e.zIndex}),onClick:a[0]||(a[0]=S=>e.$emit("close"))},null,4),o("div",{class:"modal-container",style:i({padding:`${e.gutter}px`,zIndex:e.zIndex})},[o("div",V,[o("div",{class:d(["close-wrap",{"outer-close":e.outerClose}])},[e.hasClose?(t(),n("p",{key:0,class:"close",onClick:a[1]||(a[1]=S=>e.$emit("close"))},[e.outerClose?(t(),u(y,{key:0,name:"close",alt:"閉じる"})):(t(),n("i",x))])):c("",!0)],2),o("div",{class:d(["content",{panel:e.panel}])},[I(e.$slots,"default",{},void 0,!0)],2)])],4)],512)):c("",!0)]),_:3})}const r=$(h,[["render",z],["__scopeId","data-v-5cf391b8"]]);h.__docgenInfo={exportName:"default",displayName:"ShortModal",description:"",tags:{},props:[{name:"filterBackground",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 48, 137, 0.14)'"}},{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"panel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gutter",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"zIndex",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"outerClose",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ShortModal/ShortModal.vue"]};const w={title:"ShortModal",component:r},l={args:{visible:!1},render:e=>({components:{ShortModal:r},setup(){return{args:e,action:()=>{console.log("button pressed!")}}},template:`
        <div>
          <button @click="args.visible=true" type="button">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <button @click="action">button</button><br />
            <a href="/">link</a>
          </ShortModal>
        </div>
      `}),name:"default"},s={args:{visible:!1},render:e=>({components:{ShortModal:r},setup(){return{args:e,longTextHtml:"scroll<br />".repeat(50)}},template:`
        <div>
          <span v-html="longTextHtml"></span>
          <br /><br />
          <button @click="args.visible=true">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <span>short</span>
          </ShortModal>
          <br /><br />
          <span v-html="longTextHtml"></span>
        </div>
      `}),name:"scroll"};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: args => ({
    components: {
      ShortModal
    },
    setup() {
      const action = () => {
        console.log('button pressed!');
      };
      return {
        args,
        action
      };
    },
    template: \`
        <div>
          <button @click="args.visible=true" type="button">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <button @click="action">button</button><br />
            <a href="/">link</a>
          </ShortModal>
        </div>
      \`
  }),
  name: 'default'
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,v,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: args => ({
    components: {
      ShortModal
    },
    setup() {
      return {
        args,
        longTextHtml: 'scroll<br />'.repeat(50)
      };
    },
    template: \`
        <div>
          <span v-html="longTextHtml"></span>
          <br /><br />
          <button @click="args.visible=true">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <span>short</span>
          </ShortModal>
          <br /><br />
          <span v-html="longTextHtml"></span>
        </div>
      \`
  }),
  name: 'scroll'
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const E=["Default","Scroll"];export{l as Default,s as Scroll,E as __namedExportsOrder,w as default};
