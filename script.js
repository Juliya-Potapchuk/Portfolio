          // EXPANSION PANEL
let list = document.querySelector('.list-education');
let headEdu = document.querySelector('.head-list');

headEdu.addEventListener('click', function () {
    list.classList.toggle('list-education-open');
});
