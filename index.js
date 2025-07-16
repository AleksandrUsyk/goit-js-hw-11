import{a as u,S as d,i}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="YOUR_API_KEY",p="https://pixabay.com/api/";async function m(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(p,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new d(".gallery a");function h(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>👍 ${t.likes}</p>
        <p>👁️ ${t.views}</p>
        <p>💬 ${t.comments}</p>
        <p>⬇️ ${t.downloads}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const S=document.querySelector(".form");document.querySelector(".gallery");S.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o){g(),L();try{const t=await m(o);t.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(t.hits)}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{w()}}});
//# sourceMappingURL=index.js.map
