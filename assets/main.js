document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMobile = document.querySelector('.nav-mobile');

    menuToggle.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });
    mobileMenuToggle.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });
});
