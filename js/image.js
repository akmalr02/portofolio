// ========== MODAL FUNCTIONALITY ==========

// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Function to open modal
function openModal(element) {
  if (!modal || !modalImg) {
    console.error("Modal elements not found");
    return;
  }

  // Get image from clicked card
  const img = element.querySelector("img");
  if (!img) return;

  // Show modal with animation
  modal.classList.add("active");

  // Add loading state (optional)
  modal.classList.add("loading");

  // Set image source
  modalImg.src = img.src;
  modalImg.alt = img.alt;

  // Remove loading state when image loads
  modalImg.onload = function () {
    modal.classList.remove("loading");
  };

  // Prevent body scroll
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

// Function to close modal
function closeModal() {
  if (!modal) return;

  modal.classList.remove("active");

  // Enable body scroll
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";

  // Clear image source after animation
  setTimeout(() => {
    if (modalImg) {
      modalImg.src = "";
    }
  }, 300);
}

// Close modal when clicking close button
if (closeBtn) {
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
  });
}

// Close modal when clicking outside image
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Close modal when clicking on the image itself
if (modalImg) {
  modalImg.addEventListener("click", function (e) {
    e.stopPropagation();
    closeModal();
  });
}

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal && modal.classList.contains("active")) {
    closeModal();
  }
});

// Prevent image drag
if (modalImg) {
  modalImg.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
}

// ========== TOUCH GESTURES FOR MOBILE (OPTIONAL) ==========
let touchStartY = 0;
let touchEndY = 0;

if (modal) {
  modal.addEventListener(
    "touchstart",
    function (e) {
      touchStartY = e.changedTouches[0].screenY;
    },
    { passive: true }
  );

  modal.addEventListener(
    "touchend",
    function (e) {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    },
    { passive: true }
  );
}

function handleSwipe() {
  // Swipe down to close
  if (touchStartY < touchEndY && touchEndY - touchStartY > 100) {
    closeModal();
  }
}

// ========== AUTO-ATTACH TO CERTIFICATE CARDS ==========
document.addEventListener("DOMContentLoaded", function () {
  // Attach click handlers to all certificate cards
  const cards = document.querySelectorAll(".card2");
  cards.forEach((card) => {
    // Remove inline onclick if exists
    card.removeAttribute("onclick");

    // Add click event listener
    card.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(this);
    });

    // Add pointer cursor
    card.style.cursor = "pointer";
  });

  console.log(`Modal initialized for ${cards.length} certificate cards`);
});
