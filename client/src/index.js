import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginProvider } from './Contexts/loginContext';
import { SingleTicketProvider } from './Contexts/SingleTicketContext';
import { CommentProvider } from './Contexts/CommentsContext';
import { PicProvider } from './Contexts/UserPContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <CommentProvider>
    <SingleTicketProvider>
     <LoginProvider>
      <PicProvider>
      <App />
      </PicProvider>
     </LoginProvider>
    </SingleTicketProvider>
  </CommentProvider>
</React.StrictMode>
);


