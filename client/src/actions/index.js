import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const ROOT_URL = 'http://localhost:3001/api/v1';

// const fetchProducts = () => {
//   const url = `${ROOT_URL}/api/v1/products`;

//   const res = axios.get('http://localhost:3001/api/v1/products');
//   return {
//     type: FETCH_PRODUCTS,
//     payload: res
//   };
// };

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
const fetchProducts = products => ({
  type: FETCH_PRODUCTS,
  payload: products
});
