
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <ul className="nav-menu left">
          <li className="nav-item">
            <a href="#pricing" className="nav-links">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Work</a>
          </li>
        </ul>
        
       
        <a href="#home" className="navbar-logo">Gloutir</a>

       
        <ul className="nav-menu right">
          <li className="nav-item">
            <a href="#contact" className="nav-links">Let's Talk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
