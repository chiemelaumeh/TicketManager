import React from "react";
import { useState } from "react";

const Navbar = () => {
 const [text, setText] = useState("")
  const handleChange = (e) => {
   setText(e.target.value)
  }
  return (
    <nav className="navbar">
      <div className="name">
        <button className="navlink logo btn">ATHENA</button>
        <button className="navlink usernav btn">Users</button>
      </div>
      <input type="TEXT" className="search" placeholder="Search" value={text} onChange={handleChange} />
      <div className="sign">
        <button className="signoff btn">Sign Off</button>
      </div>
    </nav>
  );
};

export default Navbar;
