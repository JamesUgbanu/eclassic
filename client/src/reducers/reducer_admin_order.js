import {
  FETCH_ALL_ORDERS
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.adminOrders, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_ORDERS:
      return payload.data;
    default:
      return state;
  }
}
