import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useRoutes } from 'hooks/routes';
import { selectAuthStatus } from 'redux/selectors/user';
import { actions } from 'redux/actions';

import { Header } from 'components';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuthStatus);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    dispatch(actions.loginRefreshAction());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
