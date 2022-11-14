import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginContext from "./Contexts/loginContext";
import { useContext } from "react";
import "./CssFiles/login.css"
import "./CssFiles/TicketHistory.css"
import './CssFiles/user.css'
import "./CssFiles/admin.css"


import CreateAccount from "./Components/Admin/CreateAccount";
import ManageAccounts from "./Components/Admin/ManageAccounts";
import TicketHistory from "./Components/Admin/TicketHistory";
import SharedLayout from "./Pages/SharedLayout";

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import SinglePage from "./Components/SinglePage/SinglePage";



const App = () => {
  const { user } = useContext(LoginContext)

  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route path="/" element={user.accessRole === 'admin' ? <Navigate to='/admin' /> : <Login />} />
          <Route exact path="/admin" element={user.accessRole === 'admin' ? <Admin /> : <Navigate to='/'/>} />

          <Route path="/" element={user.accessRole === 'User' ? <Navigate to='/user' /> : <Login />} />
          <Route exact path="/user" element={user.accessRole === 'User' ? <User /> : <Login />} />

          <Route path="/" element={user.accessRole === 'tech' ? <Navigate to='/tech' /> : <Login />} />
          <Route exact path="/tech" element={user.accessRole === 'tech' ? <Tech /> : <Login />} />

          <Route exact path="/tech" element={<Tech />} />

          <Route path="/tech/:ticketId" element={<SinglePage />} />

          <Route path="/admin" element={user.accessRole === 'admin' ? <SharedLayout /> : <Navigate to='/'/>}>
            <Route path="/admin/CreateAccount" element={<CreateAccount />} />
            <Route path="/admin/ManageAccounts" element={<ManageAccounts />} />
            <Route path="/admin/TicketHistory" element={<TicketHistory />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;