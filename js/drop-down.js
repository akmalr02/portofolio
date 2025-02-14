document.addEventListener("DOMContentLoaded", function () {
  // Data proyek
  const projects = [
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (278).png",
      title: "Halaman dashboard utama",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (280).png",
      title: "Halaman login",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (282).png",
      title: "Halaman dashboard setelah login",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (283).png",
      title: "Halaman voting",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (284).png",
      title: "Halaman edit kandidat",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (285).png",
      title: "Halaman tambah kandidat",
    },
    {
      category: "e-voting",
      src: "asset/img/e-voting/Screenshot (286).png",
      title: "Halaman ubah profil user",
    },

    //inventaris
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (287).png",
      title: "Halaman dashboard utama",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (288).png",
      title: "Halaman login",
    },

    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (290).png",
      title: "Halaman dashboard setelah login",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (291).png",
      title: "Halaman Pengelola user (Admin)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (292).png",
      title: "Halaman barang",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (293).png",
      title: "Halaman category",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (294).png",
      title: "Halaman laporan barang kosong (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (295).png",
      title: "Halaman laporan barang rusak (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (296).png",
      title: "Halaman laporan pemakaian barang (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (297).png",
      title: "Halaman laporan barang kosong (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (298).png",
      title: "Halaman laporan barang rusak (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (299).png",
      title: "Halaman pesanan barang",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (301).png",
      title: "Halaman profil",
    },
    {
      category: "inventaris",
      src: "asset/img/inventaris/Screenshot (302).png",
      title: "Tampilan ubah profil",
    },

    //Services
    {
      category: "logo",
      src: "asset/img/services/Screenshot (8).png",
      title: "Dashboard",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (9).png",
      title: "Login",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (10).png",
      title: "Registrasi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (11).png",
      title: "Dashboard Admin",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (12).png",
      title: "User list",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (13).png",
      title: "Daftar service",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (14).png",
      title: "Data absensi teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (15).png",
      title: "Halaman tiket",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (16).png",
      title: "Create user",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (17).png",
      title: "Data service user",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (18).png",
      title: "Data service user 2",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (19).png",
      title: "Semua laporan teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (20).png",
      title: "Laporan selesai teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (21).png",
      title: "Laporan penambahan teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (22).png",
      title: "Dashboard teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (23).png",
      title: "Laporan teknisi individu",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (24).png",
      title: "Absen teknisi",
    },
    {
      category: "logo",
      src: "asset/img/services/dashboard user.png",
      title: "Dashboard user",
    },
    {
      category: "logo",
      src: "asset/img/services/user create service.png",
      title: "Pengajuan services",
    },
    {
      category: "logo",
      src: "asset/img/services/Screenshot (26).png",
      title: "Logo Background",
    },
  ];

  const projectContainer = document.getElementById("project-container");
  const categoryButtons = document.querySelectorAll(".category");

  function loadProjects(category) {
    projectContainer.innerHTML = "";
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );

    filteredProjects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      projectDiv.innerHTML = `
        <img src="${project.src}" alt="${project.title}">
        <h2>${project.title}</h2>
      `;
      projectContainer.appendChild(projectDiv);
    });

    projectContainer.classList.add("active");
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      if (projectContainer.classList.contains("active")) {
        projectContainer.classList.remove("active");
        projectContainer.innerHTML = "";
      } else {
        loadProjects(category);
      }
    });
  });
});
