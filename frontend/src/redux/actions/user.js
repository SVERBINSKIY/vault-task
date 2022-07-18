export const LOGIN_USER_CLICK = 'LOGIN_USER_CLICK';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_REFRESH = 'LOGIN_REFRESH';

export const loginUserClickAction = (payload) => ({
  type: LOGIN_USER_CLICK,
  payload,
});

export const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const loginRefreshAction = () => ({ type: LOGIN_REFRESH });
