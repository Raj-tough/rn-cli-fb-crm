import {STORE_PRODUCTS, STORE_CATEGORIES} from '../constants/constants';

export const storeProductstoState = (products) => {
  return {
    type: STORE_PRODUCTS,
    data: products,
  };
};

export const storecategoriestoState = (categories) => {
  return {
    type: STORE_CATEGORIES,
    data: categories,
  };
};
