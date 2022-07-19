import { combineReducers } from 'redux';

import userReducer from './user';
import globalReducer from './global';
import productsReducer from './products';

export default combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productsReducer,
});
