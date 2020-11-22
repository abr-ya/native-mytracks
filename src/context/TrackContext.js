import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

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
const createTrack = dispatch => async (name, locations) => {
  //dispatch({ type: ''});
  // make a request to API
  console.log('TrackContext - save:', name, `${locations.length} точек`);
  await trackerApi.post('/tracks', { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  [],
);
