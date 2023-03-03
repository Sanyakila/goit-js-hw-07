import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const galleryCards = createImagesGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImagesGallery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
})
.join("");
}

// console.log(galleryCards);

function onGalleryContainerClick (evt) {
     evt.preventDefault();
     if (evt.target.nodeName !== "IMG") {
        return
      };
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

instance.show();


}

