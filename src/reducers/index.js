import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  LoginReducer,
  FilterReducer,
});
