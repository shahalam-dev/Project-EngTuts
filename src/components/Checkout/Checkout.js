import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../../contexts/CoursesContext";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

const Checkout = () => {
  const params = useParams();
  const courses = useCourses();
  const navigate = useNavigate();
  const course = courses.find((item) => item.id === params.id);
  const handleCheckOut = () => {
    navigate("/thanks");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2 className="text-center my-5 fs-1">{params.name}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input type="text" id="address" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone-number" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-number"
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            onClick={handleCheckOut}
            className="btn btn-outline-info btn-lg"
          >
            Proceed Enroll
          </button>
        </form>
      </div>
      <div className="col-md-4">
        <div className="row">
          <CheckoutCard data={course}></CheckoutCard>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
