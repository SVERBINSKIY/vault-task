import {
  HIDE_LOADER, SHOW_LOADER, showLoaderAction, hideLoaderAction,
  SHOW_ERROR, HIDE_ERROR, showErrorAction, hideErrorAction,
} from './global';
import {
  LOGIN_USER_CLICK, LOGIN_USER, LOGIN_REFRESH,
  loginUserClickAction, loginUserAction, loginRefreshAction,
} from './user';

export const constants = {
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ERROR,
  HIDE_ERROR,
  LOGIN_USER_CLICK,
  LOGIN_USER,
  LOGIN_REFRESH,
}

export const actions = {
  showLoaderAction,
  hideLoaderAction,
  loginUserClickAction,
  showErrorAction,
  hideErrorAction,
  loginUserAction,
  loginRefreshAction,
}