document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})})
  const r=document.querySelectorAll('.noir-card,.feat,.pricing__card,.section-title,.section-tag')
  const o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal--visible');o.unobserve(e.target)}})},{threshold:0.1})
  r.forEach(e=>{e.classList.add('reveal');o.observe(e)})
  document.querySelectorAll('.showcase__grid').forEach(g=>{g.querySelectorAll('.noir-card').forEach((c,i)=>{c.style.transitionDelay=i*0.06+'s'})})
  const f=document.querySelector('.contact__form');if(f){f.addEventListener('submit',e=>{e.preventDefault();const i=f.querySelector('input').value.trim();if(i)window.open('mailto:dylan_shi@hotmail.com?subject=Noir Template Inquiry&body='+encodeURIComponent('Hi, I\'m interested in Noir.\n\nEmail: '+i),'_blank')})}
})