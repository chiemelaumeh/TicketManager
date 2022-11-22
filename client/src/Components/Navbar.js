import React from "react";
import { useState, useContext } from "react";
import LoginContext from "../Contexts/loginContext";
import { BiLogOut } from "react-icons/bi"

const Navbar = ({ handleSearch, searchText }) => {

  const { handleLogOut} = useContext(LoginContext)
  return (
    <nav className="navbar">
      <div className="presearch">
        <button className="navlink logo">ATHENA</button>

      </div>
      <input type="TEXT" className="search" placeholder="Search" value={searchText} onChange={handleSearch} />
      <div className="postsearch">
        <button className="signoff-btn" onClick={handleLogOut}><BiLogOut /> LogOut</button>
      </div>
    </nav>
  );
};

export default Navbar;
