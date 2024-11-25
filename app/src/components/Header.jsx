import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import "./Header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleIconClick = () => navigate("/cart");
  const handleHomeClick = () => navigate("/home");

  return (
    <div className="header">
      <div className="head-menu">
        <Sidebar />
      </div>
      <div className="img">
        <img src="./images/logo.png" alt="logo-img" />
      </div>
      <div className="search-btn">
        <a href="#">
          <FaSearch className="search-icon" />
        </a>
        <input type="text" placeholder=" search item" />
      </div>
      <nav className="navbar-menu">
        <a onClick={handleHomeClick} >Home</a>
        <div className="dropdown">
          <a href="#pages" onClick={toggleDropdown}>
            Pages
          </a>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="#about">About Us</a>
              <a href="#shop">Shop</a>
            </div>
          )}
        </div>
      </nav>
      <nav className="navbar-icons">
        <div onClick={handleIconClick}>
           <FaShoppingCart className="icon" /> cards
        </div>
      </nav>
    </div>
  );
}

export default Header;
