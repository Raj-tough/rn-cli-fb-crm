import {STORE_PRODUCTS} from '../constants/constants';

export const storeProductstoState = (products) => {
  return {
    type: STORE_PRODUCTS,
    data: products,
  };
};
