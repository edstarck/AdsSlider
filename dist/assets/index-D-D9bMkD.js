(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const n=(e,t,i,s)=>({images:e,label:t,title:i,info:s}),u=(e,t=0)=>({slides:e,currentIndex:t}),_=`
  <svg width="16" height="16" viewBox="0 0 8 20" xmlns="http://www.w3.org/2000/svg">
    <circle fill="currentColor" cx="4" cy="3" r="1.75"></circle>
    <circle fill="currentColor" cx="4" cy="10" r="1.75"></circle>
    <circle fill="currentColor" cx="4" cy="17" r="1.75"></circle>
  </svg>`,a=e=>{console.log("%cDEBUG","color: #fff; font-weight: bold; background-color: #1a5e87; padding: 3px 6px; border-radius: 3px;",e)},g=e=>{e.querySelectorAll(".unit__info_icon").forEach(i=>{const s=i.nextElementSibling;s&&s.classList.contains("unit__info_content")&&(i.addEventListener("click",r=>{r.preventDefault(),r.stopPropagation(),s.classList.toggle("visible")}),document.addEventListener("click",r=>{const o=r.target;!i.contains(o)&&!s.contains(o)&&s.classList.remove("visible")}))})},m=()=>`
  <div class="swiper">
    <div class="swiper__container"></div>
    <button class="swiper__arrow swiper__arrow--prev"></button>
    <button class="swiper__arrow swiper__arrow--next"></button>
  </div>
`,v=e=>`
  <div class="swiper__item unit">
    <a class="unit__href" href="#" rel="nofollow" target="_blank">
      <picture class="unit__image">
        <source type="image/webp" srcset="${e.images[0]}">
        <source type="image/jpeg" srcset="${e.images[1]}">
        <img loading="eager" crossorigin="anonymous" src="${e.images[0]}" alt="${e.title}">
      </picture>
      <div class="unit__label">${e.label}</div>
      <div class="unit__content">
        <div class="unit__description">
          <h3 class="unit__text">${e.title}</h3>
        </div>
      </div>
    </a>
    <div class="unit__info">
      <div class="unit__info_icon">${_}</div>
      <div class="unit__info_content">${e.info}</div>
    </div>
  </div>
`,b=(e,t)=>{const i=t.querySelector(".swiper__container");i.innerHTML=e.slides.map(v).join("")},l=e=>{const t=e.querySelector(".swiper__container"),i=e.querySelector(".swiper__arrow--prev"),s=e.querySelector(".swiper__arrow--next");t.scrollLeft+t.clientWidth>=t.scrollWidth?s.classList.remove("swiper__arrow--visible"):s.classList.add("swiper__arrow--visible"),t.scrollLeft<=0?i.classList.remove("swiper__arrow--visible"):i.classList.add("swiper__arrow--visible")},h=e=>{const t=e.querySelector(".swiper__container"),i=parseInt(window.getComputedStyle(t.children[0]).width,10);t.scrollBy({left:i,behavior:"smooth"})},y=e=>{const t=e.querySelector(".swiper__container"),i=parseInt(window.getComputedStyle(t.children[0]).width,10);t.scrollBy({left:-i,behavior:"smooth"})},x=e=>{e.innerHTML=m(),g(e);const t=e.querySelector(".swiper__arrow--prev"),i=e.querySelector(".swiper__arrow--next"),s=e.querySelector(".swiper__container");t.addEventListener("click",()=>y(e)),i.addEventListener("click",()=>h(e)),s.addEventListener("scroll",()=>l(e)),new ResizeObserver(()=>{l(e),a("Resize window")}).observe(s),l(e),a("Swiper init")},p=(e,t)=>{x(t),b(e,t),l(t)},f=[n(["https://zn4.2xclick.ru/img/192x256/180/3556180_5aaa127c9f.webp","https://zn4.2xclick.ru/img/192x256/180/3556180_5aaa127c9f.jpg"],"Реклама","Таких всего 3. Самые гулящие женщины по знаку зодиака","Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2"),n(["https://zn4.2xclick.ru/img/192x256/602/3422602_52fcfec136.webp","https://zn4.2xclick.ru/img/192x256/602/3422602_52fcfec136.jpg"],"Реклама","Пьяная вдрызг Волочкова перешла границы: похабные кадры 14 января шокировали","Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2"),n(["https://i.cdnfimgs.com/auto/210x286/image/tesr/3945/945/672bc47a13478t1730921594r2257.jpg","https://i.cdnfimgs.com/auto/210x286/image/tesr/3945/945/672bc47a13478t1730921594r2257.jpg"],"Реклама","Показ нижнего белья пошел не по плану: только посмотрите видео","Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2"),n(["https://zn5.2xclick.ru/img/192x256/593/3552593_9c17d994a9.webp","https://zn5.2xclick.ru/img/192x256/593/3552593_9c17d994a9.jpg"],"Реклама","Знаки зодиака, которые будут купаться в деньгах в год Змеи","Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2"),n(["https://i.cdnfimgs.com/auto/210x286/image/tesr/6575/575/672e5b6fc1901t1731091311r9388.jpg","https://i.cdnfimgs.com/auto/210x286/image/tesr/6575/575/672e5b6fc1901t1731091311r9388.jpg"],"Реклама","Лиза Галкина подросла и запела: люди в шоке от исполнения - видео","Рекламодатель: OАО «KOLGED»<br />ИНН: 3242343675465<br />ERID: 26tewyweyu2")],L=e=>{(()=>{const i=document.getElementById(e);if(i){a(`Container found: ${e}`);const o=u(f);p(o,i);return}const s=new MutationObserver(o=>{for(const c of o)if(c.type==="childList"&&c.addedNodes.length>0){for(const d of c.addedNodes)if(d instanceof HTMLElement&&d.id===e){a(`Container found: ${e}`);const w=u(f);p(w,d),s.disconnect();return}}}),r={childList:!0,subtree:!0};s.observe(document.body,r)})()};L("containerId577575");
