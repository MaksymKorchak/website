const goTopBtn = document.querySelector('.scrollup');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    const scrolled = window.pageYOffset;
    const grids = document.documentElement.clientHeight;

    if (scrolled > grids) {
        goTopBtn.classList.add('scrollup-show');
    }
    if (scrolled < grids) {
        goTopBtn.classList.remove('scrollup-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(backToTop, 0);
    }
}
