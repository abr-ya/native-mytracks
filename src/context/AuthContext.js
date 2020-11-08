import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
  //   case 'get_posts':
  //     return action.payload;
  //   case 'edit_post':
  //     return state.map(item => (item.id === action.payload.id ? action.payload : item));
    default:
      return state;
  }
};

const signup = (dispatch) => (
  ({ mail, pass }) => {
    // make api request

    // if we sign up, modify state and say that we are auth-ed

    // if fails - error message
  }
);

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
  { isSignedIn: false },
);
