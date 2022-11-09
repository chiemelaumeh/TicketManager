import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './Contexts/loginContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);


