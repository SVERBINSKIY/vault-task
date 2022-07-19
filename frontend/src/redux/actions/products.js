export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT';
export const SET_NEW_PRODUCTS = 'SET_NEW_PRODUCTS';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const setProductsAction = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});
export const setNewProductsAction = (payload) => ({
  type: SET_NEW_PRODUCTS,
  payload,
})
