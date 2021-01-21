import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import "animate.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {" "}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <p className="animate__backInDown">Mala Pekara</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={click ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Početna
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className={click ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Galerija
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/items"
                className={click ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Proizvodi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={click ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                O nama i Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/delivery"
                className={click ? "nav-links active" : "nav-links"}
                onClick={closeMobileMenu}
              >
                Objekti i Lokacije
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
