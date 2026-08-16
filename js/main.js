
const button = document.querySelector(".header__nav-close");
const navMenu = document.querySelector(".header__nav-container");
const overlay = document.querySelector(".sidebar-overlay");
button.addEventListener("click", () => {
    navMenu.style.display = "none";
})
const hamburgerButton = document.querySelector(".header__main-hamburger");
hamburgerButton.addEventListener("click", () => {
    navMenu.style.display = "flex";
})

overlay.addEventListener("click", () => {
    navMenu.style.display = "none";
})