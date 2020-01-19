import axios from 'axios';
import {
  DELETE_PRODUCT, FETCH_PRODUCTS, SET_ALERT, REMOVE_ALERT, ADD_PRODUCT, AJAX_LOADING
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

export const fetchAllProducts = () => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios.get(`${ROOT_URL}/products`)
    .then((res) => {
      console.log(res.data);
      dispatch(ajaxLoading(false));
      // eslint-disable-next-line no-use-before-define
      dispatch(fetchProducts(res.data));
    })
    .catch((error) => {
      dispatch(ajaxLoading(false));
      if (error.response) {
        console.log(error.response.data);
      }
    });
};

export const deleteProduct = id => (dispatch) => {
  dispatch(ajaxLoading(true));
  return axios.delete(`${ROOT_URL}/product/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getAccessToken()}`
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
      Authorization: `Bearer ${auth.getAccessToken()}`
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
