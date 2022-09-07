import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* eslint import/no-webpack-loader-syntax: off */
//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =process.env.REACT_APP_TOKEN_MAP;

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
