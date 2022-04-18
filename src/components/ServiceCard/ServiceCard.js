import React from "react";

const ServiceCard = ({ data }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3 py-5 shadow">
        <img src={data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="mb-3 fs-3">Price: ${data.price}</p>
          <a href="dsf" className="btn btn-primary">
            Enroll now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
