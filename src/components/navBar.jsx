import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/signup">
          OTP-AUTH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex">
            <NavLink className="nav-item nav-link fs-5" to="/signin">
              Sign In
            </NavLink>
            <NavLink className="nav-item nav-link fs-5 " to="/signup">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
