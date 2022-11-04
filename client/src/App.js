import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Login from "./Pages/Login";
import Admin from "./Pages/Adim";
import User from "./Pages/User";
import Tech from "./Pages/Tech";
import { useState } from "react";



function App() {

  const [auth, setAuth] = useState(false)

  const test = () => {
    setAuth(true)
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={!auth ? <Login test={test} /> : <Navigate to='/admin' />} />
          <Route exact path="/admin" element={auth ? <Admin /> : <Navigate to='/login' />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/tech" element={<Tech />} />

        </Routes>
      </div>
    </Router>


  );


}

export default App;
