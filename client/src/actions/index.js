import axios from 'axios';
import {
  DELETE_PRODUCT, FETCH_PRODUCTS, SET_ALERT, REMOVE_ALERT, ADD_PRODUCT, AJAX_LOADING, UPDATE_PRODUCT,
  ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, FETCH_PROFILE
}
  from './types';
import Auth from '../Auth/Auth';
import { generateSerial } from '../components/helpers';

const auth = new Auth();
const ROOT_URL = 'http://localhost:3001/api/v1';
const alertId = generateSerial();

const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  payload: products
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
const updateProductSuccess = product => ({
  type: UPDATE_PRODUCT,
  payload: product
});

const ajaxLoading = status => ({
  type: AJAX_LOADING,
  status
});

export const setAlert = (msg, alertType) => ({
  type: SET_ALERT,
  payload: { msg, alertId, alertType }
});

export const removeAlert = id => dispatch => dispatch(
  {
    type: REMOVE_ALERT,
    payload: { id }
  }
);

export const addToCart = item => (dispatch) => {
  dispatch(setAlert(`${item.prod_name} added to cart`, 'success'));
  dispatch({
    type: ADD_CART,
    payload: item
  });
};
export const removeFromCart = (id, name) => (dispatch) => {
  dispatch(setAlert(`${name} removed from cart`, 'success'));
  dispatch({
    type: REMOVE_CART,
    payload: { id }
  });
};

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
        dispatch(setAlert(error.response.data, 'error'));
      }
    });
};

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
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error) {
        dispatch(setAlert(error.response, 'error'));
      }
      throw (error);
    });
};

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
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'error'));
        });
      } else {
        dispatch(setAlert(error.response.data.message, 'error'));
      }
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
      console.log(res.data);
      dispatch(ajaxLoading(false));
      dispatch(updateProductSuccess(res.data));
      dispatch(setAlert(res.data.message, 'success'));
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response.data.errors) {
        error.response.data.errors.forEach((error) => {
          dispatch(setAlert(error.msg, 'error'));
        });
      } else {
        dispatch(setAlert(error.response.data.message, 'error'));
      }
      throw (error);
    });
};
