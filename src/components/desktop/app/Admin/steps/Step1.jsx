import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import Address from "./Address";

const Step1 = ({ setNavigation, setStepsData, stepsData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");

  const handleStep1OnChange = (e) => {
    let newStepsData = { ...stepsData };
    newStepsData[e.target.name] = e.target.value;
    newStepsData["PhoneNumber"] = phoneNumber;
    newStepsData["AlternativePhoneNumber"] = alternativeNumber;
    setStepsData(newStepsData);
  };
  return (
    <div>
      <h1 className="text-md font-bold">Welcome Md Abdullah Al Safi!</h1>
      <p className="text-sm">
        Start by telling us your property's name, contact details and address.
      </p>

      <div className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4">
              <form className="w-full max-w-sm ">
                <div>
                  <label htmlFor="propertyName" className="text-xl">
                    What is the name of your property?
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    onChange={handleStep1OnChange}
                    id=""
                    className="form-control my-2"
                    placeholder="What is Your Hotel Name ?"
                  />
                  <p className="text-sm text-gray-500">
                    This name will be seen by guests when they search for a
                    place to stay.
                  </p>
                </div>
                <div className="my-4">
                  <label htmlFor="star" className="text-sm">
                    star
                  </label>
                  <FormControl fullWidth className="bg-gray-100">
                    <InputLabel id="demo-simple-select-label">Star</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="Star"
                      label="Star"
                      onChange={handleStep1OnChange}
                    >
                      <MenuItem value={"N/A"}>N/A</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                  <p className="text-sm text-gray-500">
                    This name will be seen by guests when they search for a
                    place to stay.
                  </p>
                </div>
              </form>
            </div>
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-4">
              <form className="w-full  ">
                <div className="max-w-sm">
                  <h1 htmlFor="propertyName" className="text-xl">
                    What are the contact details for this property?
                  </h1>
                  <label htmlFor="star" className="text-sm mt-3">
                    Contact name
                  </label>
                  <input
                    type="text"
                    name="ContactName"
                    onChange={handleStep1OnChange}
                    id=""
                    className="form-control my-2"
                    placeholder="Your Name"
                  />
                </div>
                <p className="text-sm mt-4">
                  Contact number (so we can assist with your registration when
                  needed)
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="star" className="text-sm mt-3">
                      Phone number
                    </label>
                    <PhoneInput
                      className="form-control"
                      placeholder="Enter phone number"
                      onChange={setPhoneNumber}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="star" className="text-sm mt-3">
                      Alternative phone number (optional)
                    </label>
                    <PhoneInput
                      className="form-control"
                      placeholder="Enter phone number"
                      onChange={setAlternativeNumber}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-4">
              <Address
                setStepsData={setStepsData}
                stepsData={stepsData}
                handleStep1OnChange={handleStep1OnChange}
              />
            </div>
            <button
              className="btn btn-primary form-control"
              onClick={() => setNavigation("Choose Your Room")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
