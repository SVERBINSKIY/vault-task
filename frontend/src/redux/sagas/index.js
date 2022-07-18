import { all } from 'redux-saga/effects';

import login from './login';

function* rootWatcher() {
  yield all([
    login(),
  ]);
}

export default rootWatcher;
