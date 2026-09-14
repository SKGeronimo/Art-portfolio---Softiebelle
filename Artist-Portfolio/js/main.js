const filterButtons = document.querySelectorAll(".filter-button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Remove active class from all buttons
    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    // Make clicked button active
    button.classList.add("active");

    // Get selected category
    const category = button.dataset.category;

    // Show or hide artwork
    galleryItems.forEach(function(item) {

      if (category === "all" || item.dataset.category === category) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }

    });

  });

});

// =========================
// FULL SCREEN IMAGE VIEWER
// =========================

const artworkImages = document.querySelectorAll(".art-image");

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");


/* Open the lightbox */

artworkImages.forEach(function(image) {

  image.addEventListener("click", function() {

    lightboxImage.src = image.src;

    lightboxImage.alt = image.alt;

    lightbox.classList.add("show");

  });

});


/* Close using X */

lightboxClose.addEventListener("click", function() {

  lightbox.classList.remove("show");

});


/* Close by clicking outside the artwork */

lightbox.addEventListener("click", function(event) {

  if (event.target === lightbox) {

    lightbox.classList.remove("show");

  }

});