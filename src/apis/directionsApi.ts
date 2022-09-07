import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoibWlrZWNvZGUiLCJhIjoiY2w3cWU3M2d3MDRtNDN1cHA5ZTJrMXNmbiJ9.RPdE9IN9kxtRQ0JzAH9UDw',
  },
});

export default directionsApi;
