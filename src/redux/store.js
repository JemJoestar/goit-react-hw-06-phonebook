import { phoneBookReducer } from './phoneBookReducer';
import { filterReducer } from './filterReducer';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookConfig = {
  key: 'phoneBook',
  storage,
  whitelist : ["contacts"]
};

export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phoneBookConfig ,phoneBookReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)
