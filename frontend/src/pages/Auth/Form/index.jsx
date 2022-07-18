import React from 'react';
import { withFormik } from 'formik';

import { LoginSchema } from 'validations/loginSchema';

import AuthForm from './Form';

const EnhancedAuthForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  validationSchema: LoginSchema,
  handleSubmit: (values, { props }) => {
    props.loginAction(values);
  },
})(AuthForm);

export default EnhancedAuthForm;
