import {CHANGE_FILTER_NAME} from '../constants/Filterconstants';

export default (
  state = {
    filterName: 'all',
  },
  action,
) => {
  switch (action.type) {
    case CHANGE_FILTER_NAME:
      return {
        ...state,
        filterName: action.filterName,
      };
    default:
      return {
        ...state,
      };
  }
};
