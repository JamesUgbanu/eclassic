import {
  ADD_ORDER, FETCH_ORDERS
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.orders, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ORDERS:
      return payload.data;
    case ADD_ORDER:
      return state = payload;
    default:
      return state;
  }
}
