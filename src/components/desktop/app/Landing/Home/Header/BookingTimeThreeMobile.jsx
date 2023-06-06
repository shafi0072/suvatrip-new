import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import moment from "moment";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import DateModal from "@/src/components/desktop/core/modal/DateModal";
import AddGuest from "@/src/components/desktop/core/modal/AddGuest";
import LocationSearch from "@/src/components/desktop/core/modal/LocationSearc";
import { useRouter } from "next/router";

import AdddGuest from "./Core/AdddGuest";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Dates from "./Core/Date";

const BookingTimeThreeMobile = () => {
  const router = useRouter();
  const [value, setValue] = useState([null, null]);
  const [dateSelected, setSelected] = useState(false);

  const resulation = screenSize("600px");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleOpen2 = (e) => {
    e.preventDefault();
    setOpen2(true);
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const startDate = moment(value[0]?.$d).format("Do MMMM YYYY");
  const endDate = moment(value[1]?.$d).format("Do MMMM YYYY");
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDateChange = (e) => {
    setValue(e);
  };

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [age, setAge] = useState(3);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className={`mb-2 ${show ? "is-visible" : ""}`}>
      <div className="d-flex justify-content-center">
        <div
          className="row d-flex flex-column bookingTimeBackgroundd rounded-2 justify-content-center align-items-center px-2 py-3 shadow-xl"
          style={{ width: "100%" }}
        >
          <div
            className="row"
            onClick={(e) => {
              e.preventDefault();
              setOpen3(true);
            }}
          >
            <div className={`col-md-12 rounded-2 bookingTimeBackgroundd mb-1`}>
              <button
                className={`text-start px-1 py-1 d-flex align-items-center ${
                  screenSize("600px") ? "text-sm text-center" : ""
                } `}
              >
                {" "}
                <img
                  src="/images/18-location-pin-outline (1).gif"
                  alt=""
                  className="w-10"
                />{" "}
                {location ? location : "Search Your Destination"}{" "}
              </button>
            </div>
          </div>

          <div className="row">
            <div className={`col-md-5 `}>
              <Dates
                value={value}
                setValue={setValue}
                handleDateChange={handleDateChange}
                rooms={rooms}
                age={age}
              />
            </div>
            <div className="col-md-1"></div>
            <AdddGuest
              adults={adults}
              children={children}
              rooms={rooms}
              setRooms={setRooms}
              setAdults={setAdults}
              setChildren={setChildren}
              age={age}
              setAge={setAge}
            />
          </div>

          <div className="row">
            <button
              onClick={() => {
                location
                  ? router.push(`/hotelList/${location}`)
                  : setValidationError("you haven't set the location");
              }}
              className={`text-center mt-3 px-1 py-1 uppercase pointer-cursor ${
                screenSize("600px") ? "text-xs text-center" : ""
              } custom_red_color hover:bg-red-600 text-light rounded-2 d-flex align-items-center justify-content-center`}
            >
              {" "}
              <img
                src="/images/19-magnifier-zoom-search-outline.gif"
                alt=""
                className="w-10"
              />{" "}
              search
            </button>
          </div>
          {validationError && !location && (
            <p
              className="text-center text-danger p-2 my-2 rounded-2"
              style={{ background: "#ffffffb5" }}
            >
              {validationError}
            </p>
          )}
        </div>
      </div>

      <LocationSearch
        open={open3}
        setLocation={setLocation}
        handleClose={handleClose3}
        location={location}
      />
    </div>
  );
};

export default BookingTimeThreeMobile;
