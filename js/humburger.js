// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Ketika hamburger menu di-click
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar hamburger dan navbar untuk menutup menu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
