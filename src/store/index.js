import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'theme'],
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composedEnhancer);
export const persistor = persistStore(store);
