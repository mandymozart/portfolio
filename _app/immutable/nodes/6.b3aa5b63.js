import{c as he}from"../chunks/prismicio.859cf090.js";import{s as q,u as R,n as z,c as ve,b as ke}from"../chunks/scheduler.f1b89c18.js";import{S as L,i as F,g as b,h as y,j,f as p,k as _,a as $,x as I,m as Q,n as W,o as $e,s as C,c as V,z as J,E as be,d as g,p as U,t as v,b as O,F as re,e as M,r as D,u as S,v as T,w as B,B as X,y as Z,l as Y}from"../chunks/index.09b35bf0.js";import{U as ye}from"../chunks/UIcon.4993917e.js";import{e as N}from"../chunks/asLink.1bcab237.js";import{P as x}from"../chunks/PrismicImage.a749fe12.js";import{P as we}from"../chunks/PrismicRichText.a65cc5d0.js";import{C as Ie,T as Ee}from"../chunks/CommonPage.8ad031ea.js";import{G as ge}from"../chunks/Grid.2717aa9f.js";import{b as K}from"../chunks/paths.2cf78569.js";import{f as ie}from"../chunks/index.ebed38ed.js";async function je({fetch:s,cookies:e,params:l}){const t=he({fetch:s,cookies:e});if(l.uid){const r=await t.getByUID("project",l.uid),a=await t.getAllByType("collaborator"),o=await t.getAllByType("client"),n=await t.getAllByType("skill");let i=[];r.data.partners.forEach(u=>{let f=a.find(c=>u.partner.uid===c.uid);f&&i.push(f)}),r.data.partners.forEach(u=>{let f=o.find(c=>u.partner.uid===c.uid);f&&i.push(f)});let d=[];return r.data.skills.forEach(u=>{let f=n.find(c=>c.uid===u.skill.uid?c:!1);f&&d.push(f)}),{project:r,collaborators:a,partners:i,skills:d}}}async function Pe(){return(await he().getAllByType("project")).map(l=>({uid:l.uid}))}const dt=Object.freeze(Object.defineProperty({__proto__:null,entries:Pe,load:je},Symbol.toStringTag,{value:"Module"}));function Ce(s){let e,l,t,r;return{c(){e=b("div"),l=b("img"),this.h()},l(a){e=y(a,"DIV",{class:!0});var o=j(e);l=y(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(p),this.h()},h(){R(l.src,t=s[0].data.logo.url)||_(l,"src",t),_(l,"alt",r=s[0].data.logo.alt),_(l,"class","w-full svelte-1r46gth"),_(e,"class","svelte-1r46gth")},m(a,o){$(a,e,o),I(e,l)},p(a,[o]){o&1&&!R(l.src,t=a[0].data.logo.url)&&_(l,"src",t),o&1&&r!==(r=a[0].data.logo.alt)&&_(l,"alt",r)},i:z,o:z,d(a){a&&p(e)}}}function Ve(s,e,l){let{skill:t}=e;return s.$$set=r=>{"skill"in r&&l(0,t=r.skill)},[t]}class De extends L{constructor(e){super(),F(this,e,Ve,Ce,q,{skill:0})}}function Se(s){let e=s[0].data.name+"",l;return{c(){l=Q(e)},l(t){l=W(t,e)},m(t,r){$(t,l,r)},p(t,r){r&1&&e!==(e=t[0].data.name+"")&&$e(l,e)},d(t){t&&p(l)}}}function Te(s){let e,l,t;return{c(){e=b("img"),this.h()},l(r){e=y(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){R(e.src,l=s[0].data.logo.url)||_(e,"src",l),_(e,"alt",t=s[0].data.logo.alt),_(e,"class","w-full svelte-1r46gth")},m(r,a){$(r,e,a)},p(r,a){a&1&&!R(e.src,l=r[0].data.logo.url)&&_(e,"src",l),a&1&&t!==(t=r[0].data.logo.alt)&&_(e,"alt",t)},d(r){r&&p(e)}}}function Be(s){let e,l,t;function r(n,i){return n[0].data.logo.url?Te:Se}let a=r(s),o=a(s);return{c(){e=b("div"),l=b("a"),o.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var i=j(e);l=y(i,"A",{href:!0,target:!0});var d=j(l);o.l(d),d.forEach(p),i.forEach(p),this.h()},h(){var n;_(l,"href",t=(n=s[0].data.link)!=null&&n.url?s[0].data.link.url:"#"),_(l,"target","_blank"),_(e,"class","svelte-1r46gth")},m(n,i){$(n,e,i),I(e,l),o.m(l,null)},p(n,[i]){var d;a===(a=r(n))&&o?o.p(n,i):(o.d(1),o=a(n),o&&(o.c(),o.m(l,null))),i&1&&t!==(t=(d=n[0].data.link)!=null&&d.url?n[0].data.link.url:"#")&&_(l,"href",t)},i:z,o:z,d(n){n&&p(e),o.d()}}}function ze(s,e,l){let{partner:t}=e;return console.log(t.data),s.$$set=r=>{"partner"in r&&l(0,t=r.partner)},[t]}class Ae extends L{constructor(e){super(),F(this,e,ze,Be,q,{partner:0})}}function ne(s){let e,l,t,r,a,o,n;return{c(){e=b("video"),l=b("source"),r=b("track"),this.h()},l(i){e=y(i,"VIDEO",{class:!0});var d=j(e);l=y(d,"SOURCE",{src:!0,type:!0}),r=y(d,"TRACK",{kind:!0,srclang:!0,src:!0}),d.forEach(p),this.h()},h(){R(l.src,t=K+"/videos/"+s[0]+".webm")||_(l,"src",t),_(l,"type","video/webm"),r.default=!0,_(r,"kind","captions"),_(r,"srclang","en"),R(r.src,a=K+"/videos/"+s[0]+".vtt")||_(r,"src",a),e.loop=!0,e.playsInline=!0,_(e,"class","svelte-2v9yzx"),J(e,"playing",s[2])},m(i,d){$(i,e,d),I(e,l),I(e,r),s[4](e),n=!0},p(i,d){(!n||d&1&&!R(l.src,t=K+"/videos/"+i[0]+".webm"))&&_(l,"src",t),(!n||d&1&&!R(r.src,a=K+"/videos/"+i[0]+".vtt"))&&_(r,"src",a),(!n||d&4)&&J(e,"playing",i[2])},i(i){n||(i&&ve(()=>{n&&(o||(o=re(e,ie,{delay:250,duration:300},!0)),o.run(1))}),n=!0)},o(i){i&&(o||(o=re(e,ie,{delay:250,duration:300},!1)),o.run(0)),n=!1},d(i){i&&p(e),s[4](null),i&&o&&o.end()}}}function Re(s){let e;return{c(){e=Q("Play Reaction")},l(l){e=W(l,"Play Reaction")},m(l,t){$(l,e,t)},d(l){l&&p(e)}}}function Ue(s){let e;return{c(){e=Q("Pause")},l(l){e=W(l,"Pause")},m(l,t){$(l,e,t)},d(l){l&&p(e)}}}function Oe(s){let e,l,t,r,a,o,n=s[0]&&ne(s);function i(f,c){return f[2]?Ue:Re}let d=i(s),u=d(s);return{c(){e=b("div"),n&&n.c(),l=C(),t=b("div"),r=b("button"),u.c(),this.h()},l(f){e=y(f,"DIV",{class:!0});var c=j(e);n&&n.l(c),c.forEach(p),l=V(f),t=y(f,"DIV",{id:!0,class:!0});var m=j(t);r=y(m,"BUTTON",{id:!0,class:!0});var w=j(r);u.l(w),w.forEach(p),m.forEach(p),this.h()},h(){_(e,"class","stage svelte-2v9yzx"),_(r,"id","startButton"),_(r,"class","svelte-2v9yzx"),_(t,"id","overlay"),_(t,"class","svelte-2v9yzx"),J(t,"playing",s[2])},m(f,c){$(f,e,c),n&&n.m(e,null),$(f,l,c),$(f,t,c),I(t,r),u.m(r,null),a||(o=be(r,"click",s[5]),a=!0)},p(f,[c]){f[0]?n?(n.p(f,c),c&1&&g(n,1)):(n=ne(f),n.c(),g(n,1),n.m(e,null)):n&&(U(),v(n,1,1,()=>{n=null}),O()),d!==(d=i(f))&&(u.d(1),u=d(f),u&&(u.c(),u.m(r,null))),c&4&&J(t,"playing",f[2])},i(f){g(n)},o(f){v(n)},d(f){f&&(p(e),p(l),p(t)),n&&n.d(),u.d(),a=!1,o()}}}function Me(s,e,l){let t,{videoid:r}=e,a;const o=()=>{t?(a.pause(),l(2,t=!1)):(a.play(),l(2,t=!0))};function n(d){ke[d?"unshift":"push"](()=>{a=d,l(1,a)})}const i=()=>o();return s.$$set=d=>{"videoid"in d&&l(0,r=d.videoid)},l(2,t=!1),[r,a,t,o,n,i]}class Ne extends L{constructor(e){super(),F(this,e,Me,Oe,q,{videoid:0})}}function ae(s,e,l){const t=s.slice();return t[4]=e[l],t}function se(s,e,l){const t=s.slice();return t[7]=e[l],t}function oe(s,e,l){const t=s.slice();return t[10]=e[l],t}function Ge(s){var t,r;let e,l;return e=new Ie({props:{title:(t=s[0].data.name)==null?void 0:t.toString(),subtitle:s[0].data.industry+" / "+s[0].data.type,breadcrumbs:[{path:"/projects",label:"Projects"},{label:s[0].data.name?(r=s[0].data.name)==null?void 0:r.toString():"Untitled"}],$$slots:{default:[Je]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,o){T(e,a,o),l=!0},p(a,o){var i,d;const n={};o&1&&(n.title=(i=a[0].data.name)==null?void 0:i.toString()),o&1&&(n.subtitle=a[0].data.industry+" / "+a[0].data.type),o&1&&(n.breadcrumbs=[{path:"/projects",label:"Projects"},{label:a[0].data.name?(d=a[0].data.name)==null?void 0:d.toString():"Untitled"}]),o&8199&&(n.$$scope={dirty:o,ctx:a}),e.$set(n)},i(a){l||(g(e.$$.fragment,a),l=!0)},o(a){v(e.$$.fragment,a),l=!1},d(a){B(e,a)}}}function He(s){let e,l='<p class="font-300">Could not load project data...</p>';return{c(){e=b("div"),e.innerHTML=l,this.h()},l(t){e=y(t,"DIV",{class:!0,["data-svelte-h"]:!0}),X(e)!=="svelte-py5p2l"&&(e.innerHTML=l),this.h()},h(){_(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(t,r){$(t,e,r)},p:z,i:z,o:z,d(t){t&&p(e)}}}function ce(s){let e,l,t="Partners",r,a,o,n=N(s[2]),i=[];for(let u=0;u<n.length;u+=1)i[u]=fe(oe(s,n,u));const d=u=>v(i[u],1,1,()=>{i[u]=null});return{c(){e=b("div"),l=b("h4"),l.textContent=t,r=C(),a=b("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var f=j(e);l=y(f,"H4",{class:!0,["data-svelte-h"]:!0}),X(l)!=="svelte-go0jg1"&&(l.textContent=t),r=V(f),a=y(f,"DIV",{class:!0});var c=j(a);for(let m=0;m<i.length;m+=1)i[m].l(c);c.forEach(p),f.forEach(p),this.h()},h(){_(l,"class","svelte-ickmce"),_(a,"class","partner-list svelte-ickmce"),_(e,"class","partners svelte-ickmce")},m(u,f){$(u,e,f),I(e,l),I(e,r),I(e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(a,null);o=!0},p(u,f){if(f&4){n=N(u[2]);let c;for(c=0;c<n.length;c+=1){const m=oe(u,n,c);i[c]?(i[c].p(m,f),g(i[c],1)):(i[c]=fe(m),i[c].c(),g(i[c],1),i[c].m(a,null))}for(U(),c=n.length;c<i.length;c+=1)d(c);O()}},i(u){if(!o){for(let f=0;f<n.length;f+=1)g(i[f]);o=!0}},o(u){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)v(i[f]);o=!1},d(u){u&&p(e),Z(i,u)}}}function fe(s){let e,l;return e=new Ae({props:{partner:s[10]}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p(t,r){const a={};r&4&&(a.partner=t[10]),e.$set(a)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ue(s){let e,l,t="Tech Stack",r,a,o,n=N(s[1]),i=[];for(let u=0;u<n.length;u+=1)i[u]=de(se(s,n,u));const d=u=>v(i[u],1,1,()=>{i[u]=null});return{c(){e=b("div"),l=b("h4"),l.textContent=t,r=C(),a=b("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var f=j(e);l=y(f,"H4",{class:!0,["data-svelte-h"]:!0}),X(l)!=="svelte-19e67ku"&&(l.textContent=t),r=V(f),a=y(f,"DIV",{class:!0});var c=j(a);for(let m=0;m<i.length;m+=1)i[m].l(c);c.forEach(p),f.forEach(p),this.h()},h(){_(l,"class","svelte-ickmce"),_(a,"class","skill-list svelte-ickmce"),_(e,"class","skills svelte-ickmce")},m(u,f){$(u,e,f),I(e,l),I(e,r),I(e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(a,null);o=!0},p(u,f){if(f&2){n=N(u[1]);let c;for(c=0;c<n.length;c+=1){const m=se(u,n,c);i[c]?(i[c].p(m,f),g(i[c],1)):(i[c]=de(m),i[c].c(),g(i[c],1),i[c].m(a,null))}for(U(),c=n.length;c<i.length;c+=1)d(c);O()}},i(u){if(!o){for(let f=0;f<n.length;f+=1)g(i[f]);o=!0}},o(u){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)v(i[f]);o=!1},d(u){u&&p(e),Z(i,u)}}}function de(s){let e,l;return e=new De({props:{skill:s[7]}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p(t,r){const a={};r&2&&(a.skill=t[7]),e.$set(a)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function qe(s){let e,l,t=N(s[3]),r=[];for(let o=0;o<t.length;o+=1)r[o]=_e(ae(s,t,o));const a=o=>v(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=M()},l(o){for(let n=0;n<r.length;n+=1)r[n].l(o);e=M()},m(o,n){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(o,n);$(o,e,n),l=!0},p(o,n){if(n&8){t=N(o[3]);let i;for(i=0;i<t.length;i+=1){const d=ae(o,t,i);r[i]?(r[i].p(d,n),g(r[i],1)):(r[i]=_e(d),r[i].c(),g(r[i],1),r[i].m(e.parentNode,e))}for(U(),i=t.length;i<r.length;i+=1)a(i);O()}},i(o){if(!l){for(let n=0;n<t.length;n+=1)g(r[n]);l=!0}},o(o){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)v(r[n]);l=!1},d(o){o&&p(e),Z(r,o)}}}function Le(s){let e,l;return e=new x({props:{class:"screenshot hidden--mobile",field:s[4].desktop}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p:z,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Fe(s){let e,l;return e=new x({props:{class:"screenshot hidden--desktop hidden--tablet",field:s[4].mobile}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p:z,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ke(s){let e,l;return e=new x({props:{class:"screenshot",field:s[4].image}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p:z,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function _e(s){let e,l,t,r,a,o,n;l=new ge({});let i=s[4].desktop&&Le(s),d=s[4].mobile&&Fe(s),u=s[4].image&&Ke(s);return{c(){e=b("section"),D(l.$$.fragment),t=C(),i&&i.c(),r=C(),d&&d.c(),a=C(),u&&u.c(),o=C(),this.h()},l(f){e=y(f,"SECTION",{style:!0});var c=j(e);S(l.$$.fragment,c),t=V(c),i&&i.l(c),r=V(c),d&&d.l(c),a=V(c),u&&u.l(c),o=V(c),c.forEach(p),this.h()},h(){Y(e,"margin-left","4rem"),Y(e,"width","calc(100% - 4rem)"),Y(e,"position","relative")},m(f,c){$(f,e,c),T(l,e,null),I(e,t),i&&i.m(e,null),I(e,r),d&&d.m(e,null),I(e,a),u&&u.m(e,null),I(e,o),n=!0},p(f,c){f[4].desktop&&i.p(f,c),f[4].mobile&&d.p(f,c),f[4].image&&u.p(f,c)},i(f){n||(g(l.$$.fragment,f),g(i),g(d),g(u),n=!0)},o(f){v(l.$$.fragment,f),v(i),v(d),v(u),n=!1},d(f){f&&p(e),B(l),i&&i.d(),d&&d.d(),u&&u.d()}}}function me(s){let e,l,t;return l=new Ne({props:{videoid:s[0].data.video_id.toString()}}),{c(){e=b("div"),D(l.$$.fragment),this.h()},l(r){e=y(r,"DIV",{class:!0});var a=j(e);S(l.$$.fragment,a),a.forEach(p),this.h()},h(){_(e,"class","video-reaction svelte-ickmce")},m(r,a){$(r,e,a),T(l,e,null),t=!0},p(r,a){const o={};a&1&&(o.videoid=r[0].data.video_id.toString()),l.$set(o)},i(r){t||(g(l.$$.fragment,r),t=!0)},o(r){v(l.$$.fragment,r),t=!1},d(r){r&&p(e),B(l)}}}function pe(s){let e,l,t;return{c(){e=b("a"),l=Q("Visit project"),this.h()},l(r){e=y(r,"A",{href:!0,target:!0,rel:!0,class:!0});var a=j(e);l=W(a,"Visit project"),a.forEach(p),this.h()},h(){_(e,"href",t=s[0].data.link.url),_(e,"target","_blank"),_(e,"rel","noopener noreferrer"),_(e,"class","button")},m(r,a){$(r,e,a),I(e,l)},p(r,a){a&1&&t!==(t=r[0].data.link.url)&&_(e,"href",t)},d(r){r&&p(e)}}}function Je(s){var ee,te;let e,l,t,r,a,o,n,i,d,u,f,c;l=new ge({}),a=new we({props:{field:s[0].data.description}});let m=((ee=s[2])==null?void 0:ee.length)>0&&ce(s),w=((te=s[1])==null?void 0:te.length)>0&&ue(s),A=s[3].length>0&&qe(s),E=s[0].data.video_id&&me(s),P=s[0].data.link.url&&pe(s);return{c(){e=b("div"),D(l.$$.fragment),t=C(),r=b("div"),D(a.$$.fragment),o=C(),m&&m.c(),n=C(),w&&w.c(),i=C(),A&&A.c(),d=C(),E&&E.c(),u=C(),f=b("div"),P&&P.c(),this.h()},l(h){e=y(h,"DIV",{class:!0});var k=j(e);S(l.$$.fragment,k),t=V(k),r=y(k,"DIV",{class:!0});var G=j(r);S(a.$$.fragment,G),G.forEach(p),o=V(k),m&&m.l(k),n=V(k),w&&w.l(k),k.forEach(p),i=V(h),A&&A.l(h),d=V(h),E&&E.l(h),u=V(h),f=y(h,"DIV",{class:!0});var H=j(f);P&&P.l(H),H.forEach(p),this.h()},h(){_(r,"class","description svelte-ickmce"),_(e,"class","info font-mono svelte-ickmce"),_(f,"class","link svelte-ickmce")},m(h,k){$(h,e,k),T(l,e,null),I(e,t),I(e,r),T(a,r,null),I(e,o),m&&m.m(e,null),I(e,n),w&&w.m(e,null),$(h,i,k),A&&A.m(h,k),$(h,d,k),E&&E.m(h,k),$(h,u,k),$(h,f,k),P&&P.m(f,null),c=!0},p(h,k){var H,le;const G={};k&1&&(G.field=h[0].data.description),a.$set(G),((H=h[2])==null?void 0:H.length)>0?m?(m.p(h,k),k&4&&g(m,1)):(m=ce(h),m.c(),g(m,1),m.m(e,n)):m&&(U(),v(m,1,1,()=>{m=null}),O()),((le=h[1])==null?void 0:le.length)>0?w?(w.p(h,k),k&2&&g(w,1)):(w=ue(h),w.c(),g(w,1),w.m(e,null)):w&&(U(),v(w,1,1,()=>{w=null}),O()),h[3].length>0&&A.p(h,k),h[0].data.video_id?E?(E.p(h,k),k&1&&g(E,1)):(E=me(h),E.c(),g(E,1),E.m(u.parentNode,u)):E&&(U(),v(E,1,1,()=>{E=null}),O()),h[0].data.link.url?P?P.p(h,k):(P=pe(h),P.c(),P.m(f,null)):P&&(P.d(1),P=null)},i(h){c||(g(l.$$.fragment,h),g(a.$$.fragment,h),g(m),g(w),g(A),g(E),c=!0)},o(h){v(l.$$.fragment,h),v(a.$$.fragment,h),v(m),v(w),v(A),v(E),c=!1},d(h){h&&(p(e),p(i),p(d),p(u),p(f)),B(l),B(a),m&&m.d(),w&&w.d(),A&&A.d(h),E&&E.d(h),P&&P.d()}}}function Qe(s){let e,l,t,r;const a=[He,Ge],o=[];function n(i,d){return i[0]===void 0?0:1}return e=n(s),l=o[e]=a[e](s),{c(){l.c(),t=M()},l(i){l.l(i),t=M()},m(i,d){o[e].m(i,d),$(i,t,d),r=!0},p(i,[d]){let u=e;e=n(i),e===u?o[e].p(i,d):(U(),v(o[u],1,1,()=>{o[u]=null}),O(),l=o[e],l?l.p(i,d):(l=o[e]=a[e](i),l.c()),g(l,1),l.m(t.parentNode,t))},i(i){r||(g(l),r=!0)},o(i){v(l),r=!1},d(i){i&&p(t),o[e].d(i)}}}function We(s,e,l){let{project:t}=e,{skills:r}=e,{partners:a}=e;const o=(t==null?void 0:t.data.images)??[];return console.log(t.data.images),s.$$set=n=>{"project"in n&&l(0,t=n.project),"skills"in n&&l(1,r=n.skills),"partners"in n&&l(2,a=n.partners)},[t,r,a,o]}class Xe extends L{constructor(e){super(),F(this,e,We,Qe,q,{project:0,skills:1,partners:2})}}function Ye(s){let e,l;return e=new Xe({props:{project:s[0],partners:s[1],skills:s[2]}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,r){T(e,t,r),l=!0},p:z,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){v(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ze(s){let e,l,t,r,a="Could not load project data...",o;return l=new ye({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=b("div"),D(l.$$.fragment),t=C(),r=b("p"),r.textContent=a,this.h()},l(n){e=y(n,"DIV",{class:!0});var i=j(e);S(l.$$.fragment,i),t=V(i),r=y(i,"P",{class:!0,["data-svelte-h"]:!0}),X(r)!=="svelte-18mwztv"&&(r.textContent=a),i.forEach(p),this.h()},h(){_(r,"class","font-300"),_(e,"class","font-mono")},m(n,i){$(n,e,i),T(l,e,null),I(e,t),I(e,r),o=!0},p:z,i(n){o||(g(l.$$.fragment,n),o=!0)},o(n){v(l.$$.fragment,n),o=!1},d(n){n&&p(e),B(l)}}}function xe(s){var u,f;let e,l,t,r,a,o;e=new Ee({props:{title:(f=(u=s[0])==null?void 0:u.data.name)==null?void 0:f.toString()}});const n=[Ze,Ye],i=[];function d(c,m){return c[0]===void 0?0:1}return t=d(s),r=i[t]=n[t](s),{c(){D(e.$$.fragment),l=C(),r.c(),a=M()},l(c){S(e.$$.fragment,c),l=V(c),r.l(c),a=M()},m(c,m){T(e,c,m),$(c,l,m),i[t].m(c,m),$(c,a,m),o=!0},p(c,[m]){r.p(c,m)},i(c){o||(g(e.$$.fragment,c),g(r),o=!0)},o(c){v(e.$$.fragment,c),v(r),o=!1},d(c){c&&(p(l),p(a)),B(e,c),i[t].d(c)}}}function et(s,e,l){let{data:t}=e;const{project:r,partners:a,skills:o}=t;return s.$$set=n=>{"data"in n&&l(3,t=n.data)},[r,a,o,t]}class _t extends L{constructor(e){super(),F(this,e,et,xe,q,{data:3})}}export{_t as component,dt as universal};
