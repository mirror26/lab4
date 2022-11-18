let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header = document.querySelector('.header');
let header__list = document.querySelector('.header__list');
let height = header.clientHeight;
let menu = document.querySelector('.header__menu');
header__burger.onclick = function () {
   window.scrollTo({ top: 0, behavior: 'smooth' });
   menu.style.paddingBottom = height + "px";
   menu.style.top = height + "px";
   header__burger.classList.toggle('active');
   header_menu.classList.toggle('active');
   back.classList.toggle('lock');
}
let mediaQuery = window.matchMedia("(min-width: 767.98px)")
function handleTabletChange(e) {
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
   height = header.clientHeight;
   menu.style.top = height + "px";
   if (e.matches) {
      menu.style.paddingBottom = "0px";
   }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
const links = Array.from(header__list.children);
links.forEach((link) => {
   link.addEventListener("click", closeOnClick);
});
function closeOnClick() {
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector(".header").classList.add('brown');
   } else {
      document.querySelector(".header").classList.remove('brown');
   }
}