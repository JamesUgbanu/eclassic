import {
  FETCH_ALL_ORDERS, ORDER_STATUS
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.adminOrders, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_ORDERS:
      return [...payload.data];
    case ORDER_STATUS:
      return Object.assign([], state.map((order) => {
        if (order.order_id === payload.id) {
          order.status = payload.order.data[0].status;
        }
        return order;
      }));
    default:
      return state;
  }
}
