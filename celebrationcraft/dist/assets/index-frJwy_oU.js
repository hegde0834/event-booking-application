function wx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Tx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vg={exports:{}},Ql={},_g={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Cx=Symbol.for("react.portal"),bx=Symbol.for("react.fragment"),Ax=Symbol.for("react.strict_mode"),Rx=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Dx=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),Ux=Symbol.for("react.lazy"),Qh=Symbol.iterator;function Fx(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yg=Object.assign,Sg={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mg(){}Mg.prototype=Gs.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=Sg,this.updater=n||xg}var bf=Cf.prototype=new Mg;bf.constructor=Cf;yg(bf,Gs.prototype);bf.isPureReactComponent=!0;var ep=Array.isArray,Eg=Object.prototype.hasOwnProperty,Af={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Eg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:Af.current}}function kx(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tp=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case Cx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Cc(a,0):i,ep(r)?(n="",t!=null&&(n=t.replace(tp,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(Rf(r)&&(r=kx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(tp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ep(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Cc(s,o);a+=el(s,e,n,l,r)}else if(l=Fx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Cc(s,o++),a+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Bx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},tl={transition:null},zx={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Af};function Cg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Gs;Ke.Fragment=bx;Ke.Profiler=Rx;Ke.PureComponent=Cf;Ke.StrictMode=Ax;Ke.Suspense=Dx;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;Ke.act=Cg;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=yg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Af.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Eg.call(e,l)&&!wg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:Nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Px,_context:t},t.Consumer=t};Ke.createElement=Tg;Ke.createFactory=function(t){var e=Tg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:Lx,render:t}};Ke.isValidElement=Rf;Ke.lazy=function(t){return{$$typeof:Ux,_payload:{_status:-1,_result:t},_init:Bx}};Ke.memo=function(t,e){return{$$typeof:Ix,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Ke.unstable_act=Cg;Ke.useCallback=function(t,e){return un.current.useCallback(t,e)};Ke.useContext=function(t){return un.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return un.current.useEffect(t,e)};Ke.useId=function(){return un.current.useId()};Ke.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return un.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Ke.useRef=function(t){return un.current.useRef(t)};Ke.useState=function(t){return un.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return un.current.useTransition()};Ke.version="18.3.1";_g.exports=Ke;var ae=_g.exports;const bg=Tx(ae),Hx=wx({__proto__:null,default:bg},[ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=ae,Gx=Symbol.for("react.element"),Wx=Symbol.for("react.fragment"),jx=Object.prototype.hasOwnProperty,Xx=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$x={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jx.call(e,i)&&!$x.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gx,type:t,key:s,ref:a,props:r,_owner:Xx.current}}Ql.Fragment=Wx;Ql.jsx=Ag;Ql.jsxs=Ag;vg.exports=Ql;var v=vg.exports,Iu={},Rg={exports:{}},Rn={},Pg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,B){var P=V.length;V.push(B);e:for(;0<P;){var R=P-1>>>1,Q=V[R];if(0<r(Q,B))V[R]=B,V[P]=Q,P=R;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var B=V[0],P=V.pop();if(P!==B){V[0]=P;e:for(var R=0,Q=V.length,re=Q>>>1;R<re;){var pe=2*(R+1)-1,de=V[pe],he=pe+1,O=V[he];if(0>r(de,P))he<Q&&0>r(O,de)?(V[R]=O,V[he]=P,R=he):(V[R]=de,V[pe]=P,R=pe);else if(he<Q&&0>r(O,P))V[R]=O,V[he]=P,R=he;else break e}}return B}function r(V,B){var P=V.sortIndex-B.sortIndex;return P!==0?P:V.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,f=null,u=3,p=!1,g=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(V){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=V)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function y(V){if(E=!1,M(V),!g)if(n(l)!==null)g=!0,te(T);else{var B=n(c);B!==null&&K(y,B.startTime-V)}}function T(V,B){g=!1,E&&(E=!1,d(x),x=-1),p=!0;var P=u;try{for(M(B),f=n(l);f!==null&&(!(f.expirationTime>B)||V&&!D());){var R=f.callback;if(typeof R=="function"){f.callback=null,u=f.priorityLevel;var Q=R(f.expirationTime<=B);B=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),M(B)}else i(l);f=n(l)}if(f!==null)var re=!0;else{var pe=n(c);pe!==null&&K(y,pe.startTime-B),re=!1}return re}finally{f=null,u=P,p=!1}}var b=!1,w=null,x=-1,A=5,L=-1;function D(){return!(t.unstable_now()-L<A)}function z(){if(w!==null){var V=t.unstable_now();L=V;var B=!0;try{B=w(!0,V)}finally{B?q():(b=!1,w=null)}}else b=!1}var q;if(typeof _=="function")q=function(){_(z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,W=k.port2;k.port1.onmessage=z,q=function(){W.postMessage(null)}}else q=function(){m(z,0)};function te(V){w=V,b||(b=!0,q())}function K(V,B){x=m(function(){V(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,te(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(u){case 1:case 2:case 3:var B=3;break;default:B=u}var P=u;u=B;try{return V()}finally{u=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,B){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var P=u;u=V;try{return B()}finally{u=P}},t.unstable_scheduleCallback=function(V,B,P){var R=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,V){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=P+Q,V={id:h++,callback:B,priorityLevel:V,startTime:P,expirationTime:Q,sortIndex:-1},P>R?(V.sortIndex=P,e(c,V),n(l)===null&&V===n(c)&&(E?(d(x),x=-1):E=!0,K(y,P-R))):(V.sortIndex=Q,e(l,V),g||p||(g=!0,te(T))),V},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(V){var B=u;return function(){var P=u;u=B;try{return V.apply(this,arguments)}finally{u=P}}}})(Ng);Pg.exports=Ng;var Yx=Pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx=ae,An=Yx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lg=new Set,Pa={};function jr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Pa[t]=e,t=0;t<e.length;t++)Lg.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=Object.prototype.hasOwnProperty,Kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,np={},ip={};function Zx(t){return Uu.call(ip,t)?!0:Uu.call(np,t)?!1:Kx.test(t)?ip[t]=!0:(np[t]=!0,!1)}function Jx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qx(t,e,n,i){if(e===null||typeof e>"u"||Jx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);Xt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);Xt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Nf);Xt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,n,r,i)&&(n=null),i||r===null?Zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),Dg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),Uf=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Ug=Symbol.for("react.offscreen"),rp=Symbol.iterator;function Js(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,bc;function ha(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var Ac=!1;function Rc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function ey(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function Bu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Fu:return"Profiler";case Df:return"StrictMode";case ku:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ig:return(t.displayName||"Context")+".Consumer";case Dg:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uf:return e=t.displayName||null,e!==null?e:Bu(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return Bu(t(e))}catch{}}return null}function ty(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bu(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(t){var e=Fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=ny(t))}function kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&Lf(t,"checked",e,!1)}function Hu(t,e){Og(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(pa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Bg(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,Hg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iy=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){iy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ry=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Cs=null,bs=null;function cp(t){if(t=io(t)){if(typeof Yu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=rc(e),Yu(t.stateNode,t.type,e))}}function Wg(t){Cs?bs?bs.push(t):bs=[t]:Cs=t}function jg(){if(Cs){var t=Cs,e=bs;if(bs=Cs=null,cp(t),e)for(t=0;t<e.length;t++)cp(e[t])}}function Xg(t,e){return t(e)}function $g(){}var Pc=!1;function Yg(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return Xg(t,e,n)}finally{Pc=!1,(Cs!==null||bs!==null)&&($g(),jg())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var qu=!1;if(Di)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){qu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{qu=!1}function sy(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Sa=!1,Sl=null,Ml=!1,Ku=null,ay={onError:function(t){Sa=!0,Sl=t}};function oy(t,e,n,i,r,s,a,o,l){Sa=!1,Sl=null,sy.apply(ay,arguments)}function ly(t,e,n,i,r,s,a,o,l){if(oy.apply(this,arguments),Sa){if(Sa){var c=Sl;Sa=!1,Sl=null}else throw Error(ce(198));Ml||(Ml=!0,Ku=c)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function up(t){if(Xr(t)!==t)throw Error(ce(188))}function cy(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return up(r),t;if(s===i)return up(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Kg(t){return t=cy(t),t!==null?Zg(t):null}function Zg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zg(t);if(e!==null)return e;t=t.sibling}return null}var Jg=An.unstable_scheduleCallback,dp=An.unstable_cancelCallback,uy=An.unstable_shouldYield,dy=An.unstable_requestPaint,Nt=An.unstable_now,fy=An.unstable_getCurrentPriorityLevel,kf=An.unstable_ImmediatePriority,Qg=An.unstable_UserBlockingPriority,El=An.unstable_NormalPriority,hy=An.unstable_LowPriority,e0=An.unstable_IdlePriority,ec=null,fi=null;function py(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:vy,my=Math.log,gy=Math.LN2;function vy(t){return t>>>=0,t===0?32:31-(my(t)/gy|0)|0}var go=64,vo=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ma(o):(s&=a,s!==0&&(i=ma(s)))}else a=n&~r,a!==0?i=ma(a):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function _y(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_y(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t0(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function n0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Bf,r0,s0,a0,Ju=!1,_o=[],rr=null,sr=null,ar=null,Da=new Map,Ia=new Map,Ji=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function My(t,e,n,i,r){switch(e){case"focusin":return rr=ea(rr,t,e,n,i,r),!0;case"dragenter":return sr=ea(sr,t,e,n,i,r),!0;case"mouseover":return ar=ea(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,ea(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,ea(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function o0(t){var e=Pr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=qg(n),e!==null){t.blockedOn=e,a0(t.priority,function(){r0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=io(n),e!==null&&Bf(e),t.blockedOn=n,!1;e.shift()}return!0}function hp(t,e,n){nl(t)&&n.delete(e)}function Ey(){Ju=!1,rr!==null&&nl(rr)&&(rr=null),sr!==null&&nl(sr)&&(sr=null),ar!==null&&nl(ar)&&(ar=null),Da.forEach(hp),Ia.forEach(hp)}function ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Ey)))}function Ua(t){function e(r){return ta(r,t)}if(0<_o.length){ta(_o[0],t);for(var n=1;n<_o.length;n++){var i=_o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ta(rr,t),sr!==null&&ta(sr,t),ar!==null&&ta(ar,t),Da.forEach(e),Ia.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)o0(n),n.blockedOn===null&&Ji.shift()}var As=Oi.ReactCurrentBatchConfig,Tl=!0;function wy(t,e,n,i){var r=lt,s=As.transition;As.transition=null;try{lt=1,zf(t,e,n,i)}finally{lt=r,As.transition=s}}function Ty(t,e,n,i){var r=lt,s=As.transition;As.transition=null;try{lt=4,zf(t,e,n,i)}finally{lt=r,As.transition=s}}function zf(t,e,n,i){if(Tl){var r=Qu(t,e,n,i);if(r===null)Hc(t,e,i,Cl,n),fp(t,i);else if(My(r,t,e,n,i))i.stopPropagation();else if(fp(t,i),e&4&&-1<Sy.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&i0(s),s=Qu(t,e,n,i),s===null&&Hc(t,e,i,Cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Cl=null;function Qu(t,e,n,i){if(Cl=null,t=Ff(i),t=Pr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function l0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case kf:return 1;case Qg:return 4;case El:case hy:return 16;case e0:return 536870912;default:return 16}default:return 16}}var tr=null,Hf=null,il=null;function c0(){if(il)return il;var t,e=Hf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function pp(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:pp,this.isPropagationStopped=pp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=Pn(Ws),no=Ct({},Ws,{view:0,detail:0}),Cy=Pn(no),Lc,Dc,na,tc=Ct({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(Lc=t.screenX-na.screenX,Dc=t.screenY-na.screenY):Dc=Lc=0,na=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),mp=Pn(tc),by=Ct({},tc,{dataTransfer:0}),Ay=Pn(by),Ry=Ct({},no,{relatedTarget:0}),Ic=Pn(Ry),Py=Ct({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Pn(Py),Ly=Ct({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dy=Pn(Ly),Iy=Ct({},Ws,{data:0}),gp=Pn(Iy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ky[t])?!!e[t]:!1}function Gf(){return Oy}var By=Ct({},no,{key:function(t){if(t.key){var e=Uy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zy=Pn(By),Hy=Ct({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Pn(Hy),Vy=Ct({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),Gy=Pn(Vy),Wy=Ct({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Pn(Wy),Xy=Ct({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=Pn(Xy),Yy=[9,13,27,32],Wf=Di&&"CompositionEvent"in window,Ma=null;Di&&"documentMode"in document&&(Ma=document.documentMode);var qy=Di&&"TextEvent"in window&&!Ma,u0=Di&&(!Wf||Ma&&8<Ma&&11>=Ma),_p=" ",xp=!1;function d0(t,e){switch(t){case"keyup":return Yy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Ky(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(xp=!0,_p);case"textInput":return t=e.data,t===_p&&xp?null:t;default:return null}}function Zy(t,e){if(ps)return t==="compositionend"||!Wf&&d0(t,e)?(t=c0(),il=Hf=tr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jy[t.type]:e==="textarea"}function h0(t,e,n,i){Wg(i),e=bl(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,Fa=null;function Qy(t){w0(t,0)}function nc(t){var e=vs(t);if(kg(e))return t}function eS(t,e){if(t==="change")return e}var p0=!1;if(Di){var Uc;if(Di){var Fc="oninput"in document;if(!Fc){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Fc=typeof Sp.oninput=="function"}Uc=Fc}else Uc=!1;p0=Uc&&(!document.documentMode||9<document.documentMode)}function Mp(){Ea&&(Ea.detachEvent("onpropertychange",m0),Fa=Ea=null)}function m0(t){if(t.propertyName==="value"&&nc(Fa)){var e=[];h0(e,Fa,t,Ff(t)),Yg(Qy,e)}}function tS(t,e,n){t==="focusin"?(Mp(),Ea=e,Fa=n,Ea.attachEvent("onpropertychange",m0)):t==="focusout"&&Mp()}function nS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Fa)}function iS(t,e){if(t==="click")return nc(e)}function rS(t,e){if(t==="input"||t==="change")return nc(e)}function sS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:sS;function ka(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wp(t,e){var n=Ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ep(n)}}function g0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aS(t){var e=v0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g0(n.ownerDocument.documentElement,n)){if(i!==null&&jf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wp(n,s);var a=wp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oS=Di&&"documentMode"in document&&11>=document.documentMode,ms=null,ed=null,wa=null,td=!1;function Tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||ms==null||ms!==yl(i)||(i=ms,"selectionStart"in i&&jf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&ka(wa,i)||(wa=i,i=bl(ed,"onSelect"),0<i.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},kc={},_0={};Di&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ic(t){if(kc[t])return kc[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return kc[t]=e[n];return t}var x0=ic("animationend"),y0=ic("animationiteration"),S0=ic("animationstart"),M0=ic("transitionend"),E0=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){E0.set(t,e),jr(e,[t])}for(var Oc=0;Oc<Cp.length;Oc++){var Bc=Cp[Oc],lS=Bc.toLowerCase(),cS=Bc[0].toUpperCase()+Bc.slice(1);gr(lS,"on"+cS)}gr(x0,"onAnimationEnd");gr(y0,"onAnimationIteration");gr(S0,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(M0,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ly(i,e,void 0,t),t.currentTarget=null}function w0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;bp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;bp(r,o,c),s=l}}}if(Ml)throw t=Ku,Ml=!1,Ku=null,t}function _t(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(T0(e,t,2,!1),n.add(i))}function zc(t,e,n){var i=0;e&&(i|=4),T0(n,t,i,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[So]){t[So]=!0,Lg.forEach(function(n){n!=="selectionchange"&&(uS.has(n)||zc(n,!1,t),zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,zc("selectionchange",!1,e))}}function T0(t,e,n,i){switch(l0(e)){case 1:var r=wy;break;case 4:r=Ty;break;default:r=zf}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Yg(function(){var c=s,h=Ff(n),f=[];e:{var u=E0.get(t);if(u!==void 0){var p=Vf,g=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":p=zy;break;case"focusin":g="focus",p=Ic;break;case"focusout":g="blur",p=Ic;break;case"beforeblur":case"afterblur":p=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Gy;break;case x0:case y0:case S0:p=Ny;break;case M0:p=jy;break;case"scroll":p=Cy;break;case"wheel":p=$y;break;case"copy":case"cut":case"paste":p=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vp}var E=(e&4)!==0,m=!E&&t==="scroll",d=E?u!==null?u+"Capture":null:u;E=[];for(var _=c,M;_!==null;){M=_;var y=M.stateNode;if(M.tag===5&&y!==null&&(M=y,d!==null&&(y=La(_,d),y!=null&&E.push(Ba(_,y,M)))),m)break;_=_.return}0<E.length&&(u=new p(u,g,null,n,h),f.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==$u&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ii]))break e;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Pr(g):null,g!==null&&(m=Xr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(E=mp,y="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(E=vp,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?u:vs(p),M=g==null?u:vs(g),u=new E(y,_+"leave",p,n,h),u.target=m,u.relatedTarget=M,y=null,Pr(h)===c&&(E=new E(d,_+"enter",g,n,h),E.target=M,E.relatedTarget=m,y=E),m=y,p&&g)t:{for(E=p,d=g,_=0,M=E;M;M=Zr(M))_++;for(M=0,y=d;y;y=Zr(y))M++;for(;0<_-M;)E=Zr(E),_--;for(;0<M-_;)d=Zr(d),M--;for(;_--;){if(E===d||d!==null&&E===d.alternate)break t;E=Zr(E),d=Zr(d)}E=null}else E=null;p!==null&&Ap(f,u,p,E,!1),g!==null&&m!==null&&Ap(f,m,g,E,!0)}}e:{if(u=c?vs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=eS;else if(yp(u))if(p0)T=rS;else{T=nS;var b=tS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=iS);if(T&&(T=T(t,c))){h0(f,T,n,h);break e}b&&b(t,u,c),t==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&Vu(u,"number",u.value)}switch(b=c?vs(c):window,t){case"focusin":(yp(b)||b.contentEditable==="true")&&(ms=b,ed=c,wa=null);break;case"focusout":wa=ed=ms=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Tp(f,n,h);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Tp(f,n,h)}var w;if(Wf)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ps?d0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(u0&&n.locale!=="ko"&&(ps||x!=="onCompositionStart"?x==="onCompositionEnd"&&ps&&(w=c0()):(tr=h,Hf="value"in tr?tr.value:tr.textContent,ps=!0)),b=bl(c,x),0<b.length&&(x=new gp(x,t,null,n,h),f.push({event:x,listeners:b}),w?x.data=w:(w=f0(n),w!==null&&(x.data=w)))),(w=qy?Ky(t,n):Zy(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(h=new gp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}w0(f,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(Ba(t,s,r)),s=La(t,e),s!=null&&i.push(Ba(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ap(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=La(n,s),l!=null&&a.unshift(Ba(n,l,o))):r||(l=La(n,s),l!=null&&a.push(Ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var dS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(fS,"")}function Mo(t,e,n){if(e=Rp(e),Rp(t)!==e&&n)throw Error(ce(425))}function Al(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(t){return Pp.resolve(null).then(t).catch(mS)}:sd;function mS(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),ci="__reactFiber$"+js,za="__reactProps$"+js,Ii="__reactContainer$"+js,ad="__reactEvents$"+js,gS="__reactListeners$"+js,vS="__reactHandles$"+js;function Pr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Np(t);t!==null;){if(n=t[ci])return n;t=Np(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[ci]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function rc(t){return t[za]||null}var od=[],_s=-1;function vr(t){return{current:t}}function xt(t){0>_s||(t.current=od[_s],od[_s]=null,_s--)}function pt(t,e){_s++,od[_s]=t.current,t.current=e}var pr={},tn=vr(pr),gn=vr(!1),kr=pr;function Is(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Rl(){xt(gn),xt(tn)}function Lp(t,e,n){if(tn.current!==pr)throw Error(ce(168));pt(tn,e),pt(gn,n)}function C0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,ty(t)||"Unknown",r));return Ct({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,kr=tn.current,pt(tn,t),pt(gn,gn.current),!0}function Dp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=C0(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,xt(gn),xt(tn),pt(tn,t)):xt(gn),pt(gn,n)}var Ti=null,sc=!1,Gc=!1;function b0(t){Ti===null?Ti=[t]:Ti.push(t)}function _S(t){sc=!0,b0(t)}function _r(){if(!Gc&&Ti!==null){Gc=!0;var t=0,e=lt;try{var n=Ti;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,sc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),Jg(kf,_r),r}finally{lt=e,Gc=!1}}return null}var xs=[],ys=0,Nl=null,Ll=0,Un=[],Fn=0,Or=null,bi=1,Ai="";function br(t,e){xs[ys++]=Ll,xs[ys++]=Nl,Nl=t,Ll=e}function A0(t,e,n){Un[Fn++]=bi,Un[Fn++]=Ai,Un[Fn++]=Or,Or=t;var i=bi;t=Ai;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-Jn(e)+r|n<<r|i,Ai=s+t}else bi=1<<s|n<<r|i,Ai=t}function Xf(t){t.return!==null&&(br(t,1),A0(t,1,0))}function $f(t){for(;t===Nl;)Nl=xs[--ys],xs[ys]=null,Ll=xs[--ys],xs[ys]=null;for(;t===Or;)Or=Un[--Fn],Un[Fn]=null,Ai=Un[--Fn],Un[Fn]=null,bi=Un[--Fn],Un[Fn]=null}var bn=null,Cn=null,yt=!1,qn=null;function R0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Cn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:bi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Cn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(yt){var e=Cn;if(e){var n=e;if(!Ip(t,e)){if(ld(t))throw Error(ce(418));e=or(n.nextSibling);var i=bn;e&&Ip(t,e)?R0(i,n):(t.flags=t.flags&-4097|2,yt=!1,bn=t)}}else{if(ld(t))throw Error(ce(418));t.flags=t.flags&-4097|2,yt=!1,bn=t}}}function Up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Eo(t){if(t!==bn)return!1;if(!yt)return Up(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Cn)){if(ld(t))throw P0(),Error(ce(418));for(;e;)R0(t,e),e=or(e.nextSibling)}if(Up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=bn?or(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=Cn;t;)t=or(t.nextSibling)}function Us(){Cn=bn=null,yt=!1}function Yf(t){qn===null?qn=[t]:qn.push(t)}var xS=Oi.ReactCurrentBatchConfig;function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function wo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function N0(t){function e(d,_){if(t){var M=d.deletions;M===null?(d.deletions=[_],d.flags|=16):M.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=dr(d,_),d.index=0,d.sibling=null,d}function s(d,_,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<_?(d.flags|=2,_):M):(d.flags|=2,_)):(d.flags|=1048576,_)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,M,y){return _===null||_.tag!==6?(_=Kc(M,d.mode,y),_.return=d,_):(_=r(_,M),_.return=d,_)}function l(d,_,M,y){var T=M.type;return T===hs?h(d,_,M.props.children,y,M.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&Fp(T)===_.type)?(y=r(_,M.props),y.ref=ia(d,_,M),y.return=d,y):(y=dl(M.type,M.key,M.props,null,d.mode,y),y.ref=ia(d,_,M),y.return=d,y)}function c(d,_,M,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==M.containerInfo||_.stateNode.implementation!==M.implementation?(_=Zc(M,d.mode,y),_.return=d,_):(_=r(_,M.children||[]),_.return=d,_)}function h(d,_,M,y,T){return _===null||_.tag!==7?(_=Fr(M,d.mode,y,T),_.return=d,_):(_=r(_,M),_.return=d,_)}function f(d,_,M){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Kc(""+_,d.mode,M),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ho:return M=dl(_.type,_.key,_.props,null,d.mode,M),M.ref=ia(d,null,_),M.return=d,M;case fs:return _=Zc(_,d.mode,M),_.return=d,_;case Yi:var y=_._init;return f(d,y(_._payload),M)}if(pa(_)||Js(_))return _=Fr(_,d.mode,M,null),_.return=d,_;wo(d,_)}return null}function u(d,_,M,y){var T=_!==null?_.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:o(d,_,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:return M.key===T?l(d,_,M,y):null;case fs:return M.key===T?c(d,_,M,y):null;case Yi:return T=M._init,u(d,_,T(M._payload),y)}if(pa(M)||Js(M))return T!==null?null:h(d,_,M,y,null);wo(d,M)}return null}function p(d,_,M,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(M)||null,o(_,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return d=d.get(y.key===null?M:y.key)||null,l(_,d,y,T);case fs:return d=d.get(y.key===null?M:y.key)||null,c(_,d,y,T);case Yi:var b=y._init;return p(d,_,M,b(y._payload),T)}if(pa(y)||Js(y))return d=d.get(M)||null,h(_,d,y,T,null);wo(_,y)}return null}function g(d,_,M,y){for(var T=null,b=null,w=_,x=_=0,A=null;w!==null&&x<M.length;x++){w.index>x?(A=w,w=null):A=w.sibling;var L=u(d,w,M[x],y);if(L===null){w===null&&(w=A);break}t&&w&&L.alternate===null&&e(d,w),_=s(L,_,x),b===null?T=L:b.sibling=L,b=L,w=A}if(x===M.length)return n(d,w),yt&&br(d,x),T;if(w===null){for(;x<M.length;x++)w=f(d,M[x],y),w!==null&&(_=s(w,_,x),b===null?T=w:b.sibling=w,b=w);return yt&&br(d,x),T}for(w=i(d,w);x<M.length;x++)A=p(w,d,x,M[x],y),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?x:A.key),_=s(A,_,x),b===null?T=A:b.sibling=A,b=A);return t&&w.forEach(function(D){return e(d,D)}),yt&&br(d,x),T}function E(d,_,M,y){var T=Js(M);if(typeof T!="function")throw Error(ce(150));if(M=T.call(M),M==null)throw Error(ce(151));for(var b=T=null,w=_,x=_=0,A=null,L=M.next();w!==null&&!L.done;x++,L=M.next()){w.index>x?(A=w,w=null):A=w.sibling;var D=u(d,w,L.value,y);if(D===null){w===null&&(w=A);break}t&&w&&D.alternate===null&&e(d,w),_=s(D,_,x),b===null?T=D:b.sibling=D,b=D,w=A}if(L.done)return n(d,w),yt&&br(d,x),T;if(w===null){for(;!L.done;x++,L=M.next())L=f(d,L.value,y),L!==null&&(_=s(L,_,x),b===null?T=L:b.sibling=L,b=L);return yt&&br(d,x),T}for(w=i(d,w);!L.done;x++,L=M.next())L=p(w,d,x,L.value,y),L!==null&&(t&&L.alternate!==null&&w.delete(L.key===null?x:L.key),_=s(L,_,x),b===null?T=L:b.sibling=L,b=L);return t&&w.forEach(function(z){return e(d,z)}),yt&&br(d,x),T}function m(d,_,M,y){if(typeof M=="object"&&M!==null&&M.type===hs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:e:{for(var T=M.key,b=_;b!==null;){if(b.key===T){if(T=M.type,T===hs){if(b.tag===7){n(d,b.sibling),_=r(b,M.props.children),_.return=d,d=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yi&&Fp(T)===b.type){n(d,b.sibling),_=r(b,M.props),_.ref=ia(d,b,M),_.return=d,d=_;break e}n(d,b);break}else e(d,b);b=b.sibling}M.type===hs?(_=Fr(M.props.children,d.mode,y,M.key),_.return=d,d=_):(y=dl(M.type,M.key,M.props,null,d.mode,y),y.ref=ia(d,_,M),y.return=d,d=y)}return a(d);case fs:e:{for(b=M.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===M.containerInfo&&_.stateNode.implementation===M.implementation){n(d,_.sibling),_=r(_,M.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Zc(M,d.mode,y),_.return=d,d=_}return a(d);case Yi:return b=M._init,m(d,_,b(M._payload),y)}if(pa(M))return g(d,_,M,y);if(Js(M))return E(d,_,M,y);wo(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,M),_.return=d,d=_):(n(d,_),_=Kc(M,d.mode,y),_.return=d,d=_),a(d)):n(d,_)}return m}var Fs=N0(!0),L0=N0(!1),Dl=vr(null),Il=null,Ss=null,qf=null;function Kf(){qf=Ss=Il=null}function Zf(t){var e=Dl.current;xt(Dl),t._currentValue=e}function ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Il=t,qf=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Il===null)throw Error(ce(308));Ss=t,Il.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Nr=null;function Jf(t){Nr===null?Nr=[t]:Nr.push(t)}function D0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Jf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}function kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,E=o;switch(u=e,p=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=Ct({},f,u);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=f):h=h.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=f}}function Op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ro={},hi=vr(ro),Ha=vr(ro),Va=vr(ro);function Lr(t){if(t===ro)throw Error(ce(174));return t}function eh(t,e){switch(pt(Va,e),pt(Ha,t),pt(hi,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}xt(hi),pt(hi,e)}function ks(){xt(hi),xt(Ha),xt(Va)}function U0(t){Lr(Va.current);var e=Lr(hi.current),n=Wu(e,t.type);e!==n&&(pt(Ha,t),pt(hi,n))}function th(t){Ha.current===t&&(xt(hi),xt(Ha))}var Mt=vr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function nh(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var al=Oi.ReactCurrentDispatcher,jc=Oi.ReactCurrentBatchConfig,Br=0,wt=null,Ft=null,Ht=null,kl=!1,Ta=!1,Ga=0,yS=0;function Yt(){throw Error(ce(321))}function ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function rh(t,e,n,i,r,s){if(Br=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?wS:TS,t=n(i,r),Ta){s=0;do{if(Ta=!1,Ga=0,25<=s)throw Error(ce(301));s+=1,Ht=Ft=null,e.updateQueue=null,al.current=CS,t=n(i,r)}while(Ta)}if(al.current=Ol,e=Ft!==null&&Ft.next!==null,Br=0,Ht=Ft=wt=null,kl=!1,e)throw Error(ce(300));return t}function sh(){var t=Ga!==0;return Ga=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function zn(){if(Ft===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Ht===null?wt.memoizedState:Ht.next;if(e!==null)Ht=e,Ft=t;else{if(t===null)throw Error(ce(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?wt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Wa(t,e){return typeof e=="function"?e(t):e}function Xc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Br&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,wt.lanes|=h,zr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=zn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function F0(){}function k0(t,e){var n=wt,i=zn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,ah(z0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ja(9,B0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ce(349));Br&30||O0(n,e,r)}return r}function O0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,i){e.value=n,e.getSnapshot=i,H0(e)&&V0(t)}function z0(t,e,n){return n(function(){H0(e)&&V0(t)})}function H0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function V0(t){var e=Ui(t,1);e!==null&&Qn(e,t,1,-1)}function Bp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=ES.bind(null,wt,t),[e.memoizedState,t]}function ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function G0(){return zn().memoizedState}function ol(t,e,n,i){var r=oi();wt.flags|=t,r.memoizedState=ja(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&ih(i,a.deps)){r.memoizedState=ja(e,n,s,i);return}}wt.flags|=t,r.memoizedState=ja(1|e,n,s,i)}function zp(t,e){return ol(8390656,8,t,e)}function ah(t,e){return ac(2048,8,t,e)}function W0(t,e){return ac(4,2,t,e)}function j0(t,e){return ac(4,4,t,e)}function X0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $0(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,X0.bind(null,e,t),n)}function oh(){}function Y0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K0(t,e,n){return Br&21?(ti(n,e)||(n=t0(),wt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function SS(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{lt=n,jc.transition=i}}function Z0(){return zn().memoizedState}function MS(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},J0(t))Q0(e,n);else if(n=D0(t,e,n,i),n!==null){var r=on();Qn(n,t,i,r),ev(n,e,i)}}function ES(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(J0(t))Q0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,Jf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=D0(t,e,r,i),n!==null&&(r=on(),Qn(n,t,i,r),ev(n,e,i))}}function J0(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Q0(t,e){Ta=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ev(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Of(t,n)}}var Ol={readContext:Bn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},wS={readContext:Bn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:zp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,X0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MS.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Bp,useDebugValue:oh,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Bp(!1),e=t[0];return t=SS.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=oi();if(yt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Vt===null)throw Error(ce(349));Br&30||O0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,zp(z0.bind(null,i,s,t),[t]),i.flags|=2048,ja(9,B0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Vt.identifierPrefix;if(yt){var n=Ai,i=bi;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:ah,useImperativeHandle:$0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:q0,useReducer:Xc,useRef:G0,useState:function(){return Xc(Wa)},useDebugValue:oh,useDeferredValue:function(t){var e=zn();return K0(e,Ft.memoizedState,t)},useTransition:function(){var t=Xc(Wa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:k0,useId:Z0,unstable_isNewReconciler:!1},CS={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:ah,useImperativeHandle:$0,useInsertionEffect:W0,useLayoutEffect:j0,useMemo:q0,useReducer:$c,useRef:G0,useState:function(){return $c(Wa)},useDebugValue:oh,useDeferredValue:function(t){var e=zn();return Ft===null?e.memoizedState=t:K0(e,Ft.memoizedState,t)},useTransition:function(){var t=$c(Wa)[0],e=zn().memoizedState;return[t,e]},useMutableSource:F0,useSyncExternalStore:k0,useId:Z0,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=ur(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=ur(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=ur(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Qn(e,t,i,n),sl(e,t,i))}};function Hp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ka(n,i)||!ka(r,s):!0}function tv(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=vn(e)?kr:tn.current,i=e.contextTypes,s=(i=i!=null)?Is(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=vn(e)?kr:tn.current,r.context=Is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=ey(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,Ed=i),hd(t,e)},n}function iv(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new bS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function Wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var AS=Oi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?L0(e,null,n,i):Fs(e,t.child,n,i)}function Xp(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=rh(t,e,n,i,s,r),n=sh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(yt&&n&&Xf(e),e.flags|=1,sn(t,e,i,r),e.child)}function $p(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rv(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function rv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ka(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return pd(t,e,n,i,r)}function sv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Es,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Es,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Es,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Es,Mn),Mn|=i;return sn(t,e,r,n),e.child}function av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=vn(n)?kr:tn.current;return s=Is(e,s),Rs(e,r),n=rh(t,e,n,i,s,r),i=sh(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(yt&&i&&Xf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Yp(t,e,n,i,r){if(vn(n)){var s=!0;Pl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)ll(t,e),tv(e,n,i),fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=vn(n)?kr:tn.current,c=Is(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Vp(e,a,i,c),qi=!1;var u=e.memoizedState;a.state=u,Ul(e,i,a,r),l=e.memoizedState,o!==i||u!==l||gn.current||qi?(typeof h=="function"&&(dd(e,n,h,i),l=e.memoizedState),(o=qi||Hp(e,n,o,i,u,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,I0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),a.props=c,f=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=vn(n)?kr:tn.current,l=Is(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||u!==l)&&Vp(e,a,i,l),qi=!1,u=e.memoizedState,a.state=u,Ul(e,i,a,r);var g=e.memoizedState;o!==f||u!==g||gn.current||qi?(typeof p=="function"&&(dd(e,n,p,i),g=e.memoizedState),(c=qi||Hp(e,n,c,i,u,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){av(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Dp(e,n,!1),Fi(t,e,s);i=e.stateNode,AS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&Dp(e,n,!0),e.child}function ov(t){var e=t.stateNode;e.pendingContext?Lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lp(t,e.context,!1),eh(t,e.containerInfo)}function qp(t,e,n,i,r){return Us(),Yf(r),e.flags|=256,sn(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Mt,r&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=uc(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vd(n),e.memoizedState=gd,t):lh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return RS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?vd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lh(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function To(t,e,n,i){return i!==null&&Yf(i),Fs(e,t.child,null,n),t=lh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(ce(422))),To(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uc({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,a),e.child.memoizedState=vd(a),e.memoizedState=gd,s);if(!(e.mode&1))return To(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Yc(s,i,void 0),To(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),Qn(i,t,r,-1))}return ph(),i=Yc(Error(ce(421))),To(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=VS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=or(r.nextSibling),bn=e,yt=!0,qn=null,t!==null&&(Un[Fn++]=bi,Un[Fn++]=Ai,Un[Fn++]=Or,bi=t.id,Ai=t.overflow,Or=e),e=lh(e,i.children),e.flags|=4096,e)}function Kp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ud(t.return,e,n)}function qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function cv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kp(t,n,e);else if(t.tag===19)Kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}qc(e,!0,n,null,s);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PS(t,e,n){switch(e.tag){case 3:ov(e),Us();break;case 5:U0(e);break;case 1:vn(e.type)&&Pl(e);break;case 4:eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?lv(t,e,n):(pt(Mt,Mt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return cv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return Fi(t,e,n)}var uv,_d,dv,fv;uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(hi.current);var s=null;switch(n){case"input":r=zu(t,r),i=zu(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ra(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function NS(t,e,n){var i=e.pendingProps;switch($f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&Rl(),qt(e),null;case 3:return i=e.stateNode,ks(),xt(gn),xt(tn),nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Cd(qn),qn=null))),_d(t,e),qt(e),null;case 5:th(e);var r=Lr(Va.current);if(n=e.type,t!==null&&e.stateNode!=null)dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return qt(e),null}if(t=Lr(hi.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)_t(ga[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":sp(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":op(i,s),_t("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",""+o]):Pa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":po(i),ap(i,s,!0);break;case"textarea":po(i),lp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[za]=i,uv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)_t(ga[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":sp(t,i),r=zu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),_t("invalid",t);break;case"textarea":op(t,i),r=Gu(t,i),_t("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Lf(t,s,l,a))}switch(n){case"input":po(t),ap(t,i,!1);break;case"textarea":po(t),lp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)fv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Lr(Va.current),Lr(hi.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return qt(e),null;case 13:if(xt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Cn!==null&&e.mode&1&&!(e.flags&128))P0(),Us(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[ci]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else qn!==null&&(Cd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?kt===0&&(kt=3):ph())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return ks(),_d(t,e),t===null&&Oa(e.stateNode.containerInfo),qt(e),null;case 10:return Zf(e.type._context),qt(e),null;case 17:return vn(e.type)&&Rl(),qt(e),null;case 19:if(xt(Mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ra(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fl(t),a!==null){for(e.flags|=128,ra(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Bs&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return qt(e),null}else 2*Nt()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Mt.current,pt(Mt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function LS(t,e){switch($f(e),e.tag){case 1:return vn(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),xt(gn),xt(tn),nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return th(e),null;case 13:if(xt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Mt),null;case 4:return ks(),null;case 10:return Zf(e.type._context),null;case 22:case 23:return hh(),null;case 24:return null;default:return null}}var Co=!1,Jt=!1,DS=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){At(t,e,i)}}var Zp=!1;function IS(t,e){if(nd=Tl,t=v0(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,f=t,u=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++h===i&&(l=a),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},Tl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:$n(e.type,E),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return g=Zp,Zp=!1,g}function Ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hv(t){var e=t.alternate;e!==null&&(t.alternate=null,hv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[za],delete e[ad],delete e[gS],delete e[vS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Gt=null,Yn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:Jt||Ms(n,e);case 6:var i=Gt,r=Yn;Gt=null,Vi(t,e,n),Gt=i,Yn=r,Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Yn?(t=Gt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),Ua(t)):Vc(Gt,n.stateNode));break;case 4:i=Gt,r=Yn,Gt=n.stateNode.containerInfo,Yn=!0,Vi(t,e,n),Gt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(n,e,a),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Jt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Vi(t,e,n),Jt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DS),e.forEach(function(i){var r=GS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Yn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Yn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Gt===null)throw Error(ce(160));mv(s,a,r),Gt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ri(t),i&4){try{Ca(3,t,t.return),lc(3,t)}catch(E){At(t,t.return,E)}try{Ca(5,t,t.return)}catch(E){At(t,t.return,E)}}break;case 1:Gn(e,t),ri(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Gn(e,t),ri(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(E){At(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Og(r,s),Xu(o,a);var c=Xu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?Gg(r,f):h==="dangerouslySetInnerHTML"?Hg(r,f):h==="children"?Na(r,f):Lf(r,h,f,c)}switch(o){case"input":Hu(r,s);break;case"textarea":Bg(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(E){At(t,t.return,E)}}break;case 6:if(Gn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){At(t,t.return,E)}}break;case 3:if(Gn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(E){At(t,t.return,E)}break;case 4:Gn(e,t),ri(t);break;case 13:Gn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(dh=Nt())),i&4&&Qp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||h,Gn(e,t),Jt=c):Gn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Ae=t,h=t.child;h!==null;){for(f=Ae=h;Ae!==null;){switch(u=Ae,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ca(4,u,u.return);break;case 1:Ms(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(E){At(i,n,E)}}break;case 5:Ms(u,u.return);break;case 22:if(u.memoizedState!==null){tm(f);continue}}p!==null?(p.return=u,Ae=p):tm(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Vg("display",a))}catch(E){At(t,t.return,E)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){At(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),ri(t),i&4&&Qp(t);break;case 21:break;default:Gn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=Jp(t);Md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Jp(t);Sd(t,o,a);break;default:throw Error(ce(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function US(t,e,n){Ae=t,vv(t)}function vv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=Co;var c=Jt;if(Co=a,(Jt=l)&&!c)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?nm(r):l!==null?(l.return=a,Ae=l):nm(r);for(;s!==null;)Ae=s,vv(s),s=s.sibling;Ae=r,Co=o,Jt=c}em(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):em(t)}}function em(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Op(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Op(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Jt||e.flags&512&&yd(e)}catch(u){At(e,e.return,u)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function tm(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function nm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{yd(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var FS=Math.ceil,Bl=Oi.ReactCurrentDispatcher,ch=Oi.ReactCurrentOwner,On=Oi.ReactCurrentBatchConfig,tt=0,Vt=null,It=null,jt=0,Mn=0,Es=vr(0),kt=0,Xa=null,zr=0,cc=0,uh=0,ba=null,pn=null,dh=0,Bs=1/0,wi=null,zl=!1,Ed=null,cr=null,bo=!1,nr=null,Hl=0,Aa=0,wd=null,cl=-1,ul=0;function on(){return tt&6?Nt():cl!==-1?cl:cl=Nt()}function ur(t){return t.mode&1?tt&2&&jt!==0?jt&-jt:xS.transition!==null?(ul===0&&(ul=t0()),ul):(t=lt,t!==0||(t=window.event,t=t===void 0?16:l0(t.type)),t):1}function Qn(t,e,n,i){if(50<Aa)throw Aa=0,wd=null,Error(ce(185));to(t,n,i),(!(tt&2)||t!==Vt)&&(t===Vt&&(!(tt&2)&&(cc|=n),kt===4&&Qi(t,jt)),_n(t,i),n===1&&tt===0&&!(e.mode&1)&&(Bs=Nt()+500,sc&&_r()))}function _n(t,e){var n=t.callbackNode;xy(t,e);var i=wl(t,t===Vt?jt:0);if(i===0)n!==null&&dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dp(n),e===1)t.tag===0?_S(im.bind(null,t)):b0(im.bind(null,t)),pS(function(){!(tt&6)&&_r()}),n=null;else{switch(n0(i)){case 1:n=kf;break;case 4:n=Qg;break;case 16:n=El;break;case 536870912:n=e0;break;default:n=El}n=Tv(n,_v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _v(t,e){if(cl=-1,ul=0,tt&6)throw Error(ce(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=wl(t,t===Vt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=tt;tt|=2;var s=yv();(Vt!==t||jt!==e)&&(wi=null,Bs=Nt()+500,Ur(t,e));do try{BS();break}catch(o){xv(t,o)}while(!0);Kf(),Bl.current=s,tt=r,It!==null?e=0:(Vt=null,jt=0,e=kt)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Td(t,r))),e===1)throw n=Xa,Ur(t,0),Qi(t,i),_n(t,Nt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!kS(r)&&(e=Vl(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Td(t,s))),e===1))throw n=Xa,Ur(t,0),Qi(t,i),_n(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ar(t,pn,wi);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=dh+500-Nt(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Ar.bind(null,t,pn,wi),e);break}Ar(t,pn,wi);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FS(i/1960))-i,10<i){t.timeoutHandle=sd(Ar.bind(null,t,pn,wi),i);break}Ar(t,pn,wi);break;case 5:Ar(t,pn,wi);break;default:throw Error(ce(329))}}}return _n(t,Nt()),t.callbackNode===n?_v.bind(null,t):null}function Td(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=pn,pn=n,e!==null&&Cd(e)),t}function Cd(t){pn===null?pn=t:pn.push.apply(pn,t)}function kS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~uh,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function im(t){if(tt&6)throw Error(ce(327));Ps();var e=wl(t,0);if(!(e&1))return _n(t,Nt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Td(t,i))}if(n===1)throw n=Xa,Ur(t,0),Qi(t,e),_n(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,pn,wi),_n(t,Nt()),null}function fh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Bs=Nt()+500,sc&&_r())}}function Hr(t){nr!==null&&nr.tag===0&&!(tt&6)&&Ps();var e=tt;tt|=1;var n=On.transition,i=lt;try{if(On.transition=null,lt=1,t)return t()}finally{lt=i,On.transition=n,tt=e,!(tt&6)&&_r()}}function hh(){Mn=Es.current,xt(Es)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hS(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch($f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:ks(),xt(gn),xt(tn),nh();break;case 5:th(i);break;case 4:ks();break;case 13:xt(Mt);break;case 19:xt(Mt);break;case 10:Zf(i.type._context);break;case 22:case 23:hh()}n=n.return}if(Vt=t,It=t=dr(t.current,null),jt=Mn=e,kt=0,Xa=null,uh=cc=zr=0,pn=ba=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Nr=null}return t}function xv(t,e){do{var n=It;try{if(Kf(),al.current=Ol,kl){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(Br=0,Ht=Ft=wt=null,Ta=!1,Ga=0,ch.current=null,n===null||n.return===null){kt=1,Xa=e,It=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Wp(a);if(p!==null){p.flags&=-257,jp(p,a,o,s,e),p.mode&1&&Gp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var E=new Set;E.add(l),e.updateQueue=E}else g.add(l);break e}else{if(!(e&1)){Gp(s,c,e),ph();break e}l=Error(ce(426))}}else if(yt&&o.mode&1){var m=Wp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),jp(m,a,o,s,e),Yf(Os(l,o));break e}}s=l=Os(l,o),kt!==4&&(kt=2),ba===null?ba=[s]:ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=nv(s,l,e);kp(s,d);break e;case 1:o=l;var _=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(cr===null||!cr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=iv(s,o,e);kp(s,y);break e}}s=s.return}while(s!==null)}Mv(n)}catch(T){e=T,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function yv(){var t=Bl.current;return Bl.current=Ol,t===null?Ol:t}function ph(){(kt===0||kt===3||kt===2)&&(kt=4),Vt===null||!(zr&268435455)&&!(cc&268435455)||Qi(Vt,jt)}function Vl(t,e){var n=tt;tt|=2;var i=yv();(Vt!==t||jt!==e)&&(wi=null,Ur(t,e));do try{OS();break}catch(r){xv(t,r)}while(!0);if(Kf(),tt=n,Bl.current=i,It!==null)throw Error(ce(261));return Vt=null,jt=0,kt}function OS(){for(;It!==null;)Sv(It)}function BS(){for(;It!==null&&!uy();)Sv(It)}function Sv(t){var e=wv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Mv(t):It=e,ch.current=null}function Mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=NS(n,e,Mn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function Ar(t,e,n){var i=lt,r=On.transition;try{On.transition=null,lt=1,zS(t,e,n,i)}finally{On.transition=r,lt=i}return null}function zS(t,e,n,i){do Ps();while(nr!==null);if(tt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yy(t,s),t===Vt&&(It=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Tv(El,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=lt;lt=1;var o=tt;tt|=4,ch.current=null,IS(t,n),gv(n,t),aS(id),Tl=!!nd,id=nd=null,t.current=n,US(n),dy(),tt=o,lt=a,On.transition=s}else t.current=n;if(bo&&(bo=!1,nr=t,Hl=r),s=t.pendingLanes,s===0&&(cr=null),py(n.stateNode),_n(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=Ed,Ed=null,t;return Hl&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===wd?Aa++:(Aa=0,wd=t):Aa=0,_r(),null}function Ps(){if(nr!==null){var t=n0(Hl),e=On.transition,n=lt;try{if(On.transition=null,lt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Hl=0,tt&6)throw Error(ce(331));var r=tt;for(tt|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ae=c;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:Ca(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ae=f;else for(;Ae!==null;){h=Ae;var u=h.sibling,p=h.return;if(hv(h),h===c){Ae=null;break}if(u!==null){u.return=p,Ae=u;break}Ae=p}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ae=d;break e}Ae=s.return}}var _=t.current;for(Ae=_;Ae!==null;){a=Ae;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Ae=M;else e:for(a=_;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lc(9,o)}}catch(T){At(o,o.return,T)}if(o===a){Ae=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Ae=y;break e}Ae=o.return}}if(tt=r,_r(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(ec,t)}catch{}i=!0}return i}finally{lt=n,On.transition=e}}return!1}function rm(t,e,n){e=Os(n,e),e=nv(t,e,1),t=lr(t,e,1),e=on(),t!==null&&(to(t,1,e),_n(t,e))}function At(t,e,n){if(t.tag===3)rm(t,t,n);else for(;e!==null;){if(e.tag===3){rm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Os(n,t),t=iv(e,t,1),e=lr(e,t,1),t=on(),e!==null&&(to(e,1,t),_n(e,t));break}}e=e.return}}function HS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(kt===4||kt===3&&(jt&130023424)===jt&&500>Nt()-dh?Ur(t,0):uh|=n),_n(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=on();t=Ui(t,e),t!==null&&(to(t,e,n),_n(t,n))}function VS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function GS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Ev(t,n)}var wv;wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,PS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,yt&&e.flags&1048576&&A0(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Is(e,tn.current);Rs(e,n),r=rh(null,e,i,t,r,n);var s=sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qf(e),r.updater=oc,e.stateNode=r,r._reactInternals=e,fd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Xf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),t=$n(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=Yp(null,e,i,t,n);break e;case 11:e=Xp(null,e,i,t,n);break e;case 14:e=$p(null,e,i,$n(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Yp(t,e,i,r,n);case 3:e:{if(ov(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,I0(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(ce(423)),e),e=qp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(ce(424)),e),e=qp(t,e,i,n,r);break e}else for(Cn=or(e.stateNode.containerInfo.firstChild),bn=e,yt=!0,qn=null,n=L0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),i===r){e=Fi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return U0(e),t===null&&cd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),av(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return lv(t,e,n);case 4:return eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Xp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(Dl,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!gn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ud(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ud(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Bn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),$p(t,e,i,r,n);case 15:return rv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),ll(t,e),e.tag=1,vn(i)?(t=!0,Pl(e)):t=!1,Rs(e,n),tv(e,i,r),fd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return cv(t,e,n);case 22:return sv(t,e,n)}throw Error(ce(156,e.tag))};function Tv(t,e){return Jg(t,e)}function WS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new WS(t,e,n,i)}function mh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return mh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Uf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Fr(n.children,r,s,e);case Df:a=8,r|=8;break;case Fu:return t=kn(12,n,e,r|2),t.elementType=Fu,t.lanes=s,t;case ku:return t=kn(13,n,e,r),t.elementType=ku,t.lanes=s,t;case Ou:return t=kn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case Ug:return uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dg:a=10;break e;case Ig:a=9;break e;case If:a=11;break e;case Uf:a=14;break e;case Yi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function uc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=Ug,t.lanes=n,t.stateNode={isHidden:!1},t}function Kc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gh(t,e,n,i,r,s,a,o,l){return t=new XS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function $S(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return pr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(vn(n))return C0(t,n,e)}return e}function bv(t,e,n,i,r,s,a,o,l){return t=gh(n,i,!0,t,r,s,a,o,l),t.context=Cv(null),n=t.current,i=on(),r=ur(n),s=Pi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,to(t,r,i),_n(t,i),t}function dc(t,e,n,i){var r=e.current,s=on(),a=ur(r);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Qn(t,r,a,s),sl(t,r,a)),a}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vh(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function YS(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function _h(t){this._internalRoot=t}fc.prototype.render=_h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));dc(t,e,null,null)};fc.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){dc(null,t,null,null)}),e[Ii]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=s0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&o0(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function am(){}function qS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(a);s.call(c)}}var a=bv(e,i,t,0,null,!1,!1,"",am);return t._reactRootContainer=a,t[Ii]=a.current,Oa(t.nodeType===8?t.parentNode:t),Hr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gl(l);o.call(c)}}var l=gh(t,0,!1,null,null,!1,!1,"",am);return t._reactRootContainer=l,t[Ii]=l.current,Oa(t.nodeType===8?t.parentNode:t),Hr(function(){dc(e,l,n,i)}),l}function pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gl(a);o.call(l)}}dc(e,a,t,r)}else a=qS(n,e,t,r,i);return Gl(a)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Of(e,n|1),_n(e,Nt()),!(tt&6)&&(Bs=Nt()+500,_r()))}break;case 13:Hr(function(){var i=Ui(t,1);if(i!==null){var r=on();Qn(i,t,1,r)}}),vh(t,1)}};Bf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=on();Qn(e,t,134217728,n)}vh(t,134217728)}};r0=function(t){if(t.tag===13){var e=ur(t),n=Ui(t,e);if(n!==null){var i=on();Qn(n,t,e,i)}vh(t,e)}};s0=function(){return lt};a0=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Yu=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rc(i);if(!r)throw Error(ce(90));kg(i),Hu(i,r)}}}break;case"textarea":Bg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Xg=fh;$g=Hr;var KS={usingClientEntryPoint:!1,Events:[io,vs,rc,Wg,jg,fh]},sa={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZS={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kg(t),t===null?null:t.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{ec=Ao.inject(ZS),fi=Ao}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(ce(200));return $S(t,e,null,n)};Rn.createRoot=function(t,e){if(!xh(t))throw Error(ce(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Oa(t.nodeType===8?t.parentNode:t),new _h(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Kg(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Hr(t)};Rn.hydrate=function(t,e,n){if(!hc(e))throw Error(ce(200));return pc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=bv(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Oa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fc(e)};Rn.render=function(t,e,n){if(!hc(e))throw Error(ce(200));return pc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!hc(t))throw Error(ce(40));return t._reactRootContainer?(Hr(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Rn.unstable_batchedUpdates=fh;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return pc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Rg.exports=Rn;var JS=Rg.exports,om=JS;Iu.createRoot=om.createRoot,Iu.hydrateRoot=om.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$a.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const lm="popstate";function QS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return bd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Wl(r)}return tM(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eM(){return Math.random().toString(36).substr(2,8)}function cm(t,e){return{usr:t.state,key:t.key,idx:e}}function bd(t,e,n,i){return n===void 0&&(n=null),$a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xs(e):e,{state:n,key:e&&e.key||i||eM()})}function Wl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function tM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ir.Pop,l=null,c=h();c==null&&(c=0,a.replaceState($a({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function f(){o=ir.Pop;let m=h(),d=m==null?null:m-c;c=m,l&&l({action:o,location:E.location,delta:d})}function u(m,d){o=ir.Push;let _=bd(E.location,m,d);c=h()+1;let M=cm(_,c),y=E.createHref(_);try{a.pushState(M,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(y)}s&&l&&l({action:o,location:E.location,delta:1})}function p(m,d){o=ir.Replace;let _=bd(E.location,m,d);c=h();let M=cm(_,c),y=E.createHref(_);a.replaceState(M,"",y),s&&l&&l({action:o,location:E.location,delta:0})}function g(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:Wl(m);return _=_.replace(/ $/,"%20"),Rt(d,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,d)}let E={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(lm,f),l=m,()=>{r.removeEventListener(lm,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let d=g(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:p,go(m){return a.go(m)}};return E}var um;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(um||(um={}));function nM(t,e,n){return n===void 0&&(n="/"),iM(t,e,n)}function iM(t,e,n,i){let r=typeof e=="string"?Xs(e):e,s=zs(r.pathname||"/",n);if(s==null)return null;let a=Nv(t);rM(a);let o=null,l=mM(s);for(let c=0;o==null&&c<a.length;++c)o=hM(a[c],l);return o}function Nv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=fr([i,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Nv(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:dM(c,s.index),routesMeta:h})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Lv(s.path))r(s,a,l)}),e}function Lv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Lv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function rM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:fM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const sM=/^:[\w-]+$/,aM=3,oM=2,lM=1,cM=10,uM=-2,dm=t=>t==="*";function dM(t,e){let n=t.split("/"),i=n.length;return n.some(dm)&&(i+=uM),e&&(i+=oM),n.filter(r=>!dm(r)).reduce((r,s)=>r+(sM.test(s)?aM:s===""?lM:cM),i)}function fM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function hM(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Ad({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),u=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:fr([s,f.pathname]),pathnameBase:_M(fr([s,f.pathnameBase])),route:u}),f.pathnameBase!=="/"&&(s=fr([s,f.pathnameBase]))}return a}function Ad(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=pM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,h,f)=>{let{paramName:u,isOptional:p}=h;if(u==="*"){let E=o[f]||"";a=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const g=o[f];return p&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function pM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function mM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function gM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Xs(t):t,s;return n?(n=Uv(n),n.startsWith("/")?s=fm(n.substring(1),"/"):s=fm(n,e)):s=e,{pathname:s,search:xM(i),hash:yM(r)}}function fm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Jc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dv(t,e){let n=vM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Iv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Xs(t):(r=$a({},t),Rt(!r.pathname||!r.pathname.includes("?"),Jc("?","pathname","search",r)),Rt(!r.pathname||!r.pathname.includes("#"),Jc("#","pathname","hash",r)),Rt(!r.search||!r.search.includes("#"),Jc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let u=a.split("/");for(;u[0]==="..";)u.shift(),f-=1;r.pathname=u.join("/")}o=f>=0?e[f]:"/"}let l=gM(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Uv=t=>t.replace(/\/\/+/g,"/"),fr=t=>Uv(t.join("/")),_M=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Fv=["post","put","patch","delete"];new Set(Fv);const MM=["get",...Fv];new Set(MM);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ya(){return Ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ya.apply(null,arguments)}const mc=ae.createContext(null),kv=ae.createContext(null),xr=ae.createContext(null),gc=ae.createContext(null),$r=ae.createContext({outlet:null,matches:[],isDataRoute:!1}),Ov=ae.createContext(null);function EM(t,e){let{relative:n}=e===void 0?{}:e;so()||Rt(!1);let{basename:i,navigator:r}=ae.useContext(xr),{hash:s,pathname:a,search:o}=vc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:fr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function so(){return ae.useContext(gc)!=null}function $s(){return so()||Rt(!1),ae.useContext(gc).location}function Bv(t){ae.useContext(xr).static||ae.useLayoutEffect(t)}function Ys(){let{isDataRoute:t}=ae.useContext($r);return t?FM():wM()}function wM(){so()||Rt(!1);let t=ae.useContext(mc),{basename:e,future:n,navigator:i}=ae.useContext(xr),{matches:r}=ae.useContext($r),{pathname:s}=$s(),a=JSON.stringify(Dv(r,n.v7_relativeSplatPath)),o=ae.useRef(!1);return Bv(()=>{o.current=!0}),ae.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Iv(c,JSON.parse(a),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:fr([e,f.pathname])),(h.replace?i.replace:i.push)(f,h.state,h)},[e,i,a,s,t])}function vc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ae.useContext(xr),{matches:r}=ae.useContext($r),{pathname:s}=$s(),a=JSON.stringify(Dv(r,i.v7_relativeSplatPath));return ae.useMemo(()=>Iv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function TM(t,e){return CM(t,e)}function CM(t,e,n,i){so()||Rt(!1);let{navigator:r}=ae.useContext(xr),{matches:s}=ae.useContext($r),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=$s(),h;if(e){var f;let m=typeof e=="string"?Xs(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Rt(!1),h=m}else h=c;let u=h.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=nM(t,{pathname:p}),E=NM(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&E?ae.createElement(gc.Provider,{value:{location:Ya({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ir.Pop}},E):E}function bM(){let t=UM(),e=SM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ae.createElement(ae.Fragment,null,ae.createElement("h2",null,"Unexpected Application Error!"),ae.createElement("h3",{style:{fontStyle:"italic"}},e),n?ae.createElement("pre",{style:r},n):null,null)}const AM=ae.createElement(bM,null);class RM extends ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ae.createElement($r.Provider,{value:this.props.routeContext},ae.createElement(Ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PM(t){let{routeContext:e,match:n,children:i}=t,r=ae.useContext(mc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ae.createElement($r.Provider,{value:e},i)}function NM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||Rt(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:u,errors:p}=n,g=f.route.loader&&u[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,f,u)=>{let p,g=!1,E=null,m=null;n&&(p=o&&f.route.id?o[f.route.id]:void 0,E=f.route.errorElement||AM,l&&(c<0&&u===0?(kM("route-fallback"),g=!0,m=null):c===u&&(g=!0,m=f.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,u+1)),_=()=>{let M;return p?M=E:g?M=m:f.route.Component?M=ae.createElement(f.route.Component,null):f.route.element?M=f.route.element:M=h,ae.createElement(PM,{match:f,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:M})};return n&&(f.route.ErrorBoundary||f.route.errorElement||u===0)?ae.createElement(RM,{location:n.location,revalidation:n.revalidation,component:E,error:p,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var zv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(zv||{}),Hv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hv||{});function LM(t){let e=ae.useContext(mc);return e||Rt(!1),e}function DM(t){let e=ae.useContext(kv);return e||Rt(!1),e}function IM(t){let e=ae.useContext($r);return e||Rt(!1),e}function Vv(t){let e=IM(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function UM(){var t;let e=ae.useContext(Ov),n=DM(),i=Vv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function FM(){let{router:t}=LM(zv.UseNavigateStable),e=Vv(Hv.UseNavigateStable),n=ae.useRef(!1);return Bv(()=>{n.current=!0}),ae.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ya({fromRouteId:e},s)))},[t,e])}const hm={};function kM(t,e,n){hm[t]||(hm[t]=!0)}function OM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rr(t){Rt(!1)}function BM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ir.Pop,navigator:s,static:a=!1,future:o}=t;so()&&Rt(!1);let l=e.replace(/^\/*/,"/"),c=ae.useMemo(()=>({basename:l,navigator:s,static:a,future:Ya({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Xs(i));let{pathname:h="/",search:f="",hash:u="",state:p=null,key:g="default"}=i,E=ae.useMemo(()=>{let m=zs(h,l);return m==null?null:{location:{pathname:m,search:f,hash:u,state:p,key:g},navigationType:r}},[l,h,f,u,p,g,r]);return E==null?null:ae.createElement(xr.Provider,{value:c},ae.createElement(gc.Provider,{children:n,value:E}))}function zM(t){let{children:e,location:n}=t;return TM(Rd(e),n)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let n=[];return ae.Children.forEach(t,(i,r)=>{if(!ae.isValidElement(i))return;let s=[...e,r];if(i.type===ae.Fragment){n.push.apply(n,Rd(i.props.children,s));return}i.type!==Rr&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Rd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jl.apply(null,arguments)}function Gv(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function HM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VM(t,e){return t.button===0&&(!e||e==="_self")&&!HM(t)}const GM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],WM=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jM="6";try{window.__reactRouterVersion=jM}catch{}const XM=ae.createContext({isTransitioning:!1}),$M="startTransition",pm=Hx[$M];function YM(t){let{basename:e,children:n,future:i,window:r}=t,s=ae.useRef();s.current==null&&(s.current=QS({window:r,v5Compat:!0}));let a=s.current,[o,l]=ae.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},h=ae.useCallback(f=>{c&&pm?pm(()=>l(f)):l(f)},[l,c]);return ae.useLayoutEffect(()=>a.listen(h),[a,h]),ae.useEffect(()=>OM(i),[i]),ae.createElement(BM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const qM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ZM=ae.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,u=Gv(e,GM),{basename:p}=ae.useContext(xr),g,E=!1;if(typeof c=="string"&&KM.test(c)&&(g=c,qM))try{let M=new URL(window.location.href),y=c.startsWith("//")?new URL(M.protocol+c):new URL(c),T=zs(y.pathname,p);y.origin===M.origin&&T!=null?c=T+y.search+y.hash:E=!0}catch{}let m=EM(c,{relative:r}),d=e1(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:f});function _(M){i&&i(M),M.defaultPrevented||d(M)}return ae.createElement("a",jl({},u,{href:g||m,onClick:E||s?i:_,ref:n,target:l}))}),JM=ae.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:h}=e,f=Gv(e,WM),u=vc(l,{relative:f.relative}),p=$s(),g=ae.useContext(kv),{navigator:E,basename:m}=ae.useContext(xr),d=g!=null&&t1(u)&&c===!0,_=E.encodeLocation?E.encodeLocation(u).pathname:u.pathname,M=p.pathname,y=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;r||(M=M.toLowerCase(),y=y?y.toLowerCase():null,_=_.toLowerCase()),y&&m&&(y=zs(y,m)||y);const T=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let b=M===_||!a&&M.startsWith(_)&&M.charAt(T)==="/",w=y!=null&&(y===_||!a&&y.startsWith(_)&&y.charAt(_.length)==="/"),x={isActive:b,isPending:w,isTransitioning:d},A=b?i:void 0,L;typeof s=="function"?L=s(x):L=[s,b?"active":null,w?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let D=typeof o=="function"?o(x):o;return ae.createElement(ZM,jl({},f,{"aria-current":A,className:L,ref:n,style:D,to:l,viewTransition:c}),typeof h=="function"?h(x):h)});var Pd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pd||(Pd={}));var mm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));function QM(t){let e=ae.useContext(mc);return e||Rt(!1),e}function e1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Ys(),c=$s(),h=vc(t,{relative:a});return ae.useCallback(f=>{if(VM(f,n)){f.preventDefault();let u=i!==void 0?i:Wl(c)===Wl(h);l(t,{replace:u,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,i,r,n,t,s,a,o])}function t1(t,e){e===void 0&&(e={});let n=ae.useContext(XM);n==null&&Rt(!1);let{basename:i}=QM(Pd.useViewTransitionState),r=vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=zs(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=zs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Ad(r.pathname,a)!=null||Ad(r.pathname,s)!=null}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function i1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:n1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=t=>{const e=r1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Qc(t){return t!=null}function a1(t,e={}){var u,p;const n=e.attributeNames??{},i=g=>n[g]??g,r=t.size??t.width??Sr.width,s=t.size??t.height??Sr.height,a=((u=t.aliases)==null?void 0:u.filter(g=>typeof g=="string"&&g.trim()!=="").map(g=>`lucide-${g}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?Nd(...l):Nd("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Sr["stroke-width"])*Number(t.size??t.width??Sr.width)/Number(e.size??e.width??Sr.width):e.strokeWidth??Sr["stroke-width"];return["svg",{...Object.entries(Sr).reduce((g,[E,m])=>(g[i(E)]=m,g),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Qc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Qc(e.width)&&{[i("width")]:e.width},..."height"in e&&Qc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(g=>{const[E,m,d]=g,_=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return d?[E,_,d]:[E,_]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function o1(t,e={}){return a1(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},c1=ae.createContext({}),u1=()=>ae.useContext(c1),d1=ae.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...f},u)=>{const{size:p=24,strokeWidth:g=2,absoluteStrokeWidth:E=!1,nonScalingStroke:m=!1,color:d="currentColor",className:_=""}=u1()??{},M=!!l||l1(f),[y,T,b=[]]=o1(h,{color:t??d,width:n??e??p,height:i??e??p,strokeWidth:r??g,absoluteStrokeWidth:s??E,nonScalingStroke:a??m,className:Nd(_,o),hasA11yProp:M,attributes:f});return ae.createElement(y,{ref:u,...T},[...b.map(([w,x])=>ae.createElement(w,x)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function rt(t,e=[],n=[]){const i=typeof t=="string"?i1(t,e,n):t,r=ae.forwardRef(({className:s,...a},o)=>ae.createElement(d1,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=s1(i.name)),r}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Wv.node;const fl=rt(Wv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};jv.node;const gm=rt(jv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv={name:"bookmark-check",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]};Xv.node;const $v=rt(Xv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Yv.node;const yh=rt(Yv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};qv.node;const Kv=rt(qv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Zv.node;const f1=rt(Zv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Jv.node;const Sh=rt(Jv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};Qv.node;const h1=rt(Qv);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};e_.node;const p1=rt(e_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};t_.node;const n_=rt(t_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};i_.node;const m1=rt(i_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};r_.node;const g1=rt(r_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};s_.node;const v1=rt(s_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};a_.node;const _1=rt(a_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};o_.node;const x1=rt(o_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};l_.node;const c_=rt(l_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};u_.node;const y1=rt(u_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};d_.node;const Ld=rt(d_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};f_.node;const h_=rt(f_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};p_.node;const S1=rt(p_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};m_.node;const M1=rt(m_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_={name:"shield-alert",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]};g_.node;const E1=rt(g_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};v_.node;const Mh=rt(v_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};__.node;const w1=rt(__);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};x_.node;const Hn=rt(x_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};y_.node;const Dd=rt(y_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};S_.node;const T1=rt(S_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};M_.node;const C1=rt(M_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};E_.node;const b1=rt(E_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};w_.node;const T_=rt(w_);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};C_.node;const b_=rt(C_),St={Birthday:{c:"#e11d74",secondary:"#fb7185",gradient:"linear-gradient(135deg, #e11d74 0%, #be185d 50%, #831843 100%)",glow:"rgba(225, 29, 116, 0.35)",tagBg:"rgba(225, 29, 116, 0.12)",border:"rgba(225, 29, 116, 0.3)",e:"🎂",iconName:"Cake",tagline:"Joyful Milestones & Sparkling Parties",image:"/images/birthday.jpg",vibe:"Fun, vibrant, balloons, tiered cakes, and music.",decorHighlights:["Designer Balloon Arches","Custom Themed Cake Tables","Fairy Light Backdrops","Interactive Fun Zones"]},Haldi:{c:"#f59e0b",secondary:"#fbbf24",gradient:"linear-gradient(135deg, #d97706 0%, #b45309 60%, #78350f 100%)",glow:"rgba(245, 158, 11, 0.35)",tagBg:"rgba(245, 158, 11, 0.12)",border:"rgba(245, 158, 11, 0.3)",e:"🌼",iconName:"Sun",tagline:"Auspicious Saffron Sunshine & Floral Joy",image:"/images/haldi.jpg",vibe:"Fresh marigolds, brass urlis, turmeric glows, and dhol.",decorHighlights:["Fresh Marigold Cascades","Traditional Brass Urlis","Floral Swing Canopies","Folk Dhol & Photobooth"]},Marriage:{c:"#be123c",secondary:"#fb7185",gradient:"linear-gradient(135deg, #9f1239 0%, #881337 55%, #4c0519 100%)",glow:"rgba(190, 18, 60, 0.35)",tagBg:"rgba(190, 18, 60, 0.12)",border:"rgba(190, 18, 60, 0.3)",e:"💍",iconName:"Heart",tagline:"Regal Mandap Splendor & Timeless Vows",image:"/images/marriage.jpg",vibe:"Opulent velvet drapes, royal chandeliers, and sacred elegance.",decorHighlights:["Opulent Floral Mandaps","Royal Velvet Drapes & Lights","Bridal Walkway & Stage","Full Day Event Coordination"]},"Baby Shower":{c:"#0d9488",secondary:"#2dd4bf",gradient:"linear-gradient(135deg, #0f766e 0%, #115e59 55%, #042f2e 100%)",glow:"rgba(13, 148, 136, 0.35)",tagBg:"rgba(13, 148, 136, 0.12)",border:"rgba(13, 148, 136, 0.3)",e:"🍼",iconName:"Baby",tagline:"Whimsical Pastels & Sweet Blessings",image:"/images/babyshower.jpg",vibe:"Soft clouds, sage & blush palettes, eucalyptus, and blessings.",decorHighlights:["Pastel Cloud & Star Canopies","Godh Bharai Ritual Props","Baby Name Arch & Dessert Bar","Keepsake Guest Wishing Tree"]},Other:{c:"#7c3aed",secondary:"#a78bfa",gradient:"linear-gradient(135deg, #6d28d9 0%, #5b21b6 55%, #2e1065 100%)",glow:"rgba(124, 58, 237, 0.35)",tagBg:"rgba(124, 58, 237, 0.12)",border:"rgba(124, 58, 237, 0.3)",e:"🎉",iconName:"Sparkles",tagline:"Grand Galas, Receptions & Anniversaries",image:"/images/other.jpg",vibe:"Champagne towers, crystal chandeliers, and banquet elegance.",decorHighlights:["Crystal Chandeliers & LED Wall","Grand Entrance Carpet","Cocktail Bar Styling","Lounge Seating Clusters"]}},A_=[{id:1,name:"Little Star Birthday Wonderland",category:"Birthday",price:18e3,originalPrice:22e3,badge:"Most Popular",rating:4.9,reviewsCount:64,duration:"4 - 5 Hours",capacity:"Up to 50 Kids & Guests",image:"/images/birthday_kids.jpg",tagline:"Magical pastel rainbow balloon arches, themed cake table and interactive party games.",desc:"Transform your venue into a whimsical playground! Includes a multi-color organic balloon arch, personalized milestone cake pedestal, playful party hats, kid-friendly game hosts, and fairy lighting.",features:["Custom balloon garland & LED sign","Themed dessert & cake table","Interactive host for kids party games","Personalized photo cutout booth"],included:["3-Tier Cake Pedestal","Organic Balloon Garland","Fairy String Lights","Trained Party Coordinator","Sound & Mic Setup"]},{id:2,name:"Milestone 50 Royal Gala",category:"Birthday",price:45e3,originalPrice:52e3,badge:"Luxury Milestone",rating:5,reviewsCount:38,duration:"6 Hours",capacity:"Up to 120 Guests",image:"/images/birthday.jpg",tagline:"Sophisticated evening celebration with live strings, floral walls and memory displays.",desc:"An extraordinary milestone deserves world-class decor. Featuring a live floral photo backdrop, retro memory gallery timeline, amber ambient lighting, velvet cocktail tables, and an acoustic sound stage.",features:["Curated nostalgia memory gallery wall","Fresh imported floral installations","Warm amber uplighting and spotlights","Champagne toast styling & glassware"],included:["Memory Photo Wall","Exotic Floral Centerpieces","Ambient Up-lighting","Acoustic Stage Setup","VIP Lounge Seating"]},{id:3,name:"Marigold Haldi Morning",category:"Haldi",price:22e3,originalPrice:26e3,badge:"Traditional Choice",rating:4.9,reviewsCount:92,duration:"4 - 5 Hours",capacity:"Up to 80 Guests",image:"/images/haldi_morning.jpg",tagline:"Fresh golden marigold cascades, engraved brass urli and vibrant yellow drapes.",desc:"Celebrate the joyous turmeric ceremony in timeless traditional style! Features authentic brass urlis filled with fresh petals, dual-tone marigold backdrop, floor cushions, and brass lanterns for picture-perfect memories.",features:["Authentic large brass urli with fresh petals","Dense yellow & orange marigold drapes","Traditional low seating with bolster cushions","Custom photo corner with ethnic props"],included:["Center Brass Urli Vessel","Fresh Petal Bar","Marigold Curtain Wall","Ethnic Hand Fans & Props","On-site Freshness Assistant"]},{id:4,name:"Royal Haldi Courtyard & Dhol",category:"Haldi",price:38e3,originalPrice:45e3,badge:"Heritage Edition",rating:4.95,reviewsCount:51,duration:"6 Hours",capacity:"Up to 160 Guests",image:"/images/haldi.jpg",tagline:"Grand courtyard transformation with floral swing, live dhol beats and snack kiosks.",desc:"An energetic carnival of color and music! Highlights include an ornate hand-carved wooden swing covered in jasmine and marigolds, live Punjabi dhol drummers, ethnic snack cart styling, and yellow parasols.",features:["Florally decorated royal wooden swing","2 energetic live dhol artists included","Traditional street-cart snack stall decor","Handmade gota patti floral jewelry for guests"],included:["Hand-carved Floral Swing","Live Dhol Duo (2 hrs)","Yellow Parasols & Drapes","Folk Music Playlist & Speaker","Turmeric Ritual Essentials"]},{id:6,name:"Intimate Registry & Garden Vows",category:"Marriage",price:6e4,originalPrice:7e4,badge:"Eco Elegant",rating:4.88,reviewsCount:44,duration:"5 Hours",capacity:"Up to 75 Guests",image:"/images/marriage_garden.jpg",tagline:"Graceful floral pergola, fairy light canopies and an intimate sit-down reception lunch.",desc:"Understated elegance for modern couples. Features a minimalist wooden arch adorned with eucalyptus and pastel roses, rustic wooden dining setups, vintage Edison bulb stringing, and personalized name signage.",features:["Botanical wooden arch with pastel blossoms","Fairy light curtain and vintage bulb overheads","Custom wooden calligraphy welcome easel","Artisan table runners with candle clusters"],included:["Wooden Ceremony Arch","Welcome Easel & Calligraphy","Fairy Canopy Strings","Candle Cluster Centerpieces","Acoustic Speaker System"]},{id:5,name:"Mandap Dreams Royal Wedding",category:"Marriage",price:25e4,originalPrice:28e4,badge:"Signature Royal",rating:5,reviewsCount:110,duration:"Full Day Ceremony",capacity:"Up to 500 Guests",image:"/images/marriage.jpg",tagline:"Exquisite carved mandap, cascading orchids, crystal chandeliers and bridal aisle.",desc:"Your fairytale wedding brought to life with majestic royal splendor. Featuring a grand four-pillar mandap wrapped in roses and tuberoses, opulent crystal chandeliers, lighted floral bridal runway, and couple royal chairs.",features:["Grand four-pillar carved floral mandap","Mirrored bridal runway with floral hedges","Exquisite crystal chandeliers and warm floodlights","Dedicated full-day decor & flow coordinator"],included:["Grand Royal Mandap","Bridal Walkway & Hedges","Hawan Kund Brass Setup","Couple Throne Chairs","Full Day Teardown & Management"]},{id:7,name:"Cloud Nine Dream Baby Shower",category:"Baby Shower",price:28e3,originalPrice:34e3,badge:"Trending",rating:4.92,reviewsCount:76,duration:"4 Hours",capacity:"Up to 60 Guests",image:"/images/babyshower.jpg",tagline:"Pastel fluffy clouds, glowing neon moon, guessing game station and dessert table.",desc:"A heavenly atmosphere welcoming the newest blessing. Features illuminated cotton clouds, glowing golden moon cutouts, sage and blush organic balloons, interactive baby prediction game board, and mocktail bar.",features:["Illuminated cloud & moon backdrop with LED sign","Organic eucalyptus & pastel balloon garland","Interactive 'Advice for Parents' wishing tree","Custom themed dessert bar risers & tiers"],included:["Neon Moon & Cloud Backdrop","Advice Wishing Tree & Cards","Cupcake & Cake Display Risers","Mom-to-be Silk Sash & Crown","Curated Soft Lullaby Playlist"]},{id:8,name:"Godh Bharai Traditional Blessings",category:"Baby Shower",price:32e3,originalPrice:38e3,badge:"Ritual Special",rating:4.96,reviewsCount:58,duration:"5 Hours",capacity:"Up to 100 Guests",image:"/images/babyshower_traditional.jpg",tagline:"Heritage diwan setup, lotus flower decor, silver ritual trays and sweet distribution counter.",desc:"A culturally sacred celebration honoring the mother-to-be. Includes a regal traditional diwan with silk cushions, fresh lotus and mogra flower backdrops, decorated puja thalis, and auspicious toran entrance decor.",features:["Traditional silk-draped diwan with bolsters","Fresh fragrant jasmine, mogra and lotus accents","Silver-plated ceremonial ritual trays & bell","Grand floral Toran entrance archway"],included:["Silk Diwan with Bolsters","Fresh Lotus & Mogra Backdrop","Ornate Ritual Puja Thali","Brass Diya Lamps & Oil","Family Photo Corner"]},{id:10,name:"Candlelit Rooftop Anniversary Soirée",category:"Other",price:35e3,originalPrice:42e3,badge:"Romantic Escape",rating:4.94,reviewsCount:29,duration:"4 Hours",capacity:"Up to 25 Guests",image:"/images/other_anniversary.jpg",tagline:"Romantic pergola under the stars, candlelit tables, fresh red roses and chilled champagne.",desc:"An unforgettable private celebration atop the city skyline. Features a wooden pergola wrapped in warm fairy lights, custom table arrangements with red roses, candle clusters, and romantic acoustic background melodies.",features:["Private rooftop pergola fairy canopy","Fresh red rose centerpieces & candle clusters","Chilled champagne bucket with crystal flutes","Personalized anniversary photo easel"],included:["Rooftop Pergola Lighting","Candle Cluster Decor","Red Rose Floral Styling","Dedicated Private Waitstaff","Bluetooth Sound Deck"]},{id:9,name:"Grand Symphony Reception Gala",category:"Other",price:95e3,originalPrice:11e4,badge:"Luxury Gala",rating:5,reviewsCount:32,duration:"6 Hours",capacity:"Up to 350 Guests",image:"/images/other.jpg",tagline:"Starlit ceiling, crystal candelabras, VIP lounge seating and cocktail stage styling.",desc:"Ideal for wedding receptions, corporate jubilees, or grand silver anniversaries! Boasts an LED starlight dance floor, mirrored floral tablescapes, high-end intelligent stage lighting, and luxury lounge modules.",features:["Overhead starlight canopy with crystal lighting","Lounge pods with plush velvet chesterfields","Illuminated bar counter and cocktail high-tops","Intelligent stage lighting & hazers"],included:["Starlight Ceiling Draping","Velvet Lounge Furniture","Illuminated Bar Facade","Stage Backlight Rig","Floor Event Manager"]}],Ro=[{id:"photo",name:"Professional Candid Photography & Reels",price:12e3,desc:"Dedicated photographer covering arrivals, decor details, and key ceremony rituals with 2 edited reels."},{id:"dj",name:"DJ & Acoustic Sound System",price:15e3,desc:"Professional DJ with bespoke playlist, wireless mics, speakers, and subwoofers tuned for the venue."},{id:"floral",name:"Fresh Exotic Floral Upgrade",price:8e3,desc:"Double the fresh blooms with imported Dutch roses, baby's breath, and aromatic tuberoses."},{id:"cake",name:"Designer 3-Tier Customized Theme Cake",price:4500,desc:"Handcrafted gourmet cake matching your theme colors and flavors (Choice of Belgian Chocolate, Red Velvet, or Mango Coulis)."},{id:"host",name:"Anchor / Master of Ceremonies (MC)",price:7e3,desc:"Engaging professional emcee to guide guests, host games, and maintain high festive energy."}],A1=[{name:"Pooja & Rohan Sharma",event:"Mandap Dreams Royal Wedding",cat:"Marriage",stars:5,quote:"Our mandap looked straight out of a royal palace movie. CelebrationCraft took care of every single floral arrangement and the crystal chandeliers took everyone's breath away!",date:"October 2026",avatar:"👰"},{name:"Ananya Iyer",event:"Marigold Haldi Morning",cat:"Haldi",stars:5,quote:"The fresh marigold scent and the authentic brass urli setup created pure magic. The photos turned out so vibrant, yellow, and alive. Highly recommend!",date:"September 2026",avatar:"🌼"},{name:"Vikram & Neha Malhotra",event:"Cloud Nine Dream Baby Shower",cat:"Baby Shower",stars:5,quote:"Every guest commented on how dreamy the pastel cloud setup was. The wishing tree and the moon backdrop made my wife cry happy tears.",date:"August 2026",avatar:"🍼"},{name:"Arjun Singhania",event:"Milestone 50 Royal Gala",cat:"Birthday",stars:5,quote:"Hosted my father's 50th birthday. The memory photo wall and jazz stage ambiance were executed to perfection. Flawless execution from start to finish.",date:"October 2026",avatar:"🎂"}],En=t=>"₹"+Number(t).toLocaleString("en-IN"),vm=()=>new Date().toISOString().slice(0,10);function R1(){const t=[St.Birthday.c,St.Haldi.c,St.Marriage.c,St["Baby Shower"].c,St.Other.c,"#ec4899","#eab308","#06b6d4"];return v.jsx("div",{className:"bunting","aria-hidden":"true",children:Array.from({length:28},(e,n)=>v.jsx("i",{style:{background:t[n%t.length],animationDelay:`${n%5*.25}s`,opacity:.92}},n))})}function Ki({children:t,className:e="",maxTilt:n=12,glare:i=!0,style:r={}}){const s=ae.useRef(null),[a,o]=ae.useState(""),[l,c]=ae.useState({opacity:0}),h=u=>{const p=s.current;if(!p)return;const g=p.getBoundingClientRect(),E=u.clientX-g.left,m=u.clientY-g.top,d=g.width/2,_=g.height/2,M=(m-_)/_*-n,y=(E-d)/d*n;if(o(`perspective(1000px) rotateX(${M.toFixed(2)}deg) rotateY(${y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`),i){const T=E/g.width*100,b=m/g.height*100;c({opacity:.18,background:`radial-gradient(circle at ${T}% ${b}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 65%)`})}},f=()=>{o("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),c({opacity:0})};return v.jsxs("div",{ref:s,className:`tilt-card-wrapper ${e}`,onMouseMove:h,onMouseLeave:f,style:{transform:a,transition:a?"transform 0.1s ease-out":"transform 0.4s ease",transformStyle:"preserve-3d",position:"relative",...r},children:[t,i&&v.jsx("div",{className:"tilt-glare","aria-hidden":"true",style:{position:"absolute",inset:0,borderRadius:"inherit",pointerEvents:"none",transition:"opacity 0.25s ease",zIndex:10,...l}})]})}function Eh({ev:t,onBook:e,onQuickView:n,enable3D:i=!0}){const r=St[t.category]||St.Other,s="theme-"+t.category.toLowerCase().replace(/\s+/g,""),a=v.jsxs("article",{className:`card ${s}`,children:[v.jsxs("div",{className:"card-media",children:[v.jsx("img",{src:t.image||r.image,alt:t.name,className:"card-img",loading:"lazy"}),v.jsxs("div",{className:"card-overlay",children:[v.jsxs("div",{className:"card-top-badges",children:[v.jsxs("span",{className:"badge-pill badge-special",children:[v.jsx(Hn,{size:13,color:r.c}),t.badge||"Featured"]}),v.jsxs("span",{className:"badge-pill badge-rating",children:[v.jsx(Dd,{size:12,fill:"#fef08a",strokeWidth:0}),t.rating||4.9," (",t.reviewsCount||40,")"]})]}),v.jsx("div",{className:"card-cat-line",children:v.jsxs("span",{className:"badge-pill",style:{background:r.c,color:"#ffffff",fontWeight:700},children:[r.e," ",t.category]})})]})]}),v.jsxs("div",{className:"card-body",children:[v.jsxs("div",{className:"card-meta-tags",children:[v.jsxs("span",{className:"meta-item",children:[v.jsx(T_,{size:14}),t.capacity||"Up to 100 Guests"]}),v.jsx("span",{children:"•"}),v.jsxs("span",{className:"meta-item",children:[v.jsx(n_,{size:14}),t.duration||"4 - 5 Hours"]})]}),v.jsx("h3",{children:t.name}),v.jsx("p",{className:"card-desc",children:t.tagline||t.desc}),t.features&&t.features.length>0&&v.jsx("div",{className:"card-features",children:t.features.slice(0,2).map((o,l)=>v.jsxs("div",{className:"feature-point",children:[v.jsx(Kv,{size:14,className:"feature-check"}),v.jsx("span",{children:o})]},l))}),v.jsxs("div",{className:"card-footer",children:[v.jsx("div",{className:"price-container",children:v.jsxs("div",{children:[v.jsx("span",{className:"price-tax",children:"Package from"}),v.jsxs("div",{className:"price-main",children:[v.jsx("span",{className:"price-val",children:En(t.price)}),t.originalPrice&&v.jsx("span",{className:"price-orig",children:En(t.originalPrice)})]})]})}),v.jsxs("div",{className:"card-actions",children:[n&&v.jsxs("button",{className:"btn secondary sm",onClick:()=>n(t),"aria-label":`View details of ${t.name}`,children:[v.jsx(g1,{size:15})," Details"]}),v.jsx("button",{className:"btn sm",style:{background:r.gradient,gridColumn:n?"auto":"span 2"},onClick:()=>e(t.id),children:"Book Now"})]})]})]})]});return i?v.jsx(Ki,{maxTilt:8,glare:!0,style:{height:"100%",borderRadius:"var(--radius-lg)"},children:a}):a}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="186",P1=0,_m=1,N1=2,hl=1,L1=2,va=3,Vr=0,xn=1,Ci=2,Ni=0,Ra=1,Id=2,xm=3,ym=4,D1=5,ds=100,I1=101,U1=102,F1=103,k1=104,O1=200,B1=201,z1=202,H1=203,R_=204,P_=205,V1=206,G1=207,W1=208,j1=209,X1=210,$1=211,Y1=212,q1=213,K1=214,Ud=0,Fd=1,kd=2,qa=3,Od=4,Bd=5,zd=6,Hd=7,N_=0,Z1=1,J1=2,pi=0,L_=1,D_=2,I_=3,U_=4,F_=5,k_=6,O_=7,B_=300,Gr=301,Hs=302,eu=303,tu=304,_c=306,Vd=1e3,Ri=1001,Gd=1002,Wt=1003,Q1=1004,Po=1005,Qt=1006,nu=1007,Dr=1008,Tn=1009,z_=1010,H_=1011,Ka=1012,Th=1013,gi=1014,ui=1015,vi=1016,Ch=1017,bh=1018,Za=1020,V_=35902,G_=35899,W_=1021,j_=1022,Zn=1023,ki=1026,Ir=1027,X_=1028,Ah=1029,Wr=1030,Rh=1031,Ph=1033,pl=33776,ml=33777,gl=33778,vl=33779,Wd=35840,jd=35841,Xd=35842,$d=35843,Yd=36196,qd=37492,Kd=37496,Zd=37488,Jd=37489,Xl=37490,Qd=37491,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,af=37813,of=37814,lf=37815,cf=37816,uf=37817,df=37818,ff=37819,hf=37820,pf=37821,mf=36492,gf=36494,vf=36495,_f=36283,xf=36284,$l=36285,yf=36286,eE=3200,Sf=0,tE=1,er="",In="srgb",Yl="srgb-linear",ql="linear",ot="srgb",iu=7680,nE=519,iE=512,rE=513,sE=514,Nh=515,aE=516,oE=517,Lh=518,lE=519,cE=35044,Sm="300 es",di=2e3,Ja=2001;function uE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function dE(){const t=Kl("canvas");return t.style.display="block",t}const Mm={};function Em(...t){const e="THREE."+t.shift();console.log(e,...t)}function $_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=$_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=$_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ns(...t){const e=t.join(" ");e in Mm||(Mm[e]=!0,ze(...t))}function fE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const hE={[Ud]:Fd,[kd]:zd,[Od]:Hd,[qa]:Bd,[Fd]:Ud,[zd]:kd,[Hd]:Od,[Bd]:qa};class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,Mf=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function pE(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Oh=class Oh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oh.prototype.isVector2=!0;let Xe=Oh;class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],E=s[a+3];if(f!==E||l!==u||c!==p||h!==g){let m=l*u+c*p+h*g+f*E;m<0&&(u=-u,p=-p,g=-g,E=-E,m=-m);let d=1-o;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);d=Math.sin(d*_)/M,o=Math.sin(o*_)/M,l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+E*o}else{l=l*d+u*o,c=c*d+p*o,h=h*d+g*o,f=f*d+E*o;const _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+h*f+l*p-c*u,e[n+1]=l*g+h*u+c*f-o*p,e[n+2]=c*g+h*p+o*u-l*f,e[n+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bh=class Bh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bh.prototype.isVector3=!0;let G=Bh;const au=new G,wm=new qs,zh=class zh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],E=r[0],m=r[3],d=r[6],_=r[1],M=r[4],y=r[7],T=r[2],b=r[5],w=r[8];return s[0]=a*E+o*_+l*T,s[3]=a*m+o*M+l*b,s[6]=a*d+o*y+l*w,s[1]=c*E+h*_+f*T,s[4]=c*m+h*M+f*b,s[7]=c*d+h*y+f*w,s[2]=u*E+p*_+g*T,s[5]=u*m+p*M+g*b,s[8]=u*d+p*y+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=n*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=f*E,e[1]=(r*c-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=u*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(e,n)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zh.prototype.isMatrix3=!0;let He=zh;const ou=new He,Tm=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mE(){const t={enabled:!0,workingColorSpace:Yl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ql:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Yl]:{primaries:e,whitePoint:i,transfer:ql,toXYZ:Tm,fromXYZ:Cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Tm,fromXYZ:Cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Je=mE();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class gE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=Kl("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class Dh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lu(r[a].image)):s.push(lu(r[a]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let _E=0;const cu=new G;class en extends Yr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Ri,r=Ri,s=Qt,a=Dr,o=Zn,l=Tn,c=en.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ao(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=B_;en.DEFAULT_ANISOTROPY=1;const Hh=class Hh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],E=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,y=(p+1)/2,T=(d+1)/2,b=(h+u)/4,w=(f+E)/4,x=(g+m)/4;return M>y&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=b/i,s=w/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=w/s,r=x/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-E)*(f-E)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-E)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hh.prototype.isVector4=!0;let Et=Hh;class xE extends Yr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new en(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends xE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y_ extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Jl=class Jl{constructor(e,n,i,r,s,a,o,l,c,h,f,u,p,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,f,u,p,g,E,m)}set(e,n,i,r,s,a,o,l,c,h,f,u,p,g,E,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=E,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*f,g=o*h,E=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,g=c*h,E=c*f;n[0]=u+E*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=p*o-g,n[6]=E+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,g=c*h,E=c*f;n[0]=u-E*o,n[4]=-a*f,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*h,n[9]=E-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*f,g=o*h,E=o*f;n[0]=l*h,n[4]=g*c-p,n[8]=u*c+E,n[1]=l*f,n[5]=E*c+u,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,E=o*c;n[0]=l*h,n[4]=E-u*f,n[8]=g*f+p,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*f+g,n[10]=u-E*f}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,E=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+E,n[5]=a*h,n[9]=p*f-g,n[2]=g*f-p,n[6]=o*h,n[10]=E*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,ME)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Gi.crossVectors(i,yn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Gi.crossVectors(i,yn)),Gi.normalize(),No.crossVectors(yn,Gi),r[0]=Gi.x,r[4]=No.x,r[8]=yn.x,r[1]=Gi.y,r[5]=No.y,r[9]=yn.y,r[2]=Gi.z,r[6]=No.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],E=i[6],m=i[10],d=i[14],_=i[3],M=i[7],y=i[11],T=i[15],b=r[0],w=r[4],x=r[8],A=r[12],L=r[1],D=r[5],z=r[9],q=r[13],k=r[2],W=r[6],te=r[10],K=r[14],V=r[3],B=r[7],P=r[11],R=r[15];return s[0]=a*b+o*L+l*k+c*V,s[4]=a*w+o*D+l*W+c*B,s[8]=a*x+o*z+l*te+c*P,s[12]=a*A+o*q+l*K+c*R,s[1]=h*b+f*L+u*k+p*V,s[5]=h*w+f*D+u*W+p*B,s[9]=h*x+f*z+u*te+p*P,s[13]=h*A+f*q+u*K+p*R,s[2]=g*b+E*L+m*k+d*V,s[6]=g*w+E*D+m*W+d*B,s[10]=g*x+E*z+m*te+d*P,s[14]=g*A+E*q+m*K+d*R,s[3]=_*b+M*L+y*k+T*V,s[7]=_*w+M*D+y*W+T*B,s[11]=_*x+M*z+y*te+T*P,s[15]=_*A+M*q+y*K+T*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],E=e[7],m=e[11],d=e[15],_=l*p-c*u,M=o*p-c*f,y=o*u-l*f,T=a*p-c*h,b=a*u-l*h,w=a*f-o*h;return n*(E*_-m*M+d*y)-i*(g*_-m*T+d*b)+r*(g*M-E*T+d*w)-s*(g*y-E*b+m*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],E=e[13],m=e[14],d=e[15],_=n*o-i*a,M=n*l-r*a,y=n*c-s*a,T=i*l-r*o,b=i*c-s*o,w=r*c-s*l,x=h*E-f*g,A=h*m-u*g,L=h*d-p*g,D=f*m-u*E,z=f*d-p*E,q=u*d-p*m,k=_*q-M*z+y*D+T*L-b*A+w*x;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/k;return e[0]=(o*q-l*z+c*D)*W,e[1]=(r*z-i*q-s*D)*W,e[2]=(E*w-m*b+d*T)*W,e[3]=(u*b-f*w-p*T)*W,e[4]=(l*L-a*q-c*A)*W,e[5]=(n*q-r*L+s*A)*W,e[6]=(m*y-g*w-d*M)*W,e[7]=(h*w-u*y+p*M)*W,e[8]=(a*z-o*L+c*x)*W,e[9]=(i*L-n*z-s*x)*W,e[10]=(g*b-E*y+d*_)*W,e[11]=(f*y-h*b-p*_)*W,e[12]=(o*A-a*D-l*x)*W,e[13]=(n*D-i*A+r*x)*W,e[14]=(E*M-g*T-m*_)*W,e[15]=(h*T-f*M+u*_)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,f=o+o,u=s*c,p=s*h,g=s*f,E=a*h,m=a*f,d=o*f,_=l*c,M=l*h,y=l*f,T=i.x,b=i.y,w=i.z;return r[0]=(1-(E+d))*T,r[1]=(p+y)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(u+d))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(g+M)*w,r[9]=(m-_)*w,r[10]=(1-(u+E))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Qr.set(r[0],r[1],r[2]).length();const o=Qr.set(r[4],r[5],r[6]).length(),l=Qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,h=1/o,f=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,n.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,h=2*s/(n-e),f=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,E;if(l)g=s/(a-s),E=a*s/(a-s);else if(o===di)g=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ja)g=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,h=2/(n-e),f=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,E;if(l)g=1/(a-s),E=a/(a-s);else if(o===di)g=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ja)g=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Jl.prototype.isMatrix4=!0;let Tt=Jl;const Qr=new G,Wn=new Tt,SE=new G(0,0,0),ME=new G(1,1,1),Gi=new G,No=new G,yn=new G,bm=new Tt,Am=new qs;class mr{constructor(e=0,n=0,i=0,r=mr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mr.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EE=0;const Rm=new G,es=new qs,xi=new Tt,Lo=new G,oa=new G,wE=new G,TE=new qs,Pm=new G(1,0,0),Nm=new G(0,1,0),Lm=new G(0,0,1),Dm={type:"added"},CE={type:"removed"},ts={type:"childadded",child:null},uu={type:"childremoved",child:null};class ln extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new G,n=new mr,i=new qs,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new He}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(Nm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,n){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(Nm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(oa,Lo,this.up):xi.lookAt(Lo,oa,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(xi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),ts.child=e,this.dispatchEvent(ts),ts.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CE),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,TE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ln.DEFAULT_UP=new G(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _a extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),d=this._getHandJoint(c,E);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=pE(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=K_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Je.workingToColorSpace(Zt.copy(this),e),Math.round(Ze(Zt.r*255,0,255))*65536+Math.round(Ze(Zt.g*255,0,255))*256+Math.round(Ze(Zt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=In){Je.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Do);const i=su(Wi.h,Do.h,n),r=su(Wi.s,Do.s,n),s=su(Wi.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new qe;qe.NAMES=K_;class AE extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mr,this.environmentIntensity=1,this.environmentRotation=new mr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new G,yi=new G,hu=new G,Si=new G,ns=new G,is=new G,Im=new G,pu=new G,mu=new G,gu=new G,vu=new Et,_u=new Et,xu=new Et;class Kn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),yi.subVectors(i,n),hu.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(yi),l=jn.dot(hu),c=yi.dot(yi),h=yi.dot(hu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return vu.setScalar(0),_u.setScalar(0),xu.setScalar(0),vu.fromBufferAttribute(e,n),_u.fromBufferAttribute(e,i),xu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vu,s.x),a.addScaledVector(_u,s.y),a.addScaledVector(xu,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),yi.subVectors(e,n),jn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ns.subVectors(r,i),is.subVectors(s,i),pu.subVectors(e,i);const l=ns.dot(pu),c=is.dot(pu);if(l<=0&&c<=0)return n.copy(i);mu.subVectors(e,r);const h=ns.dot(mu),f=is.dot(mu);if(h>=0&&f<=h)return n.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(ns,a);gu.subVectors(e,s);const p=ns.dot(gu),g=is.dot(gu);if(g>=0&&p<=g)return n.copy(s);const E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(is,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Im.subVectors(s,r),o=(f-h)/(f-h+(p-g)),n.copy(r).addScaledVector(Im,o);const d=1/(m+E+u);return a=E*d,o=u*d,n.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Uo.subVectors(this.max,la),rs.subVectors(e.a,la),ss.subVectors(e.b,la),as.subVectors(e.c,la),ji.subVectors(ss,rs),Xi.subVectors(as,ss),Mr.subVectors(rs,as);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!yu(n,rs,ss,as,Uo)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,rs,ss,as,Uo))?!1:(Fo.crossVectors(ji,Xi),n=[Fo.x,Fo.y,Fo.z],yu(n,rs,ss,as,Uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new G,new G,new G,new G,new G,new G,new G,new G],Xn=new G,Io=new oo,rs=new G,ss=new G,as=new G,ji=new G,Xi=new G,Mr=new G,la=new G,Uo=new G,Fo=new G,Er=new G;function yu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),h=i.dot(Er);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Dt=new G,ko=new Xe;let RE=0;class mi extends Yr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cE,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ko.fromBufferAttribute(this,n),ko.applyMatrix3(e),this.setXY(n,ko.x,ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Z_ extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class J_ extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cn extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const PE=new oo,ca=new G,Su=new G;class xc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const n=ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Su)),this.expandByPoint(ca.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NE=0;const Dn=new Tt,Mu=new ln,os=new G,Sn=new oo,ua=new oo,zt=new G;class Nn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uE(e)?J_:Z_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Sn.min,ua.min),Sn.expandByPoint(zt),zt.addVectors(Sn.max,ua.max),Sn.expandByPoint(zt)):(Sn.expandByPoint(ua.min),Sn.expandByPoint(ua.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),zt.add(os)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new G,l[x]=new G;const c=new G,h=new G,f=new G,u=new Xe,p=new Xe,g=new Xe,E=new G,m=new G;function d(x,A,L){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,L),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(E),o[A].add(E),o[L].add(E),l[x].add(m),l[A].add(m),l[L].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,A=_.length;x<A;++x){const L=_[x],D=L.start,z=L.count;for(let q=D,k=D+z;q<k;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new G,y=new G,T=new G,b=new G;function w(x){T.fromBufferAttribute(r,x),b.copy(T);const A=o[x];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(b,A);const D=y.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,D)}for(let x=0,A=_.length;x<A;++x){const L=_[x],D=L.start,z=L.count;for(let q=D,k=D+z;q<k;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,h=new G,f=new G;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new mi(u,h,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new G,LE=new G,DE=new He;class Zi{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(LE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Eu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DE.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let IE=0;class Ks extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ra,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=R_,this.blendDst=P_,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=iu,this.stencilZFail=iu,this.stencilZPass=iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new G,wu=new G,Oo=new G,Bo=new G;class Q_{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Oo.copy(n).sub(e).normalize(),Bo.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Oo),o=Bo.dot(this.direction),l=-Bo.dot(Oo),c=Bo.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*l-o,u=a*o-l,g=s*h,f>=0)if(u>=-g)if(u<=g){const E=1/h;f*=E,u*=E,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wu).addScaledVector(Oo,u),p}intersectSphere(e,n){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,g=n.x-a.x,E=n.y-a.y,m=n.z-a.z,d=i.x-a.x,_=i.y-a.y,M=i.z-a.z,y=Math.abs(l),T=Math.abs(c),b=Math.abs(h);let w,x,A,L,D,z,q,k,W,te,K,V;if(y>=T&&y>=b?(A=l,z=f,W=g,V=d,l>=0?(w=c,x=h,L=u,D=p,q=E,k=m,te=_,K=M):(w=h,x=c,L=p,D=u,q=m,k=E,te=M,K=_)):T>=b?(A=c,z=u,W=E,V=_,c>=0?(w=h,x=l,L=p,D=f,q=m,k=g,te=M,K=d):(w=l,x=h,L=f,D=p,q=g,k=m,te=d,K=M)):(A=h,z=p,W=m,V=M,h>=0?(w=l,x=c,L=f,D=u,q=g,k=E,te=d,K=_):(w=c,x=l,L=u,D=f,q=E,k=g,te=_,K=d)),A===0)return null;const B=w/A,P=x/A,R=1/A,Q=L-B*z,re=D-P*z,pe=q-B*W,de=k-P*W,he=te-B*V,O=K-P*V,Y=he*de-O*pe,se=Q*O-re*he,Me=pe*re-de*Q;if(r){if(Y<0||se<0||Me<0)return null}else if((Y<0||se<0||Me<0)&&(Y>0||se>0||Me>0))return null;const le=Y+se+Me;if(le===0)return null;const Re=R*(Y*z+se*W+Me*V);return(le>0?Re<0:Re>0)?null:this.at(Re/le,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ex extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Um=new Tt,wr=new Q_,zo=new xc,Fm=new G,Ho=new G,Vo=new G,Go=new G,Tu=new G,Wo=new G,km=new G,jo=new G;class an extends ln{constructor(e=new Nn,n=new ex){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Tu.fromBufferAttribute(f,e),a?Wo.addScaledVector(Tu,h):Wo.addScaledVector(Tu.sub(n),h))}n.add(Wo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(zo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(zo,Fm)===null||wr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const m=u[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=M;y<T;y+=3){const b=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);r=Xo(this,d,e,i,c,h,f,b,w,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=g,d=E;m<d;m+=3){const _=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);r=Xo(this,a,e,i,c,h,f,_,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const m=u[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,T=M;y<T;y+=3){const b=y,w=y+1,x=y+2;r=Xo(this,d,e,i,c,h,f,b,w,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,d=E;m<d;m+=3){const _=m,M=m+1,y=m+2;r=Xo(this,a,e,i,c,h,f,_,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function UE(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Vr,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(jo);return c<n.near||c>n.far?null:{distance:c,point:jo.clone(),object:t}}function Xo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ho),t.getVertexPosition(l,Vo),t.getVertexPosition(c,Go);const h=UE(t,e,n,i,Ho,Vo,Go,km);if(h){const f=new G;Kn.getBarycoord(km,Ho,Vo,Go,f),r&&(h.uv=Kn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(h.uv1=Kn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,l,c,f,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new G,materialIndex:0};Kn.getNormal(Ho,Vo,Go,u.normal),h.face=u,h.barycoord=f}return h}class FE extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Wt,h=Wt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tr=new xc,kE=new Xe(.5,.5),$o=new G;class Ih{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],p=s[7],g=s[8],E=s[9],m=s[10],d=s[11],_=s[12],M=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-a,p-h,d-g,T-_).normalize(),r[1].setComponents(c+a,p+h,d+g,T+_).normalize(),r[2].setComponents(c+o,p+f,d+E,T+M).normalize(),r[3].setComponents(c-o,p-f,d-E,T-M).normalize(),i)r[4].setComponents(l,u,m,y).normalize(),r[5].setComponents(c-l,p-u,d-m,T-y).normalize();else if(r[4].setComponents(c-l,p-u,d-m,T-y).normalize(),n===di)r[5].setComponents(c+l,p+u,d+m,T+y).normalize();else if(n===Ja)r[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=kE.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tx extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new Tt,Ef=new Q_,Yo=new xc,qo=new G;class OE extends ln{constructor(e=new Nn,n=new tx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(r),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Om.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(Om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,E=p;g<E;g++){const m=c.getX(g);qo.fromBufferAttribute(f,m),Bm(qo,m,l,r,e,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=u,E=p;g<E;g++)qo.fromBufferAttribute(f,g),Bm(qo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bm(t,e,n,i,r,s,a){const o=Ef.distanceSqToPoint(t);if(o<n){const l=new G;Ef.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class nx extends en{constructor(e=[],n=Gr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BE extends en{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qa extends en{constructor(e,n,i=gi,r,s,a,o=Wt,l=Wt,c,h=ki,f=1){if(h!==ki&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:f};super(u,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class zE extends Qa{constructor(e,n=gi,i=Gr,r,s,a=Wt,o=Wt,l,c=ki){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ix extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2));function g(E,m,d,_,M,y,T,b,w,x,A){const L=y/w,D=T/x,z=y/2,q=T/2,k=b/2,W=w+1,te=x+1;let K=0,V=0;const B=new G;for(let P=0;P<te;P++){const R=P*D-q;for(let Q=0;Q<W;Q++){const re=Q*L-z;B[E]=re*_,B[m]=R*M,B[d]=k,c.push(B.x,B.y,B.z),B[E]=0,B[m]=0,B[d]=b>0?1:-1,h.push(B.x,B.y,B.z),f.push(Q/w),f.push(1-P/x),K+=1}}for(let P=0;P<x;P++)for(let R=0;R<w;R++){const Q=u+R+W*P,re=u+R+W*(P+1),pe=u+(R+1)+W*(P+1),de=u+(R+1)+W*P;l.push(Q,re,de),l.push(re,pe,de),V+=6}o.addGroup(p,V,A),p+=V,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yc extends Nn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new cn(s,3)),this.setAttribute("normal",new cn(s.slice(),3)),this.setAttribute("uv",new cn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new G,y=new G,T=new G;for(let b=0;b<n.length;b+=3)p(n[b+0],M),p(n[b+1],y),p(n[b+2],T),l(M,y,T,_)}function l(_,M,y,T){const b=T+1,w=[];for(let x=0;x<=b;x++){w[x]=[];const A=_.clone().lerp(y,x/b),L=M.clone().lerp(y,x/b),D=b-x;for(let z=0;z<=D;z++)z===0&&x===b?w[x][z]=A:w[x][z]=A.clone().lerp(L,z/D)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const L=Math.floor(A/2);A%2===0?(u(w[x][L+1]),u(w[x+1][L]),u(w[x][L])):(u(w[x][L+1]),u(w[x+1][L+1]),u(w[x+1][L]))}}function c(_){const M=new G;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(_),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){const _=new G;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const y=m(_)/2/Math.PI+.5,T=d(_)/Math.PI+.5;a.push(y,1-T)}g(),f()}function f(){for(let _=0;_<a.length;_+=6){const M=a[_+0],y=a[_+2],T=a[_+4],b=Math.max(M,y,T),w=Math.min(M,y,T);b>.9&&w<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function p(_,M){const y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){const _=new G,M=new G,y=new G,T=new G,b=new Xe,w=new Xe,x=new Xe;for(let A=0,L=0;A<s.length;A+=9,L+=6){_.set(s[A+0],s[A+1],s[A+2]),M.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),b.set(a[L+0],a[L+1]),w.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),T.copy(_).add(M).add(y).divideScalar(3);const D=m(T);E(b,L+0,_,D),E(w,L+2,M,D),E(x,L+4,y,D)}}function E(_,M,y,T){T<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.vertices,e.indices,e.radius,e.detail)}}class Uh extends yc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Uh(e.radius,e.detail)}}class Fh extends yc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Fh(e.radius,e.detail)}}class Sc extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=n/l,p=[],g=[],E=[],m=[];for(let d=0;d<h;d++){const _=d*u-a;for(let M=0;M<c;M++){const y=M*f-s;g.push(y,-_,0),E.push(0,0,1),m.push(M/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const M=_+c*d,y=_+c*(d+1),T=_+1+c*(d+1),b=_+1+c*d;p.push(M,y,b),p.push(y,T,b)}this.setIndex(p),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zl extends Nn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],h=[],f=[],u=new G,p=new G,g=new G;for(let E=0;E<=i;E++){const m=a+E/i*o;for(let d=0;d<=r;d++){const _=d/r*s;p.x=(e+n*Math.cos(m))*Math.cos(_),p.y=(e+n*Math.cos(m))*Math.sin(_),p.z=n*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),f.push(d/r),f.push(E/i)}}for(let E=1;E<=i;E++)for(let m=1;m<=r;m++){const d=(r+1)*E+m-1,_=(r+1)*(E-1)+m-1,M=(r+1)*(E-1)+m,y=(r+1)*E+m;l.push(d,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(h,3)),this.setAttribute("uv",new cn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zm(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function zm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function HE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const VE={clone:Vs,merge:rn};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=WE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jE extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _l extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class XE extends _l{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $E extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YE extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sx extends ln{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cu=new Tt,Hm=new G,Vm=new G;class qE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ih,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ja||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ko=new G,Zo=new qs,si=new G;class ax extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Zo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Zo,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ko,Zo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Zo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new G,Gm=new Xe,Wm=new Xe;class wn extends ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mf*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class KE extends qE{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class bu extends sx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new KE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class ox extends ax{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ZE extends sx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ls=-90,cs=1;class JE extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(ls,cs,e,n);r.layers=this.layers,this.add(r);const s=new wn(ls,cs,e,n);s.layers=this.layers,this.add(s);const a=new wn(ls,cs,e,n);a.layers=this.layers,this.add(a);const o=new wn(ls,cs,e,n);o.layers=this.layers,this.add(o);const l=new wn(ls,cs,e,n);l.layers=this.layers,this.add(l);const c=new wn(ls,cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class QE extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ew{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Vh=class Vh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Vh.prototype.isMatrix2=!0;let jm=Vh;function Xm(t,e,n,i){const r=tw(i);switch(n){case W_:return t*e;case X_:return t*e/r.components*r.byteLength;case Ah:return t*e/r.components*r.byteLength;case Wr:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case j_:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case Ph:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:case $d:return Math.max(t,16)*Math.max(e,8)/4;case Wd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case qd:case Zd:case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kd:case Xl:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mf:case gf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _f:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $l:case yf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tw(t){switch(t){case Tn:case z_:return{byteLength:1,components:1};case Ka:case H_:case vi:return{byteLength:2,components:1};case Ch:case bh:return{byteLength:2,components:4};case gi:case Th:case ui:return{byteLength:4,components:1};case V_:case G_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nw(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],E=f[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,f[u]=E)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const E=f[p];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var iw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ow=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ew=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ww=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Aw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ww=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$w=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,aT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$T=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_C=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:iw,alphahash_pars_fragment:rw,alphamap_fragment:sw,alphamap_pars_fragment:aw,alphatest_fragment:ow,alphatest_pars_fragment:lw,aomap_fragment:cw,aomap_pars_fragment:uw,batching_pars_vertex:dw,batching_vertex:fw,begin_vertex:hw,beginnormal_vertex:pw,bsdfs:mw,iridescence_fragment:gw,bumpmap_pars_fragment:vw,clipping_planes_fragment:_w,clipping_planes_pars_fragment:xw,clipping_planes_pars_vertex:yw,clipping_planes_vertex:Sw,color_fragment:Mw,color_pars_fragment:Ew,color_pars_vertex:ww,color_vertex:Tw,common:Cw,cube_uv_reflection_fragment:bw,defaultnormal_vertex:Aw,displacementmap_pars_vertex:Rw,displacementmap_vertex:Pw,emissivemap_fragment:Nw,emissivemap_pars_fragment:Lw,colorspace_fragment:Dw,colorspace_pars_fragment:Iw,envmap_fragment:Uw,envmap_common_pars_fragment:Fw,envmap_pars_fragment:kw,envmap_pars_vertex:Ow,envmap_physical_pars_fragment:qw,envmap_vertex:Bw,fog_vertex:zw,fog_pars_vertex:Hw,fog_fragment:Vw,fog_pars_fragment:Gw,gradientmap_pars_fragment:Ww,lightmap_pars_fragment:jw,lights_lambert_fragment:Xw,lights_lambert_pars_fragment:$w,lights_pars_begin:Yw,lights_toon_fragment:Kw,lights_toon_pars_fragment:Zw,lights_phong_fragment:Jw,lights_phong_pars_fragment:Qw,lights_physical_fragment:eT,lights_physical_pars_fragment:tT,lights_fragment_begin:nT,lights_fragment_maps:iT,lights_fragment_end:rT,lightprobes_pars_fragment:sT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:dT,map_particle_fragment:fT,map_particle_pars_fragment:hT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:vT,morphnormal_vertex:_T,morphtarget_pars_vertex:xT,morphtarget_vertex:yT,normal_fragment_begin:ST,normal_fragment_maps:MT,normal_pars_fragment:ET,normal_pars_vertex:wT,normal_vertex:TT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:AT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:PT,opaque_fragment:NT,packing:LT,premultiplied_alpha_fragment:DT,project_vertex:IT,dithering_fragment:UT,dithering_pars_fragment:FT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:OT,shadowmap_pars_fragment:BT,shadowmap_pars_vertex:zT,shadowmap_vertex:HT,shadowmask_pars_fragment:VT,skinbase_vertex:GT,skinning_pars_vertex:WT,skinning_vertex:jT,skinnormal_vertex:XT,specularmap_fragment:$T,specularmap_pars_fragment:YT,tonemapping_fragment:qT,tonemapping_pars_fragment:KT,transmission_fragment:ZT,transmission_pars_fragment:JT,uv_pars_fragment:QT,uv_pars_vertex:eC,uv_vertex:tC,worldpos_vertex:nC,background_vert:iC,background_frag:rC,backgroundCube_vert:sC,backgroundCube_frag:aC,cube_vert:oC,cube_frag:lC,depth_vert:cC,depth_frag:uC,distance_vert:dC,distance_frag:fC,equirect_vert:hC,equirect_frag:pC,linedashed_vert:mC,linedashed_frag:gC,meshbasic_vert:vC,meshbasic_frag:_C,meshlambert_vert:xC,meshlambert_frag:yC,meshmatcap_vert:SC,meshmatcap_frag:MC,meshnormal_vert:EC,meshnormal_frag:wC,meshphong_vert:TC,meshphong_frag:CC,meshphysical_vert:bC,meshphysical_frag:AC,meshtoon_vert:RC,meshtoon_frag:PC,points_vert:NC,points_frag:LC,shadow_vert:DC,shadow_frag:IC,sprite_vert:UC,sprite_frag:FC},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},li={basic:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:rn([ye.points,ye.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:rn([ye.common,ye.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:rn([ye.sprite,ye.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:rn([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:rn([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};li.physical={uniforms:rn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Jo={r:0,b:0,g:0},kC=new Tt,cx=new He;cx.set(-1,0,0,0,1,0,0,0,1);function OC(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1;const y=p(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(_,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===_c)?(c===void 0&&(c=new an(new lo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Vs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kC.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cx),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,(h!==y||f!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new an(new Sc(2,2),new _i({name:"BackgroundMaterial",uniforms:Vs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Jo,rx(t)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:E,dispose:d}}function BC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(D,z,q,k,W){let te=!1;const K=f(D,k,q,z);s!==K&&(s=K,c(s.object)),te=p(D,k,q,W),te&&g(D,k,q,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(D,z,q,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function f(D,z,q,k){const W=k.wireframe===!0;let te=i[z.id];te===void 0&&(te={},i[z.id]=te);const K=D.isInstancedMesh===!0?D.id:0;let V=te[K];V===void 0&&(V={},te[K]=V);let B=V[q.id];B===void 0&&(B={},V[q.id]=B);let P=B[W];return P===void 0&&(P=u(l()),B[W]=P),P}function u(D){const z=[],q=[],k=[];for(let W=0;W<n;W++)z[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:D,attributes:{},index:null}}function p(D,z,q,k){const W=s.attributes,te=z.attributes;let K=0;const V=q.getAttributes();for(const B in V)if(V[B].location>=0){const R=W[B];let Q=te[B];if(Q===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),R===void 0||R.attribute!==Q||Q&&R.data!==Q.data)return!0;K++}return s.attributesNum!==K||s.index!==k}function g(D,z,q,k){const W={},te=z.attributes;let K=0;const V=q.getAttributes();for(const B in V)if(V[B].location>=0){let R=te[B];R===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(R=D.instanceColor));const Q={};Q.attribute=R,R&&R.data&&(Q.data=R.data),W[B]=Q,K++}s.attributes=W,s.attributesNum=K,s.index=k}function E(){const D=s.newAttributes;for(let z=0,q=D.length;z<q;z++)D[z]=0}function m(D){d(D,0)}function d(D,z){const q=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;q[D]=1,k[D]===0&&(t.enableVertexAttribArray(D),k[D]=1),W[D]!==z&&(t.vertexAttribDivisor(D,z),W[D]=z)}function _(){const D=s.newAttributes,z=s.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==D[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function M(D,z,q,k,W,te,K){K===!0?t.vertexAttribIPointer(D,z,q,W,te):t.vertexAttribPointer(D,z,q,k,W,te)}function y(D,z,q,k){E();const W=k.attributes,te=q.getAttributes(),K=z.defaultAttributeValues;for(const V in te){const B=te[V];if(B.location>=0){let P=W[V];if(P===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){const R=P.normalized,Q=P.itemSize,re=e.get(P);if(re===void 0)continue;const pe=re.buffer,de=re.type,he=re.bytesPerElement,O=de===t.INT||de===t.UNSIGNED_INT||P.gpuType===Th;if(P.isInterleavedBufferAttribute){const Y=P.data,se=Y.stride,Me=P.offset;if(Y.isInstancedInterleavedBuffer){for(let le=0;le<B.locationSize;le++)d(B.location+le,Y.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let le=0;le<B.locationSize;le++)m(B.location+le);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let le=0;le<B.locationSize;le++)M(B.location+le,Q/B.locationSize,de,R,se*he,(Me+Q/B.locationSize*le)*he,O)}else{if(P.isInstancedBufferAttribute){for(let Y=0;Y<B.locationSize;Y++)d(B.location+Y,P.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Y=0;Y<B.locationSize;Y++)M(B.location+Y,Q/B.locationSize,de,R,Q*he,Q/B.locationSize*Y*he,O)}}else if(K!==void 0){const R=K[V];if(R!==void 0)switch(R.length){case 2:t.vertexAttrib2fv(B.location,R);break;case 3:t.vertexAttrib3fv(B.location,R);break;case 4:t.vertexAttrib4fv(B.location,R);break;default:t.vertexAttrib1fv(B.location,R)}}}}_()}function T(){A();for(const D in i){const z=i[D];for(const q in z){const k=z[q];for(const W in k){const te=k[W];for(const K in te)h(te[K].object),delete te[K];delete k[W]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;const z=i[D.id];for(const q in z){const k=z[q];for(const W in k){const te=k[W];for(const K in te)h(te[K].object),delete te[K];delete k[W]}}delete i[D.id]}function w(D){for(const z in i){const q=i[z];for(const k in q){const W=q[k];if(W[D.id]===void 0)continue;const te=W[D.id];for(const K in te)h(te[K].object),delete te[K];delete W[D.id]}}}function x(D){for(const z in i){const q=i[z],k=D.isInstancedMesh===!0?D.id:0,W=q[k];if(W!==void 0){for(const te in W){const K=W[te];for(const V in K)h(K[V].object),delete K[V];delete W[te]}delete q[k],Object.keys(q).length===0&&delete i[z]}}}function A(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:E,enableAttribute:m,disableUnusedAttributes:_}}function zC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function HC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Tn&&w!==ui&&!x&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:b}}function VC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Zi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,E=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:i,M=_*4;let y=d.clippingState||null;l.value=y,y=h(g,u,M,p);for(let T=0;T!==M;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const E=f!==null?f.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const d=p+E*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==E;++M,y+=4)a.copy(f[M]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const ws=4,GC=6,WC=20,jC=256,da=new ox,$m=new qe;let Au=null,Ru=0,Pu=0,Nu=!1;const XC=new G,Cr=new G;class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=XC}=s;Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,Ru,Pu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:vi,format:Zn,colorSpace:Yl,depthBuffer:!1},r=qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$C(s)),this._blurMaterial=qC(s,e,n),this._ggxMaterial=YC(s,e,n)}return r}_compileMaterial(e){const n=new an(new Nn,e);this._renderer.compile(n,da)}_sceneToCubeUV(e,n,i,r,s){const l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor($m),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new lo,new ex({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let d=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,d=!0):(m.color.copy($m),d=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;us(r,y*T,M>2?T:0,T,T),f.setRenderTarget(r),d&&f.render(E,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gr||e.mapping===Hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:g}=this,E=this._sizeLods[i],m=3*E*(i>g-ws?i-g+ws:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,us(s,m,d,3*E,2*E),r.setRenderTarget(s),r.render(o,da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,us(e,m,d,3*E,2*E),r.setRenderTarget(e),r.render(o,da)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-ws?r-this._lodMax+ws:0),u=4*(this._cubeSize-h);us(n,f,u,3*h,2*h),a.setRenderTarget(n),a.render(l,da)}}function $C(t){const e=[],n=[];let i=t;const r=t-ws+1+GC;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,g=new Float32Array(p*u*f),E=new Float32Array(p*u*f);for(let d=0;d<f;d++){const _=d%3*2/3-1,M=d>2?0:-1,y=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(y,p*u*d);for(let T=0;T<u;T++){const b=h[T*2]*2-1,w=h[T*2+1]*2-1;d===0?Cr.set(1,w,b):d===1?Cr.set(-b,1,-w):d===2?Cr.set(-b,w,1):d===3?Cr.set(-1,w,-b):d===4?Cr.set(-b,-1,w):Cr.set(b,w,-1),Cr.toArray(E,(d*u+T)*p)}}const m=new Nn;m.setAttribute("position",new mi(g,p)),m.setAttribute("outputDirection",new mi(E,p)),n.push(new an(m,null)),i>ws&&i--}return{lodMeshes:n,sizeLods:e}}function qm(t,e,n){const i=new ei(t,e,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function us(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function YC(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function qC(t,e,n){return new _i({name:"SphericalGaussianBlur",defines:{SAMPLES:WC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Km(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ux extends ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lo(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Ni});s.uniforms.tEquirect.value=n;const a=new an(r,s),o=n.minFilter;return n.minFilter===Dr&&(n.minFilter=Qt),new JE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function KC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===eu||p===tu)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const E=new ux(g.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,g=p===eu||p===tu,E=p===Gr||p===Hs;if(g||E){let m=n.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Ym(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return g&&_&&_.height>0||E&&_&&l(_)?(i===null&&(i=new Ym(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===eu?u.mapping=Gr:p===tu&&(u.mapping=Hs),u}function l(u){let p=0;const g=6;for(let E=0;E<g;E++)u[E]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function ZC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ns("WebGLRenderer: "+i+" extension not supported."),r}}}function JC(t,e,n,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,g=f.attributes.position;let E=0;if(g===void 0)return;if(p!==null){const _=p.array;E=p.version;for(let M=0,y=_.length;M<y;M+=3){const T=_[M+0],b=_[M+1],w=_[M+2];u.push(T,b,b,w,w,T)}}else{const _=g.array;E=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){const T=M+0,b=M+1,w=M+2;u.push(T,b,b,w,w,T)}}const m=new(g.count>=65535?J_:Z_)(u,1);m.version=E;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function QC(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){t.drawElements(i,u,s,f*a),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,f*a,p),n.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let E=0;for(let m=0;m<p;m++)E+=u[m];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function eb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tb(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),E===!0&&(y=2),m===!0&&(y=3);let T=o.attributes.position.count*y,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*b*4*f),x=new Y_(w,T,b,f);x.type=ui,x.needsUpdate=!0;const A=y*4;for(let D=0;D<f;D++){const z=d[D],q=_[D],k=M[D],W=T*b*4*D;for(let te=0;te<z.count;te++){const K=te*A;g===!0&&(r.fromBufferAttribute(z,te),w[W+K+0]=r.x,w[W+K+1]=r.y,w[W+K+2]=r.z,w[W+K+3]=0),E===!0&&(r.fromBufferAttribute(q,te),w[W+K+4]=r.x,w[W+K+5]=r.y,w[W+K+6]=r.z,w[W+K+7]=0),m===!0&&(r.fromBufferAttribute(k,te),w[W+K+8]=r.x,w[W+K+9]=r.y,w[W+K+10]=r.z,w[W+K+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new Xe(T,b)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const E=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function nb(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const ib={[L_]:"LINEAR_TONE_MAPPING",[D_]:"REINHARD_TONE_MAPPING",[I_]:"CINEON_TONE_MAPPING",[U_]:"ACES_FILMIC_TONE_MAPPING",[k_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[F_]:"CUSTOM_TONE_MAPPING"};function rb(t,e,n,i,r,s){const a=new ei(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Nn;c.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new cn([0,2,0,0,2,0],2));const h=new jE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new an(c,h),u=new ox(-1,1,1,-1,0,1);let p=null,g=null,E=!1,m,d=null,_=[],M=!1;this.setSize=function(y,T){a.setSize(y,T),o!==null&&o.setSize(y,T),l!==null&&l.setSize(y,T);for(let b=0;b<_.length;b++){const w=_[b];w.setSize&&w.setSize(y,T)}},this.setEffects=function(y){_=y,M=_.length>0&&_[0].isRenderPass===!0;const T=a.width,b=a.height;_.length>0&&o===null&&(o=new ei(T,b,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new ei(T,b,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<_.length;w++){const x=_[w];x.setSize&&x.setSize(T,b)}},this.begin=function(y,T){if(E||y.toneMapping===pi&&_.length===0)return!1;if(d=T,T!==null){const b=T.width,w=T.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return M===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=pi,!0},this.hasRenderPass=function(){return M},this.end=function(y,T){y.toneMapping=m,E=!0;let b=a,w=o;for(let x=0;x<_.length;x++){const A=_[x];A.enabled!==!1&&(A.render(y,w,b,T),A.needsSwap!==!1&&(b=w,w=w===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,h.defines={},Je.getTransfer(p)===ot&&(h.defines.SRGB_TRANSFER="");const x=ib[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(d),y.render(f,u),d=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const dx=new en,wf=new Qa(1,1),fx=new Y_,hx=new yE,px=new nx,Jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jm[r];if(s===void 0&&(s=new Float32Array(r),Jm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;ng.set(i),t.uniformMatrix2fv(this.addr,!1,ng),Bt(n,i)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;tg.set(i),t.uniformMatrix3fv(this.addr,!1,tg),Bt(n,i)}}function db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;eg.set(i),t.uniformMatrix4fv(this.addr,!1,eg),Bt(n,i)}}function fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wf.compareFunction=n.isReversedDepthBuffer()?Lh:Nh,s=wf):s=dx,n.setTexture2D(e||s,r)}function Sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hx,r)}function Mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||px,r)}function Eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fx,r)}function wb(t){switch(t){case 5126:return sb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return vb;case 36295:return _b;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Tb(t,e){t.uniform1fv(this.addr,e)}function Cb(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function bb(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function Ab(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function Rb(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Pb(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Nb(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Lb(t,e){t.uniform1iv(this.addr,e)}function Db(t,e){t.uniform2iv(this.addr,e)}function Ib(t,e){t.uniform3iv(this.addr,e)}function Ub(t,e){t.uniform4iv(this.addr,e)}function Fb(t,e){t.uniform1uiv(this.addr,e)}function kb(t,e){t.uniform2uiv(this.addr,e)}function Ob(t,e){t.uniform3uiv(this.addr,e)}function Bb(t,e){t.uniform4uiv(this.addr,e)}function zb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=wf:a=dx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Hb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||hx,s[a])}function Vb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||px,s[a])}function Gb(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||fx,s[a])}function Wb(t){switch(t){case 5126:return Tb;case 35664:return Cb;case 35665:return bb;case 35666:return Ab;case 35674:return Rb;case 35675:return Pb;case 35676:return Nb;case 5124:case 35670:return Lb;case 35667:case 35671:return Db;case 35668:case 35672:return Ib;case 35669:case 35673:return Ub;case 5125:return Fb;case 36294:return kb;case 36295:return Ob;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}class jb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wb(n.type)}}class Xb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Wb(n.type)}}class $b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function ig(t,e){t.seq.push(e),t.map[e.id]=e}function Yb(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),a=Lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ig(n,c===void 0?new jb(o,t,e):new Xb(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new $b(o),ig(n,f)),n=f}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Yb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function rg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qb=37297;let Kb=0;function Zb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const sg=new He;function Jb(t){Je._getMatrix(sg,Je.workingColorSpace,t);const e=`mat3( ${sg.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case ql:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Zb(t.getShaderSource(e),o)}else return s}function Qb(t,e){const n=Jb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const eA={[L_]:"Linear",[D_]:"Reinhard",[I_]:"Cineon",[U_]:"ACESFilmic",[k_]:"AgX",[O_]:"Neutral",[F_]:"Custom"};function tA(t,e){const n=eA[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qo=new G;function nA(){Je.getLuminanceCoefficients(Qo);const t=Qo.x.toFixed(4),e=Qo.y.toFixed(4),n=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function rA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function og(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(t){return t.replace(aA,lA)}const oA=new Map;function lA(t,e){let n=We[e];if(n===void 0){const i=oA.get(e);if(i!==void 0)n=We[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tf(n)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(t){return t.replace(cA,uA)}function uA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ug(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dA={[hl]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function fA(t){return dA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hA={[Gr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function pA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":hA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[Hs]:"ENVMAP_MODE_REFRACTION"};function gA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vA={[N_]:"ENVMAP_BLENDING_MULTIPLY",[Z1]:"ENVMAP_BLENDING_MIX",[J1]:"ENVMAP_BLENDING_ADD"};function _A(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vA[t.combine]||"ENVMAP_BLENDING_NONE"}function xA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=fA(n),c=pA(n),h=gA(n),f=_A(n),u=xA(n),p=iA(n),g=rA(s),E=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xa).join(`
`),d.length>0&&(d+=`
`)):(m=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),d=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?We.tonemapping_pars_fragment:"",n.toneMapping!==pi?tA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Qb("linearToOutputTexel",n.outputColorSpace),nA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=Tf(a),a=og(a,n),a=lg(a,n),o=Tf(o),o=og(o,n),o=lg(o,n),a=cg(a),o=cg(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=_+m+a,y=_+d+o,T=rg(r,r.VERTEX_SHADER,M),b=rg(r,r.FRAGMENT_SHADER,y);r.attachShader(E,T),r.attachShader(E,b),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function w(D){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",q=r.getShaderInfoLog(T)||"",k=r.getShaderInfoLog(b)||"",W=z.trim(),te=q.trim(),K=k.trim();let V=!0,B=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,b);else{const P=ag(r,T,"vertex"),R=ag(r,b,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+P+`
`+R)}else W!==""?ze("WebGLProgram: Program Info Log:",W):(te===""||K==="")&&(B=!1);B&&(D.diagnostics={runnable:V,programLog:W,vertexShader:{log:te,prefix:m},fragmentShader:{log:K,prefix:d}})}r.deleteShader(T),r.deleteShader(b),x=new xl(r,E),A=sA(r,E)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,qb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=b,this}let SA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EA(e),n.set(e,i)),i}}class EA{constructor(e){this.id=SA++,this.code=e,this.usedTimes=0}}function wA(t){return t===Wr||t===Xl||t===$l}function TA(t,e,n,i,r,s){const a=new q_,o=new MA,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,L,D,z,q){const k=D.fog,W=z.geometry,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||te,K),B=V&&V.mapping===_c?V.image.height:null,P=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const R=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=R!==void 0?R.length:0;let re=0;W.morphAttributes.position!==void 0&&(re=1),W.morphAttributes.normal!==void 0&&(re=2),W.morphAttributes.color!==void 0&&(re=3);let pe,de,he,O;if(P){const ft=li[P];pe=ft.vertexShader,de=ft.fragmentShader}else{pe=x.vertexShader,de=x.fragmentShader;const ft=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,ft,st),he=ft.id,O=st.id}const Y=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Me=z.isInstancedMesh===!0,le=z.isBatchedMesh===!0,Re=!!x.map,$e=!!x.matcap,we=!!V,Be=!!x.aoMap,je=!!x.lightMap,Oe=!!x.bumpMap&&x.wireframe===!1,Qe=!!x.normalMap,dt=!!x.displacementMap,mt=!!x.emissiveMap,gt=!!x.metalnessMap,bt=!!x.roughnessMap,F=x.anisotropy>0,Ut=x.clearcoat>0,it=x.dispersion>0,N=x.retroreflectivity>0,S=x.iridescence>0,H=x.sheen>0,$=x.transmission>0,J=F&&!!x.anisotropyMap,ue=Ut&&!!x.clearcoatMap,fe=Ut&&!!x.clearcoatNormalMap,ee=Ut&&!!x.clearcoatRoughnessMap,ie=S&&!!x.iridescenceMap,me=S&&!!x.iridescenceThicknessMap,Ie=H&&!!x.sheenColorMap,xe=H&&!!x.sheenRoughnessMap,ge=!!x.specularMap,Ue=!!x.specularColorMap,ke=!!x.specularIntensityMap,Ve=$&&!!x.transmissionMap,U=$&&!!x.thicknessMap,ve=!!x.gradientMap,ne=!!x.alphaMap,_e=x.alphaTest>0,Te=!!x.alphaHash,oe=!!x.extensions;let Fe=pi;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const Le={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:de,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:le,batchingColor:le&&z._colorsTexture!==null,instancing:Me,instancingColor:Me&&z.instanceColor!==null,instancingMorph:Me&&z.morphTexture!==null,outputColorSpace:Y===null?t.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Re,matcap:$e,envMap:we,envMapMode:we&&V.mapping,envMapCubeUVHeight:B,aoMap:Be,lightMap:je,bumpMap:Oe,normalMap:Qe,displacementMap:dt,emissiveMap:mt,normalMapObjectSpace:Qe&&x.normalMapType===tE,normalMapTangentSpace:Qe&&x.normalMapType===Sf,packedNormalMap:Qe&&x.normalMapType===Sf&&wA(x.normalMap.format),metalnessMap:gt,roughnessMap:bt,anisotropy:F,anisotropyMap:J,clearcoat:Ut,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:it,retroreflection:N,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:me,sheen:H,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:ge,specularColorMap:Ue,specularIntensityMap:ke,transmission:$,transmissionMap:Ve,thicknessMap:U,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Ra&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:_e,alphaHash:Te,combine:x.combine,mapUv:Re&&g(x.map.channel),aoMapUv:Be&&g(x.aoMap.channel),lightMapUv:je&&g(x.lightMap.channel),bumpMapUv:Oe&&g(x.bumpMap.channel),normalMapUv:Qe&&g(x.normalMap.channel),displacementMapUv:dt&&g(x.displacementMap.channel),emissiveMapUv:mt&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:bt&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ue&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(x.sheenRoughnessMap.channel),specularMapUv:ge&&g(x.specularMap.channel),specularColorMapUv:Ue&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:Ve&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:ne&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Qe||F),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Re||ne),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Qe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Re&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:mt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(d(A,x),_(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function _(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){const A=p[x.type];let L;if(A){const D=li[A];L=VE.clone(D.uniforms)}else L=x.uniforms;return L}function y(x,A){let L=h.get(A);return L!==void 0?++L.usedTimes:(L=new yA(t,A,x,r),c.push(L),h.set(A,L)),L}function T(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:w}}function CA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function dg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,E,m,d){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:d},t[e]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=g,_.materialVariant=a(u),_.groupOrder=E,_.renderOrder=u.renderOrder,_.z=m,_.group=d),e++,_}function l(u,p,g,E,m,d,_){_.reversedDepth===!0&&(m=-m);const M=o(u,p,g,E,m,d);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(u,p,g,E,m,d){const _=o(u,p,g,E,m,d);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function h(u,p){n.length>1&&n.sort(u||bA),i.length>1&&i.sort(p||dg),r.length>1&&r.sort(p||dg)}function f(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function AA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new fg,t.set(i,[a])):r>=s.length?(a=new fg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function RA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new qe};break;case"SpotLight":n={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NA=0;function LA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DA(t){const e=new RA,n=PA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Tt,a=new Tt;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,g=0,E=0,m=0,d=0,_=0,M=0,y=0,T=0,b=0,w=0,x=0,A=0,L=0;c.sort(LA);for(let z=0,q=c.length;z<q;z++){const k=c[z],W=k.color,te=k.intensity,K=k.distance;let V=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Wr?V=k.shadow.map.texture:V=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=W.r*te,f+=W.g*te,u+=W.b*te;else if(k.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(k.sh.coefficients[B],te);L++}else if(k.isSunLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const P=k.shadow,R=n.get(k);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[g]=R,i.sunShadowMap[g]=V;const Q=P.getViewportCount();for(let re=0;re<Q;re++)i.sunShadowMatrix[E+re]=P.getMatrix(re),i.sunShadowCascade[E+re]=P._cascadeData[re];E+=Q,g++}i.sun[p]=B,p++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const P=k.shadow,R=n.get(k);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.directionalShadow[m]=R,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=k.shadow.matrix,T++}i.directional[m]=B,m++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(W).multiplyScalar(te),B.distance=K,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,i.spot[_]=B;const P=k.shadow;if(k.map&&(i.spotLightMap[x]=k.map,x++,P.updateMatrices(k),k.castShadow&&A++),i.spotLightMatrix[_]=P.matrix,k.castShadow){const R=n.get(k);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.spotShadow[_]=R,i.spotShadowMap[_]=V,w++}_++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(W).multiplyScalar(te),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),i.rectArea[M]=B,M++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const P=k.shadow,R=n.get(k);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,R.shadowCameraNear=P.camera.near,R.shadowCameraFar=P.camera.far,i.pointShadow[d]=R,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=k.shadow.matrix,b++}i.point[d]=B,d++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(te),B.groundColor.copy(k.groundColor).multiplyScalar(te),i.hemi[y]=B,y++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==M||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==x||D.numLightProbes!==L)&&(i.sun.length=p,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,D.sunLength=p,D.directionalLength=m,D.pointLength=d,D.spotLength=_,D.rectAreaLength=M,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=x,D.numLightProbes=L,i.version=NA++)}function l(c,h){let f=0,u=0,p=0,g=0,E=0,m=0;const d=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const y=c[_];if(y.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),f++}else if(y.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),u++}else if(y.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const T=i.rectArea[E];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(y.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function hg(t){const e=new DA(t),n=[],i=[],r=[];function s(u){f.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function IA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hg(t),e.set(r,[o])):s>=a.length?(o=new hg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kA=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],OA=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],pg=new Tt,fa=new G,Du=new G;function BA(t,e,n){let i=new Ih;const r=new Xe,s=new Xe,a=new Et,o=new $E,l=new YE,c={},h=n.maxTextureSize,f={[Vr]:xn,[xn]:Vr,[Ci]:Ci},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:UA,fragmentShader:FA}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new an(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===L1&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hl);const A=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ni),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=d!==this.type;q&&w.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(W=>W.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,W=b.length;k<W;k++){const te=b[k],K=te.shadow;if(K===void 0){ze("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const V=K.getFrameExtents();r.multiply(V),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,K.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=B,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===va){if(te.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ei(r.x,r.y,{format:Wr,type:vi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Qa(r.x,r.y,ui),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=ki,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Wt,K.map.depthTexture.magFilter=Wt}else te.isPointLight?(K.map=new ux(r.x),K.map.depthTexture=new zE(r.x,gi)):(K.map=new ei(r.x,r.y),K.map.depthTexture=new Qa(r.x,r.y,gi)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=ki,this.type===hl?(K.map.depthTexture.compareFunction=B?Lh:Nh,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Wt,K.map.depthTexture.magFilter=Wt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const P=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();te.isPointLight!==!0&&K.updateMatrices(te,x);for(let R=0;R<P;R++){const Q=K.getCamera(R);if(te.isPointLight){const re=K.camera,pe=K.matrix,de=te.distance||re.far;de!==re.far&&(re.far=de,re.updateProjectionMatrix()),fa.setFromMatrixPosition(te.matrixWorld),re.position.copy(fa),Du.copy(re.position),Du.add(kA[R]),re.up.copy(OA[R]),re.lookAt(Du),re.updateMatrixWorld(),pe.makeTranslation(-fa.x,-fa.y,-fa.z),pg.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(pg,re.coordinateSystem,re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,R),t.clear();else{R===0&&(t.setRenderTarget(K.map),t.clear());const re=K.getViewport(R);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),z.viewport(a)}i=K.getFrustum(R),y(w,x,Q,te,this.type)}K.isPointLightShadow!==!0&&this.type===va&&_(K,x),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(A,L,D)};function _(b,w){const x=e.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new ei(r.x,r.y,{format:Wr,type:vi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,x,u,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,x,p,E,null)}function M(b,w,x,A){let L=null;const D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)L=D;else if(L=x.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const z=L.uuid,q=w.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let W=k[q];W===void 0&&(W=L.clone(),k[q]=W,w.addEventListener("dispose",T)),L=W}if(L.visible=w.visible,L.wireframe=w.wireframe,A===va?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:f[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=t.properties.get(L);z.light=x}return L}function y(b,w,x,A,L){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===va)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const q=e.update(b),k=b.material;if(Array.isArray(k)){const W=q.groups;for(let te=0,K=W.length;te<K;te++){const V=W[te],B=k[V.materialIndex];if(B&&B.visible){const P=M(b,B,A,L);b.onBeforeShadow(t,b,w,x,q,P,V),t.renderBufferDirect(x,null,q,P,b,V),b.onAfterShadow(t,b,w,x,q,P,V)}}}else if(k.visible){const W=M(b,k,A,L);b.onBeforeShadow(t,b,w,x,q,W,null),t.renderBufferDirect(x,null,q,W,b,null),b.onAfterShadow(t,b,w,x,q,W,null)}}const z=b.children;for(let q=0,k=z.length;q<k;q++)y(z[q],w,x,A,L)}function T(b){b.target.removeEventListener("dispose",T);for(const x in c){const A=c[x],L=b.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function zA(t,e){function n(){let U=!1;const ve=new Et;let ne=null;const _e=new Et(0,0,0,0);return{setMask:function(Te){ne!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){U=Te},setClear:function(Te,oe,Fe,Le,ft){ft===!0&&(Te*=Le,oe*=Le,Fe*=Le),ve.set(Te,oe,Fe,Le),_e.equals(ve)===!1&&(t.clearColor(Te,oe,Fe,Le),_e.copy(ve))},reset:function(){U=!1,ne=null,_e.set(-1,0,0,0)}}}function i(){let U=!1,ve=!1,ne=null,_e=null,Te=null;return{setReversed:function(oe){if(ve!==oe){const Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ve=oe;const Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return ve},setTest:function(oe){oe?Y(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(oe){ne!==oe&&!U&&(t.depthMask(oe),ne=oe)},setFunc:function(oe){if(ve&&(oe=hE[oe]),_e!==oe){switch(oe){case Ud:t.depthFunc(t.NEVER);break;case Fd:t.depthFunc(t.ALWAYS);break;case kd:t.depthFunc(t.LESS);break;case qa:t.depthFunc(t.LEQUAL);break;case Od:t.depthFunc(t.EQUAL);break;case Bd:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Te!==oe&&(Te=oe,ve&&(oe=1-oe),t.clearDepth(oe))},reset:function(){U=!1,ne=null,_e=null,Te=null,ve=!1}}}function r(){let U=!1,ve=null,ne=null,_e=null,Te=null,oe=null,Fe=null,Le=null,ft=null;return{setTest:function(st){U||(st?Y(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(st){ve!==st&&!U&&(t.stencilMask(st),ve=st)},setFunc:function(st,Vn,ni){(ne!==st||_e!==Vn||Te!==ni)&&(t.stencilFunc(st,Vn,ni),ne=st,_e=Vn,Te=ni)},setOp:function(st,Vn,ni){(oe!==st||Fe!==Vn||Le!==ni)&&(t.stencilOp(st,Vn,ni),oe=st,Fe=Vn,Le=ni)},setLocked:function(st){U=st},setClear:function(st){ft!==st&&(t.clearStencil(st),ft=st)},reset:function(){U=!1,ve=null,ne=null,_e=null,Te=null,oe=null,Fe=null,Le=null,ft=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],E=null,m=!1,d=null,_=null,M=null,y=null,T=null,b=null,w=null,x=new qe(0,0,0),A=0,L=!1,D=null,z=null,q=null,k=null,W=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),K=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),K=V>=2);let P=null,R={};const Q=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),pe=new Et().fromArray(Q),de=new Et().fromArray(re);function he(U,ve,ne,_e){const Te=new Uint8Array(4),oe=t.createTexture();t.bindTexture(U,oe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<ne;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ve+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return oe}const O={};O[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(t.DEPTH_TEST),a.setFunc(qa),Oe(!1),Qe(_m),Y(t.CULL_FACE),Be(Ni);function Y(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function se(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Me(U,ve){return u[U]!==ve?(t.bindFramebuffer(U,ve),u[U]=ve,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ve),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function le(U,ve){let ne=g,_e=!1;if(U){ne=p.get(ve),ne===void 0&&(ne=[],p.set(ve,ne));const Te=U.textures;if(ne.length!==Te.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Fe=Te.length;oe<Fe;oe++)ne[oe]=t.COLOR_ATTACHMENT0+oe;ne.length=Te.length,_e=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ne)}function Re(U){return E!==U?(t.useProgram(U),E=U,!0):!1}const $e={[ds]:t.FUNC_ADD,[I1]:t.FUNC_SUBTRACT,[U1]:t.FUNC_REVERSE_SUBTRACT};$e[F1]=t.MIN,$e[k1]=t.MAX;const we={[O1]:t.ZERO,[B1]:t.ONE,[z1]:t.SRC_COLOR,[R_]:t.SRC_ALPHA,[X1]:t.SRC_ALPHA_SATURATE,[W1]:t.DST_COLOR,[V1]:t.DST_ALPHA,[H1]:t.ONE_MINUS_SRC_COLOR,[P_]:t.ONE_MINUS_SRC_ALPHA,[j1]:t.ONE_MINUS_DST_COLOR,[G1]:t.ONE_MINUS_DST_ALPHA,[$1]:t.CONSTANT_COLOR,[Y1]:t.ONE_MINUS_CONSTANT_COLOR,[q1]:t.CONSTANT_ALPHA,[K1]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(U,ve,ne,_e,Te,oe,Fe,Le,ft,st){if(U===Ni){m===!0&&(se(t.BLEND),m=!1);return}if(m===!1&&(Y(t.BLEND),m=!0),U!==D1){if(U!==d||st!==L){if((_!==ds||T!==ds)&&(t.blendEquation(t.FUNC_ADD),_=ds,T=ds),st)switch(U){case Ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ym:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Id:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case xm:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",U);break}M=null,y=null,b=null,w=null,x.set(0,0,0),A=0,d=U,L=st}return}Te=Te||ve,oe=oe||ne,Fe=Fe||_e,(ve!==_||Te!==T)&&(t.blendEquationSeparate($e[ve],$e[Te]),_=ve,T=Te),(ne!==M||_e!==y||oe!==b||Fe!==w)&&(t.blendFuncSeparate(we[ne],we[_e],we[oe],we[Fe]),M=ne,y=_e,b=oe,w=Fe),(Le.equals(x)===!1||ft!==A)&&(t.blendColor(Le.r,Le.g,Le.b,ft),x.copy(Le),A=ft),d=U,L=!1}function je(U,ve){U.side===Ci?se(t.CULL_FACE):Y(t.CULL_FACE);let ne=U.side===xn;ve&&(ne=!ne),Oe(ne),U.blending===Ra&&U.transparent===!1?Be(Ni):Be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const _e=U.stencilWrite;o.setTest(_e),_e&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Y(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){D!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),D=U)}function Qe(U){U!==P1?(Y(t.CULL_FACE),U!==z&&(U===_m?t.cullFace(t.BACK):U===N1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),z=U}function dt(U){U!==q&&(K&&t.lineWidth(U),q=U)}function mt(U,ve,ne){U?(Y(t.POLYGON_OFFSET_FILL),(k!==ve||W!==ne)&&(k=ve,W=ne,a.getReversed()&&(ve=-ve),t.polygonOffset(ve,ne))):se(t.POLYGON_OFFSET_FILL)}function gt(U){U?Y(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function bt(U){U===void 0&&(U=t.TEXTURE0+te-1),P!==U&&(t.activeTexture(U),P=U)}function F(U,ve,ne){ne===void 0&&(P===null?ne=t.TEXTURE0+te-1:ne=P);let _e=R[ne];_e===void 0&&(_e={type:void 0,texture:void 0},R[ne]=_e),(_e.type!==U||_e.texture!==ve)&&(P!==ne&&(t.activeTexture(ne),P=ne),t.bindTexture(U,ve||O[U]),_e.type=U,_e.texture=ve)}function Ut(){const U=R[P];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function S(){try{t.texSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ue(){try{t.texStorage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function fe(){try{t.texStorage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function ee(){try{t.texImage2D(...arguments)}catch(U){nt("WebGLState:",U)}}function ie(){try{t.texImage3D(...arguments)}catch(U){nt("WebGLState:",U)}}function me(U){return f[U]!==void 0?f[U]:t.getParameter(U)}function Ie(U,ve){f[U]!==ve&&(t.pixelStorei(U,ve),f[U]=ve)}function xe(U){pe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function ge(U){de.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function Ue(U,ve){let ne=c.get(ve);ne===void 0&&(ne=new WeakMap,c.set(ve,ne));let _e=ne.get(U);_e===void 0&&(_e=t.getUniformBlockIndex(ve,U.name),ne.set(U,_e))}function ke(U,ve){const _e=c.get(ve).get(U);l.get(ve)!==_e&&(t.uniformBlockBinding(ve,_e,U.__bindingPointIndex),l.set(ve,_e))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},f={},P=null,R={},u={},p=new WeakMap,g=[],E=null,m=!1,d=null,_=null,M=null,y=null,T=null,b=null,w=null,x=new qe(0,0,0),A=0,L=!1,D=null,z=null,q=null,k=null,W=null,pe.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:se,bindFramebuffer:Me,drawBuffers:le,useProgram:Re,setBlending:Be,setMaterial:je,setFlipSided:Oe,setCullFace:Qe,setLineWidth:dt,setPolygonOffset:mt,setScissorTest:gt,activeTexture:bt,bindTexture:F,unbindTexture:Ut,compressedTexImage2D:it,compressedTexImage3D:N,texImage2D:ee,texImage3D:ie,pixelStorei:Ie,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:ke,texStorage2D:ue,texStorage3D:fe,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:J,scissor:xe,viewport:ge,reset:Ve}}function HA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,S){return g?new OffscreenCanvas(N,S):Kl("canvas")}function m(N,S,H){let $=1;const J=it(N);if((J.width>H||J.height>H)&&($=H/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor($*J.width),fe=Math.floor($*J.height);u===void 0&&(u=E(ue,fe));const ee=S?E(ue,fe):u;return ee.width=ue,ee.height=fe,ee.getContext("2d").drawImage(N,0,0,ue,fe),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+fe+")."),ee}else return"data"in N&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function d(N){return N.generateMipmaps}function _(N){t.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(N,S,H,$,J,ue=!1){if(N!==null){if(t[N]!==void 0)return t[N];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe;$&&(fe=e.get("EXT_texture_norm16"),fe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8),H===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),H===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8),H===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),H===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),H===t.UNSIGNED_INT&&(ee=t.RGB32UI),H===t.BYTE&&(ee=t.RGB8I),H===t.SHORT&&(ee=t.RGB16I),H===t.INT&&(ee=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),H===t.UNSIGNED_INT&&(ee=t.RGBA32UI),H===t.BYTE&&(ee=t.RGBA8I),H===t.SHORT&&(ee=t.RGBA16I),H===t.INT&&(ee=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),H===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),S===t.RGBA){const ie=ue?ql:Je.getTransfer(J);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=ie===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),H===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(N,S){let H;return N?S===null||S===gi||S===Za?H=t.DEPTH24_STENCIL8:S===ui?H=t.DEPTH32F_STENCIL8:S===Ka&&(H=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===Za?H=t.DEPTH_COMPONENT24:S===ui?H=t.DEPTH_COMPONENT32F:S===Ka&&(H=t.DEPTH_COMPONENT16),H}function b(N,S){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Wt&&N.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function w(N){const S=N.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function x(N){const S=N.target;S.removeEventListener("dispose",x),D(S)}function A(N){const S=i.get(N);if(S.__webglInit===void 0)return;const H=N.source,$=p.get(H);if($){const J=$[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(N),Object.keys($).length===0&&p.delete(H)}i.remove(N)}function L(N){const S=i.get(N);t.deleteTexture(S.__webglTexture);const H=N.source,$=p.get(H);delete $[S.__cacheKey],a.memory.textures--}function D(N){const S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let J=0;J<S.__webglFramebuffer[$].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[$][J]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=N.textures;for(let $=0,J=H.length;$<J;$++){const ue=i.get(H[$]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(H[$])}i.remove(N)}let z=0;function q(){z=0}function k(){return z}function W(N){z=N}function te(){const N=z;return N>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,N}function K(N){const S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function V(N,S){const H=i.get(N);if(N.isVideoTexture&&F(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const $=N.image;if($===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{se(H,N,S);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function B(N,S){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){se(H,N,S);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function P(N,S){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){se(H,N,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function R(N,S){const H=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){Me(H,N,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const Q={[Vd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Gd]:t.MIRRORED_REPEAT},re={[Wt]:t.NEAREST,[Q1]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},pe={[iE]:t.NEVER,[lE]:t.ALWAYS,[rE]:t.LESS,[Nh]:t.LEQUAL,[sE]:t.EQUAL,[Lh]:t.GEQUAL,[aE]:t.GREATER,[oE]:t.NOTEQUAL};function de(N,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===nu||S.magFilter===Po||S.magFilter===Dr||S.minFilter===Qt||S.minFilter===nu||S.minFilter===Po||S.minFilter===Dr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,Q[S.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,Q[S.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,Q[S.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,re[S.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Po&&S.minFilter!==Dr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function he(N,S){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",w));const $=S.source;let J=p.get($);J===void 0&&(J={},p.set($,J));const ue=K(S);if(ue!==N.__cacheKey){J[ue]===void 0&&(J[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[ue].usedTimes++;const fe=J[N.__cacheKey];fe!==void 0&&(J[N.__cacheKey].usedTimes--,fe.usedTimes===0&&L(S)),N.__cacheKey=ue,N.__webglTexture=J[ue].texture}return H}function O(N,S,H){return Math.floor(Math.floor(N/H)/S)}function Y(N,S,H,$){const ue=N.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,$,S.data);else{ue.sort((Ie,xe)=>Ie.start-xe.start);let fe=0;for(let Ie=1;Ie<ue.length;Ie++){const xe=ue[fe],ge=ue[Ie],Ue=xe.start+xe.count,ke=O(ge.start,S.width,4),Ve=O(xe.start,S.width,4);ge.start<=Ue+1&&ke===Ve&&O(ge.start+ge.count-1,S.width,4)===ke?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++fe,ue[fe]=ge)}ue.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Ie=0,xe=ue.length;Ie<xe;Ie++){const ge=ue[Ie],Ue=Math.floor(ge.start/4),ke=Math.ceil(ge.count/4),Ve=Ue%S.width,U=Math.floor(Ue/S.width),ve=ke,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ve,U,ve,ne,H,$,S.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function se(N,S,H){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const J=he(N,S),ue=S.source;n.bindTexture($,N.__webglTexture,t.TEXTURE0+H);const fe=i.get(ue);if(ue.version!==fe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=Je.getPrimaries(Je.workingColorSpace),_e=S.colorSpace===er?null:Je.getPrimaries(S.colorSpace),Te=S.colorSpace===er||ne===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=m(S.image,!1,r.maxTextureSize);ie=Ut(S,ie);const me=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let xe=y(S.internalFormat,me,Ie,S.normalized,S.colorSpace,S.isVideoTexture);de($,S);let ge;const Ue=S.mipmaps,ke=S.isVideoTexture!==!0,Ve=fe.__version===void 0||J===!0,U=ue.dataReady,ve=b(S,ie);if(S.isDepthTexture)xe=T(S.format===Ir,S.type),Ve&&(ke?n.texStorage2D(t.TEXTURE_2D,1,xe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,xe,ie.width,ie.height,0,me,Ie,null));else if(S.isDataTexture)if(Ue.length>0){ke&&Ve&&n.texStorage2D(t.TEXTURE_2D,ve,xe,Ue[0].width,Ue[0].height);for(let ne=0,_e=Ue.length;ne<_e;ne++)ge=Ue[ne],ke?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,ne,xe,ge.width,ge.height,0,me,Ie,ge.data);S.generateMipmaps=!1}else ke?(Ve&&n.texStorage2D(t.TEXTURE_2D,ve,xe,ie.width,ie.height),U&&Y(S,ie,me,Ie)):n.texImage2D(t.TEXTURE_2D,0,xe,ie.width,ie.height,0,me,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,xe,Ue[0].width,Ue[0].height,ie.depth);for(let ne=0,_e=Ue.length;ne<_e;ne++)if(ge=Ue[ne],S.format!==Zn)if(me!==null)if(ke){if(U)if(S.layerUpdates.size>0){const Te=Xm(ge.width,ge.height,S.format,S.type);for(const oe of S.layerUpdates){const Fe=ge.data.subarray(oe*Te/ge.data.BYTES_PER_ELEMENT,(oe+1)*Te/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,oe,ge.width,ge.height,1,me,Fe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,me,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,xe,ge.width,ge.height,ie.depth,0,ge.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,me,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,xe,ge.width,ge.height,ie.depth,0,me,Ie,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ke&&Ve&&n.texStorage2D(t.TEXTURE_2D,ve,xe,Ue[0].width,Ue[0].height);for(let ne=0,_e=Ue.length;ne<_e;ne++)ge=Ue[ne],S.format!==Zn?me!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,xe,ge.width,ge.height,0,ge.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,ne,xe,ge.width,ge.height,0,me,Ie,ge.data)}else if(S.isDataArrayTexture)if(ke){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,xe,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){const ne=Xm(ie.width,ie.height,S.format,S.type);for(const _e of S.layerUpdates){const Te=ie.data.subarray(_e*ne/ie.data.BYTES_PER_ELEMENT,(_e+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,ie.width,ie.height,1,me,Ie,Te)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,me,Ie,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ie.width,ie.height,ie.depth,0,me,Ie,ie.data);else if(S.isData3DTexture)ke?(Ve&&n.texStorage3D(t.TEXTURE_3D,ve,xe,ie.width,ie.height,ie.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,me,Ie,ie.data)):n.texImage3D(t.TEXTURE_3D,0,xe,ie.width,ie.height,ie.depth,0,me,Ie,ie.data);else if(S.isFramebufferTexture){if(Ve)if(ke)n.texStorage2D(t.TEXTURE_2D,ve,xe,ie.width,ie.height);else{let ne=ie.width,_e=ie.height;for(let Te=0;Te<ve;Te++)n.texImage2D(t.TEXTURE_2D,Te,xe,ne,_e,0,me,Ie,null),ne>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),f.add(S),ne.onpaint=_e=>{const Te=_e.changedElements;for(const oe of f)Te.includes(oe.image)&&(oe.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Te=t.RGBA,oe=t.RGBA,Fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Te,oe,Fe,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ke&&Ve){const ne=it(Ue[0]);n.texStorage2D(t.TEXTURE_2D,ve,xe,ne.width,ne.height)}for(let ne=0,_e=Ue.length;ne<_e;ne++)ge=Ue[ne],ke?U&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,me,Ie,ge):n.texImage2D(t.TEXTURE_2D,ne,xe,me,Ie,ge);S.generateMipmaps=!1}else if(ke){if(Ve){const ne=it(ie);n.texStorage2D(t.TEXTURE_2D,ve,xe,ne.width,ne.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ie,ie)}else n.texImage2D(t.TEXTURE_2D,0,xe,me,Ie,ie);d(S)&&_($),fe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function Me(N,S,H){if(S.image.length!==6)return;const $=he(N,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+H);const ue=i.get(J);if(J.version!==ue.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const fe=Je.getPrimaries(Je.workingColorSpace),ee=S.colorSpace===er?null:Je.getPrimaries(S.colorSpace),ie=S.colorSpace===er||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!me&&!Ie?xe[oe]=m(S.image[oe],!0,r.maxCubemapSize):xe[oe]=Ie?S.image[oe].image:S.image[oe],xe[oe]=Ut(S,xe[oe]);const ge=xe[0],Ue=s.convert(S.format,S.colorSpace),ke=s.convert(S.type),Ve=y(S.internalFormat,Ue,ke,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,ve=ue.__version===void 0||$===!0,ne=J.dataReady;let _e=b(S,ge);de(t.TEXTURE_CUBE_MAP,S);let Te;if(me){U&&ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ve,ge.width,ge.height);for(let oe=0;oe<6;oe++){Te=xe[oe].mipmaps;for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];S.format!==Zn?Ue!==null?U?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Le.width,Le.height,Ue,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Ve,Le.width,Le.height,0,Le.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Le.width,Le.height,Ue,ke,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Ve,Le.width,Le.height,0,Ue,ke,Le.data)}}}else{if(Te=S.mipmaps,U&&ve){Te.length>0&&_e++;const oe=it(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ie){U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ue,ke,xe[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,xe[oe].width,xe[oe].height,0,Ue,ke,xe[oe].data);for(let Fe=0;Fe<Te.length;Fe++){const ft=Te[Fe].image[oe].image;U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,ft.width,ft.height,Ue,ke,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Ve,ft.width,ft.height,0,Ue,ke,ft.data)}}else{U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,ke,xe[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Ue,ke,xe[oe]);for(let Fe=0;Fe<Te.length;Fe++){const Le=Te[Fe];U?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,Ue,ke,Le.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Ve,Ue,ke,Le.image[oe])}}}d(S)&&_(t.TEXTURE_CUBE_MAP),ue.__version=J.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function le(N,S,H,$,J,ue){const fe=s.convert(H.format,H.colorSpace),ee=s.convert(H.type),ie=y(H.internalFormat,fe,ee,H.normalized,H.colorSpace),me=i.get(S),Ie=i.get(H);if(Ie.__renderTarget=S,!me.__hasExternalTextures){const xe=Math.max(1,S.width>>ue),ge=Math.max(1,S.height>>ue);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ue,ie,xe,ge,S.depth,0,fe,ee,null):n.texImage2D(J,ue,ie,xe,ge,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,J,Ie.__webglTexture,0,gt(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,J,Ie.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(N,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,N),S.depthBuffer){const $=S.depthTexture,J=$&&$.isDepthTexture?$.type:null,ue=T(S.stencilBuffer,J),fe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(S),ue,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,N)}else{const $=S.textures;for(let J=0;J<$.length;J++){const ue=$[J],fe=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ie=y(ue.internalFormat,fe,ee,ue.normalized,ue.colorSpace);bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,gt(S),ie,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,gt(S),ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(N,S,H){const $=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),de(t.TEXTURE_CUBE_MAP,S.depthTexture);const me=s.convert(S.depthTexture.format),Ie=s.convert(S.depthTexture.type);let xe;S.depthTexture.format===ki?xe=t.DEPTH_COMPONENT24:S.depthTexture.format===Ir&&(xe=t.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,S.width,S.height,0,me,Ie,null)}}else V(S.depthTexture,0);const ue=J.__webglTexture,fe=gt(S),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ie=S.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ki)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ue,0);else if(S.depthTexture.format===Ir)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(N){const S=i.get(N),H=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){const $=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=$}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)$e(S.__webglFramebuffer[$],N,$);else{const $=N.texture.mipmaps;$&&$.length>0?$e(S.__webglFramebuffer[0],N,0):$e(S.__webglFramebuffer,N,0)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),Re(S.__webglDepthbuffer[$],N,!1);else{const J=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}else{const $=N.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Re(S.__webglDepthbuffer,N,!1);else{const J=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(N,S,H){const $=i.get(N);S!==void 0&&le($.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&we(N)}function je(N){const S=N.texture,H=i.get(N),$=i.get(S);N.addEventListener("dispose",x);const J=N.textures,ue=N.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ee]=[];for(let ie=0;ie<S.mipmaps.length;ie++)H.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else H.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)H.__webglFramebuffer[ee]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ie=J.length;ee<ie;ee++){const me=i.get(J[ee]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&bt(N)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ie=J[ee];H.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ee]);const me=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),xe=y(ie.internalFormat,me,Ie,ie.normalized,ie.colorSpace,N.isXRRenderTarget===!0),ge=gt(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,xe,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,H.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),de(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)le(H.__webglFramebuffer[ee][ie],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else le(H.__webglFramebuffer[ee],N,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(S)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ie=J.length;ee<ie;ee++){const me=J[ee],Ie=i.get(me);let xe=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Ie.__webglTexture),de(xe,me),le(H.__webglFramebuffer,N,me,t.COLOR_ATTACHMENT0+ee,xe,0),d(me)&&_(xe)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),de(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)le(H.__webglFramebuffer[ie],N,S,t.COLOR_ATTACHMENT0,ee,ie);else le(H.__webglFramebuffer,N,S,t.COLOR_ATTACHMENT0,ee,0);d(S)&&_(ee),n.unbindTexture()}N.depthBuffer&&we(N)}function Oe(N){const S=N.textures;for(let H=0,$=S.length;H<$;H++){const J=S[H];if(d(J)){const ue=M(N),fe=i.get(J).__webglTexture;n.bindTexture(ue,fe),_(ue),n.unbindTexture()}}}const Qe=[],dt=[];function mt(N){if(N.samples>0){if(bt(N)===!1){const S=N.textures,H=N.width,$=N.height;let J=t.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(N),ee=S.length>1;if(ee)for(let me=0;me<S.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=N.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<S.length;me++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ie=i.get(S[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,J,t.NEAREST),l===!0&&(Qe.length=0,dt.length=0,Qe.push(t.COLOR_ATTACHMENT0+me),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Qe.push(ue),dt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<S.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ie=i.get(S[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){const S=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function gt(N){return Math.min(r.maxSamples,N.samples)}function bt(N){const S=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(N){const S=a.render.frame;h.get(N)!==S&&(h.set(N,S),N.update())}function Ut(N,S){const H=N.colorSpace,$=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Yl&&H!==er&&(Je.getTransfer(H)===ot?($!==Zn||J!==Tn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),S}function it(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.getTextureUnits=k,this.setTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=P,this.setTextureCube=R,this.rebindTextures=Be,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=le,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function VA(t,e){function n(i,r=er){let s;const a=Je.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===V_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===G_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===z_)return t.BYTE;if(i===H_)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===Th)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===vi)return t.HALF_FLOAT;if(i===W_)return t.ALPHA;if(i===j_)return t.RGB;if(i===Zn)return t.RGBA;if(i===ki)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===X_)return t.RED;if(i===Ah)return t.RED_INTEGER;if(i===Wr)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===Ph)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===vl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wd||i===jd||i===Xd||i===$d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Xl||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===qd)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zd)return s.COMPRESSED_R11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xl)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ef)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===af)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===of)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===df)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ff)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mf||i===gf||i===vf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mf)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_f||i===xf||i===$l||i===yf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_f)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ix(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:GA,fragmentShader:WA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XA extends Yr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const E=typeof XRWebGLBinding<"u",m=new jA,d={},_=n.getContextAttributes();let M=null,y=null;const T=[],b=[],w=new Xe;let x=null,A=null;const L=new wn;L.viewport=new Et;const D=new wn;D.viewport=new Et;const z=[L,D],q=new QE;let k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Y=T[O];return Y===void 0&&(Y=new du,T[O]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(O){let Y=T[O];return Y===void 0&&(Y=new du,T[O]=Y),Y.getGripSpace()},this.getHand=function(O){let Y=T[O];return Y===void 0&&(Y=new du,T[O]=Y),Y.getHandSpace()};function te(O){const Y=b.indexOf(O.inputSource);if(Y===-1)return;const se=T[Y];se!==void 0&&(se.update(O.inputSource,O.frame,c||a),se.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",V);for(let O=0;O<T.length;O++){const Y=b[O];Y!==null&&(b[O]=null,T[O].disconnect(Y))}k=null,W=null,m.reset();for(const O in d)delete d[O];if(e.setRenderTarget(M),p=null,u=null,f=null,r=null,y=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),A!==null){const O=A.camera;O.fov=A.fov,O.zoom=A.zoom,O.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&E&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,le=null;_.depth&&(le=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=_.stencil?Ir:ki,Me=_.stencil?Za:gi);const Re={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Re),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ei(u.textureWidth,u.textureHeight,{format:Zn,type:Tn,depthTexture:new Qa(u.textureWidth,u.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ei(p.framebufferWidth,p.framebufferHeight,{format:Zn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(O){for(let Y=0;Y<O.removed.length;Y++){const se=O.removed[Y],Me=b.indexOf(se);Me>=0&&(b[Me]=null,T[Me].disconnect(se))}for(let Y=0;Y<O.added.length;Y++){const se=O.added[Y];let Me=b.indexOf(se);if(Me===-1){for(let Re=0;Re<T.length;Re++)if(Re>=b.length){b.push(se),Me=Re;break}else if(b[Re]===null){b[Re]=se,Me=Re;break}if(Me===-1)break}const le=T[Me];le&&le.connect(se)}}const B=new G,P=new G;function R(O,Y,se){B.setFromMatrixPosition(Y.matrixWorld),P.setFromMatrixPosition(se.matrixWorld);const Me=B.distanceTo(P),le=Y.projectionMatrix.elements,Re=se.projectionMatrix.elements,$e=le[14]/(le[10]-1),we=le[14]/(le[10]+1),Be=(le[9]+1)/le[5],je=(le[9]-1)/le[5],Oe=(le[8]-1)/le[0],Qe=(Re[8]+1)/Re[0],dt=$e*Oe,mt=$e*Qe,gt=Me/(-Oe+Qe),bt=gt*-Oe;if(Y.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(bt),O.translateZ(gt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),le[10]===-1)O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const F=$e+gt,Ut=we+gt,it=dt-bt,N=mt+(Me-bt),S=Be*we/Ut*F,H=je*we/Ut*F;O.projectionMatrix.makePerspective(it,N,S,H,F,Ut),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Q(O,Y){Y===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Y.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let Y=O.near,se=O.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(se=m.depthFar)),q.near=D.near=L.near=Y,q.far=D.far=L.far=se,(k!==q.near||W!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),k=q.near,W=q.far),q.layers.mask=O.layers.mask|6,L.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;const Me=O.parent,le=q.cameras;Q(q,Me);for(let Re=0;Re<le.length;Re++)Q(le[Re],Me);le.length===2?R(q,L,D):q.projectionMatrix.copy(L.projectionMatrix),A===null&&O.isPerspectiveCamera&&(A={camera:O,fov:O.fov,zoom:O.zoom}),re(O,q,Me)};function re(O,Y,se){se===null?O.matrix.copy(Y.matrixWorld):(O.matrix.copy(se.matrixWorld),O.matrix.invert(),O.matrix.multiply(Y.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Y.projectionMatrix),O.projectionMatrixInverse.copy(Y.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Mf*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(O){return d[O]};let pe=null;function de(O,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Me=!1;se.length!==q.cameras.length&&(q.cameras.length=0,Me=!0);for(let we=0;we<se.length;we++){const Be=se[we];let je=null;if(p!==null)je=p.getViewport(Be);else{const Qe=f.getViewSubImage(u,Be);je=Qe.viewport,we===0&&(e.setRenderTargetTextures(y,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(y))}let Oe=z[we];Oe===void 0&&(Oe=new wn,Oe.layers.enable(we),Oe.viewport=new Et,z[we]=Oe),Oe.matrix.fromArray(Be.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Be.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(je.x,je.y,je.width,je.height),we===0&&(q.matrix.copy(Oe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Me===!0&&q.cameras.push(Oe)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){f=i.getBinding();const we=f.getDepthInformation(se[0]);we&&we.isValid&&we.texture&&m.init(we,r.renderState)}if(le&&le.includes("camera-access")&&E){e.state.unbindTexture(),f=i.getBinding();for(let we=0;we<se.length;we++){const Be=se[we].camera;if(Be){let je=d[Be];je||(je=new ix,d[Be]=je);const Oe=f.getCameraImage(Be);je.sourceTexture=Oe}}}}for(let se=0;se<T.length;se++){const Me=b[se],le=T[se];Me!==null&&le!==void 0&&le.update(Me,Y,c||a)}pe&&pe(O,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const he=new lx;he.setAnimationLoop(de),this.setAnimationLoop=function(O){pe=O},this.dispose=function(){}}}const $A=new Tt,mx=new He;mx.set(-1,0,0,0,1,0,0,0,1);function YA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,rx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,M,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),E(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mx),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=M*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function E(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(m(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",_));const w=T.program;i.updateUBOMapping(y,w);const x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){const T=f();y.__bindingPointIndex=T;const b=t.createBuffer(),w=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],b=y.uniforms,w=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,A=b.length;x<A;x++){const L=b[x];if(Array.isArray(L))for(let D=0,z=L.length;D<z;D++)p(L[D],x,D,w);else p(L,x,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,T,b,w){if(E(y,T,b,w)===!0){const x=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let D=0;D<A.length;D++){const z=A[D],q=d(z);g(z,y.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,T,b){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,b)}function E(y,T,b,w){const x=y.value,A=T+"_"+b;if(w[A]===void 0)return typeof x=="number"||typeof x=="boolean"?w[A]=x:ArrayBuffer.isView(x)?w[A]=x.slice():w[A]=x.clone(),!0;{const L=w[A];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return w[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(y){const T=y.uniforms;let b=0;const w=16;for(let A=0,L=T.length;A<L;A++){const D=Array.isArray(T[A])?T[A]:[T[A]];for(let z=0,q=D.length;z<q;z++){const k=D[z],W=Array.isArray(k.value)?k.value:[k.value];for(let te=0,K=W.length;te<K;te++){const V=W[te],B=d(V),P=b%w,R=P%B.boundary,Q=P+R;b+=R,Q!==0&&w-Q<B.storage&&(b+=w-Q),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=B.storage}}}const x=b%w;return x>0&&(b+=w-x),y.__size=b,y.__cache={},this}function d(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),T}function _(y){const T=y.target;T.removeEventListener("dispose",_);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const KA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function ZA(){return ai===null&&(ai=new FE(KA,16,16,Wr,vi),ai.name="DFG_LUT",ai.minFilter=Qt,ai.magFilter=Qt,ai.wrapS=Ri,ai.wrapT=Ri,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class JA{constructor(e={}){const{canvas:n=dE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Tn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const E=p,m=new Set([Ph,Rh,Ah]),d=new Set([Tn,gi,Ka,Za,Ch,bh]),_=new Uint32Array(4),M=new Int32Array(4),y=new G;let T=null,b=null;const w=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,z=null,q=null,k=null,W=null;this._outputColorSpace=In;let te=0,K=0,V=null,B=-1,P=null;const R=new Et,Q=new Et;let re=null;const pe=new qe(0);let de=0,he=n.width,O=n.height,Y=1,se=null,Me=null;const le=new Et(0,0,he,O),Re=new Et(0,0,he,O);let $e=!1;const we=new Ih;let Be=!1,je=!1;const Oe=new Tt,Qe=new G,dt=new Et,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function bt(){return V===null?Y:1}let F=i;function Ut(C,I){return n.getContext(C,I)}let it,N,S,H,$,J,ue,fe,ee,ie,me,Ie,xe,ge,Ue,ke,Ve,U,ve,ne,_e,Te,oe;try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",st,!1),n.addEventListener("webglcontextcreationerror",Vn,!1),F===null){const I="webgl2";if(F=Ut(I,C),F===null)throw Ut(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(C){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),nt("WebGLRenderer: "+C.message),C}function Fe(){it=new ZC(F),it.init(),_e=new VA(F,it),N=new HC(F,it,e,_e),S=new zA(F,it),N.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),q=F.createFramebuffer(),k=F.createFramebuffer(),W=F.createFramebuffer(),H=new eb(F),$=new CA,J=new HA(F,it,S,$,N,_e,H),ue=new KC(L),fe=new nw(F),Te=new BC(F,fe),ee=new JC(F,fe,H,Te),ie=new nb(F,ee,fe,Te,H),U=new tb(F,N,J),Ue=new VC($),me=new TA(L,ue,it,N,Te,Ue),Ie=new YA(L,$),xe=new AA,ge=new IA(it),Ve=new OC(L,ue,S,ie,g,l),ke=new BA(L,ie,N),oe=new qA(F,H,N,S),ve=new zC(F,it,H),ne=new QC(F,it,H),H.programs=me.programs,L.capabilities=N,L.extensions=it,L.properties=$,L.renderLists=xe,L.shadowMap=ke,L.state=S,L.info=H}E!==Tn&&(A=new rb(E,n.width,n.height,o,r,s));const Le=new XA(L,F);this.xr=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(he,O,!1))},this.getSize=function(C){return C.set(he,O)},this.setSize=function(C,I,Z=!0){if(Le.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}he=C,O=I,n.width=Math.floor(C*Y),n.height=Math.floor(I*Y),Z===!0&&(n.style.width=C+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,C,I)},this.getDrawingBufferSize=function(C){return C.set(he*Y,O*Y).floor()},this.setDrawingBufferSize=function(C,I,Z){he=C,O=I,Y=Z,n.width=Math.floor(C*Z),n.height=Math.floor(I*Z),this.setViewport(0,0,C,I)},this.setEffects=function(C){if(E===Tn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let I=0;I<C.length;I++)if(C[I].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,I,Z,j){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,I,Z,j),S.viewport(R.copy(le).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(Re)},this.setScissor=function(C,I,Z,j){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,I,Z,j),S.scissor(Q.copy(Re).multiplyScalar(Y).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){S.setScissorTest($e=C)},this.setOpaqueSort=function(C){se=C},this.setTransparentSort=function(C){Me=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(C=!0,I=!0,Z=!0){let j=0;if(C){let X=!1;if(V!==null){const Ee=V.texture.format;X=m.has(Ee)}if(X){const Ee=V.texture.type,be=d.has(Ee),Se=Ve.getClearColor(),Pe=Ve.getClearAlpha(),De=Se.r,Ge=Se.g,Ye=Se.b;be?(_[0]=De,_[1]=Ge,_[2]=Ye,_[3]=Pe,F.clearBufferuiv(F.COLOR,0,_)):(M[0]=De,M[1]=Ge,M[2]=Ye,M[3]=Pe,F.clearBufferiv(F.COLOR,0,M))}else j|=F.COLOR_BUFFER_BIT}I&&(j|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),z=C},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",st,!1),n.removeEventListener("webglcontextcreationerror",Vn,!1),Ve.dispose(),xe.dispose(),ge.dispose(),$.dispose(),ue.dispose(),ie.dispose(),Te.dispose(),oe.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Wh),Le.removeEventListener("sessionend",jh),yr.stop()};function ft(C){C.preventDefault(),Em("WebGLRenderer: Context Lost."),D=!0}function st(){Em("WebGLRenderer: Context Restored."),D=!1;const C=H.autoReset,I=ke.enabled,Z=ke.autoUpdate,j=ke.needsUpdate,X=ke.type;Fe(),H.autoReset=C,ke.enabled=I,ke.autoUpdate=Z,ke.needsUpdate=j,ke.type=X}function Vn(C){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ni(C){const I=C.target;I.removeEventListener("dispose",ni),vx(I)}function vx(C){_x(C),$.remove(C)}function _x(C){const I=$.get(C).programs;I!==void 0&&(I.forEach(function(Z){me.releaseProgram(Z)}),C.isShaderMaterial&&me.releaseShaderCache(C))}this.renderBufferDirect=function(C,I,Z,j,X,Ee){I===null&&(I=mt);const be=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=Sx(C,I,Z,j,X);S.setMaterial(j,be);let Pe=Z.index,De=1;if(j.wireframe===!0){if(Pe=ee.getWireframeAttribute(Z),Pe===void 0)return;De=2}const Ge=Z.drawRange,Ye=Z.attributes.position;let Ne=Ge.start*De,at=(Ge.start+Ge.count)*De;Ee!==null&&(Ne=Math.max(Ne,Ee.start*De),at=Math.min(at,(Ee.start+Ee.count)*De)),Pe!==null?(Ne=Math.max(Ne,0),at=Math.min(at,Pe.count)):Ye!=null&&(Ne=Math.max(Ne,0),at=Math.min(at,Ye.count));const Lt=at-Ne;if(Lt<0||Lt===1/0)return;Te.setup(X,j,Se,Z,Pe);let vt,ut=ve;if(Pe!==null&&(vt=fe.get(Pe),ut=ne,ut.setIndex(vt)),X.isMesh)j.wireframe===!0?(S.setLineWidth(j.wireframeLinewidth*bt()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(X.isLine){let $t=j.linewidth;$t===void 0&&($t=1),S.setLineWidth($t*bt()),X.isLineSegments?ut.setMode(F.LINES):X.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else X.isPoints?ut.setMode(F.POINTS):X.isSprite&&ut.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $t=X._multiDrawStarts,Ce=X._multiDrawCounts,nn=X._multiDrawCount,et=Pe?fe.get(Pe).bytesPerElement:1,Ln=$.get(j).currentProgram.getUniforms();for(let ii=0;ii<nn;ii++)Ln.setValue(F,"_gl_DrawID",ii),ut.render($t[ii]/et,Ce[ii])}else if(X.isInstancedMesh)ut.renderInstances(Ne,Lt,X.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,$t);ut.renderInstances(Ne,Lt,Ce)}else ut.render(Ne,Lt)};function Gh(C,I,Z,j){z!==null&&C.isNodeMaterial&&z.setObject(j,C),Be===!0&&Ue.setState(C,Z,!1),C.transparent===!0&&C.side===Ci&&C.forceSinglePass===!1?(C.side=xn,C.needsUpdate=!0,uo(C,I,j),C.side=Vr,C.needsUpdate=!0,uo(C,I,j),C.side=Ci):uo(C,I,j)}this.compile=function(C,I,Z=null){Z===null&&(Z=C),z!==null&&z.renderStart(C,I,Z),b=ge.get(Z),b.init(I),x.push(b),Z.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),C!==Z&&C.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),je=this.localClippingEnabled,Be=Ue.init(this.clippingPlanes,je),Be===!0&&Ue.setGlobalState(this.clippingPlanes,I),z!==null&&ke.render(b.state.shadowsArray,Z,I);const j=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Se=Ee[be];Gh(Se,Z,I,X),j.add(Se)}else Gh(Ee,Z,I,X),j.add(Ee)}),b=x.pop(),z!==null&&z.renderEnd(),j},this.compileAsync=function(C,I,Z=null){const j=this.compile(C,I,Z);return new Promise(X=>{function Ee(){if(j.forEach(function(be){const Pe=$.get(be).currentProgram;(Pe===void 0||Pe.isReady())&&j.delete(be)}),j.size===0){X(C);return}setTimeout(Ee,10)}it.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wc=null;function xx(C){wc&&wc(C)}function Wh(){yr.stop()}function jh(){yr.start()}const yr=new lx;yr.setAnimationLoop(xx),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(C){wc=C,Le.setAnimationLoop(C),C===null?yr.stop():yr.start()},Le.addEventListener("sessionstart",Wh),Le.addEventListener("sessionend",jh),this.render=function(C,I){if(I!==void 0&&I.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(C,I);const Z=Le.enabled===!0&&Le.isPresenting===!0,j=A!==null&&(V===null||Z)&&A.begin(L,V);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(I),I=Le.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,I,V),b=ge.get(C,x.length),b.init(I),b.state.textureUnits=J.getTextureUnits(),x.push(b),Oe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),we.setFromProjectionMatrix(Oe,di,I.reversedDepth),je=this.localClippingEnabled,Be=Ue.init(this.clippingPlanes,je),T=xe.get(C,w.length),T.init(),w.push(T),Le.enabled===!0&&Le.isPresenting===!0){const be=L.xr.getDepthSensingMesh();be!==null&&Tc(be,I,-1/0,L.sortObjects)}Tc(C,I,0,L.sortObjects),T.finish(),z!==null&&z.updateLights(b.state.lightsArray),L.sortObjects===!0&&T.sort(se,Me),gt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,gt&&Ve.addToRenderList(T,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Be===!0&&Ue.beginShadows();const X=b.state.shadowsArray;if(ke.render(X,C,I),Be===!0&&Ue.endShadows(),(j&&A.hasRenderPass())===!1){const be=T.opaque,Se=T.transmissive;if(b.setupLights(),I.isArrayCamera){const Pe=I.cameras;if(Se.length>0)for(let De=0,Ge=Pe.length;De<Ge;De++){const Ye=Pe[De];$h(be,Se,C,Ye)}gt&&Ve.render(C);for(let De=0,Ge=Pe.length;De<Ge;De++){const Ye=Pe[De];Xh(T,C,Ye,Ye.viewport)}}else Se.length>0&&$h(be,Se,C,I),gt&&Ve.render(C),Xh(T,C,I)}V!==null&&K===0&&(J.updateMultisampleRenderTarget(V),J.updateRenderTargetMipmap(V)),j&&A.end(L),C.isScene===!0&&C.onAfterRender(L,C,I),Te.resetDefaultState(),B=-1,P=null,x.pop(),x.length>0?(b=x[x.length-1],J.setTextureUnits(b.state.textureUnits),Be===!0&&Ue.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,z!==null&&z.renderEnd()};function Tc(C,I,Z,j){if(C.visible===!1)return;if(C.layers.test(I.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(I);else if(C.isLightProbeGrid)b.pushLightProbeGrid(C);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(we)){j&&dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Oe);const be=ie.update(C),Se=C.material;Se.visible&&T.push(C,be,Se,Z,dt.z,null,I)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(we))){const be=ie.update(C),Se=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),dt.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),dt.copy(be.boundingSphere.center)),dt.applyMatrix4(C.matrixWorld).applyMatrix4(Oe)),Array.isArray(Se)){const Pe=be.groups;for(let De=0,Ge=Pe.length;De<Ge;De++){const Ye=Pe[De],Ne=Se[Ye.materialIndex];Ne&&Ne.visible&&T.push(C,be,Ne,Z,dt.z,Ye,I)}}else Se.visible&&T.push(C,be,Se,Z,dt.z,null,I)}}const Ee=C.children;for(let be=0,Se=Ee.length;be<Se;be++)Tc(Ee[be],I,Z,j)}function Xh(C,I,Z,j){const{opaque:X,transmissive:Ee,transparent:be}=C;b.setupLightsView(Z),Be===!0&&Ue.setGlobalState(L.clippingPlanes,Z),j&&S.viewport(R.copy(j)),X.length>0&&co(X,I,Z),Ee.length>0&&co(Ee,I,Z),be.length>0&&co(be,I,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function $h(C,I,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new ei(1,1,{generateMipmaps:!0,type:Ne?vi:Tn,minFilter:Dr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[j.id],be=j.viewport||R;Ee.setSize(be.z*L.transmissionResolutionScale,be.w*L.transmissionResolutionScale);const Se=L.getRenderTarget(),Pe=L.getActiveCubeFace(),De=L.getActiveMipmapLevel();L.setRenderTarget(Ee),L.getClearColor(pe),de=L.getClearAlpha(),de<1&&L.setClearColor(16777215,.5),L.clear(),gt&&Ve.render(Z);const Ge=L.toneMapping;L.toneMapping=pi;const Ye=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),Be===!0&&Ue.setGlobalState(L.clippingPlanes,j),co(C,Z,j),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let at=0,Lt=I.length;at<Lt;at++){const vt=I[at],{object:ut,geometry:$t,material:Ce,group:nn}=vt;if(Ce.side===Ci&&ut.layers.test(j.layers)){const et=Ce.side;Ce.side=xn,Ce.needsUpdate=!0,Yh(ut,Z,j,$t,Ce,nn),Ce.side=et,Ce.needsUpdate=!0,Ne=!0}}Ne===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}L.setRenderTarget(Se,Pe,De),L.setClearColor(pe,de),Ye!==void 0&&(j.viewport=Ye),L.toneMapping=Ge}function co(C,I,Z){const j=I.isScene===!0?I.overrideMaterial:null;for(let X=0,Ee=C.length;X<Ee;X++){const be=C[X],{object:Se,geometry:Pe,group:De}=be;let Ge=be.material;Ge.allowOverride===!0&&j!==null&&(Ge=j),Se.layers.test(Z.layers)&&Yh(Se,I,Z,Pe,Ge,De)}}function Yh(C,I,Z,j,X,Ee){z!==null&&X.isNodeMaterial&&z.setObject(C,X),C.onBeforeRender(L,I,Z,j,X,Ee),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(L,I,Z,j,C,Ee),X.transparent===!0&&X.side===Ci&&X.forceSinglePass===!1?(X.side=xn,X.needsUpdate=!0,L.renderBufferDirect(Z,I,j,X,C,Ee),X.side=Vr,X.needsUpdate=!0,L.renderBufferDirect(Z,I,j,X,C,Ee),X.side=Ci):L.renderBufferDirect(Z,I,j,X,C,Ee),C.onAfterRender(L,I,Z,j,X,Ee)}function uo(C,I,Z){I.isScene!==!0&&(I=mt);const j=$.get(C),X=b.state.lights,Ee=b.state.shadowsArray,be=X.state.version,Se=me.getParameters(C,X.state,Ee,I,Z,b.state.lightProbeGridArray),Pe=me.getProgramCacheKey(Se);let De=j.programs;j.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?I.environment:null,j.fog=I.fog;const Ge=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;j.envMap=ue.get(C.envMap||j.environment,Ge),j.envMapRotation=j.environment!==null&&C.envMap===null?I.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",ni),De=new Map,j.programs=De);let Ye=De.get(Pe);if(Ye!==void 0){if(j.currentProgram===Ye&&j.lightsStateVersion===be)return Kh(C,Se),Ye}else Se.uniforms=me.getUniforms(C),z!==null&&C.isNodeMaterial&&z.build(C,Z,Se),C.onBeforeCompile(Se,L),Ye=me.acquireProgram(Se,Pe),De.set(Pe,Ye),j.uniforms=Se.uniforms;const Ne=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),Kh(C,Se),j.needsLights=Ex(C),j.lightsStateVersion=be,j.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.sunLights.value=X.state.sun,Ne.sunLightShadows.value=X.state.sunShadow,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.sunShadowMatrix.value=X.state.sunShadowMatrix,Ne.sunShadowCascade.value=X.state.sunShadowCascade,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=Ye,j.uniformsList=null,Ye}function qh(C){if(C.uniformsList===null){const I=C.currentProgram.getUniforms();C.uniformsList=xl.seqWithValue(I.seq,C.uniforms)}return C.uniformsList}function Kh(C,I){const Z=$.get(C);Z.outputColorSpace=I.outputColorSpace,Z.batching=I.batching,Z.batchingColor=I.batchingColor,Z.instancing=I.instancing,Z.instancingColor=I.instancingColor,Z.instancingMorph=I.instancingMorph,Z.skinning=I.skinning,Z.morphTargets=I.morphTargets,Z.morphNormals=I.morphNormals,Z.morphColors=I.morphColors,Z.morphTargetsCount=I.morphTargetsCount,Z.numClippingPlanes=I.numClippingPlanes,Z.numIntersection=I.numClipIntersection,Z.vertexAlphas=I.vertexAlphas,Z.vertexTangents=I.vertexTangents,Z.toneMapping=I.toneMapping}function yx(C,I){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let Z=0,j=C.length;Z<j;Z++){const X=C[Z];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function Sx(C,I,Z,j,X){I.isScene!==!0&&(I=mt),J.resetTextureUnits();const Ee=I.fog,be=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?I.environment:null,Se=V===null?L.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Pe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,De=ue.get(j.envMap||be,Pe),Ge=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,Lt=!!Z.morphAttributes.color;let vt=pi;j.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=L.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$t=ut!==void 0?ut.length:0,Ce=$.get(j),nn=b.state.lights;if(Be===!0&&(je===!0||C!==P)){const ht=C===P&&j.id===B;Ue.setState(j,C,ht)}let et=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==nn.state.version||Ce.outputColorSpace!==Se||X.isBatchedMesh&&Ce.batching===!1||!X.isBatchedMesh&&Ce.batching===!0||X.isBatchedMesh&&Ce.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ce.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||X.isInstancedMesh&&Ce.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ce.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ce.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ce.instancingMorph===!1&&X.morphTexture!==null||Ce.envMap!==De||j.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ue.numPlanes||Ce.numIntersection!==Ue.numIntersection)||Ce.vertexAlphas!==Ge||Ce.vertexTangents!==Ye||Ce.morphTargets!==Ne||Ce.morphNormals!==at||Ce.morphColors!==Lt||Ce.toneMapping!==vt||Ce.morphTargetsCount!==$t||!!Ce.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Ce.__version=j.version);let Ln=Ce.currentProgram;et===!0&&(Ln=uo(j,I,X),z&&j.isNodeMaterial&&z.onUpdateProgram(j,Ln,Ce));let ii=!1,Bi=!1,qr=!1;const ct=Ln.getUniforms(),Pt=Ce.uniforms;if(S.useProgram(Ln.program)&&(ii=!0,Bi=!0,qr=!0),j.id!==B&&(B=j.id,Bi=!0),Ce.needsLights){const ht=yx(b.state.lightProbeGridArray,X);Ce.lightProbeGrid!==ht&&(Ce.lightProbeGrid=ht,Bi=!0)}if(ii||P!==C){S.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",C.projectionMatrix),ct.setValue(F,"viewMatrix",C.matrixWorldInverse);const Hi=ct.map.cameraPosition;Hi!==void 0&&Hi.setValue(F,Qe.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ct.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,Bi=!0,qr=!0)}if(Ce.needsLights&&(nn.state.sunShadowMap.length>0&&ct.setValue(F,"sunShadowMap",nn.state.sunShadowMap,J),nn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",nn.state.directionalShadowMap,J),nn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",nn.state.spotShadowMap,J),nn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",nn.state.pointShadowMap,J)),X.isSkinnedMesh){ct.setOptional(F,X,"bindMatrix"),ct.setOptional(F,X,"bindMatrixInverse");const ht=X.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(F,"boneTexture",ht.boneTexture,J))}X.isBatchedMesh&&(ct.setOptional(F,X,"batchingTexture"),ct.setValue(F,"batchingTexture",X._matricesTexture,J),ct.setOptional(F,X,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",X._indirectTexture,J),ct.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",X._colorsTexture,J));const zi=Z.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&U.update(X,Z,Ln),(Bi||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,ct.setValue(F,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=ZA()),Bi){if(ct.setValue(F,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&Mx(Pt,qr),Ee&&j.fog===!0&&Ie.refreshFogUniforms(Pt,Ee),Ie.refreshMaterialUniforms(Pt,j,Y,O,b.state.transmissionRenderTarget[C.id]),Ce.needsLights&&Ce.lightProbeGrid){const ht=Ce.lightProbeGrid;Pt.probesSH.value=ht.texture,Pt.probesMin.value.copy(ht.boundingBox.min),Pt.probesMax.value.copy(ht.boundingBox.max),Pt.probesResolution.value.copy(ht.resolution)}xl.upload(F,qh(Ce),Pt,J)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xl.upload(F,qh(Ce),Pt,J),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ct.setValue(F,"center",X.center),ct.setValue(F,"modelViewMatrix",X.modelViewMatrix),ct.setValue(F,"normalMatrix",X.normalMatrix),ct.setValue(F,"modelMatrix",X.matrixWorld),j.uniformsGroups!==void 0){const ht=j.uniformsGroups;for(let Hi=0,Kr=ht.length;Hi<Kr;Hi++){const Jh=ht[Hi];oe.update(Jh,Ln),oe.bind(Jh,Ln)}}return Ln}function Mx(C,I){C.ambientLightColor.needsUpdate=I,C.lightProbe.needsUpdate=I,C.sunLights.needsUpdate=I,C.sunLightShadows.needsUpdate=I,C.directionalLights.needsUpdate=I,C.directionalLightShadows.needsUpdate=I,C.pointLights.needsUpdate=I,C.pointLightShadows.needsUpdate=I,C.spotLights.needsUpdate=I,C.spotLightShadows.needsUpdate=I,C.rectAreaLights.needsUpdate=I,C.hemisphereLights.needsUpdate=I}function Ex(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,I,Z){const j=$.get(C);j.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),$.get(C.texture).__webglTexture=I,$.get(C.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,I){const Z=$.get(C);Z.__webglFramebuffer=I,Z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(C,I=0,Z=0){V=C,te=I,K=Z;let j=null,X=!1,Ee=!1;if(C){const Se=$.get(C);if(Se.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,Se.__webglFramebuffer),R.copy(C.viewport),Q.copy(C.scissor),re=C.scissorTest,S.viewport(R),S.scissor(Q),S.setScissorTest(re),B=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(C);else if(Se.__hasExternalTextures)J.rebindTextures(C,$.get(C.texture).__webglTexture,$.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(Se.__boundDepthTexture!==Ge){if(Ge!==null&&$.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(C)}}const Pe=C.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const De=$.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(De[I])?j=De[I][Z]:j=De[I],X=!0):C.samples>0&&J.useMultisampledRTT(C)===!1?j=$.get(C).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[Z]:j=De,R.copy(C.viewport),Q.copy(C.scissor),re=C.scissorTest}else R.copy(le).multiplyScalar(Y).floor(),Q.copy(Re).multiplyScalar(Y).floor(),re=$e;if(Z!==0&&(j=q),S.bindFramebuffer(F.FRAMEBUFFER,j)&&S.drawBuffers(C,j),S.viewport(R),S.scissor(Q),S.setScissorTest(re),X){const Se=$.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,Z)}else if(Ee){const Se=I;for(let Pe=0;Pe<C.textures.length;Pe++){const De=$.get(C.textures[Pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pe,De.__webglTexture,Z,Se)}}else if(C!==null&&Z!==0){const Se=$.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,Z)}B=-1};function Zh(C){const I=$.get(C);return(I.__readFormat!==C.format||I.__readType!==C.type)&&(I.__readFormat=C.format,I.__readType=C.type,I.__formatReadable=N.textureFormatReadable(C.format),I.__typeReadable=N.textureTypeReadable(C.type)),I}this.readRenderTargetPixels=function(C,I,Z,j,X,Ee,be,Se=0){if(!(C&&C.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){S.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const De=C.textures[Se],Ge=De.format,Ye=De.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se);const Ne=Zh(De);if(Ne.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=C.width-j&&Z>=0&&Z<=C.height-X&&F.readPixels(I,Z,j,X,_e.convert(Ge),_e.convert(Ye),Ee)}finally{const De=V!==null?$.get(V).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(C,I,Z,j,X,Ee,be,Se=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe)if(I>=0&&I<=C.width-j&&Z>=0&&Z<=C.height-X){S.bindFramebuffer(F.FRAMEBUFFER,Pe);const De=C.textures[Se],Ge=De.format,Ye=De.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se);const Ne=Zh(De);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),F.readPixels(I,Z,j,X,_e.convert(Ge),_e.convert(Ye),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Lt=V!==null?$.get(V).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Lt);const vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fE(F,vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(at),F.deleteSync(vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,I=null,Z=0){const j=Math.pow(2,-Z),X=Math.floor(C.image.width*j),Ee=Math.floor(C.image.height*j),be=I!==null?I.x:0,Se=I!==null?I.y:0;J.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,be,Se,X,Ee),S.unbindTexture()},this.copyTextureToTexture=function(C,I,Z=null,j=null,X=0,Ee=0){let be,Se,Pe,De,Ge,Ye,Ne,at,Lt;const vt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(Z!==null)be=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ge=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const Pt=Math.pow(2,-X);be=Math.floor(vt.width*Pt),Se=Math.floor(vt.height*Pt),C.isDataArrayTexture?Pe=vt.depth:C.isData3DTexture?Pe=Math.floor(vt.depth*Pt):Pe=1,De=0,Ge=0,Ye=0}j!==null?(Ne=j.x,at=j.y,Lt=j.z):(Ne=0,at=0,Lt=0);const ut=_e.convert(I.format),$t=_e.convert(I.type);let Ce;I.isData3DTexture?(J.setTexture3D(I,0),Ce=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(J.setTexture2DArray(I,0),Ce=F.TEXTURE_2D_ARRAY):(J.setTexture2D(I,0),Ce=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const nn=S.getParameter(F.UNPACK_ROW_LENGTH),et=S.getParameter(F.UNPACK_IMAGE_HEIGHT),Ln=S.getParameter(F.UNPACK_SKIP_PIXELS),ii=S.getParameter(F.UNPACK_SKIP_ROWS),Bi=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,De),S.pixelStorei(F.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const qr=C.isDataArrayTexture||C.isData3DTexture,ct=I.isDataArrayTexture||I.isData3DTexture;if(C.isDepthTexture){const Pt=$.get(C),zi=$.get(I),ht=$.get(Pt.__renderTarget),Hi=$.get(zi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,ht.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Kr=0;Kr<Pe;Kr++)qr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(C).__webglTexture,X,Ye+Kr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$.get(I).__webglTexture,Ee,Lt+Kr)),F.blitFramebuffer(De,Ge,be,Se,Ne,at,be,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||$.has(C)){const Pt=$.get(C),zi=$.get(I);S.bindFramebuffer(F.READ_FRAMEBUFFER,k),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let ht=0;ht<Pe;ht++)qr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,X,Ye+ht):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,X),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zi.__webglTexture,Ee,Lt+ht):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zi.__webglTexture,Ee),X!==0?F.blitFramebuffer(De,Ge,be,Se,Ne,at,be,Se,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(Ce,Ee,Ne,at,Lt+ht,De,Ge,be,Se):F.copyTexSubImage2D(Ce,Ee,Ne,at,De,Ge,be,Se);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ce,Ee,Ne,at,Lt,be,Se,Pe,ut,$t,vt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,Ee,Ne,at,Lt,be,Se,Pe,ut,vt.data):F.texSubImage3D(Ce,Ee,Ne,at,Lt,be,Se,Pe,ut,$t,vt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,Ne,at,be,Se,ut,$t,vt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,Ne,at,vt.width,vt.height,ut,vt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,Ne,at,be,Se,ut,$t,vt);S.pixelStorei(F.UNPACK_ROW_LENGTH,nn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Ln),S.pixelStorei(F.UNPACK_SKIP_ROWS,ii),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Bi),Ee===0&&I.generateMipmaps&&F.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(C){$.get(C).__webglFramebuffer===void 0&&J.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?J.setTextureCube(C,0):C.isData3DTexture?J.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?J.setTexture2DArray(C,0):J.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){te=0,K=0,V=null,S.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function QA(){const t=ae.useRef(null);return ae.useEffect(()=>{const e=t.current;if(!e)return;const n=new AE,i=e.clientWidth||window.innerWidth,r=e.clientHeight||450,s=new wn(45,i/r,.1,1e3);s.position.z=24;const a=new JA({antialias:!0,alpha:!0});a.setSize(i,r),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.shadowMap.enabled=!0,e.appendChild(a.domElement);const o=new ZE(16777215,1.2);n.add(o);const l=new bu(16096779,3,50);l.position.set(12,10,15),n.add(l);const c=new bu(14753140,3,50);c.position.set(-12,-8,12),n.add(c);const h=new bu(8141549,2,50);h.position.set(0,12,8),n.add(h);const f=new _a;n.add(f);const u=new _l({color:16096779,metalness:.9,roughness:.2,emissive:7877903,emissiveIntensity:.2}),p=new _l({color:12456508,metalness:.7,roughness:.25,emissive:4982041,emissiveIntensity:.3}),g=new _l({color:889992,metalness:.8,roughness:.2}),E=new XE({color:16777215,transmission:.7,opacity:1,transparent:!0,roughness:.1,metalness:.1,ior:1.5}),m=new Zl(3.2,.45,24,64),d=new an(m,u);d.position.set(7.5,2.5,-2),d.rotation.x=Math.PI/3,f.add(d);const _=new Zl(2.8,.4,24,64),M=new an(_,p);M.position.set(9.2,1.2,0),M.rotation.y=Math.PI/4,f.add(M);const y=new Fh(1.6,0),T=new an(y,E);T.position.set(-8,3,-1),f.add(T);const b=new an(y,g);b.position.set(-6,-4,2),b.scale.set(.7,.7,.7),f.add(b);const w=new Uh(1.3,0),x=new an(w,u);x.position.set(4,-4.5,3),f.add(x);const A=new an(w,p);A.position.set(-10,0,-4),A.scale.set(.8,.8,.8),f.add(A);const L=120,D=new Nn,z=new Float32Array(L*3),q=new Float32Array(L);for(let se=0;se<L*3;se+=3)z[se]=(Math.random()-.5)*45,z[se+1]=(Math.random()-.5)*25,z[se+2]=(Math.random()-.5)*20,q[se/3]=Math.random();D.setAttribute("position",new mi(z,3));const k=document.createElement("canvas");k.width=32,k.height=32;const W=k.getContext("2d"),te=W.createRadialGradient(16,16,0,16,16,16);te.addColorStop(0,"rgba(255, 255, 255, 1)"),te.addColorStop(.3,"rgba(245, 158, 11, 0.8)"),te.addColorStop(1,"rgba(225, 29, 116, 0)"),W.fillStyle=te,W.fillRect(0,0,32,32);const K=new BE(k),V=new tx({size:.65,map:K,transparent:!0,blending:Id,depthWrite:!1}),B=new OE(D,V);n.add(B);let P=0,R=0,Q=0,re=0;const pe=se=>{const Me=e.getBoundingClientRect(),le=se.clientX-Me.left,Re=se.clientY-Me.top;P=(le/i-.5)*2,R=-(Re/r-.5)*2};window.addEventListener("mousemove",pe);const de=()=>{if(!e)return;const se=e.clientWidth,Me=e.clientHeight||450;s.aspect=se/Me,s.updateProjectionMatrix(),a.setSize(se,Me)};window.addEventListener("resize",de);let he,O=new ew;const Y=()=>{he=requestAnimationFrame(Y);const se=O.getElapsedTime();Q+=(P-Q)*.05,re+=(R-re)*.05,f.rotation.y=Q*.4+se*.15,f.rotation.x=-re*.3,d.rotation.z+=.008,d.rotation.y+=.012,M.rotation.x+=.01,M.rotation.z+=.007,T.rotation.y+=.015,T.rotation.x+=.01,b.rotation.y-=.012,x.rotation.y+=.01,A.rotation.x-=.01,T.position.y=3+Math.sin(se*1.5)*.6,b.position.y=-4+Math.cos(se*1.8)*.5,x.position.y=-4.5+Math.sin(se*2)*.4,d.position.y=2.5+Math.cos(se*1.2)*.4,B.rotation.y=se*.03,B.rotation.x=re*.1,a.render(n,s)};return Y(),()=>{window.removeEventListener("mousemove",pe),window.removeEventListener("resize",de),cancelAnimationFrame(he),e&&a.domElement&&e.removeChild(a.domElement),a.dispose()}},[]),v.jsx("div",{ref:t,className:"celebration-3d-canvas","aria-hidden":"true"})}function mg({events:t,pickCat:e,onBook:n,onQuickView:i}){const r=Ys(),s=t.slice(0,4),a=[{key:"Marriage",starting:6e4},{key:"Haldi",starting:22e3},{key:"Birthday",starting:18e3},{key:"Baby Shower",starting:28e3}];return v.jsxs("div",{children:[v.jsx(R1,{}),v.jsxs("section",{className:"hero hero-3d-container",children:[v.jsx(QA,{}),v.jsxs("div",{className:"hero-content-layer",children:[v.jsxs("div",{className:"hero-pill",children:[v.jsx(Hn,{size:16}),v.jsx("span",{children:"Interactive 3D Milestone Decor Experience"})]}),v.jsxs("h1",{children:["Your Milestone, ",v.jsx("br",{}),v.jsx("span",{className:"gradient-text",children:"Beautifully Crafted."})]}),v.jsx("p",{className:"hero-desc",children:"From opulent royal wedding mandaps and sunny marigold haldi courtyards to milestone birthdays and dreamy baby showers. Choose a mastercrafted package or design your bespoke theme in minutes."}),v.jsxs("div",{className:"hero-buttons",children:[v.jsxs("button",{className:"btn",onClick:()=>r("/events"),children:[v.jsx("span",{children:"Explore All Packages"}),v.jsx(fl,{size:18})]}),v.jsxs("button",{className:"btn ghost",onClick:()=>r("/create"),children:[v.jsx(Hn,{size:16}),v.jsx("span",{children:"Design Custom Theme"})]})]}),v.jsxs("div",{className:"hero-stats",children:[v.jsxs("div",{className:"stat-item",children:[v.jsx("div",{className:"stat-icon",style:{background:"var(--cat-marriage-bg)",color:"var(--cat-marriage)"},children:v.jsx(v1,{size:20})}),v.jsxs("div",{className:"stat-info",children:[v.jsx("h4",{children:"1,200+"}),v.jsx("p",{children:"Milestone Events"})]})]}),v.jsxs("div",{className:"stat-item",children:[v.jsx("div",{className:"stat-icon",style:{background:"var(--cat-haldi-bg)",color:"var(--cat-haldi)"},children:v.jsx(Dd,{size:20})}),v.jsxs("div",{className:"stat-info",children:[v.jsx("h4",{children:"4.98 / 5"}),v.jsx("p",{children:"Verified Rating"})]})]}),v.jsxs("div",{className:"stat-item",children:[v.jsx("div",{className:"stat-icon",style:{background:"var(--cat-babyshower-bg)",color:"var(--cat-babyshower)"},children:v.jsx(gm,{size:20})}),v.jsxs("div",{className:"stat-info",children:[v.jsx("h4",{children:"100%"}),v.jsx("p",{children:"Fresh Floral & Artisan Decor"})]})]})]})]})]}),v.jsxs("section",{style:{marginTop:"3rem"},children:[v.jsxs("div",{className:"section-header",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"section-title",children:"Select Your Celebration"}),v.jsx("p",{className:"section-sub",children:"Immersive aesthetics, color palettes, and ritual-ready styling for every milestone."})]}),v.jsxs("button",{className:"btn secondary sm",onClick:()=>r("/events"),children:["View All (",t.length,")"]})]}),v.jsx("div",{className:"cat-grid",children:a.map(({key:o,starting:l})=>{const c=St[o];return v.jsx(Ki,{maxTilt:10,glare:!0,style:{height:"100%",borderRadius:"var(--radius-lg)"},children:v.jsx("div",{className:"cat-card",style:{backgroundImage:`url(${c.image})`,height:"100%"},onClick:()=>e(o),role:"button",tabIndex:0,onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&e(o)},"aria-label":`Explore ${o} packages starting from ${En(l)}`,children:v.jsxs("div",{className:"cat-card-content",children:[v.jsxs("span",{className:"cat-top-tag",children:[c.e," ",o]}),v.jsx("h3",{children:o}),v.jsx("p",{children:c.tagline}),v.jsxs("div",{className:"cat-bottom-action",children:[v.jsxs("span",{children:["From ",En(l)]}),v.jsxs("span",{children:["Browse themes ",v.jsx(fl,{size:14})]})]})]})})},o)})})]}),v.jsxs("section",{style:{marginTop:"4rem"},children:[v.jsxs("div",{className:"section-header",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"section-title",children:"Featured Milestone Packages"}),v.jsx("p",{className:"section-sub",children:"Most beloved handcrafted packages curated with full decor, lighting, and stage flow."})]}),v.jsxs("button",{className:"btn secondary sm",onClick:()=>r("/events"),children:["See all packages ",v.jsx(fl,{size:15})]})]}),v.jsx("div",{className:"event-grid",children:s.map(o=>v.jsx(Eh,{ev:o,onBook:n,onQuickView:i},o.id))})]}),v.jsxs("section",{style:{marginTop:"4.5rem"},children:[v.jsx("div",{className:"section-header",style:{marginBottom:"0.5rem"},children:v.jsxs("div",{children:[v.jsx("h2",{className:"section-title",children:"The CelebrationCraft Standard"}),v.jsx("p",{className:"section-sub",children:"Why thousands of families trust us with their sacred and once-in-a-lifetime moments."})]})}),v.jsxs("div",{className:"pillars-grid",children:[v.jsx(Ki,{maxTilt:6,glare:!1,children:v.jsxs("div",{className:"pillar-card",style:{height:"100%"},children:[v.jsx("div",{className:"pillar-icon",children:v.jsx(c_,{size:24})}),v.jsx("h3",{children:"Artisan Decorators"}),v.jsx("p",{children:"Every floral garland, mandap drape, and balloon installation is handcrafted by veteran event artisans."})]})}),v.jsx(Ki,{maxTilt:6,glare:!1,children:v.jsxs("div",{className:"pillar-card",style:{height:"100%"},children:[v.jsx("div",{className:"pillar-icon",children:v.jsx(gm,{size:24})}),v.jsx("h3",{children:"Fresh Floral Guarantee"}),v.jsx("p",{children:"We source authentic fragrant marigolds, tuberoses, and roses on the morning of your event for maximum freshness."})]})}),v.jsx(Ki,{maxTilt:6,glare:!1,children:v.jsxs("div",{className:"pillar-card",style:{height:"100%"},children:[v.jsx("div",{className:"pillar-icon",children:v.jsx(n_,{size:24})}),v.jsx("h3",{children:"Zero Day-Of Stress"}),v.jsx("p",{children:"Our dedicated on-site coordinator manages complete delivery, setup 2 hours prior, and tear-down after the event."})]})}),v.jsx(Ki,{maxTilt:6,glare:!1,children:v.jsxs("div",{className:"pillar-card",style:{height:"100%"},children:[v.jsx("div",{className:"pillar-icon",children:v.jsx(Mh,{size:24})}),v.jsx("h3",{children:"Transparent Pricing"}),v.jsx("p",{children:"No hidden travel fees or surprise costs. All prices are transparent and customizable to your guest count."})]})})]})]}),v.jsxs("section",{style:{marginTop:"4.5rem"},children:[v.jsx("div",{className:"section-header",style:{marginBottom:"0.5rem"},children:v.jsxs("div",{children:[v.jsx("h2",{className:"section-title",children:"Cherished Moments & Reviews"}),v.jsx("p",{className:"section-sub",children:"Real stories from brides, parents, and party hosts."})]})}),v.jsx("div",{className:"testimonials-grid",children:A1.map((o,l)=>v.jsx(Ki,{maxTilt:6,glare:!0,style:{height:"100%",borderRadius:"var(--radius-md)"},children:v.jsxs("div",{className:"testimonial-card",style:{height:"100%"},children:[v.jsxs("div",{children:[v.jsx("div",{className:"testimonial-stars",children:Array.from({length:o.stars},(c,h)=>v.jsx(Dd,{size:15,fill:"#f59e0b",strokeWidth:0},h))}),v.jsxs("p",{style:{marginTop:"0.8rem"},children:["“",o.quote,"”"]})]}),v.jsxs("div",{className:"testimonial-author",children:[v.jsx("div",{className:"testimonial-avatar",children:o.avatar}),v.jsxs("div",{children:[v.jsx("h4",{children:o.name}),v.jsxs("span",{children:[o.event," (",o.date,")"]})]})]})]})},l))})]})]})}function eR({events:t,query:e,setQuery:n,onBook:i,onQuickView:r}){const[s,a]=ae.useState("All"),[o,l]=ae.useState("featured"),c=["All",...Object.keys(St)],h=ae.useMemo(()=>{let u=[...t];const p=e.trim().toLowerCase();return s!=="All"&&(u=u.filter(g=>g.category.toLowerCase()===s.toLowerCase())),p&&(u=u.filter(g=>g.name.toLowerCase().includes(p)||g.category.toLowerCase().includes(p)||g.desc&&g.desc.toLowerCase().includes(p)||g.tagline&&g.tagline.toLowerCase().includes(p))),o==="price-asc"?u.sort((g,E)=>g.price-E.price):o==="price-desc"?u.sort((g,E)=>E.price-g.price):o==="rating"&&u.sort((g,E)=>(E.rating||0)-(g.rating||0)),u},[t,e,s,o]),f=u=>u==="All"?t.length:t.filter(p=>p.category.toLowerCase()===u.toLowerCase()).length;return v.jsxs("div",{children:[v.jsxs("div",{style:{marginBottom:"1.5rem"},children:[v.jsx("h2",{children:"Event Packages & Themes"}),v.jsx("p",{className:"sub",children:"Explore handcrafted packages with transparent pricing, full setup, floral arrangements, and coordination."})]}),v.jsxs("div",{className:"tools-bar",children:[v.jsxs("div",{className:"search-row",children:[v.jsxs("div",{className:"search-input-wrap",children:[v.jsx(M1,{size:18,className:"search-icon"}),v.jsx("input",{type:"search","aria-label":"Search events",placeholder:"Search packages, e.g. 'Haldi', 'Balloon Arch', 'Royal Mandap'...",value:e,onChange:u=>n(u.target.value)}),e&&v.jsx("button",{className:"clear-search-btn",onClick:()=>n(""),"aria-label":"Clear search query",children:v.jsx(b_,{size:16})})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[v.jsx(w1,{size:16,color:"var(--mute)"}),v.jsxs("select",{className:"sort-select",value:o,onChange:u=>l(u.target.value),"aria-label":"Sort packages by",children:[v.jsx("option",{value:"featured",children:"Sort by: Featured & Popular"}),v.jsx("option",{value:"price-asc",children:"Price: Low to High"}),v.jsx("option",{value:"price-desc",children:"Price: High to Low"}),v.jsx("option",{value:"rating",children:"Highest Rated"})]})]})]}),v.jsx("div",{className:"chips",role:"tablist","aria-label":"Celebration Categories",children:c.map(u=>{const p=St[u],g=s===u;return v.jsxs("button",{role:"tab",className:"chip","aria-pressed":g,"aria-selected":g,onClick:()=>{a(u),e&&n("")},style:g&&p?{borderColor:p.c,background:p.c,color:"#fff"}:void 0,children:[v.jsx("span",{children:p?p.e:"✨"}),v.jsx("span",{children:u}),v.jsx("span",{className:"chip-count",children:f(u)})]},u)})})]}),v.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:v.jsxs("span",{style:{fontSize:"0.92rem",color:"var(--mute)",fontWeight:600},children:["Showing ",h.length," celebration ",h.length===1?"package":"packages"]})}),h.length>0?v.jsx("div",{className:"event-grid",children:h.map(u=>v.jsx(Eh,{ev:u,onBook:i,onQuickView:r},u.id))}):v.jsxs("div",{className:"empty",children:[v.jsx(Hn,{size:40,color:"var(--mute)"}),v.jsxs("div",{children:[v.jsx("h3",{style:{fontSize:"1.3rem",marginBottom:"0.3rem"},children:"No packages found"}),v.jsx("p",{children:"We couldn't find any celebration packages matching your search criteria."})]}),v.jsx("button",{className:"btn secondary sm",onClick:()=>{n(""),a("All")},children:"Clear Filters & View All"})]})]})}var kh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),R=P.getContext("2d");R.fillRect(0,0,1,1);var Q=P.transferToImageBitmap();R.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var R=n.exports.Promise,Q=R!==void 0?R:e.Promise;return typeof Q=="function"?new Q(P):(P(l,l),null)}var h=function(P,R){return{transform:function(Q){if(P)return Q;if(R.has(Q))return R.get(Q);var re=new OffscreenCanvas(Q.width,Q.height),pe=re.getContext("2d");return pe.drawImage(Q,0,0),R.set(Q,re),re},clear:function(){R.clear()}}}(o,new Map),f=function(){var P=Math.floor(16.666666666666668),R,Q,re={},pe=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(de){var he=Math.random();return re[he]=requestAnimationFrame(function O(Y){pe===Y||pe+P-1<Y?(pe=Y,delete re[he],de()):re[he]=requestAnimationFrame(O)}),he},Q=function(de){re[de]&&cancelAnimationFrame(re[de])}):(R=function(de){return setTimeout(de,P)},Q=function(de){return clearTimeout(de)}),{frame:R,cancel:Q}}(),u=function(){var P,R,Q={};function re(pe){function de(he,O){pe.postMessage({options:he||{},callback:O})}pe.init=function(O){var Y=O.transferControlToOffscreen();pe.postMessage({canvas:Y},[Y])},pe.fire=function(O,Y,se){if(R)return de(O,null),R;var Me=Math.random().toString(36).slice(2);return R=c(function(le){function Re($e){$e.data.callback===Me&&(delete Q[Me],pe.removeEventListener("message",Re),R=null,h.clear(),se(),le())}pe.addEventListener("message",Re),de(O,Me),Q[Me]=Re.bind(null,{data:{callback:Me}})}),R},pe.reset=function(){pe.postMessage({reset:!0});for(var O in Q)Q[O](),delete Q[O]}}return function(){if(P)return P;if(!i&&s){var pe=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([pe])))}catch(de){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",de),null}re(P)}return P}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(P,R){return R?R(P):P}function E(P){return P!=null}function m(P,R,Q){return g(P&&E(P[R])?P[R]:p[R],Q)}function d(P){return P<0?0:Math.floor(P)}function _(P,R){return Math.floor(Math.random()*(R-P))+P}function M(P){return parseInt(P,16)}function y(P){return P.map(T)}function T(P){var R=String(P).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:M(R.substring(0,2)),g:M(R.substring(2,4)),b:M(R.substring(4,6))}}function b(P){var R=m(P,"origin",Object);return R.x=m(R,"x",Number),R.y=m(R,"y",Number),R}function w(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function x(P){var R=P.getBoundingClientRect();P.width=R.width,P.height=R.height}function A(P){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=P,R}function L(P,R,Q,re,pe,de,he,O,Y){P.save(),P.translate(R,Q),P.rotate(de),P.scale(re,pe),P.arc(0,0,1,he,O,Y),P.restore()}function D(P){var R=P.angle*(Math.PI/180),Q=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-R+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function z(P,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var Q=R.tick++/R.totalTicks,re=R.x+R.random*R.tiltCos,pe=R.y+R.random*R.tiltSin,de=R.wobbleX+R.random*R.tiltCos,he=R.wobbleY+R.random*R.tiltSin;if(P.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-Q)+")",P.beginPath(),a&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))P.fill(K(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(de-re)*.1,Math.abs(he-pe)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var O=Math.PI/10*R.wobble,Y=Math.abs(de-re)*.1,se=Math.abs(he-pe)*.1,Me=R.shape.bitmap.width*R.scalar,le=R.shape.bitmap.height*R.scalar,Re=new DOMMatrix([Math.cos(O)*Y,Math.sin(O)*Y,-Math.sin(O)*se,Math.cos(O)*se,R.x,R.y]);Re.multiplySelf(new DOMMatrix(R.shape.matrix));var $e=P.createPattern(h.transform(R.shape.bitmap),"no-repeat");$e.setTransform(Re),P.globalAlpha=1-Q,P.fillStyle=$e,P.fillRect(R.x-Me/2,R.y-le/2,Me,le),P.globalAlpha=1}else if(R.shape==="circle")P.ellipse?P.ellipse(R.x,R.y,Math.abs(de-re)*R.ovalScalar,Math.abs(he-pe)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):L(P,R.x,R.y,Math.abs(de-re)*R.ovalScalar,Math.abs(he-pe)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var we=Math.PI/2*3,Be=4*R.scalar,je=8*R.scalar,Oe=R.x,Qe=R.y,dt=5,mt=Math.PI/dt;dt--;)Oe=R.x+Math.cos(we)*je,Qe=R.y+Math.sin(we)*je,P.lineTo(Oe,Qe),we+=mt,Oe=R.x+Math.cos(we)*Be,Qe=R.y+Math.sin(we)*Be,P.lineTo(Oe,Qe),we+=mt;else P.moveTo(Math.floor(R.x),Math.floor(R.y)),P.lineTo(Math.floor(R.wobbleX),Math.floor(pe)),P.lineTo(Math.floor(de),Math.floor(he)),P.lineTo(Math.floor(re),Math.floor(R.wobbleY));return P.closePath(),P.fill(),R.tick<R.totalTicks}function q(P,R,Q,re,pe){var de=R.slice(),he=P.getContext("2d"),O,Y,se=c(function(Me){function le(){O=Y=null,he.clearRect(0,0,re.width,re.height),h.clear(),pe(),Me()}function Re(){i&&!(re.width===r.width&&re.height===r.height)&&(re.width=P.width=r.width,re.height=P.height=r.height),!re.width&&!re.height&&(Q(P),re.width=P.width,re.height=P.height),he.clearRect(0,0,re.width,re.height),de=de.filter(function($e){return z(he,$e)}),de.length?O=f.frame(Re):le()}O=f.frame(Re),Y=le});return{addFettis:function(Me){return de=de.concat(Me),se},canvas:P,promise:se,reset:function(){O&&f.cancel(O),Y&&Y()}}}function k(P,R){var Q=!P,re=!!m(R||{},"resize"),pe=!1,de=m(R,"disableForReducedMotion",Boolean),he=s&&!!m(R||{},"useWorker"),O=he?u():null,Y=Q?w:x,se=P&&O?!!P.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,le;function Re(we,Be,je){for(var Oe=m(we,"particleCount",d),Qe=m(we,"angle",Number),dt=m(we,"spread",Number),mt=m(we,"startVelocity",Number),gt=m(we,"decay",Number),bt=m(we,"gravity",Number),F=m(we,"drift",Number),Ut=m(we,"colors",y),it=m(we,"ticks",Number),N=m(we,"shapes"),S=m(we,"scalar"),H=!!m(we,"flat"),$=b(we),J=Oe,ue=[],fe=P.width*$.x,ee=P.height*$.y;J--;)ue.push(D({x:fe,y:ee,angle:Qe,spread:dt,startVelocity:mt,color:Ut[J%Ut.length],shape:N[_(0,N.length)],ticks:it,decay:gt,gravity:bt,drift:F,scalar:S,flat:H}));return le?le.addFettis(ue):(le=q(P,ue,Y,Be,je),le.promise)}function $e(we){var Be=de||m(we,"disableForReducedMotion",Boolean),je=m(we,"zIndex",Number);if(Be&&Me)return c(function(mt){mt()});Q&&le?P=le.canvas:Q&&!P&&(P=A(je),document.body.appendChild(P)),re&&!se&&Y(P);var Oe={width:P.width,height:P.height};O&&!se&&O.init(P),se=!0,O&&(P.__confetti_initialized=!0);function Qe(){if(O){var mt={getBoundingClientRect:function(){if(!Q)return P.getBoundingClientRect()}};Y(mt),O.postMessage({resize:{width:mt.width,height:mt.height}});return}Oe.width=Oe.height=null}function dt(){le=null,re&&(pe=!1,e.removeEventListener("resize",Qe)),Q&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,se=!1)}return re&&!pe&&(pe=!0,e.addEventListener("resize",Qe,!1)),O?O.fire(we,Oe,dt):Re(we,Oe,dt)}return $e.reset=function(){O&&O.reset(),le&&le.reset()},$e}var W;function te(){return W||(W=k(null,{useWorker:!0,resize:!0})),W}function K(P,R,Q,re,pe,de,he){var O=new Path2D(P),Y=new Path2D;Y.addPath(O,new DOMMatrix(R));var se=new Path2D;return se.addPath(Y,new DOMMatrix([Math.cos(he)*pe,Math.sin(he)*pe,-Math.sin(he)*de,Math.cos(he)*de,Q,re])),se}function V(P){if(!a)throw new Error("path confetti are not supported in this browser");var R,Q;typeof P=="string"?R=P:(R=P.path,Q=P.matrix);var re=new Path2D(R),pe=document.createElement("canvas"),de=pe.getContext("2d");if(!Q){for(var he=1e3,O=he,Y=he,se=0,Me=0,le,Re,$e=0;$e<he;$e+=2)for(var we=0;we<he;we+=2)de.isPointInPath(re,$e,we,"nonzero")&&(O=Math.min(O,$e),Y=Math.min(Y,we),se=Math.max(se,$e),Me=Math.max(Me,we));le=se-O,Re=Me-Y;var Be=10,je=Math.min(Be/le,Be/Re);Q=[je,0,0,je,-Math.round(le/2+O)*je,-Math.round(Re/2+Y)*je]}return{type:"path",path:R,matrix:Q}}function B(P){var R,Q=1,re="#000000",pe='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?R=P:(R=P.text,Q="scalar"in P?P.scalar:Q,pe="fontFamily"in P?P.fontFamily:pe,re="color"in P?P.color:re);var de=10*Q,he=""+de+"px "+pe,O=new OffscreenCanvas(de,de),Y=O.getContext("2d");Y.font=he;var se=Y.measureText(R),Me=Math.ceil(se.actualBoundingBoxRight+se.actualBoundingBoxLeft),le=Math.ceil(se.actualBoundingBoxAscent+se.actualBoundingBoxDescent),Re=2,$e=se.actualBoundingBoxLeft+Re,we=se.actualBoundingBoxAscent+Re;Me+=Re+Re,le+=Re+Re,O=new OffscreenCanvas(Me,le),Y=O.getContext("2d"),Y.font=he,Y.fillStyle=re,Y.fillText(R,$e,we);var Be=1/Q;return{type:"bitmap",bitmap:O.transferToImageBitmap(),matrix:[Be,0,0,Be,-Me*Be/2,-le*Be/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=k,n.exports.shapeFromPath=V,n.exports.shapeFromText=B})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),kh,!1);const gx=kh.exports;kh.exports.create;function hn({label:t,error:e,children:n,className:i=""}){return v.jsxs("label",{className:i,children:[v.jsx("span",{children:t}),n,e&&v.jsxs("span",{className:"err",role:"alert",children:[v.jsx(f1,{size:14}),e]})]})}function tR({events:t,selected:e,setSelected:n,onBookCelebration:i}){const r=Ys(),[s,a]=ae.useState({name:"",phone:"",email:"",date:"",guests:"100",notes:""}),[o,l]=ae.useState([]),[c,h]=ae.useState({}),[f,u]=ae.useState(null),p=ae.useMemo(()=>t.find(w=>w.id===Number(e))||null,[t,e]),g=w=>x=>a({...s,[w]:x.target.value}),E=w=>{l(x=>x.includes(w)?x.filter(A=>A!==w):[...x,w])},m=p?p.price:0,d=o.reduce((w,x)=>{const A=Ro.find(L=>L.id===x);return w+(A?A.price:0)},0),_=m+d,M=()=>{const w={};s.name.trim().length<2&&(w.name="Please enter your full name."),(!s.phone.trim()||s.phone.trim().length<10)&&(w.phone="Enter a valid 10-digit mobile number."),e||(w.type="Please select a celebration package."),s.date?s.date<vm()&&(w.date="Event date must be today or in the future."):w.date="Please select an event date.";const x=Number(s.guests);return s.guests?(!Number.isInteger(x)||x<1||x>1e4)&&(w.guests="Guests must be between 1 and 10,000."):w.guests="Enter the estimated number of guests.",w},y=w=>{w.preventDefault();const x=M();if(h(x),!Object.keys(x).length){try{gx({particleCount:120,spread:80,origin:{y:.6},colors:["#e11d74","#f59e0b","#10b981","#7c3aed"]})}catch{}const A="CC-"+Math.floor(1e5+Math.random()*9e5),L={id:A,...s,event:p,addons:o.map(D=>Ro.find(z=>z.id===D)),grandTotal:_,bookingRef:A,status:"Confirmed",bookedAt:new Date().toISOString()};i&&i(L),u(L)}},T=()=>{window.print()};if(f){const w=St[f.event.category]||St.Other;return v.jsxs("div",{className:"booking-voucher",children:[v.jsxs("div",{className:"voucher-header",children:[v.jsxs("div",{className:"voucher-badge",children:[v.jsx(Sh,{size:16})," Booking Request Confirmed"]}),v.jsx("h3",{children:"Celebration Reserved!"}),v.jsxs("p",{style:{opacity:.9,marginTop:"0.4rem"},children:["Thank you, ",f.name.trim(),". Your dedicated celebration manager will contact you within 24 hours."]})]}),v.jsxs("div",{className:"voucher-body",children:[v.jsxs("div",{className:"voucher-code-box",children:[v.jsxs("div",{children:[v.jsx("span",{children:"Booking Reference Number"}),v.jsx("strong",{children:f.bookingRef})]}),v.jsxs("span",{className:"badge-pill",style:{background:w.c,color:"#fff"},children:[w.e," ",f.event.category]})]}),v.jsxs("div",{className:"voucher-dl",children:[v.jsxs("div",{className:"voucher-dl-item",children:[v.jsx("dt",{children:"Package"}),v.jsx("dd",{children:f.event.name})]}),v.jsxs("div",{className:"voucher-dl-item",children:[v.jsx("dt",{children:"Event Date"}),v.jsx("dd",{children:f.date})]}),v.jsxs("div",{className:"voucher-dl-item",children:[v.jsx("dt",{children:"Expected Guests"}),v.jsxs("dd",{children:[f.guests," People"]})]}),v.jsxs("div",{className:"voucher-dl-item",children:[v.jsx("dt",{children:"Contact Phone"}),v.jsx("dd",{children:f.phone})]})]}),f.addons&&f.addons.length>0&&v.jsxs("div",{style:{background:"var(--surface-hover)",padding:"1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--line)"},children:[v.jsx("span",{style:{fontSize:"0.85rem",color:"var(--mute)",display:"block",marginBottom:"0.4rem",fontWeight:700},children:"Selected Add-ons & Upgrades:"}),v.jsx("ul",{style:{margin:0,paddingLeft:"1.2rem",fontSize:"0.92rem",color:"var(--ink-secondary)"},children:f.addons.map(x=>v.jsxs("li",{children:[v.jsx("strong",{children:x.name})," (",En(x.price),")"]},x.id))})]}),v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",borderTop:"1.5px dashed var(--line)",paddingTop:"1rem"},children:[v.jsx("span",{style:{fontSize:"1.1rem",fontWeight:700},children:"Estimated Total Investment"}),v.jsx("span",{style:{fontSize:"1.8rem",fontWeight:800,fontFamily:"var(--font-heading)",color:"var(--accent)"},children:En(f.grandTotal)})]}),v.jsxs("div",{className:"voucher-actions",children:[v.jsxs("button",{className:"btn",onClick:()=>r("/bookings"),style:{background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",color:"#fff"},children:[v.jsx($v,{size:16})," View in My Bookings"]}),v.jsxs("button",{className:"btn secondary",onClick:T,children:[v.jsx(h_,{size:16})," Print Voucher"]}),v.jsx("button",{className:"btn secondary",onClick:()=>{u(null),a({name:"",phone:"",email:"",date:"",guests:"100",notes:""}),l([]),n("")},children:"Book Another Event"}),v.jsx("button",{className:"btn ghost",onClick:()=>r("/events"),children:"Back to Catalog"})]})]})]})}const b=p?St[p.category]||St.Other:null;return v.jsxs("div",{children:[v.jsxs("div",{children:[v.jsx("h2",{children:"Book Your Celebration"}),v.jsx("p",{className:"sub",children:"Lock in your preferred date and design details. Our master decorators coordinate everything seamlessly."})]}),v.jsxs("div",{className:"book-layout",children:[v.jsxs("form",{className:"booking-form",onSubmit:y,noValidate:!0,children:[v.jsxs("div",{className:"form-section-title",children:[v.jsx(b1,{size:18,color:"var(--accent)"}),v.jsx("span",{children:"1. Contact Details"})]}),v.jsx(hn,{label:"Full Name",error:c.name,children:v.jsx("input",{value:s.name,onChange:g("name"),"aria-invalid":!!c.name,placeholder:"e.g. Priyadarshini Rao"})}),v.jsxs("div",{className:"form-row",children:[v.jsx(hn,{label:"Mobile Phone",error:c.phone,children:v.jsx("input",{type:"tel",value:s.phone,onChange:g("phone"),"aria-invalid":!!c.phone,placeholder:"e.g. 9876543210"})}),v.jsx(hn,{label:"Email Address (Optional)",children:v.jsx("input",{type:"email",value:s.email,onChange:g("email"),placeholder:"name@example.com"})})]}),v.jsxs("div",{className:"form-section-title",children:[v.jsx(yh,{size:18,color:"var(--accent)"}),v.jsx("span",{children:"2. Celebration Package & Date"})]}),v.jsx(hn,{label:"Celebration Package",error:c.type,children:v.jsxs("select",{value:e,onChange:w=>n(w.target.value),"aria-invalid":!!c.type,children:[v.jsx("option",{value:"",children:"-- Choose a Celebration Package --"}),t.map(w=>v.jsxs("option",{value:w.id,children:[w.name," (",w.category,") — ",En(w.price)]},w.id))]})}),v.jsxs("div",{className:"form-row",children:[v.jsx(hn,{label:"Event Date",error:c.date,children:v.jsx("input",{type:"date",min:vm(),value:s.date,onChange:g("date"),"aria-invalid":!!c.date})}),v.jsx(hn,{label:"Estimated Guests",error:c.guests,children:v.jsx("input",{type:"number",min:"1",value:s.guests,onChange:g("guests"),"aria-invalid":!!c.guests,placeholder:"100"})})]}),v.jsxs("div",{className:"form-section-title",children:[v.jsx(Hn,{size:18,color:"var(--accent)"}),v.jsx("span",{children:"3. Enhancements & Add-ons"})]}),v.jsx("div",{className:"addons-grid",children:Ro.map(w=>{const x=o.includes(w.id);return v.jsxs("div",{className:`addon-card ${x?"selected":""}`,onClick:()=>E(w.id),role:"checkbox","aria-checked":x,tabIndex:0,onKeyDown:A=>{(A.key==="Enter"||A.key===" ")&&E(w.id)},children:[v.jsx("input",{type:"checkbox",className:"addon-checkbox",checked:x,onChange:()=>{},tabIndex:-1}),v.jsxs("div",{className:"addon-content",children:[v.jsxs("div",{className:"addon-header",children:[v.jsx("span",{className:"addon-title",children:w.name}),v.jsxs("span",{className:"addon-price",children:["+",En(w.price)]})]}),v.jsx("p",{className:"addon-desc",children:w.desc})]})]},w.id)})}),v.jsx(hn,{label:"Special Requests or Venue Notes (Optional)",children:v.jsx("textarea",{rows:"3",value:s.notes,onChange:g("notes"),placeholder:"e.g. Outdoor garden lawn, need setup completed by 9:00 AM, color preference..."})}),v.jsxs("button",{className:"btn",type:"submit",style:{padding:"0.95rem",fontSize:"1.05rem"},children:[v.jsx(Hn,{size:18})," Confirm & Send Booking Request"]})]}),v.jsxs("aside",{className:"summary-card",children:[v.jsx("h3",{style:{fontSize:"1.25rem",color:"var(--ink)"},children:"Booking Summary"}),p?v.jsxs("div",{className:"summary-event-preview",children:[v.jsx("img",{src:p.image||(b?b.image:"/images/haldi.jpg"),alt:p.name,className:"summary-preview-img"}),v.jsxs("div",{className:"summary-preview-details",children:[v.jsxs("span",{className:"badge-pill",style:{background:b?b.c:"var(--accent)",color:"#fff",alignSelf:"flex-start"},children:[b?b.e:"✨"," ",p.category]}),v.jsx("strong",{style:{fontSize:"1.1rem"},children:p.name}),v.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--mute)"},children:[p.duration||"4 - 5 Hours"," • ",p.capacity||"Up to 100 Guests"]})]})]}):v.jsx("div",{style:{padding:"2rem 1rem",textAlign:"center",background:"var(--surface-hover)",borderRadius:"var(--radius-sm)",border:"1.5px dashed var(--line)",color:"var(--mute)"},children:"Please select a package on the left to see live pricing & inclusions."}),v.jsxs("div",{className:"summary-line-items",children:[v.jsxs("div",{className:"summary-line",children:[v.jsx("span",{children:"Base Package Price"}),v.jsx("strong",{children:En(m)})]}),o.map(w=>{const x=Ro.find(A=>A.id===w);return x?v.jsxs("div",{className:"summary-line",children:[v.jsxs("span",{style:{fontSize:"0.85rem"},children:["+ ",x.name]}),v.jsx("span",{children:En(x.price)})]},w):null}),v.jsxs("div",{className:"summary-line",style:{fontSize:"0.82rem",color:"var(--mute)"},children:[v.jsx("span",{children:"Delivery, Setup & Teardown"}),v.jsx("span",{style:{color:"var(--success)",fontWeight:700},children:"FREE (Included)"})]})]}),v.jsxs("div",{className:"summary-total",children:[v.jsx("span",{className:"summary-total-label",children:"Total Investment"}),v.jsx("span",{className:"summary-total-val",children:En(_)})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",background:"var(--surface-hover)",padding:"0.75rem 1rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",color:"var(--mute)"},children:[v.jsx(Mh,{size:20,color:"var(--success)",style:{flexShrink:0}}),v.jsx("span",{children:"Zero cancellation fee up to 7 days before event."})]})]})]})]})}const gg={name:"",category:"Birthday",price:"",duration:"4 - 5 Hours",capacity:"Up to 100 Guests",tagline:"",desc:""};function nR({addEvent:t,onBook:e}){const n=Ys(),[i,r]=ae.useState(gg),[s,a]=ae.useState(["Custom Entrance Arch","Theme Cake Pedestal","Ambient Lighting"]),[o,l]=ae.useState(""),[c,h]=ae.useState({}),[f,u]=ae.useState(null),p=y=>T=>r({...i,[y]:T.target.value}),g=()=>{o.trim()&&!s.includes(o.trim())&&(a([...s,o.trim()]),l(""))},E=y=>{a(s.filter((T,b)=>b!==y))},m=()=>{const y={};return i.name.trim().length<3&&(y.name="Give the theme a title of at least 3 characters."),(!i.price||Number(i.price)<=0)&&(y.price="Enter a valid base package price above zero."),i.desc.trim().length<15&&(y.desc="Describe the decor concept in at least 15 characters."),y},d=y=>{y.preventDefault();const T=m();if(h(T),Object.keys(T).length)return;const b=St[i.category]||St.Other,w=t({name:i.name.trim(),category:i.category,price:Number(i.price),duration:i.duration,capacity:i.capacity,tagline:i.tagline.trim()||i.desc.slice(0,70)+"...",desc:i.desc.trim(),image:b.image,features:s.length>0?s:["Custom Decor Setup","On-site Manager"],included:s});try{gx({particleCount:80,spread:60,origin:{y:.6}})}catch{}u(w),r(gg)},_=St[i.category]||St.Birthday,M={id:999999,name:i.name.trim()||"Your Custom Dream Theme",category:i.category,price:Number(i.price)||25e3,duration:i.duration||"4 - 5 Hours",capacity:i.capacity||"Up to 100 Guests",image:_.image,badge:"Custom Concept",rating:5,reviewsCount:1,tagline:i.tagline.trim()||"Custom handcrafted decor tailored specifically for your special day.",desc:i.desc.trim()||"Complete personalized ambiance, customized color palette, stage background, and coordinator.",features:s.length>0?s:["Custom Entrance Arch","Theme Cake Table"]};return v.jsxs("div",{children:[v.jsxs("div",{children:[v.jsx("h2",{children:"Custom Theme Studio"}),v.jsx("p",{className:"sub",children:"Have a unique theme concept in mind? Design and configure your package with instant catalog inclusion."})]}),f&&v.jsxs("div",{style:{background:"var(--surface)",border:"2px solid var(--success)",borderRadius:"var(--radius-lg)",padding:"1.5rem",marginBottom:"2rem",display:"flex",flexDirection:"column",gap:"0.8rem"},role:"status",children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--success)"},children:[v.jsx(Sh,{size:22}),v.jsxs("h3",{style:{fontSize:"1.3rem",color:"var(--ink)"},children:["“",f.name,"” is now live in the catalog!"]})]}),v.jsxs("p",{style:{color:"var(--ink-secondary)"},children:["Your custom theme is active and ready for immediate booking under the ",f.category," category."]}),v.jsxs("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap",marginTop:"0.4rem"},children:[v.jsxs("button",{className:"btn sm",onClick:()=>e(f.id),children:[v.jsx(Hn,{size:15})," Book It Now"]}),v.jsx("button",{className:"btn secondary sm",onClick:()=>n("/events"),children:"View in Catalog"})]})]}),v.jsxs("div",{className:"studio-layout",children:[v.jsxs("form",{className:"booking-form",onSubmit:d,noValidate:!0,children:[v.jsxs("div",{className:"form-section-title",children:[v.jsx(c_,{size:18,color:"var(--accent)"}),v.jsx("span",{children:"Theme Configuration"})]}),v.jsx(hn,{label:"Theme / Package Name",error:c.name,children:v.jsx("input",{value:i.name,onChange:p("name"),"aria-invalid":!!c.name,placeholder:"e.g. Boho Botanical Garden Baby Shower"})}),v.jsxs("div",{className:"form-row",children:[v.jsx(hn,{label:"Celebration Category",children:v.jsx("select",{value:i.category,onChange:p("category"),children:Object.keys(St).map(y=>v.jsxs("option",{value:y,children:[St[y].e," ",y]},y))})}),v.jsx(hn,{label:"Base Price (₹)",error:c.price,children:v.jsx("input",{type:"number",min:"1",value:i.price,onChange:p("price"),"aria-invalid":!!c.price,placeholder:"e.g. 35000"})})]}),v.jsxs("div",{className:"form-row",children:[v.jsx(hn,{label:"Setup Duration",children:v.jsx("input",{value:i.duration,onChange:p("duration"),placeholder:"e.g. 5 Hours"})}),v.jsx(hn,{label:"Guest Capacity",children:v.jsx("input",{value:i.capacity,onChange:p("capacity"),placeholder:"e.g. Up to 150 Guests"})})]}),v.jsx(hn,{label:"Short Catchy Tagline (Optional)",children:v.jsx("input",{value:i.tagline,onChange:p("tagline"),placeholder:"e.g. Dreamy eucalyptus leaves, fairy light canopies & cozy floor cushions."})}),v.jsx(hn,{label:"Detailed Decor Concept & Inclusions",error:c.desc,children:v.jsx("textarea",{rows:"4",value:i.desc,onChange:p("desc"),"aria-invalid":!!c.desc,placeholder:"Describe the mood, centerpiece setups, backdrop drapes, floral styles, lighting, and any customized interactive corners..."})}),v.jsxs("div",{children:[v.jsx("label",{style:{marginBottom:"0.5rem"},children:"Key Included Items (Interactive Tags)"}),v.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"0.6rem"},children:[v.jsx("input",{value:o,onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&(y.preventDefault(),g())},placeholder:"Type item e.g. 'Photo Booth' and click Add"}),v.jsxs("button",{type:"button",className:"btn secondary sm",onClick:g,style:{flexShrink:0},children:[v.jsx(Ld,{size:16})," Add"]})]}),v.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:s.map((y,T)=>v.jsxs("span",{className:"chip",style:{fontSize:"0.82rem",padding:"0.25rem 0.65rem",background:"var(--surface-hover)"},children:[y,v.jsx("button",{type:"button",onClick:()=>E(T),style:{background:"none",border:"none",cursor:"pointer",padding:0,marginLeft:"0.3rem",color:"var(--mute)"},"aria-label":`Remove ${y}`,children:"×"})]},T))})]}),v.jsxs("button",{className:"btn",type:"submit",style:{padding:"0.95rem",fontSize:"1.05rem"},children:[v.jsx(Hn,{size:18})," Launch Custom Theme to Catalog"]})]}),v.jsxs("aside",{className:"live-preview-box",children:[v.jsxs("div",{className:"live-preview-badge",children:[v.jsx("span",{className:"live-preview-pulse"}),v.jsx("span",{children:"Live Interactive Card Preview"})]}),v.jsx(Eh,{ev:M,onBook:()=>{},onQuickView:()=>{}})]})]})]})}function iR({bookings:t,onCancelBooking:e,onRebook:n,onAddSampleBooking:i}){var p;const r=Ys(),[s,a]=ae.useState("all"),[o,l]=ae.useState(null),c=t.filter(g=>s==="confirmed"?g.status==="Confirmed":s==="cancelled"?g.status==="Cancelled":!0),h=t.filter(g=>g.status==="Confirmed").length,f=t.filter(g=>g.status==="Cancelled").length,u=()=>{o&&(e(o.id),l(null))};return v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"1rem",marginBottom:"2rem"},children:[v.jsxs("div",{children:[v.jsx("h2",{children:"My Booked Celebrations"}),v.jsx("p",{className:"sub",children:"Review your confirmed milestone setups, manage dates, or cancel reservations anytime."})]}),v.jsxs("button",{className:"btn secondary sm",onClick:()=>r("/events"),children:[v.jsx(Ld,{size:16})," Book Another Event"]})]}),v.jsxs("div",{className:"chips",style:{marginBottom:"1.8rem"},children:[v.jsxs("button",{className:"chip","aria-pressed":s==="all",onClick:()=>a("all"),children:[v.jsx("span",{children:"All Reservations"}),v.jsx("span",{className:"chip-count",children:t.length})]}),v.jsxs("button",{className:"chip","aria-pressed":s==="confirmed",onClick:()=>a("confirmed"),children:[v.jsx("span",{children:"🟢 Confirmed & Active"}),v.jsx("span",{className:"chip-count",children:h})]}),v.jsxs("button",{className:"chip","aria-pressed":s==="cancelled",onClick:()=>a("cancelled"),children:[v.jsx("span",{children:"⚪ Cancelled"}),v.jsx("span",{className:"chip-count",children:f})]})]}),c.length>0?v.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.6rem"},children:c.map(g=>{var d,_,M,y;const E=St[(d=g.event)==null?void 0:d.category]||St.Other,m=g.status==="Confirmed";return v.jsx(Ki,{maxTilt:4,glare:!0,children:v.jsxs("div",{className:"booking-manage-card",style:{background:"var(--surface)",border:`1.5px solid ${m?"var(--line)":"var(--line-strong)"}`,borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"var(--shadow-md)",display:"grid",gridTemplateColumns:"240px 1fr",opacity:m?1:.78},children:[v.jsx("div",{style:{backgroundImage:`url(${((_=g.event)==null?void 0:_.image)||E.image})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative",minHeight:"180px"},children:v.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",padding:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between",color:"#fff"},children:[v.jsxs("span",{className:"badge-pill",style:{background:E.c,color:"#fff",alignSelf:"flex-start"},children:[E.e," ",(M=g.event)==null?void 0:M.category]}),v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.78rem",opacity:.85,display:"block"},children:"Reference"}),v.jsx("strong",{style:{fontFamily:"monospace",fontSize:"1.05rem"},children:g.id})]})]})}),v.jsxs("div",{style:{padding:"1.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"1rem"},children:[v.jsxs("div",{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"1rem",flexWrap:"wrap"},children:[v.jsxs("div",{children:[v.jsx("h3",{style:{fontSize:"1.4rem",color:"var(--ink)",marginBottom:"0.3rem"},children:(y=g.event)==null?void 0:y.name}),v.jsxs("span",{style:{fontSize:"0.88rem",color:"var(--mute)"},children:["Booked on ",new Date(g.bookedAt||Date.now()).toLocaleDateString("en-IN",{month:"short",day:"numeric",year:"numeric"})]})]}),m?v.jsxs("span",{className:"badge-pill",style:{background:"var(--success-bg)",color:"var(--success)",border:"1px solid var(--success)",fontWeight:700},children:[v.jsx(Sh,{size:14})," Confirmed & Scheduled"]}):v.jsxs("span",{className:"badge-pill",style:{background:"rgba(225, 29, 72, 0.1)",color:"#e11d48",border:"1px solid rgba(225, 29, 72, 0.3)",fontWeight:700},children:[v.jsx(p1,{size:14})," Booking Cancelled"]})]}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"0.8rem",margin:"1rem 0",padding:"0.9rem",background:"var(--surface-hover)",borderRadius:"var(--radius-sm)",border:"1px solid var(--line)"},children:[v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.78rem",color:"var(--mute)",display:"block"},children:"Event Date"}),v.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.95rem"},children:[v.jsx(yh,{size:15,color:"var(--accent)"}),g.date]})]}),v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.78rem",color:"var(--mute)",display:"block"},children:"Guest Count"}),v.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.95rem"},children:[v.jsx(T_,{size:15,color:"var(--accent)"}),g.guests," Guests"]})]}),v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.78rem",color:"var(--mute)",display:"block"},children:"Contact"}),v.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:"0.3rem",fontSize:"0.95rem"},children:[v.jsx(y1,{size:15,color:"var(--accent)"}),g.name," (",g.phone,")"]})]}),v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.78rem",color:"var(--mute)",display:"block"},children:"Total Amount"}),v.jsx("strong",{style:{fontSize:"1.1rem",color:"var(--ink)",fontFamily:"var(--font-heading)"},children:En(g.grandTotal)})]})]}),g.addons&&g.addons.length>0&&v.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--ink-secondary)",marginBottom:"0.6rem"},children:[v.jsx("span",{style:{fontWeight:600},children:"Includes Add-ons: "}),g.addons.map(T=>T.name).join(", ")]}),g.notes&&v.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--mute)",fontStyle:"italic"},children:["Notes: “",g.notes,"”"]})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"0.8rem",borderTop:"1px solid var(--line)",flexWrap:"wrap",gap:"0.6rem"},children:[v.jsxs("button",{className:"btn ghost sm",onClick:()=>window.print(),children:[v.jsx(h_,{size:15})," Print Receipt"]}),v.jsx("div",{style:{display:"flex",gap:"0.6rem"},children:m?v.jsxs("button",{className:"btn sm",style:{background:"linear-gradient(135deg, #e11d48 0%, #be123c 100%)",color:"#fff",boxShadow:"0 2px 8px rgba(225, 29, 72, 0.3)"},onClick:()=>l(g),children:[v.jsx(C1,{size:15})," Cancel Booking"]}):v.jsxs("button",{className:"btn sm",style:{background:E.gradient,color:"#fff"},onClick:()=>{var T;return n((T=g.event)==null?void 0:T.id)},children:[v.jsx(S1,{size:15})," Re-book Celebration"]})})]})]})]})},g.id)})}):v.jsxs("div",{className:"empty",children:[v.jsx(Hn,{size:44,color:"var(--accent)"}),v.jsxs("div",{children:[v.jsx("h3",{style:{fontSize:"1.4rem",marginBottom:"0.4rem"},children:s==="all"?"No Booked Celebrations Yet":`No ${s} celebrations found`}),v.jsx("p",{style:{maxWidth:"450px",margin:"0 auto",color:"var(--mute)"},children:"Explore our handcrafted event packages for birthdays, haldi ceremonies, royal weddings, and baby showers."})]}),v.jsxs("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap",marginTop:"0.6rem"},children:[v.jsxs("button",{className:"btn sm",onClick:()=>r("/events"),children:["Browse Event Catalog ",v.jsx(fl,{size:15})]}),i&&v.jsxs("button",{className:"btn secondary sm",onClick:i,children:[v.jsx(Ld,{size:15})," Add Sample Booking (for Testing)"]})]})]}),o&&v.jsx("div",{className:"modal-backdrop",onClick:()=>l(null),role:"dialog","aria-modal":"true",children:v.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),style:{maxWidth:"520px"},children:v.jsxs("div",{style:{padding:"2rem",display:"flex",flexDirection:"column",gap:"1.2rem"},children:[v.jsx("div",{style:{width:52,height:52,borderRadius:"var(--radius-full)",background:"rgba(225, 29, 72, 0.12)",color:"#e11d48",display:"grid",placeItems:"center"},children:v.jsx(E1,{size:28})}),v.jsxs("div",{children:[v.jsx("h3",{style:{fontSize:"1.45rem",color:"var(--ink)",marginBottom:"0.4rem"},children:"Cancel This Celebration?"}),v.jsxs("p",{style:{color:"var(--ink-secondary)",fontSize:"0.95rem",lineHeight:1.5},children:["Are you sure you want to cancel booking ",v.jsx("strong",{children:o.id})," for ",v.jsx("strong",{children:(p=o.event)==null?void 0:p.name})," on ",v.jsx("strong",{children:o.date}),"?"]})]}),v.jsxs("div",{style:{background:"var(--surface-hover)",padding:"0.85rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--line)",fontSize:"0.85rem",color:"var(--mute)"},children:["✨ ",v.jsx("strong",{children:"Zero Cancellation Penalty:"})," As per our CelebrationCraft guarantee, full cancellation is completely free."]}),v.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"0.8rem",marginTop:"0.5rem"},children:[v.jsx("button",{className:"btn secondary",onClick:()=>l(null),children:"Keep Booking"}),v.jsx("button",{className:"btn",style:{background:"linear-gradient(135deg, #e11d48 0%, #be123c 100%)",color:"#fff"},onClick:u,children:"Yes, Cancel Booking"})]})]})})})]})}function rR({ev:t,onClose:e,onBook:n}){if(!t)return null;const i=St[t.category]||St.Other;return v.jsx("div",{className:"modal-backdrop",onClick:e,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:v.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[v.jsx("button",{className:"modal-close-btn",onClick:e,"aria-label":"Close modal",children:v.jsx(b_,{size:20})}),v.jsx("div",{className:"modal-header-image",style:{backgroundImage:`url(${t.image||i.image})`},children:v.jsxs("div",{className:"modal-header-overlay",children:[v.jsxs("span",{className:"badge-pill",style:{background:i.c,color:"#fff",marginBottom:"0.5rem"},children:[i.e," ",t.category]}),v.jsx("h3",{id:"modal-title",children:t.name})]})}),v.jsxs("div",{className:"modal-body",children:[v.jsxs("div",{className:"modal-specs-grid",children:[v.jsxs("div",{className:"modal-spec-col",children:[v.jsx("span",{children:"Rating"}),v.jsxs("strong",{children:["★ ",t.rating||4.9," (",t.reviewsCount||45,"+)"]})]}),v.jsxs("div",{className:"modal-spec-col",children:[v.jsx("span",{children:"Guest Capacity"}),v.jsx("strong",{children:t.capacity||"Up to 100 Guests"})]}),v.jsxs("div",{className:"modal-spec-col",children:[v.jsx("span",{children:"Setup Duration"}),v.jsx("strong",{children:t.duration||"4 - 5 Hours"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{style:{fontSize:"1.1rem",marginBottom:"0.4rem",color:"var(--ink)"},children:"About this Celebration Package"}),v.jsx("p",{style:{color:"var(--ink-secondary)",fontSize:"0.95rem",lineHeight:1.6},children:t.desc})]}),v.jsxs("div",{children:[v.jsx("h4",{style:{fontSize:"1.1rem",marginBottom:"0.6rem",color:"var(--ink)"},children:"What’s Handcrafted & Included"}),v.jsx("div",{className:"modal-inclusions-list",children:(t.included||t.features||[]).map((r,s)=>v.jsxs("div",{className:"modal-inclusion-item",children:[v.jsx(Kv,{size:16,color:"var(--success)",strokeWidth:3}),v.jsx("span",{children:r})]},s))})]}),v.jsxs("div",{style:{background:"var(--surface-hover)",padding:"0.9rem 1.1rem",borderRadius:"var(--radius-sm)",border:"1px solid var(--line)",display:"flex",alignItems:"center",gap:"0.8rem"},children:[v.jsx(Mh,{size:26,color:"var(--success)",style:{flexShrink:0}}),v.jsxs("div",{children:[v.jsx("strong",{style:{fontSize:"0.92rem",display:"block"},children:"CelebrationCraft Promise"}),v.jsx("span",{style:{fontSize:"0.82rem",color:"var(--mute)"},children:"100% on-time setup, verified decor artisans, and fresh floral freshness guaranteed."})]})]})]}),v.jsxs("div",{className:"modal-footer",children:[v.jsxs("div",{children:[v.jsx("span",{style:{fontSize:"0.85rem",color:"var(--mute)",display:"block"},children:"All-Inclusive Price"}),v.jsx("strong",{style:{fontSize:"1.5rem",fontFamily:"var(--font-heading)",color:"var(--ink)"},children:En(t.price)})]}),v.jsxs("button",{className:"btn",style:{background:i.gradient,color:"#fff"},onClick:()=>{e(),n(t.id)},children:[v.jsx(Hn,{size:16})," Book This Package"]})]})]})})}const sR=[{id:"CC-2026-9481",event:A_[2],name:"Pooja Hegde",phone:"9876543210",email:"pooja@example.com",date:"2026-11-20",guests:"120",status:"Confirmed",addons:[{id:"photo",name:"Professional Candid Photography & Reels",price:12e3}],grandTotal:34e3,bookedAt:new Date(Date.now()-864e5*2).toISOString(),notes:"Courtyard setup required by 8:30 AM before ritual starts."}];function aR(){const t=Ys(),{pathname:e}=$s(),[n,i]=ae.useState(A_),[r,s]=ae.useState(""),[a,o]=ae.useState(""),[l,c]=ae.useState(null),[h,f]=ae.useState(()=>{const w=localStorage.getItem("celebrationcraft_bookings");if(w)try{return JSON.parse(w)}catch{}return sR});ae.useEffect(()=>{localStorage.setItem("celebrationcraft_bookings",JSON.stringify(h))},[h]);const[u,p]=ae.useState(()=>{const w=localStorage.getItem("theme");return w?w==="dark":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches});ae.useEffect(()=>{u?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))},[u]),ae.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const g=w=>{s(w),t("/events")},E=w=>{o(String(w)),t("/book")},m=w=>{f(x=>[w,...x])},d=w=>{f(x=>x.map(A=>A.id===w?{...A,status:"Cancelled"}:A))},_=w=>{w?(o(String(w)),t("/book")):t("/events")},M=()=>{const w=n[Math.floor(Math.random()*n.length)],A={id:"CC-"+Math.floor(1e5+Math.random()*9e5),event:w,name:"Sneha & Arjun Kapoor",phone:"9820011223",email:"sneha.k@example.com",date:"2026-12-05",guests:"150",status:"Confirmed",addons:[{id:"floral",name:"Fresh Exotic Floral Upgrade",price:8e3}],grandTotal:w.price+8e3,bookedAt:new Date().toISOString(),notes:"Main ballroom setup with floral entrance arch."};f(L=>[A,...L])},y=w=>{const x={...w,id:Date.now(),rating:5,reviewsCount:1,badge:"Custom Theme",features:w.features||[w.desc.slice(0,45)+"..."]};return i(A=>[x,...A]),x},T=h.filter(w=>w.status==="Confirmed").length,b=[{to:"/",label:"Home",icon:m1},{to:"/events",label:"Celebrations",icon:_1},{to:"/bookings",label:"My Bookings",icon:$v,badge:T>0?String(T):null},{to:"/book",label:"Book",icon:yh,badge:a?"1":null},{to:"/create",label:"Custom Studio",icon:h1}];return v.jsxs("div",{children:[v.jsx("header",{children:v.jsxs("div",{className:"bar",children:[v.jsx("div",{className:"logo-group",children:v.jsxs("button",{className:"logo",onClick:()=>t("/"),"aria-label":"CelebrationCraft Home",children:[v.jsx("span",{className:"logo-badge","aria-hidden":"true",children:v.jsx(Hn,{size:18})}),v.jsxs("span",{children:["Celebration",v.jsx("b",{children:"Craft"})]})]})}),v.jsxs("div",{className:"nav-actions",children:[v.jsx("nav",{"aria-label":"Main Navigation",children:b.map(({to:w,label:x,icon:A,badge:L})=>v.jsxs(JM,{to:w,end:!0,children:[v.jsx(A,{size:16}),v.jsx("span",{children:x}),L&&v.jsx("span",{style:{background:w==="/bookings"?"var(--success)":"var(--accent)",color:"#fff",fontSize:"0.72rem",padding:"0.1rem 0.45rem",borderRadius:"99px",fontWeight:700},children:L})]},w))}),v.jsx("button",{className:"theme-toggle-btn",onClick:()=>p(w=>!w),"aria-label":u?"Switch to light mode":"Switch to dark mode",title:u?"Switch to light mode":"Switch to dark mode",children:u?v.jsx(T1,{size:18}):v.jsx(x1,{size:18})})]})]})}),v.jsx("main",{children:v.jsxs(zM,{children:[v.jsx(Rr,{path:"/",element:v.jsx(mg,{events:n,pickCat:g,onBook:E,onQuickView:c})}),v.jsx(Rr,{path:"/events",element:v.jsx(eR,{events:n,query:r,setQuery:s,onBook:E,onQuickView:c})}),v.jsx(Rr,{path:"/bookings",element:v.jsx(iR,{bookings:h,onCancelBooking:d,onRebook:_,onAddSampleBooking:M})}),v.jsx(Rr,{path:"/book",element:v.jsx(tR,{events:n,selected:a,setSelected:o,onBookCelebration:m})}),v.jsx(Rr,{path:"/create",element:v.jsx(nR,{addEvent:y,onBook:E})}),v.jsx(Rr,{path:"*",element:v.jsx(mg,{events:n,pickCat:g,onBook:E,onQuickView:c})})]})}),l&&v.jsx(rR,{ev:l,onClose:()=>c(null),onBook:E}),v.jsxs("footer",{children:[v.jsxs("div",{className:"logo-group",style:{justifyContent:"center"},children:[v.jsx("span",{className:"logo-badge","aria-hidden":"true",style:{width:28,height:28},children:v.jsx(Hn,{size:15})}),v.jsx("strong",{style:{fontSize:"1.1rem"},children:"CelebrationCraft"})]}),v.jsx("p",{style:{maxWidth:"500px",margin:"0 auto"},children:"Crafting unforgettable celebrations, lavish Indian wedding mandaps, vibrant haldi mornings, milestone birthdays, and dreamy baby showers."}),v.jsxs("div",{className:"footer-links",children:[v.jsx("a",{href:"#browse",onClick:w=>{w.preventDefault(),t("/events")},children:"Catalog"}),v.jsx("a",{href:"#bookings",onClick:w=>{w.preventDefault(),t("/bookings")},children:"My Bookings"}),v.jsx("a",{href:"#custom",onClick:w=>{w.preventDefault(),t("/create")},children:"Custom Studio"}),v.jsx("a",{href:"#book",onClick:w=>{w.preventDefault(),t("/book")},children:"Book Consultation"})]}),v.jsxs("div",{style:{fontSize:"0.82rem",opacity:.75,marginTop:"0.5rem"},children:["© ",new Date().getFullYear()," CelebrationCraft. All rights reserved. Made for the moments that matter."]})]})]})}Iu.createRoot(document.getElementById("root")).render(v.jsx(bg.StrictMode,{children:v.jsx(YM,{children:v.jsx(aR,{})})}));
