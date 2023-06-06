import { baseUrl } from "@/src/config/serverConfig";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingTwo from "../../Landing/Home/Header/bookingTimeTwo";
import Amenities from "./Amenities";
import Headline from "./headline";
import ImageGalary from "./imageGalary";
import Navigation from "./navigation";
import OverView from "./overView";
import RatingsNReview from "./RatingsNReview";
import SelectRooms from "./selectRooms";
import Amminities from "./Amminities";
import Facilites from "./Facilites";
import RightReview from "./RightReview";
import Map from "@/src/components/desktop/core/Maps";
import VideoComponents from "./Video";
const index = ({ id, bookingQuery }) => {
  const [navigation, setNavigation] = useState("Overview");
  const [hotelDetails, setHotelDetails] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/hotel/details/hotel/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setHotelDetails(data))
      .catch((err) => {});
  }, [id, hotelDetails]);

  return (
    <div className="container">
      <div className="mt-2 custom_red_color py-3 rounded">
        <BookingTwo />
      </div>
      <div className="mt-2  w-full">
        <ImageGalary hotelDetails={hotelDetails} />
      </div>
      <div className="mt-2  w-full">
        <Navigation navigation={navigation} setNavigation={setNavigation} />
      </div>

      <div className="row ">
        <div className="col-md-9">
          <div
            style={{ border: "1px solid lightgray" }}
            className="px-3 py-3 rounded"
          >
            <div className="  w-full">
              <Headline hotelDetails={hotelDetails} />
            </div>

            <div id="#Overview" className="mt-2  w-full">
              <OverView hotelDetails={hotelDetails} />
            </div>
          </div>
          <div
            style={{ border: "1px solid lightgray" }}
            className="px-3 py-3 rounded mt-3"
          >
            <Amminities />
          </div>
          {/* <div
						style={{ border: '1px solid lightgray' }}
						className="px-3 py-3 rounded mt-3"
					>
						<Facilites hotelDetails={hotelDetails} />
					</div> */}
          {/* <div
						style={{ border: '1px solid lightgray' }}
						className="px-3 py-3 rounded mt-3"
					>
						<VideoComponents />
					</div> */}
        </div>
        <div className="col-md-3 ">
          {/* <div
						style={{ border: '1px solid lightgray' }}
						className="px-3 py-3 rounded"
					>
						<RightReview />
					</div> */}
          <div className=" rounded mt-3" style={{ width: "117%" }}>
            <Map
              stores={[
                {
                  lat: hotelDetails?.mapUrl?.lat,
                  lng: hotelDetails?.mapUrl?.lng,
                },
              ]}
              width="100%"
            />
          </div>
        </div>
      </div>
      <div id="#rooms" className="mt-3 container w-full">
        <SelectRooms hotelDetails={hotelDetails} bookingQuery={bookingQuery} />
      </div>

      {/* <div id="#Rating_Reviews" className="mt-3 mb-3 container w-full">
				<RatingsNReview hotelDetails={hotelDetails}/>
			</div> */}
    </div>
  );
};

export default index;
