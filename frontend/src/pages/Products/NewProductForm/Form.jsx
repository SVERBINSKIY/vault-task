import React from 'react';

import { Button, Input } from 'components';

import './index.scss';

const NewProductForm = ({
  values, touched, errors, handleChange, handleBlur, handleSubmit,
}) => (
  <form className="product__form" onSubmit={handleSubmit}>
    <Input
      label="Name"
      placeholder="Enter name"
      type="text"
      name="name"
      value={values['name']}
      error={errors['name']}
      touched={touched['name']}
      onBlur={handleBlur}
      onChange={handleChange}
      withError
    />
    <Input
      label="Count"
      placeholder="Enter count"
      type="text"
      name="count"
      value={values['count']}
      error={errors['count']}
      touched={touched['count']}
      onBlur={handleBlur}
      onChange={handleChange}
      withError
    />
    <Input
      label="Price"
      placeholder="Enter price"
      type="text"
      name="price"
      value={values['price']}
      error={errors['price']}
      touched={touched['price']}
      onBlur={handleBlur}
      onChange={handleChange}
      withError
    />
    <Button variant="contained" type="submit">Create</Button>
  </form>
);

export default NewProductForm;
