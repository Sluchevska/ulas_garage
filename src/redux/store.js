import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';



const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
     auth: persistReducer(authPersistConfig, authReducer),
    

  },

  devTools: process.env.NODE_ENV !== 'production',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);