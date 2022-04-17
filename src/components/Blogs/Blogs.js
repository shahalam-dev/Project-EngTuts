import React from "react";

const Blogs = () => {
  return (
    <>
      <h2 className="text-center mb-5 fs-2">All Blogs</h2>
      <div className="row my-5">
        <div className="col-md-6">
          <h3 className="fs-3">What is Context Api?</h3>
          <p className="fs-5 mt-3">
            In React Js, usually, we pass data using props. But there is a
            catch. That is, we have to pass through every component. It's called
            props drilling. To get rid of props drilling, React Js introduce a
            special hook called Context API. With the help of Context API, we
            can pass data to any child component without passing data through
            every level.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="fs-3">What is Semantic HTMl Tag?</h3>
          <p className="fs-5 mt-3">
            Semantic HTML or semantic markup is HTML that introduces meaning to
            the web page rather than just presentation. For example, a p tag
            indicates that the enclosed text is a paragraph. This is both
            semantic and presentational because people know what paragraphs are,
            and browsers know how to display them. On the flip side of this
            equation, tags such as b tag and i tag are not semantic. They define
            only how the text should look (bold or italic), and don't provide
            any additional meaning to the markup. Semantic tags make sense
            because everyone benefits: developers, browsers, search engines, and
            ultimately the end-users for a better, richer web experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
