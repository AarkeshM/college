import React, { useState } from "react";
import "../styles/Navbar.css";
import devnexusLogo from "../assets/pic1.webp";
import collegeLogo from "../assets/logonew.jpg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="navbar-left">
        <img src={devnexusLogo} alt="DevNexus 2K25" className="logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={toggleDropdown}
        >
          <a href="#events" className="dropdown-trigger">Events ▾</a>
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li><a href="#coding">Coding</a></li>
            <li><a href="#hackathon">Hackathon</a></li>
            <li><a href="#workshops">Workshops</a></li>
          </ul>
        </li>

        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-right">
        <img src={collegeLogo} alt="College Logo" className="college-logo" />
        <div className="college-text">
          <span className="text-white">K.S.R</span><br/>
          <span className="text-white">COLLEGE OF ENGINEERING</span><br />
          <span className="sub-text text-white">AUTONOMOUS | TIRUCHENGODE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
