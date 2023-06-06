import React, { useState } from "react";
import Maps from "@/src/components/desktop/core/Maps";
import AutoLocation from "../../../Landing/Home/Header/AutoLocation";
import { GoogleMap } from "@react-google-maps/api";
const Location = ({ address, setAddress }) => {
  const [selected, setSelected] = useState(null);
  console.log({ selected });
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="text-center">
          <h1 className="text-md text-center font-bold my-3">
            Locate Your Hotel In Google Map
          </h1>

          <div style={{ width: "100%" }} className="bg-gray-200 rounded">
            <AutoLocation
              selected={selected}
              setSelected={setSelected}
              setAddress={setAddress}
            />
          </div>
        </div>
      </div>
      <div className="mt-3" style={{ width: "100%" }}>
        {/* <GoogleMap/> */}
        {/* <Maps stores={[{lat: selected?.lat, lng: selected?.lng}]}/> */}
      </div>
    </div>
  );
};

export default Location;
