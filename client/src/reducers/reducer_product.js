import {
  FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT
} from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.products, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return [
        ...payload.data
      ];
    case ADD_PRODUCT:
      return [
        ...state,
        ...payload.data
      ];
    case DELETE_PRODUCT:
      return [...state.filter(product => product.prod_id !== payload.id)];
    case UPDATE_PRODUCT:
      return [
        ...state.filter(product => product.prod_id === payload.data.id),
        ...payload.data
      ];
    default:
      return state;
  }
}
