import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
const AdddGuest = ({
  adults,
  children,
  rooms,
  setAdults,
  setRooms,
  setChildren,
}) => {
  const router = useRouter();

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const resulation = screenSize("600px");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${resulation ? "col-md-6" : "col-md-6 mt-3"}`}>
      <div className="-mt-4" style={{ width: "100%" }}>
        <div className="">
          <div className="row py-1 bookingTimeBackgroundd  rounded-2">
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={`text-start d-flex align-items-center px-3 py-1 ${
                screenSize("600px") ? "text-sm text-center" : ""
              }`}
            >
              {" "}
              <img
                src="/images/955-demand-outline.gif"
                alt=""
                className="w-12"
              />
              <p className="ml-2 font-bold flex items-center">
                {adults} {adults > 1 ? "Adults" : "Adult"}{" "}
                {children ? (
                  <span>
                    , {children > 0 && children}{" "}
                    {children > 1 ? "Children" : "Child"}
                  </span>
                ) : null}{" "}
                <span className="text-gray-500 text-sm text-center mx-1">
                  |
                </span>{" "}
                <span className="text-gray-500 text-sm text-center">
                  {rooms} {rooms > 1 ? "Rooms" : "Room"}
                </span>
              </p>
            </button>
          </div>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "white",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
                width: "20%",
                bgcolor: "white", // set menu width to 50%
              },
            }}
            transformOrigin={{ horizontal: "left", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          >
            <MenuItem>
              <ListItemText>
                <h3 className="text-md pr-4 font-bold">Adults</h3>
              </ListItemText>
              <Typography variant="body2" color="text.secondary">
                <div className="d-flex justify-content-evenly align-items-center">
                  <button
                    className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                    onClick={() => {
                      adults > 0 ? setAdults(adults - 1) : setAdults(0);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  >
                    <span>
                      <RemoveIcon fontSize="small" />
                    </span>
                  </button>
                  <div className="mx-2 "> {adults} </div>
                  <button
                    className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                    onClick={() => {
                      adults !== 10 ? setAdults(adults + 1) : setAdults(10);
                    }}
                    style={{ width: "20px", height: "20px" }}
                  >
                    <AddIcon fontSize="small" />
                  </button>
                </div>
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemText>
                <div className="pr-4">
                  <h3 className="text-md font-bold">Children</h3>
                  <small className="text-gray-400 text-sm">Ages 0 - 17</small>
                </div>
              </ListItemText>
              <Typography variant="body2" color="text.secondary">
                <div className="d-flex justify-content-evenly align-items-center">
                  <div className="d-flex justify-content-evenly align-items-center">
                    <button
                      className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                      onClick={() => {
                        children > 0
                          ? setChildren(children - 1)
                          : setChildren(0);
                      }}
                      style={{ width: "20px", height: "20px" }}
                    >
                      <span>
                        <RemoveIcon fontSize="small" />
                      </span>
                    </button>
                    <div className="mx-2 "> {children} </div>
                    <button
                      className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                      onClick={() => {
                        children !== 5
                          ? setChildren(children + 1)
                          : setChildren(5);
                      }}
                      style={{ width: "20px", height: "20px" }}
                    >
                      <AddIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </Typography>
            </MenuItem>

            {Array.from({ length: children }, (_, index) => (
              <MenuItem>
                <ListItemText>
                  <div>
                    <h3 className="text-md">Children Age {index + 1}</h3>
                    <small className="text-gray-400 "></small>
                  </div>
                </ListItemText>
                <Typography variant="body2" color="text.secondary">
                  <div className="w-20 d-flex justify-content-end">
                    <select
                      className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                      style={{ width: "30px", height: "25px" }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </Typography>
              </MenuItem>
            ))}

            <MenuItem>
              <ListItemText>
                <h3 className="text-md font-bold">Rooms</h3>
              </ListItemText>
              <Typography variant="body2" color="text.secondary">
                <div className="d-flex justify-content-evenly align-items-center">
                  <button
                    className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                    style={{ width: "20px", height: "20px" }}
                    onClick={() => {
                      rooms > 0 ? setRooms(rooms - 1) : setRooms(0);
                    }}
                  >
                    <span>
                      <RemoveIcon fontSize="small" />
                    </span>
                  </button>
                  <div className="mx-2"> {rooms} </div>
                  <button
                    className="text-smtext-center outline  outline-1 outline-offset-2 outline-sky-500 hover:bg-sky-600 text-sky-500  hover:text-gray-100  rounded-full"
                    style={{ width: "20px", height: "20px" }}
                    onClick={(e) => {
                      rooms !== 4 ? setRooms(rooms + 1) : setRooms(4);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </button>
                </div>
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AdddGuest;