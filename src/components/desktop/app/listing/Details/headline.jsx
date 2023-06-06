import React from "react";
import StarCounting from "../../../core/lib/startCounting";
import ViewOnMap from "../../../core/lib/viewGoogleMap";
const Headline = ({ hotelDetails }) => {
  return (
    <div className="d-flex justify-content-between ">
      <div className=" ">
        <span className="text-2xl font-bold">
          {hotelDetails?.NameOfProperty}{" "}
          <span className="">
            <StarCounting
              length={3}
              style={{ fontSize: "20px", color: "goldenrod" }}
            />
          </span>
        </span>

        <br />
        <span className="text-sm font-none ">
          {hotelDetails?.StreetAddress}, {hotelDetails?.City},{" "}
          {hotelDetails?.Country}
        </span>
        <span className="text-sm text-blue-500 underline"> SEE MAP</span>
      </div>

      <ViewOnMap />
    </div>
  );
};

export default Headline;
