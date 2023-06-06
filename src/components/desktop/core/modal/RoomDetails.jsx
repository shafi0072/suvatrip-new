import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  cities,
  Search_location,
} from "@/src/constant/Searchlist/searchLocation";
import screenSize from "../lib/MediaQuery/ScreenSize";
import RoomsDetails from "../../app/Admin/RootAdmin/Components/Rooms/RoomsDetails";
import Setting from "@/src/components/desktop/app/Admin/RootAdmin/Components/Rooms/Setting";
import Checkmark from "@/src/components/desktop/core/lib/checkMark/Checkmark";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import RoomPrice from "@/src/components/desktop/core/modal/RoomPrice";
import { useCallback } from "react";
import { baseUrl } from "@/src/config/serverConfig";
import { useState } from "react";

const RoomDetails = ({ detailsData, open, handleClose, setIsListDetails }) => {
  const resulation = screenSize("600px");

  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: resulation ? "90%" : "70%",
    bgcolor: "#ffffff",
    height: "600px",
    overflow: "scroll",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
    "&::-webkit-scrollbar": {
      width: "0.0em",
    },
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  const [searchTerm, setSearchTerm] = React.useState("");
  const itemsPerPage = 10;

  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
  }, []);

  const [isPriceCalander, setIsPriceCalander] = useState(false);

  const [isNewPrice, setIsNewPrice] = useState(false);
  const [timeData, setTimeData] = useState([]);
  const [schedulePrice, setSchedulePrice] = useState("");
  const [scheduleDiscount, setScheduleDiscount] = useState("");
  const [data, setData] = useState({
    roomPriceTitle: "",
    parking: "",
    breakfast: "",
    sleep: "",
    Per_Night: "",
    discount: "",
    Pricefacelity: [],
  });

  const handlePropertyOnChange = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const handlePropertyOnChange2 = (e) => {
    let newData = { ...data };
    newData[e.target.name].push(e.target.value);
    setData(newData);
  };

  const closeNewPrice = () => setIsNewPrice(false);
  const [priceData, setPriceData] = useState({
    Pricefacelity: [],
  });

  const handleSubmit = useCallback(() => {
    fetch(
      `${baseUrl}/hotel/details/hotel/${detailsData?.priceCategory[0]?._id}/priceCategory`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceCategory: {
            roomPriceTitle: data?.roomPriceTitle,
            parking: data?.parking,
            breakfast: data?.breakfast,
            facelity: data?.Pricefacelity,
            sleep: data?.sleep,
            Per_Night: data?.Per_Night,
            discount: data?.discount && data?.discount,
            scheduleBasedPrice: {
              startDate: timeData[0],
              endDate: timeData[1],
              price: schedulePrice,
            },
          },
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        closeNewPrice();
      })
      .catch((err) => {});
  }, [detailsData, priceData]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <h1 className="text-md font-bold">Rooms Details</h1>

          <div className="row mt-3 border py-3 rounded-4 mb-3">
            <div className="col-md-3 border-r">
              <>
                <img
                  src={
                    detailsData?.images?.length > 0 && detailsData?.images[0]
                  }
                  alt=""
                  className="rounded-4"
                  style={{ width: "100%", height: "200px" }}
                />
                <h1 className="text-md mt-2 mb-2">{detailsData?.roomName}</h1>
                <div>
                  {detailsData?.facelity?.map((items, index) => (
                    <Checkmark text={items} className="ml-2" color="#409300" />
                  ))}
                </div>
              </>
            </div>
            <div className="col-md-9">
              {detailsData?.priceCategory?.map((item) => (
                <div className="mt-3">
                  <div>
                    <div className="row border-2 border-yellow-500 rounded-2 mx-2">
                      <div className="col-md-6 border-r">
                        <div className="bg-gray-700 w-full text-center text-light rounded-2 my-2">
                          <h1 className="text-xl">OPTIONS</h1>
                        </div>
                        <button className="btn font-bold text-md mb-2">
                          {item?.roomPriceTitle}
                        </button>
                        <div className="mt-2">
                          {item?.facelity?.map((items, index) => (
                            <Checkmark
                              text={items}
                              className="ml-2"
                              color="#409300"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="col-md-3 border-r">
                        <div className="bg-gray-700 w-full text-center text-light rounded-2 my-2">
                          <h1 className="text-xl">SLEEP</h1>
                        </div>
                        <div className="text-center py-4">
                          <SupervisorAccountOutlinedIcon
                            sx={{ fontSize: "50px" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="bg-gray-700 w-full text-center text-light rounded-2 my-2">
                          <h1 className="text-xl">PRICE</h1>
                        </div>
                        <h1 className="text-xl">Per Night</h1>
                        <button className="btn btn-danger mt-2">
                          {item?.discount}% Off
                        </button>
                        <h1 className="text-md text-gray-500 mt-2">
                          <s>710</s>
                        </h1>
                        <h1 className="text-md text-gray-800 mt-1 mb-2">
                          QAR {item.Per_Night}
                        </h1>
                      </div>
                      <div>
                        <Setting
                          roomId={detailsData?._id}
                          priceId={item?._id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2 d-flex justify-content-end">
                <button
                  className="btn custom_green_color text-light hover:bg-orange-700"
                  onClick={() => setIsNewPrice(true)}
                >
                  Add new price
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={() => setIsListDetails(false)}
            >
              Go Back
            </button>
          </div>
          <RoomPrice
            timeData={timeData}
            setTimeData={setTimeData}
            isPriceCalander={isPriceCalander}
            setIsPriceCalander={setIsPriceCalander}
            open={isNewPrice}
            handleClose={closeNewPrice}
            newPrice={true}
            handlePropertyOnChange={handlePropertyOnChange}
            handlePropertyOnChange2={handlePropertyOnChange2}
            handleSubmit={handleSubmit}
            schedulePrice={schedulePrice}
            setSchedulePrice={setSchedulePrice}
            scheduleDiscount={scheduleDiscount}
            setScheduleDiscount={setScheduleDiscount}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default RoomDetails;
