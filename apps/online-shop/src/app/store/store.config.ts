import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart.slice';
export const store = configureStore({
    reducer: {
      cartStore:cartReducer,
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;