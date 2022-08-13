import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = galleryItems
    .map(
    ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`
    )
    .join('');


gallery.insertAdjacentHTML('afterbegin', items);
// gallery.addEventListener('click', onClick);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: "250" 
});

console.log(galleryItems);