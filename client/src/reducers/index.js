import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import AlertReducer from './reducer_alert';
import AjaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
  products: ProductReducer,
  alert: AlertReducer,
  AjaxLoading
});

export default rootReducer;
