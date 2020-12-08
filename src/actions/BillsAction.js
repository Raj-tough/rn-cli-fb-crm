import {STORE_BILLS, UPDATE_BILL_COUNT} from '../constants/constants';

export const storeBillsToState = (bills) => {
  return {
    type: STORE_BILLS,
    data: bills,
  };
};

export const updateBillCount = (count) => {
  return {
    type : UPDATE_BILL_COUNT,
    count : count
  }
}