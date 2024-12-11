document.addEventListener("DOMContentLoaded", function () {
  // Data proyek
  const projects = [
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (278).png",
      title: "Halaman dashboard utama",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (280).png",
      title: "Halaman login",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (282).png",
      title: "Halaman dashboard setelah login",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (283).png",
      title: "Halaman voting",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (284).png",
      title: "Halaman edit kandidat",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (285).png",
      title: "Halaman tambah kandidat",
    },
    {
      category: "e-voting",
      src: "img/e-voting/Screenshot (286).png",
      title: "Halaman ubah profil user",
    },

    //inventaris
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (287).png",
      title: "Halaman dashboard utama",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (288).png",
      title: "Halaman login",
    },

    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (290).png",
      title: "Halaman dashboard setelah login",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (291).png",
      title: "Halaman Pengelola user (Admin)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (292).png",
      title: "Halaman barang",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (293).png",
      title: "Halaman category",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (294).png",
      title: "Halaman laporan barang kosong (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (295).png",
      title: "Halaman laporan barang rusak (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (296).png",
      title: "Halaman laporan pemakaian barang (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (297).png",
      title: "Halaman laporan barang kosong (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (298).png",
      title: "Halaman laporan barang rusak (Admin & pengelola)",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (299).png",
      title: "Halaman pesanan barang",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (301).png",
      title: "Halaman profil",
    },
    {
      category: "inventaris",
      src: "img/inventaris/Screenshot (302).png",
      title: "Tampilan ubah profil",
    },

    //lain lain
    { category: "logo", src: "img/logo/akmal.jpg", title: "Logo Akmal" },
    { category: "logo", src: "img/logo/bg.jpg", title: "Logo Background" },
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

  // Tambahkan tombol "Tutup" hanya jika container belum memiliki tombol ini
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
