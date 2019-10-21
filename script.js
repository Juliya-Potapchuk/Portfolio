         // EXPANSION PANEL
let list = document.querySelector('.list-education');
let headEdu = document.querySelector('.head-list');

headEdu.addEventListener('click', function () {
    list.classList.toggle('list-education-open');
});

        // BUTTON DESCRIPTION
 let headProj = document.querySelector('.wrapper-head-project');
 let show = document.querySelector('.show-block');
 let hide = document.querySelector('.hide-block');
 let projTheyalow = document.querySelector('.proj-1');
 let projRepairDesign = document.querySelector('.proj-2');
 
 headProj.addEventListener('click', function () {
     show.classList.toggle('display-block');
     hide.classList.toggle('display-block');
     projTheyalow.classList.toggle('display-block');
     projRepairDesign.classList.toggle('display-block');
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