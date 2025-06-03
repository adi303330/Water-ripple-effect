(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function N_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ef={exports:{}},mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function vS(){if(Km)return mo;Km=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return mo.Fragment=e,mo.jsx=i,mo.jsxs=i,mo}var Qm;function SS(){return Qm||(Qm=1,Ef.exports=vS()),Ef.exports}var ii=SS(),Tf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function xS(){if(Jm)return re;Jm=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=v&&R[v]||R["@@iterator"],typeof R=="function"?R:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function x(R,X,et){this.props=R,this.context=X,this.refs=T,this.updater=et||y}x.prototype.isReactComponent={},x.prototype.setState=function(R,X){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,X,"setState")},x.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(R,X,et){this.props=R,this.context=X,this.refs=T,this.updater=et||y}var w=L.prototype=new _;w.constructor=L,b(w,x.prototype),w.isPureReactComponent=!0;var O=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function B(R,X,et,G,nt,mt){return et=mt.ref,{$$typeof:o,type:R,key:X,ref:et!==void 0?et:null,props:mt}}function dt(R,X){return B(R.type,X,void 0,void 0,void 0,R.props)}function D(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function N(R){var X={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(et){return X[et]})}var lt=/\/+/g;function ct(R,X){return typeof R=="object"&&R!==null&&R.key!=null?N(""+R.key):X.toString(36)}function Mt(){}function W(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(Mt,Mt):(R.status="pending",R.then(function(X){R.status==="pending"&&(R.status="fulfilled",R.value=X)},function(X){R.status==="pending"&&(R.status="rejected",R.reason=X)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function J(R,X,et,G,nt){var mt=typeof R;(mt==="undefined"||mt==="boolean")&&(R=null);var gt=!1;if(R===null)gt=!0;else switch(mt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(R.$$typeof){case o:case e:gt=!0;break;case g:return gt=R._init,J(gt(R._payload),X,et,G,nt)}}if(gt)return nt=nt(R),gt=G===""?"."+ct(R,0):G,O(nt)?(et="",gt!=null&&(et=gt.replace(lt,"$&/")+"/"),J(nt,X,et,"",function(qt){return qt})):nt!=null&&(D(nt)&&(nt=dt(nt,et+(nt.key==null||R&&R.key===nt.key?"":(""+nt.key).replace(lt,"$&/")+"/")+gt)),X.push(nt)),1;gt=0;var Dt=G===""?".":G+":";if(O(R))for(var Ut=0;Ut<R.length;Ut++)G=R[Ut],mt=Dt+ct(G,Ut),gt+=J(G,X,et,mt,nt);else if(Ut=S(R),typeof Ut=="function")for(R=Ut.call(R),Ut=0;!(G=R.next()).done;)G=G.value,mt=Dt+ct(G,Ut++),gt+=J(G,X,et,mt,nt);else if(mt==="object"){if(typeof R.then=="function")return J(W(R),X,et,G,nt);throw X=String(R),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return gt}function P(R,X,et){if(R==null)return R;var G=[],nt=0;return J(R,G,"","",function(mt){return X.call(et,mt,nt++)}),G}function Y(R){if(R._status===-1){var X=R._result;X=X(),X.then(function(et){(R._status===0||R._status===-1)&&(R._status=1,R._result=et)},function(et){(R._status===0||R._status===-1)&&(R._status=2,R._result=et)}),R._status===-1&&(R._status=0,R._result=X)}if(R._status===1)return R._result.default;throw R._result}var K=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function ut(){}return re.Children={map:P,forEach:function(R,X,et){P(R,function(){X.apply(this,arguments)},et)},count:function(R){var X=0;return P(R,function(){X++}),X},toArray:function(R){return P(R,function(X){return X})||[]},only:function(R){if(!D(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,re.__COMPILER_RUNTIME={__proto__:null,c:function(R){return V.H.useMemoCache(R)}},re.cache=function(R){return function(){return R.apply(null,arguments)}},re.cloneElement=function(R,X,et){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var G=b({},R.props),nt=R.key,mt=void 0;if(X!=null)for(gt in X.ref!==void 0&&(mt=void 0),X.key!==void 0&&(nt=""+X.key),X)!I.call(X,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&X.ref===void 0||(G[gt]=X[gt]);var gt=arguments.length-2;if(gt===1)G.children=et;else if(1<gt){for(var Dt=Array(gt),Ut=0;Ut<gt;Ut++)Dt[Ut]=arguments[Ut+2];G.children=Dt}return B(R.type,nt,void 0,void 0,mt,G)},re.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},re.createElement=function(R,X,et){var G,nt={},mt=null;if(X!=null)for(G in X.key!==void 0&&(mt=""+X.key),X)I.call(X,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(nt[G]=X[G]);var gt=arguments.length-2;if(gt===1)nt.children=et;else if(1<gt){for(var Dt=Array(gt),Ut=0;Ut<gt;Ut++)Dt[Ut]=arguments[Ut+2];nt.children=Dt}if(R&&R.defaultProps)for(G in gt=R.defaultProps,gt)nt[G]===void 0&&(nt[G]=gt[G]);return B(R,mt,void 0,void 0,null,nt)},re.createRef=function(){return{current:null}},re.forwardRef=function(R){return{$$typeof:h,render:R}},re.isValidElement=D,re.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:Y}},re.memo=function(R,X){return{$$typeof:p,type:R,compare:X===void 0?null:X}},re.startTransition=function(R){var X=V.T,et={};V.T=et;try{var G=R(),nt=V.S;nt!==null&&nt(et,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ut,K)}catch(mt){K(mt)}finally{V.T=X}},re.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},re.use=function(R){return V.H.use(R)},re.useActionState=function(R,X,et){return V.H.useActionState(R,X,et)},re.useCallback=function(R,X){return V.H.useCallback(R,X)},re.useContext=function(R){return V.H.useContext(R)},re.useDebugValue=function(){},re.useDeferredValue=function(R,X){return V.H.useDeferredValue(R,X)},re.useEffect=function(R,X,et){var G=V.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(R,X)},re.useId=function(){return V.H.useId()},re.useImperativeHandle=function(R,X,et){return V.H.useImperativeHandle(R,X,et)},re.useInsertionEffect=function(R,X){return V.H.useInsertionEffect(R,X)},re.useLayoutEffect=function(R,X){return V.H.useLayoutEffect(R,X)},re.useMemo=function(R,X){return V.H.useMemo(R,X)},re.useOptimistic=function(R,X){return V.H.useOptimistic(R,X)},re.useReducer=function(R,X,et){return V.H.useReducer(R,X,et)},re.useRef=function(R){return V.H.useRef(R)},re.useState=function(R){return V.H.useState(R)},re.useSyncExternalStore=function(R,X,et){return V.H.useSyncExternalStore(R,X,et)},re.useTransition=function(){return V.H.useTransition()},re.version="19.1.0",re}var $m;function gh(){return $m||($m=1,Tf.exports=xS()),Tf.exports}var cn=gh();const MS=N_(cn);var bf={exports:{}},go={},Af={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function yS(){return tg||(tg=1,function(o){function e(P,Y){var K=P.length;P.push(Y);t:for(;0<K;){var ut=K-1>>>1,R=P[ut];if(0<l(R,Y))P[ut]=Y,P[K]=R,K=ut;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Y=P[0],K=P.pop();if(K!==Y){P[0]=K;t:for(var ut=0,R=P.length,X=R>>>1;ut<X;){var et=2*(ut+1)-1,G=P[et],nt=et+1,mt=P[nt];if(0>l(G,K))nt<R&&0>l(mt,G)?(P[ut]=mt,P[nt]=K,ut=nt):(P[ut]=G,P[et]=K,ut=et);else if(nt<R&&0>l(mt,K))P[ut]=mt,P[nt]=K,ut=nt;else break t}}return Y}function l(P,Y){var K=P.sortIndex-Y.sortIndex;return K!==0?K:P.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,v=null,S=3,y=!1,b=!1,T=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=P)s(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function V(P){if(T=!1,O(P),!b)if(i(m)!==null)b=!0,I||(I=!0,ct());else{var Y=i(p);Y!==null&&J(V,Y.startTime-P)}}var I=!1,B=-1,dt=5,D=-1;function N(){return x?!0:!(o.unstable_now()-D<dt)}function lt(){if(x=!1,I){var P=o.unstable_now();D=P;var Y=!0;try{t:{b=!1,T&&(T=!1,L(B),B=-1),y=!0;var K=S;try{e:{for(O(P),v=i(m);v!==null&&!(v.expirationTime>P&&N());){var ut=v.callback;if(typeof ut=="function"){v.callback=null,S=v.priorityLevel;var R=ut(v.expirationTime<=P);if(P=o.unstable_now(),typeof R=="function"){v.callback=R,O(P),Y=!0;break e}v===i(m)&&s(m),O(P)}else s(m);v=i(m)}if(v!==null)Y=!0;else{var X=i(p);X!==null&&J(V,X.startTime-P),Y=!1}}break t}finally{v=null,S=K,y=!1}Y=void 0}}finally{Y?ct():I=!1}}}var ct;if(typeof w=="function")ct=function(){w(lt)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,W=Mt.port2;Mt.port1.onmessage=lt,ct=function(){W.postMessage(null)}}else ct=function(){_(lt,0)};function J(P,Y){B=_(function(){P(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):dt=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var K=S;S=Y;try{return P()}finally{S=K}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var K=S;S=P;try{return Y()}finally{S=K}},o.unstable_scheduleCallback=function(P,Y,K){var ut=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ut+K:ut):K=ut,P){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=K+R,P={id:g++,callback:Y,priorityLevel:P,startTime:K,expirationTime:R,sortIndex:-1},K>ut?(P.sortIndex=K,e(p,P),i(m)===null&&P===i(p)&&(T?(L(B),B=-1):T=!0,J(V,K-ut))):(P.sortIndex=R,e(m,P),b||y||(b=!0,I||(I=!0,ct()))),P},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(P){var Y=S;return function(){var K=S;S=Y;try{return P.apply(this,arguments)}finally{S=K}}}}(Rf)),Rf}var eg;function ES(){return eg||(eg=1,Af.exports=yS()),Af.exports}var Cf={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function TS(){if(ng)return yn;ng=1;var o=gh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},yn.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},yn.requestFormReset=function(m){s.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.1.0",yn}var ig;function bS(){if(ig)return Cf.exports;ig=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=TS(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function AS(){if(ag)return go;ag=1;var o=ES(),e=gh(),i=bS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return h(u),t;if(f===r)return h(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var M=!1,E=u.child;E;){if(E===a){M=!0,a=u,r=f;break}if(E===r){M=!0,r=u,a=f;break}E=E.sibling}if(!M){for(E=f.child;E;){if(E===a){M=!0,a=f,r=u;break}if(E===r){M=!0,r=f,a=u;break}E=E.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=lt&&t[lt]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function W(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case w:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:W(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return W(t(n))}catch{}}return null}var J=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ut=[],R=-1;function X(t){return{current:t}}function et(t){0>R||(t.current=ut[R],ut[R]=null,R--)}function G(t,n){R++,ut[R]=t.current,t.current=n}var nt=X(null),mt=X(null),gt=X(null),Dt=X(null);function Ut(t,n){switch(G(gt,n),G(mt,t),G(nt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Tm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Tm(n),t=bm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(nt),G(nt,t)}function qt(){et(nt),et(mt),et(gt)}function Wt(t){t.memoizedState!==null&&G(Dt,t);var n=nt.current,a=bm(n,t.type);n!==a&&(G(mt,t),G(nt,a))}function ue(t){mt.current===t&&(et(nt),et(mt)),Dt.current===t&&(et(Dt),uo._currentValue=K)}var it=Object.prototype.hasOwnProperty,$e=o.unstable_scheduleCallback,Ft=o.unstable_cancelCallback,te=o.unstable_shouldYield,Nt=o.unstable_requestPaint,ge=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,U=o.unstable_ImmediatePriority,A=o.unstable_UserBlockingPriority,at=o.unstable_NormalPriority,St=o.unstable_LowPriority,_t=o.unstable_IdlePriority,xt=o.log,Ot=o.unstable_setDisableYieldValue,bt=null,At=null;function Bt(t){if(typeof xt=="function"&&Ot(t),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(bt,t)}catch{}}var Ht=Math.clz32?Math.clz32:oe,vt=Math.log,Ee=Math.LN2;function oe(t){return t>>>=0,t===0?32:31-(vt(t)/Ee|0)|0}var Zt=256,It=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?u=wt(r):(M&=E,M!==0?u=wt(M):a||(a=E&~t,a!==0&&(u=wt(a))))):(E=r&~f,E!==0?u=wt(E):M!==0?u=wt(M):a||(a=r&~t,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ie(){var t=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),t}function yt(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function F(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Et(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rt(t,n,a,r,u,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,j=t.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Ht(a),pt=1<<ft;E[ft]=0,z[ft]=-1;var Q=j[ft];if(Q!==null)for(j[ft]=null,ft=0;ft<Q.length;ft++){var tt=Q[ft];tt!==null&&(tt.lane&=-536870913)}a&=~pt}r!==0&&Yt(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function Yt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ht(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194090}function Gt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ht(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Te(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function be(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ke(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Wm(t.type))}function fn(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var me=Math.random().toString(36).slice(2),ve="__reactFiber$"+me,ze="__reactProps$"+me,xi="__reactContainer$"+me,vs="__reactEvents$"+me,cr="__reactListeners$"+me,wo="__reactHandles$"+me,Da="__reactResources$"+me,Zi="__reactMarker$"+me;function fr(t){delete t[ve],delete t[ze],delete t[vs],delete t[cr],delete t[wo]}function ji(t){var n=t[ve];if(n)return n;for(var a=t.parentNode;a;){if(n=a[xi]||a[ve]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=wm(t);t!==null;){if(a=t[ve])return a;t=wm(t)}return n}t=a,a=t.parentNode}return null}function Ki(t){if(t=t[ve]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ua(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function C(t){var n=t[Da];return n||(n=t[Da]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[Zi]=!0}var rt=new Set,st={};function $(t,n){Ct(t,n),Ct(t+"Capture",n)}function Ct(t,n){for(st[t]=n,t=0;t<n.length;t++)rt.add(n[t])}var Pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},jt={};function ae(t){return it.call(jt,t)?!0:it.call(Vt,t)?!1:Pt.test(t)?jt[t]=!0:(Vt[t]=!0,!1)}function Qt(t,n,a){if(ae(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Me(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}var hn,qe;function xn(t){if(hn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);hn=n&&n[1]||"",qe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+t+qe}var Ne=!1;function ee(t,n){if(!t||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(tt){var Q=tt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(tt){Q=tt}t.call(pt.prototype)}}else{try{throw Error()}catch(tt){Q=tt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(tt){if(tt&&Q&&typeof tt.stack=="string")return[tt.stack,Q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),M=f[0],E=f[1];if(M&&E){var z=M.split(`
`),j=E.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===j.length)for(r=z.length-1,u=j.length-1;1<=r&&0<=u&&z[r]!==j[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==j[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==j[u]){var ft=`
`+z[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xn(a):""}function Ss(t){switch(t.tag){case 26:case 27:case 5:return xn(t.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return xn("Activity");default:return""}}function Be(t){try{var n="";do n+=Ss(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xs(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function La(t){var n=xs(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),r=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){r=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qi(t){t._valueTracker||(t._valueTracker=La(t))}function tn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=xs(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ms=/[\n"\\]/g;function Ie(t){return t.replace(Ms,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Na(t,n,a,r,u,f,M,E){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+je(n)):t.value!==""+je(n)&&(t.value=""+je(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?hr(t,M,je(n)):a!=null?hr(t,M,je(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+je(E):t.removeAttribute("name")}function Do(t,n,a,r,u,f,M,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+je(a):"",n=n!=null?""+je(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function hr(t,n,a){n==="number"&&Yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dr(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+je(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yh(t,n,a){if(n!=null&&(n=""+je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+je(a):""}function Eh(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=je(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function pr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Th(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||mv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Th(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Th(t,f,n[f])}function Mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_v=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uo(t){return _v.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yu=null;function Eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function Ah(t){var n=Ki(t);if(n&&(t=n.stateNode)){var a=t[ze]||null;t:switch(t=n.stateNode,n.type){case"input":if(Na(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[ze]||null;if(!u)throw Error(s(90));Na(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tn(r)}break t;case"textarea":yh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dr(t,!!a.multiple,n,!1)}}}var Tu=!1;function Rh(t,n,a){if(Tu)return t(n,a);Tu=!0;try{var r=t(n);return r}finally{if(Tu=!1,(mr!==null||gr!==null)&&(gl(),mr&&(n=mr,t=gr,gr=mr=null,Ah(n),t)))for(n=0;n<t.length;n++)Ah(t[n])}}function ys(t,n){var a=t.stateNode;if(a===null)return null;var r=a[ze]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=!1;if(Mi)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){bu=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{bu=!1}var Ji=null,Au=null,Lo=null;function Ch(){if(Lo)return Lo;var t,n=Au,a=n.length,r,u="value"in Ji?Ji.value:Ji.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(r=1;r<=M&&n[a-r]===u[f-r];r++);return Lo=u.slice(t,1<r?1-r:void 0)}function No(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function wh(){return!1}function Cn(t){function n(a,r,u,f,M){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Oo:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Cn(Oa),Ts=g({},Oa,{view:0,detail:0}),vv=Cn(Ts),Ru,Cu,bs,zo=g({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ru=t.screenX-bs.screenX,Cu=t.screenY-bs.screenY):Cu=Ru=0,bs=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),Dh=Cn(zo),Sv=g({},zo,{dataTransfer:0}),xv=Cn(Sv),Mv=g({},Ts,{relatedTarget:0}),wu=Cn(Mv),yv=g({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Cn(yv),Tv=g({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bv=Cn(Tv),Av=g({},Oa,{data:0}),Uh=Cn(Av),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wv[t])?!!n[t]:!1}function Du(){return Dv}var Uv=g({},Ts,{key:function(t){if(t.key){var n=Rv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=No(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?No(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?No(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lv=Cn(Uv),Nv=g({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Cn(Nv),Ov=g({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),Pv=Cn(Ov),zv=g({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=Cn(zv),Iv=g({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=Cn(Iv),Hv=g({},Oa,{newState:0,oldState:0}),Gv=Cn(Hv),Vv=[9,13,27,32],Uu=Mi&&"CompositionEvent"in window,As=null;Mi&&"documentMode"in document&&(As=document.documentMode);var Xv=Mi&&"TextEvent"in window&&!As,Nh=Mi&&(!Uu||As&&8<As&&11>=As),Oh=" ",Ph=!1;function zh(t,n){switch(t){case"keyup":return Vv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function Wv(t,n){switch(t){case"compositionend":return Bh(n);case"keypress":return n.which!==32?null:(Ph=!0,Oh);case"textInput":return t=n.data,t===Oh&&Ph?null:t;default:return null}}function kv(t,n){if(_r)return t==="compositionend"||!Uu&&zh(t,n)?(t=Ch(),Lo=Au=Ji=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nh&&n.locale!=="ko"?null:n.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qv[t.type]:n==="textarea"}function Fh(t,n,a,r){mr?gr?gr.push(r):gr=[r]:mr=r,n=yl(n,"onChange"),0<n.length&&(a=new Po("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Rs=null,Cs=null;function Yv(t){Sm(t,0)}function Bo(t){var n=Ua(t);if(tn(n))return t}function Hh(t,n){if(t==="change")return n}var Gh=!1;if(Mi){var Lu;if(Mi){var Nu="oninput"in document;if(!Nu){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Nu=typeof Vh.oninput=="function"}Lu=Nu}else Lu=!1;Gh=Lu&&(!document.documentMode||9<document.documentMode)}function Xh(){Rs&&(Rs.detachEvent("onpropertychange",Wh),Cs=Rs=null)}function Wh(t){if(t.propertyName==="value"&&Bo(Cs)){var n=[];Fh(n,Cs,t,Eu(t)),Rh(Yv,n)}}function Zv(t,n,a){t==="focusin"?(Xh(),Rs=n,Cs=a,Rs.attachEvent("onpropertychange",Wh)):t==="focusout"&&Xh()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bo(Cs)}function Kv(t,n){if(t==="click")return Bo(n)}function Qv(t,n){if(t==="input"||t==="change")return Bo(n)}function Jv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var zn=typeof Object.is=="function"?Object.is:Jv;function ws(t,n){if(zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!it.call(n,u)||!zn(t[u],n[u]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,n){var a=kh(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kh(a)}}function Yh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Yh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Zh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Yn(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $v=Mi&&"documentMode"in document&&11>=document.documentMode,vr=null,Pu=null,Ds=null,zu=!1;function jh(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zu||vr==null||vr!==Yn(r)||(r=vr,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&ws(Ds,r)||(Ds=r,r=yl(Pu,"onSelect"),0<r.length&&(n=new Po("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=vr)))}function Pa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Sr={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Bu={},Kh={};Mi&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function za(t){if(Bu[t])return Bu[t];if(!Sr[t])return t;var n=Sr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return Bu[t]=n[a];return t}var Qh=za("animationend"),Jh=za("animationiteration"),$h=za("animationstart"),t0=za("transitionrun"),e0=za("transitionstart"),n0=za("transitioncancel"),td=za("transitionend"),ed=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function ai(t,n){ed.set(t,n),$(n,[t])}var nd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=nd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Be(n)},nd.set(t,n),n)}return{value:t,source:n,stack:Be(n)}}var jn=[],xr=0,Fu=0;function Io(){for(var t=xr,n=Fu=xr=0;n<t;){var a=jn[n];jn[n++]=null;var r=jn[n];jn[n++]=null;var u=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,r!==null&&u!==null){var M=r.pending;M===null?u.next=u:(u.next=M.next,M.next=u),r.pending=u}f!==0&&id(a,u,f)}}function Fo(t,n,a,r){jn[xr++]=t,jn[xr++]=n,jn[xr++]=a,jn[xr++]=r,Fu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Hu(t,n,a,r){return Fo(t,n,a,r),Ho(t)}function Mr(t,n){return Fo(t,null,null,n),Ho(t)}function id(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ht(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ho(t){if(50<eo)throw eo=0,qc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var yr={};function i0(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,n,a,r){return new i0(t,n,a,r)}function Gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yi(t,n){var a=t.alternate;return a===null?(a=Bn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ad(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Go(t,n,a,r,u,f){var M=0;if(r=t,typeof t=="function")Gu(t)&&(M=1);else if(typeof t=="string")M=rS(t,a,nt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Bn(31,a,n,u),t.elementType=D,t.lanes=f,t;case b:return Ba(a.children,u,f,n);case T:M=8,u|=24;break;case x:return t=Bn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case V:return t=Bn(13,a,n,u),t.elementType=V,t.lanes=f,t;case I:return t=Bn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case w:M=10;break t;case L:M=9;break t;case O:M=11;break t;case B:M=14;break t;case dt:M=16,r=null;break t}M=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Bn(M,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Ba(t,n,a,r){return t=Bn(7,t,r,n),t.lanes=a,t}function Vu(t,n,a){return t=Bn(6,t,null,n),t.lanes=a,t}function Xu(t,n,a){return n=Bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Er=[],Tr=0,Vo=null,Xo=0,Kn=[],Qn=0,Ia=null,Ei=1,Ti="";function Fa(t,n){Er[Tr++]=Xo,Er[Tr++]=Vo,Vo=t,Xo=n}function rd(t,n,a){Kn[Qn++]=Ei,Kn[Qn++]=Ti,Kn[Qn++]=Ia,Ia=t;var r=Ei;t=Ti;var u=32-Ht(r)-1;r&=~(1<<u),a+=1;var f=32-Ht(n)+u;if(30<f){var M=u-u%5;f=(r&(1<<M)-1).toString(32),r>>=M,u-=M,Ei=1<<32-Ht(n)+u|a<<u|r,Ti=f+t}else Ei=1<<f|a<<u|r,Ti=t}function Wu(t){t.return!==null&&(Fa(t,1),rd(t,1,0))}function ku(t){for(;t===Vo;)Vo=Er[--Tr],Er[Tr]=null,Xo=Er[--Tr],Er[Tr]=null;for(;t===Ia;)Ia=Kn[--Qn],Kn[Qn]=null,Ti=Kn[--Qn],Kn[Qn]=null,Ei=Kn[--Qn],Kn[Qn]=null}var bn=null,Xe=null,ye=!1,Ha=null,di=!1,qu=Error(s(519));function Ga(t){var n=Error(s(418,""));throw Ns(Zn(n,t)),qu}function sd(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ve]=t,n[ze]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<io.length;a++)de(io[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Do(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Qi(n);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Eh(n,r.value,r.defaultValue,r.children),Qi(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Em(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=El),n=!0):n=!1,n||Ga(t)}function od(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:bn=bn.return}}function Us(t){if(t!==bn)return!1;if(!ye)return od(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||uf(t.type,t.memoizedProps)),a=!a),a&&Xe&&Ga(t),od(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Xe=si(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Xe=null}}else n===27?(n=Xe,pa(t.type)?(t=df,df=null,Xe=t):Xe=n):Xe=bn?si(t.stateNode.nextSibling):null;return!0}function Ls(){Xe=bn=null,ye=!1}function ld(){var t=Ha;return t!==null&&(Un===null?Un=t:Un.push.apply(Un,t),Ha=null),t}function Ns(t){Ha===null?Ha=[t]:Ha.push(t)}var Yu=X(null),Va=null,bi=null;function $i(t,n,a){G(Yu,n._currentValue),n._currentValue=a}function Ai(t){t._currentValue=Yu.current,et(Yu)}function Zu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Zu(f.return,a,t),r||(M=null);break t}f=E.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Zu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Os(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var E=u.type;zn(u.pendingProps.value,M.value)||(t!==null?t.push(E):t=[E])}}else if(u===Dt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(uo):t=[uo])}u=u.return}t!==null&&ju(n,t,a,r),n.flags|=262144}function Wo(t){for(t=t.firstContext;t!==null;){if(!zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xa(t){Va=t,bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return ud(Va,t)}function ko(t,n){return Va===null&&Xa(t),ud(t,n)}function ud(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},bi===null){if(t===null)throw Error(s(308));bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else bi=bi.next=n;return a}var a0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},r0=o.unstable_scheduleCallback,s0=o.unstable_NormalPriority,en={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new a0,data:new Map,refCount:0}}function Ps(t){t.refCount--,t.refCount===0&&r0(s0,function(){t.controller.abort()})}var zs=null,Qu=0,br=0,Ar=null;function o0(t,n){if(zs===null){var a=zs=[];Qu=0,br=$c(),Ar={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Qu++,n.then(cd,cd),n}function cd(){if(--Qu===0&&zs!==null){Ar!==null&&(Ar.status="fulfilled");var t=zs;zs=null,br=0,Ar=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function l0(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var fd=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&o0(t,n),fd!==null&&fd(t,n)};var Wa=X(null);function Ju(){var t=Wa.current;return t!==null?t:Pe.pooledCache}function qo(t,n){n===null?G(Wa,Wa.current):G(Wa,n.pool)}function hd(){var t=Ju();return t===null?null:{parent:en._currentValue,pool:t}}var Bs=Error(s(460)),dd=Error(s(474)),Yo=Error(s(542)),$u={then:function(){}};function pd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zo(){}function md(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zo,Zo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_d(t),t;default:if(typeof n.status=="string")n.then(Zo,Zo);else{if(t=Pe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,_d(t),t}throw Is=n,Bs}}var Is=null;function gd(){if(Is===null)throw Error(s(459));var t=Is;return Is=null,t}function _d(t){if(t===Bs||t===Yo)throw Error(s(483))}var ta=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ec(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function na(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Ho(t),id(t,null,a),n}return Fo(t,r,n,a),Ho(t)}function Fs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gt(t,a)}}function nc(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ic=!1;function Hs(){if(ic){var t=Ar;if(t!==null)throw t}}function Gs(t,n,a,r){ic=!1;var u=t.updateQueue;ta=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,j=z.next;z.next=null,M===null?f=j:M.next=j,M=z;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==M&&(E===null?ft.firstBaseUpdate=j:E.next=j,ft.lastBaseUpdate=z))}if(f!==null){var pt=u.baseState;M=0,ft=j=z=null,E=f;do{var Q=E.lane&-536870913,tt=Q!==E.lane;if(tt?(_e&Q)===Q:(r&Q)===Q){Q!==0&&Q===br&&(ic=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Kt=t,Xt=E;Q=n;var De=a;switch(Xt.tag){case 1:if(Kt=Xt.payload,typeof Kt=="function"){pt=Kt.call(De,pt,Q);break t}pt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=Xt.payload,Q=typeof Kt=="function"?Kt.call(De,pt,Q):Kt,Q==null)break t;pt=g({},pt,Q);break t;case 2:ta=!0}}Q=E.callback,Q!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[Q]:tt.push(Q))}else tt={lane:Q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?(j=ft=tt,z=pt):ft=ft.next=tt,M|=Q;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);ft===null&&(z=pt),u.baseState=z,u.firstBaseUpdate=j,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),ca|=M,t.lanes=M,t.memoizedState=pt}}function vd(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Sd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vd(a[t],n)}var Rr=X(null),jo=X(0);function xd(t,n){t=Ni,G(jo,t),G(Rr,n),Ni=t|n.baseLanes}function ac(){G(jo,Ni),G(Rr,Rr.current)}function rc(){Ni=jo.current,et(Rr),et(jo)}var ia=0,le=null,Ce=null,Ke=null,Ko=!1,Cr=!1,ka=!1,Qo=0,Vs=0,wr=null,u0=0;function Ye(){throw Error(s(321))}function sc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!zn(t[a],n[a]))return!1;return!0}function oc(t,n,a,r,u,f){return ia=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?ip:ap,ka=!1,f=a(r,u),ka=!1,Cr&&(f=yd(n,a,r,u)),Md(t),f}function Md(t){P.H=il;var n=Ce!==null&&Ce.next!==null;if(ia=0,Ke=Ce=le=null,Ko=!1,Vs=0,wr=null,n)throw Error(s(300));t===null||sn||(t=t.dependencies,t!==null&&Wo(t)&&(sn=!0))}function yd(t,n,a,r){le=t;var u=0;do{if(Cr&&(wr=null),Vs=0,Cr=!1,25<=u)throw Error(s(301));if(u+=1,Ke=Ce=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=g0,f=n(a,r)}while(Cr);return f}function c0(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Xs(n):n,t=t.useState()[0],(Ce!==null?Ce.memoizedState:null)!==t&&(le.flags|=1024),n}function lc(){var t=Qo!==0;return Qo=0,t}function uc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function cc(t){if(Ko){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ko=!1}ia=0,Ke=Ce=le=null,Cr=!1,Vs=Qo=0,wr=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?le.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Qe(){if(Ce===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var n=Ke===null?le.memoizedState:Ke.next;if(n!==null)Ke=n,Ce=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ke===null?le.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xs(t){var n=Vs;return Vs+=1,wr===null&&(wr=[]),t=md(wr,t,n),n=le,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ip:ap),t}function Jo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xs(t);if(t.$$typeof===w)return Mn(t)}throw Error(s(438,String(t)))}function hc(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=N;return n.index++,a}function Ri(t,n){return typeof n=="function"?n(t):n}function $o(t){var n=Qe();return dc(n,Ce,t)}function dc(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=M=null,z=null,j=n,ft=!1;do{var pt=j.lane&-536870913;if(pt!==j.lane?(_e&pt)===pt:(ia&pt)===pt){var Q=j.revertLane;if(Q===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),pt===br&&(ft=!0);else if((ia&Q)===Q){j=j.next,Q===br&&(ft=!0);continue}else pt={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(E=z=pt,M=f):z=z.next=pt,le.lanes|=Q,ca|=Q;pt=j.action,ka&&a(f,pt),f=j.hasEagerState?j.eagerState:a(f,pt)}else Q={lane:pt,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},z===null?(E=z=Q,M=f):z=z.next=Q,le.lanes|=pt,ca|=pt;j=j.next}while(j!==null&&j!==n);if(z===null?M=f:z.next=E,!zn(f,t.memoizedState)&&(sn=!0,ft&&(a=Ar,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function pc(t){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=t(f,M.action),M=M.next;while(M!==u);zn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Ed(t,n,a){var r=le,u=Qe(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!zn((Ce||u).memoizedState,a);M&&(u.memoizedState=a,sn=!0),u=u.queue;var E=Ad.bind(null,r,u,t);if(Ws(2048,8,E,[t]),u.getSnapshot!==n||M||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Dr(9,tl(),bd.bind(null,r,u,a,n),null),Pe===null)throw Error(s(349));f||(ia&124)!==0||Td(r,n,a)}return a}function Td(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=fc(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bd(t,n,a,r){n.value=a,n.getSnapshot=r,Rd(n)&&Cd(t)}function Ad(t,n,a){return a(function(){Rd(n)&&Cd(t)})}function Rd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!zn(t,a)}catch{return!0}}function Cd(t){var n=Mr(t,2);n!==null&&Vn(n,t,2)}function mc(t){var n=wn();if(typeof t=="function"){var a=t;if(t=a(),ka){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:t},n}function wd(t,n,a,r){return t.baseState=a,dc(t,Ce,typeof r=="function"?r:Ri)}function f0(t,n,a,r,u){if(nl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Dd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dd(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=P.T,M={};P.T=M;try{var E=a(u,r),z=P.S;z!==null&&z(M,E),Ud(t,n,E)}catch(j){gc(t,n,j)}finally{P.T=f}}else try{f=a(u,r),Ud(t,n,f)}catch(j){gc(t,n,j)}}function Ud(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Ld(t,n,r)},function(r){return gc(t,n,r)}):Ld(t,n,a)}function Ld(t,n,a){n.status="fulfilled",n.value=a,Nd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Dd(t,a)))}function gc(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Nd(n),n=n.next;while(n!==r)}t.action=null}function Nd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Od(t,n){return n}function Pd(t,n){if(ye){var a=Pe.formState;if(a!==null){t:{var r=le;if(ye){if(Xe){e:{for(var u=Xe,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=si(u.nextSibling),r=u.data==="F!";break t}}Ga(r)}r=!1}r&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Od,lastRenderedState:n},a.queue=r,a=tp.bind(null,le,r),r.dispatch=a,r=mc(!1),f=Mc.bind(null,le,!1,r.queue),r=wn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=f0.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function zd(t){var n=Qe();return Bd(n,Ce,t)}function Bd(t,n,a){if(n=dc(t,n,Od)[0],t=$o(Ri)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Xs(n)}catch(M){throw M===Bs?Yo:M}else r=n;n=Qe();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Dr(9,tl(),h0.bind(null,u,a),null)),[r,f,t]}function h0(t,n){t.action=n}function Id(t){var n=Qe(),a=Ce;if(a!==null)return Bd(n,a,t);Qe(),n=n.memoizedState,a=Qe();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Dr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=fc(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function tl(){return{destroy:void 0,resource:void 0}}function Fd(){return Qe().memoizedState}function el(t,n,a,r){var u=wn();r=r===void 0?null:r,le.flags|=t,u.memoizedState=Dr(1|n,tl(),a,r)}function Ws(t,n,a,r){var u=Qe();r=r===void 0?null:r;var f=u.memoizedState.inst;Ce!==null&&r!==null&&sc(r,Ce.memoizedState.deps)?u.memoizedState=Dr(n,f,a,r):(le.flags|=t,u.memoizedState=Dr(1|n,f,a,r))}function Hd(t,n){el(8390656,8,t,n)}function Gd(t,n){Ws(2048,8,t,n)}function Vd(t,n){return Ws(4,2,t,n)}function Xd(t,n){return Ws(4,4,t,n)}function Wd(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kd(t,n,a){a=a!=null?a.concat([t]):null,Ws(4,4,Wd.bind(null,n,t),a)}function _c(){}function qd(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&sc(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Yd(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&sc(n,r[1]))return r[0];if(r=t(),ka){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[r,n],r}function vc(t,n,a){return a===void 0||(ia&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Kp(),le.lanes|=t,ca|=t,a)}function Zd(t,n,a,r){return zn(a,n)?a:Rr.current!==null?(t=vc(t,a,r),zn(t,n)||(sn=!0),t):(ia&42)===0?(sn=!0,t.memoizedState=a):(t=Kp(),le.lanes|=t,ca|=t,n)}function jd(t,n,a,r,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var M=P.T,E={};P.T=E,Mc(t,!1,n,a);try{var z=u(),j=P.S;if(j!==null&&j(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=l0(z,r);ks(t,n,ft,Gn(t))}else ks(t,n,r,Gn(t))}catch(pt){ks(t,n,{then:function(){},status:"rejected",reason:pt},Gn())}finally{Y.p=f,P.T=M}}function d0(){}function Sc(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Kd(t).queue;jd(t,u,n,K,a===null?d0:function(){return Qd(t),a(r)})}function Kd(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qd(t){var n=Kd(t).next.queue;ks(t,n,{},Gn())}function xc(){return Mn(uo)}function Jd(){return Qe().memoizedState}function $d(){return Qe().memoizedState}function p0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Gn();t=ea(a);var r=na(n,t,a);r!==null&&(Vn(r,n,a),Fs(r,n,a)),n={cache:Ku()},t.payload=n;return}n=n.return}}function m0(t,n,a){var r=Gn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},nl(t)?ep(n,a):(a=Hu(t,n,a,r),a!==null&&(Vn(a,t,r),np(a,n,r)))}function tp(t,n,a){var r=Gn();ks(t,n,a,r)}function ks(t,n,a,r){var u={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(nl(t))ep(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,E=f(M,a);if(u.hasEagerState=!0,u.eagerState=E,zn(E,M))return Fo(t,n,u,0),Pe===null&&Io(),!1}catch{}finally{}if(a=Hu(t,n,u,r),a!==null)return Vn(a,t,r),np(a,n,r),!0}return!1}function Mc(t,n,a,r){if(r={lane:2,revertLane:$c(),action:r,hasEagerState:!1,eagerState:null,next:null},nl(t)){if(n)throw Error(s(479))}else n=Hu(t,a,r,2),n!==null&&Vn(n,t,2)}function nl(t){var n=t.alternate;return t===le||n!==null&&n===le}function ep(t,n){Cr=Ko=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function np(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gt(t,a)}}var il={readContext:Mn,use:Jo,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},ip={readContext:Mn,use:Jo,useCallback:function(t,n){return wn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Hd,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,el(4194308,4,Wd.bind(null,n,t),a)},useLayoutEffect:function(t,n){return el(4194308,4,t,n)},useInsertionEffect:function(t,n){el(4,2,t,n)},useMemo:function(t,n){var a=wn();n=n===void 0?null:n;var r=t();if(ka){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=wn();if(a!==void 0){var u=a(n);if(ka){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=m0.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=wn();return t={current:t},n.memoizedState=t},useState:function(t){t=mc(t);var n=t.queue,a=tp.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_c,useDeferredValue:function(t,n){var a=wn();return vc(a,t,n)},useTransition:function(){var t=mc(!1);return t=jd.bind(null,le,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,u=wn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Pe===null)throw Error(s(349));(_e&124)!==0||Td(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Hd(Ad.bind(null,r,f,t),[t]),r.flags|=2048,Dr(9,tl(),bd.bind(null,r,f,a,n),null),a},useId:function(){var t=wn(),n=Pe.identifierPrefix;if(ye){var a=Ti,r=Ei;a=(r&~(1<<32-Ht(r)-1)).toString(32)+a,n="«"+n+"R"+a,a=Qo++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=u0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:xc,useFormState:Pd,useActionState:Pd,useOptimistic:function(t){var n=wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mc.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:hc,useCacheRefresh:function(){return wn().memoizedState=p0.bind(null,le)}},ap={readContext:Mn,use:Jo,useCallback:qd,useContext:Mn,useEffect:Gd,useImperativeHandle:kd,useInsertionEffect:Vd,useLayoutEffect:Xd,useMemo:Yd,useReducer:$o,useRef:Fd,useState:function(){return $o(Ri)},useDebugValue:_c,useDeferredValue:function(t,n){var a=Qe();return Zd(a,Ce.memoizedState,t,n)},useTransition:function(){var t=$o(Ri)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Ed,useId:Jd,useHostTransitionStatus:xc,useFormState:zd,useActionState:zd,useOptimistic:function(t,n){var a=Qe();return wd(a,Ce,t,n)},useMemoCache:hc,useCacheRefresh:$d},g0={readContext:Mn,use:Jo,useCallback:qd,useContext:Mn,useEffect:Gd,useImperativeHandle:kd,useInsertionEffect:Vd,useLayoutEffect:Xd,useMemo:Yd,useReducer:pc,useRef:Fd,useState:function(){return pc(Ri)},useDebugValue:_c,useDeferredValue:function(t,n){var a=Qe();return Ce===null?vc(a,t,n):Zd(a,Ce.memoizedState,t,n)},useTransition:function(){var t=pc(Ri)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Xs(t),n]},useSyncExternalStore:Ed,useId:Jd,useHostTransitionStatus:xc,useFormState:Id,useActionState:Id,useOptimistic:function(t,n){var a=Qe();return Ce!==null?wd(a,Ce,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hc,useCacheRefresh:$d},Ur=null,qs=0;function al(t){var n=qs;return qs+=1,Ur===null&&(Ur=[]),md(Ur,t,n)}function Ys(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function rl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rp(t){var n=t._init;return n(t._payload)}function sp(t){function n(q,H){if(t){var Z=q.deletions;Z===null?(q.deletions=[H],q.flags|=16):Z.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function r(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function u(q,H){return q=yi(q,H),q.index=0,q.sibling=null,q}function f(q,H,Z){return q.index=Z,t?(Z=q.alternate,Z!==null?(Z=Z.index,Z<H?(q.flags|=67108866,H):Z):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,H,Z,ht){return H===null||H.tag!==6?(H=Vu(Z,q.mode,ht),H.return=q,H):(H=u(H,Z),H.return=q,H)}function z(q,H,Z,ht){var Lt=Z.type;return Lt===b?ft(q,H,Z.props.children,ht,Z.key):H!==null&&(H.elementType===Lt||typeof Lt=="object"&&Lt!==null&&Lt.$$typeof===dt&&rp(Lt)===H.type)?(H=u(H,Z.props),Ys(H,Z),H.return=q,H):(H=Go(Z.type,Z.key,Z.props,null,q.mode,ht),Ys(H,Z),H.return=q,H)}function j(q,H,Z,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==Z.containerInfo||H.stateNode.implementation!==Z.implementation?(H=Xu(Z,q.mode,ht),H.return=q,H):(H=u(H,Z.children||[]),H.return=q,H)}function ft(q,H,Z,ht,Lt){return H===null||H.tag!==7?(H=Ba(Z,q.mode,ht,Lt),H.return=q,H):(H=u(H,Z),H.return=q,H)}function pt(q,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Vu(""+H,q.mode,Z),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return Z=Go(H.type,H.key,H.props,null,q.mode,Z),Ys(Z,H),Z.return=q,Z;case y:return H=Xu(H,q.mode,Z),H.return=q,H;case dt:var ht=H._init;return H=ht(H._payload),pt(q,H,Z)}if(J(H)||ct(H))return H=Ba(H,q.mode,Z,null),H.return=q,H;if(typeof H.then=="function")return pt(q,al(H),Z);if(H.$$typeof===w)return pt(q,ko(q,H),Z);rl(q,H)}return null}function Q(q,H,Z,ht){var Lt=H!==null?H.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Lt!==null?null:E(q,H,""+Z,ht);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return Z.key===Lt?z(q,H,Z,ht):null;case y:return Z.key===Lt?j(q,H,Z,ht):null;case dt:return Lt=Z._init,Z=Lt(Z._payload),Q(q,H,Z,ht)}if(J(Z)||ct(Z))return Lt!==null?null:ft(q,H,Z,ht,null);if(typeof Z.then=="function")return Q(q,H,al(Z),ht);if(Z.$$typeof===w)return Q(q,H,ko(q,Z),ht);rl(q,Z)}return null}function tt(q,H,Z,ht,Lt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(Z)||null,E(H,q,""+ht,Lt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case S:return q=q.get(ht.key===null?Z:ht.key)||null,z(H,q,ht,Lt);case y:return q=q.get(ht.key===null?Z:ht.key)||null,j(H,q,ht,Lt);case dt:var ce=ht._init;return ht=ce(ht._payload),tt(q,H,Z,ht,Lt)}if(J(ht)||ct(ht))return q=q.get(Z)||null,ft(H,q,ht,Lt,null);if(typeof ht.then=="function")return tt(q,H,Z,al(ht),Lt);if(ht.$$typeof===w)return tt(q,H,Z,ko(H,ht),Lt);rl(H,ht)}return null}function Kt(q,H,Z,ht){for(var Lt=null,ce=null,zt=H,kt=H=0,ln=null;zt!==null&&kt<Z.length;kt++){zt.index>kt?(ln=zt,zt=null):ln=zt.sibling;var Se=Q(q,zt,Z[kt],ht);if(Se===null){zt===null&&(zt=ln);break}t&&zt&&Se.alternate===null&&n(q,zt),H=f(Se,H,kt),ce===null?Lt=Se:ce.sibling=Se,ce=Se,zt=ln}if(kt===Z.length)return a(q,zt),ye&&Fa(q,kt),Lt;if(zt===null){for(;kt<Z.length;kt++)zt=pt(q,Z[kt],ht),zt!==null&&(H=f(zt,H,kt),ce===null?Lt=zt:ce.sibling=zt,ce=zt);return ye&&Fa(q,kt),Lt}for(zt=r(zt);kt<Z.length;kt++)ln=tt(zt,q,kt,Z[kt],ht),ln!==null&&(t&&ln.alternate!==null&&zt.delete(ln.key===null?kt:ln.key),H=f(ln,H,kt),ce===null?Lt=ln:ce.sibling=ln,ce=ln);return t&&zt.forEach(function(Sa){return n(q,Sa)}),ye&&Fa(q,kt),Lt}function Xt(q,H,Z,ht){if(Z==null)throw Error(s(151));for(var Lt=null,ce=null,zt=H,kt=H=0,ln=null,Se=Z.next();zt!==null&&!Se.done;kt++,Se=Z.next()){zt.index>kt?(ln=zt,zt=null):ln=zt.sibling;var Sa=Q(q,zt,Se.value,ht);if(Sa===null){zt===null&&(zt=ln);break}t&&zt&&Sa.alternate===null&&n(q,zt),H=f(Sa,H,kt),ce===null?Lt=Sa:ce.sibling=Sa,ce=Sa,zt=ln}if(Se.done)return a(q,zt),ye&&Fa(q,kt),Lt;if(zt===null){for(;!Se.done;kt++,Se=Z.next())Se=pt(q,Se.value,ht),Se!==null&&(H=f(Se,H,kt),ce===null?Lt=Se:ce.sibling=Se,ce=Se);return ye&&Fa(q,kt),Lt}for(zt=r(zt);!Se.done;kt++,Se=Z.next())Se=tt(zt,q,kt,Se.value,ht),Se!==null&&(t&&Se.alternate!==null&&zt.delete(Se.key===null?kt:Se.key),H=f(Se,H,kt),ce===null?Lt=Se:ce.sibling=Se,ce=Se);return t&&zt.forEach(function(_S){return n(q,_S)}),ye&&Fa(q,kt),Lt}function De(q,H,Z,ht){if(typeof Z=="object"&&Z!==null&&Z.type===b&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:t:{for(var Lt=Z.key;H!==null;){if(H.key===Lt){if(Lt=Z.type,Lt===b){if(H.tag===7){a(q,H.sibling),ht=u(H,Z.props.children),ht.return=q,q=ht;break t}}else if(H.elementType===Lt||typeof Lt=="object"&&Lt!==null&&Lt.$$typeof===dt&&rp(Lt)===H.type){a(q,H.sibling),ht=u(H,Z.props),Ys(ht,Z),ht.return=q,q=ht;break t}a(q,H);break}else n(q,H);H=H.sibling}Z.type===b?(ht=Ba(Z.props.children,q.mode,ht,Z.key),ht.return=q,q=ht):(ht=Go(Z.type,Z.key,Z.props,null,q.mode,ht),Ys(ht,Z),ht.return=q,q=ht)}return M(q);case y:t:{for(Lt=Z.key;H!==null;){if(H.key===Lt)if(H.tag===4&&H.stateNode.containerInfo===Z.containerInfo&&H.stateNode.implementation===Z.implementation){a(q,H.sibling),ht=u(H,Z.children||[]),ht.return=q,q=ht;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ht=Xu(Z,q.mode,ht),ht.return=q,q=ht}return M(q);case dt:return Lt=Z._init,Z=Lt(Z._payload),De(q,H,Z,ht)}if(J(Z))return Kt(q,H,Z,ht);if(ct(Z)){if(Lt=ct(Z),typeof Lt!="function")throw Error(s(150));return Z=Lt.call(Z),Xt(q,H,Z,ht)}if(typeof Z.then=="function")return De(q,H,al(Z),ht);if(Z.$$typeof===w)return De(q,H,ko(q,Z),ht);rl(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,H!==null&&H.tag===6?(a(q,H.sibling),ht=u(H,Z),ht.return=q,q=ht):(a(q,H),ht=Vu(Z,q.mode,ht),ht.return=q,q=ht),M(q)):a(q,H)}return function(q,H,Z,ht){try{qs=0;var Lt=De(q,H,Z,ht);return Ur=null,Lt}catch(zt){if(zt===Bs||zt===Yo)throw zt;var ce=Bn(29,zt,null,q.mode);return ce.lanes=ht,ce.return=q,ce}finally{}}}var Lr=sp(!0),op=sp(!1),Jn=X(null),pi=null;function aa(t){var n=t.alternate;G(nn,nn.current&1),G(Jn,t),pi===null&&(n===null||Rr.current!==null||n.memoizedState!==null)&&(pi=t)}function lp(t){if(t.tag===22){if(G(nn,nn.current),G(Jn,t),pi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(pi=t)}}else ra()}function ra(){G(nn,nn.current),G(Jn,Jn.current)}function Ci(t){et(Jn),pi===t&&(pi=null),et(nn)}var nn=X(0);function sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function yc(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ec={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=Gn(),u=ea(r);u.payload=n,a!=null&&(u.callback=a),n=na(t,u,r),n!==null&&(Vn(n,t,r),Fs(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=Gn(),u=ea(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=na(t,u,r),n!==null&&(Vn(n,t,r),Fs(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Gn(),r=ea(a);r.tag=2,n!=null&&(r.callback=n),n=na(t,r,a),n!==null&&(Vn(n,t,a),Fs(n,t,a))}};function up(t,n,a,r,u,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,M):n.prototype&&n.prototype.isPureReactComponent?!ws(a,r)||!ws(u,f):!0}function cp(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ec.enqueueReplaceState(n,n.state,null)}function qa(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function fp(t){ol(t)}function hp(t){console.error(t)}function dp(t){ol(t)}function ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function pp(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tc(t,n,a){return a=ea(a),a.tag=3,a.payload={element:null},a.callback=function(){ll(t,n)},a}function mp(t){return t=ea(t),t.tag=3,t}function gp(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){pp(n,a,r)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){pp(n,a,r),typeof u!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function _0(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Os(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return pi===null?Zc():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===$u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Kc(t,r,u)),!1;case 22:return a.flags|=65536,r===$u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Kc(t,r,u)),!1}throw Error(s(435,a.tag))}return Kc(t,r,u),Zc(),!1}if(ye)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==qu&&(t=Error(s(422),{cause:r}),Ns(Zn(t,a)))):(r!==qu&&(n=Error(s(423),{cause:r}),Ns(Zn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=Zn(r,a),u=Tc(t.stateNode,r,u),nc(t,u),We!==4&&(We=2)),!1;var f=Error(s(520),{cause:r});if(f=Zn(f,a),to===null?to=[f]:to.push(f),We!==4&&(We=2),n===null)return!0;r=Zn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tc(a.stateNode,r,t),nc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(fa===null||!fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mp(u),gp(u,t,a,r),nc(a,u),!1}a=a.return}while(a!==null);return!1}var _p=Error(s(461)),sn=!1;function dn(t,n,a,r){n.child=t===null?op(n,null,a,r):Lr(n,t.child,a,r)}function vp(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var M={};for(var E in r)E!=="ref"&&(M[E]=r[E])}else M=r;return Xa(n),r=oc(t,n,a,M,f,u),E=lc(),t!==null&&!sn?(uc(t,n,u),wi(t,n,u)):(ye&&E&&Wu(n),n.flags|=1,dn(t,n,r,u),n.child)}function Sp(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,xp(t,n,f,r,u)):(t=Go(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lc(t,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(M,r)&&t.ref===n.ref)return wi(t,n,u)}return n.flags|=1,t=yi(f,r),t.ref=n.ref,t.return=n,n.child=t}function xp(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(ws(f,r)&&t.ref===n.ref)if(sn=!1,n.pendingProps=r=f,Lc(t,u))(t.flags&131072)!==0&&(sn=!0);else return n.lanes=t.lanes,wi(t,n,u)}return bc(t,n,a,r,u)}function Mp(t,n,a){var r=n.pendingProps,u=r.children,f=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return yp(t,n,r,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&qo(n,f!==null?f.cachePool:null),f!==null?xd(n,f):ac(),lp(n);else return n.lanes=n.childLanes=536870912,yp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(qo(n,f.cachePool),xd(n,f),ra(),n.memoizedState=null):(t!==null&&qo(n,null),ac(),ra());return dn(t,n,u,a),n.child}function yp(t,n,a,r){var u=Ju();return u=u===null?null:{parent:en._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&qo(n,null),ac(),lp(n),t!==null&&Os(t,n,r,!0),null}function ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function bc(t,n,a,r,u){return Xa(n),a=oc(t,n,a,r,void 0,u),r=lc(),t!==null&&!sn?(uc(t,n,u),wi(t,n,u)):(ye&&r&&Wu(n),n.flags|=1,dn(t,n,a,u),n.child)}function Ep(t,n,a,r,u,f){return Xa(n),n.updateQueue=null,a=yd(n,r,a,u),Md(t),r=lc(),t!==null&&!sn?(uc(t,n,f),wi(t,n,f)):(ye&&r&&Wu(n),n.flags|=1,dn(t,n,a,f),n.child)}function Tp(t,n,a,r,u){if(Xa(n),n.stateNode===null){var f=yr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Mn(M)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ec,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},tc(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Mn(M):yr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(yc(n,a,M,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Ec.enqueueReplaceState(f,f.state,null),Gs(n,r,f,u),Hs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=qa(a,E);f.props=z;var j=f.context,ft=a.contextType;M=yr,typeof ft=="object"&&ft!==null&&(M=Mn(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||j!==M)&&cp(n,f,r,M),ta=!1;var Q=n.memoizedState;f.state=Q,Gs(n,r,f,u),Hs(),j=n.memoizedState,E||Q!==j||ta?(typeof pt=="function"&&(yc(n,a,pt,r),j=n.memoizedState),(z=ta||up(n,a,z,r,Q,j,M))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),f.props=r,f.state=j,f.context=M,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,ec(t,n),M=n.memoizedProps,ft=qa(a,M),f.props=ft,pt=n.pendingProps,Q=f.context,j=a.contextType,z=yr,typeof j=="object"&&j!==null&&(z=Mn(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==pt||Q!==z)&&cp(n,f,r,z),ta=!1,Q=n.memoizedState,f.state=Q,Gs(n,r,f,u),Hs();var tt=n.memoizedState;M!==pt||Q!==tt||ta||t!==null&&t.dependencies!==null&&Wo(t.dependencies)?(typeof E=="function"&&(yc(n,a,E,r),tt=n.memoizedState),(ft=ta||up(n,a,ft,r,Q,tt,z)||t!==null&&t.dependencies!==null&&Wo(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,tt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,tt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=z,r=ft):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&Q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&Q===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,ul(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Lr(n,t.child,null,u),n.child=Lr(n,null,a,u)):dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=wi(t,n,u),t}function bp(t,n,a,r){return Ls(),n.flags|=256,dn(t,n,a,r),n.child}var Ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(t){return{baseLanes:t,cachePool:hd()}}function Cc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function Ap(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?aa(n):ra(),ye){var E=Xe,z;if(z=E){t:{for(z=E,E=di;z.nodeType!==8;){if(!E){E=null;break t}if(z=si(z.nextSibling),z===null){E=null;break t}}E=z}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ia!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},z=Bn(18,null,null,0),z.stateNode=E,z.return=n,n.child=z,bn=n,Xe=null,z=!0):z=!1}z||Ga(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return hf(E)?n.lanes=32:n.lanes=536870912,null;Ci(n)}return E=r.children,r=r.fallback,u?(ra(),u=n.mode,E=cl({mode:"hidden",children:E},u),r=Ba(r,u,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,u=n.child,u.memoizedState=Rc(a),u.childLanes=Cc(t,M,a),n.memoizedState=Ac,r):(aa(n),wc(n,E))}if(z=t.memoizedState,z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(aa(n),n.flags&=-257,n=Dc(t,n,a)):n.memoizedState!==null?(ra(),n.child=t.child,n.flags|=128,n=null):(ra(),u=r.fallback,E=n.mode,r=cl({mode:"visible",children:r.children},E),u=Ba(u,E,a,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,Lr(n,t.child,null,a),r=n.child,r.memoizedState=Rc(a),r.childLanes=Cc(t,M,a),n.memoizedState=Ac,n=u);else if(aa(n),hf(E)){if(M=E.nextSibling&&E.nextSibling.dataset,M)var j=M.dgst;M=j,r=Error(s(419)),r.stack="",r.digest=M,Ns({value:r,source:null,stack:null}),n=Dc(t,n,a)}else if(sn||Os(t,n,a,!1),M=(a&t.childLanes)!==0,sn||M){if(M=Pe,M!==null&&(r=a&-a,r=(r&42)!==0?1:Te(r),r=(r&(M.suspendedLanes|a))!==0?0:r,r!==0&&r!==z.retryLane))throw z.retryLane=r,Mr(t,r),Vn(M,t,r),_p;E.data==="$?"||Zc(),n=Dc(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Xe=si(E.nextSibling),bn=n,ye=!0,Ha=null,di=!1,t!==null&&(Kn[Qn++]=Ei,Kn[Qn++]=Ti,Kn[Qn++]=Ia,Ei=t.id,Ti=t.overflow,Ia=n),n=wc(n,r.children),n.flags|=4096);return n}return u?(ra(),u=r.fallback,E=n.mode,z=t.child,j=z.sibling,r=yi(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,j!==null?u=yi(j,u):(u=Ba(u,E,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,E=t.child.memoizedState,E===null?E=Rc(a):(z=E.cachePool,z!==null?(j=en._currentValue,z=z.parent!==j?{parent:j,pool:j}:z):z=hd(),E={baseLanes:E.baseLanes|a,cachePool:z}),u.memoizedState=E,u.childLanes=Cc(t,M,a),n.memoizedState=Ac,r):(aa(n),a=t.child,t=a.sibling,a=yi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function wc(t,n){return n=cl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function cl(t,n){return t=Bn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Dc(t,n,a){return Lr(n,t.child,null,a),t=wc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rp(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Zu(t.return,n,a)}function Uc(t,n,a,r,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=u)}function Cp(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;if(dn(t,n,r.children,a),r=nn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,a,n);else if(t.tag===19)Rp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(G(nn,r),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uc(n,!0,a,null,f);break;case"together":Uc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wo(t)))}function v0(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),$i(n,en,t.memoizedState.cache),Ls();break;case 27:case 5:Wt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:$i(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ap(t,n,a):(aa(n),t=wi(t,n,a),t!==null?t.sibling:null);aa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Os(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Cp(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(nn,nn.current),r)break;return null;case 22:case 23:return n.lanes=0,Mp(t,n,a);case 24:$i(n,en,t.memoizedState.cache)}return wi(t,n,a)}function wp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)sn=!0;else{if(!Lc(t,a)&&(n.flags&128)===0)return sn=!1,v0(t,n,a);sn=(t.flags&131072)!==0}else sn=!1,ye&&(n.flags&1048576)!==0&&rd(n,Xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var r=n.elementType,u=r._init;if(r=u(r._payload),n.type=r,typeof r=="function")Gu(r)?(t=qa(r,t),n.tag=1,n=Tp(null,n,r,t,a)):(n.tag=0,n=bc(null,n,r,t,a));else{if(r!=null){if(u=r.$$typeof,u===O){n.tag=11,n=vp(null,n,r,t,a);break t}else if(u===B){n.tag=14,n=Sp(null,n,r,t,a);break t}}throw n=W(r)||r,Error(s(306,n,""))}}return n;case 0:return bc(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=qa(r,n.pendingProps),Tp(t,n,r,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,ec(t,n),Gs(n,r,null,a);var M=n.memoizedState;if(r=M.cache,$i(n,en,r),r!==f.cache&&ju(n,[en],a,!0),Hs(),r=M.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=bp(t,n,r,a);break t}else if(r!==u){u=Zn(Error(s(424)),n),Ns(u),n=bp(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=si(t.firstChild),bn=n,ye=!0,Ha=null,di=!0,a=op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),r===u){n=wi(t,n,a);break t}dn(t,n,r,a)}n=n.child}return n;case 26:return ul(t,n),t===null?(a=Nm(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Tl(gt.current).createElement(a),r[ve]=n,r[ze]=t,mn(r,a,t),k(r),n.stateNode=r):n.memoizedState=Nm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&ye&&(r=n.stateNode=Dm(n.type,n.pendingProps,gt.current),bn=n,di=!0,u=Xe,pa(n.type)?(df=u,Xe=si(r.firstChild)):Xe=u),dn(t,n,n.pendingProps.children,a),ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=r=Xe)&&(r=q0(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,bn=n,Xe=si(r.firstChild),di=!1,u=!0):u=!1),u||Ga(n)),Wt(n),u=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,r=f.children,uf(u,f)?r=null:M!==null&&uf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=oc(t,n,c0,null,null,a),uo._currentValue=u),ul(t,n),dn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Xe)&&(a=Y0(a,n.pendingProps,di),a!==null?(n.stateNode=a,bn=n,Xe=null,t=!0):t=!1),t||Ga(n)),null;case 13:return Ap(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Lr(n,null,r,a):dn(t,n,r,a),n.child;case 11:return vp(t,n,n.type,n.pendingProps,a);case 7:return dn(t,n,n.pendingProps,a),n.child;case 8:return dn(t,n,n.pendingProps.children,a),n.child;case 12:return dn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,$i(n,n.type,r.value),dn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Xa(n),u=Mn(u),r=r(u),n.flags|=1,dn(t,n,r,a),n.child;case 14:return Sp(t,n,n.type,n.pendingProps,a);case 15:return xp(t,n,n.type,n.pendingProps,a);case 19:return Cp(t,n,a);case 31:return r=n.pendingProps,a=n.mode,r={mode:r.mode,children:r.children},t===null?(a=cl(r,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=yi(t.child,r),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Mp(t,n,a);case 24:return Xa(n),r=Mn(en),t===null?(u=Ju(),u===null&&(u=Pe,f=Ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},tc(n),$i(n,en,u)):((t.lanes&a)!==0&&(ec(t,n),Gs(n,null,null,a),Hs()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),$i(n,en,r)):(r=f.cache,$i(n,en,r),r!==u.cache&&ju(n,[en],a,!0))),dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Di(t){t.flags|=4}function Dp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Im(n)){if(n=Jn.current,n!==null&&((_e&4194048)===_e?pi!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==pi))throw Is=$u,dd;t.flags|=8192}}function fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yt():536870912,t.lanes|=n,zr|=n)}function Zs(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function S0(t,n,a){var r=n.pendingProps;switch(ku(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ai(en),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Us(n)?Di(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ld())),Ve(n),null;case 26:return a=n.memoizedState,t===null?(Di(n),a!==null?(Ve(n),Dp(n,a)):(Ve(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Di(n),Ve(n),Dp(n,a)):(Ve(n),n.flags&=-16777217):(t.memoizedProps!==r&&Di(n),Ve(n),n.flags&=-16777217),null;case 27:ue(n),a=gt.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Di(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}t=nt.current,Us(n)?sd(n):(t=Dm(u,r,a),n.stateNode=t,Di(n))}return Ve(n),null;case 5:if(ue(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Di(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(t=nt.current,Us(n))sd(n);else{switch(u=Tl(gt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?u.createElement("select",{is:r.is}):u.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?u.createElement(a,{is:r.is}):u.createElement(a)}}t[ve]=n,t[ze]=r;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;t:switch(mn(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Di(n)}}return Ve(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Di(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=gt.current,Us(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=bn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ve]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Em(t.nodeValue,a)),t||Ga(n)}else t=Tl(t).createTextNode(r),t[ve]=n,n.stateNode=t}return Ve(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ve]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),u=!1}else u=ld(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ci(n),n):(Ci(n),null)}if(Ci(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),fl(n,n.updateQueue),Ve(n),null;case 4:return qt(),t===null&&af(n.stateNode.containerInfo),Ve(n),null;case 10:return Ai(n.type),Ve(n),null;case 19:if(et(nn),u=n.memoizedState,u===null)return Ve(n),null;if(r=(n.flags&128)!==0,f=u.rendering,f===null)if(r)Zs(u,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=sl(t),f!==null){for(n.flags|=128,Zs(u,!1),t=f.updateQueue,n.updateQueue=t,fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ad(a,t),a=a.sibling;return G(nn,nn.current&1|2),n.child}t=t.sibling}u.tail!==null&&ge()>pl&&(n.flags|=128,r=!0,Zs(u,!1),n.lanes=4194304)}else{if(!r)if(t=sl(f),t!==null){if(n.flags|=128,r=!0,t=t.updateQueue,n.updateQueue=t,fl(n,t),Zs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!ye)return Ve(n),null}else 2*ge()-u.renderingStartTime>pl&&a!==536870912&&(n.flags|=128,r=!0,Zs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ge(),n.sibling=null,t=nn.current,G(nn,r?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return Ci(n),rc(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&et(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ai(en),Ve(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function x0(t,n){switch(ku(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ai(en),qt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 13:if(Ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(nn),null;case 4:return qt(),null;case 10:return Ai(n.type),null;case 22:case 23:return Ci(n),rc(),t!==null&&et(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ai(en),null;case 25:return null;default:return null}}function Up(t,n){switch(ku(n),n.tag){case 3:Ai(en),qt();break;case 26:case 27:case 5:ue(n);break;case 4:qt();break;case 13:Ci(n);break;case 19:et(nn);break;case 10:Ai(n.type);break;case 22:case 23:Ci(n),rc(),t!==null&&et(Wa);break;case 24:Ai(en)}}function js(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,M=a.inst;r=f(),M.destroy=r}a=a.next}while(a!==u)}}catch(E){Oe(n,n.return,E)}}function sa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var M=r.inst,E=M.destroy;if(E!==void 0){M.destroy=void 0,u=n;var z=a,j=E;try{j()}catch(ft){Oe(u,z,ft)}}}r=r.next}while(r!==f)}}catch(ft){Oe(n,n.return,ft)}}function Lp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sd(n,a)}catch(r){Oe(t,t.return,r)}}}function Np(t,n,a){a.props=qa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Oe(t,n,r)}}function Ks(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Oe(t,n,u)}}function mi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Oe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(t,n,u)}else a.current=null}function Op(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Oe(t,t.return,u)}}function Nc(t,n,a){try{var r=t.stateNode;G0(r,t.type,a,n),r[ze]=n}catch(u){Oe(t,t.return,u)}}function Pp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&pa(t.type)||t.tag===4}function Oc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Pp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pc(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=El));else if(r!==4&&(r===27&&pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Pc(t,n,a),t=t.sibling;t!==null;)Pc(t,n,a),t=t.sibling}function hl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(hl(t,n,a),t=t.sibling;t!==null;)hl(t,n,a),t=t.sibling}function zp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);mn(n,r,a),n[ve]=t,n[ze]=a}catch(f){Oe(t,t.return,f)}}var Ui=!1,Ze=!1,zc=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,on=null;function M0(t,n){if(t=t.containerInfo,of=Dl,t=Zh(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,E=-1,z=-1,j=0,ft=0,pt=t,Q=null;e:for(;;){for(var tt;pt!==a||u!==0&&pt.nodeType!==3||(E=M+u),pt!==f||r!==0&&pt.nodeType!==3||(z=M+r),pt.nodeType===3&&(M+=pt.nodeValue.length),(tt=pt.firstChild)!==null;)Q=pt,pt=tt;for(;;){if(pt===t)break e;if(Q===a&&++j===u&&(E=M),Q===f&&++ft===r&&(z=M),(tt=pt.nextSibling)!==null)break;pt=Q,Q=pt.parentNode}pt=tt}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(lf={focusedElem:t,selectionRange:a},Dl=!1,on=n;on!==null;)if(n=on,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,on=t;else for(;on!==null;){switch(n=on,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Kt=qa(a.type,u,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(Kt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Xt){Oe(a,a.return,Xt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,on=t;break}on=n.return}}function Ip(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),r&4&&js(5,a);break;case 1:if(oa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Oe(a,a.return,M)}else{var u=qa(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Oe(a,a.return,M)}}r&64&&Lp(a),r&512&&Ks(a,a.return);break;case 3:if(oa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sd(t,n)}catch(M){Oe(a,a.return,M)}}break;case 27:n===null&&r&4&&zp(a);case 26:case 5:oa(t,a),n===null&&r&4&&Op(a),r&512&&Ks(a,a.return);break;case 12:oa(t,a);break;case 13:oa(t,a),r&4&&Gp(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=D0.bind(null,a),Z0(t,a))));break;case 22:if(r=a.memoizedState!==null||Ui,!r){n=n!==null&&n.memoizedState!==null||Ze,u=Ui;var f=Ze;Ui=r,(Ze=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),Ui=u,Ze=f}break;case 30:break;default:oa(t,a)}}function Fp(t){var n=t.alternate;n!==null&&(t.alternate=null,Fp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Dn=!1;function Li(t,n,a){for(a=a.child;a!==null;)Hp(t,n,a),a=a.sibling}function Hp(t,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Ze||mi(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||mi(a,n);var r=Ge,u=Dn;pa(a.type)&&(Ge=a.stateNode,Dn=!1),Li(t,n,a),ro(a.stateNode),Ge=r,Dn=u;break;case 5:Ze||mi(a,n);case 6:if(r=Ge,u=Dn,Ge=null,Li(t,n,a),Ge=r,Dn=u,Ge!==null)if(Dn)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){Oe(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){Oe(a,n,f)}break;case 18:Ge!==null&&(Dn?(t=Ge,Cm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),po(t)):Cm(Ge,a.stateNode));break;case 4:r=Ge,u=Dn,Ge=a.stateNode.containerInfo,Dn=!0,Li(t,n,a),Ge=r,Dn=u;break;case 0:case 11:case 14:case 15:Ze||sa(2,a,n),Ze||sa(4,a,n),Li(t,n,a);break;case 1:Ze||(mi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Np(a,n,r)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:Ze=(r=Ze)||a.memoizedState!==null,Li(t,n,a),Ze=r;break;default:Li(t,n,a)}}function Gp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(a){Oe(n,n.return,a)}}function y0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Bp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Bp),n;default:throw Error(s(435,t.tag))}}function Bc(t,n){var a=y0(t);n.forEach(function(r){var u=U0.bind(null,t,r);a.has(r)||(a.add(r),r.then(u,u))})}function In(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,M=n,E=M;t:for(;E!==null;){switch(E.tag){case 27:if(pa(E.type)){Ge=E.stateNode,Dn=!1;break t}break;case 5:Ge=E.stateNode,Dn=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Dn=!0;break t}E=E.return}if(Ge===null)throw Error(s(160));Hp(f,M,u),Ge=null,Dn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Vp(n,t),n=n.sibling}var ri=null;function Vp(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:In(n,t),Fn(t),r&4&&(sa(3,t,t.return),js(3,t),sa(5,t,t.return));break;case 1:In(n,t),Fn(t),r&512&&(Ze||a===null||mi(a,a.return)),r&64&&Ui&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=ri;if(In(n,t),Fn(t),r&512&&(Ze||a===null||mi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Zi]||f[ve]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),mn(f,r,a),f[ve]=t,k(f),r=f;break t;case"link":var M=zm("link","href",u).get(r+(a.href||""));if(M){for(var E=0;E<M.length;E++)if(f=M[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(E,1);break e}}f=u.createElement(r),mn(f,r,a),u.head.appendChild(f);break;case"meta":if(M=zm("meta","content",u).get(r+(a.content||""))){for(E=0;E<M.length;E++)if(f=M[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(E,1);break e}}f=u.createElement(r),mn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ve]=t,k(f),r=f}t.stateNode=r}else Bm(u,t.type,t.stateNode);else t.stateNode=Pm(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Bm(u,t.type,t.stateNode):Pm(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Nc(t,t.memoizedProps,a.memoizedProps)}break;case 27:In(n,t),Fn(t),r&512&&(Ze||a===null||mi(a,a.return)),a!==null&&r&4&&Nc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(In(n,t),Fn(t),r&512&&(Ze||a===null||mi(a,a.return)),t.flags&32){u=t.stateNode;try{pr(u,"")}catch(tt){Oe(t,t.return,tt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Nc(t,u,a!==null?a.memoizedProps:u)),r&1024&&(zc=!0);break;case 6:if(In(n,t),Fn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(tt){Oe(t,t.return,tt)}}break;case 3:if(Rl=null,u=ri,ri=bl(n.containerInfo),In(n,t),ri=u,Fn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{po(n.containerInfo)}catch(tt){Oe(t,t.return,tt)}zc&&(zc=!1,Xp(t));break;case 4:r=ri,ri=bl(t.stateNode.containerInfo),In(n,t),Fn(t),ri=r;break;case 12:In(n,t),Fn(t);break;case 13:In(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xc=ge()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Bc(t,r)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,j=Ui,ft=Ze;if(Ui=j||u,Ze=ft||z,In(n,t),Ze=ft,Ui=j,Fn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Ui||Ze||Ya(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{E=z.stateNode;var pt=z.memoizedProps.style,Q=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(tt){Oe(z,z.return,tt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(tt){Oe(z,z.return,tt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Bc(t,a))));break;case 19:In(n,t),Fn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Bc(t,r)));break;case 30:break;case 21:break;default:In(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Pp(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Oc(t);hl(t,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(pr(M,""),a.flags&=-33);var E=Oc(t);hl(t,E,M);break;case 3:case 4:var z=a.stateNode.containerInfo,j=Oc(t);Pc(t,j,z);break;default:throw Error(s(161))}}catch(ft){Oe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Xp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Xp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ip(t,n.alternate,n),n=n.sibling}function Ya(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:sa(4,n,n.return),Ya(n);break;case 1:mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Np(n,n.return,a),Ya(n);break;case 27:ro(n.stateNode);case 26:case 5:mi(n,n.return),Ya(n);break;case 22:n.memoizedState===null&&Ya(n);break;case 30:Ya(n);break;default:Ya(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),js(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(j){Oe(r,r.return,j)}if(r=f,u=r.updateQueue,u!==null){var E=r.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)vd(z[u],E)}catch(j){Oe(r,r.return,j)}}a&&M&64&&Lp(f),Ks(f,f.return);break;case 27:zp(f);case 26:case 5:la(u,f,a),a&&r===null&&M&4&&Op(f),Ks(f,f.return);break;case 12:la(u,f,a);break;case 13:la(u,f,a),a&&M&4&&Gp(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),Ks(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Ic(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ps(a))}function Fc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t))}function gi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wp(t,n,a,r),n=n.sibling}function Wp(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,r),u&2048&&js(9,n);break;case 1:gi(t,n,a,r);break;case 3:gi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ps(t)));break;case 12:if(u&2048){gi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,E=f.onPostCommit;typeof E=="function"&&E(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Oe(n,n.return,z)}}else gi(t,n,a,r);break;case 13:gi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,r):Qs(t,n):f._visibility&2?gi(t,n,a,r):(f._visibility|=2,Nr(t,n,a,r,(n.subtreeFlags&10256)!==0)),u&2048&&Ic(M,n);break;case 24:gi(t,n,a,r),u&2048&&Fc(n.alternate,n);break;default:gi(t,n,a,r)}}function Nr(t,n,a,r,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,E=a,z=r,j=M.flags;switch(M.tag){case 0:case 11:case 15:Nr(f,M,E,z,u),js(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&2?Nr(f,M,E,z,u):Qs(f,M):(ft._visibility|=2,Nr(f,M,E,z,u)),u&&j&2048&&Ic(M.alternate,M);break;case 24:Nr(f,M,E,z,u),u&&j&2048&&Fc(M.alternate,M);break;default:Nr(f,M,E,z,u)}n=n.sibling}}function Qs(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Qs(a,r),u&2048&&Ic(r.alternate,r);break;case 24:Qs(a,r),u&2048&&Fc(r.alternate,r);break;default:Qs(a,r)}n=n.sibling}}var Js=8192;function Or(t){if(t.subtreeFlags&Js)for(t=t.child;t!==null;)kp(t),t=t.sibling}function kp(t){switch(t.tag){case 26:Or(t),t.flags&Js&&t.memoizedState!==null&&oS(ri,t.memoizedState,t.memoizedProps);break;case 5:Or(t);break;case 3:case 4:var n=ri;ri=bl(t.stateNode.containerInfo),Or(t),ri=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Js,Js=16777216,Or(t),Js=n):Or(t));break;default:Or(t)}}function qp(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $s(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];on=r,Zp(r,t)}qp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yp(t),t=t.sibling}function Yp(t){switch(t.tag){case 0:case 11:case 15:$s(t),t.flags&2048&&sa(9,t,t.return);break;case 3:$s(t);break;case 12:$s(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,dl(t)):$s(t);break;default:$s(t)}}function dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];on=r,Zp(r,t)}qp(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:sa(8,n,n.return),dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,dl(n));break;default:dl(n)}t=t.sibling}}function Zp(t,n){for(;on!==null;){var a=on;switch(a.tag){case 0:case 11:case 15:sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ps(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,on=r;else t:for(a=t;on!==null;){r=on;var u=r.sibling,f=r.return;if(Fp(r),r===a){on=null;break t}if(u!==null){u.return=f,on=u;break t}on=f}}}var E0={getCacheForType:function(t){var n=Mn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},T0=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Pe=null,he=null,_e=0,Re=0,Hn=null,ua=!1,Pr=!1,Hc=!1,Ni=0,We=0,ca=0,Za=0,Gc=0,$n=0,zr=0,to=null,Un=null,Vc=!1,Xc=0,pl=1/0,ml=null,fa=null,pn=0,ha=null,Br=null,Ir=0,Wc=0,kc=null,jp=null,eo=0,qc=null;function Gn(){if((Ae&2)!==0&&_e!==0)return _e&-_e;if(P.T!==null){var t=br;return t!==0?t:$c()}return ke()}function Kp(){$n===0&&($n=(_e&536870912)===0||ye?ie():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),$n}function Vn(t,n,a){(t===Pe&&(Re===2||Re===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),da(t,_e,$n,!1)),Et(t,a),((Ae&2)===0||t!==Pe)&&(t===Pe&&((Ae&2)===0&&(Za|=a),We===4&&da(t,_e,$n,!1)),_i(t))}function Qp(t,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&124)===0&&(n&t.expiredLanes)===0||pe(t,n),u=r?R0(t,n):jc(t,n,!0),f=r;do{if(u===0){Pr&&!r&&da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!b0(a)){u=jc(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var E=t;u=to;var z=E.current.memoizedState.isDehydrated;if(z&&(Fr(E,M).flags|=256),M=jc(E,M,!1),M!==2){if(Hc&&!z){E.errorRecoveryDisabledLanes|=f,Za|=f,u=4;break t}f=Un,Un=u,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){Fr(t,0),da(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:da(r,n,$n,!ua);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xc+300-ge(),10<u)){if(da(r,n,$n,!ua),$t(r,0,!0)!==0)break t;r.timeoutHandle=Am(Jp.bind(null,r,a,Un,ml,Vc,n,$n,Za,zr,ua,f,2,-0,0),u);break t}Jp(r,a,Un,ml,Vc,n,$n,Za,zr,ua,f,0,-0,0)}}break}while(!0);_i(t)}function Jp(t,n,a,r,u,f,M,E,z,j,ft,pt,Q,tt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,(pt&8192||(pt&16785408)===16785408)&&(lo={stylesheets:null,count:0,unsuspend:sS},kp(n),pt=lS(),pt!==null)){t.cancelPendingCommit=pt(rm.bind(null,t,n,f,a,r,u,M,E,z,ft,1,Q,tt)),da(t,f,M,!j);return}rm(t,n,f,a,r,u,M,E,z)}function b0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function da(t,n,a,r){n&=~Gc,n&=~Za,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Ht(u),M=1<<f;r[f]=-1,u&=~M}a!==0&&Yt(t,a,n)}function gl(){return(Ae&6)===0?(no(0),!1):!0}function Yc(){if(he!==null){if(Re===0)var t=he.return;else t=he,bi=Va=null,cc(t),Ur=null,qs=0,t=he;for(;t!==null;)Up(t.alternate,t),t=t.return;he=null}}function Fr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,X0(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yc(),Pe=t,he=a=yi(t.current,null),_e=n,Re=0,Hn=null,ua=!1,Pr=pe(t,n),Hc=!1,zr=$n=Gc=Za=ca=We=0,Un=to=null,Vc=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Ht(r),f=1<<u;n|=t[u],r&=~f}return Ni=n,Io(),a}function $p(t,n){le=null,P.H=il,n===Bs||n===Yo?(n=gd(),Re=3):n===dd?(n=gd(),Re=4):Re=n===_p?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,he===null&&(We=1,ll(t,Zn(n,t.current)))}function tm(){var t=P.H;return P.H=il,t===null?il:t}function em(){var t=P.A;return P.A=E0,t}function Zc(){We=4,ua||(_e&4194048)!==_e&&Jn.current!==null||(Pr=!0),(ca&134217727)===0&&(Za&134217727)===0||Pe===null||da(Pe,_e,$n,!1)}function jc(t,n,a){var r=Ae;Ae|=2;var u=tm(),f=em();(Pe!==t||_e!==n)&&(ml=null,Fr(t,n)),n=!1;var M=We;t:do try{if(Re!==0&&he!==null){var E=he,z=Hn;switch(Re){case 8:Yc(),M=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var j=Re;if(Re=0,Hn=null,Hr(t,E,z,j),a&&Pr){M=0;break t}break;default:j=Re,Re=0,Hn=null,Hr(t,E,z,j)}}A0(),M=We;break}catch(ft){$p(t,ft)}while(!0);return n&&t.shellSuspendCounter++,bi=Va=null,Ae=r,P.H=u,P.A=f,he===null&&(Pe=null,_e=0,Io()),M}function A0(){for(;he!==null;)nm(he)}function R0(t,n){var a=Ae;Ae|=2;var r=tm(),u=em();Pe!==t||_e!==n?(ml=null,pl=ge()+500,Fr(t,n)):Pr=pe(t,n);t:do try{if(Re!==0&&he!==null){n=he;var f=Hn;e:switch(Re){case 1:Re=0,Hn=null,Hr(t,n,f,1);break;case 2:case 9:if(pd(f)){Re=0,Hn=null,im(n);break}n=function(){Re!==2&&Re!==9||Pe!==t||(Re=7),_i(t)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:pd(f)?(Re=0,Hn=null,im(n)):(Re=0,Hn=null,Hr(t,n,f,7));break;case 5:var M=null;switch(he.tag){case 26:M=he.memoizedState;case 5:case 27:var E=he;if(!M||Im(M)){Re=0,Hn=null;var z=E.sibling;if(z!==null)he=z;else{var j=E.return;j!==null?(he=j,_l(j)):he=null}break e}}Re=0,Hn=null,Hr(t,n,f,5);break;case 6:Re=0,Hn=null,Hr(t,n,f,6);break;case 8:Yc(),We=6;break t;default:throw Error(s(462))}}C0();break}catch(ft){$p(t,ft)}while(!0);return bi=Va=null,P.H=r,P.A=u,Ae=a,he!==null?0:(Pe=null,_e=0,Io(),We)}function C0(){for(;he!==null&&!te();)nm(he)}function nm(t){var n=wp(t.alternate,t,Ni);t.memoizedProps=t.pendingProps,n===null?_l(t):he=n}function im(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ep(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Ep(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:cc(n);default:Up(a,n),n=he=ad(n,Ni),n=wp(a,n,Ni)}t.memoizedProps=t.pendingProps,n===null?_l(t):he=n}function Hr(t,n,a,r){bi=Va=null,cc(n),Ur=null,qs=0;var u=n.return;try{if(_0(t,u,n,a,_e)){We=1,ll(t,Zn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;We=1,ll(t,Zn(a,t.current)),he=null;return}n.flags&32768?(ye||r===1?t=!0:Pr||(_e&536870912)!==0?t=!1:(ua=t=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),am(n,t)):_l(n)}function _l(t){var n=t;do{if((n.flags&32768)!==0){am(n,ua);return}t=n.return;var a=S0(n.alternate,n,Ni);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);We===0&&(We=5)}function am(t,n){do{var a=x0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);We=6,he=null}function rm(t,n,a,r,u,f,M,E,z){t.cancelPendingCommit=null;do vl();while(pn!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fu,Rt(t,a,f,M,E,z),t===Pe&&(he=Pe=null,_e=0),Br=n,ha=t,Ir=a,Wc=f,kc=u,jp=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,L0(at,function(){return cm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=Y.p,Y.p=2,M=Ae,Ae|=4;try{M0(t,n,a)}finally{Ae=M,Y.p=u,P.T=r}}pn=1,sm(),om(),lm()}}function sm(){if(pn===1){pn=0;var t=ha,n=Br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Y.p;Y.p=2;var u=Ae;Ae|=4;try{Vp(n,t);var f=lf,M=Zh(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(M!==E&&E&&E.ownerDocument&&Yh(E.ownerDocument.documentElement,E)){if(z!==null&&Ou(E)){var j=z.start,ft=z.end;if(ft===void 0&&(ft=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(ft,E.value.length);else{var pt=E.ownerDocument||document,Q=pt&&pt.defaultView||window;if(Q.getSelection){var tt=Q.getSelection(),Kt=E.textContent.length,Xt=Math.min(z.start,Kt),De=z.end===void 0?Xt:Math.min(z.end,Kt);!tt.extend&&Xt>De&&(M=De,De=Xt,Xt=M);var q=qh(E,Xt),H=qh(E,De);if(q&&H&&(tt.rangeCount!==1||tt.anchorNode!==q.node||tt.anchorOffset!==q.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var Z=pt.createRange();Z.setStart(q.node,q.offset),tt.removeAllRanges(),Xt>De?(tt.addRange(Z),tt.extend(H.node,H.offset)):(Z.setEnd(H.node,H.offset),tt.addRange(Z))}}}}for(pt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Dl=!!of,lf=of=null}finally{Ae=u,Y.p=r,P.T=a}}t.current=n,pn=2}}function om(){if(pn===2){pn=0;var t=ha,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Y.p;Y.p=2;var u=Ae;Ae|=4;try{Ip(t,n.alternate,n)}finally{Ae=u,Y.p=r,P.T=a}}pn=3}}function lm(){if(pn===4||pn===3){pn=0,Nt();var t=ha,n=Br,a=Ir,r=jp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Br=ha=null,um(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(fa=null),be(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=t.onRecoverableError,M=0;M<r.length;M++){var E=r[M];f(E.value,{componentStack:E.stack})}}finally{P.T=n,Y.p=u}}(Ir&3)!==0&&vl(),_i(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===qc?eo++:(eo=0,qc=t):eo=0,no(0)}}function um(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ps(n)))}function vl(t){return sm(),om(),lm(),cm()}function cm(){if(pn!==5)return!1;var t=ha,n=Wc;Wc=0;var a=be(Ir),r=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=kc,kc=null;var f=ha,M=Ir;if(pn=0,Br=ha=null,Ir=0,(Ae&6)!==0)throw Error(s(331));var E=Ae;if(Ae|=4,Yp(f.current),Wp(f,f.current,M,a),Ae=E,no(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{Y.p=u,P.T=r,um(t,n)}}function fm(t,n,a){n=Zn(a,n),n=Tc(t.stateNode,n,2),t=na(t,n,2),t!==null&&(Et(t,2),_i(t))}function Oe(t,n,a){if(t.tag===3)fm(t,t,a);else for(;n!==null;){if(n.tag===3){fm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fa===null||!fa.has(r))){t=Zn(a,t),a=mp(2),r=na(n,a,2),r!==null&&(gp(a,r,n,t),Et(r,2),_i(r));break}}n=n.return}}function Kc(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new T0;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Hc=!0,u.add(a),t=w0.bind(null,t,n,a),n.then(t,t))}function w0(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Pe===t&&(_e&a)===a&&(We===4||We===3&&(_e&62914560)===_e&&300>ge()-Xc?(Ae&2)===0&&Fr(t,0):Gc|=a,zr===_e&&(zr=0)),_i(t)}function hm(t,n){n===0&&(n=yt()),t=Mr(t,n),t!==null&&(Et(t,n),_i(t))}function D0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hm(t,a)}function U0(t,n){var a=0;switch(t.tag){case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),hm(t,a)}function L0(t,n){return $e(t,n)}var Sl=null,Gr=null,Qc=!1,xl=!1,Jc=!1,ja=0;function _i(t){t!==Gr&&t.next===null&&(Gr===null?Sl=Gr=t:Gr=Gr.next=t),xl=!0,Qc||(Qc=!0,O0())}function no(t,n){if(!Jc&&xl){Jc=!0;do for(var a=!1,r=Sl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var M=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=u&~(M&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gm(r,f))}else f=_e,f=$t(r,r===Pe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||pe(r,f)||(a=!0,gm(r,f));r=r.next}while(a);Jc=!1}}function N0(){dm()}function dm(){xl=Qc=!1;var t=0;ja!==0&&(V0()&&(t=ja),ja=0);for(var n=ge(),a=null,r=Sl;r!==null;){var u=r.next,f=pm(r,n);f===0?(r.next=null,a===null?Sl=u:a.next=u,u===null&&(Gr=a)):(a=r,(t!==0||(f&3)!==0)&&(xl=!0)),r=u}no(t)}function pm(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-Ht(f),E=1<<M,z=u[M];z===-1?((E&a)===0||(E&r)!==0)&&(u[M]=He(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=Pe,a=_e,a=$t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Re===2||Re===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ft(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ft(r),be(a)){case 2:case 8:a=A;break;case 32:a=at;break;case 268435456:a=_t;break;default:a=at}return r=mm.bind(null,t),a=$e(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ft(r),t.callbackPriority=2,t.callbackNode=null,2}function mm(t,n){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(vl()&&t.callbackNode!==a)return null;var r=_e;return r=$t(t,t===Pe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Qp(t,r,n),pm(t,ge()),t.callbackNode!=null&&t.callbackNode===a?mm.bind(null,t):null)}function gm(t,n){if(vl())return null;Qp(t,n,!0)}function O0(){W0(function(){(Ae&6)!==0?$e(U,N0):dm()})}function $c(){return ja===0&&(ja=ie()),ja}function _m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uo(""+t)}function vm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function P0(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=_m((u[ze]||null).action),M=r.submitter;M&&(n=(n=M[ze]||null)?_m(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var E=new Po("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var z=M?vm(u,M):new FormData(u);Sc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=M?vm(u,M):new FormData(u),Sc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var tf=0;tf<Iu.length;tf++){var ef=Iu[tf],z0=ef.toLowerCase(),B0=ef[0].toUpperCase()+ef.slice(1);ai(z0,"on"+B0)}ai(Qh,"onAnimationEnd"),ai(Jh,"onAnimationIteration"),ai($h,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(t0,"onTransitionRun"),ai(e0,"onTransitionStart"),ai(n0,"onTransitionCancel"),ai(td,"onTransitionEnd"),Ct("onMouseEnter",["mouseout","mouseover"]),Ct("onMouseLeave",["mouseout","mouseover"]),Ct("onPointerEnter",["pointerout","pointerover"]),Ct("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function Sm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var M=r.length-1;0<=M;M--){var E=r[M],z=E.instance,j=E.currentTarget;if(E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=j;try{f(u)}catch(ft){ol(ft)}u.currentTarget=null,f=z}else for(M=0;M<r.length;M++){if(E=r[M],z=E.instance,j=E.currentTarget,E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=j;try{f(u)}catch(ft){ol(ft)}u.currentTarget=null,f=z}}}}function de(t,n){var a=n[vs];a===void 0&&(a=n[vs]=new Set);var r=t+"__bubble";a.has(r)||(xm(n,t,2,!1),a.add(r))}function nf(t,n,a){var r=0;n&&(r|=4),xm(a,t,r,n)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function af(t){if(!t[Ml]){t[Ml]=!0,rt.forEach(function(a){a!=="selectionchange"&&(I0.has(a)||nf(a,!1,t),nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ml]||(n[Ml]=!0,nf("selectionchange",!1,n))}}function xm(t,n,a,r){switch(Wm(n)){case 2:var u=fS;break;case 8:u=hS;break;default:u=vf}a=u.bind(null,n,a,t),u=void 0,!bu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var M=r.tag;if(M===3||M===4){var E=r.stateNode.containerInfo;if(E===u)break;if(M===4)for(M=r.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;E!==null;){if(M=ji(E),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){r=f=M;continue t}E=E.parentNode}}r=r.return}Rh(function(){var j=f,ft=Eu(a),pt=[];t:{var Q=ed.get(t);if(Q!==void 0){var tt=Po,Kt=t;switch(t){case"keypress":if(No(a)===0)break t;case"keydown":case"keyup":tt=Lv;break;case"focusin":Kt="focus",tt=wu;break;case"focusout":Kt="blur",tt=wu;break;case"beforeblur":case"afterblur":tt=wu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Pv;break;case Qh:case Jh:case $h:tt=Ev;break;case td:tt=Bv;break;case"scroll":case"scrollend":tt=vv;break;case"wheel":tt=Fv;break;case"copy":case"cut":case"paste":tt=bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Lh;break;case"toggle":case"beforetoggle":tt=Gv}var Xt=(n&4)!==0,De=!Xt&&(t==="scroll"||t==="scrollend"),q=Xt?Q!==null?Q+"Capture":null:Q;Xt=[];for(var H=j,Z;H!==null;){var ht=H;if(Z=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Z===null||q===null||(ht=ys(H,q),ht!=null&&Xt.push(ao(H,ht,Z))),De)break;H=H.return}0<Xt.length&&(Q=new tt(Q,Kt,null,a,ft),pt.push({event:Q,listeners:Xt}))}}if((n&7)===0){t:{if(Q=t==="mouseover"||t==="pointerover",tt=t==="mouseout"||t==="pointerout",Q&&a!==yu&&(Kt=a.relatedTarget||a.fromElement)&&(ji(Kt)||Kt[xi]))break t;if((tt||Q)&&(Q=ft.window===ft?ft:(Q=ft.ownerDocument)?Q.defaultView||Q.parentWindow:window,tt?(Kt=a.relatedTarget||a.toElement,tt=j,Kt=Kt?ji(Kt):null,Kt!==null&&(De=c(Kt),Xt=Kt.tag,Kt!==De||Xt!==5&&Xt!==27&&Xt!==6)&&(Kt=null)):(tt=null,Kt=j),tt!==Kt)){if(Xt=Dh,ht="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=Lh,ht="onPointerLeave",q="onPointerEnter",H="pointer"),De=tt==null?Q:Ua(tt),Z=Kt==null?Q:Ua(Kt),Q=new Xt(ht,H+"leave",tt,a,ft),Q.target=De,Q.relatedTarget=Z,ht=null,ji(ft)===j&&(Xt=new Xt(q,H+"enter",Kt,a,ft),Xt.target=Z,Xt.relatedTarget=De,ht=Xt),De=ht,tt&&Kt)e:{for(Xt=tt,q=Kt,H=0,Z=Xt;Z;Z=Vr(Z))H++;for(Z=0,ht=q;ht;ht=Vr(ht))Z++;for(;0<H-Z;)Xt=Vr(Xt),H--;for(;0<Z-H;)q=Vr(q),Z--;for(;H--;){if(Xt===q||q!==null&&Xt===q.alternate)break e;Xt=Vr(Xt),q=Vr(q)}Xt=null}else Xt=null;tt!==null&&Mm(pt,Q,tt,Xt,!1),Kt!==null&&De!==null&&Mm(pt,De,Kt,Xt,!0)}}t:{if(Q=j?Ua(j):window,tt=Q.nodeName&&Q.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Q.type==="file")var Lt=Hh;else if(Ih(Q))if(Gh)Lt=Qv;else{Lt=jv;var ce=Zv}else tt=Q.nodeName,!tt||tt.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?j&&Mu(j.elementType)&&(Lt=Hh):Lt=Kv;if(Lt&&(Lt=Lt(t,j))){Fh(pt,Lt,a,ft);break t}ce&&ce(t,Q,j),t==="focusout"&&j&&Q.type==="number"&&j.memoizedProps.value!=null&&hr(Q,"number",Q.value)}switch(ce=j?Ua(j):window,t){case"focusin":(Ih(ce)||ce.contentEditable==="true")&&(vr=ce,Pu=j,Ds=null);break;case"focusout":Ds=Pu=vr=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,jh(pt,a,ft);break;case"selectionchange":if($v)break;case"keydown":case"keyup":jh(pt,a,ft)}var zt;if(Uu)t:{switch(t){case"compositionstart":var kt="onCompositionStart";break t;case"compositionend":kt="onCompositionEnd";break t;case"compositionupdate":kt="onCompositionUpdate";break t}kt=void 0}else _r?zh(t,a)&&(kt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(kt="onCompositionStart");kt&&(Nh&&a.locale!=="ko"&&(_r||kt!=="onCompositionStart"?kt==="onCompositionEnd"&&_r&&(zt=Ch()):(Ji=ft,Au="value"in Ji?Ji.value:Ji.textContent,_r=!0)),ce=yl(j,kt),0<ce.length&&(kt=new Uh(kt,t,null,a,ft),pt.push({event:kt,listeners:ce}),zt?kt.data=zt:(zt=Bh(a),zt!==null&&(kt.data=zt)))),(zt=Xv?Wv(t,a):kv(t,a))&&(kt=yl(j,"onBeforeInput"),0<kt.length&&(ce=new Uh("onBeforeInput","beforeinput",null,a,ft),pt.push({event:ce,listeners:kt}),ce.data=zt)),P0(pt,t,j,a,ft)}Sm(pt,n)})}function ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ys(t,a),u!=null&&r.unshift(ao(t,u,f)),u=ys(t,n),u!=null&&r.push(ao(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mm(t,n,a,r,u){for(var f=n._reactName,M=[];a!==null&&a!==r;){var E=a,z=E.alternate,j=E.stateNode;if(E=E.tag,z!==null&&z===r)break;E!==5&&E!==26&&E!==27||j===null||(z=j,u?(j=ys(a,f),j!=null&&M.unshift(ao(a,j,z))):u||(j=ys(a,f),j!=null&&M.push(ao(a,j,z)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var F0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function ym(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace(H0,"")}function Em(t,n){return n=ym(n),ym(t)===n}function El(){}function we(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pr(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pr(t,""+r);break;case"className":Jt(t,"class",r);break;case"tabIndex":Jt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,r);break;case"style":bh(t,r,f);break;case"data":if(n!=="object"){Jt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Uo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&we(t,n,"name",u.name,u,null),we(t,n,"formEncType",u.formEncType,u,null),we(t,n,"formMethod",u.formMethod,u,null),we(t,n,"formTarget",u.formTarget,u,null)):(we(t,n,"encType",u.encType,u,null),we(t,n,"method",u.method,u,null),we(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Uo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=El);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Uo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":de("beforetoggle",t),de("toggle",t),Qt(t,"popover",r);break;case"xlinkActuate":Me(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Me(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Me(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Me(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Me(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Me(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Me(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gv.get(a)||a,Qt(t,a,r))}}function sf(t,n,a,r,u,f){switch(a){case"style":bh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?pr(t,r):(typeof r=="number"||typeof r=="bigint")&&pr(t,""+r);break;case"onScroll":r!=null&&de("scroll",t);break;case"onScrollEnd":r!=null&&de("scrollend",t);break;case"onClick":r!=null&&(t.onclick=El);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[ze]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Qt(t,a,r)}}}function mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:we(t,n,f,M,a,null)}}u&&we(t,n,"srcSet",a.srcSet,a,null),r&&we(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=M=u=null,z=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":M=ft;break;case"checked":z=ft;break;case"defaultChecked":j=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:we(t,n,r,ft,a,null)}}Do(t,f,E,z,j,M,u,!1),Qi(t);return;case"select":de("invalid",t),r=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":M=E;break;case"multiple":r=E;default:we(t,n,u,E,a,null)}n=f,a=M,t.multiple=!!r,n!=null?dr(t,!!r,n,!1):a!=null&&dr(t,!!r,a,!0);return;case"textarea":de("invalid",t),f=u=r=null;for(M in a)if(a.hasOwnProperty(M)&&(E=a[M],E!=null))switch(M){case"value":r=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:we(t,n,M,E,a,null)}Eh(t,r,u,f),Qi(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:we(t,n,z,r,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(r=0;r<io.length;r++)de(io[r],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:we(t,n,j,r,a,null)}return;default:if(Mu(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&sf(t,n,ft,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&we(t,n,E,r,a,null))}function G0(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,E=null,z=null,j=null,ft=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":z=pt;default:r.hasOwnProperty(tt)||we(t,n,tt,null,r,pt)}}for(var Q in r){var tt=r[Q];if(pt=a[Q],r.hasOwnProperty(Q)&&(tt!=null||pt!=null))switch(Q){case"type":f=tt;break;case"name":u=tt;break;case"checked":j=tt;break;case"defaultChecked":ft=tt;break;case"value":M=tt;break;case"defaultValue":E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:tt!==pt&&we(t,n,Q,tt,r,pt)}}Na(t,M,E,z,j,ft,f,u);return;case"select":tt=M=E=Q=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":tt=z;default:r.hasOwnProperty(f)||we(t,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":Q=f;break;case"defaultValue":E=f;break;case"multiple":M=f;default:f!==z&&we(t,n,u,f,r,z)}n=E,a=M,r=tt,Q!=null?dr(t,!!a,Q,!1):!!r!=!!a&&(n!=null?dr(t,!!a,n,!0):dr(t,!!a,a?[]:"",!1));return;case"textarea":tt=Q=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:we(t,n,E,null,r,u)}for(M in r)if(u=r[M],f=a[M],r.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":Q=u;break;case"defaultValue":tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&we(t,n,M,u,r,f)}yh(t,Q,tt);return;case"option":for(var Kt in a)if(Q=a[Kt],a.hasOwnProperty(Kt)&&Q!=null&&!r.hasOwnProperty(Kt))switch(Kt){case"selected":t.selected=!1;break;default:we(t,n,Kt,null,r,Q)}for(z in r)if(Q=r[z],tt=a[z],r.hasOwnProperty(z)&&Q!==tt&&(Q!=null||tt!=null))switch(z){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:we(t,n,z,Q,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in a)Q=a[Xt],a.hasOwnProperty(Xt)&&Q!=null&&!r.hasOwnProperty(Xt)&&we(t,n,Xt,null,r,Q);for(j in r)if(Q=r[j],tt=a[j],r.hasOwnProperty(j)&&Q!==tt&&(Q!=null||tt!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:we(t,n,j,Q,r,tt)}return;default:if(Mu(n)){for(var De in a)Q=a[De],a.hasOwnProperty(De)&&Q!==void 0&&!r.hasOwnProperty(De)&&sf(t,n,De,void 0,r,Q);for(ft in r)Q=r[ft],tt=a[ft],!r.hasOwnProperty(ft)||Q===tt||Q===void 0&&tt===void 0||sf(t,n,ft,Q,r,tt);return}}for(var q in a)Q=a[q],a.hasOwnProperty(q)&&Q!=null&&!r.hasOwnProperty(q)&&we(t,n,q,null,r,Q);for(pt in r)Q=r[pt],tt=a[pt],!r.hasOwnProperty(pt)||Q===tt||Q==null&&tt==null||we(t,n,pt,Q,r,tt)}var of=null,lf=null;function Tl(t){return t.nodeType===9?t:t.ownerDocument}function Tm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cf=null;function V0(){var t=window.event;return t&&t.type==="popstate"?t===cf?!1:(cf=t,!0):(cf=null,!1)}var Am=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,W0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(t){return Rm.resolve(null).then(t).catch(k0)}:Am;function k0(t){setTimeout(function(){throw t})}function pa(t){return t==="head"}function Cm(t,n){var a=n,r=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var M=t.ownerDocument;if(a&1&&ro(M.documentElement),a&2&&ro(M.body),a&4)for(a=M.head,ro(a),M=a.firstChild;M;){var E=M.nextSibling,z=M.nodeName;M[Zi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=E}}if(u===0){t.removeChild(f),po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);po(n)}function ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ff(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function q0(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Zi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function Y0(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function hf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Z0(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var df=null;function wm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Dm(t,n,a){switch(n=Tl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fr(t)}var ti=new Map,Um=new Set;function bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oi=Y.d;Y.d={f:j0,r:K0,D:Q0,C:J0,L:$0,m:tS,X:nS,S:eS,M:iS};function j0(){var t=Oi.f(),n=gl();return t||n}function K0(t){var n=Ki(t);n!==null&&n.tag===5&&n.type==="form"?Qd(n):Oi.r(t)}var Xr=typeof document>"u"?null:document;function Lm(t,n,a){var r=Xr;if(r&&typeof n=="string"&&n){var u=Ie(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Um.has(u)||(Um.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),mn(n,"link",t),k(n),r.head.appendChild(n)))}}function Q0(t){Oi.D(t),Lm("dns-prefetch",t,null)}function J0(t,n){Oi.C(t,n),Lm("preconnect",t,n)}function $0(t,n,a){Oi.L(t,n,a);var r=Xr;if(r&&t&&n){var u='link[rel="preload"][as="'+Ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ie(a.imageSizes)+'"]')):u+='[href="'+Ie(t)+'"]';var f=u;switch(n){case"style":f=Wr(t);break;case"script":f=kr(t)}ti.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ti.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(so(f))||n==="script"&&r.querySelector(oo(f))||(n=r.createElement("link"),mn(n,"link",t),k(n),r.head.appendChild(n)))}}function tS(t,n){Oi.m(t,n);var a=Xr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ie(r)+'"][href="'+Ie(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=kr(t)}if(!ti.has(f)&&(t=g({rel:"modulepreload",href:t},n),ti.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(oo(f)))return}r=a.createElement("link"),mn(r,"link",t),k(r),a.head.appendChild(r)}}}function eS(t,n,a){Oi.S(t,n,a);var r=Xr;if(r&&t){var u=C(r).hoistableStyles,f=Wr(t);n=n||"default";var M=u.get(f);if(!M){var E={loading:0,preload:null};if(M=r.querySelector(so(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ti.get(f))&&pf(t,a);var z=M=r.createElement("link");k(z),mn(z,"link",t),z._p=new Promise(function(j,ft){z.onload=j,z.onerror=ft}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Al(M,n,r)}M={type:"stylesheet",instance:M,count:1,state:E},u.set(f,M)}}}function nS(t,n){Oi.X(t,n);var a=Xr;if(a&&t){var r=C(a).hoistableScripts,u=kr(t),f=r.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0},n),(n=ti.get(u))&&mf(t,n),f=a.createElement("script"),k(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function iS(t,n){Oi.M(t,n);var a=Xr;if(a&&t){var r=C(a).hoistableScripts,u=kr(t),f=r.get(u);f||(f=a.querySelector(oo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ti.get(u))&&mf(t,n),f=a.createElement("script"),k(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Nm(t,n,a,r){var u=(u=gt.current)?bl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Wr(a.href),a=C(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wr(a.href);var f=C(u).hoistableStyles,M=f.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=u.querySelector(so(t)))&&!f._p&&(M.instance=f,M.state.loading=5),ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ti.set(t,a),f||aS(u,t,a,M.state))),n&&r===null)throw Error(s(528,""));return M}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=kr(a),a=C(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Wr(t){return'href="'+Ie(t)+'"'}function so(t){return'link[rel="stylesheet"]['+t+"]"}function Om(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function aS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),mn(n,"link",a),k(n),t.head.appendChild(n))}function kr(t){return'[src="'+Ie(t)+'"]'}function oo(t){return"script[async]"+t}function Pm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ie(a.href)+'"]');if(r)return n.instance=r,k(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),k(r),mn(r,"style",u),Al(r,a.precedence,t),n.instance=r;case"stylesheet":u=Wr(a.href);var f=t.querySelector(so(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=Om(a),(u=ti.get(u))&&pf(r,u),f=(t.ownerDocument||t).createElement("link"),k(f);var M=f;return M._p=new Promise(function(E,z){M.onload=E,M.onerror=z}),mn(f,"link",r),n.state.loading|=4,Al(f,a.precedence,t),n.instance=f;case"script":return f=kr(a.src),(u=t.querySelector(oo(f)))?(n.instance=u,k(u),u):(r=a,(u=ti.get(f))&&(r=g({},a),mf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),k(u),mn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Al(r,a.precedence,t));return n.instance}function Al(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,M=0;M<r.length;M++){var E=r[M];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Rl=null;function zm(t,n,a){if(Rl===null){var r=new Map,u=Rl=new Map;u.set(a,r)}else u=Rl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Zi]||f[ve]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var E=r.get(M);E?E.push(f):r.set(M,[f])}}return r}function Bm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function rS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Im(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var lo=null;function sS(){}function oS(t,n,a){if(lo===null)throw Error(s(475));var r=lo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Wr(a.href),f=t.querySelector(so(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Cl.bind(r),t.then(r,r)),n.state.loading|=4,n.instance=f,k(f);return}f=t.ownerDocument||t,a=Om(a),(u=ti.get(u))&&pf(a,u),f=f.createElement("link"),k(f);var M=f;M._p=new Promise(function(E,z){M.onload=E,M.onerror=z}),mn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=Cl.bind(r),t.addEventListener("load",n),t.addEventListener("error",n))}}function lS(){if(lo===null)throw Error(s(475));var t=lo;return t.stylesheets&&t.count===0&&gf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&gf(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Cl(){if(this.count--,this.count===0){if(this.stylesheets)gf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wl=null;function gf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wl=new Map,n.forEach(uS,t),wl=null,Cl.call(t))}function uS(t,n){if(!(n.state.loading&4)){var a=wl.get(t);if(a)var r=a.get(null);else{a=new Map,wl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),r=M)}r&&a.set(null,r)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||r,f===r&&a.set(null,u),a.set(M,u),this.count++,r=Cl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var uo={$$typeof:w,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function cS(t,n,a,r,u,f,M,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=F(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=F(0),this.hiddenUpdates=F(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Fm(t,n,a,r,u,f,M,E,z,j,ft,pt){return t=new cS(t,n,a,M,E,z,j,pt),n=1,f===!0&&(n|=24),f=Bn(3,null,null,n),t.current=f,f.stateNode=t,n=Ku(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},tc(f),t}function Hm(t){return t?(t=yr,t):yr}function Gm(t,n,a,r,u,f){u=Hm(u),r.context===null?r.context=u:r.pendingContext=u,r=ea(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=na(t,r,n),a!==null&&(Vn(a,t,n),Fs(a,t,n))}function Vm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _f(t,n){Vm(t,n),(t=t.alternate)&&Vm(t,n)}function Xm(t){if(t.tag===13){var n=Mr(t,67108864);n!==null&&Vn(n,t,67108864),_f(t,67108864)}}var Dl=!0;function fS(t,n,a,r){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,vf(t,n,a,r)}finally{Y.p=f,P.T=u}}function hS(t,n,a,r){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,vf(t,n,a,r)}finally{Y.p=f,P.T=u}}function vf(t,n,a,r){if(Dl){var u=Sf(r);if(u===null)rf(t,n,r,Ul,a),km(t,r);else if(pS(u,t,n,a,r))r.stopPropagation();else if(km(t,r),n&4&&-1<dS.indexOf(t)){for(;u!==null;){var f=Ki(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=wt(f.pendingLanes);if(M!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;M;){var z=1<<31-Ht(M);E.entanglements[1]|=z,M&=~z}_i(f),(Ae&6)===0&&(pl=ge()+500,no(0))}}break;case 13:E=Mr(f,2),E!==null&&Vn(E,f,2),gl(),_f(f,2)}if(f=Sf(r),f===null&&rf(t,n,r,Ul,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else rf(t,n,r,null,a)}}function Sf(t){return t=Eu(t),xf(t)}var Ul=null;function xf(t){if(Ul=null,t=ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ul=t,null}function Wm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case U:return 2;case A:return 8;case at:case St:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Mf=!1,ma=null,ga=null,_a=null,co=new Map,fo=new Map,va=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function km(t,n){switch(t){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":_a=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(n.pointerId)}}function ho(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ki(n),n!==null&&Xm(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function pS(t,n,a,r,u){switch(n){case"focusin":return ma=ho(ma,t,n,a,r,u),!0;case"dragenter":return ga=ho(ga,t,n,a,r,u),!0;case"mouseover":return _a=ho(_a,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return co.set(f,ho(co.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,fo.set(f,ho(fo.get(f)||null,t,n,a,r,u)),!0}return!1}function qm(t){var n=ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,fn(t.priority,function(){if(a.tag===13){var r=Gn();r=Te(r);var u=Mr(a,r);u!==null&&Vn(u,a,r),_f(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);yu=r,a.target.dispatchEvent(r),yu=null}else return n=Ki(a),n!==null&&Xm(n),t.blockedOn=a,!1;n.shift()}return!0}function Ym(t,n,a){Ll(t)&&a.delete(n)}function mS(){Mf=!1,ma!==null&&Ll(ma)&&(ma=null),ga!==null&&Ll(ga)&&(ga=null),_a!==null&&Ll(_a)&&(_a=null),co.forEach(Ym),fo.forEach(Ym)}function Nl(t,n){t.blockedOn===n&&(t.blockedOn=null,Mf||(Mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mS)))}var Ol=null;function Zm(t){Ol!==t&&(Ol=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ol===t&&(Ol=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(xf(r||a)===null)continue;break}var f=Ki(a);f!==null&&(t.splice(n,3),n-=3,Sc(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function po(t){function n(z){return Nl(z,t)}ma!==null&&Nl(ma,t),ga!==null&&Nl(ga,t),_a!==null&&Nl(_a,t),co.forEach(n),fo.forEach(n);for(var a=0;a<va.length;a++){var r=va[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)qm(a),a.blockedOn===null&&va.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],M=u[ze]||null;if(typeof f=="function")M||Zm(a);else if(M){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[ze]||null)E=M.formAction;else if(xf(u)!==null)continue}else E=M.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Zm(a)}}}function yf(t){this._internalRoot=t}Pl.prototype.render=yf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Gn();Gm(a,r,t,n,null,null)},Pl.prototype.unmount=yf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Gm(t.current,2,null,t,null,null),gl(),n[xi]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var n=ke();t={blockedOn:null,target:t,priority:n};for(var a=0;a<va.length&&n!==0&&n<va[a].priority;a++);va.splice(a,0,t),a===0&&qm(t)}};var jm=e.version;if(jm!=="19.1.0")throw Error(s(527,jm,"19.1.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var gS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{bt=zl.inject(gS),At=zl}catch{}}return go.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=fp,f=hp,M=dp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Fm(t,1,!1,null,null,a,r,u,f,M,E,null),t[xi]=n.current,af(t),new yf(n)},go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=fp,M=hp,E=dp,z=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),n=Fm(t,1,!0,n,a??null,r,u,f,M,E,z,j),n.context=Hm(null),a=n.current,r=Gn(),r=Te(r),u=ea(r),u.callback=null,na(a,u,r),a=r,n.current.lanes=a,Et(n,a),_i(n),t[xi]=n.current,af(t),new Pl(n)},go.version="19.1.0",go}var rg;function RS(){if(rg)return bf.exports;rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),bf.exports=AS(),bf.exports}var CS=RS();const wS=N_(CS),DS="rgba(209, 213, 219, 0.4)",US="rgba(209, 213, 219,",sg=120,LS=1.5,og=.1,lg=.98,ug=.02,cg=.005,fg=5e-4,wf=.5;let Bl=0;const NS=()=>{const o=cn.useRef(null),e=cn.useRef([]),i=cn.useRef(null),s=cn.useCallback((d,h)=>{const m=[];for(let p=0;p<h;p++)m.push({x:Math.random()*d.width,y:Math.random()*d.height,vx:(Math.random()-.5)*og,vy:(Math.random()-.5)*og,radius:LS});e.current=m},[]),l=cn.useCallback(()=>{const d=o.current,h=d==null?void 0:d.getContext("2d");if(!(!d||!h)){h.clearRect(0,0,d.width,d.height),Bl+=1,e.current.forEach(m=>{const p=(Math.sin(m.x*cg+Bl*fg)+Math.cos(m.y*cg+Bl*fg))*Math.PI,g=Math.cos(p)*ug,v=Math.sin(p)*ug;m.vx+=g,m.vy+=v,m.vx*=lg,m.vy*=lg;const S=Math.hypot(m.vx,m.vy);S>wf&&(m.vx=m.vx/S*wf,m.vy=m.vy/S*wf),m.x+=m.vx,m.y+=m.vy,m.x<0&&(m.x=d.width),m.x>d.width&&(m.x=0),m.y<0&&(m.y=d.height),m.y>d.height&&(m.y=0),h.beginPath(),h.arc(m.x,m.y,m.radius,0,Math.PI*2),h.fillStyle=DS,h.fill()});for(let m=0;m<e.current.length;m++)for(let p=m+1;p<e.current.length;p++){const g=e.current[m],v=e.current[p],S=Math.hypot(g.x-v.x,g.y-v.y);if(S<sg){const y=1-S/sg;h.beginPath(),h.moveTo(g.x,g.y),h.lineTo(v.x,v.y),h.strokeStyle=`${US} ${y*.3})`,h.lineWidth=.5,h.stroke()}}i.current=requestAnimationFrame(l)}},[]),c=cn.useCallback(()=>{const d=o.current;if(!d)return;const h=window.devicePixelRatio||1,m=d.getBoundingClientRect();d.width=m.width*h,d.height=m.height*h;const p=m.width,g=m.height,v=Math.floor(p*g/15e3);s(d,Math.max(30,Math.min(100,v))),i.current&&cancelAnimationFrame(i.current),Bl=0,l()},[s,l]);return cn.useEffect(()=>(c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),i.current&&cancelAnimationFrame(i.current)}),[c]),ii.jsx("canvas",{ref:o,className:"absolute top-0 left-0 w-full h-full z-0",style:{pointerEvents:"none"},"aria-hidden":"true"})},OS=()=>ii.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center text-center p-4",children:[ii.jsx("h1",{className:"text-white text-6xl sm:text-7xl md:text-8xl font-thin tracking-[0.15em] sm:tracking-[0.2em] leading-tight",style:{textShadow:"0 0 10px rgba(255,255,255,0.1)"},children:"LEO JOSEPH"}),ii.jsx("div",{className:"w-16 sm:w-20 h-px bg-gray-400 my-5 sm:my-7"}),ii.jsx("h2",{className:"text-gray-300 text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] sm:tracking-[0.4em]",style:{textShadow:"0 0 8px rgba(200,200,200,0.1)"},children:"DESIGN"})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="160",PS=0,hg=1,zS=2,O_=1,BS=2,Hi=3,wa=0,Pn=1,Gi=2,Aa=0,cs=1,dg=2,pg=3,mg=4,IS=5,nr=100,FS=101,HS=102,gg=103,_g=104,GS=200,VS=201,XS=202,WS=203,oh=204,lh=205,kS=206,qS=207,YS=208,ZS=209,jS=210,KS=211,QS=212,JS=213,$S=214,tx=0,ex=1,nx=2,uu=3,ix=4,ax=5,rx=6,sx=7,P_=0,ox=1,lx=2,Ra=0,ux=1,cx=2,fx=3,hx=4,dx=5,px=6,z_=300,hs=301,ds=302,uh=303,ch=304,mu=306,ar=1e3,hi=1001,fh=1002,gn=1003,vg=1004,Df=1005,Nn=1006,mx=1007,Eo=1008,Ca=1009,gx=1010,_x=1011,vh=1012,B_=1013,ba=1014,Vi=1015,To=1016,I_=1017,F_=1018,rr=1020,vx=1021,kn=1023,Sx=1024,xx=1025,sr=1026,ps=1027,Mx=1028,H_=1029,yx=1030,G_=1031,V_=1033,Uf=33776,Lf=33777,Nf=33778,Of=33779,Sg=35840,xg=35841,Mg=35842,yg=35843,X_=36196,Eg=37492,Tg=37496,bg=37808,Ag=37809,Rg=37810,Cg=37811,wg=37812,Dg=37813,Ug=37814,Lg=37815,Ng=37816,Og=37817,Pg=37818,zg=37819,Bg=37820,Ig=37821,Pf=36492,Fg=36494,Hg=36495,Ex=36283,Gg=36284,Vg=36285,Xg=36286,W_=3e3,or=3001,Tx=3200,bx=3201,Ax=0,Rx=1,ni="",_n="srgb",ki="srgb-linear",Sh="display-p3",gu="display-p3-linear",cu="linear",Fe="srgb",fu="rec709",hu="p3",qr=7680,Wg=519,Cx=512,wx=513,Dx=514,k_=515,Ux=516,Lx=517,Nx=518,Ox=519,kg=35044,qg="300 es",hh=1035,Xi=2e3,du=2001;class gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=Math.PI/180,dh=180/Math.PI;function bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function Px(o,e){return(o%e+e)%e}function Bf(o,e,i){return(1-i)*o+i*e}function Yg(o){return(o&o-1)===0&&o!==0}function ph(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _o(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ln(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,i=0){xe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(On(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,i,s,l,c,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],v=s[7],S=s[2],y=s[5],b=s[8],T=l[0],x=l[3],_=l[6],L=l[1],w=l[4],O=l[7],V=l[2],I=l[5],B=l[8];return c[0]=d*T+h*L+m*V,c[3]=d*x+h*w+m*I,c[6]=d*_+h*O+m*B,c[1]=p*T+g*L+v*V,c[4]=p*x+g*w+v*I,c[7]=p*_+g*O+v*B,c[2]=S*T+y*L+b*V,c[5]=S*x+y*w+b*I,c[8]=S*_+y*O+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*d-h*p,S=h*m-g*c,y=p*c-d*m,b=i*v+s*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(l*p-g*s)*T,e[2]=(h*s-l*d)*T,e[3]=S*T,e[4]=(g*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=y*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(If.makeScale(e,i)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,i){return this.premultiply(If.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const If=new fe;function q_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function pu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function zx(){const o=pu("canvas");return o.style.display="block",o}const Zg={};function yo(o){o in Zg||(Zg[o]=!0,console.warn(o))}const jg=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kg=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Il={[ki]:{transfer:cu,primaries:fu,toReference:o=>o,fromReference:o=>o},[_n]:{transfer:Fe,primaries:fu,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[gu]:{transfer:cu,primaries:hu,toReference:o=>o.applyMatrix3(Kg),fromReference:o=>o.applyMatrix3(jg)},[Sh]:{transfer:Fe,primaries:hu,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Kg),fromReference:o=>o.applyMatrix3(jg).convertLinearToSRGB()}},Bx=new Set([ki,gu]),Ue={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Bx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=Il[e].toReference,l=Il[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Il[o].primaries},getTransfer:function(o){return o===ni?cu:Il[o].transfer}};function fs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ff(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Yr;class Y_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yr===void 0&&(Yr=pu("canvas")),Yr.width=e.width,Yr.height=e.height;const s=Yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=pu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fs(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fs(i[s]/255)*255):i[s]=fs(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class Z_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=bo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Hf(l[d].image)):c.push(Hf(l[d]))}else c=Hf(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Y_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fx=0;class Rn extends gs{constructor(e=Rn.DEFAULT_IMAGE,i=Rn.DEFAULT_MAPPING,s=hi,l=hi,c=Nn,d=Eo,h=kn,m=Ca,p=Rn.DEFAULT_ANISOTROPY,g=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=bo(),this.name="",this.source=new Z_(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===or?_n:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_n?or:W_}set encoding(e){yo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===or?_n:ni}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=z_;Rn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,i=0,s=0,l=1){vn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],S=m[1],y=m[5],b=m[9],T=m[2],x=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+T)<.1&&Math.abs(b+x)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,O=(y+1)/2,V=(_+1)/2,I=(g+S)/4,B=(v+T)/4,dt=(b+x)/4;return w>O&&w>V?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=I/s,c=B/s):O>V?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=I/l,c=dt/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=B/c,l=dt/c),this.set(s,l,c,i),this}let L=Math.sqrt((x-b)*(x-b)+(v-T)*(v-T)+(S-g)*(S-g));return Math.abs(L)<.001&&(L=1),this.x=(x-b)/L,this.y=(v-T)/L,this.z=(S-g)/L,this.w=Math.acos((p+y+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hx extends gs{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(yo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===or?_n:ni),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Rn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Z_(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Hx{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class j_ extends Rn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gx extends Rn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=gn,this.minFilter=gn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],v=s[l+3];const S=c[d+0],y=c[d+1],b=c[d+2],T=c[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=S,e[i+1]=y,e[i+2]=b,e[i+3]=T;return}if(v!==T||m!==S||p!==y||g!==b){let x=1-h;const _=m*S+p*y+g*b+v*T,L=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const V=Math.sqrt(w),I=Math.atan2(V,_*L);x=Math.sin(x*I)/V,h=Math.sin(h*I)/V}const O=h*L;if(m=m*x+S*O,p=p*x+y*O,g=g*x+b*O,v=v*x+T*O,x===1-h){const V=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=V,p*=V,g*=V,v*=V}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],v=c[d],S=c[d+1],y=c[d+2],b=c[d+3];return e[i]=h*b+g*v+m*y-p*S,e[i+1]=m*b+g*S+p*v-h*y,e[i+2]=p*b+g*y+h*S-m*v,e[i+3]=g*b-h*v-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),v=h(c/2),S=m(s/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"YXZ":this._x=S*g*v+p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"ZXY":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v-S*y*b;break;case"ZYX":this._x=S*g*v-p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v+S*y*b;break;case"YZX":this._x=S*g*v+p*y*b,this._y=p*y*v+S*g*b,this._z=p*g*b-S*y*v,this._w=p*g*v-S*y*b;break;case"XZY":this._x=S*g*v-p*y*b,this._y=p*y*v-S*g*b,this._z=p*g*b+S*y*v,this._w=p*g*v+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=s+h+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>v){const y=2*Math.sqrt(1+s-h-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>v){const y=2*Math.sqrt(1+h-s-v);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=d*v+this._w*S,this._x=s*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(c),s*Math.cos(c),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,s=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Qg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Qg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),g=2*(h*i-c*l),v=2*(c*s-d*i);return this.x=i+m*p+d*v-h*g,this.y=s+m*g+h*p-c*v,this.z=l+m*v+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(On(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new ot,Qg=new Ao;class Ro{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(oi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(oi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=oi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,oi):oi.fromBufferAttribute(c,d),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fl.copy(s.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Hl.subVectors(this.max,vo),Zr.subVectors(e.a,vo),jr.subVectors(e.b,vo),Kr.subVectors(e.c,vo),xa.subVectors(jr,Zr),Ma.subVectors(Kr,jr),Ka.subVectors(Zr,Kr);let i=[0,-xa.z,xa.y,0,-Ma.z,Ma.y,0,-Ka.z,Ka.y,xa.z,0,-xa.x,Ma.z,0,-Ma.x,Ka.z,0,-Ka.x,-xa.y,xa.x,0,-Ma.y,Ma.x,0,-Ka.y,Ka.x,0];return!Vf(i,Zr,jr,Kr,Hl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,Zr,jr,Kr,Hl))?!1:(Gl.crossVectors(xa,Ma),i=[Gl.x,Gl.y,Gl.z],Vf(i,Zr,jr,Kr,Hl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],oi=new ot,Fl=new Ro,Zr=new ot,jr=new ot,Kr=new ot,xa=new ot,Ma=new ot,Ka=new ot,vo=new ot,Hl=new ot,Gl=new ot,Qa=new ot;function Vf(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Qa.fromArray(o,c);const h=l.x*Math.abs(Qa.x)+l.y*Math.abs(Qa.y)+l.z*Math.abs(Qa.z),m=e.dot(Qa),p=i.dot(Qa),g=s.dot(Qa);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Vx=new Ro,So=new ot,Xf=new ot;class xh{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Vx.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const i=So.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(So,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(Xf)),this.expandByPoint(So.copy(e.center).sub(Xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new ot,Wf=new ot,Vl=new ot,ya=new ot,kf=new ot,Xl=new ot,qf=new ot;class Xx{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,i),zi.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Wf.copy(e).add(i).multiplyScalar(.5),Vl.copy(i).sub(e).normalize(),ya.copy(this.origin).sub(Wf);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Vl),h=ya.dot(this.direction),m=-ya.dot(Vl),p=ya.lengthSq(),g=Math.abs(1-d*d);let v,S,y,b;if(g>0)if(v=d*m-h,S=d*h-m,b=c*g,v>=0)if(S>=-b)if(S<=b){const T=1/g;v*=T,S*=T,y=v*(v+d*S+2*h)+S*(d*v+S+2*m)+p}else S=c,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;else S<=-b?(v=Math.max(0,-(-d*c+h)),S=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p):S<=b?(v=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(v=Math.max(0,-(d*c+h)),S=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p);else S=d>0?-c:c,v=Math.max(0,-(d*S+h)),y=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Wf).addScaledVector(Vl,S),y}intersectSphere(e,i){zi.subVectors(e.center,this.origin);const s=zi.dot(this.direction),l=zi.dot(zi)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),g>=0?(c=(e.min.y-S.y)*g,d=(e.max.y-S.y)*g):(c=(e.max.y-S.y)*g,d=(e.min.y-S.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(h=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,i,s,l,c){kf.subVectors(i,e),Xl.subVectors(s,e),qf.crossVectors(kf,Xl);let d=this.direction.dot(qf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ya.subVectors(this.origin,e);const m=h*this.direction.dot(Xl.crossVectors(ya,Xl));if(m<0)return null;const p=h*this.direction.dot(kf.cross(ya));if(p<0||m+p>d)return null;const g=-h*ya.dot(qf);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn{constructor(e,i,s,l,c,d,h,m,p,g,v,S,y,b,T,x){Sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,g,v,S,y,b,T,x)}set(e,i,s,l,c,d,h,m,p,g,v,S,y,b,T,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=b,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Qr.setFromMatrixColumn(e,0).length(),c=1/Qr.setFromMatrixColumn(e,1).length(),d=1/Qr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=d*g,y=d*v,b=h*g,T=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+b*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=b+y*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*g,y=m*v,b=p*g,T=p*v;i[0]=S+T*h,i[4]=b*h-y,i[8]=d*p,i[1]=d*v,i[5]=d*g,i[9]=-h,i[2]=y*h-b,i[6]=T+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*g,y=m*v,b=p*g,T=p*v;i[0]=S-T*h,i[4]=-d*v,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*g,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*g,y=d*v,b=h*g,T=h*v;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+T,i[1]=m*v,i[5]=T*p+S,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=T-S*v,i[8]=b*v+y,i[1]=v,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*v+b,i[10]=S-T*v}else if(e.order==="XZY"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+T,i[5]=d*g,i[9]=y*v-b,i[2]=b*v-y,i[6]=h*g,i[10]=T*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,kx)}lookAt(e,i,s){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ea.crossVectors(s,Xn),Ea.lengthSq()===0&&(Math.abs(s.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ea.crossVectors(s,Xn)),Ea.normalize(),Wl.crossVectors(Xn,Ea),l[0]=Ea.x,l[4]=Wl.x,l[8]=Xn.x,l[1]=Ea.y,l[5]=Wl.y,l[9]=Xn.y,l[2]=Ea.z,l[6]=Wl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],v=s[5],S=s[9],y=s[13],b=s[2],T=s[6],x=s[10],_=s[14],L=s[3],w=s[7],O=s[11],V=s[15],I=l[0],B=l[4],dt=l[8],D=l[12],N=l[1],lt=l[5],ct=l[9],Mt=l[13],W=l[2],J=l[6],P=l[10],Y=l[14],K=l[3],ut=l[7],R=l[11],X=l[15];return c[0]=d*I+h*N+m*W+p*K,c[4]=d*B+h*lt+m*J+p*ut,c[8]=d*dt+h*ct+m*P+p*R,c[12]=d*D+h*Mt+m*Y+p*X,c[1]=g*I+v*N+S*W+y*K,c[5]=g*B+v*lt+S*J+y*ut,c[9]=g*dt+v*ct+S*P+y*R,c[13]=g*D+v*Mt+S*Y+y*X,c[2]=b*I+T*N+x*W+_*K,c[6]=b*B+T*lt+x*J+_*ut,c[10]=b*dt+T*ct+x*P+_*R,c[14]=b*D+T*Mt+x*Y+_*X,c[3]=L*I+w*N+O*W+V*K,c[7]=L*B+w*lt+O*J+V*ut,c[11]=L*dt+w*ct+O*P+V*R,c[15]=L*D+w*Mt+O*Y+V*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],S=e[10],y=e[14],b=e[3],T=e[7],x=e[11],_=e[15];return b*(+c*m*v-l*p*v-c*h*S+s*p*S+l*h*y-s*m*y)+T*(+i*m*y-i*p*S+c*d*S-l*d*y+l*p*g-c*m*g)+x*(+i*p*v-i*h*y-c*d*v+s*d*y+c*h*g-s*p*g)+_*(-l*h*g-i*m*v+i*h*S+l*d*v-s*d*S+s*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],S=e[10],y=e[11],b=e[12],T=e[13],x=e[14],_=e[15],L=v*x*p-T*S*p+T*m*y-h*x*y-v*m*_+h*S*_,w=b*S*p-g*x*p-b*m*y+d*x*y+g*m*_-d*S*_,O=g*T*p-b*v*p+b*h*y-d*T*y-g*h*_+d*v*_,V=b*v*m-g*T*m-b*h*S+d*T*S+g*h*x-d*v*x,I=i*L+s*w+l*O+c*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=L*B,e[1]=(T*S*c-v*x*c-T*l*y+s*x*y+v*l*_-s*S*_)*B,e[2]=(h*x*c-T*m*c+T*l*p-s*x*p-h*l*_+s*m*_)*B,e[3]=(v*m*c-h*S*c-v*l*p+s*S*p+h*l*y-s*m*y)*B,e[4]=w*B,e[5]=(g*x*c-b*S*c+b*l*y-i*x*y-g*l*_+i*S*_)*B,e[6]=(b*m*c-d*x*c-b*l*p+i*x*p+d*l*_-i*m*_)*B,e[7]=(d*S*c-g*m*c+g*l*p-i*S*p-d*l*y+i*m*y)*B,e[8]=O*B,e[9]=(b*v*c-g*T*c-b*s*y+i*T*y+g*s*_-i*v*_)*B,e[10]=(d*T*c-b*h*c+b*s*p-i*T*p-d*s*_+i*h*_)*B,e[11]=(g*h*c-d*v*c-g*s*p+i*v*p+d*s*y-i*h*y)*B,e[12]=V*B,e[13]=(g*T*l-b*v*l+b*s*S-i*T*S-g*s*x+i*v*x)*B,e[14]=(b*h*l-d*T*l-b*s*m+i*T*m+d*s*x-i*h*x)*B,e[15]=(d*v*l-g*h*l+g*s*m-i*v*m-d*s*S+i*h*S)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,v=h+h,S=c*p,y=c*g,b=c*v,T=d*g,x=d*v,_=h*v,L=m*p,w=m*g,O=m*v,V=s.x,I=s.y,B=s.z;return l[0]=(1-(T+_))*V,l[1]=(y+O)*V,l[2]=(b-w)*V,l[3]=0,l[4]=(y-O)*I,l[5]=(1-(S+_))*I,l[6]=(x+L)*I,l[7]=0,l[8]=(b+w)*B,l[9]=(x-L)*B,l[10]=(1-(S+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Qr.set(l[0],l[1],l[2]).length();const d=Qr.set(l[4],l[5],l[6]).length(),h=Qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],li.copy(this);const p=1/c,g=1/d,v=1/h;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,i.setFromRotationMatrix(li),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Xi){const m=this.elements,p=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),S=(s+l)/(s-l);let y,b;if(h===Xi)y=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(h===du)y=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Xi){const m=this.elements,p=1/(i-e),g=1/(s-l),v=1/(d-c),S=(i+e)*p,y=(s+l)*g;let b,T;if(h===Xi)b=(d+c)*v,T=-2*v;else if(h===du)b=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=T,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Qr=new ot,li=new Sn,Wx=new ot(0,0,0),kx=new ot(1,1,1),Ea=new ot,Wl=new ot,Xn=new ot,Jg=new Sn,$g=new Ao;class _u{constructor(e=0,i=0,s=0,l=_u.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(On(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_u.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qx=0;const t_=new ot,Jr=new Ao,Bi=new Sn,kl=new ot,xo=new ot,Yx=new ot,Zx=new Ao,e_=new ot(1,0,0),n_=new ot(0,1,0),i_=new ot(0,0,1),jx={type:"added"},Kx={type:"removed"};class qn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ot,i=new _u,s=new Ao,l=new ot(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new fe}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,i){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?kl.copy(e):kl.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(xo,kl,this.up):Bi.lookAt(kl,xo,this.up),this.quaternion.setFromRotationMatrix(Bi),l&&(Bi.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Kx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const c=i[s];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++){const h=l[c];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),v=d(e.shapes),S=d(e.skeletons),y=d(e.animations),b=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ot(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new ot,Ii=new ot,Yf=new ot,Fi=new ot,$r=new ot,ts=new ot,a_=new ot,Zf=new ot,jf=new ot,Kf=new ot;let ql=!1;class ci{constructor(e=new ot,i=new ot,s=new ot){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ui.subVectors(e,i),l.cross(ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){ui.subVectors(l,i),Ii.subVectors(s,i),Yf.subVectors(e,i);const d=ui.dot(ui),h=ui.dot(Ii),m=ui.dot(Yf),p=Ii.dot(Ii),g=Ii.dot(Yf),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(p*m-h*g)*S,b=(d*g-h*m)*S;return c.set(1-y-b,b,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,i,s,l,c,d,h,m){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),this.getInterpolation(e,i,s,l,c,d,h,m)}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,Fi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Fi.x),m.addScaledVector(d,Fi.y),m.addScaledVector(h,Fi.z),m)}static isFrontFacing(e,i,s,l){return ui.subVectors(s,i),Ii.subVectors(e,i),ui.cross(Ii).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ui.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ci.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,c){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}getInterpolation(e,i,s,l,c){return ci.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;$r.subVectors(l,s),ts.subVectors(c,s),Zf.subVectors(e,s);const m=$r.dot(Zf),p=ts.dot(Zf);if(m<=0&&p<=0)return i.copy(s);jf.subVectors(e,l);const g=$r.dot(jf),v=ts.dot(jf);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector($r,d);Kf.subVectors(e,c);const y=$r.dot(Kf),b=ts.dot(Kf);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(ts,h);const x=g*b-y*v;if(x<=0&&v-g>=0&&y-b>=0)return a_.subVectors(c,l),h=(v-g)/(v-g+(y-b)),i.copy(l).addScaledVector(a_,h);const _=1/(x+T+S);return d=T*_,h=S*_,i.copy(s).addScaledVector($r,d).addScaledVector(ts,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Qf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ue.workingColorSpace){if(e=Px(e,1),i=On(i,0,1),s=On(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Qf(d,c,e+1/3),this.g=Qf(d,c,e),this.b=Qf(d,c,e-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(e,i=_n){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_n){const s=Q_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Ue.fromWorkingColorSpace(Tn.copy(this),e),Math.round(On(Tn.r*255,0,255))*65536+Math.round(On(Tn.g*255,0,255))*256+Math.round(On(Tn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Tn.copy(this),i);const s=Tn.r,l=Tn.g,c=Tn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=g<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=_n){Ue.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,s=Tn.g,l=Tn.b;return e!==_n?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ta),this.setHSL(Ta.h+e,Ta.s+i,Ta.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ta),e.getHSL(Yl);const s=Bf(Ta.h,Yl.h,i),l=Bf(Ta.s,Yl.s,i),c=Bf(Ta.l,Yl.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Le;Le.NAMES=Q_;let Qx=0;class vu extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=cs,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=uu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(s.blending=this.blending),this.side!==wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==oh&&(s.blendSrc=this.blendSrc),this.blendDst!==lh&&(s.blendDst=this.blendDst),this.blendEquation!==nr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==uu&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class J_ extends vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new ot,Zl=new xe;class Si{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=kg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Zl.fromBufferAttribute(this,i),Zl.applyMatrix3(e),this.setXY(i,Zl.x,Zl.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=_o(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ln(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=_o(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=_o(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=_o(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=_o(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ln(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array),l=Ln(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Ln(i,this.array),s=Ln(s,this.array),l=Ln(l,this.array),c=Ln(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}}class $_ extends Si{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class tv extends Si{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class lr extends Si{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Jx=0;const ei=new Sn,Jf=new qn,es=new ot,Wn=new Ro,Mo=new Ro,un=new ot;class ur extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?tv:$_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,i,s){return ei.makeTranslation(e,i,s),this.applyMatrix4(ei),this}scale(e,i,s){return ei.makeScale(e,i,s),this.applyMatrix4(ei),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new lr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Wn.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ot,1/0);return}if(e){const s=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Mo.setFromBufferAttribute(h),this.morphTargetsRelative?(un.addVectors(Wn.min,Mo.min),Wn.expandByPoint(un),un.addVectors(Wn.max,Mo.max),Wn.expandByPoint(un)):(Wn.expandByPoint(Mo.min),Wn.expandByPoint(Mo.max))}Wn.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)un.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(un));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)un.fromBufferAttribute(h,p),m&&(es.fromBufferAttribute(e,p),un.add(es)),l=Math.max(l,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,c=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let N=0;N<h;N++)p[N]=new ot,g[N]=new ot;const v=new ot,S=new ot,y=new ot,b=new xe,T=new xe,x=new xe,_=new ot,L=new ot;function w(N,lt,ct){v.fromArray(l,N*3),S.fromArray(l,lt*3),y.fromArray(l,ct*3),b.fromArray(d,N*2),T.fromArray(d,lt*2),x.fromArray(d,ct*2),S.sub(v),y.sub(v),T.sub(b),x.sub(b);const Mt=1/(T.x*x.y-x.x*T.y);isFinite(Mt)&&(_.copy(S).multiplyScalar(x.y).addScaledVector(y,-T.y).multiplyScalar(Mt),L.copy(y).multiplyScalar(T.x).addScaledVector(S,-x.x).multiplyScalar(Mt),p[N].add(_),p[lt].add(_),p[ct].add(_),g[N].add(L),g[lt].add(L),g[ct].add(L))}let O=this.groups;O.length===0&&(O=[{start:0,count:s.length}]);for(let N=0,lt=O.length;N<lt;++N){const ct=O[N],Mt=ct.start,W=ct.count;for(let J=Mt,P=Mt+W;J<P;J+=3)w(s[J+0],s[J+1],s[J+2])}const V=new ot,I=new ot,B=new ot,dt=new ot;function D(N){B.fromArray(c,N*3),dt.copy(B);const lt=p[N];V.copy(lt),V.sub(B.multiplyScalar(B.dot(lt))).normalize(),I.crossVectors(dt,lt);const Mt=I.dot(g[N])<0?-1:1;m[N*4]=V.x,m[N*4+1]=V.y,m[N*4+2]=V.z,m[N*4+3]=Mt}for(let N=0,lt=O.length;N<lt;++N){const ct=O[N],Mt=ct.start,W=ct.count;for(let J=Mt,P=Mt+W;J<P;J+=3)D(s[J+0]),D(s[J+1]),D(s[J+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new ot,c=new ot,d=new ot,h=new ot,m=new ot,p=new ot,g=new ot,v=new ot;if(e)for(let S=0,y=e.count;S<y;S+=3){const b=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,x),h.add(g),m.add(g),p.add(g),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)un.fromBufferAttribute(e,i),un.normalize(),e.setXYZ(i,un.x,un.y,un.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let T=0,x=m.length;T<x;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*g;for(let _=0;_<g;_++)S[b++]=p[y++]}return new Si(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ur,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const S=p[g],y=e(S,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new Sn,Ja=new Xx,jl=new xh,s_=new ot,ns=new ot,is=new ot,as=new ot,$f=new ot,Kl=new ot,Ql=new xe,Jl=new xe,$l=new xe,o_=new ot,l_=new ot,u_=new ot,tu=new ot,eu=new ot;class Wi extends qn{constructor(e=new ur,i=new J_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Kl.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&($f.fromBufferAttribute(v,e),d?Kl.addScaledVector($f,g):Kl.addScaledVector($f.sub(i),g))}i.add(Kl)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),jl.copy(s.boundingSphere),jl.applyMatrix4(c),Ja.copy(e.ray).recast(e.near),!(jl.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(jl,s_)===null||Ja.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),Ja.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&Ja.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ja)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const x=S[b],_=d[x.materialIndex],L=Math.max(x.start,y.start),w=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let O=L,V=w;O<V;O+=3){const I=h.getX(O),B=h.getX(O+1),dt=h.getX(O+2);l=nu(this,_,e,s,p,g,v,I,B,dt),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let x=b,_=T;x<_;x+=3){const L=h.getX(x),w=h.getX(x+1),O=h.getX(x+2);l=nu(this,d,e,s,p,g,v,L,w,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const x=S[b],_=d[x.materialIndex],L=Math.max(x.start,y.start),w=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let O=L,V=w;O<V;O+=3){const I=O,B=O+1,dt=O+2;l=nu(this,_,e,s,p,g,v,I,B,dt),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let x=b,_=T;x<_;x+=3){const L=x,w=x+1,O=x+2;l=nu(this,d,e,s,p,g,v,L,w,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function $x(o,e,i,s,l,c,d,h){let m;if(e.side===Pn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===wa,h),m===null)return null;eu.copy(h),eu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(eu);return p<i.near||p>i.far?null:{distance:p,point:eu.clone(),object:o}}function nu(o,e,i,s,l,c,d,h,m,p){o.getVertexPosition(h,ns),o.getVertexPosition(m,is),o.getVertexPosition(p,as);const g=$x(o,e,i,s,ns,is,as,tu);if(g){l&&(Ql.fromBufferAttribute(l,h),Jl.fromBufferAttribute(l,m),$l.fromBufferAttribute(l,p),g.uv=ci.getInterpolation(tu,ns,is,as,Ql,Jl,$l,new xe)),c&&(Ql.fromBufferAttribute(c,h),Jl.fromBufferAttribute(c,m),$l.fromBufferAttribute(c,p),g.uv1=ci.getInterpolation(tu,ns,is,as,Ql,Jl,$l,new xe),g.uv2=g.uv1),d&&(o_.fromBufferAttribute(d,h),l_.fromBufferAttribute(d,m),u_.fromBufferAttribute(d,p),g.normal=ci.getInterpolation(tu,ns,is,as,o_,l_,u_,new ot),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ot,materialIndex:0};ci.getNormal(ns,is,as,v.normal),g.face=v}return g}class Co extends ur{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],v=[];let S=0,y=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new lr(p,3)),this.setAttribute("normal",new lr(g,3)),this.setAttribute("uv",new lr(v,2));function b(T,x,_,L,w,O,V,I,B,dt,D){const N=O/B,lt=V/dt,ct=O/2,Mt=V/2,W=I/2,J=B+1,P=dt+1;let Y=0,K=0;const ut=new ot;for(let R=0;R<P;R++){const X=R*lt-Mt;for(let et=0;et<J;et++){const G=et*N-ct;ut[T]=G*L,ut[x]=X*w,ut[_]=W,p.push(ut.x,ut.y,ut.z),ut[T]=0,ut[x]=0,ut[_]=I>0?1:-1,g.push(ut.x,ut.y,ut.z),v.push(et/B),v.push(1-R/dt),Y+=1}}for(let R=0;R<dt;R++)for(let X=0;X<B;X++){const et=S+X+J*R,G=S+X+J*(R+1),nt=S+(X+1)+J*(R+1),mt=S+(X+1)+J*R;m.push(et,G,mt),m.push(G,nt,mt),K+=6}h.addGroup(y,K,D),y+=K,S+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const s=ms(o[i]);for(const l in s)e[l]=s[l]}return e}function tM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ev(o){return o.getRenderTarget()===null?o.outputColorSpace:Ue.workingColorSpace}const eM={clone:ms,merge:An};var nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class nv extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=Xi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fi extends nv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const rs=-90,ss=1;class aM extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(rs,ss,e,i);l.layers=this.layers,this.add(l);const c=new fi(rs,ss,e,i);c.layers=this.layers,this.add(c);const d=new fi(rs,ss,e,i);d.layers=this.layers,this.add(d);const h=new fi(rs,ss,e,i);h.layers=this.layers,this.add(h);const m=new fi(rs,ss,e,i);m.layers=this.layers,this.add(m);const p=new fi(rs,ss,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===du)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class iv extends Rn{constructor(e,i,s,l,c,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:hs,super(e,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(yo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===or?_n:ni),this.texture=new iv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Nn}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Co(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:ms(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Pn,blending:Aa});c.uniforms.tEquirect.value=i;const d=new Wi(l,c),h=i.minFilter;return i.minFilter===Eo&&(i.minFilter=Nn),new aM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}const th=new ot,sM=new ot,oM=new fe;class tr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=th.subVectors(s,i).cross(sM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||oM.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new xh,iu=new ot;class av{constructor(e=new tr,i=new tr,s=new tr,l=new tr,c=new tr,d=new tr){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi){const s=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],v=l[6],S=l[7],y=l[8],b=l[9],T=l[10],x=l[11],_=l[12],L=l[13],w=l[14],O=l[15];if(s[0].setComponents(m-c,S-p,x-y,O-_).normalize(),s[1].setComponents(m+c,S+p,x+y,O+_).normalize(),s[2].setComponents(m+d,S+g,x+b,O+L).normalize(),s[3].setComponents(m-d,S-g,x-b,O-L).normalize(),s[4].setComponents(m-h,S-v,x-T,O-w).normalize(),i===Xi)s[5].setComponents(m+h,S+v,x+T,O+w).normalize();else if(i===du)s[5].setComponents(h,v,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){return $a.center.set(0,0,0),$a.radius=.7071067811865476,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(iu.x=l.normal.x>0?e.max.x:e.min.x,iu.y=l.normal.y>0?e.max.y:e.min.y,iu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rv(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function lM(o,e){const i=e.isWebGL2,s=new WeakMap;function l(p,g){const v=p.array,S=p.usage,y=v.byteLength,b=o.createBuffer();o.bindBuffer(g,b),o.bufferData(g,v,S),p.onUploadCallback();let T;if(v instanceof Float32Array)T=o.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)T=o.SHORT;else if(v instanceof Uint32Array)T=o.UNSIGNED_INT;else if(v instanceof Int32Array)T=o.INT;else if(v instanceof Int8Array)T=o.BYTE;else if(v instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:b,type:T,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:y}}function c(p,g,v){const S=g.array,y=g._updateRange,b=g.updateRanges;if(o.bindBuffer(v,p),y.count===-1&&b.length===0&&o.bufferSubData(v,0,S),b.length!==0){for(let T=0,x=b.length;T<x;T++){const _=b[T];i?o.bufferSubData(v,_.start*S.BYTES_PER_ELEMENT,S,_.start,_.count):o.bufferSubData(v,_.start*S.BYTES_PER_ELEMENT,S.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}y.count!==-1&&(i?o.bufferSubData(v,y.offset*S.BYTES_PER_ELEMENT,S,y.offset,y.count):o.bufferSubData(v,y.offset*S.BYTES_PER_ELEMENT,S.subarray(y.offset,y.offset+y.count)),y.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=s.get(p);g&&(o.deleteBuffer(g.buffer),s.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const S=s.get(p);(!S||S.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=s.get(p);if(v===void 0)s.set(p,l(p,g));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(v.buffer,p,g),v.version=p.version}}return{get:d,remove:h,update:m}}class Su extends ur{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,v=e/h,S=i/m,y=[],b=[],T=[],x=[];for(let _=0;_<g;_++){const L=_*S-d;for(let w=0;w<p;w++){const O=w*v-c;b.push(O,-L,0),T.push(0,0,1),x.push(w/h),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const w=L+p*_,O=L+p*(_+1),V=L+1+p*(_+1),I=L+1+p*_;y.push(w,O,I),y.push(O,V,I)}this.setIndex(y),this.setAttribute("position",new lr(b,3)),this.setAttribute("normal",new lr(T,3)),this.setAttribute("uv",new lr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Su(e.width,e.height,e.widthSegments,e.heightSegments)}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mM=`#ifdef USE_AOMAP
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
#endif`,gM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_M=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,LM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,NM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,GM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ly=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,uy=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,by=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
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
}`,mE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,gE=`#define DISTANCE
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
}`,_E=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TE=`#define LAMBERT
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
}`,bE=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,AE=`#define MATCAP
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
}`,RE=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,CE=`#define NORMAL
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
}`,wE=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DE=`#define PHONG
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
}`,UE=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,LE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,OE=`#define TOON
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
}`,PE=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,FE=`uniform vec3 color;
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
}`,HE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,GE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,se={alphahash_fragment:uM,alphahash_pars_fragment:cM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:dM,alphatest_pars_fragment:pM,aomap_fragment:mM,aomap_pars_fragment:gM,batching_pars_vertex:_M,batching_vertex:vM,begin_vertex:SM,beginnormal_vertex:xM,bsdfs:MM,iridescence_fragment:yM,bumpmap_pars_fragment:EM,clipping_planes_fragment:TM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:RM,color_fragment:CM,color_pars_fragment:wM,color_pars_vertex:DM,color_vertex:UM,common:LM,cube_uv_reflection_fragment:NM,defaultnormal_vertex:OM,displacementmap_pars_vertex:PM,displacementmap_vertex:zM,emissivemap_fragment:BM,emissivemap_pars_fragment:IM,colorspace_fragment:FM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:XM,envmap_pars_vertex:WM,envmap_physical_pars_fragment:ny,envmap_vertex:kM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:ZM,fog_pars_fragment:jM,gradientmap_pars_fragment:KM,lightmap_fragment:QM,lightmap_pars_fragment:JM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:ty,lights_pars_begin:ey,lights_toon_fragment:iy,lights_toon_pars_fragment:ay,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:uy,lights_fragment_maps:cy,lights_fragment_end:fy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:_y,map_particle_fragment:vy,map_particle_pars_fragment:Sy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:My,morphcolor_vertex:yy,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:by,normal_fragment_begin:Ay,normal_fragment_maps:Ry,normal_pars_fragment:Cy,normal_pars_vertex:wy,normal_vertex:Dy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Py,opaque_fragment:zy,packing:By,premultiplied_alpha_fragment:Iy,project_vertex:Fy,dithering_fragment:Hy,dithering_pars_fragment:Gy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:ky,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:Zy,skinning_pars_vertex:jy,skinning_vertex:Ky,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:$y,tonemapping_fragment:tE,tonemapping_pars_fragment:eE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:aE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:lE,background_frag:uE,backgroundCube_vert:cE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:gE,distanceRGBA_frag:_E,equirect_vert:vE,equirect_frag:SE,linedashed_vert:xE,linedashed_frag:ME,meshbasic_vert:yE,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:bE,meshmatcap_vert:AE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:wE,meshphong_vert:DE,meshphong_frag:UE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:PE,points_vert:zE,points_frag:BE,shadow_vert:IE,shadow_frag:FE,sprite_vert:HE,sprite_frag:GE},Tt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},vi={basic:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Le(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:An([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:An([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:An([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Le(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:An([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:An([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:An([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:An([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:An([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:An([Tt.common,Tt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:An([Tt.lights,Tt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};vi.physical={uniforms:An([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const au={r:0,b:0,g:0};function VE(o,e,i,s,l,c,d){const h=new Le(0);let m=c===!0?0:1,p,g,v=null,S=0,y=null;function b(x,_){let L=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?i:e).get(w)),w===null?T(h,m):w&&w.isColor&&(T(w,1),L=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),w&&(w.isCubeTexture||w.mapping===mu)?(g===void 0&&(g=new Wi(new Co(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ms(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(w.colorSpace)!==Fe,(v!==w||S!==w.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=w,S=w.version,y=o.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Wi(new Su(2,2),new Yi({name:"BackgroundMaterial",uniforms:ms(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(w.colorSpace)!==Fe,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||S!==w.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=w,S=w.version,y=o.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function T(x,_){x.getRGB(au,ev(o)),s.buffers.color.setClear(au.r,au.g,au.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(x,_=1){h.set(x),m=_,T(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(x){m=x,T(h,m)},render:b}}function XE(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),c=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||c!==null,h={},m=x(null);let p=m,g=!1;function v(W,J,P,Y,K){let ut=!1;if(d){const R=T(Y,P,J);p!==R&&(p=R,y(p.object)),ut=_(W,Y,P,K),ut&&L(W,Y,P,K)}else{const R=J.wireframe===!0;(p.geometry!==Y.id||p.program!==P.id||p.wireframe!==R)&&(p.geometry=Y.id,p.program=P.id,p.wireframe=R,ut=!0)}K!==null&&i.update(K,o.ELEMENT_ARRAY_BUFFER),(ut||g)&&(g=!1,dt(W,J,P,Y),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(K).buffer))}function S(){return s.isWebGL2?o.createVertexArray():c.createVertexArrayOES()}function y(W){return s.isWebGL2?o.bindVertexArray(W):c.bindVertexArrayOES(W)}function b(W){return s.isWebGL2?o.deleteVertexArray(W):c.deleteVertexArrayOES(W)}function T(W,J,P){const Y=P.wireframe===!0;let K=h[W.id];K===void 0&&(K={},h[W.id]=K);let ut=K[J.id];ut===void 0&&(ut={},K[J.id]=ut);let R=ut[Y];return R===void 0&&(R=x(S()),ut[Y]=R),R}function x(W){const J=[],P=[],Y=[];for(let K=0;K<l;K++)J[K]=0,P[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:P,attributeDivisors:Y,object:W,attributes:{},index:null}}function _(W,J,P,Y){const K=p.attributes,ut=J.attributes;let R=0;const X=P.getAttributes();for(const et in X)if(X[et].location>=0){const nt=K[et];let mt=ut[et];if(mt===void 0&&(et==="instanceMatrix"&&W.instanceMatrix&&(mt=W.instanceMatrix),et==="instanceColor"&&W.instanceColor&&(mt=W.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;R++}return p.attributesNum!==R||p.index!==Y}function L(W,J,P,Y){const K={},ut=J.attributes;let R=0;const X=P.getAttributes();for(const et in X)if(X[et].location>=0){let nt=ut[et];nt===void 0&&(et==="instanceMatrix"&&W.instanceMatrix&&(nt=W.instanceMatrix),et==="instanceColor"&&W.instanceColor&&(nt=W.instanceColor));const mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),K[et]=mt,R++}p.attributes=K,p.attributesNum=R,p.index=Y}function w(){const W=p.newAttributes;for(let J=0,P=W.length;J<P;J++)W[J]=0}function O(W){V(W,0)}function V(W,J){const P=p.newAttributes,Y=p.enabledAttributes,K=p.attributeDivisors;P[W]=1,Y[W]===0&&(o.enableVertexAttribArray(W),Y[W]=1),K[W]!==J&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,J),K[W]=J)}function I(){const W=p.newAttributes,J=p.enabledAttributes;for(let P=0,Y=J.length;P<Y;P++)J[P]!==W[P]&&(o.disableVertexAttribArray(P),J[P]=0)}function B(W,J,P,Y,K,ut,R){R===!0?o.vertexAttribIPointer(W,J,P,K,ut):o.vertexAttribPointer(W,J,P,Y,K,ut)}function dt(W,J,P,Y){if(s.isWebGL2===!1&&(W.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const K=Y.attributes,ut=P.getAttributes(),R=J.defaultAttributeValues;for(const X in ut){const et=ut[X];if(et.location>=0){let G=K[X];if(G===void 0&&(X==="instanceMatrix"&&W.instanceMatrix&&(G=W.instanceMatrix),X==="instanceColor"&&W.instanceColor&&(G=W.instanceColor)),G!==void 0){const nt=G.normalized,mt=G.itemSize,gt=i.get(G);if(gt===void 0)continue;const Dt=gt.buffer,Ut=gt.type,qt=gt.bytesPerElement,Wt=s.isWebGL2===!0&&(Ut===o.INT||Ut===o.UNSIGNED_INT||G.gpuType===B_);if(G.isInterleavedBufferAttribute){const ue=G.data,it=ue.stride,$e=G.offset;if(ue.isInstancedInterleavedBuffer){for(let Ft=0;Ft<et.locationSize;Ft++)V(et.location+Ft,ue.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ft=0;Ft<et.locationSize;Ft++)O(et.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let Ft=0;Ft<et.locationSize;Ft++)B(et.location+Ft,mt/et.locationSize,Ut,nt,it*qt,($e+mt/et.locationSize*Ft)*qt,Wt)}else{if(G.isInstancedBufferAttribute){for(let ue=0;ue<et.locationSize;ue++)V(et.location+ue,G.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ue=0;ue<et.locationSize;ue++)O(et.location+ue);o.bindBuffer(o.ARRAY_BUFFER,Dt);for(let ue=0;ue<et.locationSize;ue++)B(et.location+ue,mt/et.locationSize,Ut,nt,mt*qt,mt/et.locationSize*ue*qt,Wt)}}else if(R!==void 0){const nt=R[X];if(nt!==void 0)switch(nt.length){case 2:o.vertexAttrib2fv(et.location,nt);break;case 3:o.vertexAttrib3fv(et.location,nt);break;case 4:o.vertexAttrib4fv(et.location,nt);break;default:o.vertexAttrib1fv(et.location,nt)}}}}I()}function D(){ct();for(const W in h){const J=h[W];for(const P in J){const Y=J[P];for(const K in Y)b(Y[K].object),delete Y[K];delete J[P]}delete h[W]}}function N(W){if(h[W.id]===void 0)return;const J=h[W.id];for(const P in J){const Y=J[P];for(const K in Y)b(Y[K].object),delete Y[K];delete J[P]}delete h[W.id]}function lt(W){for(const J in h){const P=h[J];if(P[W.id]===void 0)continue;const Y=P[W.id];for(const K in Y)b(Y[K].object),delete Y[K];delete P[W.id]}}function ct(){Mt(),g=!0,p!==m&&(p=m,y(p.object))}function Mt(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:v,reset:ct,resetDefaultState:Mt,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:lt,initAttributes:w,enableAttribute:O,disableUnusedAttributes:I}}function WE(o,e,i,s){const l=s.isWebGL2;let c;function d(g){c=g}function h(g,v){o.drawArrays(c,g,v),i.update(v,c,1)}function m(g,v,S){if(S===0)return;let y,b;if(l)y=o,b="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[b](c,g,v,S),i.update(v,c,S)}function p(g,v,S){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<S;b++)this.render(g[b],v[b]);else{y.multiDrawArraysWEBGL(c,g,0,v,0,S);let b=0;for(let T=0;T<S;T++)b+=v[T];i.update(b,c,1)}}this.setMode=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function kE(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=c(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),w=S>0,O=d||e.has("OES_texture_float"),V=w&&O,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:c,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:y,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:L,vertexTextures:w,floatFragmentTextures:O,floatVertexTextures:V,maxSamples:I}}function qE(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new tr,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||s!==0||l;return l=S,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const b=v.clippingPlanes,T=v.clipIntersection,x=v.clipShadows,_=o.get(v);if(!l||b===null||b.length===0||c&&!x)c?g(null):p();else{const L=c?0:s,w=L*4;let O=_.clippingState||null;m.value=O,O=g(b,S,w,y);for(let V=0;V!==w;++V)O[V]=i[V];_.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,S,y,b){const T=v!==null?v.length:0;let x=null;if(T!==0){if(x=m.value,b!==!0||x===null){const _=y+T*4,L=S.matrixWorldInverse;h.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,O=y;w!==T;++w,O+=4)d.copy(v[w]).applyMatrix4(L,h),d.normal.toArray(x,O),x[O+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function YE(o){let e=new WeakMap;function i(d,h){return h===uh?d.mapping=hs:h===ch&&(d.mapping=ds),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===uh||h===ch)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new rM(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class sv extends nv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ls=4,c_=[.125,.215,.35,.446,.526,.582],ir=20,eh=new sv,f_=new Le;let nh=null,ih=0,ah=0;const er=(1+Math.sqrt(5))/2,os=1/er,h_=[new ot(1,1,1),new ot(-1,1,1),new ot(1,1,-1),new ot(-1,1,-1),new ot(0,er,os),new ot(0,er,-os),new ot(os,0,er),new ot(-os,0,er),new ot(er,os,0),new ot(-er,os,0)];class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),e.scissorTest=!1,ru(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:To,format:kn,colorSpace:ki,depthBuffer:!1},l=p_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(c)),this._blurMaterial=jE(c,e,i)}return l}_compileMaterial(e){const i=new Wi(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,s,l){const h=new fi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(f_),g.toneMapping=Ra,g.autoClear=!1;const y=new J_({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),b=new Wi(new Co,y);let T=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,T=!0):(y.color.copy(f_),T=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):L===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const w=this._cubeSize;ru(l,L*w,_>2?w:0,w,w),g.setRenderTarget(l),T&&g.render(b,h),g.render(e,h)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=v,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===hs||e.mapping===ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Wi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;ru(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,eh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=h_[(l-1)%h_.length];this._blur(e,l-1,l,c,d)}i.autoClear=s}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Wi(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ir-1),T=c/b,x=isFinite(c)?1+Math.floor(g*T):ir;x>ir&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ir}`);const _=[];let L=0;for(let B=0;B<ir;++B){const dt=B/T,D=Math.exp(-dt*dt/2);_.push(D),B===0?L+=D:B<x&&(L+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:w}=this;S.dTheta.value=b,S.mipInt.value=w-s;const O=this._sizeLods[l],V=3*O*(l>w-ls?l-w+ls:0),I=4*(this._cubeSize-O);ru(i,V,I,3*O,2*O),m.setRenderTarget(i),m.render(v,eh)}}function ZE(o){const e=[],i=[],s=[];let l=o;const c=o-ls+1+c_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ls?m=c_[d-o+ls-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,T=3,x=2,_=1,L=new Float32Array(T*b*y),w=new Float32Array(x*b*y),O=new Float32Array(_*b*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,dt=I>2?0:-1,D=[B,dt,0,B+2/3,dt,0,B+2/3,dt+1,0,B,dt,0,B+2/3,dt+1,0,B,dt+1,0];L.set(D,T*b*I),w.set(S,x*b*I);const N=[I,I,I,I,I,I];O.set(N,_*b*I)}const V=new ur;V.setAttribute("position",new Si(L,T)),V.setAttribute("uv",new Si(w,x)),V.setAttribute("faceIndex",new Si(O,_)),e.push(V),l>ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function p_(o,e,i){const s=new qi(o,e,i);return s.texture.mapping=mu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ru(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function jE(o,e,i){const s=new Float32Array(ir),l=new ot(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function m_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function g_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function KE(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===uh||m===ch,g=m===hs||m===ds;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let v=e.get(h);return i===null&&(i=new d_(o)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),e.set(h,v),v.texture}else{if(e.has(h))return e.get(h).texture;{const v=h.image;if(p&&v&&v.height>0||g&&v&&l(v)){i===null&&(i=new d_(o));const S=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,S),h.addEventListener("dispose",c),S.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function QE(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function JE(o,e,i,s){const l={},c=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const T=S.morphAttributes[b];for(let x=0,_=T.length;x<_;x++)e.remove(T[x])}S.removeEventListener("dispose",d),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(v,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER);const y=v.morphAttributes;for(const b in y){const T=y[b];for(let x=0,_=T.length;x<_;x++)e.update(T[x],o.ARRAY_BUFFER)}}function p(v){const S=[],y=v.index,b=v.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let w=0,O=L.length;w<O;w+=3){const V=L[w+0],I=L[w+1],B=L[w+2];S.push(V,I,I,B,B,V)}}else if(b!==void 0){const L=b.array;T=b.version;for(let w=0,O=L.length/3-1;w<O;w+=3){const V=w+0,I=w+1,B=w+2;S.push(V,I,I,B,B,V)}}else return;const x=new(q_(S)?tv:$_)(S,1);x.version=T;const _=c.get(v);_&&e.remove(_),c.set(v,x)}function g(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function $E(o,e,i,s){const l=s.isWebGL2;let c;function d(y){c=y}let h,m;function p(y){h=y.type,m=y.bytesPerElement}function g(y,b){o.drawElements(c,b,h,y*m),i.update(b,c,1)}function v(y,b,T){if(T===0)return;let x,_;if(l)x=o,_="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[_](c,b,h,y*m,T),i.update(b,c,T)}function S(y,b,T){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<T;_++)this.render(y[_]/m,b[_]);else{x.multiDrawElementsWEBGL(c,b,0,h,y,0,T);let _=0;for(let L=0;L<T;L++)_+=b[L];i.update(_,c,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=v,this.renderMultiDraw=S}function tT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eT(o,e){return o[0]-e[0]}function nT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function iT(o,e,i){const s={},l=new Float32Array(8),c=new WeakMap,d=new vn,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,g,v){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=b!==void 0?b.length:0;let x=c.get(g);if(x===void 0||x.count!==T){let J=function(){Mt.dispose(),c.delete(g),g.removeEventListener("dispose",J)};var y=J;x!==void 0&&x.texture.dispose();const w=g.morphAttributes.position!==void 0,O=g.morphAttributes.normal!==void 0,V=g.morphAttributes.color!==void 0,I=g.morphAttributes.position||[],B=g.morphAttributes.normal||[],dt=g.morphAttributes.color||[];let D=0;w===!0&&(D=1),O===!0&&(D=2),V===!0&&(D=3);let N=g.attributes.position.count*D,lt=1;N>e.maxTextureSize&&(lt=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ct=new Float32Array(N*lt*4*T),Mt=new j_(ct,N,lt,T);Mt.type=Vi,Mt.needsUpdate=!0;const W=D*4;for(let P=0;P<T;P++){const Y=I[P],K=B[P],ut=dt[P],R=N*lt*4*P;for(let X=0;X<Y.count;X++){const et=X*W;w===!0&&(d.fromBufferAttribute(Y,X),ct[R+et+0]=d.x,ct[R+et+1]=d.y,ct[R+et+2]=d.z,ct[R+et+3]=0),O===!0&&(d.fromBufferAttribute(K,X),ct[R+et+4]=d.x,ct[R+et+5]=d.y,ct[R+et+6]=d.z,ct[R+et+7]=0),V===!0&&(d.fromBufferAttribute(ut,X),ct[R+et+8]=d.x,ct[R+et+9]=d.y,ct[R+et+10]=d.z,ct[R+et+11]=ut.itemSize===4?d.w:1)}}x={count:T,texture:Mt,size:new xe(N,lt)},c.set(g,x),g.addEventListener("dispose",J)}let _=0;for(let w=0;w<S.length;w++)_+=S[w];const L=g.morphTargetsRelative?1:1-_;v.getUniforms().setValue(o,"morphTargetBaseInfluence",L),v.getUniforms().setValue(o,"morphTargetInfluences",S),v.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const b=S===void 0?0:S.length;let T=s[g.id];if(T===void 0||T.length!==b){T=[];for(let O=0;O<b;O++)T[O]=[O,0];s[g.id]=T}for(let O=0;O<b;O++){const V=T[O];V[0]=O,V[1]=S[O]}T.sort(nT);for(let O=0;O<8;O++)O<b&&T[O][1]?(h[O][0]=T[O][0],h[O][1]=T[O][1]):(h[O][0]=Number.MAX_SAFE_INTEGER,h[O][1]=0);h.sort(eT);const x=g.morphAttributes.position,_=g.morphAttributes.normal;let L=0;for(let O=0;O<8;O++){const V=h[O],I=V[0],B=V[1];I!==Number.MAX_SAFE_INTEGER&&B?(x&&g.getAttribute("morphTarget"+O)!==x[I]&&g.setAttribute("morphTarget"+O,x[I]),_&&g.getAttribute("morphNormal"+O)!==_[I]&&g.setAttribute("morphNormal"+O,_[I]),l[O]=B,L+=B):(x&&g.hasAttribute("morphTarget"+O)===!0&&g.deleteAttribute("morphTarget"+O),_&&g.hasAttribute("morphNormal"+O)===!0&&g.deleteAttribute("morphNormal"+O),l[O]=0)}const w=g.morphTargetsRelative?1:1-L;v.getUniforms().setValue(o,"morphTargetBaseInfluence",w),v.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function aT(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}class ov extends Rn{constructor(e,i,s,l,c,d,h,m,p,g){if(g=g!==void 0?g:sr,g!==sr&&g!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===sr&&(s=ba),s===void 0&&g===ps&&(s=rr),super(null,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:gn,this.minFilter=m!==void 0?m:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const lv=new Rn,uv=new ov(1,1);uv.compareFunction=k_;const cv=new j_,fv=new Gx,hv=new iv,__=[],v_=[],S_=new Float32Array(16),x_=new Float32Array(9),M_=new Float32Array(4);function _s(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=__[l];if(c===void 0&&(c=new Float32Array(l),__[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function an(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function rn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function xu(o,e){let i=v_[e];i===void 0&&(i=new Int32Array(e),v_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function rT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2fv(this.addr,e),rn(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(an(i,e))return;o.uniform3fv(this.addr,e),rn(i,e)}}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4fv(this.addr,e),rn(i,e)}}function uT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(an(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),rn(i,e)}else{if(an(i,s))return;M_.set(s),o.uniformMatrix2fv(this.addr,!1,M_),rn(i,s)}}function cT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(an(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),rn(i,e)}else{if(an(i,s))return;x_.set(s),o.uniformMatrix3fv(this.addr,!1,x_),rn(i,s)}}function fT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(an(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),rn(i,e)}else{if(an(i,s))return;S_.set(s),o.uniformMatrix4fv(this.addr,!1,S_),rn(i,s)}}function hT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function dT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2iv(this.addr,e),rn(i,e)}}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(an(i,e))return;o.uniform3iv(this.addr,e),rn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4iv(this.addr,e),rn(i,e)}}function gT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2uiv(this.addr,e),rn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(an(i,e))return;o.uniform3uiv(this.addr,e),rn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4uiv(this.addr,e),rn(i,e)}}function xT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const c=this.type===o.SAMPLER_2D_SHADOW?uv:lv;i.setTexture2D(e||c,l)}function MT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||fv,l)}function yT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||hv,l)}function ET(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||cv,l)}function TT(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return uT;case 35675:return cT;case 35676:return fT;case 5124:case 35670:return hT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return _T;case 36295:return vT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ET}}function bT(o,e){o.uniform1fv(this.addr,e)}function AT(o,e){const i=_s(e,this.size,2);o.uniform2fv(this.addr,i)}function RT(o,e){const i=_s(e,this.size,3);o.uniform3fv(this.addr,i)}function CT(o,e){const i=_s(e,this.size,4);o.uniform4fv(this.addr,i)}function wT(o,e){const i=_s(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DT(o,e){const i=_s(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function UT(o,e){const i=_s(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function LT(o,e){o.uniform1iv(this.addr,e)}function NT(o,e){o.uniform2iv(this.addr,e)}function OT(o,e){o.uniform3iv(this.addr,e)}function PT(o,e){o.uniform4iv(this.addr,e)}function zT(o,e){o.uniform1uiv(this.addr,e)}function BT(o,e){o.uniform2uiv(this.addr,e)}function IT(o,e){o.uniform3uiv(this.addr,e)}function FT(o,e){o.uniform4uiv(this.addr,e)}function HT(o,e,i){const s=this.cache,l=e.length,c=xu(i,l);an(s,c)||(o.uniform1iv(this.addr,c),rn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||lv,c[d])}function GT(o,e,i){const s=this.cache,l=e.length,c=xu(i,l);an(s,c)||(o.uniform1iv(this.addr,c),rn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||fv,c[d])}function VT(o,e,i){const s=this.cache,l=e.length,c=xu(i,l);an(s,c)||(o.uniform1iv(this.addr,c),rn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||hv,c[d])}function XT(o,e,i){const s=this.cache,l=e.length,c=xu(i,l);an(s,c)||(o.uniform1iv(this.addr,c),rn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||cv,c[d])}function WT(o){switch(o){case 5126:return bT;case 35664:return AT;case 35665:return RT;case 35666:return CT;case 35674:return wT;case 35675:return DT;case 35676:return UT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return OT;case 35669:case 35673:return PT;case 5125:return zT;case 36294:return BT;case 36295:return IT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return XT}}class kT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TT(i.type)}}class qT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WT(i.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function y_(o,e){o.seq.push(e),o.map[e.id]=e}function ZT(o,e,i){const s=o.name,l=s.length;for(rh.lastIndex=0;;){const c=rh.exec(s),d=rh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){y_(i,p===void 0?new kT(h,o,e):new qT(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new YT(h),y_(i,v)),i=v}}}class lu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);ZT(c,d,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function E_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const jT=37297;let KT=0;function QT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function JT(o){const e=Ue.getPrimaries(Ue.workingColorSpace),i=Ue.getPrimaries(o);let s;switch(e===i?s="":e===hu&&i===fu?s="LinearDisplayP3ToLinearSRGB":e===fu&&i===hu&&(s="LinearSRGBToLinearDisplayP3"),o){case ki:case gu:return[s,"LinearTransferOETF"];case _n:case Sh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function T_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+QT(o.getShaderSource(e),d)}else return l}function $T(o,e){const i=JT(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function tb(o,e){let i;switch(e){case ux:i="Linear";break;case cx:i="Reinhard";break;case fx:i="OptimizedCineon";break;case hx:i="ACESFilmic";break;case px:i="AgX";break;case dx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function eb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(us).join(`
`)}function ib(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ab(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function us(o){return o!==""}function b_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(o){return o.replace(rb,ob)}const sb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ob(o,e){let i=se[e];if(i===void 0){const s=sb.get(e);if(s!==void 0)i=se[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return mh(i)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(o){return o.replace(lb,ub)}function ub(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function C_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===O_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===BS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function fb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function db(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case P_:e="ENVMAP_BLENDING_MULTIPLY";break;case ox:e="ENVMAP_BLENDING_MIX";break;case lx:e="ENVMAP_BLENDING_ADD";break}return e}function pb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function mb(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=cb(i),p=fb(i),g=hb(i),v=db(i),S=pb(i),y=i.isWebGL2?"":eb(i),b=nb(i),T=ib(c),x=l.createProgram();let _,L,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(us).join(`
`),_.length>0&&(_+=`
`),L=[y,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(us).join(`
`),L.length>0&&(L+=`
`)):(_=[C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),L=[y,C_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?se.tonemapping_pars_fragment:"",i.toneMapping!==Ra?tb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,$T("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(us).join(`
`)),d=mh(d),d=b_(d,i),d=A_(d,i),h=mh(h),h=b_(h,i),h=A_(h,i),d=R_(d),h=R_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,L=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const O=w+_+d,V=w+L+h,I=E_(l,l.VERTEX_SHADER,O),B=E_(l,l.FRAGMENT_SHADER,V);l.attachShader(x,I),l.attachShader(x,B),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function dt(ct){if(o.debug.checkShaderErrors){const Mt=l.getProgramInfoLog(x).trim(),W=l.getShaderInfoLog(I).trim(),J=l.getShaderInfoLog(B).trim();let P=!0,Y=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(P=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,x,I,B);else{const K=T_(l,I,"vertex"),ut=T_(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Program Info Log: `+Mt+`
`+K+`
`+ut)}else Mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Mt):(W===""||J==="")&&(Y=!1);Y&&(ct.diagnostics={runnable:P,programLog:Mt,vertexShader:{log:W,prefix:_},fragmentShader:{log:J,prefix:L}})}l.deleteShader(I),l.deleteShader(B),D=new lu(l,x),N=ab(l,x)}let D;this.getUniforms=function(){return D===void 0&&dt(this),D};let N;this.getAttributes=function(){return N===void 0&&dt(this),N};let lt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return lt===!1&&(lt=l.getProgramParameter(x,jT)),lt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=B,this}let gb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new vb(e),i.set(e,s)),s}}class vb{constructor(e){this.id=gb++,this.code=e,this.usedTimes=0}}function Sb(o,e,i,s,l,c,d){const h=new K_,m=new _b,p=[],g=l.isWebGL2,v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return D===0?"uv":`uv${D}`}function x(D,N,lt,ct,Mt){const W=ct.fog,J=Mt.geometry,P=D.isMeshStandardMaterial?ct.environment:null,Y=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),K=Y&&Y.mapping===mu?Y.image.height:null,ut=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const R=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,X=R!==void 0?R.length:0;let et=0;J.morphAttributes.position!==void 0&&(et=1),J.morphAttributes.normal!==void 0&&(et=2),J.morphAttributes.color!==void 0&&(et=3);let G,nt,mt,gt;if(ut){const fn=vi[ut];G=fn.vertexShader,nt=fn.fragmentShader}else G=D.vertexShader,nt=D.fragmentShader,m.update(D),mt=m.getVertexShaderID(D),gt=m.getFragmentShaderID(D);const Dt=o.getRenderTarget(),Ut=Mt.isInstancedMesh===!0,qt=Mt.isBatchedMesh===!0,Wt=!!D.map,ue=!!D.matcap,it=!!Y,$e=!!D.aoMap,Ft=!!D.lightMap,te=!!D.bumpMap,Nt=!!D.normalMap,ge=!!D.displacementMap,ne=!!D.emissiveMap,U=!!D.metalnessMap,A=!!D.roughnessMap,at=D.anisotropy>0,St=D.clearcoat>0,_t=D.iridescence>0,xt=D.sheen>0,Ot=D.transmission>0,bt=at&&!!D.anisotropyMap,At=St&&!!D.clearcoatMap,Bt=St&&!!D.clearcoatNormalMap,Ht=St&&!!D.clearcoatRoughnessMap,vt=_t&&!!D.iridescenceMap,Ee=_t&&!!D.iridescenceThicknessMap,oe=xt&&!!D.sheenColorMap,Zt=xt&&!!D.sheenRoughnessMap,It=!!D.specularMap,wt=!!D.specularColorMap,$t=!!D.specularIntensityMap,pe=Ot&&!!D.transmissionMap,He=Ot&&!!D.thicknessMap,ie=!!D.gradientMap,yt=!!D.alphaMap,F=D.alphaTest>0,Et=!!D.alphaHash,Rt=!!D.extensions,Yt=!!J.attributes.uv1,Gt=!!J.attributes.uv2,Te=!!J.attributes.uv3;let be=Ra;return D.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(be=o.toneMapping),{isWebGL2:g,shaderID:ut,shaderType:D.type,shaderName:D.name,vertexShader:G,fragmentShader:nt,defines:D.defines,customVertexShaderID:mt,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:qt,instancing:Ut,instancingColor:Ut&&Mt.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:Dt===null?o.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:ki,map:Wt,matcap:ue,envMap:it,envMapMode:it&&Y.mapping,envMapCubeUVHeight:K,aoMap:$e,lightMap:Ft,bumpMap:te,normalMap:Nt,displacementMap:S&&ge,emissiveMap:ne,normalMapObjectSpace:Nt&&D.normalMapType===Rx,normalMapTangentSpace:Nt&&D.normalMapType===Ax,metalnessMap:U,roughnessMap:A,anisotropy:at,anisotropyMap:bt,clearcoat:St,clearcoatMap:At,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Ht,iridescence:_t,iridescenceMap:vt,iridescenceThicknessMap:Ee,sheen:xt,sheenColorMap:oe,sheenRoughnessMap:Zt,specularMap:It,specularColorMap:wt,specularIntensityMap:$t,transmission:Ot,transmissionMap:pe,thicknessMap:He,gradientMap:ie,opaque:D.transparent===!1&&D.blending===cs,alphaMap:yt,alphaTest:F,alphaHash:Et,combine:D.combine,mapUv:Wt&&T(D.map.channel),aoMapUv:$e&&T(D.aoMap.channel),lightMapUv:Ft&&T(D.lightMap.channel),bumpMapUv:te&&T(D.bumpMap.channel),normalMapUv:Nt&&T(D.normalMap.channel),displacementMapUv:ge&&T(D.displacementMap.channel),emissiveMapUv:ne&&T(D.emissiveMap.channel),metalnessMapUv:U&&T(D.metalnessMap.channel),roughnessMapUv:A&&T(D.roughnessMap.channel),anisotropyMapUv:bt&&T(D.anisotropyMap.channel),clearcoatMapUv:At&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&T(D.sheenRoughnessMap.channel),specularMapUv:It&&T(D.specularMap.channel),specularColorMapUv:wt&&T(D.specularColorMap.channel),specularIntensityMapUv:$t&&T(D.specularIntensityMap.channel),transmissionMapUv:pe&&T(D.transmissionMap.channel),thicknessMapUv:He&&T(D.thicknessMap.channel),alphaMapUv:yt&&T(D.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Nt||at),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:Yt,vertexUv2s:Gt,vertexUv3s:Te,pointsUvs:Mt.isPoints===!0&&!!J.attributes.uv&&(Wt||yt),fog:!!W,useFog:D.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Mt.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:et,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&lt.length>0,shadowMapType:o.shadowMap.type,toneMapping:be,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Wt&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Gi,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:Rt&&D.extensions.derivatives===!0,extensionFragDepth:Rt&&D.extensions.fragDepth===!0,extensionDrawBuffers:Rt&&D.extensions.drawBuffers===!0,extensionShaderTextureLOD:Rt&&D.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Rt&&D.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()}}function _(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const lt in D.defines)N.push(lt),N.push(D.defines[lt]);return D.isRawShaderMaterial===!1&&(L(N,D),w(N,D),N.push(o.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function L(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function w(D,N){h.disableAll(),N.isWebGL2&&h.enable(0),N.supportsVertexTextures&&h.enable(1),N.instancing&&h.enable(2),N.instancingColor&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.skinning&&h.enable(4),N.morphTargets&&h.enable(5),N.morphNormals&&h.enable(6),N.morphColors&&h.enable(7),N.premultipliedAlpha&&h.enable(8),N.shadowMapEnabled&&h.enable(9),N.useLegacyLights&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),D.push(h.mask)}function O(D){const N=b[D.type];let lt;if(N){const ct=vi[N];lt=eM.clone(ct.uniforms)}else lt=D.uniforms;return lt}function V(D,N){let lt;for(let ct=0,Mt=p.length;ct<Mt;ct++){const W=p[ct];if(W.cacheKey===N){lt=W,++lt.usedTimes;break}}return lt===void 0&&(lt=new mb(o,N,D,c),p.push(lt)),lt}function I(D){if(--D.usedTimes===0){const N=p.indexOf(D);p[N]=p[p.length-1],p.pop(),D.destroy()}}function B(D){m.remove(D)}function dt(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:O,acquireProgram:V,releaseProgram:I,releaseShaderCache:B,programs:p,dispose:dt}}function xb(){let o=new WeakMap;function e(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function i(c){o.delete(c)}function s(c,d,h){o.get(c)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function Mb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function w_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function D_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(v,S,y,b,T,x){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:b,renderOrder:v.renderOrder,z:T,group:x},o[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=T,_.group=x),e++,_}function h(v,S,y,b,T,x){const _=d(v,S,y,b,T,x);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,b,T,x){const _=d(v,S,y,b,T,x);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||Mb),s.length>1&&s.sort(S||w_),l.length>1&&l.sort(S||w_)}function g(){for(let v=e,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function yb(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new D_,o.set(s,[d])):l>=c.length?(d=new D_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Eb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Le};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function Tb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let bb=0;function Ab(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Rb(o,e){const i=new Eb,s=Tb(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new ot);const c=new ot,d=new Sn,h=new Sn;function m(g,v){let S=0,y=0,b=0;for(let ct=0;ct<9;ct++)l.probe[ct].set(0,0,0);let T=0,x=0,_=0,L=0,w=0,O=0,V=0,I=0,B=0,dt=0,D=0;g.sort(Ab);const N=v===!0?Math.PI:1;for(let ct=0,Mt=g.length;ct<Mt;ct++){const W=g[ct],J=W.color,P=W.intensity,Y=W.distance,K=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)S+=J.r*P*N,y+=J.g*P*N,b+=J.b*P*N;else if(W.isLightProbe){for(let ut=0;ut<9;ut++)l.probe[ut].addScaledVector(W.sh.coefficients[ut],P);D++}else if(W.isDirectionalLight){const ut=i.get(W);if(ut.color.copy(W.color).multiplyScalar(W.intensity*N),W.castShadow){const R=W.shadow,X=s.get(W);X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,l.directionalShadow[T]=X,l.directionalShadowMap[T]=K,l.directionalShadowMatrix[T]=W.shadow.matrix,O++}l.directional[T]=ut,T++}else if(W.isSpotLight){const ut=i.get(W);ut.position.setFromMatrixPosition(W.matrixWorld),ut.color.copy(J).multiplyScalar(P*N),ut.distance=Y,ut.coneCos=Math.cos(W.angle),ut.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ut.decay=W.decay,l.spot[_]=ut;const R=W.shadow;if(W.map&&(l.spotLightMap[B]=W.map,B++,R.updateMatrices(W),W.castShadow&&dt++),l.spotLightMatrix[_]=R.matrix,W.castShadow){const X=s.get(W);X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,l.spotShadow[_]=X,l.spotShadowMap[_]=K,I++}_++}else if(W.isRectAreaLight){const ut=i.get(W);ut.color.copy(J).multiplyScalar(P),ut.halfWidth.set(W.width*.5,0,0),ut.halfHeight.set(0,W.height*.5,0),l.rectArea[L]=ut,L++}else if(W.isPointLight){const ut=i.get(W);if(ut.color.copy(W.color).multiplyScalar(W.intensity*N),ut.distance=W.distance,ut.decay=W.decay,W.castShadow){const R=W.shadow,X=s.get(W);X.shadowBias=R.bias,X.shadowNormalBias=R.normalBias,X.shadowRadius=R.radius,X.shadowMapSize=R.mapSize,X.shadowCameraNear=R.camera.near,X.shadowCameraFar=R.camera.far,l.pointShadow[x]=X,l.pointShadowMap[x]=K,l.pointShadowMatrix[x]=W.shadow.matrix,V++}l.point[x]=ut,x++}else if(W.isHemisphereLight){const ut=i.get(W);ut.skyColor.copy(W.color).multiplyScalar(P*N),ut.groundColor.copy(W.groundColor).multiplyScalar(P*N),l.hemi[w]=ut,w++}}L>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Tt.LTC_FLOAT_1,l.rectAreaLTC2=Tt.LTC_FLOAT_2):(l.rectAreaLTC1=Tt.LTC_HALF_1,l.rectAreaLTC2=Tt.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Tt.LTC_FLOAT_1,l.rectAreaLTC2=Tt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Tt.LTC_HALF_1,l.rectAreaLTC2=Tt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=S,l.ambient[1]=y,l.ambient[2]=b;const lt=l.hash;(lt.directionalLength!==T||lt.pointLength!==x||lt.spotLength!==_||lt.rectAreaLength!==L||lt.hemiLength!==w||lt.numDirectionalShadows!==O||lt.numPointShadows!==V||lt.numSpotShadows!==I||lt.numSpotMaps!==B||lt.numLightProbes!==D)&&(l.directional.length=T,l.spot.length=_,l.rectArea.length=L,l.point.length=x,l.hemi.length=w,l.directionalShadow.length=O,l.directionalShadowMap.length=O,l.pointShadow.length=V,l.pointShadowMap.length=V,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=O,l.pointShadowMatrix.length=V,l.spotLightMatrix.length=I+B-dt,l.spotLightMap.length=B,l.numSpotLightShadowsWithMaps=dt,l.numLightProbes=D,lt.directionalLength=T,lt.pointLength=x,lt.spotLength=_,lt.rectAreaLength=L,lt.hemiLength=w,lt.numDirectionalShadows=O,lt.numPointShadows=V,lt.numSpotShadows=I,lt.numSpotMaps=B,lt.numLightProbes=D,l.version=bb++)}function p(g,v){let S=0,y=0,b=0,T=0,x=0;const _=v.matrixWorldInverse;for(let L=0,w=g.length;L<w;L++){const O=g[L];if(O.isDirectionalLight){const V=l.directional[S];V.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),V.direction.sub(c),V.direction.transformDirection(_),S++}else if(O.isSpotLight){const V=l.spot[b];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(O.matrixWorld),c.setFromMatrixPosition(O.target.matrixWorld),V.direction.sub(c),V.direction.transformDirection(_),b++}else if(O.isRectAreaLight){const V=l.rectArea[T];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(_),h.identity(),d.copy(O.matrixWorld),d.premultiply(_),h.extractRotation(d),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),V.halfWidth.applyMatrix4(h),V.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const V=l.point[y];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(_),y++}else if(O.isHemisphereLight){const V=l.hemi[x];V.direction.setFromMatrixPosition(O.matrixWorld),V.direction.transformDirection(_),x++}}}return{setup:m,setupView:p,state:l}}function U_(o,e){const i=new Rb(o,e),s=[],l=[];function c(){s.length=0,l.length=0}function d(v){s.push(v)}function h(v){l.push(v)}function m(v){i.setup(s,v)}function p(v){i.setupView(s,v)}return{init:c,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function Cb(o,e){let i=new WeakMap;function s(c,d=0){const h=i.get(c);let m;return h===void 0?(m=new U_(o,e),i.set(c,[m])):d>=h.length?(m=new U_(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:s,dispose:l}}class wb extends vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Db extends vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Nb(o,e,i){let s=new av;const l=new xe,c=new xe,d=new vn,h=new wb({depthPacking:bx}),m=new Db,p={},g=i.maxTextureSize,v={[wa]:Pn,[Pn]:wa,[Gi]:Gi},S=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Ub,fragmentShader:Lb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new ur;b.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wi(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O_;let _=this.type;this.render=function(I,B,dt){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),N=o.getActiveCubeFace(),lt=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Aa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const Mt=_!==Hi&&this.type===Hi,W=_===Hi&&this.type!==Hi;for(let J=0,P=I.length;J<P;J++){const Y=I[J],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const ut=K.getFrameExtents();if(l.multiply(ut),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ut.x),l.x=c.x*ut.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ut.y),l.y=c.y*ut.y,K.mapSize.y=c.y)),K.map===null||Mt===!0||W===!0){const X=this.type!==Hi?{minFilter:gn,magFilter:gn}:{};K.map!==null&&K.map.dispose(),K.map=new qi(l.x,l.y,X),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const R=K.getViewportCount();for(let X=0;X<R;X++){const et=K.getViewport(X);d.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),ct.viewport(d),K.updateMatrices(Y,X),s=K.getFrustum(),O(B,dt,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===Hi&&L(K,dt),K.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(D,N,lt)};function L(I,B){const dt=e.update(T);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qi(l.x,l.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,dt,S,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,dt,y,T,null)}function w(I,B,dt,D){let N=null;const lt=dt.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(lt!==void 0)N=lt;else if(N=dt.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=N.uuid,Mt=B.uuid;let W=p[ct];W===void 0&&(W={},p[ct]=W);let J=W[Mt];J===void 0&&(J=N.clone(),W[Mt]=J,B.addEventListener("dispose",V)),N=J}if(N.visible=B.visible,N.wireframe=B.wireframe,D===Hi?N.side=B.shadowSide!==null?B.shadowSide:B.side:N.side=B.shadowSide!==null?B.shadowSide:v[B.side],N.alphaMap=B.alphaMap,N.alphaTest=B.alphaTest,N.map=B.map,N.clipShadows=B.clipShadows,N.clippingPlanes=B.clippingPlanes,N.clipIntersection=B.clipIntersection,N.displacementMap=B.displacementMap,N.displacementScale=B.displacementScale,N.displacementBias=B.displacementBias,N.wireframeLinewidth=B.wireframeLinewidth,N.linewidth=B.linewidth,dt.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ct=o.properties.get(N);ct.light=dt}return N}function O(I,B,dt,D,N){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===Hi)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,I.matrixWorld);const Mt=e.update(I),W=I.material;if(Array.isArray(W)){const J=Mt.groups;for(let P=0,Y=J.length;P<Y;P++){const K=J[P],ut=W[K.materialIndex];if(ut&&ut.visible){const R=w(I,ut,D,N);I.onBeforeShadow(o,I,B,dt,Mt,R,K),o.renderBufferDirect(dt,null,Mt,R,I,K),I.onAfterShadow(o,I,B,dt,Mt,R,K)}}}else if(W.visible){const J=w(I,W,D,N);I.onBeforeShadow(o,I,B,dt,Mt,J,null),o.renderBufferDirect(dt,null,Mt,J,I,null),I.onAfterShadow(o,I,B,dt,Mt,J,null)}}const ct=I.children;for(let Mt=0,W=ct.length;Mt<W;Mt++)O(ct[Mt],B,dt,D,N)}function V(I){I.target.removeEventListener("dispose",V);for(const dt in p){const D=p[dt],N=I.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}function Ob(o,e,i){const s=i.isWebGL2;function l(){let F=!1;const Et=new vn;let Rt=null;const Yt=new vn(0,0,0,0);return{setMask:function(Gt){Rt!==Gt&&!F&&(o.colorMask(Gt,Gt,Gt,Gt),Rt=Gt)},setLocked:function(Gt){F=Gt},setClear:function(Gt,Te,be,ke,fn){fn===!0&&(Gt*=ke,Te*=ke,be*=ke),Et.set(Gt,Te,be,ke),Yt.equals(Et)===!1&&(o.clearColor(Gt,Te,be,ke),Yt.copy(Et))},reset:function(){F=!1,Rt=null,Yt.set(-1,0,0,0)}}}function c(){let F=!1,Et=null,Rt=null,Yt=null;return{setTest:function(Gt){Gt?qt(o.DEPTH_TEST):Wt(o.DEPTH_TEST)},setMask:function(Gt){Et!==Gt&&!F&&(o.depthMask(Gt),Et=Gt)},setFunc:function(Gt){if(Rt!==Gt){switch(Gt){case tx:o.depthFunc(o.NEVER);break;case ex:o.depthFunc(o.ALWAYS);break;case nx:o.depthFunc(o.LESS);break;case uu:o.depthFunc(o.LEQUAL);break;case ix:o.depthFunc(o.EQUAL);break;case ax:o.depthFunc(o.GEQUAL);break;case rx:o.depthFunc(o.GREATER);break;case sx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=Gt}},setLocked:function(Gt){F=Gt},setClear:function(Gt){Yt!==Gt&&(o.clearDepth(Gt),Yt=Gt)},reset:function(){F=!1,Et=null,Rt=null,Yt=null}}}function d(){let F=!1,Et=null,Rt=null,Yt=null,Gt=null,Te=null,be=null,ke=null,fn=null;return{setTest:function(me){F||(me?qt(o.STENCIL_TEST):Wt(o.STENCIL_TEST))},setMask:function(me){Et!==me&&!F&&(o.stencilMask(me),Et=me)},setFunc:function(me,ve,ze){(Rt!==me||Yt!==ve||Gt!==ze)&&(o.stencilFunc(me,ve,ze),Rt=me,Yt=ve,Gt=ze)},setOp:function(me,ve,ze){(Te!==me||be!==ve||ke!==ze)&&(o.stencilOp(me,ve,ze),Te=me,be=ve,ke=ze)},setLocked:function(me){F=me},setClear:function(me){fn!==me&&(o.clearStencil(me),fn=me)},reset:function(){F=!1,Et=null,Rt=null,Yt=null,Gt=null,Te=null,be=null,ke=null,fn=null}}}const h=new l,m=new c,p=new d,g=new WeakMap,v=new WeakMap;let S={},y={},b=new WeakMap,T=[],x=null,_=!1,L=null,w=null,O=null,V=null,I=null,B=null,dt=null,D=new Le(0,0,0),N=0,lt=!1,ct=null,Mt=null,W=null,J=null,P=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ut=0;const R=o.getParameter(o.VERSION);R.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=ut>=1):R.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=ut>=2);let X=null,et={};const G=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),mt=new vn().fromArray(G),gt=new vn().fromArray(nt);function Dt(F,Et,Rt,Yt){const Gt=new Uint8Array(4),Te=o.createTexture();o.bindTexture(F,Te),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let be=0;be<Rt;be++)s&&(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)?o.texImage3D(Et,0,o.RGBA,1,1,Yt,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Et+be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Te}const Ut={};Ut[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),Ut[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Ut[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ut[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),qt(o.DEPTH_TEST),m.setFunc(uu),ne(!1),U(hg),qt(o.CULL_FACE),Nt(Aa);function qt(F){S[F]!==!0&&(o.enable(F),S[F]=!0)}function Wt(F){S[F]!==!1&&(o.disable(F),S[F]=!1)}function ue(F,Et){return y[F]!==Et?(o.bindFramebuffer(F,Et),y[F]=Et,s&&(F===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Et),F===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Et)),!0):!1}function it(F,Et){let Rt=T,Yt=!1;if(F)if(Rt=b.get(Et),Rt===void 0&&(Rt=[],b.set(Et,Rt)),F.isWebGLMultipleRenderTargets){const Gt=F.texture;if(Rt.length!==Gt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let Te=0,be=Gt.length;Te<be;Te++)Rt[Te]=o.COLOR_ATTACHMENT0+Te;Rt.length=Gt.length,Yt=!0}}else Rt[0]!==o.COLOR_ATTACHMENT0&&(Rt[0]=o.COLOR_ATTACHMENT0,Yt=!0);else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Yt=!0);Yt&&(i.isWebGL2?o.drawBuffers(Rt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Rt))}function $e(F){return x!==F?(o.useProgram(F),x=F,!0):!1}const Ft={[nr]:o.FUNC_ADD,[FS]:o.FUNC_SUBTRACT,[HS]:o.FUNC_REVERSE_SUBTRACT};if(s)Ft[gg]=o.MIN,Ft[_g]=o.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Ft[gg]=F.MIN_EXT,Ft[_g]=F.MAX_EXT)}const te={[GS]:o.ZERO,[VS]:o.ONE,[XS]:o.SRC_COLOR,[oh]:o.SRC_ALPHA,[jS]:o.SRC_ALPHA_SATURATE,[YS]:o.DST_COLOR,[kS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[lh]:o.ONE_MINUS_SRC_ALPHA,[ZS]:o.ONE_MINUS_DST_COLOR,[qS]:o.ONE_MINUS_DST_ALPHA,[KS]:o.CONSTANT_COLOR,[QS]:o.ONE_MINUS_CONSTANT_COLOR,[JS]:o.CONSTANT_ALPHA,[$S]:o.ONE_MINUS_CONSTANT_ALPHA};function Nt(F,Et,Rt,Yt,Gt,Te,be,ke,fn,me){if(F===Aa){_===!0&&(Wt(o.BLEND),_=!1);return}if(_===!1&&(qt(o.BLEND),_=!0),F!==IS){if(F!==L||me!==lt){if((w!==nr||I!==nr)&&(o.blendEquation(o.FUNC_ADD),w=nr,I=nr),me)switch(F){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dg:o.blendFunc(o.ONE,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}O=null,V=null,B=null,dt=null,D.set(0,0,0),N=0,L=F,lt=me}return}Gt=Gt||Et,Te=Te||Rt,be=be||Yt,(Et!==w||Gt!==I)&&(o.blendEquationSeparate(Ft[Et],Ft[Gt]),w=Et,I=Gt),(Rt!==O||Yt!==V||Te!==B||be!==dt)&&(o.blendFuncSeparate(te[Rt],te[Yt],te[Te],te[be]),O=Rt,V=Yt,B=Te,dt=be),(ke.equals(D)===!1||fn!==N)&&(o.blendColor(ke.r,ke.g,ke.b,fn),D.copy(ke),N=fn),L=F,lt=!1}function ge(F,Et){F.side===Gi?Wt(o.CULL_FACE):qt(o.CULL_FACE);let Rt=F.side===Pn;Et&&(Rt=!Rt),ne(Rt),F.blending===cs&&F.transparent===!1?Nt(Aa):Nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),m.setFunc(F.depthFunc),m.setTest(F.depthTest),m.setMask(F.depthWrite),h.setMask(F.colorWrite);const Yt=F.stencilWrite;p.setTest(Yt),Yt&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?qt(o.SAMPLE_ALPHA_TO_COVERAGE):Wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){ct!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),ct=F)}function U(F){F!==PS?(qt(o.CULL_FACE),F!==Mt&&(F===hg?o.cullFace(o.BACK):F===zS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Wt(o.CULL_FACE),Mt=F}function A(F){F!==W&&(K&&o.lineWidth(F),W=F)}function at(F,Et,Rt){F?(qt(o.POLYGON_OFFSET_FILL),(J!==Et||P!==Rt)&&(o.polygonOffset(Et,Rt),J=Et,P=Rt)):Wt(o.POLYGON_OFFSET_FILL)}function St(F){F?qt(o.SCISSOR_TEST):Wt(o.SCISSOR_TEST)}function _t(F){F===void 0&&(F=o.TEXTURE0+Y-1),X!==F&&(o.activeTexture(F),X=F)}function xt(F,Et,Rt){Rt===void 0&&(X===null?Rt=o.TEXTURE0+Y-1:Rt=X);let Yt=et[Rt];Yt===void 0&&(Yt={type:void 0,texture:void 0},et[Rt]=Yt),(Yt.type!==F||Yt.texture!==Et)&&(X!==Rt&&(o.activeTexture(Rt),X=Rt),o.bindTexture(F,Et||Ut[F]),Yt.type=F,Yt.texture=Et)}function Ot(){const F=et[X];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function bt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Zt(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(F){mt.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),mt.copy(F))}function pe(F){gt.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),gt.copy(F))}function He(F,Et){let Rt=v.get(Et);Rt===void 0&&(Rt=new WeakMap,v.set(Et,Rt));let Yt=Rt.get(F);Yt===void 0&&(Yt=o.getUniformBlockIndex(Et,F.name),Rt.set(F,Yt))}function ie(F,Et){const Yt=v.get(Et).get(F);g.get(Et)!==Yt&&(o.uniformBlockBinding(Et,Yt,F.__bindingPointIndex),g.set(Et,Yt))}function yt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},X=null,et={},y={},b=new WeakMap,T=[],x=null,_=!1,L=null,w=null,O=null,V=null,I=null,B=null,dt=null,D=new Le(0,0,0),N=0,lt=!1,ct=null,Mt=null,W=null,J=null,P=null,mt.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:qt,disable:Wt,bindFramebuffer:ue,drawBuffers:it,useProgram:$e,setBlending:Nt,setMaterial:ge,setFlipSided:ne,setCullFace:U,setLineWidth:A,setPolygonOffset:at,setScissorTest:St,activeTexture:_t,bindTexture:xt,unbindTexture:Ot,compressedTexImage2D:bt,compressedTexImage3D:At,texImage2D:It,texImage3D:wt,updateUBOMapping:He,uniformBlockBinding:ie,texStorage2D:oe,texStorage3D:Zt,texSubImage2D:Bt,texSubImage3D:Ht,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ee,scissor:$t,viewport:pe,reset:yt}}function Pb(o,e,i,s,l,c,d){const h=l.isWebGL2,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,A){return y?new OffscreenCanvas(U,A):pu("canvas")}function T(U,A,at,St){let _t=1;if((U.width>St||U.height>St)&&(_t=St/Math.max(U.width,U.height)),_t<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const xt=A?ph:Math.floor,Ot=xt(_t*U.width),bt=xt(_t*U.height);v===void 0&&(v=b(Ot,bt));const At=at?b(Ot,bt):v;return At.width=Ot,At.height=bt,At.getContext("2d").drawImage(U,0,0,Ot,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Ot+"x"+bt+")."),At}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function x(U){return Yg(U.width)&&Yg(U.height)}function _(U){return h?!1:U.wrapS!==hi||U.wrapT!==hi||U.minFilter!==gn&&U.minFilter!==Nn}function L(U,A){return U.generateMipmaps&&A&&U.minFilter!==gn&&U.minFilter!==Nn}function w(U){o.generateMipmap(U)}function O(U,A,at,St,_t=!1){if(h===!1)return A;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xt=A;if(A===o.RED&&(at===o.FLOAT&&(xt=o.R32F),at===o.HALF_FLOAT&&(xt=o.R16F),at===o.UNSIGNED_BYTE&&(xt=o.R8)),A===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(xt=o.R8UI),at===o.UNSIGNED_SHORT&&(xt=o.R16UI),at===o.UNSIGNED_INT&&(xt=o.R32UI),at===o.BYTE&&(xt=o.R8I),at===o.SHORT&&(xt=o.R16I),at===o.INT&&(xt=o.R32I)),A===o.RG&&(at===o.FLOAT&&(xt=o.RG32F),at===o.HALF_FLOAT&&(xt=o.RG16F),at===o.UNSIGNED_BYTE&&(xt=o.RG8)),A===o.RGBA){const Ot=_t?cu:Ue.getTransfer(St);at===o.FLOAT&&(xt=o.RGBA32F),at===o.HALF_FLOAT&&(xt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(xt=Ot===Fe?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function V(U,A,at){return L(U,at)===!0||U.isFramebufferTexture&&U.minFilter!==gn&&U.minFilter!==Nn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function I(U){return U===gn||U===vg||U===Df?o.NEAREST:o.LINEAR}function B(U){const A=U.target;A.removeEventListener("dispose",B),D(A),A.isVideoTexture&&g.delete(A)}function dt(U){const A=U.target;A.removeEventListener("dispose",dt),lt(A)}function D(U){const A=s.get(U);if(A.__webglInit===void 0)return;const at=U.source,St=S.get(at);if(St){const _t=St[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&N(U),Object.keys(St).length===0&&S.delete(at)}s.remove(U)}function N(U){const A=s.get(U);o.deleteTexture(A.__webglTexture);const at=U.source,St=S.get(at);delete St[A.__cacheKey],d.memory.textures--}function lt(U){const A=U.texture,at=s.get(U),St=s.get(A);if(St.__webglTexture!==void 0&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(at.__webglFramebuffer[_t]))for(let xt=0;xt<at.__webglFramebuffer[_t].length;xt++)o.deleteFramebuffer(at.__webglFramebuffer[_t][xt]);else o.deleteFramebuffer(at.__webglFramebuffer[_t]);at.__webglDepthbuffer&&o.deleteRenderbuffer(at.__webglDepthbuffer[_t])}else{if(Array.isArray(at.__webglFramebuffer))for(let _t=0;_t<at.__webglFramebuffer.length;_t++)o.deleteFramebuffer(at.__webglFramebuffer[_t]);else o.deleteFramebuffer(at.__webglFramebuffer);if(at.__webglDepthbuffer&&o.deleteRenderbuffer(at.__webglDepthbuffer),at.__webglMultisampledFramebuffer&&o.deleteFramebuffer(at.__webglMultisampledFramebuffer),at.__webglColorRenderbuffer)for(let _t=0;_t<at.__webglColorRenderbuffer.length;_t++)at.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(at.__webglColorRenderbuffer[_t]);at.__webglDepthRenderbuffer&&o.deleteRenderbuffer(at.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let _t=0,xt=A.length;_t<xt;_t++){const Ot=s.get(A[_t]);Ot.__webglTexture&&(o.deleteTexture(Ot.__webglTexture),d.memory.textures--),s.remove(A[_t])}s.remove(A),s.remove(U)}let ct=0;function Mt(){ct=0}function W(){const U=ct;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),ct+=1,U}function J(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function P(U,A){const at=s.get(U);if(U.isVideoTexture&&ge(U),U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){const St=U.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(at,U,A);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+A)}function Y(U,A){const at=s.get(U);if(U.version>0&&at.__version!==U.version){mt(at,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+A)}function K(U,A){const at=s.get(U);if(U.version>0&&at.__version!==U.version){mt(at,U,A);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+A)}function ut(U,A){const at=s.get(U);if(U.version>0&&at.__version!==U.version){gt(at,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+A)}const R={[ar]:o.REPEAT,[hi]:o.CLAMP_TO_EDGE,[fh]:o.MIRRORED_REPEAT},X={[gn]:o.NEAREST,[vg]:o.NEAREST_MIPMAP_NEAREST,[Df]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[mx]:o.LINEAR_MIPMAP_NEAREST,[Eo]:o.LINEAR_MIPMAP_LINEAR},et={[Cx]:o.NEVER,[Ox]:o.ALWAYS,[wx]:o.LESS,[k_]:o.LEQUAL,[Dx]:o.EQUAL,[Nx]:o.GEQUAL,[Ux]:o.GREATER,[Lx]:o.NOTEQUAL};function G(U,A,at){if(at?(o.texParameteri(U,o.TEXTURE_WRAP_S,R[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,R[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,R[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,X[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,X[A.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==hi||A.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,I(A.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==gn&&A.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const St=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===gn||A.minFilter!==Df&&A.minFilter!==Eo||A.type===Vi&&e.has("OES_texture_float_linear")===!1||h===!1&&A.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||s.get(A).__currentAnisotropy)&&(o.texParameterf(U,St.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy)}}function nt(U,A){let at=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",B));const St=A.source;let _t=S.get(St);_t===void 0&&(_t={},S.set(St,_t));const xt=J(A);if(xt!==U.__cacheKey){_t[xt]===void 0&&(_t[xt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),_t[xt].usedTimes++;const Ot=_t[U.__cacheKey];Ot!==void 0&&(_t[U.__cacheKey].usedTimes--,Ot.usedTimes===0&&N(A)),U.__cacheKey=xt,U.__webglTexture=_t[xt].texture}return at}function mt(U,A,at){let St=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(St=o.TEXTURE_3D);const _t=nt(U,A),xt=A.source;i.bindTexture(St,U.__webglTexture,o.TEXTURE0+at);const Ot=s.get(xt);if(xt.version!==Ot.__version||_t===!0){i.activeTexture(o.TEXTURE0+at);const bt=Ue.getPrimaries(Ue.workingColorSpace),At=A.colorSpace===ni?null:Ue.getPrimaries(A.colorSpace),Bt=A.colorSpace===ni||bt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Ht=_(A)&&x(A.image)===!1;let vt=T(A.image,Ht,!1,l.maxTextureSize);vt=ne(A,vt);const Ee=x(vt)||h,oe=c.convert(A.format,A.colorSpace);let Zt=c.convert(A.type),It=O(A.internalFormat,oe,Zt,A.colorSpace,A.isVideoTexture);G(St,A,Ee);let wt;const $t=A.mipmaps,pe=h&&A.isVideoTexture!==!0&&It!==X_,He=Ot.__version===void 0||_t===!0,ie=V(A,vt,Ee);if(A.isDepthTexture)It=o.DEPTH_COMPONENT,h?A.type===Vi?It=o.DEPTH_COMPONENT32F:A.type===ba?It=o.DEPTH_COMPONENT24:A.type===rr?It=o.DEPTH24_STENCIL8:It=o.DEPTH_COMPONENT16:A.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===sr&&It===o.DEPTH_COMPONENT&&A.type!==vh&&A.type!==ba&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ba,Zt=c.convert(A.type)),A.format===ps&&It===o.DEPTH_COMPONENT&&(It=o.DEPTH_STENCIL,A.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=rr,Zt=c.convert(A.type))),He&&(pe?i.texStorage2D(o.TEXTURE_2D,1,It,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,It,vt.width,vt.height,0,oe,Zt,null));else if(A.isDataTexture)if($t.length>0&&Ee){pe&&He&&i.texStorage2D(o.TEXTURE_2D,ie,It,$t[0].width,$t[0].height);for(let yt=0,F=$t.length;yt<F;yt++)wt=$t[yt],pe?i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,oe,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,yt,It,wt.width,wt.height,0,oe,Zt,wt.data);A.generateMipmaps=!1}else pe?(He&&i.texStorage2D(o.TEXTURE_2D,ie,It,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,vt.width,vt.height,oe,Zt,vt.data)):i.texImage2D(o.TEXTURE_2D,0,It,vt.width,vt.height,0,oe,Zt,vt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){pe&&He&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,$t[0].width,$t[0].height,vt.depth);for(let yt=0,F=$t.length;yt<F;yt++)wt=$t[yt],A.format!==kn?oe!==null?pe?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,vt.depth,oe,wt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,It,wt.width,wt.height,vt.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,vt.depth,oe,Zt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,It,wt.width,wt.height,vt.depth,0,oe,Zt,wt.data)}else{pe&&He&&i.texStorage2D(o.TEXTURE_2D,ie,It,$t[0].width,$t[0].height);for(let yt=0,F=$t.length;yt<F;yt++)wt=$t[yt],A.format!==kn?oe!==null?pe?i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,oe,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,It,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,oe,Zt,wt.data):i.texImage2D(o.TEXTURE_2D,yt,It,wt.width,wt.height,0,oe,Zt,wt.data)}else if(A.isDataArrayTexture)pe?(He&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,oe,Zt,vt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,vt.width,vt.height,vt.depth,0,oe,Zt,vt.data);else if(A.isData3DTexture)pe?(He&&i.texStorage3D(o.TEXTURE_3D,ie,It,vt.width,vt.height,vt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,oe,Zt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,It,vt.width,vt.height,vt.depth,0,oe,Zt,vt.data);else if(A.isFramebufferTexture){if(He)if(pe)i.texStorage2D(o.TEXTURE_2D,ie,It,vt.width,vt.height);else{let yt=vt.width,F=vt.height;for(let Et=0;Et<ie;Et++)i.texImage2D(o.TEXTURE_2D,Et,It,yt,F,0,oe,Zt,null),yt>>=1,F>>=1}}else if($t.length>0&&Ee){pe&&He&&i.texStorage2D(o.TEXTURE_2D,ie,It,$t[0].width,$t[0].height);for(let yt=0,F=$t.length;yt<F;yt++)wt=$t[yt],pe?i.texSubImage2D(o.TEXTURE_2D,yt,0,0,oe,Zt,wt):i.texImage2D(o.TEXTURE_2D,yt,It,oe,Zt,wt);A.generateMipmaps=!1}else pe?(He&&i.texStorage2D(o.TEXTURE_2D,ie,It,vt.width,vt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,oe,Zt,vt)):i.texImage2D(o.TEXTURE_2D,0,It,oe,Zt,vt);L(A,Ee)&&w(St),Ot.__version=xt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function gt(U,A,at){if(A.image.length!==6)return;const St=nt(U,A),_t=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+at);const xt=s.get(_t);if(_t.version!==xt.__version||St===!0){i.activeTexture(o.TEXTURE0+at);const Ot=Ue.getPrimaries(Ue.workingColorSpace),bt=A.colorSpace===ni?null:Ue.getPrimaries(A.colorSpace),At=A.colorSpace===ni||Ot===bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Bt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ht=A.image[0]&&A.image[0].isDataTexture,vt=[];for(let yt=0;yt<6;yt++)!Bt&&!Ht?vt[yt]=T(A.image[yt],!1,!0,l.maxCubemapSize):vt[yt]=Ht?A.image[yt].image:A.image[yt],vt[yt]=ne(A,vt[yt]);const Ee=vt[0],oe=x(Ee)||h,Zt=c.convert(A.format,A.colorSpace),It=c.convert(A.type),wt=O(A.internalFormat,Zt,It,A.colorSpace),$t=h&&A.isVideoTexture!==!0,pe=xt.__version===void 0||St===!0;let He=V(A,Ee,oe);G(o.TEXTURE_CUBE_MAP,A,oe);let ie;if(Bt){$t&&pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,He,wt,Ee.width,Ee.height);for(let yt=0;yt<6;yt++){ie=vt[yt].mipmaps;for(let F=0;F<ie.length;F++){const Et=ie[F];A.format!==kn?Zt!==null?$t?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F,0,0,Et.width,Et.height,Zt,Et.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F,wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F,0,0,Et.width,Et.height,Zt,It,Et.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F,wt,Et.width,Et.height,0,Zt,It,Et.data)}}}else{ie=A.mipmaps,$t&&pe&&(ie.length>0&&He++,i.texStorage2D(o.TEXTURE_CUBE_MAP,He,wt,vt[0].width,vt[0].height));for(let yt=0;yt<6;yt++)if(Ht){$t?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,vt[yt].width,vt[yt].height,Zt,It,vt[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,wt,vt[yt].width,vt[yt].height,0,Zt,It,vt[yt].data);for(let F=0;F<ie.length;F++){const Rt=ie[F].image[yt].image;$t?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F+1,0,0,Rt.width,Rt.height,Zt,It,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F+1,wt,Rt.width,Rt.height,0,Zt,It,Rt.data)}}else{$t?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Zt,It,vt[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,wt,Zt,It,vt[yt]);for(let F=0;F<ie.length;F++){const Et=ie[F];$t?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F+1,0,0,Zt,It,Et.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,F+1,wt,Zt,It,Et.image[yt])}}}L(A,oe)&&w(o.TEXTURE_CUBE_MAP),xt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Dt(U,A,at,St,_t,xt){const Ot=c.convert(at.format,at.colorSpace),bt=c.convert(at.type),At=O(at.internalFormat,Ot,bt,at.colorSpace);if(!s.get(A).__hasExternalTextures){const Ht=Math.max(1,A.width>>xt),vt=Math.max(1,A.height>>xt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,xt,At,Ht,vt,A.depth,0,Ot,bt,null):i.texImage2D(_t,xt,At,Ht,vt,0,Ot,bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Nt(A)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,_t,s.get(at).__webglTexture,0,te(A)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,_t,s.get(at).__webglTexture,xt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,A,at){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let St=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(at||Nt(A)){const _t=A.depthTexture;_t&&_t.isDepthTexture&&(_t.type===Vi?St=o.DEPTH_COMPONENT32F:_t.type===ba&&(St=o.DEPTH_COMPONENT24));const xt=te(A);Nt(A)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,St,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,St,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,St,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const St=te(A);at&&Nt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,A.width,A.height):Nt(A)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const St=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _t=0;_t<St.length;_t++){const xt=St[_t],Ot=c.convert(xt.format,xt.colorSpace),bt=c.convert(xt.type),At=O(xt.internalFormat,Ot,bt,xt.colorSpace),Bt=te(A);at&&Nt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,At,A.width,A.height):Nt(A)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,At,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,At,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),P(A.depthTexture,0);const St=s.get(A.depthTexture).__webglTexture,_t=te(A);if(A.depthTexture.format===sr)Nt(A)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(A.depthTexture.format===ps)Nt(A)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Wt(U){const A=s.get(U),at=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");qt(A.__webglFramebuffer,U)}else if(at){A.__webglDepthbuffer=[];for(let St=0;St<6;St++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[St]),A.__webglDepthbuffer[St]=o.createRenderbuffer(),Ut(A.__webglDepthbuffer[St],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Ut(A.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ue(U,A,at){const St=s.get(U);A!==void 0&&Dt(St.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Wt(U)}function it(U){const A=U.texture,at=s.get(U),St=s.get(A);U.addEventListener("dispose",dt),U.isWebGLMultipleRenderTargets!==!0&&(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=A.version,d.memory.textures++);const _t=U.isWebGLCubeRenderTarget===!0,xt=U.isWebGLMultipleRenderTargets===!0,Ot=x(U)||h;if(_t){at.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(h&&A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[bt]=[];for(let At=0;At<A.mipmaps.length;At++)at.__webglFramebuffer[bt][At]=o.createFramebuffer()}else at.__webglFramebuffer[bt]=o.createFramebuffer()}else{if(h&&A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let bt=0;bt<A.mipmaps.length;bt++)at.__webglFramebuffer[bt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(xt)if(l.drawBuffers){const bt=U.texture;for(let At=0,Bt=bt.length;At<Bt;At++){const Ht=s.get(bt[At]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&U.samples>0&&Nt(U)===!1){const bt=xt?A:[A];at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let At=0;At<bt.length;At++){const Bt=bt[At];at.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[At]);const Ht=c.convert(Bt.format,Bt.colorSpace),vt=c.convert(Bt.type),Ee=O(Bt.internalFormat,Ht,vt,Bt.colorSpace,U.isXRRenderTarget===!0),oe=te(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,oe,Ee,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,at.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(at.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),G(o.TEXTURE_CUBE_MAP,A,Ot);for(let bt=0;bt<6;bt++)if(h&&A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)Dt(at.__webglFramebuffer[bt][At],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,At);else Dt(at.__webglFramebuffer[bt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);L(A,Ot)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(xt){const bt=U.texture;for(let At=0,Bt=bt.length;At<Bt;At++){const Ht=bt[At],vt=s.get(Ht);i.bindTexture(o.TEXTURE_2D,vt.__webglTexture),G(o.TEXTURE_2D,Ht,Ot),Dt(at.__webglFramebuffer,U,Ht,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),L(Ht,Ot)&&w(o.TEXTURE_2D)}i.unbindTexture()}else{let bt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(h?bt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(bt,St.__webglTexture),G(bt,A,Ot),h&&A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)Dt(at.__webglFramebuffer[At],U,A,o.COLOR_ATTACHMENT0,bt,At);else Dt(at.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,bt,0);L(A,Ot)&&w(bt),i.unbindTexture()}U.depthBuffer&&Wt(U)}function $e(U){const A=x(U)||h,at=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let St=0,_t=at.length;St<_t;St++){const xt=at[St];if(L(xt,A)){const Ot=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,bt=s.get(xt).__webglTexture;i.bindTexture(Ot,bt),w(Ot),i.unbindTexture()}}}function Ft(U){if(h&&U.samples>0&&Nt(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],at=U.width,St=U.height;let _t=o.COLOR_BUFFER_BIT;const xt=[],Ot=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=s.get(U),At=U.isWebGLMultipleRenderTargets===!0;if(At)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){xt.push(o.COLOR_ATTACHMENT0+Bt),U.depthBuffer&&xt.push(Ot);const Ht=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(Ht===!1&&(U.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),At&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]),Ht===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ot]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ot])),At){const vt=s.get(A[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,at,St,0,0,at,St,_t,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const Ht=s.get(A[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,Ht,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function te(U){return Math.min(l.maxSamples,U.samples)}function Nt(U){const A=s.get(U);return h&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ge(U){const A=d.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function ne(U,A){const at=U.colorSpace,St=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===hh||at!==ki&&at!==ni&&(Ue.getTransfer(at)===Fe?h===!1?e.has("EXT_sRGB")===!0&&St===kn?(U.format=hh,U.minFilter=Nn,U.generateMipmaps=!1):A=Y_.sRGBToLinear(A):(St!==kn||_t!==Ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}this.allocateTextureUnit=W,this.resetTextureUnits=Mt,this.setTexture2D=P,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=ut,this.rebindTextures=ue,this.setupRenderTarget=it,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Nt}function zb(o,e,i){const s=i.isWebGL2;function l(c,d=ni){let h;const m=Ue.getTransfer(d);if(c===Ca)return o.UNSIGNED_BYTE;if(c===I_)return o.UNSIGNED_SHORT_4_4_4_4;if(c===F_)return o.UNSIGNED_SHORT_5_5_5_1;if(c===gx)return o.BYTE;if(c===_x)return o.SHORT;if(c===vh)return o.UNSIGNED_SHORT;if(c===B_)return o.INT;if(c===ba)return o.UNSIGNED_INT;if(c===Vi)return o.FLOAT;if(c===To)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(c===vx)return o.ALPHA;if(c===kn)return o.RGBA;if(c===Sx)return o.LUMINANCE;if(c===xx)return o.LUMINANCE_ALPHA;if(c===sr)return o.DEPTH_COMPONENT;if(c===ps)return o.DEPTH_STENCIL;if(c===hh)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(c===Mx)return o.RED;if(c===H_)return o.RED_INTEGER;if(c===yx)return o.RG;if(c===G_)return o.RG_INTEGER;if(c===V_)return o.RGBA_INTEGER;if(c===Uf||c===Lf||c===Nf||c===Of)if(m===Fe)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(c===Uf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Lf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===Nf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Of)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(c===Uf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Lf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===Nf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Of)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===Sg||c===xg||c===Mg||c===yg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(c===Sg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===xg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Mg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===yg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===X_)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===Eg||c===Tg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(c===Eg)return m===Fe?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(c===Tg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===bg||c===Ag||c===Rg||c===Cg||c===wg||c===Dg||c===Ug||c===Lg||c===Ng||c===Og||c===Pg||c===zg||c===Bg||c===Ig)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(c===bg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Ag)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Rg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Cg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===wg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Dg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Ug)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Lg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Ng)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Og)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Pg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===zg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Bg)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===Ig)return m===Fe?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Pf||c===Fg||c===Hg)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(c===Pf)return m===Fe?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===Fg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Hg)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===Ex||c===Gg||c===Vg||c===Xg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(c===Pf)return h.COMPRESSED_RED_RGTC1_EXT;if(c===Gg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Vg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===Xg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===rr?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[c]!==void 0?o[c]:null}return{convert:l}}class Bb extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class su extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ib={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const x=i.getJointPose(T,s),_=this._getHandJoint(p,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ib)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new su;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Fb extends gs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,v=null,S=null,y=null,b=null;const T=i.getContextAttributes();let x=null,_=null;const L=[],w=[],O=new xe;let V=null;const I=new fi;I.layers.enable(1),I.viewport=new vn;const B=new fi;B.layers.enable(2),B.viewport=new vn;const dt=[I,B],D=new Bb;D.layers.enable(1),D.layers.enable(2);let N=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let nt=L[G];return nt===void 0&&(nt=new sh,L[G]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(G){let nt=L[G];return nt===void 0&&(nt=new sh,L[G]=nt),nt.getGripSpace()},this.getHand=function(G){let nt=L[G];return nt===void 0&&(nt=new sh,L[G]=nt),nt.getHandSpace()};function ct(G){const nt=w.indexOf(G.inputSource);if(nt===-1)return;const mt=L[nt];mt!==void 0&&(mt.update(G.inputSource,G.frame,p||d),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function Mt(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",Mt),l.removeEventListener("inputsourceschange",W);for(let G=0;G<L.length;G++){const nt=w[G];nt!==null&&(w[G]=null,L[G].disconnect(nt))}N=null,lt=null,e.setRenderTarget(x),y=null,S=null,v=null,l=null,_=null,et.stop(),s.isPresenting=!1,e.setPixelRatio(V),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",Mt),l.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(O),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const nt={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,nt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),_=new qi(y.framebufferWidth,y.framebufferHeight,{format:kn,type:Ca,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let nt=null,mt=null,gt=null;T.depth&&(gt=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,nt=T.stencil?ps:sr,mt=T.stencil?rr:ba);const Dt={colorFormat:i.RGBA8,depthFormat:gt,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Dt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),_=new qi(S.textureWidth,S.textureHeight,{format:kn,type:Ca,depthTexture:new ov(S.textureWidth,S.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Ut=e.properties.get(_);Ut.__ignoreDepthValues=S.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),et.setContext(l),et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function W(G){for(let nt=0;nt<G.removed.length;nt++){const mt=G.removed[nt],gt=w.indexOf(mt);gt>=0&&(w[gt]=null,L[gt].disconnect(mt))}for(let nt=0;nt<G.added.length;nt++){const mt=G.added[nt];let gt=w.indexOf(mt);if(gt===-1){for(let Ut=0;Ut<L.length;Ut++)if(Ut>=w.length){w.push(mt),gt=Ut;break}else if(w[Ut]===null){w[Ut]=mt,gt=Ut;break}if(gt===-1)break}const Dt=L[gt];Dt&&Dt.connect(mt)}}const J=new ot,P=new ot;function Y(G,nt,mt){J.setFromMatrixPosition(nt.matrixWorld),P.setFromMatrixPosition(mt.matrixWorld);const gt=J.distanceTo(P),Dt=nt.projectionMatrix.elements,Ut=mt.projectionMatrix.elements,qt=Dt[14]/(Dt[10]-1),Wt=Dt[14]/(Dt[10]+1),ue=(Dt[9]+1)/Dt[5],it=(Dt[9]-1)/Dt[5],$e=(Dt[8]-1)/Dt[0],Ft=(Ut[8]+1)/Ut[0],te=qt*$e,Nt=qt*Ft,ge=gt/(-$e+Ft),ne=ge*-$e;nt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(ge),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const U=qt+ge,A=Wt+ge,at=te-ne,St=Nt+(gt-ne),_t=ue*Wt/A*U,xt=it*Wt/A*U;G.projectionMatrix.makePerspective(at,St,_t,xt,U,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function K(G,nt){nt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(nt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;D.near=B.near=I.near=G.near,D.far=B.far=I.far=G.far,(N!==D.near||lt!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,lt=D.far);const nt=G.parent,mt=D.cameras;K(D,nt);for(let gt=0;gt<mt.length;gt++)K(mt[gt],nt);mt.length===2?Y(D,I,B):D.projectionMatrix.copy(I.projectionMatrix),ut(G,D,nt)};function ut(G,nt,mt){mt===null?G.matrix.copy(nt.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(nt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=dh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(G){m=G,S!==null&&(S.fixedFoveation=G),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=G)};let R=null;function X(G,nt){if(g=nt.getViewerPose(p||d),b=nt,g!==null){const mt=g.views;y!==null&&(e.setRenderTargetFramebuffer(_,y.framebuffer),e.setRenderTarget(_));let gt=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,gt=!0);for(let Dt=0;Dt<mt.length;Dt++){const Ut=mt[Dt];let qt=null;if(y!==null)qt=y.getViewport(Ut);else{const ue=v.getViewSubImage(S,Ut);qt=ue.viewport,Dt===0&&(e.setRenderTargetTextures(_,ue.colorTexture,S.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(_))}let Wt=dt[Dt];Wt===void 0&&(Wt=new fi,Wt.layers.enable(Dt),Wt.viewport=new vn,dt[Dt]=Wt),Wt.matrix.fromArray(Ut.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ut.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(qt.x,qt.y,qt.width,qt.height),Dt===0&&(D.matrix.copy(Wt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),gt===!0&&D.cameras.push(Wt)}}for(let mt=0;mt<L.length;mt++){const gt=w[mt],Dt=L[mt];gt!==null&&Dt!==void 0&&Dt.update(gt,nt,p||d)}R&&R(G,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),b=null}const et=new rv;et.setAnimationLoop(X),this.setAnimationLoop=function(G){R=G},this.dispose=function(){}}}function Hb(o,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,ev(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,L,w,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),S(x,_),_.isMeshPhysicalMaterial&&y(x,_,O)):_.isMeshMatcapMaterial?(c(x,_),b(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),T(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&h(x,_)):_.isPointsMaterial?m(x,_,L,w):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Pn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Pn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_).envMap;if(L&&(x.envMap.value=L,x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const w=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*w,i(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function h(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,L,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=w*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function S(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),e.get(_).envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&x.clearcoatNormalScale.value.negate())),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Gb(o,e,i,s){let l={},c={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(L,w){const O=w.program;s.uniformBlockBinding(L,O)}function p(L,w){let O=l[L.id];O===void 0&&(b(L),O=g(L),l[L.id]=O,L.addEventListener("dispose",x));const V=w.program;s.updateUBOMapping(L,V);const I=e.render.frame;c[L.id]!==I&&(S(L),c[L.id]=I)}function g(L){const w=v();L.__bindingPointIndex=w;const O=o.createBuffer(),V=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,O),O}function v(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const w=l[L.id],O=L.uniforms,V=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let I=0,B=O.length;I<B;I++){const dt=Array.isArray(O[I])?O[I]:[O[I]];for(let D=0,N=dt.length;D<N;D++){const lt=dt[D];if(y(lt,I,D,V)===!0){const ct=lt.__offset,Mt=Array.isArray(lt.value)?lt.value:[lt.value];let W=0;for(let J=0;J<Mt.length;J++){const P=Mt[J],Y=T(P);typeof P=="number"||typeof P=="boolean"?(lt.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ct+W,lt.__data)):P.isMatrix3?(lt.__data[0]=P.elements[0],lt.__data[1]=P.elements[1],lt.__data[2]=P.elements[2],lt.__data[3]=0,lt.__data[4]=P.elements[3],lt.__data[5]=P.elements[4],lt.__data[6]=P.elements[5],lt.__data[7]=0,lt.__data[8]=P.elements[6],lt.__data[9]=P.elements[7],lt.__data[10]=P.elements[8],lt.__data[11]=0):(P.toArray(lt.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,lt.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(L,w,O,V){const I=L.value,B=w+"_"+O;if(V[B]===void 0)return typeof I=="number"||typeof I=="boolean"?V[B]=I:V[B]=I.clone(),!0;{const dt=V[B];if(typeof I=="number"||typeof I=="boolean"){if(dt!==I)return V[B]=I,!0}else if(dt.equals(I)===!1)return dt.copy(I),!0}return!1}function b(L){const w=L.uniforms;let O=0;const V=16;for(let B=0,dt=w.length;B<dt;B++){const D=Array.isArray(w[B])?w[B]:[w[B]];for(let N=0,lt=D.length;N<lt;N++){const ct=D[N],Mt=Array.isArray(ct.value)?ct.value:[ct.value];for(let W=0,J=Mt.length;W<J;W++){const P=Mt[W],Y=T(P),K=O%V;K!==0&&V-K<Y.boundary&&(O+=V-K),ct.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=O,O+=Y.storage}}}const I=O%V;return I>0&&(O+=V-I),L.__size=O,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function x(L){const w=L.target;w.removeEventListener("dispose",x);const O=d.indexOf(w.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}class dv{constructor(e={}){const{canvas:i=zx(),context:s=null,depth:l=!0,stencil:c=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let S;s!==null?S=s.getContextAttributes().alpha:S=d;const y=new Uint32Array(4),b=new Int32Array(4);let T=null,x=null;const _=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Ra,this.toneMappingExposure=1;const w=this;let O=!1,V=0,I=0,B=null,dt=-1,D=null;const N=new vn,lt=new vn;let ct=null;const Mt=new Le(0);let W=0,J=i.width,P=i.height,Y=1,K=null,ut=null;const R=new vn(0,0,J,P),X=new vn(0,0,J,P);let et=!1;const G=new av;let nt=!1,mt=!1,gt=null;const Dt=new Sn,Ut=new xe,qt=new ot,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return B===null?Y:1}let it=s;function $e(C,k){for(let rt=0;rt<C.length;rt++){const st=C[rt],$=i.getContext(st,k);if($!==null)return $}return null}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_h}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",F,!1),i.addEventListener("webglcontextcreationerror",Et,!1),it===null){const k=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&k.shift(),it=$e(k,C),it===null)throw $e(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&it instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),it.getShaderPrecisionFormat===void 0&&(it.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ft,te,Nt,ge,ne,U,A,at,St,_t,xt,Ot,bt,At,Bt,Ht,vt,Ee,oe,Zt,It,wt,$t,pe;function He(){Ft=new QE(it),te=new kE(it,Ft,e),Ft.init(te),wt=new zb(it,Ft,te),Nt=new Ob(it,Ft,te),ge=new tT(it),ne=new xb,U=new Pb(it,Ft,Nt,ne,te,wt,ge),A=new YE(w),at=new KE(w),St=new lM(it,te),$t=new XE(it,Ft,St,te),_t=new JE(it,St,ge,$t),xt=new aT(it,_t,St,ge),oe=new iT(it,te,U),Ht=new qE(ne),Ot=new Sb(w,A,at,Ft,te,$t,Ht),bt=new Hb(w,ne),At=new yb,Bt=new Cb(Ft,te),Ee=new VE(w,A,at,Nt,xt,S,m),vt=new Nb(w,xt,te),pe=new Gb(it,ge,te,Nt),Zt=new WE(it,Ft,ge,te),It=new $E(it,Ft,ge,te),ge.programs=Ot.programs,w.capabilities=te,w.extensions=Ft,w.properties=ne,w.renderLists=At,w.shadowMap=vt,w.state=Nt,w.info=ge}He();const ie=new Fb(w,it);this.xr=ie,this.getContext=function(){return it},this.getContextAttributes=function(){return it.getContextAttributes()},this.forceContextLoss=function(){const C=Ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(J,P,!1))},this.getSize=function(C){return C.set(J,P)},this.setSize=function(C,k,rt=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,P=k,i.width=Math.floor(C*Y),i.height=Math.floor(k*Y),rt===!0&&(i.style.width=C+"px",i.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(J*Y,P*Y).floor()},this.setDrawingBufferSize=function(C,k,rt){J=C,P=k,Y=rt,i.width=Math.floor(C*rt),i.height=Math.floor(k*rt),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,k,rt,st){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,k,rt,st),Nt.viewport(N.copy(R).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,k,rt,st){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,k,rt,st),Nt.scissor(lt.copy(X).multiplyScalar(Y).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){Nt.setScissorTest(et=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(C=!0,k=!0,rt=!0){let st=0;if(C){let $=!1;if(B!==null){const Ct=B.texture.format;$=Ct===V_||Ct===G_||Ct===H_}if($){const Ct=B.texture.type,Pt=Ct===Ca||Ct===ba||Ct===vh||Ct===rr||Ct===I_||Ct===F_,Vt=Ee.getClearColor(),jt=Ee.getClearAlpha(),ae=Vt.r,Qt=Vt.g,Jt=Vt.b;Pt?(y[0]=ae,y[1]=Qt,y[2]=Jt,y[3]=jt,it.clearBufferuiv(it.COLOR,0,y)):(b[0]=ae,b[1]=Qt,b[2]=Jt,b[3]=jt,it.clearBufferiv(it.COLOR,0,b))}else st|=it.COLOR_BUFFER_BIT}k&&(st|=it.DEPTH_BUFFER_BIT),rt&&(st|=it.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",F,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Bt.dispose(),ne.dispose(),A.dispose(),at.dispose(),xt.dispose(),$t.dispose(),pe.dispose(),Ot.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fn),ie.removeEventListener("sessionend",me),gt&&(gt.dispose(),gt=null),ve.stop()};function yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const C=ge.autoReset,k=vt.enabled,rt=vt.autoUpdate,st=vt.needsUpdate,$=vt.type;He(),ge.autoReset=C,vt.enabled=k,vt.autoUpdate=rt,vt.needsUpdate=st,vt.type=$}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Rt(C){const k=C.target;k.removeEventListener("dispose",Rt),Yt(k)}function Yt(C){Gt(C),ne.remove(C)}function Gt(C){const k=ne.get(C).programs;k!==void 0&&(k.forEach(function(rt){Ot.releaseProgram(rt)}),C.isShaderMaterial&&Ot.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,rt,st,$,Ct){k===null&&(k=Wt);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,Vt=ji(C,k,rt,st,$);Nt.setMaterial(st,Pt);let jt=rt.index,ae=1;if(st.wireframe===!0){if(jt=_t.getWireframeAttribute(rt),jt===void 0)return;ae=2}const Qt=rt.drawRange,Jt=rt.attributes.position;let Me=Qt.start*ae,hn=(Qt.start+Qt.count)*ae;Ct!==null&&(Me=Math.max(Me,Ct.start*ae),hn=Math.min(hn,(Ct.start+Ct.count)*ae)),jt!==null?(Me=Math.max(Me,0),hn=Math.min(hn,jt.count)):Jt!=null&&(Me=Math.max(Me,0),hn=Math.min(hn,Jt.count));const qe=hn-Me;if(qe<0||qe===1/0)return;$t.setup($,st,Vt,rt,jt);let xn,Ne=Zt;if(jt!==null&&(xn=St.get(jt),Ne=It,Ne.setIndex(xn)),$.isMesh)st.wireframe===!0?(Nt.setLineWidth(st.wireframeLinewidth*ue()),Ne.setMode(it.LINES)):Ne.setMode(it.TRIANGLES);else if($.isLine){let ee=st.linewidth;ee===void 0&&(ee=1),Nt.setLineWidth(ee*ue()),$.isLineSegments?Ne.setMode(it.LINES):$.isLineLoop?Ne.setMode(it.LINE_LOOP):Ne.setMode(it.LINE_STRIP)}else $.isPoints?Ne.setMode(it.POINTS):$.isSprite&&Ne.setMode(it.TRIANGLES);if($.isBatchedMesh)Ne.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Ne.renderInstances(Me,qe,$.count);else if(rt.isInstancedBufferGeometry){const ee=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ss=Math.min(rt.instanceCount,ee);Ne.renderInstances(Me,qe,Ss)}else Ne.render(Me,qe)};function Te(C,k,rt){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Da(C,k,rt),C.side=wa,C.needsUpdate=!0,Da(C,k,rt),C.side=Gi):Da(C,k,rt)}this.compile=function(C,k,rt=null){rt===null&&(rt=C),x=Bt.get(rt),x.init(),L.push(x),rt.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),C!==rt&&C.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights(w._useLegacyLights);const st=new Set;return C.traverse(function($){const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let Pt=0;Pt<Ct.length;Pt++){const Vt=Ct[Pt];Te(Vt,rt,$),st.add(Vt)}else Te(Ct,rt,$),st.add(Ct)}),L.pop(),x=null,st},this.compileAsync=function(C,k,rt=null){const st=this.compile(C,k,rt);return new Promise($=>{function Ct(){if(st.forEach(function(Pt){ne.get(Pt).currentProgram.isReady()&&st.delete(Pt)}),st.size===0){$(C);return}setTimeout(Ct,10)}Ft.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let be=null;function ke(C){be&&be(C)}function fn(){ve.stop()}function me(){ve.start()}const ve=new rv;ve.setAnimationLoop(ke),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(C){be=C,ie.setAnimationLoop(C),C===null?ve.stop():ve.start()},ie.addEventListener("sessionstart",fn),ie.addEventListener("sessionend",me),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,k,B),x=Bt.get(C,L.length),x.init(),L.push(x),Dt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G.setFromProjectionMatrix(Dt),mt=this.localClippingEnabled,nt=Ht.init(this.clippingPlanes,mt),T=At.get(C,_.length),T.init(),_.push(T),ze(C,k,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(K,ut),this.info.render.frame++,nt===!0&&Ht.beginShadows();const rt=x.state.shadowsArray;if(vt.render(rt,C,k),nt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(T,C),x.setupLights(w._useLegacyLights),k.isArrayCamera){const st=k.cameras;for(let $=0,Ct=st.length;$<Ct;$++){const Pt=st[$];xi(T,C,Pt,Pt.viewport)}}else xi(T,C,k);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(w,C,k),$t.resetDefaultState(),dt=-1,D=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function ze(C,k,rt,st){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){st&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);const Pt=xt.update(C),Vt=C.material;Vt.visible&&T.push(C,Pt,Vt,rt,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const Pt=xt.update(C),Vt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),qt.copy(Pt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Vt)){const jt=Pt.groups;for(let ae=0,Qt=jt.length;ae<Qt;ae++){const Jt=jt[ae],Me=Vt[Jt.materialIndex];Me&&Me.visible&&T.push(C,Pt,Me,rt,qt.z,Jt)}}else Vt.visible&&T.push(C,Pt,Vt,rt,qt.z,null)}}const Ct=C.children;for(let Pt=0,Vt=Ct.length;Pt<Vt;Pt++)ze(Ct[Pt],k,rt,st)}function xi(C,k,rt,st){const $=C.opaque,Ct=C.transmissive,Pt=C.transparent;x.setupLightsView(rt),nt===!0&&Ht.setGlobalState(w.clippingPlanes,rt),Ct.length>0&&vs($,Ct,k,rt),st&&Nt.viewport(N.copy(st)),$.length>0&&cr($,k,rt),Ct.length>0&&cr(Ct,k,rt),Pt.length>0&&cr(Pt,k,rt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function vs(C,k,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const Ct=te.isWebGL2;gt===null&&(gt=new qi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")?To:Ca,minFilter:Eo,samples:Ct?4:0})),w.getDrawingBufferSize(Ut),Ct?gt.setSize(Ut.x,Ut.y):gt.setSize(ph(Ut.x),ph(Ut.y));const Pt=w.getRenderTarget();w.setRenderTarget(gt),w.getClearColor(Mt),W=w.getClearAlpha(),W<1&&w.setClearColor(16777215,.5),w.clear();const Vt=w.toneMapping;w.toneMapping=Ra,cr(C,rt,st),U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt);let jt=!1;for(let ae=0,Qt=k.length;ae<Qt;ae++){const Jt=k[ae],Me=Jt.object,hn=Jt.geometry,qe=Jt.material,xn=Jt.group;if(qe.side===Gi&&Me.layers.test(st.layers)){const Ne=qe.side;qe.side=Pn,qe.needsUpdate=!0,wo(Me,rt,st,hn,qe,xn),qe.side=Ne,qe.needsUpdate=!0,jt=!0}}jt===!0&&(U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt)),w.setRenderTarget(Pt),w.setClearColor(Mt,W),w.toneMapping=Vt}function cr(C,k,rt){const st=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Ct=C.length;$<Ct;$++){const Pt=C[$],Vt=Pt.object,jt=Pt.geometry,ae=st===null?Pt.material:st,Qt=Pt.group;Vt.layers.test(rt.layers)&&wo(Vt,k,rt,jt,ae,Qt)}}function wo(C,k,rt,st,$,Ct){C.onBeforeRender(w,k,rt,st,$,Ct),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(w,k,rt,st,C,Ct),$.transparent===!0&&$.side===Gi&&$.forceSinglePass===!1?($.side=Pn,$.needsUpdate=!0,w.renderBufferDirect(rt,k,st,$,C,Ct),$.side=wa,$.needsUpdate=!0,w.renderBufferDirect(rt,k,st,$,C,Ct),$.side=Gi):w.renderBufferDirect(rt,k,st,$,C,Ct),C.onAfterRender(w,k,rt,st,$,Ct)}function Da(C,k,rt){k.isScene!==!0&&(k=Wt);const st=ne.get(C),$=x.state.lights,Ct=x.state.shadowsArray,Pt=$.state.version,Vt=Ot.getParameters(C,$.state,Ct,k,rt),jt=Ot.getProgramCacheKey(Vt);let ae=st.programs;st.environment=C.isMeshStandardMaterial?k.environment:null,st.fog=k.fog,st.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||st.environment),ae===void 0&&(C.addEventListener("dispose",Rt),ae=new Map,st.programs=ae);let Qt=ae.get(jt);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===Pt)return fr(C,Vt),Qt}else Vt.uniforms=Ot.getUniforms(C),C.onBuild(rt,Vt,w),C.onBeforeCompile(Vt,w),Qt=Ot.acquireProgram(Vt,jt),ae.set(jt,Qt),st.uniforms=Vt.uniforms;const Jt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=Ht.uniform),fr(C,Vt),st.needsLights=Ua(C),st.lightsStateVersion=Pt,st.needsLights&&(Jt.ambientLightColor.value=$.state.ambient,Jt.lightProbe.value=$.state.probe,Jt.directionalLights.value=$.state.directional,Jt.directionalLightShadows.value=$.state.directionalShadow,Jt.spotLights.value=$.state.spot,Jt.spotLightShadows.value=$.state.spotShadow,Jt.rectAreaLights.value=$.state.rectArea,Jt.ltc_1.value=$.state.rectAreaLTC1,Jt.ltc_2.value=$.state.rectAreaLTC2,Jt.pointLights.value=$.state.point,Jt.pointLightShadows.value=$.state.pointShadow,Jt.hemisphereLights.value=$.state.hemi,Jt.directionalShadowMap.value=$.state.directionalShadowMap,Jt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Jt.spotShadowMap.value=$.state.spotShadowMap,Jt.spotLightMatrix.value=$.state.spotLightMatrix,Jt.spotLightMap.value=$.state.spotLightMap,Jt.pointShadowMap.value=$.state.pointShadowMap,Jt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function Zi(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=lu.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function fr(C,k){const rt=ne.get(C);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function ji(C,k,rt,st,$){k.isScene!==!0&&(k=Wt),U.resetTextureUnits();const Ct=k.fog,Pt=st.isMeshStandardMaterial?k.environment:null,Vt=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ki,jt=(st.isMeshStandardMaterial?at:A).get(st.envMap||Pt),ae=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!rt.morphAttributes.position,Me=!!rt.morphAttributes.normal,hn=!!rt.morphAttributes.color;let qe=Ra;st.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qe=w.toneMapping);const xn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ne=xn!==void 0?xn.length:0,ee=ne.get(st),Ss=x.state.lights;if(nt===!0&&(mt===!0||C!==D)){const Ie=C===D&&st.id===dt;Ht.setState(st,C,Ie)}let Be=!1;st.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ss.state.version||ee.outputColorSpace!==Vt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||ee.envMap!==jt||st.fog===!0&&ee.fog!==Ct||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ht.numPlanes||ee.numIntersection!==Ht.numIntersection)||ee.vertexAlphas!==ae||ee.vertexTangents!==Qt||ee.morphTargets!==Jt||ee.morphNormals!==Me||ee.morphColors!==hn||ee.toneMapping!==qe||te.isWebGL2===!0&&ee.morphTargetsCount!==Ne)&&(Be=!0):(Be=!0,ee.__version=st.version);let je=ee.currentProgram;Be===!0&&(je=Da(st,k,$));let xs=!1,La=!1,Qi=!1;const tn=je.getUniforms(),Yn=ee.uniforms;if(Nt.useProgram(je.program)&&(xs=!0,La=!0,Qi=!0),st.id!==dt&&(dt=st.id,La=!0),xs||D!==C){tn.setValue(it,"projectionMatrix",C.projectionMatrix),tn.setValue(it,"viewMatrix",C.matrixWorldInverse);const Ie=tn.map.cameraPosition;Ie!==void 0&&Ie.setValue(it,qt.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&tn.setValue(it,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&tn.setValue(it,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,La=!0,Qi=!0)}if($.isSkinnedMesh){tn.setOptional(it,$,"bindMatrix"),tn.setOptional(it,$,"bindMatrixInverse");const Ie=$.skeleton;Ie&&(te.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),tn.setValue(it,"boneTexture",Ie.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(tn.setOptional(it,$,"batchingTexture"),tn.setValue(it,"batchingTexture",$._matricesTexture,U));const Ms=rt.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&te.isWebGL2===!0)&&oe.update($,rt,je),(La||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,tn.setValue(it,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Yn.envMap.value=jt,Yn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),La&&(tn.setValue(it,"toneMappingExposure",w.toneMappingExposure),ee.needsLights&&Ki(Yn,Qi),Ct&&st.fog===!0&&bt.refreshFogUniforms(Yn,Ct),bt.refreshMaterialUniforms(Yn,st,Y,P,gt),lu.upload(it,Zi(ee),Yn,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(lu.upload(it,Zi(ee),Yn,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&tn.setValue(it,"center",$.center),tn.setValue(it,"modelViewMatrix",$.modelViewMatrix),tn.setValue(it,"normalMatrix",$.normalMatrix),tn.setValue(it,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ie=st.uniformsGroups;for(let Na=0,Do=Ie.length;Na<Do;Na++)if(te.isWebGL2){const hr=Ie[Na];pe.update(hr,je),pe.bind(hr,je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return je}function Ki(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Ua(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,k,rt){ne.get(C.texture).__webglTexture=k,ne.get(C.depthTexture).__webglTexture=rt;const st=ne.get(C);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const rt=ne.get(C);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,rt=0){B=C,V=k,I=rt;let st=!0,$=null,Ct=!1,Pt=!1;if(C){const jt=ne.get(C);jt.__useDefaultFramebuffer!==void 0?(Nt.bindFramebuffer(it.FRAMEBUFFER,null),st=!1):jt.__webglFramebuffer===void 0?U.setupRenderTarget(C):jt.__hasExternalTextures&&U.rebindTextures(C,ne.get(C.texture).__webglTexture,ne.get(C.depthTexture).__webglTexture);const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Pt=!0);const Qt=ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?$=Qt[k][rt]:$=Qt[k],Ct=!0):te.isWebGL2&&C.samples>0&&U.useMultisampledRTT(C)===!1?$=ne.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?$=Qt[rt]:$=Qt,N.copy(C.viewport),lt.copy(C.scissor),ct=C.scissorTest}else N.copy(R).multiplyScalar(Y).floor(),lt.copy(X).multiplyScalar(Y).floor(),ct=et;if(Nt.bindFramebuffer(it.FRAMEBUFFER,$)&&te.drawBuffers&&st&&Nt.drawBuffers(C,$),Nt.viewport(N),Nt.scissor(lt),Nt.setScissorTest(ct),Ct){const jt=ne.get(C.texture);it.framebufferTexture2D(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,it.TEXTURE_CUBE_MAP_POSITIVE_X+k,jt.__webglTexture,rt)}else if(Pt){const jt=ne.get(C.texture),ae=k||0;it.framebufferTextureLayer(it.FRAMEBUFFER,it.COLOR_ATTACHMENT0,jt.__webglTexture,rt||0,ae)}dt=-1},this.readRenderTargetPixels=function(C,k,rt,st,$,Ct,Pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Vt=Vt[Pt]),Vt){Nt.bindFramebuffer(it.FRAMEBUFFER,Vt);try{const jt=C.texture,ae=jt.format,Qt=jt.type;if(ae!==kn&&wt.convert(ae)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jt=Qt===To&&(Ft.has("EXT_color_buffer_half_float")||te.isWebGL2&&Ft.has("EXT_color_buffer_float"));if(Qt!==Ca&&wt.convert(Qt)!==it.getParameter(it.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===Vi&&(te.isWebGL2||Ft.has("OES_texture_float")||Ft.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-st&&rt>=0&&rt<=C.height-$&&it.readPixels(k,rt,st,$,wt.convert(ae),wt.convert(Qt),Ct)}finally{const jt=B!==null?ne.get(B).__webglFramebuffer:null;Nt.bindFramebuffer(it.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(C,k,rt=0){const st=Math.pow(2,-rt),$=Math.floor(k.image.width*st),Ct=Math.floor(k.image.height*st);U.setTexture2D(k,0),it.copyTexSubImage2D(it.TEXTURE_2D,rt,0,0,C.x,C.y,$,Ct),Nt.unbindTexture()},this.copyTextureToTexture=function(C,k,rt,st=0){const $=k.image.width,Ct=k.image.height,Pt=wt.convert(rt.format),Vt=wt.convert(rt.type);U.setTexture2D(rt,0),it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,rt.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,rt.unpackAlignment),k.isDataTexture?it.texSubImage2D(it.TEXTURE_2D,st,C.x,C.y,$,Ct,Pt,Vt,k.image.data):k.isCompressedTexture?it.compressedTexSubImage2D(it.TEXTURE_2D,st,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Pt,k.mipmaps[0].data):it.texSubImage2D(it.TEXTURE_2D,st,C.x,C.y,Pt,Vt,k.image),st===0&&rt.generateMipmaps&&it.generateMipmap(it.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(C,k,rt,st,$=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=C.max.x-C.min.x+1,Pt=C.max.y-C.min.y+1,Vt=C.max.z-C.min.z+1,jt=wt.convert(st.format),ae=wt.convert(st.type);let Qt;if(st.isData3DTexture)U.setTexture3D(st,0),Qt=it.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)U.setTexture2DArray(st,0),Qt=it.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}it.pixelStorei(it.UNPACK_FLIP_Y_WEBGL,st.flipY),it.pixelStorei(it.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),it.pixelStorei(it.UNPACK_ALIGNMENT,st.unpackAlignment);const Jt=it.getParameter(it.UNPACK_ROW_LENGTH),Me=it.getParameter(it.UNPACK_IMAGE_HEIGHT),hn=it.getParameter(it.UNPACK_SKIP_PIXELS),qe=it.getParameter(it.UNPACK_SKIP_ROWS),xn=it.getParameter(it.UNPACK_SKIP_IMAGES),Ne=rt.isCompressedTexture?rt.mipmaps[$]:rt.image;it.pixelStorei(it.UNPACK_ROW_LENGTH,Ne.width),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,Ne.height),it.pixelStorei(it.UNPACK_SKIP_PIXELS,C.min.x),it.pixelStorei(it.UNPACK_SKIP_ROWS,C.min.y),it.pixelStorei(it.UNPACK_SKIP_IMAGES,C.min.z),rt.isDataTexture||rt.isData3DTexture?it.texSubImage3D(Qt,$,k.x,k.y,k.z,Ct,Pt,Vt,jt,ae,Ne.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),it.compressedTexSubImage3D(Qt,$,k.x,k.y,k.z,Ct,Pt,Vt,jt,Ne.data)):it.texSubImage3D(Qt,$,k.x,k.y,k.z,Ct,Pt,Vt,jt,ae,Ne),it.pixelStorei(it.UNPACK_ROW_LENGTH,Jt),it.pixelStorei(it.UNPACK_IMAGE_HEIGHT,Me),it.pixelStorei(it.UNPACK_SKIP_PIXELS,hn),it.pixelStorei(it.UNPACK_SKIP_ROWS,qe),it.pixelStorei(it.UNPACK_SKIP_IMAGES,xn),$===0&&st.generateMipmaps&&it.generateMipmap(Qt),Nt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Nt.unbindTexture()},this.resetState=function(){V=0,I=0,B=null,Nt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",i.unpackColorSpace=Ue.workingColorSpace===gu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_n?or:W_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===or?_n:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vb extends dv{}Vb.prototype.isWebGL1Renderer=!0;class Xb extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class Wb extends Rn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=gn,g=gn,v,S){super(null,d,h,m,p,g,l,c,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kb extends Rn{constructor(e,i,s,l,c,d,h,m,p){super(e,i,s,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);const ou=.5,qb=.994,Yb=.018,Zb=.35,jb=.055,Kb=3.5,L_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Qb=`
  uniform sampler2D uPrevState; 
  uniform vec2 uResolution;     
  uniform vec2 uMousePos;       
  uniform float uMouseActive;   
  uniform float uBrushRadius;
  uniform float uWaveStrength;
  uniform float uDamping;

  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / uResolution;
    
    vec2 O = texture2D(uPrevState, vUv).xy;

    float L = texture2D(uPrevState, vUv + vec2(-texel.x, 0.0)).x;
    float R = texture2D(uPrevState, vUv + vec2(texel.x, 0.0)).x;
    float T = texture2D(uPrevState, vUv + vec2(0.0, texel.y)).x;
    float B = texture2D(uPrevState, vUv + vec2(0.0, -texel.y)).x;
    
    float laplacian = (L + R + T + B) - 4.0 * O.x;
    
    float newVelocity = O.y + laplacian * 0.110; 
    float newHeight = O.x + newVelocity;

    newHeight = clamp(newHeight, -0.25, 0.25);
    newVelocity = clamp(newVelocity, -0.05, 0.05);

    newHeight *= uDamping;
    newVelocity *= uDamping;

    if (uMouseActive > 0.5) {
      float distToMouse = distance(vUv, uMousePos);
      if (distToMouse < uBrushRadius) {
        float dropFactor = smoothstep(uBrushRadius, 0.0, distToMouse);
        newHeight += uWaveStrength * dropFactor * 0.6; 
        newVelocity += uWaveStrength * dropFactor * 0.05; 
      }
    }
    
    gl_FragColor = vec4(newHeight, newVelocity, 0.0, 1.0);
  }
`,Jb=`
  uniform sampler2D uRippleMap; 
  uniform sampler2D uBackgroundTexture;
  uniform sampler2D uNoiseTexture;
  uniform vec2 uSimulationResolution; 
  uniform float uDistortionStrength;
  uniform float uFresnelPower;
  uniform float uTime; 

  varying vec2 vUv;

  // Simple pseudo-random function
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Function to draw a shooting star
  // Returns color of the star at current vUv
  vec3 drawShootingStar(vec2 uv, vec2 pos, vec2 dir, float len, float intensity, vec3 color) {
    vec2 to_uv = uv - pos;
    float proj = dot(to_uv, dir); 
    
    if (proj < 0.0 || proj > len) return vec3(0.0); 

    float dist_to_line = length(to_uv - proj * dir); 
    
    float head_size = 0.0025; // Slightly smaller head for sharper look
    float tail_falloff = 0.004; 

    float brightness = smoothstep(tail_falloff + head_size, head_size, dist_to_line);
    
    brightness *= (1.0 - pow(proj / len, 1.5)); // Adjusted falloff along length for a bit more body

    return color * brightness * intensity;
  }


  vec3 getNormal(sampler2D heightMap, vec2 uv, vec2 mapResolution) {
      vec2 texel = 1.0 / mapResolution;
      float hL = texture2D(heightMap, uv - vec2(texel.x, 0.0)).x;
      float hR = texture2D(heightMap, uv + vec2(texel.x, 0.0)).x;
      float hD = texture2D(heightMap, uv - vec2(0.0, texel.y)).x;
      float hU = texture2D(heightMap, uv + vec2(0.0, texel.y)).x;
      
      vec3 normal = vec3(hL - hR, hD - hU, texel.x * 3.5); 
      return normalize(normal);
  }

  void main() {
    vec3 normal = getNormal(uRippleMap, vUv, uSimulationResolution);
    float rippleHeight = texture2D(uRippleMap, vUv).x;
    float rippleHeightAbs = abs(rippleHeight);
    
    vec2 bgUv = vUv + vec2(uTime * -0.003, uTime * -0.0015); 
    bgUv = mod(bgUv, 1.0); 

    vec2 distortedUv = bgUv + normal.xy * uDistortionStrength;
    vec4 backgroundColorTex = texture2D(uBackgroundTexture, distortedUv);
    
    vec3 sceneColor = backgroundColorTex.rgb;

    // --- Add Moving Objects (Shooting Stars) ---
    const int NUM_STARS = 6; // Increased number of shooting stars
    for (int i = 0; i < NUM_STARS; ++i) {
        float i_float = float(i);
        
        float starCycleDuration = 6.0 + random(vec2(i_float, 0.0)) * 7.0; 
        float currentTimeInCycle = mod(uTime * (0.25 + random(vec2(i_float, 1.0)) * 0.15), starCycleDuration);

        vec2 startPos = vec2(0.0, random(vec2(i_float, 2.0)) * 0.9 + 0.05); 
        float directionX = 1.0;
        if (random(vec2(i_float, 2.5)) > 0.5) { 
            startPos.x = 1.0;
            directionX = -1.0;
        }
        startPos.y = clamp(startPos.y, 0.05, 0.95); // Ensure stars start within bounds better

        vec2 velocity = normalize(vec2(directionX * (0.7 + random(vec2(i_float, 2.8)) * 0.6) , (random(vec2(i_float, 3.0)) - 0.5) * 0.4));
        
        float progress = currentTimeInCycle / starCycleDuration; 
        vec2 currentPos = startPos + velocity * progress * (1.0 + random(vec2(i_float, 3.5)) * 0.7); // More variation in traversal

        float tailLength = 0.04 + random(vec2(i_float, 4.0)) * 0.12;
        float starIntensity = 0.7 + random(vec2(i_float, 5.0)) * 0.9;
        
        vec3 baseStarColor = vec3(0.8, 0.85, 0.95); // Icy white-blue base
        float r_mod = random(vec2(i_float, 6.0)) * 0.4 - 0.2; 
        float g_mod = random(vec2(i_float, 7.0)) * 0.3 - 0.15; 
        float b_mod = random(vec2(i_float, 8.0)) * 0.2 - 0.1;
        vec3 starColorVariant = baseStarColor + vec3(r_mod, g_mod, b_mod);
        starColorVariant = clamp(starColorVariant, vec3(0.65), vec3(1.0)); // Ensure bright and valid colors

        sceneColor += drawShootingStar(vUv, currentPos, velocity, tailLength, starIntensity, starColorVariant);
    }
    // --- End Moving Objects ---

    vec3 finalRgb = sceneColor;


    vec3 viewDir = vec3(0.0, 0.0, 1.0); 
    float fresnelTerm = pow(1.0 - abs(dot(viewDir, normal)), uFresnelPower);
    fresnelTerm = clamp(fresnelTerm * 1.5, 0.0, 1.0); 
    vec3 fresnelColor = vec3(0.8, 0.85, 0.9); 
    finalRgb = mix(finalRgb, fresnelColor, fresnelTerm * 0.25);

    vec3 lightDir = normalize(vec3(0.5, 0.6, 1.0)); 
    vec3 halfVector = normalize(lightDir + viewDir);
    float specularAngle = max(0.0, dot(normal, halfVector));
    float specularIntensity = pow(specularAngle, 96.0); 

    specularIntensity *= smoothstep(0.005, 0.06, rippleHeightAbs); 
    specularIntensity *= (0.4 + texture2D(uNoiseTexture, vUv * 12.0 + normal.xy * 0.3 + uTime * 0.02).r * 0.9);

    vec3 specularColor = vec3(1.0, 1.0, 1.0) * specularIntensity * 1.1; 
    finalRgb += specularColor;
    
    float generalNoiseVal = texture2D(uNoiseTexture, vUv * 5.0 - uTime * 0.005).r;
    finalRgb += (generalNoiseVal - 0.5) * 0.01;
    
    gl_FragColor = vec4(clamp(finalRgb, 0.0, 1.0), backgroundColorTex.a);
  }
`,$b=()=>{const o=cn.useRef(null),e=cn.useRef({}),i=cn.useCallback(()=>{const g=new Uint8Array(65536);for(let S=0;S<128*128;S++){const y=Math.random()*255;g[S*4+0]=y,g[S*4+1]=y,g[S*4+2]=y,g[S*4+3]=255}const v=new Wb(g,128,128,kn);return v.needsUpdate=!0,v.wrapS=ar,v.wrapT=ar,v},[]),s=cn.useCallback(()=>{const g=document.createElement("canvas");g.width=2048,g.height=2048;const v=g.getContext("2d");v.fillStyle="rgb(5, 5, 20)",v.fillRect(0,0,2048,2048);for(let b=0;b<8;b++){const T=Math.random()*2048,x=Math.random()*2048,_=Math.random()*2048*.5+2048*.25,L=v.createRadialGradient(T,x,_*.05,T,x,_),w=5,O=10,V=30,I=Math.floor(w+Math.random()*15),B=Math.floor(O+Math.random()*25),dt=Math.floor(V+Math.random()*40);L.addColorStop(0,`rgba(${I}, ${B}, ${dt}, ${Math.random()*.04+.02})`),L.addColorStop(.5,`rgba(${I*.8}, ${B*.8}, ${dt*.8}, ${Math.random()*.02+.01})`),L.addColorStop(1,`rgba(${I*.5}, ${B*.5}, ${dt*.5}, 0)`),v.fillStyle=L,v.fillRect(0,0,2048,2048)}const S=(b,T,x,_,L,w="255,255,255")=>{for(let O=0;O<b;O++){const V=Math.random()*2048,I=Math.random()*2048,B=Math.random()*(x-T)+T,dt=Math.random()*(L-_)+_;v.beginPath(),v.arc(V,I,B,0,Math.PI*2),v.fillStyle=`rgba(${w}, ${dt})`,v.fill()}};S(2048*3,.1,.3,.1,.3,"180,190,210"),S(2048*2,.2,.5,.2,.5,"200,210,230"),S(Math.floor(2048/1.5),.4,.8,.3,.6,"220,225,240"),S(Math.floor(2048/8),.6,1.2,.5,.8,"230,235,255"),v.shadowColor="rgba(200, 220, 255, 0.4)";for(let b=0;b<Math.floor(2048/40);b++){const T=Math.random()*2048,x=Math.random()*2048,_=Math.random()*1.2+.7,L=Math.random()*.35+.65;v.shadowBlur=_*(4+Math.random()*3),v.beginPath(),v.arc(T,x,_,0,Math.PI*2);const w=240+Math.floor(Math.random()*15),O=240+Math.floor(Math.random()*15),V=255;v.fillStyle=`rgba(${w},${O},${V}, ${L})`,v.fill()}v.shadowBlur=0;const y=new kb(g);return y.wrapS=ar,y.wrapT=ar,y},[]),l=cn.useCallback(p=>{const{renderer:g,updateMaterial:v,displayMaterial:S,rtA:y,rtB:b,simSize:T}=e.current;if(!g)return;const x=p.clientWidth,_=p.clientHeight;g.setSize(x,_,!1);const L=Math.floor(x*ou),w=Math.floor(_*ou);y&&b&&(y.setSize(L,w),b.setSize(L,w)),v&&v.uniforms.uResolution.value.set(L,w),S&&S.uniforms.uSimulationResolution.value.set(L,w),T&&T.set(L,w)},[]),c=cn.useCallback(p=>{const{scene:g,camera:v,renderer:S,rtA:y,rtB:b,updateMaterial:T,displayMaterial:x,noiseTexture:_,backgroundTexture:L}=e.current;if(S&&S.dispose(),y&&y.dispose(),b&&b.dispose(),T&&T.dispose(),x&&x.dispose(),_&&_.dispose(),L&&L.dispose(),g)for(;g.children.length>0;)g.remove(g.children[0]);const w=new dv({canvas:p,antialias:!0,alpha:!0});w.setPixelRatio(window.devicePixelRatio);const O=new Xb,V=new sv(-.5,.5,.5,-.5,.1,10);V.position.z=1;const I=Math.floor(p.clientWidth*ou),B=Math.floor(p.clientHeight*ou),dt={minFilter:Nn,magFilter:Nn,format:kn,type:Vi},D=new qi(I,B,dt),N=new qi(I,B,dt),lt=i(),ct=s(),Mt=new Yi({uniforms:{uPrevState:{value:D.texture},uResolution:{value:new xe(I,B)},uMousePos:{value:new xe(-1,-1)},uMouseActive:{value:0},uBrushRadius:{value:Yb},uWaveStrength:{value:Zb},uDamping:{value:qb}},vertexShader:L_,fragmentShader:Qb}),W=new Yi({uniforms:{uRippleMap:{value:N.texture},uBackgroundTexture:{value:ct},uNoiseTexture:{value:lt},uSimulationResolution:{value:new xe(I,B)},uDistortionStrength:{value:jb},uFresnelPower:{value:Kb},uTime:{value:0}},vertexShader:L_,fragmentShader:Jb,transparent:!0}),J=new Su(1,1),P=new Wi(J,W);O.add(P),e.current={scene:O,camera:V,renderer:w,rtA:D,rtB:N,updateMaterial:Mt,displayMaterial:W,screenQuad:P,noiseTexture:lt,backgroundTexture:ct,simSize:new xe(I,B),mouseLastInteractionTime:0,startTime:Date.now()},l(p)},[i,s,l]);cn.useEffect(()=>{const p=o.current;if(!p)return;c(p);const g=()=>l(p);window.addEventListener("resize",g);let v;const S=()=>{v=requestAnimationFrame(S);const{renderer:y,scene:b,camera:T,rtA:x,rtB:_,updateMaterial:L,displayMaterial:w,screenQuad:O,mouseLastInteractionTime:V,startTime:I}=e.current;!y||!b||!T||!x||!_||!L||!w||!O||(w.uniforms.uTime.value=(Date.now()-I)/1e3,O.material=L,L.uniforms.uPrevState.value=x.texture,Date.now()-V>100&&(L.uniforms.uMouseActive.value=0),y.setRenderTarget(_),y.render(b,T),y.setRenderTarget(null),[e.current.rtA,e.current.rtB]=[_,x],O.material=w,w.uniforms.uRippleMap.value=_.texture,y.render(b,T))};return S(),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",g);const{renderer:y,rtA:b,rtB:T,updateMaterial:x,displayMaterial:_,noiseTexture:L,backgroundTexture:w,scene:O}=e.current;if(y&&y.dispose(),b&&b.dispose(),T&&T.dispose(),x&&x.dispose(),_&&_.dispose(),L&&L.dispose(),w&&w.dispose(),O)for(;O.children.length>0;)O.remove(O.children[0]);e.current={}}},[c,l]);const d=cn.useCallback((p,g,v)=>{const{updateMaterial:S}=e.current;if(!S)return;const y=v.getBoundingClientRect(),b=(p-y.left)/y.width,T=1-(g-y.top)/y.height;S.uniforms.uMousePos.value.set(b,T),S.uniforms.uMouseActive.value=1,e.current.mouseLastInteractionTime=Date.now()},[]),h=cn.useCallback(p=>{d(p.clientX,p.clientY,p.currentTarget)},[d]),m=cn.useCallback(p=>{if(p.touches.length>0){const g=p.touches[0];d(g.clientX,g.clientY,p.currentTarget)}},[d]);return ii.jsx("canvas",{ref:o,className:"absolute top-0 left-0 w-full h-full z-0",onPointerMove:h,onTouchMove:m,"aria-hidden":"true",style:{touchAction:"none"}})},tA=()=>ii.jsxs("div",{className:"relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 overflow-hidden",children:[ii.jsx($b,{})," ",ii.jsx(NS,{}),ii.jsx(OS,{})]}),pv=document.getElementById("root");if(!pv)throw new Error("Could not find root element to mount to");const eA=wS.createRoot(pv);eA.render(ii.jsx(MS.StrictMode,{children:ii.jsx(tA,{})}));
