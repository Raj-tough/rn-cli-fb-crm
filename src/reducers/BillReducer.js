import {STORE_BILLS, UPDATE_BILL_COUNT} from '../constants/constants';

export default (
  state = {
    billData: {},
    billCount: 0,
  },
  action,
) => {
  switch (action.type) {
    case STORE_BILLS:
      return {
        ...state,
        billData: action.data,
      };
    case UPDATE_BILL_COUNT:
      return {
        ...state,
        billCount: action.count,
      };
    default:
      return state;
  }
};
