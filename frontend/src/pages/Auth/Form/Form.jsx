import React from 'react';

import { Button, Input } from 'components';

import './index.scss';

const AuthForm = ({
  values, touched, errors, handleChange, handleBlur, handleSubmit,
}) => (
  <form className="auth__form" onSubmit={handleSubmit}>
    <Input
      label="Username"
      placeholder="Enter your username"
      type="text"
      name="username"
      value={values['username']}
      error={errors['username']}
      touched={touched['username']}
      onChange={handleChange}
      onBlur={handleBlur}
      withError
    />
    <Input
      label="Password"
      placeholder="Enter your password"
      type="password"
      name="password"
      value={values['password']}
      error={errors['password']}
      touched={touched['password']}
      onChange={handleChange}
      onBlur={handleBlur}
      withError
    />
    <Button variant="contained" type="submit" disabled={!!errors['password'] || !!errors['username']}>Login</Button>
  </form>
);

export default AuthForm;
