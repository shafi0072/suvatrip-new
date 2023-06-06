import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

const data = [
  {
    name: "24/7 support",
    icon: <SupportAgentIcon fontSize="large" className="text-green-500" />,
  },
  {
    name: "Car parking",
    icon: (
      <DirectionsCarFilledIcon fontSize="large" className="text-blue-500" />
    ),
  },
  {
    name: "Free WIFI",
    icon: <WifiSharpIcon fontSize="large" className="text-red-500" />,
  },
  {
    name: "Hot tub",
    icon: <BathtubOutlinedIcon fontSize="large" className="text-red-500" />,
  },
];

const Amminities = () => {
  return (
    <div id="Amenities">
      <h1 className="text-xl font-bold">Best Faclities</h1>
      <div className="row mt-3 mb-2">
        {data?.map((items) => (
          <div className="col-md-3 text-center mb-2">
            <div>{items?.icon}</div>
            <div className="text-md font-bold">{items?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amminities;
