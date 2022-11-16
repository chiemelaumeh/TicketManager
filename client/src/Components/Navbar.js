import React from "react";
import { useState } from "react";

const Navbar = ({ handleSearch, searchText }) => {


  return (
    <nav className="navbar">
      <div className="presearch">
        <button className="navlink logo btn">ATHENA</button>
        <button className="navlink usernav btn">Users</button>
      </div>
      <input type="TEXT" className="search" placeholder="Search" value={searchText} onChange={handleSearch} />
      <div className="postsearch">
        <button className="signoff btn">Sign Off</button>
      </div>
    </nav>
  );
};

export default Navbar;
