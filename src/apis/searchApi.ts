import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 6,
    language: 'es',
    access_token:
      'pk.eyJ1IjoibWlrZWNvZGUiLCJhIjoiY2w3cWU3M2d3MDRtNDN1cHA5ZTJrMXNmbiJ9.RPdE9IN9kxtRQ0JzAH9UDw',
  },
});

export default searchApi;
