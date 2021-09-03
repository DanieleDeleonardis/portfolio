let hamburgerBtn = document.querySelector('#hamburgerBtn');
let header = document.querySelector('.header');
let menuMobile = document.querySelector('.header__menu_mobile');
let body = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    menuMobile.classList.toggle('header__menu_mobile_active');
    menuMobile.style.transition = "all 0.5s ease-in-out"
});


menuMobile.addEventListener("click", (e) => {
    if (menuMobile.contains(e.target)) {
    header.classList.toggle('open');
    menuMobile.classList.remove('header__menu_mobile_active');
    } 
});

