import React from "react";

const Blogs = () => {
  return (
    <>
      <h2 className="text-center mb-5 fs-2">All Blogs</h2>
      <div className="row  justify-content-center">
        <div className="col-md-6">
          <div className="row my-5">
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                What is the difference between Authentication and Authorization?
              </h3>
              <p className="fs-5 mt-3 lead">
                <strong>Authentication:</strong> Authentication verifies who the
                user is. Authentication works through passwords, one-time pins,
                biometric information, and other information provided or entered
                by the user. Authentication is the first step of a good identity
                and access management process. Authentication is visible to and
                partially changeable by the user. <br />
                <strong>Authorization:</strong> Authorization determines what
                resources a user can access. Authorization works through
                settings that are implemented and maintained by the
                organization. Authorization always takes place after
                authentication. Authorization isn’t visible to or changeable by
                the user.
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                Why are you using firebase? What other options do you have to
                implement authentication?
              </h3>
              <p className="fs-5 mt-3 lead">
                I'm using Firebase mainly for authentication. Firebase has other
                services too. Firebase handles authentication seamlessly and
                securely. There are other companies that provide services like
                Firebase they are Supabase, OAuth, etc.
              </p>
            </div>
            <div className="col-md-12 my-5">
              <h3 className="fs-3">
                What other services does firebase provide other than
                authentication?
              </h3>
              <p className="fs-5 mt-3 lead">
                Firebase provides several services apart from authentication.
                These are Database, Real Database, Storage, Hosting, Cloud
                Function, ML, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
