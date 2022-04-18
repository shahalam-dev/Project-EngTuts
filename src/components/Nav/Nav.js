import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Nav = () => {
  const { logOut } = useFirebase();
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
          <button className="nav-link" onClick={logOut}>
            Sign Out
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
