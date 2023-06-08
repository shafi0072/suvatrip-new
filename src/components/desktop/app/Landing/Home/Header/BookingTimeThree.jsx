import React, { useEffect, useState } from "react";
import moment from "moment";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import DateModal from "@/src/components/desktop/core/modal/DateModal";
import AddGuest from "@/src/components/desktop/core/modal/AddGuest";
import LocationSearch from "@/src/components/desktop/core/modal/LocationSearc";
import { useRouter } from "next/router";
import AdddGuest from "./Core/AdddGuest";
import Dates from "./Core/Date";
import AutoLocation from "./AutoLocation";

const BookingTimeThree = () => {
  const router = useRouter();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [value, setValue] = useState([today.getTime(), tomorrow.getTime()]);
  const [dateSelected, setSelected] = useState(false);
  const [selected, setSelected2] = useState(null);
  const resulation = screenSize("600px");
  const resulation2 = screenSize("1300px");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const startDate = moment(value[0]).format("D MMMM YYYY");
  const endDate = moment(value[1]).format("D MMMM YYYY");
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [address, setAddress] = useState("");
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

  const handleSearch = () => {
    if (!selected) {
      setValidationError("You haven't set the location");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      router.push({
        pathname: `/hotelList`,
        query: {
          ...selected,
          address: address,
          adults: adults,
          rooms: rooms,
          children: children,
          age: age,
          checkIn: startDate,
          checkOut: endDate,
        },
      });

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={`mb-5 ${show ? "is-visible" : ""}`}>
      <style>
        {`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin-right: 10px;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="d-flex justify-content-center">
        <div
          className="row flex-column bookingTimeBackgroundd rounded-2 justify-content-center align-items-center px-4 py-4 shadow-xl"
          style={{ width: "70%" }}
        >
          <div className="row">
            <div className={`col-md-12 rounded-2 bookingTimeBackgroundd`}>
              <AutoLocation
                selected={selected}
                setSelected={setSelected2}
                setAddress={setAddress}
              />
            </div>
          </div>

          <div className="row d-flex justify-between items-center">
            <div className={`col-md-6`}>
              <div className="" style={{ width: "97%" }}>
                <Dates
                  value={value}
                  setValue={setValue}
                  handleDateChange={handleDateChange}
                  rooms={rooms}
                  age={age}
                />
              </div>
            </div>
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
              onClick={handleSearch}
              className={`text-center px-3 py-3 uppercase pointer-cursor ${
                screenSize("600px") ? "text-xs text-center" : ""
              } custom_red_color hover:bg-red-600 hover:brightness-90 text-light rounded-2 flex items-center justify-center`}
            >
              {isLoading ? (
                <div className="loader w-20"></div>
              ) : (
                <>
                  <img
                    src="/images/19-magnifier-zoom-search-outline.gif"
                    alt=""
                    className="w-10 mr-4"
                  />

                  <div className="text-2xl font-black tracking-wider">
                    Search
                  </div>
                </>
              )}
            </button>
          </div>
          {validationError && !location && (
            <p
              className="text-center text-danger p-3 my-2 rounded-2"
              style={{ background: "#ffffffb5" }}
            >
              {validationError}
            </p>
          )}
        </div>
      </div>
      <DateModal
        open={open}
        handleClose={handleClose}
        value={value}
        setValue={setValue}
        setSelected={setSelected}
      />
      <AddGuest open={open2} handleClose={handleClose2} />
      <LocationSearch
        open={open3}
        setLocation={setLocation}
        handleClose={handleClose3}
        location={location}
      />
    </div>
  );
};

export default BookingTimeThree;