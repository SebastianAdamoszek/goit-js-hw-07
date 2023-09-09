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


// Inicjalizacja SimpleLightbox z opcją wyświetlania podpisów
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

// Uruchom galerię
lightbox.open();


// console.log(galleryItems);
