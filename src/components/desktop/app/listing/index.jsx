import React from "react";
import Filter from "./filter";
import RightSiede from "./RightSiede";
import { useState } from "react";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";
import RightSiedeMobile from "./RightSiedeMobile";

const index = ({ hotelData, lat, lng, address, queryData }) => {
  const [checked, setCheked] = useState(false);
  const resulation = screenSize("600px");
  const resulation2 = screenSize("1300px");

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className={`${resulation ? "hidden" : "col-md-2 border-r"}`}>
            <Filter setCheked={setCheked} checked={checked} />
          </div>
          <div className="col-md-10">
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
            {/* : resulation2 ? <RightSiedeMedium checked={checked} hotelData={hotelData} lat={lat} lng={lng} />  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
