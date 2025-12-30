// Hamburger Menu Functionality
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Pastikan elemen ditemukan
if (hamburger && navbarNav) {
  // Toggle menu saat hamburger diklik
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navbarNav.classList.toggle("active");

    const isExpanded = navbarNav.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isExpanded);

    // Prevent body scroll saat menu terbuka
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Function untuk close menu
  function closeMenu() {
    navbarNav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
  }

  // Close menu saat klik link navigasi
  const navLinks = document.querySelectorAll(".tombol");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu saat klik social media links (mobile)
  const mobileSocialLinks = document.querySelectorAll(".mobile-social-icon");
  mobileSocialLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu saat klik theme button (mobile)
  const mobileThemeButtons = document.querySelectorAll(
    ".mobile-theme-grid .theme-btn"
  );
  mobileThemeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Delay close untuk melihat efek theme change
      setTimeout(closeMenu, 300);
    });
  });

  // Close menu saat klik di luar area menu
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu dengan ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navbarNav.classList.contains("active")) {
      closeMenu();
    }
  });
} else {
  console.error("Hamburger menu atau navbar tidak ditemukan!");
}

// Optional: Smooth scroll untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
