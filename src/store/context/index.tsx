import React, { createContext, useReducer, Dispatch } from 'react';
import {
  LocationActions,
  LocationType,
  locationReducer,
  selectedLocationReducer,
  SelectedLocationActions,
} from '../reducers';

type InitialStateType = {
  locations: LocationType[];
  selectedLocation: LocationType;
}

interface IProps {
  children: React.ReactNode;
}

const initialState = {
  locations: [],
  selectedLocation: {
    displayName: 'Metro Manila, Philippines',
    lat: 14.5736108,
    lon: 121.0329706,
  },
  string: '',
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<LocationActions | SelectedLocationActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

const mainReducer = (
  { locations, selectedLocation }: InitialStateType,
  action: LocationActions | SelectedLocationActions,
) => ({
  locations: locationReducer(locations, action),
  selectedLocation: selectedLocationReducer(selectedLocation, action),
});

const AppProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
