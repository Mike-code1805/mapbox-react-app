import axios from 'axios';

const searchApi = axios.create({
  baseURL: process.env.REACT_APP_SEARCHING,
  params: {
    limit: 6,
    language: 'es',
    access_token: `${process.env.REACT_APP_TOKEN_MAP}`,
  },
});

export default searchApi;
