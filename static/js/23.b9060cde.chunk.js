(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[23],{178:function(e,t,r){},189:function(e,t,r){"use strict";r.r(t),r.d(t,"bedtimeStories",(function(){return d})),r.d(t,"default",(function(){return b}));var s=r(1),n=r(3),o=(r(178),r(61)),a=r(60),i=r(174),c=r(175),u=r(177),l=r(2),d=[{title:"Surfer's Hideaway",link:"/read/bedtime-stories/surfers-hideaway",field_author:"C. A. Moonbloom",backgroundColor:"#fb8e49"},{title:"Mrs. Blue Sky",link:"/read/bedtime-stories/mrs-blue-sky",field_author:"C. A. Moonbloom",backgroundColor:"#133061"}];function b(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],b=t[1],f=Object(n.useState)([]),j=Object(s.a)(f,2),h=j[0],k=j[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/stories/read").then((function(e){return e.json()})).then((function(e){return b(e)})),fetch("https://drupal.bedtimeproject.dev/rest/views/tales/read").then((function(e){return e.json()})).then((function(e){return k(e)}))}),[]),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(a.a,{title:"Read"}),Object(l.jsx)(i.a,{pageTitle:"Read",drawerHref:"/read/quips",drawerLabel:"Quips",books1:d.map((function(e,t){return t>2?null:Object(l.jsx)(c.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},t)})),shelf1Link:"/read/bedtime-stories",shelf1Label:"Bedtime Stories",books2:r.map((function(e,t){var r=Object(u.a)(e.title);return Object(l.jsx)(c.a,{link:"/read/stories/".concat(r),story:e},t)})),shelf2Link:"/read/stories",shelf2Label:"Stories",books3:h.map((function(e,t){var r=Object(u.a)(e.title);return Object(l.jsx)(c.a,{link:"/read/tales/".concat(r),story:e},t)})),shelf3Link:"/read/tales",shelf3Label:"Tales"})]})}}}]);
//# sourceMappingURL=23.b9060cde.chunk.js.map