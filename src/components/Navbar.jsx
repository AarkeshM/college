import React, { useState } from "react";
import "../styles/Navbar.css";
import paradox from "../assets/erasebg-transformed.png";
import collegeLogo from "../assets/logonew.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src={paradox} alt="Paradox 2K25" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={toggleDropdown}
        >
          
            <Link to="/events" className="text-white dropdown-trigger hover:text-gray-300">
              Events
            </Link>
          
        </li>
      </ul>

      <div className="navbar-right">
        <img src={collegeLogo} alt="College Logo" className="college-logo" />
        <div className="college-text">
          <span className="text-white">K.S.R</span><br />
          <span className="text-white">COLLEGE OF ENGINEERING</span><br />
          <span className="sub-text text-white">AUTONOMOUS | TIRUCHENGODE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
