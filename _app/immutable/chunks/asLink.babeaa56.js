const e={Any:"Any",Document:"Document",Media:"Media",Web:"Web"},r=l=>{var a;return{link_type:e.Document,id:l.id,uid:l.uid||void 0,type:l.type,tags:l.tags,lang:l.lang,url:l.url==null?void 0:l.url,slug:(a=l.slugs)==null?void 0:a[0],...l.data&&Object.keys(l.data).length>0?{data:l.data}:{}}},s=(l,...a)=>{if(!l)return null;const n="link_type"in l?l:r(l),[t]=a;let u;switch(typeof t=="function"||t==null?u={linkResolver:t}:u={...t},n.link_type){case e.Media:case e.Web:return"url"in n?n.url:null;case e.Document:{if("id"in n&&u.linkResolver){const d=u.linkResolver(n);if(d!=null)return d}return"url"in n&&n.url?n.url:null}case e.Any:default:return null}};export{s as a};
