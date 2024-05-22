import axios from 'axios';
import { limit, page } from '../main';

export async function fetchImages(query) {
  query = encodeURIComponent(query);
  const KEY = '43812511-1ad98af5969ab2e5e6977c36e';
  const params = new URLSearchParams({
    per_page: limit,
    page: page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}`
  );
  return response.data;
}
