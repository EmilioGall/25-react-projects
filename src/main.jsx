import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App.jsx';
import { StoreProvider } from './store.jsx'; // Import the StoreProvider

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <StoreProvider> {/* Wrap the App component with StoreProvider */}

      <App />

    </StoreProvider>

  </StrictMode>,

);
