"use strict";(self.webpackChunkthe_bedtime_project=self.webpackChunkthe_bedtime_project||[]).push([[57],{9057:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var r=n(3430),t=n(9867);function c(e){if(!e)return"";var a="";switch("b"==e.color?a+="Black":a+="White",a+=" ",e.type){case"k":a+="King";break;case"q":a+="Queen";break;case"b":a+="Bishop";break;case"n":a+="Knight";break;case"r":a+="Rook";break;default:a+="Pawn"}return a}var s=n(2834);function o(e){var a=e.squareData;return(0,s.jsx)("span",{className:"ChessBoardSquare-Container ".concat(a?a.type:"").concat(a?a.color:""),title:c(a)})}function u(e){var a=e.board;return(0,s.jsx)("div",{className:"ChessBoard-Container",children:a&&a.map((function(e,a){return(0,s.jsx)("div",{className:"ChessBoard-Row ".concat(a%2==0?"Row-Even":"Row-Odd"),children:e.map((function(e,n){return(0,s.jsx)(o,{squareData:e},"".concat(a).concat(n))}))},a)}))})}var i=n(4063),d=n.n(i);function f(){var e=(0,t.useState)([]),a=(0,r.Z)(e,2),n=a[0],c=a[1];return(0,t.useEffect)((function(){var e=new(d());c(e.board())}),[]),(0,s.jsx)("div",{className:"Chess-Container",children:(0,s.jsx)(u,{board:n})})}}}]);
//# sourceMappingURL=57.0c5b2a6a.chunk.js.map