const toogle = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

toogle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})