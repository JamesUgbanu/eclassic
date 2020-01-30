import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import AlertReducer from './reducer_alert';
import ajaxLoading from './ajaxLoadingReducer';
import cartReducer from './reducer_cart';
import userReducer from './reducer_user';
import orderReducer from './reducer_order';

const rootReducer = combineReducers({
  products: ProductReducer,
  alert: AlertReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
  ajaxLoading
});

export default rootReducer;
