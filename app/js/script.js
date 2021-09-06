let hamburgerBtn = document.querySelector('#hamburgerBtn');
let header = document.querySelector('.header');
let menuMobile = document.querySelector('.header__menu_mobile');
let menuMobileDisable = document.querySelector('.header__menu_mobile_disable');
let body = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    menuMobile.classList.toggle('header__menu_mobile_active');
    menuMobile.style.transition = "all 0.5s ease-in-out"
});


// menuMobile.addEventListener("click", (e) => {
//     if (menuMobile.contains(e.target)) {
//     header.classList.toggle('open');
//     menuMobile.classList.remove('header__menu_mobile_active');
//     } 
// });

body.addEventListener("click", (e) => {
    if (!e.target.classList.contains('header__menu_mobile_active')) {
        // menuMobile.classList.remove('header__menu_mobile_active');
        console.log('we');
    }
  });