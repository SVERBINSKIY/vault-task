import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectAuthStatus, selectUsername} from 'redux/selectors/user';
import {constants} from 'redux/actions';

import Header from './Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuthStatus);
  const username = useSelector(selectUsername);

  const logoutHandler = useCallback(() => {
    dispatch({type: constants.LOGOUT_USER});
  }, [dispatch]);

  return (
    <Header isAuth={isAuth} username={username} logoutHandler={logoutHandler}/>
  );
}

export default HeaderContainer;
