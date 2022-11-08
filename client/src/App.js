import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./CssFiles/login.css"
import "./CssFiles/TicketHistory.css"

import CreateAccount from "./Components/Admin/CreateAccount";
import ManageAccounts from "./Components/Admin/ManageAccounts";
import TicketHistory from "./Components/Admin/TicketHistory";
import SharedLayout from "./Pages/SharedLayout";

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import SingleTicket from "./Pages/SingleTicket";
import { useState } from "react";

function App() {

  const [login, setLogin] = useState('');
  const setLoginState = (value) => {
    setLogin(value)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"

            element={login === 'admin' ? <Navigate to="/admin" /> : <Login setLoginState={setLoginState} />}

          />
          <Route
            exact
            path="/admin"
            element={<Admin />}
          />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/tech" element={<Tech />} />
          <Route path="/tech/:ticketId" element={<SingleTicket />} />

          <Route path='/login' element={<Login setLoginState={setLoginState} />}/>

          <Route path="/admin" element={<SharedLayout />}>
          <Route path= "/admin/CreateAccount" element={<CreateAccount />}/>
          <Route path= "/admin/ManageAccounts" element={<ManageAccounts/>}/>
          <Route path= "/admin/TicketHistory" element={<TicketHistory />}/>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;