!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t=t||self).justInCase={})}(this,function(t){"use strict";String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.capitalizeAll=function(){return this.split(" ").map(t=>t.capitalize()).join(" ")},String.prototype.allCaps=function(){return this.toUpperCase()},String.prototype.oddCaps=function(){return this.split("").map((t,i)=>i%2==0?t:t.capitalize()).join("")},String.prototype.evenCaps=function(){return this.split("").map((t,i)=>i%2==0?t.capitalize():t).join("")},String.prototype.kabobCase=function(){return this.split(" ").join("-")},String.prototype.snakeCase=function(){return this.split(" ").join("_")},String.prototype.stripSpaces=function(){return this.split(" ").join("")},String.prototype.stripExtraSpaces=function(){return this.trim().split(" ").filter(t=>""!==t).join(" ")};t.randomString=t=>{let i="";const n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<t;e+=1)i+=n.charAt(Math.round(Math.random()*n.length));return i}});
