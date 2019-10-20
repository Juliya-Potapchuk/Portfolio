let mobile = document.querySelector('.mobile');
let desktop = document.querySelector('.desktop');
let wrapper = document.querySelector('.wrapper');

mobile.addEventListener('click', function () {
    wrapper.classList.toggle('mobile-width');
    mobile.classList.toggle('display-none');
    desktop.classList.toggle('display-none');
});

desktop.addEventListener('click', function () {
    wrapper.classList.toggle('mobile-width');
    mobile.classList.toggle('display-none');
    desktop.classList.toggle('display-none');
});

