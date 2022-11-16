import React from "react";
import ReactDOM from "react-dom/client";
import { LoginProvider } from "./Contexts/loginContext";
import { SingleTicketProvider } from "./Contexts/SingleTicketContext";
import { CommentProvider } from "./Contexts/CommentsContext";
import { PicProvider } from "./Contexts/UserPContext";
import App from "./App";
import { TechPageProvider } from "./Contexts/TechPageContext";
import { TechProvider } from "./Contexts/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TechProvider>
      <TechPageProvider>
        <CommentProvider>
          <SingleTicketProvider>
            <LoginProvider>
              <PicProvider>
                <App />
              </PicProvider>
            </LoginProvider>
          </SingleTicketProvider>
        </CommentProvider>
      </TechPageProvider>
    </TechProvider>
  </React.StrictMode>
);
