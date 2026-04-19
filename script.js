const btns=document.querySelectorAll('.btn');
btns.forEach(btn=>{
btn.addEventListener('mouseenter',()=>btn.style.transform='scale(1.05)');
btn.addEventListener('mouseleave',()=>btn.style.transform='scale(1)');
});

window.addEventListener('scroll',()=>{
const cards=document.querySelectorAll('.card');
cards.forEach(card=>{
const top=card.getBoundingClientRect().top;
if(top<window.innerHeight-100){
card.style.opacity='1';
card.style.transform='translateY(0)';
}
});
});
