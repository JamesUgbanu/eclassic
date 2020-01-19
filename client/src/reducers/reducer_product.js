import { FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.products, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    case ADD_PRODUCT:
      return [
        ...state,
        action.payload.data
      ];
    case DELETE_PRODUCT:
      return [...state.filter(product => product.prod_id !== action.payload.id)];
    default:
      return state;
  }
}
