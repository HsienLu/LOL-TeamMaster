import{u as s,c as a,S as r}from"./main-6231738c.js";const c=document.querySelector(".headerAvatar"),e=document.querySelector(".jsHeaderLogin"),o=document.querySelector(".jsHeaderLogout");s?(e.classList.add("d-flex"),o.classList.add("d-none"),c.src=`./images/avatar/${a}.png`,document.querySelector(".jsLogout").addEventListener("click",t=>{t.preventDefault(),r.fire({icon:"success",title:"登出成功",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"}),localStorage.clear(),setTimeout(()=>{location.href="index.html"},2e3)})):(e.classList.add("d-none"),o.classList.add("d-flex"));
