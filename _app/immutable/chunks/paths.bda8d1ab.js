import{n as b,s as h}from"./scheduler.754fba1b.js";const e=[];function d(o,l=b){let i;const n=new Set;function r(t){if(h(o,t)&&(o=t,i)){const f=!e.length;for(const s of n)s[1](),e.push(s,o);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(o))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(i=l(r,c)||b),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1hkf194)==null?void 0:u.base)??"/portfolio";var a;const k=((a=globalThis.__sveltekit_1hkf194)==null?void 0:a.assets)??p;export{k as a,p as b,d as w};
