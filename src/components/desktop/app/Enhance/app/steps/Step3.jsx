import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
const Step3 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);
  useEffect(() => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty["phoneNumber"] = phoneNumber;
    newEnhanceProperty["alternativePhoneNumber"] = alternativeNumber;
    setEnhanceData(newEnhanceProperty);
  }, [alternativeNumber, phoneNumber]);

  return (
    <div className="container ">
      <div className="row d-flex align-items-center mt-5">
        <div
          className={`fade-in col-md-12 d-flex justify-content-center mt-5 ${
            show ? "is-visible" : ""
          }`}
        >
          <div className="">
            <h1 className="text-md text-center font-bold my-3">
              Your Contact name?
            </h1>

            <div style={{ width: "120%" }}>
              <input
                type="text"
                id="large-input"
                name="contactName"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your Contact name Here"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex align-items-center mt-5">
        <div
          className={`fade-in col-md-12 d-flex justify-content-center mt-5 ${
            show ? "is-visible" : ""
          }`}
        >
          <div className="text-center ml-5">
            <h1 className="text-md font-bold my-3">
              Contact number (so we can assist with your registration when
              needed)
            </h1>
            <div className="mb-6">
              <div className="  rounded-5 p-3">
                <div className="row">
                  <div className="col-md-6 my-3">
                    <label htmlFor="star" className="text-md mt-3">
                      Phone number
                    </label>
                    <PhoneInput
                      className="form-control h-full"
                      placeholder="Enter phone number"
                      onChange={setPhoneNumber}
                    />
                  </div>
                  <div className="col-md-6 my-3">
                    <label htmlFor="star" className="text-md mt-3">
                      Alternative phone number (optional)
                    </label>
                    <PhoneInput
                      className="form-control h-full"
                      placeholder="Enter phone number"
                      onChange={setAlternativeNumber}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
