import { constants } from '../actions';

const initialState = {
  isAuth: false,
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_USER:
      return { ...state, isAuth: true, currentUser: action.payload };

    default:
      return state
  }
};

export default userReducer;
