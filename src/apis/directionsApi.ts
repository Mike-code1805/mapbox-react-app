import axios from 'axios';

const directionsApi = axios.create({
  baseURL: process.env.REACT_APP_DIRECTIONS,
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: `${process.env.REACT_APP_TOKEN_MAP}`,
  },
});

export default directionsApi;
