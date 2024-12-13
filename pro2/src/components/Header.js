import React from "react";
import './Header.css';
import logo from "../images/logo-sm-white.png";



const Header = () => {
  return (
    <header>
      <div className="nav_container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
        <div className="button">
          <a href="#home">Reservation</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
