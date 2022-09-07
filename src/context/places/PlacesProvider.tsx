import { useReducer, useEffect } from 'react';
import { placesReducer } from './PlacesReducer';
import { PlacesContext } from './PlacesContext';
import { getUserLocation } from '../../helpers';

import { Feature, PlacesResponse } from '../../interfaces/places';
import { searchApi } from '../../apis';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);
  useEffect(() => {
    getUserLocation().then((userLocation) =>
      dispatch({ type: 'setUserLocation', payload: userLocation })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error('There is no user location');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });
    console.log(resp.data.features[0]);
    dispatch({ type: 'setPlaces', payload: resp.data.features });
    return resp.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        // Methods
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
