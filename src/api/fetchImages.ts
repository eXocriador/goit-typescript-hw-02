import axios from 'axios';
import { FetchImagesResponse } from '../types';

const API_KEY = '0_W_FULD15IJNDteMKhHrEjUu4_V6tBCVlb3oyDHBkk';
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
