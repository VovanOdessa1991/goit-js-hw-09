const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(function(){e.disabled=!0,timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.3d7e84f3.js.map