          // EXPANSION PANEL
let list = document.querySelector('.list-education');
let headEdu = document.querySelector('.head-list');

headEdu.addEventListener('click', function () {
    list.classList.toggle('list-education-open');
});

              // SWIPER
var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});
