import{s as r,n as c}from"./scheduler.b90f6609.js";import{S as f,i as h,g as m,h as u,j as _,f as l,k as o,a as d}from"./index.dc878586.js";function g(n){let s,a;return{c(){s=m("i"),this.h()},l(e){s=u(e,"I",{class:!0}),_(s).forEach(l),this.h()},h(){o(s,"class",a=`${n[0]} ${n[1]}`)},m(e,t){d(e,s,t)},p(e,[t]){t&3&&a!==(a=`${e[0]} ${e[1]}`)&&o(s,"class",a)},i:c,o:c,d(e){e&&l(s)}}}function I(n,s,a){let{icon:e=""}=s,{classes:t=""}=s;return n.$$set=i=>{"icon"in i&&a(0,e=i.icon),"classes"in i&&a(1,t=i.classes)},[e,t]}class j extends f{constructor(s){super(),h(this,s,I,g,r,{icon:0,classes:1})}}export{j as U};
