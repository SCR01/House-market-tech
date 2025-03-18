"use strict";(self.webpackChunkhouse_market_landing=self.webpackChunkhouse_market_landing||[]).push([[357],{357:(e,s,r)=>{r.r(s),r.d(s,{default:()=>o});var n=r(43),a=r(843);const t=(e,s)=>{const[r,a]=(0,n.useState)(e);return(0,n.useEffect)((()=>{const r=setTimeout((()=>{a(e)}),s);return()=>{clearTimeout(r)}}),[e,s]),r};class c{constructor(){this.children={},this.isEndOfWord=!1,this.userData=null}}const i=class{constructor(){this.root=new c}insert(e,s){if(!e)return;e=e.toLowerCase();let r=this.root;for(let n=0;n<e.length;n++){const s=e[n];r.children[s]||(r.children[s]=new c),r=r.children[s]}r.isEndOfWord=!0,r.userData=s}searchPrefix(e){if(!e)return[];e=e.toLowerCase();let s=this.root;for(let n=0;n<e.length;n++){const r=e[n];if(!s.children[r])return[];s=s.children[r]}const r=[];return this._collectWords(s,r),r}_collectWords(e,s){e.isEndOfWord&&s.push(e.userData);for(const r in e.children)this._collectWords(e.children[r],s)}};var l=r(579);const o=()=>{const[e,s]=(0,n.useState)(""),[r,c]=(0,n.useState)([]),[o,h]=(0,n.useState)([]),[d,u]=(0,n.useState)(!1),[m,f]=(0,n.useState)(null),x=t(e,300),j=(0,n.useRef)(null),[p,g]=(0,a.Wx)({triggerOnce:!0,threshold:.1});return(0,n.useEffect)((()=>{(async()=>{u(!0);try{const e=await fetch("https://jsonplaceholder.typicode.com/users");if(!e.ok)throw new Error("Failed to fetch users");const s=await e.json();c(s),h(s);const r=new i;s.forEach((e=>{r.insert(e.name,e),r.insert(e.username,e),r.insert(e.email,e)})),j.current=r}catch(e){f(e.message),console.error("Error fetching users:",e)}finally{u(!1)}})()}),[]),(0,n.useEffect)((()=>{if(x&&j.current){const e=j.current.searchPrefix(x),s=Array.from(new Map(e.map((e=>[e.id,e]))).values());h(s)}else h(r)}),[x,r]),(0,l.jsx)("section",{id:"users",className:"user-search-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"section-header",children:[(0,l.jsx)("h2",{children:"Our Community Members"}),(0,l.jsx)("p",{children:"Search and connect with our community of homeowners and property experts"})]}),(0,l.jsxs)("div",{className:"search-container",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search users by name, username, or email...",value:e,onChange:e=>s(e.target.value),className:"search-input"}),(0,l.jsx)("div",{className:"search-icon",children:"\ud83d\udd0d"})]}),d&&(0,l.jsx)("div",{className:"loading-message",children:"Loading users..."}),m&&(0,l.jsxs)("div",{className:"error-message",children:["Error: ",m]}),!d&&!m&&(0,l.jsx)("div",{ref:p,className:"users-grid "+(g?"fade-in":""),children:o.length>0?o.map((e=>(0,l.jsxs)("div",{className:"user-card",children:[(0,l.jsx)("div",{className:"user-avatar",children:(0,l.jsx)("img",{src:`https://ui-avatars.com/api/?name=${e.name}&background=random&color=fff`,alt:e.name,loading:"lazy"})}),(0,l.jsx)("h3",{className:"user-name",children:e.name}),(0,l.jsxs)("p",{className:"user-username",children:["@",e.username]}),(0,l.jsx)("p",{className:"user-email",children:e.email}),(0,l.jsxs)("div",{className:"user-details",children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Phone:"})," ",e.phone]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Website:"})," ",e.website]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Company:"})," ",e.company.name]})]}),(0,l.jsx)("button",{className:"user-contact-btn",children:"Contact"})]},e.id))):(0,l.jsxs)("div",{className:"no-results",children:['No users found matching "',e,'"']})})]})})}}}]);
//# sourceMappingURL=357.e9e4ee61.chunk.js.map