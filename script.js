
 new Swiper('.card-wrapper', {
    // Optional parameters

    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      0:{
        slidesPerView: 1
      } ,
      768:{
        slidesPerView: 2
      } ,
      1042:{
        slidesPerView: 3
      } ,
    }
  
  });
  let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });
  
