import {compact} from 'lodash';
import logger from 'redux-logger';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import Config from 'react-native-config';
import {clientStorage} from './persister';

const persistConfig = {
  key: String(Config.PERSISTENT_KEY_STORE),
  version: 1,
  storage: clientStorage,
};

const reducers = persistReducer(persistConfig, rootReducer);

const middlewares: any = compact([thunk, __DEV__ ? logger : null]);

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares);
  },
});

const persistor = persistStore(store);

export {store, persistor};
