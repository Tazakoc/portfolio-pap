import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { AppProvider } from './hooks/contextAPI'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App/>
  </AppProvider>
);
