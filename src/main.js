// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { fetchImages } from './js/pixabay-api';
// import { renderImages } from './js/render-functions.js';

// export const galleryList = document.querySelector('ul.gallery');
// export let query = '';
// const inputQuery = document.getElementById('search-input');
// export let page = 1;
// export let limit = 15;
// export const loadButton = document.getElementById('load-button');
// export const loaderDiv = document.getElementById('loader');

// inputQuery.addEventListener('input', e => {
//   query = inputQuery.value.trim();

//   galleryList.innerHTML = '';
//   loadButton.className = 'visually-hidden';
//   loaderDiv.className = 'visually-hidden';
// });

// const searchButton = document.getElementById('search-button');

// searchButton.addEventListener('click', async () => {
//   galleryList.innerHTML = '';
//   loaderDiv.className = 'loader';
//   page = 1;
//   limit = 15;
//   try {
//     if (query) {
//       loadButton.className = '';
//       const response = await fetchImages(query, page, limit);
//       renderImages(response.hits);
//       loaderDiv.className = 'loader visually-hidden';
//       page += 1;
//     }
//   } catch (error) {
//     loadButton.className = 'visually-hidden';
//     console.log(error);
//     iziToast.error({
//       title: 'Error',
//       message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
//       position: 'topRight',
//     });
//   }
// });

// loadButton.addEventListener('click', async () => {
//   loaderDiv.className = 'loader';
//   try {
//     if (query) {
//       const response = await fetchImages(query, page, limit);
//       const totalItems = response.totalHits;
//       const currentPageItems =
//         document.querySelectorAll('.gallery-item').length;
//       if (currentPageItems >= totalItems) {
//         loadButton.className = 'visually-hidden';
//         loaderDiv.className = 'visually-hidden';
//         return iziToast.error({
//           title: 'Error',
//           message: `We're sorry, but you've reached the end of search results.`,
//           position: 'topRight',
//         });
//       }
//       console.log('Fetched posts:', response);
//       renderImages(response.hits);
//       loaderDiv.className = 'loader visually-hidden';
//       page += 1;
//     }
//   } catch (error) {
//     console.log(error);
//     iziToast.error({
//       title: 'Error',
//       message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
//       position: 'topRight',
//     });
//   }
// });

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions.js';

export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');
export let page = 1;
export let limit = 15;
export const loadButton = document.getElementById('load-button');
export const loaderDiv = document.getElementById('loader');

inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();

  galleryList.innerHTML = '';
  loadButton.className = 'visually-hidden';
  loaderDiv.className = 'visually-hidden';
});

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async () => {
  galleryList.innerHTML = '';
  loaderDiv.className = 'loader';
  page = 1;
  limit = 15;
  try {
    if (query) {
      loadButton.className = '';
      const response = await fetchImages(query, page, limit);
      if (response.hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message: 'No images found for your search query.',
          position: 'topRight',
        });
        loadButton.className = 'visually-hidden';
      } else {
        renderImages(response.hits);
      }
      loaderDiv.className = 'loader visually-hidden';
      page += 1;
    } else {
      loaderDiv.className = 'loader visually-hidden';
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
        position: 'topRight',
      });
    }
  } catch (error) {
    loaderDiv.className = 'loader visually-hidden';
    loadButton.className = 'visually-hidden';
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `An error occurred while fetching images. Please try again later.`,
      position: 'topRight',
    });
  }
});

loadButton.addEventListener('click', async () => {
  loaderDiv.className = 'loader';
  try {
    if (query) {
      const response = await fetchImages(query, page, limit);
      const totalItems = response.totalHits;
      const currentPageItems =
        document.querySelectorAll('.gallery-item').length;
      if (currentPageItems >= totalItems) {
        loadButton.className = 'visually-hidden';
        loaderDiv.className = 'visually-hidden';
        return iziToast.error({
          title: 'End of results',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      if (response.hits.length === 0) {
        loadButton.className = 'visually-hidden';
        loaderDiv.className = 'loader visually-hidden';
      } else {
        renderImages(response.hits);
        loaderDiv.className = 'loader visually-hidden';
        page += 1;
      }
    } else {
      loaderDiv.className = 'loader visually-hidden';
    }
  } catch (error) {
    loaderDiv.className = 'loader visually-hidden';
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  }
});

// An error occurred while fetching images. Please try again later.
// We're sorry, but you've reached the end of search results.
