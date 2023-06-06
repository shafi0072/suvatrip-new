import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StartCounting from "../../../core/lib/startCounting";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import screenSize from "../../../core/lib/MediaQuery/ScreenSize";

const HotelInfo = ({ myQuery }) => {
  const resulation = screenSize("600px");
  return (
    <div class="relative group mb-3">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7  bg-white ring-1 ring-gray-900/5 rounded-lg leading-none ">
        <div className="py-3 row">
          <div className="col-md-6">
            <img
              src={myQuery?.hotelImage}
              alt=""
              style={{ width: "100%", height: "100%" }}
              className="rounded"
            />
          </div>
          <div className="col-md-6">
            <button
              className={`${
                resulation
                  ? "btn custom_red_color hover:bg-red-600 text-light mt-2"
                  : "btn custom_red_color hover:bg-red-600 text-light"
              }`}
            >
              Easy Cancel
            </button>
            <h1 className="text-xl">{myQuery?.NameOfProperty}</h1>
            <StartCounting length={5} style={{ color: "#FFC107" }} />
            <h1 className="text-md text-gray-500 mt-2">
              {myQuery?.StreetAddress}, {myQuery?.City}, {myQuery?.Country}
            </h1>
            <h1 className="text-md font-bold mt-2 text-green-500">
              Excellent Location
            </h1>
            <h1 className="text-md text-red-500 mt-2 ">
              <ArrowForwardIcon /> What’s nearby?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
