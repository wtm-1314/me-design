(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(t=typeof globalThis<"u"?globalThis:t||self,t["me-utils"]=o())})(this,function(){"use strict";const t=e=>e<10?"0"+e:e.toString(),o=e=>{const s=e?new Date(e):new Date,i=t(s.getHours()),n=t(s.getMinutes()),c=t(s.getSeconds());return`${i}:${n}:${c}`},l=e=>Object.prototype.toString.call(e),a=e=>{const s=["[object Object]","[object Array]"],i=l(e);let n=null;const c=(u,f)=>{n=f===1?{}:[];for(const d in u){const r=u[d],p=l(r);n[d]=s.includes(p)?a(r):r}};switch(i){case"[object Object]":c(e,1);break;case"[object Array]":c(e,2);break;default:n=e;break}return n};return{...{logger(...e){console.log(o(new Date),...e)},deepClone:a}}});
