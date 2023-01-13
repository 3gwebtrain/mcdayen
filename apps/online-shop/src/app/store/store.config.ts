import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart.slice';

const persistConfig: { key: string; version:number,storage:any} = {
  key: "root",
  version: 1,
  storage
}

const reducerForPersist = combineReducers({
  cartStore: cartReducer,
});

const persistedReducers = persistReducer(persistConfig, reducerForPersist);  

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;