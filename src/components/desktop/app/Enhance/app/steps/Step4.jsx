import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
const Step4 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Where is your property located?
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="Location"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property location Here"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Street address
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="StreetAddress"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your Contact name Here"
              />
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Address line 2
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="addressLine2"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your Contact name Here"
              />
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Country/region
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="Country"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your Contact name Here"
              />
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">City</h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="City"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your Contact name Here"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">Post Code</h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="postCode"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property location Here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
