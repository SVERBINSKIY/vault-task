import { constants } from '../actions';
const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_PRODUCTS:
    case constants.SET_NEW_PRODUCTS:
      return { ...state, products: action.payload.data };

    default:
      return state;
  }
};

export default productsReducer;
