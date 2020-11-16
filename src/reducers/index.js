import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import FilterReducer from './FilterReducer';
import CustomerReducer from './CustomerReducer';

export default combineReducers({
  LoginReducer,
  FilterReducer,
  CustomerReducer,
});
