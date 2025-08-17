document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    // E-Voting Project
    {
      category: "e-voting",
      title: "E-Voting Kementerian Keuangan",
      keterangan:
        "A secure and efficient electronic voting system built with Laravel and Tailwind CSS, designed to streamline the voting process. Features include user authentication, candidate and voter management, real-time vote counting, and automated result recap. This project ensures transparency, security, and accessibility in the voting process.",
      link: (href = "https://github.com/sleepzc0de/EOM-EVOTING"),
      images: [
        {
          src: "asset/img/e-voting/Screenshot (278).png",
          title: "Halaman dashboard utama",
        },
        {
          src: "asset/img/e-voting/Screenshot (280).png",
          title: "Halaman login",
        },
        {
          src: "asset/img/e-voting/Screenshot (282).png",
          title: "Halaman dashboard setelah login",
        },
      ],
    },

    // Inventaris Project
    {
      category: "inventaris",
      title: "Sistem Inventaris",
      keterangan:
        "Inventory management system built with Laravel, Vue.js, and Tailwind CSS. Features include CRUD for stock items, role-based access (admin, manager, user), REST API integration, and detailed reports dashboard. This system helps organizations manage their inventory efficiently with real-time tracking and comprehensive reporting capabilities.",
      link: (href = "https://github.com/akmalr02/inventaris"),
      images: [
        {
          src: "asset/img/inventaris/Screenshot (287).png",
          title: "Halaman dashboard utama",
        },
        {
          src: "asset/img/inventaris/Screenshot (288).png",
          title: "Halaman login",
        },
        {
          src: "asset/img/inventaris/Screenshot (290).png",
          title: "Halaman dashboard setelah login",
        },
      ],
    },

    // Services Project
    {
      category: "logo",
      title: "Service Laptop",
      keterangan:
        "A web-based service request system built with Laravel and Bootstrap. Users can submit laptop service requests, track progress, and administrators can manage repair workflows. The system includes features like service status tracking, automated notifications, and comprehensive reporting for better service management.",
      link: (href = "https://github.com/akmalr02/service"),
      images: [
        {
          src: "asset/img/services/Screenshot (8).png",
          title: "Dashboard",
        },
        {
          src: "asset/img/services/Screenshot (9).png",
          title: "Login",
        },
        {
          src: "asset/img/services/Screenshot (10).png",
          title: "Registrasi",
        },
      ],
    },
  ];

  const projectContainer = document.getElementById("project-container");
  const categoryButtons = document.querySelectorAll(".category");

  // Fungsi untuk menampilkan pesan awal
  function showInitialMessage() {
    projectContainer.innerHTML = `
      <div class="initial-message">
        <div class="message-icon">🚀</div>
        <h3>Pilih Kategori Project</h3>
        <p>Klik salah satu kategori di atas untuk melihat detail project yang telah saya kerjakan</p>
      </div>
    `;
  }

  function loadProjects(category) {
    // Tambahkan loading state
    projectContainer.innerHTML = `
      <div class="project-loading">
        <span>Loading projects...</span>
      </div>
    `;

    // Simulasi loading delay untuk UX yang lebih baik
    setTimeout(() => {
      projectContainer.innerHTML = "";

      // Filter projects berdasarkan kategori
      const filteredProjects = projects.filter(
        (project) => project.category === category
      );

      if (filteredProjects.length === 0) {
        projectContainer.innerHTML =
          '<div class="no-projects">Tidak ada project untuk kategori ini</div>';
        return;
      }

      filteredProjects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        let content = `<h2>${project.title}</h2>`;

        // Tambahkan deskripsi jika ada
        if (project.keterangan) {
          content += `<div class="project-description">${project.keterangan}
          <a href="${project.link}" class="a-non" target="_blank">Link Github Project</a></div>`;
        }

        // Tambahkan gambar dalam layout horizontal jika ada
        if (project.images && project.images.length > 0) {
          content += '<div class="project-images">';
          project.images.forEach((image) => {
            content += `
              <div class="project-image-item">
                <img src="${image.src}" alt="${image.title}" loading="lazy">
                <div class="image-caption">${image.title}</div>
              </div>
            `;
          });
          content += "</div>";
        }

        projectDiv.innerHTML = content;
        projectContainer.appendChild(projectDiv);
      });

      projectContainer.classList.add("active");
    }, 300);
  }

  // Event listeners untuk tombol kategori
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class dari semua tombol
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class ke tombol yang diklik
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      // Add fade out effect sebelum load project baru
      projectContainer.classList.remove("active");

      // Delay untuk smooth transition
      setTimeout(() => {
        loadProjects(category);
      }, 100);
    });
  });

  // TIDAK AUTO LOAD - Tampilkan pesan awal saja
  showInitialMessage();

  // Tambahkan fungsi untuk image modal (opsional)
  function addImageClickHandlers() {
    const projectImages = document.querySelectorAll(".project-image-item img");
    projectImages.forEach((img) => {
      img.addEventListener("click", function () {
        // Jika sudah ada modal function dari image.js, gunakan itu
        if (typeof openModal === "function") {
          openModal(this);
        }
      });
    });
  }

  // Observer untuk menambahkan event handlers setelah images dimuat
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        addImageClickHandlers();
      }
    });
  });

  // Start observing
  observer.observe(projectContainer, { childList: true, subtree: true });
});
