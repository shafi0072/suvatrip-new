import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
const PasswordChange = () => {
  const [isPasswordRestClick, setIsPasswordRestClick] = useState(false);
  return (
    <div className="row">
      <div className="col-md-4">
        <h1 className="text-xl text-light">Password</h1>
      </div>
      <div className="col-md-4">
        <div>
          {!isPasswordRestClick && (
            <h1 className="text-xl text-light">
              Reset your password regularly to keep your account secure
            </h1>
          )}
          {isPasswordRestClick && (
            <h1 className="text-xl text-light">
              To change your password we need to reset link to your email
              address
            </h1>
          )}
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-light text-xl d-flex justify-content-end cursor-pointer">
          {!isPasswordRestClick && (
            <h1 onClick={(e) => setIsPasswordRestClick(true)}>
              <EditIcon /> Reset
            </h1>
          )}
          {isPasswordRestClick && (
            <div className="d-flex align-items-center">
              <button className="btn btn-primary mx-2">Send Email</button>
              <button
                className=" py-2 px-4 rounded-2 bg-gray-300 text-gray-700 text-sm"
                onClick={(e) => setIsPasswordRestClick(false)}
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

export default PasswordChange;
