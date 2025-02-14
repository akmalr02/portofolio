function openModal(imgElement) {
  let modal = document.getElementById("imageModal");
  let modalImg = document.getElementById("modalImage");

  // Set gambar yang diklik ke dalam modal
  modalImg.src = imgElement.src;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
