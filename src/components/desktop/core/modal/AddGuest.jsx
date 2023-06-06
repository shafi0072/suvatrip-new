import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import screenSize from "../lib/MediaQuery/ScreenSize";

const AddGuest = ({ open, handleClose }) => {
  const resulation = screenSize("600px");
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: resulation ? "90%" : "20%",
    bgcolor: "#ffffff50",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const router = useRouter();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [age, setAge] = useState(3);
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="d-flex justify-content-between py-3 mb-3 align-items-center border-b-2 border-gray-200">
            <h3 className="text-xl text-light">Adults</h3>
            <div className="d-flex justify-content-evenly align-items-center">
              <button
                className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                onClick={() => {
                  adults > 0 ? setAdults(adults - 1) : setAdults(0);
                }}
              >
                {" "}
                -{" "}
              </button>
              <div className="mx-2 text-light"> {adults} </div>
              <button
                className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                onClick={() => {
                  adults !== 10 ? setAdults(adults + 1) : setAdults(10);
                }}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
          <div
            className={`d-flex justify-content-between py-3 mb-3 align-items-center ${
              children === 0 && "border-b-2"
            } border-gray-200`}
          >
            <div>
              <h3 className="text-xl text-light">Children</h3>
              <small className="text-gray-200 ">Ages 0 - 17</small>
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="d-flex justify-content-evenly align-items-center">
                <button
                  className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                  onClick={() => {
                    children > 0 ? setChildren(children - 1) : setChildren(0);
                  }}
                >
                  {" "}
                  -{" "}
                </button>
                <div className="mx-2 text-light"> {children} </div>
                <button
                  className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                  onClick={() => {
                    children !== 5 ? setChildren(children + 1) : setChildren(5);
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          {Array.from({ length: children }, (_, index) => (
            <div className="d-flex justify-content-between py-3 mb-3 align-items-center border-b-2 border-gray-200">
              <div>
                <h3 className="text-md text-light">Children Age {index + 1}</h3>
                <small className="text-gray-400 "></small>
              </div>
              <div className="w-20">
                <select class="appearance-none  w-full text-center rounded-4 bg-sky-500 text-light">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between py-3 mb-3 align-items-center border-b-2 border-gray-200">
            <h3 className="text-xl text-light">Rooms</h3>
            <div className="d-flex justify-content-evenly align-items-center">
              <button
                className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                onClick={() => {
                  rooms > 0 ? setRooms(rooms - 1) : setRooms(0);
                }}
              >
                {" "}
                -{" "}
              </button>
              <div className="mx-2 text-light"> {rooms} </div>
              <button
                className="text-xl btn bg-sky-500 hover:bg-sky-600 text-light"
                onClick={() => {
                  rooms !== 4 ? setRooms(rooms + 1) : setRooms(4);
                }}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className=" btn bg-sky-500 hover:bg-sky-600 text-light"
              onClick={() => {
                router.push("/hotelList");
                handleClose();
              }}
            >
              <SearchIcon />
              Search
            </button>
            <button
              className="ml-2 btn bg-sky-500 hover:bg-sky-600 text-light"
              onClick={() => {
                setAdults(0);
                setRooms(0);
                setChildren(0);
              }}
            >
              Reset
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddGuest;
