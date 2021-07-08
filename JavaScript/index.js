const navLinks = document.querySelectorAll(".nav-link");
let isMobile = false;

if (window.screen.width <= 768) {
    isMobile = true;
}

document.querySelector("#menu-drop").addEventListener("click", mobileMenuToggle);

for (let link of navLinks) {
    link.addEventListener("click", mobileMenuToggle);
}

function mobileMenuToggle() {
    document.querySelector(".mobile-dropdown").classList.toggle("reveal-element");
}