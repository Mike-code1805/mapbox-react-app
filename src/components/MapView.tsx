/* eslint import/no-webpack-loader-syntax: off */

import { useContext, useLayoutEffect, useRef } from 'react';

//@ts-ignore
import { Map } from '!mapbox-gl';

import { PlacesContext, MapContext } from '../context';
import { Loading } from './';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

      setMap(map);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  const variable = process.env;
  console.log(variable);
  console.log(process.env);

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
      }}
    >
      {userLocation?.join(',')}
    </div>
  );
};
