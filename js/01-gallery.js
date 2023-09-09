import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemsHTML = galleryItems.map(image => `
<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>

`).join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsHTML);

// Okno modalne, overlay, obraz w oknie modalnym 
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalImage = document.querySelector("#modalImage");

// Kliknięcie na miniaturę
galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedImage = event.target;

  // Warunek dla sprawdzenia czy kliknięty element to obraz
  if (clickedImage.nodeName === "IMG") {
    // Pobieranie zawartości data-source z klikniętego obrazka
    const originalImageUrl = clickedImage.dataset.source;

    // Pobieranie źródła obrazu wewnątrz okna modalnego
    modalImage.src = originalImageUrl;

    // Otwieranie okna modalnego
    modal.classList.add("is-open");
  }
});


// Obsługa kliknięcia na overlay lub obraz wewnątrz modala, aby go zamknąć
modalOverlay.addEventListener("click", closeModal);
modalImage.addEventListener("click", closeModal);

// Zamknięcie okna modalnego klawiszem "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("is-open");
  modalImage.src = "";
}

// Obsługa kliknięcia na miniaturkę
const galleryImages = document.querySelectorAll(".gallery__image");

galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    const originalImageUrl = image.dataset.source;

    // Pobieranie dużego zdjęcia z linka. basicLightbox
    const lightbox = basicLightbox.create(`
      <img src="${originalImageUrl}" width="800" height="600">
    `);

    // Otwarcie okna modalnego
    lightbox.show();
  });
});





