import axios from 'axios';
import {
  DELETE_PRODUCT, FETCH_PRODUCTS, SET_ALERT, REMOVE_ALERT, ADD_PRODUCT, AJAX_LOADING, UPDATE_PRODUCT,
  ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, FETCH_PROFILE, ADD_ORDER, CLEAR_CART,
  FETCH_ORDERS, FETCH_ALL_ORDERS, ORDER_STATUS
}
  from './types';
import Auth from '../Auth/Auth';
import { generateSerial } from '../components/helpers';

const auth = new Auth();
const ROOT_URL = process.env.REACT_ENDPOINT;
const alertId = generateSerial();
const timerInSec = 3000;

const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  payload: products
});

const fetchOrderSuccess = orders => ({
  type: FETCH_ORDERS,
  payload: orders
});

const fetchAdminOrderSuccess = orders => ({
  type: FETCH_ALL_ORDERS,
  payload: orders
});

const deleteProductSuccess = id => ({
  type: DELETE_PRODUCT,
  payload: {
    id
  }
});
const addProductSuccess = product => ({
  type: ADD_PRODUCT,
  payload: product
});
const addOrderSuccess = () => ({
  type: ADD_ORDER,
  payload: []
});
const updateProductSuccess = product => ({
  type: UPDATE_PRODUCT,
  payload: product
});
const changeOrderStatusSuccess = (order, id) => ({
  type: ORDER_STATUS,
  payload: { order, id }
});
const ajaxLoading = status => ({
  type: AJAX_LOADING,
  status
});

export const setAlert = (msg, alertType) => ({
  type: SET_ALERT,
  payload: { msg, alertId, alertType }
});

export const removeAlert = id => ({
  type: REMOVE_ALERT,
  payload: { id }
});

export const addToCart = item => (dispatch) => {
  dispatch(setAlert(`${item.prod_name} added to cart`, 'success'));
  setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
  dispatch({
    type: ADD_CART,
    payload: item
  });
};
export const removeFromCart = (id, name) => (dispatch) => {
  dispatch(setAlert(`${name} removed from cart`, 'success'));
  setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
  dispatch({
    type: REMOVE_CART,
    payload: { id }
  });
};

const clearCart = () => ({
  type: CLEAR_CART,
  payload: { cart: [] }
});

export const increaseQuantity = id => (dispatch) => {
  dispatch({
    type: INCREMENT_QUANTITY,
    payload: { id }
  });
};

export const decreaseQuantity = id => (dispatch) => {
  dispatch({
    type: DECREMENT_QUANTITY,
    payload: { id }
  });
};

export const fetchUserProfile = () => (dispatch) => {
  auth.getProfile((profile = null, error = '') => {
    const { nickname, email, picture } = profile;
    const profileDetails = {
      nickname, email, picture
    };
    dispatch({
      type: FETCH_PROFILE,
      payload: { profileDetails }
    });
  });
};

export const fetchAllProducts = () => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios.get(`${ROOT_URL}/products`)
    .then((res) => {
      dispatch(ajaxLoading(false));
      // eslint-disable-next-line no-use-before-define
      dispatch(fetchProducts(res.data));
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response) {
        !error.response.data.message ? dispatch(setAlert(error.response.data, 'error')) : dispatch(setAlert(error.response.data.message, 'error'));
      }
      dispatch(setAlert('Network error', 'error'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    });
};

/** Delete products */
export const deleteProduct = id => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios.delete(`${ROOT_URL}/product/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getIdToken()}`
      }
    })
    .then((res) => {
      dispatch(ajaxLoading(false));
      dispatch(deleteProductSuccess(id));
      dispatch(setAlert(res.data.message, 'success'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response) {
        dispatch(setAlert(error.response, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      throw (error);
    });
  dispatch(setAlert('Network error', 'error'));
  setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
};
/** Add new Product
 * dispatch result to the reducer
 */
export const addProduct = formData => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/products`,
    data: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      dispatch(addProductSuccess(res.data));
      dispatch(setAlert(res.data.message, 'success'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'error'));
          setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
        });
      } else {
        dispatch(setAlert(error.response.data.message, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      dispatch(setAlert('Network error', 'error'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      throw (error);
    });
};

export const updateProduct = (formData, id) => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/products/${id}`,
    data: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      dispatch(updateProductSuccess(res.data));
      dispatch(setAlert(res.data.message, 'success'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'error'));
          setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
        });
      } else {
        dispatch(setAlert(error.response.data.message, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      dispatch(setAlert('Network error', 'error'));
      throw (error);
    });
};
/** Add new order */
export const addOrder = data => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'POST',
    url: `${ROOT_URL}/orders`,
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      dispatch(addOrderSuccess());
      dispatch(setAlert(res.data.message, 'success'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      dispatch(clearCart());
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'error'));
          setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
        });
      } else {
        dispatch(setAlert(error.response.data.message, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      dispatch(setAlert('Network error', 'error'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      throw (error);
    });
};

/** Fetch for user order */
export const fetchOrder = () => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/user/orders`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      // eslint-disable-next-line no-use-before-define
      dispatch(fetchOrderSuccess(res.data));
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response) {
        dispatch(setAlert(error.response.data, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
    });
};

/** Fetch for all order */
export const fetchAllOrder = () => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/orders`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      // eslint-disable-next-line no-use-before-define
      dispatch(fetchAdminOrderSuccess(res.data));
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response) {
        dispatch(setAlert(error.response.data, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      dispatch(setAlert('Network error', 'error'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    });
};

/** Change order status */
export const changeOrderStatus = ({ id, status }) => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios({
    method: 'PUT',
    url: `${ROOT_URL}/orders/${id}`,
    data: JSON.stringify({ status }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getIdToken()}`
    }
  })
    .then((res) => {
      dispatch(ajaxLoading(false));
      dispatch(changeOrderStatusSuccess(res.data, id));
      dispatch(setAlert(res.data.message, 'success'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error) {
        dispatch(setAlert(error.response, 'error'));
        setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      }
      dispatch(setAlert('Network error', 'error'));
      setTimeout(() => dispatch(removeAlert(alertId)), timerInSec);
      throw (error);
    });
};
