import{j as m,R as u,r as y,u as A,Q as O,a as P,b as T}from"./vendor.85d36532.js";const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};j();const i=m.exports.jsx,l=m.exports.jsxs,p=JSON.parse(window.localStorage.getItem("cryptoAssets")),h=u.createContext(),k=u.createContext(),E=(e,o)=>{let n;switch(o.type){case"ADD_TOKEN":{n=[...e,o.payload];break}case"UPDATE_AMOUNT":{e.find(s=>s.token===o.payload.token).amount=o.payload.amount,n=[...e];break}default:{n=e;break}}return n};function D({children:e}){const[o,n]=u.useReducer(E,p!=null?p:[]);return i(h.Provider,{value:o,children:i(k.Provider,{value:n,children:e})})}function U(){const e=u.useContext(h);if(typeof e=="undefined")throw new Error("useCryptoState must be used within a CryptoProvider");return e}function w(){const e=u.useContext(k);if(typeof e=="undefined")throw new Error("useCryptoUpdater must be used within a CryptoProvider");return e}function I({token:e}){const o=w(),n=s=>{o({type:"UPDATE_AMOUNT",payload:{token:e.token,amount:Number.parseFloat(s.target.value)}})};return l("div",{className:"token",children:[l("span",{style:{margin:"20px"},children:[e.token,": ",e.amount]}),i("input",{name:"amount",value:e.amount,type:"number",onChange:n})]})}function R(){const[e,o]=y.exports.useState(!1),[n,s]=y.exports.useState(""),t=w(),r=U(),c=A("todos",async()=>{const a=await fetch("https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers");if(!a.ok)throw new Error("Network response was not ok");return a.json()}),C=()=>{t({type:"ADD_TOKEN",payload:{token:n,amount:0}})},g=()=>{e?(C(),s(""),o(!1)):o(!0)},v=()=>{if(window.localStorage.setItem("cryptoAssets",JSON.stringify(r)),!c.isSuccess){alert("api call failed");return}const a=c.data,d=r.reduce((x,f)=>{const S=`${f.token}inr`,b=a[S],N=f.amount*b.last;return x+N},0);return console.log(d),alert("Your crypto worth in WazirX platform is "+d),d};return l("div",{className:"App",children:[r.map(a=>i(I,{token:a},a.token)),e&&i("input",{name:"token",value:n,onChange:a=>s(a.target.value)}),l("button",{onClick:g,children:[" ",e?"Submit":"Add Token"," "]}),i("button",{onClick:v,children:" Calculate WazirX Value "}),"Source Code: https://github.com/gnsharma/wazirx-crypto-worth"]})}const z=new O;P.render(i(u.StrictMode,{children:i(T,{client:z,children:l(D,{children:[" ",i(R,{})]})})}),document.getElementById("root"));
