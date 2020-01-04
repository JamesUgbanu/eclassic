import { combineReducers } from 'redux';
import ProductReducer from './reducer_product';
import AlertReducer from './reducer_alert';

const rootReducer = combineReducers({
  products: ProductReducer,
  alert: AlertReducer
});

export default rootReducer;
