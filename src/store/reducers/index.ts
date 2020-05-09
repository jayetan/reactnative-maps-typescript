type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = 'ADD_LOCATIONS',
  Clear = 'CLEAR_LOCATIONS',
  Select = 'SELECT_LOCATION'
}

export type LocationType = {
  displayName: string;
  lat: number;
  lon: number;
}

type ProductPayload = {
  [Types.Add] : LocationType[];
  [Types.Clear]: undefined;
}

export type LocationActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const locationReducer = (
  _state: LocationType[],
  action: LocationActions | SelectedLocationActions,
) => {
  switch (action.type) {
    case Types.Add:
      return [...action.payload];
    case Types.Clear:
      return [];
    default:
      return [];
  }
};

type SelectedLocationPayload = {
  [Types.Select]: {
    displayName: string;
    lat: number;
    lon: number;
  };
}

export type SelectedLocationActions = ActionMap<SelectedLocationPayload>[
  keyof ActionMap<SelectedLocationPayload>
];

export const selectedLocationReducer = (
  state: LocationType,
  action: LocationActions | SelectedLocationActions,
) => {
  switch (action.type) {
    case Types.Select:
      return {
        displayName: action.payload.displayName,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    default:
      return state;
  }
};
