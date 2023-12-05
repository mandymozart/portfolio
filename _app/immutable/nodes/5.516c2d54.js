import{c as oe}from"../chunks/prismicio.162cae83.js";import{s as ie,n as de,r as _e}from"../chunks/scheduler.f1b89c18.js";import{S as ce,i as ue,g as b,m as R,s as I,r as N,h as y,j as k,n as U,f as _,c as q,D as fe,u as T,k as v,z as V,a as E,x as m,v as B,o as F,d as j,t as P,w as M,e as H,p as Z,b as x,y as ee,E as te}from"../chunks/index.f16333cd.js";import{e as G}from"../chunks/asLink.1bcab237.js";import{C as pe}from"../chunks/CommonPage.4e7b6eef.js";import{U as me}from"../chunks/UIcon.f54d36ee.js";import{b as le}from"../chunks/paths.db755c24.js";import{G as he}from"../chunks/Grid.150a56db.js";import{P as ve}from"../chunks/PrismicImage.5b9c2cb1.js";async function ge({fetch:c,cookies:e}){return{projects:await oe({fetch:c,cookies:e}).getAllByType("project",{orderings:[{field:"my.project.toDate",direction:"desc"}]})}}async function $e(){return(await oe().getAllByType("project")).map(l=>({uid:l.uid}))}const Oe=Object.freeze(Object.defineProperty({__proto__:null,entries:$e,load:ge},Symbol.toStringTag,{value:"Module"}));function be(c){let e,l,t,i=c[0].data.name+"",s,r,d,u="—<br/>",a,g,n,f=c[0].data.industry+"",o,h,D,S,A=c[0].data.type+"",O,L,C,z,w;return C=new he({}),{c(){e=b("a"),l=b("span"),t=b("span"),s=R(i),r=I(),d=b("span"),d.innerHTML=u,a=I(),g=b("div"),n=b("span"),o=R(f),h=I(),D=b("div"),S=b("span"),O=R(A),L=I(),N(C.$$.fragment),this.h()},l($){e=y($,"A",{href:!0,class:!0});var p=k(e);l=y(p,"SPAN",{class:!0});var J=k(l);t=y(J,"SPAN",{class:!0});var K=k(t);s=U(K,i),K.forEach(_),J.forEach(_),r=q(p),d=y(p,"SPAN",{class:!0,["data-svelte-h"]:!0}),fe(d)!=="svelte-9jqix6"&&(d.innerHTML=u),a=q(p),g=y(p,"DIV",{class:!0});var Q=k(g);n=y(Q,"SPAN",{class:!0});var W=k(n);o=U(W,f),W.forEach(_),Q.forEach(_),h=q(p),D=y(p,"DIV",{class:!0});var X=k(D);S=y(X,"SPAN",{class:!0});var Y=k(S);O=U(Y,A),Y.forEach(_),X.forEach(_),L=q(p),T(C.$$.fragment,p),p.forEach(_),this.h()},h(){v(t,"class","label title--label svelte-19lq5bi"),V(t,"relatedIndustry",c[0].data.industry),v(l,"class","title svelte-19lq5bi"),v(d,"class","hidden--desktop hidden--tablet svelte-19lq5bi"),v(n,"class","label industry--label svelte-19lq5bi"),v(g,"class","industry svelte-19lq5bi"),v(S,"class","label industry--label svelte-19lq5bi"),v(D,"class","type hidden--mobile svelte-19lq5bi"),v(e,"href",z=`${le}/projects/${c[0].uid}`),v(e,"class","svelte-19lq5bi")},m($,p){E($,e,p),m(e,l),m(l,t),m(t,s),m(e,r),m(e,d),m(e,a),m(e,g),m(g,n),m(n,o),m(e,h),m(e,D),m(D,S),m(S,O),m(e,L),B(C,e,null),w=!0},p($,[p]){(!w||p&1)&&i!==(i=$[0].data.name+"")&&F(s,i),(!w||p&1)&&V(t,"relatedIndustry",$[0].data.industry),(!w||p&1)&&f!==(f=$[0].data.industry+"")&&F(o,f),(!w||p&1)&&A!==(A=$[0].data.type+"")&&F(O,A),(!w||p&1&&z!==(z=`${le}/projects/${$[0].uid}`))&&v(e,"href",z)},i($){w||(j(C.$$.fragment,$),w=!0)},o($){P(C.$$.fragment,$),w=!1},d($){$&&_(e),M(C)}}}function ye(c,e,l){let{project:t}=e;return c.$$set=i=>{"project"in i&&l(0,t=i.project)},[t]}class je extends ce{constructor(e){super(),ue(this,e,ye,be,ie,{project:0})}}function re(c,e,l){const t=c.slice();return t[6]=e[l],t}function ae(c,e,l){const t=c.slice();return t[6]=e[l],t}function ke(c){let e,l,t,i,s=G(c[1]),r=[];for(let n=0;n<s.length;n+=1)r[n]=se(ae(c,s,n));const d=n=>P(r[n],1,1,()=>{r[n]=null});let u=G(c[1]),a=[];for(let n=0;n<u.length;n+=1)a[n]=ne(re(c,u,n));const g=n=>P(a[n],1,1,()=>{a[n]=null});return{c(){e=b("div");for(let n=0;n<r.length;n+=1)r[n].c();l=I(),t=b("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=y(n,"DIV",{class:!0});var f=k(e);for(let h=0;h<r.length;h+=1)r[h].l(f);f.forEach(_),l=q(n),t=y(n,"DIV",{class:!0});var o=k(t);for(let h=0;h<a.length;h+=1)a[h].l(o);o.forEach(_),this.h()},h(){v(e,"class","preview-list svelte-1aeok3v"),v(t,"class","project-list svelte-1aeok3v")},m(n,f){E(n,e,f);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);E(n,l,f),E(n,t,f);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,null);i=!0},p(n,f){if(f&3){s=G(n[1]);let o;for(o=0;o<s.length;o+=1){const h=ae(n,s,o);r[o]?(r[o].p(h,f),j(r[o],1)):(r[o]=se(h),r[o].c(),j(r[o],1),r[o].m(e,null))}for(Z(),o=s.length;o<r.length;o+=1)d(o);x()}if(f&6){u=G(n[1]);let o;for(o=0;o<u.length;o+=1){const h=re(n,u,o);a[o]?(a[o].p(h,f),j(a[o],1)):(a[o]=ne(h),a[o].c(),j(a[o],1),a[o].m(t,null))}for(Z(),o=u.length;o<a.length;o+=1)g(o);x()}},i(n){if(!i){for(let f=0;f<s.length;f+=1)j(r[f]);for(let f=0;f<u.length;f+=1)j(a[f]);i=!0}},o(n){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)P(r[f]);a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)P(a[f]);i=!1},d(n){n&&(_(e),_(l),_(t)),ee(r,n),ee(a,n)}}}function Pe(c){let e,l,t,i,s="Could not find anything...",r;return l=new me({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=b("div"),N(l.$$.fragment),t=I(),i=b("p"),i.textContent=s,this.h()},l(d){e=y(d,"DIV",{class:!0});var u=k(e);T(l.$$.fragment,u),t=q(u),i=y(u,"P",{class:!0,["data-svelte-h"]:!0}),fe(i)!=="svelte-1jyyf6v"&&(i.textContent=s),u.forEach(_),this.h()},h(){v(i,"class","font-300"),v(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(d,u){E(d,e,u),B(l,e,null),m(e,t),m(e,i),r=!0},p:de,i(d){r||(j(l.$$.fragment,d),r=!0)},o(d){P(l.$$.fragment,d),r=!1},d(d){d&&_(e),M(l)}}}function we(c){let e,l,t,i;return l=new ve({props:{field:c[6].data.images[0].image,class:"preview-image"}}),{c(){e=b("div"),N(l.$$.fragment),t=I(),this.h()},l(s){e=y(s,"DIV",{class:!0});var r=k(e);T(l.$$.fragment,r),t=q(r),r.forEach(_),this.h()},h(){v(e,"class","svelte-1aeok3v"),V(e,"active",c[0]===c[6].uid),V(e,"preview",!0)},m(s,r){E(s,e,r),B(l,e,null),m(e,t),i=!0},p(s,r){(!i||r&3)&&V(e,"active",s[0]===s[6].uid)},i(s){i||(j(l.$$.fragment,s),i=!0)},o(s){P(l.$$.fragment,s),i=!1},d(s){s&&_(e),M(l)}}}function se(c){var i;let e,l,t=((i=c[6].data.images[0])==null?void 0:i.image)&&we(c);return{c(){t&&t.c(),e=H()},l(s){t&&t.l(s),e=H()},m(s,r){t&&t.m(s,r),E(s,e,r),l=!0},p(s,r){var d;(d=s[6].data.images[0])!=null&&d.image&&t.p(s,r)},i(s){l||(j(t),l=!0)},o(s){P(t),l=!1},d(s){s&&_(e),t&&t.d(s)}}}function ne(c){let e,l,t,i,s,r;l=new je({props:{project:c[6]}});function d(){return c[4](c[6])}function u(){return c[5](c[6])}return{c(){e=b("div"),N(l.$$.fragment),t=I(),this.h()},l(a){e=y(a,"DIV",{role:!0});var g=k(e);T(l.$$.fragment,g),t=q(g),g.forEach(_),this.h()},h(){v(e,"role","listitem")},m(a,g){E(a,e,g),B(l,e,null),m(e,t),i=!0,s||(r=[te(e,"mouseover",d),te(e,"focus",u)],s=!0)},p(a,g){c=a},i(a){i||(j(l.$$.fragment,a),i=!0)},o(a){P(l.$$.fragment,a),i=!1},d(a){a&&_(e),M(l),s=!1,_e(r)}}}function Ee(c){let e,l,t,i;const s=[Pe,ke],r=[];function d(u,a){return u[1].length===0?0:1}return e=d(c),l=r[e]=s[e](c),{c(){l.c(),t=H()},l(u){l.l(u),t=H()},m(u,a){r[e].m(u,a),E(u,t,a),i=!0},p(u,a){l.p(u,a)},i(u){i||(j(l),i=!0)},o(u){P(l),i=!1},d(u){u&&_(t),r[e].d(u)}}}function Ie(c){let e,l;return e=new pe({props:{title:"Projects",breadcrumbs:[{label:"Projects"}],$$slots:{default:[Ee]},$$scope:{ctx:c}}}),{c(){N(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,i){B(e,t,i),l=!0},p(t,[i]){const s={};i&2049&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){P(e.$$.fragment,t),l=!1},d(t){M(e,t)}}}function qe(c,e,l){let{data:t}=e;const{projects:i}=t;let s="";const r=a=>{l(0,s=a)},d=a=>r(a.uid),u=a=>r(a.uid);return c.$$set=a=>{"data"in a&&l(3,t=a.data)},[s,i,r,t,d,u]}class ze extends ce{constructor(e){super(),ue(this,e,qe,Ie,ie,{data:3})}}export{ze as component,Oe as universal};
