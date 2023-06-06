import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Welcome = ({ setProgress1, progress1 }) => {
  const [show, setShow] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setProgress1(progress1 + 10);
  };

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-5">
        <div className={`fade-in col-md-6 ${show ? "is-visible" : ""}`}>
          <h1 className="text-md font-bold my-3">step-1</h1>
          <h1 className="text-5xl font-bold">
            Welcome To <br /> Suvatrip Enhance Property
          </h1>
          <p className="text-md my-3">
            We are very glad to have you in our community. in this step <br />{" "}
            We Need Some Information about You and about your hotel location. so
            If you are ready <br /> then click on The next button
          </p>
        </div>
        <div
          className={`fade-in col-md-6 d-flex justify-content-center ${
            show ? "is-visible" : ""
          }`}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20221229/original/pngtree-cheerful-javanese-people-welcome-guests-png-image_8824648.png"
            alt=""
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mb-2">
        <button
          onClick={handleNext}
          className="btn custom_green_color px-5 text-light"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Welcome;
