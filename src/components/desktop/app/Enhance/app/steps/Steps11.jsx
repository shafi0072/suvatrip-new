import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Steps11 = () => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container " style={{ height: "60vh" }}>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="bg-gray-100">
            <div className="bg-white p-6  md:mx-auto">
              <div className="d-flex justify-content-center">
                <img
                  src="https://media.tenor.com/BSY1qTH8g-oAAAAM/check.gif"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h3 className="md:text-md text-base text-gray-900 font-semibold text-center">
                  Well Done!
                </h3>
                <p className="text-gray-600 my-2">
                  You have Successfully completed the Step-2 <br /> Now in the
                  Step-3, We need Your Hotel's Photos and payment information.
                </p>
                <p> So click on the Next button to procced with step-3 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps11;
