import{a as v,S as L,i as p}from"./assets/vendor-cf86d4d0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();async function y(e){e=encodeURIComponent(e);const r="43812511-1ad98af5969ab2e5e6977c36e",s=new URLSearchParams({per_page:c,page:l,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await v.get(`https://pixabay.com/api/?${s}&q=${e}`)).data}const b=document.querySelector(".gallery");let m;function h(e){if(!Array.isArray(e)){console.error("Expected an array, but received:",e);return}const r=e.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");b.insertAdjacentHTML("beforeend",r),m?m.refresh():m=new L(".gallery a",{captionsData:"alt",captionDelay:250})}const f=document.querySelector("ul.gallery");let n="";const g=document.getElementById("search-input");let l=1,c=15;const i=document.getElementById("load-button"),o=document.getElementById("loader");g.addEventListener("input",e=>{n=g.value.trim(),f.innerHTML="",i.className="visually-hidden",o.className="visually-hidden"});const E=document.getElementById("search-button");E.addEventListener("click",async()=>{f.innerHTML="",o.className="loader",l=1,c=15;try{if(n){i.className="";const e=await y(n,l,c);h(e.hits),o.className="loader visually-hidden",l+=1}}catch(e){i.className="visually-hidden",console.log(e),p.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});i.addEventListener("click",async()=>{o.className="loader";try{if(n){const e=await y(n,l,c),r=e.totalHits;if(document.querySelectorAll(".gallery-item").length>=r)return i.className="visually-hidden",o.className="visually-hidden",p.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});console.log("Fetched posts:",e),h(e.hits),o.className="loader visually-hidden",l+=1}}catch(e){console.log(e),p.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
