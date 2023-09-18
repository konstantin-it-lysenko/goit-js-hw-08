import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ description, original, preview }) => {
  return `<a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
}).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
