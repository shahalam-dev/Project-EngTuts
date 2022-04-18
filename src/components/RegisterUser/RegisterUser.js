import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const RegisterUser = () => {
  const { handleGoogleSignIn, createUserWithEmail } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmail(name, email, password);
  };
  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            onBlur={handleNameInput}
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            onBlur={handleEmailInput}
            type="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Email Address
          </label>
          <input
            onBlur={handlePasswordInput}
            type="password"
            id="pass"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <hr />
        <div className="mt-3">
          <button onClick={handleGoogleSignIn} className="btn btn-info">
            <img
              src="https://i.ibb.co/2npfC61/google.png"
              alt=""
              className="mx-2"
            />
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
