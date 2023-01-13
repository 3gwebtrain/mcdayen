import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store/store.config';
import './styles.scss';

import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/app';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
const presister = persistStore(store);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={presister}>
                    <App />
                </PersistGate>
                
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
