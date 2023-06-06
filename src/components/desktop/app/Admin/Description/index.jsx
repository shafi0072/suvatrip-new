import React from "react";
import RightContent1 from "./RightContent1";
import LeftContent1 from "./LeftContent1";

const index = () => {
  return (
    <div className="bg- py-4">
      <div className="container">
        <h1 className="text-3xl font-bold">Benefits of working with us</h1>
        <div className="row my-4">
          <div className="col-md-6">
            <LeftContent1 />
          </div>
          <div className="col-md-6">
            <RightContent1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
