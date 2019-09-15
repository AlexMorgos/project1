const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu-opened');
});

const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-opened');
});
