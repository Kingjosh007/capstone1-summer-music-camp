/* eslint-disable no-undef */

const menuBtn = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// Handle click event on menu button
menuBtn.addEventListener('click', () => {
  const menuBtnClasses = menuBtn.classList;
  menuBtnClasses.toggle('open');

  const classMenu = mobileMenu.classList;
  if (classMenu.contains('hide')) {
    classMenu.replace('hide', 'show');
    disableScroll();
  } else if (classMenu.contains('show')) {
    classMenu.replace('show', 'hide');
    enableScroll();
  }
  // Handle click event on links from mobile menu;
  const links = mobileMenu.querySelectorAll('a');
  links.forEach((l) => l.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    classMenu.replace('show', 'hide');
    enableScroll();
  }));
});