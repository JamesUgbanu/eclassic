import {
  ADD_CART, REMOVE_CART
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.cart, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART:
      return [...state, payload];
    case REMOVE_CART:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}
