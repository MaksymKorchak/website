"use strict";
const button = document.getElementsByClassName('header__menu-button')[0];
const menu = document.getElementsByClassName('header__section-menu')[0];

button.addEventListener('click', (ev) => {
  button.classList.toggle('active');
  menu.classList.toggle('mobile');
})

