import React from "react";
import ViewMap from "./component/ViewMap";

export const Contact = () => {
  return (
    <>
      <section className="sectionImg">
        <center>
          <h1>Contact</h1>
        </center>
      </section>
      <section>
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 contactForm">
              <form className="pt-5 pb-5">
                <center>
                  <h4>Send Us A Message</h4>
                  <div>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Your Email Address"
                      className="contactInput"
                    />
                    <i className="fa-solid fa-envelope emailIcon"></i>
                  </div>
                  <div className="pt-4 pb-4">
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="8"
                      cols="50"
                      placeholder="How Can We Help?"
                      className="contactField"
                    />
                  </div>
                  <div>
                    <div className="pt-1">
                      <button type="button" className="ProceedToCheckout">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </center>
              </form>
            </div>
            <div className="col-lg-6 contactForm p-5">
              <div className="d-flex py-3">
                <div className="">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ms-3">
                  <p> Address </p>
                  <span>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </span>
                </div>
              </div>

              <div className="d-flex py-3">
                <div className="">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="ms-3">
                  <p> Lets Talk </p>
                  <span className="active"> +1 800 1236879</span>
                </div>
              </div>
              <div className="d-flex py-3">
                <div className="">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="ms-3">
                  <p> Sale Support </p>
                  <span className="active">contact@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ViewMap />
      </section>
    </>
  );
};
