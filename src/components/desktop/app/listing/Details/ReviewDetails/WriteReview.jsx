import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
const WriteReview = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-b pb-3 border-gray-400">
      <div className="d-flex align-items-center">
        <div
          style={{
            width: "80px",
            height: "80px",
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
          className="bg-gray-800 py-4"
        >
          <h1 className="text-md font-bold text-center text-light">8.6</h1>
        </div>
        <div className="mx-2">
          <h1 className="text-xl font-bold">Excellent</h1>
          <p className="text-md text-gray-500">440 reviews</p>
        </div>
        <div className="ml-3 d-flex">
          <p className="text-md text-green-600 mx-1">
            We aim for 100% real reviews
          </p>
          <InfoIcon />
        </div>
      </div>
      <Button variant="outlined" sx={{ height: "100%" }}>
        Write Review
      </Button>
    </div>
  );
};

export default WriteReview;
