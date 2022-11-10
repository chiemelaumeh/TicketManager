import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginContext from "./Contexts/loginContext";
import { useContext } from "react";
import "./CssFiles/login.css"
import "./CssFiles/TicketHistory.css"
import "./CssFiles/admin.css"

import CreateAccount from "./Components/Admin/CreateAccount";
import ManageAccounts from "./Components/Admin/ManageAccounts";
import TicketHistory from "./Components/Admin/TicketHistory";
import SharedLayout from "./Pages/SharedLayout";

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import SingleTicket from "./Pages/SingleTicket";



const App = () => {

const {userRole} = useContext(LoginContext)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={userRole === 'admin' ? <Navigate to="/admin"/> : <Login/>}/>

          <Route exact path="/admin" element={userRole === 'admin' ? <Admin />:<Login/>}/>
          <Route exact path="/user" element={<User />} />
          <Route exact path="/tech" element={<Tech />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/tech/:ticketId" element={<SingleTicket />} />
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