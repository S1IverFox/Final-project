const initialState = {
  currentUser: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log(action.payload);
      return { ...state, currentUser: action.payload };
    case 'LOGOUT_USER':
      console.log('log out');
      return { ...state, currentUser: {} };
    default:
      return state;
  }
}

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
