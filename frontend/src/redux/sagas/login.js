import {call, put, takeLatest} from 'redux-saga/effects';

import {loginUser, refreshLogin} from 'api';

import {saveToLS, getDataFromLS} from 'utils/localstorage';

import {actions, constants} from '../actions';

const userKeyForLS = 'userData';

function* loginWorker({payload}) {
  try {
    yield put(actions.showLoaderAction());
    const response = yield call(loginUser, payload);
    yield call(saveToLS, userKeyForLS, response.username);
    yield put(actions.loginUserAction(response));
  } catch (e) {
    yield put(actions.hideLoaderAction());
    yield put(actions.showErrorAction(e.message));
  }
}

function* loginRefreshWorker() {
  const userData = yield call(getDataFromLS, userKeyForLS);
  if (!userData) {
    return;
  }
  yield put(actions.showLoaderAction());
  const response = yield call(refreshLogin, userData);
  yield put(actions.loginUserAction(response));
}

function* loginWatcher() {
  yield takeLatest(constants.LOGIN_USER_CLICK, loginWorker);
  yield takeLatest(constants.LOGIN_REFRESH, loginRefreshWorker);
}

export default loginWatcher;
