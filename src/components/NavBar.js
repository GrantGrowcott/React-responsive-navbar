import React, { useState, useEffect } from "react";
import { NavLink, useLocation} from "react-router-dom";
import "./NavBar.css";
import {  HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from '../Icons/gg-logo.png';

function NavBar() {
  const [click, setClick] = useState(false);
  console.log(click);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const location = useLocation();

  const handleClick = () => {
    setIsTransitioning(true);
    setClick(!click);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
  return (
    <>
      <nav className={`navbar ${isTransitioning ? "transitioning" : ""}`}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <img src = {logo} alt= "logo"/>
            </span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/reads"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                My Reads
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
