!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";n.r(e);const r=new Map,s=Symbol("riot-component"),o=new Set,i="mount",a="update",u="unmount",c=Symbol.for("pure"),l=Symbol("parent"),p=Symbol("attributes"),h=Symbol("template");var d=Object.freeze({__proto__:null,COMPONENTS_IMPLEMENTATION_MAP:r,DOM_COMPONENT_INSTANCE_PROPERTY:s,PLUGINS_SET:o,IS_DIRECTIVE:"is",VALUE_ATTRIBUTE:"value",MOUNT_METHOD_KEY:i,UPDATE_METHOD_KEY:a,UNMOUNT_METHOD_KEY:u,SHOULD_UPDATE_KEY:"shouldUpdate",ON_BEFORE_MOUNT_KEY:"onBeforeMount",ON_MOUNTED_KEY:"onMounted",ON_BEFORE_UPDATE_KEY:"onBeforeUpdate",ON_UPDATED_KEY:"onUpdated",ON_BEFORE_UNMOUNT_KEY:"onBeforeUnmount",ON_UNMOUNTED_KEY:"onUnmounted",PROPS_KEY:"props",STATE_KEY:"state",SLOTS_KEY:"slots",ROOT_KEY:"root",IS_PURE_SYMBOL:c,PARENT_KEY_SYMBOL:l,ATTRIBUTES_KEY_SYMBOL:p,TEMPLATE_KEY_SYMBOL:h});function f(t){return typeof t==="function"}function m(){return this}function b(t){return f(t)?t.prototype&&t.prototype.constructor?new t:t():t}function g(t){Array.from(t).forEach(v)}function v(t){const{parentNode:e}=t;t.remove?t.remove():e&&e.removeChild(t)}var O={EACH:0,IF:1,SIMPLE:2,TAG:3,SLOT:4};var y={ATTRIBUTE:0,EVENT:1,TEXT:2,VALUE:3};const{indexOf:E}=[],T=(t,e,n,r,s,o)=>{const i="selectedIndex"in e;let a=i;for(;r<s;){const s=t(n[r],1);if(e.insertBefore(s,o),i&&a&&s.selected){a=!a;let{selectedIndex:t}=e;e.selectedIndex=t<0?r:E.call(e.querySelectorAll("option"),s)}r++}},x=(t,e)=>t==e,N=t=>t,_=(t,e,n,r,s,o,i)=>{const a=o-s;if(a<1)return-1;for(;n-e>=a;){let a=e,u=s;for(;a<n&&u<o&&i(t[a],r[u]);)a++,u++;if(u===o)return e;e=a+1}return-1},A=(t,e,n,r,s)=>n<r?t(e[n],0):0<n?t(e[n-1],-0).nextSibling:s,M=(t,e,n,r)=>{for(;n<r;)S(t(e[n++],-1))},j=(t,e,n)=>{let r=1,s=e;for(;r<s;){const e=(r+s)/2>>>0;n<t[e]?s=e:r=e+1}return r},w=(t,e,n,r,s,o,i,a,u,c,l,p,h)=>{((t,e,n,r,s,o,i,a,u)=>{const c=[],l=t.length;let p=i,h=0;for(;h<l;)switch(t[h++]){case 0:s++,p++;break;case 1:c.push(r[s]),T(e,n,r,s++,s,p<a?e(o[p],0):u);break;case-1:p++}for(h=0;h<l;)switch(t[h++]){case 0:i++;break;case-1:-1<c.indexOf(o[i])?i++:M(e,o,i++,i)}})(((t,e,n,r,s,o,i)=>{const a=n+o,u=[];let c,l,p,h,d,f,m;t:for(c=0;c<=a;c++){if(c>50)return null;for(m=c-1,d=c?u[c-1]:[0,0],f=u[c]=[],l=-c;l<=c;l+=2){for(h=l===-c||l!==c&&d[m+l-1]<d[m+l+1]?d[m+l+1]:d[m+l-1]+1,p=h-l;h<o&&p<n&&i(r[s+h],t[e+p]);)h++,p++;if(h===o&&p===n)break t;f[c+l]=h}}const b=Array(c/2+a/2);let g=b.length-1;for(c=u.length-1;c>=0;c--){for(;h>0&&p>0&&i(r[s+h-1],t[e+p-1]);)b[g--]=0,h--,p--;if(!c)break;m=c-1,d=c?u[c-1]:[0,0],l=h-p,l===-c||l!==c&&d[m+l-1]<d[m+l+1]?(p--,b[g--]=1):(h--,b[g--]=-1)}return b})(n,r,o,i,a,c,p)||((t,e,n,r,s,o,i,a)=>{let u=0,c=r<a?r:a;const l=Array(c++),p=Array(c);p[0]=-1;for(let t=1;t<c;t++)p[t]=i;const h=s.slice(o,i);for(let r=e;r<n;r++){const e=h.indexOf(t[r]);if(-1<e){const t=e+o;u=j(p,c,t),-1<u&&(p[u]=t,l[u]={newi:r,oldi:t,prev:l[u-1]})}}for(u=--c,--i;p[u]>i;)--u;c=a+r-u;const d=Array(c);let f=l[u];for(--n;f;){const{newi:t,oldi:e}=f;for(;n>t;)d[--c]=1,--n;for(;i>e;)d[--c]=-1,--i;d[--c]=0,--n,--i,f=f.prev}for(;n>=e;)d[--c]=1,--n;for(;i>=o;)d[--c]=-1,--i;return d})(n,r,s,o,i,a,u,c),t,e,n,r,i,a,l,h)},S=t=>(t.remove||U).call(t);function U(){const{parentNode:t}=this;t&&t.removeChild(this)}function P(t,e){return typeof t===e}function I(t){const e=t.ownerSVGElement;return!!e||null===e}function C(t){return!L(t.content)}function B(t){return P(t,"function")}function D(t){return!L(t)&&P(t,"object")}function L(t){return null==t}const k=Symbol("unmount"),K=Object.seal({nodes:[],mount(t,e){return this.update(t,e)},update(t,e){const{placeholder:n,nodes:r,childrenMap:s}=this,o=t===k?null:this.evaluate(t),i=o?Array.from(o):[],a=n.parentNode,{newChildrenMap:u,batches:c,futureNodes:l}=function(t,e,n,r){const{condition:s,template:o,childrenMap:i,itemName:a,getKey:u,indexName:c,root:l,isTemplateTag:p}=r,h=new Map,d=[],f=[];return t.forEach((t,r)=>{const m=function(t,e){let{itemName:n,indexName:r,index:s,item:o}=e;t[n]=o,r&&(t[r]=s);return t}(Object.create(e),{itemName:a,indexName:c,index:r,item:t}),b=u?u(m):r,g=i.get(b);if(function(t,e){return!!t&&!1===Boolean(t(e))}(s,m))return;const v=g?g.template:o.clone(),O=g?v.el:l.cloneNode(),y=!g,E=p&&y?function(t){const e=t.dom.cloneNode(!0);return{avoidDOMInjection:!0,fragment:e,children:Array.from(e.childNodes)}}(v):{};if(y?d.push(()=>v.mount(O,m,n,E)):d.push(()=>v.update(m,n)),p){const t=E.children||v.children;f.push(...t)}else f.push(O);i.delete(b),h.set(b,{template:v,context:m,index:r})}),{newChildrenMap:h,batches:d,futureNodes:f}}(i,t,e,this);return((t,e,n,r)=>{r||(r={});const s=r.compare||x,o=r.node||N,i=null==r.before?null:o(r.before,0),a=e.length;let u=a,c=0,l=n.length,p=0;for(;c<u&&p<l&&s(e[c],n[p]);)c++,p++;for(;c<u&&p<l&&s(e[u-1],n[l-1]);)u--,l--;const h=c===u,d=p===l;if(h&&d)return n;if(h&&p<l)return T(o,t,n,p,l,A(o,e,c,a,i)),n;if(d&&c<u)return M(o,e,c,u),n;const f=u-c,m=l-p;let b=-1;if(f<m){if(b=_(n,p,l,e,c,u,s),-1<b)return T(o,t,n,p,b,o(e[c],0)),T(o,t,n,b+f,l,A(o,e,u,a,i)),n}else if(m<f&&(b=_(e,c,u,n,p,l,s),-1<b))return M(o,e,c,b),M(o,e,b+m,u),n;f<2||m<2?(T(o,t,n,p,l,o(e[c],0)),M(o,e,c,u)):f===m&&((t,e,n,r,s,o)=>{for(;r<s&&o(n[r],t[e-1]);)r++,e--;return 0===e})(n,l,e,c,u,s)?T(o,t,n,p,l,A(o,e,u,a,i)):w(o,t,n,p,l,m,e,c,u,f,a,s,i)})(a,r,l,{before:n,node:Y(Array.from(s.values()),e)}),c.forEach(t=>t()),this.childrenMap=u,this.nodes=l,this},unmount(t,e){return this.update(k,e),this}});function Y(t,e){return(n,r)=>{if(r<0){const n=t.pop();if(n){const{template:t,context:r}=n;t.unmount(r,e,null)}}return n}}const R=Object.seal({mount(t,e){return this.update(t,e)},update(t,e){const n=!!this.evaluate(t),r=!this.value&&n,s=this.value&&!n,o=()=>{const n=this.node.cloneNode();this.placeholder.parentNode.insertBefore(n,this.placeholder),this.template=this.template.clone(),this.template.mount(n,t,e)};switch(!0){case r:o();break;case s:this.unmount(t);break;default:n&&this.template.update(t,e)}return this.value=n,this},unmount(t,e){return this.template.unmount(t,e,!0),this}});const $="undefined"==typeof Element?{}:Element.prototype,H=function(t){const e=new Map,n=n=>e.has(n)?e.get(n):e.set(n,t.call(this,n))&&e.get(n);return n.cache=e,n}(t=>$.hasOwnProperty(t));function z(t,e,n,r){let{name:s}=e;if(!s)return r&&function(t,e,n){const r=e?Object.keys(e):[];Object.keys(n).filter(t=>!r.includes(t)).forEach(e=>t.removeAttribute(e))}(t,n,r),void(n&&function(t,e){Object.entries(e).forEach(e=>{let[n,r]=e;return z(t,{name:n},r)})}(t,n));!H(s)&&(function(t){return P(t,"boolean")}(n)||D(n)||B(n))&&(t[s]=n),t[function(t){return L(t)||!1===t||""===t||D(t)||B(t)?"removeAttribute":"setAttribute"}(n)](s,function(t,e){return!0===e?t:e}(s,n))}const V=/^on/;function G(t){return L(t)?"":t}const F=(t,e)=>{const n=t.childNodes[e];if(n.nodeType===Node.COMMENT_NODE){const e=document.createTextNode("");return t.replaceChild(e,n),e}return n};var q={0:z,1:function(t,e,n,r){let{name:s}=e;const o=s.replace(V,"");r&&t.removeEventListener(o,r),n&&t.addEventListener(o,n,!1)},2:function(t,e,n){t.data=G(n)},3:function(t,e,n){t.value=G(n)}};const X=Object.seal({mount(t){return this.value=this.evaluate(t),Z(this,this.value),this},update(t){const e=this.evaluate(t);return this.value!==e&&(Z(this,e),this.value=e),this},unmount(){return 1===this.type&&Z(this,null),this}});function Z(t,e){return q[t.type](t.node,t,e,t.value)}function J(t,e){return Object.assign({},X,{},e,{node:2===e.type?F(t,e.childNodeIndex):t})}function Q(t,e,n){if(!t||!t.length)return n;const r=t.map(t=>Object.assign({},t,{value:t.evaluate(e)}));return Object.assign(Object.create(n||null),function(t){return t.reduce((t,e)=>{const{value:n,type:r}=e;switch(!0){case!e.name&&0===r:return Object.assign({},t,{},n);case 3===r:t.value=e.value;break;default:t[(s=e.name,s.replace(/-(\w)/g,(t,e)=>e.toUpperCase()))]=e.value}var s;return t},{})}(r))}const W=Object.seal({attributes:[],getTemplateScope(t,e){return Q(this.attributes,t,e)},mount(t,e){const n=!!t.slots&&t.slots.find(t=>{let{id:e}=t;return e===this.name}),{parentNode:r}=this.node;return this.template=n&&at(n.html,n.bindings).createDOM(r),this.template&&(this.template.mount(this.node,this.getTemplateScope(t,e)),this.template.children=function t(e,n){void 0===n&&(n=[]);const r=e.firstChild;if(r)return e.parentNode.insertBefore(r,e),[r,...t(e)];return n}(this.node)),v(this.node),this},update(t,e){return this.template&&this.template.update(this.getTemplateScope(t,e)),this},unmount(t,e,n){return this.template&&this.template.unmount(this.getTemplateScope(t,e),null,n),this}});function tt(t){return t.reduce((t,e)=>{let{bindings:n}=e;return t.concat(n)},[])}const et=Object.seal({mount(t){return this.update(t)},update(t,e){const n=this.evaluate(t);return n===this.name?this.tag.update(t):(this.unmount(t,e,!0),this.name=n,this.tag=function(t,e,n){return void 0===e&&(e=[]),void 0===n&&(n=[]),t?t({slots:e,attributes:n}):at(function(t){return t.reduce((t,e)=>t+e.html,"")}(e),[...tt(e),{expressions:n.map(t=>Object.assign({type:0},t))}])}(this.getComponent(n),this.slots,this.attributes),this.tag.mount(this.node,t)),this},unmount(t,e,n){return this.tag&&this.tag.unmount(n),this}});var nt={1:function(t,e){let{evaluate:n,template:r}=e;const s=t.parentNode,o=document.createTextNode("");return s.insertBefore(o,t),v(t),Object.assign({},R,{node:t,evaluate:n,placeholder:o,template:r.createDOM(t)})},2:function(t,e){let{expressions:n}=e;return Object.assign({},(r=n.map(e=>J(t,e)),["mount","update","unmount"].reduce((t,e)=>Object.assign({},t,{[e]:t=>r.map(n=>n[e](t))&&s}),{})));var r,s},0:function(t,e){let{evaluate:n,condition:r,itemName:s,indexName:o,getKey:i,template:a}=e;const u=document.createTextNode(""),c=t.parentNode,l=t.cloneNode();return c.insertBefore(u,t),v(t),Object.assign({},K,{childrenMap:new Map,node:t,root:l,condition:r,evaluate:n,isTemplateTag:C(l),template:a.createDOM(t),getKey:i,indexName:o,itemName:s,placeholder:u})},3:function(t,e){let{evaluate:n,getComponent:r,slots:s,attributes:o}=e;return Object.assign({},et,{node:t,evaluate:n,slots:s,attributes:o,getComponent:r})},4:function(t,e){let{name:n,attributes:r}=e;return Object.assign({},W,{attributes:r,node:t,name:n})}};function rt(t,e){return t.map(t=>2===t.type?Object.assign({},t,{childNodeIndex:t.childNodeIndex+e}):t)}function st(t,e){return I(t)?function(t,e){return e.ownerDocument.importNode((new window.DOMParser).parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${t}</svg>`,"application/xml").documentElement,!0)}(e,t):function(t,e){const n=C(e)?e:document.createElement("template");return n.innerHTML=t,n.content}(e,t)}function ot(t,e){switch(!0){case I(t):!function t(e,n){e.firstChild&&(n.appendChild(e.firstChild),t(e,n))}(e,t);break;case C(t):t.parentNode.replaceChild(e,t);break;default:t.appendChild(e)}}const it=Object.freeze({createDOM(t){return this.dom=this.dom||function(t,e){return e&&("string"==typeof e?st(t,e):e)}(t,this.html),this},mount(t,e,n,r){if(void 0===r&&(r={}),!t)throw new Error("Please provide DOM node to mount properly your template");this.el&&this.unmount(e);const{fragment:s,children:o,avoidDOMInjection:i}=r,{parentNode:a}=o?o[0]:t,u=C(t),c=u?Math.max(Array.from(a.children).indexOf(t),0):null;return this.isTemplateTag=u,this.createDOM(t),this.dom&&(this.fragment=s||this.dom.cloneNode(!0)),this.el=this.isTemplateTag?a:t,this.children=this.isTemplateTag?o||Array.from(this.fragment.childNodes):null,!i&&this.fragment&&ot(t,this.fragment),this.bindings=this.bindingsData.map(t=>function(t,e,n){const{selector:r,type:s,redundantAttribute:o,expressions:i}=e,a=r?t.querySelector(r):t;o&&a.removeAttribute(o);const u=i||[];return(nt[s]||nt[2])(a,Object.assign({},e,{expressions:n&&!r?rt(u,n):u}))}(this.el,t,c)),this.bindings.forEach(t=>t.mount(e,n)),this},update(t,e){return this.bindings.forEach(n=>n.update(t,e)),this},unmount(t,e,n){if(this.el){switch(this.bindings.forEach(r=>r.unmount(t,e,n)),!0){case this.children&&null!==n:g(this.children);break;case!0===n:v(this.el);break;case null!==n:g(this.el.childNodes)}this.el=null}return this},clone(){return Object.assign({},this,{el:null})}});function at(t,e){return void 0===e&&(e=[]),Object.assign({},it,{html:t,bindingsData:e})}function ut(t,e,n,r){return void 0===r&&(r={}),Object.defineProperty(t,e,Object.assign({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function ct(t,e,n){return Object.entries(e).forEach(e=>{let[r,s]=e;ut(t,r,s,n)}),t}function lt(t,e){return Object.entries(e).forEach(e=>{let[n,r]=e;t[n]||(t[n]=r)}),t}function pt(t){return t.replace(/-(\w)/g,(t,e)=>e.toUpperCase())}function ht(t){throw new Error(t)}function dt(t){return t.reduce((t,e)=>{const{value:n,type:r}=e;switch(!0){case!e.name&&0===r:return Object.assign({},t,{},n);case 3===r:t.value=e.value;break;default:t[pt(e.name)]=e.value}return t},{})}function ft(t){return Array.isArray(t)?t:/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&"number"==typeof t.length?Array.from(t):[t]}function mt(t,e){return ft("string"==typeof t?(e||document).querySelectorAll(t):t)}const bt=t=>1===t.length?t[0]:t;function gt(t,e,n){const r="object"==typeof e?e:{[e]:n},s=Object.keys(r);return ft(t).forEach(t=>{s.forEach(e=>t.setAttribute(e,r[e]))}),t}function vt(t,e){return function(t,e,n){const r="string"==typeof e?[e]:e;return bt(ft(t).map(t=>bt(r.map(e=>t[n](e)))))}(t,e,"getAttribute")}const Ot=new Map,yt=()=>Et||(gt(Et=mt("style[riot]")[0]||document.createElement("style"),"type","text/css"),Et.parentNode||document.head.appendChild(Et),Et);var Et,Tt={CSS_BY_NAME:Ot,add(t,e){return Ot.has(t)||(Ot.set(t,e),this.inject()),this},inject(){return yt().innerHTML=[...Ot.values()].join("\n"),this},remove(t){return Ot.has(t)&&(Ot.delete(t),this.inject()),this}};function xt(t){return vt(t,"is")||t.tagName.toLowerCase()}const Nt=Object.freeze({$(t){return mt(t,this.root)[0]},$$(t){return mt(t,this.root)}}),_t=Object.freeze({[i]:m,[a]:m,[u]:m}),At=Object.freeze({shouldUpdate:m,onBeforeMount:m,onMounted:m,onBeforeUpdate:m,onUpdated:m,onBeforeUnmount:m,onUnmounted:m}),Mt=Object.assign({},_t,{clone:m,createDOM:m}),jt=(t,e)=>t[s]=e;function wt(t){return[i,a,u].reduce((e,n)=>(e[n]=t(n),e),{})}function St(t){let{css:e,template:n,exports:s,name:o}=t;const a=n?function(t,e){return t(at,y,O,t=>e[t]||r.get(t))}(n,s?function(t){void 0===t&&(t={});return Object.entries(b(t)).reduce((t,e)=>{let[n,r]=e;var s;return t[(s=n,s.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())]=St(r),t},{})}(s.components):{}):Mt;return t=>{let{slots:r,attributes:u,props:l}=t;if(s&&s[c])return function(t,e){let{slots:n,attributes:r,props:s,css:o,template:a}=e;a&&ht("Pure components can not have html"),o&&ht("Pure components do not have css");const u=lt(t({slots:n,attributes:r,props:s}),_t);return wt(t=>function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if(t===i){const[t]=n;jt(t,u)}return u[t](...n),u})}(s,{slots:r,attributes:u,props:l,css:e,template:n});const p=b(s)||{},h=Ut({css:e,template:a,componentAPI:p,name:o})({slots:r,attributes:u,props:l});return{mount:(t,e,n)=>h.mount(t,n,e),update:(t,e)=>h.update(e,t),unmount:t=>h.unmount(t)}}}function Ut(t){let{css:e,template:n,componentAPI:r,name:s}=t;return e&&s&&Tt.add(s,e),function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return function(){for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(s=[...r,...s]).length<e.length?t(e,...s):e(...s)}}(It)(ct(lt(r,Object.assign({},At,{state:{}})),Object.assign({slots:null,root:null},Nt,{name:s,css:e,template:n})))}function Pt(t,e){return Object.assign({},t,{},b(e))}function It(t,e){let{slots:n,attributes:r,props:s}=e;return i=function(t){return[...o].reduce((t,e)=>e(t)||t,t)}(ct(Object.create(t),{mount(e,o,i){return void 0===o&&(o={}),this[p]=function(t,e){void 0===e&&(e=[]);const n=e.map(e=>J(t,e)),r={};return Object.assign(r,Object.assign({expressions:n},wt(t=>e=>(n.forEach(n=>n[t](e)),r))))}(e,r).mount(i),ut(this,"props",Object.freeze(Object.assign({},s,{},dt(this[p].expressions)))),this.state=Pt(this.state,o),this[h]=this.template.createDOM(e).clone(),jt(e,this),t.name&&function(t,e){xt(t)!==e&&gt(t,"is",e)}(e,t.name),ut(this,"root",e),ut(this,"slots",n),this.onBeforeMount(this.props,this.state),this[h].mount(e,this,i),this[l]=i,this.onMounted(this.props,this.state),this},update(t,e){void 0===t&&(t={}),e&&this[p].update(e);const n=dt(this[p].expressions);if(!1!==this.shouldUpdate(n,this.props))return ut(this,"props",Object.freeze(Object.assign({},s,{},n))),this.state=Pt(this.state,t),this.onBeforeUpdate(this.props,this.state),this[h].update(this,this[l]),this.onUpdated(this.props,this.state),this},unmount(t){return this.onBeforeUnmount(this.props,this.state),this[p].unmount(),this[h].unmount(this,this[l],null===t?null:!t),this.onUnmounted(this.props,this.state),this}})),Object.keys(t).filter(e=>f(t[e])).forEach(t=>{i[t]=i[t].bind(i)}),i;var i}const{DOM_COMPONENT_INSTANCE_PROPERTY:Ct,COMPONENTS_IMPLEMENTATION_MAP:Bt,PLUGINS_SET:Dt}=d;function Lt(t,e){return void 0===e&&(e=[]),Object.assign({},function(t){return Array.from(t.attributes).reduce((t,e)=>(t[pt(e.name)]=e.value,t),{})}(t),{},b(e))}function kt(t,e){let{css:n,template:r,exports:s}=e;return Bt.has(t)&&ht(`The component "${t}" was already registered`),Bt.set(t,St({name:t,css:n,template:r,exports:s})),Bt}var Kt,Yt;kt("raw",{css:null,exports:{setInnerHTML(){this.root.innerHTML=this.props.html},onMounted(){this.setInnerHTML()},onUpdated(){this.setInnerHTML()}},template:null,name:"raw"}),kt("tiny-tags",{css:null,exports:{state:{options:{name:"tags",svg:{add:'<svg class="icon"><use xlink:href="#icon-add" /></svg>',remove:'<svg class="icon"><use xlink:href="#icon-remove" /></svg>'},separator:","},tags:[]},onBeforeMount(){if(this.props.tags){let t=this.props.tags;Array.isArray(t)||(t=t.split(this.state.options.separator)),this.state.tags=t}this.props.options&&(this.state.options=Object.assign(this.state.options,this.props.options))},handleKeyup(t){13===t.keyCode&&(t.preventDefault(),this.$(".tiny-tags__button--add").click())},handleRemove(t){for(let e=0;e<this.state.tags.length;e++)if(this.state.tags[e]===t){this.state.tags.splice(e,1),this.update();break}this.$("input").focus()},handleAdd(t){let e=!1,n=this.$("input").value.trim();for(let t=0;t<this.state.tags.length;t++)if(n===this.state.tags[t]){e=!0;break}!1===e&&n.length>0&&(this.state.tags.push(n),this.update(),this.$('select option[value="'+n+'"]').selected=!0,this.$("input").value=""),this.$("input").focus()}},template:function(t,e,n,r){return t('<div class="tiny-tags"><select expr0="expr0" multiple style="display: none;"><option expr1="expr1"></option></select><ul class="tiny-tags__list"><li expr2="expr2" class="tiny-tags__item"></li><li class="tiny-tags__item tiny-tags__item--add"><input expr6="expr6" class="tiny-tags__input" type="text"/><button expr7="expr7" class="tiny-tags__button tiny-tags__button--add" type="button"><raw expr8="expr8"></raw></button></li></ul></div>',[{redundantAttribute:"expr0",selector:"[expr0]",expressions:[{type:e.ATTRIBUTE,name:"name",evaluate:function(t){return[t.state.options.name,"[]"].join("")}}]},{type:n.EACH,getKey:null,condition:null,template:t(null,[{expressions:[{type:e.ATTRIBUTE,name:"value",evaluate:function(t){return t.tag}}]}]),redundantAttribute:"expr1",selector:"[expr1]",itemName:"tag",indexName:null,evaluate:function(t){return t.state.tags}},{type:n.EACH,getKey:null,condition:null,template:t('<span expr3="expr3" class="tiny-tags__label"> </span><button expr4="expr4" class="tiny-tags__button tiny-tags__button--remove" type="button"><raw expr5="expr5"></raw></button>',[{expressions:[{type:e.ATTRIBUTE,name:"class",evaluate:function(t){return"tiny-tags__item"}}]},{redundantAttribute:"expr3",selector:"[expr3]",expressions:[{type:e.TEXT,childNodeIndex:0,evaluate:function(t){return t.tag}}]},{redundantAttribute:"expr4",selector:"[expr4]",expressions:[{type:e.EVENT,name:"onclick",evaluate:function(t){return()=>{t.handleRemove(t.tag)}}}]},{type:n.TAG,getComponent:r,evaluate:function(t){return"raw"},slots:[],attributes:[{type:e.ATTRIBUTE,name:"html",evaluate:function(t){return t.state.options.svg.remove}}],redundantAttribute:"expr5",selector:"[expr5]"}]),redundantAttribute:"expr2",selector:"[expr2]",itemName:"tag",indexName:null,evaluate:function(t){return t.state.tags}},{redundantAttribute:"expr6",selector:"[expr6]",expressions:[{type:e.EVENT,name:"onkeypress",evaluate:function(t){return t.handleKeyup}}]},{redundantAttribute:"expr7",selector:"[expr7]",expressions:[{type:e.EVENT,name:"onclick",evaluate:function(t){return t.handleAdd}}]},{type:n.TAG,getComponent:r,evaluate:function(t){return"raw"},slots:[],attributes:[{type:e.ATTRIBUTE,name:"html",evaluate:function(t){return t.state.options.svg.add}}],redundantAttribute:"expr8",selector:"[expr8]"}])},name:"tiny-tags"}),mt("tiny-tags").map(t=>function(t,e,n){const s=n||xt(t);return r.has(s)||ht(`The component named "${s}" was never registered`),r.get(s)({props:e}).mount(t)}(t,Lt(t,Kt),Yt))},function(t,e){}]);