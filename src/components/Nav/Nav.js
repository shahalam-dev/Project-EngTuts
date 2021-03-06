import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";

const Nav = () => {
  const { logOut } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="nav nav-pills justify-content-center my-5">
          <NavLink to="/" className="btn btn-outline-info" type="button">
            Home
          </NavLink>
          <NavLink to="/about" className="btn btn-outline-info" type="button">
            About
          </NavLink>
          <NavLink to="/blogs" className="btn btn-outline-info" type="button">
            Blogs
          </NavLink>
          {!user && (
            <NavLink
              to="/register"
              className="btn btn-outline-info"
              type="button"
            >
              Register
            </NavLink>
          )}
          {!user && (
            <NavLink to="/login" className="btn btn-outline-info" type="button">
              Login
            </NavLink>
          )}
          {user && (
            <button
              className="btn btn-outline-info"
              type="button"
              onClick={logOut}
            >
              Sign Out
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
