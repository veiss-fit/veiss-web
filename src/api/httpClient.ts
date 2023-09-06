import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/api';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
