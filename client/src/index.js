import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './Contexts/loginContext';
import { SingleTicketProvider } from './Contexts/SingleTicketContext';
import { CommentProvider } from './Contexts/CommentsContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <CommentProvider>
    <SingleTicketProvider>
     <LoginProvider>
      <App />
     </LoginProvider>
    </SingleTicketProvider>
  </CommentProvider>
</React.StrictMode>
);


