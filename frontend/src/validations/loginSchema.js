import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/@/, 'Username must contain @!')
    .min(2, 'Username is short!')
    .max(64, 'Username is long!')
    .required('Field is required!'),
  password: yup
    .string()
    .min(6, 'Password is short')
    .max(64, 'Password is long')
    .required('Field is required!'),
});
