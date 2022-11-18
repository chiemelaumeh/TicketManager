import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginContext from "./Contexts/loginContext";
import { useContext } from "react";
import "./CssFiles/login.css"
import "./CssFiles/TicketHistory.css"
import './CssFiles/user.css'
import "./CssFiles/admin.css"
import "./CssFiles/profile.css"


import CreateAccount from "./Components/Admin/CreateAccount";
import ManageAccounts from "./Components/Admin/ManageAccounts";
import TicketHistory from "./Components/Admin/TicketHistory";
import SharedLayout from "./Pages/SharedLayout";

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import SinglePage from "./Components/SinglePage/SinglePage";
import ProtectedRoutes from "./Components/ProtectedRoutes";




const App = () => {
  const { user } = useContext(LoginContext)
  const loggedIn = window.localStorage.getItem('isLoggedIn')


  return (
    <Router>
      <div className="App">

        <Routes>

          <Route exact path="/" element={user.isAuth ? <ProtectedRoutes user={user} /> : <Login />} />

          <Route exact path="/admin" element={user.isAuth ? <SharedLayout /> : <Navigate to='/' />}>
            <Route path="/admin/TicketHistory" element={<TicketHistory />} />
            <Route path="/admin/ManageAccounts" element={<ManageAccounts />} />
            <Route path="/admin/CreateAccount" element={<CreateAccount />} />
          </Route>

          <Route exact path="/tech" element={user.isAuth ? <Tech /> : <Navigate to='/' />}>
          </Route>
          <Route path="/tech/:ticket_id" element={<SinglePage />} />


          <Route path="/User" element={user.isAuth ? <User /> : <Navigate to='/' /> || loggedIn ? <User /> : <Navigate to='/' />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;