import {
  LOGIN_SUCCESSFUL,
  LOGOUT,
  WRONG_CREDENTIALS,
  RESET_WRONG_CREDENTIALS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../constants/constants';

export const loggedInSuccessful = (user) => {
  return {
    type: LOGIN_SUCCESSFUL,
    data: user,
  };
};

export const wrongCredentials = () => {
  return {
    type: WRONG_CREDENTIALS,
  };
};

export const resetWrongCredentials = () => {
  return {
    type: RESET_WRONG_CREDENTIALS,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};
