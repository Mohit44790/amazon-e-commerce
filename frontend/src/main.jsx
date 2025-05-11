import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';

// import { CartProvider } from './context/CartContext.jsx'

import { persistor } from './redux/store.js';
import store from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import "./components/language.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <CartProvider> */}
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
     {/* </CartProvider> */}
  </StrictMode>,
)
