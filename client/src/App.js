import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./CssFiles/login.css"
import "./CssFiles/TicketHistory.css"

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import SingleTicket from "./Pages/SingleTicket";
import { useState } from "react";

function App() {
  // const storedValue = localStorage.getItem('auth')

  const [auth, setAuth] = useState(false);

  // const test = () => {
  //   setAuth(true)
  //   localStorage.setItem('auth', auth)
  // }
  // const test1 = () => {
  //   setAuth(false)
  //   localStorage.setItem('auth', auth)
  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/admin" />}
          />
          <Route
            exact
            path="/admin"
            element={auth ? <Admin /> : <Navigate to="/login" />}
          />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/tech" element={<Tech />} />
          <Route path="/tech/:ticketId" element={<SingleTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
