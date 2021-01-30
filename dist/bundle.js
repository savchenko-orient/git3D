(()=>{"use strict";var t,e,n,o,c,r,a,i,s,l,u,d,m,v,f,y,g;m=document.querySelector("#timer-hours"),v=document.querySelector("#timer-minutes"),f=document.querySelector("#timer-seconds"),y=document.querySelector("#timer"),g=function(t){return t<=9&&(t="0"+t),t},function t(){var e,n,o,c=(e=(new Date("8, february, 2021").getTime()-(new Date).getTime())/1e3,n=Math.floor(e%60),o=Math.floor(e/60%60),{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:n});m.textContent=g(c.hours),v.textContent=g(c.minutes),f.textContent=g(c.seconds),c.timeRemaining>0?setTimeout(t,1e3):(y.style.color="red",m.textContent="00",v.textContent="00",f.textContent="00")}(),l=document.querySelector(".menu"),u=document.querySelector("menu"),d=function(){u.classList.toggle("active-menu")},l.addEventListener("click",d),u.addEventListener("click",(function(t){var e=t.target;e.classList.contains("close-btn")&&d(),e.closest("li")&&d()})),c=document.querySelector(".popup"),r=document.querySelectorAll(".popup-btn"),a=document.querySelector(".popup-close"),i=0,s=1,r.forEach((function(t){t.addEventListener("click",(function(){var t;document.documentElement.clientWidth>768?(i=0,c.style.display="block",t=requestAnimationFrame((function e(){t=requestAnimationFrame(e),(i+=.03)<1.01?c.style.opacity=i:i>=1&&cancelAnimationFrame(t)}))):(c.style.display="block",c.style.opacity=1)}))})),a.addEventListener("click",(function(){var t;document.documentElement.clientWidth>768?(s=1,t=requestAnimationFrame((function e(){t=requestAnimationFrame(e),(s-=.03)>.01?c.style.opacity=s:(c.style.display="none",cancelAnimationFrame(t))}))):(c.style.display="none",c.style.opacity=0)})),e=document.querySelector(".service-header"),n=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab"),e.addEventListener("click",(function(t){var e=t.target;(e=e.closest(".service-header-tab"))&&n.forEach((function(t,c){t===e&&function(t){for(var e=0;e<o.length;e++)t===e?(n[e].classList.add("active"),o[e].classList.remove("d-none")):(o[e].classList.add("d-none"),n[e].classList.remove("active"))}(c)}))})),function(){var t,e,n=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots"),c=document.querySelector(".portfolio-content"),r=0;!function(){for(var t=0;t<=n.length-1;t++){var c=document.createElement("li");c.classList.add("dot"),0===t&&c.classList.add("dot-active"),o.append(c)}e=document.querySelectorAll(".dot")}();var a=function(t,e,n){t[e].classList.remove(n)},i=function(t,e,n){t[e].classList.add(n)},s=function(){a(n,r,"portfolio-item-active"),a(e,r,"dot-active"),++r>=n.length&&(r=0),i(n,r,"portfolio-item-active"),i(e,r,"dot-active")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;t=setInterval(s,e)};c.addEventListener("click",(function(t){t.preventDefault();var o=t.target;o.matches(".portfolio-btn, .dot")&&(a(n,r,"portfolio-item-active"),a(e,r,"dot-active"),o.matches("#arrow-right")?r++:o.matches("#arrow-left")?r--:o.matches(".dot")&&e.forEach((function(t,e){t===o&&(r=e)})),r>=n.length&&(r=0),r<0&&(r=n.length-1),i(n,r,"portfolio-item-active"),i(e,r,"dot-active"))})),c.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(t)})),c.addEventListener("mouseout",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&l()})),l(1500)}(),(t=document.querySelector("#command .row")).addEventListener("mouseover",(function(t){if(t.target.classList.contains("command__photo")){var e=t.target.src;t.target.src=t.target.dataset.img,t.target.dataset.img=e}})),t.addEventListener("mouseout",(function(t){if(t.target.classList.contains("command__photo")){var e=t.target.src;t.target.src=t.target.dataset.img,t.target.dataset.img=e}})),document.querySelector(".calc-block").addEventListener("input",(function(t){"INPUT"===t.target.tagName&&(t.target.value=t.target.value.replace(/\D/g,""))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),r=document.getElementById("total"),a=document.querySelector(".calc-block"),i=function(){var a=0,i=1,s=1,l=e.options[e.selectedIndex].value,u=+n.value;c.value>1&&(i+=(c.value-1)/10),o.value&&o.value<5?s*=2:o.value&&o.value<10&&(s*=1.5),l&&u&&(a=t*l*u*i*s),r.textContent=a};a.addEventListener("change",(function(t){var e=t.target;(e.matches("select")||e.matches("input"))&&i()}))}(100),function(){var t=document.createElement("div");t.style.cssText="font-size: 18px",t.style.color="#fff";document.body.addEventListener("submit",(function(e){!function(e){e.preventDefault(),e.target.appendChild(t),t.textContent="Загрузка";var n=new FormData(e.target),o={};n.forEach((function(t,e){o[e]=t})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(o).then((function(n){if(200!==n.status)throw new Error("status network not 200");t.textContent="Спасибо! Мы скоро с вами свяжемся.",e.target.reset()})).catch((function(e){t.textContent="Что то пошло не так",console.error(e)}))}(e)}))}()})();