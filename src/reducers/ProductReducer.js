import {STORE_PRODUCTS} from '../constants/constants';

export default (
  state = {
    productList: {},
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS:
      return {
        ...state,
        productList: action.data,
      };
    default:
      return state;
  }
};
