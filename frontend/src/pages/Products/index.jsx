import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {constants} from 'redux/actions';

import {selectProducts} from 'redux/selectors/products';

import {Table} from 'components';

import CreateForm from './NewProductForm';

const headers = [
  {
    name: '#',
  },
  {
    name: 'Name',
  },
  {
    name: 'Count',
  },
  {
    name: 'Price',
  },
];

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch({type: constants.LOAD_PRODUCTS});
  }, [dispatch]);

  const createProductHandler = useCallback((value) => {
    dispatch({type: constants.CREATE_NEW_PRODUCT, payload: value});
  }, [dispatch]);

  const editProductHandler = useCallback((row) => {
    dispatch({type: constants.EDIT_PRODUCT, payload: row});
  }, [dispatch]);

  const deleteProductHandler = useCallback((row) => {
    dispatch({type: constants.DELETE_PRODUCT, payload: row});
  }, [dispatch]);

  return (
    <div>
      <Table
        headers={headers}
        data={products}
        editProductHandler={editProductHandler}
        deleteProductHandler={deleteProductHandler}
      />
      <h2>Create new product</h2>
      <CreateForm createProductHandler={createProductHandler}/>
    </div>
  );
}

export default ProductsPage;
