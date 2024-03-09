import{i as u,S as d}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function f(o){const n=`https://pixabay.com/api/?key=42739945-76af92f6f6e2beeeb6ab8bd95&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>{throw new Error("Failed to fetch images")})}function i(o){u.error({title:"Error",message:o,position:"topRight"})}function h(){const o=document.querySelector(".gallery");o.innerHTML=""}function p(o){const s=document.querySelector(".gallery");o.forEach(r=>{const e=document.createElement("div");e.classList.add("card"),e.innerHTML=`
            <a href="${r.largeImageURL}" data-lightbox="image">
                <img src="${r.webformatURL}" alt="${r.tags}">
            </a>
            <div class="details">
                <span>Likes: ${r.likes}</span>
                <span>Views: ${r.views}</span>
                <span>Comments: ${r.comments}</span>
                <span>Downloads: ${r.downloads}</span>
            </div>
        `,s.appendChild(e)}),new d(".gallery a").refresh()}const c=document.querySelector("#search-form"),l=document.querySelector(".loader");c.addEventListener("submit",o=>{o.preventDefault();const s=c.querySelector("input").value.trim();if(!s){i("Please enter a search query");return}l.style.display="block",f(s).then(n=>{n.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(h(),p(n))}).catch(n=>{i(n.message)}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
