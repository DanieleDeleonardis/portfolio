let hamburgerBtn = document.querySelector('#hamburgerBtn');
let header = document.querySelector('.header');
let menuMobile = document.querySelector('.header__menu_mobile');
let menuMobileDisable = document.querySelector('.header__menu_mobile_disable');
let nav = document.querySelector(".nav");
let body = document.querySelector('body');
let prevScrollpos = window.pageYOffset;


hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    menuMobile.classList.toggle('header__menu_mobile_active');
    menuMobile.style.transition = "all 0.5s ease-in-out";
});

function scrollNav() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        nav.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

window.addEventListener('scroll', scrollNav);

// menuMobile.addEventListener("click", (e) => {
//     if (menuMobile.contains(e.target)) {
//     header.classList.toggle('open');
//     menuMobile.classList.remove('header__menu_mobile_active');
//     } 
// }); 

body.addEventListener("click", (e) => {
    if (!e.target.classList.contains('header__menu_mobile_active')) {
        // menuMobile.classList.remove('header__menu_mobile_active');
        // alert('we');
    }
  });

