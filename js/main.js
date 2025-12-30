// Ambil elemen header
const headerElement = document.querySelector(".header");
let headerHeight = headerElement.offsetHeight;

// Perbarui tinggi header jika ukuran layar berubah
window.addEventListener("resize", () => {
  headerHeight = headerElement.offsetHeight;
});

// Smooth scroll untuk navigation
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

// Theme Switcher Function
const themes = {
  cyber: {
    gradient: "#00ffcc, #00cc99",
    text: "#00ffcc",
  },
  sunset: {
    gradient: "#ff6b6b, #feca57",
    text: "#ff6b6b",
  },
  ocean: {
    gradient: "#4facfe, #00f2fe",
    text: "#4facfe",
  },
  purple: {
    gradient: "#a855f7, #ec4899",
    text: "#a855f7",
  },
};

function hexToRgb(hex) {
  const colors = {
    "#00ffcc": "0, 255, 204",
    "#ff6b6b": "255, 107, 107",
    "#4facfe": "79, 172, 254",
    "#a855f7": "168, 85, 247",
  };
  return colors[hex] || "0, 255, 204";
}

window.changeTheme = function (themeName) {
  const theme = themes[themeName];

  const style = document.createElement("style");
  style.textContent = `
    .services-section h2 {
      background: linear-gradient(135deg, ${theme.gradient}) !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      background-clip: text !important;
    }
    .service-card h3, .service-card:hover {
      color: ${theme.text} !important;
      border-color: ${theme.text} !important;
    }
    .service-card:hover {
      box-shadow: 0 20px 50px rgba(${hexToRgb(theme.text)}, 0.3) !important;
    }
    nav a, .hero-badge, .scroll-top, .theme-btn {
      color: ${theme.text} !important;
      border-color: ${theme.text} !important;
    }
    .scroll-progress {
      background: linear-gradient(90deg, ${theme.gradient}) !important;
    }
    .grid-lines {
      background-image: 
        linear-gradient(rgba(${hexToRgb(
          theme.text
        )}, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(${hexToRgb(
          theme.text
        )}, 0.1) 1px, transparent 1px) !important;
    }
  `;
  document.head.appendChild(style);
};

// 3D Mouse Tracking untuk Service Cards
document.addEventListener("DOMContentLoaded", function () {
  // Tunggu sebentar agar cards ter-render
  setTimeout(() => {
    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      });
    });
  }, 1000);
});
