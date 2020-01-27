import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import AlertReducer from './reducer_alert';
import ajaxLoading from './ajaxLoadingReducer';
import cartReducer from './reducer_cart';

const rootReducer = combineReducers({
  products: ProductReducer,
  alert: AlertReducer,
  cart: cartReducer,
  ajaxLoading
});

export default rootReducer;
