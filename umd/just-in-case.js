!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t=t||self).justInCase={})}(this,(function(t){"use strict";function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function n(t){return t.split(" ").map(t=>i(t)).join(" ")}function e(){return this.toUpperCase()}function r(){return this.split("").map((t,i)=>i%2==0?t:t.capitalize()).join("")}function o(){return this.split("").map((t,i)=>i%2==0?t.capitalize():t).join("")}function p(){return this.split(" ").join("-")}function s(){return this.split(" ").join("_")}function a(){return this.split(" ").join("")}function u(){return this.trim().split(" ").filter(t=>""!==t).join(" ")}String.prototype.capitalize=function(){return i(this)},String.prototype.capitalizeAll=function(){return n(this)},String.prototype.allCaps=e,String.prototype.oddCaps=r,String.prototype.evenCaps=o,String.prototype.kabobCase=p,String.prototype.snakeCase=s,String.prototype.stripSpaces=a,String.prototype.stripExtraSpaces=u;t.allCaps=e,t.capitalize=i,t.capitalizeAll=n,t.evenCaps=o,t.kabobCase=p,t.oddCaps=r,t.randomString=t=>{let i="";const n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<t;e+=1)i+=n.charAt(Math.round(Math.random()*n.length));return i},t.snakeCase=s,t.stripExtraSpaces=u,t.stripSpaces=a}));
