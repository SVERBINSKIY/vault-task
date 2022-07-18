import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Header = ({ isAuth, username }) => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__wrapper__logo">
        <NavLink to="/">
          Company Logo
        </NavLink>
      </div>
      <nav className="header__wrapper__nav">
        {
          isAuth && (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
            </>
          )
        }
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="header__wrapper__user-controller">
        {
          isAuth ? <span>{username}</span> : <NavLink to="/login">Login</NavLink>
        }
      </div>
    </div>
  </header>
);

export default Header;
