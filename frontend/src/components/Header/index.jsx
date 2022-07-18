import React from 'react';
import { useSelector } from 'react-redux';

import { selectUsername, selectAuthStatus } from 'redux/selectors/user';

import Header from './Header';

const HeaderContainer = () => {
  const isAuth = useSelector(selectAuthStatus);
  const username = useSelector(selectUsername);

  return (
    <Header isAuth={isAuth} username={username} />
  );
}

export default HeaderContainer;
