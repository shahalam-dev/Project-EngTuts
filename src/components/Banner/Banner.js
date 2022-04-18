import React from "react";

const Banner = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <h2 className="fs-2 mt-5">Best English Courses by EngTuts</h2>
          <p className="fs-4 py-3">
            Hi! I'm Shahalam. Instructor of EngTuts. I have over 10 years
            experience of teaching English over 2000+ students.
          </p>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid mb-5"
            src="https://i.ibb.co/Qf3k1c9/teacher.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
