(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[8],{168:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(3),r(169);var s=r(2);function c(e){var t=e.children;return Object(s.jsx)("div",{className:"PageTitle-Container",children:Object(s.jsx)("h1",{className:"PageTitle",children:t})})}},169:function(e,t,r){},176:function(e,t,r){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return i}))},186:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(3),r(187);var s=r(2);function c(e){var t=e.primaryColor,r=e.secondaryColor,c=e.tertiaryColor;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("style",{children:"\n      .AppContentContainer {\n        position: relative;\n      }\n    #repeatingRadialGradient {\n      background: repeating-radial-gradient(\n        circle at 0 0,\n        transparent 0,\n        ".concat(t," 50px\n        ),\n        repeating-linear-gradient(").concat(r,", ").concat(c,");\n      }\n      ")}),Object(s.jsx)("div",{id:"repeatingRadialGradient"})]})}},187:function(e,t,r){},231:function(e,t,r){},232:function(e,t,r){},233:function(e){e.exports=JSON.parse('{"caniuse-lite@1.0.30001278":{"licenses":"CC-BY-4.0","repository":"https://github.com/browserslist/caniuse-lite","licenseUrl":"https://github.com/browserslist/caniuse-lite/raw/master/LICENSE","parents":"the-bedtime-project"},"chess.js@0.12.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/jhlywa/chess.js","licenseUrl":"https://github.com/jhlywa/chess.js/raw/master/LICENSE","parents":"the-bedtime-project"},"core-js@3.19.2":{"licenses":"MIT","repository":"https://github.com/zloirock/core-js","licenseUrl":"https://github.com/zloirock/core-js/raw/master/LICENSE","parents":"the-bedtime-project"},"date-chinese@2.1.3":{"licenses":"MIT","repository":"https://github.com/commenthol/date-chinese","licenseUrl":"https://github.com/commenthol/date-chinese/raw/master/LICENSE","parents":"the-bedtime-project"},"gh-pages@3.2.3":{"licenses":"MIT","repository":"https://github.com/tschaub/gh-pages","licenseUrl":"https://github.com/tschaub/gh-pages/raw/master/LICENSE","parents":"the-bedtime-project"},"normalize.css@8.0.1":{"licenses":"MIT","repository":"https://github.com/necolas/normalize.css","licenseUrl":"https://github.com/necolas/normalize.css/raw/master/LICENSE.md","parents":"the-bedtime-project"},"react-dom@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"the-bedtime-project"},"react-helmet-async@1.1.2":{"licenses":"Apache-2.0","repository":"http://github.com/staylor/react-helmet-async","licenseUrl":"http://github.com/staylor/react-helmet-async/raw/master/LICENSE","parents":"the-bedtime-project"},"react-icons@4.3.1":{"licenses":"MIT","repository":"https://github.com:react-icons/react-icons","licenseUrl":"https://github.com:react-icons/react-icons/raw/master/LICENSE","parents":"the-bedtime-project"},"react-paginate@7.1.5":{"licenses":"MIT","repository":"https://github.com/AdeleD/react-paginate","licenseUrl":"https://github.com/AdeleD/react-paginate/raw/master/LICENSE","parents":"the-bedtime-project"},"react-router-dom@5.3.0":{"licenses":"MIT","repository":"https://github.com/ReactTraining/react-router","licenseUrl":"https://github.com/ReactTraining/react-router","parents":"the-bedtime-project"},"react-scripts@4.0.3":{"licenses":"MIT","repository":"https://github.com/facebook/create-react-app","licenseUrl":"https://github.com/facebook/create-react-app/raw/master/LICENSE","parents":"the-bedtime-project"},"react@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"the-bedtime-project"},"sass@1.43.4":{"licenses":"MIT","repository":"https://github.com/sass/dart-sass","licenseUrl":"https://github.com/sass/dart-sass/raw/master/LICENSE","parents":"the-bedtime-project"}}')},251:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var s=r(176),c=r(1);function i(e,t){if(null==e)return{};var r,s,c=function(e,t){if(null==e)return{};var r,s,c={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r(3);var n=r(84),a=(r(231),r(2));function o(e){var t=e.licenses;return Object(a.jsx)("div",{className:"LicensesList-Container",children:t.map((function(e,t){var r=e.image,s=e.userUrl,c=e.username,i=e.name,n=e.version,o=e.licenses,l=e.repository,p=e.licenseUrl,h=i;return c&&h.toLowerCase()!=c.toLowerCase()&&(h+=" by ".concat(c)),Object(a.jsx)("div",{className:"LicensesListItem",children:Object(a.jsx)("div",{className:"cardShadow",children:Object(a.jsxs)("div",{className:"card",children:[r&&Object(a.jsx)("a",{href:s,children:Object(a.jsx)("img",{src:r,className:"image",alt:h+" Github Profile Picture"})}),Object(a.jsxs)("div",{style:{maxWidth:"90%"},className:"item",children:[Object(a.jsxs)("a",{href:l,children:[Object(a.jsx)("div",{className:"name",children:h}),Object(a.jsx)("div",{className:"text",children:n})]}),Object(a.jsx)("a",{className:"text",href:p,children:o})]})]})})},t)}))})}var l=r(168),p=(r(232),r(233)),h=r(186),b=r(60),u=r(61),m=["licenses"];function j(e){if(!e)return null;var t=/((https?:\/\/)?(www\.)?github\.com\/)?(@|#!\/)?([A-Za-z0-9_]{1,15})(\/([-a-z]{1,20}))?/i.exec(e);return t&&t.length>5?t[5]:null}var d=p;d["react-crossword@0.2.3"]={licenses:"Apache-2.0",repository:"https://github.com/guardian/react-crossword",licenseUrl:"https://raw.githubusercontent.com/guardian/react-crossword/master/LICENSE",parents:"the-bedtime-project"};var g,f=Object.keys(d).map((function(e){var t,r,a=d[e],o=a.licenses,l=i(a,m);if("@"==e[0]){var p=e.split("@"),h=Object(c.a)(p,3);t=h[1],r=h[2]}else{var b=e.split("@"),u=Object(c.a)(b,2);t=u[0],r=u[1]}var g,f,O=j(l.repository)||j(l.licenseUrl);return O&&(O=Object(n.a)(O),f="http://github.com/".concat(O,".png"),g="http://github.com/".concat(O)),Object(s.a)({key:e,name:t,image:f,userUrl:g,username:O,licenses:o.slice(0,405),version:r},l)}));function O(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)("div",{className:"LicensesContainer",children:[Object(a.jsx)(b.a,{title:"Licenses"}),Object(a.jsx)(l.a,{children:"Licenses"}),Object(a.jsx)(h.a,{primaryColor:"#f3f6f6",secondaryColor:"#cccff1",tertiaryColor:"#4f68d0"}),Object(a.jsx)("div",{className:"LicensesContainer-Description",children:"This project is made possible by these great open-source developers:"}),Object(a.jsx)("div",{children:Object(a.jsx)(o,{licenses:f})})]})})}g="username",f.sort((function(e,t){return e[g]>t[g]?1:t[g]>e[g]?-1:0}))}}]);
//# sourceMappingURL=8.02bf5c73.chunk.js.map