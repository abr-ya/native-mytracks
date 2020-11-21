import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {
  dispatch({ type: ''});
};
const createTrack = dispatch => (name, locations) => {
  //dispatch({ type: ''});
  // make a request to API
  console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  [],
);
