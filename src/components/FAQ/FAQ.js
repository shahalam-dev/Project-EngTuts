import React from "react";

const FAQ = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-12">
        <h2 className="text-center mb-5 fs-1">Frequently Asked Questions</h2>
      </div>
      <div className="col-md-6">
        <img
          src="https://i.ibb.co/NjvTdCM/eng-faq.jpg"
          className="img-fluid"
          alt="..."
        />
      </div>
      <div className="col-md-6">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Do you have private and group English classes?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We only offer private or semi-private English lessons that are
                customized specifically for your needs and goals. This allows
                you to improve as quickly as possible and to get the best return
                on your investment of time and money. This also allows us to
                create a course that is designed around your schedule .
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is the curriculum for the English classes ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                For our premium course, the curriculum is designed for each
                student based on needs and goals. During your free trial lesson,
                we will discuss your goals and your tutor will continue to work
                with you to design the right curriculum for you. Your lesson
                curriculum can include business English, general fluency, idioms
                and expressions, vocabulary, grammar, interview skills, reading,
                writing, TOEFL and more. View our English course options. If you
                choose our Speakative conversation course, we have a very
                specific curriculum designed to help you build strong
                conversation skills.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Do you use a specific textbook?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                For the premium tutoring program, the needs and goals of each
                student are very different; therefore, your tutor will bring
                lesson materials that are appropriate for your level and goals.
                You do not need to purchase a specific textbook for your English
                course. If you choose the Speakative conversation program, we
                have a very specific curriculum designed to help you deepen your
                vocabulary, conversation skills, and cultural competence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
