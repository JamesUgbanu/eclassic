import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import AlertReducer from './reducer_alert';
import ajaxLoading from './ajaxLoadingReducer';
import cartReducer from './reducer_cart';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  products: ProductReducer,
  alert: AlertReducer,
  cart: cartReducer,
  user: userReducer,
  ajaxLoading
});

export default rootReducer;
