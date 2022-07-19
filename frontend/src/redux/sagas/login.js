import {call, put, takeLatest} from 'redux-saga/effects';

import {loginUser, refreshLogin} from 'api';

import {saveToLS, getDataFromLS, removeFromLS} from 'utils/localstorage';

import {actions, constants} from '../actions';

export const userKeyForLS = 'userData';

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
  yield put(actions.hideLoaderAction());
}

function* logoutWorker() {
  yield call(removeFromLS, userKeyForLS);
}

function* loginWatcher() {
  yield takeLatest(constants.LOGIN_USER_CLICK, loginWorker);
  yield takeLatest(constants.LOGIN_REFRESH, loginRefreshWorker);
  yield takeLatest(constants.LOGOUT_USER, logoutWorker);
}

export default loginWatcher;
