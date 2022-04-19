import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3 py-5 shadow">
        <img src={data?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data?.name}</h5>
          <p className="card-text lead">Instructor: {data?.instructor}</p>
          <p className="card-text small">Duration: {data?.duration}</p>
          <p className="mb-3 fs-3">Price: ${data?.price}</p>
          <Link to={`checkout/${data?.id}`} className="btn btn-primary">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
