import{a as he}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-IQWEND5N.js";import{a as ae,b as Fe,c as Ut,d as Wt,e as Gt,f as _r,g as pn,h as B,j as Ue,k as hn,l as yn}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-ZWFI45Z6.js";import{a as mn,b as gn,f as fn}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-QOR5ZZFN.js";import{a as un}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-LTLAELSV.js";import{c as K,d as Ke,e as Ht,f as Q,g as $t,k as nn,m as rn,o as on,q as sn,s as an,t as cn,u as dn,v as ln}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-P5QDGMWD.js";import{a as vn}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-CAYETVMK.js";import"./7065823145f7010444b41067fe366eb30c6c3817-chunk-326KNHTN.js";import{a as zt,b as Vt,d as ee,e as jt,h as ce,i as te}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-GWKGRNME.js";import"./7065823145f7010444b41067fe366eb30c6c3817-chunk-7IZGVJML.js";import{a as Ot,b as Bt,c as Re,d as Dt,e as Lt,f as Rt,i as Ft,j as Kt,k as q}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-VGWCZ7YE.js";import{a as rt,c as dt,d as lt,f as ut,h as mt,j as L,k as gt,l as ue,p as Yt,q as fe}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-ZEC6CAUJ.js";import{a as st,b as at}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-JKIMQB6P.js";import{Aa as Ct,Ab as Zt,Ba as xt,Bb as Xt,Ca as kt,Db as Jt,E as ft,Ea as Mt,F as R,Fa as _t,Fb as Qt,Ga as At,Ha as se,Hb as en,K as Ae,Ma as Y,Na as Be,P as Pe,Q as ht,Qa as Pt,R as yt,S as vt,Va as De,X as Ne,Ya as Nt,Yb as tn,Z as V,Za as Le,_ as F,ab as ge,b as Mr,c as T,d as x,e as d,f as A,fa as bt,g as ot,ga as j,h as P,i as X,j as it,k as w,ka as Et,l as ct,la as Oe,ma as J,n as pt,na as St,o as C,pa as G,pb as qt,q as O,r as ie,ra as wt,sa as It,ta as pe,ua as me,wa as Tt}from"./7065823145f7010444b41067fe366eb30c6c3817-chunk-CRXZ77CL.js";d();d();(function(){try{var t=typeof window<"u"||typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new t.Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="6b32b35a-33b4-417f-bda4-5da6b8ddaaa6",t._sentryDebugIdIdentifier="sentry-dbid-6b32b35a-33b4-417f-bda4-5da6b8ddaaa6")}catch(n){}})();d();var wr=T(A()),Ir=T(rt());d();var we=T(A());d();var v=T(A());d();typeof document<"u"&&document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(`#engagement-wrapper *,
#engagement-wrapper *:before,
#engagement-wrapper *:after,
.engagement-nudge-modal *,
.engagement-nudge-modal *:before,
.engagement-nudge-modal *:after,
.engagement-nudge-modal-mock *,
.engagement-nudge-modal-mock *:before,
.engagement-nudge-modal-mock *:after {
  box-sizing: border-box;
}

.engagement-modal > .rc-dialog > .rc-dialog-content {
  background-color: transparent;
}

.engagement-tooltip {
  z-index: 2147483647 !important; /*make the tooltip the highest possible z index*/
}

/*** Hack: Hide this because it's less flexible (classnames can't be changes)
    Instead we only show its children, by translating its children ***/
.engagement-modal > .rc-dialog > .rc-dialog-content > .rc-dialog-header {
  max-height: 0px !important;
  padding: 0px !important;
}

.engagement-modal > .rc-dialog {
  left: 0px;
  transition: left 0.3s;
}

.engagement-modal > .rc-dialog > .rc-dialog-content > .rc-dialog-body {
  position: relative !important;
}

/* TestMode inline engagement */
.engagement-modal-inline.rc-dialog-wrap {
  position: relative;
  height: 100%;
}

#engagement-container > div {
  height: 100%;
}

#engagement-home > .rc-dialog-root {
  height: 100%;
}

#engagement-wrapper .rc-header-guidance {
  background: rgba(174, 177, 221, 1) !important;
  filter: brightness(135%);
  border-radius: 2px 2px 0px 0px !important;
  border-bottom: 0px !important;
  padding: 8px 30px 2px 30px !important;
  margin: 0px 10px 0px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 10px !important;
  font-weight: 400;
  text-align: center;
}

@keyframes fontbulger {
  0% {
    font-size: 10px;
  }
  30% {
    font-size: 15px;
  }
  100% {
    font-size: 12px;
  }
}

@keyframes shimmer {
  0% {
    background-position: top left;
  }
  100% {
    background-position: top right;
  }
}

.engagement-category-collapse {
  transform: scale(1, -1);
  transition: 0.3s ease-in;
  cursor: pointer;
}

.engagement-category-expand {
  transition: 0.3s ease-in;
  cursor: pointer;
}

/* Nudges - modal */

.engagement-nudge-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2147483644 !important;
}

.engagement-nudge-modal-mock {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  transition: margin-right cubic-bezier(0.78, 0.14, 0.15, 0.86) 0.3s;
  z-index: 2147483644 !important;
}

/* Nudges - media */

.engagement-help-doc-title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 66.67%, gray 93.08%);
  content: '';
}

/* Recorder */
#engagement-recorder-mask {
  background: transparent;
}
`));d();typeof document<"u"&&document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(`/*** Guidance banner styling and animation ***/
@keyframes example {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-30px);
  }
}

.rc-header-guidance {
  animation: example 0.5s;
  animation-fill-mode: forwards;
}

/*** engagement entry animation ***/
/*** We can't do exit animation because rc-dialog makes display: none ***/
@keyframes onEntry {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.engagement-opened {
  animation: onEntry 0.1s;
  animation-fill-mode: forwards;
}

@keyframes onSelect {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  50% {
    transform: translate3d(0px, 0px, -0.5px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
}

.engagement-selected {
  animation: onSelect 0.4s;
}

@keyframes ScaleEntry {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.engagement-scale-entry-animation {
  animation: ScaleEntry 0.3s;
  animation-fill-mode: forwards;
}

@keyframes onEntry {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.engagement-shortcut-tooltip {
  opacity: 0;
  animation: tagEntry 0.2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes tagExit {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.8);
    opacity: 0;
  }
}

.engagement-shortcut-tooltip-remove {
  animation: tagExit 0.2s;
  animation-fill-mode: forwards;
}

.engagement-shortcut-tooltip,
.engagement-shortcut-tooltip-remove {
  z-index: 99999999;
  position: absolute;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: proxima-nova, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  font-size: 13px;
}

.engagement-shortcut-tooltip-tag {
  margin-left: 10px;
  padding: 2px 5px;
  border-radius: 2px;
  background-color: grey;
}

#engagement-launcher {
  animation: 0.25s ease-out scaleIn;
}

@keyframes scaleIn {
  0% {
    transform: scale(0.06);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes growFromBottom {
  0% {
    transform: scale(1, 0.3);
  }

  100% {
    transform: scale(1, 1);
  }
}
`));d();var We=class{constructor(){x(this,"organization")}getOrganization(){return this.organization}setOrganization(e){this.organization=e}},bn=new We;d();var ne=T(A()),Ar=(t=document.body)=>{var o,i;let e=(0,ne.useRef)(null),n=(0,ne.useRef)(null),r=(0,ne.useRef)(null);return(0,ne.useEffect)(()=>()=>{var a,s;(a=n.current)==null||a.disconnect(),(s=e.current)==null||s.remove()},[]),(e.current===null||t!==r.current)&&((o=n.current)==null||o.disconnect(),(i=e.current)==null||i.remove(),r.current=t,e.current=document.createElement("div"),e.current.setAttribute("data-engagement-toplevel-styles",""),e.current.setAttribute("hidden",""),t.prepend(e.current),n.current=new MutationObserver(()=>{e.current&&e.current.querySelectorAll("style[data-emotion]:not([data-s])").forEach(a=>{a.setAttribute("data-s","")})}),n.current.observe(e.current,{childList:!0,subtree:!0})),e.current},En=Ar;d();var de=T(A());var Pr=({nudgeActor:t})=>{var l;let e=C(),n=Q(t,({context:u})=>u.nudge),r=Q(t,({context:u})=>u.stepIndex),{animStyles:o}=fe(),i=G(n,r);if(!i||!(me(i)&&i.formFactor.isShowingMask))return null;let{targetElement:a}=Gt(e,{step:i}),s=(l=a==null?void 0:a.getBoundingClientRect())!=null?l:new DOMRect,c=a?getComputedStyle(a).borderRadius:"0px";return s.width===0||s.height===0?null:de.default.createElement("div",{style:{position:"absolute",top:"0",left:"0",...ie.getZIndexStyles(i,"mask")}},de.default.createElement("div",{"data-testid":"engagement-nudge-mask",style:{width:`${document.documentElement.scrollWidth}px`,height:`${document.documentElement.scrollHeight}px`,clipPath:`polygon(0% 0%, 0% 100%,
                ${s.left+window.scrollX}px 100%,
                ${s.left+window.scrollX}px ${s.top+window.scrollY}px,
                ${s.left+window.scrollX+s.width}px ${s.top+window.scrollY}px,
                ${s.left+window.scrollX+s.width}px ${s.top+window.scrollY+s.height}px,
                0% ${s.top+window.scrollY+s.height}px,
                0% 100%, 100% 100%, 100% 0%)`,position:"absolute"}}),de.default.createElement("div",{"data-testid":"engagement-nudge-mask-inner",style:{pointerEvents:"none",position:"absolute",inset:`${s.top+window.scrollY}px ${s.left+window.scrollX}px`,width:`${s.width}px`,height:`${s.height}px`,padding:"4px",borderRadius:`${c}`,boxShadow:`0 0 0 ${Math.max(document.documentElement.scrollHeight,document.documentElement.scrollWidth)}px rgba(0, 0, 0, 0.1)`,overflow:"hidden",opacity:o.opacity,transitionProperty:"opacity",transitionDuration:o.transitionDuration,transitionTimingFunction:o.transitionTimingFunction}}))},Sn=({nudgesManager:t})=>{let e=C(),n=Q(t,o=>o.context.activeNudge);if(!n)return null;let r=F(e,n==null?void 0:n.variantId);return r?de.default.createElement(Pr,{nudgeActor:r}):null};d();var wn=t=>{var n;if(t.themeOverride&&t.themeOverride.theme&&t.themeOverride.mode)return t.themeOverride;let e=t.themeMode==="auto"?t.services.getDefaultUIMode():t.themeMode;return{theme:(n=t.themes.find(r=>r.isDefault))==null?void 0:n.theme,mode:e}};d();var U=T(A()),ve=T(A());var $={state:{},subscribers:[],subscribe:t=>($.subscribers.push(t),()=>{$.subscribers=$.subscribers.filter(e=>e!==t)})},Nr=(t,e)=>{switch(e.type){case"SHOW":return{...t,[e.id]:e.payload};case"HIDE":{let n={...t};return delete n[e.id],n}case"HIDE_ALL_MATCHING_PATTERN":if(e.idPattern){let n={...t};for(let r in n)r.match(e.idPattern)&&delete n[r];return n}return{};default:return t}},He=t=>{let e=Nr($.state,t);$.state=e,$.subscribers.forEach(n=>n(e))},In=(t,e)=>{He({type:"SHOW",id:t,payload:e})},Tn=t=>{He({type:"HIDE_ALL_MATCHING_PATTERN",idPattern:t})},$e=t=>{let e=document.querySelector(`[data-spacer-for="${t}"]`);e&&e.remove(),He({type:"HIDE",id:t})},Cn=({children:t})=>{let{isEditorPreview:e}=C(),[n,r]=(0,ve.useState)($.state);return(0,ve.useEffect)(()=>$.subscribe(r),[]),U.default.createElement(U.default.Fragment,null,t,U.default.createElement("div",{id:"engagement-nudges-banner-sticky-container",style:{width:"100%",top:"0px",left:0,position:"fixed",pointerEvents:"none",height:"100%"}},Object.entries(n).filter(([,o])=>o.sticky).map(([o,i])=>U.default.createElement("div",{key:o,id:o},i.element))),U.default.createElement("div",{id:"engagement-nudges-banner-inline-container-top",style:{width:"100%",position:"absolute",top:e?"50%":"0",left:0,pointerEvents:"none"}},Object.entries(n).filter(([,o])=>!o.sticky&&o.position==="top").map(([o,i])=>U.default.createElement("div",{key:o,id:o},i.element))),U.default.createElement("div",{id:"engagement-nudges-banner-inline-container-bottom",style:{width:"100%",position:e?void 0:"relative",pointerEvents:"none"}},Object.entries(n).filter(([,o])=>!o.sticky&&o.position==="bottom").map(([o,i])=>U.default.createElement("div",{key:o,id:o},i.element))))};d();var Mn=T(_r()),Z=T(A());d();var k=T(A());var Or=O.div`
  height: ${Re}px;
  position: relative;
  z-index: 50;

  @media screen and (max-height: 820px) {
    transform: scale(0.9);
  }

  @media screen and (max-height: 760px) {
    transform: scale(0.8);
  }
`,Br=O.div`
  width: ${Dt}px;
  height: ${Re}px;
  position: relative;
  border-radius: 56px;
  box-shadow: 0px 0px 0px 7.5px #7d7e7d;
  border: 8px solid #000;
  background: linear-gradient(165deg, white, #ebf0ff 45%, #ebf0ff 55%, white);
  outline: 6px solid #2c2c2b;
  padding-top: 60px;
  padding-bottom: 34px;
  overflow: hidden;

  ${t=>t.isMobileWeb&&`
    #engagement-toast-container {
      bottom: 0px;
    }
  `}

  @media screen and (max-width: 670px) {
    height: 790px;
    width: 400px;
  }

  #engagement-nudge-container {
    overflow: auto;
  }
`,Dr=O.div`
  height: 100%;
  width: 100%;
  position: relative;
`,Lr=O.div`
  position: absolute;
  width: 100%;
  height: 60px;
  top: 0px;
  display: flex;
  justify-content: center;
  padding-top: 12px;
`,Rr=O.div`
  height: 37px;
  width: 126px;
  border-radius: 24px;
  background-color: #000000;
  transition: height 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    height: 45px;
    width: 145px;
  }
`,Fr=O.div`
  position: absolute;
  width: 100%;
  height: 34px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
`,Kr=O.div`
  height: 5px;
  width: 154px;
  border-radius: 24px;
  background-color: #000000;
`,Ur=O.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  bottom: 0px;
`,xn=O.div`
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: column;

  &.left {
    left: -12px;
  }

  &.right {
    right: -12px;
    top: 220px;
  }
