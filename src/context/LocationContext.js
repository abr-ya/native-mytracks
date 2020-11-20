import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'start_recording':
      return { ...state, isRecord: true };
    case 'stop_recording':
      return { ...state, isRecord: false };
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const changeName = dispatch => () => {
  dispatch({ type: 'change_name', payload: name });
};
const startRec = dispatch => () => {
  dispatch({ type: 'start_recording'});
};
const stopRec = dispatch => () => {
  dispatch({ type: 'stop_recording'});
};
const addLocation = dispatch => (location, isRecord) => {
  dispatch({ type: 'add_current_location', payload: location });
  if (isRecord) {
    console.log('LocCont AddPoint');
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRec, stopRec, addLocation, changeName },
  { name: '', isRecord: false, locations: [], currentLocation: null },
);
