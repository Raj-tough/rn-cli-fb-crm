import {STORE_PRODUCTS, STORE_CATEGORIES} from '../constants/constants';

export default (
  state = {
    productList: {},
    categoriesList: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS:
      return {
        ...state,
        productList: action.data,
      };
    case STORE_CATEGORIES:
      return {
        ...state,
        categoriesList: action.data,
      };
    default:
      return state;
  }
};
