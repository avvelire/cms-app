"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[214],{214:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var n=r(982),a=r(885),o=r(294);const l=function(){var t=(0,o.useState)([{firstTd:"Dummy",secondtTd:"Table"}]),e=(0,a.Z)(t,2),r=e[0],l=e[1],i=r.map((function(t,e){return o.createElement("tr",{key:e},o.createElement("td",null,t.firstTd),o.createElement("td",null,t.secondtTd))}));return o.createElement("div",{className:"mainContent"},o.createElement("h1",{className:"mainContent__title"},"Dummy Table"),o.createElement("table",null,o.createElement("tbody",null,i)),o.createElement("button",{className:"mainContent__addButton",onClick:function(){var t=prompt("Write the player you want to add"),e=prompt("Write the team in which your player plays");if(t&&e){var a={firstTd:t,secondtTd:e};l([].concat((0,n.Z)(r),[a]))}}},"Add"))}},907:(t,e,r)=>{function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:()=>n})},885:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(181);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,o,l,i=[],u=!0,c=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(i.push(n.value),i.length!==e);u=!0);}catch(t){c=!0,a=t}finally{try{if(!u&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw a}}return i}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},982:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(907),a=r(181);function o(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(907);function a(t,e){if(t){if("string"==typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);