import { FETCH_PRODUCTS, DELETE_PRODUCT } from '../actions/types';

export default function(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { data: action.payload.data };
    case DELETE_PRODUCT:
      const data = state.data.filter(product => product.prod_id !== action.payload.id);
      return { data };
    default:
      return state;
  }
}
