import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

const ResetPassword = () => {
  const { handlePasswordReset } = useFirebase();
  const [email, setEmail] = useState("");
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePasswordReset(email);
  };
  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-md-6">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
