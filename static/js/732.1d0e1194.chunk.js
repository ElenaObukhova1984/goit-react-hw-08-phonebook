"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[732],{3732:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r=t(2791),u=t(9434),i="NOT_FOUND";var a=function(n,e){return n===e};function o(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?a:r,o=t.maxSize,c=void 0===o?1:o,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),p=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:i},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return i}return{get:r,put:function(e,u){r(e)===i&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function f(){var e=p.get(arguments);if(e===i){if(e=n.apply(null,arguments),l){var t=p.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}p.put(arguments,e)}return e}return f.clearCache=function(){return p.clear()},f}function c(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function l(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,a=0,o={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(o=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var s=o,p=s.memoizeOptions,f=void 0===p?t:p,d=Array.isArray(f)?f:[f],h=c(r),v=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(d)),m=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(m,{resultFunc:l,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return u}var s,p,f,d,h,v,m,x,g,y,b=l(o),j=function(n){return n.data.contacts},Z=function(n){return n.filter.letters},w=function(n){return n.data.isLoading},k=b([Z,j],(function(n,e){var t=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))})),A=t(3634),C=t(168),P=t(6444),_=P.ZP.button(s||(s=(0,C.Z)(["\nheight: 30px;\nwidth:100px;\nmargin-top: 10px;\nborder-radius: 10px;\n"]))),z=t(184),F=function(n){var e=n.contact,t=e.name,r=e.number,i=(0,u.I0)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("p",{children:[t,": ",r]}),(0,z.jsx)(_,{type:"button",onClick:function(){return i((0,A.GK)(e.id))},children:"Delete"})]})},E=P.ZP.ul(p||(p=(0,C.Z)(["\nheight: 100px;\n\n"]))),q=P.ZP.li(f||(f=(0,C.Z)(["\ndisplay: flex;\ngap: 15px;\nalign-items: center;\n\n"]))),I=(P.ZP.p(d||(d=(0,C.Z)(["\ncolor:black;\nfont-weight:700;\n"]))),function(){var n=(0,u.v9)(j),e=(0,u.v9)(Z),t=(0,u.v9)(k);return(0,z.jsx)(E,{children:e?t.map((function(n){return(0,z.jsx)(q,{children:(0,z.jsx)(F,{contact:n})},n.id)})):n.map((function(n){return(0,z.jsx)(q,{children:(0,z.jsx)(F,{contact:n})},n.id)}))})}),N=P.ZP.form(h||(h=(0,C.Z)(["\n\ndisplay:flex;\nflex-direction:column;\nwidth: 100%;\nheight: auto;\n"]))),O=P.ZP.input(v||(v=(0,C.Z)(["\nheight: 30px;\nwidth: 350px;\nmargin-top: 10px;\nborder-radius: 10px;\n"]))),R=P.ZP.button(m||(m=(0,C.Z)(["\nheight: 30px;\nwidth: 150px;\nmargin-top: 10px;\nborder-radius: 10px;\n"]))),S=function(){var n=(0,u.I0)(),e=(0,u.v9)(j);return(0,z.jsxs)(N,{onSubmit:function(t){t.preventDefault();var r=t.target;e.map((function(n){return n.name})).includes(r.elements.name.value)?alert("".concat(r.elements.name.value," is already in contacts.")):n((0,A.uK)({name:r.elements.name.value,number:r.elements.number.value})),r.reset()},children:[(0,z.jsx)("label",{children:"Name"}),(0,z.jsx)(O,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,z.jsx)("label",{children:"Number"}),(0,z.jsx)(O,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,z.jsx)(R,{type:"submit",children:"Add contact"})]})},D=t(4808),L=P.ZP.input(x||(x=(0,C.Z)(["\nheight: 30px;\nwidth: 150px;\nmargin-left: 10px;\nmargin-top: 10px;\nborder-radius: 10px;\n"]))),K=P.ZP.label(g||(g=(0,C.Z)(["\nwidth:100px;\n"]))),T=function(){var n=(0,u.I0)(),e=(0,u.v9)(Z);return(0,z.jsxs)(K,{children:["Find contacts by name",(0,z.jsx)(L,{type:"text",value:e,onChange:function(e){n((0,D.W)(e.currentTarget.value))}})]})},B=P.ZP.div(y||(y=(0,C.Z)(["\n  margin-left: 33vw;\n"])));function G(){var n=(0,u.I0)(),e=(0,u.v9)(w);return(0,r.useEffect)((function(){n((0,A.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(S,{}),(0,z.jsx)(T,{}),(0,z.jsx)(B,{children:e&&"Request in progress..."}),(0,z.jsx)(I,{})]})}}}]);
//# sourceMappingURL=732.1d0e1194.chunk.js.map