let hamburgerBtn = document.querySelector('#hamburgerBtn');
let header = document.querySelector('.header');
let menuMobile = document.querySelector('.header__menu_mobile');
// let linkMenuMobile = document.querySelector('a[href="#"]');  

hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    menuMobile.classList.toggle('header__menu_mobile_active');
    menuMobile.style.transition = "all 0.5s ease"
})

linkMenuMobile.addEventListener('click', () => {
    // header.classList.toggle('open');
    // menuMobile.classList.toggle('header__menu_mobile_active');
    alert('we')
})


