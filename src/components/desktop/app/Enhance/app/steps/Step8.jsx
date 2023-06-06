import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Step8 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container " style={{ height: "60vh" }}>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Room size (optional)
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <input
                type="number"
                id="large-input"
                name="roomSize"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property Room size (optional)"
              />
              <p className="text-sm  mt-3">
                <span className="text-md font-bold">Note:</span> This Number
                will count as square feets
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Price per night
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <input
                type="number"
                id="large-input"
                name="Per_Night"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property price per night"
              />
              <p className="text-sm  mt-3">
                <span className="text-md font-bold">Note:</span> This Number
                will count as USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
