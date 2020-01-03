import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
