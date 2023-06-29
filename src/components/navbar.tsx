import React, { useState } from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/CHATTER.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { path } from "../Router/router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="parent-nav">
      <div className="navbar-container">
        <div>
          <Link to="/" className="navbarLogo">
            <img src={Logo} alt="logo" className="navbarLogoImg" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`navbarLinks ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={path.HOME}>Home</Link>
            </li>
            <li>About us</li>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
          <div className="authButtonsContainer">
            <div>
              <Link to={path.LOGIN}>
                <button className="authButton">
                  <div className="authButtonContent">
                    <div className="authButtonText">Log in</div>
                  </div>
                </button>
              </Link>
            </div>

            <div>
              <Link to={path.REGISTER}>
                <button className="authButton signupButton">
                  <div className="authButtonContent">
                    <div className="authButtonText">Sign up</div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
