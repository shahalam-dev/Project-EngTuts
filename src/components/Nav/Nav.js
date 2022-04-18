import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="nav nav-pills justify-content-center my-5">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/blogs" className="nav-link">
            Blogs
          </NavLink>
          <NavLink to="/order" className="nav-link">
            Order
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
