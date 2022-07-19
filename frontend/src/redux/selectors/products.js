import {createSelector} from 'reselect';
import {get} from 'lodash';

const productsState = (state) => get(state, 'products', {});

export const selectProducts = createSelector(
  productsState,
  (state) => get(state, 'products', []),
);
