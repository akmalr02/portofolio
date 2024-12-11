// Ambil elemen header
const headerElement = document.querySelector(".header");
let headerHeight = headerElement.offsetHeight;

// Perbarui tinggi header jika ukuran layar berubah
window.addEventListener("resize", () => {
  headerHeight = headerElement.offsetHeight;
});

document.querySelectorAll(".tombol-carousel a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.warn(`Elemen dengan ID "${targetId}" tidak ditemukan.`);
      return;
    }

    // Scroll ke elemen target dengan memperhitungkan tinggi header
    window.scrollTo({
      top: targetElement.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });
});
