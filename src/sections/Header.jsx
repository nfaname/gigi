import React, { useState, useEffect } from "react";
import logo from "../assets/Icons & Logo/GIGI_Shop_Logo.png";
import cart from "../assets/Icons & Logo/Icon_Shop.png";
import "../style/header.css";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuClicked ? "hidden" : "auto";
  }, [isMenuClicked]);

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <header>
      <div className="nav-container">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          {!isMenuClicked && <img src={cart} alt="cart" className="cart" />}
          <div className="burger-menu" onClick={toggleMenu}>
            <div
              className={`burger-bar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            ></div>
            <div
              className={`burger-bar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            ></div>
            <div
              className={`burger-bar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            ></div>
          </div>
        </nav>
      </div>

      {/* Меню снизу */}
      <div className={`menu ${isMenuClicked ? "visible" : ""}`}>
        <ul className="menu-open">
          <li className="text-7xl">
            <a href="#">INFO</a>
          </li>
          <li className="text-7xl">
            <a href="#">SHOP</a>
          </li>
          <li className="text-7xl">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
