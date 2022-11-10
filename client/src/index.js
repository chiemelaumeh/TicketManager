import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './Contexts/loginContext';
import { SingleTicketProvider } from './Contexts/SingleTicketContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SingleTicketProvider>
     <LoginProvider>
      <App />
     </LoginProvider>
    </SingleTicketProvider>
  </React.StrictMode>
);


