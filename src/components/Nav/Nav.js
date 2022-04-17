import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="nav nav-pills justify-content-center my-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/blogs" className="nav-link">
            Blogs
          </Link>
          <Link to="/order" className="nav-link">
            Order
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
