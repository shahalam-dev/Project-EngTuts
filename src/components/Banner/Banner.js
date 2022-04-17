import React from "react";

const Banner = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6 py-5">
          <div className="align-middle">
            <h2 className="fs-2 mt-5">Sleek and ultrathin</h2>
            <p className="fs-4 py-3">
              Do more on the move and look good while you do it. Sleek,
              ultrathin and available in a stylish, dual-color design, Galaxy
              Book pro is the lightest Galaxy Book ever, so it won't weigh you
              down.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid mb-5"
            src="https://i.ibb.co/n8jw62h/laptop-crop.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
