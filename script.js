document.getElementById('year').textContent=new Date().getFullYear();
const t=document.querySelector('.nav-toggle'),n=document.querySelector('.nav');
t?.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');t?.setAttribute('aria-expanded','false');}));
