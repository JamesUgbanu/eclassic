import { FETCH_PROFILE } from '../actions/types';
import initialState from '../store/initialState';

export default function(state = initialState.cart, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROFILE:
      return payload.profileDetails;
    default:
      return state;
  }
}
