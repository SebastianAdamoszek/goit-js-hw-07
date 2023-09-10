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

// Obsługa kliknięcia na miniaturkę
galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  const clickedImage = event.target;

  // Warunek dla sprawdzenia czy kliknięty element to obraz
  if (clickedImage.nodeName === "IMG") {
    // Pobieranie zawartości data-source z klikniętego obrazka
    const originalImageUrl = clickedImage.dataset.source;

    // Tworzenie instancji SimpleLightbox
    const lightbox = basicLightbox.create(`
      <img src="${originalImageUrl}" width="800" height="600">
    `);

    // Otwarcie okna modalnego
    lightbox.show();

    // Obsługa zamknięcia klawiszem "Escape"
    const onEscape = (event) => {
      if (event.key === "Escape") {
        lightbox.close();
        document.removeEventListener("keydown", onEscape);
      }
    };

    document.addEventListener("keydown", onEscape);
  }
});






