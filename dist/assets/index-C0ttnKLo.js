(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Qv={exports:{}},Oc={},Jv={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma=Symbol.for("react.element"),CM=Symbol.for("react.portal"),RM=Symbol.for("react.fragment"),PM=Symbol.for("react.strict_mode"),LM=Symbol.for("react.profiler"),NM=Symbol.for("react.provider"),DM=Symbol.for("react.context"),IM=Symbol.for("react.forward_ref"),UM=Symbol.for("react.suspense"),FM=Symbol.for("react.memo"),kM=Symbol.for("react.lazy"),Pm=Symbol.iterator;function OM(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var ex={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tx=Object.assign,nx={};function lo(t,e,n){this.props=t,this.context=e,this.refs=nx,this.updater=n||ex}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ix(){}ix.prototype=lo.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=nx,this.updater=n||ex}var Fh=Uh.prototype=new ix;Fh.constructor=Uh;tx(Fh,lo.prototype);Fh.isPureReactComponent=!0;var Lm=Array.isArray,rx=Object.prototype.hasOwnProperty,kh={current:null},sx={key:!0,ref:!0,__self:!0,__source:!0};function ox(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rx.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ma,type:t,key:s,ref:o,props:r,_owner:kh.current}}function BM(t,e){return{$$typeof:Ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ma}function zM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zM(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ma:case CM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gu(o,0):i,Lm(r)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),Rl(r,e,n,"",function(c){return c})):r!=null&&(Oh(r)&&(r=BM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gu(s,a);o+=Rl(s,e,n,l,r)}else if(l=OM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gu(s,a++),o+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function VM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Pl={transition:null},HM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:kh};function ax(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=lo;We.Fragment=RM;We.Profiler=LM;We.PureComponent=Uh;We.StrictMode=PM;We.Suspense=UM;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HM;We.act=ax;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rx.call(e,l)&&!sx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ma,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:DM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NM,_context:t},t.Consumer=t};We.createElement=ox;We.createFactory=function(t){var e=ox.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:IM,render:t}};We.isValidElement=Oh;We.lazy=function(t){return{$$typeof:kM,_payload:{_status:-1,_result:t},_init:VM}};We.memo=function(t,e){return{$$typeof:FM,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};We.unstable_act=ax;We.useCallback=function(t,e){return Qt.current.useCallback(t,e)};We.useContext=function(t){return Qt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Qt.current.useEffect(t,e)};We.useId=function(){return Qt.current.useId()};We.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Qt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};We.useRef=function(t){return Qt.current.useRef(t)};We.useState=function(t){return Qt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Qt.current.useTransition()};We.version="18.3.1";Jv.exports=We;var oe=Jv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GM=oe,jM=Symbol.for("react.element"),WM=Symbol.for("react.fragment"),XM=Object.prototype.hasOwnProperty,$M=GM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YM={key:!0,ref:!0,__self:!0,__source:!0};function lx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)XM.call(e,i)&&!YM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jM,type:t,key:s,ref:o,props:r,_owner:$M.current}}Oc.Fragment=WM;Oc.jsx=lx;Oc.jsxs=lx;Qv.exports=Oc;var S=Qv.exports,Id={},cx={exports:{}},Tn={},ux={exports:{}},dx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,Q){var N=I.length;I.push(Q);e:for(;0<N;){var L=N-1>>>1,ie=I[L];if(0<r(ie,Q))I[L]=Q,I[N]=ie,N=L;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],N=I.pop();if(N!==Q){I[0]=N;e:for(var L=0,ie=I.length,se=ie>>>1;L<se;){var k=2*(L+1)-1,X=I[k],te=k+1,Z=I[te];if(0>r(X,N))te<ie&&0>r(Z,X)?(I[L]=Z,I[te]=N,L=te):(I[L]=X,I[k]=N,L=k);else if(te<ie&&0>r(Z,N))I[L]=Z,I[te]=N,L=te;else break e}}return Q}function r(I,Q){var N=I.sortIndex-Q.sortIndex;return N!==0?N:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=I)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function M(I){if(y=!1,v(I),!x)if(n(l)!==null)x=!0,$(C);else{var Q=n(c);Q!==null&&q(M,Q.startTime-I)}}function C(I,Q){x=!1,y&&(y=!1,h(P),P=-1),p=!0;var N=d;try{for(v(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||I&&!w());){var L=f.callback;if(typeof L=="function"){f.callback=null,d=f.priorityLevel;var ie=L(f.expirationTime<=Q);Q=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&i(l),v(Q)}else i(l);f=n(l)}if(f!==null)var se=!0;else{var k=n(c);k!==null&&q(M,k.startTime-Q),se=!1}return se}finally{f=null,d=N,p=!1}}var b=!1,A=null,P=-1,H=5,_=-1;function w(){return!(t.unstable_now()-_<H)}function W(){if(A!==null){var I=t.unstable_now();_=I;var Q=!0;try{Q=A(!0,I)}finally{Q?j():(b=!1,A=null)}}else b=!1}var j;if(typeof g=="function")j=function(){g(W)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ne=K.port2;K.port1.onmessage=W,j=function(){ne.postMessage(null)}}else j=function(){m(W,0)};function $(I){A=I,b||(b=!0,j())}function q(I,Q){P=m(function(){I(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,$(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var N=d;d=Q;try{return I()}finally{d=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=d;d=I;try{return Q()}finally{d=N}},t.unstable_scheduleCallback=function(I,Q,N){var L=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?L+N:L):N=L,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=N+ie,I={id:u++,callback:Q,priorityLevel:I,startTime:N,expirationTime:ie,sortIndex:-1},N>L?(I.sortIndex=N,e(c,I),n(l)===null&&I===n(c)&&(y?(h(P),P=-1):y=!0,q(M,N-L))):(I.sortIndex=ie,e(l,I),x||p||(x=!0,$(C))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var Q=d;return function(){var N=d;d=Q;try{return I.apply(this,arguments)}finally{d=N}}}})(dx);ux.exports=dx;var qM=ux.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KM=oe,En=qM;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fx=new Set,Jo={};function Qr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Jo[t]=e,t=0;t<e.length;t++)fx.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,ZM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Im={};function QM(t){return Ud.call(Im,t)?!0:Ud.call(Dm,t)?!1:ZM.test(t)?Im[t]=!0:(Dm[t]=!0,!1)}function JM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e1(t,e,n,i){if(e===null||typeof e>"u"||JM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,zh);zt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,zh);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,zh);zt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vh(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e1(e,n,r,i)&&(n=null),i||r===null?QM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=KM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),xs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),px=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),mx=Symbol.for("react.offscreen"),Um=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,vu;function Lo(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var xu=!1;function yu(t,e){if(!t||xu)return"";xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function t1(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case xs:return"Portal";case Fd:return"Profiler";case Hh:return"StrictMode";case kd:return"Suspense";case Od:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case px:return(t.displayName||"Context")+".Consumer";case hx:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jh:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function n1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i1(t){var e=gx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=i1(t))}function vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xx(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function Vd(t,e){xx(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hd(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(No(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function yx(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _x(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_x(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,Sx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){r1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function Mx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function Ex(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var s1=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(t,e){if(e){if(s1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,Os=null,Bs=null;function zm(t){if(t=Ta(t)){if(typeof Yd!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Gc(e),Yd(t.stateNode,t.type,e))}}function wx(t){Os?Bs?Bs.push(t):Bs=[t]:Os=t}function Tx(){if(Os){var t=Os,e=Bs;if(Bs=Os=null,zm(t),e)for(t=0;t<e.length;t++)zm(e[t])}}function Ax(t,e){return t(e)}function bx(){}var _u=!1;function Cx(t,e,n){if(_u)return t(e,n);_u=!0;try{return Ax(t,e,n)}finally{_u=!1,(Os!==null||Bs!==null)&&(bx(),Tx())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var qd=!1;if(Ci)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){qd=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{qd=!1}function o1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Vo=!1,Jl=null,ec=!1,Kd=null,a1={onError:function(t){Vo=!0,Jl=t}};function l1(t,e,n,i,r,s,o,a,l){Vo=!1,Jl=null,o1.apply(a1,arguments)}function c1(t,e,n,i,r,s,o,a,l){if(l1.apply(this,arguments),Vo){if(Vo){var c=Jl;Vo=!1,Jl=null}else throw Error(le(198));ec||(ec=!0,Kd=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(Jr(t)!==t)throw Error(le(188))}function u1(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vm(r),t;if(s===i)return Vm(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Px(t){return t=u1(t),t!==null?Lx(t):null}function Lx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lx(t);if(e!==null)return e;t=t.sibling}return null}var Nx=En.unstable_scheduleCallback,Hm=En.unstable_cancelCallback,d1=En.unstable_shouldYield,f1=En.unstable_requestPaint,Et=En.unstable_now,h1=En.unstable_getCurrentPriorityLevel,Xh=En.unstable_ImmediatePriority,Dx=En.unstable_UserBlockingPriority,tc=En.unstable_NormalPriority,p1=En.unstable_LowPriority,Ix=En.unstable_IdlePriority,Bc=null,ai=null;function m1(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:x1,g1=Math.log,v1=Math.LN2;function x1(t){return t>>>=0,t===0?32:31-(g1(t)/v1|0)|0}var Ga=64,ja=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=n&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=y1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ux(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function S1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Fx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kx,Yh,Ox,Bx,zx,Qd=!1,Wa=[],Qi=null,Ji=null,er=null,na=new Map,ia=new Map,$i=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ta(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E1(t,e,n,i,r){switch(e){case"focusin":return Qi=xo(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=xo(Ji,t,e,n,i,r),!0;case"mouseover":return er=xo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return na.set(s,xo(na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ia.set(s,xo(ia.get(s)||null,t,e,n,i,r)),!0}return!1}function Vx(t){var e=Fr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rx(n),e!==null){t.blockedOn=e,zx(t.priority,function(){Ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$d=i,n.target.dispatchEvent(i),$d=null}else return e=Ta(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function jm(t,e,n){Ll(t)&&n.delete(e)}function w1(){Qd=!1,Qi!==null&&Ll(Qi)&&(Qi=null),Ji!==null&&Ll(Ji)&&(Ji=null),er!==null&&Ll(er)&&(er=null),na.forEach(jm),ia.forEach(jm)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,Qd||(Qd=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,w1)))}function ra(t){function e(r){return yo(r,t)}if(0<Wa.length){yo(Wa[0],t);for(var n=1;n<Wa.length;n++){var i=Wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&yo(Qi,t),Ji!==null&&yo(Ji,t),er!==null&&yo(er,t),na.forEach(e),ia.forEach(e),n=0;n<$i.length;n++)i=$i[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<$i.length&&(n=$i[0],n.blockedOn===null);)Vx(n),n.blockedOn===null&&$i.shift()}var zs=Ui.ReactCurrentBatchConfig,ic=!0;function T1(t,e,n,i){var r=st,s=zs.transition;zs.transition=null;try{st=1,qh(t,e,n,i)}finally{st=r,zs.transition=s}}function A1(t,e,n,i){var r=st,s=zs.transition;zs.transition=null;try{st=4,qh(t,e,n,i)}finally{st=r,zs.transition=s}}function qh(t,e,n,i){if(ic){var r=Jd(t,e,n,i);if(r===null)Lu(t,e,i,rc,n),Gm(t,i);else if(E1(r,t,e,n,i))i.stopPropagation();else if(Gm(t,i),e&4&&-1<M1.indexOf(t)){for(;r!==null;){var s=Ta(r);if(s!==null&&kx(s),s=Jd(t,e,n,i),s===null&&Lu(t,e,i,rc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(t,e,i,null,n)}}var rc=null;function Jd(t,e,n,i){if(rc=null,t=Wh(i),t=Fr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rc=t,null}function Hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case Xh:return 1;case Dx:return 4;case tc:case p1:return 16;case Ix:return 536870912;default:return 16}default:return 16}}var Ki=null,Kh=null,Nl=null;function Gx(){if(Nl)return Nl;var t,e=Kh,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Nl=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xa(){return!0}function Wm(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xa:Wm,this.isPropagationStopped=Wm,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xa)},persist:function(){},isPersistent:Xa}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=An(co),wa=vt({},co,{view:0,detail:0}),b1=An(wa),Mu,Eu,_o,zc=vt({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Mu=t.screenX-_o.screenX,Eu=t.screenY-_o.screenY):Eu=Mu=0,_o=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Xm=An(zc),C1=vt({},zc,{dataTransfer:0}),R1=An(C1),P1=vt({},wa,{relatedTarget:0}),wu=An(P1),L1=vt({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),N1=An(L1),D1=vt({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I1=An(D1),U1=vt({},co,{data:0}),$m=An(U1),F1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O1[t])?!!e[t]:!1}function Qh(){return B1}var z1=vt({},wa,{key:function(t){if(t.key){var e=F1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V1=An(z1),H1=vt({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=An(H1),G1=vt({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),j1=An(G1),W1=vt({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=An(W1),$1=vt({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y1=An($1),q1=[9,13,27,32],Jh=Ci&&"CompositionEvent"in window,Ho=null;Ci&&"documentMode"in document&&(Ho=document.documentMode);var K1=Ci&&"TextEvent"in window&&!Ho,jx=Ci&&(!Jh||Ho&&8<Ho&&11>=Ho),qm=" ",Km=!1;function Wx(t,e){switch(t){case"keyup":return q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function Z1(t,e){switch(t){case"compositionend":return Xx(e);case"keypress":return e.which!==32?null:(Km=!0,qm);case"textInput":return t=e.data,t===qm&&Km?null:t;default:return null}}function Q1(t,e){if(_s)return t==="compositionend"||!Jh&&Wx(t,e)?(t=Gx(),Nl=Kh=Ki=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jx&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J1[t.type]:e==="textarea"}function $x(t,e,n,i){wx(i),e=sc(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,sa=null;function eE(t){ry(t,0)}function Vc(t){var e=Es(t);if(vx(e))return t}function tE(t,e){if(t==="change")return e}var Yx=!1;if(Ci){var Tu;if(Ci){var Au="oninput"in document;if(!Au){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Au=typeof Qm.oninput=="function"}Tu=Au}else Tu=!1;Yx=Tu&&(!document.documentMode||9<document.documentMode)}function Jm(){Go&&(Go.detachEvent("onpropertychange",qx),sa=Go=null)}function qx(t){if(t.propertyName==="value"&&Vc(sa)){var e=[];$x(e,sa,t,Wh(t)),Cx(eE,e)}}function nE(t,e,n){t==="focusin"?(Jm(),Go=e,sa=n,Go.attachEvent("onpropertychange",qx)):t==="focusout"&&Jm()}function iE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(sa)}function rE(t,e){if(t==="click")return Vc(e)}function sE(t,e){if(t==="input"||t==="change")return Vc(e)}function oE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:oE;function oa(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ud.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function Kx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zx(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aE(t){var e=Zx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kx(n.ownerDocument.documentElement,n)){if(i!==null&&ep(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tg(n,s);var o=tg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lE=Ci&&"documentMode"in document&&11>=document.documentMode,Ss=null,ef=null,jo=null,tf=!1;function ng(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tf||Ss==null||Ss!==Ql(i)||(i=Ss,"selectionStart"in i&&ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&oa(jo,i)||(jo=i,i=sc(ef,"onSelect"),0<i.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},bu={},Qx={};Ci&&(Qx=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Hc(t){if(bu[t])return bu[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qx)return bu[t]=e[n];return t}var Jx=Hc("animationend"),ey=Hc("animationiteration"),ty=Hc("animationstart"),ny=Hc("transitionend"),iy=new Map,ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){iy.set(t,e),Qr(e,[t])}for(var Cu=0;Cu<ig.length;Cu++){var Ru=ig[Cu],cE=Ru.toLowerCase(),uE=Ru[0].toUpperCase()+Ru.slice(1);pr(cE,"on"+uE)}pr(Jx,"onAnimationEnd");pr(ey,"onAnimationIteration");pr(ty,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(ny,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function rg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c1(i,e,void 0,t),t.currentTarget=null}function ry(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rg(r,a,c),s=l}}}if(ec)throw t=Kd,ec=!1,Kd=null,t}function ct(t,e){var n=e[af];n===void 0&&(n=e[af]=new Set);var i=t+"__bubble";n.has(i)||(sy(e,t,2,!1),n.add(i))}function Pu(t,e,n){var i=0;e&&(i|=4),sy(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Ya]){t[Ya]=!0,fx.forEach(function(n){n!=="selectionchange"&&(dE.has(n)||Pu(n,!1,t),Pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Pu("selectionchange",!1,e))}}function sy(t,e,n,i){switch(Hx(e)){case 1:var r=T1;break;case 4:r=A1;break;default:r=qh}n=r.bind(null,e,n,t),r=void 0,!qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cx(function(){var c=s,u=Wh(n),f=[];e:{var d=iy.get(t);if(d!==void 0){var p=Zh,x=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":p=V1;break;case"focusin":x="focus",p=wu;break;case"focusout":x="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=j1;break;case Jx:case ey:case ty:p=N1;break;case ny:p=X1;break;case"scroll":p=b1;break;case"wheel":p=Y1;break;case"copy":case"cut":case"paste":p=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ym}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,h!==null&&(M=ta(g,h),M!=null&&y.push(la(g,M,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,x,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$d&&(x=n.relatedTarget||n.fromElement)&&(Fr(x)||x[Ri]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Fr(x):null,x!==null&&(m=Jr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=Xm,M="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ym,M="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:Es(p),v=x==null?d:Es(x),d=new y(M,g+"leave",p,n,u),d.target=m,d.relatedTarget=v,M=null,Fr(u)===c&&(y=new y(h,g+"enter",x,n,u),y.target=v,y.relatedTarget=m,M=y),m=M,p&&x)t:{for(y=p,h=x,g=0,v=y;v;v=is(v))g++;for(v=0,M=h;M;M=is(M))v++;for(;0<g-v;)y=is(y),g--;for(;0<v-g;)h=is(h),v--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=is(y),h=is(h)}y=null}else y=null;p!==null&&sg(f,d,p,y,!1),x!==null&&m!==null&&sg(f,m,x,y,!0)}}e:{if(d=c?Es(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=tE;else if(Zm(d))if(Yx)C=sE;else{C=iE;var b=nE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=rE);if(C&&(C=C(t,c))){$x(f,C,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Hd(d,"number",d.value)}switch(b=c?Es(c):window,t){case"focusin":(Zm(b)||b.contentEditable==="true")&&(Ss=b,ef=c,jo=null);break;case"focusout":jo=ef=Ss=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,ng(f,n,u);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":ng(f,n,u)}var A;if(Jh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _s?Wx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(jx&&n.locale!=="ko"&&(_s||P!=="onCompositionStart"?P==="onCompositionEnd"&&_s&&(A=Gx()):(Ki=u,Kh="value"in Ki?Ki.value:Ki.textContent,_s=!0)),b=sc(c,P),0<b.length&&(P=new $m(P,t,null,n,u),f.push({event:P,listeners:b}),A?P.data=A:(A=Xx(n),A!==null&&(P.data=A)))),(A=K1?Z1(t,n):Q1(t,n))&&(c=sc(c,"onBeforeInput"),0<c.length&&(u=new $m("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}ry(f,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ta(t,n),s!=null&&i.unshift(la(t,s,r)),s=ta(t,e),s!=null&&i.push(la(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):r||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fE=/\r\n?/g,hE=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(fE,`
`).replace(hE,"")}function qa(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error(le(425))}function oc(){}var nf=null,rf=null;function sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(gE)}:of;function gE(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ra(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),oi="__reactFiber$"+uo,ca="__reactProps$"+uo,Ri="__reactContainer$"+uo,af="__reactEvents$"+uo,vE="__reactListeners$"+uo,xE="__reactHandles$"+uo;function Fr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[oi])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function Ta(t){return t=t[oi]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Gc(t){return t[ca]||null}var lf=[],ws=-1;function mr(t){return{current:t}}function dt(t){0>ws||(t.current=lf[ws],lf[ws]=null,ws--)}function at(t,e){ws++,lf[ws]=t.current,t.current=e}var cr={},Yt=mr(cr),an=mr(!1),Wr=cr;function $s(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function ac(){dt(an),dt(Yt)}function cg(t,e,n){if(Yt.current!==cr)throw Error(le(168));at(Yt,e),at(an,n)}function oy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,n1(t)||"Unknown",r));return vt({},n,i)}function lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Wr=Yt.current,at(Yt,t),at(an,an.current),!0}function ug(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=oy(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,dt(an),dt(Yt),at(Yt,t)):dt(an),at(an,n)}var yi=null,jc=!1,Du=!1;function ay(t){yi===null?yi=[t]:yi.push(t)}function yE(t){jc=!0,ay(t)}function gr(){if(!Du&&yi!==null){Du=!0;var t=0,e=st;try{var n=yi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,jc=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Nx(Xh,gr),r}finally{st=e,Du=!1}}return null}var Ts=[],As=0,cc=null,uc=0,Ln=[],Nn=0,Xr=null,Si=1,Mi="";function Cr(t,e){Ts[As++]=uc,Ts[As++]=cc,cc=t,uc=e}function ly(t,e,n){Ln[Nn++]=Si,Ln[Nn++]=Mi,Ln[Nn++]=Xr,Xr=t;var i=Si;t=Mi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Zn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function tp(t){t.return!==null&&(Cr(t,1),ly(t,1,0))}function np(t){for(;t===cc;)cc=Ts[--As],Ts[As]=null,uc=Ts[--As],Ts[As]=null;for(;t===Xr;)Xr=Ln[--Nn],Ln[Nn]=null,Mi=Ln[--Nn],Ln[Nn]=null,Si=Ln[--Nn],Ln[Nn]=null}var _n=null,xn=null,ht=!1,$n=null;function cy(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,xn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,xn=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(ht){var e=xn;if(e){var n=e;if(!dg(t,e)){if(cf(t))throw Error(le(418));e=tr(n.nextSibling);var i=_n;e&&dg(t,e)?cy(i,n):(t.flags=t.flags&-4097|2,ht=!1,_n=t)}}else{if(cf(t))throw Error(le(418));t.flags=t.flags&-4097|2,ht=!1,_n=t}}}function fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ka(t){if(t!==_n)return!1;if(!ht)return fg(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sf(t.type,t.memoizedProps)),e&&(e=xn)){if(cf(t))throw uy(),Error(le(418));for(;e;)cy(t,e),e=tr(e.nextSibling)}if(fg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=_n?tr(t.stateNode.nextSibling):null;return!0}function uy(){for(var t=xn;t;)t=tr(t.nextSibling)}function Ys(){xn=_n=null,ht=!1}function ip(t){$n===null?$n=[t]:$n.push(t)}var _E=Ui.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function dy(t){function e(h,g){if(t){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=sr(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,v,M){return g===null||g.tag!==6?(g=zu(v,h.mode,M),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,M){var C=v.type;return C===ys?u(h,g,v.props.children,M,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&hg(C)===g.type)?(M=r(g,v.props),M.ref=So(h,g,v),M.return=h,M):(M=zl(v.type,v.key,v.props,null,h.mode,M),M.ref=So(h,g,v),M.return=h,M)}function c(h,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Vu(v,h.mode,M),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function u(h,g,v,M,C){return g===null||g.tag!==7?(g=Gr(v,h.mode,M,C),g.return=h,g):(g=r(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zu(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return v=zl(g.type,g.key,g.props,null,h.mode,v),v.ref=So(h,null,g),v.return=h,v;case xs:return g=Vu(g,h.mode,v),g.return=h,g;case Wi:var M=g._init;return f(h,M(g._payload),v)}if(No(g)||go(g))return g=Gr(g,h.mode,v,null),g.return=h,g;Za(h,g)}return null}function d(h,g,v,M){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return v.key===C?l(h,g,v,M):null;case xs:return v.key===C?c(h,g,v,M):null;case Wi:return C=v._init,d(h,g,C(v._payload),M)}if(No(v)||go(v))return C!==null?null:u(h,g,v,M,null);Za(h,v)}return null}function p(h,g,v,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(v)||null,a(g,h,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case za:return h=h.get(M.key===null?v:M.key)||null,l(g,h,M,C);case xs:return h=h.get(M.key===null?v:M.key)||null,c(g,h,M,C);case Wi:var b=M._init;return p(h,g,v,b(M._payload),C)}if(No(M)||go(M))return h=h.get(v)||null,u(g,h,M,C,null);Za(g,M)}return null}function x(h,g,v,M){for(var C=null,b=null,A=g,P=g=0,H=null;A!==null&&P<v.length;P++){A.index>P?(H=A,A=null):H=A.sibling;var _=d(h,A,v[P],M);if(_===null){A===null&&(A=H);break}t&&A&&_.alternate===null&&e(h,A),g=s(_,g,P),b===null?C=_:b.sibling=_,b=_,A=H}if(P===v.length)return n(h,A),ht&&Cr(h,P),C;if(A===null){for(;P<v.length;P++)A=f(h,v[P],M),A!==null&&(g=s(A,g,P),b===null?C=A:b.sibling=A,b=A);return ht&&Cr(h,P),C}for(A=i(h,A);P<v.length;P++)H=p(A,h,P,v[P],M),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?P:H.key),g=s(H,g,P),b===null?C=H:b.sibling=H,b=H);return t&&A.forEach(function(w){return e(h,w)}),ht&&Cr(h,P),C}function y(h,g,v,M){var C=go(v);if(typeof C!="function")throw Error(le(150));if(v=C.call(v),v==null)throw Error(le(151));for(var b=C=null,A=g,P=g=0,H=null,_=v.next();A!==null&&!_.done;P++,_=v.next()){A.index>P?(H=A,A=null):H=A.sibling;var w=d(h,A,_.value,M);if(w===null){A===null&&(A=H);break}t&&A&&w.alternate===null&&e(h,A),g=s(w,g,P),b===null?C=w:b.sibling=w,b=w,A=H}if(_.done)return n(h,A),ht&&Cr(h,P),C;if(A===null){for(;!_.done;P++,_=v.next())_=f(h,_.value,M),_!==null&&(g=s(_,g,P),b===null?C=_:b.sibling=_,b=_);return ht&&Cr(h,P),C}for(A=i(h,A);!_.done;P++,_=v.next())_=p(A,h,P,_.value,M),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?P:_.key),g=s(_,g,P),b===null?C=_:b.sibling=_,b=_);return t&&A.forEach(function(W){return e(h,W)}),ht&&Cr(h,P),C}function m(h,g,v,M){if(typeof v=="object"&&v!==null&&v.type===ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case za:e:{for(var C=v.key,b=g;b!==null;){if(b.key===C){if(C=v.type,C===ys){if(b.tag===7){n(h,b.sibling),g=r(b,v.props.children),g.return=h,h=g;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Wi&&hg(C)===b.type){n(h,b.sibling),g=r(b,v.props),g.ref=So(h,b,v),g.return=h,h=g;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===ys?(g=Gr(v.props.children,h.mode,M,v.key),g.return=h,h=g):(M=zl(v.type,v.key,v.props,null,h.mode,M),M.ref=So(h,g,v),M.return=h,h=M)}return o(h);case xs:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Vu(v,h.mode,M),g.return=h,h=g}return o(h);case Wi:return b=v._init,m(h,g,b(v._payload),M)}if(No(v))return x(h,g,v,M);if(go(v))return y(h,g,v,M);Za(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,v),g.return=h,h=g):(n(h,g),g=zu(v,h.mode,M),g.return=h,h=g),o(h)):n(h,g)}return m}var qs=dy(!0),fy=dy(!1),dc=mr(null),fc=null,bs=null,rp=null;function sp(){rp=bs=fc=null}function op(t){var e=dc.current;dt(dc),t._currentValue=e}function df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){fc=t,rp=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(rp!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(fc===null)throw Error(le(308));bs=t,fc.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var kr=null;function ap(t){kr===null?kr=[t]:kr.push(t)}function hy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ap(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function lp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,ap(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}function pg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hc(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(d=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(p,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(p,f,d):x,d==null)break e;f=vt({},f,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=f}}function mg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Aa={},li=mr(Aa),ua=mr(Aa),da=mr(Aa);function Or(t){if(t===Aa)throw Error(le(174));return t}function cp(t,e){switch(at(da,e),at(ua,t),at(li,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jd(e,t)}dt(li),at(li,e)}function Ks(){dt(li),dt(ua),dt(da)}function my(t){Or(da.current);var e=Or(li.current),n=jd(e,t.type);e!==n&&(at(ua,t),at(li,n))}function up(t){ua.current===t&&(dt(li),dt(ua))}var pt=mr(0);function pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function dp(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Ul=Ui.ReactCurrentDispatcher,Uu=Ui.ReactCurrentBatchConfig,$r=0,gt=null,Rt=null,It=null,mc=!1,Wo=!1,fa=0,SE=0;function Vt(){throw Error(le(321))}function fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function hp(t,e,n,i,r,s){if($r=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?TE:AE,t=n(i,r),Wo){s=0;do{if(Wo=!1,fa=0,25<=s)throw Error(le(301));s+=1,It=Rt=null,e.updateQueue=null,Ul.current=bE,t=n(i,r)}while(Wo)}if(Ul.current=gc,e=Rt!==null&&Rt.next!==null,$r=0,It=Rt=gt=null,mc=!1,e)throw Error(le(300));return t}function pp(){var t=fa!==0;return fa=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function On(){if(Rt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,Rt=t;else{if(t===null)throw Error(le(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function ha(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=On(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=On(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gy(){}function vy(t,e){var n=gt,i=On(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,mp(_y.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,pa(9,yy.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(le(349));$r&30||xy(n,e,r)}return r}function xy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yy(t,e,n,i){e.value=n,e.getSnapshot=i,Sy(e)&&My(t)}function _y(t,e,n){return n(function(){Sy(e)&&My(t)})}function Sy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function My(t){var e=Pi(t,1);e!==null&&Qn(e,t,1,-1)}function gg(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=wE.bind(null,gt,t),[e.memoizedState,t]}function pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ey(){return On().memoizedState}function Fl(t,e,n,i){var r=ii();gt.flags|=t,r.memoizedState=pa(1|e,n,void 0,i===void 0?null:i)}function Wc(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&fp(i,o.deps)){r.memoizedState=pa(e,n,s,i);return}}gt.flags|=t,r.memoizedState=pa(1|e,n,s,i)}function vg(t,e){return Fl(8390656,8,t,e)}function mp(t,e){return Wc(2048,8,t,e)}function wy(t,e){return Wc(4,2,t,e)}function Ty(t,e){return Wc(4,4,t,e)}function Ay(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function by(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,Ay.bind(null,e,t),n)}function gp(){}function Cy(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ry(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Py(t,e,n){return $r&21?(ei(n,e)||(n=Ux(),gt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function ME(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Uu.transition;Uu.transition={};try{t(!1),e()}finally{st=n,Uu.transition=i}}function Ly(){return On().memoizedState}function EE(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ny(t))Dy(e,n);else if(n=hy(t,e,n,i),n!==null){var r=Zt();Qn(n,t,i,r),Iy(n,e,i)}}function wE(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ny(t))Dy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,ap(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hy(t,e,r,i),n!==null&&(r=Zt(),Qn(n,t,i,r),Iy(n,e,i))}}function Ny(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Dy(t,e){Wo=mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$h(t,n)}}var gc={readContext:kn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},TE={readContext:kn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:vg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4194308,4,Ay.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=EE.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:gg,useDebugValue:gp,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=gg(!1),e=t[0];return t=ME.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ii();if(ht){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Ut===null)throw Error(le(349));$r&30||xy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vg(_y.bind(null,i,s,t),[t]),i.flags|=2048,pa(9,yy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Ut.identifierPrefix;if(ht){var n=Mi,i=Si;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AE={readContext:kn,useCallback:Cy,useContext:kn,useEffect:mp,useImperativeHandle:by,useInsertionEffect:wy,useLayoutEffect:Ty,useMemo:Ry,useReducer:Fu,useRef:Ey,useState:function(){return Fu(ha)},useDebugValue:gp,useDeferredValue:function(t){var e=On();return Py(e,Rt.memoizedState,t)},useTransition:function(){var t=Fu(ha)[0],e=On().memoizedState;return[t,e]},useMutableSource:gy,useSyncExternalStore:vy,useId:Ly,unstable_isNewReconciler:!1},bE={readContext:kn,useCallback:Cy,useContext:kn,useEffect:mp,useImperativeHandle:by,useInsertionEffect:wy,useLayoutEffect:Ty,useMemo:Ry,useReducer:ku,useRef:Ey,useState:function(){return ku(ha)},useDebugValue:gp,useDeferredValue:function(t){var e=On();return Rt===null?e.memoizedState=t:Py(e,Rt.memoizedState,t)},useTransition:function(){var t=ku(ha)[0],e=On().memoizedState;return[t,e]},useMutableSource:gy,useSyncExternalStore:vy,useId:Ly,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),Il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Qn(e,t,r,i),Il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Qn(e,t,i,n),Il(e,t,i))}};function xg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,s):!0}function Uy(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=ln(e)?Wr:Yt.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function yg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=ln(e)?Wr:Yt.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ff(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xc.enqueueReplaceState(r,r.state,null),hc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=t1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function Fy(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xc||(xc=!0,wf=i),pf(t,e)},n}function ky(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new CE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=HE.bind(null,t,e,n),e.then(t,t))}function Sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var RE=Ui.ReactCurrentOwner,on=!1;function Kt(t,e,n,i){e.child=t===null?fy(e,null,n,i):qs(e,t.child,n,i)}function Eg(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=hp(t,e,n,i,s,r),n=pp(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&n&&tp(e),e.flags|=1,Kt(t,e,i,r),e.child)}function wg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Oy(t,e,s,i,r)):(t=zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Oy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(oa(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Li(t,e,r)}return mf(t,e,n,i,r)}function By(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Rs,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Rs,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(Rs,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(Rs,vn),vn|=i;return Kt(t,e,r,n),e.child}function zy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mf(t,e,n,i,r){var s=ln(n)?Wr:Yt.current;return s=$s(e,s),Vs(e,r),n=hp(t,e,n,i,s,r),i=pp(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(ht&&i&&tp(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Tg(t,e,n,i,r){if(ln(n)){var s=!0;lc(e)}else s=!1;if(Vs(e,r),e.stateNode===null)kl(t,e),Uy(e,n,i),hf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=ln(n)?Wr:Yt.current,c=$s(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&yg(e,o,i,c),Xi=!1;var d=e.memoizedState;o.state=d,hc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||an.current||Xi?(typeof u=="function"&&(ff(e,n,u,i),l=e.memoizedState),(a=Xi||xg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,py(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=ln(n)?Wr:Yt.current,l=$s(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&yg(e,o,i,l),Xi=!1,d=e.memoizedState,o.state=d,hc(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||an.current||Xi?(typeof p=="function"&&(ff(e,n,p,i),x=e.memoizedState),(c=Xi||xg(e,n,c,i,d,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gf(t,e,n,i,s,r)}function gf(t,e,n,i,r,s){zy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ug(e,n,!1),Li(t,e,s);i=e.stateNode,RE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&ug(e,n,!0),e.child}function Vy(t){var e=t.stateNode;e.pendingContext?cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cg(t,e.context,!1),cp(t,e.containerInfo)}function Ag(t,e,n,i,r){return Ys(),ip(r),e.flags|=256,Kt(t,e,n,i),e.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hy(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(pt,r&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qc(o,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=vf,t):vp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return PE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vf,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function vp(t,e){return e=qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&ip(i),qs(e,t.child,null,n),t=vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(le(422))),Qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=qc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=vf,s);if(!(e.mode&1))return Qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=Ou(s,i,void 0),Qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,on||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Qn(i,t,r,-1))}return Ep(),i=Ou(Error(le(421))),Qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=GE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=tr(r.nextSibling),_n=e,ht=!0,$n=null,t!==null&&(Ln[Nn++]=Si,Ln[Nn++]=Mi,Ln[Nn++]=Xr,Si=t.id,Mi=t.overflow,Xr=e),e=vp(e,i.children),e.flags|=4096,e)}function bg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),df(t.return,e,n)}function Bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LE(t,e,n){switch(e.tag){case 3:Vy(e),Ys();break;case 5:my(e);break;case 1:ln(e.type)&&lc(e);break;case 4:cp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(dc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Hy(t,e,n):(at(pt,pt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);at(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,By(t,e,n)}return Li(t,e,n)}var jy,yf,Wy,Xy;jy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};Wy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(li.current);var s=null;switch(n){case"input":r=zd(t,r),i=zd(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Gd(t,r),i=Gd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}Wd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function NE(t,e,n){var i=e.pendingProps;switch(np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return ln(e.type)&&ac(),Ht(e),null;case 3:return i=e.stateNode,Ks(),dt(an),dt(Yt),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(bf($n),$n=null))),yf(t,e),Ht(e),null;case 5:up(e);var r=Or(da.current);if(n=e.type,t!==null&&e.stateNode!=null)Wy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Ht(e),null}if(t=Or(li.current),Ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[ca]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Io.length;r++)ct(Io[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Fm(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Om(i,s),ct("invalid",i)}Wd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":Va(i),km(i,s,!0);break;case"textarea":Va(i),Bm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_x(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[ca]=i,jy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xd(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Io.length;r++)ct(Io[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Fm(t,i),r=zd(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Om(t,i),r=Gd(t,i),ct("invalid",t);break;default:r=i}Wd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ex(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Vh(t,s,l,o))}switch(n){case"input":Va(t),km(t,i,!1);break;case"textarea":Va(t),Bm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Xy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Or(da.current),Or(li.current),Ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Ht(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&xn!==null&&e.mode&1&&!(e.flags&128))uy(),Ys(),e.flags|=98560,s=!1;else if(s=Ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[oi]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else $n!==null&&(bf($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Pt===0&&(Pt=3):Ep())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ks(),yf(t,e),t===null&&aa(e.stateNode.containerInfo),Ht(e),null;case 10:return op(e.type._context),Ht(e),null;case 17:return ln(e.type)&&ac(),Ht(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pc(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Qs&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=pc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Ht(e),null}else 2*Et()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,at(pt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return Mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function DE(t,e){switch(np(e),e.tag){case 1:return ln(e.type)&&ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),dt(an),dt(Yt),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return up(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return Ks(),null;case 10:return op(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Ja=!1,Xt=!1,IE=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function _f(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Cg=!1;function UE(t,e){if(nf=ic,t=Zx(),ep(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:t,selectionRange:n},ic=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=Cg,Cg=!1,x}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&_f(e,n,s)}r=r.next}while(r!==i)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $y(t){var e=t.alternate;e!==null&&(t.alternate=null,$y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[ca],delete e[af],delete e[vE],delete e[xE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yy(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var kt=null,Xn=!1;function ki(t,e,n){for(n=n.child;n!==null;)qy(t,e,n),n=n.sibling}function qy(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:Xt||Cs(n,e);case 6:var i=kt,r=Xn;kt=null,ki(t,e,n),kt=i,Xn=r,kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Xn?(t=kt,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),ra(t)):Nu(kt,n.stateNode));break;case 4:i=kt,r=Xn,kt=n.stateNode.containerInfo,Xn=!0,ki(t,e,n),kt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_f(n,e,o),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Xt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,ki(t,e,n),Xt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IE),e.forEach(function(i){var r=jE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Xn=!1;break e;case 3:kt=a.stateNode.containerInfo,Xn=!0;break e;case 4:kt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(kt===null)throw Error(le(160));qy(s,o,r),kt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ky(e,t),e=e.sibling}function Ky(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ni(t),i&4){try{Xo(3,t,t.return),$c(3,t)}catch(y){_t(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:zn(e,t),ni(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(zn(e,t),ni(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{ea(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xx(r,s),Xd(a,o);var c=Xd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Ex(r,f):u==="dangerouslySetInnerHTML"?Sx(r,f):u==="children"?ea(r,f):Vh(r,u,f,c)}switch(a){case"input":Vd(r,s);break;case"textarea":yx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(zn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(zn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:zn(e,t),ni(t);break;case 13:zn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_p=Et())),i&4&&Pg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,zn(e,t),Xt=c):zn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(f=Se=u;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xo(4,d,d.return);break;case 1:Cs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){Ng(f);continue}}p!==null?(p.return=d,Se=p):Ng(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mx("display",o))}catch(y){_t(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){_t(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:zn(e,t),ni(t),i&4&&Pg(t);break;case 21:break;default:zn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yy(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ea(r,""),i.flags&=-33);var s=Rg(t);Ef(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rg(t);Mf(t,a,o);break;default:throw Error(le(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FE(t,e,n){Se=t,Zy(t)}function Zy(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ja;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Ja;var c=Xt;if(Ja=o,(Xt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Dg(r):l!==null?(l.return=o,Se=l):Dg(r);for(;s!==null;)Se=s,Zy(s),s=s.sibling;Se=r,Ja=a,Xt=c}Lg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Lg(t)}}function Lg(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||$c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Xt||e.flags&512&&Sf(e)}catch(d){_t(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Ng(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Dg(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Sf(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Sf(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var kE=Math.ceil,vc=Ui.ReactCurrentDispatcher,xp=Ui.ReactCurrentOwner,Fn=Ui.ReactCurrentBatchConfig,Ze=0,Ut=null,Ct=null,Bt=0,vn=0,Rs=mr(0),Pt=0,ma=null,Yr=0,Yc=0,yp=0,$o=null,rn=null,_p=0,Qs=1/0,xi=null,xc=!1,wf=null,ir=null,el=!1,Zi=null,yc=0,Yo=0,Tf=null,Ol=-1,Bl=0;function Zt(){return Ze&6?Et():Ol!==-1?Ol:Ol=Et()}function rr(t){return t.mode&1?Ze&2&&Bt!==0?Bt&-Bt:_E.transition!==null?(Bl===0&&(Bl=Ux()),Bl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Hx(t.type)),t):1}function Qn(t,e,n,i){if(50<Yo)throw Yo=0,Tf=null,Error(le(185));Ea(t,n,i),(!(Ze&2)||t!==Ut)&&(t===Ut&&(!(Ze&2)&&(Yc|=n),Pt===4&&Yi(t,Bt)),cn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Qs=Et()+500,jc&&gr()))}function cn(t,e){var n=t.callbackNode;_1(t,e);var i=nc(t,t===Ut?Bt:0);if(i===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?yE(Ig.bind(null,t)):ay(Ig.bind(null,t)),mE(function(){!(Ze&6)&&gr()}),n=null;else{switch(Fx(i)){case 1:n=Xh;break;case 4:n=Dx;break;case 16:n=tc;break;case 536870912:n=Ix;break;default:n=tc}n=s_(n,Qy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qy(t,e){if(Ol=-1,Bl=0,Ze&6)throw Error(le(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=nc(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_c(t,i);else{e=i;var r=Ze;Ze|=2;var s=e_();(Ut!==t||Bt!==e)&&(xi=null,Qs=Et()+500,Hr(t,e));do try{zE();break}catch(a){Jy(t,a)}while(!0);sp(),vc.current=s,Ze=r,Ct!==null?e=0:(Ut=null,Bt=0,e=Pt)}if(e!==0){if(e===2&&(r=Zd(t),r!==0&&(i=r,e=Af(t,r))),e===1)throw n=ma,Hr(t,0),Yi(t,i),cn(t,Et()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!OE(r)&&(e=_c(t,i),e===2&&(s=Zd(t),s!==0&&(i=s,e=Af(t,s))),e===1))throw n=ma,Hr(t,0),Yi(t,i),cn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Rr(t,rn,xi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=_p+500-Et(),10<e)){if(nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=of(Rr.bind(null,t,rn,xi),e);break}Rr(t,rn,xi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kE(i/1960))-i,10<i){t.timeoutHandle=of(Rr.bind(null,t,rn,xi),i);break}Rr(t,rn,xi);break;case 5:Rr(t,rn,xi);break;default:throw Error(le(329))}}}return cn(t,Et()),t.callbackNode===n?Qy.bind(null,t):null}function Af(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=_c(t,e),t!==2&&(e=rn,rn=n,e!==null&&bf(e)),t}function bf(t){rn===null?rn=t:rn.push.apply(rn,t)}function OE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~yp,e&=~Yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Ig(t){if(Ze&6)throw Error(le(327));Hs();var e=nc(t,0);if(!(e&1))return cn(t,Et()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var i=Zd(t);i!==0&&(e=i,n=Af(t,i))}if(n===1)throw n=ma,Hr(t,0),Yi(t,e),cn(t,Et()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,rn,xi),cn(t,Et()),null}function Sp(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Qs=Et()+500,jc&&gr())}}function qr(t){Zi!==null&&Zi.tag===0&&!(Ze&6)&&Hs();var e=Ze;Ze|=1;var n=Fn.transition,i=st;try{if(Fn.transition=null,st=1,t)return t()}finally{st=i,Fn.transition=n,Ze=e,!(Ze&6)&&gr()}}function Mp(){vn=Rs.current,dt(Rs)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pE(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(np(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:Ks(),dt(an),dt(Yt),dp();break;case 5:up(i);break;case 4:Ks();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:op(i.type._context);break;case 22:case 23:Mp()}n=n.return}if(Ut=t,Ct=t=sr(t.current,null),Bt=vn=e,Pt=0,ma=null,yp=Yc=Yr=0,rn=$o=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}kr=null}return t}function Jy(t,e){do{var n=Ct;try{if(sp(),Ul.current=gc,mc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if($r=0,It=Rt=gt=null,Wo=!1,fa=0,xp.current=null,n===null||n.return===null){Pt=1,ma=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Sg(o);if(p!==null){p.flags&=-257,Mg(p,o,a,s,e),p.mode&1&&_g(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){_g(s,c,e),Ep();break e}l=Error(le(426))}}else if(ht&&a.mode&1){var m=Sg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Mg(m,o,a,s,e),ip(Zs(l,a));break e}}s=l=Zs(l,a),Pt!==4&&(Pt=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Fy(s,l,e);pg(s,h);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ky(s,a,e);pg(s,M);break e}}s=s.return}while(s!==null)}n_(n)}catch(C){e=C,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function e_(){var t=vc.current;return vc.current=gc,t===null?gc:t}function Ep(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(Yr&268435455)&&!(Yc&268435455)||Yi(Ut,Bt)}function _c(t,e){var n=Ze;Ze|=2;var i=e_();(Ut!==t||Bt!==e)&&(xi=null,Hr(t,e));do try{BE();break}catch(r){Jy(t,r)}while(!0);if(sp(),Ze=n,vc.current=i,Ct!==null)throw Error(le(261));return Ut=null,Bt=0,Pt}function BE(){for(;Ct!==null;)t_(Ct)}function zE(){for(;Ct!==null&&!d1();)t_(Ct)}function t_(t){var e=r_(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?n_(t):Ct=e,xp.current=null}function n_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DE(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=NE(n,e,vn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function Rr(t,e,n){var i=st,r=Fn.transition;try{Fn.transition=null,st=1,VE(t,e,n,i)}finally{Fn.transition=r,st=i}return null}function VE(t,e,n,i){do Hs();while(Zi!==null);if(Ze&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(S1(t,s),t===Ut&&(Ct=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,s_(tc,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var o=st;st=1;var a=Ze;Ze|=4,xp.current=null,UE(t,n),Ky(n,t),aE(rf),ic=!!nf,rf=nf=null,t.current=n,FE(n),f1(),Ze=a,st=o,Fn.transition=s}else t.current=n;if(el&&(el=!1,Zi=t,yc=r),s=t.pendingLanes,s===0&&(ir=null),m1(n.stateNode),cn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xc)throw xc=!1,t=wf,wf=null,t;return yc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Tf?Yo++:(Yo=0,Tf=t):Yo=0,gr(),null}function Hs(){if(Zi!==null){var t=Fx(yc),e=Fn.transition,n=st;try{if(Fn.transition=null,st=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,yc=0,Ze&6)throw Error(le(331));var r=Ze;for(Ze|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Se=f;else for(;Se!==null;){u=Se;var d=u.sibling,p=u.return;if($y(u),u===c){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){o=Se;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Se=v;else e:for(o=g;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(C){_t(a,a.return,C)}if(a===o){Se=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Se=M;break e}Se=a.return}}if(Ze=r,gr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Bc,t)}catch{}i=!0}return i}finally{st=n,Fn.transition=e}}return!1}function Ug(t,e,n){e=Zs(n,e),e=Fy(t,e,1),t=nr(t,e,1),e=Zt(),t!==null&&(Ea(t,1,e),cn(t,e))}function _t(t,e,n){if(t.tag===3)Ug(t,t,n);else for(;e!==null;){if(e.tag===3){Ug(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Zs(n,t),t=ky(e,t,1),e=nr(e,t,1),t=Zt(),e!==null&&(Ea(e,1,t),cn(e,t));break}}e=e.return}}function HE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(Pt===4||Pt===3&&(Bt&130023424)===Bt&&500>Et()-_p?Hr(t,0):yp|=n),cn(t,e)}function i_(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=Zt();t=Pi(t,e),t!==null&&(Ea(t,e,n),cn(t,n))}function GE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i_(t,n)}function jE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),i_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,LE(t,e,n);on=!!(t.flags&131072)}else on=!1,ht&&e.flags&1048576&&ly(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;kl(t,e),t=e.pendingProps;var r=$s(e,Yt.current);Vs(e,n),r=hp(null,e,i,t,r,n);var s=pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lp(e),r.updater=Xc,e.stateNode=r,r._reactInternals=e,hf(e,i,t,n),e=gf(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&tp(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=XE(i),t=Wn(i,t),r){case 0:e=mf(null,e,i,t,n);break e;case 1:e=Tg(null,e,i,t,n);break e;case 11:e=Eg(null,e,i,t,n);break e;case 14:e=wg(null,e,i,Wn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Tg(t,e,i,r,n);case 3:e:{if(Vy(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,py(t,e),hc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(le(423)),e),e=Ag(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(le(424)),e),e=Ag(t,e,i,n,r);break e}else for(xn=tr(e.stateNode.containerInfo.firstChild),_n=e,ht=!0,$n=null,n=fy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Li(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return my(e),t===null&&uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,sf(i,r)?o=null:s!==null&&sf(i,s)&&(e.flags|=32),zy(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&uf(e),null;case 13:return Hy(t,e,n);case 4:return cp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Eg(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,at(dc,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!an.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=kn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),wg(t,e,i,r,n);case 15:return Oy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),kl(t,e),e.tag=1,ln(i)?(t=!0,lc(e)):t=!1,Vs(e,n),Uy(e,i,r),hf(e,i,r,n),gf(null,e,i,!0,t,n);case 19:return Gy(t,e,n);case 22:return By(t,e,n)}throw Error(le(156,e.tag))};function s_(t,e){return Nx(t,e)}function WE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new WE(t,e,n,i)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XE(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===jh)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Gr(n.children,r,s,e);case Hh:o=8,r|=8;break;case Fd:return t=In(12,n,e,r|2),t.elementType=Fd,t.lanes=s,t;case kd:return t=In(13,n,e,r),t.elementType=kd,t.lanes=s,t;case Od:return t=In(19,n,e,r),t.elementType=Od,t.lanes=s,t;case mx:return qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hx:o=10;break e;case px:o=9;break e;case Gh:o=11;break e;case jh:o=14;break e;case Wi:o=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function qc(t,e,n,i){return t=In(22,t,i,e),t.elementType=mx,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Vu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Tp(t,e,n,i,r,s,o,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lp(s),t}function YE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function o_(t){if(!t)return cr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(ln(n))return oy(t,n,e)}return e}function a_(t,e,n,i,r,s,o,a,l){return t=Tp(n,i,!0,t,r,s,o,a,l),t.context=o_(null),n=t.current,i=Zt(),r=rr(n),s=Ti(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,Ea(t,r,i),cn(t,i),t}function Kc(t,e,n,i){var r=e.current,s=Zt(),o=rr(r);return n=o_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Qn(t,r,o,s),Il(t,r,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){Fg(t,e),(t=t.alternate)&&Fg(t,e)}function qE(){return null}var l_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bp(t){this._internalRoot=t}Zc.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Kc(t,e,null,null)};Zc.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Kc(null,t,null,null)}),e[Ri]=null}};function Zc(t){this._internalRoot=t}Zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$i.length&&e!==0&&e<$i[n].priority;n++);$i.splice(n,0,t),n===0&&Vx(t)}};function Cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kg(){}function KE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sc(o);s.call(c)}}var o=a_(e,i,t,0,null,!1,!1,"",kg);return t._reactRootContainer=o,t[Ri]=o.current,aa(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Sc(l);a.call(c)}}var l=Tp(t,0,!1,null,null,!1,!1,"",kg);return t._reactRootContainer=l,t[Ri]=l.current,aa(t.nodeType===8?t.parentNode:t),qr(function(){Kc(e,l,n,i)}),l}function Jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Sc(o);a.call(l)}}Kc(e,o,t,r)}else o=KE(n,e,t,r,i);return Sc(o)}kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&($h(e,n|1),cn(e,Et()),!(Ze&6)&&(Qs=Et()+500,gr()))}break;case 13:qr(function(){var i=Pi(t,1);if(i!==null){var r=Zt();Qn(i,t,1,r)}}),Ap(t,1)}};Yh=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=Zt();Qn(e,t,134217728,n)}Ap(t,134217728)}};Ox=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=Zt();Qn(n,t,e,i)}Ap(t,e)}};Bx=function(){return st};zx=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Yd=function(t,e,n){switch(e){case"input":if(Vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gc(i);if(!r)throw Error(le(90));vx(i),Vd(i,r)}}}break;case"textarea":yx(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};Ax=Sp;bx=qr;var ZE={usingClientEntryPoint:!1,Events:[Ta,Es,Gc,wx,Tx,Sp]},Eo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QE={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Px(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||qE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Bc=tl.inject(QE),ai=tl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(le(200));return YE(t,e,null,n)};Tn.createRoot=function(t,e){if(!Cp(t))throw Error(le(299));var n=!1,i="",r=l_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Tp(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,aa(t.nodeType===8?t.parentNode:t),new bp(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Px(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return qr(t)};Tn.hydrate=function(t,e,n){if(!Qc(e))throw Error(le(200));return Jc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Cp(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=l_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=a_(e,null,t,1,n??null,r,!1,s,o),t[Ri]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zc(e)};Tn.render=function(t,e,n){if(!Qc(e))throw Error(le(200));return Jc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(le(40));return t._reactRootContainer?(qr(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};Tn.unstable_batchedUpdates=Sp;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Qc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Jc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(t){console.error(t)}}c_(),cx.exports=Tn;var JE=cx.exports,Og=JE;Id.createRoot=Og.createRoot,Id.hydrateRoot=Og.hydrateRoot;const Rp=oe.createContext({});function Pp(t){const e=oe.useRef(null);return e.current===null&&(e.current=t()),e.current}const eu=oe.createContext(null),Lp=oe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class ew extends oe.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function tw({children:t,isPresent:e}){const n=oe.useId(),i=oe.useRef(null),r=oe.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=oe.useContext(Lp);return oe.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),S.jsx(ew,{isPresent:e,childRef:i,sizeRef:r,children:oe.cloneElement(t,{ref:i})})}const nw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Pp(iw),l=oe.useId(),c=oe.useCallback(f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},[a,i]),u=oe.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return oe.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),oe.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=S.jsx(tw,{isPresent:n,children:t})),S.jsx(eu.Provider,{value:u,children:t})};function iw(){return new Map}function u_(t=!0){const e=oe.useContext(eu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=oe.useId();oe.useEffect(()=>{t&&r(s)},[t]);const o=oe.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const nl=t=>t.key||"";function Bg(t){const e=[];return oe.Children.forEach(t,n=>{oe.isValidElement(n)&&e.push(n)}),e}const Np=typeof window<"u",d_=Np?oe.useLayoutEffect:oe.useEffect,Dp=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=u_(o),c=oe.useMemo(()=>Bg(t),[t]),u=o&&!a?[]:c.map(nl),f=oe.useRef(!0),d=oe.useRef(c),p=Pp(()=>new Map),[x,y]=oe.useState(c),[m,h]=oe.useState(c);d_(()=>{f.current=!1,d.current=c;for(let M=0;M<m.length;M++){const C=nl(m[M]);u.includes(C)?p.delete(C):p.get(C)!==!0&&p.set(C,!1)}},[m,u.length,u.join("-")]);const g=[];if(c!==x){let M=[...c];for(let C=0;C<m.length;C++){const b=m[C],A=nl(b);u.includes(A)||(M.splice(C,0,b),g.push(b))}s==="wait"&&g.length&&(M=g),h(Bg(M)),y(c);return}const{forceRender:v}=oe.useContext(Rp);return S.jsx(S.Fragment,{children:m.map(M=>{const C=nl(M),b=o&&!a?!1:c===m||u.includes(C),A=()=>{if(p.has(C))p.set(C,!0);else return;let P=!0;p.forEach(H=>{H||(P=!1)}),P&&(v==null||v(),h(d.current),o&&(l==null||l()),i&&i())};return S.jsx(nw,{isPresent:b,initial:!f.current||n?void 0:!1,custom:b?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:b?void 0:A,children:M},C)})})},Sn=t=>t;let f_=Sn;function Ip(t){let e;return()=>(e===void 0&&(e=t()),e)}const Js=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ai=t=>t*1e3,bi=t=>t/1e3,rw={useManualTiming:!1};function sw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const p=f&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const il=["read","resolveKeyframes","update","preRender","render","postRender"],ow=40;function h_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=il.reduce((h,g)=>(h[g]=sw(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:d}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,ow),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:il.reduce((h,g)=>{const v=o[g];return h[g]=(M,C=!1,b=!1)=>(n||x(),v.schedule(M,C,b)),h},{}),cancel:h=>{for(let g=0;g<il.length;g++)o[il[g]].cancel(h)},state:r,steps:o}}const{schedule:ft,cancel:ur,state:Ot,steps:Hu}=h_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Sn,!0),p_=oe.createContext({strict:!1}),zg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eo={};for(const t in zg)eo[t]={isEnabled:e=>zg[t].some(n=>!!e[n])};function aw(t){for(const e in t)eo[e]={...eo[e],...t[e]}}const lw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Mc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||lw.has(t)}let m_=t=>!Mc(t);function cw(t){t&&(m_=e=>e.startsWith("on")?!Mc(e):t(e))}try{cw(require("@emotion/is-prop-valid").default)}catch{}function uw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(m_(r)||n===!0&&Mc(r)||!e&&!Mc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function dw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const tu=oe.createContext({});function ga(t){return typeof t=="string"||Array.isArray(t)}function nu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Up=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fp=["initial",...Up];function iu(t){return nu(t.animate)||Fp.some(e=>ga(t[e]))}function g_(t){return!!(iu(t)||t.variants)}function fw(t,e){if(iu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ga(n)?n:void 0,animate:ga(i)?i:void 0}}return t.inherit!==!1?e:{}}function hw(t){const{initial:e,animate:n}=fw(t,oe.useContext(tu));return oe.useMemo(()=>({initial:e,animate:n}),[Vg(e),Vg(n)])}function Vg(t){return Array.isArray(t)?t.join(" "):t}const pw=Symbol.for("motionComponentSymbol");function Ps(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function mw(t,e,n){return oe.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ps(n)&&(n.current=i))},[e])}const kp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gw="framerAppearId",v_="data-"+kp(gw),{schedule:Op}=h_(queueMicrotask,!1),x_=oe.createContext({});function vw(t,e,n,i,r){var s,o;const{visualElement:a}=oe.useContext(tu),l=oe.useContext(p_),c=oe.useContext(eu),u=oe.useContext(Lp).reducedMotion,f=oe.useRef(null);i=i||l.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const d=f.current,p=oe.useContext(x_);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&xw(f.current,n,r,p);const x=oe.useRef(!1);oe.useInsertionEffect(()=>{d&&x.current&&d.update(n,c)});const y=n[v_],m=oe.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return d_(()=>{d&&(x.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Op.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())}),oe.useEffect(()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),m.current=!1))}),d}function xw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:y_(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ps(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function y_(t){if(t)return t.options.allowProjection!==!1?t.projection:y_(t.parent)}function yw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&aw(t);function a(c,u){let f;const d={...oe.useContext(Lp),...c,layoutId:_w(c)},{isStatic:p}=d,x=hw(c),y=i(c,p);if(!p&&Np){Sw();const m=Mw(d);f=m.MeasureLayout,x.visualElement=vw(r,y,d,e,m.ProjectionNode)}return S.jsxs(tu.Provider,{value:x,children:[f&&x.visualElement?S.jsx(f,{visualElement:x.visualElement,...d}):null,n(r,c,mw(y,x.visualElement,u),y,p,x.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=oe.forwardRef(a);return l[pw]=r,l}function _w({layoutId:t}){const e=oe.useContext(Rp).id;return e&&t!==void 0?e+"-"+t:t}function Sw(t,e){oe.useContext(p_).strict}function Mw(t){const{drag:e,layout:n}=eo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Ew=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bp(t){return typeof t!="string"||t.includes("-")?!1:!!(Ew.indexOf(t)>-1||/[A-Z]/u.test(t))}function Hg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function zp(t,e,n,i){if(typeof e=="function"){const[r,s]=Hg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=Hg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Cf=t=>Array.isArray(t),ww=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Tw=t=>Cf(t)?t[t.length-1]||0:t,$t=t=>!!(t&&t.getVelocity);function Vl(t){const e=$t(t)?t.get():t;return ww(e)?e.toValue():e}function Aw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:bw(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const __=t=>(e,n)=>{const i=oe.useContext(tu),r=oe.useContext(eu),s=()=>Aw(t,e,i,r);return n?s():Pp(s)};function bw(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Vl(s[d]);let{initial:o,animate:a}=t;const l=iu(t),c=g_(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!nu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const x=zp(t,d[p]);if(x){const{transitionEnd:y,transition:m,...h}=x;for(const g in h){let v=h[g];if(Array.isArray(v)){const M=u?v.length-1:0;v=v[M]}v!==null&&(r[g]=v)}for(const g in y)r[g]=y[g]}}}return r}const fo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],es=new Set(fo),S_=t=>e=>typeof e=="string"&&e.startsWith(t),M_=S_("--"),Cw=S_("var(--"),Vp=t=>Cw(t)?Rw.test(t.split("/*")[0].trim()):!1,Rw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,E_=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ni=(t,e,n)=>n>e?e:n<t?t:n,ho={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},va={...ho,transform:t=>Ni(0,1,t)},rl={...ho,default:1},ba=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ji=ba("deg"),ci=ba("%"),De=ba("px"),Pw=ba("vh"),Lw=ba("vw"),Gg={...ci,parse:t=>ci.parse(t)/100,transform:t=>ci.transform(t*100)},Nw={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,backgroundPositionX:De,backgroundPositionY:De},Dw={rotate:ji,rotateX:ji,rotateY:ji,rotateZ:ji,scale:rl,scaleX:rl,scaleY:rl,scaleZ:rl,skew:ji,skewX:ji,skewY:ji,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:va,originX:Gg,originY:Gg,originZ:De},jg={...ho,transform:Math.round},Hp={...Nw,...Dw,zIndex:jg,size:De,fillOpacity:va,strokeOpacity:va,numOctaves:jg},Iw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Uw=fo.length;function Fw(t,e,n){let i="",r=!0;for(let s=0;s<Uw;s++){const o=fo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=E_(a,Hp[o]);if(!l){r=!1;const u=Iw[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Gp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(es.has(l)){o=!0;continue}else if(M_(l)){r[l]=c;continue}else{const u=E_(c,Hp[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Fw(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const kw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ow={offset:"strokeDashoffset",array:"strokeDasharray"};function Bw(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?kw:Ow;t[s.offset]=De.transform(-i);const o=De.transform(e),a=De.transform(n);t[s.array]=`${o} ${a}`}function Wg(t,e,n){return typeof t=="string"?t:De.transform(e+n*t)}function zw(t,e,n){const i=Wg(e,t.x,t.width),r=Wg(n,t.y,t.height);return`${i} ${r}`}function jp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(Gp(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:x}=t;d.transform&&(x&&(p.transform=d.transform),delete d.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=zw(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&Bw(d,o,a,l,!1)}const Wp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),w_=()=>({...Wp(),attrs:{}}),Xp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function T_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const A_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function b_(t,e,n,i){T_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(A_.has(r)?r:kp(r),e.attrs[r])}const Ec={};function Vw(t){Object.assign(Ec,t)}function C_(t,{layout:e,layoutId:n}){return es.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ec[t]||t==="opacity")}function $p(t,e,n){var i;const{style:r}=t,s={};for(const o in r)($t(r[o])||e.style&&$t(e.style[o])||C_(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function R_(t,e,n){const i=$p(t,e,n);for(const r in t)if($t(t[r])||$t(e[r])){const s=fo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function Hw(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Xg=["x","y","width","height","cx","cy","r"],Gw={useVisualState:__({scrapeMotionValuesFromProps:R_,createRenderState:w_,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(es.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<Xg.length;a++){const l=Xg[a];t[l]!==e[l]&&(o=!0)}o&&ft.read(()=>{Hw(n,i),ft.render(()=>{jp(i,r,Xp(n.tagName),t.transformTemplate),b_(n,i)})})}})},jw={useVisualState:__({scrapeMotionValuesFromProps:$p,createRenderState:Wp})};function P_(t,e,n){for(const i in e)!$t(e[i])&&!C_(i,n)&&(t[i]=e[i])}function Ww({transformTemplate:t},e){return oe.useMemo(()=>{const n=Wp();return Gp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Xw(t,e){const n=t.style||{},i={};return P_(i,n,t),Object.assign(i,Ww(t,e)),i}function $w(t,e){const n={},i=Xw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function Yw(t,e,n,i){const r=oe.useMemo(()=>{const s=w_();return jp(s,e,Xp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};P_(s,t.style,t),r.style={...s,...r.style}}return r}function qw(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Bp(n)?Yw:$w)(i,s,o,n),c=uw(i,typeof n=="string",t),u=n!==oe.Fragment?{...c,...l,ref:r}:{},{children:f}=i,d=oe.useMemo(()=>$t(f)?f.get():f,[f]);return oe.createElement(n,{...u,children:d})}}function Kw(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Bp(i)?Gw:jw,preloadedFeatures:t,useRender:qw(r),createVisualElement:e,Component:i};return yw(o)}}function L_(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ru(t,e,n){const i=t.getProps();return zp(i,e,n!==void 0?n:i.custom,t)}const Zw=Ip(()=>window.ScrollTimeline!==void 0);class Qw{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(Zw()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Jw extends Qw{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Yp(t,e){return t?t[e]||t.default||t:void 0}const Rf=2e4;function N_(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Rf;)e+=n,i=t.next(e);return e>=Rf?1/0:e}function qp(t){return typeof t=="function"}function $g(t,e){t.timeline=e,t.onfinish=null}const Kp=t=>Array.isArray(t)&&typeof t[0]=="number",eT={linearEasing:void 0};function tT(t,e){const n=Ip(t);return()=>{var i;return(i=eT[e])!==null&&i!==void 0?i:n()}}const wc=tT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),D_=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Js(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function I_(t){return!!(typeof t=="function"&&wc()||!t||typeof t=="string"&&(t in Pf||wc())||Kp(t)||Array.isArray(t)&&t.every(I_))}const Uo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Pf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Uo([0,.65,.55,1]),circOut:Uo([.55,0,1,.45]),backIn:Uo([.31,.01,.66,-.59]),backOut:Uo([.33,1.53,.69,.99])};function U_(t,e){if(t)return typeof t=="function"&&wc()?D_(t,e):Kp(t)?Uo(t):Array.isArray(t)?t.map(n=>U_(n,e)||Pf.easeOut):Pf[t]}const jn={x:!1,y:!1};function F_(){return jn.x||jn.y}function nT(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function k_(t,e){const n=nT(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Yg(t){return e=>{e.pointerType==="touch"||F_()||t(e)}}function iT(t,e,n={}){const[i,r,s]=k_(t,n),o=Yg(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=Yg(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const O_=(t,e)=>e?t===e?!0:O_(t,e.parentElement):!1,Zp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,rT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sT(t){return rT.has(t.tagName)||t.tabIndex!==-1}const Fo=new WeakSet;function qg(t){return e=>{e.key==="Enter"&&t(e)}}function Gu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const oT=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=qg(()=>{if(Fo.has(n))return;Gu(n,"down");const r=qg(()=>{Gu(n,"up")}),s=()=>Gu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Kg(t){return Zp(t)&&!F_()}function aT(t,e,n={}){const[i,r,s]=k_(t,n),o=a=>{const l=a.currentTarget;if(!Kg(a)||Fo.has(l))return;Fo.add(l);const c=e(a),u=(p,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),!(!Kg(p)||!Fo.has(l))&&(Fo.delete(l),typeof c=="function"&&c(p,{success:x}))},f=p=>{u(p,n.useGlobalTarget||O_(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{!sT(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>oT(c,r),r)}),s}function lT(t){return t==="x"||t==="y"?jn[t]?null:(jn[t]=!0,()=>{jn[t]=!1}):jn.x||jn.y?null:(jn.x=jn.y=!0,()=>{jn.x=jn.y=!1})}const B_=new Set(["width","height","top","left","right","bottom",...fo]);let Hl;function cT(){Hl=void 0}const ui={now:()=>(Hl===void 0&&ui.set(Ot.isProcessing||rw.useManualTiming?Ot.timestamp:performance.now()),Hl),set:t=>{Hl=t,queueMicrotask(cT)}};function Qp(t,e){t.indexOf(e)===-1&&t.push(e)}function Jp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class em{constructor(){this.subscriptions=[]}add(e){return Qp(this.subscriptions,e),()=>Jp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function z_(t,e){return e?t*(1e3/e):0}const Zg=30,uT=t=>!isNaN(parseFloat(t));class dT{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ui.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new em);const i=this.events[e].add(n);return e==="change"?()=>{i(),ft.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Zg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Zg);return z_(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xa(t,e){return new dT(t,e)}function fT(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,xa(n))}function hT(t,e){const n=ru(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Tw(s[o]);fT(t,o,a)}}function pT(t){return!!($t(t)&&t.add)}function Lf(t,e){const n=t.getValue("willChange");if(pT(n))return n.add(e)}function V_(t){return t.props[v_]}const H_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,mT=1e-7,gT=12;function vT(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=H_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>mT&&++a<gT);return o}function Ca(t,e,n,i){if(t===e&&n===i)return Sn;const r=s=>vT(s,0,1,t,n);return s=>s===0||s===1?s:H_(r(s),e,i)}const G_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,j_=t=>e=>1-t(1-e),W_=Ca(.33,1.53,.69,.99),tm=j_(W_),X_=G_(tm),$_=t=>(t*=2)<1?.5*tm(t):.5*(2-Math.pow(2,-10*(t-1))),nm=t=>1-Math.sin(Math.acos(t)),Y_=j_(nm),q_=G_(nm),K_=t=>/^0[^.\s]+$/u.test(t);function xT(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||K_(t):!0}const qo=t=>Math.round(t*1e5)/1e5,im=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function yT(t){return t==null}const _T=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rm=(t,e)=>n=>!!(typeof n=="string"&&_T.test(n)&&n.startsWith(t)||e&&!yT(n)&&Object.prototype.hasOwnProperty.call(n,e)),Z_=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(im);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},ST=t=>Ni(0,255,t),ju={...ho,transform:t=>Math.round(ST(t))},Br={test:rm("rgb","red"),parse:Z_("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ju.transform(t)+", "+ju.transform(e)+", "+ju.transform(n)+", "+qo(va.transform(i))+")"};function MT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Nf={test:rm("#"),parse:MT,transform:Br.transform},Ls={test:rm("hsl","hue"),parse:Z_("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ci.transform(qo(e))+", "+ci.transform(qo(n))+", "+qo(va.transform(i))+")"},Wt={test:t=>Br.test(t)||Nf.test(t)||Ls.test(t),parse:t=>Br.test(t)?Br.parse(t):Ls.test(t)?Ls.parse(t):Nf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Br.transform(t):Ls.transform(t)},ET=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(im))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ET))===null||n===void 0?void 0:n.length)||0)>0}const Q_="number",J_="color",TT="var",AT="var(",Qg="${}",bT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ya(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(bT,l=>(Wt.test(l)?(i.color.push(s),r.push(J_),n.push(Wt.parse(l))):l.startsWith(AT)?(i.var.push(s),r.push(TT),n.push(l)):(i.number.push(s),r.push(Q_),n.push(parseFloat(l))),++s,Qg)).split(Qg);return{values:n,split:a,indexes:i,types:r}}function eS(t){return ya(t).values}function tS(t){const{split:e,types:n}=ya(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Q_?s+=qo(r[o]):a===J_?s+=Wt.transform(r[o]):s+=r[o]}return s}}const CT=t=>typeof t=="number"?0:t;function RT(t){const e=eS(t);return tS(t)(e.map(CT))}const dr={test:wT,parse:eS,createTransformer:tS,getAnimatableNone:RT},PT=new Set(["brightness","contrast","saturate","opacity"]);function LT(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(im)||[];if(!i)return t;const r=n.replace(i,"");let s=PT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const NT=/\b([a-z-]*)\(.*?\)/gu,Df={...dr,getAnimatableNone:t=>{const e=t.match(NT);return e?e.map(LT).join(" "):t}},DT={...Hp,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:Df,WebkitFilter:Df},sm=t=>DT[t];function nS(t,e){let n=sm(t);return n!==Df&&(n=dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const IT=new Set(["auto","none","0"]);function UT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!IT.has(s)&&ya(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=nS(n,r)}const Jg=t=>t===ho||t===De,e0=(t,e)=>parseFloat(t.split(", ")[e]),t0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return e0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?e0(s[1],t):0}},FT=new Set(["x","y","z"]),kT=fo.filter(t=>!FT.has(t));function OT(t){const e=[];return kT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:t0(4,13),y:t0(5,14)};to.translateX=to.x;to.translateY=to.y;const jr=new Set;let If=!1,Uf=!1;function iS(){if(Uf){const t=Array.from(jr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=OT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Uf=!1,If=!1,jr.forEach(t=>t.complete()),jr.clear()}function rS(){jr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Uf=!0)})}function BT(){rS(),iS()}class om{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),If||(If=!0,ft.read(rS),ft.resolveKeyframes(iS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const sS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),zT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function VT(t){const e=zT.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function oS(t,e,n=1){const[i,r]=VT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return sS(o)?parseFloat(o):o}return Vp(r)?oS(r,e,n+1):r}const aS=t=>e=>e.test(t),HT={test:t=>t==="auto",parse:t=>t},lS=[ho,De,ci,ji,Lw,Pw,HT],n0=t=>lS.find(aS(t));class cS extends om{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Vp(c))){const u=oS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!B_.has(i)||e.length!==2)return;const[r,s]=e,o=n0(r),a=n0(s);if(o!==a)if(Jg(o)&&Jg(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)xT(e[r])&&i.push(r);i.length&&UT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const i0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(dr.test(t)||t==="0")&&!t.startsWith("url("));function GT(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function jT(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=i0(r,e),a=i0(s,e);return!o||!a?!1:GT(t)||(n==="spring"||qp(n))&&i}const WT=t=>t!==null;function su(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(WT),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const XT=40;class uS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ui.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>XT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&BT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ui.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!jT(e,i,r,s))if(o)this.options.duration=0;else{l&&l(su(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const mt=(t,e,n)=>t+(e-t)*n;function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function $T({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Wu(l,a,t+1/3),s=Wu(l,a,t),o=Wu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Tc(t,e){return n=>n>0?e:t}const Xu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},YT=[Nf,Br,Ls],qT=t=>YT.find(e=>e.test(t));function r0(t){const e=qT(t);if(!e)return!1;let n=e.parse(t);return e===Ls&&(n=$T(n)),n}const s0=(t,e)=>{const n=r0(t),i=r0(e);if(!n||!i)return Tc(t,e);const r={...n};return s=>(r.red=Xu(n.red,i.red,s),r.green=Xu(n.green,i.green,s),r.blue=Xu(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),Br.transform(r))},KT=(t,e)=>n=>e(t(n)),Ra=(...t)=>t.reduce(KT),Ff=new Set(["none","hidden"]);function ZT(t,e){return Ff.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function QT(t,e){return n=>mt(t,e,n)}function am(t){return typeof t=="number"?QT:typeof t=="string"?Vp(t)?Tc:Wt.test(t)?s0:tA:Array.isArray(t)?dS:typeof t=="object"?Wt.test(t)?s0:JT:Tc}function dS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>am(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function JT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=am(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function eA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const tA=(t,e)=>{const n=dr.createTransformer(e),i=ya(t),r=ya(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Ff.has(t)&&!r.values.length||Ff.has(e)&&!i.values.length?ZT(t,e):Ra(dS(eA(i,r),r.values),n):Tc(t,e)};function fS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):am(t)(t,e)}const nA=5;function hS(t,e,n){const i=Math.max(e-nA,0);return z_(n-t(i),e-i)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},$u=.001;function iA({duration:t=yt.duration,bounce:e=yt.bounce,velocity:n=yt.velocity,mass:i=yt.mass}){let r,s,o=1-e;o=Ni(yt.minDamping,yt.maxDamping,o),t=Ni(yt.minDuration,yt.maxDuration,bi(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=kf(c,o),x=Math.exp(-f);return $u-d/p*x},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-f),y=kf(Math.pow(c,2),o);return(-r(c)+$u>0?-1:1)*((d-p)*x)/y}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-$u+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=sA(r,s,a);if(t=Ai(t),isNaN(l))return{stiffness:yt.stiffness,damping:yt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const rA=12;function sA(t,e,n){let i=n;for(let r=1;r<rA;r++)i=i-t(i)/e(i);return i}function kf(t,e){return t*Math.sqrt(1-e*e)}const oA=["duration","bounce"],aA=["stiffness","damping","mass"];function o0(t,e){return e.some(n=>t[n]!==void 0)}function lA(t){let e={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...t};if(!o0(t,aA)&&o0(t,oA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ni(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:yt.mass,stiffness:r,damping:s}}else{const n=iA(t);e={...e,...n,mass:yt.mass},e.isResolvedFromDuration=!0}return e}function pS(t=yt.visualDuration,e=yt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=lA({...n,velocity:-bi(n.velocity||0)}),x=d||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=bi(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?yt.restSpeed.granular:yt.restSpeed.default),r||(r=g?yt.restDelta.granular:yt.restDelta.default);let v;if(y<1){const C=kf(h,y);v=b=>{const A=Math.exp(-y*h*b);return o-A*((x+y*h*m)/C*Math.sin(C*b)+m*Math.cos(C*b))}}else if(y===1)v=C=>o-Math.exp(-h*C)*(m+(x+h*m)*C);else{const C=h*Math.sqrt(y*y-1);v=b=>{const A=Math.exp(-y*h*b),P=Math.min(C*b,300);return o-A*((x+y*h*m)*Math.sinh(P)+C*m*Math.cosh(P))/C}}const M={calculatedDuration:p&&f||null,next:C=>{const b=v(C);if(p)a.done=C>=f;else{let A=0;y<1&&(A=C===0?Ai(x):hS(v,C,b));const P=Math.abs(A)<=i,H=Math.abs(o-b)<=r;a.done=P&&H}return a.value=a.done?o:b,a},toString:()=>{const C=Math.min(N_(M),Rf),b=D_(A=>M.next(C*A).value,C,30);return C+"ms "+b}};return M}function a0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,x=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const g=P=>-y*Math.exp(-P/i),v=P=>h+g(P),M=P=>{const H=g(P),_=v(P);d.done=Math.abs(H)<=c,d.value=d.done?h:_};let C,b;const A=P=>{p(d.value)&&(C=P,b=pS({keyframes:[d.value,x(d.value)],velocity:hS(v,P,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:P=>{let H=!1;return!b&&C===void 0&&(H=!0,M(P),A(P)),C!==void 0&&P>=C?b.next(P-C):(!H&&M(P),d)}}}const cA=Ca(.42,0,1,1),uA=Ca(0,0,.58,1),mS=Ca(.42,0,.58,1),dA=t=>Array.isArray(t)&&typeof t[0]!="number",fA={linear:Sn,easeIn:cA,easeInOut:mS,easeOut:uA,circIn:nm,circInOut:q_,circOut:Y_,backIn:tm,backInOut:X_,backOut:W_,anticipate:$_},l0=t=>{if(Kp(t)){f_(t.length===4);const[e,n,i,r]=t;return Ca(e,n,i,r)}else if(typeof t=="string")return fA[t];return t};function hA(t,e,n){const i=[],r=n||fS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Sn:e;a=Ra(l,a)}i.push(a)}return i}function pA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(f_(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=hA(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=Js(t[f],t[f+1],u);return a[f](d)};return n?u=>c(Ni(t[0],t[s-1],u)):c}function mA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Js(0,e,i);t.push(mt(n,1,r))}}function gA(t){const e=[0];return mA(e,t.length-1),e}function vA(t,e){return t.map(n=>n*e)}function xA(t,e){return t.map(()=>e||mS).splice(0,t.length-1)}function Ac({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=dA(i)?i.map(l0):l0(i),s={done:!1,value:e[0]},o=vA(n&&n.length===e.length?n:gA(e),t),a=pA(o,e,{ease:Array.isArray(r)?r:xA(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const yA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ft.update(e,!0),stop:()=>ur(e),now:()=>Ot.isProcessing?Ot.timestamp:ui.now()}},_A={decay:a0,inertia:a0,tween:Ac,keyframes:Ac,spring:pS},SA=t=>t/100;class lm extends uS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||om,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=qp(n)?n:_A[n]||Ac;let l,c;a!==Ac&&typeof e[0]!="number"&&(l=Ra(SA,fS(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=N_(u));const{calculatedDuration:f}=u,d=f+r,p=d*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:P}=this.options;return{done:!0,value:P[P.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:p,repeatType:x,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-d*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let v=this.currentTime,M=s;if(p){const P=Math.min(this.currentTime,u)/f;let H=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&H--,H=Math.min(H,p+1),!!(H%2)&&(x==="reverse"?(_=1-_,y&&(_-=y/f)):x==="mirror"&&(M=o)),v=Ni(0,1,_)*f}const C=g?{done:!1,value:l[0]}:M.next(v);a&&(C.value=a(C.value));let{done:b}=C;!g&&c!==null&&(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return A&&r!==void 0&&(C.value=su(l,this.options,r)),m&&m(C.value),A&&this.finish(),C}get duration(){const{resolved:e}=this;return e?bi(e.calculatedDuration):0}get time(){return bi(this.currentTime)}set time(e){e=Ai(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=bi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=yA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const MA=new Set(["opacity","clipPath","filter","transform"]);function EA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=U_(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const wA=Ip(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),bc=10,TA=2e4;function AA(t){return qp(t.type)||t.type==="spring"||!I_(t.ease)}function bA(t,e){const n=new lm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<TA;)i=n.sample(s),r.push(i.value),s+=bc;return{times:void 0,keyframes:r,duration:s-bc,ease:"linear"}}const gS={anticipate:$_,backInOut:X_,circInOut:q_};function CA(t){return t in gS}class c0 extends uS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new cS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&wc()&&CA(s)&&(s=gS[s]),AA(this.options)){const{onComplete:f,onUpdate:d,motionValue:p,element:x,...y}=this.options,m=bA(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=EA(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?($g(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(su(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return bi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return bi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ai(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Sn;const{animation:i}=n;$g(i,e)}return Sn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:d,...p}=this.options,x=new lm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=Ai(this.time);c.setWithVelocity(x.sample(y-bc).value,x.sample(y).value,bc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return wA()&&i&&MA.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const RA={type:"spring",stiffness:500,damping:25,restSpeed:10},PA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),LA={type:"keyframes",duration:.8},NA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},DA=(t,{keyframes:e})=>e.length>2?LA:es.has(t)?t.startsWith("scale")?PA(e[1]):RA:NA;function IA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const cm=(t,e,n,i={},r,s)=>o=>{const a=Yp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ai(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};IA(a)||(u={...u,...DA(t,u)}),u.duration&&(u.duration=Ai(u.duration)),u.repeatDelay&&(u.repeatDelay=Ai(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const d=su(u.keyframes,a);if(d!==void 0)return ft.update(()=>{u.onUpdate(d),u.onComplete()}),new Jw([])}return!s&&c0.supports(u)?new c0(u):new lm(u)};function UA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function vS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),p=l[f];if(p===void 0||u&&UA(u,f))continue;const x={delay:n,...Yp(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const h=V_(t);if(h){const g=window.MotionHandoffAnimation(h,f,ft);g!==null&&(x.startTime=g,y=!0)}}Lf(t,f),d.start(cm(f,d,p,t.shouldReduceMotion&&B_.has(f)?{type:!1}:x,t,y));const m=d.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{ft.update(()=>{a&&hT(t,a)})}),c}function Of(t,e,n={}){var i;const r=ru(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(vS(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=s;return FA(t,e,u+c,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function FA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(kA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Of(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function kA(t,e){return t.sortNodePosition(e)}function OA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Of(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Of(t,e,n);else{const r=typeof e=="function"?ru(t,e,n.custom):e;i=Promise.all(vS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const BA=Fp.length;function xS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?xS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<BA;n++){const i=Fp[n],r=t.props[i];(ga(r)||r===!1)&&(e[i]=r)}return e}const zA=[...Up].reverse(),VA=Up.length;function HA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>OA(t,n,i)))}function GA(t){let e=HA(t),n=u0(),i=!0;const r=l=>(c,u)=>{var f;const d=ru(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:x,...y}=d;c={...c,...y,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=xS(t.parent)||{},f=[],d=new Set;let p={},x=1/0;for(let m=0;m<VA;m++){const h=zA[m],g=n[h],v=c[h]!==void 0?c[h]:u[h],M=ga(v),C=h===l?g.isActive:null;C===!1&&(x=m);let b=v===u[h]&&v!==c[h]&&M;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),g.protectedKeys={...p},!g.isActive&&C===null||!v&&!g.prevProp||nu(v)||typeof v=="boolean")continue;const A=jA(g.prevProp,v);let P=A||h===l&&g.isActive&&!b&&M||m>x&&M,H=!1;const _=Array.isArray(v)?v:[v];let w=_.reduce(r(h),{});C===!1&&(w={});const{prevResolvedValues:W={}}=g,j={...W,...w},K=q=>{P=!0,d.has(q)&&(H=!0,d.delete(q)),g.needsAnimating[q]=!0;const I=t.getValue(q);I&&(I.liveStyle=!1)};for(const q in j){const I=w[q],Q=W[q];if(p.hasOwnProperty(q))continue;let N=!1;Cf(I)&&Cf(Q)?N=!L_(I,Q):N=I!==Q,N?I!=null?K(q):d.add(q):I!==void 0&&d.has(q)?K(q):g.protectedKeys[q]=!0}g.prevProp=v,g.prevResolvedValues=w,g.isActive&&(p={...p,...w}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(b&&A)||H)&&f.push(..._.map(q=>({animation:q,options:{type:h}})))}if(d.size){const m={};d.forEach(h=>{const g=t.getBaseTarget(h),v=t.getValue(h);v&&(v.liveStyle=!0),m[h]=g??null}),f.push({animation:m})}let y=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var p;return(p=d.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=u0(),i=!0}}}function jA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!L_(e,t):!1}function Sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function u0(){return{animate:Sr(!0),whileInView:Sr(),whileHover:Sr(),whileTap:Sr(),whileDrag:Sr(),whileFocus:Sr(),exit:Sr()}}class vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class WA extends vr{constructor(e){super(e),e.animationState||(e.animationState=GA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();nu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let XA=0;class $A extends vr{constructor(){super(...arguments),this.id=XA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const YA={animation:{Feature:WA},exit:{Feature:$A}};function _a(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Pa(t){return{point:{x:t.pageX,y:t.pageY}}}const qA=t=>e=>Zp(e)&&t(e,Pa(e));function Ko(t,e,n,i){return _a(t,e,qA(n),i)}const d0=(t,e)=>Math.abs(t-e);function KA(t,e){const n=d0(t.x,e.x),i=d0(t.y,e.y);return Math.sqrt(n**2+i**2)}class yS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=qu(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,p=KA(f.offset,{x:0,y:0})>=3;if(!d&&!p)return;const{point:x}=f,{timestamp:y}=Ot;this.history.push({...x,timestamp:y});const{onStart:m,onMove:h}=this.handlers;d||(m&&m(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Yu(d,this.transformPagePoint),ft.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=qu(f.type==="pointercancel"?this.lastMoveEventInfo:Yu(d,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,m),x&&x(f,m)},!Zp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Pa(e),a=Yu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ot;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,qu(a,this.history)),this.removeListeners=Ra(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ur(this.updatePoint)}}function Yu(t,e){return e?{point:e(t.point)}:t}function f0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function qu({point:t},e){return{point:t,delta:f0(t,_S(e)),offset:f0(t,ZA(e)),velocity:QA(e,.1)}}function ZA(t){return t[0]}function _S(t){return t[t.length-1]}function QA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_S(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ai(e)));)n--;if(!i)return{x:0,y:0};const s=bi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const SS=1e-4,JA=1-SS,eb=1+SS,MS=.01,tb=0-MS,nb=0+MS;function wn(t){return t.max-t.min}function ib(t,e,n){return Math.abs(t-e)<=n}function h0(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=wn(n)/wn(e),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=JA&&t.scale<=eb||isNaN(t.scale))&&(t.scale=1),(t.translate>=tb&&t.translate<=nb||isNaN(t.translate))&&(t.translate=0)}function Zo(t,e,n,i){h0(t.x,e.x,n.x,i?i.originX:void 0),h0(t.y,e.y,n.y,i?i.originY:void 0)}function p0(t,e,n){t.min=n.min+e.min,t.max=t.min+wn(e)}function rb(t,e,n){p0(t.x,e.x,n.x),p0(t.y,e.y,n.y)}function m0(t,e,n){t.min=e.min-n.min,t.max=t.min+wn(e)}function Qo(t,e,n){m0(t.x,e.x,n.x),m0(t.y,e.y,n.y)}function sb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function g0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function ob(t,{top:e,left:n,bottom:i,right:r}){return{x:g0(t.x,n,r),y:g0(t.y,e,i)}}function v0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function ab(t,e){return{x:v0(t.x,e.x),y:v0(t.y,e.y)}}function lb(t,e){let n=.5;const i=wn(t),r=wn(e);return r>i?n=Js(e.min,e.max-i,t.min):i>r&&(n=Js(t.min,t.max-r,e.min)),Ni(0,1,n)}function cb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Bf=.35;function ub(t=Bf){return t===!1?t=0:t===!0&&(t=Bf),{x:x0(t,"left","right"),y:x0(t,"top","bottom")}}function x0(t,e,n){return{min:y0(t,e),max:y0(t,n)}}function y0(t,e){return typeof t=="number"?t:t[e]||0}const _0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ns=()=>({x:_0(),y:_0()}),S0=()=>({min:0,max:0}),Mt=()=>({x:S0(),y:S0()});function Pn(t){return[t("x"),t("y")]}function ES({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function db({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function fb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ku(t){return t===void 0||t===1}function zf({scale:t,scaleX:e,scaleY:n}){return!Ku(t)||!Ku(e)||!Ku(n)}function Pr(t){return zf(t)||wS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function wS(t){return M0(t.x)||M0(t.y)}function M0(t){return t&&t!=="0%"}function Cc(t,e,n){const i=t-n,r=e*i;return n+r}function E0(t,e,n,i,r){return r!==void 0&&(t=Cc(t,r,i)),Cc(t,n,i)+e}function Vf(t,e=0,n=1,i,r){t.min=E0(t.min,e,n,i,r),t.max=E0(t.max,e,n,i,r)}function TS(t,{x:e,y:n}){Vf(t.x,e.translate,e.scale,e.originPoint),Vf(t.y,n.translate,n.scale,n.originPoint)}const w0=.999999999999,T0=1.0000000000001;function hb(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Is(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,TS(t,o)),i&&Pr(s.latestValues)&&Is(t,s.latestValues))}e.x<T0&&e.x>w0&&(e.x=1),e.y<T0&&e.y>w0&&(e.y=1)}function Ds(t,e){t.min=t.min+e,t.max=t.max+e}function A0(t,e,n,i,r=.5){const s=mt(t.min,t.max,r);Vf(t,e,n,s,i)}function Is(t,e){A0(t.x,e.x,e.scaleX,e.scale,e.originX),A0(t.y,e.y,e.scaleY,e.scale,e.originY)}function AS(t,e){return ES(fb(t.getBoundingClientRect(),e))}function pb(t,e,n){const i=AS(t,n),{scroll:r}=e;return r&&(Ds(i.x,r.offset.x),Ds(i.y,r.offset.y)),i}const bS=({current:t})=>t?t.ownerDocument.defaultView:null,mb=new WeakMap;class gb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Pa(u).point)},s=(u,f)=>{const{drag:d,dragPropagation:p,onDragStart:x}=this.getProps();if(d&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lT(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Pn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(ci.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[m];v&&(h=wn(v)*(parseFloat(h)/100))}}this.originPoint[m]=h}),x&&ft.postRender(()=>x(u,f)),Lf(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:d,dragDirectionLock:p,onDirectionLock:x,onDrag:y}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:m}=f;if(p&&this.currentDirection===null){this.currentDirection=vb(m),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),y&&y(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Pn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new yS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:bS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ft.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!sl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=sb(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ps(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=ob(r.layoutBox,n):this.constraints=!1,this.elastic=ub(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Pn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=cb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ps(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=pb(i,r.root,this.visualElement.getTransformPagePoint());let o=ab(r.layout.layoutBox,s);if(n){const a=n(db(o));this.hasMutatedConstraints=!!a,a&&(o=ES(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Pn(u=>{if(!sl(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Lf(this.visualElement,e),i.start(cm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Pn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Pn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Pn(n=>{const{drag:i}=this.getProps();if(!sl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ps(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Pn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=lb({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Pn(o=>{if(!sl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(mt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;mb.set(this.visualElement,this);const e=this.visualElement.current,n=Ko(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ps(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ft.read(i);const o=_a(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Pn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Bf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function sl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function vb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class xb extends vr{constructor(e){super(e),this.removeGroupControls=Sn,this.removeListeners=Sn,this.controls=new gb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sn}unmount(){this.removeGroupControls(),this.removeListeners()}}const b0=t=>(e,n)=>{t&&ft.postRender(()=>t(e,n))};class yb extends vr{constructor(){super(...arguments),this.removePointerDownListener=Sn}onPointerDown(e){this.session=new yS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:b0(e),onStart:b0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ft.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function C0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(De.test(t))t=parseFloat(t);else return t;const n=C0(t,e.target.x),i=C0(t,e.target.y);return`${n}% ${i}%`}},_b={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=dr.parse(t);if(r.length>5)return i;const s=dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Sb extends oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;Vw(Mb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Gl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ft.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Op.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function CS(t){const[e,n]=u_(),i=oe.useContext(Rp);return S.jsx(Sb,{...t,layoutGroup:i,switchLayoutGroup:oe.useContext(x_),isPresent:e,safeToRemove:n})}const Mb={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:_b};function Eb(t,e,n){const i=$t(t)?t:xa(t);return i.start(cm("",i,e,n)),i.animation}function wb(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Tb=(t,e)=>t.depth-e.depth;class Ab{constructor(){this.children=[],this.isDirty=!1}add(e){Qp(this.children,e),this.isDirty=!0}remove(e){Jp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Tb),this.isDirty=!1,this.children.forEach(e)}}function bb(t,e){const n=ui.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ur(i),t(s-e))};return ft.read(i,!0),()=>ur(i)}const RS=["TopLeft","TopRight","BottomLeft","BottomRight"],Cb=RS.length,R0=t=>typeof t=="string"?parseFloat(t):t,P0=t=>typeof t=="number"||De.test(t);function Rb(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity!==void 0?n.opacity:1,Pb(i)),t.opacityExit=mt(e.opacity!==void 0?e.opacity:1,0,Lb(i))):s&&(t.opacity=mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<Cb;o++){const a=`border${RS[o]}Radius`;let l=L0(e,a),c=L0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||P0(l)===P0(c)?(t[a]=Math.max(mt(R0(l),R0(c),i),0),(ci.test(c)||ci.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function L0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Pb=PS(0,.5,Y_),Lb=PS(.5,.95,Sn);function PS(t,e,n){return i=>i<t?0:i>e?1:n(Js(t,e,i))}function N0(t,e){t.min=e.min,t.max=e.max}function Cn(t,e){N0(t.x,e.x),N0(t.y,e.y)}function D0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function I0(t,e,n,i,r){return t-=e,t=Cc(t,1/n,i),r!==void 0&&(t=Cc(t,1/r,i)),t}function Nb(t,e=0,n=1,i=.5,r,s=t,o=t){if(ci.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=I0(t.min,e,n,a,r),t.max=I0(t.max,e,n,a,r)}function U0(t,e,[n,i,r],s,o){Nb(t,e[n],e[i],e[r],e.scale,s,o)}const Db=["x","scaleX","originX"],Ib=["y","scaleY","originY"];function F0(t,e,n,i){U0(t.x,e,Db,n?n.x:void 0,i?i.x:void 0),U0(t.y,e,Ib,n?n.y:void 0,i?i.y:void 0)}function k0(t){return t.translate===0&&t.scale===1}function LS(t){return k0(t.x)&&k0(t.y)}function O0(t,e){return t.min===e.min&&t.max===e.max}function Ub(t,e){return O0(t.x,e.x)&&O0(t.y,e.y)}function B0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function NS(t,e){return B0(t.x,e.x)&&B0(t.y,e.y)}function z0(t){return wn(t.x)/wn(t.y)}function V0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Fb{constructor(){this.members=[]}add(e){Qp(this.members,e),e.scheduleRender()}remove(e){if(Jp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function kb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ko=typeof window<"u"&&window.MotionDebug!==void 0,Zu=["","X","Y","Z"],Ob={visibility:"hidden"},H0=1e3;let Bb=0;function Qu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function DS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=V_(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ft,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&DS(i)}function IS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=Bb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ko&&(Lr.totalNodes=Lr.resolvedTargetDeltas=Lr.recalculatedProjection=0),this.nodes.forEach(Hb),this.nodes.forEach($b),this.nodes.forEach(Yb),this.nodes.forEach(Gb),ko&&window.MotionDebug.record(Lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ab)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new em),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=wb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=bb(d,250),Gl.hasAnimatedSinceResize&&(Gl.hasAnimatedSinceResize=!1,this.nodes.forEach(j0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||Jb,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),g=!this.targetLayout||!NS(this.targetLayout,x)||p,v=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||d&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const M={...Yp(y,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else d||j0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&DS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(G0);return}this.isUpdating||this.nodes.forEach(Wb),this.isUpdating=!1,this.nodes.forEach(Xb),this.nodes.forEach(zb),this.nodes.forEach(Vb),this.clearAllSnapshots();const a=ui.now();Ot.delta=Ni(0,1e3/60,a-Ot.timestamp),Ot.timestamp=a,Ot.isProcessing=!0,Hu.update.process(Ot),Hu.preRender.process(Ot),Hu.render.process(Ot),Ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Op.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(jb),this.sharedNodes.forEach(Kb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!LS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Pr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),eC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Mt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(tC))){const{scroll:u}=this.root;u&&(Ds(l.x,u.offset.x),Ds(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Mt();if(Cn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Cn(l,o),Ds(l.x,f.offset.x),Ds(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=Mt();Cn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Is(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Pr(u.latestValues)&&Is(l,u.latestValues)}return Pr(this.latestValues)&&Is(l,this.latestValues),l}removeTransform(o){const a=Mt();Cn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Pr(c.latestValues))continue;zf(c.latestValues)&&c.updateSnapshot();const u=Mt(),f=c.measurePageBox();Cn(u,f),F0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Pr(this.latestValues)&&F0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Ot.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Qo(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Cn(this.target,this.layout.layoutBox),TS(this.target,this.targetDelta)):Cn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Qo(this.relativeTargetOrigin,this.target,p.target),Cn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ko&&Lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zf(this.parent.latestValues)||wS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ot.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Cn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,p=this.treeScale.y;hb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Mt());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(D0(this.prevProjectionDelta.x,this.projectionDelta.x),D0(this.prevProjectionDelta.y,this.projectionDelta.y)),Zo(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==p||!V0(this.projectionDelta.x,this.prevProjectionDelta.x)||!V0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),ko&&Lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ns(),this.projectionDelta=Ns(),this.projectionDeltaWithTransform=Ns()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Mt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=p!==x,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(Qb));this.animationProgress=0;let v;this.mixTargetDelta=M=>{const C=M/1e3;W0(f.x,o.x,C),W0(f.y,o.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qo(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Zb(this.relativeTarget,this.relativeTargetOrigin,d,C),v&&Ub(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Mt()),Cn(v,this.relativeTarget)),y&&(this.animationValues=u,Rb(u,c,this.latestValues,C,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ft.update(()=>{Gl.hasAnimatedSinceResize=!0,this.currentAnimation=Eb(0,H0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(H0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&US(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Mt();const f=wn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=wn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Cn(a,l),Is(a,u),Zo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Fb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Qu("z",o,c,this.animationValues);for(let u=0;u<Zu.length;u++)Qu(`rotate${Zu[u]}`,o,c,this.animationValues),Qu(`skew${Zu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Ob;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Vl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Vl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Pr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=kb(this.projectionDeltaWithTransform,this.treeScale,d),u&&(c.transform=u(d,c.transform));const{x:p,y:x}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:c.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Ec){if(d[y]===void 0)continue;const{correct:m,applyTo:h}=Ec[y],g=c.transform==="none"?d[y]:m(d[y],f);if(h){const v=h.length;for(let M=0;M<v;M++)c[h[M]]=g}else c[y]=g}return this.options.layoutId&&(c.pointerEvents=f===this?Vl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(G0),this.root.sharedNodes.clear()}}}function zb(t){t.updateLayout()}function Vb(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=wn(d);d.min=i[f].min,d.max=d.min+p}):US(s,n.layoutBox,i)&&Pn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=wn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ns();Zo(a,i,n.layoutBox);const l=Ns();o?Zo(l,t.applyTransform(r,!0),n.measuredBox):Zo(l,i,n.layoutBox);const c=!LS(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const x=Mt();Qo(x,n.layoutBox,d.layoutBox);const y=Mt();Qo(y,i,p.layoutBox),NS(x,y)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=x,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Hb(t){ko&&Lr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Gb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function jb(t){t.clearSnapshot()}function G0(t){t.clearMeasurements()}function Wb(t){t.isLayoutDirty=!1}function Xb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function j0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $b(t){t.resolveTargetDelta()}function Yb(t){t.calcProjection()}function qb(t){t.resetSkewAndRotation()}function Kb(t){t.removeLeadSnapshot()}function W0(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function X0(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function Zb(t,e,n,i){X0(t.x,e.x,n.x,i),X0(t.y,e.y,n.y,i)}function Qb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Jb={duration:.45,ease:[.4,0,.1,1]},$0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Y0=$0("applewebkit/")&&!$0("chrome/")?Math.round:Sn;function q0(t){t.min=Y0(t.min),t.max=Y0(t.max)}function eC(t){q0(t.x),q0(t.y)}function US(t,e,n){return t==="position"||t==="preserve-aspect"&&!ib(z0(e),z0(n),.2)}function tC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const nC=IS({attachResizeListener:(t,e)=>_a(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ju={current:void 0},FS=IS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ju.current){const t=new nC({});t.mount(window),t.setOptions({layoutScroll:!0}),Ju.current=t}return Ju.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),iC={pan:{Feature:yb},drag:{Feature:xb,ProjectionNode:FS,MeasureLayout:CS}};function K0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ft.postRender(()=>s(e,Pa(e)))}class rC extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=iT(e,n=>(K0(this.node,n,"Start"),i=>K0(this.node,i,"End"))))}unmount(){}}class sC extends vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ra(_a(this.node.current,"focus",()=>this.onFocus()),_a(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Z0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ft.postRender(()=>s(e,Pa(e)))}class oC extends vr{mount(){const{current:e}=this.node;e&&(this.unmount=aT(e,n=>(Z0(this.node,n,"Start"),(i,{success:r})=>Z0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Hf=new WeakMap,ed=new WeakMap,aC=t=>{const e=Hf.get(t.target);e&&e(t)},lC=t=>{t.forEach(aC)};function cC({root:t,...e}){const n=t||document;ed.has(n)||ed.set(n,{});const i=ed.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(lC,{root:t,...e})),i[r]}function uC(t,e,n){const i=cC(e);return Hf.set(t,n),i.observe(t),()=>{Hf.delete(t),i.unobserve(t)}}const dC={some:0,all:1};class fC extends vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:dC[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return uC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(hC(e,n))&&this.startObserver()}unmount(){}}function hC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const pC={inView:{Feature:fC},tap:{Feature:oC},focus:{Feature:sC},hover:{Feature:rC}},mC={layout:{ProjectionNode:FS,MeasureLayout:CS}},Gf={current:null},kS={current:!1};function gC(){if(kS.current=!0,!!Np)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Gf.current=t.matches;t.addListener(e),e()}else Gf.current=!1}const vC=[...lS,Wt,dr],xC=t=>vC.find(aS(t)),Q0=new WeakMap;function yC(t,e,n){for(const i in e){const r=e[i],s=n[i];if($t(r))t.addValue(i,r);else if($t(s))t.addValue(i,xa(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,xa(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const J0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _C{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=om,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=ui.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ft.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=iu(n),this.isVariantNode=g_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const x=d[p];l[p]!==void 0&&$t(x)&&x.set(l[p],!1)}}mount(e){this.current=e,Q0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),kS.current||gC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Q0.delete(this.current),this.projection&&this.projection.unmount(),ur(this.notifyUpdate),ur(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=es.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ft.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in eo){const n=eo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<J0.length;i++){const r=J0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=yC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=xa(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(sS(r)||K_(r))?r=parseFloat(r):!xC(r)&&dr.test(n)&&(r=nS(e,n)),this.setBaseTarget(e,$t(r)?r.get():r)),$t(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=zp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!$t(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new em),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class OS extends _C{constructor(){super(...arguments),this.KeyframeResolver=cS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function SC(t){return window.getComputedStyle(t)}class MC extends OS{constructor(){super(...arguments),this.type="html",this.renderInstance=T_}readValueFromInstance(e,n){if(es.has(n)){const i=sm(n);return i&&i.default||0}else{const i=SC(e),r=(M_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return AS(e,n)}build(e,n,i){Gp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return $p(e,n,i)}}class EC extends OS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(es.has(n)){const i=sm(n);return i&&i.default||0}return n=A_.has(n)?n:kp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return R_(e,n,i)}build(e,n,i){jp(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){b_(e,n,i,r)}mount(e){this.isSVGTag=Xp(e.tagName),super.mount(e)}}const wC=(t,e)=>Bp(t)?new EC(e):new MC(e,{allowProjection:t!==oe.Fragment}),TC=Kw({...YA,...pC,...iC,...mC},wC),ze=dw(TC),AC=()=>{const[t,e]=oe.useState({x:-100,y:-100}),[n,i]=oe.useState(!1),[r,s]=oe.useState(!1),[o,a]=oe.useState(!1);return oe.useEffect(()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0){a(!0);return}const l=d=>{e({x:d.clientX,y:d.clientY}),r||s(!0)},c=()=>{s(!1)},u=()=>{s(!0)},f=d=>{const p=d.target;if(!p)return;const x=p.closest('button, a, input, textarea, .interactive-card, [role="button"]');i(!!x)};return window.addEventListener("mousemove",l),window.addEventListener("mousemove",f),document.addEventListener("mouseleave",c),document.addEventListener("mouseenter",u),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mousemove",f),document.removeEventListener("mouseleave",c),document.removeEventListener("mouseenter",u)}},[r]),o||!r?null:S.jsxs("div",{className:"pointer-events-none fixed inset-0 z-50 overflow-hidden",children:[S.jsx(ze.div,{className:"fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none",style:{boxShadow:"0 0 10px #00f2fe, 0 0 20px #38bdf8"},animate:{x:t.x-4,y:t.y-4,scale:n?.5:1},transition:{type:"spring",damping:25,stiffness:400,mass:.1}}),S.jsx(ze.div,{className:"fixed top-0 left-0 rounded-full border pointer-events-none",animate:{x:t.x-(n?24:16),y:t.y-(n?24:16),width:n?48:32,height:n?48:32,borderColor:n?"rgba(6, 182, 212, 0.8)":"rgba(59, 130, 246, 0.4)",backgroundColor:n?"rgba(6, 182, 212, 0.08)":"transparent"},transition:{type:"spring",damping:20,stiffness:250,mass:.2}})]})},bC=()=>{const[t,e]=oe.useState(0);return oe.useEffect(()=>{const n=()=>{const i=document.documentElement.scrollTop,r=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(r>0){const s=i/r*100;e(s)}};return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),S.jsx("div",{className:"fixed top-0 left-0 right-0 h-[3px] bg-dark-900/50 z-[60] backdrop-blur-sm pointer-events-none",children:S.jsx("div",{className:"h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(6,182,212,0.8)]",style:{width:`${t}%`}})})},CC=()=>{const t=oe.useRef(null);return oe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const o=()=>{e&&(r=e.width=window.innerWidth,s=e.height=window.innerHeight,c())};window.addEventListener("resize",o);const a=["#3b82f6","#06b6d4","#8b5cf6","#60a5fa"];let l=[];const c=()=>{l=[];const d=Math.min(Math.floor(r*s/22e3),55);for(let p=0;p<d;p++){const x=Math.random()*.4+.15;l.push({x:Math.random()*r,y:Math.random()*s,radius:Math.random()*1.8+.6,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,alpha:x,baseAlpha:x,pulseSpeed:Math.random()*.02+.005,color:a[Math.floor(Math.random()*a.length)]})}};c();let u=0;const f=()=>{u++,n.clearRect(0,0,r,s);for(let d=0;d<l.length;d++)for(let p=d+1;p<l.length;p++){const x=l[d].x-l[p].x,y=l[d].y-l[p].y,m=Math.sqrt(x*x+y*y);if(m<110){const h=(1-m/110)*.08;n.strokeStyle=`rgba(59, 130, 246, ${h})`,n.lineWidth=.8,n.beginPath(),n.moveTo(l[d].x,l[d].y),n.lineTo(l[p].x,l[p].y),n.stroke()}}for(let d=0;d<l.length;d++){const p=l[d];p.x+=p.vx,p.y+=p.vy,p.x<0&&(p.x=r),p.x>r&&(p.x=0),p.y<0&&(p.y=s),p.y>s&&(p.y=0),p.alpha=p.baseAlpha+Math.sin(u*p.pulseSpeed)*.15,n.save(),n.beginPath(),n.arc(p.x,p.y,p.radius,0,Math.PI*2),n.fillStyle=p.color,n.globalAlpha=Math.max(.05,Math.min(.8,p.alpha)),n.shadowBlur=8,n.shadowColor=p.color,n.fill(),n.restore()}i=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",o),cancelAnimationFrame(i)}},[]),S.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:[S.jsx("div",{className:"hero-glow-sphere w-[550px] h-[550px] top-[-100px] left-[-150px] bg-blue-600/15 animate-pulse-slow"}),S.jsx("div",{className:"hero-glow-sphere w-[600px] h-[600px] top-[40%] right-[-200px] bg-violet-600/12 animate-pulse-slow",style:{animationDelay:"2s"}}),S.jsx("div",{className:"hero-glow-sphere w-[480px] h-[480px] bottom-[-100px] left-[20%] bg-cyan-600/10 animate-pulse-slow",style:{animationDelay:"4s"}}),S.jsx("div",{className:"absolute inset-0 futuristic-grid opacity-60 pointer-events-none"}),S.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full pointer-events-none"})]})};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),BS=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>oe.createElement("svg",{ref:l,...PC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:BS("lucide",r),...a},[...o.map(([c,u])=>oe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(t,e)=>{const n=oe.forwardRef(({className:i,...r},s)=>oe.createElement(LC,{ref:s,iconNode:e,className:BS(`lucide-${RC(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Ye("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=Ye("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=Ye("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=Ye("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=Ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=Ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=Ye("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=Ye("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=Ye("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=Ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=Ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=Ye("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=Ye("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=Ye("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=Ye("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Ye("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=Ye("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=Ye("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=Ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=Ye("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=Ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=Ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=Ye("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Ye("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=Ye("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=Ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=Ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=Ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=Ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=Ye("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=Ye("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=Ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),nd=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Education",href:"#education"},{name:"Contact",href:"#contact"}],JC=()=>{const[t,e]=oe.useState(!1),[n,i]=oe.useState("home"),[r,s]=oe.useState(!1);oe.useEffect(()=>{const a=()=>{e(window.scrollY>20);const l=nd.map(u=>u.href.substring(1)),c=window.scrollY+200;for(const u of l){const f=document.getElementById(u);if(f){const d=f.offsetTop,p=f.offsetHeight;if(c>=d&&c<d+p){i(u);break}}}};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{s(!1);const l=document.querySelector(a);l&&l.scrollIntoView({behavior:"smooth"})};return S.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"py-3.5 bg-dark-950/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-black/40":"py-5 bg-transparent"}`,children:[S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[S.jsxs("a",{href:"#home",onClick:a=>{a.preventDefault(),o("#home")},className:"group flex items-center gap-2.5",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-[1px] shadow-neon-blue group-hover:shadow-neon-cyan transition-all duration-300",children:S.jsx("div",{className:"w-full h-full bg-dark-900/90 rounded-[11px] flex items-center justify-center backdrop-blur-md",children:S.jsx("span",{className:"font-heading font-black text-sm tracking-wider bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform",children:"LN"})})}),S.jsxs("div",{className:"flex flex-col",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsxs("span",{className:"font-heading font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors",children:["Lufi",S.jsx("span",{className:"text-cyan-400",children:"."})]}),S.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono",children:"RPL"})]}),S.jsx("span",{className:"text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5",children:"DEV PORTFOLIO"})]})]}),S.jsx("nav",{className:"hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-glass",children:nd.map(a=>{const l=n===a.href.substring(1);return S.jsxs("a",{href:a.href,onClick:c=>{c.preventDefault(),o(a.href)},className:`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${l?"text-white":"text-slate-400 hover:text-slate-200"}`,children:[l&&S.jsx(ze.div,{layoutId:"activeNavBackground",className:"absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/70 via-cyan-600/70 to-violet-600/70 border border-cyan-400/40 shadow-neon-cyan/40",transition:{type:"spring",stiffness:380,damping:30}}),S.jsx("span",{className:"relative z-10",children:a.name})]},a.name)})}),S.jsx("div",{className:"hidden md:flex items-center gap-3",children:S.jsxs("a",{href:"#contact",onClick:a=>{a.preventDefault(),o("#contact")},className:"group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-heading tracking-wide text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400/70 hover:bg-cyan-900/40 transition-all duration-300 shadow-sm hover:shadow-neon-cyan/30",children:[S.jsx(Pc,{className:"w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300"}),S.jsx("span",{children:"Connect"}),S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"})]})}),S.jsx("div",{className:"md:hidden flex items-center",children:S.jsx("button",{onClick:()=>s(!r),className:"p-2 rounded-xl glass-panel border border-cyan-500/20 text-slate-300 hover:text-white transition-colors","aria-label":"Toggle mobile menu",children:r?S.jsx(WS,{className:"w-6 h-6"}):S.jsx(XC,{className:"w-6 h-6"})})})]}),S.jsx(Dp,{children:r&&S.jsx(ze.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},className:"md:hidden glass-panel border-b border-cyan-500/20 px-6 py-5 mt-2 shadow-2xl backdrop-blur-2xl",children:S.jsxs("div",{className:"flex flex-col space-y-2",children:[nd.map(a=>{const l=n===a.href.substring(1);return S.jsxs("a",{href:a.href,onClick:c=>{c.preventDefault(),o(a.href)},className:`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${l?"bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold":"text-slate-300 hover:bg-white/5 hover:text-white"}`,children:[S.jsx("span",{children:a.name}),l&&S.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"})]},a.name)}),S.jsx("div",{className:"pt-3 border-t border-white/10",children:S.jsxs("a",{href:"#contact",onClick:a=>{a.preventDefault(),o("#contact")},className:"flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-heading text-xs font-semibold tracking-wider shadow-neon-blue",children:[S.jsx(Pc,{className:"w-4 h-4"}),S.jsx("span",{children:"Contact Me"})]})})]})})})]})},xr={personal:{fullName:"Lufi Noferiza",nickname:"Lufi",school:"SMK Negeri Tembarak",classGrade:"XI RPL A",age:16,status:"Pelajar",city:"Temanggung",province:"Jawa Tengah",country:"Indonesia",year:2026,email:"EMAIL_KAMU",bioHeadline:"Software Engineering Student",heroHeadline:"Future Software Developer",heroDescription:"Saya adalah siswa Rekayasa Perangkat Lunak di SMK Negeri Tembarak yang sedang belajar membangun website, mempelajari pemrograman, dan mengembangkan kemampuan di dunia teknologi.",aboutDescription:"Halo, saya Lufi Noferiza, biasa dipanggil Lufi. Saya adalah siswa kelas XI RPL A di SMK Negeri Tembarak, jurusan Rekayasa Perangkat Lunak. Saya memiliki ketertarikan terhadap dunia teknologi, pemrograman, dan pengembangan website. Saat ini saya terus belajar dan mengembangkan kemampuan saya melalui berbagai latihan dan project."},skills:[{name:"HTML",category:"frontend",status:"Fondasi Web & Semantik",icon:"Code2",accent:"#f97316"},{name:"CSS",category:"frontend",status:"Styling & Responsive Layout",icon:"Palette",accent:"#38bdf8"},{name:"JavaScript",category:"frontend",status:"Logika Web & DOM",icon:"FileCode2",accent:"#facc15"},{name:"PHP",category:"backend",status:"Server-side Scripting",icon:"Server",accent:"#818cf8"},{name:"MySQL",category:"backend",status:"Relational Database",icon:"Database",accent:"#06b6d4"},{name:"Git",category:"tools",status:"Version Control Dasar",icon:"GitBranch",accent:"#f43f5e"},{name:"GitHub",category:"tools",status:"Repository & Kolaborasi",icon:"Github",accent:"#a855f7"},{name:"Responsive Web Design",category:"concept",status:"Mobile-First & Fluid Layout",icon:"Smartphone",accent:"#10b981"},{name:"UI/UX",category:"concept",status:"Prinsip Desain Antarmuka",icon:"Layout",accent:"#ec4899"}],projects:[{id:"project-01",number:"Project 01",title:"Project Coming Soon",statusBadge:"Under Development",description:"Project yang sedang saya kembangkan.",technologies:["HTML","CSS","JavaScript"],gradient:"from-blue-500/20 via-cyan-500/10 to-transparent"},{id:"project-02",number:"Project 02",title:"Project Coming Soon",statusBadge:"Planned Showcase",description:"Website/aplikasi yang akan saya tambahkan ke portfolio.",technologies:["HTML","CSS","JavaScript"],gradient:"from-cyan-500/20 via-violet-500/10 to-transparent"},{id:"project-03",number:"Project 03",title:"Project Coming Soon",statusBadge:"Learning Milestone",description:"Project berikutnya dalam perjalanan belajar saya.",technologies:["PHP","MySQL"],gradient:"from-violet-500/20 via-purple-500/10 to-transparent"}],education:{school:"SMK Negeri Tembarak",major:"Rekayasa Perangkat Lunak (RPL)",classGrade:"XI RPL A",year:"2026",description:"Mempelajari dasar-dasar pemrograman, pengembangan website, database, dan konsep rekayasa perangkat lunak."},journey:[{step:"01",title:"Learn",description:"Mempelajari teknologi dan dasar pemrograman.",icon:"BookOpen",color:"from-blue-500 to-cyan-500"},{step:"02",title:"Build",description:"Menerapkan ilmu melalui latihan dan project.",icon:"Hammer",color:"from-cyan-500 to-teal-500"},{step:"03",title:"Improve",description:"Memperbaiki kemampuan dan mempelajari teknologi baru.",icon:"TrendingUp",color:"from-violet-500 to-purple-500"},{step:"04",title:"Create",description:"Membangun karya digital yang bermanfaat.",icon:"Sparkles",color:"from-purple-500 to-pink-500"}]};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dm="169",e2=0,ev=1,t2=2,XS=1,n2=2,vi=3,fr=0,un=1,_i=2,or=0,Gs=1,tv=2,nv=3,iv=4,i2=5,Ir=100,r2=101,s2=102,o2=103,a2=104,l2=200,c2=201,u2=202,d2=203,Xf=204,$f=205,f2=206,h2=207,p2=208,m2=209,g2=210,v2=211,x2=212,y2=213,_2=214,Yf=0,qf=1,Kf=2,no=3,Zf=4,Qf=5,Jf=6,eh=7,$S=0,S2=1,M2=2,ar=0,E2=1,w2=2,T2=3,A2=4,b2=5,C2=6,R2=7,YS=300,io=301,ro=302,th=303,nh=304,ou=306,ih=1e3,zr=1001,rh=1002,Un=1003,P2=1004,ol=1005,Yn=1006,id=1007,Vr=1008,Di=1009,qS=1010,KS=1011,Sa=1012,fm=1013,Kr=1014,Ei=1015,La=1016,hm=1017,pm=1018,so=1020,ZS=35902,QS=1021,JS=1022,Kn=1023,eM=1024,tM=1025,js=1026,oo=1027,nM=1028,mm=1029,iM=1030,gm=1031,vm=1033,Wl=33776,Xl=33777,$l=33778,Yl=33779,sh=35840,oh=35841,ah=35842,lh=35843,ch=36196,uh=37492,dh=37496,fh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,yh=37815,_h=37816,Sh=37817,Mh=37818,Eh=37819,wh=37820,Th=37821,ql=36492,Ah=36494,bh=36495,rM=36283,Ch=36284,Rh=36285,Ph=36286,L2=3200,N2=3201,D2=0,I2=1,qi="",ri="srgb",yr="srgb-linear",xm="display-p3",au="display-p3-linear",Lc="linear",ut="srgb",Nc="rec709",Dc="p3",rs=7680,rv=519,U2=512,F2=513,k2=514,sM=515,O2=516,B2=517,z2=518,V2=519,sv=35044,ov="300 es",wi=2e3,Ic=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,Lh=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function H2(t,e){return(t%e+e)%e}function sd(t,e,n){return(1-n)*t+n*e}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],y=r[0],m=r[3],h=r[6],g=r[1],v=r[4],M=r[7],C=r[2],b=r[5],A=r[8];return s[0]=o*y+a*g+l*C,s[3]=o*m+a*v+l*b,s[6]=o*h+a*M+l*A,s[1]=c*y+u*g+f*C,s[4]=c*m+u*v+f*b,s[7]=c*h+u*M+f*A,s[2]=d*y+p*g+x*C,s[5]=d*m+p*v+x*b,s[8]=d*h+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,x=n*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(od.makeScale(e,n)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,n){return this.premultiply(od.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new je;function oM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function G2(){const t=Uc("canvas");return t.style.display="block",t}const av={};function Kl(t){t in av||(av[t]=!0,console.warn(t))}function j2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function W2(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function X2(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lv=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cv=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ao={[yr]:{transfer:Lc,primaries:Nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ri]:{transfer:ut,primaries:Nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[au]:{transfer:Lc,primaries:Dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(cv),fromReference:t=>t.applyMatrix3(lv)},[xm]:{transfer:ut,primaries:Dc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(cv),fromReference:t=>t.applyMatrix3(lv).convertLinearToSRGB()}},$2=new Set([yr,au]),tt={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!$2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ao[e].toReference,r=Ao[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ao[t].primaries},getTransfer:function(t){return t===qi?Lc:Ao[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ao[e].luminanceCoefficients)}};function Ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ad(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class Y2{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ss===void 0&&(ss=Uc("canvas")),ss.width=e.width,ss.height=e.height;const i=ss.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ss}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ws(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ws(n[i]/255)*255):n[i]=Ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q2=0;class aM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ld(r[o].image)):s.push(ld(r[o]))}else s=ld(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ld(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Y2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K2=0;class dn extends po{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=zr,r=zr,s=Yn,o=Vr,a=Kn,l=Di,c=dn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=Na(),this.name="",this.source=new aM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==YS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=YS;dn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(p+1)/2,C=(h+1)/2,b=(u+d)/4,A=(f+y)/4,P=(x+m)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(f-y)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z2 extends po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new aM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends Z2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q2 extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Da{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==x){let m=1-a;const h=l*d+c*p+u*x+f*y,g=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,h*g);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const M=a*g;if(l=l*m+d*M,c=c*m+p*M,u=u*m+x*M,f=f*m+y*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*f+l*p-c*d,e[n+1]=l*x+u*d+c*f-a*p,e[n+2]=c*x+u*p+a*d-l*f,e[n+3]=u*x-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new z,uv=new Da;class Ia{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),al.copy(i.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),ll.subVectors(this.max,bo),os.subVectors(e.a,bo),as.subVectors(e.b,bo),ls.subVectors(e.c,bo),Oi.subVectors(as,os),Bi.subVectors(ls,as),Mr.subVectors(os,ls);let n=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-Mr.z,Mr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,Mr.z,0,-Mr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-Mr.y,Mr.x,0];return!ud(n,os,as,ls,ll)||(n=[1,0,0,0,1,0,0,0,1],!ud(n,os,as,ls,ll))?!1:(cl.crossVectors(Oi,Bi),n=[cl.x,cl.y,cl.z],ud(n,os,as,ls,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new z,new z,new z,new z,new z,new z,new z,new z],Vn=new z,al=new Ia,os=new z,as=new z,ls=new z,Oi=new z,Bi=new z,Mr=new z,bo=new z,ll=new z,cl=new z,Er=new z;function ud(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Er.fromArray(t,s);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const J2=new Ia,Co=new z,dd=new z;class lu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(dd)),this.expandByPoint(Co.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new z,fd=new z,ul=new z,zi=new z,hd=new z,dl=new z,pd=new z;class cM{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fd.copy(e).add(n).multiplyScalar(.5),ul.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(fd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ul),a=zi.dot(this.direction),l=-zi.dot(ul),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-a,d=o*a-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fd).addScaledVector(ul,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){hd.subVectors(n,e),dl.subVectors(i,e),pd.crossVectors(hd,dl);let o=this.direction.dot(pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(dl.crossVectors(zi,dl));if(l<0)return null;const c=a*this.direction.dot(hd.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(pd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,x=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,y=c*f;n[0]=d+y*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,x=a*u,y=a*f;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=x*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+x,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eR,e,tR)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Vi.crossVectors(i,mn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Vi.crossVectors(i,mn)),Vi.normalize(),fl.crossVectors(mn,Vi),r[0]=Vi.x,r[4]=fl.x,r[8]=mn.x,r[1]=Vi.y,r[5]=fl.y,r[9]=mn.y,r[2]=Vi.z,r[6]=fl.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],y=i[6],m=i[10],h=i[14],g=i[3],v=i[7],M=i[11],C=i[15],b=r[0],A=r[4],P=r[8],H=r[12],_=r[1],w=r[5],W=r[9],j=r[13],K=r[2],ne=r[6],$=r[10],q=r[14],I=r[3],Q=r[7],N=r[11],L=r[15];return s[0]=o*b+a*_+l*K+c*I,s[4]=o*A+a*w+l*ne+c*Q,s[8]=o*P+a*W+l*$+c*N,s[12]=o*H+a*j+l*q+c*L,s[1]=u*b+f*_+d*K+p*I,s[5]=u*A+f*w+d*ne+p*Q,s[9]=u*P+f*W+d*$+p*N,s[13]=u*H+f*j+d*q+p*L,s[2]=x*b+y*_+m*K+h*I,s[6]=x*A+y*w+m*ne+h*Q,s[10]=x*P+y*W+m*$+h*N,s[14]=x*H+y*j+m*q+h*L,s[3]=g*b+v*_+M*K+C*I,s[7]=g*A+v*w+M*ne+C*Q,s[11]=g*P+v*W+M*$+C*N,s[15]=g*H+v*j+M*q+C*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],y=e[7],m=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],y=e[13],m=e[14],h=e[15],g=f*m*c-y*d*c+y*l*p-a*m*p-f*l*h+a*d*h,v=x*d*c-u*m*c-x*l*p+o*m*p+u*l*h-o*d*h,M=u*y*c-x*f*c+x*a*p-o*y*p-u*a*h+o*f*h,C=x*f*l-u*y*l-x*a*d+o*y*d+u*a*m-o*f*m,b=n*g+i*v+r*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(u*m*s-x*d*s+x*r*p-n*m*p-u*r*h+n*d*h)*A,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(x*f*s-u*y*s-x*i*p+n*y*p+u*i*h-n*f*h)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*y*r-x*f*r+x*i*d-n*y*d-u*i*m+n*f*m)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,x=s*f,y=o*u,m=o*f,h=a*f,g=l*c,v=l*u,M=l*f,C=i.x,b=i.y,A=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+M)*C,r[2]=(x-v)*C,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(d+h))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(m-g)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=cs.set(r[0],r[1],r[2]).length();const o=cs.set(r[4],r[5],r[6]).length(),a=cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/s,u=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(a===wi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ic)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let x,y;if(a===wi)x=(o+s)*f,y=-2*f;else if(a===Ic)x=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const cs=new z,Hn=new Tt,eR=new z(0,0,0),tR=new z(1,1,1),Vi=new z,fl=new z,mn=new z,dv=new Tt,fv=new Da;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class uM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nR=0;const hv=new z,us=new Da,pi=new Tt,hl=new z,Ro=new z,iR=new z,rR=new Da,pv=new z(1,0,0),mv=new z(0,1,0),gv=new z(0,0,1),vv={type:"added"},sR={type:"removed"},ds={type:"childadded",child:null},md={type:"childremoved",child:null};class fn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new z,n=new Ii,i=new Da,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,n){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hl.copy(e):hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ro,hl,this.up):pi.lookAt(hl,Ro,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),us.setFromRotationMatrix(pi),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sR),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,iR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,rR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new z(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new z,mi=new z,gd=new z,gi=new z,fs=new z,hs=new z,xv=new z,vd=new z,xd=new z,yd=new z,_d=new wt,Sd=new wt,Md=new wt;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),mi.subVectors(i,n),gd.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(mi),l=Gn.dot(gd),c=mi.dot(mi),u=mi.dot(gd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return _d.setScalar(0),Sd.setScalar(0),Md.setScalar(0),_d.fromBufferAttribute(e,n),Sd.fromBufferAttribute(e,i),Md.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_d,s.x),o.addScaledVector(Sd,s.y),o.addScaledVector(Md,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),mi.subVectors(e,n),Gn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Gn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),hs.subVectors(s,i),vd.subVectors(e,i);const l=fs.dot(vd),c=hs.dot(vd);if(l<=0&&c<=0)return n.copy(i);xd.subVectors(e,r);const u=fs.dot(xd),f=hs.dot(xd);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fs,o);yd.subVectors(e,s);const p=fs.dot(yd),x=hs.dot(yd);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(hs,a);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return xv.subVectors(s,r),a=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(xv,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=H2(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ed(o,s,e+1/3),this.g=Ed(o,s,e),this.b=Ed(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=dM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=ad(e.r),this.g=ad(e.g),this.b=ad(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return tt.fromWorkingColorSpace(jt.copy(this),e),Math.round(sn(jt.r*255,0,255))*65536+Math.round(sn(jt.g*255,0,255))*256+Math.round(sn(jt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=ri){tt.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(pl);const i=sd(Hi.h,pl.h,n),r=sd(Hi.s,pl.s,n),s=sd(Hi.l,pl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new rt;rt.NAMES=dM;let oR=0;class Ua extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=Gs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=$f,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==$f&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Us extends Ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=$S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new z,ml=new nt;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ml.fromBufferAttribute(this,n),ml.applyMatrix3(e),this.setXY(n,ml.x,ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class fM extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class hM extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Mn extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let aR=0;const Rn=new Tt,wd=new fn,ps=new z,gn=new Ia,Po=new Ia,Dt=new z;class ti extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oM(e)?hM:fM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(gn.min,Po.min),gn.expandByPoint(Dt),Dt.addVectors(gn.max,Po.max),gn.expandByPoint(Dt)):(gn.expandByPoint(Po.min),gn.expandByPoint(Po.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Dt.add(ps)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,f=new z,d=new nt,p=new nt,x=new nt,y=new z,m=new z;function h(P,H,_){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,H),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,H),x.fromBufferAttribute(s,_),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const w=1/(p.x*x.y-x.x*p.y);isFinite(w)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(w),a[P].add(y),a[H].add(y),a[_].add(y),l[P].add(m),l[H].add(m),l[_].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,H=g.length;P<H;++P){const _=g[P],w=_.start,W=_.count;for(let j=w,K=w+W;j<K;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new z,M=new z,C=new z,b=new z;function A(P){C.fromBufferAttribute(r,P),b.copy(C);const H=a[P];v.copy(H),v.sub(C.multiplyScalar(C.dot(H))).normalize(),M.crossVectors(b,H);const w=M.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,w)}for(let P=0,H=g.length;P<H;++P){const _=g[P],w=_.start,W=_.count;for(let j=w,K=w+W;j<K;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new Jn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new Tt,wr=new cM,gl=new lu,_v=new z,vl=new z,xl=new z,yl=new z,Td=new z,_l=new z,Sv=new z,Sl=new z;class yn extends fn{constructor(e=new ti,n=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Td.fromBufferAttribute(f,e),o?_l.addScaledVector(Td,u):_l.addScaledVector(Td.sub(n),u))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(gl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(gl,_v)===null||wr.origin.distanceToSquared(_v)>(e.far-e.near)**2))&&(yv.copy(s).invert(),wr.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const m=d[x],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=a.getX(M),A=a.getX(M+1),P=a.getX(M+2);r=Ml(this,h,e,i,c,u,f,b,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const g=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);r=Ml(this,o,e,i,c,u,f,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const m=d[x],h=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,C=v;M<C;M+=3){const b=M,A=M+1,P=M+2;r=Ml(this,h,e,i,c,u,f,b,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,h=y;m<h;m+=3){const g=m,v=m+1,M=m+2;r=Ml(this,o,e,i,c,u,f,g,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function lR(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sl);return c<n.near||c>n.far?null:{distance:c,point:Sl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vl),t.getVertexPosition(l,xl),t.getVertexPosition(c,yl);const u=lR(t,e,n,i,vl,xl,yl,Sv);if(u){const f=new z;qn.getBarycoord(Sv,vl,xl,yl,f),r&&(u.uv=qn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=qn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=qn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};qn.getNormal(vl,xl,yl,d.normal),u.face=d,u.barycoord=f}return u}class Fa extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(f,2));function x(y,m,h,g,v,M,C,b,A,P,H){const _=M/A,w=C/P,W=M/2,j=C/2,K=b/2,ne=A+1,$=P+1;let q=0,I=0;const Q=new z;for(let N=0;N<$;N++){const L=N*w-j;for(let ie=0;ie<ne;ie++){const se=ie*_-W;Q[y]=se*g,Q[m]=L*v,Q[h]=K,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[h]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(ie/A),f.push(1-N/P),q+=1}}for(let N=0;N<P;N++)for(let L=0;L<A;L++){const ie=d+L+ne*N,se=d+L+ne*(N+1),k=d+(L+1)+ne*(N+1),X=d+(L+1)+ne*N;l.push(ie,se,X),l.push(se,k,X),I+=6}a.addGroup(p,I,H),p+=I,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const r in i)e[r]=i[r]}return e}function cR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const uR={clone:ao,merge:qt};var dR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dR,this.fragmentShader=fR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=cR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mM extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new z,Mv=new nt,Ev=new nt;class Dn extends mM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lh*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Mv,Ev),n.subVectors(Ev,Mv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class hR extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Dn(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Dn(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Dn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class gM extends dn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pR extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fa(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:or});s.uniforms.tEquirect.value=n;const o=new yn(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Yn),new hR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ad=new z,mR=new z,gR=new je;class Nr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ad.subVectors(i,n).cross(mR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gR.getNormalMatrix(e),r=this.coplanarPoint(Ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new lu,El=new z;class vM{constructor(e=new Nr,n=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],y=r[10],m=r[11],h=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-h).normalize(),i[1].setComponents(l+s,d+c,m+p,M+h).normalize(),i[2].setComponents(l+o,d+u,m+x,M+g).normalize(),i[3].setComponents(l-o,d-u,m-x,M-g).normalize(),i[4].setComponents(l-a,d-f,m-y,M-v).normalize(),n===wi)i[5].setComponents(l+a,d+f,m+y,M+v).normalize();else if(n===Ic)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cu extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],x=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*d-o;for(let v=0;v<c;v++){const M=v*f-s;x.push(M,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const v=g+c*h,M=g+c*(h+1),C=g+1+c*(h+1),b=g+1+c*h;p.push(v,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Mn(x,3)),this.setAttribute("normal",new Mn(y,3)),this.setAttribute("uv",new Mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var xR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yR=`#ifdef USE_ALPHAHASH
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
#endif`,_R=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ER=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wR=`#ifdef USE_AOMAP
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
#endif`,TR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LR=`#ifdef USE_IRIDESCENCE
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
#endif`,NR=`#ifdef USE_BUMPMAP
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
#endif`,DR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VR=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,HR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GR=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$R=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YR="gl_FragColor = linearToOutputTexel( gl_FragColor );",qR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QR=`#ifdef USE_ENVMAP
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
#endif`,JR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sP=`#ifdef USE_GRADIENTMAP
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
}`,oP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cP=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,uP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vP=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_P=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bP=`#if defined( USE_POINTS_UV )
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
#endif`,CP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DP=`#ifdef USE_MORPHTARGETS
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
#endif`,IP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zP=`#ifdef USE_NORMALMAP
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
#endif`,VP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,tL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,nL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,iL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rL=`#ifdef USE_SKINNING
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
#endif`,sL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oL=`#ifdef USE_SKINNING
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
#endif`,aL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dL=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fL=`#ifdef USE_TRANSMISSION
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
#endif`,hL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xL=`uniform sampler2D t2D;
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
}`,yL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_L=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`#include <common>
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
}`,wL=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TL=`#define DISTANCE
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
}`,AL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`uniform float scale;
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
}`,PL=`uniform vec3 diffuse;
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
}`,LL=`#include <common>
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
}`,NL=`uniform vec3 diffuse;
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
}`,DL=`#define LAMBERT
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
}`,IL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,UL=`#define MATCAP
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
}`,FL=`#define MATCAP
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
}`,kL=`#define NORMAL
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
}`,OL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BL=`#define PHONG
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
}`,zL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,VL=`#define STANDARD
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
}`,HL=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,GL=`#define TOON
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
}`,jL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,WL=`uniform float size;
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
}`,XL=`uniform vec3 diffuse;
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
}`,$L=`#include <common>
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
}`,YL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qL=`uniform float rotation;
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
}`,KL=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:xR,alphahash_pars_fragment:yR,alphamap_fragment:_R,alphamap_pars_fragment:SR,alphatest_fragment:MR,alphatest_pars_fragment:ER,aomap_fragment:wR,aomap_pars_fragment:TR,batching_pars_vertex:AR,batching_vertex:bR,begin_vertex:CR,beginnormal_vertex:RR,bsdfs:PR,iridescence_fragment:LR,bumpmap_pars_fragment:NR,clipping_planes_fragment:DR,clipping_planes_pars_fragment:IR,clipping_planes_pars_vertex:UR,clipping_planes_vertex:FR,color_fragment:kR,color_pars_fragment:OR,color_pars_vertex:BR,color_vertex:zR,common:VR,cube_uv_reflection_fragment:HR,defaultnormal_vertex:GR,displacementmap_pars_vertex:jR,displacementmap_vertex:WR,emissivemap_fragment:XR,emissivemap_pars_fragment:$R,colorspace_fragment:YR,colorspace_pars_fragment:qR,envmap_fragment:KR,envmap_common_pars_fragment:ZR,envmap_pars_fragment:QR,envmap_pars_vertex:JR,envmap_physical_pars_fragment:uP,envmap_vertex:eP,fog_vertex:tP,fog_pars_vertex:nP,fog_fragment:iP,fog_pars_fragment:rP,gradientmap_pars_fragment:sP,lightmap_pars_fragment:oP,lights_lambert_fragment:aP,lights_lambert_pars_fragment:lP,lights_pars_begin:cP,lights_toon_fragment:dP,lights_toon_pars_fragment:fP,lights_phong_fragment:hP,lights_phong_pars_fragment:pP,lights_physical_fragment:mP,lights_physical_pars_fragment:gP,lights_fragment_begin:vP,lights_fragment_maps:xP,lights_fragment_end:yP,logdepthbuf_fragment:_P,logdepthbuf_pars_fragment:SP,logdepthbuf_pars_vertex:MP,logdepthbuf_vertex:EP,map_fragment:wP,map_pars_fragment:TP,map_particle_fragment:AP,map_particle_pars_fragment:bP,metalnessmap_fragment:CP,metalnessmap_pars_fragment:RP,morphinstance_vertex:PP,morphcolor_vertex:LP,morphnormal_vertex:NP,morphtarget_pars_vertex:DP,morphtarget_vertex:IP,normal_fragment_begin:UP,normal_fragment_maps:FP,normal_pars_fragment:kP,normal_pars_vertex:OP,normal_vertex:BP,normalmap_pars_fragment:zP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:HP,clearcoat_pars_fragment:GP,iridescence_pars_fragment:jP,opaque_fragment:WP,packing:XP,premultiplied_alpha_fragment:$P,project_vertex:YP,dithering_fragment:qP,dithering_pars_fragment:KP,roughnessmap_fragment:ZP,roughnessmap_pars_fragment:QP,shadowmap_pars_fragment:JP,shadowmap_pars_vertex:eL,shadowmap_vertex:tL,shadowmask_pars_fragment:nL,skinbase_vertex:iL,skinning_pars_vertex:rL,skinning_vertex:sL,skinnormal_vertex:oL,specularmap_fragment:aL,specularmap_pars_fragment:lL,tonemapping_fragment:cL,tonemapping_pars_fragment:uL,transmission_fragment:dL,transmission_pars_fragment:fL,uv_pars_fragment:hL,uv_pars_vertex:pL,uv_vertex:mL,worldpos_vertex:gL,background_vert:vL,background_frag:xL,backgroundCube_vert:yL,backgroundCube_frag:_L,cube_vert:SL,cube_frag:ML,depth_vert:EL,depth_frag:wL,distanceRGBA_vert:TL,distanceRGBA_frag:AL,equirect_vert:bL,equirect_frag:CL,linedashed_vert:RL,linedashed_frag:PL,meshbasic_vert:LL,meshbasic_frag:NL,meshlambert_vert:DL,meshlambert_frag:IL,meshmatcap_vert:UL,meshmatcap_frag:FL,meshnormal_vert:kL,meshnormal_frag:OL,meshphong_vert:BL,meshphong_frag:zL,meshphysical_vert:VL,meshphysical_frag:HL,meshtoon_vert:GL,meshtoon_frag:jL,points_vert:WL,points_frag:XL,shadow_vert:$L,shadow_frag:YL,sprite_vert:qL,sprite_frag:KL},fe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},si={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};si.physical={uniforms:qt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const wl={r:0,b:0,g:0},Ar=new Ii,ZL=new Tt;function QL(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const M=x(g);M===null?h(a,l):M&&M.isColor&&(h(M,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const M=x(v);M&&(M.isCubeTexture||M.mapping===ou)?(u===void 0&&(u=new yn(new Fa(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:ao(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ar.copy(v.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZL.makeRotationFromEuler(Ar)),u.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,(f!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new yn(new cu(2,2),new hr({name:"BackgroundMaterial",uniforms:ao(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function h(g,v){g.getRGB(wl,pM(t)),i.buffers.color.setClear(wl.r,wl.g,wl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,h(a,l)},render:y,addToRenderList:m}}function JL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,w,W,j,K){let ne=!1;const $=f(j,W,w);s!==$&&(s=$,c(s.object)),ne=p(_,j,W,K),ne&&x(_,j,W,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(_,w,W,j),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,w,W){const j=W.wireframe===!0;let K=i[_.id];K===void 0&&(K={},i[_.id]=K);let ne=K[w.id];ne===void 0&&(ne={},K[w.id]=ne);let $=ne[j];return $===void 0&&($=d(l()),ne[j]=$),$}function d(_){const w=[],W=[],j=[];for(let K=0;K<n;K++)w[K]=0,W[K]=0,j[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:j,object:_,attributes:{},index:null}}function p(_,w,W,j){const K=s.attributes,ne=w.attributes;let $=0;const q=W.getAttributes();for(const I in q)if(q[I].location>=0){const N=K[I];let L=ne[I];if(L===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(L=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(L=_.instanceColor)),N===void 0||N.attribute!==L||L&&N.data!==L.data)return!0;$++}return s.attributesNum!==$||s.index!==j}function x(_,w,W,j){const K={},ne=w.attributes;let $=0;const q=W.getAttributes();for(const I in q)if(q[I].location>=0){let N=ne[I];N===void 0&&(I==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),I==="instanceColor"&&_.instanceColor&&(N=_.instanceColor));const L={};L.attribute=N,N&&N.data&&(L.data=N.data),K[I]=L,$++}s.attributes=K,s.attributesNum=$,s.index=j}function y(){const _=s.newAttributes;for(let w=0,W=_.length;w<W;w++)_[w]=0}function m(_){h(_,0)}function h(_,w){const W=s.newAttributes,j=s.enabledAttributes,K=s.attributeDivisors;W[_]=1,j[_]===0&&(t.enableVertexAttribArray(_),j[_]=1),K[_]!==w&&(t.vertexAttribDivisor(_,w),K[_]=w)}function g(){const _=s.newAttributes,w=s.enabledAttributes;for(let W=0,j=w.length;W<j;W++)w[W]!==_[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function v(_,w,W,j,K,ne,$){$===!0?t.vertexAttribIPointer(_,w,W,K,ne):t.vertexAttribPointer(_,w,W,j,K,ne)}function M(_,w,W,j){y();const K=j.attributes,ne=W.getAttributes(),$=w.defaultAttributeValues;for(const q in ne){const I=ne[q];if(I.location>=0){let Q=K[q];if(Q===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const N=Q.normalized,L=Q.itemSize,ie=e.get(Q);if(ie===void 0)continue;const se=ie.buffer,k=ie.type,X=ie.bytesPerElement,te=k===t.INT||k===t.UNSIGNED_INT||Q.gpuType===fm;if(Q.isInterleavedBufferAttribute){const Z=Q.data,de=Z.stride,pe=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let be=0;be<I.locationSize;be++)h(I.location+be,Z.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let be=0;be<I.locationSize;be++)m(I.location+be);t.bindBuffer(t.ARRAY_BUFFER,se);for(let be=0;be<I.locationSize;be++)v(I.location+be,L/I.locationSize,k,N,de*X,(pe+L/I.locationSize*be)*X,te)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<I.locationSize;Z++)h(I.location+Z,Q.meshPerAttribute);_.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<I.locationSize;Z++)m(I.location+Z);t.bindBuffer(t.ARRAY_BUFFER,se);for(let Z=0;Z<I.locationSize;Z++)v(I.location+Z,L/I.locationSize,k,N,L*X,L/I.locationSize*Z*X,te)}}else if($!==void 0){const N=$[q];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(I.location,N);break;case 3:t.vertexAttrib3fv(I.location,N);break;case 4:t.vertexAttrib4fv(I.location,N);break;default:t.vertexAttrib1fv(I.location,N)}}}}g()}function C(){P();for(const _ in i){const w=i[_];for(const W in w){const j=w[W];for(const K in j)u(j[K].object),delete j[K];delete w[W]}delete i[_]}}function b(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const W in w){const j=w[W];for(const K in j)u(j[K].object),delete j[K];delete w[W]}delete i[_.id]}function A(_){for(const w in i){const W=i[w];if(W[_.id]===void 0)continue;const j=W[_.id];for(const K in j)u(j[K].object),delete j[K];delete W[_.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function e3(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];for(let y=0;y<d.length;y++)n.update(x,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t3(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ei&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:C,maxSamples:b}}function n3(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Nr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let M=h.clippingState||null;l.value=M,M=u(x,d,v,p);for(let C=0;C!==v;++C)M[C]=n[C];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const h=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,M=p;v!==y;++v,M+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function i3(t){let e=new WeakMap;function n(o,a){return a===th?o.mapping=io:a===nh&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r3 extends mM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,wv=[.125,.215,.35,.446,.526,.582],Ur=20,bd=new r3,Tv=new rt;let Cd=null,Rd=0,Pd=0,Ld=!1;const Dr=(1+Math.sqrt(5))/2,vs=1/Dr,Av=[new z(-Dr,vs,0),new z(Dr,vs,0),new z(-vs,0,Dr),new z(vs,0,Dr),new z(0,Dr,-vs),new z(0,Dr,vs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Rd,Pd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:La,format:Kn,colorSpace:yr,depthBuffer:!1},r=Cv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s3(s)),this._blurMaterial=o3(s,e,n)}return r}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,bd)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Tv),u.toneMapping=ar,u.autoClear=!1;const p=new Us({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new yn(new Fa,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Tv),y=!0);for(let h=0;h<6;h++){const g=h%3;g===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):g===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;Tl(r,g*v,h>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,bd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Av[(r-s-1)%Av.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new yn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),y=s/x,m=isFinite(s)?1+Math.floor(u*y):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const h=[];let g=0;for(let A=0;A<Ur;++A){const P=A/y,H=Math.exp(-P*P/2);h.push(H),A===0?g+=H:A<m&&(g+=2*H)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const M=this._sizeLods[r],C=3*M*(r>v-Fs?r-v+Fs:0),b=4*(this._cubeSize-M);Tl(n,C,b,3*M,2*M),l.setRenderTarget(n),l.render(f,bd)}}function s3(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+wv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=wv[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,y=3,m=2,h=1,g=new Float32Array(y*x*p),v=new Float32Array(m*x*p),M=new Float32Array(h*x*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,H=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];g.set(H,y*x*b),v.set(d,m*x*b);const _=[b,b,b,b,b,b];M.set(_,h*x*b)}const C=new ti;C.setAttribute("position",new Jn(g,y)),C.setAttribute("uv",new Jn(v,m)),C.setAttribute("faceIndex",new Jn(M,h)),e.push(C),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Cv(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function o3(t,e,n){const i=new Float32Array(Ur),r=new z(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Rv(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ym(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Pv(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function ym(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function a3(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===th||l===nh,u=l===io||l===ro;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new bv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new bv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function l3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Kl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function c3(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const y=p[x];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,x=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,M=g.length;v<M;v+=3){const C=g[v+0],b=g[v+1],A=g[v+2];d.push(C,b,b,A,A,C)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const C=v+0,b=v+1,A=v+2;d.push(C,b,b,A,A,C)}}else return;const m=new(oM(d)?hM:fM)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function u3(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,d*o,x),n.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];n.update(m,i,1)}function f(d,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,x);let h=0;for(let g=0;g<x;g++)h+=p[g];for(let g=0;g<y.length;g++)n.update(h,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function d3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function f3(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*b*4*f),P=new lM(A,C,b,f);P.type=Ei,P.needsUpdate=!0;const H=M*4;for(let w=0;w<f;w++){const W=h[w],j=g[w],K=v[w],ne=C*b*4*w;for(let $=0;$<W.count;$++){const q=$*H;x===!0&&(r.fromBufferAttribute(W,$),A[ne+q+0]=r.x,A[ne+q+1]=r.y,A[ne+q+2]=r.z,A[ne+q+3]=0),y===!0&&(r.fromBufferAttribute(j,$),A[ne+q+4]=r.x,A[ne+q+5]=r.y,A[ne+q+6]=r.z,A[ne+q+7]=0),m===!0&&(r.fromBufferAttribute(K,$),A[ne+q+8]=r.x,A[ne+q+9]=r.y,A[ne+q+10]=r.z,A[ne+q+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new nt(C,b)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function h3(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class yM extends dn{constructor(e,n,i,r,s,o,a,l,c,u=js){if(u!==js&&u!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=Kr),i===void 0&&u===oo&&(i=so),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _M=new dn,Lv=new yM(1,1),SM=new lM,MM=new Q2,EM=new gM,Nv=[],Dv=[],Iv=new Float32Array(16),Uv=new Float32Array(9),Fv=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nv[r];if(s===void 0&&(s=new Float32Array(r),Nv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=Dv[e];n===void 0&&(n=new Int32Array(e),Dv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function x3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;Fv.set(i),t.uniformMatrix2fv(this.addr,!1,Fv),Nt(n,i)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;Uv.set(i),t.uniformMatrix3fv(this.addr,!1,Uv),Nt(n,i)}}function _3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Lt(n,i))return;Iv.set(i),t.uniformMatrix4fv(this.addr,!1,Iv),Nt(n,i)}}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function T3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function R3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Lv.compareFunction=sM,s=Lv):s=_M,n.setTexture2D(e||s,r)}function P3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||MM,r)}function L3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||EM,r)}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||SM,r)}function D3(t){switch(t){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return v3;case 35674:return x3;case 35675:return y3;case 35676:return _3;case 5124:case 35670:return S3;case 35667:case 35671:return M3;case 35668:case 35672:return E3;case 35669:case 35673:return w3;case 5125:return T3;case 36294:return A3;case 36295:return b3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return P3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return N3}}function I3(t,e){t.uniform1fv(this.addr,e)}function U3(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function F3(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function k3(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function O3(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B3(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function z3(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function V3(t,e){t.uniform1iv(this.addr,e)}function H3(t,e){t.uniform2iv(this.addr,e)}function G3(t,e){t.uniform3iv(this.addr,e)}function j3(t,e){t.uniform4iv(this.addr,e)}function W3(t,e){t.uniform1uiv(this.addr,e)}function X3(t,e){t.uniform2uiv(this.addr,e)}function $3(t,e){t.uniform3uiv(this.addr,e)}function Y3(t,e){t.uniform4uiv(this.addr,e)}function q3(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||_M,s[o])}function K3(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||MM,s[o])}function Z3(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||EM,s[o])}function Q3(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||SM,s[o])}function J3(t){switch(t){case 5126:return I3;case 35664:return U3;case 35665:return F3;case 35666:return k3;case 35674:return O3;case 35675:return B3;case 35676:return z3;case 5124:case 35670:return V3;case 35667:case 35671:return H3;case 35668:case 35672:return G3;case 35669:case 35673:return j3;case 5125:return W3;case 36294:return X3;case 36295:return $3;case 36296:return Y3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return Q3}}class eN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D3(n.type)}}class tN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=J3(n.type)}}class nN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function kv(t,e){t.seq.push(e),t.map[e.id]=e}function iN(t,e,n){const i=t.name,r=i.length;for(Nd.lastIndex=0;;){const s=Nd.exec(i),o=Nd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){kv(n,c===void 0?new eN(a,t,e):new tN(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new nN(a),kv(n,f)),n=f}}}class Zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);iN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ov(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rN=37297;let sN=0;function oN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function aN(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Dc&&n===Nc?i="LinearDisplayP3ToLinearSRGB":e===Nc&&n===Dc&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case au:return[i,"LinearTransferOETF"];case ri:case xm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+oN(t.getShaderSource(e),o)}else return r}function lN(t,e){const n=aN(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cN(t,e){let n;switch(e){case E2:n="Linear";break;case w2:n="Reinhard";break;case T2:n="Cineon";break;case A2:n="ACESFilmic";break;case C2:n="AgX";break;case R2:n="Neutral";break;case b2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new z;function uN(){tt.getLuminanceCoefficients(Al);const t=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function fN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Oo(t){return t!==""}function zv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(pN,gN)}const mN=new Map;function gN(t,e){let n=Ge[e];if(n===void 0){const i=mN.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const vN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hv(t){return t.replace(vN,xN)}function xN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function yN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===XS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===n2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function _N(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function MN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $S:e="ENVMAP_BLENDING_MULTIPLY";break;case S2:e="ENVMAP_BLENDING_MIX";break;case M2:e="ENVMAP_BLENDING_ADD";break}return e}function EN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function wN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=yN(n),c=_N(n),u=SN(n),f=MN(n),d=EN(n),p=dN(n),x=fN(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Oo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Oo).join(`
`),h.length>0&&(h+=`
`)):(m=[Gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),h=[Gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Ge.tonemapping_pars_fragment:"",n.toneMapping!==ar?cN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,lN("linearToOutputTexel",n.outputColorSpace),uN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),o=Nh(o),o=zv(o,n),o=Vv(o,n),a=Nh(a),a=zv(a,n),a=Vv(a,n),o=Hv(o),a=Hv(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+o,M=g+h+a,C=Ov(r,r.VERTEX_SHADER,v),b=Ov(r,r.FRAGMENT_SHADER,M);r.attachShader(y,C),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(b).trim();let ne=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,b);else{const q=Bv(r,C,"vertex"),I=Bv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+q+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||K==="")&&($=!1);$&&(w.diagnostics={runnable:ne,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:K,prefix:h}})}r.deleteShader(C),r.deleteShader(b),P=new Zl(r,y),H=hN(r,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let H;this.getAttributes=function(){return H===void 0&&A(this),H};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,rN)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=b,this}let TN=0;class AN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bN(e),n.set(e,i)),i}}class bN{constructor(e){this.id=TN++,this.code=e,this.usedTimes=0}}function CN(t,e,n,i,r,s,o){const a=new uM,l=new AN,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function h(_,w,W,j,K){const ne=j.fog,$=K.geometry,q=_.isMeshStandardMaterial?j.environment:null,I=(_.isMeshStandardMaterial?n:e).get(_.envMap||q),Q=I&&I.mapping===ou?I.image.height:null,N=y[_.type];_.precision!==null&&(x=r.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ie=L!==void 0?L.length:0;let se=0;$.morphAttributes.position!==void 0&&(se=1),$.morphAttributes.normal!==void 0&&(se=2),$.morphAttributes.color!==void 0&&(se=3);let k,X,te,Z;if(N){const tn=si[N];k=tn.vertexShader,X=tn.fragmentShader}else k=_.vertexShader,X=_.fragmentShader,l.update(_),te=l.getVertexShaderID(_),Z=l.getFragmentShaderID(_);const de=t.getRenderTarget(),pe=K.isInstancedMesh===!0,be=K.isBatchedMesh===!0,Le=!!_.map,Ce=!!_.matcap,D=!!I,Ue=!!_.aoMap,Ie=!!_.lightMap,Ve=!!_.bumpMap,Ae=!!_.normalMap,Xe=!!_.displacementMap,Ne=!!_.emissiveMap,R=!!_.metalnessMap,E=!!_.roughnessMap,B=_.anisotropy>0,ee=_.clearcoat>0,ae=_.dispersion>0,J=_.iridescence>0,we=_.sheen>0,he=_.transmission>0,_e=B&&!!_.anisotropyMap,$e=ee&&!!_.clearcoatMap,ce=ee&&!!_.clearcoatNormalMap,ve=ee&&!!_.clearcoatRoughnessMap,Fe=J&&!!_.iridescenceMap,ke=J&&!!_.iridescenceThicknessMap,Me=we&&!!_.sheenColorMap,qe=we&&!!_.sheenRoughnessMap,He=!!_.specularMap,ot=!!_.specularColorMap,U=!!_.specularIntensityMap,xe=he&&!!_.transmissionMap,Y=he&&!!_.thicknessMap,re=!!_.gradientMap,me=!!_.alphaMap,ye=_.alphaTest>0,Ke=!!_.alphaHash,At=!!_.extensions;let en=ar;_.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(en=t.toneMapping);const Qe={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:k,fragmentShader:X,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:be,batchingColor:be&&K._colorsTexture!==null,instancing:pe,instancingColor:pe&&K.instanceColor!==null,instancingMorph:pe&&K.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:yr,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:Ce,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:Q,aoMap:Ue,lightMap:Ie,bumpMap:Ve,normalMap:Ae,displacementMap:p&&Xe,emissiveMap:Ne,normalMapObjectSpace:Ae&&_.normalMapType===I2,normalMapTangentSpace:Ae&&_.normalMapType===D2,metalnessMap:R,roughnessMap:E,anisotropy:B,anisotropyMap:_e,clearcoat:ee,clearcoatMap:$e,clearcoatNormalMap:ce,clearcoatRoughnessMap:ve,dispersion:ae,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:ke,sheen:we,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:He,specularColorMap:ot,specularIntensityMap:U,transmission:he,transmissionMap:xe,thicknessMap:Y,gradientMap:re,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:ye,alphaHash:Ke,combine:_.combine,mapUv:Le&&m(_.map.channel),aoMapUv:Ue&&m(_.aoMap.channel),lightMapUv:Ie&&m(_.lightMap.channel),bumpMapUv:Ve&&m(_.bumpMap.channel),normalMapUv:Ae&&m(_.normalMap.channel),displacementMapUv:Xe&&m(_.displacementMap.channel),emissiveMapUv:Ne&&m(_.emissiveMap.channel),metalnessMapUv:R&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:_e&&m(_.anisotropyMap.channel),clearcoatMapUv:$e&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(_.sheenRoughnessMap.channel),specularMapUv:He&&m(_.specularMap.channel),specularColorMapUv:ot&&m(_.specularColorMap.channel),specularIntensityMapUv:U&&m(_.specularIntensityMap.channel),transmissionMapUv:xe&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:me&&m(_.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ae||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(Le||me),fog:!!ne,useFog:_.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&W.length>0,shadowMapType:t.shadowMap.type,toneMapping:en,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_i,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const W in _.defines)w.push(W),w.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(v(w,_),M(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function C(_){const w=y[_.type];let W;if(w){const j=si[w];W=uR.clone(j.uniforms)}else W=_.uniforms;return W}function b(_,w){let W;for(let j=0,K=u.length;j<K;j++){const ne=u[j];if(ne.cacheKey===w){W=ne,++W.usedTimes;break}}return W===void 0&&(W=new wN(t,w,_,s),u.push(W)),W}function A(_){if(--_.usedTimes===0){const w=u.indexOf(_);u[w]=u[u.length-1],u.pop(),_.destroy()}}function P(_){l.remove(_)}function H(){l.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:C,acquireProgram:b,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:H}}function RN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function PN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,x,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,x,y,m){const h=o(f,d,p,x,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,x,y,m){const h=o(f,d,p,x,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||PN),i.length>1&&i.sort(d||jv),r.length>1&&r.sort(d||jv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function LN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Wv,t.set(i,[o])):r>=s.length?(o=new Wv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function NN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new rt};break;case"SpotLight":n={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function DN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IN=0;function UN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FN(t){const e=new NN,n=DN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Tt,o=new Tt;function a(c){let u=0,f=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,x=0,y=0,m=0,h=0,g=0,v=0,M=0,C=0,b=0,A=0;c.sort(UN);for(let H=0,_=c.length;H<_;H++){const w=c[H],W=w.color,j=w.intensity,K=w.distance,ne=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=W.r*j,f+=W.g*j,d+=W.b*j;else if(w.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(w.sh.coefficients[$],j);A++}else if(w.isDirectionalLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,I=n.get(w);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=w.shadow.matrix,g++}i.directional[p]=$,p++}else if(w.isSpotLight){const $=e.get(w);$.position.setFromMatrixPosition(w.matrixWorld),$.color.copy(W).multiplyScalar(j),$.distance=K,$.coneCos=Math.cos(w.angle),$.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),$.decay=w.decay,i.spot[y]=$;const q=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,q.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[y]=q.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=ne,M++}y++}else if(w.isRectAreaLight){const $=e.get(w);$.color.copy(W).multiplyScalar(j),$.halfWidth.set(w.width*.5,0,0),$.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=$,m++}else if(w.isPointLight){const $=e.get(w);if($.color.copy(w.color).multiplyScalar(w.intensity),$.distance=w.distance,$.decay=w.decay,w.castShadow){const q=w.shadow,I=n.get(w);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,I.shadowCameraNear=q.camera.near,I.shadowCameraFar=q.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=ne,i.pointShadowMatrix[x]=w.shadow.matrix,v++}i.point[x]=$,x++}else if(w.isHemisphereLight){const $=e.get(w);$.skyColor.copy(w.color).multiplyScalar(j),$.groundColor.copy(w.groundColor).multiplyScalar(j),i.hemi[h]=$,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==y||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==g||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,P.directionalLength=p,P.pointLength=x,P.spotLength=y,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=g,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=A,i.version=IN++)}function l(c,u){let f=0,d=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const v=c[h];if(v.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Xv(t){const e=new FN(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Xv(t),e.set(r,[a])):s>=o.length?(a=new Xv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ON extends Ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BN extends Ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HN(t,e,n){let i=new vM;const r=new nt,s=new nt,o=new wt,a=new ON({depthPacking:N2}),l=new BN,c={},u=n.maxTextureSize,f={[fr]:un,[un]:fr,[_i]:_i},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:zN,fragmentShader:VN}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new ti;x.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new yn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XS;let h=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const H=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),W=t.state;W.setBlending(or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=h!==vi&&this.type===vi,K=h===vi&&this.type!==vi;for(let ne=0,$=b.length;ne<$;ne++){const q=b[ne],I=q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||j===!0||K===!0){const L=this.type!==vi?{minFilter:Un,magFilter:Un}:{};I.map!==null&&I.map.dispose(),I.map=new Zr(r.x,r.y,L),I.map.texture.name=q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const N=I.getViewportCount();for(let L=0;L<N;L++){const ie=I.getViewport(L);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),W.viewport(o),I.updateMatrices(q,L),i=I.getFrustum(),M(A,P,I.camera,q,this.type)}I.isPointLightShadow!==!0&&this.type===vi&&g(I,P),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(H,_,w)};function g(b,A){const P=e.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,P,d,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function v(b,A,P,H){let _=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=_.uuid,j=A.uuid;let K=c[W];K===void 0&&(K={},c[W]=K);let ne=K[j];ne===void 0&&(ne=_.clone(),K[j]=ne,A.addEventListener("dispose",C)),_=ne}if(_.visible=A.visible,_.wireframe=A.wireframe,H===vi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const W=t.properties.get(_);W.light=P}return _}function M(b,A,P,H,_){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===vi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const j=e.update(b),K=b.material;if(Array.isArray(K)){const ne=j.groups;for(let $=0,q=ne.length;$<q;$++){const I=ne[$],Q=K[I.materialIndex];if(Q&&Q.visible){const N=v(b,Q,H,_);b.onBeforeShadow(t,b,A,P,j,N,I),t.renderBufferDirect(P,null,j,N,b,I),b.onAfterShadow(t,b,A,P,j,N,I)}}}else if(K.visible){const ne=v(b,K,H,_);b.onBeforeShadow(t,b,A,P,j,ne,null),t.renderBufferDirect(P,null,j,ne,b,null),b.onAfterShadow(t,b,A,P,j,ne,null)}}const W=b.children;for(let j=0,K=W.length;j<K;j++)M(W[j],A,P,H,_)}function C(b){b.target.removeEventListener("dispose",C);for(const P in c){const H=c[P],_=b.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const GN={[Yf]:qf,[Kf]:Jf,[Zf]:eh,[no]:Qf,[qf]:Yf,[Jf]:Kf,[eh]:Zf,[Qf]:no};function jN(t){function e(){let U=!1;const xe=new wt;let Y=null;const re=new wt(0,0,0,0);return{setMask:function(me){Y!==me&&!U&&(t.colorMask(me,me,me,me),Y=me)},setLocked:function(me){U=me},setClear:function(me,ye,Ke,At,en){en===!0&&(me*=At,ye*=At,Ke*=At),xe.set(me,ye,Ke,At),re.equals(xe)===!1&&(t.clearColor(me,ye,Ke,At),re.copy(xe))},reset:function(){U=!1,Y=null,re.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,Y=null,re=null,me=null;return{setReversed:function(ye){xe=ye},setTest:function(ye){ye?te(t.DEPTH_TEST):Z(t.DEPTH_TEST)},setMask:function(ye){Y!==ye&&!U&&(t.depthMask(ye),Y=ye)},setFunc:function(ye){if(xe&&(ye=GN[ye]),re!==ye){switch(ye){case Yf:t.depthFunc(t.NEVER);break;case qf:t.depthFunc(t.ALWAYS);break;case Kf:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case Zf:t.depthFunc(t.EQUAL);break;case Qf:t.depthFunc(t.GEQUAL);break;case Jf:t.depthFunc(t.GREATER);break;case eh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=ye}},setLocked:function(ye){U=ye},setClear:function(ye){me!==ye&&(t.clearDepth(ye),me=ye)},reset:function(){U=!1,Y=null,re=null,me=null}}}function i(){let U=!1,xe=null,Y=null,re=null,me=null,ye=null,Ke=null,At=null,en=null;return{setTest:function(Qe){U||(Qe?te(t.STENCIL_TEST):Z(t.STENCIL_TEST))},setMask:function(Qe){xe!==Qe&&!U&&(t.stencilMask(Qe),xe=Qe)},setFunc:function(Qe,tn,di){(Y!==Qe||re!==tn||me!==di)&&(t.stencilFunc(Qe,tn,di),Y=Qe,re=tn,me=di)},setOp:function(Qe,tn,di){(ye!==Qe||Ke!==tn||At!==di)&&(t.stencilOp(Qe,tn,di),ye=Qe,Ke=tn,At=di)},setLocked:function(Qe){U=Qe},setClear:function(Qe){en!==Qe&&(t.clearStencil(Qe),en=Qe)},reset:function(){U=!1,xe=null,Y=null,re=null,me=null,ye=null,Ke=null,At=null,en=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,x=!1,y=null,m=null,h=null,g=null,v=null,M=null,C=null,b=new rt(0,0,0),A=0,P=!1,H=null,_=null,w=null,W=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,$=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),ne=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ne=$>=2);let I=null,Q={};const N=t.getParameter(t.SCISSOR_BOX),L=t.getParameter(t.VIEWPORT),ie=new wt().fromArray(N),se=new wt().fromArray(L);function k(U,xe,Y,re){const me=new Uint8Array(4),ye=t.createTexture();t.bindTexture(U,ye),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Y;Ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(xe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ye}const X={};X[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(t.DEPTH_TEST),s.setFunc(no),Ie(!1),Ve(ev),te(t.CULL_FACE),D(or);function te(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function Z(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function de(U,xe){return u[U]!==xe?(t.bindFramebuffer(U,xe),u[U]=xe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=xe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function pe(U,xe){let Y=d,re=!1;if(U){Y=f.get(xe),Y===void 0&&(Y=[],f.set(xe,Y));const me=U.textures;if(Y.length!==me.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,Ke=me.length;ye<Ke;ye++)Y[ye]=t.COLOR_ATTACHMENT0+ye;Y.length=me.length,re=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,re=!0);re&&t.drawBuffers(Y)}function be(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Le={[Ir]:t.FUNC_ADD,[r2]:t.FUNC_SUBTRACT,[s2]:t.FUNC_REVERSE_SUBTRACT};Le[o2]=t.MIN,Le[a2]=t.MAX;const Ce={[l2]:t.ZERO,[c2]:t.ONE,[u2]:t.SRC_COLOR,[Xf]:t.SRC_ALPHA,[g2]:t.SRC_ALPHA_SATURATE,[p2]:t.DST_COLOR,[f2]:t.DST_ALPHA,[d2]:t.ONE_MINUS_SRC_COLOR,[$f]:t.ONE_MINUS_SRC_ALPHA,[m2]:t.ONE_MINUS_DST_COLOR,[h2]:t.ONE_MINUS_DST_ALPHA,[v2]:t.CONSTANT_COLOR,[x2]:t.ONE_MINUS_CONSTANT_COLOR,[y2]:t.CONSTANT_ALPHA,[_2]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,xe,Y,re,me,ye,Ke,At,en,Qe){if(U===or){x===!0&&(Z(t.BLEND),x=!1);return}if(x===!1&&(te(t.BLEND),x=!0),U!==i2){if(U!==y||Qe!==P){if((m!==Ir||v!==Ir)&&(t.blendEquation(t.FUNC_ADD),m=Ir,v=Ir),Qe)switch(U){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFunc(t.ONE,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}h=null,g=null,M=null,C=null,b.set(0,0,0),A=0,y=U,P=Qe}return}me=me||xe,ye=ye||Y,Ke=Ke||re,(xe!==m||me!==v)&&(t.blendEquationSeparate(Le[xe],Le[me]),m=xe,v=me),(Y!==h||re!==g||ye!==M||Ke!==C)&&(t.blendFuncSeparate(Ce[Y],Ce[re],Ce[ye],Ce[Ke]),h=Y,g=re,M=ye,C=Ke),(At.equals(b)===!1||en!==A)&&(t.blendColor(At.r,At.g,At.b,en),b.copy(At),A=en),y=U,P=!1}function Ue(U,xe){U.side===_i?Z(t.CULL_FACE):te(t.CULL_FACE);let Y=U.side===un;xe&&(Y=!Y),Ie(Y),U.blending===Gs&&U.transparent===!1?D(or):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const re=U.stencilWrite;o.setTest(re),re&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Z(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){H!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),H=U)}function Ve(U){U!==e2?(te(t.CULL_FACE),U!==_&&(U===ev?t.cullFace(t.BACK):U===t2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Z(t.CULL_FACE),_=U}function Ae(U){U!==w&&(ne&&t.lineWidth(U),w=U)}function Xe(U,xe,Y){U?(te(t.POLYGON_OFFSET_FILL),(W!==xe||j!==Y)&&(t.polygonOffset(xe,Y),W=xe,j=Y)):Z(t.POLYGON_OFFSET_FILL)}function Ne(U){U?te(t.SCISSOR_TEST):Z(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+K-1),I!==U&&(t.activeTexture(U),I=U)}function E(U,xe,Y){Y===void 0&&(I===null?Y=t.TEXTURE0+K-1:Y=I);let re=Q[Y];re===void 0&&(re={type:void 0,texture:void 0},Q[Y]=re),(re.type!==U||re.texture!==xe)&&(I!==Y&&(t.activeTexture(Y),I=Y),t.bindTexture(U,xe||X[U]),re.type=U,re.texture=xe)}function B(){const U=Q[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){ie.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Me(U){se.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),se.copy(U))}function qe(U,xe){let Y=l.get(xe);Y===void 0&&(Y=new WeakMap,l.set(xe,Y));let re=Y.get(U);re===void 0&&(re=t.getUniformBlockIndex(xe,U.name),Y.set(U,re))}function He(U,xe){const re=l.get(xe).get(U);a.get(xe)!==re&&(t.uniformBlockBinding(xe,re,U.__bindingPointIndex),a.set(xe,re))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,Q={},u={},f=new WeakMap,d=[],p=null,x=!1,y=null,m=null,h=null,g=null,v=null,M=null,C=null,b=new rt(0,0,0),A=0,P=!1,H=null,_=null,w=null,W=null,j=null,ie.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:te,disable:Z,bindFramebuffer:de,drawBuffers:pe,useProgram:be,setBlending:D,setMaterial:Ue,setFlipSided:Ie,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:Xe,setScissorTest:Ne,activeTexture:R,bindTexture:E,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Fe,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:$e,texStorage3D:ce,texSubImage2D:J,texSubImage3D:we,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:ke,viewport:Me,reset:ot}}function $v(t,e,n,i){const r=WN(i);switch(n){case QS:return t*e;case eM:return t*e;case tM:return t*e*2;case nM:return t*e/r.components*r.byteLength;case mm:return t*e/r.components*r.byteLength;case iM:return t*e*2/r.components*r.byteLength;case gm:return t*e*2/r.components*r.byteLength;case JS:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case vm:return t*e*4/r.components*r.byteLength;case Wl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $l:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:case lh:return Math.max(t,16)*Math.max(e,8)/4;case sh:case ah:return Math.max(t,8)*Math.max(e,8)/2;case ch:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ql:case Ah:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rM:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WN(t){switch(t){case Di:case qS:return{byteLength:1,components:1};case Sa:case KS:case La:return{byteLength:2,components:1};case hm:case pm:return{byteLength:2,components:4};case Kr:case fm:case Ei:return{byteLength:4,components:1};case ZS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return p?new OffscreenCanvas(R,E):Uc("canvas")}function y(R,E,B){let ee=1;const ae=Ne(R);if((ae.width>B||ae.height>B)&&(ee=B/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*ae.width),we=Math.floor(ee*ae.height);f===void 0&&(f=x(J,we));const he=E?x(J,we):f;return he.width=J,he.height=we,he.getContext("2d").drawImage(R,0,0,J,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+J+"x"+we+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Un&&R.minFilter!==Yn}function h(R){t.generateMipmap(R)}function g(R,E,B,ee,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),E===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),E===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const we=ae?Lc:tt.getTransfer(ee);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=we===ut?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,E){let B;return R?E===null||E===Kr||E===so?B=t.DEPTH24_STENCIL8:E===Ei?B=t.DEPTH32F_STENCIL8:E===Sa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kr||E===so?B=t.DEPTH_COMPONENT24:E===Ei?B=t.DEPTH_COMPONENT32F:E===Sa&&(B=t.DEPTH_COMPONENT16),B}function M(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),H(E)}function A(R){const E=i.get(R);if(E.__webglInit===void 0)return;const B=R.source,ee=d.get(B);if(ee){const ae=ee[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(R),Object.keys(ee).length===0&&d.delete(B)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const B=R.source,ee=d.get(B);delete ee[E.__cacheKey],o.memory.textures--}function H(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ae=0;ae<E.__webglFramebuffer[ee].length;ae++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ae]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=R.textures;for(let ee=0,ae=B.length;ee<ae;ee++){const J=i.get(B[ee]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(R)}let _=0;function w(){_=0}function W(){const R=_;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),_+=1,R}function j(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function K(R,E){const B=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,R,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function ne(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){se(B,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function $(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){se(B,R,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function q(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const I={[ih]:t.REPEAT,[zr]:t.CLAMP_TO_EDGE,[rh]:t.MIRRORED_REPEAT},Q={[Un]:t.NEAREST,[P2]:t.NEAREST_MIPMAP_NEAREST,[ol]:t.NEAREST_MIPMAP_LINEAR,[Yn]:t.LINEAR,[id]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},N={[U2]:t.NEVER,[V2]:t.ALWAYS,[F2]:t.LESS,[sM]:t.LEQUAL,[k2]:t.EQUAL,[z2]:t.GEQUAL,[O2]:t.GREATER,[B2]:t.NOTEQUAL};function L(R,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===id||E.magFilter===ol||E.magFilter===Vr||E.minFilter===Yn||E.minFilter===id||E.minFilter===ol||E.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==ol&&E.minFilter!==Vr||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ie(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const ee=E.source;let ae=d.get(ee);ae===void 0&&(ae={},d.set(ee,ae));const J=j(E);if(J!==R.__cacheKey){ae[J]===void 0&&(ae[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ae[J].usedTimes++;const we=ae[R.__cacheKey];we!==void 0&&(ae[R.__cacheKey].usedTimes--,we.usedTimes===0&&P(E)),R.__cacheKey=J,R.__webglTexture=ae[J].texture}return B}function se(R,E,B){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ae=ie(R,E),J=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+B);const we=i.get(J);if(J.version!==we.__version||ae===!0){n.activeTexture(t.TEXTURE0+B);const he=tt.getPrimaries(tt.workingColorSpace),_e=E.colorSpace===qi?null:tt.getPrimaries(E.colorSpace),$e=E.colorSpace===qi||he===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ce=y(E.image,!1,r.maxTextureSize);ce=Xe(E,ce);const ve=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type);let ke=g(E.internalFormat,ve,Fe,E.colorSpace,E.isVideoTexture);L(ee,E);let Me;const qe=E.mipmaps,He=E.isVideoTexture!==!0,ot=we.__version===void 0||ae===!0,U=J.dataReady,xe=M(E,ce);if(E.isDepthTexture)ke=v(E.format===oo,E.type),ot&&(He?n.texStorage2D(t.TEXTURE_2D,1,ke,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,ke,ce.width,ce.height,0,ve,Fe,null));else if(E.isDataTexture)if(qe.length>0){He&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let Y=0,re=qe.length;Y<re;Y++)Me=qe[Y],He?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,ve,Fe,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,ve,Fe,Me.data);E.generateMipmaps=!1}else He?(ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,ce.width,ce.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Fe,ce.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ce.width,ce.height,0,ve,Fe,ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,qe[0].width,qe[0].height,ce.depth);for(let Y=0,re=qe.length;Y<re;Y++)if(Me=qe[Y],E.format!==Kn)if(ve!==null)if(He){if(U)if(E.layerUpdates.size>0){const me=$v(Me.width,Me.height,E.format,E.type);for(const ye of E.layerUpdates){const Ke=Me.data.subarray(ye*me/Me.data.BYTES_PER_ELEMENT,(ye+1)*me/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ye,Me.width,Me.height,1,ve,Ke,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,ce.depth,ve,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,ce.depth,ve,Fe,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,ce.depth,0,ve,Fe,Me.data)}else{He&&ot&&n.texStorage2D(t.TEXTURE_2D,xe,ke,qe[0].width,qe[0].height);for(let Y=0,re=qe.length;Y<re;Y++)Me=qe[Y],E.format!==Kn?ve!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,ve,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,ve,Fe,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,ve,Fe,Me.data)}else if(E.isDataArrayTexture)if(He){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,ke,ce.width,ce.height,ce.depth),U)if(E.layerUpdates.size>0){const Y=$v(ce.width,ce.height,E.format,E.type);for(const re of E.layerUpdates){const me=ce.data.subarray(re*Y/ce.data.BYTES_PER_ELEMENT,(re+1)*Y/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,ce.width,ce.height,1,ve,Fe,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Fe,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ce.width,ce.height,ce.depth,0,ve,Fe,ce.data);else if(E.isData3DTexture)He?(ot&&n.texStorage3D(t.TEXTURE_3D,xe,ke,ce.width,ce.height,ce.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Fe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ce.width,ce.height,ce.depth,0,ve,Fe,ce.data);else if(E.isFramebufferTexture){if(ot)if(He)n.texStorage2D(t.TEXTURE_2D,xe,ke,ce.width,ce.height);else{let Y=ce.width,re=ce.height;for(let me=0;me<xe;me++)n.texImage2D(t.TEXTURE_2D,me,ke,Y,re,0,ve,Fe,null),Y>>=1,re>>=1}}else if(qe.length>0){if(He&&ot){const Y=Ne(qe[0]);n.texStorage2D(t.TEXTURE_2D,xe,ke,Y.width,Y.height)}for(let Y=0,re=qe.length;Y<re;Y++)Me=qe[Y],He?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve,Fe,Me):n.texImage2D(t.TEXTURE_2D,Y,ke,ve,Fe,Me);E.generateMipmaps=!1}else if(He){if(ot){const Y=Ne(ce);n.texStorage2D(t.TEXTURE_2D,xe,ke,Y.width,Y.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Fe,ce)}else n.texImage2D(t.TEXTURE_2D,0,ke,ve,Fe,ce);m(E)&&h(ee),we.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function k(R,E,B){if(E.image.length!==6)return;const ee=ie(R,E),ae=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const J=i.get(ae);if(ae.version!==J.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const we=tt.getPrimaries(tt.workingColorSpace),he=E.colorSpace===qi?null:tt.getPrimaries(E.colorSpace),_e=E.colorSpace===qi||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ce=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!$e&&!ce?ve[re]=y(E.image[re],!0,r.maxCubemapSize):ve[re]=ce?E.image[re].image:E.image[re],ve[re]=Xe(E,ve[re]);const Fe=ve[0],ke=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),qe=g(E.internalFormat,ke,Me,E.colorSpace),He=E.isVideoTexture!==!0,ot=J.__version===void 0||ee===!0,U=ae.dataReady;let xe=M(E,Fe);L(t.TEXTURE_CUBE_MAP,E);let Y;if($e){He&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,Fe.width,Fe.height);for(let re=0;re<6;re++){Y=ve[re].mipmaps;for(let me=0;me<Y.length;me++){const ye=Y[me];E.format!==Kn?ke!==null?He?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,ye.width,ye.height,ke,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,qe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,0,0,ye.width,ye.height,ke,Me,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me,qe,ye.width,ye.height,0,ke,Me,ye.data)}}}else{if(Y=E.mipmaps,He&&ot){Y.length>0&&xe++;const re=Ne(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,qe,re.width,re.height)}for(let re=0;re<6;re++)if(ce){He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,ke,Me,ve[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,ve[re].width,ve[re].height,0,ke,Me,ve[re].data);for(let me=0;me<Y.length;me++){const Ke=Y[me].image[re].image;He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,Ke.width,Ke.height,ke,Me,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,qe,Ke.width,Ke.height,0,ke,Me,Ke.data)}}else{He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ke,Me,ve[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,ke,Me,ve[re]);for(let me=0;me<Y.length;me++){const ye=Y[me];He?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,0,0,ke,Me,ye.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,me+1,qe,ke,Me,ye.image[re])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),J.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function X(R,E,B,ee,ae,J){const we=s.convert(B.format,B.colorSpace),he=s.convert(B.type),_e=g(B.internalFormat,we,he,B.colorSpace);if(!i.get(E).__hasExternalTextures){const ce=Math.max(1,E.width>>J),ve=Math.max(1,E.height>>J);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,J,_e,ce,ve,E.depth,0,we,he,null):n.texImage2D(ae,J,_e,ce,ve,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ve(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ae,i.get(B).__webglTexture,0,Ie(E)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ae,i.get(B).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ee=E.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,J=v(E.stencilBuffer,ae),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Ie(E);Ve(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,J,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let ae=0;ae<ee.length;ae++){const J=ee[ae],we=s.convert(J.format,J.colorSpace),he=s.convert(J.type),_e=g(J.internalFormat,we,he,J.colorSpace),$e=Ie(E);B&&Ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,_e,E.width,E.height):Ve(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ae=Ie(E);if(E.depthTexture.format===js)Ve(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===oo)Ve(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function de(R){const E=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ee}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),te(E.__webglDepthbuffer[ee],R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),te(E.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(R,E,B){const ee=i.get(R);E!==void 0&&X(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&de(R)}function be(R){const E=R.texture,B=i.get(R),ee=i.get(E);R.addEventListener("dispose",b);const ae=R.textures,J=R.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)B.__webglFramebuffer[he][_e]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,_e=ae.length;he<_e;he++){const $e=i.get(ae[he]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ve(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const _e=ae[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const $e=s.convert(_e.format,_e.colorSpace),ce=s.convert(_e.type),ve=g(_e.internalFormat,$e,ce,_e.colorSpace,R.isXRRenderTarget===!0),Fe=Ie(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),te(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),L(t.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)X(B.__webglFramebuffer[he][_e],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else X(B.__webglFramebuffer[he],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,_e=ae.length;he<_e;he++){const $e=ae[he],ce=i.get($e);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),L(t.TEXTURE_2D,$e),X(B.__webglFramebuffer,R,$e,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m($e)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ee.__webglTexture),L(he,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)X(B.__webglFramebuffer[_e],R,E,t.COLOR_ATTACHMENT0,he,_e);else X(B.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,he,0);m(E)&&h(he),n.unbindTexture()}R.depthBuffer&&de(R)}function Le(R){const E=R.textures;for(let B=0,ee=E.length;B<ee;B++){const ae=E[B];if(m(ae)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ae).__webglTexture;n.bindTexture(J,we),h(J),n.unbindTexture()}}}const Ce=[],D=[];function Ue(R){if(R.samples>0){if(Ve(R)===!1){const E=R.textures,B=R.width,ee=R.height;let ae=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),he=E.length>1;if(he)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const $e=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,ae,t.NEAREST),l===!0&&(Ce.length=0,D.length=0,Ce.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ce.push(J),D.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const $e=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function Ve(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ae(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Xe(R,E){const B=R.colorSpace,ee=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==yr&&B!==qi&&(tt.getTransfer(B)===ut?(ee!==Kn||ae!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=K,this.setTexture2DArray=ne,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=pe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ve}function $N(t,e){function n(i,r=qi){let s;const o=tt.getTransfer(r);if(i===Di)return t.UNSIGNED_BYTE;if(i===hm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ZS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qS)return t.BYTE;if(i===KS)return t.SHORT;if(i===Sa)return t.UNSIGNED_SHORT;if(i===fm)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Ei)return t.FLOAT;if(i===La)return t.HALF_FLOAT;if(i===QS)return t.ALPHA;if(i===JS)return t.RGB;if(i===Kn)return t.RGBA;if(i===eM)return t.LUMINANCE;if(i===tM)return t.LUMINANCE_ALPHA;if(i===js)return t.DEPTH_COMPONENT;if(i===oo)return t.DEPTH_STENCIL;if(i===nM)return t.RED;if(i===mm)return t.RED_INTEGER;if(i===iM)return t.RG;if(i===gm)return t.RG_INTEGER;if(i===vm)return t.RGBA_INTEGER;if(i===Wl||i===Xl||i===$l||i===Yl)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ch||i===uh)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===yh||i===_h||i===Sh||i===Mh||i===Eh||i===wh||i===Th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_h)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Th)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Ah||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rM||i===Ch||i===Rh||i===Ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class YN extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qN={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qN)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const KN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZN=`
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

}`;class QN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:KN,fragmentShader:ZN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new cu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JN extends po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const y=new QN,m=n.getContextAttributes();let h=null,g=null;const v=[],M=[],C=new nt;let b=null;const A=new Dn;A.layers.enable(1),A.viewport=new wt;const P=new Dn;P.layers.enable(2),P.viewport=new wt;const H=[A,P],_=new YN;_.layers.enable(1),_.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=v[k];return X===void 0&&(X=new Dd,v[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=v[k];return X===void 0&&(X=new Dd,v[k]=X),X.getGripSpace()},this.getHand=function(k){let X=v[k];return X===void 0&&(X=new Dd,v[k]=X),X.getHandSpace()};function j(k){const X=M.indexOf(k.inputSource);if(X===-1)return;const te=v[X];te!==void 0&&(te.update(k.inputSource,k.frame,c||o),te.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ne);for(let k=0;k<v.length;k++){const X=M[k];X!==null&&(M[k]=null,v[k].disconnect(X))}w=null,W=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,g=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Zr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,te=null,Z=null;m.depth&&(Z=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=m.stencil?oo:js,te=m.stencil?so:Kr);const de={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(de),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Zr(d.textureWidth,d.textureHeight,{format:Kn,type:Di,depthTexture:new yM(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ne(k){for(let X=0;X<k.removed.length;X++){const te=k.removed[X],Z=M.indexOf(te);Z>=0&&(M[Z]=null,v[Z].disconnect(te))}for(let X=0;X<k.added.length;X++){const te=k.added[X];let Z=M.indexOf(te);if(Z===-1){for(let pe=0;pe<v.length;pe++)if(pe>=M.length){M.push(te),Z=pe;break}else if(M[pe]===null){M[pe]=te,Z=pe;break}if(Z===-1)break}const de=v[Z];de&&de.connect(te)}}const $=new z,q=new z;function I(k,X,te){$.setFromMatrixPosition(X.matrixWorld),q.setFromMatrixPosition(te.matrixWorld);const Z=$.distanceTo(q),de=X.projectionMatrix.elements,pe=te.projectionMatrix.elements,be=de[14]/(de[10]-1),Le=de[14]/(de[10]+1),Ce=(de[9]+1)/de[5],D=(de[9]-1)/de[5],Ue=(de[8]-1)/de[0],Ie=(pe[8]+1)/pe[0],Ve=be*Ue,Ae=be*Ie,Xe=Z/(-Ue+Ie),Ne=Xe*-Ue;if(X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ne),k.translateZ(Xe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),de[10]===-1)k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const R=be+Xe,E=Le+Xe,B=Ve-Ne,ee=Ae+(Z-Ne),ae=Ce*Le/E*R,J=D*Le/E*R;k.projectionMatrix.makePerspective(B,ee,ae,J,R,E),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Q(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let X=k.near,te=k.far;y.texture!==null&&(y.depthNear>0&&(X=y.depthNear),y.depthFar>0&&(te=y.depthFar)),_.near=P.near=A.near=X,_.far=P.far=A.far=te,(w!==_.near||W!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,W=_.far);const Z=k.parent,de=_.cameras;Q(_,Z);for(let pe=0;pe<de.length;pe++)Q(de[pe],Z);de.length===2?I(_,A,P):_.projectionMatrix.copy(A.projectionMatrix),N(k,_,Z)};function N(k,X,te){te===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(te.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Lh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let L=null;function ie(k,X){if(u=X.getViewerPose(c||o),x=X,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let Z=!1;te.length!==_.cameras.length&&(_.cameras.length=0,Z=!0);for(let pe=0;pe<te.length;pe++){const be=te[pe];let Le=null;if(p!==null)Le=p.getViewport(be);else{const D=f.getViewSubImage(d,be);Le=D.viewport,pe===0&&(e.setRenderTargetTextures(g,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(g))}let Ce=H[pe];Ce===void 0&&(Ce=new Dn,Ce.layers.enable(pe),Ce.viewport=new wt,H[pe]=Ce),Ce.matrix.fromArray(be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(_.matrix.copy(Ce.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Z===!0&&_.cameras.push(Ce)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const pe=f.getDepthInformation(te[0]);pe&&pe.isValid&&pe.texture&&y.init(e,pe,r.renderState)}}for(let te=0;te<v.length;te++){const Z=M[te],de=v[te];Z!==null&&de!==void 0&&de.update(Z,X,c||o)}L&&L(k,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),x=null}const se=new xM;se.setAnimationLoop(ie),this.setAnimationLoop=function(k){L=k},this.dispose=function(){}}}const br=new Ii,eD=new Tt;function tD(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,pM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,M=g.envMapRotation;v&&(m.envMap.value=v,br.copy(M),br.x*=-1,br.y*=-1,br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(eD.makeRotationFromEuler(br)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(x(g),M=u(g),r[g.id]=M,g.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(g,C);const b=e.render.frame;s[g.id]!==b&&(d(g),s[g.id]=b)}function u(g){const v=f();g.__bindingPointIndex=v;const M=t.createBuffer(),C=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],M=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,A=M.length;b<A;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let H=0,_=P.length;H<_;H++){const w=P[H];if(p(w,b,H,C)===!0){const W=w.__offset,j=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let ne=0;ne<j.length;ne++){const $=j[ne],q=y($);typeof $=="number"||typeof $=="boolean"?(w.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,W+K,w.__data)):$.isMatrix3?(w.__data[0]=$.elements[0],w.__data[1]=$.elements[1],w.__data[2]=$.elements[2],w.__data[3]=0,w.__data[4]=$.elements[3],w.__data[5]=$.elements[4],w.__data[6]=$.elements[5],w.__data[7]=0,w.__data[8]=$.elements[6],w.__data[9]=$.elements[7],w.__data[10]=$.elements[8],w.__data[11]=0):($.toArray(w.__data,K),K+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,M,C){const b=g.value,A=v+"_"+M;if(C[A]===void 0)return typeof b=="number"||typeof b=="boolean"?C[A]=b:C[A]=b.clone(),!0;{const P=C[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return C[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function x(g){const v=g.uniforms;let M=0;const C=16;for(let A=0,P=v.length;A<P;A++){const H=Array.isArray(v[A])?v[A]:[v[A]];for(let _=0,w=H.length;_<w;_++){const W=H[_],j=Array.isArray(W.value)?W.value:[W.value];for(let K=0,ne=j.length;K<ne;K++){const $=j[K],q=y($),I=M%C,Q=I%q.boundary,N=I+Q;M+=Q,N!==0&&C-N<q.storage&&(M+=C-N),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=q.storage}}}const b=M%C;return b>0&&(M+=C-b),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class iD{constructor(e={}){const{canvas:n=G2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const h=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=ar,this.toneMappingExposure=1;const v=this;let M=!1,C=0,b=0,A=null,P=-1,H=null;const _=new wt,w=new wt;let W=null;const j=new rt(0);let K=0,ne=n.width,$=n.height,q=1,I=null,Q=null;const N=new wt(0,0,ne,$),L=new wt(0,0,ne,$);let ie=!1;const se=new vM;let k=!1,X=!1;const te=new Tt,Z=new Tt,de=new z,pe=new wt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Ce(){return A===null?q:1}let D=i;function Ue(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dm}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ye,!1),D===null){const F="webgl2";if(D=Ue(F,T),D===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ie,Ve,Ae,Xe,Ne,R,E,B,ee,ae,J,we,he,_e,$e,ce,ve,Fe,ke,Me,qe,He,ot,U;function xe(){Ie=new l3(D),Ie.init(),He=new $N(D,Ie),Ve=new t3(D,Ie,e,He),Ae=new jN(D),Ve.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Xe=new d3(D),Ne=new RN,R=new XN(D,Ie,Ae,Ne,Ve,He,Xe),E=new i3(v),B=new a3(v),ee=new vR(D),ot=new JL(D,ee),ae=new c3(D,ee,Xe,ot),J=new h3(D,ae,ee,Xe),ke=new f3(D,Ve,R),ce=new n3(Ne),we=new CN(v,E,B,Ie,Ve,ot,ce),he=new tD(v,Ne),_e=new LN,$e=new kN(Ie),Fe=new QL(v,E,B,Ae,J,d,l),ve=new HN(v,J,Ve),U=new nD(D,Xe,Ve,Ae),Me=new e3(D,Ie,Xe),qe=new u3(D,Ie,Xe),Xe.programs=we.programs,v.capabilities=Ve,v.extensions=Ie,v.properties=Ne,v.renderLists=_e,v.shadowMap=ve,v.state=Ae,v.info=Xe}xe();const Y=new JN(v,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(ne,$,!1))},this.getSize=function(T){return T.set(ne,$)},this.setSize=function(T,F,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,$=F,n.width=Math.floor(T*q),n.height=Math.floor(F*q),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ne*q,$*q).floor()},this.setDrawingBufferSize=function(T,F,V){ne=T,$=F,q=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(_)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,F,V,G){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,F,V,G),Ae.viewport(_.copy(N).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(L)},this.setScissor=function(T,F,V,G){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,F,V,G),Ae.scissor(w.copy(L).multiplyScalar(q).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(T){Ae.setScissorTest(ie=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let O=!1;if(A!==null){const ue=A.texture.format;O=ue===vm||ue===gm||ue===mm}if(O){const ue=A.texture.type,ge=ue===Di||ue===Kr||ue===Sa||ue===so||ue===hm||ue===pm,Ee=Fe.getClearColor(),Te=Fe.getClearAlpha(),Oe=Ee.r,Be=Ee.g,Re=Ee.b;ge?(p[0]=Oe,p[1]=Be,p[2]=Re,p[3]=Te,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Oe,x[1]=Be,x[2]=Re,x[3]=Te,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),_e.dispose(),$e.dispose(),Ne.dispose(),E.dispose(),B.dispose(),J.dispose(),ot.dispose(),U.dispose(),we.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Mm),Y.removeEventListener("sessionend",Em),_r.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=Xe.autoReset,F=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,O=ve.type;xe(),Xe.autoReset=T,ve.enabled=F,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=O}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const F=T.target;F.removeEventListener("dispose",Ke),At(F)}function At(T){en(T),Ne.remove(T)}function en(T){const F=Ne.get(T).programs;F!==void 0&&(F.forEach(function(V){we.releaseProgram(V)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,O,ue){F===null&&(F=be);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Ee=wM(T,F,V,G,O);Ae.setMaterial(G,ge);let Te=V.index,Oe=1;if(G.wireframe===!0){if(Te=ae.getWireframeAttribute(V),Te===void 0)return;Oe=2}const Be=V.drawRange,Re=V.attributes.position;let it=Be.start*Oe,lt=(Be.start+Be.count)*Oe;ue!==null&&(it=Math.max(it,ue.start*Oe),lt=Math.min(lt,(ue.start+ue.count)*Oe)),Te!==null?(it=Math.max(it,0),lt=Math.min(lt,Te.count)):Re!=null&&(it=Math.max(it,0),lt=Math.min(lt,Re.count));const xt=lt-it;if(xt<0||xt===1/0)return;ot.setup(O,G,Ee,V,Te);let hn,Je=Me;if(Te!==null&&(hn=ee.get(Te),Je=qe,Je.setIndex(hn)),O.isMesh)G.wireframe===!0?(Ae.setLineWidth(G.wireframeLinewidth*Ce()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(O.isLine){let Pe=G.linewidth;Pe===void 0&&(Pe=1),Ae.setLineWidth(Pe*Ce()),O.isLineSegments?Je.setMode(D.LINES):O.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else O.isPoints?Je.setMode(D.POINTS):O.isSprite&&Je.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pe=O._multiDrawStarts,Ft=O._multiDrawCounts,et=O._multiDrawCount,Bn=Te?ee.get(Te).bytesPerElement:1,ns=Ne.get(G).currentProgram.getUniforms();for(let pn=0;pn<et;pn++)ns.setValue(D,"_gl_DrawID",pn),Je.render(Pe[pn]/Bn,Ft[pn])}else if(O.isInstancedMesh)Je.renderInstances(it,xt,O.count);else if(V.isInstancedBufferGeometry){const Pe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ft=Math.min(V.instanceCount,Pe);Je.renderInstances(it,xt,Ft)}else Je.render(it,xt)};function Qe(T,F,V){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Oa(T,F,V),T.side=fr,T.needsUpdate=!0,Oa(T,F,V),T.side=_i):Oa(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=$e.get(V),m.init(F),g.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==V&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const G=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Ee=ue[ge];Qe(Ee,V,O),G.add(Ee)}else Qe(ue,V,O),G.add(ue)}),g.pop(),m=null,G},this.compileAsync=function(T,F,V=null){const G=this.compile(T,F,V);return new Promise(O=>{function ue(){if(G.forEach(function(ge){Ne.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){O(T);return}setTimeout(ue,10)}Ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tn=null;function di(T){tn&&tn(T)}function Mm(){_r.stop()}function Em(){_r.start()}const _r=new xM;_r.setAnimationLoop(di),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(T){tn=T,Y.setAnimationLoop(T),T===null?_r.stop():_r.start()},Y.addEventListener("sessionstart",Mm),Y.addEventListener("sessionend",Em),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),m=$e.get(T,g.length),m.init(F),g.push(m),Z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),se.setFromProjectionMatrix(Z),X=this.localClippingEnabled,k=ce.init(this.clippingPlanes,X),y=_e.get(T,h.length),y.init(),h.push(y),Y.enabled===!0&&Y.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&fu(ue,F,-1/0,v.sortObjects)}fu(T,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(I,Q),Le=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Le&&Fe.addToRenderList(y,T),this.info.render.frame++,k===!0&&ce.beginShadows();const V=m.state.shadowsArray;ve.render(V,T,F),k===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,O=y.transmissive;if(m.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let ge=0,Ee=ue.length;ge<Ee;ge++){const Te=ue[ge];Tm(G,O,T,Te)}Le&&Fe.render(T);for(let ge=0,Ee=ue.length;ge<Ee;ge++){const Te=ue[ge];wm(y,T,Te,Te.viewport)}}else O.length>0&&Tm(G,O,T,F),Le&&Fe.render(T),wm(y,T,F);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),ot.resetDefaultState(),P=-1,H=null,g.pop(),g.length>0?(m=g[g.length-1],k===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function fu(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){G&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Z);const ge=J.update(T),Ee=T.material;Ee.visible&&y.push(T,ge,Ee,V,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const ge=J.update(T),Ee=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),pe.copy(ge.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(Z)),Array.isArray(Ee)){const Te=ge.groups;for(let Oe=0,Be=Te.length;Oe<Be;Oe++){const Re=Te[Oe],it=Ee[Re.materialIndex];it&&it.visible&&y.push(T,ge,it,V,pe.z,Re)}}else Ee.visible&&y.push(T,ge,Ee,V,pe.z,null)}}const ue=T.children;for(let ge=0,Ee=ue.length;ge<Ee;ge++)fu(ue[ge],F,V,G)}function wm(T,F,V,G){const O=T.opaque,ue=T.transmissive,ge=T.transparent;m.setupLightsView(V),k===!0&&ce.setGlobalState(v.clippingPlanes,V),G&&Ae.viewport(_.copy(G)),O.length>0&&ka(O,F,V),ue.length>0&&ka(ue,F,V),ge.length>0&&ka(ge,F,V),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Tm(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Zr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?La:Di,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[G.id],ge=G.viewport||_;ue.setSize(ge.z,ge.w);const Ee=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(j),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Le&&Fe.render(V);const Te=v.toneMapping;v.toneMapping=ar;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),k===!0&&ce.setGlobalState(v.clippingPlanes,G),ka(T,V,G),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Re=0,it=F.length;Re<it;Re++){const lt=F[Re],xt=lt.object,hn=lt.geometry,Je=lt.material,Pe=lt.group;if(Je.side===_i&&xt.layers.test(G.layers)){const Ft=Je.side;Je.side=un,Je.needsUpdate=!0,Am(xt,V,G,hn,Je,Pe),Je.side=Ft,Je.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ee),v.setClearColor(j,K),Oe!==void 0&&(G.viewport=Oe),v.toneMapping=Te}function ka(T,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=T.length;O<ue;O++){const ge=T[O],Ee=ge.object,Te=ge.geometry,Oe=G===null?ge.material:G,Be=ge.group;Ee.layers.test(V.layers)&&Am(Ee,F,V,Te,Oe,Be)}}function Am(T,F,V,G,O,ue){T.onBeforeRender(v,F,V,G,O,ue),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,V,G,T,ue),O.transparent===!0&&O.side===_i&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,v.renderBufferDirect(V,F,G,O,T,ue),O.side=fr,O.needsUpdate=!0,v.renderBufferDirect(V,F,G,O,T,ue),O.side=_i):v.renderBufferDirect(V,F,G,O,T,ue),T.onAfterRender(v,F,V,G,O,ue)}function Oa(T,F,V){F.isScene!==!0&&(F=be);const G=Ne.get(T),O=m.state.lights,ue=m.state.shadowsArray,ge=O.state.version,Ee=we.getParameters(T,O.state,ue,F,V),Te=we.getProgramCacheKey(Ee);let Oe=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?B:E).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ke),Oe=new Map,G.programs=Oe);let Be=Oe.get(Te);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===ge)return Cm(T,Ee),Be}else Ee.uniforms=we.getUniforms(T),T.onBeforeCompile(Ee,v),Be=we.acquireProgram(Ee,Te),Oe.set(Te,Be),G.uniforms=Ee.uniforms;const Re=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=ce.uniform),Cm(T,Ee),G.needsLights=AM(T),G.lightsStateVersion=ge,G.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function bm(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Zl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Cm(T,F){const V=Ne.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function wM(T,F,V,G,O){F.isScene!==!0&&(F=be),R.resetTextureUnits();const ue=F.fog,ge=G.isMeshStandardMaterial?F.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yr,Te=(G.isMeshStandardMaterial?B:E).get(G.envMap||ge),Oe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let xt=ar;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=v.toneMapping);const hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=hn!==void 0?hn.length:0,Pe=Ne.get(G),Ft=m.state.lights;if(k===!0&&(X===!0||T!==H)){const bn=T===H&&G.id===P;ce.setState(G,T,bn)}let et=!1;G.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ft.state.version||Pe.outputColorSpace!==Ee||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==Te||G.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ce.numPlanes||Pe.numIntersection!==ce.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Be||Pe.morphTargets!==Re||Pe.morphNormals!==it||Pe.morphColors!==lt||Pe.toneMapping!==xt||Pe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Pe.__version=G.version);let Bn=Pe.currentProgram;et===!0&&(Bn=Oa(G,F,O));let ns=!1,pn=!1,hu=!1;const St=Bn.getUniforms(),Fi=Pe.uniforms;if(Ae.useProgram(Bn.program)&&(ns=!0,pn=!0,hu=!0),G.id!==P&&(P=G.id,pn=!0),ns||H!==T){Ve.reverseDepthBuffer?(te.copy(T.projectionMatrix),W2(te),X2(te),St.setValue(D,"projectionMatrix",te)):St.setValue(D,"projectionMatrix",T.projectionMatrix),St.setValue(D,"viewMatrix",T.matrixWorldInverse);const bn=St.map.cameraPosition;bn!==void 0&&bn.setValue(D,de.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,pn=!0,hu=!0)}if(O.isSkinnedMesh){St.setOptional(D,O,"bindMatrix"),St.setOptional(D,O,"bindMatrixInverse");const bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),St.setValue(D,"boneTexture",bn.boneTexture,R))}O.isBatchedMesh&&(St.setOptional(D,O,"batchingTexture"),St.setValue(D,"batchingTexture",O._matricesTexture,R),St.setOptional(D,O,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",O._indirectTexture,R),St.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",O._colorsTexture,R));const pu=V.morphAttributes;if((pu.position!==void 0||pu.normal!==void 0||pu.color!==void 0)&&ke.update(O,V,Bn),(pn||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,St.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fi.envMap.value=Te,Fi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Fi.envMapIntensity.value=F.environmentIntensity),pn&&(St.setValue(D,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&TM(Fi,hu),ue&&G.fog===!0&&he.refreshFogUniforms(Fi,ue),he.refreshMaterialUniforms(Fi,G,q,$,m.state.transmissionRenderTarget[T.id]),Zl.upload(D,bm(Pe),Fi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zl.upload(D,bm(Pe),Fi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(D,"center",O.center),St.setValue(D,"modelViewMatrix",O.modelViewMatrix),St.setValue(D,"normalMatrix",O.normalMatrix),St.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let mu=0,bM=bn.length;mu<bM;mu++){const Rm=bn[mu];U.update(Rm,Bn),U.bind(Rm,Bn)}}return Bn}function TM(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function AM(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,V){Ne.get(T.texture).__webglTexture=F,Ne.get(T.depthTexture).__webglTexture=V;const G=Ne.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=Ne.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){A=T,C=F,b=V;let G=!0,O=null,ue=!1,ge=!1;if(T){const Te=Ne.get(T);if(Te.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Te.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Te.__hasExternalTextures)R.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Re=T.depthTexture;if(Te.__boundDepthTexture!==Re){if(Re!==null&&Ne.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const Be=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][V]:O=Be[F],ue=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[V]:O=Be,_.copy(T.viewport),w.copy(T.scissor),W=T.scissorTest}else _.copy(N).multiplyScalar(q).floor(),w.copy(L).multiplyScalar(q).floor(),W=ie;if(Ae.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&Ae.drawBuffers(T,O),Ae.viewport(_),Ae.scissor(w),Ae.setScissorTest(W),ue){const Te=Ne.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,V)}else if(ge){const Te=Ne.get(T.texture),Oe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Oe)}P=-1},this.readRenderTargetPixels=function(T,F,V,G,O,ue,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Ae.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=T.texture,Oe=Te.format,Be=Te.type;if(!Ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-O&&D.readPixels(F,V,G,O,He.convert(Oe),He.convert(Be),ue)}finally{const Te=A!==null?Ne.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,G,O,ue,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){const Te=T.texture,Oe=Te.format,Be=Te.type;if(!Ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&V>=0&&V<=T.height-O){Ae.bindFramebuffer(D.FRAMEBUFFER,Ee);const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,V,G,O,He.convert(Oe),He.convert(Be),0);const it=A!==null?Ne.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,it);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await j2(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Re),D.deleteSync(lt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,V=0){T.isTexture!==!0&&(Kl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(T.image.width*G),ue=Math.floor(T.image.height*G),ge=F!==null?F.x:0,Ee=F!==null?F.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ge,Ee,O,ue),Ae.unbindTexture()},this.copyTextureToTexture=function(T,F,V=null,G=null,O=0){T.isTexture!==!0&&(Kl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ue,ge,Ee,Te,Oe,Be;V!==null?(ue=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ee=V.min.x,Te=V.min.y):(ue=T.image.width,ge=T.image.height,Ee=0,Te=0),G!==null?(Oe=G.x,Be=G.y):(Oe=0,Be=0);const Re=He.convert(F.format),it=He.convert(F.type);R.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Pe=D.getParameter(D.UNPACK_SKIP_IMAGES),Ft=T.isCompressedTexture?T.mipmaps[O]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Oe,Be,ue,ge,Re,it,Ft.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Oe,Be,Ft.width,Ft.height,Re,Ft.data):D.texSubImage2D(D.TEXTURE_2D,O,Oe,Be,ue,ge,Re,it,Ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,G=null,O=0){T.isTexture!==!0&&(Kl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0);let ue,ge,Ee,Te,Oe,Be,Re,it,lt;const xt=T.isCompressedTexture?T.mipmaps[O]:T.image;V!==null?(ue=V.max.x-V.min.x,ge=V.max.y-V.min.y,Ee=V.max.z-V.min.z,Te=V.min.x,Oe=V.min.y,Be=V.min.z):(ue=xt.width,ge=xt.height,Ee=xt.depth,Te=0,Oe=0,Be=0),G!==null?(Re=G.x,it=G.y,lt=G.z):(Re=0,it=0,lt=0);const hn=He.convert(F.format),Je=He.convert(F.type);let Pe;if(F.isData3DTexture)R.setTexture3D(F,0),Pe=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Pe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ft=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bn=D.getParameter(D.UNPACK_SKIP_PIXELS),ns=D.getParameter(D.UNPACK_SKIP_ROWS),pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Pe,O,Re,it,lt,ue,ge,Ee,hn,Je,xt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,O,Re,it,lt,ue,ge,Ee,hn,xt.data):D.texSubImage3D(Pe,O,Re,it,lt,ue,ge,Ee,hn,Je,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ns),D.pixelStorei(D.UNPACK_SKIP_IMAGES,pn),O===0&&F.generateMipmaps&&D.generateMipmap(Pe),Ae.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){C=0,b=0,A=null,Ae.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===xm?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===au?"display-p3":"srgb"}}class rD extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Dh extends Ua{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yv=new Tt,Ih=new cM,bl=new lu,Cl=new z;class qv extends fn{constructor(e=new ti,n=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Yv.copy(r).invert(),Ih.copy(e.ray).applyMatrix4(Yv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=d,y=p;x<y;x++){const m=c.getX(x);Cl.fromBufferAttribute(f,m),Kv(Cl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,y=p;x<y;x++)Cl.fromBufferAttribute(f,x),Kv(Cl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kv(t,e,n,i,r,s,o){const a=Ih.distanceSqToPoint(t);if(a<n){const l=new z;Ih.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class du extends ti{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Mn(s,3)),this.setAttribute("normal",new Mn(s.slice(),3)),this.setAttribute("uv",new Mn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new z,M=new z,C=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],v),p(n[b+1],M),p(n[b+2],C),l(v,M,C,g)}function l(g,v,M,C){const b=C+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const H=g.clone().lerp(M,P/b),_=v.clone().lerp(M,P/b),w=b-P;for(let W=0;W<=w;W++)W===0&&P===b?A[P][W]=H:A[P][W]=H.clone().lerp(_,W/w)}for(let P=0;P<b;P++)for(let H=0;H<2*(b-P)-1;H++){const _=Math.floor(H/2);H%2===0?(d(A[P][_+1]),d(A[P+1][_]),d(A[P][_])):(d(A[P][_+1]),d(A[P+1][_+1]),d(A[P+1][_]))}}function c(g){const v=new z;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(g),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){const g=new z;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const M=m(g)/2/Math.PI+.5,C=h(g)/Math.PI+.5;o.push(M,1-C)}x(),f()}function f(){for(let g=0;g<o.length;g+=6){const v=o[g+0],M=o[g+2],C=o[g+4],b=Math.max(v,M,C),A=Math.min(v,M,C);b>.9&&A<.1&&(v<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function d(g){s.push(g.x,g.y,g.z)}function p(g,v){const M=g*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function x(){const g=new z,v=new z,M=new z,C=new z,b=new nt,A=new nt,P=new nt;for(let H=0,_=0;H<s.length;H+=9,_+=6){g.set(s[H+0],s[H+1],s[H+2]),v.set(s[H+3],s[H+4],s[H+5]),M.set(s[H+6],s[H+7],s[H+8]),b.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),C.copy(g).add(v).add(M).divideScalar(3);const w=m(C);y(b,_+0,g,w),y(A,_+2,v,w),y(P,_+4,M,w)}}function y(g,v,M,C){C<0&&g.x===1&&(o[v]=g.x-1),M.x===0&&M.z===0&&(o[v]=C/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.vertices,e.indices,e.radius,e.details)}}class Fc extends du{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Fc(e.radius,e.detail)}}class _m extends du{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _m(e.radius,e.detail)}}class kc extends ti{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new z,f=new z,d=new z;for(let p=0;p<=i;p++)for(let x=0;x<=r;x++){const y=x/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=r;x++){const y=(r+1)*p+x-1,m=(r+1)*(p-1)+x-1,h=(r+1)*(p-1)+x,g=(r+1)*p+x;o.push(y,m,g),o.push(m,h,g)}this.setIndex(o),this.setAttribute("position",new Mn(a,3)),this.setAttribute("normal",new Mn(l,3)),this.setAttribute("uv",new Mn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class sD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Zv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zv(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dm);const oD=()=>{const t=oe.useRef(null),[e,n]=oe.useState(!0);return oe.useEffect(()=>{const i=t.current;if(!i)return;try{const se=document.createElement("canvas");if(!(se.getContext("webgl")||se.getContext("experimental-webgl"))){n(!1);return}}catch{n(!1);return}const r=new rD,s=i.clientWidth||450,o=i.clientHeight||450,a=new Dn(45,s/o,.1,1e3);a.position.z=5.5;let l;try{l=new iD({alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch{n(!1);return}l.setSize(s,o),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.innerHTML="",i.appendChild(l.domElement);const c=new Bo;r.add(c);const u=new _m(.8,2),f=new Us({color:440020,wireframe:!0,transparent:!0,opacity:.35}),d=new yn(u,f);c.add(d);const p=new Fc(1.4,2),x=new Us({color:3900150,wireframe:!0,transparent:!0,opacity:.45}),y=new yn(p,x);c.add(y);const m=new Fc(1.4,2),h=new Dh({color:62206,size:.055,transparent:!0,opacity:.85}),g=new qv(m,h);c.add(g);const v=new kc(2,.018,16,100),M=new Us({color:9133302,transparent:!0,opacity:.6}),C=new yn(v,M);C.rotation.x=Math.PI/3,C.rotation.y=Math.PI/6,c.add(C);const b=new kc(2.3,.014,16,100),A=new Us({color:440020,transparent:!0,opacity:.45}),P=new yn(b,A);P.rotation.x=-Math.PI/4,P.rotation.y=-Math.PI/4,c.add(P);const H=120,_=new ti,w=new Float32Array(H*3);for(let se=0;se<H*3;se+=3){const k=2.4+Math.random()*.9,X=Math.random()*Math.PI*2,te=Math.acos(Math.random()*2-1);w[se]=k*Math.sin(te)*Math.cos(X),w[se+1]=k*Math.sin(te)*Math.sin(X),w[se+2]=k*Math.cos(te)}_.setAttribute("position",new Jn(w,3));const W=new Dh({color:6333946,size:.035,transparent:!0,opacity:.7}),j=new qv(_,W);c.add(j);let K=0,ne=0,$=0,q=0;const I=se=>{const k=i.getBoundingClientRect(),X=se.clientX-(k.left+k.width/2),te=se.clientY-(k.top+k.height/2);K=X/k.width*1.8,ne=te/k.height*1.8};window.addEventListener("mousemove",I,{passive:!0});const Q=()=>{if(!i)return;const se=i.clientWidth,k=i.clientHeight;se===0||k===0||(a.aspect=se/k,a.updateProjectionMatrix(),l.setSize(se,k))};window.addEventListener("resize",Q);let N,L=new sD;const ie=()=>{N=requestAnimationFrame(ie);const se=L.getElapsedTime();$+=(K-$)*.05,q+=(ne-q)*.05,c.rotation.y=se*.25+$,c.rotation.x=Math.sin(se*.15)*.15+q*.5,c.position.y=Math.sin(se*1.2)*.12,y.rotation.y-=.003,y.rotation.z+=.002,d.rotation.x+=.006,d.rotation.y-=.005,C.rotation.z+=.004,P.rotation.z-=.003,j.rotation.y+=.001,l.render(r,a)};return ie(),()=>{window.removeEventListener("mousemove",I),window.removeEventListener("resize",Q),cancelAnimationFrame(N),l&&l.dispose(),i&&l.domElement&&(i.innerHTML="")}},[]),S.jsxs("div",{className:"relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[540px] flex items-center justify-center",children:[S.jsx("div",{className:"absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/25 to-violet-600/30 blur-3xl pointer-events-none animate-pulse-slow"}),e?S.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing relative z-10"}):S.jsxs("div",{className:"relative z-10 w-64 h-64 flex items-center justify-center",children:[S.jsx("div",{className:"absolute inset-0 rounded-full border border-cyan-400/40 animate-spin",style:{animationDuration:"14s"}}),S.jsx("div",{className:"absolute inset-4 rounded-full border border-violet-500/40 animate-spin",style:{animationDuration:"9s",animationDirection:"reverse"}}),S.jsx("div",{className:"absolute inset-10 rounded-full border border-blue-500/50 animate-pulse"}),S.jsx("div",{className:"w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 opacity-80 blur-sm animate-float"}),S.jsx("span",{className:"relative z-20 text-xs font-mono font-bold tracking-widest text-cyan-300",children:"LN • 2026"})]}),S.jsxs("div",{className:"absolute bottom-2 md:bottom-4 px-3 py-1 rounded-full glass-panel border border-cyan-500/20 text-[11px] font-mono text-cyan-300/80 flex items-center gap-1.5 pointer-events-none",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),"Interactive 3D Matrix • Drag or move mouse"]})]})},aD=()=>{const{personal:t}=xr,e=n=>{const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"})};return S.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[S.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center",children:[S.jsxs(ze.div,{className:"lg:col-span-7 flex flex-col justify-center text-left z-10",initial:{opacity:0,x:-40},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},children:[S.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 mb-6",children:[S.jsxs(ze.div,{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.1},children:[S.jsxs("span",{className:"relative flex h-2 w-2",children:[S.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),S.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-500"})]}),S.jsxs("span",{children:[t.classGrade," • ",t.school]})]}),S.jsxs(ze.div,{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-mono text-slate-400",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:.2},children:[S.jsx(um,{className:"w-3.5 h-3.5 text-rose-400"}),S.jsxs("span",{children:[t.city,", ",t.province,", ",t.country]})]})]}),S.jsxs(ze.div,{className:"flex items-center gap-2 mb-2",initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:.25},children:[S.jsx("span",{className:"text-lg md:text-xl font-medium text-cyan-400/90 font-mono tracking-wide",children:"Hi, I'm Lufi"}),S.jsx("span",{className:"text-2xl animate-bounce",style:{animationDuration:"2.5s"},children:"👋"})]}),S.jsxs(ze.h1,{className:"text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.35,duration:.7},children:[S.jsx("span",{className:"text-white",children:"Lufi"})," ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent text-glow",children:"Noferiza"})]}),S.jsxs(ze.div,{className:"inline-flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-slate-200 mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45},children:[S.jsx(kC,{className:"w-6 h-6 text-cyan-400"}),S.jsx("span",{className:"border-b-2 border-cyan-500/40 pb-0.5",children:t.heroHeadline})]}),S.jsxs(ze.p,{className:"text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55},children:["“",t.heroDescription,"”"]}),S.jsxs(ze.div,{className:"flex flex-wrap items-center gap-4",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{delay:.65},children:[S.jsxs("button",{onClick:()=>e("projects"),className:"group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-neon-blue hover:shadow-neon-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"}),S.jsx(ts,{className:"w-4 h-4 text-cyan-200"}),S.jsx("span",{className:"relative z-10",children:"Explore My Portfolio"}),S.jsx(zS,{className:"w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform"})]}),S.jsxs("button",{onClick:()=>e("contact"),className:"inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl font-heading font-medium text-sm text-slate-200 glass-panel border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:text-cyan-300 transition-all duration-300",children:[S.jsx(jl,{className:"w-4 h-4 text-cyan-400"}),S.jsx("span",{children:"Contact Me"})]})]}),S.jsxs(ze.div,{className:"mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg",initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},children:[S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-heading font-bold text-white",children:t.year}),S.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Academic Year"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-heading font-bold text-cyan-400",children:t.classGrade}),S.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Vocational Class"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"text-xl sm:text-2xl font-heading font-bold text-violet-400",children:"16 y.o."}),S.jsx("div",{className:"text-xs text-slate-400 font-mono",children:"Young Developer"})]})]})]}),S.jsx(ze.div,{className:"lg:col-span-5 flex items-center justify-center relative",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3},children:S.jsx("div",{className:"w-full relative",children:S.jsx(oD,{})})})]}),S.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity",children:[S.jsx("span",{className:"text-[11px] font-mono tracking-widest text-slate-400 uppercase",children:"SCROLL DOWN"}),S.jsx("div",{className:"w-5 h-8 rounded-full border border-cyan-500/30 flex items-start justify-center p-1",children:S.jsx(ze.div,{className:"w-1.5 h-2 rounded-full bg-cyan-400",animate:{y:[0,12,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})})]})]})},lD=()=>{const{personal:t}=xr,e=oe.useRef(null),[n,i]=oe.useState(0),[r,s]=oe.useState(0),[o,a]=oe.useState({x:50,y:50,opacity:0}),l=f=>{if(!e.current)return;const d=e.current.getBoundingClientRect(),p=f.clientX-d.left,x=f.clientY-d.top,y=d.width/2,m=d.height/2,h=(x-m)/m*-8,g=(p-y)/y*8;i(h),s(g),a({x:p/d.width*100,y:x/d.height*100,opacity:.25})},c=()=>{i(0),s(0),a(f=>({...f,opacity:0}))},u=[{label:"Name",value:t.fullName,icon:td},{label:"Nickname",value:t.nickname,icon:ts},{label:"Age",value:`${t.age} Years Old`,icon:jS},{label:"Status",value:t.status,icon:jf},{label:"School",value:t.school,icon:Wf},{label:"Major",value:"Software Engineering",icon:Rc},{label:"Class",value:t.classGrade,icon:Wf},{label:"Location",value:`${t.city}, ${t.province}`,icon:um}];return S.jsx("section",{id:"about",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(td,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"DISCOVER THE PROFILE"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["About ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Me"})]}),S.jsx(ze.div,{initial:{scaleX:0},whileInView:{scaleX:1},viewport:{once:!0},transition:{delay:.2,duration:.6},className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[S.jsx(ze.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:"lg:col-span-6 space-y-6",children:S.jsxs("div",{className:"glass-panel-glow p-8 rounded-3xl relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"}),S.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[S.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-neon-blue",children:S.jsx(Rc,{className:"w-6 h-6"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-xl font-heading font-bold text-white",children:t.fullName}),S.jsxs("p",{className:"text-xs font-mono text-cyan-400",children:[t.bioHeadline," • ",t.classGrade]})]})]}),S.jsxs("blockquote",{className:"text-slate-200 text-base sm:text-lg leading-relaxed font-light border-l-2 border-cyan-500/50 pl-5 mb-6 italic",children:["“",t.aboutDescription,"”"]}),S.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Sebagai siswa SMK di Temanggung, saya mendedikasikan waktu saya untuk mempelajari fundamental pemrograman, arsitektur web modern, dan logika software yang solid. Saya percaya dedikasi dan eksplorasi berkelanjutan adalah kunci menjadi engineer yang berkompeten."}),S.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4",children:[S.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.02] border border-white/5",children:[S.jsx("div",{className:"text-cyan-400 font-mono text-xs mb-1",children:"Focus Area"}),S.jsx("div",{className:"text-white font-heading font-semibold text-sm",children:"Fullstack Fundamentals"})]}),S.jsxs("div",{className:"p-3.5 rounded-2xl bg-white/[0.02] border border-white/5",children:[S.jsx("div",{className:"text-violet-400 font-mono text-xs mb-1",children:"Institution"}),S.jsx("div",{className:"text-white font-heading font-semibold text-sm",children:"SMKN Tembarak"})]})]})]})}),S.jsx(ze.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:"lg:col-span-6 flex justify-center perspective-[1000px]",children:S.jsxs("div",{ref:e,onMouseMove:l,onMouseLeave:c,style:{transform:`rotateX(${n}deg) rotateY(${r}deg)`,transformStyle:"preserve-3d",transition:"transform 0.15s ease-out"},className:"relative w-full max-w-lg glass-panel-glow rounded-3xl p-8 border border-cyan-500/30 shadow-glass overflow-hidden cursor-default",children:[S.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300",style:{background:`radial-gradient(circle at ${o.x}% ${o.y}%, rgba(6, 182, 212, ${o.opacity}), transparent 60%)`}}),S.jsxs("div",{className:"flex items-center justify-between pb-6 mb-6 border-b border-white/10",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300",children:S.jsx(td,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-heading font-bold text-white tracking-tight",children:"Personal Information"}),S.jsx("p",{className:"text-[11px] font-mono text-slate-400",children:"Verified Identity Profile"})]})]}),S.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5",children:[S.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),"Active Student"]})]}),S.jsx("div",{className:"space-y-3.5",children:u.map((f,d)=>{const p=f.icon;return S.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/20 transition-colors",children:[S.jsxs("div",{className:"flex items-center gap-2.5 text-slate-400 text-xs font-mono",children:[S.jsx(p,{className:"w-3.5 h-3.5 text-cyan-400/80"}),S.jsx("span",{children:f.label})]}),S.jsx("div",{className:"text-sm font-semibold text-slate-100 font-heading text-right",children:f.value})]},d)})}),S.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400",children:[S.jsx("span",{children:"IDENTITY NO. LN-2026-RPL"}),S.jsx("span",{className:"text-cyan-400",children:"SMKN TEMBARAK"})]})]})})]})]})})},cD={Code2:Rc,Palette:$C,FileCode2:HC,Server:KC,Database:zC,GitBranch:jC,Github:GS,Smartphone:ZC,Layout:YC},uD=()=>{const{skills:t}=xr;return S.jsx("section",{id:"skills",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(BC,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"LEARNING PATH & TECH STACK"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["Skills & ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent",children:"Technologies"})]}),S.jsx(ze.p,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light",children:"Daftar teknologi dan konsep yang sedang aktif saya pelajari dan kembangkan selama masa studi di SMK Negeri Tembarak."}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((e,n)=>{const i=cD[e.icon]||Rc;return S.jsxs(ze.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.07},whileHover:{y:-6,scale:1.02},className:"group relative rounded-2xl glass-panel p-6 border border-white/10 hover:border-cyan-500/40 hover:shadow-neon-cyan/20 transition-all duration-300 overflow-hidden",children:[S.jsx("div",{className:"absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none",style:{backgroundColor:e.accent}}),S.jsxs("div",{className:"flex items-start justify-between mb-4",children:[S.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm",style:{background:`radial-gradient(circle at 30% 30%, ${e.accent}33, #070a12)`,border:`1px solid ${e.accent}55`,color:e.accent},children:S.jsx(i,{className:"w-6 h-6 group-hover:rotate-6 transition-transform"})}),S.jsx("span",{className:"px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors",children:"In Progress"})]}),S.jsxs("h3",{className:"text-lg font-heading font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center gap-1.5",children:[S.jsx("span",{children:e.name}),S.jsx(ts,{className:"w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"})]}),S.jsx("p",{className:"text-xs text-slate-400 font-light leading-relaxed mb-4",children:e.status}),S.jsx("div",{className:"w-full h-1 bg-white/5 rounded-full overflow-hidden",children:S.jsx("div",{className:"h-full rounded-full transition-all duration-700 ease-out group-hover:w-full w-2/3",style:{backgroundColor:e.accent,boxShadow:`0 0 10px ${e.accent}`}})})]},e.name)})}),S.jsx(ze.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4},className:"mt-12 text-center",children:S.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/5 text-xs text-slate-400 font-mono",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),S.jsx("span",{children:"Fokus saat ini: Pemrograman Web Berbasis RPL SMK Negeri Tembarak"})]})})]})})},dD=({project:t,index:e,onOpenNotice:n})=>{const i=oe.useRef(null),[r,s]=oe.useState(0),[o,a]=oe.useState(0),[l,c]=oe.useState({x:50,y:50,opacity:0}),u=d=>{if(!i.current)return;const p=i.current.getBoundingClientRect(),x=d.clientX-p.left,y=d.clientY-p.top,m=p.width/2,h=p.height/2,g=(y-h)/h*-7,v=(x-m)/m*7;s(g),a(v),c({x:x/p.width*100,y:y/p.height*100,opacity:.2})},f=()=>{s(0),a(0),c(d=>({...d,opacity:0}))};return S.jsx(ze.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:e*.15},className:"perspective-[1000px] flex justify-center",children:S.jsxs("div",{ref:i,onMouseMove:u,onMouseLeave:f,style:{transform:`rotateX(${r}deg) rotateY(${o}deg)`,transformStyle:"preserve-3d",transition:"transform 0.15s ease-out"},className:"w-full relative glass-panel-glow rounded-3xl border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-glass group",children:[S.jsx("div",{className:"absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl",style:{background:`radial-gradient(circle at ${l.x}% ${l.y}%, rgba(6, 182, 212, ${l.opacity}), transparent 60%)`}}),S.jsxs("div",{children:[S.jsxs("div",{className:"relative w-full h-44 sm:h-48 rounded-2xl bg-dark-950/80 border border-white/5 overflow-hidden mb-6 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors",children:[S.jsx("div",{className:"absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"}),S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${t.gradient}`}),S.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-3",children:[S.jsx("div",{className:"w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-neon-cyan/20 group-hover:scale-110 transition-transform",children:S.jsx(GC,{className:"w-7 h-7"})}),S.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-cyan-300",children:[S.jsx(HS,{className:"w-3 h-3 text-cyan-400"}),S.jsx("span",{children:t.statusBadge})]})]}),S.jsx("span",{className:"absolute top-3 right-3 font-mono text-xs text-slate-500 bg-dark-900/80 px-2 py-0.5 rounded-md border border-white/5",children:t.number})]}),S.jsxs("div",{className:"space-y-2 mb-6",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),S.jsx("h3",{className:"text-xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors",children:t.title})]}),S.jsxs("p",{className:"text-slate-300 text-sm font-light leading-relaxed",children:["“",t.description,"”"]})]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.technologies.map(d=>S.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors",children:d},d))}),S.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-4 border-t border-white/10",children:[S.jsxs("button",{onClick:()=>n(`Project "${t.number}" saat ini sedang dalam proses pengembangan aktif oleh Lufi Noferiza sebagai bagian dari pembelajaran RPL.`),className:"flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-sm transition-all",children:[S.jsx(VC,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"View Project"})]}),S.jsxs("button",{onClick:()=>n(`Repository kode untuk "${t.number}" akan dipublikasikan ke GitHub setelah fase pengerjaan selesai.`),className:"flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-heading font-medium text-slate-300 glass-panel border border-white/10 hover:border-cyan-400/30 hover:text-white transition-all",children:[S.jsx(GS,{className:"w-3.5 h-3.5"}),S.jsx("span",{children:"GitHub"})]})]})]})]})})},fD=()=>{const{projects:t}=xr,[e,n]=oe.useState(null);return S.jsxs("section",{id:"projects",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(ts,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"PORTFOLIO SHOWCASE"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["Featured ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent",children:"Projects"})]}),S.jsx(ze.p,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light",children:"Ruang pamer karya masa depan. Seluruh project di bawah ini dirancang untuk mendokumentasikan eksplorasi kode saya."}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((i,r)=>S.jsx(dD,{project:i,index:r,onOpenNotice:s=>n(s)},i.id))}),S.jsxs(ze.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4},className:"mt-14 max-w-2xl mx-auto glass-panel p-4 rounded-2xl border border-white/5 flex items-center gap-3.5 text-xs text-slate-400",children:[S.jsx(UC,{className:"w-5 h-5 text-cyan-400 shrink-0"}),S.jsxs("span",{children:[S.jsx("strong",{children:"Catatan:"})," Sebagai siswa SMK yang sedang berkembang, seluruh project di atas adalah slot showcase resmi yang akan diisi dengan kode nyata hasil pembelajaran saya di SMKN Tembarak."]})]})]}),S.jsx(Dp,{children:e&&S.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",children:S.jsxs(ze.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"max-w-md w-full glass-panel-glow border border-cyan-500/40 rounded-3xl p-6 relative shadow-2xl",children:[S.jsx("button",{onClick:()=>n(null),className:"absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors",children:S.jsx(WS,{className:"w-5 h-5"})}),S.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400",children:S.jsx(HS,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-heading font-bold text-white text-base",children:"Status Project"}),S.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Development Stage"})]})]}),S.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-6",children:e}),S.jsx("button",{onClick:()=>n(null),className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-heading font-semibold text-xs uppercase tracking-wider",children:"Mengerti"})]})})})]})},hD=()=>{const{education:t}=xr;return S.jsx("section",{id:"education",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(jf,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"ACADEMIC BACKGROUND"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["Formal ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent",children:"Education"})]}),S.jsx(ze.p,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light",children:"Pendidikan kejuruan formal tempat saya menimba ilmu dan mendalami dunia rekayasa perangkat lunak."}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsxs("div",{className:"max-w-3xl mx-auto relative",children:[S.jsx("div",{className:"absolute left-6 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"}),S.jsxs(ze.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},className:"relative flex flex-col sm:flex-row items-center gap-8 pl-12 sm:pl-0",children:[S.jsxs("div",{className:"absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-neon-cyan z-20",children:[S.jsx("span",{className:"w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute"}),S.jsx(Wf,{className:"w-5 h-5 text-cyan-300"})]}),S.jsxs("div",{className:"w-full sm:w-[calc(50%-2.5rem)] sm:mr-auto glass-panel-glow p-8 rounded-3xl border border-cyan-500/30 shadow-glass relative group hover:border-cyan-400/60 transition-all duration-300",children:[S.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[S.jsxs("span",{className:"px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5",children:[S.jsx(IC,{className:"w-3 h-3"}),S.jsx("span",{children:t.year})]}),S.jsx("span",{className:"px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-xs font-mono text-violet-300",children:t.classGrade})]}),S.jsx("h3",{className:"text-2xl font-heading font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors",children:t.school}),S.jsxs("div",{className:"text-sm font-mono text-cyan-400 mb-4 flex items-center gap-1.5",children:[S.jsx(jf,{className:"w-4 h-4"}),S.jsx("span",{children:t.major})]}),S.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed font-light mb-6",children:["“",t.description,"”"]}),S.jsxs("div",{className:"pt-4 border-t border-white/10 space-y-2",children:[S.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400 font-mono",children:[S.jsx(NC,{className:"w-3.5 h-3.5 text-emerald-400"}),S.jsx("span",{children:"Kurikulum: Rekayasa Perangkat Lunak Terapan"})]}),S.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400 font-mono",children:[S.jsx(jS,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"Status: Pelajar Aktif Kelas XI"})]})]})]})]})]})]})})},pD={BookOpen:DC,Hammer:WC,TrendingUp:QC,Sparkles:ts},mD=()=>{const{journey:t}=xr;return S.jsx("section",{id:"journey",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(OC,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"GROWTH ROADMAP"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["My Learning ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent",children:"Journey"})]}),S.jsx(ze.p,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-slate-400 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light",children:"Filosofi dan tahapan terstruktur yang saya jalani untuk bertransformasi dari seorang siswa menjadi software developer seutuhnya."}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative",children:t.map((e,n)=>{const i=pD[e.icon]||ts;return S.jsxs(ze.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:n*.12},whileHover:{y:-8,scale:1.02},className:"group relative glass-panel-glow rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 flex flex-col justify-between transition-all duration-300 overflow-hidden shadow-glass",children:[S.jsx("span",{className:"absolute top-4 right-5 text-4xl font-heading font-black text-white/[0.04] group-hover:text-cyan-400/10 transition-colors pointer-events-none",children:e.step}),S.jsxs("div",{children:[S.jsx("div",{className:`w-14 h-14 rounded-2xl bg-gradient-to-br ${e.color} p-[1px] shadow-sm mb-6`,children:S.jsx("div",{className:"w-full h-full bg-dark-900/90 rounded-[15px] flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform",children:S.jsx(i,{className:"w-6 h-6"})})}),S.jsxs("div",{className:"text-[11px] font-mono text-cyan-400 font-semibold tracking-wider uppercase mb-2",children:["Phase ",e.step]}),S.jsx("h3",{className:"text-2xl font-heading font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors",children:e.title}),S.jsx("p",{className:"text-slate-300 text-sm font-light leading-relaxed",children:e.description})]}),S.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors",children:[S.jsxs("span",{children:["STEP ",e.step," / 04"]}),S.jsx(zS,{className:"w-4 h-4 group-hover:translate-x-1.5 transition-transform"})]})]},e.title)})})]})})};var Sm={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),L=N.getContext("2d");L.fillRect(0,0,1,1);var ie=N.transferToImageBitmap();L.createPattern(ie,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var L=n.exports.Promise,ie=L!==void 0?L:e.Promise;return typeof ie=="function"?new ie(N):(N(l,l),null)}var u=function(N,L){return{transform:function(ie){if(N)return ie;if(L.has(ie))return L.get(ie);var se=new OffscreenCanvas(ie.width,ie.height),k=se.getContext("2d");return k.drawImage(ie,0,0),L.set(ie,se),se},clear:function(){L.clear()}}}(a,new Map),f=function(){var N=Math.floor(16.666666666666668),L,ie,se={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(L=function(X){var te=Math.random();return se[te]=requestAnimationFrame(function Z(de){k===de||k+N-1<de?(k=de,delete se[te],X()):se[te]=requestAnimationFrame(Z)}),te},ie=function(X){se[X]&&cancelAnimationFrame(se[X])}):(L=function(X){return setTimeout(X,N)},ie=function(X){return clearTimeout(X)}),{frame:L,cancel:ie}}(),d=function(){var N,L,ie={};function se(k){function X(te,Z){k.postMessage({options:te||{},callback:Z})}k.init=function(Z){var de=Z.transferControlToOffscreen();k.postMessage({canvas:de},[de])},k.fire=function(Z,de,pe){if(L)return X(Z,null),L;var be=Math.random().toString(36).slice(2);return L=c(function(Le){function Ce(D){D.data.callback===be&&(delete ie[be],k.removeEventListener("message",Ce),L=null,u.clear(),pe(),Le())}k.addEventListener("message",Ce),X(Z,be),ie[be]=Ce.bind(null,{data:{callback:be}})}),L},k.reset=function(){k.postMessage({reset:!0});for(var Z in ie)ie[Z](),delete ie[Z]}}return function(){if(N)return N;if(!i&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([k])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}se(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(N,L){return L?L(N):N}function y(N){return N!=null}function m(N,L,ie){return x(N&&y(N[L])?N[L]:p[L],ie)}function h(N){return N<0?0:Math.floor(N)}function g(N,L){return Math.floor(Math.random()*(L-N))+N}function v(N){return parseInt(N,16)}function M(N){return N.map(C)}function C(N){var L=String(N).replace(/[^0-9a-f]/gi,"");return L.length<6&&(L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]),{r:v(L.substring(0,2)),g:v(L.substring(2,4)),b:v(L.substring(4,6))}}function b(N){var L=m(N,"origin",Object);return L.x=m(L,"x",Number),L.y=m(L,"y",Number),L}function A(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function P(N){var L=N.getBoundingClientRect();N.width=L.width,N.height=L.height}function H(N){var L=document.createElement("canvas");return L.style.position="fixed",L.style.top="0px",L.style.left="0px",L.style.pointerEvents="none",L.style.zIndex=N,L}function _(N,L,ie,se,k,X,te,Z,de){N.save(),N.translate(L,ie),N.rotate(X),N.scale(se,k),N.arc(0,0,1,te,Z,de),N.restore()}function w(N){var L=N.angle*(Math.PI/180),ie=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-L+(.5*ie-Math.random()*ie),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function W(N,L){L.x+=Math.cos(L.angle2D)*L.velocity+L.drift,L.y+=Math.sin(L.angle2D)*L.velocity+L.gravity,L.velocity*=L.decay,L.flat?(L.wobble=0,L.wobbleX=L.x+10*L.scalar,L.wobbleY=L.y+10*L.scalar,L.tiltSin=0,L.tiltCos=0,L.random=1):(L.wobble+=L.wobbleSpeed,L.wobbleX=L.x+10*L.scalar*Math.cos(L.wobble),L.wobbleY=L.y+10*L.scalar*Math.sin(L.wobble),L.tiltAngle+=.1,L.tiltSin=Math.sin(L.tiltAngle),L.tiltCos=Math.cos(L.tiltAngle),L.random=Math.random()+2);var ie=L.tick++/L.totalTicks,se=L.x+L.random*L.tiltCos,k=L.y+L.random*L.tiltSin,X=L.wobbleX+L.random*L.tiltCos,te=L.wobbleY+L.random*L.tiltSin;if(N.fillStyle="rgba("+L.color.r+", "+L.color.g+", "+L.color.b+", "+(1-ie)+")",N.beginPath(),o&&L.shape.type==="path"&&typeof L.shape.path=="string"&&Array.isArray(L.shape.matrix))N.fill(q(L.shape.path,L.shape.matrix,L.x,L.y,Math.abs(X-se)*.1,Math.abs(te-k)*.1,Math.PI/10*L.wobble));else if(L.shape.type==="bitmap"){var Z=Math.PI/10*L.wobble,de=Math.abs(X-se)*.1,pe=Math.abs(te-k)*.1,be=L.shape.bitmap.width*L.scalar,Le=L.shape.bitmap.height*L.scalar,Ce=new DOMMatrix([Math.cos(Z)*de,Math.sin(Z)*de,-Math.sin(Z)*pe,Math.cos(Z)*pe,L.x,L.y]);Ce.multiplySelf(new DOMMatrix(L.shape.matrix));var D=N.createPattern(u.transform(L.shape.bitmap),"no-repeat");D.setTransform(Ce),N.globalAlpha=1-ie,N.fillStyle=D,N.fillRect(L.x-be/2,L.y-Le/2,be,Le),N.globalAlpha=1}else if(L.shape==="circle")N.ellipse?N.ellipse(L.x,L.y,Math.abs(X-se)*L.ovalScalar,Math.abs(te-k)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI):_(N,L.x,L.y,Math.abs(X-se)*L.ovalScalar,Math.abs(te-k)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI);else if(L.shape==="star")for(var Ue=Math.PI/2*3,Ie=4*L.scalar,Ve=8*L.scalar,Ae=L.x,Xe=L.y,Ne=5,R=Math.PI/Ne;Ne--;)Ae=L.x+Math.cos(Ue)*Ve,Xe=L.y+Math.sin(Ue)*Ve,N.lineTo(Ae,Xe),Ue+=R,Ae=L.x+Math.cos(Ue)*Ie,Xe=L.y+Math.sin(Ue)*Ie,N.lineTo(Ae,Xe),Ue+=R;else N.moveTo(Math.floor(L.x),Math.floor(L.y)),N.lineTo(Math.floor(L.wobbleX),Math.floor(k)),N.lineTo(Math.floor(X),Math.floor(te)),N.lineTo(Math.floor(se),Math.floor(L.wobbleY));return N.closePath(),N.fill(),L.tick<L.totalTicks}function j(N,L,ie,se,k){var X=L.slice(),te=N.getContext("2d"),Z,de,pe=c(function(be){function Le(){Z=de=null,te.clearRect(0,0,se.width,se.height),u.clear(),k(),be()}function Ce(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=N.width=r.width,se.height=N.height=r.height),!se.width&&!se.height&&(ie(N),se.width=N.width,se.height=N.height),te.clearRect(0,0,se.width,se.height),X=X.filter(function(D){return W(te,D)}),X.length?Z=f.frame(Ce):Le()}Z=f.frame(Ce),de=Le});return{addFettis:function(be){return X=X.concat(be),pe},canvas:N,promise:pe,reset:function(){Z&&f.cancel(Z),de&&de()}}}function K(N,L){var ie=!N,se=!!m(L||{},"resize"),k=!1,X=m(L,"disableForReducedMotion",Boolean),te=s&&!!m(L||{},"useWorker"),Z=te?d():null,de=ie?A:P,pe=N&&Z?!!N.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Le;function Ce(Ue,Ie,Ve){for(var Ae=m(Ue,"particleCount",h),Xe=m(Ue,"angle",Number),Ne=m(Ue,"spread",Number),R=m(Ue,"startVelocity",Number),E=m(Ue,"decay",Number),B=m(Ue,"gravity",Number),ee=m(Ue,"drift",Number),ae=m(Ue,"colors",M),J=m(Ue,"ticks",Number),we=m(Ue,"shapes"),he=m(Ue,"scalar"),_e=!!m(Ue,"flat"),$e=b(Ue),ce=Ae,ve=[],Fe=N.width*$e.x,ke=N.height*$e.y;ce--;)ve.push(w({x:Fe,y:ke,angle:Xe,spread:Ne,startVelocity:R,color:ae[ce%ae.length],shape:we[g(0,we.length)],ticks:J,decay:E,gravity:B,drift:ee,scalar:he,flat:_e}));return Le?Le.addFettis(ve):(Le=j(N,ve,de,Ie,Ve),Le.promise)}function D(Ue){var Ie=X||m(Ue,"disableForReducedMotion",Boolean),Ve=m(Ue,"zIndex",Number);if(Ie&&be)return c(function(R){R()});ie&&Le?N=Le.canvas:ie&&!N&&(N=H(Ve),document.body.appendChild(N)),se&&!pe&&de(N);var Ae={width:N.width,height:N.height};Z&&!pe&&Z.init(N),pe=!0,Z&&(N.__confetti_initialized=!0);function Xe(){if(Z){var R={getBoundingClientRect:function(){if(!ie)return N.getBoundingClientRect()}};de(R),Z.postMessage({resize:{width:R.width,height:R.height}});return}Ae.width=Ae.height=null}function Ne(){Le=null,se&&(k=!1,e.removeEventListener("resize",Xe)),ie&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,pe=!1)}return se&&!k&&(k=!0,e.addEventListener("resize",Xe,!1)),Z?Z.fire(Ue,Ae,Ne):Ce(Ue,Ae,Ne)}return D.reset=function(){Z&&Z.reset(),Le&&Le.reset()},D}var ne;function $(){return ne||(ne=K(null,{useWorker:!0,resize:!0})),ne}function q(N,L,ie,se,k,X,te){var Z=new Path2D(N),de=new Path2D;de.addPath(Z,new DOMMatrix(L));var pe=new Path2D;return pe.addPath(de,new DOMMatrix([Math.cos(te)*k,Math.sin(te)*k,-Math.sin(te)*X,Math.cos(te)*X,ie,se])),pe}function I(N){if(!o)throw new Error("path confetti are not supported in this browser");var L,ie;typeof N=="string"?L=N:(L=N.path,ie=N.matrix);var se=new Path2D(L),k=document.createElement("canvas"),X=k.getContext("2d");if(!ie){for(var te=1e3,Z=te,de=te,pe=0,be=0,Le,Ce,D=0;D<te;D+=2)for(var Ue=0;Ue<te;Ue+=2)X.isPointInPath(se,D,Ue,"nonzero")&&(Z=Math.min(Z,D),de=Math.min(de,Ue),pe=Math.max(pe,D),be=Math.max(be,Ue));Le=pe-Z,Ce=be-de;var Ie=10,Ve=Math.min(Ie/Le,Ie/Ce);ie=[Ve,0,0,Ve,-Math.round(Le/2+Z)*Ve,-Math.round(Ce/2+de)*Ve]}return{type:"path",path:L,matrix:ie}}function Q(N){var L,ie=1,se="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?L=N:(L=N.text,ie="scalar"in N?N.scalar:ie,k="fontFamily"in N?N.fontFamily:k,se="color"in N?N.color:se);var X=10*ie,te=""+X+"px "+k,Z=new OffscreenCanvas(X,X),de=Z.getContext("2d");de.font=te;var pe=de.measureText(L),be=Math.ceil(pe.actualBoundingBoxRight+pe.actualBoundingBoxLeft),Le=Math.ceil(pe.actualBoundingBoxAscent+pe.actualBoundingBoxDescent),Ce=2,D=pe.actualBoundingBoxLeft+Ce,Ue=pe.actualBoundingBoxAscent+Ce;be+=Ce+Ce,Le+=Ce+Ce,Z=new OffscreenCanvas(be,Le),de=Z.getContext("2d"),de.font=te,de.fillStyle=se,de.fillText(L,D,Ue);var Ie=1/ie;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[Ie,0,0,Ie,-be*Ie/2,-Le*Ie/2]}}n.exports=function(){return $().apply(this,arguments)},n.exports.reset=function(){$().reset()},n.exports.create=K,n.exports.shapeFromPath=I,n.exports.shapeFromText=Q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),Sm,!1);const gD=Sm.exports;Sm.exports.create;const vD=()=>{const{personal:t}=xr,[e,n]=oe.useState({name:"",email:"",message:""}),[i,r]=oe.useState(!1),[s,o]=oe.useState(!1),a=l=>{l.preventDefault(),!(!e.name||!e.email||!e.message)&&(r(!0),setTimeout(()=>{r(!1),o(!0),gD({particleCount:70,spread:60,origin:{y:.7},colors:["#3b82f6","#06b6d4","#8b5cf6","#00f2fe"]}),n({name:"",email:"",message:""}),setTimeout(()=>o(!1),6e3)},800))};return S.jsx("section",{id:"contact",className:"relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-20",children:[S.jsxs(ze.div,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4",children:[S.jsx(jl,{className:"w-3.5 h-3.5 text-cyan-400"}),S.jsx("span",{children:"CONNECT WITH ME"})]}),S.jsxs(ze.h2,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},className:"text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight",children:["Let's Build Something ",S.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent",children:"Together"})]}),S.jsx(ze.p,{initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},className:"text-slate-300 text-base sm:text-lg mt-4 max-w-xl mx-auto font-light leading-relaxed",children:"“Saya terbuka untuk belajar, berdiskusi, dan mengembangkan project di bidang teknologi.”"}),S.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 mx-auto mt-4 rounded-full"})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto",children:[S.jsx(ze.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:"lg:col-span-5 space-y-6",children:S.jsxs("div",{className:"glass-panel-glow p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"}),S.jsx("h3",{className:"text-xl font-heading font-bold text-white mb-2",children:"Inisiasi Komunikasi"}),S.jsx("p",{className:"text-slate-400 text-xs sm:text-sm font-light mb-8 leading-relaxed",children:"Punya pertanyaan seputar studi saya di SMKN Tembarak atau ingin bertukar pikiran tentang coding? Jangan ragu untuk menghubungi saya."}),S.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950/70 border border-white/5 space-y-3 mb-6",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400",children:S.jsx(jl,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"Email Address"}),S.jsx("div",{className:"text-sm font-semibold text-white font-mono",children:t.email})]})]}),S.jsxs("a",{href:`mailto:${t.email}`,className:"w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-heading font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-neon-blue transition-all",children:[S.jsx(jl,{className:"w-4 h-4"}),S.jsx("span",{children:"Send Me an Email"})]})]}),S.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-rose-400",children:S.jsx(um,{className:"w-5 h-5"})}),S.jsxs("div",{children:[S.jsx("div",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider",children:"Lokasi Domisili"}),S.jsxs("div",{className:"text-sm font-medium text-slate-200",children:[t.city,", ",t.province,", ",t.country]})]})]}),S.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300/80",children:[S.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),S.jsx("span",{children:"Respon aktif untuk diskusi pemrograman"})]})]})}),S.jsx(ze.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.7},className:"lg:col-span-7",children:S.jsxs("div",{className:"glass-panel-glow p-8 sm:p-10 rounded-3xl border border-white/10 relative shadow-glass",children:[S.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[S.jsx(Pc,{className:"w-5 h-5 text-cyan-400"}),S.jsx("h3",{className:"text-xl font-heading font-bold text-white",children:"Send a Direct Message"})]}),s?S.jsxs(ze.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"py-12 flex flex-col items-center justify-center text-center space-y-4",children:[S.jsx("div",{className:"w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg",children:S.jsx(FC,{className:"w-9 h-9"})}),S.jsx("h4",{className:"text-2xl font-heading font-bold text-white",children:"Pesan Berhasil Terkirim!"}),S.jsx("p",{className:"text-slate-300 text-sm max-w-sm",children:"Terima kasih telah menghubungi saya. Pesan Anda telah diterima dalam simulasi antarmuka."})]}):S.jsxs("form",{onSubmit:a,className:"space-y-5",children:[S.jsxs("div",{children:[S.jsxs("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:["NAME ",S.jsx("span",{className:"text-cyan-400",children:"*"})]}),S.jsx("input",{type:"text",required:!0,value:e.name,onChange:l=>n({...e,name:l.target.value}),placeholder:"Masukkan nama lengkap Anda",className:"w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors"})]}),S.jsxs("div",{children:[S.jsxs("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:["EMAIL ",S.jsx("span",{className:"text-cyan-400",children:"*"})]}),S.jsx("input",{type:"email",required:!0,value:e.email,onChange:l=>n({...e,email:l.target.value}),placeholder:"nama@email.com",className:"w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors"})]}),S.jsxs("div",{children:[S.jsxs("label",{className:"block text-xs font-mono text-slate-300 mb-2",children:["MESSAGE ",S.jsx("span",{className:"text-cyan-400",children:"*"})]}),S.jsx("textarea",{rows:5,required:!0,value:e.message,onChange:l=>n({...e,message:l.target.value}),placeholder:"Tuliskan pesan, saran, atau peluang kolaborasi...",className:"w-full px-4 py-3.5 rounded-xl bg-dark-950/80 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm placeholder:text-slate-500 outline-none transition-colors resize-none"})]}),S.jsx("button",{type:"submit",disabled:i,className:"w-full py-4 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-neon-blue transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.99] disabled:opacity-50",children:i?S.jsx("span",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}):S.jsxs(S.Fragment,{children:[S.jsx(qC,{className:"w-4 h-4"}),S.jsx("span",{children:"Send Message"}),S.jsx(ts,{className:"w-3.5 h-3.5 text-cyan-200"})]})})]})]})})]})]})})},xD=()=>{const{personal:t}=xr,e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return S.jsxs("footer",{className:"relative border-t border-white/10 bg-dark-950/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[S.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 blur-2xl pointer-events-none"}),S.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8",children:[S.jsxs("div",{className:"flex items-center gap-3.5",children:[S.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-[1px] shadow-neon-blue",children:S.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center",children:S.jsx("span",{className:"font-heading font-black text-sm text-cyan-300",children:"LN"})})}),S.jsxs("div",{children:[S.jsx("div",{className:"font-heading font-bold text-white text-base tracking-tight",children:t.fullName}),S.jsx("div",{className:"text-xs font-mono text-cyan-400",children:t.bioHeadline})]})]}),S.jsxs("div",{className:"flex flex-col items-center text-center space-y-1",children:[S.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 font-light flex items-center gap-1.5",children:[S.jsx("span",{children:"Built with curiosity & code"}),S.jsx(Pc,{className:"w-3.5 h-3.5 text-cyan-400 inline"})]}),S.jsxs("p",{className:"text-xs text-slate-400 font-mono",children:["© ",t.year," ",t.fullName,". All rights reserved."]})]}),S.jsxs("button",{onClick:e,className:"group flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-300","aria-label":"Back to top",children:[S.jsx("span",{className:"text-xs font-mono",children:"Top"}),S.jsx(VS,{className:"w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform"})]})]})]})};function yD(){const[t,e]=oe.useState(!1);oe.useEffect(()=>{const i=()=>{e(window.scrollY>400)};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return S.jsxs("div",{className:"relative min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200",children:[S.jsx(AC,{}),S.jsx(bC,{}),S.jsx(CC,{}),S.jsx(JC,{}),S.jsxs("main",{className:"relative z-10",children:[S.jsx(aD,{}),S.jsx(lD,{}),S.jsx(uD,{}),S.jsx(fD,{}),S.jsx(hD,{}),S.jsx(mD,{}),S.jsx(vD,{})]}),S.jsx(xD,{}),S.jsx(Dp,{children:t&&S.jsx(ze.button,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},onClick:n,className:"fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl glass-panel-glow border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:scale-110 shadow-neon-cyan transition-all duration-300","aria-label":"Scroll to top",children:S.jsx(VS,{className:"w-5 h-5"})})})]})}Id.createRoot(document.getElementById("root")).render(S.jsx(oe.StrictMode,{children:S.jsx(yD,{})}));
