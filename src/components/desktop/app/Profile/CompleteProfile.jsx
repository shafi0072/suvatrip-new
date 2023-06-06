import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const CompleteProfile = () => {
  return (
    <div className="bg-gray-600 rounded-4 px-4 py-3">
      <div className="row">
        <div className="col-md-6">
          <div>
            <div className="mt-3">
              <div className="d-flex justify-content-between">
                <h1 className="text-xl text-light">Complete your Profile</h1>
                <h1 className="text-xl text-light">57%</h1>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="custom_green_color h-2.5 rounded-full"
                  style={{ width: "57%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-xl  mt-3 text-gray-200">
        Get the best out of Suvatrip by adding the remaining details
      </h1>
      <div className="row bg-gray-200 rounded-4 py-2 my-2">
        <div className="col-md-4">
          <h1>
            <CheckCircleIcon className="text-green-900" /> Verified Email ID
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="text-blue-700">
            <AddCircleIcon /> Add your mobile number
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="text-blue-700">
            <AddCircleIcon /> Complete Basic Info
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