`,be=O.span`
  background-color: #1d1e1f;
  display: inline-block;
  width: 5px;
  min-height: 62px;
  border-radius: 2px;

  &.power {
    height: 102px;
  }

  &.volume-up {
    margin-top: 29px;
  }
  &.volume-down {
    margin-top: 16px;
  }

  &.lock {
    min-height: 32px;
  }
`,Wr=()=>k.default.createElement(Ur,null,k.default.createElement(xn,{className:"left"},k.default.createElement(be,{className:"lock"}),k.default.createElement(be,{className:"volume-up"}),k.default.createElement(be,{className:"volume-down"})),k.default.createElement(xn,{className:"right"},k.default.createElement(be,{className:"power"}))),Hr=()=>k.default.createElement(Lr,null,k.default.createElement(Rr,null)),kn=({style:t,children:e})=>{let{isMobileDevice:n,isMobileNativePreview:r}=q();return k.default.createElement(Or,{style:t,"data-testid":"mobile-preview-device"},k.default.createElement(Wr,null),k.default.createElement(Br,{isMobileWeb:n&&!r},k.default.createElement(Hr,null),k.default.createElement(Dr,{id:"engagement-mobile-preview-wrapper"},k.default.createElement("div",{id:"engagement-mobile-nudge-mock-pin"}),e),k.default.createElement(Fr,null,k.default.createElement(Kr,null))))};var $r=({children:t})=>{let e=Z.default.useRef(null),{widgetTableauSelection:n,editorPreviewDevice:r}=C(),{mode:o}=L(),i=Z.default.useCallback(c=>{if(!c){e.current&&(e.current.dispose(),e.current=null);return}if(e.current=(0,Mn.default)(c,{maxZoom:1,minZoom:1,initialZoom:1,zoomDoubleClickSpeed:1,smoothScroll:!1,filterKey:function(){return!0}}),e.current.on("pan",function(){document.body.style.cursor="grab",c.style.pointerEvents="none"}),e.current.on("panend",function(){document.body.style.cursor="auto",c.style.removeProperty("pointer-events")}),!!c.children[0])return c.addEventListener("mousedown",a),c.addEventListener("wheel",s),()=>{c.removeEventListener("mousedown",a),c.removeEventListener("wheel",s)}},[n]),a=c=>{var g,p;let l=c.target;(l==null?void 0:l.id)==="panzoom-container"?(g=e.current)==null||g.resume():(p=e.current)==null||p.pause()},s=c=>{var g,p;let l=c.target;(l==null?void 0:l.id)==="panzoom-container"?(g=e.current)==null||g.resume():(p=e.current)==null||p.pause()};return Z.default.createElement("div",{style:{position:"absolute",inset:0,overflow:"clip",backgroundColor:o==="lightMode"?"#F9F9F9":"#3F424A",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABZSURBVHgB7dG7DYBADANQJxexAiXSTXw9uyExBih34SOxQhr83Li2ASIiIiIiIvo7QbLW1jms1zijq9puSDaGLxhhuBPaqyKZTFK+/q6AZOJlg8shqv5ccAGZWRnaKiSy9QAAAABJRU5ErkJggg==)"}},Z.default.createElement("div",{id:"panzoom-container",style:{width:"100%",height:"100%"},ref:i},t,Z.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},Z.default.createElement(kn,{style:{visibility:r.startsWith("mobile")?"visible":"hidden"}}))))},_n=$r;d();var I=T(A()),ze=T(rt());d();var re=T(A());d();var An=T(A());var zr={display:"flex",width:"var(--popover-width)",flexDirection:"column",alignItems:"flex-start",pointerEvents:"all",maxWidth:"var(--tooltip-max-width)",position:"relative",borderRadius:"var(--layout-radius-card)",borderWidth:"1px",borderStyle:"solid",borderColor:"var(--border-primary)",background:"var(--background-primary)",boxShadow:"var(--layout-shadow) var(--layout-shadow-color)",a:{color:"var(--content-link)",textDecoration:"none","&:hover":{color:"var(--content-link-hover)",textDecoration:"underline"}}},Vr={minWidth:"var(--popover-width)",width:"unset",maxWidth:"unset"},jr=O.div``,Gr=An.default.forwardRef(({children:t,title:e,variant:n,theme:r,...o},i)=>ut(jr,{ref:i,css:[zr,n==="survey"&&Vr].filter(Boolean),...o},t)),Pn=Gr;var Nn=({nudge:t,step:e,renderMode:n,handleLinkClick:r,stepIndex:o,isVisible:i=!0})=>{let a=C(),s=L(),c=n!==1?F(a,t.variantId):void 0,{isMobileDevice:l}=q(),u=re.default.createElement(dn,{isDismissible:t.isDismissible,"data-testid":"engagement-nudge-tooltip-close"},re.default.createElement(tn,null));return re.default.createElement(ue,{nudge:t},re.default.createElement(Pn,{variant:e.content.find(g=>g.type==="survey_rating")?"survey":"default",key:e.id,theme:s,style:{minHeight:44,pointerEvents:i?"auto":"none",...e.formFactor.layout==="horizontal"&&!l?{width:"auto",maxWidth:"calc(var(--tooltip-max-width) * 2)"}:{}}},re.default.createElement(fn,{nudge:t,step:e,renderMode:n,handleLinkClick:r,stepIndex:o,actor:c,overrides:{close:u}})))};d();var On=T(A());var Yr={bookClosed:qt,helpCircle:Zt,helpSquare:Xt,infoCircle:Jt,lightBulb:Qt,lightning:en},Bn=({type:t})=>{let e=Yr[t];return On.default.createElement(e,{color:"#3F424A",size:16})};d();var Se=T(A());var Dn=Ht({types:{},guards:{shouldCenter:()=>!1,isInlineAligned:()=>!1},actions:{updatePosition:Ke({marker:({context:t},e)=>({...t.marker,position:e.position})}),assignInlineWrapper:Ke({inlineWrapperElement:(t,e)=>e.inlineWrapperElement}),removeTooltip:()=>{},trackMarkerInView:()=>{},handleHide:()=>{}},actors:{waitForTargetElement:K(()=>{}),trackTargetElement:K(()=>{}),wrapTargetElement:K(()=>{}),trackMarkerInView:K(()=>{})}}).createMachine({id:"Tooltip",initial:"idle",context:({input:t})=>({marker:{ref:t.markerRef,position:null,offset:t.offset,alignment:t.alignment},renderMode:t.renderMode,anchor:t.anchor}),states:{idle:{always:[{target:"centered",guard:"shouldCenter",description:"This is the case when we are editing a step in the studio and the target element is unavailable."},"waiting for target element"]},centered:{type:"final"},anchoring:{initial:"hidden",invoke:{src:"trackTargetElement",id:"trackTargetElement",input:({context:t,event:e})=>({marker:t.marker,targetElement:"targetElement"in e?e.targetElement:null})},states:{shown:{on:{HIDE:{target:"#Tooltip.anchoring.hidden"}},states:{visible:{entry:[{type:"trackMarkerInView"}],on:{OUT_OF_VIEW:"hidden"},exit:[{type:"handleHide"}]},hidden:{on:{IN_VIEW:"visible"}}},initial:"hidden",invoke:{src:"trackMarkerInView",id:"trackMarkerInView",input:({context:t})=>({markerRef:t.marker.ref})}},hidden:{on:{SHOW:"shown"}}},on:{POSITION:{actions:[{type:"updatePosition",params:({event:t})=>({position:t.position})}]},TARGET_ELEMENT_REMOVED:"waiting for target element"}},inlining:{invoke:{src:"wrapTargetElement",id:"wrapTargetElement",input:({context:t,event:e})=>({marker:t.marker,targetElement:"targetElement"in e?e.targetElement:null})},states:{idle:{on:{ASSIGN_WRAPPER:{target:"inlined",actions:[{type:"assignInlineWrapper",params:({event:t})=>({inlineWrapperElement:t.inlineWrapperElement})}]}}},inlined:{states:{hidden:{on:{IN_VIEW:"visible"}},visible:{entry:[{type:"trackMarkerInView"}],on:{OUT_OF_VIEW:"hidden"}}},initial:"hidden",invoke:{src:"trackMarkerInView",id:"trackMarkerInView",input:({context:t})=>({markerRef:t.marker.ref})}}},initial:"idle",on:{TARGET_ELEMENT_REMOVED:"waiting for target element"}},"waiting for target element":{on:{TARGET_ELEMENT_FOUND:[{target:"inlining",guard:"isInlineAligned"},"anchoring"]},invoke:{src:"waitForTargetElement",id:"waitForTargetElement"}}},on:{DESTROY:{actions:[{type:"removeTooltip"}]}}}),_=$t(Dn),Ln=({variantId:t,children:e,renderMode:n,offset:r,alignment:o,anchor:i,handleDestroy:a,onMarkerView:s,handleHide:c})=>{let{isEditorPreview:l}=C(),{showWidgetTableau:u,messageBus:g}=C(),p=(0,Se.useRef)(null),h=Dn.provide({guards:{shouldCenter:({context:m})=>!u&&l||n===1&&!ee(m.anchor),isInlineAligned:()=>o==="inline_left"||o==="inline_right"},actions:{removeTooltip:a,trackMarkerInView:s,handleHide:c},actors:{waitForTargetElement:K(({sendBack:m})=>{let b=ee(i);if(ce(b))return m({type:"TARGET_ELEMENT_FOUND",targetElement:b});let f=()=>{let y=ee(i);ce(y)&&m({type:"TARGET_ELEMENT_FOUND",targetElement:y})};return g.subscribe("dom_mutation",f,`tooltip_wait_for_target_${t}`),()=>{g.unsubscribe("dom_mutation",`tooltip_wait_for_target_${t}`)}}),trackTargetElement:K(({sendBack:m,input:b})=>{let{marker:f,targetElement:y}=b;if(!y)return;let S=f.ref.current;if(!S)return;let{offset:E,alignment:N}=f,D=nn(y,S,()=>{var W,H,Je,Qe,et,tt;sn(y,S,{placement:N==="left"?"left":"right",strategy:"fixed",middleware:[rn({mainAxis:B(E.x),crossAxis:B(E.y)}),on({strategy:"escaped",padding:{top:B((W=E==null?void 0:E.y)!=null?W:"0"),bottom:-B((H=E==null?void 0:E.y)!=null?H:"0"),...N==="left"?{right:-B((Je=E==null?void 0:E.x)!=null?Je:"0"),left:B((Qe=E==null?void 0:E.x)!=null?Qe:"0")}:{right:B((et=E==null?void 0:E.x)!=null?et:"0"),left:-B((tt=E==null?void 0:E.x)!=null?tt:"0")}}})]}).then(({y:Cr,x:xr,middlewareData:kr})=>{var nt;m({type:"POSITION",position:{x:xr,y:Cr}}),(nt=kr.hide)!=null&&nt.escaped?m({type:"HIDE"}):m({type:"SHOW"})})});return g.subscribe("dom_mutation",()=>{(!document.contains(y)||!ce(y))&&m({type:"TARGET_ELEMENT_REMOVED"})},`tooltip_check_for_target_removal_${t}`),()=>{D(),g.unsubscribe("dom_mutation",`tooltip_check_for_target_removal_${t}`)}}),wrapTargetElement:K(({sendBack:m,input:b})=>{var E,N;let{marker:f,targetElement:y}=b;if(!y)return;let S=document.createElement("div");return S.setAttribute("data-testid","engagement-nudge-tooltip-wrapper"),S.style.position="relative",S.style.display="inline-flex",S.style.alignItems="baseline",S.style.width="fit-content",S.style.flexDirection=f.alignment==="inline_right"?"row":"row-reverse",(E=y.parentNode)==null||E.insertBefore(S,y),(N=y.parentNode)==null||N.removeChild(y),S.appendChild(y),m({type:"ASSIGN_WRAPPER",inlineWrapperElement:S}),g.subscribe("dom_mutation",()=>{(!document.contains(y)||!ce(y))&&m({type:"TARGET_ELEMENT_REMOVED"})},`tooltip_check_for_target_removal_wrap_${t}`),()=>{let M=S.parentNode;document.contains(M)&&(M==null||M.insertBefore(y,S),M==null||M.removeChild(S)),g.unsubscribe("dom_mutation",`tooltip_check_for_target_removal_wrap_${t}`)}}),trackMarkerInView:K(({sendBack:m,input:b})=>{let f=new IntersectionObserver(([y])=>{y.isIntersecting?m({type:"IN_VIEW"}):m({type:"OUT_OF_VIEW"})});return b.markerRef.current&&f.observe(b.markerRef.current),()=>{f.disconnect()}})}});return Se.default.createElement(_.Provider,{logic:h,options:{input:{markerRef:p,offset:r,alignment:o,renderMode:n,anchor:i}}},e)};var qr=({source:t})=>{let e=t.startsWith("<svg");return I.default.createElement("div",{style:{pointerEvents:"auto"}},e?I.default.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):I.default.createElement("img",{alt:"Tooltip marker",src:t}))},Zr=({type:t})=>I.default.createElement("div",{"data-testid":"engagement-nudge-tooltip-icon",style:{border:"none",display:"flex",background:"none",padding:0,position:"relative",pointerEvents:"auto",width:"16px",height:"16px"}},I.default.createElement(Bn,{type:t})),Xr=({marker:t})=>{let e=L();switch(t.type){case"image":return t.source?I.default.createElement(qr,{source:t.source}):null;case"icon":return I.default.createElement(Zr,{type:t.icon});case"beacon":return I.default.createElement(pn,{theme:e});default:return null}},Jr=({step:t})=>{let{isMobileDevice:e}=q(),n=_.useSelector(m=>m.matches({anchoring:"shown"})||m.matches("centered")),r=_.useSelector(({context:m})=>m.marker.alignment),o=r==="inline_left"||r==="left",i={visibility:n?"visible":"hidden",top:"calc(40vh - 51px)",right:`calc(-${e?o?40:60:o?20:80}vw + 24px)`},a=_.useSelector(({context:m})=>{var b;return(b=m.marker.position)==null?void 0:b.y}),s=_.useSelector(({context:m})=>{var b;return(b=m.marker.position)==null?void 0:b.x}),c={visibility:n?"visible":"hidden",left:s,top:a},l={visibility:"visible"},u=_.useSelector(m=>m.matches({inlining:"inlined"})&&!!m.context.inlineWrapperElement),g=_.useSelector(m=>m.matches("centered")),p=()=>u?l:g?i:c,h=_.useSelector(({context:m})=>m.marker.ref);return I.default.createElement(an,{ref:h,"data-testid":"engagement-nudge-tooltip-marker",style:{...p()}},I.default.createElement(Xr,{marker:t.formFactor.marker}))},Qr=({nudge:t,step:e,popoverActor:n})=>{var h,m,b;let r=Q(n,f=>f.matches("open")),{onExit:o}=fe(),{isStudioMobilePreview:i}=q(),a=C(),s=_.useSelector(({context:f})=>f.renderMode),c=s!==1?F(a,t.variantId):void 0,l=(m=(h=c==null?void 0:c.getSnapshot())==null?void 0:h.context.stepIndex)!=null?m:0,u=(0,I.useCallback)(()=>o(()=>{var f,y;return(y=(f=c==null?void 0:c.getSnapshot())==null?void 0:f.context.popoverActor)==null?void 0:y.send({type:"CLOSE"})}),[c==null?void 0:c.getSnapshot,o]),g=mn(f=>se.nudge.engaged(t,l,{...c==null?void 0:c.getSnapshot().context,source:{type:"link",url:f},interactionState:j(a,t.variantId)}),u),p=_.useSelector(f=>f.matches({inlining:"inlined"})&&!!f.context.inlineWrapperElement);return(0,I.useEffect)(()=>{c==null||c.send({type:"ASSIGN_POPOVER_ACTOR",actor:n})},[n,c]),(0,I.useEffect)(()=>{s===1&&n.send({type:"OPEN"})},[s,e]),I.default.createElement(I.default.Fragment,null,I.default.createElement(Jr,{step:e}),I.default.createElement(cn,{"data-testid":"engagement-nudge-tooltip-content",describedBy:"engagement-nudge-tooltip-content",labelledBy:"engagement-nudge-title",portalToId:i?"engagement-mobile-preview-wrapper":p?"engagement-toast-container":void 0,shouldStealFocus:s!==1,showArrow:((b=e.formFactor.pointer)==null?void 0:b.type)==="arrow",style:{borderRadius:"var(--layout-radius-card)",...ie.getZIndexStyles(e)}},I.default.createElement(gn,{actor:c,step:e},I.default.createElement(un,null,I.default.createElement(Nn,{nudge:t,step:e,renderMode:s,stepIndex:l,handleLinkClick:g,isVisible:r})))))},eo=({nudge:t,step:e,onOpen:n,forceOpen:r=!1,autoPlacement:o=!0,root:i})=>{let a=_.useSelector(({context:f})=>f.renderMode),s=_.useSelector(f=>f.matches("idle")),c=_.useSelector(f=>f.matches({inlining:"inlined"})&&!!f.context.inlineWrapperElement),l=_.useSelector(({context:f})=>f.inlineWrapperElement),u=_.useSelector(({context:f})=>f.marker.offset),{generatedCSSClassname:g}=L();if(s)return null;let[p,h]=[B(u.x),B(u.y)],m=c?{display:"flex",position:"relative",[e.formFactor.marker.positioning.position==="inline_left"?"marginRight":"marginLeft"]:`${p}px`,marginTop:`${h}px`,zIndex:"auto"}:{...ie.getZIndexStyles(e)};if(!i)return null;let b=(0,ze.createPortal)(I.default.createElement(ln,{"data-testid":`engagement-tooltip-${t.variantId}-${String(e.id)}${a===1?"-mock":""}`,forceOpen:r,defaultOpen:a===1,triggerType:e.formFactor.showOn,style:m,className:g,autoPlacement:o,onOpen:n},f=>I.default.createElement(Qr,{nudge:t,step:e,popoverActor:f})),i);return c&&l?(0,ze.createPortal)(b,l):b},Rn=({nudge:t,step:e,renderMode:n,forceOpen:r,anchorOverride:o,onMarkerView:i,onOpen:a,handleDestroy:s,autoPlacement:c})=>{var g;let l=C(),u=(0,I.useRef)(document.getElementById("engagement-tooltip-container-portal"));return u.current?I.default.createElement(ue,{nudge:t},I.default.createElement(Yt,{widget:"tooltip",keepMounted:!0,isOpenByDefault:n===1},I.default.createElement(Ln,{variantId:t.variantId,offset:e.formFactor.marker.positioning.offset,renderMode:n,alignment:e.formFactor.marker.positioning.position,anchor:(g=o!=null?o:e.formFactor.anchorSelector)!=null?g:e.formFactor.anchor,handleDestroy:s,onMarkerView:i,handleHide:()=>{var m;let p=F(l,t.variantId),h=(m=p==null?void 0:p.getSnapshot())==null?void 0:m.context.popoverActor;h==null||h.send({type:"CLOSE"})}},I.default.createElement(eo,{onOpen:a,autoPlacement:c,forceOpen:r,nudge:t,step:e,root:u.current})))):null};var no=v.default.lazy(()=>import("./7065823145f7010444b41067fe366eb30c6c3817-Checklist-2XC7224G.js")),ro=v.default.lazy(()=>import("./7065823145f7010444b41067fe366eb30c6c3817-Nudges-J5Y6J3IB.js")),oo=v.default.lazy(()=>import("./7065823145f7010444b41067fe366eb30c6c3817-WidgetTableau-UXH4QIV3.js")),io=v.default.lazy(()=>import("./7065823145f7010444b41067fe366eb30c6c3817-ResourceCenterRoot-SORKHDRZ.js")),so=()=>{let t=C(),{generatedCSSClassname:e}=L(),n=()=>v.default.createElement(v.default.Fragment,null,v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(ro,null)),t.nudgesManager&&v.default.createElement(Sn,{nudgesManager:t.nudgesManager}),v.default.createElement(Wt,{containerStyle:{marginTop:t.isEditorPreview?"51px":void 0}}),v.default.createElement("div",{id:"engagement-tooltip-container-portal"}),v.default.createElement(Cn,null)),r=()=>v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(no,null)),o=i=>{var a,s;return t.resourceCenter?v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(io,{isEnabled:!!t.resourceCenter.key&&!!((s=(a=t.decide)==null?void 0:a[t.resourceCenter.key])!=null&&s.value),isPreviewPane:i,isVisible:t.resourceCenter.visible,launcher:t.resourceCenter.desktopLauncher})):null};return v.default.createElement("div",{className:e,id:"engagement-theme-root",dir:"ltr"},t.showWidgetTableau?v.default.createElement(v.Suspense,{fallback:null},v.default.createElement(oo,null)):t.isEditorPreview?v.default.createElement(_n,null,r(),n(),o(!0)):v.default.createElement(v.default.Fragment,null,r(),n(),o(!1)))},ao=({children:t})=>{var s,c,l;let e=C(),{organization:n}=e,r=(0,v.useRef)(!!e.user),o=document.getElementById("engagement-wrapper"),i=En(o!=null?o:document.head),a=(0,v.useMemo)(()=>{var g,p;let u=ot();return dt({key:"engagement-toplevel",container:i,speedy:!((g=e.flags)!=null&&g["support-ruby-on-rails"]),nonce:(p=u[P])==null?void 0:p.nonce})},[i,(s=e.flags)==null?void 0:s["support-ruby-on-rails"]]);return(0,v.useEffect)(()=>{bn.setOrganization(n)},[n]),v.default.useEffect(()=>{e.user&&(e.services.postMessageToDashboard("ENGAGEMENT_BOOTED"),r.current||(r.current=!0))},[(c=e.user)==null?void 0:c.device_id,(l=e.user)==null?void 0:l.user_id,n]),v.default.useEffect(()=>{let u=setTimeout(()=>{r.current||w.warn("\u{1F44B} Guides and Surveys are almost ready. You just need to call `boot()` to make them available in your app.")},15e3);return()=>clearTimeout(u)},[]),v.default.createElement(v.default.Fragment,null,v.default.createElement(lt,{value:a},e.user?v.default.createElement(so,null):null,t))},co=t=>{let e=C(),n=wn(e),r={container:document.getElementById("engagement-container"),root:document};return v.default.createElement(mt.Provider,{value:r},v.default.createElement(gt,{theme:n.theme,mode:n.mode},v.default.createElement(ao,{...t})))},Fn=co;var Kn=t=>we.default.createElement(at,null,we.default.createElement(ct,{store:t.store},we.default.createElement(Fn,null,t.children)));d();d();var Ie=(t,e)=>{let n={};return Object.keys(e).forEach(r=>{n[r]=e[r].bind(null,t)}),n};var Ve={};Mr(Ve,{previewAutopilotKeywords:()=>$n,previewContentItem:()=>zn,previewRecSet:()=>Wn,previewResourceCenter:()=>Hn,setInitialPage:()=>Vn,showResourceCenter:()=>Un});d();d();var Un=(t,e)=>{t.services.showResourceCenter(t,e)},Wn=(t,e)=>{t.services.previewRecSet(t,e)},Hn=(t,e,n)=>{t.services.previewResourceCenter(t,e,n)},$n=(t,e)=>{t.services.previewAutopilotKeywords(t,e)},zn=(t,e)=>{t.services.setCurrentContentId(t,e)},Vn=(t,e)=>{t.resourceCenter.initialPage=e};d();var lo=t=>{var e,n,r,o;return typeof window>"u"||typeof document>"u"?t:{...t,event_properties:{...t.event_properties,"[Guides-Surveys] Page":{domain:(e=window.location)==null?void 0:e.hostname,hash:(n=window.location)==null?void 0:n.hash,path:(r=window.location)==null?void 0:r.pathname,query:(o=window.location)==null?void 0:o.search,title:document.title}}}},uo=t=>({...t,event_properties:{...t.event_properties,"[Guides-Surveys] Version":"1"}}),po=t=>(t=uo(t),t=lo(t),t),Te=class{constructor(e){x(this,"hasBooted",!1);x(this,"integrations");this.integrations=e}trackEvent(e,n={}){this.track(e,n)}track(e,n={}){var o,i;let r={event_type:e,event_properties:n};if(!this.hasBooted){w.warn("Events cannot be tracked before `boot` is called");return}try{let a=po(r);w.debug("Tracking event",JSON.stringify(a,null,2));try{this.integrations().forEach(s=>{var c;(c=s.track)==null||c.call(s,{event_type:a.event_type,event_properties:a.event_properties})})}catch(s){(o=R())==null||o.captureException(s)}}catch(a){w.error("Unexpected error logging event; ignoring",{error:a}),(i=R())==null||i.captureException(a)}}setBootStatus(e){this.hasBooted=e}};d();var mo=function(){function t(){}return t.prototype.getApplicationContext=function(){return{versionName:this.versionName,language:go(),platform:"Web",os:void 0,deviceModel:void 0}},t}(),go=function(){return typeof navigator<"u"&&(navigator.languages&&navigator.languages[0]||navigator.language)||""},fo=function(){function t(){this.queue=[]}return t.prototype.logEvent=function(e){this.receiver?this.receiver(e):this.queue.length<512&&this.queue.push(e)},t.prototype.setEventReceiver=function(e){this.receiver=e,this.queue.length>0&&(this.queue.forEach(function(n){e(n)}),this.queue=[])},t}(),z=function(){return z=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},z.apply(this,arguments)};function Ce(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function jn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}var xe=function(t,e){var n,r,o=["string","number","boolean","undefined"],i=typeof t,a=typeof e;if(i!==a)return!1;try{for(var s=Ce(o),c=s.next();!c.done;c=s.next()){var l=c.value;if(l===i)return t===e}}catch(f){n={error:f}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}if(t==null&&e==null)return!0;if(t==null||e==null||t.length!==e.length)return!1;var u=Array.isArray(t),g=Array.isArray(e);if(u!==g)return!1;if(u&&g){for(var p=0;p<t.length;p++)if(!xe(t[p],e[p]))return!1}else{var h=Object.keys(t).sort(),m=Object.keys(e).sort();if(!xe(h,m))return!1;var b=!0;return Object.keys(t).forEach(function(f){xe(t[f],e[f])||(b=!1)}),b}return!0},ho="$set",yo="$unset",vo="$clearAll";Object.entries||(Object.entries=function(t){for(var e=Object.keys(t),n=e.length,r=new Array(n);n--;)r[n]=[e[n],t[e[n]]];return r});var bo=function(){function t(){this.identity={userProperties:{}},this.listeners=new Set}return t.prototype.editIdentity=function(){var e=this,n=z({},this.identity.userProperties),r=z(z({},this.identity),{userProperties:n});return{setUserId:function(o){return r.userId=o,this},setDeviceId:function(o){return r.deviceId=o,this},setUserProperties:function(o){return r.userProperties=o,this},setOptOut:function(o){return r.optOut=o,this},updateUserProperties:function(o){var i,a,s,c,l,u,g=r.userProperties||{};try{for(var p=Ce(Object.entries(o)),h=p.next();!h.done;h=p.next()){var m=jn(h.value,2),b=m[0],f=m[1];switch(b){case ho:try{for(var y=(s=void 0,Ce(Object.entries(f))),S=y.next();!S.done;S=y.next()){var E=jn(S.value,2),N=E[0],M=E[1];g[N]=M}}catch(H){s={error:H}}finally{try{S&&!S.done&&(c=y.return)&&c.call(y)}finally{if(s)throw s.error}}break;case yo:try{for(var D=(l=void 0,Ce(Object.keys(f))),W=D.next();!W.done;W=D.next()){var N=W.value;delete g[N]}}catch(H){l={error:H}}finally{try{W&&!W.done&&(u=D.return)&&u.call(D)}finally{if(l)throw l.error}}break;case vo:g={};break}}}catch(H){i={error:H}}finally{try{h&&!h.done&&(a=p.return)&&a.call(p)}finally{if(i)throw i.error}}return r.userProperties=g,this},commit:function(){return e.setIdentity(r),this}}},t.prototype.getIdentity=function(){return z({},this.identity)},t.prototype.setIdentity=function(e){var n=z({},this.identity);this.identity=z({},e),xe(n,this.identity)||this.listeners.forEach(function(r){r(e)})},t.prototype.addIdentityListener=function(e){this.listeners.add(e)},t.prototype.removeIdentityListener=function(e){this.listeners.delete(e)},t}(),le=typeof globalThis<"u"?globalThis:typeof window<"u"?window:self,ke=function(){function t(){this.identityStore=new bo,this.eventBridge=new fo,this.applicationContextProvider=new mo}return t.getInstance=function(e){return le.analyticsConnectorInstances||(le.analyticsConnectorInstances={}),le.analyticsConnectorInstances[e]||(le.analyticsConnectorInstances[e]=new t),le.analyticsConnectorInstances[e]},t}();d();var je=["boot"],Gn=["boot"],Ge="$default_instance";function Yn(t){var o,i,a,s,c,l,u;let e=window.engagement,n={_q:(o=e==null?void 0:e._q)!=null?o:[],_configuration:{apiKey:(a=(i=e==null?void 0:e._configuration)==null?void 0:i.apiKey)!=null?a:"",serverUrl:(s=e==null?void 0:e._configuration)==null?void 0:s.serverUrl,serverZone:(l=(c=e==null?void 0:e._configuration)==null?void 0:c.serverZone)!=null?l:"US",options:{...(u=e==null?void 0:e._configuration)==null?void 0:u.options}},_sentry:void 0,init(g,p){var m,b,f;if(n._configuration.apiKey){console.log("Engagement SDK has already been initialized. Ignoring additional init call.");return}n._configuration={...n._configuration,...p,apiKey:g,options:{splitting:!0,...n._configuration.options,...p==null?void 0:p.options}},(b=(m=n._configuration)==null?void 0:m.options)!=null&&b.logger&&n._configuration.options.logger.enable((f=n._configuration.options.logLevel)!=null?f:2);let h;if(p!=null&&p.cdnUrl)n._configuration.options.splitting?h=`${p.cdnUrl}/engagement-browser/prod/split/index.js`:h=p.cdnUrl+"/engagement-browser/prod/index.min.js.gz";else{let y=n._configuration.serverZone==="EU"?"https://cdn.eu.amplitude.com":"https://cdn.amplitude.com";n._configuration.options.splitting?h=`${y}/engagement-browser/prod/split/index.js`:h=`${y}/engagement-browser/prod/index.min.js.gz`}t(h,n._configuration.options.splitting?"module":void 0)},plugin(g){let p=n.init;return{name:"@amplitude/engagement-browser",type:"enrichment",async setup(h,m){var y,S;let b=(y=h.instanceName)!=null?y:Ge,f=ke.getInstance(b).identityStore;p(h.apiKey,{serverZone:h.serverZone,serverUrl:(S=h.serverUrl)!=null&&S.includes("amplitude.com")?void 0:h.serverUrl,...g,options:{logLevel:h.logLevel,logger:h.loggerProvider,...g==null?void 0:g.options}}),await window.engagement.boot({user:()=>{let E=f.getIdentity();return{user_id:m.getUserId(),device_id:m.getDeviceId(),user_properties:E.userProperties,getSessionId:m.getSessionId}},integrations:[{track:E=>{m.track(E)}}]}),f.addIdentityListener(E=>{window.engagement._setUserProperties(E.userProperties)})},async execute(h){return window.engagement.forwardEvent(h),h}}}},r=n;return new Proxy(n,{get:function(g,p){if(p in r)return r[p];if(p!=="then")return p==="gs"||p==="rc"?new Proxy({},{get:function(h,m){return function(){let b=Array.from(arguments),f=`${p}.${m}`;b.unshift(f),n._q.push(b)}}}):je.includes(p)?function(){let h=Array.prototype.slice.call(arguments);return new Promise((m,b)=>{h.unshift(p,m,b),n._q.push(h)})}:function(){let h=Array.prototype.slice.call(arguments);h.unshift(p),n._q.push(h)}}})}var Eo=["reloadOrganization","reloadNudges","reloadThemes"],So={},Me=class{constructor(e,n){x(this,"_");x(this,"nudgeActions");x(this,"resourceCenterActions");x(this,"globalActions");x(this,"_analytics",new Te(()=>this._.integrations));x(this,"_configuration",{serverZone:"US",serverUrl:void 0,apiKey:"",options:{...So}});x(this,"_initStarted",!1);x(this,"_isProxy",!1);x(this,"_fingerprint");x(this,"_sentry");x(this,"gs",{reset:(e,n)=>{let r=Oe(this._,e);if(!r){w.warn(`gs.reset: Guide or survey with flagKey: ${e} not found`);return}this.nudgeActions.resetNudge(r==null?void 0:r.variantId,{step:n})},list:()=>{let e=[],n=V(this._);if(!n)return e;for(let r of n.values()){let o=r.getSnapshot().context.nudge,i=j(this._,o.variantId),a=r.getSnapshot().matches({Step:"Render Loop"});!(i!=null&&i.activelifeCycleUuid)&&!a||e.push({id:o.variantId,step:i==null?void 0:i.currentStep,title:o.title,status:a?"visible":"active"})}return e},show:(e,n=0)=>{let r=Oe(this._,e);r?(this.nudgeActions.closeAllNudgeMocks(),this.nudgeActions.forceTriggerSingleNudge(r,{source:{type:"sdk"},overrides:{stepIndex:n}})):w.error(`triggerNudge: Nudge with key: ${e} not found`)},closeAll:()=>{var e;(e=V(this._))==null||e.forEach(n=>{n==null||n.send({type:"DISMISS"})})}});x(this,"rc",{open:()=>{this.resourceCenterActions.showResourceCenter(!0)},close:()=>{this.resourceCenterActions.showResourceCenter(!1)},toggle:()=>{this.resourceCenterActions.showResourceCenter(!this._.resourceCenter.visible)}});var r,o;this._=e,this.nudgeActions=Ie(e,ge),this.resourceCenterActions=Ie(e,Ve),this.globalActions=Ie(e,_t),this.setRouter=this.setRouter.bind(this),this.boot=this.boot.bind(this),this._startNudgeDebug=this._startNudgeDebug.bind(this),this.forwardEvent=this.forwardEvent.bind(this),this.addIntegration=this.addIntegration.bind(this),this.setThemeMode=this.setThemeMode.bind(this),this.addCallback=this.addCallback.bind(this),this.setSessionProperty=this.setSessionProperty.bind(this),this._initStarted=((r=window.engagement)==null?void 0:r._initStarted)===!0,this._configuration={...this._configuration,...n,options:{...this._configuration.options,...n.options}},this._configuration.options.logger&&this._configuration.options.logger.enable((o=this._configuration.options.logLevel)!=null?o:2),this._sentry=ft("https://86e449af9e7145de4804c2143988499b@o13027.ingest.us.sentry.io/4508580659462144")}init(e,n){var r;if(this._configuration.apiKey){w.warn("Engagement SDK has already been initialized. Ignoring additional init call.");return}this._configuration={...this._configuration,apiKey:e,...n,options:{...this._configuration.options,...n==null?void 0:n.options}},this._configuration.options.logger&&this._configuration.options.logger.enable((r=this._configuration.options.logLevel)!=null?r:2)}plugin(e){return{name:"@amplitude/engagement-browser",type:"enrichment",setup:async(o,i)=>{var c;let a=(c=o.instanceName)!=null?c:Ge,s=ke.getInstance(a).identityStore;await this.boot({user:()=>{let l=s.getIdentity();return{user_id:i.getUserId(),device_id:i.getDeviceId(),user_properties:l.userProperties,getSessionId:i.getSessionId}},integrations:[{track:l=>{i.track(l)}}]}),s.addIdentityListener(l=>{this._setUserProperties(l.userProperties)})},execute:async o=>(this.forwardEvent(o),o)}}setRouter(e){this.globalActions.addCallbacks({"engagement-router":e})}async updateLanguage(e){var o;this._configuration&&(this._configuration.locale=e);let r=(await Y(this._configuration.apiKey)).nudges;(o=V(this._))==null||o.forEach(i=>{let a=r.find(s=>s.variantId===i.getSnapshot().context.nudge.variantId);a&&(i==null||i.send({type:"REFRESH_NUDGE",nudge:a}))})}async boot(e){var n,r,o,i;if(typeof e.user=="function")try{this._.user=e.user()}catch(a){w.error("Failed to get user from provider function",a)}else typeof e=="string"?this._.user={user_id:e}:typeof e.user=="string"?this._.user={user_id:e.user}:this._.user=e.user;if(!this._.user||!this._.user.user_id&&!this._.user.device_id){w.error("User must specify at least a user_id or device_id"),this._.user=void 0;return}this._.integrations=[],(n=e.integrations)==null||n.forEach(a=>{this.addIntegration(a)}),w.log("booting...",JSON.stringify(this._.user,null,2));try{this._.decide=await At.decide(this._configuration.apiKey,this._.user,this._.isEditorPreview),w.debug("Decide data fetched successfully")}catch(a){w.error("Failed to fetch decide data",a),(r=R())==null||r.captureException(a)}try{await this._.endUserStore.fetchData(),this._.endUserStore.initializedSuccessfully&&(this._analytics.setBootStatus(!0),(o=this._.nudgesManager)==null||o.send({type:"END_USER_STORE_LOADED"}),w.debug("End user state loaded successfully"))}catch(a){w.error("Failed to fetch end user state",a),(i=R())==null||i.captureException(a)}}forwardEvent(e){typeof e=="string"&&(e={event_type:e}),w.debug(`Registering event ${e.event_type}`),Mt(this._,e.event_type,e.event_properties)}addIntegration(e){this._.integrations.push(e)}setThemeMode(e){["lightMode","darkMode","auto"].includes(e)&&(this._.themeMode=e)}addCallback(e,n){this.globalActions.addCallbacks({[e]:n})}setSessionProperty(e,n){if(!yt(e)){console.error("Invalid session property key",e);return}if(!vt(n)){console.error("Invalid session property value",n);return}this.globalActions.setSessionProperties({[e]:n})}async _configUser(){var s;(s=R())==null||s.addBreadcrumb({level:"debug",category:"internal",message:"_configUser called"});let{organization:e,nudges:n,flags:r,themes:o,resourceCenters:i}=await Y(this._configuration.apiKey,this._.isEditorPreview);this._.flags=r,this._.themes=o;let[a]=i;a&&(this._.resourceCenter={...this._.resourceCenter,...a}),this.globalActions.setOrganization(e),this.nudgeActions.initNudges(n||[]),this.nudgeActions.setupTimedTriggers([...n])}_updateEditorPreviewDevice(e){this._.editorPreviewDevice=e}_getEditorPreviewDevice(){return this._.editorPreviewDevice}async _reload(e=Eo){let n=await Y(this._configuration.apiKey,this._.isEditorPreview);for(let r of e){let i=this[r];i instanceof Function&&i(n)}}async _reloadOrganization(e){let{organization:n}=e||await Y(this._configuration.apiKey,this._.isEditorPreview);this.globalActions.setOrganization(n)}async _reloadNudges(e){let{nudges:n}=e||await Y(this._configuration.apiKey,this._.isEditorPreview);this.nudgeActions.initNudges(n||[])}async _reloadThemes(e){let{themes:n}=e||await Y(this._configuration.apiKey,this._.isEditorPreview);this._.themes=n}_startNudgeDebug(e){let{nudge:n}=e;this.nudgeActions.closeAllNudgeMocks(),this.nudgeActions.startDebugSession(n,{refreshDecide:!0,toStepIndex:0})}async _stopNudgeDebug(){this.nudgeActions.stopDebugSession()}_showNudgeStepMock(e){var n;(n=V(this._))==null||n.forEach(r=>{r==null||r.send({type:"CLOSE"})}),this.nudgeActions.showStepMock(e.nudge,e.stepIndex,{forceOpen:e.forceOpen})}_closeNudgeMocks(){this.nudgeActions.closeAllNudgeMocks()}_setUserProperties(e){if(!this._.user){w.error("User is undefined, likely hasn't been booted yet");return}this._.user.user_properties={...this._.user.user_properties,...e}}_shareConfig(){return{organization:this._.organization||void 0,nudges:J(this._)}}_shareTrackedEvents(){return{trackedEvents:[...this._.trackedAppEvents]}}_startDebug(){X.set("debug:nudges","true"),w.log("Enabled debugging for nudges. Restart the application.")}_stopDebug(){X.remove("debug:nudges"),w.log("Disabled debugging for nudges. Restart the application.")}_showResourceCenter(e,n){this.resourceCenterActions.showResourceCenter(e),(n==null?void 0:n.recSet)!==void 0&&this.resourceCenterActions.previewRecSet(n.recSet),n!=null&&n.resourceCenter&&(n==null?void 0:n.quickLinks)!==void 0&&this.resourceCenterActions.previewResourceCenter(n.resourceCenter,n.quickLinks),(n==null?void 0:n.autopilotKeywords)!==void 0&&this.resourceCenterActions.previewAutopilotKeywords(n.autopilotKeywords),(n==null?void 0:n.contentItemId)!==void 0&&this.resourceCenterActions.previewContentItem(n.contentItemId)}_startChat(){this.resourceCenterActions.setInitialPage({item:{page:"chat",params:{}}}),this.resourceCenterActions.showResourceCenter(!0)}_getDebugSnapshot(e){if(e!=null&&e.variantId){if(typeof e.variantId=="number"){let r=Et(this._,e.variantId);if(r){let o=typeof e.stepIndex=="number"?e.stepIndex:0,i=Le(this._,r,o),{name:a}=Ne(r),s=`${a} debug snapshot: ${i.guideOrSurvey.title} - ${i.guideOrSurvey.variant}`;console.log(s,i)}}return}let n=J(this._);for(let r of n){let o=Le(this._,r),{name:i}=Ne(r),a=`${i} debug snapshot: ${o.guideOrSurvey.title} - ${o.guideOrSurvey.variant}`;console.log(a,o)}}_debugStatus(){console.log({user:this._.user,apiKey:this._configuration.apiKey,stateInitialized:this._.endUserStore.initializedSuccessfully,decideSuccessful:this._.decide!=null,num_guides_surveys:J(this._).length,analyticsIntegrations:this._.integrations.length})}_setTheme(e,n){e||(this._.themeOverride=void 0),this._.themeOverride={theme:e,mode:n}}_showWidgetTableau(e,n){this._.widgetTableauSelection=n,this._.showWidgetTableau=e}_addCallback(e,n){this.globalActions.addCallbacks({[e]:n})}_clearNudgeInteractions(e){e?this._.endUserStore.data={nudgeInteractions:{...this._.endUserStore.data.nudgeInteractions,[e]:Ae()}}:this._.endUserStore.data={nudgeInteractions:Object.fromEntries(Object.keys(this._.endUserStore.data.nudgeInteractions).map(n=>[n,Ae()]))},this._.endUserStore.pushData()}};d();var qn=async(t,e)=>{let n=(s,c)=>{let l=c.split("."),u=s;for(let g of l){if(!(g in u)){w.warn(`Engagement SDK method ${c} is not defined.`);return}u=u[g]}return u},r=async s=>{let c=[...s],l=c.shift(),u=n(t,l);if(u)if(je.includes(l))if(c[0]instanceof Function){let g=c.shift(),p=c.shift();try{await u(...c).then(g,p)}catch(h){w.error(h)}}else await u(...c);else await u(...c)},i=(async s=>{do{let c=e.findIndex(u=>(u==null?void 0:u[0])===s);if(c===-1)break;let l=e.splice(c,1)[0];await r(l)}while(!0)})("boot"),a=[];for(;e.length>0;){let s=e.shift();if(!s)continue;let c=s[0];if(c==="boot"){a.push(s);continue}Gn.includes(c)?await r(s):r(s)}return e.length=0,i.then(async()=>{for(let s=0;s<a.length;s++){let c=a[s];await r(c)}}),t};d();var wo=4,Io=500,To=500,Zn=t=>{let e,n=0,r=0,o=()=>{let i=Date.now();i-r<=To&&(n+=1,clearTimeout(e),e=setTimeout(()=>n=0,Io)),r=i,n>=wo&&(t.messageBus.publish("rage_click"),n=0,clearTimeout(e))};return document.body.addEventListener("click",o),()=>{document.body.removeEventListener("click",o)}};d();var Xn=t=>{let i=0,a=-1,s=-1,c=-1,l,u=g=>{let{clientX:p,clientY:h,timeStamp:m}=g;if(a!==-1&&s!==-1&&c!==-1){let b=Math.abs(p-a),f=Math.abs(h-s);Math.sqrt(b**2+f**2)/(m-c)>5&&m-c<=100&&(i+=1,clearTimeout(l),l=setTimeout(()=>i=0,500)),i>=15&&(t.messageBus.publish("user_confusion"),i=0,clearTimeout(l))}a=p,s=h,c=m};return document.body.addEventListener("mousemove",u),()=>{document.body.removeEventListener("mousemove",u)}};d();var Jn=T(vn()),Co=5e3,xo=6e4,Qn=t=>{let e=!1,n=()=>{e&&t.messageBus.publish("user_inactive")};setTimeout(()=>e=!0,xo);let r=(0,Jn.default)(n,Co);return document.body.addEventListener("mousemove",r),document.body.addEventListener("keydown",r),()=>{document.body.removeEventListener("mousemove",r),document.body.removeEventListener("keydown",r)}};d();var er=t=>{t.messageBus.subscribe("location_change",()=>{var n,r,o;(n=V(t))==null||n.forEach(i=>{let a=i.getSnapshot(),s=a.context.nudge;a.matches({Step:"Render Loop"})&&bt(t,s)&&(i==null||i.send({type:"CLOSE"}))});let e=ht(((r=t.organization)==null?void 0:r.shareLinkParam)||Pe,t.location.search);if(e){let i=e.flagKey,a=J(t);if((o=t.nudgesManager)==null||o.send({type:"HANDLE_SHARE_LINK",flagKey:i}),a.find(s=>s.flagKey===i)){let s=new URL(window.location.href);s.searchParams.delete(Pe);let c=s.toString();window.history.replaceState({},document.title,c)}}Be(t,{trigger:{type:"active"},source:{type:"active"},overrides:{cooldown:!0,customThrottles:!0,page:!0}}),Be(t,{trigger:{type:"immediately"},source:{type:"trigger",properties:{triggerType:"immediately"}}})})};d();var tr=t=>{let e=n=>{let r=n.data.action;if(r)r==="startDebugSession"?t.messageBus.publish("start_debug",{event:n}):r==="startRecorderSession"&&t.messageBus.publish("start_recorder",{event:n});else return};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}};d();d();var nr=T(vn());var ko={observerOptions:{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]},debounceMs:150},_e=class{constructor(e,n,r=[],o={}){this.mutationObserver=null;this.processMutationsImmediately=()=>{if(this.mutationObserver)try{this.onMutations()}catch(e){w.error("Error processing mutations:",{error:e})}};this.handleMutations=e=>{try{e.some(r=>this.shouldProcessMutation(r))&&this.processMutationsDebounced()}catch(n){w.error("Error handling mutations:",{error:n,mutationCount:e.length})}};this.target=e,this.onMutations=n,this.filters=r,this.options={...ko,...o},this.processMutationsDebounced=(0,nr.default)(this.processMutationsImmediately,this.options.debounceMs,{maxWait:this.options.debounceMs*2})}shouldProcessMutation(e){if(this.filters.length===0)return!0;try{return this.filters.every(n=>n(e))}catch(n){return w.error("Error in mutation filter:",{error:n,mutation:e}),!1}}cleanup(){var e;this.processMutationsDebounced.cancel(),(e=this.mutationObserver)==null||e.disconnect(),this.mutationObserver=null}observe(){return this.mutationObserver&&this.cleanup(),this.mutationObserver=new MutationObserver(this.handleMutations),this.mutationObserver.observe(this.target,this.options.observerOptions),()=>{this.cleanup()}}};var Mo=t=>!(te(t.target)||Array.from(t.addedNodes).some(te)||Array.from(t.removedNodes).some(te)),rr=t=>new _e(document.documentElement,()=>{t.messageBus.publish("dom_mutation")},[Mo]).observe();d();d();var oe=T(A());var or=(t,e,n,r={})=>{var c,l;let o=(c=r==null?void 0:r.renderMode)!=null?c:0;e=kt(e,t);let i=St(e);if(pe(e)){t.activeChecklist={nudge:e,renderMode:o,defaultOpenIdx:o===1?n:void 0};return}if(wt(e)){let[u]=e.steps,g=`${e.variantId}-${String(u.id)}${o===1?"-mock":""}`;ae(g,{asChild:!0,element:oe.default.createElement(Rn,{forceOpen:r==null?void 0:r.forceOpen,nudge:e,renderMode:o,step:u,anchorOverride:r==null?void 0:r.anchorOverride,handleDestroy:()=>De(t,e,o),onMarkerView:()=>{if(o===1)return;let p=F(t,e.variantId);se.nudge.tooltipMarkerViewed(e,n,{...p==null?void 0:p.getSnapshot().context,interactionState:j(t,e.variantId)})},onOpen:()=>{o!==1&&se.nudge.viewed(e,n,{...r.context,interactionState:j(t,e.variantId)})}})});return}if(It(e)){let[u]=e.steps,g=`${e.variantId}-${String(u.id)}${o===1?"-mock":""}`;In(g,{element:oe.default.createElement(yn,{nudge:e,stepIndex:n,renderMode:o}),sticky:u==null?void 0:u.formFactor.sticky,position:u==null?void 0:u.formFactor.position});return}let a=G(e,n),s=()=>{i&&De(t,e,o)};switch(a==null?void 0:a.formFactor.type){case"popover":{let u=`${e.variantId}-${String(a.id)}${o===1?"-mock":""}`,g=a.formFactor.position==="center";ae(u,{element:oe.default.createElement(Ue,{nudge:e,renderMode:o,stepIndex:n,center:g}),position:a.formFactor.position,duration:Number.POSITIVE_INFINITY,onEscapeKeyDown:s});break}case"modal":{t.currentModalNudge=pt({nudge:e,stepIndex:n,renderMode:o});break}case"pin":{me(a)&&ae(`${e.variantId}-${String(a.id)}${o===1?"-mock":""}`,{element:oe.default.createElement(hn,{nudge:e,step:a,renderMode:o,stepIndex:n,anchorOverride:r==null?void 0:r.anchorOverride}),duration:Number.POSITIVE_INFINITY,onEscapeKeyDown:s,onEnterKeyDown:()=>Nt(t,e)});break}default:(l=st())==null||l.captureMessage(`Unknown form factor type: ${a==null?void 0:a.formFactor}`,"error",{captureContext:{tags:{product:"nudges"}}}),ae(`${e.variantId}-${String(a==null?void 0:a.id)}${o===1?"-mock":""}`,{element:oe.default.createElement(Ue,{nudge:e,renderMode:o,stepIndex:n}),position:"top-right",duration:Number.POSITIVE_INFINITY,onEscapeKeyDown:s})}};d();var ir=(t,e)=>{let n=ee(t);if(!n)return;let r=()=>{e()};return n.addEventListener("click",r),()=>n.removeEventListener("click",r)};d();var sr=(t,e)=>{var n,r;for(let o=0;o<e.steps.length;o++){let i=G(e,o);((n=t.currentModalNudge)==null?void 0:n.renderMode)===1&&(t.currentModalNudge=null),((r=t.activeChecklist)==null?void 0:r.renderMode)===1&&(t.activeChecklist=null),Fe(`${e.variantId}-${String(i==null?void 0:i.id)}-mock`),$e(`${e.variantId}-${String(i==null?void 0:i.id)}-mock`)}},ar=t=>{var e,n;Ut(/-mock$/),Tn(/-mock$/),((e=t.currentModalNudge)==null?void 0:e.renderMode)===1&&(t.currentModalNudge=null),((n=t.activeChecklist)==null?void 0:n.renderMode)===1&&(t.activeChecklist=null)},cr=(t,e,n)=>{var o;let r=G(e,n);if(pe(e)){if(!t.activeChecklist)return;t.activeChecklist=null}else Tt(r)&&((o=t.currentModalNudge)==null?void 0:o.renderMode)!==1?t.currentModalNudge=null:(Fe(`${e.variantId}-${String(r==null?void 0:r.id)}`),$e(`${e.variantId}-${String(r==null?void 0:r.id)}`))};d();var dr=(t,e)=>{t.resourceCenter.visible=e},lr=(t,e)=>{t.resourceCenter.currentContentItemId=e?e.toString():null},ur=(t,e)=>{t.resourceCenter.previewedRecommendationSet=e},pr=(t,e,n)=>{t.resourceCenter={...t.resourceCenter,...e,previewedAdditionalResources:n}},mr=(t,e)=>{t.resourceCenter.customAutopilotKeywords=e};d();var gr=async(t,e)=>{var r,o;let n=()=>{};switch((r=e==null?void 0:e.meta)==null?void 0:r.type){case"intercom":n=()=>window.Intercom("showNewMessage");break;case"helpscout":n=()=>window.Beacon("open");break;case"freshdesk":n=()=>window.FreshworksWidget("open");break;case"freshchat":{n=async()=>window.fcWidget.open();break}case"gist":n=()=>window.gist.chat("open");break;case"crisp":n=()=>{window.$crisp.push(["do","chat:open"]),window.$crisp.push(["do","chat:show"])};break;case"talkdesk_v2":n=()=>{window.webchat.open()};break;case"zendesk":{n=()=>{try{window.zE("messenger","open")}catch(i){window.zE("webWidget","open"),window.zE("webWidget","show")}};break}case"liveChat":n=()=>window.LiveChatWidget.call("maximize");break;case"olark":n=()=>window.olark("api.box.expand");break;case"hubspot":n=()=>window.HubSpotConversations.widget.open();break;case"drift":n=()=>window.drift.api.openChat();break;case"pylon":n=()=>window.Pylon("show")}try{await n()}catch(i){(o=R())==null||o.captureException(i)}},fr=(t,e,n)=>{let r=xt(e.value,t,!0);if(n){window.open(r,"_blank");return}switch(e.operation){case"router":{let o=t.callbacks["engagement-router"];if(o)o(r);else throw new Ct("Link is of router type, but router is not defined.");break}case"self":window.open(r,"_self");break;case"blank":window.open(r,"_blank");break;default:window.open(r,"_blank");break}};var hr={renderNudge:or,addClickListener:ir,clickElement:Vt,closeNudgeMock:sr,closeAllNudgeMocks:ar,closeStep:cr,onLocationChange:Ft,postMessageToDashboard:he,openChatExecutable:gr,linkExecutable:fr,getDefaultUIMode:Lt,isElementVisible:jt,matchesSelector:zt,showResourceCenter:dr,setCurrentContentId:lr,previewRecSet:ur,previewResourceCenter:pr,previewAutopilotKeywords:mr};d();var Ye=async(t,e)=>{let n=await fetch(t,{...e,body:e.body!=""?e.body:void 0});return{status:n.status,statusText:n.statusText,headers:Object.fromEntries(n.headers.entries()),data:await n.text(),ok:n.ok}};typeof window<"u"?window.simpleFetch=Ye:typeof globalThis<"u"?globalThis.simpleFetch=Ye:typeof window<"u"&&(window.simpleFetch=Ye);d();var _o=t=>{let e=new TextEncoder().encode(t),n=Array.from(e,r=>String.fromCodePoint(r)).join("");return btoa(n)},Ao=t=>{let e=atob(t),n=new TextEncoder().encode(e);return JSON.parse(new TextDecoder().decode(n))};globalThis.base64Encode=_o;globalThis.base64Decode=Ao;d();var Po=t=>!t.target||!te(t.target),yr=t=>{let e=n=>{Po(n)&&t.messageBus.publish("click",{event:{type:n.type,target:n.target,currentTarget:n.currentTarget,preventDefault:()=>n.preventDefault(),stopPropagation:()=>n.stopPropagation()}})};return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}};d();var No=30,Oo=0,vr=t=>{let e=null,n=()=>{t.messageBus.publish("exit_intent")},r=i=>{i.clientY>No||(e=setTimeout(n,Oo))},o=()=>{e&&(clearTimeout(e),e=null)};return document.documentElement.addEventListener("mouseleave",r),document.documentElement.addEventListener("mouseenter",o),()=>{document.body.removeEventListener("mouseleave",r),document.body.removeEventListener("mouseenter",o)}};d();var br="gs-debug-id",Er=t=>{t.messageBus.subscribe("location_change",()=>{let n=new URLSearchParams(t.location.search).get(br);if(n){let r=new URL(window.location.href);r.searchParams.delete(br);let o=r.toString();window.history.replaceState({},document.title,o),Pt(t,{variantId:Number(n)},{toStepIndex:0})}})};var Bo=()=>{let t=document.getElementById("engagement-wrapper"),e=document.getElementById("engagement-container");return t||(t=document.createElement("div"),t.setAttribute("id","engagement-wrapper"),t.setAttribute("data-engagement","1"),document.body.appendChild(t)),e||(e=document.createElement("div"),e.setAttribute("id","engagement-container"),e.setAttribute("data-engagement","1"),t.appendChild(e)),e},Do=t=>{switch(t){case"US":return"https://gs.amplitude.com";case"EU":return"https://gs.eu.amplitude.com";default:return"http://localhost:10001"}},qe={local:"http://localhost:10002/index.js",staging:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",stag:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",stag2:"https://cdn.amplitude.com/engagement-browser/staging/index.min.js.gz",rc:"https://cdn.amplitude.com/engagement-browser/rc/index.min.js.gz",prod:"https://cdn.amplitude.com/engagement-browser/prod/index.min.js.gz",prodEu:"https://cdn.amplitude.com/engagement-browser/prod-eu/index.min.js.gz"},Ze={local:"http://localhost:10002/split/index.js",staging:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",stag:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",stag2:"https://cdn.amplitude.com/engagement-browser/staging/split/index.js",rc:"https://cdn.amplitude.com/engagement-browser/rc/split/index.js",prod:"https://cdn.amplitude.com/engagement-browser/prod/split/index.js",prodEu:"https://cdn.amplitude.com/engagement-browser/prod-eu/split/index.js"},Xe={local:"http://localhost:10001",staging:"https://gs.stag2.amplitude.com",stag:"https://gs.stag2.amplitude.com",stag2:"https://gs.stag2.amplitude.com",prod:"https://gs.amplitude.com",prodUs:"https://gs.amplitude.com",prodEu:"https://gs.eu.amplitude.com"};function Lo(t){let e={};return t.split(";").forEach(r=>{let[o,i]=r.split("=");o&&(e[o]=i)}),e}var Sr=async()=>{var g,p,h,m,b,f;let t=localStorage.getItem("amplitude.engagement.launchCode");if(t){let y=Lo(t),S=document.currentScript||document.getElementById("engagement-sdk-bundle");if(S){let E=window.engagement[P].options.splitting&&(y==null?void 0:y.sdk)!=="local",N=E?Ze==null?void 0:Ze[y==null?void 0:y.sdk]:qe==null?void 0:qe[y==null?void 0:y.sdk];if(N&&S.src!==N){(g=S.parentNode)==null||g.removeChild(S);let M=document.createElement("script");M.src=N,M.id="engagement-sdk-bundle";let D=document.querySelector("[nonce]");D&&M.setAttribute("nonce",D.nonce||D.getAttribute("nonce")),E&&M.setAttribute("type","module"),document.getElementsByTagName("head")[0].appendChild(M);return}}if(y!=null&&y.server){let E=Xe==null?void 0:Xe[y==null?void 0:y.server];E&&(window.engagement[P].serverUrl=E)}}if(((p=window.engagement)==null?void 0:p._initStarted)===!0)return;window.engagement&&(window.engagement._initStarted=!0);let e=window.engagement,{apiKey:n,serverUrl:r,serverZone:o}=e._configuration,i=X.get("takeover","");if(!n)throw new Error("Organization `apiKey` has not been set on the global _configuration object. Make sure you've called `init` before loading this script");let a=X.get("localeOverride","");a&&(e[P].locale=a),e[P].serverUrl=r||Do(o),e[P].apiKey=n,(h=e[P].options)!=null&&h.logger?console.log("Using custom logger",e[P].options.logger):(console.log("Using default logger"),e[P].options.logger=new it),(m=e[P].options)!=null&&m.logger&&e[P].options.logger.enable((f=(b=e[P].options)==null?void 0:b.logLevel)!=null?f:2),i&&(e[P].apiKey=i),w.log("initializing client SDK..."),Kt();let s=document.getElementById("engagement-is-dashboard-preview-pane")!==null,c=Ot({isEditorPreview:s,platform:Rt(),location:{href:window.location.href,pathname:window.location.pathname,search:window.location.search},services:hr,persistResourceCenter:e._configuration.options.persistResourceCenter});Bt(c),Zn(c),Xn(c),Qn(c),vr(c),rr(c),yr(c),er(c),Er(c),tr(c);let l=new Me(c,e._configuration);await l._configUser(),l=await qn(l,e._q),Object.assign(window.engagement,l),Object.setPrototypeOf(window.engagement,l);let u=Bo();Ir.default.render(wr.default.createElement(Kn,{store:c}),u),w.debug("Engagement bundle loaded and container rendered")};he("ENGAGEMENT_LOADED");window.engagement?Sr().catch(console.error):window.engagement=Yn(Sr);var Ad=void 0;export{Ad as default};
