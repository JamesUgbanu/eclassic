import { FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from '../actions/types';

export default function(state = [], action) {
  console.log(state);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload.data;
    case ADD_PRODUCT:
      return [
        ...state,
        Object.assign({}, action.payload.data)
      ];
    case DELETE_PRODUCT:
      const data = state.filter(product => product.prod_id !== action.payload.id);
      return data;
    default:
      return state;
  }
}
