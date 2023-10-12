let menuToggle = document.querySelector("#toggle");
let navMenu = document.querySelector(".nav-menu");
console.log(navMenu);

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});
