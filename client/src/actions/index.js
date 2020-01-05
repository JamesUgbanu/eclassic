import axios from 'axios';
import { DELETE_PRODUCT, FETCH_PRODUCTS, SET_ALERT, REMOVE_ALERT } from './types';
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
export const setAlert = (msg, id, alertType) => ({
  type: SET_ALERT,
  payload: { msg, id, alertType }
});

export const fetchAllProducts = () => dispatch => axios.get(`${ROOT_URL}/products`)
  .then((res) => {
    // eslint-disable-next-line no-use-before-define
    dispatch(fetchProducts(res.data));
  })
  .catch((error) => {
    if (error.response) {
      console.log(error.response.data);
    }
  });

export const deleteProduct = id => dispatch => axios.delete(`${ROOT_URL}/product/${id}`,
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getAccessToken()}`
    }
  })
  .then((res) => {
    dispatch(deleteProductSuccess(id));
    dispatch(setAlert(res.data.message, alertId, 'success'));
  })
  .catch((error) => {
    if (error) {
      dispatch(setAlert(error.response, alertId, 'error'));
    }
    throw (error);
  });

export const removeAlert = id => dispatch => dispatch(
  {
    type: REMOVE_ALERT,
    payload: { id }
  }
);
