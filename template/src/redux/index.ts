import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {combineReducers} from 'redux';
import {rtkQueryErrorLogger} from '../utils/errorLogger';
import usersSlice from './slicers/users';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import usersApi from './services/api/users';

const reducers = combineReducers({
  [usersSlice.name]: usersSlice.reducer,

  // This is for RTK Query.
  [usersApi.reducerPath]: usersApi.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whitelist: [usersSlice.name],
    // Don't forget to add APIs here, shouldn't be necessary but
    // would prevent any bugs if redux-persist changes the behavior.
    blacklist: [usersApi.reducerPath],
  },
  reducers,
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features from `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([usersApi.middleware, rtkQueryErrorLogger]),
});

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
