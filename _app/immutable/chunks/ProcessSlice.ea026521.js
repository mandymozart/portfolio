import{s as ie,c as ce,u as x,i as Oe,r as He,b as me,A as ge}from"./scheduler.f1b89c18.js";import{S as le,i as re,g as O,r as Y,h as H,j as N,u as K,f as w,k as u,a as z,v as L,d as P,t as C,w as M,s as F,m as R,c as B,n as U,x as p,o as X,p as W,b as Z,y as je,E as se,z as ae,F as fe,G as qe,H as ve,e as he}from"./index.09b35bf0.js";import{e as ue}from"./asLink.1bcab237.js";import{P as Ce,a as Ne}from"./PrismicRichText.a65cc5d0.js";import{G as _e}from"./Grid.2717aa9f.js";import{b as ee}from"./paths.0a46d8b2.js";import{P as pe}from"./PrismicImage.a749fe12.js";import{f as de}from"./index.ebed38ed.js";function Ae(r){let e,i,t;return i=new Ce({props:{field:r[0].address}}),{c(){e=O("div"),Y(i.$$.fragment),this.h()},l(l){e=H(l,"DIV",{class:!0});var s=N(e);K(i.$$.fragment,s),s.forEach(w),this.h()},h(){u(e,"class","svelte-zieku2")},m(l,s){z(l,e,s),L(i,e,null),t=!0},p(l,[s]){const n={};s&1&&(n.field=l[0].address),i.$set(n)},i(l){t||(P(i.$$.fragment,l),t=!0)},o(l){C(i.$$.fragment,l),t=!1},d(l){l&&w(e),M(i)}}}function Fe(r,e,i){let{address:t}=e;return r.$$set=l=>{"address"in l&&i(0,t=l.address)},[t]}class Be extends le{constructor(e){super(),re(this,e,Fe,Ae,ie,{address:0})}}function ye(r,e,i){const t=r.slice();return t[1]=e[i],t}function $e(r){let e,i;return e=new Be({props:{address:r[1]}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.address=t[1]),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Ge(r){let e,i,t,l,s,n=r[0].primary.title+"",d,o,f,c=r[0].primary.description+"",m,k,T,q,V,I;t=new _e({props:{grid:r[0].primary.grid}});let y=ue(r[0].items),S=[];for(let a=0;a<y.length;a+=1)S[a]=$e(ye(r,y,a));const h=a=>C(S[a],1,1,()=>{S[a]=null});return{c(){e=O("section"),i=O("div"),Y(t.$$.fragment),l=F(),s=O("h3"),d=R(n),o=F(),f=O("p"),m=R(c),k=F(),T=O("div");for(let a=0;a<S.length;a+=1)S[a].c();this.h()},l(a){e=H(a,"SECTION",{"data-slice-type":!0,"data-slice-variation":!0,class:!0});var v=N(e);i=H(v,"DIV",{class:!0});var E=N(i);K(t.$$.fragment,E),l=B(E),s=H(E,"H3",{class:!0});var g=N(s);d=U(g,n),g.forEach(w),o=B(E),f=H(E,"P",{class:!0});var D=N(f);m=U(D,c),D.forEach(w),k=B(E),T=H(E,"DIV",{class:!0});var $=N(T);for(let _=0;_<S.length;_+=1)S[_].l($);$.forEach(w),E.forEach(w),v.forEach(w),this.h()},h(){u(s,"class","svelte-1jt03o2"),u(f,"class","description svelte-1jt03o2"),u(T,"class","addresses svelte-1jt03o2"),u(i,"class","inner"),u(e,"data-slice-type",q=r[0].slice_type),u(e,"data-slice-variation",V=r[0].variation),u(e,"class","font-mono svelte-1jt03o2")},m(a,v){z(a,e,v),p(e,i),L(t,i,null),p(i,l),p(i,s),p(s,d),p(i,o),p(i,f),p(f,m),p(i,k),p(i,T);for(let E=0;E<S.length;E+=1)S[E]&&S[E].m(T,null);I=!0},p(a,[v]){const E={};if(v&1&&(E.grid=a[0].primary.grid),t.$set(E),(!I||v&1)&&n!==(n=a[0].primary.title+"")&&X(d,n),(!I||v&1)&&c!==(c=a[0].primary.description+"")&&X(m,c),v&1){y=ue(a[0].items);let g;for(g=0;g<y.length;g+=1){const D=ye(a,y,g);S[g]?(S[g].p(D,v),P(S[g],1)):(S[g]=$e(D),S[g].c(),P(S[g],1),S[g].m(T,null))}for(W(),g=y.length;g<S.length;g+=1)h(g);Z()}(!I||v&1&&q!==(q=a[0].slice_type))&&u(e,"data-slice-type",q),(!I||v&1&&V!==(V=a[0].variation))&&u(e,"data-slice-variation",V)},i(a){if(!I){P(t.$$.fragment,a);for(let v=0;v<y.length;v+=1)P(S[v]);I=!0}},o(a){C(t.$$.fragment,a),S=S.filter(Boolean);for(let v=0;v<S.length;v+=1)C(S[v]);I=!1},d(a){a&&w(e),M(t),je(S,a)}}}function Re(r,e,i){let{slice:t}=e;return r.$$set=l=>{"slice"in l&&i(0,t=l.slice)},[t]}class ut extends le{constructor(e){super(),re(this,e,Re,Ge,ie,{slice:0})}}function be(r){let e,i;return{c(){e=O("img"),this.h()},l(t){e=H(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e.src,i=r[0].primary.background.url)||u(e,"src",i),u(e,"alt","background"),u(e,"class","svelte-1xox18o")},m(t,l){z(t,e,l)},p(t,l){l&1&&!x(e.src,i=t[0].primary.background.url)&&u(e,"src",i)},d(t){t&&w(e)}}}function ke(r){let e,i;return e=new pe({props:{class:"screenshot hidden--mobile",field:r[0].primary.cover_desktop}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.field=t[0].primary.cover_desktop),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Ee(r){let e,i;return e=new pe({props:{class:"screenshot hidden--desktop hidden--tablet",field:r[0].primary.cover_mobile}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.field=t[0].primary.cover_mobile),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Ue(r){var G,J;let e=!1,i=()=>{e=!1},t,l,s,n,d,o,f,c,m,k,T,q=((G=r[1])==null?void 0:G.data.name)+"",V,I,y=((J=r[1])==null?void 0:J.data.type)+"",S,h,a,v,E,g,D;ce(r[3]);let $=r[0].primary.background.url&&be(r);n=new _e({props:{grid:r[0].primary.grid}});let _=r[0].primary.cover_desktop&&ke(r),b=r[0].primary.cover_mobile&&Ee(r);return{c(){l=O("section"),$&&$.c(),s=F(),Y(n.$$.fragment),d=F(),o=O("a"),_&&_.c(),f=F(),b&&b.c(),c=F(),m=O("div"),k=O("div"),T=O("h3"),V=R(q),I=R(" / "),S=R(y),this.h()},l(j){l=H(j,"SECTION",{"data-slice-type":!0,"data-slice-variation":!0,class:!0});var A=N(l);$&&$.l(A),s=B(A),K(n.$$.fragment,A),d=B(A),o=H(A,"A",{href:!0,class:!0});var Q=N(o);_&&_.l(Q),f=B(Q),b&&b.l(Q),c=B(Q),m=H(Q,"DIV",{class:!0});var ne=N(m);k=H(ne,"DIV",{class:!0});var oe=N(k);T=H(oe,"H3",{class:!0});var te=N(T);V=U(te,q),I=U(te," / "),S=U(te,y),te.forEach(w),oe.forEach(w),ne.forEach(w),Q.forEach(w),A.forEach(w),this.h()},h(){var j;u(T,"class","title svelte-1xox18o"),u(k,"class","info svelte-1xox18o"),u(m,"class","overlay svelte-1xox18o"),u(o,"href",h=`${ee}/projects/${(j=r[1])==null?void 0:j.uid}`),u(o,"class","svelte-1xox18o"),u(l,"data-slice-type",a=r[0].slice_type),u(l,"data-slice-variation",v=r[0].variation),u(l,"class","svelte-1xox18o")},m(j,A){z(j,l,A),$&&$.m(l,null),p(l,s),L(n,l,null),p(l,d),p(l,o),_&&_.m(o,null),p(o,f),b&&b.m(o,null),p(o,c),p(o,m),p(m,k),p(k,T),p(T,V),p(T,I),p(T,S),E=!0,g||(D=se(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),r[3]()}),g=!0)},p(j,[A]){var ne,oe,te;A&4&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,j[2]),t=setTimeout(i,100)),j[0].primary.background.url?$?$.p(j,A):($=be(j),$.c(),$.m(l,s)):$&&($.d(1),$=null);const Q={};A&1&&(Q.grid=j[0].primary.grid),n.$set(Q),j[0].primary.cover_desktop?_?(_.p(j,A),A&1&&P(_,1)):(_=ke(j),_.c(),P(_,1),_.m(o,f)):_&&(W(),C(_,1,1,()=>{_=null}),Z()),j[0].primary.cover_mobile?b?(b.p(j,A),A&1&&P(b,1)):(b=Ee(j),b.c(),P(b,1),b.m(o,c)):b&&(W(),C(b,1,1,()=>{b=null}),Z()),(!E||A&2)&&q!==(q=((ne=j[1])==null?void 0:ne.data.name)+"")&&X(V,q),(!E||A&2)&&y!==(y=((oe=j[1])==null?void 0:oe.data.type)+"")&&X(S,y),(!E||A&2&&h!==(h=`${ee}/projects/${(te=j[1])==null?void 0:te.uid}`))&&u(o,"href",h),(!E||A&1&&a!==(a=j[0].slice_type))&&u(l,"data-slice-type",a),(!E||A&1&&v!==(v=j[0].variation))&&u(l,"data-slice-variation",v)},i(j){E||(P(n.$$.fragment,j),P(_),P(b),E=!0)},o(j){C(n.$$.fragment,j),C(_),C(b),E=!1},d(j){j&&w(l),$&&$.d(),M(n),_&&_.d(),b&&b.d(),g=!1,D()}}}function ze(r,e,i){let{slice:t}=e,{project:l}=e,s;console.log(t.primary);function n(){i(2,s=window.pageYOffset)}return r.$$set=d=>{"slice"in d&&i(0,t=d.slice),"project"in d&&i(1,l=d.project)},[t,l,s,n]}class dt extends le{constructor(e){super(),re(this,e,ze,Ue,ie,{slice:0,project:1})}}function Pe(r){let e,i,t,l,s,n,d,o=!1,f,c,m,k,T;function q(){cancelAnimationFrame(f),e.paused||(f=qe(q),o=!0),r[12].call(e)}return{c(){e=O("video"),i=O("source"),l=O("source"),n=O("track"),this.h()},l(V){e=H(V,"VIDEO",{id:!0,class:!0});var I=N(e);i=H(I,"SOURCE",{src:!0,type:!0}),l=H(I,"SOURCE",{src:!0,type:!0}),n=H(I,"TRACK",{kind:!0,srclang:!0,src:!0}),I.forEach(w),this.h()},h(){x(i.src,t=ee+"/videos/"+r[1]+".webm")||u(i,"src",t),u(i,"type","video/webm"),x(l.src,s=ee+"/videos/"+r[1]+".mov")||u(l,"src",s),u(l,"type",'video/mp4; codecs="hvc1"'),n.default=!0,u(n,"kind","captions"),u(n,"srclang","en"),x(n.src,d=ee+"/videos/"+r[1]+".vtt")||u(n,"src",d),u(e,"id","video"),e.playsInline=!0,u(e,"class","svelte-1vqq4i1"),r[4]===void 0&&ce(()=>r[13].call(e)),ae(e,"playing",r[0])},m(V,I){z(V,e,I),p(e,i),p(e,l),p(e,n),r[11](e),m=!0,k||(T=[se(e,"timeupdate",q),se(e,"durationchange",r[13]),se(e,"ended",function(){Oe(r[2])&&r[2].apply(this,arguments)}),se(e,"canplay",r[8])],k=!0)},p(V,I){r=V,(!m||I&2&&!x(i.src,t=ee+"/videos/"+r[1]+".webm"))&&u(i,"src",t),(!m||I&2&&!x(l.src,s=ee+"/videos/"+r[1]+".mov"))&&u(l,"src",s),(!m||I&2&&!x(n.src,d=ee+"/videos/"+r[1]+".vtt"))&&u(n,"src",d),!o&&I&32&&!isNaN(r[5])&&(e.currentTime=r[5]),o=!1,(!m||I&1)&&ae(e,"playing",r[0])},i(V){m||(V&&ce(()=>{m&&(c||(c=fe(e,de,{delay:250,duration:300},!0)),c.run(1))}),m=!0)},o(V){V&&(c||(c=fe(e,de,{delay:250,duration:300},!1)),c.run(0)),m=!1},d(V){V&&w(e),r[11](null),V&&c&&c.end(),k=!1,He(T)}}}function Ye(r){let e,i,t,l,s=r[1]&&Pe(r);return{c(){e=O("div"),s&&s.c(),i=F(),t=O("div"),l=R(r[3]),this.h()},l(n){e=H(n,"DIV",{class:!0});var d=N(e);s&&s.l(d),i=B(d),t=H(d,"DIV",{class:!0});var o=N(t);l=U(o,r[3]),o.forEach(w),d.forEach(w),this.h()},h(){u(t,"class","caption svelte-1vqq4i1"),ae(t,"visible",r[7]),u(e,"class","stage svelte-1vqq4i1")},m(n,d){z(n,e,d),s&&s.m(e,null),p(e,i),p(e,t),p(t,l)},p(n,[d]){n[1]?s?(s.p(n,d),d&2&&P(s,1)):(s=Pe(n),s.c(),P(s,1),s.m(e,i)):s&&(W(),C(s,1,1,()=>{s=null}),Z()),d&8&&X(l,n[3]),d&128&&ae(t,"visible",n[7])},i(n){P(s)},o(n){C(s)},d(n){n&&w(e),s&&s.d()}}}function Ke(r,e,i){let{videoid:t="sample"}=e,l,s,n,d="",{end:o=()=>{n.pause(),i(0,m=!1)}}=e,{onEnded:f=()=>{i(0,m=!1)}}=e,c=()=>{i(6,n.textTracks[0].mode="hidden",n);let a=n.textTracks[0].cues;for(var v in a){var E=a[parseInt(v)];parseInt(v)!==a.length-1&&typeof E<"u"&&(E.onenter=V,E.onexit=I)}},{playing:m=!1}=e;const k=()=>{m?(n.pause(),i(0,m=!1)):(c(),n.play(),i(0,m=!0))};let T=!1,q=a=>{const v=/<b[^>]*>(.*?)<\/b>/g,E=[];let g;for(;(g=v.exec(a.toString()))!==null;)E.push(g[1]);i(3,d=E[0])},V=a=>{console.log(a.target.text),q(a.target.text),i(7,T=!0)},I=()=>{i(7,T=!1)};function y(a){me[a?"unshift":"push"](()=>{n=a,i(6,n)})}function S(){s=this.currentTime,i(5,s)}function h(){l=this.duration,i(4,l)}return r.$$set=a=>{"videoid"in a&&i(1,t=a.videoid),"end"in a&&i(9,o=a.end),"onEnded"in a&&i(2,f=a.onEnded),"playing"in a&&i(0,m=a.playing)},r.$$.update=()=>{r.$$.dirty&8&&console.log(d)},[m,t,f,d,l,s,n,T,c,o,k,y,S,h]}class Le extends le{constructor(e){super(),re(this,e,Ke,Ye,ie,{videoid:1,end:9,onEnded:2,playing:0,togglePlay:10})}get togglePlay(){return this.$$.ctx[10]}}function we(r){let e,i,t,l,s;function n(f,c){return f[2]?Xe:Me}let d=n(r),o=d(r);return{c(){e=O("button"),o.c(),this.h()},l(f){e=H(f,"BUTTON",{class:!0,id:!0});var c=N(e);o.l(c),c.forEach(w),this.h()},h(){u(e,"class","font-mono svelte-4t2vri"),u(e,"id","startButton")},m(f,c){z(f,e,c),o.m(e,null),t=!0,l||(s=se(e,"click",r[3]),l=!0)},p(f,c){d!==(d=n(f))&&(o.d(1),o=d(f),o&&(o.c(),o.m(e,null)))},i(f){t||(f&&ce(()=>{t&&(i||(i=fe(e,de,{delay:250,duration:300},!0)),i.run(1))}),t=!0)},o(f){f&&(i||(i=fe(e,de,{delay:250,duration:300},!1)),i.run(0)),t=!1},d(f){f&&w(e),o.d(),f&&i&&i.end(),l=!1,s()}}}function Me(r){let e;return{c(){e=R("Play")},l(i){e=U(i,"Play")},m(i,t){z(i,e,t)},d(i){i&&w(e)}}}function Xe(r){let e;return{c(){e=R("Pause")},l(i){e=U(i,"Pause")},m(i,t){z(i,e,t)},d(i){i&&w(e)}}}function Ie(r){var l;let e,i,t=((l=r[0].primary.cta)==null?void 0:l.link_type)!=="Any"&&Te(r);return{c(){t&&t.c(),e=he()},l(s){t&&t.l(s),e=he()},m(s,n){t&&t.m(s,n),z(s,e,n),i=!0},p(s,n){var d;((d=s[0].primary.cta)==null?void 0:d.link_type)!=="Any"?t?(t.p(s,n),n&1&&P(t,1)):(t=Te(s),t.c(),P(t,1),t.m(e.parentNode,e)):t&&(W(),C(t,1,1,()=>{t=null}),Z())},i(s){i||(P(t),i=!0)},o(s){C(t),i=!1},d(s){s&&w(e),t&&t.d(s)}}}function Te(r){let e,i;return e=new Ne({props:{field:r[0].primary.cta,class:"font-mono button",id:"cta",$$slots:{default:[Je]},$$scope:{ctx:r}}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.field=t[0].primary.cta),l&65&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Je(r){let e=r[0].primary.cta_label+"",i;return{c(){i=R(e)},l(t){i=U(t,e)},m(t,l){z(t,i,l)},p(t,l){l&1&&e!==(e=t[0].primary.cta_label+"")&&X(i,e)},d(t){t&&w(i)}}}function Qe(r){let e,i,t,l,s,n,d,o,f,c=r[0].primary.title+"",m,k,T,q=r[0].primary.message+"",V,I,y,S,h,a;i=new _e({props:{grid:r[0].primary.grid}});function v(_){r[4](_)}function E(_){r[5](_)}let g={videoid:r[0].primary.videoid};r[1]!==void 0&&(g.togglePlay=r[1]),r[2]!==void 0&&(g.playing=r[2]),l=new Le({props:g}),me.push(()=>ve(l,"togglePlay",v)),me.push(()=>ve(l,"playing",E));let D=r[0].primary.videoid&&we(r),$=r[0].variation==="section"&&Ie(r);return{c(){e=O("section"),Y(i.$$.fragment),t=F(),Y(l.$$.fragment),d=F(),o=O("div"),f=O("h1"),m=R(c),k=F(),T=O("div"),V=R(q),I=F(),D&&D.c(),y=F(),$&&$.c(),this.h()},l(_){e=H(_,"SECTION",{"data-slice-type":!0,"data-slice-variation":!0,class:!0});var b=N(e);K(i.$$.fragment,b),t=B(b),K(l.$$.fragment,b),d=B(b),o=H(b,"DIV",{id:!0,class:!0});var G=N(o);f=H(G,"H1",{class:!0});var J=N(f);m=U(J,c),J.forEach(w),k=B(G),T=H(G,"DIV",{class:!0});var j=N(T);V=U(j,q),j.forEach(w),I=B(G),D&&D.l(G),y=B(G),$&&$.l(G),G.forEach(w),b.forEach(w),this.h()},h(){u(f,"class","title font-mono"),u(T,"class","message font-mono svelte-4t2vri"),u(o,"id","overlay"),u(o,"class","svelte-4t2vri"),ae(o,"playing",r[2]),u(e,"data-slice-type",S=r[0].slice_type),u(e,"data-slice-variation",h=r[0].variation),u(e,"class","svelte-4t2vri")},m(_,b){z(_,e,b),L(i,e,null),p(e,t),L(l,e,null),p(e,d),p(e,o),p(o,f),p(f,m),p(o,k),p(o,T),p(T,V),p(o,I),D&&D.m(o,null),p(o,y),$&&$.m(o,null),a=!0},p(_,[b]){const G={};b&1&&(G.grid=_[0].primary.grid),i.$set(G);const J={};b&1&&(J.videoid=_[0].primary.videoid),!s&&b&2&&(s=!0,J.togglePlay=_[1],ge(()=>s=!1)),!n&&b&4&&(n=!0,J.playing=_[2],ge(()=>n=!1)),l.$set(J),(!a||b&1)&&c!==(c=_[0].primary.title+"")&&X(m,c),(!a||b&1)&&q!==(q=_[0].primary.message+"")&&X(V,q),_[0].primary.videoid?D?(D.p(_,b),b&1&&P(D,1)):(D=we(_),D.c(),P(D,1),D.m(o,y)):D&&(W(),C(D,1,1,()=>{D=null}),Z()),_[0].variation==="section"?$?($.p(_,b),b&1&&P($,1)):($=Ie(_),$.c(),P($,1),$.m(o,null)):$&&(W(),C($,1,1,()=>{$=null}),Z()),(!a||b&4)&&ae(o,"playing",_[2]),(!a||b&1&&S!==(S=_[0].slice_type))&&u(e,"data-slice-type",S),(!a||b&1&&h!==(h=_[0].variation))&&u(e,"data-slice-variation",h)},i(_){a||(P(i.$$.fragment,_),P(l.$$.fragment,_),P(D),P($),a=!0)},o(_){C(i.$$.fragment,_),C(l.$$.fragment,_),C(D),C($),a=!1},d(_){_&&w(e),M(i),M(l),D&&D.d(),$&&$.d()}}}function We(r,e,i){let{slice:t}=e,l,s;function n(){l()}console.log("primary",t.primary);function d(f){l=f,i(1,l)}function o(f){s=f,i(2,s)}return r.$$set=f=>{"slice"in f&&i(0,t=f.slice)},[t,l,s,n,d,o]}class _t extends le{constructor(e){super(),re(this,e,We,Qe,ie,{slice:0})}}function Se(r){let e,i;return e=new pe({props:{field:r[0].illustration}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.field=t[0].illustration),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function Ze(r){let e,i,t=r[0].title+"",l,s,n=r[0].description+"",d,o,f,c=r[0].illustration&&Se(r);return{c(){e=O("div"),i=O("h4"),l=R(t),s=F(),d=R(n),o=F(),c&&c.c(),this.h()},l(m){e=H(m,"DIV",{class:!0});var k=N(e);i=H(k,"H4",{class:!0});var T=N(i);l=U(T,t),T.forEach(w),s=B(k),d=U(k,n),o=B(k),c&&c.l(k),k.forEach(w),this.h()},h(){u(i,"class","svelte-38t7xh"),u(e,"class","svelte-38t7xh")},m(m,k){z(m,e,k),p(e,i),p(i,l),p(e,s),p(e,d),p(e,o),c&&c.m(e,null),f=!0},p(m,[k]){(!f||k&1)&&t!==(t=m[0].title+"")&&X(l,t),(!f||k&1)&&n!==(n=m[0].description+"")&&X(d,n),m[0].illustration?c?(c.p(m,k),k&1&&P(c,1)):(c=Se(m),c.c(),P(c,1),c.m(e,null)):c&&(W(),C(c,1,1,()=>{c=null}),Z())},i(m){f||(P(c),f=!0)},o(m){C(c),f=!1},d(m){m&&w(e),c&&c.d()}}}function xe(r,e,i){let{process:t}=e;return r.$$set=l=>{"process"in l&&i(0,t=l.process)},[t]}class et extends le{constructor(e){super(),re(this,e,xe,Ze,ie,{process:0})}}function Ve(r,e,i){const t=r.slice();return t[1]=e[i],t}function De(r){let e,i;return e=new et({props:{process:r[1]}}),{c(){Y(e.$$.fragment)},l(t){K(e.$$.fragment,t)},m(t,l){L(e,t,l),i=!0},p(t,l){const s={};l&1&&(s.process=t[1]),e.$set(s)},i(t){i||(P(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function tt(r){let e,i,t,l,s,n=r[0].primary.title+"",d,o,f,c,m,k,T,q,V;i=new _e({props:{grid:r[0].primary.grid}}),c=new Ce({props:{field:r[0].primary.description}});let I=ue(r[0].items),y=[];for(let h=0;h<I.length;h+=1)y[h]=De(Ve(r,I,h));const S=h=>C(y[h],1,1,()=>{y[h]=null});return{c(){e=O("section"),Y(i.$$.fragment),t=F(),l=O("div"),s=O("h3"),d=R(n),o=F(),f=O("div"),Y(c.$$.fragment),m=F(),k=O("div");for(let h=0;h<y.length;h+=1)y[h].c();this.h()},l(h){e=H(h,"SECTION",{"data-slice-type":!0,"data-slice-variation":!0,class:!0});var a=N(e);K(i.$$.fragment,a),t=B(a),l=H(a,"DIV",{class:!0});var v=N(l);s=H(v,"H3",{class:!0});var E=N(s);d=U(E,n),E.forEach(w),o=B(v),f=H(v,"DIV",{class:!0});var g=N(f);K(c.$$.fragment,g),g.forEach(w),m=B(v),k=H(v,"DIV",{class:!0});var D=N(k);for(let $=0;$<y.length;$+=1)y[$].l(D);D.forEach(w),v.forEach(w),a.forEach(w),this.h()},h(){u(s,"class","svelte-1iu4x6k"),u(f,"class","description svelte-1iu4x6k"),u(k,"class","processes svelte-1iu4x6k"),u(l,"class","inner"),u(e,"data-slice-type",T=r[0].slice_type),u(e,"data-slice-variation",q=r[0].variation),u(e,"class","font-mono svelte-1iu4x6k")},m(h,a){z(h,e,a),L(i,e,null),p(e,t),p(e,l),p(l,s),p(s,d),p(l,o),p(l,f),L(c,f,null),p(l,m),p(l,k);for(let v=0;v<y.length;v+=1)y[v]&&y[v].m(k,null);V=!0},p(h,[a]){const v={};a&1&&(v.grid=h[0].primary.grid),i.$set(v),(!V||a&1)&&n!==(n=h[0].primary.title+"")&&X(d,n);const E={};if(a&1&&(E.field=h[0].primary.description),c.$set(E),a&1){I=ue(h[0].items);let g;for(g=0;g<I.length;g+=1){const D=Ve(h,I,g);y[g]?(y[g].p(D,a),P(y[g],1)):(y[g]=De(D),y[g].c(),P(y[g],1),y[g].m(k,null))}for(W(),g=I.length;g<y.length;g+=1)S(g);Z()}(!V||a&1&&T!==(T=h[0].slice_type))&&u(e,"data-slice-type",T),(!V||a&1&&q!==(q=h[0].variation))&&u(e,"data-slice-variation",q)},i(h){if(!V){P(i.$$.fragment,h),P(c.$$.fragment,h);for(let a=0;a<I.length;a+=1)P(y[a]);V=!0}},o(h){C(i.$$.fragment,h),C(c.$$.fragment,h),y=y.filter(Boolean);for(let a=0;a<y.length;a+=1)C(y[a]);V=!1},d(h){h&&w(e),M(i),M(c),je(y,h)}}}function it(r,e,i){let{slice:t}=e;return r.$$set=l=>{"slice"in l&&i(0,t=l.slice)},[t]}class mt extends le{constructor(e){super(),re(this,e,it,tt,ie,{slice:0})}}export{ut as C,dt as F,_t as H,mt as P};
