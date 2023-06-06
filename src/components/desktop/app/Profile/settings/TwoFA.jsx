import React from "react";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import { useState } from "react";
import PhoneInputField from "./phonrNumber";

const TwoFA = () => {
  const [is2FAClick, setIs2FAClick] = useState(false);
  return (
    <div className="row">
      <div className="col-md-4">
        <h1 className="text-xl text-light">
          Two-Factor <br />
          Authentication
        </h1>
      </div>
      <div className="col-md-4">
        {!is2FAClick && (
          <div>
            <h1 className="text-xl text-light">
              Add a phone number to setup two-factor authetication
            </h1>
          </div>
        )}
        {is2FAClick && (
          <div>
            <h1 className="text-md text-light">Phone number</h1>
            <PhoneInputField />
          </div>
        )}
      </div>
      <div className="col-md-4">
        <div className="text-light text-xl d-flex justify-content-end">
          {!is2FAClick && (
            <h1 onClick={(e) => setIs2FAClick(true)}>
              <PhonelinkSetupIcon /> Set up
            </h1>
          )}
          {is2FAClick && (
            <div className="d-flex align-items-center">
              <button className="btn btn-primary mx-2">Send Code</button>
              <button
                className=" py-2 px-4 rounded-2 bg-gray-300 text-gray-700 text-sm"
                onClick={(e) => setIs2FAClick(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
