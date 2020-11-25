import {STORE_BILLS} from '../constants/constants';

export const storeBillsToState = (bills) => {
  return {
    type: STORE_BILLS,
    data: bills,
  };
};
