import {STORE_BILLS} from '../constants/constants';

export default (
  state = {
    billData: {},
  },
  action,
) => {
  switch (action.type) {
    case STORE_BILLS:
      return {
        ...state,
        billData: action.data,
      };
    default:
      return state;
  }
};
