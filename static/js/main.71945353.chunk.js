(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),l=t(1);t(10);var r=t(2),s=t.n(r),o=t(0),j=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,i=Array.from({length:Math.ceil(a/t)},(function(e,a){return a+1})),l=c>1?c-1:1,r=c<i.length?c+1:i.length;return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:!l||l===c}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":!l||l===c,onClick:function(e){e.preventDefault(),n(l)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===c}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:!r||r===c}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":!r||r===c,onClick:function(e){e.preventDefault(),n(r)},children:"\xbb"})})]})},d=function(){var e=Object(l.useState)(5),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(l.useState)(1),r=Object(i.a)(n,2),s=r[0],d=r[1],u=(s-1)*t+1,h=s*t>42?42:s*t,b=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(u,h);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(u," - ").concat(h," of ").concat(42,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){c(Number(e.target.value)),d(1)},defaultValue:t,children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:42,perPage:t,currentPage:s,onPageChange:function(e){d(e)}}),Object(o.jsx)("ul",{children:b.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.71945353.chunk.js.map