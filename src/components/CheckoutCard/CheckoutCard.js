import React from "react";

const CheckoutCard = ({ data }) => {
  return (
    <div className="col-md-12">
      {data && (
        <div className="card my-3 py-5 shadow">
          <img src={data?.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data?.name}</h5>
            <p className="card-text">{data?.description}</p>
            <p className="mb-3 fs-3">Price: ${data?.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutCard;
