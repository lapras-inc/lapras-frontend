import{d as Tt,r as ze,j as Pt,o as Ye,f as St,k as Te,g as Ue,u as Dt,A as $t,p as jt,B as Bt}from"./vue.esm-bundler-CXKGtDvb.js";import{I as Ct}from"./Icon-gV1avNZM.js";import{_ as kt}from"./_plugin-vue_export-helper-DlAUqK2U.js";var $="top",R="bottom",W="right",j="left",De="auto",pe=[$,R,W,j],Q="start",ie="end",Rt="clippingParents",lt="viewport",ae="popper",Wt="reference",Ge=pe.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+ie])},[]),ft=[].concat(pe,[De]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+ie])},[]),Lt="beforeRead",Mt="read",Vt="afterRead",Ht="beforeMain",Nt="main",It="afterMain",Ft="beforeWrite",qt="write",Xt="afterWrite",zt=[Lt,Mt,Vt,Ht,Nt,It,Ft,qt,Xt];function H(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function J(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function k(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $e(e){if(typeof ShadowRoot>"u")return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var a=t.styles[r]||{},o=t.attributes[r]||{},n=t.elements[r];!k(n)||!H(n)||(Object.assign(n.style,a),Object.keys(o).forEach(function(l){var i=o[l];i===!1?n.removeAttribute(l):n.setAttribute(l,i===!0?"":i)}))})}function Ut(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(a){var o=t.elements[a],n=t.attributes[a]||{},l=Object.keys(t.styles.hasOwnProperty(a)?t.styles[a]:r[a]),i=l.reduce(function(s,f){return s[f]="",s},{});!k(o)||!H(o)||(Object.assign(o.style,i),Object.keys(n).forEach(function(s){o.removeAttribute(s)}))})}}const Gt={name:"applyStyles",enabled:!0,phase:"write",fn:Yt,effect:Ut,requires:["computeStyles"]};function V(e){return e.split("-")[0]}var G=Math.max,be=Math.min,Z=Math.round;function Pe(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ct(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function _(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var a=e.getBoundingClientRect(),o=1,n=1;t&&k(e)&&(o=e.offsetWidth>0&&Z(a.width)/e.offsetWidth||1,n=e.offsetHeight>0&&Z(a.height)/e.offsetHeight||1);var l=J(e)?C(e):window,i=l.visualViewport,s=!ct()&&r,f=(a.left+(s&&i?i.offsetLeft:0))/o,p=(a.top+(s&&i?i.offsetTop:0))/n,m=a.width/o,y=a.height/n;return{width:m,height:y,top:p,right:f+m,bottom:p+y,left:f,x:f,y:p}}function je(e){var t=_(e),r=e.offsetWidth,a=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-a)<=1&&(a=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:a}}function ut(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&$e(r)){var a=t;do{if(a&&e.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function N(e){return C(e).getComputedStyle(e)}function Jt(e){return["table","td","th"].indexOf(H(e))>=0}function F(e){return((J(e)?e.ownerDocument:e.document)||window.document).documentElement}function we(e){return H(e)==="html"?e:e.assignedSlot||e.parentNode||($e(e)?e.host:null)||F(e)}function Je(e){return!k(e)||N(e).position==="fixed"?null:e.offsetParent}function Kt(e){var t=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&k(e)){var a=N(e);if(a.position==="fixed")return null}var o=we(e);for($e(o)&&(o=o.host);k(o)&&["html","body"].indexOf(H(o))<0;){var n=N(o);if(n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].indexOf(n.willChange)!==-1||t&&n.willChange==="filter"||t&&n.filter&&n.filter!=="none")return o;o=o.parentNode}return null}function le(e){for(var t=C(e),r=Je(e);r&&Jt(r)&&N(r).position==="static";)r=Je(r);return r&&(H(r)==="html"||H(r)==="body"&&N(r).position==="static")?t:r||Kt(e)||t}function Be(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return G(e,be(t,r))}function Qt(e,t,r){var a=oe(e,t,r);return a>r?r:a}function dt(){return{top:0,right:0,bottom:0,left:0}}function vt(e){return Object.assign({},dt(),e)}function mt(e,t){return t.reduce(function(r,a){return r[a]=e,r},{})}var Zt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,vt(typeof t!="number"?t:mt(t,pe))};function _t(e){var t,r=e.state,a=e.name,o=e.options,n=r.elements.arrow,l=r.modifiersData.popperOffsets,i=V(r.placement),s=Be(i),f=[j,W].indexOf(i)>=0,p=f?"height":"width";if(!(!n||!l)){var m=Zt(o.padding,r),y=je(n),c=s==="y"?$:j,w=s==="y"?R:W,v=r.rects.reference[p]+r.rects.reference[s]-l[s]-r.rects.popper[p],d=l[s]-r.rects.reference[s],b=le(n),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,E=v/2-d/2,u=m[c],g=O-y[p]-m[w],h=O/2-y[p]/2+E,x=oe(u,h,g),P=s;r.modifiersData[a]=(t={},t[P]=x,t.centerOffset=x-h,t)}}function er(e){var t=e.state,r=e.options,a=r.element,o=a===void 0?"[data-popper-arrow]":a;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ut(t.elements.popper,o)&&(t.elements.arrow=o))}const tr={name:"arrow",enabled:!0,phase:"main",fn:_t,effect:er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(e){return e.split("-")[1]}var rr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ar(e,t){var r=e.x,a=e.y,o=t.devicePixelRatio||1;return{x:Z(r*o)/o||0,y:Z(a*o)/o||0}}function Ke(e){var t,r=e.popper,a=e.popperRect,o=e.placement,n=e.variation,l=e.offsets,i=e.position,s=e.gpuAcceleration,f=e.adaptive,p=e.roundOffsets,m=e.isFixed,y=l.x,c=y===void 0?0:y,w=l.y,v=w===void 0?0:w,d=typeof p=="function"?p({x:c,y:v}):{x:c,y:v};c=d.x,v=d.y;var b=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),E=j,u=$,g=window;if(f){var h=le(r),x="clientHeight",P="clientWidth";if(h===C(r)&&(h=F(r),N(h).position!=="static"&&i==="absolute"&&(x="scrollHeight",P="scrollWidth")),h=h,o===$||(o===j||o===W)&&n===ie){u=R;var T=m&&h===g&&g.visualViewport?g.visualViewport.height:h[x];v-=T-a.height,v*=s?1:-1}if(o===j||(o===$||o===R)&&n===ie){E=W;var A=m&&h===g&&g.visualViewport?g.visualViewport.width:h[P];c-=A-a.width,c*=s?1:-1}}var S=Object.assign({position:i},f&&rr),L=p===!0?ar({x:c,y:v},C(r)):{x:c,y:v};if(c=L.x,v=L.y,s){var D;return Object.assign({},S,(D={},D[u]=O?"0":"",D[E]=b?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",D))}return Object.assign({},S,(t={},t[u]=O?v+"px":"",t[E]=b?c+"px":"",t.transform="",t))}function or(e){var t=e.state,r=e.options,a=r.gpuAcceleration,o=a===void 0?!0:a,n=r.adaptive,l=n===void 0?!0:n,i=r.roundOffsets,s=i===void 0?!0:i,f={placement:V(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ke(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ke(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const nr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:or,data:{}};var me={passive:!0};function ir(e){var t=e.state,r=e.instance,a=e.options,o=a.scroll,n=o===void 0?!0:o,l=a.resize,i=l===void 0?!0:l,s=C(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return n&&f.forEach(function(p){p.addEventListener("scroll",r.update,me)}),i&&s.addEventListener("resize",r.update,me),function(){n&&f.forEach(function(p){p.removeEventListener("scroll",r.update,me)}),i&&s.removeEventListener("resize",r.update,me)}}const sr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ir,data:{}};var pr={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,function(t){return pr[t]})}var lr={start:"end",end:"start"};function Qe(e){return e.replace(/start|end/g,function(t){return lr[t]})}function Ce(e){var t=C(e),r=t.pageXOffset,a=t.pageYOffset;return{scrollLeft:r,scrollTop:a}}function ke(e){return _(F(e)).left+Ce(e).scrollLeft}function fr(e,t){var r=C(e),a=F(e),o=r.visualViewport,n=a.clientWidth,l=a.clientHeight,i=0,s=0;if(o){n=o.width,l=o.height;var f=ct();(f||!f&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:n,height:l,x:i+ke(e),y:s}}function cr(e){var t,r=F(e),a=Ce(e),o=(t=e.ownerDocument)==null?void 0:t.body,n=G(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=G(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-a.scrollLeft+ke(e),s=-a.scrollTop;return N(o||r).direction==="rtl"&&(i+=G(r.clientWidth,o?o.clientWidth:0)-n),{width:n,height:l,x:i,y:s}}function Re(e){var t=N(e),r=t.overflow,a=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+a)}function gt(e){return["html","body","#document"].indexOf(H(e))>=0?e.ownerDocument.body:k(e)&&Re(e)?e:gt(we(e))}function ne(e,t){var r;t===void 0&&(t=[]);var a=gt(e),o=a===((r=e.ownerDocument)==null?void 0:r.body),n=C(a),l=o?[n].concat(n.visualViewport||[],Re(a)?a:[]):a,i=t.concat(l);return o?i:i.concat(ne(we(l)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ur(e,t){var r=_(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ze(e,t,r){return t===lt?Se(fr(e,r)):J(t)?ur(t,r):Se(cr(F(e)))}function dr(e){var t=ne(we(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,a=r&&k(e)?le(e):e;return J(a)?t.filter(function(o){return J(o)&&ut(o,a)&&H(o)!=="body"}):[]}function vr(e,t,r,a){var o=t==="clippingParents"?dr(e):[].concat(t),n=[].concat(o,[r]),l=n[0],i=n.reduce(function(s,f){var p=Ze(e,f,a);return s.top=G(p.top,s.top),s.right=be(p.right,s.right),s.bottom=be(p.bottom,s.bottom),s.left=G(p.left,s.left),s},Ze(e,l,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ht(e){var t=e.reference,r=e.element,a=e.placement,o=a?V(a):null,n=a?ee(a):null,l=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case $:s={x:l,y:t.y-r.height};break;case R:s={x:l,y:t.y+t.height};break;case W:s={x:t.x+t.width,y:i};break;case j:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var f=o?Be(o):null;if(f!=null){var p=f==="y"?"height":"width";switch(n){case Q:s[f]=s[f]-(t[p]/2-r[p]/2);break;case ie:s[f]=s[f]+(t[p]/2-r[p]/2);break}}return s}function se(e,t){t===void 0&&(t={});var r=t,a=r.placement,o=a===void 0?e.placement:a,n=r.strategy,l=n===void 0?e.strategy:n,i=r.boundary,s=i===void 0?Rt:i,f=r.rootBoundary,p=f===void 0?lt:f,m=r.elementContext,y=m===void 0?ae:m,c=r.altBoundary,w=c===void 0?!1:c,v=r.padding,d=v===void 0?0:v,b=vt(typeof d!="number"?d:mt(d,pe)),O=y===ae?Wt:ae,E=e.rects.popper,u=e.elements[w?O:y],g=vr(J(u)?u:u.contextElement||F(e.elements.popper),s,p,l),h=_(e.elements.reference),x=ht({reference:h,element:E,strategy:"absolute",placement:o}),P=Se(Object.assign({},E,x)),T=y===ae?P:h,A={top:g.top-T.top+b.top,bottom:T.bottom-g.bottom+b.bottom,left:g.left-T.left+b.left,right:T.right-g.right+b.right},S=e.modifiersData.offset;if(y===ae&&S){var L=S[o];Object.keys(A).forEach(function(D){var q=[W,R].indexOf(D)>=0?1:-1,X=[$,R].indexOf(D)>=0?"y":"x";A[D]+=L[X]*q})}return A}function mr(e,t){t===void 0&&(t={});var r=t,a=r.placement,o=r.boundary,n=r.rootBoundary,l=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?ft:s,p=ee(a),m=p?i?Ge:Ge.filter(function(w){return ee(w)===p}):pe,y=m.filter(function(w){return f.indexOf(w)>=0});y.length===0&&(y=m);var c=y.reduce(function(w,v){return w[v]=se(e,{placement:v,boundary:o,rootBoundary:n,padding:l})[V(v)],w},{});return Object.keys(c).sort(function(w,v){return c[w]-c[v]})}function gr(e){if(V(e)===De)return[];var t=ye(e);return[Qe(e),t,Qe(t)]}function hr(e){var t=e.state,r=e.options,a=e.name;if(!t.modifiersData[a]._skip){for(var o=r.mainAxis,n=o===void 0?!0:o,l=r.altAxis,i=l===void 0?!0:l,s=r.fallbackPlacements,f=r.padding,p=r.boundary,m=r.rootBoundary,y=r.altBoundary,c=r.flipVariations,w=c===void 0?!0:c,v=r.allowedAutoPlacements,d=t.options.placement,b=V(d),O=b===d,E=s||(O||!w?[ye(d)]:gr(d)),u=[d].concat(E).reduce(function(K,I){return K.concat(V(I)===De?mr(t,{placement:I,boundary:p,rootBoundary:m,padding:f,flipVariations:w,allowedAutoPlacements:v}):I)},[]),g=t.rects.reference,h=t.rects.popper,x=new Map,P=!0,T=u[0],A=0;A<u.length;A++){var S=u[A],L=V(S),D=ee(S)===Q,q=[$,R].indexOf(L)>=0,X=q?"width":"height",B=se(t,{placement:S,boundary:p,rootBoundary:m,altBoundary:y,padding:f}),M=q?D?W:j:D?R:$;g[X]>h[X]&&(M=ye(M));var fe=ye(M),z=[];if(n&&z.push(B[L]<=0),i&&z.push(B[M]<=0,B[fe]<=0),z.every(function(K){return K})){T=S,P=!1;break}x.set(S,z)}if(P)for(var ce=w?3:1,xe=function(I){var re=u.find(function(de){var Y=x.get(de);if(Y)return Y.slice(0,I).every(function(Oe){return Oe})});if(re)return T=re,"break"},te=ce;te>0;te--){var ue=xe(te);if(ue==="break")break}t.placement!==T&&(t.modifiersData[a]._skip=!0,t.placement=T,t.reset=!0)}}const yr={name:"flip",enabled:!0,phase:"main",fn:hr,requiresIfExists:["offset"],data:{_skip:!1}};function _e(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function et(e){return[$,W,R,j].some(function(t){return e[t]>=0})}function br(e){var t=e.state,r=e.name,a=t.rects.reference,o=t.rects.popper,n=t.modifiersData.preventOverflow,l=se(t,{elementContext:"reference"}),i=se(t,{altBoundary:!0}),s=_e(l,a),f=_e(i,o,n),p=et(s),m=et(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:br};function xr(e,t,r){var a=V(e),o=[j,$].indexOf(a)>=0?-1:1,n=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=n[0],i=n[1];return l=l||0,i=(i||0)*o,[j,W].indexOf(a)>=0?{x:i,y:l}:{x:l,y:i}}function Or(e){var t=e.state,r=e.options,a=e.name,o=r.offset,n=o===void 0?[0,0]:o,l=ft.reduce(function(p,m){return p[m]=xr(m,t.rects,n),p},{}),i=l[t.placement],s=i.x,f=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[a]=l}const Er={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Or};function Ar(e){var t=e.state,r=e.name;t.modifiersData[r]=ht({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Tr={name:"popperOffsets",enabled:!0,phase:"read",fn:Ar,data:{}};function Pr(e){return e==="x"?"y":"x"}function Sr(e){var t=e.state,r=e.options,a=e.name,o=r.mainAxis,n=o===void 0?!0:o,l=r.altAxis,i=l===void 0?!1:l,s=r.boundary,f=r.rootBoundary,p=r.altBoundary,m=r.padding,y=r.tether,c=y===void 0?!0:y,w=r.tetherOffset,v=w===void 0?0:w,d=se(t,{boundary:s,rootBoundary:f,padding:m,altBoundary:p}),b=V(t.placement),O=ee(t.placement),E=!O,u=Be(b),g=Pr(u),h=t.modifiersData.popperOffsets,x=t.rects.reference,P=t.rects.popper,T=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,A=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(h){if(n){var D,q=u==="y"?$:j,X=u==="y"?R:W,B=u==="y"?"height":"width",M=h[u],fe=M+d[q],z=M-d[X],ce=c?-P[B]/2:0,xe=O===Q?x[B]:P[B],te=O===Q?-P[B]:-x[B],ue=t.elements.arrow,K=c&&ue?je(ue):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:dt(),re=I[q],de=I[X],Y=oe(0,x[B],K[B]),Oe=E?x[B]/2-ce-Y-re-A.mainAxis:xe-Y-re-A.mainAxis,bt=E?-x[B]/2+ce+Y+de+A.mainAxis:te+Y+de+A.mainAxis,Ee=t.elements.arrow&&le(t.elements.arrow),wt=Ee?u==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Le=(D=S==null?void 0:S[u])!=null?D:0,xt=M+Oe-Le-wt,Ot=M+bt-Le,Me=oe(c?be(fe,xt):fe,M,c?G(z,Ot):z);h[u]=Me,L[u]=Me-M}if(i){var Ve,Et=u==="x"?$:j,At=u==="x"?R:W,U=h[g],ve=g==="y"?"height":"width",He=U+d[Et],Ne=U-d[At],Ae=[$,j].indexOf(b)!==-1,Ie=(Ve=S==null?void 0:S[g])!=null?Ve:0,Fe=Ae?He:U-x[ve]-P[ve]-Ie+A.altAxis,qe=Ae?U+x[ve]+P[ve]-Ie-A.altAxis:Ne,Xe=c&&Ae?Qt(Fe,U,qe):oe(c?Fe:He,U,c?qe:Ne);h[g]=Xe,L[g]=Xe-U}t.modifiersData[a]=L}}const Dr={name:"preventOverflow",enabled:!0,phase:"main",fn:Sr,requiresIfExists:["offset"]};function $r(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jr(e){return e===C(e)||!k(e)?Ce(e):$r(e)}function Br(e){var t=e.getBoundingClientRect(),r=Z(t.width)/e.offsetWidth||1,a=Z(t.height)/e.offsetHeight||1;return r!==1||a!==1}function Cr(e,t,r){r===void 0&&(r=!1);var a=k(t),o=k(t)&&Br(t),n=F(t),l=_(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(a||!a&&!r)&&((H(t)!=="body"||Re(n))&&(i=jr(t)),k(t)?(s=_(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):n&&(s.x=ke(n))),{x:l.left+i.scrollLeft-s.x,y:l.top+i.scrollTop-s.y,width:l.width,height:l.height}}function kr(e){var t=new Map,r=new Set,a=[];e.forEach(function(n){t.set(n.name,n)});function o(n){r.add(n.name);var l=[].concat(n.requires||[],n.requiresIfExists||[]);l.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),a.push(n)}return e.forEach(function(n){r.has(n.name)||o(n)}),a}function Rr(e){var t=kr(e);return zt.reduce(function(r,a){return r.concat(t.filter(function(o){return o.phase===a}))},[])}function Wr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Lr(e){var t=e.reduce(function(r,a){var o=r[a.name];return r[a.name]=o?Object.assign({},o,a,{options:Object.assign({},o.options,a.options),data:Object.assign({},o.data,a.data)}):a,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function Mr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,a=r===void 0?[]:r,o=t.defaultOptions,n=o===void 0?tt:o;return function(i,s,f){f===void 0&&(f=n);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,n),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],y=!1,c={state:p,setOptions:function(b){var O=typeof b=="function"?b(p.options):b;v(),p.options=Object.assign({},n,p.options,O),p.scrollParents={reference:J(i)?ne(i):i.contextElement?ne(i.contextElement):[],popper:ne(s)};var E=Rr(Lr([].concat(a,p.options.modifiers)));return p.orderedModifiers=E.filter(function(u){return u.enabled}),w(),c.update()},forceUpdate:function(){if(!y){var b=p.elements,O=b.reference,E=b.popper;if(rt(O,E)){p.rects={reference:Cr(O,le(E),p.options.strategy==="fixed"),popper:je(E)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(A){return p.modifiersData[A.name]=Object.assign({},A.data)});for(var u=0;u<p.orderedModifiers.length;u++){if(p.reset===!0){p.reset=!1,u=-1;continue}var g=p.orderedModifiers[u],h=g.fn,x=g.options,P=x===void 0?{}:x,T=g.name;typeof h=="function"&&(p=h({state:p,options:P,name:T,instance:c})||p)}}}},update:Wr(function(){return new Promise(function(d){c.forceUpdate(),d(p)})}),destroy:function(){v(),y=!0}};if(!rt(i,s))return c;c.setOptions(f).then(function(d){!y&&f.onFirstUpdate&&f.onFirstUpdate(d)});function w(){p.orderedModifiers.forEach(function(d){var b=d.name,O=d.options,E=O===void 0?{}:O,u=d.effect;if(typeof u=="function"){var g=u({state:p,name:b,instance:c,options:E}),h=function(){};m.push(g||h)}})}function v(){m.forEach(function(d){return d()}),m=[]}return c}}var Vr=[sr,Tr,nr,Gt,Er,yr,Dr,tr,wr],Hr=Mr({defaultModifiers:Vr});const yt=Tt({components:{Icon:Ct},props:{options:{type:Object,default:()=>({})},skeleton:{type:Boolean,default:!1},maxWidth:{type:Number,default:320}},setup(e){const t=ze(null),r=ze(null);let a;return{hoverEvent:()=>{!t.value||!r.value||(a&&a.destroy(),a=Hr(t.value,r.value,{placement:"top",...e.options}))},trigger:t,container:r}}}),Nr={class:"tooltip"},Ir={class:"container",ref:"container"};function Fr(e,t,r,a,o,n){const l=Pt("Icon");return Ye(),St("span",Nr,[Te("span",{class:"trigger",ref:"trigger",onMouseenter:t[0]||(t[0]=(...i)=>e.hoverEvent&&e.hoverEvent(...i))},[Ue(e.$slots,"trigger",{},void 0,!0),e.$slots.trigger?$t("",!0):(Ye(),Dt(l,{key:0,name:"info"}))],544),Te("div",Ir,[Te("div",{class:jt(["body",{"has-skin":!e.skeleton}]),style:Bt({maxWidth:`${e.maxWidth}px`})},[Ue(e.$slots,"default",{},void 0,!0)],6)],512)])}const We=kt(yt,[["render",Fr],["__scopeId","data-v-3e3124c5"]]);yt.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"options",type:{name:"Partial<PopperOptions>"},defaultValue:{func:!0,value:"() => ({})"}},{name:"skeleton",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxWidth",type:{name:"number"},defaultValue:{func:!1,value:"320"}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/lapras-frontend/lapras-frontend/src/components/Tooltip/Tooltip.vue"]};const Yr={title:"Tooltip",component:We},ge={name:"default",args:{defaultSlot:"これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。",options:{},triggerSlot:null,scrollText:null},render:e=>({components:{Tooltip:We},setup(){return{args:e}},template:`
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
        </Tooltip>
      </div>
    `})},he={name:"custom trigger",args:{defaultSlot:"hoge",options:{placement:"left-start"},triggerSlot:"//placehold.jp/100x200.png",scrollText:"scroll"},render:e=>({components:{Tooltip:We},setup(){return{args:e}},template:`
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
          <template #trigger>
            <img :src="args.triggerSlot" />
          </template>
        </Tooltip>
        <p style="padding: 30px 0 300px">{{ args.scrollText }}</p>
      </div>
    `})};var at,ot,nt;ge.parameters={...ge.parameters,docs:{...(at=ge.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'default',
  args: {
    defaultSlot: 'これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。',
    options: {},
    triggerSlot: null,
    scrollText: null
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
        </Tooltip>
      </div>
    \`
  })
}`,...(nt=(ot=ge.parameters)==null?void 0:ot.docs)==null?void 0:nt.source}}};var it,st,pt;he.parameters={...he.parameters,docs:{...(it=he.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'custom trigger',
  args: {
    defaultSlot: 'hoge',
    options: {
      placement: 'left-start'
    },
    triggerSlot: '//placehold.jp/100x200.png',
    scrollText: 'scroll'
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
          <template #trigger>
            <img :src="args.triggerSlot" />
          </template>
        </Tooltip>
        <p style="padding: 30px 0 300px">{{ args.scrollText }}</p>
      </div>
    \`
  })
}`,...(pt=(st=he.parameters)==null?void 0:st.docs)==null?void 0:pt.source}}};const Ur=["Default","CustomTrigger"];export{he as CustomTrigger,ge as Default,Ur as __namedExportsOrder,Yr as default};
