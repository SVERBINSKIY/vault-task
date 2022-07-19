import { takeLatest, call, put } from 'redux-saga/effects';

import { getProducts, createNewProduct } from 'api';

import { getDataFromLS } from 'utils/localstorage';

import { constants, actions } from '../actions';
import { userKeyForLS } from './login';

function* loadProductsWorker() {
  try {
    yield put(actions.showLoaderAction());
    const userData = yield call(getDataFromLS, userKeyForLS);
    const response = yield call(getProducts, userData);
    yield put(actions.setProductsAction(response));
    yield put(actions.hideLoaderAction());
  } catch (e) {
    yield put(actions.hideLoaderAction());
    yield put(actions.showErrorAction(e.message));
  }
}

function* createProductWorker({ payload }) {
  try {
    yield put(actions.showLoaderAction());
    const userData = yield call(getDataFromLS, userKeyForLS);
    const response = yield call(createNewProduct, payload, userData);
    yield put(actions.setNewProductsAction(response));
    yield put(actions.hideLoaderAction());
  } catch (e) {
    yield put(actions.hideLoaderAction());
    yield put(actions.showErrorAction(e.message));
  }
}

function* editProductWorker({ payload }) {
  try {
    yield put(actions.showLoaderAction());
    const userData = yield call(getDataFromLS, userKeyForLS);
    // call api endpoint for update product
    yield put(actions.hideLoaderAction());
  } catch (e) {
    yield put(actions.hideLoaderAction());
    yield put(actions.showErrorAction(e.message));
  }
}

function* deleteProductWorker({ payload }) {
  try {
    yield put(actions.showLoaderAction());
    const userData = yield call(getDataFromLS, userKeyForLS);
    // call api endpoint for delete product
    yield put(actions.hideLoaderAction());
  } catch (e) {
    yield put(actions.hideLoaderAction());
    yield put(actions.showErrorAction(e.message));
  }
}

function* productsWatcher() {
  yield takeLatest(constants.LOAD_PRODUCTS, loadProductsWorker);
  yield takeLatest(constants.CREATE_NEW_PRODUCT, createProductWorker);
  yield takeLatest(constants.EDIT_PRODUCT, editProductWorker);
  yield takeLatest(constants.DELETE_PRODUCT, deleteProductWorker);
}

export default productsWatcher;
