(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ELqm:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),b=n("Zttt"),l=n("QrHz"),c=n("qKvR");var o=function(){const{0:t,1:e}=Object(a.useState)(1),{0:n,1:b}=Object(a.useState)(),{0:o,1:s}=Object(a.useState)(!1),{0:i,1:r}=Object(a.useState)(!1),{0:u,1:d}=Object(a.useState)(!1),{data:j,loading:m}=Object(l.a)(),O="https://thekusuma.com?to="+encodeURIComponent(n),p=t=>{b(t.target.value)},f=async function(t,e){void 0===e&&(e=!1);try{await navigator.clipboard.writeText(t),r(!0),e&&alert("Berhasil")}catch(n){r(!1),alert("Failed to copy! :(")}};return Object(c.b)("div",null,Object(c.b)("h2",{className:"title"},"Generator of Link Invitation"),Object(c.b)("h3",{className:"title__sub"},"Dinda & Indra Wedding"),m&&Object(c.b)("h4",{style:{textAlign:"center"}},"Memuat data.."),!m&&Object(c.b)(a.Fragment,null,Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col-md-4 col-md-offset-4"},Object(c.b)("div",{class:"form-group"},Object(c.b)("label",{for:"exampleInputEmail1"},"Tipe Link"),Object(c.b)("select",{class:"form-control",value:t,onChange:t=>{e(parseInt(t.target.value,10)),s(!1)}},Object(c.b)("option",{value:1},"Individu"),Object(c.b)("option",{value:2},"Semua Undangan"))),1===t?Object(c.b)(a.Fragment,null,Object(c.b)("div",{class:"form-group"},Object(c.b)("label",{for:"exampleInputEmail1"},"Nama Tamu"),Object(c.b)("input",{value:n,onChange:p,type:"text",class:"form-control",placeholder:"Nama tamu.."})),Object(c.b)("button",{type:"submit",class:"btn btn-primary",onClick:()=>s(!0)},"Generate Link")):2===t?Object(c.b)(a.Fragment,null,Object(c.b)("div",{class:"checkbox"},Object(c.b)("label",null,Object(c.b)("input",{type:"checkbox",checked:u,onClick:()=>d(!u)})," Tipe Invitation (Datang offline)")),Object(c.b)("button",{type:"submit",class:"btn btn-primary",onClick:()=>s(!0)},"Generate Link")):void 0)),Object(c.b)("div",{className:"row"},o?1===t?Object(c.b)("div",{className:"col-md-4 col-md-offset-4"},Object(c.b)("div",{class:"alert alert-success",role:"alert",style:{marginTop:"20px"}},Object(c.b)("strong",null,"Berhasil!")," ",Object(c.b)("br",null),Object(c.b)("a",{href:O,target:"_blank",rel:"noreferrer",style:{color:"green",textDecoration:"underline"}},O),Object(c.b)("button",{type:"button",className:"btn btn-default btn-xs",style:{marginLeft:"8px"},onClick:()=>f(O)},i?"Tersalin":"Salin"))):2===t?Object(c.b)("div",{className:"col-md-10 col-md-offset-1",style:{marginTop:"28px"}},Object(c.b)("div",{class:"table-responsive"},Object(c.b)("table",{class:"table"},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"No"),Object(c.b)("th",null,"Nama"),Object(c.b)("th",null,"Keterangan"),Object(c.b)("th",null,"Link"))),Object(c.b)("tbody",null,j.map((t,e)=>{const n=u?"&type=invitation&code="+t.code:"",a=`https://thekusuma.com?to=${encodeURIComponent(t.name)}${n}`;return Object(c.b)("tr",null,Object(c.b)("td",null,e+1),Object(c.b)("td",null,t.name),Object(c.b)("td",null,t.desc),Object(c.b)("td",null,Object(c.b)("a",{href:a,target:"_blank",rel:"noreferrer",style:{textDecoration:"underline"}},a),Object(c.b)("button",{className:"btn btn-default btn-sm",style:{fontSize:"12px",padding:"4px 8px",marginLeft:"4px"},onClick:()=>f(a,!0)},"copy")))}))))):void 0:null)))};const s={name:"1djhtsf",styles:"padding:24px 8px 8px 8px;.title{text-align:center;}.title__sub{text-align:center;font-family:'Cookie',cursive;font-size:3em;}"};e.default=function(){return Object(c.b)(b.a,null,Object(c.b)("div",{css:s},Object(c.b)(o,null)))}}}]);
//# sourceMappingURL=component---src-pages-generate-link-js-1699afe47f13c4571124.js.map