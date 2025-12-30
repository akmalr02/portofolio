document.addEventListener("DOMContentLoaded", function () {
  // Loading Screen Animation
  let loadingPercentage = 0;
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingPercentageEl = document.getElementById("loadingPercentage");

  if (loadingScreen && loadingPercentageEl) {
    const loadingInterval = setInterval(() => {
      loadingPercentage += Math.random() * 15;
      if (loadingPercentage >= 100) {
        loadingPercentage = 100;
        clearInterval(loadingInterval);
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
        }, 500);
      }
      loadingPercentageEl.textContent = Math.floor(loadingPercentage) + "%";
    }, 200);
  }

  // Create stars with different parallax layers
  function createStars() {
    const bg = document.getElementById("spaceBg");
    if (!bg) return;
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDuration = Math.random() * 3 + 2 + "s";
      star.style.animationDelay = Math.random() * 3 + "s";

      const layer = Math.random();
      star.setAttribute("data-parallax", layer.toFixed(2));

      bg.appendChild(star);
    }
  }

  // Create glowing orbs
  function createOrbs() {
    const bg = document.getElementById("spaceBg");
    if (!bg) return;
    const colors = ["#00ffcc", "#00cc99", "#00ff88", "#33ffcc"];

    for (let i = 0; i < 5; i++) {
      const orb = document.createElement("div");
      orb.className = "orb";
      const size = Math.random() * 300 + 200;
      orb.style.width = size + "px";
      orb.style.height = size + "px";
      orb.style.background = colors[Math.floor(Math.random() * colors.length)];
      orb.style.left = Math.random() * 100 + "%";
      orb.style.top = Math.random() * 100 + "%";
      orb.style.animationDuration = Math.random() * 10 + 10 + "s";
      orb.style.animationDelay = Math.random() * 5 + "s";
      bg.appendChild(orb);
    }
  }

  // Interactive Particle System
  const canvas = document.getElementById("particleCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 204, 0.5)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 204, ${0.2 - distance / 500})`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  // Parallax Effect
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;

    // Parallax for stars
    document.querySelectorAll(".star").forEach((star) => {
      const speed = star.getAttribute("data-parallax") || 0.5;
      star.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const progressBar = document.getElementById("scrollProgress");
    if (progressBar) {
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    }
  });

  // Scroll Animations - IntersectionObserver
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Number counter animation (untuk stat cards jika ada)
        const counter = entry.target.querySelector("[data-count]");
        if (counter && !counter.classList.contains("counted")) {
          counter.classList.add("counted");
          const target = parseInt(counter.getAttribute("data-count"));
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + (target === 98 ? "%" : "+");
              clearInterval(timer);
            } else {
              counter.textContent =
                Math.floor(current) + (target === 98 ? "%" : "+");
            }
          }, 30);
        }
      }
    });
  }, observerOptions);

  // Observe elements dengan attribute [data-scroll]
  document
    .querySelectorAll("[data-scroll]")
    .forEach((el) => observer.observe(el));

  // Observe service cards untuk scroll animation
  document
    .querySelectorAll(".service-card")
    .forEach((el) => observer.observe(el));

  // Observe stat cards jika ada
  document.querySelectorAll(".stat-card").forEach((el) => observer.observe(el));

  // Scroll to Top Button
  window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  });

  // Scroll to top function
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Initialize
  createStars();
  createOrbs();

  // Theme Switcher
  const themes = {
    cyber: {
      gradient: "#00ffcc, #00cc99",
      text: "#00ffcc",
      gridColor: "0, 255, 204",
    },
    sunset: {
      gradient: "#ff6b6b, #feca57",
      text: "#ff6b6b",
      gridColor: "255, 107, 107",
    },
    ocean: {
      gradient: "#4facfe, #00f2fe",
      text: "#4facfe",
      gridColor: "79, 172, 254",
    },
    purple: {
      gradient: "#a855f7, #ec4899",
      text: "#a855f7",
      gridColor: "168, 85, 247",
    },
  };

  window.changeTheme = function (themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // Update CSS custom properties
    document.documentElement.style.setProperty("--primery", theme.text);
    document.documentElement.style.setProperty("--secondary", theme.text);

    // Update grid lines color
    const gridLines = document.querySelector(".grid-lines");
    if (gridLines) {
      gridLines.style.backgroundImage = `
        linear-gradient(rgba(${theme.gridColor}, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(${theme.gridColor}, 0.1) 1px, transparent 1px)
      `;
    }

    // Update orbs colors
    const orbs = document.querySelectorAll(".orb");
    const themeColors = {
      cyber: ["#00ffcc", "#00cc99", "#00ff88", "#33ffcc"],
      sunset: ["#ff6b6b", "#feca57", "#ff8c42", "#ffd93d"],
      ocean: ["#4facfe", "#00f2fe", "#43e97b", "#38f9d7"],
      purple: ["#a855f7", "#ec4899", "#f472b6", "#c084fc"],
    };

    orbs.forEach((orb, index) => {
      if (themeColors[themeName]) {
        orb.style.background =
          themeColors[themeName][index % themeColors[themeName].length];
      }
    });

    // Add visual feedback for theme button
    const themeBtn = window.event ? window.event.target : null;
    if (themeBtn && themeBtn.classList.contains("theme-btn")) {
      themeBtn.style.transform = "scale(1.2)";
      setTimeout(() => {
        themeBtn.style.transform = "scale(1)";
      }, 200);
    }
  };

  // 3D Mouse Tracking untuk Service Cards
  // Tunggu sebentar agar service cards sudah ter-render
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
  }, 500);

  // Add cursor glow effect (optional)
  const cursorGlow = document.createElement("div");
  cursorGlow.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 204, 0.4), transparent);
    pointer-events: none;
    z-index: 9997;
    filter: blur(10px);
    transform: translate(-50%, -50%);
    display: none;
  `;
  document.body.appendChild(cursorGlow);

  let cursorTimeout;
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.display = "block";
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

    clearTimeout(cursorTimeout);
    cursorTimeout = setTimeout(() => {
      cursorGlow.style.display = "none";
    }, 100);
  });
});
