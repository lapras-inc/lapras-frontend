import{d as $,j as D,o as g,y as L,A as V,T as N,f as y,k as r,v as p,G as P,l as E,x as h,p as W,g as R}from"./vue.esm-bundler-DZRSKMuI.js";import{I as Y}from"./Icon-DBiXbAZg.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";function j(o){if(Array.isArray(o)){for(var e=0,t=Array(o.length);e<o.length;e++)t[e]=o[e];return t}else return Array.from(o)}var v=!1;if(typeof window<"u"){var w={get passive(){v=!0}};window.addEventListener("testPassive",null,w),window.removeEventListener("testPassive",null,w)}var T=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),l=[],c=!1,m=-1,s=void 0,i=void 0,x=function(e){return l.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},f=function(e){var t=e||window.event;return x(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},F=function(e){if(i===void 0){var t=!!e,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(i=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}s===void 0&&(s=document.body.style.overflow,document.body.style.overflow="hidden")},U=function(){i!==void 0&&(document.body.style.paddingRight=i,i=void 0),s!==void 0&&(document.body.style.overflow=s,s=void 0)},q=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},G=function(e,t){var n=e.targetTouches[0].clientY-m;return x(e.target)?!1:t&&t.scrollTop===0&&n>0||q(t)&&n<0?f(e):(e.stopPropagation(),!0)},J=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!l.some(function(a){return a.targetElement===e})){var n={targetElement:e,options:{}};l=[].concat(j(l),[n]),T?(e.ontouchstart=function(a){a.targetTouches.length===1&&(m=a.targetTouches[0].clientY)},e.ontouchmove=function(a){a.targetTouches.length===1&&G(a,e)},c||(document.addEventListener("touchmove",f,v?{passive:!1}:void 0),c=!0)):F(t)}},k=function(){T?(l.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),c&&(document.removeEventListener("touchmove",f,v?{passive:!1}:void 0),c=!1),m=-1):U(),l=[]};const z=$({components:{Icon:Y},props:{filterBackground:{type:String,default:"rgba(0, 48, 137, 0.14)"},hasClose:{type:Boolean,default:!0},visible:{type:Boolean,default:!0},panel:{type:Boolean,default:!0},gutter:{type:Number,default:20},zIndex:{type:Number,default:10},closeOnClickOutside:{type:Boolean,default:!0}},emits:{close:null},watch:{visible:{immediate:!0,handler(o){const e=document.body;if(o)return J(e);k()}}},beforeUnmount(){k()}}),K={class:"modal-body"};function Q(o,e,t,n,a,X){const A=D("Icon");return g(),L(N,{name:"fade"},{default:V(()=>[o.visible?(g(),y("div",{key:0,class:"modal",role:"dialog","aria-modal":"",style:p({zIndex:o.zIndex})},[r("div",{class:"filter",onClick:e[0]||(e[0]=()=>o.closeOnClickOutside&&o.$emit("close")),style:p({background:o.filterBackground})},null,4),r("div",{class:"modal-container",style:p({margin:`${o.gutter}px`})},[r("div",K,[o.hasClose?(g(),y("div",{key:0,class:"close-wrap",onClick:e[2]||(e[2]=H=>o.$emit("close"))},[r("button",{type:"button",class:"close","aria-label":"閉じる",onClick:e[1]||(e[1]=P(H=>o.$emit("close"),["stop"]))},[E(A,{name:"close"})])])):h("",!0),r("div",{class:W(["content",{panel:o.panel}])},[R(o.$slots,"default",{},void 0,!0)],2)])],4)],4)):h("",!0)]),_:3})}const b=_(z,[["render",Q],["__scopeId","data-v-945d841a"]]);z.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"filterBackground",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 48, 137, 0.14)'"}},{name:"hasClose",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"panel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"gutter",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"zIndex",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"closeOnClickOutside",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/Modal/Modal.vue"]};const te={title:"Modal",component:b},u={name:"default",args:{filterBackground:"rgba(0, 48, 137, 0.14)",hasClose:!0,visible:!1,panel:!0,gutter:20,zIndex:10},render:o=>({components:{Modal:b},setup(){return{args:o,action:()=>{console.log("button pressed!")},onClose:()=>{o.visible=!1}}},template:`
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <button @click="action">button</button><br />
          <a href="/">link</a>
        </Modal>
      </div>
  `})},d={name:"scroll",args:{filterBackground:"rgba(0, 48, 137, 0.14)",hasClose:!0,visible:!1,panel:!0,gutter:20,zIndex:10},render:o=>({components:{Modal:b},setup(){return{args:o,action:()=>{console.log("button pressed!")},onClose:()=>{o.visible=!1},longTextHtml:"scroll<br />".repeat(50)}},template:`
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <span v-html="longTextHtml"></span>
        </Modal>
      </div>
  `})};var C,B,M;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'default',
  args: {
    filterBackground: 'rgba(0, 48, 137, 0.14)',
    hasClose: true,
    visible: false,
    panel: true,
    gutter: 20,
    zIndex: 10
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const action = () => {
        console.log('button pressed!');
      };
      const onClose = () => {
        args.visible = false;
      };
      return {
        args,
        action,
        onClose
      };
    },
    template: \`
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <button @click="action">button</button><br />
          <a href="/">link</a>
        </Modal>
      </div>
  \`
  })
}`,...(M=(B=u.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var S,I,O;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'scroll',
  args: {
    filterBackground: 'rgba(0, 48, 137, 0.14)',
    hasClose: true,
    visible: false,
    panel: true,
    gutter: 20,
    zIndex: 10
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const action = () => {
        console.log('button pressed!');
      };
      const onClose = () => {
        args.visible = false;
      };
      return {
        args,
        action,
        onClose,
        longTextHtml: 'scroll<br />'.repeat(50)
      };
    },
    template: \`
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <span v-html="longTextHtml"></span>
        </Modal>
      </div>
  \`
  })
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ne=["Default","Scroll"];export{u as Default,d as Scroll,ne as __namedExportsOrder,te as default};
