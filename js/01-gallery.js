import { galleryItems } from './gallery-items.js';

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

// Obsługa kliknięcia na overlay lub obraz wewnątrz modala, aby go zamknąć
modalOverlay.addEventListener("click", closeModal);

function openModal(originalImageUrl) {
  // Pobieranie źródła obrazu wewnątrz okna modalnego
  modalImage.innerHTML = `<img src="${originalImageUrl}" width="800" height="600">`;

  // Otwieranie okna modalnego
  modal.classList.add("is-open");

  // Dodajemy słuchacza klawiatury tylko, gdy modal jest otwarty
  document.addEventListener("keydown", keyboardListener);
}

function closeModal() {
  modal.classList.remove("is-open");
  modalImage.innerHTML = "";

  // Usuwamy słuchacza klawiatury, gdy modal jest zamknięty
  document.removeEventListener("keydown", keyboardListener);
}

function keyboardListener(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Obsługa kliknięcia na miniaturkę
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedImage = event.target;
  if (clickedImage.nodeName === "IMG") {
    const originalImageUrl = clickedImage.dataset.source;
    // Otwarcie okna modalnego
    openModal(originalImageUrl);
  }
});
