import Checkmark from "@/src/components/desktop/core/lib/checkMark/Checkmark";
import React from "react";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
const LefSide = ({ hotelDetails }) => {

  return (
    <>
      <div className="d-flex justify-content-center">
      <img
        src={hotelDetails?.images[0]}
        alt=""
        className="rounded w-52"
        // style={{ width: "100%", height: "200px" }}
      />
      </div>
      <h1 className="text-md mt-3">{hotelDetails?.roomName} </h1>
      <div>
        {hotelDetails?.facelity?.map((items, index) => <Checkmark text={items} className="ml-2" color="#409300" />)}
        <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><BedOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">5 sofa beds & 1 queen bed <br /> and 1 futon</h1></div>
          <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><HomeOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">Room size: 28 m²/301 ft²</h1>
          </div>
          <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><DeckOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">Outdoor view</h1>
          </div>
          <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><BalconyOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">Balcony/terrace</h1>
          </div>
          <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><BathtubOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">Shower and bathtub</h1>
          </div>
          <div className="d-flex align-items-center mt-2"> <h1 className="text-md"><CountertopsOutlinedIcon /> </h1>
          <h1 className="text-sm ml-2">Kitchenette</h1>
          </div>
        <p className="text-blue-500 text-sm  cursor-pointer underline mt-3">
          More Details.
        </p>
      </div>
    </>
  );
};

export default LefSide;
