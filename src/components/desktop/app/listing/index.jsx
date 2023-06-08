import React from "react";
import Filter from "./filter";
import RightSiede from "./RightSiede";
import { useState } from "react";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";
import RightSiedeMobile from "./RightSiedeMobile";
import Maps from "../../core/Maps";

const index = ({ hotelData, lat, lng, address, queryData }) => {
  const [checked, setCheked] = useState(false);
  const resulation = screenSize("600px");
  const resulation2 = screenSize("1300px");
  const [mapMarks, setMapMarks] = useState([]);
  const centere = { lat: lat, lng: lng }
  const mapsMark = [];
  for (let i = 0; i < hotelData?.length; i++) {
    const mark = {
      lat: hotelData[i]?.mapUrl?.lat,
      lng: hotelData[i]?.mapUrl?.lng,
    };
    mapsMark.push(mark);
  }

  console.log({ mapMarks });

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className={`${resulation ? "hidden" : "col-md-2 border-r"}`}>
            <Filter setCheked={setCheked} checked={checked} />
          </div>
          <div className={checked ? "col-md-4 border-r" : "col-md-10"}>
            {resulation ? (
              <RightSiedeMobile
                checked={checked}
                hotelData={hotelData}
                lat={lat}
                lng={lng}
              />
            ) : (
              <RightSiede
                checked={checked}
                hotelData={hotelData}
                lat={lat}
                lng={lng}
                address={address}
                queryData={queryData}
              />
            )}
            {/* <RightSiede checked={checked} hotelData={hotelData} searchId={searchId} /> */}
            
          </div>
          {checked && (
            <div className="col-md-5">
              <Maps stores={mapsMark} centere={centere} width={"50%"} height={"100%"}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
