import {
  HIDE_ERROR,
  HIDE_LOADER,
  hideErrorAction,
  hideLoaderAction,
  SHOW_ERROR,
  SHOW_LOADER,
  showErrorAction,
  showLoaderAction,
} from './global';
import {
  LOGIN_REFRESH,
  LOGIN_USER,
  LOGIN_USER_CLICK,
  loginRefreshAction,
  loginUserAction,
  loginUserClickAction,
  LOGOUT_USER,
} from './user';
import {
  CREATE_NEW_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  LOAD_PRODUCTS,
  SET_NEW_PRODUCTS,
  SET_PRODUCTS,
  setNewProductsAction,
  setProductsAction
} from './products';

export const constants = {
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  LOGIN_USER_CLICK,
  LOGIN_USER,
  LOGIN_REFRESH,
  LOGOUT_USER,
  LOAD_PRODUCTS,
  SET_PRODUCTS,
  CREATE_NEW_PRODUCT,
  SET_NEW_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
}

export const actions = {
  showLoaderAction,
  hideLoaderAction,
  loginUserClickAction,
  showErrorAction,
  hideErrorAction,
  loginUserAction,
  loginRefreshAction,
  setProductsAction,
  setNewProductsAction,
}