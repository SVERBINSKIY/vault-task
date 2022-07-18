import { constants } from '../actions';

const initialState = {
  loader: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SHOW_LOADER:
      return { ...state, loader: true };

    case constants.LOGIN_USER:
    case constants.HIDE_LOADER:
      return { ...state, loader: false };

    default:
      return state;
  }
}

export default globalReducer;
