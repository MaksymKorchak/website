"use strict";
const button = document.getElementsByClassName('header__menu-button')[0];
const menu = document.getElementsByClassName('header__section-menu')[0];

button.addEventListener('click', (ev) => {
  button.classList.toggle('active');
  menu.classList.toggle('mobile');
});

let galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
let galleryTop = new Swiper('.gallery-top', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});