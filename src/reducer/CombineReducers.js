import {combineReducers} from 'redux';
import {userReducer} from './UserReducer';
import {userEductionReducer} from './UserEducationReducer';
import {cartReducer} from './CartReducer';
import {preLoginReducer} from './PreLoginReducer';
export const masterReducer = combineReducers({
  userInfo: userReducer,
  userEdu: userEductionReducer,
  cart: cartReducer,
  preLogin: preLoginReducer,
});
