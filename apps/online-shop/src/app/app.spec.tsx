
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import cartReducer from '../app/store/cart.slice';
import App from './app';

export function createTestStore() {
  const store = configureStore({
        reducer: {
        cartStore:cartReducer,
        }
    })
  return store;
}

describe('App', () => {

    const store = createTestStore();
    it('should render successfully', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <Provider store={store}>{<App />}</Provider>
            </BrowserRouter>
        );

        expect(baseElement).toBeTruthy();
    });
});
