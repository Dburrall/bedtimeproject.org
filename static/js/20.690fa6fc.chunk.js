(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[20,23],{157:function(e,t,r){},168:function(e,t,r){"use strict";r.r(t),r.d(t,"bedtimeStories",(function(){return b})),r.d(t,"default",(function(){return d}));var o=r(13),n=r(1),i=(r(157),r(43)),s=r(42),a=r(153),c=r(154),u=r(156),l=r(0),b=[{title:"Surfer's Hideaway",link:"/read/bedtime-stories/surfers-hideaway",field_author:"C. A. Moonbloom",backgroundColor:"#fb8e49"},{title:"Mrs. Blue Sky",link:"/read/bedtime-stories/mrs-blue-sky",field_author:"C. A. Moonbloom",backgroundColor:"#133061"}];function d(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),r=t[0],d=t[1],j=Object(n.useState)([]),f=Object(o.a)(j,2),k=f[0],h=f[1];return Object(n.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/stories/read").then((function(e){return e.json()})).then((function(e){return d(e)})),fetch("https://drupal.bedtimeproject.dev/rest/views/tales/read").then((function(e){return e.json()})).then((function(e){return h(e)}))}),[]),Object(l.jsxs)(i.a,{children:[Object(l.jsx)(s.a,{title:"Read"}),Object(l.jsx)(a.a,{pageTitle:"Read",drawerHref:"/read/quips",drawerLabel:"Quips",books1:b.map((function(e,t){return t>2?null:Object(l.jsx)(c.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},t)})),shelf1Link:"/read/bedtime-stories",shelf1Label:"Bedtime Stories",books2:r.map((function(e,t){var r=Object(u.a)(e.title);return Object(l.jsx)(c.a,{link:"/read/stories/".concat(r),story:e},t)})),shelf2Link:"/read/stories",shelf2Label:"Stories",books3:k.map((function(e,t){var r=Object(u.a)(e.title);return Object(l.jsx)(c.a,{link:"/read/tales/".concat(r),story:e},t)})),shelf3Link:"/read/tales",shelf3Label:"Tales"})]})}},177:function(e,t,r){},221:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));r(1),r(177);var o=r(154),n=r(153),i=r(43),s=r(42),a=r(168),c=r(0);function u(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{className:"BedtimeStories-Container",children:[Object(c.jsx)(s.a,{title:"Bedtime Stories"}),Object(c.jsx)(n.a,{pageTitle:"Bedtime Stories",books1:a.bedtimeStories.map((function(e,t){return t>2?null:Object(c.jsx)(o.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},t)})),books2:a.bedtimeStories.map((function(e,t){return t<=2||t>5?null:Object(c.jsx)(o.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},t)})),books3:a.bedtimeStories.map((function(e,t){return t<=5||t>8?null:Object(c.jsx)(o.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},t)}))})]})})}}}]);
//# sourceMappingURL=20.690fa6fc.chunk.js.map