(this["webpackJsonpqwings-react-lms"]=this["webpackJsonpqwings-react-lms"]||[]).push([[54],{101:function(e,n,t){"use strict";t(8);var i=t(21),u=function(){var e=(new Date).getHours(),n=window.localStorage.getItem("user");return e<12?"Good morning, ".concat("admin"===n?"Admin":"teacher"===n?"Teacher":"Student"):e>=12&&e<16?"Good afternoon, ".concat("admin"===n?"Admin":"teacher"===n?"Teacher":"Student"):"Good evening, ".concat("admin"===n?"Admin":"teacher"===n?"Teacher":"Student")};n.a=function(){return Object(i.jsx)("h1",{children:u()})}},1057:function(e,n,t){"use strict";t.r(n);t(8);var i=t(36),u=t(330),c=t(289),s=t(98),a=t(101),r=t(97),d=t(145),o=t(21);n.default=Object(i.b)((function(e){var n=e.menu;return{containerClassnames:n.containerClassnames,subHiddenBreakpoint:n.subHiddenBreakpoint,menuHiddenBreakpoint:n.menuHiddenBreakpoint,menuClickCount:n.menuClickCount,selectedMenuHasSubItems:n.selectedMenuHasSubItems}}),{setContainerClassnamesAction:d.E})((function(e){var n=e.match,t=e.subHiddenBreakpoint,i=e.menuHiddenBreakpoint,d=e.selectedMenuHasSubItems,m=e.setContainerClassnamesAction,l=function(e,n){e.preventDefault();var u=function(e){var n=e.split(" ").filter((function(e){return""!==e})),u=window.innerWidth;return u<i?n.push("menu-mobile"):u<t?(n=n.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&!n.includes("menu-sub-hidden")&&n.push("menu-sub-hidden"):(n=n.filter((function(e){return"menu-mobile"!==e}))).includes("menu-default")&&n.includes("menu-sub-hidden")&&(n=n.filter((function(e){return"menu-sub-hidden"!==e}))),n}(n);m(0,u.join(" "),d)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u.a,{children:Object(o.jsxs)(s.a,{xxs:"12",children:[Object(o.jsx)(a.a,{heading:"menu.types",match:n}),Object(o.jsx)(s.b,{className:"mb-5"})]})}),Object(o.jsx)(u.a,{children:Object(o.jsxs)(s.a,{xxs:"12",className:"mb-4",children:[Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return l(e,"menu-default")},children:Object(o.jsx)(r.a,{id:"menu.default"})})," ",Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return l(e,"menu-sub-hidden")},children:Object(o.jsx)(r.a,{id:"menu.subhidden"})})," ",Object(o.jsx)(c.a,{outline:!0,color:"primary",className:"mb-2",onClick:function(e){return l(e,"menu-hidden")},children:Object(o.jsx)(r.a,{id:"menu.hidden"})})]})})]})}))}}]);
//# sourceMappingURL=menu-types.9f99e686.chunk.js.map