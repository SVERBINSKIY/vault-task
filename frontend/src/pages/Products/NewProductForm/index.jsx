import { withFormik } from 'formik';

import NewProductForm from './Form';

const initialValues = {
  name: '',
  count: 0,
  price: 0,
}

const EnhancedCreateProductForm = withFormik({
  mapPropsToValues: () => initialValues,
  handleSubmit: (values, { props }) => {
    props.createProductHandler(values);
  }}
)(NewProductForm);

export default EnhancedCreateProductForm;
