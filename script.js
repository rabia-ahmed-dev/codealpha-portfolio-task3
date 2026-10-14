// Toggle responsive mobile navigation menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Close menu when clicking a navbar link on mobile
window.onscroll = () => {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};