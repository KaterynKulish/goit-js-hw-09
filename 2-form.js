import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t={email:"",message:""},s="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",m);function m(e){const l=a.elements;t.email=l.email.value.trim(),t.message=l.message.value.trim(),localStorage.setItem(s,JSON.stringify(t))}o();function o(){const e=JSON.parse(localStorage.getItem(s));console.log(e),e&&(t.email=e.email||"",t.message=e.message||"",a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")}a.addEventListener("submit",n);function n(e){if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}else a.reset(),localStorage.removeItem(s),console.log(t)}
//# sourceMappingURL=2-form.js.map
