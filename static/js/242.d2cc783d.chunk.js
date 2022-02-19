"use strict";(self.webpackChunkthe_bedtime_project=self.webpackChunkthe_bedtime_project||[]).push([[242],{419:function(e,n,t){t.d(n,{Z:function(){return s}});t(9867);var i=t(6175),r=t(2834);function s(e){var n=e.children,t=e.onClick,s=e.link,o=e.className;return s?(0,r.jsx)(i.rU,{to:s,className:"ButtonContainer"+(o?" "+o:""),children:(0,r.jsx)("div",{children:n})}):(0,r.jsx)("button",{onClick:t,className:"ButtonContainer"+(o?" "+o:""),children:(0,r.jsx)("div",{children:n})})}},108:function(e,n,t){t.d(n,{Z:function(){return r}});t(9867);var i=t(2834);function r(e){var n=e.children;return(0,i.jsx)("div",{className:"PageTitle-Container",children:(0,i.jsx)("h1",{className:"PageTitle",children:n})})}},2242:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(3032),r=t(3430),s=t(4322),o=t.n(s),a=t(9867),c=t(2474),l=t.n(c)()({projectId:"uy12p7sm",dataset:"production",useCdn:!0}),d=t(108),u=t(2834);function h(e){var n=e.name,t=e.bio,i=e.image;return(0,u.jsxs)("div",{className:"Contributor-Container",children:[(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:i}}),(0,u.jsx)("div",{className:"Contributor-Name",children:n}),(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]})}var m=t(3624),j=t(419),f=t(2737),p=t(2267);function v(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1];return(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://drupal.bedtimeproject.dev/rest/views/contributors");case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),l.fetch('*[_type == "contributor"]{\n          name,\n          slug,\n          image{\n            asset->{\n              _id,\n              url\n            },\n          },\n          alt,\n          bio\n        }').then((function(e){return console.log(e)})).catch(console.error)}),[]),(0,u.jsxs)(m.Z,{children:[(0,u.jsx)(f.Z,{title:"About"}),(0,u.jsxs)("div",{className:"AboutPage-Container",children:[(0,u.jsxs)("div",{className:"Header-Container",children:[(0,u.jsx)(d.Z,{children:"About"}),(0,u.jsxs)("div",{className:"Description-Contianer",children:[(0,u.jsx)("div",{children:"The Bedtime Project aims at helping you get to sleep, or just have a fun evening with stories and games."}),(0,u.jsx)("div",{children:"Here are the people who make this site possible:"})]})]}),(0,u.jsx)("div",{className:"All-Contributors-Container",children:t&&t.map((function(e,n){return(0,u.jsx)(h,{name:e.title,bio:e.body,image:(0,p.c)(e.field_main_image)},n)}))}),(0,u.jsx)("div",{className:"Header-Container",children:(0,u.jsxs)("div",{className:"Description-Contianer",children:[(0,u.jsx)("div",{children:"Contact us if you have any questions at all, want to report a bug, or have any suggestions."}),(0,u.jsx)("a",{href:"mailto:code@bedtimeproject.org",children:"code@bedtimeproject.org"})," ",(0,u.jsx)("a",{href:"mailto:moonbloom@bedtimeproject.org ",children:"moonbloom@bedtimeproject.org"})]})}),(0,u.jsxs)("div",{className:"Link-Container",children:[(0,u.jsx)(j.Z,{link:"/about/acknowledgements",children:"Acknowledgements"}),(0,u.jsx)(j.Z,{link:"/about/licenses",children:"Licenses"})]})]})]})}},2267:function(e,n,t){function i(e){if(""!=e&&e)return e.replaceAll('src="/sites/default/files','src="https://drupal.bedtimeproject.dev/sites/default/files')}t.d(n,{c:function(){return i}})}}]);
//# sourceMappingURL=242.d2cc783d.chunk.js.map