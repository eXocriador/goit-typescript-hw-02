import axios from 'axios';
import { FetchImagesResponse } from '../types';

const API_KEY = '47660157-57325717b13f34e4491083279';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query: string, page: number = 1): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};
