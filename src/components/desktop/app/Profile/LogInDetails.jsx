import React from "react";
import EditIcon from "@mui/icons-material/Edit";
const LogInDetails = ({ user }) => {
  return (
    <div className="bg-gray-600 rounded-4 px-4 py-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-light text-md">Login Details</h1>
      </div>
      <div className="border-b-2 pb-3">
        <h1 className="text-md text-light mt-2">
          Manage your email, phone number and password
        </h1>
      </div>
      <div className="border-b-2 py-3">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-xl text-light">Email Address</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">{user.email} </h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-light text-xl text-end">
              <h1>
                <EditIcon /> Edit
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-3">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-xl text-light">Phone Number</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">{user.phone}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-light text-xl text-end">
              <h1>
                <EditIcon /> Edit
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-3">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-xl text-light">Password</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">*********</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-light text-xl text-end">
              <h1>
                <EditIcon /> Change Password
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInDetails;
