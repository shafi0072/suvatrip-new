import React from "react";

import LeftBar from "./LeftBar";
import RightSide from "./RightSide";

const index = () => {
  return (
    <div className="container my-5">
      <h1 className="text-3xl font-bold">
        Your peace of mind is our top priority
      </h1>
      <p className="text-md mt-2">
        Here’s how we’re helping you feel confident welcoming guests:
      </p>

      <div className="mt-5 d-flex justify-content-between align-items-center">
        <LeftBar />
        <RightSide />
      </div>
    </div>
  );
};

export default index;
