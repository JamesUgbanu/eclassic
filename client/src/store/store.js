import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = composeEnhancers(
  applyMiddleware(thunk),
)(createStore);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createAppStore = () => {
  const store = configureStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return { persistor, store };
};
export default createAppStore;
