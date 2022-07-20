const headerNavBtn = document.querySelector('.header__nav-btn');
const headeerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
    headeerNavigation.classList.toggle('header__navigation_open');
})