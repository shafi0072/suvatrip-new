import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Steps9 = ({ enhanceData, setEnhanceData, handleOnChange }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Is parking available to guests?
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Parking</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Room Name"
                  name="parking"
                  onChange={(e) => handleOnChange(e)}
                >
                  <MenuItem value={"allowed"}>Allow</MenuItem>
                  <MenuItem value={"Not Allowed"}>Not Allowed</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Is breakfast available to guests?
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Breakfast</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Room Name"
                  name="breakfast"
                  onChange={(e) => handleOnChange(e)}
                >
                  <MenuItem value={"include with the checkin"}>
                    include with checkin
                  </MenuItem>
                  <MenuItem value={"not avaialbe"}>not avaialbe</MenuItem>
                  <MenuItem value={"not include with the checkin"}>
                    not include with the checkin
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <h1 className="text-md text-center font-bold my-3">
              Languages spoken
            </h1>

            <div style={{ width: "100%" }} className="border rounded p-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  What languages do you or your staff speak?
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label=" What languages do you or your staff speak?"
                  // onChange={handleChange}
                  name="Languages"
                  onChange={(e) => handleOnChange(e)}
                >
                  <MenuItem value={"Bangla"}>Bangla</MenuItem>
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Hindi"}>Hindi</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps9;
