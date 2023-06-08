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

const RightSiedeMedium = ({ checked, hotelData, lat, lng }) => {
  const router = useRouter();
  const resulationMd = screenSize("1400px");
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  const [blur, setBlur] = useState(false);
  const [id, setId] = useState(0);
  const [imagesData, setImagesData] = useState([]);
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

  return (
    <div className="mb-3 mt-2">
      <div className="d-flex justify-content-start">
        <div className={resulationMd ? "listRithTopMid" : "listRithTop"}>
          <h1 className="text2xl font-bold uppercase mb-2">
            {lat}: {hotelData?.length} Results found
          </h1>
          <BookingTwo noContainer={true} bg={"custom_red_color"} />
          <div className="d-flex mt-3">
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 border-r-2 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Sort
            </div>
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 border-r-2 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Best Matches
            </div>
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 border-r-2 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Top Reviewed
            </div>
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 border-r-2 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Lowest price first
            </div>
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 border-r-2 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Distance
            </div>
            <div
              className="d-flex justify-center items-center custom_orange_color px-1 py-1 text-center text-md text-light"
              style={{ width: "16.66%" }}
            >
              Hot Deals!
            </div>
          </div>
        </div>
      </div>
      {checked && (
        <div className="mt-3 ">
          <Maps />
        </div>
      )}
      {hotelData?.length > 0 ? (
        hotelData?.map((items, index) => (
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
                      height: "240px",
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
                    <div className="ml-1 d-flex mt-3 border-t-2 pt-2">
                      {items?.images[1] && (
                        <img
                          src={items?.images[1]}
                          alt=""
                          style={{
                            width: "100%",
                            height: "70px",
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
                            height: "70px",
                          }}
                          className="rounded-2 rounded-2 ml-2 "
                        />
                      )}
                      <>
                        {items?.images?.length <= 3 ? (
                          <img
                            src={items?.images[3]}
                            alt=""
                            style={{ width: "100%", height: "70px" }}
                            className="rounded-2 ml-2"
                          />
                        ) : (
                          <div
                            className="rounded-2 ml-2 d-flex align-items-center justify-content-center"
                            style={{
                              width: "100%",
                              height: "70px",
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
                    router.push(`/hotelList/HotelDetails/${items._id}`);
                  }}
                  style={{ width: "100%" }}
                >
                  <div className="col-md-6  my-3 mx-4 ">
                    <div className="border-b pb-3">
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
                      <button className="custom_orange_color text-light px-2 py-1 rounded-full mt-3">
                        Free Cancellation Till 14 Aug 22
                      </button>
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
                      QAR 168
                    </h1>

                    <div className="d-flex justify-content-end">
                      <button
                        className="btn  custom_red_color  text-light mt-3 hover:bg-gray-700"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/hotelList/HotelDetails/${items._id}`);
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
      ) : (
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

export default RightSiedeMedium;
