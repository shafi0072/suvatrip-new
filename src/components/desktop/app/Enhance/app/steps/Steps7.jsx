import { room_type } from "@/src/constant/Enhance/CategoryData";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Steps7 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const newEnhanceProperty = { ...enhanceData };
    newEnhanceProperty["roomTypes"] = roomType;
    setEnhanceData(newEnhanceProperty);
  }, [roomType]);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">Room types</h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <div className="row">
                {room_type.map((items, index) => (
                  <div className="col-md-3 my-3 px-3">
                    <button
                      className={`btn ${
                        roomType === items ? "btn-dark" : "btn-outline-dark"
                      } px-3`}
                      onClick={() => setRoomType(items)}
                    >
                      {items}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">Room Name</h1>

            <div style={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Room Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="roomName"
                  // value={age}
                  label="Room Name"
                  onChange={(e) => handleOnChange(e)}
                >
                  <MenuItem value={"dexlux"}>dexlux</MenuItem>
                  <MenuItem value={"Luxary"}>Luxary</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Custom name (optional)
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="roomName"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-3 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property location Here"
              />
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Smoking policy
            </h1>

            <div style={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Smoking policy
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  name="smockPolicy"
                  label="Room Name"
                  onChange={(e) => handleOnChange(e)}
                >
                  <MenuItem value={"allowed"}>allowed</MenuItem>
                  <MenuItem value={"not allowed"}>not allowed</MenuItem>
                  <MenuItem value={"Request"}>Request</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Number of rooms (of this type)
            </h1>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                id="large-input"
                name="numberOfRooms"
                onChange={(e) => handleOnChange(e)}
                className="block w-100 p-3 text-gray-900 border border-gray-600 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="write your property location Here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps7;
