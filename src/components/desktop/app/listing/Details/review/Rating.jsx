import React from "react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
const Rating = () => {
  return (
    <div className="py-3 px-4">
      <h1 className="text-md">Overall Rating</h1>
      <div className="row mt-5">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <ModeCommentOutlinedIcon
            sx={{ fontSize: "50px" }}
            className="text-primary"
          />
          <div className="mx-4">
            <h1 className="text-md font-bold">Very grood</h1>
            <p className="text-gray-500 text-sm">From 7136 reviews</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mx-4 text-center">
            <h1 className="text-md font-bold">7.9</h1>
            <p className="text-gray-500 text-md">Service</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mx-4 text-center">
            <h1 className="text-md font-bold">7.8</h1>
            <p className="text-gray-500 text-md">Value for money</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mx-4 text-center">
            <h1 className="text-md font-bold">7.7</h1>
            <p className="text-gray-500 text-md">Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
