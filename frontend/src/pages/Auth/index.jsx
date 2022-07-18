import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from 'redux/actions';

import AuthForm from './Form';

const AuthPage = () => {
  const dispatch = useDispatch();
  const loginAction = useCallback((value) => {
    dispatch(actions.loginUserClickAction(value));
  }, [dispatch]);

  return (
    <AuthForm loginAction={loginAction} />
  )
};

export default AuthPage;
