import React from "react";
import { useState, useContext } from "react";
import LoginContext from "../Contexts/loginContext";

const Navbar = ({ handleSearch, searchText }) => {

  const { handleLogOut} = useContext(LoginContext)
  return (
    <nav className="navbar">
      <div className="presearch">
        <button className="navlink logo btn">ATHENA</button>

      </div>
      <input type="TEXT" className="search" placeholder="Search" value={searchText} onChange={handleSearch} />
      <div className="postsearch">
        <button className="signoff-btn" onClick={handleLogOut}>LogOut</button>
      </div>
    </nav>
  );
};

export default Navbar;
