import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import Check from "@/src/components/desktop/core/lib/checkMark/Checkmark";

const Facilites = ({ hotelDetails }) => {
  return (
    <div id="Amenities">
      <h1 className="text-md font-bold">Amenities</h1>
      <div className="row mt-3 mb-2">
        {hotelDetails?.Amenities?.map((items) => (
          <div className="col-md-3 text-center mb-2">
            <Check text={items} className="ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilites;
