import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import FilterReducer from './FilterReducer';
import CustomerReducer from './CustomerReducer';
import ProductReducer from './ProductReducer';

export default combineReducers({
  LoginReducer,
  FilterReducer,
  CustomerReducer,
  ProductReducer,
});
