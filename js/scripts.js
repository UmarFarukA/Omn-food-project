const mobileNavEl = document.querySelector(".nav-mobile-menu");
const headerEl = document.querySelector(".header");

mobileNavEl.addEventListener("click", function () {
  // console.log("Nav Clicked");
  // const openMenuEl = document.querySelector(".menu-open");
  headerEl.classList.toggle("open-menu");
});

const yearEl = document.querySelector(".copyright-year");
yearEl.textContent = new Date().getFullYear();
