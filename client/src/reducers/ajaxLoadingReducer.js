import { AJAX_LOADING } from '../actions/types';
import initialState from '../store/initialState';

export default function ajaxLoadingReducer(state = initialState.ajaxLoading, action) {
  if (action.type === AJAX_LOADING) {
    return action.status;
  }
  return state;
}
