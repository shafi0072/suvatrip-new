import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { UserContent } from "@/src/store/AuthContent";
const PersonalDetails = ({ user }) => {
  const { setUser, userInfo } = useContext(UserContent);
  return (
    <div className="bg-gray-600 rounded-4 px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-light text-md">PERSONAL DETAILS</h1>
        <div
          style={{ height: "50px", width: "50px" }}
          className="bg-blue-500 rounded-full"
        >
          <h1 className="text-light font-bold text-3xl text-center pt-2">J</h1>
        </div>
      </div>
      <div className="border-b-2 pb-3">
        <h1 className="text-md text-light mt-2">
          Update your info and find out how its used.
        </h1>
      </div>
      <div className="border-b-2 py-3">
        <div className="row">
          <div className="col-md-4">
            <h1 className="text-xl text-light">Name</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">
                {user?.displayName || userInfo.username || user.fullName}
              </h1>
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
            <h1 className="text-xl text-light">Date of Birth</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">Enter your date of birth</h1>
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
            <h1 className="text-xl text-light">Gender</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">Select you gender</h1>
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
            <h1 className="text-xl text-light">Martial Status</h1>
          </div>
          <div className="col-md-4">
            <div className="">
              <h1 className="text-xl text-light">Select you martial status</h1>
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
    </div>
  );
};

export default PersonalDetails;
