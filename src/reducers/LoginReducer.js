import {
  LOGIN_SUCCESSFUL,
  LOGOUT,
  WRONG_CREDENTIALS,
  RESET_WRONG_CREDENTIALS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../constants/constants';

export default (
  state = {
    loggedIn: false,
    user: null,
    wrongCredentials: false,
    verifying: false,
    verified: false,
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        loggedIn: true,
        user: action.data,
        wrongCredentials: false,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        verified: false,
      };
    case WRONG_CREDENTIALS:
      return {
        ...state,
        loggedIn: false,
        wrongCredentials: true,
      };
    case RESET_WRONG_CREDENTIALS:
      return {
        ...state,
        wrongCredentials: false,
      };

    case VERIFY_REQUEST:
      return {
        ...state,
        verifying: true,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        verifying: false,
        verified: true,
      };
    default:
      return {
        ...state,
      };
  }
};
