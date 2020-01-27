import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchAllProducts } from './actions/index';
import createAppStore from './store/store';
import App from './components/app';

const { persistor, store } = createAppStore();
// Load Products list from API as soon as application initiates
store.dispatch(fetchAllProducts());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.querySelector('.container')
);
