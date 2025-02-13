import{d as k,j as S,o as t,y as u,A as M,T as C,f as n,k as o,v as i,p as d,x as c,g as O}from"./vue.esm-bundler-DZRSKMuI.js";import{I as B}from"./Icon-DBiXbAZg.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y=k({components:{Icon:B},props:{filterBackground:{type:String,default:"rgba(0, 48, 137, 0.14)"},hasClose:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},panel:{type:Boolean,default:!0},gutter:{type:Number,default:20},zIndex:{type:Number,default:10},outerClose:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0}},emits:{close:null}}),H={key:0,class:"modal",ref:"modal"},V={class:"modal-body"},$={key:1,class:"icon-cancel"};function z(e,a,T,x,_,D){const h=S("Icon");return t(),u(C,{name:"fade"},{default:M(()=>[e.visible?(t(),n("div",H,[o("div",{class:"modal-overlay",style:i({background:e.filterBackground,zIndex:e.zIndex}),onClick:a[0]||(a[0]=()=>e.closeOnClickOutside&&e.$emit("close"))},null,4),o("div",{class:"modal-container",style:i({padding:`${e.gutter}px`,zIndex:e.zIndex})},[o("div",V,[o("div",{class:d(["close-wrap",{"outer-close":e.outerClose}])},[e.hasClose?(t(),n("p",{key:0,class:"close",onClick:a[1]||(a[1]=N=>e.$emit("close"))},[e.outerClose?(t(),u(h,{key:0,name:"close",alt:"閉じる"})):(t(),n("i",$))])):c("",!0)],2),o("div",{class:d(["content",{panel:e.panel}])},[O(e.$slots,"default",{},void 0,!0)],2)])],4)],512)):c("",!0)]),_:3})}const r=I(y,[["render",z],["__scopeId","data-v-a2b6f65d"]]);y.__docgenInfo={exportName:"default",displayName:"ShortModal",description:"",tags:{},props:[{name:"filterBackground",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 48, 137, 0.14)'"}},{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"panel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gutter",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"zIndex",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"outerClose",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnClickOutside",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/ShortModal/ShortModal.vue"]};const w={title:"ShortModal",component:r},l={args:{visible:!1},render:e=>({components:{ShortModal:r},setup(){return{args:e,action:()=>{console.log("button pressed!")}}},template:`
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
      `}),name:"scroll"};var p,m,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,v,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
