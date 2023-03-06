import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList= document.querySelector('ul.gallery');
console.log(galleryList);

const galleryCards = galleryMarkup (galleryItems);

function galleryMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}".jpg" alt="${description}" />
      </a>`
    })
    .join("");
}

console.log(galleryCards);

galleryList.insertAdjacentHTML ('beforeend', galleryCards);

const lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionDelay': '250' });
lightbox.on ('show.SimpleLightBox');
