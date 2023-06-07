import React, { useEffect } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import NetworkWifiOutlinedIcon from "@mui/icons-material/NetworkWifiOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import UnfoldMoreDoubleOutlinedIcon from "@mui/icons-material/UnfoldMoreDoubleOutlined";
import { all_cat } from "@/src/constant/Listing/AllCategroy";
import ImageModal from "../../core/modal/listingModal/imageModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import BookingTwo from "../Landing/Home/Header/bookingTimeTwo";
import Maps from "../../core/Maps";
import { useRouter } from "next/router";
import { baseUrl } from "@/src/config/serverConfig";
import Checkmark from "../../core/lib/checkMark/Checkmark";
import screenSize from "../../core/lib/MediaQuery/ScreenSize";

const RightSiede = ({ checked, hotelData, lat, lng, address, queryData }) => {
  const router = useRouter();
  const resulationMd = screenSize("1400px");
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  const [blur, setBlur] = useState(false);
  const [id, setId] = useState(0);
  const [imagesData, setImagesData] = useState([]);
  const [mapMarks, setMapMarks] = useState([]);
  const handleOpen = (index, img) => {
    setIsOpenImageModal(true);
    setId(index);
    setImagesData(img);
  };
  const handleClose = () => setIsOpenImageModal(false);

  useEffect(() => {
    setBlur(true);
    setTimeout(() => {
      setBlur(false);
    }, 1000);
  }, []);

  const mapsMark = [{ lat: lat, lng: lng }];
  for (let i = 0; i < hotelData?.length; i++) {
    const mark = {
      lat: hotelData[i]?.mapUrl?.lat,
      lng: hotelData[i]?.mapUrl?.lng,
    };
    mapsMark.push(mark);
  }

  console.log({ mapMarks });

  return (
    <div className="mb-3 mt-2">
      {!checked && <div className="d-flex justify-content-start">
        <div className={resulationMd ? "listRithTopMid" : "listRithTop"}>
          <h1 className="text2xl font-bold uppercase mb-2">
            {address}: {hotelData?.length} place Founded
          </h1>
          <BookingTwo noContainer={true} bg={"custom_red_color"} />
          {/* <div>
            <ul
              className="border border-gray-300 d-flex justify-content-between custom_green_color">
              <li className="custom_green_color px-5 py-3 border-r-2">
                <h1 className="text-md text-light">Sort</h1>
              </li>
              <li className="custom_green_color">
                <h1 className="text-md text-light pr-5 py-3  border-r-2">Best Matches</h1>
              </li>
              <li className="custom_green_color">
                <h1 className="text-md text-light pr-5 py-3 border-r-2">Top Reviewed</h1>
              </li>
              <li className="custom_green_color">
                <h1 className="text-md text-light pr-5 py-3  border-r-2">Lowest price first</h1>
              </li>
              <li className="custom_green_color">
                <h1 className="text-md text-light pr-5 py-3 border-r-2">Distance</h1>
              </li>
              <li className="custom_green_color">
                <h1 className="text-md text-light pr-5 py-3 ">Hot Deals!</h1>
              </li>

            </ul>
          </div> */}
        </div>
      </div>}

      {!checked && hotelData?.length > 0 ? (
        hotelData
          ?.sort((a, b) => a.bookings?.length - b?.bookings?.length)
          ?.map((items, index) => (
            <>
              <div className="d-flex justify-content-start">
                <div
                  className={
                    resulationMd
                      ? "shadow-lg mt-4 hoverPanelMid relative d-flex border border-gray-200 rounded-2"
                      : "mt-4 hoverPanel shadow-lg relative d-flex border border-gray-200 rounded-2"
                  }
                >
                  <div
                    className="relative p-2 w-80 border-r"
                    onClick={() => handleOpen(index, items?.images)}
                  >
                    <img
                      src={items?.images[0]}
                      alt=""
                      style={{
                        maxWidth: "400px",
                        height: "140px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      className={`${blur ? "blur-lg rounded-2" : "rounded-2"}`}
                    />{" "}
                    {
                      <div
                        className="bg-sky-600 absolute top-2 px-3 py-1"
                        style={{
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        <h1 className=" font-bold text-light">
                          Breakfast Included
                        </h1>
                      </div>
                    }
                    {items?.images?.length > 1 && (
                      <div
                        className="ml-1 d-flex mt-3 border-t-2 pt-2"
                        style={{
                          width: "100%",
                          height: "45px",
                          padding: "0px",
                          margin: "0px",
                        }}
                      >
                        {items?.images[1] && (
                          <img
                            src={items?.images[1]}
                            alt=""
                            style={{
                              width: "100%",
                              height: "40px",
                            }}
                            className="rounded-2 "
                          />
                        )}
                        {items?.images[2] && (
                          <img
                            src={items?.images[2]}
                            alt=""
                            style={{
                              width: "100%",
                              height: "40px",
                            }}
                            className="rounded-2 rounded-2 ml-2 "
                          />
                        )}
                        <>
                          {items?.images?.length <= 3 ? (
                            <img
                              src={items?.images[3]}
                              alt=""
                              style={{ width: "100%", height: "40px" }}
                              className="rounded-2 ml-2"
                            />
                          ) : (
                            <div
                              className="rounded-2 ml-2 d-flex align-items-center justify-content-center"
                              style={{
                                width: "100%",
                                height: "40px",
                                backgroundImage: `linear-gradient(rgb(0 0 0 / 49%), rgb(0 0 0 / 69%)), url(${items?.images[0]})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                              }}
                            >
                              <h1 className="text-center my-auto text-light font-bold">
                                See all
                              </h1>
                            </div>
                          )}
                        </>
                      </div>
                    )}
                  </div>
                  <div
                    className="row  "
                    onClick={(e) => {
                      e.preventDefault();
                      router.push({
                        pathname: `/hotelList/HotelDetails/${items._id}`,
                        query: {
                          adults: queryData?.adults,
                          rooms: queryData?.rooms,
                          children: queryData?.children,
                          age: queryData?.age,
                          checkIn: queryData?.checkIn,
                          checkOut: queryData?.checkOut,
                        },
                      });
                    }}
                    style={{ width: "100%" }}
                  >
                    <div className="col-md-6  my-3 mx-4 ">
                      <div className="">
                        <h1 className="text-xl font-bold uppercase">
                          {items?.NameOfProperty}
                        </h1>
                        <div className="d-flex align-items-center ">
                          {Array.from(
                            {
                              length: 3,
                            },
                            (_, index) => (
                              <StarRateIcon
                                sx={{
                                  fontSize: "20px",
                                  color: "goldenrod",
                                }}
                              />
                            )
                          )}
                          <span className=" hover:text-blue-800 text-center cursor-pointer">
                            <LocationOnIcon className="ml-3  text-blue-800" />{" "}
                            <span className="text-blue-800 hover:border-blue-800 hover:border-b ">
                              {items?.City}, {items?.Country}
                            </span>
                          </span>
                          {items?.fetured && (
                            <span className="mx-3 px-3  bg-primary text-light rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        {/* <button className="custom_green_color text-light px-2 py-1 rounded-full mt-3">
                          Free Cancellation Till 14 Aug 22
                        </button> */}
                        <div className="faselity mt-3">
                          <span className="">
                            <DirectionsCarFilledOutlinedIcon
                              fontSize="medium"
                              className="text-red-500"
                            />
                            Parking Facility
                          </span>
                          <span className="ml-2">
                            <WifiOutlinedIcon
                              fontSize="medium"
                              className="text-sky-500"
                            />
                            Free WiFI
                          </span>
                          <span className="ml-2">
                            <BoltIcon
                              fontSize="medium"
                              className="text-yellow-500"
                            />
                            Geyser
                          </span>
                        </div>
                        <div className="faselity mt-3">
                          <span className="">
                            <FitnessCenterIcon
                              fontSize="medium"
                              className="text-orange-500"
                            />
                            Gym
                          </span>
                          <span className="ml-2">
                            <Diversity3OutlinedIcon
                              fontSize="medium"
                              className="text-sky-500"
                            />
                            Family Room
                          </span>
                          <span className="ml-2">
                            <UnfoldMoreDoubleOutlinedIcon
                              fontSize="medium"
                              className="text-gray-500"
                            />
                            6 More
                          </span>
                        </div>
                      </div>
                      <div className="row mt-3">
                        {items.Amenities?.map((item, index) => (
                          <div className="col-md-6 mt-2">
                            <Checkmark
                              text={item}
                              className="ml-2"
                              color="green"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="d-flex justify-content-end">
                        <button className="btn bg-sky-500 mt-3 mr-1 hover:bg-sky-600 text-light ml-5">
                          79% off{" "}
                        </button>
                      </div>
                      <h1 className="mt-3 text-end mr-1">
                        <StarRateIcon
                          fontSize="small"
                          sx={{
                            color: "goldenrod",
                          }}
                        />{" "}
                        4.8 Rating
                      </h1>
                      <h1 className="text-xl  font-bold text-end mr-1 mt-3">
                        RS 168
                      </h1>

                      <div className="d-flex justify-content-end">
                        <button
                          className="btn  custom_red_color  text-light mt-3 hover:bg-gray-700"
                          onClick={(e) => {
                            e.preventDefault();
                            router.push({
                              pathname: `/hotelList/HotelDetails/${items._id}`,
                              query: {
                                adults: queryData?.adults,
                                rooms: queryData?.rooms,
                                children: queryData?.children,
                                age: queryData?.age,
                                checkIn: queryData?.checkIn,
                                checkOut: queryData?.checkOut,
                              },
                            });
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
      ) : checked && hotelData?.length > 0 ? (hotelData
        ?.sort((a, b) => a.bookings?.length - b?.bookings?.length)
        ?.map((items, index) => (
          <div className="border-b py-2 mt-2 hoverForMapViewHotels" onClick={(e) => {
            e.preventDefault();
            router.push({
              pathname: `/hotelList/HotelDetails/${items._id}`,
              query: {
                adults: queryData?.adults,
                rooms: queryData?.rooms,
                children: queryData?.children,
                age: queryData?.age,
                checkIn: queryData?.checkIn,
                checkOut: queryData?.checkOut,
              },
            });
          }}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={items?.images[0]}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "100px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  className={`ml-2 mt-3 ${blur ? "blur-lg rounded-2" : "rounded-2"}`}
                />
              </div>
              <div className="col-md-8">
                <h1 className="text-md font-bold">{items?.NameOfProperty}</h1>
                <p className="text-sm text-blue-500 underline">{items?.StreetAddress},{items?.City}, {items?.Country}</p>

                <div class="flex items-center mt-2">
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                </div>

                <div className="mt-2">
                  <span className="text-md font-bold text-red-600">RS-{items?.rooms[0]?.priceCategory[0]?.Per_Night}</span>
                  <del className="ml-2 text-md  text-gray-600 ">RS-{items?.rooms[0]?.priceCategory[0]?.Per_Night}</del>
                  <span className="ml-2 text-md text-orange-600">{items?.rooms[0]?.priceCategory[0]?.discount} % off</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-gray-600">Per Night Cost</span>

                </div>
              </div>
            </div>
          </div>
        ))) : (
        <div>
          <div className="d-flex justify-content-center mt-3">
            <img
              src="https://images.squarespace-cdn.com/content/v1/58a638fc86e6c053fad43a35/1565237446840-2VRK31RPZ4P4ES8MJJRL/Sad_Kiwi.gif"
              alt=""
              className="w-48"
            />
          </div>
          <h1 className="text-xl font-bold text-center">
            Not Found in this area
          </h1>
        </div>
      )}
      <ImageModal
        open={isOpenImageModal}
        handleClose={handleClose}
        data={all_cat[id]}
        imagesData={imagesData}
      />
    </div>
  );
};

export default RightSiede;
