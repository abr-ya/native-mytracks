import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const startRec = dispatch => () => {};
const stopRec = dispatch => () => {};
const addLocation = dispatch => (location) => {
  dispatch({ type: 'add_current_location', payload: location })
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRec, stopRec, addLocation },
  { isRecord: false, locations: [], currentLocation: null },
);
