let hamburgerBtn = document.querySelector('#hamburgerBtn');
let header = document.querySelector('.header');
let menuMobile = document.querySelector('.header__menu_mobile');
let body = document.querySelector('body');
// let linkMenuMobile = document.querySelector('a[href="#"]');  

hamburgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    menuMobile.classList.toggle('header__menu_mobile_active');
    menuMobile.style.transition = "all 0.5s ease-in-out"
})


menuMobile.addEventListener("click", (e) => {
    if (menuMobile.contains(e.target)) {
    header.classList.toggle('open');
    menuMobile.classList.remove('header__menu_mobile_active');
    } 
  });

//####### Orologio #########
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    // let session = "AM";

    if (h == 0 ) h = 0;
    
    if(h > 12) {
        h = h - 12;
        // session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = `${h} : ${m} : ${s} `;
    document.querySelector("#clock").innerText = time;
    document.querySelector("#clock").textContent = time;

    setTimeout(showTime, 1000);
    
}

showTime();
//###############################
