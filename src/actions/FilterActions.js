import {CHANGE_FILTER_NAME} from '../constants/Filterconstants';

export const changeBillScreenFilter = (filterName) => {
  return {
    type: CHANGE_FILTER_NAME,
    filterName: filterName,
  };
};
