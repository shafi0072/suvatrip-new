import Checkmark from "@/src/components/desktop/core/lib/checkMark/Checkmark";
import React, { useContext, useEffect } from "react";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserContent } from "@/src/store/AuthContent";
import { useCallback } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { baseUrl } from "@/src/config/serverConfig";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BedIcon from "@mui/icons-material/Bed";

const RightSide = ({ item, hotelDetails, roomDetails, bookingQuery }) => {
  const router = useRouter();
  const start = 1200;
  const current = 1200;
  const end = 1500;
  const { userInfo, setUserInfo } = useContext(UserContent);
  const [hotelInfo, setHotelInfo] = useState({});
  const [hotelDataBooking, setHotelDataBookings] = useState([]);
  const [letsGo, setLetsGo] = useState(false);

  function TimeChecker(time) {
    const dateStr = time;
    const unixTimestamp = Date.parse(dateStr); // divide by 1000 to convert to seconds
    return unixTimestamp;
  }

  useEffect(() => {
    fetch(`${baseUrl}/hotel/users/${userInfo?.user_id}/listed`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setHotelInfo(data))
      .catch((err) => {});
  }, [hotelInfo]);

  useEffect(() => {
    let hotelDataBookings = [];
    for (let i = 0; i < hotelDetails?.bookings?.length; i++) {
      // console.log(hotelDetails?.bookings[i]?.status === "upcoming")
      if (hotelDetails?.bookings[i]?.status === "upcoming") {
        hotelDataBookings?.push(hotelDetails?.bookings[i]);
      }
    }
    setHotelDataBookings(hotelDataBookings);
  }, [hotelDetails]);

  // console.log({hotelDetails})
  return (
    <div>
      <div className="row border-2 border-red-500 rounded mx-2">
        <div className="col-md-6 border-r-2 border-red-500">
          <div className="custom_red_color w-full text-center text-light rounded-2 my-2">
            <h1 className="text-xl">OPTIONS</h1>
          </div>
          <div>
            <h1 className="underline font-bold">Deluxe Double or Twin Room</h1>
            <p className="font-bold mt-2 text-red-500">
              Only{" "}
              {parseInt(roomDetails?.numberOfRooms) -
                parseInt(hotelDataBooking?.length)}{" "}
              rooms left on our site
            </p>

            <div className="block">
              <p>Choose your bed (if available)</p>
              <div>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {bookingQuery?.adults > 1 && (
                      <div>
                        <div className="">
                          <FormControlLabel
                            value="2 single beds"
                            control={<Radio />}
                            label="2 single beds"
                          />
                          <SingleBedIcon /> <SingleBedIcon />{" "}
                        </div>
                        <div className="">
                          {" "}
                          <FormControlLabel
                            value="1 large double bed"
                            control={<Radio />}
                            label="1 large double bed"
                          />
                          <BedIcon />
                        </div>
                      </div>
                    )}
                    {bookingQuery?.adults <= 1 && (
                      <div>
                        <div className="">
                          <FormControlLabel
                            checked
                            value="1 single beds"
                            control={<Radio />}
                            label="1 single beds"
                          />
                          <SingleBedIcon />{" "}
                        </div>
                      </div>
                    )}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <p className=" font-bold text-md ">{item?.roomPriceTitle}</p>
          <div className="mt-2">
            <p className=" font-bold text-sm ">Your price includes:</p>
            {item?.facelity?.map((items, index) => (
              <Checkmark
                text={items}
                className="ml-2 text-sm"
                color="#409300"
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 border-r-2 border-red-500 ">
          <div className="custom_red_color w-full text-center text-light rounded-2 mt-2">
            <h1 className="text-xl">SLEEP</h1>
          </div>
          <div className="text-center pt-4 d-flex justify-content-center">
            {Array.from({ length: item?.sleep }, (_, index) => (
              <img src="/images/21-avatar-flat.gif" className="w-12" alt="" />
            ))}
          </div>
          <p className="text-sm">
            maximum capacity for{" "}
            <span className="font-bold"> {item?.sleep}</span> peoples{" "}
          </p>
        </div>
        <div className="col-md-3">
          <div className="custom_red_color w-full text-center text-light rounded-2 my-2">
            <h1 className="text-xl">PRICE</h1>
          </div>
          <div className="d-flex justify-content-end">
            <div className="text-end">
              <h1 className="text-xl">Per Night</h1>
              {item?.discount && (
                <button className="btn btn-danger mt-2">
                  {item?.discount}% Off
                </button>
              )}
              <h1 className="text-md text-gray-500 mt-2">
                <s>710</s>
              </h1>
              {item.Per_Night && (
                <h1 className="text-md text-gray-800 mt-1">
                  RS {item.Per_Night}
                </h1>
              )}
              {item?.scheduleBasedPrice?.price &&
                parseInt(item?.scheduleBasedPrice?.startDate) / 1000 <=
                  TimeChecker(new Date(Date.now())) / 1000 &&
                parseInt(item?.scheduleBasedPrice?.endDate) / 1000 >=
                  TimeChecker(new Date(Date.now())) / 1000 && (
                  <h1 className="text-md text-gray-800 mt-1">
                    RS {item?.scheduleBasedPrice?.price}
                  </h1>
                )}

              {item?.scheduleBasedPrice?.price &&
                start <= current &&
                end >= current && (
                  <h1 className="text-md text-gray-800 mt-1 text-end">
                    RS 125
                  </h1>
                )}

              <Button
                disabled={hotelInfo?._id === hotelDetails?._id ? true : false}
                className="btn custom_green_color text-light hover:custom_green_color mt-2 mb-2 "
              >
                <Link
                  className=""
                  href={`/user/booking/[infos]?hotelId=${hotelDetails?._id}&NameOfProperty=${hotelDetails?.NameOfProperty}&category=${hotelDetails?.category}&StreetAddress=${hotelDetails?.StreetAddress}&City=${hotelDetails?.City}&Country=${hotelDetails?.Country}&priceCategory=${item?.roomPriceTitle}&priceId=${item?._id}&sleep=${item?.sleep}&perNight=${item?.Per_Night}&hotelImage=${hotelDetails?.images[0]}&roomImage=${roomDetails?.images[0]}&roomName=${roomDetails?.roomName}&roomId=${roomDetails?._id}&discount=${item?.discount}&tax=${hotelDetails?.taxInfo}&vat=${hotelDetails?.vatInfo}&currentLength=${hotelDetails?.bookings?.length}`}
                  as={`/user/booking/12345?hotelId=${hotelDetails?._id}&NameOfProperty=${hotelDetails?.NameOfProperty}&category=${hotelDetails?.category}&StreetAddress=${hotelDetails?.StreetAddress}&City=${hotelDetails?.City}&Country=${hotelDetails?.Country}&priceCategory=${item?.roomPriceTitle}&priceId=${item?._id}&sleep=${item?.sleep}&perNight=${item?.Per_Night}&hotelImage=${hotelDetails?.images[0]}&roomImage=${roomDetails?.images[0]}&roomName=${roomDetails?.roomName}&roomId=${roomDetails?._id}&discount=${item?.discount}&tax=${hotelDetails?.taxInfo}&vat=${hotelDetails?.vatInfo}&currentLength=${hotelDetails?.bookings?.length}`}
                >
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
