import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import api from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  // make api request
  // if we sign up, modify state and say that we are auth-ed
  // if fails - error message    
  try {
    const response = await api.post('/signup', { email, password });
    console.log('signup', response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    // navigate to main flow ?!
    navigate('List');
  } catch (err) {
    dispatch({ type: 'add_error', payload: err.response.data });
  }
};

const signin = (dispatch) => (
  ({ mail, pass }) => {
    // make api request

    // if we sign in

    // if fails - error message
  }
);

const signout = (dispatch) => (
  () => {
    // sign out!
  }
);

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' },
);
