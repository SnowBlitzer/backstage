/*! For license information please see 404fce66.025b1aa5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[962946],{533401:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>f,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",title:"ScaffolderRJSFFieldProps.idPrefix",description:"API reference for ScaffolderRJSFFieldProps.idPrefix"},i=void 0,f={id:"reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",title:"ScaffolderRJSFFieldProps.idPrefix",description:"API reference for ScaffolderRJSFFieldProps.idPrefix",source:"@site/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",permalink:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",title:"ScaffolderRJSFFieldProps.idPrefix",description:"API reference for ScaffolderRJSFFieldProps.idPrefix"}},u={},s=[];function a(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops",children:(0,n.jsx)(r.code,{children:"ScaffolderRJSFFieldProps"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-react.scaffolderrjsffieldprops.idprefix",children:(0,n.jsx)(r.code,{children:"idPrefix"})})]}),"\n",(0,n.jsxs)(r.p,{children:["To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is ",(0,n.jsx)(r.code,{children:"root"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"idPrefix?: string;\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,f=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,a=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:a,props:c,_owner:f.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(e,r,t){this.props=e,this.context=r,this.refs=_,this.updater=t||y}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=_,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var x=v.prototype=new b;x.constructor=v,h(x,m.prototype),x.isPureReactComponent=!0;var S=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,c={},i=null,f=null;if(null!=r)for(o in void 0!==r.ref&&(f=r.ref),void 0!==r.key&&(i=""+r.key),r)g.call(r,o)&&!P.hasOwnProperty(o)&&(c[o]=r[o]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var s=Array(u),a=0;a<u;a++)s[a]=arguments[a+2];c.children=s}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:t,type:e,key:i,ref:f,props:c,_owner:j.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,i){var f=typeof e;"undefined"!==f&&"boolean"!==f||(e=null);var u=!1;if(null===e)u=!0;else switch(f){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case n:u=!0}}if(u)return i=i(u=e),e=""===c?"."+w(u,0):c,S(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(i,r,o,"",(function(e){return e}))):null!=i&&(R(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),r.push(i)),1;if(u=0,c=""===c?".":c+":",S(e))for(var s=0;s<e.length;s++){var a=c+w(f=e[s],s);u+=C(f,r,o,a,i)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),s=0;!(f=e.next()).done;)u+=C(f=f.value,r,o,a=c+w(f,s++),i);else if("object"===f)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},T={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=o,r.Profiler=i,r.PureComponent=v,r.StrictMode=c,r.Suspense=a,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,f=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,f=j.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)g.call(r,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var a=0;a<s;a++)u[a]=arguments[a+2];o.children=u}return{$$typeof:t,type:e.type,key:c,ref:i,props:o,_owner:f}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return F.current.useCallback(e,r)},r.useContext=function(e){return F.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return F.current.useDeferredValue(e)},r.useEffect=function(e,r){return F.current.useEffect(e,r)},r.useId=function(){return F.current.useId()},r.useImperativeHandle=function(e,r,t){return F.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return F.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return F.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return F.current.useMemo(e,r)},r.useReducer=function(e,r,t){return F.current.useReducer(e,r,t)},r.useRef=function(e){return F.current.useRef(e)},r.useState=function(e){return F.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return F.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return F.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>f,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function f({components:e,children:r,disableParentContext:t}){let f;return f=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:f},r)}}}]);