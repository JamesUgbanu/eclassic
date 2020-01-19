import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchAllProducts } from './actions/index';
import configureStore from './store/store';
import App from './components/app';

const store = configureStore();
// Load Products list from API as soon as application initiates
store.dispatch(fetchAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
