import {
  ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.cart, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      return [...state, payload];
    case CLEAR_CART:
      return state = payload.cart;
    case REMOVE_CART:
      return state.filter(item => item.prod_id !== payload.id);
    case INCREMENT_QUANTITY:
      return Object.assign([], state.map((item) => {
        if (item.prod_id === payload.id) {
          item.cartQuantity += 1;
        }
        return item;
      }));
    case DECREMENT_QUANTITY:
      return Object.assign([], state.map((item) => {
        if (item.prod_id === payload.id) {
          item.cartQuantity -= 1;
        }
        return item;
      }));
    default:
      return state;
  }
}
