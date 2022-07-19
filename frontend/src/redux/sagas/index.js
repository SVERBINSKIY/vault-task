import { all } from 'redux-saga/effects';

import login from './login';
import products from './products';

function* rootWatcher() {
  yield all([
    login(),
    products(),
  ]);
}

export default rootWatcher;
