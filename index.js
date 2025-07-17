import{a as d,S as m,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="51361185-26f33cacb8ace1f080d7f8aff",p="https://pixabay.com/api/";async function g(a){const t={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(p,{params:t})).data}let c;function h(a){const t=document.querySelector(".gallery"),o=a.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:l,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${r}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${s}</p>
          <p><b>Views</b> ${l}</p>
          <p><b>Comments</b> ${u}</p>
          <p><b>Downloads</b> ${f}</p>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function S(){document.querySelector(".loader").classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async a=>{a.preventDefault();const t=a.currentTarget.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}b(),L();try{const o=await g(t);if(o.hits.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
