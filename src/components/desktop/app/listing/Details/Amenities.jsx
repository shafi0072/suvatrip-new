import React from "react";
import Checkmark from "../../../core/lib/checkMark/Checkmark";

const Amenities = () => {
  return (
    <div>
      <h1 className="text-md font-bold">Amenities</h1>
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4 mt-3">
              <Checkmark
                text={"Parking Facility"}
                className="ml-2"
                color="#409300"
              />
            </div>
            <div className="col-md-4 mt-3">
              <Checkmark
                text={"Fitness Center"}
                className="ml-2"
                color="#409300"
              />
            </div>
            <div className="col-md-4 mt-3">
              <Checkmark text={"Free Wifi"} className="ml-2" color="#409300" />
            </div>
            <div className="col-md-4 mt-3">
              <Checkmark text={"Free Wifi"} className="ml-2" color="#409300" />
            </div>
            <div className="col-md-4 mt-3">
              <Checkmark text={"Famiy Room"} className="ml-2" color="#409300" />
            </div>

            <div className="col-md-4 mt-3">
              <Checkmark text={"Geyser"} className="ml-2" color="#409300" />
            </div>
          </div>
          <span className="text-danger font-bold cursor-pointer underline">
            Show More.
          </span>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Amenities;
