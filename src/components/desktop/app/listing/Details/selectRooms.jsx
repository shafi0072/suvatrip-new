import React from "react";
import LefSide from "./rooms/LefSide";
import RightSide from "./rooms/RightSide";
const SelectRooms = ({ hotelDetails, bookingQuery }) => {
  return (
    <div id="rooms">
      <h1 className="text-md font-bold">Select Room</h1>
      {hotelDetails?.rooms?.map((roomDetails, index) => (
        <div className="row mt-3 border-2 border-red-500 py-3 rounded mb-3">
          <div className="col-md-2 border-r">
            <LefSide hotelDetails={roomDetails} />
          </div>
          <div className="col-md-10">
            {roomDetails?.priceCategory?.map((item, index) => (
              <div className="">
                <RightSide
                  bookingQuery={bookingQuery}
                  item={item}
                  roomDetails={roomDetails}
                  hotelDetails={hotelDetails}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectRooms;
