import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

// reducers
import systemReducer from './reducers/system';

// configuration of persis storage
const reducer = persistReducer(
  { key: 'me-cache', storage: storage },  // persist config
  combineReducers({ system: systemReducer })
);

export default function configureStorage() {
  const middlewares = [ thunkMiddleware ];
  const store = createStore(reducer, compose(applyMiddleware(...middlewares)));
  const persistor = persistStore(store);

  return { store, persistor }
}