import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import api from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_em':
      return { ...state, errorMessage: '' };
    case 'login':
      return { token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  console.log('TestTokenAction');
  const token = await AsyncStorage.getItem('token');
  console.log('token:', token);
  if (token) {
    dispatch({ type: 'login', payload: token });
    navigate('List');    
  } else {
    navigate('loginFlow'); 
  }
};

const clearErrMes = dispatch => () => {
  dispatch({ type: 'clear_em' });
};

const signup = (dispatch) => async ({ email, password }) => {
  // make api request
  // if we sign up, modify state and say that we are auth-ed
  // if fails - error message    
  try {
    const response = await api.post('/signup', { email, password });
    console.log('signup', response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'login', payload: response.data.token });
    // navigate to main flow ?!
    navigate('List');
  } catch (err) {
    dispatch({ type: 'add_error', payload: err.response.data });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  // make api request
  // if we sign in ...
  // if fails - error message
  try {
    const response = await api.post('/signin', { email, password });
    console.log('signin', response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'login', payload: response.data.token });
    // navigate to main flow
    navigate('List');
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: 'add_error',
      payload: `SignIn Error: ${err.response.data.error}`,
    });
  }
};

const signout = (dispatch) => (
  () => {
    // sign out!
  }
);

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrMes, tryLocalSignin },
  { token: null, errorMessage: '' },
);
