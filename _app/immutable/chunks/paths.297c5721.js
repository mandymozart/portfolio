import{n as c,s as p}from"./scheduler.10107a62.js";const e=[];function d(n,l=c){let o;const i=new Set;function b(t){if(p(n,t)&&(n=t,o)){const r=!e.length;for(const s of i)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(n))}function _(t,r=c){const s=[t,r];return i.add(s),i.size===1&&(o=l(b,f)||c),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:b,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_17bb1tn)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_17bb1tn)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
