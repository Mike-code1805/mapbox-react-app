import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* eslint import/no-webpack-loader-syntax: off */
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoibWlrZWNvZGUiLCJhIjoiY2w3cWU3M2d3MDRtNDN1cHA5ZTJrMXNmbiJ9.RPdE9IN9kxtRQ0JzAH9UDw';

if (!navigator.geolocation) {
  alert('Your browser does not support');
  throw new Error('Your browser does not support geolocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
