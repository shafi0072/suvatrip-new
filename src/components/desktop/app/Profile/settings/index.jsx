import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordChange from "./PasswordChange";
import TwoFA from "./TwoFA";
import DeleteAccount from "./DeleteAccount";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  return (
    <div className="container">
      <h1 className="text-md my-3 font-bold underline">
        <span className="cursor-pointer" onClick={() => router.push("/user")}>
          My Account
        </span>{" "}
        / Settings
      </h1>
      <div className="bg-gray-600 rounded-4 px-4 py-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-light text-md">Security Setting</h1>
        </div>
        <div className="border-b-2 pb-3">
          <h1 className="text-md text-light mt-2">
            Adjust your security setting and set up two-factor authentication
          </h1>
        </div>
        <div className="border-b-2 py-3">
          <PasswordChange />
        </div>
        <div className="border-b-2 py-3 ">
          <TwoFA />
        </div>
        <div className="border-b-2 py-3 ">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-xl text-light">Active Sessions</h1>
            </div>
            <div className="col-md-4">
              <div>
                <h1 className="text-xl text-light">
                  Selecting “Sign out” will sign you out from all devices expect
                  this one. This can take up to 10 minutes
                </h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-light text-xl d-flex justify-content-end">
                <h1>
                  <LogoutIcon /> Sign out
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-3 ">
          <DeleteAccount />
        </div>
      </div>
    </div>
  );
};

export default index;
