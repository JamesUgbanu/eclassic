import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { data: action.payload.data };
    default:
      return state;
  }
}
