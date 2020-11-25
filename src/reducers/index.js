import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import FilterReducer from './FilterReducer';
import CustomerReducer from './CustomerReducer';
import ProductReducer from './ProductReducer';
import BillReducer from './BillReducer';

export default combineReducers({
  LoginReducer,
  FilterReducer,
  CustomerReducer,
  ProductReducer,
  BillReducer,
});
