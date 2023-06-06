import React, { useEffect, useState } from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import StarCounting from "../../../core/lib/startCounting";
import CheckMark from "../../../core/lib/checkMark/Checkmark";
import moment from "moment";
const RoomInfo = ({ myQuery, data }) => {
  const startDate = moment(data?.startDate);
  const endDate = moment(data?.endDate);
  const nights = endDate.diff(startDate, "days");

  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-3  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="text-md font-bold">
            {startDate.format("DD MMMM YYYY")} -{" "}
            {endDate.format("DD MMMM YYYY")}
          </h1>
          <p className="text-sm font-bold">{nights} night</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h1 className="text-sm font-bold">{myQuery?.roomName}</h1>
          <button className="btn custom_green_color hover:custom_green_color text-light">
            Change
          </button>
        </div>
        <div className="border-b pb-2">
          <StarCounting length={5} style={{ color: "#FFC107" }} />
          <h1 className="text-md ">Excellent cleanliness</h1>
        </div>
        <div className="row mt-2 border-b pb-2">
          <div className="col-md-6">
            <img
              src={myQuery.roomImage}
              alt=""
              style={{ width: "100%", height: "100%" }}
              className="rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="mt-2">
              <CheckMark text="Breakfast" className="ml-2" color="#22C55E" />
              <CheckMark text="Free Wifi" className="ml-2" color="#22C55E" />
              <CheckMark
                text="Welcome drink"
                className="ml-2"
                color="#22C55E"
              />
              <CheckMark text="Free WiFi" className="ml-2" color="#22C55E" />
              <CheckMark
                text="Free pool access"
                className="ml-2"
                color="#22C55E"
              />
              <CheckMark
                text="Free fitness center access"
                className="ml-2"
                color="#22C55E"
              />
            </div>
          </div>
        </div>
        <h1 className="text-blue-500 underline text-sm mt-2">
          Special Conditions
        </h1>
      </div>
    </div>
  );
};

export default RoomInfo;
