(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),o=(a(9),a(2)),l=(a(10),a(0)),i=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," border border-").concat("light"===e.mode?"dark":"light"),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(l.jsx)("img",{src:"./android-chrome-512x512.png",alt:""}),e.navBrand]}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:e.home})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",id:"mode",onClick:e.toggler}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"mode",children:"Enable DarkMode"})]})]})]})})})};i.defaultProps={navBrand:"Set Title",home:"Set Home",about:"Set About"};var b=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(i,{navBrand:"Text Utils",home:"Home",about:"About",mode:e.mode,toggler:e.toggler})})},d=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(l.jsxs)("div",{className:"container border my-3 rounded",style:{backgroundColor:"light"===e.mode?"white":"#262530",color:"light"===e.mode?"black":"white"},children:[Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",placeholder:"Enter your text here",value:c,onChange:function(e){s(e.target.value)},id:"myTextBox",rows:"8",style:{backgroundColor:"light"===e.mode?"white":"#05041b",color:"light"===e.mode?"black":"white"}})}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Texts Changes to UperCase","success")},children:"Change to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Texts Changes to LowerCase","success")},children:"Change to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){var t=c.replace(/\s+/g," ").trim();s(t),e.showAlert("Extra Spaces Removed","success")},children:"Remove Extra Spaces"}),Object(l.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){for(var t=c.split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);s(t.join(" ")),e.showAlert("Captialize Each Word","success")},children:"Capitalize Each Word"}),Object(l.jsx)("button",{className:"btn btn-sm btn-primary mx-2",onClick:function(){s(""),e.showAlert("All texts are cleared","success")},children:"Clear Text"})]})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h2",{children:"Text Summary"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:""===c?"0":c.split(" ").length})," words ",Object(l.jsx)("b",{children:c.length})," characters"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:.0076*(c.split(" ").length-1)})," Minutes to read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:0===c.length?"Enter any text above the TextBox to preview":c})]})]})},h=function(e){return Object(l.jsx)("div",{children:null===e.alert?Object(l.jsx)("span",{}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.message,Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})})};var j=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),i=r[0],j=r[1],m=function(e,t){j({message:e,type:t}),setTimeout((function(){j(null)}),1e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{mode:a,toggler:function(){"light"===a?(c("dark"),m("DarkMode Enabled","success"),document.body.style.backgroundColor="#080110",document.getElementById("faviconPng").href="%PUBLIC_URL%/favicon_io1/favicon-16x16.png",document.getElementById("faviconIco").href="%PUBLIC_URL%/favicon_io1/favicon.ico"):(c("light"),m("LightMode Enabled","success"),document.body.style.backgroundColor="white",document.getElementById("faviconPng").href="%PUBLIC_URL%/favicon_io2/favicon-16x16.png",document.getElementById("faviconIco").href="%PUBLIC_URL%/favicon_io2/favicon.ico")},alert:i}),Object(l.jsx)(h,{alert:i}),Object(l.jsx)(d,{heading:"Enter the Text to analyze",mode:a,showAlert:m})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.61c0dc3a.chunk.js.map