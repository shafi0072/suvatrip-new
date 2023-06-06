import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const RightSide = () => {
  return (
    <>
      <div className="bg-light py-3 shadow-lg px-3 rounded-4 ">
        <h1 className="text-xl font-bold">
          I have multiple properties I rent out year-round
        </h1>
        <p className="text-sm my-6">
          {" "}
          <CheckIcon /> These properties are primarily used for guests
        </p>
        <p className="text-sm my-6">
          {" "}
          <CheckIcon /> I have experience working in the hospitality industry
        </p>
        <button className="btn btn-outline-primary">Learn More</button>
      </div>
    </>
  );
};

export default RightSide;
