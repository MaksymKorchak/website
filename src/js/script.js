"use strict";
const button = document.getElementsByClassName('header__menu-button')[0];
const menu = document.getElementsByClassName('header__section-menu')[0];

button.addEventListener('click', (ev) => {
  button.classList.toggle('active');
  menu.classList.toggle('mobile');
});

let swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  speed: 10000,
  autoplay: {
    delay: 5,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
