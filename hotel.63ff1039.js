var e;window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="team-slider"]');e&&e.forEach((e=>{let t=e.querySelector(".swiper-btn-prev"),o=e.querySelector(".swiper-btn-next");new Swiper(e.querySelector(".swiper"),{speed:1500,slidesPerView:2,spaceBetween:40,navigation:{nextEl:o,prevEl:t},on:{transitionStart:function(){let t=this.previousIndex,o=e.getElementsByClassName("swiper-slide")[t];o&&setTimeout((function(){o.classList.remove("is-play")}),1e3)},transitionEnd:function(){let t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}},breakpoints:{320:{slidesPerView:1.2,spaceBetween:25},1024:{slidesPerView:2,spaceBetween:40}}})}))}),!1),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),s=0;o[s]&&o[s]!==t;)++s;return Boolean(o[s])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-backdrop-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.body.classList.add("modal-open");var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){var o=this.closest(".modal");document.body.classList.remove("modal-open"),o.classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-backdrop-modal").classList.remove("active"),document.body.classList.remove("modal-open"))}),!1),t.addEventListener("click",(function(e){e.target===e.currentTarget&&(document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open"))}))}));
//# sourceMappingURL=hotel.63ff1039.js.map
