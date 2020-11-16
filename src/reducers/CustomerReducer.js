import {STORE_CUSTOMERS} from '../constants/constants';

export default (
  state = {
    customerData: {},
  },
  action,
) => {
  switch (action.type) {
    case STORE_CUSTOMERS:
      return {
        ...state,
        customerData: action.data,
      };
    default:
      return state;
  }
};
