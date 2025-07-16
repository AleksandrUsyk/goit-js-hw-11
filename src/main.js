import './css/styles.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) return;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery);

    if (data.hits.length === 0) {
      iziToast.info({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong!', position: 'topRight' });
  } finally {
    hideLoader();
  }
});
