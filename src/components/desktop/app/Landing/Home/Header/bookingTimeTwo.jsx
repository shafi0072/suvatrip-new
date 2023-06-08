import React, { useEffect, useState } from "react";
import DateModal from "@/src/components/desktop/core/modal/DateModal";
import moment from "moment/moment";
import AddGuest from "@/src/components/desktop/core/modal/AddGuest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocationSearch from "@/src/components/desktop/core/modal/LocationSearc";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import AutoLocation from "./AutoLocation";
import Dates from "./Core/Date";
import AdddGuest from "./Core/AdddGuest";

const bookingTimeTwo = ({ noContainer, bg }) => {
  const today = new Date(); // Get today's date
  const tomorrow = new Date(today); // Copy today's date to a new object
  tomorrow.setDate(today.getDate() + 1); // Set the date to tomorrow

  const [value, setValue] = useState([null, null]);
  const [dateSelected, setSelected] = useState(false);
  const resulation = screenSize("600px");

  const [selected, setSelected2] = useState(null);
  const [address, setAddress] = useState("");

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
  const startDate = moment(value[0]?.$d).format("Do MMMM ");
  const endDate = moment(value[1]?.$d).format("Do MMMM YYYY");
  const [show, setShow] = useState(false);

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
    <div className={`fade-in ${show ? "is-visible" : ""}`}>
      <div className="d-flex justify-content-center  ">
        <div
          className={bg ? `${bg} rounded` : "bg-gray-200 rounded"}
          style={{ width: noContainer ? "100%" : "60%" }}
        >
          <form action="">
            <div className="row pr-3 pt-3">
              <div className="col-md-4">
                <div className="pl-2">
                  <div
                    className={`appearance-none w-full h-16 block bg-gray-100 text-gray-700 border-x-2 border-gray-300 rounded py-2 ${resulation ? "" : "d-flex justify-content-evenly"
                      } align-items-center mb-3 leading-tight focus:outline-none focus:bg-white`}
                    id="grid-first-name"
                    type="submit"
                  >
                    <AutoLocation
                      py={"py-1"}
                      selected={selected}
                      setSelected={setSelected2}
                      setAddress={setAddress}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pl-2 w-full">
                  <div
                    className={`appearance-none w-full block h-16 bg-gray-100 text-gray-700 border-x-2 border-gray-300 rounded py-3 ${resulation ? "" : "d-flex justify-content-evenly"
                      } align-items-center mb-3 leading-tight focus:outline-none focus:bg-white`}
                    style={{
                      fontSize: dateSelected ? "12px" : "16px",
                      height: dateSelected ? "55%" : "",
                    }}
                  >
                    <Dates
                      value={value}
                      setValue={setValue}
                      handleDateChange={handleDateChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="pl-2">
                  <div
                    className={`appearance-none w-full block h-16 bg-gray-100 text-gray-700 border-x-2 border-gray-300 rounded py-3 ${resulation ? "" : "d-flex justify-content-evenly"
                      } align-items-center mb-3 leading-tight focus:outline-none focus:bg-white`}
                    value={"+Add Guests"}
                  >
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
                </div>
              </div>
            </div>
          </form>
        </div>
        <DateModal
          open={open}
          handleClose={handleClose}
          value={value}
          setValue={setValue}
          setSelected={setSelected}
        />
        <AddGuest open={open2} handleClose={handleClose2} />
        <LocationSearch open={open3} handleClose={handleClose3} />
      </div>
    </div>
  );
};

export default bookingTimeTwo;
