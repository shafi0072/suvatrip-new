import React from "react";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";
import CompleteProfile from "./CompleteProfile";
import LogInDetails from "./LogInDetails";
import PersonalDetails from "./PersonalDetails";
import ProfileBar from "./profileBar";

const index = ({ user }) => {
  const resulation = screenSize("600px");
  return (
    <div className="container my-4">
      {
        <div
          className={`${
            resulation
              ? ""
              : "grid grid-rows-1 grid-flow-col grid-flow-row gap-2"
          }`}
        >
          <div
            className={`row-span-3 ${
              resulation ? "my-2 " : ""
            } col-span-1 ... d-flex justify-content-center`}
          >
            <ProfileBar />
          </div>
          <div className={resulation ? "my-2" : "col-span-2  "}>
            <CompleteProfile />
          </div>
          <div className={resulation ? "my-2" : "col-span-2  "}>
            <PersonalDetails user={user} />
          </div>
          <div className={resulation ? "my-2" : "col-span-2  "}>
            <LogInDetails user={user} />
          </div>
        </div>
      }
    </div>
  );
};

export default index;
